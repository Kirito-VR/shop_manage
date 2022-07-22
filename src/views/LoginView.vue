<template>
    <div class="Login_view">
        <div class="LoginCom">
            <span @click="Show(1)" >登陆</span>
            <span @click="Show(2)" >注册</span>
            <login-com :style="cover"></login-com>
            <SignCom :style="back"></SignCom>
        </div>
    </div>
</template>

<script>
    import LoginCom from "../components/indexComponents/LoginCom";
    import SignCom from "../components/indexComponents/SignCom";
    export default {
        name: "LoginView",
        data(){
            return{

                    cover:{
                        marginTop: "50px",
                        display:"block",
                    },
                    back:{
                        marginTop: "50px",
                        display:"none",
                    }

            }
        },
        components:{
            LoginCom,
            SignCom
        },
        methods:{
            Show(index){
                // console.log(e.target);
                if(index==1){
                    this.back.display="block";
                    this.cover.display="none";
                }else{
                    this.cover.display="block";
                    this.back.display="none";
                }
            }
        }
    }
</script>

<style scoped>
    .Login_view{
        width: 100%;
        background-color: #42b983;
        height: 550px;

        padding-top: 100px;
    }
    .LoginCom{
        margin: 0 auto;
        width: 400px;
        height: 450px;
        background-color: white;
    }
    span{
        /*margin-bottom: 10px;*/
        height: 50px;
        padding-top: 10px;
        width: 199.5px;
        position: relative;
        list-style: none;
        font-size: 20px;
        /*background-color: #2c3e50;*/
        color: #42b983;
        float: left;
        /*z-index: 5;*/
    }
    span:nth-of-type(1){
          border-right: 1px solid #42b983;
        border-bottom:antiquewhite;
        background-color: #2c3e50;

    }
    span:nth-of-type(2){
        background-color: antiquewhite;
        border-bottom:#2c3e50;
    }

</style>