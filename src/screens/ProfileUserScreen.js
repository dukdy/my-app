import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button'

export default function UserProfileScreen({navigation})  {
  const onSignoutPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Họ và tên:</Text>
        <Text style={styles.value}>Nguyễn Đức Duy </Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>nduy12427@gmail.com</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Số điện thoại:</Text>
        <Text style={styles.value}>0987654321</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Địa chỉ:</Text>
        <Text style={styles.value}>Hà Nội</Text>
      </View>
      <Button mode="contained" onPress={onSignoutPressed}>
        Đăng xuất
      </Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});

