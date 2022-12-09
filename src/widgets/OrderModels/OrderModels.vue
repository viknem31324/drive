<template>
  <div class="order-models">
    OrderModels
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  data() {
    return {
      model: '',
    };
  },
  created() {
    this.setModel('');
  },
  beforeRouteLeave(to, from, next) {
    this.setModel(this.model);
    console.log(1111111)
    if(this.getModel === ' ') {
      next(false);
    }else {
      next();
    }
  },
  methods: {
    ...mapMutations(['setModel']),
  },
  computed: {
    ...mapGetters(['getModel']),
  }
});
</script>
<style lang="scss" src="./index.scss" scoped />