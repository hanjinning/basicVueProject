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
import axios from 'axios'

export default {
  name: 'App',
  data:function(){
    return{}
  },
  mounted(){
    // this.loadData();
  },
  created(){

  },
  methods:{
    // async loadData(){
    //   await axios.post('/index')
    //   .then(function(res){
    //     console.log('返回成功回调');
    //     console.log(res.data);
    //   })
    //   .catch(function(res){
    //     console.log('返回失败回调');
    //     console.log(res.data);
    //   })
    // }
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
