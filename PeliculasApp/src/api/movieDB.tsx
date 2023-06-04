import { AxiosRequestConfig, AxiosInstance } from 'axios'

import { axiosConfig } from '../config/axios'
import { api } from '../config/api'

const { createInstance } = axiosConfig
const { baseURL } = api.themoviedb

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL,
    params: {
        api_key: '836da5bbd23775db41872414e0a54577',
        language: 'es-ES'
    }
}

export const movieDB: AxiosInstance = createInstance(axiosRequestConfig)