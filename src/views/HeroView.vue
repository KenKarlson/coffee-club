<template>
  <main>
    <!-- Header -->
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap" >
              <link-item :link="links[0].link":text="links[0].text" :image="links[0].icon"/>
             
              <!-- <link-item :link="links[1].link":text="links[1].text"/>
              <link-item :link="links[2].link":text="links[2].text"/>
              <link-item :link="links[3].link":text="links[3].text"/> -->
              <!-- <nav-bar-component
                :text="links[0].text" 
                :link="links[0].link" 
                :image="links[0].icon"
              />
              <nav-bar-component
                :text="links[1].text" 
                :link="links[1].link" 
                :image="links[1].icon"
              />
              <nav-bar-component text="Our coffee" link="/coffeepage.html" />              
              <nav-bar-component text="For your pleasure" link="/coffeepage.html" /> -->
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a href="./coffeepage.html" class="preview__btn">More</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Sections -->
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <best-card />
              <best-card />
              <best-card />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import BestCard from "@/components/BestCard.vue";
import LinkItem from "@/components/LinkItem.vue";

export default {
  components: { NavBarComponent, BestCard, LinkItem },
  data() {
    return {
      cards: [
        {
          id: 0,
          text: "Coffee Aura",
          country: "Quar",
          price: "9.99$",
          icon: "coffee-1.jpg",
        },
        {
          id: 1,
          text: "Coffee Maina",
          country: "Brazil",
          price: "9.99$",
          icon: "coffee-2.jpg",
        },
        {
          id: 2,
          text: "Coffee Nesq",
          country: "Chia",
          price: "9.99$",
          icon: "coffee-3.jpg",
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
    };
  },
};
</script>
