<template>
      <div class="revise" >
        <label>编号</label><input type="text"  v-model="this.addForm.id" disabled>
        <br>
        <label>名称</label><input type="text"  v-model="this.addForm.name">
        <br>
        <label>价格</label><input type="text"  v-model="this.addForm.price">
        <br>
        <label>库存</label><input type="text" v-model="this.addForm.stock">
        <br>
        <label>描述</label><input type="text" v-model="this.addForm.descripe">
        <br>
        <label>图片</label><input type="text" v-model="this.addForm.imPath">
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
              name:"",
              price:"",
              stock:"",
              descripe:"",
              imPath:""
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