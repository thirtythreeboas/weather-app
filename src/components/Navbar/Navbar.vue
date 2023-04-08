<template>
  <nav class="nav">
    <SearchInput v-model="userLocation" />
  </nav>
</template>

<script setup>
  import { useWeatherStore } from '@/stores/weatherStore'
  import { storeToRefs } from 'pinia'
  import SearchInput from './SearchInput.vue'

  const store = useWeatherStore()
  const { userLocation } = storeToRefs(store)
</script>

<style lang="scss">
  @import "@/assets/Navbar.scss";
</style>