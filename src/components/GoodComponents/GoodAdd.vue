<template>


<!--  <div class="new" >-->
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
<!--      <el-form-item label="商品宣传图片">-->
<!--        <el-col :span="16">-->
<!--          <el-input type="file" ></el-input>-->
<!--        </el-col>-->
<!--      </el-form-item>-->
        <el-form-item label="商品宣传图片"  prop="image">
          <el-upload
              class="avatar-uploader"
              :action="this.uploadUrl"
              :data="this.fromup"
              :show-file-list="false"
              :on-success="handleUpImage"
              :before-upload="beforeImageUpload"
          >
            <el-image v-if="this.addForm.gallery" :src="this.addForm.gallery" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><el-button class="el-addbutton">添加图片</el-button></el-icon>
          </el-upload>
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
<!--      <el-form-item label="商品页面商品图片">-->
<!--        <el-col :span="16">-->
<!--          <el-input type="file" ></el-input>-->
<!--        </el-col>-->
<!--      </el-form-item>-->
        <el-form-item label="商品页面商品图片"  prop="image">
          <el-upload
              class="avatar-uploader"
              :action="this.uploadUrl"
              :data="this.fromup"
              :show-file-list="false"
              :on-success="handleUpImage2"
              :before-upload="beforeImageUpload"
          >
            <el-image v-if="this.addForm.pic_url" :src="this.addForm.pic_url" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><el-button class="el-addbutton">添加图片</el-button></el-icon>
          </el-upload>
        </el-form-item>
<!--      <el-form-item label="商品分享朋友圈图片">-->
<!--        <el-col :span="16">-->
<!--          <el-input type="file" ></el-input>-->
<!--        </el-col>-->
<!--      </el-form-item>-->
        <el-form-item label="商品分享朋友圈图片"  prop="image">
          <el-upload
              class="avatar-uploader"
              :action="this.uploadUrl"
              :data="this.fromup"
              :show-file-list="false"
              :on-success="handleUpImage3"
              :before-upload="beforeImageUpload"
          >
            <el-image v-if="this.addForm.share_url" :src="this.addForm.share_url" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><el-button class="el-addbutton">添加图片</el-button></el-icon>
          </el-upload>
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

      <el-button  @click="newAdd">确认添加</el-button>
      <el-button  @click="cancel">取消</el-button>
    </ul>

      </el-dialog>

</template>

<script>
export default {

  name: "GoodAdd",
  data(){
    return{
      fromup:{
        uid:'0d2746bfb018091d4638a9e3193b4807',
        token:'0794fb9058312aa66691aa9cd6d62141'
      },
      uploadUrl:'https://www.imgurl.org/api/v2/upload',
      ChangedialogFormVisible:true,
      display:"",
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
  methods:{
    beforeImageUpload(rawFile){
      if(rawFile.size / 1024 / 1024 > 10){
        // eslint-disable-next-line no-undef
        // ElMessage.error("单张图片大小不能超过10MB!");
        return false;
      }
      return true;
    },
    handleUpImage(res){
      console.log(res);
      this.addForm.gallery = res.data.url;
    },
    handleUpImage2(res){
      console.log(res);
      this.addForm.pic_url= res.data.url;
    },
    handleUpImage3(res){
      console.log(res);
      this.addForm.share_url = res.data.url;
    },
    cancel(){
      this.$parent.add();
    },
    newAdd(){
      console.log("商品信息",this.addForm)
      this.$api.good.addGoodList('/good/addGoodList',this.addForm)
          .then(res => {
            location. reload();
            console.log("添加按钮大成功：",res);
            this.$parent.add();
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
  // mounted:function () {
  //   this.ChangedialogFormVisible = true
  // }

}
</script>

<style scoped>
.new{
  width:40%;
  height: 450px;
  background-color: beige;
  /*background-color: rgba(0,0,0,1);*/
  /*float: left;*/
  position: absolute;
  label-width:"140px"
}
.newAdd{
  position: relative;
  top: 30px;
}
.newX{
  position: relative;
  top: 40px;
}

.infinite-list {
  height: 400px;
  list-style: none;
}
.el-addbutton{
  position: absolute;
  left: 10px;
  background-color: white;
  color: dodgerblue;
}



</style>