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
          prop="orderinfo_id"
      label="订单编号"
      width="120">
      </el-table-column>
    <el-table-column
    prop="orderinfo_gid"
    label="商品编号"
    width="150">
    </el-table-column>
    <el-table-column
        prop="orderinfo_name"
        label="商品名称"
        width="150">
    </el-table-column>
    <el-table-column
        prop="orderinfo_price"
        label="商品价格"
        width="150"
        align="center">
    </el-table-column>
    <el-table-column
        prop="orderinfo_count"
        label="商品数量"
    align="center"
        width="150">
    </el-table-column>
      <el-table-column
          label="总价">
        <template v-slot="scope">
          <span>{{scope.row.orderinfo_count*scope.row.orderinfo_price}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="操作"
          width="200"
          align="center">
        <template v-slot="scope">
          <el-button @click="changeUser(scope.$index)" >编辑</el-button>
          <el-button @click="deleteUser(scope.$index)" class="delete-button">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
<!--尾部区域-->
  <span class="bottom-purchase">购买数量: {{orderInfoList.length}}</span>
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
          }
        },
      mounted() {
        this.userId=this.$route.query.key;
          this.$api.order.getOrderInfoList("/orderinfo/getOrderInfo",{"id":this.userId})
              .then(res=>{
                this.orderInfoList=res;
              console.log(this.orderInfoList);
              }
          ).catch(err=>{
            console.log(err);
          })
      }
    }
</script>

<style scoped>
.bottom-purchase{
  position: relative;
  left: -600px;
  top:35px;
}
.userName {
  position: relative;
  left: -600px;
}
.purchaseHistory{
  position: relative;
  left: -300px;
}

</style>