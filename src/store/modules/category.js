import router from "../../router/index"
import API from '../../api'
// import axios from "axios"

const state = {
    categories: [],
    category: [],
}

const getters = {
    categories: state => state.categories,
    category: state => state.category,
}

const mutations = {
    setCategories(state, categories) {
        state.categories = categories
    },

    setCategory(state, category) {
        state.category = category
    }
}

const actions = {
    getCategories({commit}) {
        API.get('http://127.0.0.1:8000/api/category/categories')
            .then(res => {
              commit('setCategories', res.data)
            })
    },

    deleteCategory({dispatch}, id) {
      API.delete(`/api/category/delete-Category/${id}`)
        .then(res => {
          if (res.data === 'successfully deleted') {
            dispatch('getCategories')
          }
        })
    },

    restoreCategory({dispatch}) {
      API.post('/api/category/restore-Category')
        .then(res => {
          dispatch('getCategories')
        })
    },

    getCategory({commit}, id) {
        API.get(`/api/category/${id}`)
            .then(res => {
                commit('setCategory', res.data)
            })
    },

    updateCategory({}, data) {
        API.put(`/api/category/update-Category/${data.id}`, {
            name: data.name
        })
            .then(res => {
                alert(res.data)
            })
    },

    storeCategory({}, data) {
        API.post(`/api/category/store-Category`, {
            name: data.name
        })
            .then(res => {
                alert(res.data)
            })
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}
