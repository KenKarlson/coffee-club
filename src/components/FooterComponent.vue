<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link :to="links[0].link"><img :src="require(`@/assets/logo/${links[0].icon}`)" alt=""/></router-link>
            </li>
            <naw-item
              :link="links[1].link"
              :text="links[1].text"
              class="footer__item"
            ></naw-item>
            <naw-item
              :link="links[2].link"
              :text="links[2].text"
              class="footer__item"
            ></naw-item>
            <naw-item
              :link="links[3].link"
              :text="links[3].text"
              class="footer__item"
            ></naw-item>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>
<script>
import NawItem from '@/components/NawItem.vue';
export default {
  components: { NawItem },
  data() {
    return {
      links: [
        {
          id: 0,
          text: "",
          link: "/",
          icon: "Logo_black.svg",
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
