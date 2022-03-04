<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <!-- 3.对象.c--关联选中状态 -->
        <input type="checkbox" v-model="obj.c"/>
        <span>{{obj.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
//目标：小选框影响全选框
//铺设静态页面
//1.标签+样式+js
//2.把数据循环展示到页面上
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed:{
    // isAll(){
    //   //统计小选框状态-->全选状态
    //   //every口诀：查找数组里“不符合”条件，直接原地返回false
    //     return this.arr.every(obj=>obj.c === true)
    //   }
    isAll:{
      set(val){
        //  全选框 - 选中状态(true/false)
        this.arr.forEach(obj => obj.c = val)
      },
      get(){
        return this.arr.every(obj => obj.c === true)
      }
    }
    },
    methods:{
      btn(){
        //让数组对象的c属性取反再赋值回去
        this.arr.forEach(obj => obj.c = !obj.c)
      }
    }
};
</script>
