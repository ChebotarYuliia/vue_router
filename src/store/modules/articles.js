import articles from '../../api/articles';


// initial state
const state = {
  data: [],
  currentId: 1
}

// getters
const getters = {
  getArticles(state) {
    return state.data;
  },
  getCurrentArticle(state) {
      let currentData = {};
      state.data.filter(article => {
        if (article.id === state.currentId) {
          for (let item in article) {
            currentData[item] = article[item]
          }
        }
      })
      return currentData;
  }
};

// actions
const actions = {
  makeArticlesRequest({
    commit
  }) {
    console.log('action with api')
    return articles.articelsRequest().then(data => {
      commit('setArticlesData', data);
    }
    )
  },
  setCurrentId({commit}, id){
    commit('setCurrentId', id);
  }
}

// mutations
const mutations = {
  setArticlesData(state, data) {
    state.data = data;
  },
  setCurrentId(state, id){
    state.currentId = id;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}