<template>
  <b-container>
    <Header/>
    <main>
      <nuxt/>
    </main>
    <Footer/>
  </b-container>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
