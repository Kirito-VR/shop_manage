<template>
  <el-dialog  v-model="ChangedialogFormVisible" >
    <ul  class="infinite-list" style="overflow: auto">
    <el-form-item label="商品名称:" >
      <el-col :span="8">
        <el-input type="text"  v-model="this.addForm.goods_name" ></el-input>
      </el-col>
    </el-form-item>
        <el-button class="delInf" @click="delInf">确认删除</el-button>
<!--        <el-button class="newX" @click="cancel">取消</el-button>-->
    </ul>
  </el-dialog  >
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
  props:['data'],

  computed:{

  },
  methods:{
    delInf(){
      this.$api.good.delGoodList('/good/delGoodList',this.addForm)
          .then(res => {
            location. reload();
            this.$parent.del();
            console.log(res);
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
    //console.log("给我整个这玩意", this.props.data);
    this.addForm = this.$store.getters.getGoodInf[this.data];
  }

}
</script>

<style scoped>


</style>