import articles from '../../api/articles';


// initial state
const state = {
  data: [],
  rendered: false,
}

// getters
const getters = {};

// actions
const actions = {
  getArticles({
    commit
  }) {
    articles.articelsRequest().then(data => {
      commit('setArticlesData', data);
      commit('setRenderedStatus');
    }
    )
  }
}

// mutations
const mutations = {
  setArticlesData(state, data) {
    state.data = data;
  },
  setRenderedStatus(state) {
    state.rendered = true;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}