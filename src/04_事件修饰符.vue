<template>
  <div>
    <div @click="fatherFn">
    <P @click.stop="oneFn">.stop-阻止时间冒泡</P>
    <a href="http://www.baidu.com" @click.prevent.stop>去百度</a>
    <p @click.once="twoFn">点击观察时间处理函数执行几次</p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    fatherFn(){
      console.log("father-触发click时间");
    },
    oneFn(){
      console.log("p标签点击");
    },
    twoFn(){
      console.log("p标签被点击了");
    }
  }
}
</script>

<style>

</style>