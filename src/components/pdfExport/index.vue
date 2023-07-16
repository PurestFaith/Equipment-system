<!--
  预览PDF文件
-->
<template>
  <iframe :src="pageUrl" frameborder="0" style="width: 100%; height: 50vh"></iframe>
</template>

<script>
export default {
  props: {
    pageUrl: {
      // 嵌入页面URL
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
