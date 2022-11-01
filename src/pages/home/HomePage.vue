<template>
  <div class="home">
    <burger-menu />
    <div class="home__left">
      <my-button 
        class="home__btn"
        :theme="'btn-green'"
        :disabled="false"
        :onClick="overOrder"
      >Ghbdtn</my-button>
    </div>
    <div class="home__right"></div>
  </div>
</template>

<script>
import MyButton from "@/shared/";
import BurgerMenu from "@/widgets/";
export default {
  data() {
    return {
    }
  },
  components: {
    BurgerMenu,
    MyButton,
  },
  methods: {
    overOrder() {
      console.log('click')
    }
  }
};
</script>
