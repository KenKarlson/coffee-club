<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <naw-item :link="links.header.link" class="footer__item">
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
              />
            </naw-item>
            <naw-item
              v-for="(link, index) in links.other"
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
      links: {
        header: {
          id: 1,
          link: "/",
          icon: "Logo_black.svg",
        },
        other: [
          {
            id: 2,
            text: "Our coffee",
            link: "/coffeepage.html",
            icon: "",
          },
          {
            id: 3,
            text: "For your pleasure",
            link: "/goodspage.html",
            icon: "",
          },
          {
            id: 4,
            text: "Contact us",
            link: "/contacts.html",
            icon: "",
          },
        ],
      },
    };
  },
};
</script>
