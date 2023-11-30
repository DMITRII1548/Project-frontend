import router from "../../router/index"
import API from '../../api'
// import axios from "axios"

const state = {
    orders: [],
}

const getters = {
    orders: state => state.orders,
}

const mutations = {
    setOrders(state, orders) {
        state.orders = orders
    },
}

const actions = {
    getOrders({commit}) {
        API.get('/api/orders')
            .then(res => {
                commit('setOrders', res.data.data)
            })
    },

    deleteOrder({dispatch}, id) {
        API.delete(`/api/orders/${id}`)
            .then(res => {
                dispatch('getOrders')
            })
    },

    storeClient({dispatch}, data) {
        API.post(`/api/clients/`, {
            first_name_doc: data.first_name_doc,
            last_name_doc: data.last_name_doc,
            phone_number: data.phone_number,
            address: data.address
        })
            .then(res => {
                data.client = res.data

                dispatch('storeOrder', data)
            })
    },

    storeOrder({}, data) {
        API.post(`/api/orders/`, {
            client_id: data.client.id,
            product_id: data.product_id,
            dateBuy: data.dateBuy
        })
            .then(res => {
                alert(res.data)
            })
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}
