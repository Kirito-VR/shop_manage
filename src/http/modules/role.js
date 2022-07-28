import {get} from '@/http/axios'

export function findAll(url, params) {
    return get(url, params);
}