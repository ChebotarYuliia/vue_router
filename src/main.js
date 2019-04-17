import Vue from 'vue';
import Router from 'vue-router'
import App from './App.vue';
import Content from './components/Content.vue';
import Article from './components/Article.vue';
import store from "./store/index";

Vue.use(Router)

Vue.config.productionTip = false;

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content,
    },
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
