<template>
  <nav class="nav">
    <ul class="nav__list-link list-link">
      <li v-for="item in getNavArr" :key="item.id">
        <router-link class="list-link__item" :to="`${item.link}`">{{ item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import Vue from 'vue';
import {mapGetters} from 'vuex';

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getNavArr"]),
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />