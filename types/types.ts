export interface CountryState {
  name: string,
  capital: string,
  population: string,
  latlng: string[],
  flag: string
}

export interface WeatherState {
  temperature: string,
  weather_icons: string[],
  wind_speed: string,
  precip: string
}

export interface State {
  country: CountryState,
  weather: WeatherState
}

export interface Action {
  type: string
  payload: CountryState | WeatherState
}