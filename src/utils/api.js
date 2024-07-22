import api from './http'

// 根据username、passwor查找evaluator
export const getAnswer = (params)=>api.post('/v1',params)







