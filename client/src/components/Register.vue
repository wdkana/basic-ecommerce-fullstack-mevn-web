<template>
<div>
<h1>API</h1>


<div v-for="(a, index) in pastry" :key="index" id="pastry">
    <span>{{a.kode_kue}}</span>
    <span>{{a.jenis_kue}}</span>
</div>

<form class="input-group mb-3" @submit.prevent="addUser">
  <input 
  class="form-control"
  aria-describedby="basic-addon3"
  type="text"
  placeholder="add new username"
  v-model="pastry.kode_kue"
  />
    <input 
  class="form-control"
  aria-describedby="basic-addon3"
  type="text"
  placeholder="pass"
  v-model="pastry.jenis_kue"
  />
  
  <button type="submit">OK</button>
</form>
<!--<span>{{ username }}</span>-->
</div>

<!-- 
  <div v-for="(currency, index) in info" :key="index" class="currency">
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
  </div>
-->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      pastry: {},
        errors: {}
      }    
    },
methods: {
  addUser() {
    axios.post(`http://localhost:8081/api/pastry`, this.pastry)
    .then(response => {})
    .catch(e => {
      })
    }
  },
  async created() {
    const response = await axios.get(`http://localhost:8081/api/pastry`)
    .then(response => {
      this.pastry = response.data
    })
  }

}
</script>

<style scoped>

</style>

