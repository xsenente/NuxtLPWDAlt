import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _335c8b8b = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _5fe0cf19 = () => interopDefault(import('../pages/evenements/index.vue' /* webpackChunkName: "pages/evenements/index" */))
const _a53bd462 = () => interopDefault(import('../pages/categories/_categorie.vue' /* webpackChunkName: "pages/categories/_categorie" */))
const _90f3499a = () => interopDefault(import('../pages/evenements/_evenement.vue' /* webpackChunkName: "pages/evenements/_evenement" */))
const _76f360a7 = () => interopDefault(import('../pages/pages/_page.vue' /* webpackChunkName: "pages/pages/_page" */))
const _5faa5d96 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a4ed4fba = () => interopDefault(import('../pages/_article.vue' /* webpackChunkName: "pages/_article" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/categories",
      component: _335c8b8b,
      name: "categories"
    }, {
      path: "/evenements",
      component: _5fe0cf19,
      name: "evenements"
    }, {
      path: "/categories/:categorie",
      component: _a53bd462,
      name: "categories-categorie"
    }, {
      path: "/evenements/:evenement",
      component: _90f3499a,
      name: "evenements-evenement"
    }, {
      path: "/pages/:page?",
      component: _76f360a7,
      name: "pages-page"
    }, {
      path: "/",
      component: _5faa5d96,
      name: "index"
    }, {
      path: "/:article",
      component: _a4ed4fba,
      name: "article"
    }],

    fallback: false
  })
}
