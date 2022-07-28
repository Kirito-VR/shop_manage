export default {
    state:{
        navTree:[]
    },
    mutations:{
        setNavTree(state,navTree){
            state.navTree = navTree;
        },
    },
    actions: {
        /*
        如果有异步操作，网络请求某个数据后，再进行赋值
        异步：同时进行，不用等待；
         */
        setNavTree(ctx, payload) {
            console.log('载荷：', payload.data);
            console.log('type: ', payload.type)
            ctx.commit(payload.type, payload.data);//调用mutations的setNavTree
        }
    },
    getters: {
        getNavTree(state) {
            return state.navTree
        }
    }
}