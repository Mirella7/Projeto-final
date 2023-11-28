import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Brigadeiro() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText2}>BRIGADEIRO</Text>
      </View>

      <View style={styles.imagesContainer}>
        
          <Image
          source={require('../../../assets/brigadeiro.jpg')}
          style={styles.image}/>
         
        
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Descrição: bigadeiro de chocolate</Text>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.tex}>     ADICIONAR R$1,00     </Text>
       
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 1,
    backgroundColor: "#EF9696",
    paddingVertical:50,
  },
  header: {
    backgroundColor: '#FFF0F5',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  headerText2: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
 
  },
  headerText: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Lusitana'

  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
    backgroundColor: "#EF9696"
  },

  image: {
    width: 600,
    height: 400,
    marginBottom: 5,
    marginRight: 20
  },
  tex:{
    color: 'white',
    fontSize:20,
    fontFamily:'Lusitana'
  },
  button: {
    backgroundColor: '#C5853A',
    alignItems : 'center'  
},
});
