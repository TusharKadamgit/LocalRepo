<template>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter password">
        <button v-on:click="SignUp">Sign Up</button>
        <p>
            <router-link to="/Login-Page">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name : 'SignUp',
    data(){
        return{
            "name":"",
            "email":"",
            "password":""
        }
    },
    methods:{
         async SignUp(){
            console.log("SignUp", this.name+"-"+this.email+"-"+this.password);
            let result= await axios.post("http://localhost:3004/user",{
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if(result.status == 201)
            {
                alert("User Register Successfully");
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomePage'})
        }
    }
}
</script>
<style scoped>

</style>