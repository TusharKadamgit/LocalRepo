<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="Login">Login</button>
        <p>
            <router-link to="/Sign-up">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "LoginPage",
    data(){
        return{
            "email":"",
            "password":""   
        }
    },
    methods:
    {
        async Login()
        {
                let result=await axios.get(`http://localhost:3004/user?email=${this.email}&password=${this.password}`)
                if(result.status==200 && result.data.length > 0)
                {
                    console.warn("Result",result)
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'HomePage'})
                }
                else{
                    alert('Login Fail')
                }

        }
    }
}
</script>