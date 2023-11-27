import axios from "axios"
import router from "./router/index.js"

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Установите ваш основной URL здесь
})


// start request

api.interceptors.request.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return config
}, error => {
})

// end request



// start response

api.interceptors.response.use({}, error => {
    if (error.response.data.message === 'Token has expired') {
        return axios.post('/api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).
            then(res => {
                localStorage.setItem('access_token', res.data.access_token)

                error.config.headers.authorization = `Bearer ${res.data.access_token}`

                return api.request(error.config)
            })
    }
    if (error.response.status === 401) {
        localStorage.setItem('access_token', '')
        router.push({ name: 'login' })
    }
})

// end response

export default api
