<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <ul
              class="header d-flex justify-content-center justify-content-md-start flex-wrap"
            >
              <!--Nav-->
              <li class="header__item">
                <router-link to="/"
                  ><img :src="require(`@/assets/logo/Logo.svg`)" alt="Logo.svg"
                /></router-link>
              </li>
              <naw-item
                v-for="(link, index) in links"
                :key="index"
                :link="link.link"
                :text="link.text"
                class="header__item"
              ></naw-item>
            </ul>
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="(card, index) in cards"
                :key="index"
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
import NawItem from "@/components/NawItem.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard, NawItem },
  data() {
    return {
      cards: [
        {
          id: 0,
          image: "coffee-3.jpg",
          product: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 1,
          image: "coffee-2.jpg",
          product: "CREUSANE 1kg",
          country: "Dertyua",
          price: 16.99,
        },
        {
          id: 2,
          image: "coffee-1.jpg",
          product: "MUCHACHO Coffee 1kg",
          country: "Mexic",
          price: 9.99,
        },
        {
          id: 3,
          image: "coffee-3.jpg",
          product: "Chi-Pen Coffee 1kg",
          country: "China",
          price: 3.99,
        },
        {
          id: 4,
          image: "coffee-2.jpg",
          product: "GERMER Coffee 1kg",
          country: "Austria",
          price: 12.99,
        },
        {
          id: 5,
          image: "coffee-1.jpg",
          product: "АРОМАТНОЕ Coffee 1kg",
          country: "Luanda",
          price: 6.99,
        },
      ],
      links: [
        {
          text: "Our coffee",
          link: "/coffeepage.html",
          icon: "",
        },
        {
          text: "For your pleasure",
          link: "/goodspage.html",
          icon: "",
        },
        {
          text: "Contact us",
          link: "/contacts.html",
          icon: "",
        },
        {
          text: "",
          link: "",
          icon: "",
        },
        {
          text: "",
          link: "",
          icon: "",
        },
      ],
    };
  },
};
</script>
