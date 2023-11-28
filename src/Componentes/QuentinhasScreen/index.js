import React from 'react';
import { View, Text, StyleSheet, Image,  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function QuentinhasScreen() {
  const navigation = useNavigation();

  const handleQuentfrangoPress = () => {
    navigation.navigate('Comprar quentinha de frango');
  };
  const handleQuentboiPress = () => {
    navigation.navigate('Comprar quentinha de boi');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quentinhas</Text>
      </View>

      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleQuentfrangoPress}>
        <Text style={styles.tex}>Quentinha de frango</Text>
        <Text style={styles.tex}>          R$15,00</Text></TouchableOpacity>
          <Image
            source={require('../../../assets/quantinha frango.jpg')}
            style={styles.image}
          />
          
        </View>

        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleQuentboiPress} >
        <Text style={styles.tex}>Quentinha de boi</Text>
        <Text style={styles.tex}>        R$12,00 </Text>
        </TouchableOpacity>
          <Image
            source={require('../../../assets/quentinha boi.jpg')}
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
  button: {
    backgroundColor: '#C5853A',
    borderRadius: 5,
    
  },
  tex:{
    color: 'white',
    fontSize:20,
  }
});
