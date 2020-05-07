import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/styles'
import Card from '../components/Card'
import { WeatherState } from '../types/types'

type Props = {
  weather: WeatherState
  visible: boolean
}

const WeatherDetails = ({ weather }: Props) => {

  return (
    <Card>
      <Text style={styles.cardHeader}>Weather Details</Text>

      <View style={{...styles.textContainer, justifyContent: 'center', paddingVertical: 15, marginBottom: 10}}>
        {weather.weather_icons.map((icon: string) => (
          <Image source={{ uri: icon }} style={styles.image} />
        ))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Temperature: </Text>
        <Text style={styles.detailText}>{weather.temperature}{ ' C' }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Wind speed:</Text>
        <Text style={styles.detailText}>{weather.wind_speed}{ ' m/s' }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Population: </Text>
        <Text style={styles.detailText}>{weather.precip}{ ' mm' }</Text>
      </View>
    </Card>
  )
}

export default WeatherDetails