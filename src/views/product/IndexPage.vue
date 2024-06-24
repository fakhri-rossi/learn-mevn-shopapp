<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">

        <ProductItemVue 
          v-for="product in products"
          :key="product.id"

          :product="product"
        />
        
      </div>
    </div>
  </div>
</template>

<script>
import ProductItemVue from '@/components/ProductItem.vue';
import axios from 'axios';


export default {
  components: {
    ProductItemVue
  },
  data(){
    return {
      products: []
    }
  }, 
  async created(){
    const result = await axios.get('http://localhost:8000/api/products');
    this.products = result.data;
  }
}
</script>

<style scoped>
    .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>