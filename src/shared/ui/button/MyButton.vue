<template>
  <button class="btn" :class="[activeBg]" :disabled="disabled">
    <slot>Кнопка</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
    }
  },
  props: {
    theme: {
      type: String,
      required: true,
      // validator: function (value: string) {
      //   return ['btn-green', 'btn-blue'].includes(value)
      // }
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    activeBg(): string {
      return this.theme;
    },
  },
});
</script>
<style lang="scss" src="./index.scss" />