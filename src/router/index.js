import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const getRouter = (mainRouterPath) => {
  const basePath = ''
  const routes = [
    {
      path: `${mainRouterPath}${basePath}/HelloWorld`,
      name: 'HelloWorld',
      component: resolve => require(['./../components/HelloWorld'], resolve)
    },
    {
      path: `${mainRouterPath}${basePath}/Home`,
      name: 'home',
      component: resolve => require(['./../components/Home'], resolve)
    },
    {
      path: `${mainRouterPath}${basePath}/404`,
      name: '404',
      component: resolve => require(['./../page/404'], resolve)
    },
    { path: '*', redirect: '/404' }
  ]
  return new VueRouter({
    base: '/',
    routes
  })
}

export default getRouter
