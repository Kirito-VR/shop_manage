<template>
  <div>
<!--    定义头部区域-->
    <br/>
    <span class="userName"><i class="el-icon-user-solid"></i> {{  }}</span>
    <span class="purchaseHistory">购买记录</span>
    <br/>
    <br/>
  </div>
  <div class="el-table-div">
    <el-table
    :data="orderInfoList"
    height="450">
      <el-table-column
          prop="id"
      label="订单编号"
      width="120">
      </el-table-column>
    <el-table-column
    prop="goods_id"
    label="商品编号"
    width="150">
    </el-table-column>
    <el-table-column
        prop="goods_name"
        label="商品名称"
        width="150">
    </el-table-column>
    <el-table-column
        prop="price"
        label="商品价格"
        width="150"
        align="center">
    </el-table-column>
    <el-table-column
        prop="goods_number"
        label="商品数量"
    align="center"
        width="150">
    </el-table-column>
      <el-table-column
          label="总价">
        <template v-slot="scope">
          <span>{{scope.row.goods_number*scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="orderinfo_count"
          label="评论"
          align="center"
          width="150">
      </el-table-column>
      <el-table-column
          prop="deleted"
          label="删除"
          align="center"
          width="150">
      </el-table-column>
      <el-table-column
          label="操作"
          width="200"
          align="center">
        <template v-slot="scope">
          <el-button @click="updateOrderInfo(scope.$index)" >编辑</el-button>
          <el-button @click="deleteOrderInfo(scope.$index)" class="delete-button">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
<!--尾部区域-->
  <span class="bottom-purchase">购买数量: {{orderInfoList.length}}</span>

<!--------------------------------------------------------------------------------------------------等待修改-->
  <el-dialog title="修改订单详情信息！！" v-model="UpdateDialogFormVisible" custom-class="change-dialog">
    <el-form :model="form">
      <el-form-item label="编号: " >
        <span>{{form.id}}</span>
      </el-form-item>
      <el-form-item label="名称: " >
        <el-input v-model="form.id" class="input-type"></el-input>
      </el-form-item>
      <el-form-item label="价格:" >
        <el-input v-model="form.password" class="input-type"></el-input>
      </el-form-item>
      <el-form-item label="数量:" >
        <el-input v-model="form.mobile" class="input-type"></el-input>
      </el-form-item>
      <el-form-item label="总价:" >
        <el-input v-model="form.birthday" class="input-type"></el-input>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
      <!--      添加函数-->
      <el-button @click="UpdateDialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="updateOrderInfoToserve()">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="删除该购物历史" v-model="DeleteDialogFormVisible" custom-class="change-dialog">
    <el-form :model="form">
      <el-form-item label="编号: " >
        <span>{{form.id}}</span>
      </el-form-item>
      <el-form-item label="名称: " >
        <el-input v-model="form.goods_name" class="input-type"></el-input>
      </el-form-item>
      <el-form-item label="数量: " >
        <el-input v-model="form.goods_number" class="input-type"></el-input>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
      <!--      添加函数-->
      <el-button @click="DeleteDialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="deleteConfirm()">确 定</el-button>
    </div>
  </el-dialog>



</template>
<script>
import 'element-ui/lib/theme-chalk/index.css';
    export default {
        name: "UserInfo",
        data(){
          return{
            userId:'',
            orderInfoList:[],
            userName:'',
            UpdateDialogFormVisible:false,
            DeleteDialogFormVisible:false,
            RollbackDialogFormVisible:false,
            updateIdx:'',
            deleteIdx:'',
            form:'',
          }
        },
      //将个人订单信息获取
      mounted() {
        this.userId=this.$route.query.key;
          this.$api.order.getOrderInfoList("/orderinfo/getOrderInfoByUserId",{"id":this.userId})
              .then(res=>{
                this.orderInfoList=res;
              console.log(this.orderInfoList);
              }
          ).catch(err=>{
            console.log(err);
          })
      },

      //定义修改，删除函数
      methods:{
        updateOrderInfo(idx){
          //调用赋值函数.
          this.updateIdx=idx;
          this.userListToForm(idx);
          this.UpdateDialogFormVisible = true;
        },
        //赋值函数,方便展示在提示框
        userListToForm(idx){
          this.form=this.orderInfoList[idx];
        },
        //  定义修改函数与服务器进行交互函数
        updateOrderInfoToserve(){
          //进行交互
          const loading = this.$loading({
            lock: true,//lock的修改符--默认是false
            text: '加载中,请等待',//显示在加载图标下方的加载文案
            spinner: 'el-icon-loading',//自定义加载图标类名
            background: 'rgba(0, 0, 0, 0.8)',//遮罩层颜色
          });
          //调用订单修改接口
          this.$api.order.changeUser("/changeUser",this.form).then(res=>{
                console.log(res);
                this.orderInfoList[this.updateIdx]=this.form;
                // 延时
                setTimeout(() => {
                  loading.close();
                }, 1000);
                //可添加修改成功提示窗口
              }
          ).catch(err=>{
            console.log(err);
            //可添加删除失败提示窗口
          });
          this.UpdateDialogFormVisible= false;
        },
        deleteOrderInfo(idx){
          this.deleteIdx=idx;
          this.userListToForm(idx);
          this.DeleteDialogFormVisible = true;
        },
        deleteConfirm(){
          this.form.deleted="1";
          this.updateOrderInfoToserve();
          this.orderInfoList[this.DeleteIdx]=this.form;
          this.DeleteDialogFormVisible=false;
        },
      }
    }
</script>

<style scoped>
.bottom-purchase{
  position: relative;
  left: -700px;
  top:35px;
}
.userName {
  position: relative;
  left: -680px;
}
.purchaseHistory{
  position: relative;
  left: -300px;
}
</style>