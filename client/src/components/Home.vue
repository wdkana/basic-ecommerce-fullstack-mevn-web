<template>
    <b-container>
        <ul class="list-unstyled mb-5">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
            <div style="cursor: pointer" block href="#" v-b-toggle.accordion1>
                <b-media tag="li">
                <icon name="dot-circle" style="color:#ff4136" slot="aside" blank width="64"></icon>
                <h5 class="mt-0 mb-1">Foodies</h5>
                breakfast lunch or dinner is so easy, take the chip price and bring your food away.
                </b-media>
            </div>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-table :fields="fields" :items="fooditems">
                    <template slot="name" slot-scope="data">
                    {{data.value}}
                    </template>
                    </b-table>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
            <div style="cursor: pointer" block href="#" v-b-toggle.accordion2>
                <b-media tag="li">
                <icon name="dot-circle" style="color:#ff4136" slot="aside" blank width="64"></icon>
                <h5 class="mt-0 mb-1">Drinkies</h5>
                We sell a various Drink, fresh and cool!
                </b-media>
            </div>
            </b-card-header>
            <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-table :fields="fields" :items="drinkitems">
                    <template slot="name" slot-scope="data">
                    {{data.value}}
                    </template>
                    </b-table>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
            <div style="cursor: pointer" block href="#" v-b-toggle.accordion3>
                <b-media tag="li">
                <icon name="dot-circle" style="color:#ff4136" slot="aside" blank width="64"></icon>
                <h5 class="mt-0 mb-1">Cake &amp; Pastry</h5>
                We Serve Hot and fresh from the oven cake
                </b-media>
            </div>
            </b-card-header>
            <b-collapse id="accordion3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-table :fields="fields" :items="pastryitems">
                    <template slot="name" slot-scope="data">
                    {{data.value}}
                    </template>
                    </b-table>
                </b-card-body>
            </b-collapse>
        </b-card>
        </ul>
        <b-row>
            <b-col>

            </b-col>
            <b-col>
                <b-card-group deck class="text-center">
                    <h4 class="card-text">
                        We Serve Delicious Food &amp; Drink, <small><i>Especially Pastry Cake </i></small><b-badge variant="danger">New</b-badge>
                    </h4>
                    <b-img :src="require('../assets/pastryinc.gif')" class="m-1" />
                </b-card-group>
            </b-col>
            <b-col>

            </b-col>
        </b-row>


<!-- media-4.vue -->
    </b-container>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        'menu',
        { price: 'price start from'}
      ],
      fooditems: [
        { menu: 'Sea Food', price: '$8,2' },
        { menu: 'Meats', price: '$6,8' },
        { menu: 'Meals', price: '$2,4' },
      ],
      drinkitems: [
        { menu: 'Coffee', price: '$2,1'},
        { menu: 'Juice', price: '$1,7'},
        { menu: 'Tea', price: '$1,4'},
      ],
      pastryitems: [
        { menu: 'Pancake', price: '$9,5'},
        { menu: 'Ice Cake', price: '$11,8'},
        { menu: 'Cookies', price: '$14,1'},
      ]
    }
  }
}
</script>

<style scoped>
.p-1{
    background: transparent
}
</style>
