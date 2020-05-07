import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Button from '../components/Button'

const mockStore = configureMockStore()

const store = mockStore({
  appState: {
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
})

const createProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('Render', () => {

  let props = createProps({ title: 'Submit', onPress: () => console.log('pressed'), disabled: true })

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(() => console.log('called'))
      }
    }
  })

  const wrapper = shallow(
    <Button
      title="Submit"
      onPress={() => console.log('pressed')}
      disabled
    />
  )
})