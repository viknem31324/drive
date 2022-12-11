<template>
  <ul class="check-list">
    <li v-for="(item, inx) in getCategoriRadioBtn" :key="inx">
      <RadioBtn :text="item.text" :value="item.text" v-model="categori" />
    </li>
  </ul>
</template>
<script>
import Vue from "vue";
import RadioBtn from "@/shared/ui/radio-btn/RadioBtn.vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  data() {
    return {
      categori: 'Все модели',
    };
  },
  updated() {
    console.log(1111111111)
    this.setActiveCategori(this.categori);
  },
  methods: {
    ...mapMutations(['setActiveCategori']),
  },
  computed: {
    ...mapGetters(['getCategoriRadioBtn']),
  },
  components: {
    RadioBtn,
  },
});
</script>
<style lang="scss" scoped src="./index.scss" />