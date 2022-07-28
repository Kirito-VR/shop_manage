export default {
    state:{
        perms:[]
    },

    mutations:{
        setPerms(state,perms){
            state.perms = perms;
            console.log("给perms复制",perms);
        }
    },
    action:{

        setPerms(ctx,payload){
            console.log(payload.data);
            ctx.commit(payload.type,payload.data);
        }
    }
}