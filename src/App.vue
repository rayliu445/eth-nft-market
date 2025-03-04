<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/layout/AppHeader.vue";
import AppLoading from "@/components/loading/AppLoading.vue";
import AppFooter from './layout/AppFooter.vue'

const store = useStore();
const loading = computed(() => store.state.loading);
</script>

<template>
  <div>
    <AppHeader />
    <main class="w-full min-h-screen pt-16">
      <router-view />
    </main>
    <AppLoading v-if="loading" />
    <AppFooter />
  </div>
</template>

<style scoped>
/* Styles will be added later */
#app-body {
  /* placeholder */
}
</style>

