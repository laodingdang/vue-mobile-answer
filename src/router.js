import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "/",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/home/index.vue")
        },
        {
          path: "/item",
          component: () =>
            import(/* webpackChunkName: "Item" */ "./views/item/index.vue")
        },
        {
          path: "/score",
          component: () =>
            import(/* webpackChunkName: "Score" */ "./views/score/index.vue")
        }
      ]
    }
  ]
});
