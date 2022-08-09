<template>
      <div class="revise" >
        <label>编号</label><input type="text"  v-model="this.addForm.id" disabled>
        <br>
        <label>商品编号</label><input type="text"  v-model="this.addForm.goods_sn" placeholder="商品编号">
        <br>
        <label>商品名称</label><input type="text"  v-model="this.addForm.goods_name" placeholder="商品编号不能为空">
        <br>
        <label>商品所属类目ID</label><input type="text"  v-model="this.addForm.category_id">
        <br>
        <label>品牌id</label><input type="text"  v-model="this.addForm.brand_id">
        <br>
        <label>商品宣传图片</label><input type="file" >
        <br>
        <label>商品关键字</label><input type="text" v-model="this.addForm.keywords">
        <br>
        <label>商品简介</label><input type="text" v-model="this.addForm.brief">
        <br>
        <label>是否上架</label><input type="text" v-model="this.addForm.is_on_sale" placeholder="1为上架0为不上架">
        <br>
        <label>排序</label><input type="text" v-model="this.addForm.sort_order">
        <br>
        <label>商品页面商品图片</label><input type="file" >
        <br>
        <label>商品分享朋友圈图片</label><input type="file" >
        <br>
        <label>是否标为新品首发</label><input type="text" v-model="this.addForm.is_new" placeholder="1为标记0为不标记">
        <br>
        <label>是否设为人气推荐</label><input type="text" v-model="this.addForm.is_hot" placeholder="1为设置成推荐0为不设置">
        <br>
        <label>单位</label><input type="text" v-model="this.addForm.unit" placeholder="例如：”件“">
        <br>
        <label>专柜价格</label><input type="text" v-model="this.addForm.counter_price">
        <br>
        <label>销售价格</label><input type="text" v-model="this.addForm.retail_price">
        <br>
        <label>商品详细介绍</label><input type="text" v-model="this.addForm.detail">
        <br>
        <label>逻辑删除</label><input type="text" v-model="this.addForm.deleted" placeholder="干嘛用的暂时不知道">
        <br>
        <button class="res" @click="res">确认修改</button>
        <br>
        <button class="newX" @click="cancel">取消</button>
      </div>
</template>

<script>
    export default {
        name: "GoodChan",
      data(){
          return{
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
        this.addForm = this.$store.getters.getGoodInf[this.data];
      }

    }
</script>

<style scoped>
.revise{
  width: 25%;
  height: 200px;
  background-color: burlywood;
  float: left;
}
</style>