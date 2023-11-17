<template>
    <header-page/>
    <h1>
        Welcome {{ UserName }} to Home page
    </h1>
</template>
<script>
import HeaderPage from './shared/HeaderPage.vue'
export default {
      name: 'HomePage',
      data(){
            return{
                UserName:''
            }
      } ,
      components:{
        HeaderPage
      },
      mounted(){
        
        let user=localStorage.getItem('user-info')
        this.UserName= JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        
    }
}
</script>
