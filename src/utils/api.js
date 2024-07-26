import api from './http'

// export const getAnswer = (params)=>api.post('/v1/chat-messages',params)
export const getAnswer = (params)=>api.post('/mgc/addComment',params)

export const getConversation = ()=>api.get('/mgc/getAllComments')

export const getToMeLatestAnswer = (username)=>api.get('/mgc/getToMeLatestAnswer',{ params: { username }})













