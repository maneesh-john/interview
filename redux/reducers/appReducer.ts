import { SET_COUNTRY_DETAILS, SET_WEATHER_DETAILS } from '../actions/types'
import { State, Action } from '../../types/types'

const initState: State = {
  country: {
    name: '',
    capital: '',
    population: '',
    latlng: [],
    flag: ''
  },
  weather: {
    temperature: '',
    weather_icons: [],
    wind_speed: '',
    precip: ''
  }
}

export default (state = initState, action: Action) => {

  switch (action.type) {

    case SET_COUNTRY_DETAILS:
      return {
        ...state,
        country: action.payload
      }

    case SET_WEATHER_DETAILS:
      return {
        ...state,
        weather: action.payload
      }

    default:
      return state
  }
}