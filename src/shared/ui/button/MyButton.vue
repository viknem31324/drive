<template>
  <button class="btn" @click="onClick" :class="[activeBg]" :disabled="disabled">
    <slot>Кнопка</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  data() {
    return {
    }
  },
  props: {
    theme: {
      type: String,
      required: true,
      validator: function (value: string) {
        return ['btn-green', 'btn-blue'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function as PropType<() => void>,
      required: true
    }

  },
  computed: {
    activeBg(): string {
      return this.theme;
    },
  },
});
</script>