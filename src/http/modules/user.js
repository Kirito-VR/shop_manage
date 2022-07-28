import {get} from "@/http/axios";



// /user/getUserList
// 查询用户列表
export  function getGUserList(url) {
    return get(url);
}