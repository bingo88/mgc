import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
export default new Router({
    routes: [{
        name: 'Index',
        path: '/',
        component: Index
    }
    ]
})