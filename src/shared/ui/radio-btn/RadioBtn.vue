<template>
  <label for="btn" >
    <input
      type="radio"
      name="btn"
      class="check-list__radiobtn"
      v-bind:class="{}"
    />
      {{ text }}
    </label>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: Number,
    }
  },
});
</script>
<style lang="scss" scoped src="./index.scss" />