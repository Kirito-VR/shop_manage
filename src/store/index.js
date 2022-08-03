import {createStore} from "vuex";
import vuexAlong from "vuex-along";
import menu from "@/store/modules/menu";
import user from "@/store/modules/user";
import good from "@/store/modules/good";
import order from "@/store/modules/order"

const store=createStore({
   modules:{
       menu,user,good,order
   },
    plugins:[vuexAlong({navTree:"navTree",tagList:"tagList",goodInf:"goodInf"})]
});
export default store;