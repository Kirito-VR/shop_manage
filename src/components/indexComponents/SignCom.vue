<template>
    <div class="Sign_com">
        <div>
            <label for="username">账号:</label><input id="username" type="text" v-model="SignData.username"/><br>
            <label for="password">密码:</label> <input id="password" type="text" v-model="SignData.password"/><br>
            <input @click="Login_fun" class="Login_sub" type="submit"  value="登陆"/>
        </div>
    </div>
</template>

<script>


    export default {
        name: "SignCom",
        data(){
            return {
                SignData:{
                    username:"liwei",
                    password:"lw1234"
                },
            }
        },
        methods:{
            Login_fun(){
                console.log(this.SignData.username);

                this.$api.login.login("/login",this.SignData)
                    .then(res=>{
                        console.log("返回结果",res.token);
                        sessionStorage.setItem("token",res.token);
                        this.$api.menu.findNavTree("menu/findNavTree",{"userName":this.SignData.username})
                            .then(res=>{
                                console.log("菜单树"+res);
                                this.$store.dispatch({
                                    type:"setNavTree",
                                    data:res
                                });

                                return new Promise((resolve,reject) =>{
                                    let a =false;
                                    resolve(this.SignData.username);
                                    if(a){
                                        reject("出错了");
                                    }
                                })
                            }).then(res=>{
                            console.log(res);
                            this.$api.sys_user.findPermissions("user/findPermissions",{"userName":res})
                        });
                        this.$router.push('/home');

                    }).catch(err=>{
                    console.log(err);
                    this.$router.push("/");
                });



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