<template>
  <article>
    <h1 v-html="page.title.rendered"/>
    <div v-html="page.content.rendered"/>
  </article>
</template>

<script>

export default {
  async asyncData ({ app, store, params }) {
    let page = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/pages?slug=${params.page}&_embed`)
    store.commit('setPage', page.data[0])
  },

  computed: {
    page () {
      return this.$store.state.page
    }
  }
}

</script>

<style>

</style>
