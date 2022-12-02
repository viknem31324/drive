<template>
  <div class="burger">
    <BurgerButton @click.native="burgerCheck = !burgerCheck" :check="burgerCheck"></BurgerButton>
    <div class="burger__lang">Eng</div>
    <div class="burger__block" :class="{ 'is-visible': burgerCheck }">
      <div class="burger__nav">
        <NavigationElement></NavigationElement>
        <SocialList></SocialList>
        <div class="burger__lang burger__lang--nav">Eng</div>
      </div>
      <div class="burger__dark" @click="burgerCheck = !burgerCheck" v-show="burgerCheck"></div>
    </div>

  </div>
</template>

<script lang="ts">
import BurgerButton from '@/shared/ui/burger-button/BurgerButton.vue';
import NavigationElement from '@/shared/ui/nav-element/NavigationElement.vue';
import SocialList from '@/shared/ui/list-social/SocialList.vue';

export default {
  data() {
    return {
      burgerCheck: false,
    }
  },
  components: {
    BurgerButton,
    NavigationElement,
    SocialList
  },
  methods: {
    dclick() {
      console.log(11111)
    }
  }

}
</script>
<style lang="scss" src="./index.scss" />
