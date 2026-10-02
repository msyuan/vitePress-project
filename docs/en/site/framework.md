---
pageClass: site-layout
---

<SiteList v-for="model in siteData" :key="model.title" :title="model.title" :data="model.items" />
<script setup>
// Data for the site navigation page
import siteData from "./data/framework.js";
</script>
