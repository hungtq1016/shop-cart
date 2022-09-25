<template>
  <div class="home">
    <h1>Danh Sách Hàng Hóa</h1>
    <div class="container">
      <div class="product-cards-container row row-cols-3" style="row-gap: 1rem;">
        <ProductSummaryCard
          v-for="(item, i) in items"
          :key="i"
          :product="item"
          v-on:view-product="viewProduct($event)" />
      </div>    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js';
import ProductSummaryCard from '../components/product/ProductSummaryCard.vue'
// import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'


export default {
  name: "Home",
  components: {ProductSummaryCard},
  data() {
    return {
      items: items,
      product: null,
     
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      // this.active.product_drawer = true
    },
    
  }
};
</script>
