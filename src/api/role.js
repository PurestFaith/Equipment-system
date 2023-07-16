
import request from '@/utils/request'


//获取用户管理列表
export const getAdmin_list = () => {
  return request({
    url: '/admin/lst'
  })
}
// 添加用户
export const setUser = (data) => {
  return request({
    url: '/admin/add',
    method: 'POST',
    data
  })
}
// 编辑用户
export const aditUser = (data) => {
  return request({
    url: '/admin/save',
    method: 'POST',
    data
  })
}
// 删除用户
export const delUser = (id) => {
  return request({
    url: '/admin/del?id=' + id,
    method: 'DELETE',
  })
}
// --------------------------------------------------
// 获取角色管理
export function getRoles(appid) {
  return request({
    url: '/role/lst?appid=' + appid,
  })
}
// 添加角色
export const setRoles = (data) => {
  return request({
    url: '/role/add',
    method: 'POST',
    data
  })
}

// 编辑角色
export const aditRoles = (data) => {
  return request({
    url: '/role/save',
    method: 'POST',
    data
  })
}
// 删除角色
export const delRoles = (id) => {
  return request({
    url: "/role/del?id=" + id,
    method: 'DELETE',
  })
}
//角色详情
export const detailRoles = (id) => {
  return request({
    url: '/role/detail?id=' + id
  })
}
// --------------------------------------------------------
// 获取权限列表
export const getPrivilege = (appid) => {
  return request({
    url: '/privilege/lst?appid=' + appid
  })
}
//删除权限
export const delPrivilege = (id) => {
  return request({
    url: '/privilege/del?id=' + id,
    method: 'DELETE',
  })
}

// 添加权限
export const addPrivilege = (data) => {
  return request({
    url: 'privilege/add',
    method: 'Post',
    data
  })
}

// 编辑权限
export const aditPrivilege = (data) => {
  return request({
    url: '/privilege/save',
    method: 'POST',
    data
  })
}
