import router from "../../router/index"
import API from '../../api'
// import axios from "axios"

const state = {
    posts: [],
    post: [],
    user: []
}

const getters = {
    posts: state => state.posts,
    user: state => state.user,
    post: state => state.post
}

const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setUser(state, user) {
        state.user = user
    },

    setPost(state, post) {
        state.post = post
    },
}

const actions = {
    getPosts({commit}) {
        API.get('/api/post/posts-controller')
            .then(res => {
                commit('setPosts', res.data)
            })
    },

    getAll({commit}) {
        API.get('/api/post/post-all')
            .then(res => {
                commit('setPosts', res.data)
            })
    },

    createPost({dispatch}) {
        API.post('/api/post/post-create')
            .then(res => {
                alert(res.data)
                dispatch('getAll')
            })
    },

    storePost({}, data) {
        API.post('/api/post/post-store', {
            title: data.title,
            userId: data.user.id,
            body: data.body,
            reactions: data.reactions,
            tags: ["Nurkhan", "Abylai", "Islambek"]
        })
            .then(res => {
                alert(res.data)
            })
    },

    getMe({commit}) {
        API.post('/api/auth/me')
            .then(res => {
                commit('setUser', res.data)
            })
    },

    updatePost({}, data) {
        API.put(`/api/post/post-update/${data.id}`, {
            title: data.title,
            userId: data.userId,
            body: data.body,
            reactions: data.reactions,
            tags: ["Nurkhan", "Abylai", "Islambek"]
        })
            .then(res => {
                alert(res.data)
            })
    },

    getPost({commit}, id) {
      API.get(`/api/post/post/${id}`)
          .then(res => {
              commit('setPost', res.data)
          })
    },

    getPostById({commit}, id) {
        API.get(`/api/post/post/${id}`)
            .then(res => {
                commit('setPost', res.data)
            })
    },

    getPostByTitle({commit}, title) {
        API.get(`/api/post/post-by-title/${title}`)
            .then(res => {
                commit('setPost', res.data)
            })
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}
