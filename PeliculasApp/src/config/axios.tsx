import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

export const axiosConfig = {
    createInstance: ( axiosRequestConfig: AxiosRequestConfig ): AxiosInstance => {
        let oAxios = axios.create(axiosRequestConfig)
        oAxios.interceptors.response.use( 
            response => response,
            ( error: AxiosError ) => {
                const response = error.response
                console.warn(`-------WARNING-------\nBaseURL: ${ response?.config.baseURL }\nEndpoint: ${ response?.config.url }\nMethod: ${ response?.config.method }\nStatus: ${ response?.status }\nCode: ${ error.code }\nMessage: ${ error.message }`);
            }
        )
        return oAxios
    }
}