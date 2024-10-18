<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <link-item 
                :link="links[0].link"
                :text="links[0].text" 
                :image="links[0].icon"
              />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
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
              <product-card classItem="shop__item" :name="goodscards[1].name" :price="goodscards[1].price" :image="goodscards[1].image" />
              <product-card classItem="shop__item" :name="goodscards[2].name" :price="goodscards[2].price" :image="goodscards[2].image" />
              <product-card classItem="shop__item" :name="goodscards[3].name" :price="goodscards[3].price" :image="goodscards[3].image" />
              <product-card classItem="shop__item" :name="goodscards[4].name" :price="goodscards[4].price" :image="goodscards[4].image" />
              <product-card classItem="shop__item" :name="goodscards[5].name" :price="goodscards[5].price" :image="goodscards[5].image" />
              <product-card classItem="shop__item" :name="goodscards[6].name" :price="goodscards[6].price" :image="goodscards[6].image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BestCardsComponent from "@/components/BestCardsComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import LinkItem from "@/components/LinkItem.vue";

export default {
  components: { BestCardsComponent, ProductCard, LinkItem },
  data() {
    return {
      goodscards: [
        {
          id: 1,
          name: 'Solimo Coffee Beans 2kg',
          country: 'Brasil',
          price: 10.73,
          image: 'coffee-1.jpg',
        },
        {
          id: 2,
          name: 'Presto Coffee Beans 1kg',
          country: 'Brasil',
          price: 15.99,
          image: 'coffee-2.jpg',
        },
        {
          id: 3,
          name: 'AROMISTICO Coffee 1kg',
          country: 'Brasil',
          price: 6.99,
          image: 'coffee-1.jpg',
        },
        {
          id: 4,
          name: 'Solimo Coffee Beans 2kg',
          country: 'Brasil',
          price: 10.73,
          image: 'coffee-2.jpg',
        },
        {
          id: 5,
          name: 'Solimo Coffee Beans 2kg',
          country: 'Brasil',
          price: 10.73,
          image: 'coffee-3.jpg',
        },
        {
          id: 6,
          name: 'Solimo Coffee Beans 2kg',
          country: 'Brasil',
          price: 10.73,
          image: 'coffee-1.jpg',
        },
        {
          id: 7,
          name: 'Coffee',
          country: 'Brasil',
          price: 10.73,
          image: 'coffee-2.jpg',
        },
        {
          id: 8,
          name: 'Coffee-3',
          country: 'Brasil',
          price: 10.73,
          image: 'coffee-3.jpg',
        },
      ],
      links: [
        {
          id: 0,
          text: "",
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/coffeepage.html",
          icon: "",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/goodspage.html",
          icon: "",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contacts.html",
          icon: "",
        },
        {
          id: 4,
          text: "",
          link: "",
          icon: "",
        },
        {
          id: 5,
          text: "",
          link: "",
          icon: "",
        },
      ],
    }
  }
};
</script>
