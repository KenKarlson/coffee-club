import Vue from 'vue';
import Router from 'vue-router';
import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import GoodsPageView from '@/views/GoodsPageView.vue';
import ContactPageView from '@/views/ContactPageView.vue';
import ThanksPageView from '@/views/ThanksPageView.vue';


Vue.use(Router);

const routes = [
  
  {path: '/', component: HeroView },
  {path: '/our-coffee', component: OurCoffeeView },
  {path: '/goodspage', component: GoodsPageView },
  {path: '/contacts', component: ContactPageView},
  {path: '/thanks', component: ThanksPageView}
];
const router = new Router({
  mode: 'history',
  routes
});
export default router;