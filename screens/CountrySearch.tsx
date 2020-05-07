import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from '../styles/styles'
import { searchCountry } from '../redux/actions/appActions'

type Props = {
  navigation: {
    navigate: Function
  }
  searchCountry: Function
}

const CountrySearch = ({ navigation, searchCountry }: Props) => {

  const [country, setCountry] = useState('')

  return (
    <View style={styles.container}>
      <Card>
        <Input
          placeholder="Enter country"
          onChangeText={(value: string) => setCountry(value)}
          value={country}
        />
        <Button
          title="Submit"
          onPress={() => searchCountry(country, navigation.navigate)}
          disabled={!country}
        />
      </Card>
    </View>
  )
}

export default connect(null, { searchCountry })(CountrySearch)