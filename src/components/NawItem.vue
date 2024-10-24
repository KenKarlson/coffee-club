<template>
  <li :class="classItem">
    <router-link :to="link"> {{ text }} <slot></slot></router-link>
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
      required: true,
    },
    icon: { 
      required: false 
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>