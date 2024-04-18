import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { phoneValidator } from "../helpers/phoneValidator";
import axios from "axios";
import Dialog from "react-native-dialog";

// var Email = {
//   value: ''
// ,
// error: ''
// }

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const phoneError = phoneValidator(phone.value);
    if (emailError || passwordError || nameError || phoneError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhone({ ...phone, error: phoneError });
      return;
    }
    // axios
    //   .post("http://192.168.59.194:5001/register", {
    //     name: name.value,
    //     email: email.value,
    //     password: password.value,
    //     phone: phone.value,
    //   })
    //   .then((response) => {
    //     if (response.data.message === "Đăng ký thành công !") {
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
    //     } else {
    //       alert(response.data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       setDialogMessage("Tài khoản đã tồn tại , vui lòng đăng nhập !!");
    //       setDialogVisible(true);
    //     } else {
    //       console.error("Error:", error);
    //     }
    //   });
  };

  return (
    <Background>
      <Logo />
      <Header>Tạo tài khoản</Header>
      <TextInput
        label="Tên"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Số điện thoại"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: "" })}
        error={!!phone.error}
        errorText={phone.error}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Đăng ký
      </Button>
      <View style={styles.row}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Thông báo</Dialog.Title>
        <Dialog.Description>{dialogMessage}</Dialog.Description>
        <Dialog.Button label="Đóng" onPress={() => setDialogVisible(false)} />
      </Dialog.Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
