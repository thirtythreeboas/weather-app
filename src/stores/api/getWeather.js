import axios from "axios"
import { getLocation } from "./getLocation"

const key = 'efcbab83b393419f86a91521231703'

export async function getWeather(userCity) {
  const location = await getLocation()
  const city = userCity || location.data.city
  const weatherLink = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=1&aqi=no&alerts=no`
  try {
    const weather = await axios.get(weatherLink)
    return weather
  } catch (error) {
    console.log('Error at getWeather')
  }
}