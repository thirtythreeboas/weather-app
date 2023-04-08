<template>
  <main v-if="data">
    <header>
      <h4>{{data.data.location.name}}</h4>
      <h1>{{ `${data.data.current.feelslike_c} ` }}&#176;</h1>
      <h5>{{ data.data.current.condition.text }}</h5>
      <img :src="data.data.current.condition.icon" alt="Image to show">
    </header>
  </main>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { useWeatherStore } from '../stores/weatherStore'
  import { watch } from 'vue';
  const store = useWeatherStore()
  const { data } = storeToRefs(store)

  // watch(data, () => {
  //   console.log(data)
  // })
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

  main {
    display: flex;
    justify-content: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    backdrop-filter: blur(8px)
  }
</style>