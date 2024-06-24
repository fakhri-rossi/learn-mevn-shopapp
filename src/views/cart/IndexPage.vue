<template>
  <div>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>

      <ItemCartVue 
        v-for="item in cartItems"
        :key="item.id"

        :item="item"
      />

      <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
      <button class="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
// import { cartItems } from '@/data-seed';
import axios from 'axios';
import ItemCartVue from '@/components/ItemCart.vue';

export default {
  components: {
    ItemCartVue
  },
  data(){
    return {
      cartItems: []
    }
  },
  computed:{
    totalPrice(){
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price), 0
      )
    }
  },
  async created(){
    const { user_id } = this.$route.params;
    const result = await axios.get(`http://localhost:8000/api/orders/${ user_id }`);
    console.log(result.data);
    this.cartItems = result.data.cart_items;
  }
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  #total-price {
    padding: 16px;
    text-align: right;
  }
  #checkout-button {
    width: 100%;
  }
</style>