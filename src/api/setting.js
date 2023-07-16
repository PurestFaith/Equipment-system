
import request from '@/utils/request'

// 获取水电单价
export const getHydropower_Price = () => {
  return request({
    url: 'Dormitory/get_price'
  })
}

// 修改水电单价
export const adit_price = (data) => {
  return request({
    url: 'Dormitory/set_price',
    method: 'POST',
    data
  })
}

