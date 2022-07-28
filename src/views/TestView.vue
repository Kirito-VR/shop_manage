<template>
    <div class="Test">
        <transition name="yun">
            <div class="TestShow" v-if="isShow" @click="isShow=!isShow">HELLO</div>
        </transition>
        <SignCom></SignCom>
        <SideBar></SideBar>
        <div style="width: 80%;float: left;height: 100%;background-color: aqua">
            <router-view ></router-view>
        </div>
        <div>
            <ul>
                <li v-for="li in navList" :key="li.id">{{li.name}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import SignCom from "../components/indexComponents/SignCom";
    import SideBar from "../components/HomeComponents/SideBar";
    export default {
        name: "TestView",

        components: {SignCom,SideBar},
        data(){
            return{
                isShow:true,
                navList:[]
            }
        },
        mounted:function () {
            this.$api.menu.findNavTree("/menu/findNavTree",{"userName":"liwei"})
                .then(res=>{
                    this.navList=res;
                    console.log(res);
                })
        }
    }
</script>

<style scoped>
.Test{
    width: 100%;
    height: 600px;
    background-color: blueviolet;
}

.TestShow{
    width:100px;
    height: 100px;
    background-color: aqua;
}
    .yun-enter-from,.yun-leave-to{
        opacity: 0;
    }

    .yun-enter-to,.yun-leave-from{
        opacity: 1;
    }

    .yun-enter-active,
    .yun-leave-active{
        transition: opacity 2s ease;
    }

</style>