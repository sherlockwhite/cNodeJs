import axios from 'axios'
import {Message, Loading} from 'element-ui'

// 封装请求
// error提示
const error = () => {
  Message({
    type: 'error',
    message: '遇到错误，请刷新重试！',
    duration: 2 * 1000
  })
}
// loading层
let loading
const startLoading = () => {
  loading = Loading.service(
    {
      lock: true,
      text: '加载中。。'
    }
  )
}
// 关闭loading层
const closeLoading = () => {
  loading.close()
}

//
const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  err => {
    closeLoading()
    error()
    Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    closeLoading()
    return response
  },
  err => {
    closeLoading()
    error()
    Promise.reject(err)
  }
)

export default service
