<template>
<div id="leftNav">
    <div>
    左侧导航
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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