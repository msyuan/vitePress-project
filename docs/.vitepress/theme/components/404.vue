<!--
 * @Description: 自定义404页面样式和内容
 * @Author: laoyuan
 * @Date: 2025-02-22 17:20:22
-->
<template>
  <div class="not-found">
    <h1>404</h1>
    <p>哎呀，您访问的页面不存在！</p>
    <a href="/index.html" target="_self">返回首页</a>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 10vh;
}
h1 {
  font-size: 60px;
  font-weight: bold;
}
p {
  font-size: 16px;
  color: #666;
  padding: 30px 0;
}
a {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}
</style>