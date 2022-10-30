<template>
  <button class="btn" 
  :class="{'btn--disabled' : button.disabled}">
    {{ button.title }}
  </button>
</template>

<script lang='ts'>
import { PropType } from "vue";
import { Button } from "../models";

export default {
  props: {
    button: {
      type: Object as PropType<Button>,
      required: true,
    },
  },
  computed: {
    // activeColor(): string {
    //   const color = this.button.disabled ? "btn--disabled" : "";
    //   return color;
    // },
  },
};
</script>
