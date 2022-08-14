import {get,post} from "@/http/axios";

// /order/getOrderList

// 查询订单表
export function getOrderList(url) {
    return get(url);
}

// 查询输入框查询的订单
export function findInputOrderIdList(url, id) {
    return get(url, id);
}

// 查询订单详情表
export function getOrderInfoList(url, id) {
    return get(url, id);
}

// 删除订单表数据
export function delOrderData(url, order_id) {
    return get(url, order_id);
}

// 保存修改的订单
export function saveModifyOrder(url, params) {
    return post(url, params);
//    id, user_id, order_sn, order_status, confignee, mobile, address, goods_price, freight_price, coupon_price, integral_price, groupon_price, order_price, actual_price, pay_id, pay_time, ship_sn, ship_channel, ship_time, confirm_time, comments, end_time, deleted
}
