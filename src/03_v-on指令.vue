<template>
  <div>
    <p>你要购买商品的数量  {{count}}</p>
    <!-- 1.绑定事件 -->
    <!-- 语法:v-on:事件名="少量代码" -->
    <button v-on:click="count=count+1">+1</button>

    <!-- 语法: v-on:事件名="methods里函数名" -->
    <button v-on:click="addFn">+1</button>
    <!-- 语法：v-on:事件名="methods里函数名" -->
    <button v-on:click="addCountFn(5)">+5</button>
    <!-- 语法：@事件名="" -->
    <button @click="subFn">-1</button>
  </div>
</template>

<script>

export default {
    data(){
      return{
        count:1,
      }
    },
    // 2.定义函数
    methods:{
      addFn(){//this指向的是export default的{}
      //data函数会把对象挂到当前组件对象上
        this.count++
      },
      addCountFn(num){
        this.count=this.count + num
      },
      subFn(){
        this.count--
      }
    }
}
</script>

<style>

</style>