import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, StyleSheet } from 'react-native';
import Telaprinc from './src/Componentes/Telaprinc';
import QuentinhasScreen from './src/Componentes/QuentinhasScreen'; 
import LasanhasScreen from './src/Componentes/LasanhasScreen';
import SalgadosScreen from './src/Componentes/SalgadosScreen';
import GulosemasScreen from './src/Componentes/GulosemasScreen';
import BebidasScreen from './src/Componentes/BebidasScreen';
import Login  from "./src/Componentes/Login"
import Cadastrar  from "./src/Componentes/CadastrarLogin"
import Quent1 from './src/Componentes/Quent1';
import Cafe from './src/Componentes/Cafe';
import Risole from './src/Componentes/Risole';
import Bolo from './src/Componentes/Bolo';
import Quentfrango from './src/Componentes/Quentfrango';
import Quentboi from './src/Componentes/Quentboi';
import Lasanhafrango from './src/Componentes/Lasanhafrango';
import Lasanhaboi from './src/Componentes/Lasanhaboi';
import coxinha from './src/Componentes/Coxinha';
import Bauru from './src/Componentes/Bauru';
import Mousse from './src/Componentes/Mousse';
import Brigadeiro from './src/Componentes/Brigadeiro';
import Coca from './src/Componentes/Coca';
import Suco from './src/Componentes/Suco';
import Contato from './src/Componentes/Contato';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
   
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Cadastrar' component={Cadastrar} />
        <Stack.Screen name='Inicio' component={Telaprinc}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quentinhas" component={QuentinhasScreen} />
        <Stack.Screen name="Lasanhas" component={LasanhasScreen}/>
        <Stack.Screen name="Salgados" component={SalgadosScreen}/>
        <Stack.Screen name="Gulosemas" component={GulosemasScreen}/>
        <Stack.Screen name="Bebidas" component={BebidasScreen}/>
        <Stack.Screen name="Contato" component={Contato}/>
        <Stack.Screen name="Comprar quentinha" component={Quent1}/>
        <Stack.Screen name="Comprar café" component={Cafe}/>
        <Stack.Screen name="Comprar risole" component={Risole}/>
        <Stack.Screen name="Comprar bolo" component={Bolo}/>
        <Stack.Screen name="Comprar quentinha de frango" component={Quentfrango}/>
        <Stack.Screen name="Comprar quentinha de boi" component={Quentboi}/>
        <Stack.Screen name="Comprar lasanha de frango" component={Lasanhafrango}/>
        <Stack.Screen name="Comprar lasanha de boi" component={Lasanhaboi}/>
        <Stack.Screen name="Comprar coxinha" component={coxinha}/>
        <Stack.Screen name="Comprar baurú" component={Bauru}/>
        <Stack.Screen name="Comprar mousse" component={Mousse}/>
        <Stack.Screen name="Comprar brigadeiro" component={Brigadeiro}/>
        <Stack.Screen name="Comprar coca" component={Coca}/>
        <Stack.Screen name="Comprar suco" component={Suco}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

          

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Telaprinc/>
      <Login />
      <Cadastrar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF9696',
  },
});
