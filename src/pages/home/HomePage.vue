<template>
  <div class="home">
    <BurgerMenu class="home__burger" />
    <div class="home__left">
      <HeaderBlock></HeaderBlock>
      <main class="home__content">
        <h1 class="home__title">Каршеринг <br><span>Need for drive</span></h1>
        <div class="home__descr">Поминутная аренда авто твоего города</div>
        <MyButton class="home__btn" :theme="'btn-green'" @click.native="overOrder()">Забронировать
        </MyButton>
      </main>
      <FooterBlock></FooterBlock>
    </div>
    <div class="home__right">
      <MySlider></MySlider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MyButton from "@/shared/ui/button/MyButton.vue";
import BurgerMenu from "@/widgets/burger-menu/BurgerMenu.vue";
import HeaderBlock from "@/widgets/header/HeaderBlock.vue";
import FooterBlock from "@/widgets/footer/FooterBlock.vue";
import MySlider from "@/widgets/slider/MySlider.vue";

export default defineComponent({
  data() {
    return {
    }
  },
  components: {
    HeaderBlock,
    FooterBlock,
    BurgerMenu,
    MySlider,
    MyButton,
  },
  methods: {
    overOrder(): void {
      console.log('click')
    }
  }
});
</script>
