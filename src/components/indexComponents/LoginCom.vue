<template>
    <div class="Login_com">
        <div>
            <label for="phone">手机号:</label><input id="phone" type="text" :value="LoginData.userPhone"/><br>
            <label for="username">用户名:</label><input id="username" type="text" :value="LoginData.username"/><br>
            <label for="password">密码:</label> <input id="password" type="text" :value="LoginData.password"/><br>
            <label for="check">验证码:</label><input id="check" type="text"/><br>
            <input class="Login_sub" type="submit"  value="注册"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginCom",
        data(){
            return {
                LoginData:{
                    userPhone:"",
                    username:"",
                    password:""
                }
            }
        }

    }
</script>

<style scoped>
    .Login_com{
        position: absolute;
        margin: 0 auto;
        width: 400px;
        height: 400px;
        background-color: antiquewhite;

    }
    label{
        color: #2c3e50;
        font-size: 18px;
    }

    input{
        height: 20px;
        border-radius: 10px;
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