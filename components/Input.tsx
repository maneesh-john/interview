import React from 'react'
import { TextInput } from 'react-native'
import styles from '../styles/styles'


type Props = {
  value: string
  onChangeText: Function
  placeholder: string
}

const Input = ({ value, onChangeText, placeholder }: Props) => {

  return(
    <TextInput
      value={value}
      onChangeText={(value: string) => onChangeText(value)}
      placeholder={placeholder}
      style={styles.input}
    />
  )
}

export default Input