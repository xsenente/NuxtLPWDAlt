<template>
  <div class="event-list card-deck">
    <b-card
      v-for="evenement in evenements"
      :title="evenement.title.rendered"
      :key="evenement.id"
      tag="evenement"
      class="mb-2">
      <p>{{ evenement.acf.Date }}</p>
      <ul
        v-for="categorie in evenement.acf.categorie"
        :key="categorie.id">
        <li>
          {{ categorie.name }}
        </li>
      </ul>
      <nuxt-link :to="`evenements/${evenement.slug}`">
        <b-button variant="primary">En savoir plus</b-button>
      </nuxt-link>
    </b-card>
  </div>
</template>

<script>

export default {
  props: {
    evenements: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
