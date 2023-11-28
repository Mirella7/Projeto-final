import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Highlights() {
  const navigation = useNavigation();

  const handleQuent1Press = () => {
    navigation.navigate('Comprar quentinha');
  };
  const handleCafePress = () => {
    navigation.navigate('Comprar café');
  };
  const handleRisolePress = () => {
    navigation.navigate('Comprar risole');
  };
  const handleBoloPress = () => {
    navigation.navigate('Comprar bolo');
  };
  return (
    
    <View style={styles.container}>
    <View style={styles.faixa}><Text style={styles.texto}>DESTAQUES DA SEMANA</Text>
</View>
    <View style={styles.vazio}>   </View>
      <View style={styles.imagesContainer}>
      <View style={styles.imageWrapper}>

      <TouchableOpacity style={styles.button} onPress={handleQuent1Press} >
        <Text style={styles.tex}>Quentinha média</Text>
        <Text style={styles.tex}>          R$12</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/quentinha boi.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        </View>
        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleCafePress}>
        <Text style={styles.tex}> </Text>
        <Text style={styles.tex}>     Café $2     </Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/cafe.jpg')}
          style={styles.image}
          resizeMode="cover"
        /></View>
         <View style={styles.imageWrapper}>
         <TouchableOpacity style={styles.button}  onPress={handleRisolePress}>
        <Text style={styles.tex}> </Text>
        <Text style={styles.tex}>     Risole $2     </Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/risole.png')}
          style={styles.image}
          resizeMode="cover"
        /></View>
        <View style={styles.imageWrapper}>
        <TouchableOpacity style={styles.button}  onPress={handleBoloPress}>
        <Text style={styles.tex}>Fatia de bolo</Text>
        <Text style={styles.tex}>    R$3,50</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/bolo.png')}
          style={styles.image}
          resizeMode="cover"
        /></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"#EF9696",
  },
  vazio:{
    height: "5%"
  },
  faixa: {
    backgroundColor: "red",
  },
  tex:{
    color: 'white',
    fontSize:20,
    
  },
  texto: {
    color: 'white',
    fontSize: 30,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor:"#EF9696"
  },
  imageWrapper: {
    alignItems: 'center',
    
  },
  image: {
    width: 500,
    height: 350,
    marginBottom: 60,
    marginTop:10,
    marginLeft:50,
    marginRight:50,
   
  },
  button: {
    backgroundColor: '#C5853A',
    borderRadius: 5,
  },
});
