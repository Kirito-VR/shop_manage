export default {
    state:{
        goodInf:[],
        selInf:[],
        indexGood:{
            GoodNum:0
        }
    },
    mutations:{
        setGoodInf(state,goodInf){
            state.goodInf = goodInf;
        },
        setSelInf(state,selInf){
            state.selInf = selInf;
        },
        setGoodNum(state, perms) {
            console.log("给首页商品数复制",perms);
            state.indexGood.GoodNum = perms;

        }
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
        },
        getSelInf(state) {
            return state.selInf
        },
        getGoodNum(state){
            return state.indexGood.GoodNum;
        }

    }
}