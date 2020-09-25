let base_url;

if (process.env.NODE_ENV === 'development') {
    base_url = 'http://huangjiangjun.top:9000/'
}

export default {
    base_url,
    timeout: 10000
}