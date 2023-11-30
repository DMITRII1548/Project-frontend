import router from "../../router/index"
import API from '../../api'
// import axios from "axios"

const state = {
    roles: [],
}

const getters = {
    roles: state => state.roles,
    role: state => state.role,
}

const mutations = {
    setRoles(state, roles) {
        state.roles = roles
    },

    setRole(state, role) {
        state.role = role
    }
}

const actions = {
    getRoles({commit}) {
        API.get('/api/roles')
            .then(res => {
                commit('setRoles', res.data)
            })
    },

    getRole({commit}, name) {
        API.get(`/api/roles/${name}`)  
            .then(res => {
                commit('setRole', res.data)
            })
    },

    storeRole({}, name) {
        API.post('/api/roles', {
            name: name,
        })
            .then(res => {
                router.push({name: 'role.index'})
            })
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}
