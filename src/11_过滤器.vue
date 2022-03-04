<template>
  <div>
    <P>原来的样子：{{msg}}</P>
    <!-- 过滤器的使用
    语法：{{值 | 过滤器名字}} -->
    <!-- 1.
    给过滤器传值
    语法：vue变量 | 过滤器名（值）
     -->
    <p>使用翻转过滤器：{{msg | reverse('|')}}</p>
    <!-- 2.
    多个过滤器使用
    语法：vue变量 | 过滤器1 | 过滤器2 -->
    <p :title="msg |toUp | reverse(',')">鼠标长停</p>
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
 /*  语法：
 filters：{
   过滤器的名字 (val){
     return 处理后的值
   }
 }
 */

  filters:{
    toUp(val){
      return val.toUpperCase()
    }

  }

}
</script>

<style>

</style>