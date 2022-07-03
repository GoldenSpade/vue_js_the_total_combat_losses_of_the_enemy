<template>
  <main class="content">
    <div class="container">
      <div class="content__inner">
        <div class="content__col">
          <TheLosses cssClass="losses--mobile" />
          <Card v-for="item in arrHalf1" :key="item[0]" :item="item" />
        </div>
        <div class="content__col">
          <TheLosses />
          <Card v-for="item in arrHalf2" :key="item[0]" :item="item" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import getData from '@/composables/getData'
import TheLosses from '@/components/TheLosses.vue'
import Card from '@/components/Card.vue'

export default {
  components: {Card, TheLosses},

  setup() {
    const {arrHalf1, arrHalf2, load} = getData()

    load()

    return {
      arrHalf1,
      arrHalf2,
    }
  },
}
</script>
<style lang="scss">
  @import '@/assets/styles/blocks/content.scss';
</style>
