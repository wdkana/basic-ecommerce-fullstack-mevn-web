<template>
  <div id="app">
  <b-navbar toggleable="md" type="dark" variant="danger" sticky>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/"><img src="../src/assets/logo2.png" class="d-inline-block align-top" width="30" height="30"> Puff Pastry</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-form>
            <b-row class="">
            <b-col style="width:950px" sm="12">
            <b-form-input class="mr-2" type="text" placeholder="find something delicious..." style="width:800px"></b-form-input>
            <b-button variant="warning" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-col>
            </b-row>
            </b-nav-form>
        </b-navbar-nav>
          <b-navbar-nav class="ml-2 mr-5" right>
          <b-nav-item to="/store">Store <small><b-badge pill variant="warning"></b-badge></small></b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <b-nav-item href="#" @click.prevent="login" v-if="!activeUser">Login</b-nav-item>
          <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
          </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      <p>GET up to <span style="color:red;font-size:22px">40% Discount</span> For #hotchochocake only <span style="font-size:22px;color:red">{{dismissCountDown}}</span> seconds...<br/><small><i><u>Request now!</u></i></small>
      <small>Enter your email:</small>
       <b-form-group id="exampleInputGroup1"
                    label-for="exampleInput1"
                    style="width:200px">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      >
        </b-form-input>
         <b-button variant="danger" class="mt-1">Subscribe</b-button>
      </b-form-group>
      </p>
      <b-progress variant="danger"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="8px">
      </b-progress>
    </b-alert>
    <b-container>
    <b-btn @click="showAlert" variant="danger" class="m-1">
      Hot Deals Today
    </b-btn>
    </b-container>
  <br/>
  <router-view/>
  <br/>
  <b-jumbotron class="mb-0 mt-5" bg-variant="danger" text-variant="white">
    <template slot="lead">
      <p>Puff Pastry Cake, Food &amp; Drink</p>
      <small>Komplek GBA (Griya Bandung Asri 3) Street Terusan Buah Batu</small><br/>
      <small>Telephone: (022) - 875 200 54</small>
    </template>
    <hr/>
      <b-btn variant="warning" href="#">Chat Us Now</b-btn>
  </b-jumbotron>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeUser: null,
      dismissSecs: 89,
      dismissCountDown: 0,
      showDismissibleAlert: true,
        form: {
        email: '',
      },
      show: true
    }
  },
  methods: {
    login () {
      this.activeUser = true
    },
    logout () {
      this.activeUser = false 
    },
     countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- global css untuk seluruh page, jgn di scope -->
<style>

</style>
