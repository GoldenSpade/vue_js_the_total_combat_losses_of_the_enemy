<template>
  <div class="losses" :class="cssClass">
    <div class="losses__inner">
      <div class="losses__text">
        <div class="losses__title">Втрати особового складу</div>
        <div class="losses__subtitle">Personnel losses</div>
      </div>
      <img
        src="../img/losses/img-1.png"
        alt="Losses image"
        class="losses__img"
      />
      <div class="losses__amount">>{{ personalUnits }}</div>
    </div>
  </div>
</template>
<script>
import getData from '@/composables/getData'
export default {
  props: ['cssClass'],
  setup() {
    const {personalUnits, load} = getData()

    load()

    return {
      personalUnits,
    }
  },
}
</script>
<style lang="scss">
  @import '@/assets/styles/blocks/losses.scss';
</style>
