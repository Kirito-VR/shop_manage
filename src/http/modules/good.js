import {get} from "@/http/axios";


// /good/getGoodList
// 查询商品列表
export  function getGoodList(url) {
    return get(url);
}
export  function addGoodList(url,params) {
    return get(url,params);
}
export  function delGoodList(url,params) {
    return get(url,params);
}
export  function resGoodList(url,params) {
    return get(url,params);
}
export  function selGoodList(url,params) {
    return get(url,params);
}