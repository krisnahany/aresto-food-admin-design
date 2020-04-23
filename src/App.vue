<template>
  <div id="app">
    <!-- <Login></Login>
    <Reservation></Reservation> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  /* max-width: 375px; */
  max-width: 350px;
  min-height:100vh;
  width: 100%;
  position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2, h3, p, button {
  margin: 0;
  padding: 0;
  border: none;
}

a {
  text-decoration: none;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center
}

.box-shadow {
  -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.clearfix {
  clear: both;
}

@keyframes slideUp {
  0% {
    opacity:0;
    height: 50%;
  }
  100% {
    opacity:1;
    height: 55%;
  }
}
</style>
