<template>

  <!-- <h1>{{ title }}</h1> -->
<b-container>
   <b-row class="mb-4">
        <b-col class="column-1" sm="2" md="2" lg="2" xl="2">
            <b-list-group v-b-scrollspy:listgroup-ex>
            <b-list-group-item href="#list-item-1" variant="secondary" text-variant="white">History</b-list-group-item>
            <b-list-group-item href="#list-item-2" variant="secondary" text-variant="white">Food</b-list-group-item>
            <b-list-group-item href="#list-item-3" variant="secondary" text-variant="white">Drink</b-list-group-item>
        </b-list-group>
        </b-col>

        <b-col class="column-2" sm="8" md="8" lg="8" xl="8">
            <div id="listgroup-ex" style="position:relative;overflow-y:auto;height:300px">
                <h3 id="list-item-1">History Why We Decided To Sell Delicious Food &amp; Drink</h3>
                <p>{{ text }}</p>
                <hr/>
                <h3 id="list-item-2">Which Kind Of Food That We Serve</h3>
                <p>{{ text }}</p>
                <hr/>
                <h3 id="list-item-3">Whick Kind Of Drink That We Serve</h3>
                <p>{{ text }}</p>
            </div>
        </b-col>
        
        <b-col class="column-3" sm="2" md="2" lg="2" xl="2">
            <b-card title="Pastry.Inc"
                    class="mb-2">
                <p class="card-text">
                <b-img :src="require('../assets/pastryinc.gif')" height="125" width="125" class="m-1" rounded="circle" />
                We linked with the U.S Licence Food &amp; Beverage
                </p>
            </b-card>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
export default {
    name: 'About',
    data () {
        return {
            text: `
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
                    tempor. Laborum consequat non elit enim exercitation cillum aliqua
                    consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
                    laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                    Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
                    nisi sit est tempor laborum mollit labore officia laborum excepteur
                    commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
                    ipsum commodo tempor sunt in proident. Incididunt veniam velit elit elit veniam
                    Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
                    nisi sit est tempor laborum mollit labore officia laborum excepteur
                    commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
                    ipsum commodo tempor sunt in proident. `
        }
    }
}
</script>

<style>

</style>
