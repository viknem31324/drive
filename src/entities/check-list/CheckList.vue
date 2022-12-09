<template>
  <ul class="check-list">
    <li v-for="(item, inx) in 3" :key="inx">
      <RadioBtn :text="inx"/>
    </li>
  </ul>
</template>
<script>
import Vue from 'vue';
import RadioBtn from '@/shared/ui/radio-btn/RadioBtn.vue';

export default Vue.extend({
  components: {
    RadioBtn,
  }
});
</script>
<style lang="scss" scoped src="./index.scss" />