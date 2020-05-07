import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CountrySearch from '../screens/CountrySearch'
import CountryDetails from '../screens/CountryDetails'
import colors from '../styles/constants'

const { Navigator, Screen } = createStackNavigator()

const Navigation = () => {

  return(
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Search"
          component={CountrySearch}
          options={{
            title: 'Search Countries',
            headerStyle: {
              backgroundColor: colors.header
            },
            headerTintColor: colors.background,
            headerTitleAlign: 'center',
          }}
        />
        <Screen
          name="Details"
          component={CountryDetails}
          options={{
            title: 'Country Details',
            headerStyle: {
              backgroundColor: colors.header
            },
            headerTintColor: colors.background,
            headerTitleAlign: 'center',
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation