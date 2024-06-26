import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    color: '#0A8D61',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center'
  },
})
