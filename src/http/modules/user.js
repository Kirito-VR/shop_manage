import {get,post} from "@/http/axios";

// /user/getUserList
// 查询用户列表
export  function getGUserList(url) {
    return get("/user"+url);
}
//查询获取用户
export function getUserListBysearch(url,param){
    return get("/user"+url,param);
}
export function changeUser(url,param){
    return post("/user"+url,param);
}
export function deleteUser(url,param)
{
    return post("/user"+url,param);
}
