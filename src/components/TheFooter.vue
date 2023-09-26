<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__item">
          <div class="footer__item-text footer__item--yellow">
            <a href="https://github.com/GoldenSpade" target="_blank">Dev</a>
          </div>
        </div>
        <div class="footer__item footer__item--center">
          <div class="footer__item-text">
            © Copyright <span>{{ currentYear }}</span>
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__item-text footer__item--yellow">
            <a href="https://russianwarship.rip" target="_blank">STATS / API</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import getData from '@/composables/getData'

export default {
  setup() {
    const currentYear = new Date().getFullYear()

    return {
      currentYear,
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/styles/blocks/footer.scss';
</style>
