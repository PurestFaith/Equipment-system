<template>
  <div id="single-info">
    <!-- <router-view /> -->
    <table>
      <tbody>
        <tr>
          <td colspan="13">员工技能矩阵表</td>
        </tr>
        <tr>
          <td colspan="13">生产中心/生产一部/五车间/A工段</td>
        </tr>
        <tr>
          <td id="name" colspan="2" rowspan="2">
            <div class="line" />
          </td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td rowspan="2" style="font-weight: 700">掌握技能个数</td>
        </tr>
        <tr>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
          <td>焊接</td>
        </tr>
        <tr v-for="index in 10" :key="index">
          <td>1</td>
          <td>宋梦云</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td @click="look">小明</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>5级</td>
          <td>3</td>
        </tr>
        <tr>
          <td colspan="2">掌握人数</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'EmployeeForms',
  data() {
    return {}
  },
  methods: {
    look() {
      this.$router.push({
        path: `/statement/EmployeeResume`,
        query: {
          id: 2,
          name: '路由传参'
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
table,
td,
th {
  border: 1px solid #595959;
  border-collapse: collapse;
}
.active {
  background-color: dodgerblue;
}
table {
  td,
  th {
    padding: 3px;
    width: 80px;
    height: 25px;
  }
  th {
    background: #f0e6cc;
  }
  .even {
    background: #fbf8f0;
  }
  .odd {
    background: #fefcf9;
  }
  tr:nth-child(1) {
    text-align: center;
    font-size: 22px;
  }
  tr:nth-child(-n + 2) {
    width: 800px;
    height: 40px;
    font-weight: 700;
  }
  tr:nth-child(3) {
    width: 800px;
    height: 10px;
    text-align: center;
    position: relative;
    .line {
      position: absolute;
      top: 40px;
      left: -10px;
      // width: 292px;
      height: 1px;
      background-color: #000;
      transform: rotate(24deg);
    }
  }
  tr:nth-child(3)::after {
    content: "技能";
    position: absolute;
    top: 18px;
    left: 85px;
    font-size: 16px;
    font-weight: 700;
  }
  tr:nth-child(4)::after {
    content: "姓名";
    position: absolute;
    top: 205px;
    left: 45px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
  tr:nth-child(4) {
    width: 800px;
    height: 50px;
    text-align: center;
    color: dodgerblue;
    font-weight: 700;
  }
  tr:nth-child(n + 5) {
    width: 800px;
    height: 30px;
    text-align: center;
  }
  tr:nth-child(n + 5) td:nth-child(2) {
    font-weight: 700;
  }
  tr:last-child {
    width: 800px;
    height: 30px;
    text-align: center;
    color: black;
    font-weight: 700;
  }
}
#name {
  width: 150px;
  height: 50px;
  border: 1px solid black;
  background-color: salmon;
  background-image: linear-gradient(to bottom left, white 50%, #000, white 51%);
}
</style>
