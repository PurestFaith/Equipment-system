<template>
  <!-- 分页 -->
  <div class="paginationPage">
    <!-- :hide-on-single-page="true" 只有一页时隐藏 -->
    <el-pagination background :page-size="10" layout=" prev, pager, next" :total="counts" small @current-change="handleCurrentChange"  :hide-on-single-page="true" />
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: {
    counts: {
      require: true
    }
  },
  data() {
    return {}
  },
  methods: {
    // 当页码发生改变，通知父组件
    handleCurrentChange(value) {
      this.$emit('changeCurrent', value)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep(.el-pagination__jump) {
  margin-left: 0px !important;
}
.el-pagination {
  margin-top: 20px;
}
.paginationPage {
  display: flex;
  justify-content: center;
}
::v-deep(.el-table .el-table__cell) {
  padding: 3px 0 !important;
}
</style>
