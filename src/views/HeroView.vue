<template>
  <main>  
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <!---Header-nav--->
            <nav-bar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
            <div class="preview__subtitle">We makes every day full of energy and taste</div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a href="./coffeepage.html" class="preview__btn">More</a>
          </div>
        </div>
      </div>
    </div>

    <!---The-Hero--->
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.<br><br>

              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---The-Best-Cards--->
    <best-cards-component />
     <!-- <product-card-component></product-card-component> -->
     <!-- <product-card :name="bestsellers[0].name" :price="bestsellers[0].price" :image="bestsellers[0].image" />
     <product-card :name="bestsellers[1].name" :price="bestsellers[1].price" :image="bestsellers[1].image" />
     <product-card :name="bestsellers[2].name" :price="bestsellers[2].price" :image="bestsellers[2].image" /> -->

  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import BestCardsComponent from '@/components/BestCardsComponent.vue'
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: { NavBarComponent, BestCardsComponent, ProductCard },
  data() {
    return {
      bestsellers:[
        {
          id: 0,
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73,
          image: 'coffee-1.jpg',

        },
        {
          id: 1,
          name: 'Presto Coffee Beans 2kg',
          price: 15.99,
          image: 'coffee-2.jpg',
        },
        {
          id: 2,
          name: 'AROMOSTICO Coffee 1kg',
          price: 6.99,
          image: 'coffee-3.jpg',
        }
      ]
    }
  }

}
</script>
