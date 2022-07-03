<template>
  <div class="card">
    <img :src="item[4]" alt="Image" class="card__img" />
    <div class="card__text">
      <div class="card__title">{{ item[2] }}</div>
      <div class="card__subtitle">{{ item[3] }}</div>
    </div>
    <div class="card__amount">{{ item[1] }}</div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
<style lang="scss">
  @import '@/assets/styles/blocks/card.scss';
</style>