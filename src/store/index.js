import {createStore} from "vuex";
import vuexAlong from "vuex-along";
import menu from "@/store/modules/menu";
import user from "@/store/modules/user";

const store=createStore({
   modules:{
       menu,user
   },
    plugins:[vuexAlong({navTree:"navTree",tagList:"tagList"})]
});
export default store;