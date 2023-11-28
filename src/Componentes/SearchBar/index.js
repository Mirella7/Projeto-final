import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ou qualquer outra biblioteca de ícones que você preferir

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <TextInput 
        placeholder="BUSCA"
        style={styles.input}
      />
      <Icon name="search" size={40} color="black" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor:"white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center', // Para centralizar verticalmente o ícone com o texto
    
  },
  input: {
    height: 40,
    borderColor: 'EF9696',
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1, // Para ocupar o máximo de espaço disponível
  },
  icon: {
    marginLeft: 10, // Espaçamento entre o campo de pesquisa e o ícone
    backgroundColor: "#ED2E2E"
  },
});
