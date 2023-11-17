<template>
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    //SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.register input, .login input {
    width: 299px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    border: 1px solid skyblue;
}
.register button, .login button {
    width: 325px;
    height: 40px;
    color: white;
    border: 1px solid skyblue;
    background: skyblue;
    cursor: pointer;
}
.nav {
   
    background-color: gray;
    align-items: flex-start;  
    height: 100%;
    overflow: hidden;
    padding: 5px;
}
.nav a {
    font-size: 17px;
    float: left;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    margin-right: 30px;
}
.nav a:hover{
  background-color: #ddd;
  color: red;
}

</style>
