<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="card in cards"
                :key="card.id"
                classItem="shop__item"
                :image="card.image"
                :product="card.product"
                :country="card.country"
                :price="card.price"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { ProductCard, NavBarComponent },
  data() {
    return {
      cards: [
        {
          id: uuidv4(),
          image: "coffee-3.jpg",
          product: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: uuidv4(),
          image: "coffee-3.jpg",
          product: "CREUSANE 1kg",
          country: "Dertyua",
          price: 16.99,
        },
        {
          id: uuidv4(),
          image: "coffee-3.jpg",
          product: "MUCHACHO Coffee 1kg",
          country: "Mexic",
          price: 9.99,
        },
        {
          id: uuidv4(),
          image: "coffee-3.jpg",
          product: "Chi-Pen Coffee 1kg",
          country: "China",
          price: 3.99,
        },
        {
          id: uuidv4(),
          image: "coffee-3.jpg",
          product: "GERMER Coffee 1kg",
          country: "Austria",
          price: 12.99,
        },
        {
          id: uuidv4(),
          image: "coffee-3.jpg",
          product: "АРОМАТНОЕ Coffee 1kg",
          country: "Luanda",
          price: 6.99,
        },
      ],
    };
  },
};
</script>
