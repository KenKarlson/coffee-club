<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <li class="header__item">
        <router-link to="/">
          <img src="@/assets/Logo.svg" alt="logo">
        </router-link>
        <!-- <a href="./index.html">
          <img src="@/assets/Logo.svg" alt="logo">
        </a> -->
      </li>
      <li class="header__item">
        <router-link to="/our-coffee">Our coffe</router-link>
        <!-- <a href="./coffeepage.html">Our coffee</a> -->
      </li>
      <li class="header__item">
        <router-link to="/goodspage">For your pleasure</router-link>
      </li>
      <li class="header__item">
        <router-link to="/contacts">Contact us</router-link>
      </li>
      <li class="header__item">
        <router-link to="/thanks">Thanks</router-link>
        <!-- <a href="./coffeepage.html">Our coffee</a> -->
      </li>
    </ul>
  </header>
</template>