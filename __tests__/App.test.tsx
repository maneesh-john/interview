import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import configureMockStore from 'redux-mock-store'
import { mount, shallow } from 'enzyme'
import Button from '../components/Button'
import Input from '../components/Button'

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

describe('Render button', () => {

  let props = createProps({ title: 'Submit', onPress: () => console.log('pressed'), disabled: true })

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(() => console.log('called'))
      }
    }
  })

  const wrapper = mount(
    <Button
      title="Submit"
      onPress={() => console.log('pressed')}
      disabled
    />
  )

  it('should render a touchable opacity', () => {
    expect(wrapper.find(TouchableOpacity).length).toBe(1)
  })

  it('should render a text field', () => {
    expect(wrapper.find(Text).length).toBe(1)
  })

  it('Button should be disabled', () => {
    expect(wrapper.prop('disabled')).toBe(true)
  })
})