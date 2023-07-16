<template>
  <Init>
    <div class="title">
      <div>设备状态分布看板</div>
      <span>当前所有部门的设备状态分布情况</span>
    </div>
    <div class="overflow">
      <div class="content">
        <div class="left">
          <div id="echarts">图表</div>
        </div>
        <div class="right">
          <div class="item" v-for="(item, index) in matter" :key="index">
            <div class="matter">{{ item.title }}</div>
            <div class="num" :class="'num_color' + (index + 1)">{{ item.num }}</div>
            <template v-if="index === 1">
              <div style="display: flex;margin-top: 15px;">
                <el-button class="green-border" plain>正常：2122</el-button>
                <el-button class="red-border" plain>异常：1312</el-button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Init>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "dashboard",
  data() {
    return {
      matter: [
        { title: '待验收入库', num: 83 },
        { title: '在用', num: 2000 },
        { title: '闲置', num: 300 },
        { title: '待保养', num: 200 },
        { title: '即将报废', num: 23 },
        { title: '已报废', num: 10 },
      ]
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      var myChart = echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '0.1%',
          left: 'center'
        },
        // 配置
        series: [
          {
            // name: 'Access From', //指引线上的标题
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['50%', '43%'],//设置饼图位置 x轴占50%，Y轴占43%
            avoidLabelOverlap: false,
            label: {     //展示文本设置
              normal: {
                position: 'outside',   // outside表示文本显示位置为外部;inner表示文本显示在色块上
                formatter: `{b}\n{d}%`,  //指引线和百分比换行 ,b为data中的name;d为占比数值
              },
              //鼠标经过饼图色块时，使以下fontSize,fontWeight属性改变
              emphasis: {
                show: true,
                textStyle: {    //文本样式
                  fontSize: '14',
                  fontWeight: '600',
                }
              }
            },
            data: [
              { value: 3048, name: '在用' },
              { value: 635, name: '闲置' },
              { value: 580, name: '待保养' },
              { value: 484, name: '报废' },
              { value: 300, name: '即将报废' },
              { value: 500, name: '待验收入库' },
            ],
            itemStyle: {
              normal: {//饼状图上的文本显示
                borderRadius: 10,//色块为倒圆角
                borderColor: '#fff', // 色块边为白色收边
                borderWidth: 1.5, //色块白色收边宽度
                label: {
                  textStyle: {
                    fontSize: 12, //指引线文字大小
                    fontWeight: 'bolder' //文字是否加粗
                  }
                },
              }
            }
          }
        ]
      });
    }
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
    height: 370px;
    // background-color: seashell;
    border-radius: 15px;
    display: flex;
    min-width: 1280px;


    .left {
      width: 600px;
      background-color: #fff;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      margin-right: 12px;

      #echarts {
        height: 370px;
        // background-color: aqua;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    /* 6个小盒子 */
    .right {
      border-radius: 15px;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(100px, auto);
      grid-column-gap: 20px;
      grid-row-gap: 20px;

      .item {
        border-radius: 15px;
        background-color: #fff;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;

        .matter {
          font-size: 15px;
          color: #888;
          padding: 30px 0 40px 0;
        }

        // .num {}

        .green-border {
          border: 1px solid yellowgreen;
          color: yellowgreen
        }

        .red-border {
          border: 1px solid red;
          color: red
        }

        .num_color1,
        .num_color2,
        .num_color3,
        .num_color4,
        .num_color5,
        .num_color6 {
          font-size: 30px
        }

        .num_color1 {
          color: #93d2f3;
        }

        .num_color2 {
          color: #1990ff;
        }

        .num_color3 {
          color: #000000
        }

        .num_color4 {
          color: #bd3124;
        }

        .num_color5 {
          color: #fcca00
        }

        .num_color6 {
          color: #737373
        }
      }
    }

  }
}
</style>
