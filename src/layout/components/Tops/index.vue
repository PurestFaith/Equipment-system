<template>
  <div>
    <div
      style="background-color: #e60d2e; height: 60px; display: flex; justify-content: space-between; align-items: center; padding-right: 30px">
      <div class="company_title"
        style="display: flex; width: 700px; margin-right: 50px; justify-content: space-between; align-items: center; padding-left: 21px">
        <img src="@/assets/common/wen.png" alt="">
        <!-- <h3 style="color: #fff">{{ BaseApi === "development" ? "( 开发环境 ) :192.168.1.148:9095" : "" }}</h3> -->
      </div>
      <div class="my_photo"
        style="border-radius: 50%; background-color: #fb7373; width: 30px; height: 30px; text-align: center; line-height: 30px">
        <a>
          <div class="right-menu">
            <el-dropdown class="avatar-container" trigger="click">
              <div class="avatar-wrapper">
                <img src="" class="user-avatar">
                <span style="color: #fff">{{ $store.state.user.user.username?.toUpperCase().charAt(0) }}</span>
              </div>
              <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <el-dropdown-item @click.native="modify">修改用户密码</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">
                  <span style="display: block">注销</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tops',
  data() {
    return {
      BaseApi: ''
    }
  },

  created() {
    this.BaseApi = process.env.NODE_ENV
    // console.log(this.BaseApi);
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      // 记录退出前的页面,下次登录直接重定向进退出前的页面(跟login页面登录时的代码有联系)
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      this.$router.push(`/login`)
    },
    modify() {
      this.$router.push({ name: 'PersonalModify' })
      // this.$router.push({ path: "/PersonalModify" });
    }
  }
}
</script>

<style scoped lang="scss">
</style>
