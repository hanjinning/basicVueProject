<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
// import router from "./router";

import {uploadelf, start, getDisassemble} from '@/api/api'
export default {
  name: "App",
  data: function() {
    return {};
  },
  mounted() {
    this.loadData();
  },
  created() {
    // let instance01 = axios.create({
    //   baseURL: 'http://127.0.0.1:8360',
    //   timeout: 1000
    // })
    //  instance01.get('/data.json').then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    loadData() {
      // this.$http = axios;
      // this.$axios.get("http://127.0.0.1:8360/index/han", {
      //     params: {"id":1},
      //     // jsonp: "handleCallback"
      //   })
      //   .then(res => {
      //     console.log('返回成功回调',res.data);
      //   })
      //   .catch(function(res) {
      //     console.log("返回失败回调");
      //     console.log(res);
      //   });
      // 调用该工厂方法进行请求返回一个对象，再通过对象的then(), catch()方法进行后续操作
      // uploadelf().then(resp => {
      //   console.log('uploadelf --->', resp.data.data);
      // }).catch(error => {
      //   console.log(error);
      // });
    }
    // async loadData(){}
    // await this.$axios.post('/index/han')
    // .then(function(res){
    //   console.log('返回成功回调');
    //   console.log(res.data);
    // })
    // .catch(function(res){
    //   console.log('返回失败回调');
    //   console.log(res.data);
    // })
    //以下代码也可以封装在函数中，在其他地方调用
    // this.$axios.get('/index/han', {
    //       params: {
    //         id: 1 //可选
    //       }
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //     .then(function () {
    //       // always executed
    //     });
    //     }
  },
  created: function() {
    // this.$axios.get("/index/han",{"id":1}).then(res=>{
    //   console.log('韩聪',res.data);
    // });
  }
};
</script>

<style lang="scss" scoped>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
