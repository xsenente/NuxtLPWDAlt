<template>
  <div class="categorie">
    <h1>{{ categorie.name }}</h1>
    <EventList :evenements="categorieEvents.evenements"/>
  </div>
</template>

<script>
import find from 'lodash/find'

import EventList from '~/components/EventList'

export default {
  async asyncData ({ app, store, params }) {
    let categorie = find(store.state.categories, {'slug': params.categorie})
    let categorieEvents = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/evenement?orderby=date&per_page=10&categorie_event=${categorie.id}&_embed`)
    store.commit('setCategorieEvents', {slug: params.categorie, evenements: categorieEvents.data})
  },

  components: {
    EventList
  },

  computed: {
    categorie () {
      return find(this.$store.state.categories, {
        'slug': this.$route.params.categorie
      })
    },
    categorieEvents () {
      return find(this.$store.state.categorieEvents, {
        'slug': this.$route.params.categorie
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
