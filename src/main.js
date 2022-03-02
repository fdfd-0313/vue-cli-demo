import Vue from 'vue' //引入vue对象，类似于<script src="vue.js"></script>
import App from './App.vue' //APP.vue文件里对象引入过来（vue项目页面入口）
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false //在控制台有一句提示消息

//全局过滤器
// vue.filter("reverse", val => val.split("").reverse().join("")) //极简写法
Vue.filter("reverse", (val) => {
    return val.split("").reverse().join("")
})

new Vue({ //开始实例化vue
        render: h => h(App), //准备渲染APP页面
    }).$mount('#app') //渲染到index.html文件里id叫app的标签上