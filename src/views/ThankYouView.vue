<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <ul
              class="header d-flex justify-content-center justify-content-md-start flex-wrap"
            >
              <li class="header__item">
                <router-link :to="links[0].link"
                  ><img :src="require(`@/assets/logo/${links[0].icon}`)" alt=""
                /></router-link>
              </li>
              <naw-item
                :link="links[1].link"
                :text="links[1].text"
                class="header__item"
              ></naw-item>
              <naw-item
                :link="links[2].link"
                :text="links[2].text"
                class="header__item"
              ></naw-item>
              <naw-item
                :link="links[3].link"
                :text="links[3].text"
                class="header__item"
              ></naw-item>
            </ul>
          </div>
        </div>
        <h1 class="title-big">Thanks you</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="title big__text mt-5">
              <p>Thank you so much</p>
              <p>We contact you as soon as posible</p>
              <img src="@/assets/img/thanks.png" alt="thanks-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NawItem from "@/components/NawItem.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { NawItem },
  data() {
    return {
      links: [
        {
          id: uuidv4(),
          text: "",
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: uuidv4(),
          text: "Our coffee",
          link: "/coffeepage.html",
          icon: "",
        },
        {
          id: uuidv4(),
          text: "For your pleasure",
          link: "/goodspage.html",
          icon: "",
        },
        {
          id: uuidv4(),
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
      ],
    };
  },
};
</script>