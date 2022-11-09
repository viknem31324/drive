<template>
  <nav class="nav">
    <ul class="nav__list-link list-link">
      <li v-for="item in arrs" :key="item.id">
        <router-link class="list-link__item" :to="`${item.link}`">{{ item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      arrs: [
        {name: 'Парковка', link: '/', id: 1},
        {name: 'Страховка', link: '/', id: 2},
        {name: 'Бензин', link: '/', id: 3},
        {name: 'Обслуживание', link: '/', id: 4},
      ]
    }
  }

})
</script>