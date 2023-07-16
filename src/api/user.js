import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: 'Login/login',
    method: 'post',
    data
  })
}

// 修改密码
export function modifyPassword(data) {
  return request({
    url: "/savepd/index",
    method: 'post',
    data
  })
}

// 获取用户信息及权限数组
export function getInfo(params) {
  return request({
    url: '/admin/get_user_info',
    params
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
