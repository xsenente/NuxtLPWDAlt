<template>
  <header>

    <b-navbar
      toggleable="md"
      type="dark"
      variant="info">
      <b-navbar-toggle target="nav_collapse"/>
      <b-navbar-brand
        to="/"
        exact>WP + Nuxt !</b-navbar-brand>
      <b-collapse
        id="nav_collapse"
        is-nav>
        <b-navbar-nav>
          <b-nav-item
            to="/"
            exact>
            Articles
          </b-nav-item>
          <b-nav-item
            to="/evenements"
            exact>
            Evenements
          </b-nav-item>
          <b-nav-item
            to="/categories"
            exact>
            Catégories
          </b-nav-item>
          <b-nav-item
            to="/pages/page-d-exemple">
            Sample Page
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </header>
</template>

<script>


</script>

<style lang="scss" scoped>

</style>
