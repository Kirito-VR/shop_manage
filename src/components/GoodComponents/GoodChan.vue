<template>
      <div class="revise" >
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
        <button class="newAdd" @click="newAdd">确认修改</button>
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
            this.$parent.revise();
          }
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