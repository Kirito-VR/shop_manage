<template>
    <div class="Content_Com">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ContentCom"
    }
</script>

<style>
.Content_Com{
    width: 80%;
    height: 95%;
    background-color: white;
    float: left;
}
</style>