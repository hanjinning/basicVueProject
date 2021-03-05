<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  data:function(){
    return{}
  },
  mounted(){
    this.loadData();
  },
  created(){
    // let instance01 = axios.create({
    //   baseURL: 'http://127.0.0.1:8360',
    //   timeout: 1000
    // })
    //  instance01.get('/data.json').then(res=>{
    //   console.log(res)
    // })
  },
  methods:{
    async loadData(){
      // var that = this;
      await this.$axios.post('/index')
      .then(function(res){
        console.log('返回成功回调');
        console.log(res.data);
      })
      .catch(function(res){
        console.log('返回失败回调');
        console.log(res.data);
      })
    }
  },
  created:function(){
  this.$axios.get("/user",{"id":1}).then(res=>{
    console.log(res.data);
  });
  }
}

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
