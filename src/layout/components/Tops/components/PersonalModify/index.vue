<template>
  <div style="margin: 30px 20px 0 20px">
    <div style="width: 500px" class="modifybox">
      <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign" :rules="formCheck" ref="myForm">
        <el-form-item label="原密码" prop="oldpassword">
          <el-input v-model="formLabelAlign.oldpassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpassword">
          <el-input v-model="formLabelAlign.newpassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="renewpassword">
          <el-input v-model="formLabelAlign.renewpassword" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" style="margin-left: 272px" @click="handlersave">保存</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { modifyPassword } from "@/api/user.js";
import { valiPassword } from "@/utils/validate.js";
export default {
  name: "PersonalModify",
  data() {
    const validatePassword = (rule, value, callback) => {
      if (valiPassword(value)) {
        callback();
      } else {
        callback(new Error("字母、数字组成且不少于8位"));
      }
    };
    //校验新密码和确认新密码是否一致
    const valiRepPassword = (rule, value, callback) => {
      if (value !== this.formLabelAlign.newpassword) {
        callback(new Error("新密码不一致"));
      } else if (valiPassword(value)) {
        callback();
      } else {
        callback(new Error("字母、数字组成且不少于8位"));
      }
    };

    return {
      labelPosition: "right",
      formLabelAlign: {
        username: "", //用户名
        oldpassword: "", //旧密码
        newpassword: "", //新密码
        renewpassword: "", //重复输入新密码
      },
      formCheck: {
        oldpassword: [{ required: true, trigger: "blur", validator: validatePassword }],
        newpassword: [{ required: true, trigger: "blur", validator: validatePassword }],
        renewpassword: [{ required: true, trigger: "blur", validator: valiRepPassword }],
      },
    };
  },
  created() {
    this.formLabelAlign.username = this.$store.state.user.user.username; /* 获取vuex用户名 */
  },
  methods: {
    async handlersave() {
      try {
        await this.$refs.myForm.validate();
        const { data } = await modifyPassword(this.formLabelAlign);

        switch (data.status) {
          case 1:
            this.$message.success(data.msg);
            await this.$store.dispatch("user/logout");
            this.$router.push("/login");
            return;
          case 0:
            this.$message.error(data.msg);
            this.formLabelAlign = {
              username: "", //用户名
              oldpassword: "", //旧密码
              newpassword: "", //新密码
              renewpassword: "", //重复输入新密码
            };
            return;
          default:
            return;
        }
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1400px) {
  .modifybox {
    width: 300px !important;
  }
  ::v-deep .el-button--primary {
    margin-left: 193px !important;
  }
}
</style>
<style lang="scss" scoped></style>
