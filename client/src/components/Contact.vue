<template>
<div class="Contact">
  <h1>{{ title }}</h1>
  <p v-for="pesan in msg">{{ pesan.msg }}</p>
</div>
</template>

<script>
import axios from 'axios';
import Api from '@/services/Api'

export default {
    name: 'Contact',
    data () {
        return {
            title: "My Contact List",
            msg: [],
            errors: []
        }
    },
created() {
    axios.get(`http://127.0.0.1:8081/`)
    .then(response => {
      this.msg = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
}
}
</script>

<style scoped>

</style>
