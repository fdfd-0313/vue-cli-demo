<template>
  <div>
    <P>原来的样子：{{msg}}</P>
    <!-- 过滤器的使用
    语法：{{值 | 过滤器名字}} -->
    <p>使用翻转过滤器：{{msg | reverse}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'hello world'
    }
  },
  //局部过滤器
  //只能在当前vue文件内使用
  filters:{


  }

}
</script>

<style>

</style>