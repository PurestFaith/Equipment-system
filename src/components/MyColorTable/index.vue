<template>
  <div>
    <div v-if="FacilityMaintenanceFlag">
      <el-table :data="tableData" stripe style="width: 100%" border :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" />
        <el-table-column label="操作">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="houseFlag">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" />
        <el-table-column label="操作">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 房间维护 -->
    <div v-if="roomFlag">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" :width="item.width" />
        <el-table-column label="房间号" :prop="data.name" width="100px">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="水电表连通状态" align="center">
          <el-table-column prop="elec_status" label="电表">
            <template slot-scope="scope">
              <div v-if="scope.row.elec_status == 1" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: #29ad19; display: inline-block"></div>
                <div style="margin-left: 10px">正常</div>
              </div>
              <div v-else-if="scope.row.elec_status == 2" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: red; display: inline-block"></div>
                <div style="margin-left: 10px">异常</div>
              </div>

              <div v-else="scope.row.elec_status == 0" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: #737373; display: inline-block"></div>
                <div @click="goBind(scope.row)" style="margin-left: 10px; text-decoration: underline; cursor: pointer">未绑定</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="cold_status" label="冷水表">
            <template slot-scope="scope">
              <div v-if="scope.row.cold_status == 1" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: #29ad19; display: inline-block"></div>
                <div style="margin-left: 10px">正常</div>
              </div>
              <div v-else-if="scope.row.cold_status == 2" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: red; display: inline-block"></div>
                <div style="margin-left: 10px">异常</div>
              </div>

              <div v-else="scope.row.cold_status == 0" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: #737373; display: inline-block"></div>
                <div @click="goBind(scope.row)" style="margin-left: 10px; text-decoration: underline; cursor: pointer">未绑定</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="hot_status" label="热水表">
            <template slot-scope="scope">
              <div v-if="scope.row.hot_status == 1" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: #29ad19; display: inline-block"></div>
                <div style="margin-left: 10px">正常</div>
              </div>
              <div v-else-if="scope.row.hot_status == 2" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: red; display: inline-block"></div>
                <div style="margin-left: 10px">异常</div>
              </div>

              <div v-else="scope.row.hot_status == 0" class="status_show">
                <div style="width: 9px; height: 9px; border-radius: 50%; background-color: #737373; display: inline-block"></div>
                <div @click="goBind(scope.row)" style="margin-left: 10px; text-decoration: underline; cursor: pointer">未绑定</div>
              </div>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="备注" :prop="data.note" width="140px">
          <template #default="{ row }">
            <div>{{ row.note }}</div>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <slot name="data" :data="scope" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 一键测试 -->
    <!-- <div v-if="test">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" />
        <el-table-column label="操作">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div> -->

    <!-- 住宿管理 -->
    <div v-if="managementFlag">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :row-style="{ height: '50px' }" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" :width="item.width" show-overflow-tooltip>
          <template #default="scope" v-if="item.items === 'room'"> {{ scope.row.room }}-{{ scope.row.berth_num }} </template>
        </el-table-column>
        <el-table-column label="异常记录" :prop="data.repair_count" width="110px">
          <template #default="{ row }">
            <div @click="go_repair_count(row)" :class="+row.repair_count > 0 ? 'error' : ''" style="cursor: pointer">
              <div>{{ row.repair_count }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="违纪记录" :prop="data.discipline_count" width="110px">
          <template #default="{ row }">
            <div @click="discipline_count(row)" :class="+row.discipline_count > 0 ? 'error' : ''" style="cursor: pointer">
              <div>{{ row.discipline_count }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="退宿时间" :prop="data.check_out_date" width="140px">
          <template #default="{ row }">
            <!-- 如果有钥匙，点击提交后，他的状态就为待审核，如果没有，则状态为退宿时间 -->
            <!-- 没有钥匙直接退宿 status = 2 -->
            <div v-if="row.status === '2'">{{ row.check_out_date }}</div>
            <el-tag v-else-if="row.status === '1'" type="danger" size="medium">待审核</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="CheckinReports">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username"> </el-table-column>
        <el-table-column label="剩余可住人数" :prop="data.bunk_surplus">
          <template #default="{ row }">
            <div :class="row.bunk_surplus === '0' ? 'error' : 'green'">{{ row.bunk_surplus }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="Fix" />

    <!-- 异常提报管理 -->
    <div v-if="AbnormalPresentation">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" :width="item.width" show-overflow-tooltip />
        <el-table-column label="操作" width="130px">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 违纪管理 -->
    <div v-if="violateTheDiscipline">
      <el-table :data="tableData" stripe style="width: 100%" border :highlight-current-row="true" :header-row-style="headerClass" :cell-style="cellClass" :header-cell-style="rowClass">
        <el-table-column v-for="item in data" :key="item.id" :prop="item.items" :label="item.username" :width="item.width" show-overflow-tooltip />
        <el-table-column label="操作" width="130px">
          <template #default="scope">
            <slot name="data" :data="scope.row" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const onTableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return "statistics-warning-row";
  } else {
    return "";
  }
};
export default {
  name: "MyColorTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
    // 房间设施维护开关
    FacilityMaintenanceFlag: {
      type: Boolean,
    },
    // 房间维护
    houseFlag: {
      type: Boolean,
    },
    roomFlag: {
      type: Boolean,
    },
    addEditBtn: {
      type: String,
    },
    // 住宿管理
    managementFlag: {
      type: Boolean,
    },
    // 房间入住情况报表
    CheckinReports: {
      type: Boolean,
    },
    Fix: {
      type: Boolean,
    },
    AbnormalPresentation: {
      type: Boolean,
    },
    violateTheDiscipline: {
      type: Boolean,
    },
    test: {
      type: Boolean,
    },
  },
  data() {
    return {
      loading: true,
      note_fee_data: [
        { username: "违纪事实", items: "note" },
        { username: "罚金", items: "fee" },
      ],
    };
  },
  methods: {
    /* 跳转异常提报管理 */
    go_repair_count(row) {
      if (row.repair_count === "0") return;
      console.log(row);
      this.$router.push({
        name: "AbnormalPresentation",
        query: { perno: row.perno, pername: row.pername },
      });
    },

    discipline_count(row) {
      console.log(row);
      if (row.discipline_count === "0") return;
      this.$router.push({
        name: "violateTheDiscipline",
        query: { perno: row.perno },
      });
    },
    goBind(row) {
      this.$emit("goBind", row);
    },
    rowClass() {
      return "background-color:#f2f2f2;color:#000;border-color:#dfdfdf";
    },
    cellClass() {
      return "border-color:#dfdfdf;padding:5px";
    },
    headerClass() {
      return "border-color:#666";
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}
.green {
  color: #109210;
}
</style>
<style lang="scss" scoped>
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #f2f2f2;
}

.Greenlight {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #29ad19;
  margin-right: 12px;
  + .text {
    color: #29ad19;
  }
}

// ::v-deep .el-table_1_column_8 {
//   color: red;
// }
.status_show {
  // width: 43px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
}
</style>
