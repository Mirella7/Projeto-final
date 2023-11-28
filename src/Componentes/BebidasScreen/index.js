import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function BebidasScreen() {
  const navigation = useNavigation();

  const handleCocaPress = () => {
    navigation.navigate('Comprar coca');
  };

  const handleSucoPress = () => {
    navigation.navigate('Comprar suco');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bebidas</Text>
      </View>

      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>

        <TouchableOpacity style={styles.button} onPress={handleCocaPress}>
        <Text style={styles.tex}>    Coca cola R$ 5,00    </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/coca cola.jpg')}
            style={styles.image}
          />
          
        </View>

        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleSucoPress}> 
        <Text style={styles.tex}>    Suco de laranja R$ 5,00    </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/Suco de laranja.avif')}
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
