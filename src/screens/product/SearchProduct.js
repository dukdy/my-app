import { useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import search from '../../data/search';

export default function SearchProduct({navigation}) {
    const [products, setProducts] = useState(search)
    
    const [searchProduct, setSearchProduct] = useState('')
    const filteredProduct = products.filter(eachProduct => {
        return eachProduct.name.toLowerCase()
            .includes(searchProduct.toLowerCase())
    })
    return (
        <View style={styles.container}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <MaterialCommunityIcons
                    name='card-search-outline'
                    size={30} color={'black'}
                    style={{
                        position: 'absolute',
                        top: 15,
                        left: 1
                    }}
                />
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchProduct(text)
                    }}
                    value={searchProduct}
                    placeholder="Tìm kiếm sản phẩm..."
                    style={{
                        backgroundColor: 'gray',
                        height: 40,
                        flex: 1,
                        borderRadius: 5,
                        opacity: 0.8,
                        paddingStart: 30,
                        marginTop: 10

                    }} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={filteredProduct}
                    numColumns={2}
                    // renderItem={renderProductItem}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress = {() => navigation.navigate('Details', {item})}style={styles.productItem}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <TouchableOpacity onPress = {() => navigation.navigate('CartScreen', {item})} style={styles.addToCartButton}>
                                <Text style={styles.addToCartButtonText}>Add to cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: 175,
        borderWidth: 1,
    },
    image: {
        width: 175,
        height: 175,
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