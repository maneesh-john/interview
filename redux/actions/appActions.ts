import { Dispatch } from 'redux'
import { counrtyApi, weatherApi } from '../../utils/http'
import { SET_COUNTRY_DETAILS, SET_WEATHER_DETAILS } from './types'

export const searchCountry = (country: string, navigate: Function) => (dispatch: Dispatch) => (
  counrtyApi.get(`/${country}`)
    .then(res => {
      if(Array.isArray(res.data) && res.data.length){
        const details = res.data[0]
        dispatch({ type: SET_COUNTRY_DETAILS, payload: details })
        navigate('Details')
      }
    })
    .catch(() => {
      alert('No countries found. Please try again')
    })
)

export const getCapitalWeather = (capital: string, showWeather: Function) => (dispatch: Dispatch) => (
  weatherApi.get(capital)
    .then(res => {
      dispatch({ type: SET_WEATHER_DETAILS, payload: res.data.current })
      showWeather(true)
    })
    .catch(() => alert(`Failed to fetch weather for ${capital}`))
)