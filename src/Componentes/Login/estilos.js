import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    
    container: {
        backgroundColor: "#EF9696",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 200, 
        height: 200,
        borderRadius: 100,
    },
    input: {
        height: 50,
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#FFD8D8',
        padding: 10,
        width: 105,
        height: 40,
        margin: 6,
        borderRadius: 50,
    },
    textoButton: {
        fontSize:15,
        color: '#C21E6D', 
    },
    texto: {
        fontSize: 15,
    },
    textoLink:{
        color: '#C21E6D',
        
    },

})