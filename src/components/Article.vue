<template lang="html">
  <div class="article" v-if="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <p class="article__body">{{ article.body }}</p>
    <p class="article__id">{{ article.id }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Article",
  props: ["id"],
  computed: {
    ...mapGetters('articles',{
      article: 'getCurrentArticle'
    })
  },
  methods: {
    ...mapActions('articles',{
      setCurrentId: 'setCurrentId'
    })
  },
  watch: {
    $route() {
      this.setCurrentId(this.id);
    }
  }
};
</script>

<style lang="scss">
.article {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px 20px 70px;
  &__title {
    position: relative;
    text-transform: uppercase;
    z-index: 1;
  }
  &__body {
    position: relative;
    z-index: 1;
  }
  &__id {
    position: absolute;
    font-size: 280px;
    bottom: -50px;
    margin: 0;
    color: #eeeeee;
    right: -20px;
    line-height: 1;
    font-weight: 900;
    z-index: 0;
  }
}
</style>