<template>
<div :class="classItem">
  <img :src="require(`@/assets//img/${image}`)" :alt="image">
  <div class="best__item-title">{{name}}</div>
  <div class="best__item-price">{{price}}$</div>
</div>
</template>

<script>
  export default{
    props:{
      name:{
        type: String,
        Required: true
      },
      price:{
        type: Number,
        Required: true
      },
      image:{
        type: String,
        Required: true
      },
      classItem: {
        type: String,
        Required: false,
      }
    }
  }
</script>
