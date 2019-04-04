<template>
  <article class="single-event">
    <h1 v-html="evenement.title.rendered"/>
    <div v-html="evenement.content.rendered"/>
  </article>
</template>

<script>

export default {
  async asyncData ({ app, store, params }) {
    let evenement = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/evenement?slug=${params.evenement}&_embed`)
    store.commit('setEvent', evenement.data[0])
  },

  computed: {
    evenement () {
      return this.$store.state.evenement
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: color(selection);
  }
</style>
