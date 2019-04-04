import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    article: null,
    articles: [],
    page: null,
    evenement: null,
    evenements: [],
    categories: null,
    categorieEvents: [],
    wordpressAPI: 'http://xaviersenente.fr/WPNuxt/wp-json'
  },

  mutations: {
    setArticle (state, data) {
      state.article = data
    },
    setArticles (state, data) {
      state.articles = state.articles.concat(data)
    },
    setPage (state, data) {
      state.page = data
    },
    setEvent (state, data) {
      state.evenement = data
    },
    setEvents (state, data) {
      state.evenements = state.evenements.concat(data)
    },
    setCategories (state, data) {
      state.categories = data
    },
    setCategorieEvents (state, data) {
      state.categorieEvents.push(data)
    }
  }
})

export default store
