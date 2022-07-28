<template>
    <div class="Nav_Com">
        <span @click="TestShow()">进入测试界面</span>
    </div>
</template>

<script>
    export default {
        name: "NavCom",
        methods:{
            TestShow(){
                this.$router.push("/Test");
            }
        }
    }
</script>

<style scoped>
.Nav_Com{
    width: 100%;
    height: 80px;
    background-color: #42b983;
}
</style>