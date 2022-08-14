<template>
  <div class="OrderMana">
    这是一个OrderMana订单信息与管理模块
    <br>
    <input id="queryKey" type="text" placeholder="请输入需要查询的订单编号" style="border-radius: 5px; width: 250px;"
           v-model="inputContent">
    <button class="findOrder" @click="findOrderId">查询</button>
    <button class="reloadButton"><a href="javascript:location.reload();">刷新页面</a></button>
    <br>
    <table id="orderTable">
      <caption>订单表</caption>
      <tr>
        <th><input type="checkbox"></th>
        <th>id</th>
        <th>用户ID</th>
        <th>订单编号</th>
        <th>订单状态</th>
        <th>收货人名称</th>
        <th>收货人手机号</th>
        <th>收货人地址</th>
        <th>留言</th>
        <th>商品总费用</th>
        <th>配送费用</th>
        <th>优惠卷减免</th>
        <th>用户积分减免</th>
        <th>团购优惠价减免</th>
        <th>订单费用</th>
        <th>实付金额</th>
        <th>微信付款编号</th>
        <th>微信付款时间</th>
        <th>发货编号</th>
        <th>发货快递公司</th>
        <th>发货开始时间</th>
        <th>用户确认收货时间</th>
        <th>待评价订单商品数量</th>
        <th>逻辑删除</th>
        <th>操作</th>
        <th>功能</th>
      </tr>

      <tr class="OrderList" v-for="(OrderList,index) in orderList" :key="index">
        <th><input type="checkbox"></th>
        <th>{{ OrderList.id }}</th>
        <th>{{ OrderList.user_id }}</th>
        <th>{{ OrderList.order_sn }}</th>
        <th>{{ OrderList.order_status }}</th>
        <th>{{ OrderList.consignee }}</th>
        <th>{{ OrderList.mobile }}</th>
        <th>{{ OrderList.address }}</th>
        <th>{{ OrderList.message }}</th>
        <th>{{ OrderList.goods_price }}</th>
        <th>{{ OrderList.freight_price }}</th>
        <th>{{ OrderList.coupon_price }}</th>
        <th>{{ OrderList.integral_price }}</th>
        <th>{{ OrderList.groupon_price }}</th>
        <th>{{ OrderList.order_price }}</th>
        <th>{{ OrderList.actual_price }}</th>
        <th>{{ OrderList.pay_id }}</th>
        <th>{{ OrderList.pay_time }}</th>
        <th>{{ OrderList.ship_sn }}</th>
        <th>{{ OrderList.ship_channel }}</th>
        <th>{{ OrderList.ship_time }}</th>
        <th>{{ OrderList.confirm_time }}</th>
        <th>{{ OrderList.comments }}</th>
        <th>{{ OrderList.end_time }}</th>
        <th>{{ OrderList.deleted }}</th>
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
        <label for="change_id"> id:</label>
        <input id="change_id" type="text" v-model="this.change_form.id"/>
        <br>
        <label for="change_user_id">用户ID:</label>
        <input id="change_user_id" type="text" v-model="change_form.user_id"/>
        <br>
        <label for="change_order_sn">订单编号:</label>
        <input id="change_order_sn" type="text" v-model="change_form.order_sn"/>
        <br>
        <label for="change_order_status">订单状态:</label>
        <input id="change_order_status" type="text" v-model="change_form.order_status"/>
        <br>
        <label for="change_consignee">收货人名称:</label>
        <input id="change_consignee" type="text" v-model="change_form.consignee"/>
        <br>
        <label for="change_mobile">收货人手机号:</label>
        <input id="change_mobile" type="text" v-model="change_form.mobile"/>
        <br>
        <label for="change_address">收货具体地址:</label>
        <input id="change_address" type="text" v-model="change_form.address"/>
        <br>
        <label for="change_message">用户订单留言:</label>
        <input id="change_message" type="text" v-model="change_form.message"/>
        <br>
        <label for="change_goods_price">商品总费用:</label>
        <input id="change_goods_price" type="text" v-model="change_form.goods_price"/>
        <br>
        <label for="change_freight_price">配送费用:</label>
        <input id="change_freight_price" type="text" v-model="change_form.freight_price"/>
        <br>
        <label for="change_coupon_price">优惠券减免:</label>
        <input id="change_coupon_price" type="text" v-model="change_form.coupon_price"/>
        <br>
        <label for="change_integral_price">用户积分减免:</label>
        <input id="change_integral_price" type="text" v-model="change_form.integral_price"/>
        <br>
        <label for="change_groupon_price">团购优惠价减免:</label>
        <input id="change_groupon_price" type="text" v-model="change_form.groupon_price"/>
        <br>
        <label for="change_order_price">订单费用:</label>
        <input id="change_order_price" type="text" v-model="change_form.order_price"/>
        <br>
        <label for="change_actual_price">实付费用:</label>
        <input id="change_actual_price" type="text" v-model="change_form.actual_price"/>
        <br>
        <label for="change_pay_id">微信付款编号:</label>
        <input id="change_pay_id" type="text" v-model="change_form.pay_id"/>
        <br>
        <label for="change_pay_time">微信付款时间:</label>
        <input id="change_pay_time" type="text" v-model="change_form.pay_time"/>
        <br>
        <label for="change_ship_sn">发货编号:</label>
        <input id="change_ship_sn" type="text" v-model="change_form.ship_sn"/>
        <br>
        <label for="change_ship_channel">发货快递公司:</label>
        <input id="change_ship_channel" type="text" v-model="change_form.ship_channel"/>
        <br>
        <label for="change_ship_time">发货开始时间:</label>
        <input id="change_ship_time" type="text" v-model="change_form.ship_time"/>
        <br>
        <label for="change_confirm_time">用户确认收货时间:</label>
        <input id="change_confirm_time" type="text" v-model="change_form.confirm_time"/>
        <br>
        <label for="change_comments">待评价订单商品数量:</label>
        <input id="change_comments" type="text" v-model="change_form.comments"/>
        <br>
        <label for="change_end_time">订单关闭时间:</label>
        <input id="change_end_time" type="text" v-model="change_form.end_time"/>
        <br>
        <label for="change_deleted">逻辑删除:</label>
        <input id="change_deleted" type="text" v-model="change_form.deleted"/>
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
        <th>id</th>
        <th>用户ID</th>
        <th>订单编号</th>
        <th>订单状态</th>
        <th>收货人名称</th>
        <th>收货人手机号</th>
        <th>收货人地址</th>
        <th>留言</th>
        <th>商品总费用</th>
        <th>配送费用</th>
        <th>优惠卷减免</th>
        <th>用户积分减免</th>
        <th>团购优惠价减免</th>
        <th>订单费用</th>
        <th>实付金额</th>
        <th>微信付款编号</th>
        <th>微信付款时间</th>
        <th>发货编号</th>
        <th>发货快递公司</th>
        <th>发货开始时间</th>
        <th>用户确认收货时间</th>
        <th>待评价订单商品数量</th>
        <th>逻辑删除</th>
        <th>操作</th>
      </tr>

      <tr class="OrderIdListResult" v-for="(FindOrderIdListResult) in findOrderIdListResult"
          :key="FindOrderIdListResult.id">
        <th>{{ FindOrderIdListResult.id }}</th>
        <th>{{ FindOrderIdListResult.user_id }}</th>
        <th>{{ FindOrderIdListResult.order_sn }}</th>
        <th>{{ FindOrderIdListResult.order_status }}</th>
        <th>{{ FindOrderIdListResult.consignee }}</th>
        <th>{{ FindOrderIdListResult.mobile }}</th>
        <th>{{ FindOrderIdListResult.address }}</th>
        <th>{{ FindOrderIdListResult.message }}</th>
        <th>{{ FindOrderIdListResult.goods_price }}</th>
        <th>{{ FindOrderIdListResult.freight_price }}</th>
        <th>{{ FindOrderIdListResult.coupon_price }}</th>
        <th>{{ FindOrderIdListResult.integral_price }}</th>
        <th>{{ FindOrderIdListResult.groupon_price }}</th>
        <th>{{ FindOrderIdListResult.order_price }}</th>
        <th>{{ FindOrderIdListResult.actual_price }}</th>
        <th>{{ FindOrderIdListResult.pay_id }}</th>
        <th>{{ FindOrderIdListResult.pay_time }}</th>
        <th>{{ FindOrderIdListResult.ship_sn }}</th>
        <th>{{ FindOrderIdListResult.ship_channel }}</th>
        <th>{{ FindOrderIdListResult.ship_time }}</th>
        <th>{{ FindOrderIdListResult.confirm_time }}</th>
        <th>{{ FindOrderIdListResult.comments }}</th>
        <th>{{ FindOrderIdListResult.end_time }}</th>
        <th>{{ FindOrderIdListResult.deleted }}</th>
      </tr>
      <button class="divClose" @click="close" style="left: 310px;position: absolute">返回</button>
    </table>

    <!--  显示查询订单详情表  -->
    <table id="orderInfoTable" style="display: none">
      <br/>
      <caption>订单详情表</caption>
      <tr>
        <th style="width: 30px; height: 30px;"><input type="checkbox"></th>
        <th style="width: 116px; height: 30px;">id</th>
        <th style="width: 116px; height: 30px;">订单ID</th>
        <th style="width: 116px; height: 30px;">商品ID</th>
        <th style="width: 116px; height: 30px;">商品名称</th>
        <th style="width: 116px; height: 30px;">商品编号</th>
        <th style="width: 116px; height: 30px;">货品ID</th>
        <th style="width: 116px; height: 30px;">购买数量</th>
        <th style="width: 116px; height: 30px;">货品售价</th>
        <th style="width: 116px; height: 30px;">货品规格</th>
        <th style="width: 116px; height: 30px;">货品图片</th>
        <th style="width: 116px; height: 30px;">商品评论</th>
        <th style="width: 116px; height: 30px;">逻辑删除</th>
      </tr>

      <tr class="OrderInfoList" v-for="(OrderInfoList) in orderInfoList" :key="OrderInfoList.id">
        <th><input type="checkbox"></th>
        <th>{{ OrderInfoList.id }}</th>
        <th>{{ OrderInfoList.order_id }}</th>
        <th>{{ OrderInfoList.goods_id }}</th>
        <th>{{ OrderInfoList.goods_name }}</th>
        <th>{{ OrderInfoList.goods_sn }}</th>
        <th>{{ OrderInfoList.product_id }}</th>
        <th>{{ OrderInfoList.goods_number }}</th>
        <th>{{ OrderInfoList.price }}</th>
        <th>{{ OrderInfoList.specifications }}</th>
        <th>{{ OrderInfoList.pic_url }}</th>
        <th>{{ OrderInfoList.goods_comment }}</th>
        <th>{{ OrderInfoList.deleted }}</th>
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
      change_form: {
        id: '',
        user_id: '',
        order_sn: '',
        order_status: '',
        consignee: '',
        mobile: '',
        address: '',
        message: '',
        goods_price: '',
        freight_price: '',
        coupon_price: '',
        integral_price: '',
        groupon_price: '',
        order_price: '',
        actual_price: '',
        pay_id: '',
        pay_time: '',
        ship_sn: '',
        ship_channel: '',
        ship_time: '',
        confirm_time: '',
        comments: '',
        end_time: '',
        deleted: '',
      },
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
    reviseOrder(index) {
      document.getElementById("modifyTable").style.display = "block";
      // 显示修改数据
      this.change_form = this.orderList[index];
    },
    // 修改订单
    saveModifyOrder() {
      console.log("拿到change_form数据：", this.change_form);
      this.$api.order.saveModifyOrder("/order/saveModifyOrder", this.change_form)
          .then(res => {
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
      this.orderList.splice(index, 1);
      /*this.$api.order.delOrderData("/order/delOrderData", {"order_id": this.orderList[index].order_id})
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
          })*/
    },
    // 测试输出
    findOrderId() {
      document.getElementById("orderTable").style.display = "none";
      document.getElementById("findInputOrderListResult").style.display = "block";
      console.log(this.inputContent);
      this.$api.order.findInputOrderIdList("/order/findInputOrderIdList", {"id": this.inputContent})
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
      console.log("拿到id：", this.orderList[index].id);
      this.$api.order.getOrderInfoList("/orderinfo/getOrderInfoList", {"id": this.orderList[index].id})
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
  left: 380px;
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
.divClose{
margin-left: 30px;
}
</style>