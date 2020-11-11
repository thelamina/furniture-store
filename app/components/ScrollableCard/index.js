import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const ScrollableCard = ({ navigation, productList }) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={{ marginLeft: SIZES.padding }}
      onPress={() => navigation.navigate('ItemDetail', { itemInfo: item })}
    >
      <View style={{ width: SIZES.width / 2 }}>
        <Image
          source={item.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 2,
          }}
        />
        <View
          style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}
        >
          <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>
            Furniture
          </Text>
          <Text
            style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}
          >
            {item.productName}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: COLORS.transparentLightGray,
          }}
        >
          <Text style={{ ...FONTS.h2 }}>$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ScrollableCard;
