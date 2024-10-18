<template>
  <div class="shop__item">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div class="best__item-title">{{ product }}</div>
    <div class="shop__item-country">{{ country }}</div>
    <div class="best__item-price">{{ price }}</div>
  </div>
</template>
<script>
export default {
  props: {
    image: {},
    product: {},
    country:{},
    price: {},
  },
};
</script>
