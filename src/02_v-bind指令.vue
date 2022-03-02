<template>
  <div>
<!-- 2.值 ->标签原生属性上 -->
<!-- 语法: v-bind:原生属性名="vue变量" -->
<a v-bind:href="url">点击去百度</a>
<img :src="imgUrl">
  </div>
</template>

<script>
export default {
  //1.准备变量
  data(){
    return{
      url:"http://www.baidu.com",
      imgUrl:"https://pip.itcast.cn//uploads/5d399be0b01f4a039522a72a6d0c669c.png"
    }
  }

}
</script>

<style>

</style>