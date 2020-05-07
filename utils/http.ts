import axios from 'axios'

const API_KEY = 'a96039ec60a232e356f9ad4bf1cee76e'

export const counrtyApi = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/name'
})

export const  weatherApi = axios.create({
  baseURL: `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`
})