import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "../views/HeroView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import ContactView from "@/views/ContactView.vue";
import ForYouPleasure from "@/views/ForYouPleasure.vue";
import ThankYouView from "@/views/ThankYouView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/index.html", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/coffeepage.html", component: OurCoffeeView },
  { path: "/contacts.html", component: ContactView },
  { path: "/goodspage.html", component: ForYouPleasure },
  { path: "/thanks.html", component: ThankYouView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;

//coffeepage.html
