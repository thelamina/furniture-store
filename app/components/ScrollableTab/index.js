import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginHorizontal: SIZES.padding }}
      onPress={() => onPress(item)}
    >
      <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>
        {item.name}
      </Text>
      {selectedTab.id == item.id && (
        <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
            }}
          ></View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ marginVertical: SIZES.padding }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ScrollableTab;
