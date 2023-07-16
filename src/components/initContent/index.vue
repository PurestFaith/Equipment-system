<!-- 统一内容位置 -->
<template>
  <div :class="[color ? 'init' : 'init_gray']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: null
    }
  },
  methods: {},
  watch: {
    $route: {
      handler: function (to, from) {
        if (to.name == "dashboard" || to.name == "Maintainance") {
          this.color = false
        } else {
          this.color = true
        }
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>

<style scoped lang='scss'>
.init {
  /* calc用来进行数学计算，例如当我们设置内容高度时需要减去导航栏的高度，
     则可以使用calc(100vh - 导航栏高度)  即可刚好占满高度*/
  height: calc(100vh - 60px);
  padding: 12px 15px;
  background-color: #fff;
}

.init_gray {
  /* calc用来进行数学计算，例如当我们设置内容高度时需要减去导航栏的高度，
     则可以使用calc(100vh - 导航栏高度)  即可刚好占满高度*/
  height: calc(100vh - 60px);
  padding: 12px 15px;
  background-color: #f2f3f5;
}
</style>

