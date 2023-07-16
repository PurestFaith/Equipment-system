import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

// 获取房间入住情况
export const getOccupancy_Condition_list = (params) => {
  return request({
    url: '/tables/room_count',
    params
  })
}
