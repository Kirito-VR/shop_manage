<template>
    <div>小程序信息界面</div>
    <hr>
    <div>
      <el-row :gutter="20">
          <el-col :span="16">
            <el-row :gutter="15" class="mgb20" style="margin-left: 5px">
              <el-col :span="8">
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                  <router-link to="/home/User" style=" text-decoration: none;">
                    <div class="grid-content grid-con-1">
                      <i class="el-icon-user-solid grid-con-icon"></i>
                      <div class="grid-cont-right">
                        <div class="grid-num">{{ userNum }}</div>
                        <div>用户数量</div>
                      </div>
                    </div>
                  </router-link>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                  <router-link to="/home/Order" style=" text-decoration: none;">
                    <div class="grid-content grid-con-2" >
                      <i class="el-icon-message-solid grid-con-icon"></i>
                      <div class="grid-cont-right">
                        <div class="grid-num">{{OrderNum}}</div>
                        <div>订单数量</div>
                      </div>
                    </div>
                  </router-link>
                </el-card>
              </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <router-link to="/home/Good" style=" text-decoration: none;">
                    <div class="grid-content grid-con-3">
                      <i class="el-icon-s-goods grid-con-icon"></i>
                      <div class="grid-cont-right">
                        <div class="grid-num">{{GoodNum}}</div>
                        <div>商品数量</div>
                      </div>
                    </div>
                </router-link>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" class="mgb20" style="height:252px;">
            <div class="user-info">
              <div class="user-info-cont">
                <div class="user-info-name">{{ name }}</div>
                <div>{{ role }}</div>
              </div>
              <img src="../../assets/img/img.jpg" class="user-avator" alt />
            </div>
            <div class="user-info-list">
              上次登录时间：
              <span>2022-08-01</span>
            </div>
            <div class="user-info-list">
              上次登录地点：
              <span>桂林</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script >
    export default {
        name: "AppCom",

        data() {
          const name = sessionStorage.getItem("ms_username");
          const role = "超级管理员";
          const userNum= this.$store.getters.getUserNum;
          const OrderNum=this.$store.getters.getOrderNum;
          const GoodNum=this.$store.getters.getGoodNum;


          return {
            name,
            role,
            userNum,
            OrderNum,
            GoodNum
          }
        },

    }
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;

}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  flex: 1;
  font-size: 15px;
  color: #999;
}
.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  font-size: 15px;
  color: #999;
  line-height: 25px;
}
.mgb20 {
  /*margin-bottom: 20px;*/
  /*margin-right: 20px;*/
  /*margin-top: 5px;*/
  margin: 5px 20px 0px 0px;

}

</style>