<template>
  <div :class="['back-top', showIcon ? 'back-top-show': '']">
    <div class="iconfont icon icon-fanhuidingbu2" @click="onScroll"></div>
  </div>
</template>
<script setup>
  import debounce from "lodash.debounce";
  import { ref, onMounted, onUnmounted } from "vue";
  import "../../../public/font/iconfont.css";
  function onScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  let showIcon = ref(false);
  function handleScroll () {
    let top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
    showIcon.value = top > 200;
  }
  onMounted(() => {
    window.addEventListener(
      "scroll",
      debounce(() => {
        handleScroll();
      }, 100),
    );
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  })

</script>
<style lang="scss">
:root {
  --back-to-top-z-index: 9999;
  --back-to-top-color: #ddd;
  --back-to-top-color-hover: var(--vp-c-brand);
}
.back-top {
  position: fixed;
  bottom: 200px;
  right: 30px;
  z-index: var(--back-to-top-z-index);
  transform: scale(0);
  opacity: 0;
  .icon {
    width: 60px;
    height: 60px;
    font-size: 50px;
    color: var(--back-to-top-color);
    vertical-align: middle;
  }
  .icon:hover {
    color: var(--back-to-top-color-hover);
    cursor: pointer;
    transition: all 0.2s ease-out 50ms;
  }
}
.back-top-show {
  transform: scale(1);
  opacity: 1;
  transition: all 0.2s ease-out 50ms;
}
</style>
