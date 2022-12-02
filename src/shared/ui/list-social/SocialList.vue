<template>
  <ul class="burger__list-icon list-icon">
    <li class="list-icon__item" v-for="item in getSocialArr" :key="item.id">
      <a :href="`${item.link}`">
        <img :src="require(`@/shared/assets/img/burger/${item.path}`)" :alt="`${item.alt}`">
      </a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["getSocialArr"]),
  }
})
</script>
<style lang="scss" src="./index.scss" />