<template>
  <div class="page">
    <ul>
      <li
        v-for="categorie in $store.state.categories"
        :key="categorie.id">
        <nuxt-link :to="`/categories/${categorie.slug}`">
          <h3 v-html="categorie.name"/>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, store, params }) {
    let categories = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/categorie_event`)
    store.commit('setCategories', categories.data)
  },
}
</script>

<style lang="css" scoped>
</style>
