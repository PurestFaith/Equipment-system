<template>
  <div>
    <div v-if="application_Flag">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="item in data" :key="item.skillId" :prop="item.items" :label="item.username" :width="item.width" />
        <el-table-column label="流程状态" align="center" width="80px" :prop="data.ProcessStatus">
          <template #default="{ row }">
            <div :class="row.ProcessStatus === 0 ? 'error' : row.ProcessStatus === 1 ? 'green' : 'blue'">
              {{ row.ProcessStatus === 0 ? "待计划" : row.ProcessStatus === 1 ? "已完结" : "待评级" }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 计划页面 -->
    <div v-if="plane_Flag">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="item in data" :key="item.skillId" :prop="item.items" :label="item.username" :width="item.width" />
        <el-table-column label="流程状态" align="center" width="80px" :prop="data.ProcessStatus">
          <template #default="{ row }">
            <div :class="row.ProcessStatus === 0 ? 'error' : row.ProcessStatus === 1 ? 'green' : 'blue'">
              {{ row.ProcessStatus === 0 ? "待计划" : row.ProcessStatus === 1 ? "已完结" : "待评级" }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    },
    // 申请页面table开关
    application_Flag: {
      type: [Boolean, String],
      default: false
    },
    // 计划页面table开关
    plane_Flag: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
$width: 60px;
$height: 30px;
$fontsize: 13px;

.green {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  border: 1px solid yellowgreen;
  width: $width;
  height: $height;
  line-height: $height;
  text-align: center;
  border-radius: 15px;
  font-size: $fontsize;
}
.blue {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  border: 1px solid rgb(75, 160, 245);
  width: $width;
  height: $height;
  line-height: $height;
  text-align: center;
  border-radius: 15px;
  font-size: $fontsize;
}
.error {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  border: 1px solid rgb(235, 113, 113);
  width: $width;
  height: $height;
  line-height: $height;
  text-align: center;
  border-radius: 15px;
  font-size: $fontsize;
}
</style>
