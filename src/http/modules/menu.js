import {get} from "@/http/axios"

export function findNavTree(url,params) {
    return get(url,params)
}