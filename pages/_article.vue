<template>
  <article class="single-article">
    <h1 v-html="article.title.rendered"/>
    <progressive-img
      :src="article.better_featured_image.source_url"
      :placeholder="article.better_featured_image.media_details.sizes.medium.source_url"
      :blur="10"
    />
    <div v-html="article.content.rendered"/>
  </article>
</template>

<script>

export default {
  async asyncData ({ app, store, params }) {
    let article = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/posts?slug=${params.article}&_embed`)
    store.commit('setArticle', article.data[0])
  },

  computed: {
    article () {
      return this.$store.state.article
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: color(selection);
  }
</style>
