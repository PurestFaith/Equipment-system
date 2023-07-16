import request from '@/utils/request'

// 根据工号获取员工信息
export const get_employee_info = (params) => {
  return request({
    url: 'Dormitory/get_employee_info',
    params
  })
}

// 新增住宿管理列表
export const addCheckIntoTheDormitory = (data) => {
  return request({
    url: 'Dormitory/check_in',
    method: 'POST',
    data
  })
}

// 获取住宿管理列表
export const getCheckinList = (params) => {
  return request({
    url: 'Dormitory/stay_lst',
    params
  })
}

export const stay_detail = (id) => {
  return request({
    url: "Dormitory/stay_detail?id=" + id
  })
}

// 搜索
export const searchCheckinList = (params) => {
  return request({
    url: 'Dormitory/stay_lst',
    params
  })
}

// 删除住宿管理列表
export const del_stay = (id) => {
  return request({
    url: 'Dormitory/del_stay?id=' + id
  })
}

// 退宿 status 0
export const check_out = (data) => {
  return request({
    url: 'Dormitory/check_out',
    method: 'POST',
    data
  })
}

/* 退宿审核  1*/
export const room_check = (data) => {
  return request({
    url: "Dormitory/room_check",
    method: 'POST',
    data
  })
}

/* 添加异常提报单*/
export const add_repair = (data) => {
  return request({
    url: 'Dormitory/add_repair',
    method: 'POST',
    data
  })
}
// 删除异常提报单
export const del_repair = (id) => {
  return request({
    url: "Dormitory/del_repair?id=" + id,
  })
}
// 编辑提报单列表
export const save_repair = (data) => {
  return request({
    url: 'Dormitory/save_repair',
    method: 'POST',
    data
  })
}
/* 异常提报单列表 */
export const repair_lst = (params) => {
  return request({
    url: 'Dormitory/repair_lst',
    params
  })
}

/* 添加违纪 */
export const add_discipline = (data) => {
  return request({
    url: 'Dormitory/add_discipline',
    method: 'POST',
    data
  })
}
/* 违纪列表 */
export const discipline_lst = (params) => {
  return request({
    url: 'Dormitory/discipline_lst',
    params
  })
}
/* 删除违纪 */
export const del_discipline = (id) => {
  return request({
    url: 'Dormitory/del_discipline?id=' + id
  })
}

// 违纪详情
export const discipline_detail = (id) => {
  return request({
    url: 'Dormitory/discipline_detail?id=' + id
  })
}
/**
 *
 * @param {any} data
 * 违纪内的详情
 */
export const save_discipline = (data) => {
  return request({
    url: "Dormitory/save_discipline",
    method: 'POST',
    data
  })
}

//添加备注
export const add_remark = (data) => {
  return request({
    url: 'Dormitory/add_remark',
    method: 'POST',
    data
  })
}
