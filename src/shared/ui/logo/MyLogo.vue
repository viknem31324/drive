<template>
  <div class="logo">
    <router-link class="logo__link" :tag="'a'" :to="'/'">
      <slot>Logo</slot>
    </router-link>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
    }
  },
  
});
</script>
<style lang="scss" src="./index.scss" />