export default {
    state:{
        goodInf:[]
    },
    mutations:{
        setGoodInf(state,goodInf){
            state.goodInf = goodInf;
        },
    },
    actions: {
        setGoodInf(ctx, payload) {
            console.log('载荷：', payload.data);
            console.log('type: ', payload.type)
            ctx.commit(payload.type, payload.data);//调用mutations的setGoodInf
        }
    },
    getters: {
        getGoodInf(state) {
            return state.goodInf
        }
    }
}