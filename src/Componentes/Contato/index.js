import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Contato() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DÚVIDAS?</Text>
      </View>

      <View style={styles.imagesContainer}>
        
          <Image
          source={require('../../../assets/logook.jpg')}
          style={styles.image}/>
         
      </View>
      <View style={styles.header}>
        <Text style={styles.text2}>AGRADECEMOS PELA PREFERÊNCIA! </Text>
      </View>
      
        <Text style={styles.tex}>     Precisa de ajuda?     </Text>

        <TouchableOpacity style={styles.iconButton} >
            <Icon
                name={'phone'}
                size={30}
                color="black"/>
      </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} >
        <Text style={styles.text2}>  (82) 99610-9386  </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
        <Text style={styles.text2}>  (82) 9 8129-1382 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
        <Text style={styles.text2}>  (82) 98172-6987  </Text>
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
    paddingBottom:200,
  },
  header: {
    backgroundColor: '#CC4E4E',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  headerText: {
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
    width: 200, 
    height: 200,
    borderRadius: 100,
    marginBottom: 5,
    marginRight: 20,
  
  },
  tex:{
    color: 'black',
    fontSize:20
  },
  text2:{
    color: 'white',
    fontSize:20,
  },
  button: {
    backgroundColor: '#ED2E2E',
    alignItems : 'center' ,
    marginBottom: 20,
    borderRadius: 10,
},
iconButton: {
  alignItems: 'center'}
});
