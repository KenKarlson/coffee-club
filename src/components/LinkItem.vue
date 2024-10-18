<template>
  <li :class="classItem">
    <router-link :to="link">
      {{ text }}
    </router-link>
  </li>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    link: {
      type: String,
    },
    image: { required: false },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>