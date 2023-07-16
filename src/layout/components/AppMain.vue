<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import ResizeHandler from "../mixin/ResizeHandler";

export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
  // watch: {
  //   $route: {
  //     handler: function (to, from) {
  //       // console.log("Route changed from", to);
  //       if (to.name === "dashboard" || to.name === "Maintainance" || to.name === "HydropowerTranslation" || to.name === "Dashboard") {
  //         setTimeout(() => {
  //           let elements = document.getElementsByClassName("app-main");
  //           // 为每个元素添加背景色
  //           for (let i = 0; i < elements.length; i++) {
  //             elements[i].style.backgroundColor = "#f2f3f5";
  //           }
  //         }, 400);
  //       } else {
  //         let elements = document.getElementsByClassName("app-main");
  //         // 为每个元素添加背景色
  //         for (let i = 0; i < elements.length; i++) {
  //           elements[i].style.backgroundColor = "#fff";
  //         }
  //       }
  //     },
  //     deep: true,
  //     immediate: true, // 监听组件创建时的路由变化
  //   },
  // },
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 50px); */
  min-height: 91.5vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  /* z-index: -1; */
}

.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
