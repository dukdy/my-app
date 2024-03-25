import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Text } from 'react-native'



export default function StartScreen({ navigation }) {
  
  return (
    <Background>
      
      <Logo style = {{
        marginTop: 500
      }}/>

      <Header>Magic Billiards Shop</Header>
      <Text style = { {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
      }}>Chuyên phụ kiện bi-da</Text>
      <Paragraph>
      Cung cấp phụ kiện bi-da chất lượng, giá rẻ.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Bắt đầu nào
      </Button>
    </Background>
  )
}

