import request from '@/utils/request'

// 获取楼栋列表
export const flowList = () => {
  return request({
    url: 'Dormitory/building_lst'
  })
}
