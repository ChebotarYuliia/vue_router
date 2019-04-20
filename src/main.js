import Vue from 'vue';
import Router from 'vue-router'
import App from './App.vue';
import Article from './components/Article.vue';
import store from "./store/index";

Vue.use(Router)

Vue.config.productionTip = false;

export const router = new Router({
  routes: [
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
      props: true,
    },
  ]
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
