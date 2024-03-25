import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import { Image } from 'react-native'


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Chào mừng bạn đến với Magic Billiards Shop!</Header>
      <Image source={require('../assets/hello.png')}/>
     
    </Background>
  )
}
