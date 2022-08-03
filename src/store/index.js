import {createStore} from "vuex";
import vuexAlong from "vuex-along";
import menu from "@/store/modules/menu";
import user from "@/store/modules/user";
import order from "@/store/modules/order"

const store=createStore({
   modules:{
       menu,user,order
   },
    plugins:[vuexAlong({navTree:"navTree",tagList:"tagList"})]
});
export default store;