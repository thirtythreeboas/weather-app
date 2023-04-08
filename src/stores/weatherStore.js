import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
// import axios from 'axios'
import { getWeather } from './api/getWeather'

export const useWeatherStore = defineStore('weather', () => {
  const data = ref(null)
  const userLocation = ref('')
  // const state = ref({
  //   data: {},
  //   isUserLocation: ''
  // })

  const getForecast = async (city) => {
    const weather = await getWeather(city)
    console.log(weather)
    data.value = weather
  }

  const onSubmitLocation = async () => {
    const city = userLocation.value
    getForecast(city)
  }

  return {
    data,
    userLocation,
    getForecast,
    onSubmitLocation
  }
})