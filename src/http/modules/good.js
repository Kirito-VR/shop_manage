import {get} from "@/http/axios";



// /good/getGoodList
// 查询商品列表
export  function getGoodList(url) {
    return get(url);
}