<template>
  <button class="btn" @click="overOrder()" :class="[activeBg]" :disabled="disabled">
    <slot>Кнопка</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType} from "vue";

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
    overOrder: {
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