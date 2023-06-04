import { AxiosRequestConfig } from 'axios'

import { axiosConfig } from '../config/axios'
import { api } from '../config/api'

const { createInstance } = axiosConfig
const { baseURL } = api.reqres


const axiosRequestConfig: AxiosRequestConfig = {
    baseURL
}

const oAxios = createInstance(axiosRequestConfig)

export default oAxios