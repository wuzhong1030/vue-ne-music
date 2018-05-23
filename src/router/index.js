const search = resolve => require.ensure([], () => resolve(require("../page/search.vue")), 'search')
const finder = resolve => require.ensure([], () => resolve(require("../page/finder.vue")), 'finder')
const mv = resolve => require.ensure([], () => resolve(require("../page/mv.vue")), 'mv')
const friend = resolve => require.ensure([], () => resolve(require("../page/friend.vue")), 'friend')

const notFound = resolve => require.ensure([], () => resolve(require("../page/notFound.vue")), '404')

export default [{
    path: "/",
    component: finder,
  },
  {
    path: "/search",
    component: search
  },
  {
    path: "/finder",
    component: finder
  },
  {
    path: "/mv",
    component: mv
  },
  {
    path: "/friend",
    component: friend
  },
  {
    name: '404',
    path: '/404',
    component: notFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]
