import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { theme } from "../../core/theme";
import { emailValidator } from "../../helpers/emailValidator";
import { passwordValidator } from "../../helpers/passwordValidator";
import { Image } from "react-native";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    axios
      .post("http://192.168.59.194:5001/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        if (response.data.message === "Đăng nhập thành công !") {
          navigation.reset({
            index: 0,
            routes: [{ name: "MainScreen" }],
          });
        } else {
          
          alert(response.data.message);
        }
      })
      .catch((error) => {
        
        if (error.response) {
          alert(error.response.data.message);
        } else {
          console.error("Error:", error);
        }
      });
  };

  return (
    <Background>
      <Logo />
      <Header>Chào mừng quay trở lại!</Header>
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
        label="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Đăng nhập
      </Button>

      <Text>Hoặc:</Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={this.signInWithGoogle}
          style={{ paddingRight: 20 }}
        >
          <Image source={require("../../assets/google.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signInWithFacebook}>
          <Image source={require("../../assets/facebook.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Đăng ký ngay!</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
