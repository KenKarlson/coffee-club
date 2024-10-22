<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div class="best__item-title">{{ text }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>