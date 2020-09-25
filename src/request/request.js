import axios from 'axios'

import HTTPCONFIG from './http_config'

let request = axios.create({
    baseURL: HTTPCONFIG.base_url,
    timeout: HTTPCONFIG.timeout,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})



export default {

    getAction(url, params) {
        return request({
            url,
            params,
            method: 'get'
        })
    },

    postAction(url, params) {
        return request({
            url,
            params,
            method: 'post'
        })
    }

}