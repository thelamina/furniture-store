import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import ScrollableCard from '../../components/ScrollableCard';
import ScrollableTab from '../../components/ScrollableTab';
import { COLORS, FONTS, icons, SIZES, images } from '../../constants';
import styles from './style';

const Home = ({ navigation }) => {
  const [tabList, setTabList] = useState([
    {
      id: 0,
      name: 'Chair',
      title: 'chairs',
      productList: [
        {
          productId: 1,
          productName: 'Chair Green Colour',
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 2,
          productName: 'Chair Peach Colour',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 3,
          productName: 'Chair White Colour',
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
    {
      id: 1,
      name: 'Cupboard',
      title: 'cupboards',
      productList: [
        {
          productId: 4,
          productName: 'Product 4',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 5,
          productName: 'Product 5',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 6,
          productName: 'Product 6',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 2,
      name: 'Table',
      title: 'tables',
      productList: [
        {
          productId: 7,
          productName: 'Product 7',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 8,
          productName: 'Product 8',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 9,
          productName: 'Product 9',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'Product 10',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 11,
          productName: 'Product 11',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 12,
          productName: 'Product 12',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = useState({
    id: 0,
    name: 'Chair',
    title: 'chairs',
    productList: [
      {
        productId: 1,
        productName: 'Chair Green Colour',
        price: 10.0,
        image: images.greenChair,
      },
      {
        productId: 2,
        productName: 'Chair Peach Colour',
        price: 10.0,
        image: images.redChair,
      },
      {
        productId: 3,
        productName: 'Chair White Colour',
        price: 10.0,
        image: images.whiteChair,
      },
    ],
  });

  function renderHeader() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log('Menu clicked')}
          >
            <Image
              source={icons.menu}
              resizeMode='contain'
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end' }}
            onPress={() => console.log('Cart clicked')}
          >
            <Image
              source={icons.cart}
              resizeMode='contain'
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
      >
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          Collections of
        </Text>
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          {title}
        </Text>
      </View>
    );
  }

  function renderPromotionCard() {
    return (
      <View
        style={[
          styles.shadow,
          {
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            padding: SIZES.radius,
            height: 110,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          },
        ]}
      >
        <View
          style={{
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightGray2,
            borderRadius: 20,
          }}
        >
          <Image
            source={images.sofa}
            resizeMode='contain'
            style={{ width: '60%', height: '60%' }}
          />
        </View>

        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}
        >
          <Text style={{ ...FONTS.h2 }}>Special Offer</Text>
          <Text style={{ ...FONTS.body3 }}>Adding to your cart</Text>
        </View>

        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: '70%',
              width: 40,
              borderRadius: 10,
            }}
            onPress={() => console.log('Promo clicked')}
          >
            <Image
              source={icons.chevron}
              resizeMode='contain'
              style={{ width: '50%', height: '50%' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      {renderHeader()}

      {renderTitle(selectedTab.title)}

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />

      <View style={{ flex: 1 }}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      <View
        style={{ height: '19%', justifyContent: 'flex-end', paddingBottom: 10 }}
      >
        {renderPromotionCard()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
