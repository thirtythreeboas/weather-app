<script setup>
import Navbar from './components/Navbar/Navbar.vue'
import Main from './views/Main.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useWeatherStore } from '@/stores/weatherStore'
import { storeToRefs } from 'pinia'
import { onMounted, onBeforeMount, watch } from 'vue'
import img from './assets/clear-skies.jpg'

const store = useWeatherStore()
const { data } = storeToRefs(store.state)
const { getForecast } = store
const app = document.getElementById('app')
document.body.style.backgroundImage = `url(${img})`
// onBeforeMount(() => {
//   getForecast()
// })

// watch(store, (newVal) => {
//   console.log(store.state.data)
// })
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-weight: 300;
  }
</style>
