import React from 'react';
import { View } from 'react-native';
import SearchBar from '../SearchBar';
import Highlights from '../Highlights';
import Header from '../Header';
import Categories from '../Categories';

export default function Telaprinc() {
  return (
    <View>
      <Header />
      <SearchBar />
      <Categories />
      <Highlights />
    </View>
  );
}
