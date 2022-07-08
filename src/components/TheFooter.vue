<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__item">
          <div class="footer__item-text footer__item--yellow">
            <a href="https://github.com/BilliZane" target="_blank">Dev</a>
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
import {computed} from 'vue'
import getData from '@/composables/getData'

export default {
  setup() {
    const {currentDate} = getData()
    const currentYear = computed(
      () => `20${currentDate().split('.').reverse()[0]}`
    )

    return {
      currentDate,
      currentYear,
    }
  },
}
</script>
<style lang="scss">
  @import '@/assets/styles/blocks/footer.scss';
</style>
