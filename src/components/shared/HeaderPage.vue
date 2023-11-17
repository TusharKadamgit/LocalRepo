<template>
    <div class="nav">
        <a href="/">Home</a>
        <a href="/AddResto">Add Restorant</a>
        <a href="/">Update Restorant</a>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>

export default {
    name:"HeaderPage",
    methods:{
        logout()
        {
               console.warn("Logout");
               localStorage.clear();
               this.$router.push({name:'Login'})
        }
    }
}
</script>
