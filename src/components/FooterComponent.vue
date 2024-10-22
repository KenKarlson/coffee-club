<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link to="/"
                ><img
                  :src="require(`@/assets/logo/Logo_black.svg`)"
                  alt="Logo.svg"
              /></router-link>
            </li>
            <naw-item
              v-for="(link, index) in links"
              :key="index"
              :link="link.link"
              :text="link.text"
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
import NawItem from "@/components/NawItem.vue";
export default {
  components: { NawItem },
  data() {
    return {
      links: [
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
