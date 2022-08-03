export default {
    state:{
        indexOrder:{
            OrderNum:0
        }
    },

    mutations:{
        setOrderNum(state, perms) {
            console.log("给首页订单数复制",perms);
            state.indexOrder.OrderNum = perms;

        }
    },

    getters:{
        getOrderNum(state){
            return state.indexOrder.OrderNum;
        }
    }
}