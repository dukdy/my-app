import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

export default function CheckoutScreen({ navigation, route }) {
    const [paymentStatus, setPaymentStatus] = useState('pending');
    const { cartItems } = route.params
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.info}>
                <Text numberOfLines={2} style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>Giá: {item.price} VNĐ</Text>
                <Text style={styles.quantity}>Số lượng: {item.quantity}</Text>
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
    const handlePayment = () => {
        // Thực hiện thanh toán ở đây, ví dụ: gửi yêu cầu thanh toán đến máy chủ

        // Sau khi thanh toán thành công, cập nhật trạng thái thanh toán và chuyển về màn hình trước đó
        setPaymentStatus('success');
        // navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {paymentStatus === 'pending' ? (
                <View>
                    <Text style={styles.header}>Xác nhận thanh toán</Text>
                    <Text>Danh sách sản phẩm:</Text>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <Text style={styles.total}>Tổng tiền: {formatNumberWithDot(calculateTotal())} VNĐ</Text>
                    <TouchableOpacity style={styles.button} onPress={handlePayment}>
                        <Text style={styles.buttonText}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text style={styles.header}>Thanh toán thành công!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Quay lại</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    total: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1,
    },
    img: {
        width: 120,
        height: 120
    },
    info: {
        marginLeft: 30,
        width: 150
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 14,
    },
    quantity: {
        fontSize: 14,
    },
});
