<template>
  <section class="best">
    <div class="container">
      <div class="title">Our best</div>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="best__wrapper">
            <product-card />
            <product-card />
            <product-card />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';  
export default {
  components: { ProductCard },
  data() { 
    return {
      cards: [
        {
          id: 0,
          name: 'Product 1',
          img: 'https:',
        },
        {
          id: 1,
          name: 'Product 2',
          img: 'https:',
        },
        {
          id: 2,
          name: 'Product 3',
          img: 'https:',
        }
      ]
    }
  }
}
</script>