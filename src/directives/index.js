import store from "@/store";

export const permissionBtn = {
  inserted(el, bind) {
    /*
    el: 为DOM
    bind.value:为你在页面中传过来的值
    */
    let permissionsArr = store.state.user.userinfo.privilege //取vuex中按钮权限名数组
    /* 判断：
    传过来的值（这个值是提前在权限管理时定义的，登录的时候会返回一个按钮权限数组，如果在权限管理定义过就会有）
    是不是已经包含在数组内，如果包含，则操作DOM显示；相反，同理
    */
    if (permissionsArr !== '*') {
      if (permissionsArr.includes(bind.value)) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    }
  },
}

export const inputNumber = {
  inserted(el) {
    el.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    })
  },
}
