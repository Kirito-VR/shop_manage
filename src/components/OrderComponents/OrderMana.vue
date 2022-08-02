<template>
  <div class="OrderMana">
    这是一个OrderMana订单信息与管理模块
    <br>
    <input id="queryKey" type="text" placeholder="请输入需要查询的订单编号" style="border-radius: 5px; width: 300px;"
           v-model="inputContent">
    <button class="findOrder" @click="findOrderId">查询</button>
    <button class="reloadButton"><a href="javascript:location.reload();">刷新页面</a></button>
    <br>
    <table id="orderTable">
      <caption>订单表</caption>
      <tr>
        <th style="width: 18px;height: 18px;"><input type="checkbox"></th>
        <th style="width: 180px;height: 18px;">订单编号</th>
        <th style="width: 180px;height: 18px;">用户编号</th>
        <th style="width: 180px;height: 18px;">付款金额</th>
        <th style="width: 180px;height: 18px;">交易编号</th>
        <th style="width: 180px;height: 18px;">支付状态</th>
        <th style="width: 365px;height: 18px;">操作</th>
      </tr>

      <tr class="OrderList" v-for="(OrderList,index) in orderList" :key="index">
        <th><input type="checkbox"></th>
        <th>{{ OrderList.order_id }}</th>
        <th>{{ OrderList.order_uid }}</th>
        <th>{{ OrderList.order_Trademoney }}</th>
        <th>{{ OrderList.order_Tradeld }}</th>
        <th>{{ OrderList.status }}</th>
        <th>
          <button @click="getOrderInfoList(index)">查看详细订单</button>&nbsp;&nbsp;<button @click="reviseOrder(index)">修改订单
        </button>&nbsp;&nbsp;<button
            @click="delOrder(index)">删除订单
        </button>
        </th>
      </tr>
    </table>

    <!--    显示需要修改的权限界面-->
    <div id="modifyTable" style="display: none">
      <div class="result">
        <label for="change_order_id">订单编号:</label>
        <input id="change_order_id" type="text" v-model="change_orderid"/>
        <br>
        <label for="change_order_uid">用户编号:</label>
        <input id="change_order_uid" type="text" v-model="change_orderuid"/>
        <br>
        <label for="change_order_Trademoney">付款金额:</label>
        <input id="change_order_Trademoney" type="text" v-model="change_order_Trademoney"/>
        <br>
        <label for="change_order_Tradeld">交易编号:</label>
        <input id="change_order_Tradeld" type="text" v-model="change_order_Tradeld"/>
        <br>
        <label for="change_status">支付状态:</label>
        <input id="change_status" type="text" v-model="change_status"/>
        <br>
        <input id="divSave" type="button" value="保存" @click="saveModifyOrder"/>
        <input id="divClose" type="button" value="返回" @click="close"/>
      </div>
    </div>

    <!--  显示输入框查询结果表  -->
    <table id="findInputOrderListResult" style="display: none">
      <br/>
      <caption>查询结果</caption>
      <tr>
        <!--        <th><input type="checkbox"></th>-->
        <th style="width: 304px;height: 18px;">订单编号</th>
        <th style="width: 304px;height: 18px;">用户编号</th>
        <th style="width: 304px;height: 18px;">付款金额</th>
        <th style="width: 304px;height: 18px;">交易编号</th>
        <th style="width: 304px;height: 18px;">支付状态</th>
      </tr>

      <tr class="OrderIdListResult" v-for="(FindOrderIdListResult) in findOrderIdListResult"
          :key="FindOrderIdListResult.id">
        <!--        <th><input type="checkbox"></th>-->
        <th>{{ FindOrderIdListResult.order_id }}</th>
        <th>{{ FindOrderIdListResult.order_uid }}</th>
        <th>{{ FindOrderIdListResult.order_Trademoney }}</th>
        <th>{{ FindOrderIdListResult.order_Tradeld }}</th>
        <th>{{ FindOrderIdListResult.status }}</th>
      </tr>
      <button class="divClose" @click="close" style="left: 310px;position: absolute">返回</button>
    </table>

    <!--  显示查询订单详情表  -->
    <table id="orderInfoTable" style="display: none">
      <br/>
      <caption>订单详情表</caption>
      <tr>
        <th style="width: 18px;height: 18px;"><input type="checkbox"></th>
        <th style="width: 250px;height: 18px;">序号</th>
        <th style="width: 250px;height: 18px;">商品编号</th>
        <th style="width: 250px;height: 18px;">订单编号</th>
        <th style="width: 250px;height: 18px;">商品价格</th>
        <th style="width: 250px;height: 18px;">商品数量</th>
        <th style="width: 250px;height: 18px;">商品名称</th>
      </tr>

      <tr class="OrderInfoList" v-for="(OrderInfoList) in orderInfoList" :key="OrderInfoList.id">
        <th><input type="checkbox"></th>
        <th>{{ OrderInfoList.orderinfo_id }}</th>
        <th>{{ OrderInfoList.orderinfo_gid }}</th>
        <th>{{ OrderInfoList.orderinfo_oid }}</th>
        <th>{{ OrderInfoList.orderinfo_price }}</th>
        <th>{{ OrderInfoList.orderinfo_count }}</th>
        <th>{{ OrderInfoList.orderinfo_name }}</th>
      </tr>
      <button class="divClose" @click="close" style="left: 310px;position: absolute">返回</button>
    </table>


  </div>
</template>

<script>
export default {
  name: "OrderMana",
  data() {
    return {
      // 输出orderList
      orderList: [],
      // 输出输入框输入的内容
      inputContent: '',
      // 输出查询order_id的结果
      findOrderIdListResult: [],
      // 输出orderInfoList
      orderInfoList: [],
      // 输出修改的order
      change_orderid: '',
      change_orderuid: '',
      change_order_Trademoney: '',
      change_order_Tradeld: '',
      change_status: '',
    }
  },
  mounted: function () {
    this.$api.order.getOrderList("/order/getOrderList")
        .then(res => {
          // vuex（状态管理）
          console.log("后台返回查询的orderList:", res);
          this.orderList = res;// 方便遍历
          // 手动设置一个promise，.then返回不为空
          return new Promise((resolve, reject) => {
            let errDefault = false;
            resolve("获取权限");
            if (errDefault) {
              reject("出错了，请联系管理员");
            }
          })
        })
  },
  methods: {
    // 点击修改订单显示modifyTable
    reviseOrder() {
      // document.getElementById("orderList").style.display = "none";
      document.getElementById("modifyTable").style.display = "block";
    },
    // 修改订单
    saveModifyOrder() {
      console.log("change_orderid:", this.change_orderid);
      console.log("change_orderuid", this.change_orderuid);
      console.log("change_order_Trademoney", this.change_order_Trademoney);
      console.log("change_order_Tradeld", this.change_order_Tradeld);
      console.log("change_status:", this.change_status);
      this.$api.order.saveModifyOrder("/order/saveModifyOrder", {
        order_id: this.change_orderid,
        order_uid: this.change_orderuid,
        order_Trademoney: this.change_order_Trademoney,
        order_Tradeld: this.change_order_Tradeld,
        status: this.change_status
      }).then(res => {
        // vuex（状态管理）
        console.log("后台返回的修改结果:", res);
        // 手动设置一个promise，.then返回不为空
        return new Promise((resolve, reject) => {
          let errDefault = false;
          resolve("获取权限");
          if (errDefault) {
            reject("出错了，请联系管理员");
          }
        })
      })
    },
    // 删除订单的实现方法
    delOrder(index) {
      // 根据index删除一个数据，splice只是从界面删除，未删除数据库
      // this.orderList.splice(index,1);
      this.$api.order.delOrderData("/order/delOrderData", {"order_id": this.orderList[index].order_id})
          .then(res => {
            // vuex（状态管理）
            console.log("后台返回的删除结果:", res);
            // 手动设置一个promise，.then返回不为空
            return new Promise((resolve, reject) => {
              let errDefault = false;
              resolve("获取权限");
              if (errDefault) {
                reject("出错了，请联系管理员");
              }
            })
          })
    },
    // 测试输出
    findOrderId() {
      document.getElementById("orderTable").style.display = "none";
      document.getElementById("findInputOrderListResult").style.display = "block";
      console.log(this.inputContent);
      this.$api.order.findInputOrderIdList("/order/findInputOrderIdList", {"order_id": this.inputContent})
          .then(res => {
            // vuex（状态管理）
            console.log("后台返回查询的orderIdListResult:", res);
            this.findOrderIdListResult = res;// 方便遍历
            // 手动设置一个promise，.then返回不为空
            return new Promise((resolve, reject) => {
              let errDefault = false;
              resolve("获取权限");
              if (errDefault) {
                reject("出错了，请联系管理员");
              }
            })
          })
    },
    // 查询订单详情表
    getOrderInfoList(index) {
      document.getElementById("orderTable").style.display = "none";
      document.getElementById("orderInfoTable").style.display = "block";
      console.log("拿到order_id：", this.orderList[index].order_id);
      this.$api.order.getOrderInfoList("/orderinfo/getOrderInfoList", {"orderinfo_oid": this.orderList[index].order_id})
          .then(res => {
            // vuex（状态管理）
            console.log("后台返回查询的getOrderInfoListResult:", res);
            this.orderInfoList = res;// 方便遍历
            // 手动设置一个promise，.then返回不为空
            return new Promise((resolve, reject) => {
              let errDefault = false;
              resolve("获取权限");
              if (errDefault) {
                reject("出错了，请联系管理员");
              }
            })
          })
    },
    // 返回button
    close() {
      document.getElementById("orderTable").style.display = "block";
      document.getElementById("orderInfoTable").style.display = "none";
      document.getElementById("findInputOrderListResult").style.display = "none";
      document.getElementById("modifyTable").style.display = "none";
    },
  },
  
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

#orderTable {
  width: 100%;
  background-color: aliceblue;
  text-align: center;
}

#findInputOrderListResult {
  width: 100%;
  background-color: aliceblue;
  text-align: center;
}

#orderInfoTable {
  width: 100%;
  background-color: aliceblue;
  text-align: center;
}

tr {
  width: 100%;
}

#queryKey {
  left: 310px;
  position: absolute;
}

.findOrder {
  left: 620px;
  position: absolute;
}

.reloadButton {
  left: 660px;
  position: absolute;
}

#modifyTable {
  float: bottom;
  background-color: aliceblue;
}
</style>