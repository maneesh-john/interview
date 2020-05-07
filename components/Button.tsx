import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles/styles'

type Props = {
  title: string
  onPress: Function
  disabled: boolean
}

const Button = ({ title, disabled, onPress }: Props) => {

  return(
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={ styles.button }
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button