<template>
<div class="posts">
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
                    <b-carousel-slide v-for="post of posts" :key="post.title">
                        <img slot="img" class="d-block img-fluid w-100"
                            v-bind:src="post.thumbnailUrl" alt="promo product" style="height:180px">
                            <p>
                                {{post.title}}
                            </p>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>