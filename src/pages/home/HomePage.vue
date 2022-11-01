<template>
  <div class="home">
    <burger-menu />
    <div class="home__left">
      <header-block></header-block>
      <div class="home__content">
      <my-button 
        class="home__btn"
        :theme="'btn-green'"
        :disabled="false"
        :onClick="overOrder"
      >Ghbdtn</my-button>
    </div>
      <footer-block></footer-block>
    </div>
    <div class="home__right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {MyButton} from "../../shared";
import {BurgerMenu, HeaderBlock, FooterBlock} from "../../widgets";
export default defineComponent({
  data() {
    return {
    }
  },
  components: {
    HeaderBlock,
    FooterBlock,
    BurgerMenu,
    MyButton,
  },
  methods: {
    overOrder(): void {
      console.log('click')
    }
  }
});
</script>
