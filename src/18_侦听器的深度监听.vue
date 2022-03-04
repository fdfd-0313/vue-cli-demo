<template>
  <div>
    <input type="text" v-model="user.name">
    <input type="text" v-model="user.age">

  </div>
</template>

<script>
export default {
  data(){
    return{
     user:{
       name:"",
       age:0
     }
    }
  },
  //目标：侦听到name值的改变
  /* 
  语法：
  watch:{
    变量名(newVal,oldVal){
      //变量名对应值改变这里的触发
    },
    变量名:{
      handler(newVal,olaVal){

      },
      deep:true,//深度侦听（对想里层的值改变）
      immediate:ture//(立即侦听，网页打开执行一次)
    }
  }
  */
  watch:{
    // //newVal:当前最新值
    // //oldVal：上一刻值
    // name(newVal,oldVal){
    //   console.log(newVal,oldVal);
    // }
    user:{
      handler(newVal,olaVal){
        console.log(newVal,olaVal);
      },
      deep:true,
      immediate:true
    }
  }

}
</script>

<style>

</style>