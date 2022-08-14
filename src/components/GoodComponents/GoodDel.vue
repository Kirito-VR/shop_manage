<template>
  <div class="del" >
    <label>编号</label><input type="text"  v-model="this.addForm.id" placeholder="商品编号不能为空">
    <br>
    <label>名称</label><input type="text"  v-model="this.addForm.goods_name">
    <br>

    <button class="delInf" @click="delInf">确认删除</button>
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
    delInf(){
      this.$api.good.delGoodList('/good/delGoodList',this.addForm)
          .then(res => {
            location. reload();
            this.$parent.del();
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
    cancel(){
      this.$parent.del();
    },


  },
  mounted() {
    console.log(this.data);
    this.addForm = this.$store.getters.getGoodInf[this.data];
  }

}
</script>

<style scoped>
.del{
  width: 25%;
  height: 200px;
  background-color: darkgray;
  float: left;
}
</style>