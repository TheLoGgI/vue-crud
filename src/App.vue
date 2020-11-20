<template>
<div id="headingTeleport"></div>
  <div id="nav">
    <router-link to="/">Collection</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/delete">Delete</router-link>
  </div>
  <router-view />
</template>

<script>

// https://github.com/vuejs/vuefire/tree/master/packages/vuefire


// import { ref } from "@vue/composition-api"; // <-- Use this line if you're in a Vue 2 app with the composition API plugin
// import { ref } from "vue"; // <-- Use this line if you're in a Vue 3 app

export default {

  // emits: {

  //   changeHeading: (heading) => {
  //     console.log(title, heading);
  //     title = heaidng
  //   }
  // },

};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn--active:active {
  background-color: #9C27B0;
	color: white;
}

</style>
