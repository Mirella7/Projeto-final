import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SalgadosScreen() {
  const navigation = useNavigation();

  const handleCoxinhaPress = () => {
    navigation.navigate('Comprar coxinha');
  };

  const handleBauruPress = () => {
    navigation.navigate('Comprar baurú');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salgados</Text>
      </View>

      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleCoxinhaPress} >
        <Text style={styles.tex}>  Coxinha de frango </Text>
        <Text style={styles.tex}>          R$4,00   </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/coxinha.jpeg')}
            style={styles.image}
          />
        </View>

        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleBauruPress}>
        <Text style={styles.tex}>  Baurú misto </Text>
        <Text style={styles.tex}>       R$4,00   </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/bauru.jpg')}
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
