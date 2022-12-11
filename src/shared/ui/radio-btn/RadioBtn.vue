<template>
  <label :for="text" >
    <input
      type="radio"
      name="radio"
      :id="text"
      :value="text"
      @change="$emit('input', text)"
    />
      {{ text }}
    </label>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped src="./index.scss" />