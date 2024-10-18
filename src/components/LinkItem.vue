<template>
  <li class="header__item">
    <router-link :to="link">
      <img :src="require(`@/assets/logo/${image}`)" :alt="image" />
      {{ text }}
    </router-link>
  </li>
</template>
<script>
export default {
  props: {
    text: { required: false },
    link: {  },
    image: { required: false}
  },
};
</script>