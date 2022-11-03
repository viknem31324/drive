<template>
  <div class="burger">
    <div class="burger__btn" @click="burgerCheck = !burgerCheck" :class="{'burger__btn--active white-btn': burgerCheck}">
      <span class="burger__line"></span>
    </div>
    <div class="burger__lang">Eng</div>
    <div class="burger__block" :class="{ 'is-visible': burgerCheck }">
      <div class="burger__nav nav">
        <ul class="nav__list-link list-link">
          <router-link class="list-link__item" tag="li" to="/">Парковка</router-link>
          <router-link class="list-link__item" tag="li" to="/">Страховка</router-link>
          <router-link class="list-link__item" tag="li" to="/">Бензин</router-link>
          <router-link class="list-link__item" tag="li" to="/">Обслуживание</router-link>
        </ul>
        <ul class="burger__list-icon list-icon">
          <li class="list-icon__item">
            <a href="https://web.telegram.org/">
              <img src="../../app/assets/img/burger/free-icon-telegram-3536661.png" alt="Telegram">
            </a>
          </li>
          <li class="list-icon__item">
            <a href="https://www.facebook.com/">
              <img src="../../app/assets/img/burger/free-icon-facebook-174848.png" alt="Facebook">
            </a>
          </li>
          <li class="list-icon__item">
            <a href="https://www.instagram.com/">
              <img src="../../app/assets/img/burger/free-icon-instagram-1409946.png" alt="Instagram">
            </a>
          </li>
        </ul>
        <div class="burger__lang burger__lang--nav">Eng</div>
      </div>
      <div class="burger__dark" @click="burgerCheck = !burgerCheck" v-show="burgerCheck"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      burgerCheck: false,
    }
  },

}
</script>
