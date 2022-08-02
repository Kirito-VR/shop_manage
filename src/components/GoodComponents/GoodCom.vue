<template>
  <div class="button">
        <input type="text" placeholder="输入名称查询商品">
        <button >查询</button>
        <button @click="add">新增商品</button>
        <button >删除商品</button>

  </div>
    <div class="form">
      <table>
        <caption>商品信息</caption>
        <tr>
          <th> </th>
          <th>编号</th>
          <th>名称</th>
          <th>价格</th>
          <th>库存</th>
          <th>商品描述</th>
          <th>图片</th>
          <th></th>
        </tr>
        <tr v-for="(goodLi,index) in goodList" :key="goodLi.id">
          <th><input type="checkbox"></th>
          <td>{{ goodLi.id }}</td>
          <td>{{ goodLi.name }}</td>
          <td>{{ goodLi.price }}</td>
          <td>{{ goodLi.stock }}</td>
          <td>{{ goodLi.descripe }}</td>
          <td>{{ goodLi.imPath }}</td>
          <td><button class="revise" @click="revise(index)">修改商品信息</button></td>

        </tr>

      </table>
    </div>
  <good-chan v-show="chanStyle" ></good-chan>

  <good-add v-show="addStyle"></good-add>




</template>

<script>
    //import axios from "axios";
    //import {getGoodList} from "@/http/modules/good";

    import GoodChan from "@/components/GoodComponents/GoodChan";
    import GoodAdd from "@/components/GoodComponents/GoodAdd";

    export default {
        name: "GoodCom",
      components: {
          GoodChan,
          GoodAdd
      },
      data(){
          return{
            component:{
              GoodChan
            },
            new:{
              newHide:true,
              newShow:false,
            },
            display:"",
            goodList:[],
            infList:[],
            addForm:{
              id:"",
              name:"",
              price:"",
              stock:"",
              descripe:"",
              imPath:""
            },

            addStyle:false
            ,
            chanStyle:false


          }
      },

      methods:{
          add(){
            GoodAdd.display="display:block";
            this.addStyle=!this.addStyle;
          },
        revise(index){
          console.log(index);
          if(this.addStyle){
              this.addStyle=false
            }
          this.chanStyle=!this.chanStyle;


            console.log("index=",this.id)
        }


      },

      mounted:function () {
        this.$api.good.getGoodList('/good/getGoodList')
            .then(res => {
              console.log("成功拿到商品信息：",res);
              this.goodList=res;
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


.button{

}
</style>