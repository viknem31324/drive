<template>
  <div class="burger">
    <div class="burger__btn" @click="checkedBurger()"
    :class="{'burger__btn--active': burgerCheck}">
      <span class="burger__line"></span>
    </div>
    <div class="burger__lang">Eng</div>
    <div class="burger__nav nav" :class="{'is-visible': burgerCheck}">
      <ul class="nav__list-link list-link">
        <router-link class="list-link__item" tag="li" to="/">Парковка</router-link>
        <router-link class="list-link__item" tag="li" to="/">Страховка</router-link>
        <router-link class="list-link__item" tag="li" to="/">Бензин</router-link>
        <router-link class="list-link__item" tag="li" to="/">Обслуживание</router-link>
      </ul>
      <ul class="nav__list-icon">
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
  methods: {
    checkedBurger () {
      this.burgerCheck = !this.burgerCheck;
      console.log(this.burgerCheck);
    }
  }

}
</script>
