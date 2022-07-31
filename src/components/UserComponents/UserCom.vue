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
// import { Loading } from 'element-ui';
export default {
  name: "UserCom",
  mounted:function () {
    //加载用户信息
    this.getUsers();
  },
  methods:{
    //定义延时函数
    //定义获取用户函数
    getUsers(){
      const loading = this.$loading({
        lock: true,//lock的修改符--默认是false
        text: '加载信息中!',//显示在加载图标下方的加载文案
        spinner: 'el-icon-loading',//自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.8)',//遮罩层颜色
      });
      this.$api.user.getGUserList("/getUserList")
          .then(res=>{
            this.userList=res;
            setTimeout(() => {
              loading.close();
            }, 1000);
            // console.log("返回",this.userList);
          }).catch(err=>{//错误信息为设置
        console.log(err);
      });
    },
    //定义查询用户函数
    search(){
      console.log(this.username);
      this.$api.user.getUserListBysearch("/getUserListBySearch",{"username":this.username})
          .then(res=>{
            this.userList=res;
            // console.log(res);
          }).catch(err=>{//错误未设置
        console.log(err);
      });
    },
    //修改用户函数使用表单获取参数
    changeUser(idx){
      //调用赋值函数.
      this.updateIdx=idx;
      this.userListToForm(idx);
      this.ChangedialogFormVisible = true
    },
    //赋值函数,方便展示在提示框
    userListToForm(idx){
      this.form.userNick=this.userList[idx].userNick;
      this.form.userID=this.userList[idx].userID;
      this.form.userPhoneNumber=this.userList[idx].userPhoneNumber;
      this.form.userAddress=this.userList[idx].userAddress;
      this.form.userPassword=this.userList[idx].userPassword;
    },
    //  定义修改函数与服务器进行交互函数
    changeUserToServe(){
      //进行交互
      const loading = this.$loading({
        lock: true,//lock的修改符--默认是false
        text: '加载中,请等待',//显示在加载图标下方的加载文案
        spinner: 'el-icon-loading',//自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.8)',//遮罩层颜色
        // target: document.querySelector('')//loading覆盖的dom元素节点
      });
      this.$api.user.changeUser("/changeUser",this.form).then(res=>{
            console.log(res);
            this.userList[this.updateIdx].userNick=this.form.userNick;
            this.userList[this.updateIdx].userID=this.form.userID;
            this.userList[this.updateIdx].userPhoneNumber=this.form.userPhoneNumber;
            this.userList[this.updateIdx].userAddress=this.form.userAddress;
            this.userList[this.updateIdx].userPassword=this.form.userPassword;
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
      this.ChangedialogFormVisible = false;
    },
    //定义删除函数
    deleteUser(idx){
      this.userListToForm(idx);
      this.DeleteIdx=idx;
      this.DeletedialogFormVisible=true;
    },
    deleteUserConfirm(){
      const loading = this.$loading({
        lock: true,//lock的修改符--默认是false
        text: '加载中,请等待',//显示在加载图标下方的加载文案
        spinner: 'el-icon-loading',//自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.8)',//遮罩层颜色
      });
      this.$api.user.deleteUser("/deleteUser",this.form).then(res=>{
            console.log(res);
            setTimeout(() => {
              loading.close();
            }, 1000);
            loading.close();
            this.userList.splice(this.DeleteIdx,1);
            //可添加修改成功提示窗口
          }
      ).catch(err=>{
        console.log(err);
        //可添加删除失败提示窗口
      });
      this.DeletedialogFormVisible=false;
    }
  },
  data(){
    return{
      username:'',
      userList:[],
      DeleteIdx:'',
      updateIdx:'',
      ChangedialogFormVisible: false,
      DeletedialogFormVisible:false,
      loading: false,
      //修改表单
      form: {
        userID:'',
        userNick: '',
        userPassword: '',
        userPhoneNumber:'',
        userAddress:'',
      },
    }

  }

}
</script>

<style scoped>
.userTable{
  background-color: darkgray;
  width:1000px;
}
.userTable td,th{
  /*border: 1px solid beige;*/
  padding:5px;
}
.searchButton{
  background-color: blanchedalmond;
  width: 60px;
  height: 30px;
  /*border: 2px black solid;*/
}
body {
  margin: 0;
}
</style>