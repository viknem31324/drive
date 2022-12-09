<template>
  <label class="custom-input">
    <div class="custom-input__descr">{{ label }}</div>
    <input
      class="custom-input__input"
      :type="type" :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      @focus="(focused = true)"
      @blur="onBlur()"
    />
    <span class="custom-input__close" @click="$emit('input', '')"></span>
    <ul class="custom-input__list" v-show="(focused && value !== '')">
      <li class="custom-input__item" v-for="item in searchHandler(value)" @click="$emit('input', item.name)" :key="item.name">{{ item.name }}</li>
    </ul>
  </label>
</template>

<script>
import Vue from 'vue';
// import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'MyInput',
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    // ...mapActions(['createProgress']),
    searchHandler(value) {
      return this.list.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    },
    onBlur() {
      setTimeout(() => {
        this.focused = false;
      }, 80);
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    list: {
      type: [],
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    }
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />