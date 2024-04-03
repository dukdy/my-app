import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartScreen () {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Sản phẩm 1', price: 10, quantity: 2 },
    { id: '2', name: 'Sản phẩm 2', price: 15, quantity: 1 },
    { id: '3', name: 'Sản phẩm 3', price: 100, quantity: 3 },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>Giá: ${item.price}</Text>
      <Text style={styles.quantity}>Số lượng: {item.quantity}</Text>
    </View>
  );

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Tổng tiền: ${getTotalPrice()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#ccc',
    padding: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 20,
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
  },
});


