<template>
  <TheHeader v-if="isShow && !error" />
  <TheContent v-if="isShow && !error" />
  <TheFooter v-if="isShow && !error" />
  <div v-else>
    <TheLoader />
  </div>
  <div class="app-message" v-if="error">
    <div class="app-message__inner">
      <div class="app-message__text">Вибачте за незрусності</div>
      <div class="app-message__text">Дані ще поновлюються</div>
      <div class="app-message__text">Спробуйте будь ласка пізніше</div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheContent from '@/components/TheContent.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheLoader from '@/components/TheLoader.vue'

import {ref, onMounted, onBeforeMount} from 'vue'

import getData from '@/composables/getData'

export default {
  name: 'App',
  components: {TheHeader, TheContent, TheFooter, TheLoader},
  setup () {
    onBeforeMount(() => {
      document.title = 'Загальні втрати противника'
    })

    onMounted(() => {
      setTimeout(() => {
        isShow.value = true
      }, 500)
    })

    const {error, load} = getData()
    const isShow = ref(null)

    load()

    return {
      isShow,
      error,
      load
    }
  }
}
</script>

<style lang="scss" scoped>
.app-message {
  &__inner {
    min-width: 100%;
    text-align: center;
  }
  &__text {
    color: #fff;
    font-size: 20px;
  }
}
</style>
