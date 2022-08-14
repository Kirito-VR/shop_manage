import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from "@/http/index";
import store from "@/store/index";
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';



createApp(App).use(router).use(api).use(store).use(ElementPlus).mount('#app');

