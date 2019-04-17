<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <Sidebar :articles="articles"/>
      <Content/>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Sidebar,
    Content
  },
  created() {
    this.$store.dispatch("articles/getArticles");
  },
  computed: {
    ...mapState({
      articles: state => state.articles.data,
      articlesResponse: state => state.articles.rendered
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
}

a:hover {
  color: #42b983;
}

img {
  max-width: 80px;
  display: block;
  margin: 0 auto;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 90px;
  border-bottom: 1px solid #42b983;
  text-align: center;
  background: #ffffff;
}

main {
  display: flex;
  height: calc(100vh - 90px);
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
</style>
