import React from 'react'
import {  FlatList, Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Products() {
    const navigation = useNavigation()
    const data = [
        {
            id: '1', category: 'Rhino', products: [
                { id: '11', name: 'Rhino R23 05', price: '2.500.000đ', image: require('../assets/rhino r23 05.png'),
                describe: [
                    'Thương hiệu: RHINO',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ] },
                { id: '12', name: 'Rhino R23 06', price: '2.500.000đ', image: require('../assets/rhino r23 06.png'),
                describe: [
                    'Thương hiệu: RHINO',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ] },
                { id: '13', name: 'Rhino R23 20', price: '2.500.000đ', image: require('../assets/rhino r23 20.png'),
                describe: [
                    'Thương hiệu: RHINO',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ] },
                { id: '14', name: 'Rhino R23 22', price: '2.500.000đ', image: require('../assets/rhino r23 22.png'),
                describe: [
                    'Thương hiệu: RHINO',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ] },
                { id: '15', name: 'Rhino R23 23', price: '2.500.000đ', image: require('../assets/rhino r23 23.png'),
                describe: [
                    'Thương hiệu: RHINO',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ] }
            ]
        },
        {
            id: '2', category: 'Mit', products: [
                { id: '21', name: 'Mit MW2 01', price: '4.600.000đ', image: require('../assets/mit mw2 - 01.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '22', name: 'Mit DY22 02', price: '5.200.000đ', image: require('../assets/mit dy22 02.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '23', name: 'Mit MC7 G14', price: '17.600.000', image: require('../assets/mit mc7 g14.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '24', name: 'Mit ME0 04', price: '4.500.000đ', image: require('../assets/mit me0 04.png') },
                { id: '25', name: 'Mit MP4 001', price: '19.200.200đ', image: require('../assets/mit mp4 001.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '26', name: 'Mit Mp4 002', price: '19.200.200đ', image: require('../assets/mit mp4 002.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '27', name: 'Mit MP4 003', price: '19.200.200đ', image: require('../assets/mit mp4 003.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '28', name: 'Mit MZ22 04A', price: '14.400.000đ', image: require('../assets/mit mz22 04a.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], },
                { id: '29', name: 'Mit MDF22 01', price: '5.500.500đ', image: require('../assets/mit mdf22 01.png'),
                describe: [
                    'Thương hiệu: MIT',
                    'Nơi sản xuất: Trung Quốc',
                    'Dòng sản phẩm: Bida lỗ/Pool',
                ], }
            ]
        },
        {
            id: '3', category: 'Predator', products: [
                { id: '31', name: 'Chuôi  Predator SportII ICE AMP', price: '8.000.000đ', image: require('../assets/pre ICE AMP.png') },
                { id: '32', name: 'Chuôi Predator SportII Volt Wrap', price: '9.000.000đ', image: require('../assets/pre volt wrap.png') },
                { id: '33', name: 'Ngọn Predator REVO 12.9 3/8-10 Black ', price: '15.540.000đ', image: require('../assets/ngon pre 12.9.png') },
                { id: '34', name: 'Ngọn Predator REVO 11.8 Uni-loc White ', price: '15.540.000đ', image: require('../assets/ngon pre 11.8.png') }
            ]
        },
        {
            id: '4', category: 'Phụ kiện', products: [
                { id: '41', name: 'Khung tam giác Predator', price: '2.050.000đ', image: require('../assets/khung tg pre.png') },
                { id: '42', name: 'Găng Rhino cao cấp', price: '350.000đ', image: require('../assets/gang rhino.png') },
                { id: '43', name: 'Bao cơ Mit 2x2 đỏ', price: '2.400.000đ', image: require('../assets/bao co mit do.png') },
                { id: '44', name: 'Bao cơ Mit 2x2 navy', price: '2.400.000đ', image: require('../assets/bao co mit navy.png') },
                { id: '45', name: 'Bao cơ Mit 4x8 ghi', price: '3.800.000đ', image: require('../assets/bao 4x8 ghi.png') },
                { id: '46', name: 'Bao cơ Mit 4x8 vàng', price: '2.950.000đ', image: require('../assets/bao 4x8 vang.png') },
                { id: '47', name: 'Bao cơ Holly Spectrum 2x4', price: '4.800.000đ', image: require('../assets/bao spectrum.png') },
                { id: '48', name: 'Hộp lơ Rhino cao cấp', price: '600.000đ', image: require('../assets/lo rhino.webp') },
                { id: '49', name: 'Phíp Foxy đánh Mit', price: '250.000đ', image: require('../assets/phip foxy danh mit.png') },
                { id: '50', name: 'Đế cao su Predator', price: '400.000đ', image: require('../assets/de cao su pre.png') },
            ]
        },
        {
            id: '5', category: 'Bàn bi-a', products: [
                { id: '51', name: 'Bàn MR.Sung', price: '80.000.000đ', image: require('../assets/mr sung.png') },
                { id: '52', name: 'Bàn Predator', price: '299.000.000đ', image: require('../assets/ban pre.png') },
                { id: '53', name: 'Bàn Rasson', price: '209.000.000đ', image: require('../assets/ban rasson.png') }
            ]
        }
    ];
    const renderProductItem = ({ item }) => (
        <TouchableOpacity onPress = {() => navigation.navigate('Details', {item})}style={styles.productItem} >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity  style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Add to cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
        
    );
    const renderCategoryItem = ({ item }) => (
        <View style={styles.categoryItem}>
            <Text style={styles.category}>{item.category}</Text>
            <FlatList
                data={item.products}
                renderItem={renderProductItem}
                keyExtractor={(product) => product.id}
                horizontal
            />
        </View>
    );
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <FlatList
              data={data}
              renderItem={renderCategoryItem}
              keyExtractor={(category) => category.id}
            />
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#FFFDD0'
    },
    categoryItem: {
        marginBottom: 20,
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    productItem: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 5,
        borderRadius: 8,
        alignItems: 'center',
        width: 150,
        borderWidth: 1,
    },
    image: {
        width: 150,
        height: 150,
        padding: 10,
        margin: 5,
        marginTop: -11,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: 'gray',
    },
    addToCartButton: {
        backgroundColor: 'blue',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})

