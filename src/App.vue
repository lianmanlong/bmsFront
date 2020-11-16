<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
 html {
    width: 100%;
    height: 100%;
    position: fixed;
    /* 2.webkit based browsers */
    background: -webkit-gradient(linear, left top, right bottom, from(#8AF1DC), to(#99EFC7));
    /* 3.IE browsers */
    filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#FFFFFF', EndColorStr='#222');

  }

</style>
