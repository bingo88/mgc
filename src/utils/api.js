import api from './http'

// 根据username、passwor查找evaluator
// export const getAnswer = (params)=>api.post('/v1/chat-messages',params)
export const getAnswer = (params)=>api.post('/mgc/addComment',params)

export const getConversation = ()=>api.get('/mgc/getAllComments')











