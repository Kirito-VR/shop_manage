
<template>
  <div class="button">
    <el-row>
      <el-col span="12">
        <div>
          <el-input clearable type="text" prefix-icon="el-icon-search" placeholder="输入名称查询商品"  v-model="this.selForm.goods_name"></el-input>
        </div>
      </el-col >
      <el-col span="8">
          <div>
            <el-button @click="select" class="select-button">查询</el-button>
          </div>
      </el-col>
    </el-row>
        <el-button @click="add">新增商品</el-button>
  </div>
  <div class="form2" v-show="selStyle">
    <el-table
        :data="selList"
        height="450">
        <el-table-column
            prop="goods_name"
            label="商品名称"
            align="center"
            >
        </el-table-column>
<!--      <el-table-column-->
<!--          prop="gallery"-->
<!--          label="商品图片"-->
<!--          align="center"-->
<!--      >-->
<!--          <el-img :src="this.addForm.gallery" alt="" width="60px" height="60px"> </el-img>-->
<!--      </el-table-column>-->
      <el-table-column
          prop="brief"
          label="商品简介"
          align="center"
         >
      </el-table-column>
      <el-table-column
          prop="is_on_sale"
          label="是否上架"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="is_new"
          label="是否新品首发"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="is_hot"
          label="是否人气推荐"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="unit"
          label="商品单位"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="counter_price"
          label="专柜价格"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="retail_price"
          label="零售价格"
          align="center"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          width="200"
          align="center">
          <template v-slot="scope">
           <el-button @click="revise(scope.$index)" >修改</el-button>
           <el-button @click="del(scope.$index)" class="delete-button">删除</el-button>
          </template>
      </el-table-column>
<!--      </tr>-->
    </el-table>
    <el-button class="form2Return" @click="form2Return">返回</el-button>


  </div>
    <div class="form" v-show="formStyle">
      <el-table
          :data="goodInf"
          height="450">
        <el-table-column
            prop="goods_name"
            label="商品名称"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="brief"
            label="商品简介"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="is_on_sale"
            label="是否上架"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="is_new"
            label="是否新品首发"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="is_hot"
            label="是否人气推荐"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="unit"
            label="商品单位"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="counter_price"
            label="专柜价格"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="retail_price"
            label="零售价格"
            align="center"
        >
        </el-table-column>

        <el-table-column
            label="操作"
            width="200"
            align="center">
          <template v-slot="scope">
          <el-button @click="revise(scope.$index)" class="res-button">修改</el-button>
          <el-button @click="del(scope.$index)" class="delete-button">删除</el-button>
          </template >
        </el-table-column>

      </el-table>
    </div>
  <good-chan v-if="chanStyle" :data="this.index"></good-chan>
  <good-info v-if="chan2Style" :data="this.index"></good-info>
  <good-add v-if="addStyle"></good-add>
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
            chan2Style:false,
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
        revise(idx){
           console.log(idx);
          if(this.addStyle){
              this.addStyle=false
            }
          if(this.delStyle){
            this.delStyle=false
          }
          this.chanStyle=!this.chanStyle;
          this.index = idx;
          this.$refs.GoodChan.childMethods()
        },
        revise2(idx){
          console.log(idx);
          if(this.addStyle){
            this.addStyle=false
          }
          if(this.delStyle){
            this.delStyle=false
          }
          this.chan2Style=!this.chan2Style;
          this.index = idx;
          this.$refs.GoodChan.childMethods()
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
        select(name) {
          name=this.selForm.goods_name;
          if (name!=null){
            this.$api.good.selGoodList('/good/selGoodList', this.selForm)
                .then(res => {
                  this.selList = res;
                  console.log("返回的：", res)
                  return new Promise((resolve, reject) => {  //若这里不手动设置一个promise，那么.then返回的就是一个空的（undefind）
                    let a = false;
                    resolve("马上获取权限");
                    if (a) {
                      reject("出错了");
                    }
                  })
                })
            this.selStyle = true;
            this.formStyle = false;

        }
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
  font-size: 13px;
}

td {
  padding-left: 10px;
  padding-right: 10px;
}


.form{
  width: 100%;
  height: 500px;
  background-color: aliceblue;
  float: left;
  display: block;
}
.form2{
  width: 100%;
  height: 500px;
  background-color: aliceblue;
  float: left;
  display: block;
}
.form2Return{
  position: relative;
 left:-100px;
}
.delete-button{
  color: white;
  background-color:RGB(250,158,108);
}
.select-button{
  color: black;
  background-color: beige;
}
.res-button{
  color: white;
  background-color:RGB(250,158,108);
}
</style>