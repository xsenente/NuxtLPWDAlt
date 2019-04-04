<template>
  <footer>
    <div>
      <span
        class="fancy link" 
        to="/">
        <span>Titre</span>
      </span>
      <div>© {{ year }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
