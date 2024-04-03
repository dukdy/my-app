import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [newpassword, setNewPassword] = useState({ value: '', error: '' })
  const [confirmpassword, setConfirmPassword] = useState({ value: '', error: '' })


  

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    const newpasswordError = passwordValidator(newpassword.value)
    const confirmpasswordError = passwordValidator(confirmpassword.value)

    if (emailError || newpasswordError || confirmpasswordError) {
      setEmail({ ...email, error: emailError })
      setNewPassword({ ...newpassword, error: newpasswordError })
      setConfirmPassword({ ...confirmpassword, error: confirmpasswordError })
      return
    }

    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Đặt lại mật khẩu</Header>

      <TextInput
        label="E-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mật khẩu mới"
        returnKeyType="done"
        value={newpassword.value}
        onChangeText={(text) => setNewPassword({ value: text, error: '' })}
        error={!!newpassword.error}
        errorText={newpassword.error}
        secureTextEntry
      />
      <TextInput
        label="Nhập lại mật khẩu"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry

      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Đặt lại mật khẩu
      </Button>
    </Background>
  )
}

