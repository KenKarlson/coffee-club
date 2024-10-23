<template>
  <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap" >
    <li class="header__item">
      <router-link :to="links.header.link"
        ><img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </router-link>
    </li>
    <naw-item
      v-for="(link, index) in links.other"
      :key="index"
      :link="link.link"
      :text="link.text"
      class="header__item"
    ></naw-item>
  </ul>
</template>
<script>
import NawItem from "@/components/NawItem.vue";

export default {
  components: { NawItem },
  data() {
    return {
      links: {
        header: {
          link: "/",
          icon: "Logo.svg",
        },
        other: [
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
          }
        ],
      },
    };
  },
}

</script>
