<template>
  <div>这是一个UserCom  负责修改
    <br/>
    <br/>
    <label>用户人数：{{userList.length}}</label>
    <input type="text" id="search" v-model="username"> <button @click="search()" class="searchButton">名称搜索</button>
    <!--      创建一个表，用于管理用户信息-->
    <br/>
    <br/>
    <table class="userTable">
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>密码</th>
        <th>手机号码</th>
        <th>地址</th>
        <th>操作</th>
      </tr>
      <tr v-for="(user,idx) in userList" :key="user.userID">
        <td>{{user.userID}}</td>
        <td>{{user.userNick}}</td>
        <td>{{user.userPassword}}</td>
        <td>{{user.userPhoneNumber}}</td>
        <td>{{user.userAddress}}</td>
        <el-button @click="changeUser(idx)">修改信息</el-button>
        <el-button @click="deleteUser(idx)">删除用户</el-button>
        <el-button @click="imformation(idx)">购物历史</el-button>
      </tr>
    </table>
  </div>
  <!--//修改用户界面-->
  <el-dialog title="修改用户信息！！！" v-model="ChangedialogFormVisible" width="400px">
    <el-form :model="form">
      <el-form-item label="编号:" >
        <span>{{form.userID}}</span>
      </el-form-item>
      <el-form-item label="名称:" >
        <!--        <input></input>-->
        <el-input v-model="form.userNick" ></el-input>
      </el-form-item>
      <el-form-item label="密码:" >
        <el-input v-model="form.userPassword"></el-input>
      </el-form-item>
      <el-form-item label="号码:" >
        <el-input v-model="form.userPhoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="地址:" >
        <el-input v-model="form.userAddress"></el-input>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
      <!--      添加函数-->
      <el-button @click="ChangedialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="changeUserToServe()">确 定</el-button>
    </div>
  </el-dialog>

  <!--删除用户提示界面-->
  <el-dialog title="删除用户???" v-model="DeletedialogFormVisible" width="360px">
    <el-form :model="form">
      <el-form-item label="编号:">
        <span>{{form.userID}}</span>
      </el-form-item>
      <el-form-item label="名称:">
        <span>{{form.userNick}}</span>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
      <!--      添加函数-->
      <el-button @click="DeletedialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="deleteUserConfirm()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
    export default {
        name: "UserCom",
        mouted:function () {
            
        }
    }
</script>

<style scoped>

</style>