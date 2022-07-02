<template>
  <TheHeader />
  <TheContent />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheContent from "@/components/TheContent.vue";

export default {
  name: "App",
  components: { TheHeader, TheContent },
  setup() {
    document.title = "Загальні втрати противника";
  },
};
</script>
