import {post} from "@/http/axios"

export function login(url,params) {
    return post(url,params)
}