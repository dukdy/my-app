import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';



export default function CartScreen({ route }) {
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, image: require('../assets/rhino r23 05.png'),name: 'Product 1', price: '7.500.000', quantity: 1 }, // 7.5 triệu
  //   { id: 2, image: require('../assets/rhino r23 05.png'), name: 'Product 2', price: '6.500.000', quantity: 1 }, // 6.5 triệu
  //   { id: 3, image: require('../assets/rhino r23 05.png'),name: 'Product 3', price: '10.500.000', quantity: 1 },
  //   { id: 4, image: require('../assets/rhino r23 05.png'),name: 'Product 3', price: '10.500.000', quantity: 1 }, // 10.5 triệu
  // ]);
  const { item } = route.params;

  // State để lưu trữ danh sách sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = useState([]);

  // Thêm sản phẩm vào giỏ hàng hoặc tăng số lượng nếu sản phẩm đã tồn tại
  const addToCart = (productToAdd) => {
    const existingProduct = cartItems.find(item => item.id === productToAdd.id);
    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
      const updatedCartItems = cartItems.map(item => {
        if (item.id === existingProduct.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };

  // useEffect để cập nhật giỏ hàng khi có thay đổi trong cartItems
  useEffect(() => {
    if (item) {
      addToCart(item);
    }
  }, [item]);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source = {item.image} style = {styles.img}/>
      <View style = {styles.info}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>Giá: {item.price} VNĐ</Text>
      <Text style={styles.quantity}>Số lượng:</Text>
      <View style = {styles.quantitybox}>
          <Button title="-" onPress={() => decreaseQuantity(item.id)} style = {styles.btn} />
          <Text style= {{fontSize: 16, marginHorizontal: 20}}>{item.quantity}</Text>
          <Button title="+" onPress={() => increaseQuantity(item.id)} style = {styles.btn} />
      </View>
      </View>
    </View>
  );

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const priceInVND = parseFloat(item.price.replace(/\./g, ''));
      total += priceInVND * item.quantity;
    });
    return total;
  };
  const formatNumberWithDot = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };


  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Text style={styles.header}>Giỏ hàng</Text>
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.footer}>
          <Text style={styles.total}>Tổng tiền: {formatNumberWithDot(calculateTotal())} VNĐ</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1
  },
  img: {
    width: 120,
    height: 120
  },
  info: {
    marginLeft: 30
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
  quantitybox: {
    flexDirection: 'row',
    alignContent: 'space-between',
    width: 60,
  },
  btn: {
    height: 50,
    width: 50
  }
});


