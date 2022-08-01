<template>
  <div class="new" >
    <label>编号</label><input type="text"  v-model="this.addForm.id" placeholder="商品编号不能为空">
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
    <button class="newAdd" @click="newAdd">确认添加</button>
    <br>
    <button class="newX" @click="cancel">取消</button>
  </div>
</template>

<script>
export default {
  name: "GoodAdd",
  data(){
    return{
      display:"",
      addForm:{
        id:"",
        name:"",
        price:"",
        stock:"",
        descripe:"",
        imPath:""
      },
    }
  },
  methods:{
    cancel(){
      this.$parent.add();
    },
    newAdd(){
      console.log("商品信息",this.addForm)
      this.$api.good.addGoodList('/good/addGoodList',this.addForm)
          .then(res => {
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
    // CancelHandler() {
    //   this.$emit("input", false);
    //   this.$emit("Cancel");
    // }
  }

}
</script>

<style scoped>
.new{
  width: 250px;
  height: 330px;
  background-color: bisque;
  float: left;
}
.newAdd{
  position: relative;
  top: 80px;
}
.newX{
  position: relative;
  top: 110px;
}
</style>