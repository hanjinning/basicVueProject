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
      // 成功方法1：直接请求
      this.$axios.get("/index/han", {
          params: {"id":1},
          // jsonp: "handleCallback"
        })
        .then(res => {
          console.log('返回成功回调',res.data.data);
        })
        .catch(function(res) {
          console.log("返回失败回调");
          console.log(res);
        });
      // 成功方法2：调用该工厂方法进行请求返回一个对象，再通过对象的then(), catch()方法进行后续操作
      // uploadelf().then(resp => {
      //   console.log('uploadelf --->', resp.data.data);
      // }).catch(error => {
      //   console.log(error);
      // });
    }
  },
  created: function() {
  }
};
</script>

<style lang="scss" scoped>
</style>
