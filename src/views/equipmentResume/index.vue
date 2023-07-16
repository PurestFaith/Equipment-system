<template>
  <Init>
    <div class="search ">
      <span>设备编号</span>
      <el-input v-model="number" placeholder="请输入设备编号"></el-input>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </div>

    <div class="matter">
      <div class="left">2</div>
      <div class="right">
        <el-descriptions class="margin-top" :column="3" :size="size" border>
          <el-descriptions-item label="设备名称">
            超声波切割机
          </el-descriptions-item>
          <el-descriptions-item label="设备编号">
            HAK0318482151
          </el-descriptions-item>
          <el-descriptions-item label="启用日期">
            2023-03-12
          </el-descriptions-item>
          <el-descriptions-item label="规格/型号">
            ZQ-91
          </el-descriptions-item>
          <el-descriptions-item label="购买方式">
            采购
          </el-descriptions-item>
          <el-descriptions-item label="使用部门">
            技术中心
          </el-descriptions-item>
          <el-descriptions-item label="出厂编号">
            0306002
          </el-descriptions-item>
          <el-descriptions-item label="使用年限（年）">
            0306002
          </el-descriptions-item>
          <el-descriptions-item label="报废日期">
            2025-03-12
          </el-descriptions-item>

          <el-descriptions-item label="责任人">
            张三
          </el-descriptions-item>

          <el-descriptions-item label="设备状态">
            <el-tag size="small" type="success">正常</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="使用状态">
            <el-tag size="small" type="warning">闲置</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>

    <div class="content">
      <el-tabs type="border-card">
        <el-tab-pane label="采购、验收">采购、验收</el-tab-pane>
        <el-tab-pane label="设备异动">

          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="设备领用/归还" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="设备移装" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="设备报废" name="third">角色管理</el-tab-pane>
          </el-tabs>

        </el-tab-pane>
        <el-tab-pane label="保养履历">保养履历</el-tab-pane>
        <el-tab-pane label="维修失效履历">维修失效履历</el-tab-pane>
      </el-tabs>
    </div>
  </Init>
</template>

<script>
export default {
  name: 'equipmentResume',
  data() {
    return {
      number: "",
      size: '',
      activeName: 'first'
    }
  },

  mounted() {
    const activeBarElement = document.getElementsByClassName('el-tabs__active-bar')[0]
    activeBarElement.style.width = '80px';

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() { }
  }
}
</script>

<style scoped lang='scss'>
.search {
  display: flex;
  align-items: center;
  width: 500px;
margin-bottom: 20px;
  span {
    // width: 70px;
    font-size: 14px;

  }

  .el-input {
    width: 200px;
    margin: 0 20px;
  }
}

.matter {
  display: flex;
  height: 170px;

  .left {
    width: 300px;
    background-color: yellowgreen;
  }

  .right {
    height: 180px;
  }
}

.content {
  margin-top: 25px;

  .el-tabs--border-card {
    box-shadow: none;
  }
}
</style>

