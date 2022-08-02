<template>
  <div class="button">
        <input type="text" placeholder="输入名称查询商品" v-model="this.selForm.name">
        <button @click="select">查询</button>
        <button @click="add">新增商品</button>
  </div>
  <div class="form2" v-show="selStyle">
    <table>
      <caption>商品信息</caption>
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>价格</th>
        <th>库存</th>
        <th>商品描述</th>
        <th>图片</th>
        <th></th>
      </tr>
      <tr v-for="(selLi,index) in selList" :key="selLi.id">
        <!--          <th><input type="checkbox"></th>-->
        <td>{{ selLi.id }}</td>
        <td>{{ selLi.name }}</td>
        <td>{{ selLi.price }}</td>
        <td>{{ selLi.stock }}</td>
        <td>{{ selLi.descripe }}</td>
        <td>{{ selLi.imPath }}</td>
        <td>
          <button class="revise" @click="revise(index)">修改商品信息</button>
        </td>
        <td>
          <button @click="del(index)">删除商品</button>
        </td>
      </tr>

    </table>
    <button class="form2Return" @click="form2Return">返回</button>


  </div>
    <div class="form" v-show="formStyle">
      <table>
        <caption>商品信息</caption>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>价格</th>
          <th>库存</th>
          <th>商品描述</th>
          <th>图片</th>
          <th></th>
        </tr>
        <tr v-for="(goodLi,index) in goodInf" :key="goodLi.id">
<!--          <th><input type="checkbox"></th>-->
          <td>{{ goodLi.id }}</td>
          <td>{{ goodLi.name }}</td>
          <td>{{ goodLi.price }}</td>
          <td>{{ goodLi.stock }}</td>
          <td>{{ goodLi.descripe }}</td>
          <td>{{ goodLi.imPath }}</td>
          <td>
            <button class="revise" @click="revise(index)">修改商品信息</button>

          </td>
          <td>
            <button @click="del(index)">删除商品</button>
          </td>
        </tr>
      </table>
    </div>
  <good-chan v-if="chanStyle" :data="this.index"></good-chan>

  <good-add v-show="addStyle"></good-add>
  <good-del v-if="delStyle" :data="this.index"></good-del>


</template>

<script>
    //import axios from "axios";
    //import {getGoodList} from "@/http/modules/good";

    import GoodChan from "@/components/GoodComponents/GoodChan";
    import GoodAdd from "@/components/GoodComponents/GoodAdd";
    import GoodDel from "@/components/GoodComponents/GoodDel";

    export default {
        name: "GoodCom",
      components: {
          GoodChan,
          GoodAdd,
        GoodDel
      },
      data(){
          return{
            index:0,
            component:{
              GoodChan
            },
            new:{
              newHide:true,
              newShow:false,
            },
            display:"",
            goodList:[],
            selList:[],
            infList:[],
            addForm:{
              id:"",
              name:"",
              price:"",
              stock:"",
              descripe:"",
              imPath:""
            },
            selForm:{
              id:"1",
              name:"",
              price:"1",
              stock:"1",
              descripe:"1",
              imPath:"1"
            },

            addStyle:false,
            chanStyle:false,
            delStyle:false,
            selStyle:false,
            formStyle:true

          }
      },
      computed:{
        goodInf() {
          let inf = this.$store.getters.getGoodInf;
          return inf;
        }
      },

      methods:{
          add(){
            if(this.chanStyle){
              this.chanStyle=false
            }
            if(this.delStyle){
              this.delStyle=false
            }
            this.addStyle=!this.addStyle;
          },
        form2Return(){
          this.selStyle=!this.selStyle;
          this.formStyle=!this.formStyle;
        },
        revise(index){
          // console.log(index);
          if(this.addStyle){
              this.addStyle=false
            }
          if(this.delStyle){
            this.delStyle=false
          }
          this.chanStyle=!this.chanStyle;
          this.index = index;
        },
        del(index){
          if(this.addStyle){
            this.addStyle=false
          }
          if(this.chanStyle){
            this.chanStyle=false
          }
          this.delStyle=!this.delStyle;
          this.index = index;
        },
        select(){
          this.$api.good.selGoodList('/good/selGoodList',this.selForm)
              .then(res => {
                this.selList=res;
                console.log("返回的：",res)
                //this.$store.commit('setGoodInf',res);
                return new Promise((resolve,reject)=>{  //若这里不手动设置一个promise，那么.then返回的就是一个空的（undefind）
                  let a=false;
                  resolve("马上获取权限");
                  if(a){
                    reject("出错了");
                  }
                })
              })
          this.selStyle=!this.selStyle;
          this.formStyle=!this.formStyle;

        }


      },

      mounted:function () {
        this.$api.good.getGoodList('/good/getGoodList')
            .then(res => {
              console.log("成功拿到商品信息：",res);
              this.goodList=res;
              this.$store.commit('setGoodInf',res);
              return new Promise((resolve,reject)=>{  //若这里不手动设置一个promise，那么.then返回的就是一个空的（undefind）
                let a=false;
                resolve("马上获取权限");
                if(a){
                  reject("出错了");
                }
              })
            })
      }
    }
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

td {
  padding-left: 10px;
  padding-right: 10px;
}


.form{
  width: 70%;
  height: 500px;
  background-color: chartreuse;
  float: left;
  display: block;
}
.form2{
  width: 70%;
  height: 500px;
  background-color: chartreuse;
  float: left;
  display: block;
}
.form2Return{
  position: relative;
 left:-100px;
}
</style>