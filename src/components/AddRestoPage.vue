<template>
  <Headers/>
  
  <div class="Resto">
        <h1>Add Restorant</h1>
        <h2></h2>
        <form>
          <input type="text" name="name" v-model="restorant.name" placeholder="Resto Name"/>
          <input type="text" name="address" v-model="restorant.address"  placeholder="Enter Address"/>
          <input type="text" name="contact" v-model="restorant.contact" placeholder="Enter contact"/>
          <button type="button" v-on:click="AddResto">Add New Restaurant</button>
        </form>
        <RestoInfo/>
  </div>
</template>

<script>
import axios from 'axios'
import Headers from "./shared/HeaderPage.vue"
import RestoInfo from "./shared/RestoInfo.vue"
export default {
  name: 'AddRestoPage',
  data(){
    return{
      restorant:{
        name:"",
        address:"",
        contact:""
      }
    }
  },
  methods:{
      async AddResto(){
          console.warn(this.restorant)
          const resp = await axios.post('http://localhost:3004/restorant',{
            name: this.restorant.name,
            address: this.restorant.address,
            contact: this.restorant.contact 
          })
          console.log(resp)
      }
  },
  components:{
    Headers,
    RestoInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
