import request from '@/utils/request'

export const getTopic = data => {
  return request({
    // eslint-disable-next-line no-template-curly-in-string
    url: '/topics',
    methods: 'get',
    params: data
  })
}

export const getDetail = id => {
  return request({
    // eslint-disable-next-line no-template-curly-in-string
    url: '/topic/${id}',
    methods: 'get'
  })
}

export const getUser = id => {
  return request({
    // eslint-disable-next-line no-template-curly-in-string
    url: '/user/${id}',
    methods: 'get'
  })
}
