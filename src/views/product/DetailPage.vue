<template>
  <div id="page-wrap" v-if="product">
    <h4 v-if="showNotif" class="notif">Item added Successfully</h4>
    <div id="img-wrap">
      <img :src="`http://localhost:8000${product.imageUrl}`" alt="">
    </div>

    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">Rp.{{ product.price }}</h3>
      <p>Average Rating: {{ product.averageRating }}</p>
      <button id="add-to-cart" @click="addToCart(product._id)">Add to Cart</button>
      <p>{{ product.description }}</p>
    </div>
  </div>
  
  <NotFoundVue v-else />
</template>

<script>
// import { products } from '../../data-seed'
import axios from 'axios';
import NotFoundVue from '../errors/NotFound.vue'

export default {
  components: {
    NotFoundVue
  },
  data(){
    return {
      product: {},
      showNotif: false
    }
  },
  methods:{
    async addToCart(product){
      await axios.post('http://localhost:8000/api/orders/1/add', {
        product: product
      });

      this.showNotif = true;

      setTimeout(function () {
        this.showNotif = false;
      }, 300);
    }
  },
  async created(){
    const { id } = this.$route.params;
    const result = await axios.get(`http://localhost:8000/api/products/${ id }`);
    this.product = result.data;
  }
}
</script>

<style scoped>
    #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

  .notif{
    text-align: center;
    color: white;
    background-color: #41B883;
    padding: 3%;
    border-radius: 8px;
  }
</style>