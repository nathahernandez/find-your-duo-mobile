import axios from 'axios'

const LOCAL_HOST = 'http://192.168.100.7:3000'

export const api = axios.create({
    baseURL: LOCAL_HOST
})