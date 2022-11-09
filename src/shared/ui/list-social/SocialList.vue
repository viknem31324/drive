<template>
  <ul class="burger__list-icon list-icon">
    <li class="list-icon__item" v-for="item in arrs" :key="item.id">
      <a :href="`${item.link}`">
        <img :src="require(`@/shared/assets/img/burger/${item.path}`)" :alt="`${item.alt}`">
      </a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      arrs: [
        {link: 'https://web.telegram.org/', path: 'free-icon-telegram-3536661.png', alt: 'Telegram', id: 1},
        {link: 'https://www.facebook.com/', path: 'free-icon-facebook-174848.png', alt: 'Facebook', id: 2},
        {link: 'https://www.instagram.com/', path: 'free-icon-instagram-1409946.png', alt: 'Instagram', id: 3},
      ]
    }
  }
})
</script>