<template>
    <div class="Sidebar">
        <ul class="SideList">
            <li><a>商品管理</a></li>
            <li><a>订单管理</a></li>
            <li><a>用户管理</a></li>
            <li><a>个人中心</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    .Sidebar{
        width: 20%;
        height: 100%;
        background-color: aliceblue;
        float: left;
    }
    .SideList > li{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
        padding-top: 15px;
        font-size: 18px;
    }
</style>