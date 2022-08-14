<template>
  <div class="button">
        <input type="text" placeholder="输入名称查询商品" v-model="this.selForm.goods_name">
        <button @click="select">查询</button>
        <button @click="add">新增商品</button>
  </div>
  <div class="form2" v-show="selStyle">
    <table>
      <caption>商品信息</caption>
      <tr>
        <th>商品编号</th>
        <th>商品名称</th>

        <th>商品简介</th>
        <th>是否上架</th>

        <th>是否新品首发</th>
        <th>是否人气推荐</th>
        <th>商品单位</th>
        <th>专柜价格</th>
        <th>零售价格</th>

        <th></th>
      </tr>
      <tr v-for="(selLi,index) in selList" :key="selLi.id">
        <!--          <th><input type="checkbox"></th>-->
        <td>{{ selLi.good_sn }}</td>
        <td>{{ selLi.goods_name}}</td>
        <td>{{ selLi.brief }}</td>
        <td>{{ selLi.is_on_sale }}</td>
        <td>{{ selLi.is_new }}</td>
        <td>{{ selLi.is_hot }}</td>
        <td>{{ selLi.unit }}</td>
        <td>{{ selLi.counter_price }}</td>
        <td>{{ selLi.retail_price }}</td>
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
<!--          <th>编号</th>-->
          <th>商品编号</th>
          <th>商品名称</th>
<!--          <th>商品所属类目ID</th>-->
<!--          <th>品牌id</th>-->
<!--          <th>商品宣传图片</th>-->
<!--          <th>商品关键字</th>-->
          <th>商品简介</th>
          <th>是否上架</th>
<!--          <th>排序</th>-->
<!--          <th>商品页面图片</th>-->
<!--          <th>商品分享朋友圈图片</th>-->
          <th>是否新品首发</th>
          <th>是否人气推荐</th>
          <th>商品单位</th>
          <th>专柜价格</th>
          <th>零售价格</th>

          <th></th>
        </tr>
        <tr v-for="(goodLi,index) in goodInf" :key="goodLi.id">
<!--          <th><input type="checkbox"></th>-->
<!--          <td>{{ goodLi.id }}</td>-->
          <td>{{ goodLi.good_sn }}</td>
          <td>{{ goodLi.goods_name}}</td>

          <td>{{ goodLi.brief }}</td>
          <td>{{ goodLi.is_on_sale }}</td>

          <td>{{ goodLi.is_new }}</td>
          <td>{{ goodLi.is_hot }}</td>
          <td>{{ goodLi.unit }}</td>
          <td>{{ goodLi.counter_price }}</td>
          <td>{{ goodLi.retail_price }}</td>



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

            selForm:{
              id:"1",
              goods_sn:"1",
              goods_name:"",
              category_id:"1",
              brand_id:"1",
              gallery:"1",
              keywords:"1",
              brief:"1",
              is_on_sale:"1",
              sort_order:"1",
              pic_url:"1",
              share_url:"1",
              is_new:"1",
              is_hot:"1",
              unit:"1",
              counter_price:"1",
              retail_price:"1",
              detail:"1",
              deleted:"1",
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