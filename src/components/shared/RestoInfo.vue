<template>
    <h1>restorant List</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resto in RestoList" :key="resto.name">
          <td>{{ resto.name }}</td>
          <td>{{ resto.address }}</td>
          <td>{{ resto.contact }}</td>
          <td><router-link :to="'/update'+resto.name"></router-link></td>
        </tr>
      </tbody>
    </table>
</template>
<script>
import axios from 'axios'

export default {
    name: "RestoInfo",
    data(){
        return{
            "RestoList":[]
        }
    },
    methods:
    {
            async getRestoList(){
                let result=await axios.get(`http://localhost:3004/restorant`)
                console.log(result)
                 if(result != null){
                    console.warn("result", result.data);
                    this.RestoList=result.data;
                } 
            }
    },
    mounted(){
        this.getRestoList();
    }

}
</script>
