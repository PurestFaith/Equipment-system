<template>
  <div id="info">
    <div class="box">
      <div class="top">
        <div class="title">技能合格证书</div>
        <div class="msg">
          <div class="item"><strong>员工姓名：</strong> 陈冠希</div>
          <div class="item"><strong>工号：</strong> 20220328</div>
          <div class="item"><strong>车间：</strong> 一车间</div>
          <div class="item"><strong>工号：</strong> A</div>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>技能名称</td>
            <td>产品ERP号</td>
            <td>工序号</td>
            <td>技能等级</td>
          </tr>
          <tr v-for="index in 10" :key="index">
            <td>组装</td>
            <td>0001</td>
            <td>2</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCertificates',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
//技能合格证书
.box {
  width: 600px;
  height: 740px;
  display: flex;
  justify-content: space-between;
  padding: 30px 12px 15px;
  border: 1px solid #000;
  flex-direction: column;
  .top {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .title {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
    }
    .msg {
      display: flex;
      width: 390px;
      height: 100px;
      flex-wrap: wrap;
      align-items: center;
      .item {
        width: 50%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }
    }
  }
  table,
  td,
  th {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 575px;
  }
  td,
  th {
    padding: 3px;
    width: 30px;
    height: 45px;
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
  tr {
    height: 40px;
  }
  tr:nth-child(1) {
    text-align: center;
    font-size: 15px;
    font-weight: 700;
  }
  td {
    text-align: center;
  }
}
</style>
