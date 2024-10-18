<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <link-item
              v-for="item in links"
              classItem="footer__item"
              :key="item.id"
              :link="item.link"
              :text="item.text"
            />
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
import LinkItem from "@/components/LinkItem.vue";
export default {
  components: { LinkItem },
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
