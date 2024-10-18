<template>
  <div class="best__item">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div class="best__item-title">{{ text }}</div>
    <div class="best__item-price">{{ price }}</div>
  </div>
</template>
<script>
export default {
  props: {
      image: { },
      text: { },
      price: { },
    }
};
</script>
