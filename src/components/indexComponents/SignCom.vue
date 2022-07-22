<template>
    <div class="Sign_com">
        <div>
            <label for="username">账号:</label><input id="username" type="text" :value="SignData.username"/><br>
            <label for="password">密码:</label> <input id="password" type="text" :value="SignData.password"/><br>
            <input @click="Login_fun" class="Login_sub" type="submit"  value="登陆"/>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "SignCom",
        data(){
            return {
                SignData:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            Login_fun(){
               router.push('/home');
            }
        }
    }
</script>

<style scoped>
    .Sign_com{
        position: absolute;
        margin: 0 auto;

        /*right: 200px;*/
        width: 400px;
        height: 400px;
        background-color: #2c3e50;

    }
    label{
        color: white;
        font-size: 18px;
    }
    input{
        height: 20px;
        border: 1px solid white;
        border-radius: 5px;
    }
    .Login_sub{
        /*align-items: center;*/
        margin: 20px auto;
        width: 200px;
        height: 30px;
        background-color: white;
        font-size: 18px;
        border: 1px solid black;
        border-radius: 5px;
    }

</style>