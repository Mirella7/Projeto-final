import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GulosemasScreen() {
  const navigation = useNavigation();

  const handleMoussePress = () => {
    navigation.navigate('Comprar mousse');
  };
  const handleBrigadeiroPress = () => {
    navigation.navigate('Comprar brigadeiro');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gulosemas</Text>
      </View>

      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleBrigadeiroPress}>
        <Text style={styles.tex}>  Brigadeiro tradicional  </Text>
        <Text style={styles.tex}>           R$1,00   </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/brigadeiro.jpg')}
            style={styles.image}
          />
         
        </View>

        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleMoussePress}>
        <Text style={styles.tex}>  Mousse de maracujá  </Text>
        <Text style={styles.tex}>           R$4,00   </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/mousse de maracujá.png')}
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
