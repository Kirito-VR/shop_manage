<template>
  <el-dialog  v-model="ChangedialogFormVisible" >
    <ul  class="infinite-list" style="overflow: auto">
      <el-form :model="this.addForm" label-width="auto" size="medium">

        <el-form-item label="id" >
          <el-col :span="16">
            <el-input type="text"  v-model="this.addForm.id" placeholder="编号"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品编号" >
          <el-col :span="16">
            <el-input type="text"  v-model="this.addForm.goods_sn" placeholder="商品编号"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="商品名称" >
          <el-col :span="16">
            <el-input type="text"  v-model="this.addForm.goods_name" placeholder="商品编号不能为空"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="商品所属类目ID" label-width="auto">
          <el-col :span="16">
            <el-input type="text"  v-model="this.addForm.category_id"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="品牌id">
          <el-col :span="16">
            <el-input type="text"  v-model="this.addForm.brand_id"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品宣传图片">
          <el-col :span="16">
            <el-input type="file" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品关键字">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.keywords"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.brief"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.is_on_sale" placeholder="1为上架0为不上架"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="排序">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.sort_order"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品页面商品图片">
          <el-col :span="16">
            <el-input type="file" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品分享朋友圈图片">
          <el-col :span="16">
            <el-input type="file" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="是否标为新品首发">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.is_new" placeholder="1为标记0为不标记"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="是否标为人气推荐">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.is_hot" placeholder="1为设置成推荐0为不设置"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="单位">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.unit" placeholder="例如：”件“"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="专柜价格">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.counter_price"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="销售价格">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.retail_price"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品详细介绍">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.detail"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="逻辑删除">
          <el-col :span="16">
            <el-input type="text" v-model="this.addForm.deleted" placeholder="干嘛用的暂时不知道"></el-input>
          </el-col>
        </el-form-item>
      </el-form>


      <el-button  @click="res">确认修改</el-button>

      <el-button class="newX" @click="cancel">取消</el-button>
    </ul>
  </el-dialog>
  <!--      </div>-->
</template>

<script>
export default {
  name: "GoodChan",
  data(){
    return{
      ChangedialogFormVisible:true,
      addForm:{
        id:"",
        goods_sn:"",
        goods_name:"",
        category_id:"",
        brand_id:"",
        gallery:"",
        keywords:"",
        brief:"",
        is_on_sale:"",
        sort_order:"",
        pic_url:"",
        share_url:"",
        is_new:"",
        is_hot:"",
        unit:"",
        counter_price:"",
        retail_price:"",
        detail:"",
        deleted:"",
      },

    }
  },
  props:['data']
  ,
  computed:{

  },
  methods:{
    cancel(){
      this.$parent.revise();
    },
    res(){
      this.$api.good.resGoodList('/good/resGoodList',this.addForm)
          .then(res => {
            location. reload();
            this.$parent.revise();
            console.log("添加按钮大成功：",res);
            return new Promise((resolve,reject)=>{  //若这里不手动设置一个promise，那么.then返回的就是一个空的（undefind）
              let a=false;
              resolve("马上获取权限");
              if(a){
                reject("出错了");
              }
            })
          })

    },


  },
  mounted() {
    console.log(this.data);
    this.addForm = this.$store.getters.getSelInf[this.data];
  }

}
</script>

<style scoped>
.revise{
  width:40%;
  height: 450px;
  background-color: beige;
  /*background-color: rgba(0,0,0,1);*/
  /*float: left;*/
  position: absolute;
  label-width:"140px"
}
.infinite-list {
  height: 400px;
  list-style: none;
}
</style>