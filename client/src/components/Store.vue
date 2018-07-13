<template>
    <b-container>
        <b-breadcrumb :items="items"/>
        <b-row class="first-row mb-3 mt-3">
            <b-col sm="8" class="fr-first-col" id="carousel-container1">
                <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="2000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                class="mb-3 mt-3" xs="12">
                    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                    <b-carousel-slide>
                        <img slot="img" class="d-block img-fluid w-100"
                            src="../assets/kue-donat.jpg" alt="promo product" style="height:180px">
                            <p>
                                KASJDKAJSDKAWJDKWAJDKAWJ KWAJEK AWJEKAWJ EKAWEJ AWKE
                            </p>
                    </b-carousel-slide>
                    <b-carousel-slide>
                        <img slot="img" class="d-block img-fluid w-100"
                            src="../assets/kue-love.jpg" alt="promo product" style="height:180px">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <!-- colom 2 start -->
            <b-col sm="4" class="fr-second-col">
            <b-card-group deck class="mb-3 mt-3">
                <b-card bg-variant="danger"
                text-variant="white"
                header="Discount Product"
                class="text-center"
                >
                <p class="card-text" type="light">
                See all discount product here and match it with your budget!
                </p>
                <b-button href="#" variant="warning">Check This Offer</b-button>
                </b-card>
            </b-card-group>
            </b-col>
        </b-row>
        <b-row class="second-row">
            <b-col sm class="sr-first-col" id="carousel-container2">
                <b-carousel id="carousel2"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="2100"
                v-model="slide2"
                @sliding-start2="onSlideStart2"
                @sliding-end2="onSlideEnd2"
                class="mb-3 mt-3">
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100"
                        src="../assets/kue-1.jpeg" alt="trending product" style="height:350px">
                </b-carousel-slide>
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100"
                        src="../assets/kue-stroberi.jpg" alt="trending product" style="height:350px">
                </b-carousel-slide>
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100"
                        src="../assets/kue-donat.jpg" alt="trending product" style="height:350px">
                </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col sm class="sr-second-col" id="carousel-container3">
                <b-carousel id="carouse3"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="2700"
                v-model="slide3"
                @sliding-start3="onSlideStart3"
                @sliding-end3="onSlideEnd3"
                class="mb-3 mt-3">
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100"
                        src="../assets/kue-kacang.jpg" alt="New Product" style="height:350px">
                </b-carousel-slide>
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100"
                        src="../assets/kue-segitiga.jpg" alt="New Product" style="height:350px">
                </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col sm class="sr-third-col">
                <b-card-group deck class="mb-3 mt-3">
                    <b-card
                    header="Visitor Statistic"
                    header-border-variant="danger"
                    align="center">
                    <p class="card-text" style="min-height:250px">
                       <b-list-group>
                        <b-list-group-item style="border:none" class="d-flex justify-content-between align-items-center">
                            Today visitor
                            <b-badge variant="danger" pill>18</b-badge>
                        </b-list-group-item>
                        <b-list-group-item style="border:none" class="d-flex justify-content-between align-items-center">
                            Today Transactions
                            <b-badge style="border:none" variant="danger" pill>Rp. 63.455.000</b-badge>
                        </b-list-group-item>
                        <b-list-group-item style="border:none" class="d-flex justify-content-between align-items-center">
                            Latest Buy
                            <b-badge variant="danger" pill>hotchocolate cake</b-badge>
                        </b-list-group-item>
                        <b-list-group-item style="border:none" class="d-flex justify-content-between align-items-center">
                            Registered User
                            <b-badge variant="danger" pill>66</b-badge>
                        </b-list-group-item>
                        </b-list-group>
                    </p>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
        <b-row class="third-row">
            <b-col sm="12" class="fr-first-col" id="carousel-container4">
                <b-carousel id="carousel4"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="2450"
                v-model="slide4"
                @sliding-start4="onSlideStart4"
                @sliding-end4="onSlideEnd4"
                class="mb-3 mt-3">
                    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                    <b-carousel-slide>
                        <img slot="img" class="d-block img-fluid w-100"
                            src="../assets/kue-1.jpeg" alt="Feedback &amp; Testimonial" style="height:350px">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </b-carousel-slide>
                    <b-carousel-slide>
                        <img slot="img" class="d-block img-fluid w-100"
                            src="../assets/kue-donat.jpg" alt="Feedback &amp; Testimonial" style="height:350px">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
        </b-row>
        <!-- list of product / categories like -->
         
         <b-row class="list-row mb-3 mt-3">
            <b-col sm="6" class="lr-first-col mb-4">
                <h3 style="color:#575757">Food Categories</h3>
                <b-list-group>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="angle-double-up" style="color:#ff4136"></icon> High Calories</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="child" style="color:#ff4136"></icon> Healthy Diet</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="industry" style="color:#ff4136"></icon> Sea Food Like</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="bullseye" style="color:#ff4136"></icon> Sweet &amp; Snack</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="dot-circle" style="color:#ff4136"></icon> Fruity Like</b-link></b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col sm="6" class="lr-second-col">
                <h3 style="color:#575757">Drink Categories</h3>
                <b-list-group>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="clone" style="color:#ff4136"></icon> With Topping</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="child" style="color:#ff4136"></icon> Healthy Water</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="diagnoses" style="color:#ff4136"></icon> Breeze &amp; Cold</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="clock" style="color:#ff4136"></icon> Midnight Coffee</b-link></b-list-group-item>
                    <b-list-group-item><b-link style="color:#333;text-decoration:none"><icon name="cube" style="color:#ff4136"></icon> Ice Cream</b-link></b-list-group-item>
                </b-list-group>
            </b-col>
         </b-row>
              <b-row class="third-row">
            <b-col sm="12" class="fr-first-col" id="carousel-container5">
                <b-carousel id="carousel5"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="2450"
                v-model="slide5"
                @sliding-start5="onSlideStart5"
                @sliding-end5="onSlideEnd5"
                class="mb-3 mt-3">
                    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                    <b-carousel-slide>
                        <img slot="img" class="d-block img-fluid w-100"
                            src="../assets/kue-1.jpeg" alt="Feedback &amp; Testimonial" style="height:350px">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </b-carousel-slide>
                    <b-carousel-slide>
                        <img slot="img" class="d-block img-fluid w-100"
                            src="../assets/kue-donat.jpg" alt="Feedback &amp; Testimonial" style="height:350px">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
        </b-row>
        <!-- tooltip start -->
        <b-tooltip target="carousel-container1" placement="topright"><small><marquee>Best Listed Product!</marquee></small></b-tooltip>
        <b-tooltip target="carousel-container2" placement="topright"><small><marquee>Latest Promo Product</marquee></small></b-tooltip>
        <b-tooltip target="carousel-container3" placement="topright"><small><marquee>Today Sold out product</marquee></small></b-tooltip>
        <b-tooltip target="carousel-container4" placement="topright"><small><marquee>Recommended Cake List</marquee></small></b-tooltip>
        <b-tooltip target="carousel-container5" placement="topright"><small>All Product</small></b-tooltip>
        <!-- tooltip end -->
    </b-container>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'

export default {
    components: {
        customIcon
    },
    data () {
        return {
            slide: 0,
            sliding: null,
            items: [{
                text: 'Home',
                href: '/#/'
            }, {
                text: 'Store',
                href: '#'
            }],
            baseClass: 'v-icon'
        }
    },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
     onSlideStart2 (slide2) {
      this.sliding2 = true
    },
    onSlideEnd2 (slide2) {
      this.sliding2 = false
    },
    onSlideStart3 (slide3) {
      this.sliding3 = true
    },
    onSlideEnd3 (slide3) {
      this.sliding3 = false
    },
     onSlideStart4 (slide4) {
      this.sliding4 = true
    },
    onSlideEnd4 (slide4) {
      this.sliding4 = false
    }
  }
}
</script>

<style scoped>

/*
    .fr-first-col{
        border: 1px dotted blue
    }
    .fr-second-col{
        border: 1px dotted green
    }
    .sr-first-col{
        border: 1px dotted lightsalmon
    }
    .sr-second-col{
        border: 1px dotted red
    }
    .sr-third-col{
        border: 1px dotted black
    }
    .tr-first-col{
        border: 1px dotted black
    }
*/
</style>
