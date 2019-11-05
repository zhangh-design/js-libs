export default [
  {
    name: 'read',
    method: 'GET',
    desc: 'read fruit list',
    path: 'fruit/hz/xh/{shop}/read',
    mockPath: 'mock/fruit/hz/xh/{shop}/read',
    mock: false,
    cache: false,
    removeInvalidChar: true,
    restful: { shop: '' },
    headers: { token: 'test' },
    params: { f_type: 'apple' },
    data: {},
    validator: {
      f_type: { required: true, type: String, not: '', msg: 'fruit type is not null!' }
    },
    restfulValidator: {
      shop: { required: true, type: String, not: '', msg: 'shop is not null!' }
    },
    responseType: 'json',
    proxy: null
  }
]
