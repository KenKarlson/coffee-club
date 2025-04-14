import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "@/views/HeroView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import ContactView from "@/views/ContactView.vue";
import ForYouPleasure from "@/views/ForYouPleasure.vue";
import ThankYouView from "@/views/ThankYouView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hero",
    component: HeroView,
  },
  {
    path: "/our-coffee",
    name: "our-coffee",
    component: OurCoffeeView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactView,
  },
  {
    path: "/goodspage",
    name: "goodspage",
    component: ForYouPleasure,
  },
  {
    path: "/thanks",
    name: "thanks",
    component: ThankYouView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;

//coffeepage.html
