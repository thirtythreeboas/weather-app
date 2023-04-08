import axios from "axios"

const userCity = 'http://ip-api.com/json/?fields=61439'

export const getLocation = async () => {
  try {
    const response = await axios.get(userCity)
    return response
  } catch (error) {
    console.log('Error at getLocation')
  }
}