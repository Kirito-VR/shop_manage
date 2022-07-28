import axios from "axios";
// import qs from "qs";
import config from "@/http/config";

const instance = axios.create({
        baseURL:config.baseURL,
        timeout:config.timeout
    }
);

instance.interceptors.request.use(
    config=>{
        let token = sessionStorage.getItem("token");
        if (token) {
            config.headers.token = token;
        }
        return config;
    },
    err=>{
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    response=>{
        return response.data.data;
    },
    err => {
        console.log(err);
    }
);

export  function get(url,params) {
    return instance.get(url,{params});
}
export function post(url, params) {
    return instance.post(url, params)
}