import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetalhesQuentinhaMedia() {
  return (
    <View style={styles.container}>
      <View style={styles.faixa}>
        <Text style={styles.texto}>Comprar</Text>
      </View>
      <View style={styles.espacoImagem}>
        
        <Image
          source={require('../../../assets/quentinha boi.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF9696',
  },
  faixa: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  espacoImagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
  },
});
