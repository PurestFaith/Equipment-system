<!--
  FIXME: 整体架子(公司logo部分、侧边栏部分、顶部导航部分、主体部分)
 -->
<template>
  <div class="boxbox">
    <Tops class="topnav" />
    <div :class="classObj" class="app-wrapper">
      <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
      <!-- 侧边栏部分 -->
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <div :class="{ 'fixed-header': fixedHeader }">
          <!-- 顶部导航部分 -->
          <navbar />
        </div>
        <!-- 主体部分 -->
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, Tops } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Tops,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

::v-deep.sidebar-container .el-scrollbar {
  height: 100vh !important;
}

::v-deep.sidebar-container {
  position: absolute;
  top: 60px !important;
  left: 0;
}

.boxbox {
  position: relative;

  .topnav {
    // position: absolute;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000 !important;
    // margin-bottom: 20px !important;
  }
}

#app .sidebar-container {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  // width: 210px !important;
  background-color: #304156;
  // height: 100%;
  position: fixed;
  font-size: 0px;
  // top: 0px !important;
  bottom: 0;
  left: 0;
  // z-index: 999;
  overflow: hidden;
}

#app .main-container {
  // padding-top: 55px;
  position: relative;
}
</style>
