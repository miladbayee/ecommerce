import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com';

const get = (url, config = {}) => {
    return axios.get(url, config)
}

const post = (url, params, config = {}) => {
    return axios.get(url, params, config)
}

export {
    get,
    post
}