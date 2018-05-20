const main = resolve => require.ensure([], () => resolve(require("../page/main.vue")), 'main');
const search = resolve => require.ensure([], () => resolve(require("../page/search.vue")), 'search')

export default [
  {
    path: "/",
    component: main,
    children: [
      {
        path: "/search",
        component: search
      }
    ]
  }
]