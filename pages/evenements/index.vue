<template>
  <div class="evenements">
    <EventList :evenements="$store.state.evenements"/>
  </div>
</template>

<script>
import EventList from '~/components/EventList'

export default {
  async asyncData ({ app, store, params }) {
    let evenements = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/evenement`)
    store.commit('setEvents', evenements.data)
  },

  components: {
    EventList
  }

}
</script>

<style lang="scss" scoped>

</style>
