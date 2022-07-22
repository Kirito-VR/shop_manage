<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <NavCom></NavCom>
<!--    <side-bar></side-bar>-->
    <div style="height: 620px">
      <div class="Sidebar">
        <ul class="SideList">
          <li @click="childRouter(item.name)" v-for="(item,index) in siderList" :key="index">
            <a>{{item.title}}</a>
          </li>
        </ul>
      </div>
      <ContentCom>
        <router-view></router-view>
      </ContentCom>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavCom from "../components/HomeComponents/NavCom";
// import SideBar from "../components/HomeComponents/SideBar";
import ContentCom from "../components/HomeComponents/ContentCom";
import router from "../router"
export default {
  name: 'HomeView',
  data(){
    return {
      siderList:[
        {id:1,name:"Good",title:"商品管理"},
        {id:2,name:"Order",title:"订单管理"},
        {id:3,name:"User",title:"用户管理"},
        {id:4,name:"Info",title:"个人中心"},
      ]
    }
  },
  components: {
    // HelloWorld
    NavCom,
    // SideBar,
    ContentCom
  },
  methods:{
    childRouter(item){
      router.push(item);
    }
  }
}
</script>
<style scoped>
  .home{
    width: 100%;
    height: 700px;
    background-color: beige;
  }
  .Sidebar{
    width: 20%;
    height: 100%;
    background-color: aliceblue;
    float: left;
  }
  .SideList > li{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid black;
    padding-top: 15px;
    font-size: 18px;
  }
</style>
