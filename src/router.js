import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
const defaultUrl = '/events/weddings'

let router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'hash',
  routes: [
    { path: '/', component: load('home'), meta: { requiresAuth: true } },
    { path: '/login', component: load('login') },
    { path: '/logout', component: load('logout'), meta: { requiresAuth: true } },
    { path: '/events/weddings', component: load('events/weddings/weddings-list'), meta: { requiresAuth: true } },
    { path: '/events/weddings/:id', component: load('events/weddings/wedding-detail'), meta: { requiresAuth: true } },
    { path: '/events/wedding', component: load('events/weddings/wedding-detail'), meta: { requiresAuth: true } },
    // Always leave this last one
    { path: '*', component: load('error404') } // Not found
  ]
})

router.beforeResolve((to, from, next) => {
  var authUser = Vue.cookie.get('authUser')
  if (to.meta.requiresAuth) {
    if (!authUser) {
      next('/login')
    }
    else {
      if (to.path === '/' && authUser) {
        next(defaultUrl)
      }
      else {
        next()
      }
    }
  }
  else {
    if (to.path === '/login' && authUser) {
      next(defaultUrl)
    }
    else {
      next()
    }
  }
})

export default router
