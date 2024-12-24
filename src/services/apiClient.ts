import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '2181e0ddf89f4f33a14b12221ffe59b9'
    }
})