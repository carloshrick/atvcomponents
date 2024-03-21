import { StyleSheet } from "react-native";

export const estile = StyleSheet.create({
    container : {
        marginTop: 30,
        flexDirection: 'row',
        height: 150,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#7E7F83',
        borderRadius: 10,
    },

    input_text: {
        width:230,
        height: 30,
        color: '#090B0A',
        fontSize: 15,
        borderRadius: 100,
        backgroundColor: '#FFF',
        marginLeft:80,
        padding:5
      },

    perfil: {
        height:50,
        width:50,
        borderRadius:50,
        marginTop:-40,
        marginLeft:20
    },
    
    icon: {
        height:20,
        width:20,
        marginLeft:600,
        marginTop:-45
    }
    
   
})