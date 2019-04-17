<template>
  <aside class="sidebar">
    <router-link
      v-for="article in articles"
      :key="article.id"
      active-class="is-active"
      class="link"
      :to="{ name: 'article', params: { id: article.id } }"
    >{{article.id}}. {{article.title}}</router-link>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    articles: {
      type: Array,
      required: true,
      default: []
    }
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.sidebar {
  flex: 1 0 30%;
  height: 100%;
  overflow-y: auto;
  width: 30%;
  padding: 50px 30px;
  box-sizing: border-box;
  border-right: 1px solid #42b983;
}
.link {
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  color: #2c3e50;
  text-align: left;

  &--home {
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  &.is-active {
    color: #42b983;
  }
}
</style>