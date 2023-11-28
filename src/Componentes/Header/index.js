import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../assets/imag1.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200, // Ajuste conforme necessário
    backgroundColor: '"#EF9696"', // Cor de fundo temporária
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
