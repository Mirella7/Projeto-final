import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LasanhasScreen() {
  const navigation = useNavigation();

  const handleLasanhafrangoPress = () => {
    navigation.navigate('Comprar lasanha de frango');
  };
  const handleLasanhaboiPress = () => {
    navigation.navigate('Comprar lasanha de boi');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lasanhas</Text>
      </View>

      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleLasanhafrangoPress}>
        <Text style={styles.tex}>Lasanha de frango</Text>
        <Text style={styles.tex}>        R$10,00</Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/lasanha frango.webp')}
            style={styles.image}
          />
         
        </View>

        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleLasanhaboiPress} >
        <Text style={styles.tex}>Lasanha de boi</Text>
        <Text style={styles.tex}>        R$10,00</Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/lasanha de boi.webp')}
            style={styles.image}
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 1,
    backgroundColor: "#EF9696"
  },
  header: {
    backgroundColor: 'red',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
 
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical:50,
    backgroundColor: "#EF9696"
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 600,
    height: 400,
    marginBottom: 5,
    marginRight: 20
  },
  tex:{
    color: 'white',
    fontSize:20
  },
  button: {
    backgroundColor: '#C5853A',
    borderRadius: 5,
    },
});
