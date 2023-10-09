<template>
  <!-- 网址分类模块 -->
  <section class="site-section">
    <!-- 瞄点标题 -->
    <h2 class="title" :id="createTitle">
      {{ props.title }}
      <a class="anchor" :href="`#${createTitle}`" aria-hidden="true"></a>
    </h2>
    <!-- 网址列表 -->
    <ul class="list">
      <li class="item" v-for="(v, index) in props.data" :key="v.name">
        <a class="link" :href="v.link" target="_blank">
          <span class="num">{{ index + 1 }}</span>
          <h4 class="name">{{ v.name }}</h4>
          <p class="desc">{{ v.desc }}</p>
        </a>
      </li>
    </ul>
  </section>
  <BackTop></BackTop>
</template>
<script setup>
import { computed } from "vue";
import { slugify } from "@mdit-vue/shared";
const props = defineProps({
  title: String,
  data: {
    type: Array,
    default: [],
  },
});

// 生成markdown的目录
const createTitle = computed(() => {
  return slugify(props.title);
});
</script>
<style lang="scss" scoped>
/*单行文本省略号*/
@mixin single-ellipsis {
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.site-section {
  .title {
    color: #222;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    .item {
      width: 212px;
      margin: 15px 15px 0 0px;
      background: #fff;
      position: relative;
      .link {
        width: 210px;
        display: block;
        border: 1px solid #e3e3e3;
        padding-bottom: 8px;
        border-radius: 6px;
        .num {
          display: block;
          width: 24px;
          height: 18px;
          line-height: 18px;
          position: absolute;
          color: #666;
          font-size: 14px;
          text-align: center;
          right: 5px;
          top: 5px;
        }
        .name {
          width: 80%;
          height: 26px;
          padding-left: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #06a4fa;
          margin-top: 15px;
          @include single-ellipsis;
        }
        .desc {
          font-size: 12px;
          margin: 10px 10px 0;
          color: #b1b1b1;
          height: 36px;
          line-height: 18px;
          @include single-ellipsis;
        }
        &:hover {
          text-decoration: none;
          border: 1px solid var(--vp-c-brand);
          filter: brightness(1.15);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform: rotateY(-0.1deg) scale(1.001) translateZ(0);
          transition: all 0.24s ease;
          .name {
            color: var(--vp-c-brand);
          }
          .num {
            background: var(--vp-c-brand);
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
