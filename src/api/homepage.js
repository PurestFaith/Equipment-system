import request from '@/utils/request'

// 住宿看板
export function getCountindex(params) {
  return request({
    url: '/count/index',
    params
  })
}

//筛选异常
export function getAbnormalPresentation_money(params) {
  return request({
    url: '/count/get_repair_list',
    params
  })
}

//筛选违纪

export function getDiscipline_list_money(params) {
  return request({
    url: '/count/get_discipline_list',
    params
  })
}



/**
 * @param {Object} params
 * 个人水电表详情
 */
export function get_person_fee(params) {
  return request({
    url: "/count/get_person_fee",
    params
  })
}



/**
 * @param {Object} params
 * 宿舍水电表详情
 */
export function get_room_fee(params) {
  return request({
    url: "/count/get_room_fee",
    params
  })
}
