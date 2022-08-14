export default {
    state:{
        perms:[],
        indexInfo:{
            userNum:0
        }
    },
    mutations:{
        setPerms(state,perms){
            state.perms = perms;
            console.log("给perms复制",perms);
        },
        setUserNum(state, perms) {
            console.log("给首页用户复制",perms);
            state.indexInfo.userNum = perms;
        }
    },
    action:{
        setPerms(ctx,payload){
            console.log(payload.data);
            ctx.commit(payload.type,payload.data);
        },
    },
    getters:{
        getUserNum(state){
            return state.indexInfo.userNum;
        }
    }
}