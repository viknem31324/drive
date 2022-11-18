<template>
  <button class="burger-btn" :class="{'burger-btn--active white-btn': check}">
    <span class="burger-btn__line"></span>
  </button>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
    check: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="scss" src="./index.scss" />