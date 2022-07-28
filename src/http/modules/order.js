
import {get} from "@/http/axios";



// /order/getOrderList

// 查询订单
export  function getOrderList(url) {
    return get(url);
}