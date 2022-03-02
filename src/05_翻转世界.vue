<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"Hello World"
    }
  },
  methods:{
    btn(){
      //截取字符串返回数组
      let arr = this.msg.split("")
      //翻转
      arr.reverse()
      //拼接数组
      this.msg = arr.join("")
    }
  }

}
</script>

<style>

</style>