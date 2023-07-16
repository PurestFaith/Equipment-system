
import request from '@/utils/request'

// 获取房间设施维护列表
export const getFacilityList = (params) => {
  return request({
    url: 'Dormitory/equ_lst',
    params
  })
}
// 新增房间设施维护列表
export const addList = (data) => {
  return request({
    url: `Dormitory/add_equ`,
    method: 'POST',
    data
  })
}

// 删除房间设施维护
export const delList = (id) => {
  return request({
    url: `Dormitory/del_equ?id=${id}`
  })
}

// 修改房间设施维护
export const aditList = (data) => {
  return request({
    url: 'Dormitory/edit_equ',
    method: 'POST',
    data
  })
}
// ---------------------------------------------------------------------------------
// 获取房间维护列表
export const getHouseList = (params) => {
  return request({
    url: 'Dormitory/room_lst',
    params
  })
}

// 新增房间维护列表
export const addHouseList = (data) => {
  return request({
    url: 'Dormitory/add_room',
    method: 'POST',
    data
  })
}
// 删除房间维护列表
export const delHouseList = (id) => {
  return request({
    url: `Dormitory/del_room?id=${id}`
  })
}

// ---------------------------------------------------------------------------------
// 获取房间维护---楼栋列表
export const getBuildings_list = (params) => {
  return request({
    url: 'Dormitory/building_lst',
    params
  })
}
// 新增房间维护---楼栋列表
export const addBuildings = (data) => {
  return request({
    url: 'Dormitory/add_building',
    method: 'POST',
    data
  })
}
// 删除房间维护---楼栋列表
export const delBuildgings_list = (id) => {
  return request({
    url: `Dormitory/del_building?id=${id}`
  })
}
// 编辑房间维护---楼栋列表
export const aditBuildgings_list = (data) => {
  return request({
    url: 'Dormitory/edit_building',
    method: 'POST',
    data
  })
}
// ---------------------------------------------------------------------------------
// 获取房间维护---楼层列表
export const getFloor_list = (params) => {
  return request({
    url: 'Dormitory/storey_lst',
    params
  })
}

// 新增楼层列表
export const addStorey_lst = data => {
  return request({
    url: 'Dormitory/add_storey',
    method: 'POST',
    data
  })
}
// 删除楼层列表
export const del_storey = (id) => {
  return request({
    url: `Dormitory/del_storey?id=${id}`
  })
}
// 编辑楼层列表
export const edit_storey = (data) => {
  return request({
    url: 'Dormitory/edit_storey',
    method: 'POST',
    data
  })
}

// ---------------------------------------------------------------------------------
// 获取房间维护--- 房间类型列表
export const houseType = (params) => {
  return request({
    url: 'Dormitory/type_lst',
    params
  })
}
// 新增房间维护---房间类型
export const add_type = (data) => {
  return request({
    url: 'Dormitory/add_type',
    method: 'POST',
    data
  })
}

// 删除房间维护---房间类型列表
export const del_type = (id) => {
  return request({
    url: `Dormitory/del_type?id=${id}`
  })
}

export const edit_type = (data) => {
  return request({
    url: 'Dormitory/edit_type',
    method: 'POST',
    data
  })
}

// ------------------------
// 根据楼栋id获取楼层数据
export const getFloor_Select_list = (id) => {
  return request({
    url: `Dormitory/get_storey?building_id=${id}`
  })
}

// 根据楼栋id和楼层id获取房间数据
export const get_room = (params) => {
  return request({
    url: 'Dormitory/get_room',
    params
  })
}

//-----------------------------------------------------
export const edit_room = (data) => {
  return request({
    url: "Dormitory/edit_room",
    method: 'POST',
    data
  })
}
// -----------------------------------------------------
// 弹窗内水电表一键测试
export const water_test = (data) => {
  return request({
    url: "Dormitory/water_test",
    method: 'POST',
    data
  })
}
