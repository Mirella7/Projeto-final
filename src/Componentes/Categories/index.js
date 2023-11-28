import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Categories() {
  const navigation = useNavigation();

  const handleQuentinhasPress = () => {
    navigation.navigate('Quentinhas');
  };
  const handleLasanhasPress = () => {
    navigation.navigate('Lasanhas');
  };
  const handleSalgadosPress = () => {
    navigation.navigate('Salgados');
  };
  const handleGulosemasPress = () => {
    navigation.navigate('Gulosemas');
  };
  const handleBebidasPress = () => {
    navigation.navigate('Bebidas');
  };
  const handleContatoPress = () => {
    navigation.navigate('Contato');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleQuentinhasPress}>
        <Text>Quentinhas</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleLasanhasPress}>
        <Text>Lasanhas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSalgadosPress}>
        <Text>Salgados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}onPress={handleGulosemasPress}>
        <Text>Gulosemas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}onPress={handleBebidasPress}>
        <Text>Bebidas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleContatoPress} >
            <Icon
                name={'home'}
                size={20}
                color="black"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#EF9696',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center'
},
});
