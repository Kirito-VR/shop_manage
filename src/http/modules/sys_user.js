import * as axios from "@/http/axios";

export function findPermissions(url,params){
    return axios.get(url,params);
}