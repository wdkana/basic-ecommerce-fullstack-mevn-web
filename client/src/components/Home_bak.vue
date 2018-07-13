<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- checksound link dari navigasi -->
    <ul>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
      <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
      <li><router-link :to="{ name: 'Register' }">Pesan</router-link></li>
    </ul>
    <!-- checksound link selesai -->
    <hr/>
    
    <!-- tampung array dari proses form -->
    <ul>
      <li v-for="(data, index) in links" :key="index">{{data.link}}</li>
      <li v-if="link!=''"><i>{{ ty }}</i></li>
      <li v-else>Silahkan Ketik Pesan</li>
    </ul>
    <!-- tampung array selesai -->

    <!-- content start -->
    <div class="container">
      <label for="basic-url">Snackchat - ShortURL</label>
        <form @submit.prevent="addUser" class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">https://pas.try/</span>
          </div>
          <input 
            class="form-control" 
            aria-describedby="basic-addon3"
            type="text"
            placeholder="add new link"
            v-model="link"
          />
        </form>
     </div>
     <!-- content end -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Puff Pastry',
      links: [
        { "link": "admin"}
      ],
      link: '',
      ty: 'sedang mengetik...'
      
    }
  },
  methods: {
  addUser () { 
      this.links.push({
        link: this.link
      })
      console.log('hello ', this.link, ' nice to meet you')
      this.link= ''    
    }
  }
}
</script>

<!-- SCOPED CSS untuk 1 page ini saja -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
