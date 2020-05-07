import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import styles from '../styles/styles'
import Card from '../components/Card'
import Button from '../components/Button'
import { getCapitalWeather } from '../redux/actions/appActions'
import WeatherDetails from '../components/WeatherDetails'
import { WeatherState, CountryState, State } from '../types/types'

type Props = {
  country: CountryState
  getCapitalWeather: Function
  weather: WeatherState
}

const CountryDetails = ({ country, getCapitalWeather, weather }: Props) => {

  const [showWeather, setShowWeather] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Name: </Text>
          <Text style={styles.detailText}>{country.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Capital:</Text>
          <Text style={styles.detailText}>{country.capital}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Population: </Text>
          <Text style={styles.detailText}>{country.population}</Text>
        </View>
        <View style={styles.textContainer}>
          <Image source={{ uri: country.flag }} style={{ height: 20, width: 20 }} />
        </View>
      </Card>
      <Button
        title="Capital weather"
        onPress={() => getCapitalWeather(country.capital, setShowWeather)}
        disabled={!country.capital}
      />

      <View style={styles.weatherWrapper}>
        {showWeather && <WeatherDetails visible={true} weather={weather} />}
      </View>
    </View >
  )
}

const mapStateToProps = (state: { appState: State }) => ({
  country: state.appState.country,
  weather: state.appState.weather
})

export default connect(mapStateToProps, { getCapitalWeather })(CountryDetails)