<template>
  <section class="best">
    <div class="container">
      <div class="title">Our best</div>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="best__wrapper">
            <product-card classItem="best__item" :name="cards[0].name" :price="cards[0].price" :image="cards[0].image" />
            <product-card classItem="best__item" :name="cards[1].name" :price="cards[1].price" :image="cards[1].image" />
            <product-card classItem="best__item" :name="cards[2].name" :price="cards[2].price" :image="cards[2].image" />
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
          price: 10.99,
          image: 'coffee-1.jpg',
        },
        {
          id: 1,
          name: 'Product 2',
          price: 11.75,
          image: 'coffee-2.jpg',
        },
        {
          id: 2,
          name: 'Product 3',
          price: 15.99,
          image: 'coffee-3.jpg',
        }
      ]
    }
  }
}
</script>