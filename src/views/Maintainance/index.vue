<template>
  <Init>
    <div class="title">
      <div>设备保养看板</div>
      <span>2023年，四车间，张三的制造加工类设备保养情况。</span>
    </div>
    <div class="overflow">
      <div class="content">
        <div class="item" v-for="(item, index) in matter" :key="index">
          <div class="matter">{{ item.title }}</div>
          <div class="num" :class="'num_color' + (index + 1)">{{ item.num }}</div>
        </div>
      </div>
    </div>

    <div class="table-container">
      <el-table :data="tableData1" :cell-style="cellStyle" border>
        <el-table-column v-for="(item, index) in data" :key="index" :prop="item.props" :label="item.username"
          width="250px" />
      </el-table>
    </div>


  </Init>
</template>

<script>
export default {
  name: "Maintainance",
  data() {
    return {
      matter: [
        { title: '累计延误天数', num: 100 },
        { title: '待保养项目', num: 2145 },
        { title: '已保养项目', num: 1240 },
      ],
      data: [
        { username: '设备编号', props: "date" },
        { username: '设备名称', props: "title" },
        { username: '地址', props: "address" },

      ],
      tableData1: [{
        date: '12331',
        title: '冰箱',
        name: '1025',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '23423',
        title: '大门',
        name: '952',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '54332',
        title: '戏水池',
        name: '1425',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '23413',
        title: '切割机',
        name: '3621',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '45432',
        title: '贴片机',
        name: '857',
        address: '上海市普陀区金沙江路 1516 弄'
      }]

    }
  },
  methods: {
    //设置单个单元格样式   行下标：rowIndex    列下标：columnIndex
    cellStyle({
      row,
      column,
      rowIndex,
      columnIndex
    }) {
      if (columnIndex == 1) {
        if (row.name == '1425') {
          return 'background-color:yellowgreen;'
        } else if (parseInt(row.name) > 1000) {
          return 'background-color: pink'
        } else {
          return 'background-color: yellow'
        }
      }
    },
  }

};
</script>

<style lang="scss" scoped>
/* 标题 */
.title {
  div {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 7px;
  }

  span {
    color: #888;
  }
}

/* echarts看板 */
.overflow {
  overflow: auto;

  .content {
    margin-top: 20px;
    height: 130px;
    // background-color: seashell;
    border-radius: 15px;
    display: flex;
    border-radius: 15px;
    width: 50%;




    .item {
      width: 100%;
      border-radius: 15px;
      background-color: #fff;
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;

      .matter {
        font-size: 15px;
        color: #888;
        padding: 20px 0 30px 0;
      }

      .num_color1,
      .num_color2,
      .num_color3 {
        font-size: 30px
      }

      .num_color1 {
        color: #bd3124;
      }

      .num_color2 {
        color: #fcca00
      }

      .num_color3 {
        color: #109210
      }
    }

    .item:nth-child(2) {
      margin: 0 15px;
    }
  }
}

.table-container {
  margin-top: 15px;
}
</style>
