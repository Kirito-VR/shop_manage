<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <NavCom></NavCom>
<!--    <side-bar></side-bar>-->
    <div style="height: 620px">
        <side-bar></side-bar>

        <div class="content_tag">
            <li v-for="( tag,index) in tagList" :key="index" >{{tag.title}}<button @click="closeTag(index)" style="float: right;border: none">×</button></li>
        </div>
      <ContentCom>
        <router-view ></router-view>
      </ContentCom>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavCom from "../components/HomeComponents/NavCom";
import SideBar from "../components/HomeComponents/SideBar";
import ContentCom from "../components/HomeComponents/ContentCom";
import router from "../router"
export default {
  name: 'HomeView',
  data(){
    return {
       siderList:[
        {id:1,name:"Good",title:"商品管理",
            style:{display:"none"},
            child:[
                {id:6,name:"/home/Good",title:"商品管理"}
            ],
            isShow:false
        },
        {id:2,name:"Order",title:"订单管理",
            style:{display:"none"},
            child:[
                {id:7,name:"/home/Order",title:"订单管理"}
            ],
            isShow:false},
        {id:3,name:"User",title:"用户管理",
            style:{display:"none"},
            child:[
                {id:8,name:"/home/User",title:"用户管理"}
            ],
            isShow:false},
        {id:4,name:"Info",title:"个人中心",
            style:{display:"none"},
            child:[
                {id:9,name:"/home/Info",title:"个人中心"}
            ],
            isShow:false},
        {id:5,name:"Serve",title:"服务中心",
            style:{display:"none"},
            child:[
                {id:10,name:"/home/AfterServe",title:"售后服务"},
                {id:11,name:"/home/AfterServe",title:"商品服务"},
                {id:12,name:"/home/QA",title:"疑难解答"}
            ],
            isShow:false},

      ],
        tagList:[
            // {id:1,name:"Good",title:"商品管理",tagFocus:{backgroundColor:"white"}},
            // {id:2,name:"Order",title:"订单管理",tagFocus:{backgroundColor:"white"}},
            // {id:3,name:"User",title:"用户管理",tagFocus:{backgroundColor:"white"}},
            // {id:4,name:"Info",title:"个人中心",tagFocus:{backgroundColor:"white"}}
        ]
    }
  },
  components: {
    // HelloWorld
    NavCom,
    SideBar,
    ContentCom
  }, computed:{

    },

  methods:{
    childRouter(item){
      this.$router.push(item.name);
      var flag = false;

      for(var i=0;i<this.tagList.length;i++){
          if(item.id ==this.tagList[i].id){
              flag =true;
          }
      }
        if(!flag){
            this.tagList.push(item);
        }
    },closeTag(index){

        this.tagList.splice(index,1);
          console.log(index);
          if(this.tagList.length!=0){
              if(index!=0){
                  router.push(this.tagList[index-1].name);
              }else {
                  router.push(this.tagList[index].name);
              }

          }else {
              router.push("Good");
          }

      },
      showChild(id){
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
  .SideList{
      /*position: relative;*/
  }
  .SideList>li{
      width: 100%;
      /*height: 40px;*/
      /*border-bottom: 1px solid black;*/
      padding-top: 15px;
      font-size: 18px;
      position: relative;
  }
  .SideList>li>a{
      margin: 0;
      padding: 0;
      width: 100px;
      height: 80px;
      border-bottom: 1px solid black;
      background-color: cadetblue;
      /*padding-top: 15px;*/
      font-size: 18px;
      /*position: relative;*/
  }
  .itemUl{
      position: relative;
  }

  .itemUl>li{
      /*position: relative;*/
      width: 100%;
      /*height: 80px;*/
      border: 1px solid black;
      background-color: #42b983;
      padding-top: 15px;
      font-size: 16px;

  }
    .content_tag{
        background-color:cadetblue;
        height: 5%;
        width: 100%;
    }
    .content_tag li{
        text-align: center;
        margin: 0;
        background-color: white;
        height: 100%;
        width: 100px;
        float: left;
        list-style: none;
        border-left: 1px solid #42b983;
        font-size: 18px;
    }
    a{
        text-decoration: none;
        width: 100%;
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
