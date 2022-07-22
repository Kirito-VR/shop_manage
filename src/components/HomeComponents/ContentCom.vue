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
    height: 100%;
    background-color: darkcyan;
    float: left;
}
</style>