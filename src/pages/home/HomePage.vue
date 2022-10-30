<template>
  <div class="home">
    <burger-menu />
    <div class="home__left">
      <my-button
      :button="{ title: 'dssfdsf', color: 'accent', disabled: false}"
      ></my-button>
    </div>
    <div class="home__right"></div>
  </div>
</template>

<script>
import MyButton from "@/shared/";
import BurgerMenu from "@/widgets/";
export default {
  components: {
    BurgerMenu,
    MyButton,
  },
};
</script>
