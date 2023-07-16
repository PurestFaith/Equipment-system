import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// import { getToken, removeToken } from '@/utils/auth'
import router from '@/router'
import store from '@/store'



// console.log(process.env.NODE_ENV);
// console.log(process.env.VUE_APP_BASE_API);

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 90000
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {

    // 在发送请求之前做些什么
    // store.state.user.user.token
    const token = store.state.user.user.token

    if (token) {
      config.headers.Authorization = `${token}`
    }


    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    // console.log('response响应', response.data);
    if (response.data.status === 409) {
      store.dispatch("user/logout");
      router.push('/login');
      Message.error('登录失效，请重新登录！')
    } else if (response.data.status === 401) {

      store.dispatch("user/logout");
      router.push('/login');
      Message.error('登录失效，请重新登录！')
    } else if (response.data.status === 0) {
      /* 为0时，该宿舍下有人住 */
      Message.error(response.data.msg)
    } else if (response.data.status === 1) {
      Message.success(response.data.msg)
    }
    // 对响应数据做点什么
    return response
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default service
