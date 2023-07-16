<template>
  <div class="base-dialog">
    <el-dialog :title="title" :visible.sync="visible" :width="width" :append-to-body="appendToBody" @close="dialogClose"  :close-on-click-modal="false">
      <slot v-if="title==='退房检查'" name="CheckOut" ref="rulesPersonForm" />

      <div v-if="isShowFooter" slot="footer">
        <el-button @click="cancel">{{ cancelName }}</el-button>
        <el-button type="primary" @click="confirmBtn">{{ confirmName }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      // 标题
      type: String,
      default: '提示'
    },
    isShow: {
      // 弹窗是否展示
      type: Boolean,
      default: false
    },
    width: {
      // 弹窗宽度
      type: String,
      default: ''
    },
    cancelName: {
      // 取消按钮名称
      type: String,
      default: '取 消'
    },
    confirmName: {
      // 确定按钮名称
      type: String,
      default: '确 定'
    },
    isShowFooter: {
      // 是否自定底部
      type: Boolean,
      default: true
    },
    appendToBody: {
      // 是否将自身插入至 body 元素，有嵌套的弹窗时一定要设置
      type: Boolean,
      default: false
    }
  },

  computed: {
    visible: {
      get() {
        return this.isShow
      },
      set(val) {
        this.$emit('update:isShow', false)
      }
    }
  },

  watch: {
    visible(val) {
      // 在此做显示与隐藏的交互
      if (val === false) {
        // 重置操作
      } else {
        // 展示时操作
        // this.$refs.rulesPersonForm.resetFields();
      }
    }
  },
  created() {},
  mounted() {},

  methods: {
    confirmBtn() {
      // 触发保存
      const data = {}
      this.$emit('handleSave', data)
      this.$emit('test', 123123)

    },
    cancel() {
      this.$emit('handleCancel')
    },
    dialogClose() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  ::v-deep .el-dialog{
    .el-dialog__header{
      // box-shadow: 0px 0px 5px 0px rgba(136, 152, 157, 0.3);
      // border-radius: 6px 6px 0px 0px;
      // padding: 20px 20px 18px 25px;
      .el-dialog__title{
        // color: #777;
        // font-weight: 600;
      }

    }
    .el-dialog__body{
        padding-left: 25px;
    }
  }
</style>

</style>
