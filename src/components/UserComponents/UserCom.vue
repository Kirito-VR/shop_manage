<template>
  <div>
    <br/>
    <br/>
    <label class="number-label">用户人数：{{userList.length}}</label>
      <span class="search-span">
        <input type="text" id="search" v-model="username">
      <el-button @click="search()" >搜索</el-button>
      </span>
<!--    <button @click="search()" class="searchButton">名称搜索</button>-->
    <br/>
    <br/>
    <el-table
        :data="userList"
        height="450">
      <el-table-column
          prop="id"
          label="用户编号"
          width="120">
      </el-table-column>
      <el-table-column
          prop="nickname"
          label=" 用户名称"
          width="150">
      </el-table-column>
      <el-table-column
          prop="password"
          label="密码"
          width="130">
      </el-table-column>
      <el-table-column
          prop="mobile"
          label="手机号码"
          width="150"
          align="center">
      </el-table-column>
      <el-table-column
          prop="birthday"
          label="生日"
          align="center"
          width="100">
      </el-table-column>
      <el-table-column
          prop="userLevel"
          label="等级"
          align="center"
          width="50">
      </el-table-column>
      <el-table-column
          prop="lastLoginTime"
          label="上次登录时间"
          align="center"
          width="155">
      </el-table-column>
      <el-table-column
          prop="deleted"
          label="已删除"
          align="center"
          width="90">
      </el-table-column>
      <el-table-column
      label="操作"
      width="250"
      align="center">
        <template v-slot="scope">
          <el-button @click="changeUser(scope.$index)" >编辑</el-button>
          <el-button @click="deleteUser(scope.$index)" class="delete-button">删除</el-button>
          <el-button @click="niDeleteUser(scope.$index)" class="rollback-button">恢复</el-button>
        </template>
      </el-table-column>
      <el-table-column
       label="更多"
      align="center">
      <template v-slot="scope">
        <el-button @click="imformation(scope.$index)" class="purchase-history">购买历史</el-button></template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog title="修改用户信息" v-model="ChangedialogFormVisible" custom-class="change-dialog">
    <el-form :model="form">
      <el-form-item label="编号: " >
        <span>{{form.id}}</span>
      </el-form-item>
      <el-form-item label="名称: " >
        <el-input v-model="form.id" class="input-type"></el-input>
      </el-form-item>
    <el-form-item label="密码:" >
        <el-input v-model="form.password" class="input-type"></el-input>
      </el-form-item>
      <el-form-item label="号码:" >
        <el-input v-model="form.mobile" class="input-type"></el-input>
      </el-form-item>
      <el-form-item label="生日:" >
        <el-input v-model="form.birthday" class="input-type"></el-input>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
            <!--      添加函数-->
      <el-button @click="ChangedialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="changeUserToServe()">确 定</el-button>
      </div>
  </el-dialog>
  <!--删除用户提示界面-->
  <el-dialog title="删除用户" v-model="DeletedialogFormVisible" custom-class="delete-dialog">
    <el-form :model="form">
      <el-form-item label="编号:">
        <span>{{form.id}}</span>
      </el-form-item>
      <el-form-item label="名称:">
        <span>{{form.nickname}}</span>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
      <!--      添加函数-->
      <el-button @click="DeletedialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="deleteUserConfirm()">确 定</el-button>
    </div>
  </el-dialog>

<!--恢复用户提示界面-->
  <el-dialog title="恢复用户" v-model="niDeletedialogFormVisible" custom-class="delete-dialog">
    <el-form :model="form">
      <el-form-item label="编号:">
        <span>{{form.id}}</span>
      </el-form-item>
      <el-form-item label="名称:">
        <span>{{form.nickname}}</span>
      </el-form-item>
    </el-form>
    <div  class="dialog-footer">
      <!--      添加函数-->
      <el-button @click="niDeletedialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="NiDeleteUserConfirm()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
  name: "UserCom",
  mounted:function () {
    //加载用户信息
    this.getUsers();
  },
  methods:{
    //定义查看购物历史函数
    imformation(idx){
      this.$router.push({path:'/home/Info',query:{key:this.userList[idx].id}});
    },
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
      this.form=this.userList[idx];
    },
    //  定义修改函数与服务器进行交互函数
    changeUserToServe(){
      //进行交互
      const loading = this.$loading({
        lock: true,//lock的修改符--默认是false
        text: '加载中,请等待',//显示在加载图标下方的加载文案
        spinner: 'el-icon-loading',//自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.8)',//遮罩层颜色
      });
      this.$api.user.changeUser("/changeUser",this.form).then(res=>{
            console.log(res);
            this.userList[this.updateIdx]=this.form;
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
      this.form.deleted=1;
      console.log(this.form.deleted);
      this.userList[this.DeleteIdx]=this.form;
      this.changeUserToServe();
      this.DeletedialogFormVisible=false;
    },
  //  定义恢复函数
    niDeleteUser(idx){
      this.userListToForm(idx);
      this.DeleteIdx=idx;
      this.niDeletedialogFormVisible=true;
    },
    //恢复确定函数
    NiDeleteUserConfirm(){
      this.form.deleted=0;
      console.log(this.form.deleted);
      this.userList[this.DeleteIdx]=this.form;
      this.changeUserToServe();
      this.niDeletedialogFormVisible=false;
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
      niDeletedialogFormVisible:false,
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

<style>
.userTable{
  width:1300px;
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
.delete-button{
  color: white;
  background-color:RGB(245,108,108);
}
.purchase-history{
  color: white;
  background-color: #42b983;
}
.change-dialog{
  width: 400px;
  height: 550px;
}
.delete-dialog{
  width: 400px;
  height: 250px;
}
.input-type{
  position: relative;
  left: 0px;
  text-align: left;
}
.input-type input.el-input__inner{
  border:none;
}
el-button{
  text-align: center;
}
.number-label{
  position: relative;
  left: -550px;
}
.search-span{
  position:relative;
  left: -300px;
}
.rollback-button{
  color:white;
  background-color: #42b983;
}
</style>