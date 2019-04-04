<template>
  <div class="articles">
    <ArticleList :articles="$store.state.articles"/>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList'

export default {
  async asyncData ({ app, store, params }) {
    let articles = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10`)
    store.commit('setArticles', articles.data)
  },

  components: {
    ArticleList
  }

}
</script>

<style lang="scss" scoped>

</style>
