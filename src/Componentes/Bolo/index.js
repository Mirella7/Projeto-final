import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Bolo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText2}>FATIA DE BOLO</Text>
      </View>

      <View style={styles.imagesContainer}>
        
          <Image
            source={require('../../../assets/bolo.png')}
            style={styles.image}/>
         
        
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Descrição: fatia de bolo de chololate média  </Text>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.tex}>     ADICIONAR R$3,50     </Text>
       
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
  headerText: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Lusitana'
 
  },
  headerText2: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
 
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
