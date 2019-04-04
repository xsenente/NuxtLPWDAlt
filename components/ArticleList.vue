<template>
  <div class="article-list card-deck">
    <b-card
      v-for="article in articles"
      :title="article.title.rendered"
      :key="article.id"
      tag="article"
      class="mb-2">
      <progressive-img
        :src="article.better_featured_image.media_details.sizes.large.source_url"
        :placeholder="article.better_featured_image.media_details.sizes.medium.source_url"
        :blur="10"
      />
      <p
        class="card-text"
        v-html="article.excerpt.rendered"/>
      <nuxt-link :to="`/${article.slug}`">
        <b-button variant="primary">En savoir plus</b-button>
      </nuxt-link>
    </b-card>
  </div>
</template>

<script>

export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
