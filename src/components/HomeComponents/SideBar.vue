<template>
    <div class="Sidebar">
        <ul class="SideList">
            <li  v-for="(item,index) in siderList" :key="index" >
                <a @click="item.isShow=!item.isShow" href="#">{{item.title}}</a>
                <transition name="List">
                    <ul class="itemUl" v-if="item.child.length>0" v-show="item.isShow">
                        <li v-for="(sec) in item.child" :key="sec.id" >
                            <router-link :to="sec.name">{{sec.title}}</router-link>
<!--                            <a @click="childRouter(sec)" href="#"></a>-->
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data(){
            return {
                siderList:[
                    {
                        id:1,name:"/home/App",title:"首页",
                        style:{display:"none"},
                        child:[{id:14,name:"/home/App",title:"首页"}],
                        isShow:false
                    },
                    {id:2,name:"Good",title:"商品管理",
                        style:{display:"none"},
                        child:[
                            {id:7,name:"/home/Good",title:"商品管理"}
                        ],
                        isShow:false
                    },
                    {id:3,name:"Order",title:"订单管理",
                        style:{display:"none"},
                        child:[
                            {id:8,name:"/home/Order",title:"订单管理"}
                        ],
                        isShow:false},
                    {id:4,name:"User",title:"用户管理",
                        style:{display:"none"},
                        child:[
                            {id:9,name:"/home/User",title:"用户管理"}
                        ],
                        isShow:false},
                    {id:5,name:"Info",title:"个人中心",
                        style:{display:"none"},
                        child:[
                            {id:10,name:"/home/Info",title:"个人中心"}
                        ],
                        isShow:false},
                    {id:6,name:"Serve",title:"服务中心",
                        style:{display:"none"},
                        child:[
                            {id:12,name:"/home/AfterServe",title:"售后服务"},
                            {id:13,name:"/home/GoodServe",title:"商品服务"},
                            {id:13,name:"/home/QA",title:"疑难解答"}
                        ],
                        isShow:false},

                ],
            }
        },
        methods:{
            childRouter(item){
                var flag = false;

                for(var i=0;i<this.tagList.length;i++){
                    if(item.id ==this.tagList[i].id){
                        flag =true;
                    }
                }
                if(!flag){
                    this.$store.commit("addTagList",item);
                }
            },showChild(id){
                if(this.siderList[id-1].style.display=="none"){
                    this.siderList[id-1].style.display="block";
                }else {
                    this.siderList[id-1].style.display="none"
                }


            }
        }
    }
</script>

<style scoped>
    .Sidebar{
        position: relative;
        width: 20%;
        height: 100%;
        background-color:aliceblue;
        float: left;
    }
    .SideList{
        /*position: relative;*/
      text-decoration:none;
      text-decoration:underline;
    }
    .SideList>li{
        width: 100%;
        /*height: 40px;*/
        /*border-bottom: 1px solid black;*/
        padding-top: 15px;
        font-size: 18px;
        position: relative;
        text-decoration:none;
        text-decoration:underline;
        list-style:none
    }
    .SideList>li>a{
        margin: 0;
        padding: 0;
        width: 100px;
        height: 80px;
        /*border-bottom: 1px solid black;*/
        background-color: paleturquoise;
        /*padding-top: 15px;*/
        font-size: 18px;
        /*position: relative;*/
      border-radius: 5px;
        text-decoration:none
    }
    .itemUl{
        position: relative;
    }

    .itemUl>li{
        /*position: relative;*/
        margin-left: 25%;
        width: 50%;
        /*height: 80px;*/
        /*border: 1px solid black;*/
        border-radius: 10px;
        background-color: honeydew;
        padding-top: 15px;
        font-size: 16px;
        text-decoration:none;
        list-style:none

    }

    .List-enter-from,.List-leave-to{
        transform-origin: 0 0;
        transform: scaleY(0);
        transition: 0.5s ease;
    }

    .List-enter-to,.List-leave-from{
        transform: scaleY(1);
        transition: 0.5s ease;
    }

    .List-enter-active,
    .List-leave-active{
        /*transition: 0.2s ease;*/
    }
</style>