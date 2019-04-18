import articles from '../../api/articles';


// initial state
const state = {
  data: [],
  rendered: false,
  currentData: {},
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
  },
  getCurrentArticle({ commit }, id) {
    let curData = {};
    state.data.filter(article => {
      if (article.id === id) {
        for (let item in article) {
          curData[item] = article[item]
        }
      }
    },
      commit('setCurrentData', curData),
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
  setCurrentData(state, data) {
    state.currentData = data;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}