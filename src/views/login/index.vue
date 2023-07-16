<template>
  <div class="login-container">
    <div style="width: 650px; height: 250px; background-color: #fff; box-sizing: border-box" class="box">
      <div style="display: flex; flex-direction: column; justify-content: space-between" class="mediabox">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" auto-complete="on" label-position="top" label-width="110px">
          <div id="boxform">
            <el-form-item prop="username" label="用户名：">
              <el-input ref="username" v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text" tabindex="1" auto-complete="on" style="width: 99%">
                <template slot="suffix">
                  <img src="@/assets/common/input_icon_1.png" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" label="密 码：">
              <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="请输入您的密码" name="password" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin" style="width: 99%">
                <template slot="suffix">
                  <img src="@/assets/common/lock.png" />
                </template>
              </el-input>
            </el-form-item>
            <!-- <div style="display: flex; margin: 7px 0">
              <el-radio v-model="appid" label="1">宿舍系统</el-radio>
              <el-radio v-model="appid" label="2">培训系统</el-radio>
            </div> -->
          </div>
          <el-button :loading="loading" plain class="loginBtn" @click.native.prevent="handleLogin"><span style="padding-top: 2px">登 录</span> </el-button>
        </el-form>
      </div>
    </div>
    <!-- <iframe v-show="false" id="receivePage" src="http://192.168.8.8:777/skill/#/login" style="display: none"></iframe> -->
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
// import store from "@/store";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请规范填写用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("请规范填写密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      appid: "1",
      loginRules: {
        // username: [{ required: true, trigger: "blur", validator: validateUsername }],
        // password: [{ required: true, trigger: "blur", validator: validatePassword }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },

  mounted: function () {
    // window.parent.postMessage("Message From Mazey.", "*");
    // window.parent.postMessage(
    //   {
    //     status: "ok",
    //     params: {
    //       ok: false, //关闭的值
    //       token: store.state.user.user.token,
    //     },
    //   },
    //   "*"
    // );
  },

  created() {
    this.redirect = localStorage.getItem("from_path"); //已在全局路由守卫处将上次路由记录储存到本地
  },

  // watch: {
  //   $route: {
  //     handler: function (route) {
  //       this.redirect = route.query && route.query.redirect;
  //     },
  //     immediate: true,
  //   },
  // },

  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              if (this.appid === 2) {
                // window.open("http://192.168.8.8:777/skill/");
                console.log("0000000000000");
              } else {
                this.$router.push({ path: this.redirect || "/" });
              }
              // window.open("http://localhost:777/skill/");
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 220px;
  padding: 30px 50px 0 380px;
  height: 220px;
  // background: #fff url("../../assets/common/kedulog.jpg") no-repeat 30px 35px;
  margin: auto;
  overflow: hidden;
}
.login_input {
  display: block;
  width: 210px;
}

.btn-login {
  background: #40454b;
  box-shadow: none;
  text-shadow: none;
  color: #fff;
  border: none;
  height: 35px;
  line-height: 26px;
  font-size: 14px;
  font-family: "microsoft yahei";
}
.btn-login:hover {
  background: #333;
  color: #fff;
}
.copyright {
  margin: auto;
  margin-top: 10px;
  text-align: center;
  width: 370px;
  color: #ccc;
}
</style>

<style lang="scss" scoped>
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: rgb(71, 71, 71); //文字颜色
$cursor: black; //鼠标颜色

// @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
//   .login-container .el-input input {
//     color: $cursor;
//   }
// }

/* reset element-ui css */
// .login-container {
//   background-color: #03295a;

//   display: flex;
//   justify-content: center;
//   // align-items:center;
//   padding-top: 190px;
//   box-sizing: border-box;
//   height: 100%;
//   .box {
//     display: flex;
//     .logo {
//       width: 100%;
//       background: url("../../assets/common/kedulog.jpg") no-repeat;
//       margin-left: 30px;
//     margin-top: 35px !important;
//     }
//     .mediabox {
//       // background-color: yellowgreen;
//       width: 206px;
//       margin-top: 16px !important;
//       margin-right: 64px !important;
//     }
//     ::v-deep .el-form--label-top .el-form-item__label {
//       margin-top: 20px !important;
//       font-size: 0.4vw !important;
//       height: 18px;
//       margin-bottom:1px
//     }
//     ::v-deep .el-form-item--mini.el-form-item,
//     .el-form-item--small.el-form-item {
//       width: 210px;
//     }
//     ::v-deep .el-input__inner {
//       height: 24px;
//       box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
//     }
//     ::v-deep .el-input__inner::placeholder {
//       font-size: 0.4vw;
//     }
//     ::v-deep .el-form-item__error {
//       font-size: 0.4vw;
//       line-height: 0;
//     }
//     ::v-deep .el-form-item {
//       margin-bottom: -4px;
//     }
//     ::v-deep .el-button--primary {
//       margin-top: 29px;
//       width: 220px;
//       height:35px;
//       font-size:14px;
//       background-color: #40454b;
//       border: none;
//     }
//     ::v-deep .el-input--mini{
//       width:218px
//     }
//     ::v-deep .el-input__suffix{
//       top:5px !important;
//       right:5px
//     }
//   }
// }
</style>

<!-- <style scoped lang="scss">
@media screen and (min-width:2601px)   {
  #boxform{
    height: 118.66px;
    // background-color: yellowgreen;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin-top: -11px;
  }
  .login-container {
  background-color: #03295a;

  display: flex;
  justify-content: center;
  padding-top: 190px;
  box-sizing: border-box;
  height: 100%;
  margin: auto;
    overflow: hidden;

  .box {
    height: 220px;
    padding: 30px 50px 0 380px;
      width: 100%;
      background: url("../../assets/common/kedulog.jpg") no-repeat;

      background-position:30px 35px;
      // background-position:left top 30px;
    .mediabox {
      // background-color: yellowgreen;
      width: 220px;
      height: 220px;
      margin-top: -3px;
      // margin-right: 50px !important;
    }
    ::v-deep .el-form--label-top .el-form-item__label {
      // margin-top: 8px !important;
      font-size: 0.4vw !important;
      height: 18px;
      margin-bottom:3px
    }
    ::v-deep .el-form-item--mini.el-form-item,
    .el-form-item--small.el-form-item {
      width: 210px;
      height: 65px;
    }
    ::v-deep .el-input__inner {
      height: 24px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }
    ::v-deep .el-input__inner::placeholder {
      font-size: 0.4vw;
    }
    ::v-deep .el-form-item__error {
      font-size: 0.4vw;
      line-height: 0;
    }
    ::v-deep .el-form-item {
      margin-bottom: -4px;
    }
    ::v-deep .el-button--medium {
      margin-top: 17px;
      width: 220px;
      height:35px;
      font-size:14px;
      background-color: #40454b !important;
      border: none;
      color:#fff
    }
    ::v-deep .el-input--mini{
      width:218px
    }
    ::v-deep .el-input__suffix{
      top:0.45px !important;
      right:5px
    }
  }
}
}
</style> -->

<style scoped lang="scss">
// @media screen and (min-width:2000px) and (max-width:2600px)   {
#boxform {
  height: 113px;
  // background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // margin-top: -11px;
}
.login-container {
  background-color: #03295a;

  display: flex;
  justify-content: center;
  padding-top: 190px;
  box-sizing: border-box;
  height: 100%;
  margin: auto;
  overflow: hidden;

  .box {
    height: 220px;
    padding: 31px 50px 0 380px;
    width: 100%;
    background: url("../../assets/common/kedulog.jpg") no-repeat;

    background-position: 30px 35px;
    // background-position:left top 30px;
    .mediabox {
      // background-color: yellowgreen;
      width: 220px;
      height: 220px;
      margin-top: -4px;
      // margin-right: 50px !important;
    }
    ::v-deep .el-form--label-top .el-form-item__label {
      // margin-top: 8px !important;
      font-size: 0.4vw !important;
      height: 18px;
      margin-bottom: 4px;
    }
    ::v-deep .el-form-item--mini.el-form-item,
    .el-form-item--small.el-form-item {
      width: 210px;
      height: 65px;
    }
    ::v-deep .el-input__inner {
      height: 24px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }
    ::v-deep .el-input__inner::placeholder {
      font-size: 0.4vw;
    }
    ::v-deep .el-form-item__error {
      font-size: 0.4vw;
      line-height: 0;
    }
    ::v-deep .el-form-item {
      margin-bottom: -4px;
    }
    ::v-deep .el-button--medium {
      margin-top: 23px;
      padding-top: 8px;
      width: 220px;
      height: 35px;
      font-size: 14px;
      background-color: #40454b !important;
      border: none;
      color: #fff;
    }
    ::v-deep .el-input--mini {
      width: 218px;
    }
    ::v-deep .el-input__suffix {
      top: 1.45px !important;
      right: 5px;
    }
  }
}
// }
</style>
