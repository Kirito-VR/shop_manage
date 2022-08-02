import {get} from "@/http/axios";


// /order/getOrderList

// 查询订单表
export function getOrderList(url) {
    return get(url);
}
// 查询输入框查询的订单
export function findInputOrderIdList(url,order_id) {
    return get(url,order_id);
}
// 查询订单详情表
export function getOrderInfoList(url,orderinfo_oid){
    return get(url,orderinfo_oid);
}
// 删除订单表数据
export function delOrderData(url,order_id){
    return get(url,order_id);
}
// 保存修改的订单
export function saveModifyOrder(url,order_id,order_uid,order_Trademoney,order_Tradeld,status){
    return get(url,order_id,order_uid,order_Trademoney,order_Tradeld,status);
}

