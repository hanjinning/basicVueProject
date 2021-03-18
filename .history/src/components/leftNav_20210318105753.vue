<template>
<div id="leftNav">
    <div>
    左侧导航
    </div>
    <div id="nav">
     <div> <router-link to="/">Home</router-link> |</div>
      <router-link to="/About">About</router-link>
    </div>
</div>
</template>

<script>

</script>

<style scoped lang="scss">
#leftNav{
    width: 150px;
    height:100vh;
    // background: pink;
    border: 1px solid red;
    position: relative;
    left: 0;
    top: 0;
}
</style>