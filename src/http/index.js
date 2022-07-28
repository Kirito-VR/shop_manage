import api from  "@/http/api"

export default {
    install:(app)=>{
        app.config.globalProperties.$api=api;
    }
}