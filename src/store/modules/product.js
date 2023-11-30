import router from "../../router/index"
import API from '../../api'
// import axios from "axios"

const state = {
    products: [],
    product: []
}

const getters = {
    products: state => state.products,
    product: state => state.product
}

const mutations = {
    setProducts(state, products) {
        state.products = products
    },

    setProduct(state, product) {
        state.product = product
    },
}

const actions = {
    getProducts({commit}) {
        API.get('/api/products')
            .then(res => {
                commit('setProducts', res.data)
            })
    },

    deleteProduct({dispatch}, id) {
        API.delete(`/api/products/${id}`)
            .then(res => {
                dispatch('getProducts')
            })
    },

    storeProduct({}, data) {
        API.post('/api/products', {
            name: data.name, 
            quantity: data.quantity,
            price: data.price,
            category_id: data.category_id
        })
            .then(res => {
                router.push({name: 'product.index'})
            })
    },

    updateProduct({}, data) {
        API.patch(`/api/products/${data.id}`, {
            name: data.name, 
            quantity: data.quantity,
            price: data.price,
            category_id: data.category_id
        })
            .then(res => {
                router.push({name: 'product.index'})
            })
    },

    getProduct({commit}, id) {
      API.get(`/api/products/${id}`)
          .then(res => {
              commit('setProduct', res.data)
          })
    },

    getProductsByCategory({commit}, id) {
        API.get(`/api/category/products-by-Category/${id}`)
            .then(res => {
                commit('setProducts', res.data)
            })
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}
