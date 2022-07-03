<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__text">
          <div class="header__title">Загальнi втрати противника</div>
          <div class="header__subtitle">
            The total combat loses of the enemy
          </div>
        </div>
        <img
          src="../img/header/header-logo.png"
          alt="Logo"
          class="header__img"
        />
        <div class="header__date">
          <div class="header__date-day">
            <span class="header__date-day-num">{{ day }}</span
            >День
          </div>
          <div class="header__date-title">Боротьби</div>
          <div class="header__date-subtitle">Day of confrontation</div>
          <div class="header__date-today">
            24.02.22 - <span>{{ date }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import getData from '@/composables/getData'
export default {
  setup() {
    const {currentDate, day, load} = getData()
    const date = currentDate()

    load()

    return {
      currentDate,
      date,
      day,
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/blocks/header.scss';
</style>
