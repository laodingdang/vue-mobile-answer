import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/",
          component: () =>
            import(/* webpackChunkName: "Topic" */ "./views/Topic.vue")
        },
        {
          path: "/item",
          component: () =>
            import(/* webpackChunkName: "Item" */ "./views/Item.vue")
        },
        {
          path: "/score",
          component: () =>
            import(/* webpackChunkName: "Score" */ "./views/Score.vue")
        }
      ]
    }
  ]
});
