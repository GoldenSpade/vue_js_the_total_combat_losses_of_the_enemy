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
      <div class="losses__amount">>35000</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cssClass'],
  setup(props) {
    console.log('props', props)
  }
};
</script>
<style lang="scss">
  @import "@/assets/styles/blocks/losses.scss";
</style>