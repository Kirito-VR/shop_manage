import {createStore} from "vuex";
import vuexAlong from "vuex-along";
import menu from "@/store/modules/menu";
import user from "@/store/modules/user";
import good from "@/store/modules/good";
const store=createStore({
   modules:{
       menu,user,good
   },
    plugins:[vuexAlong({navTree:"navTree",tagList:"tagList",goodInf:"goodInf"})]
});
export default store;