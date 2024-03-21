    import { View,  TextInput, TouchableOpacity, Button, Image } from "react-native"
    import {estile} from './style'  
import { estilo } from "../../screens/home/styles"
    export default function Card({name}){
        return(
            <View style={estile.container}>
                
                <View>
                    <TextInput style  = {estile.input_text}/>
                    <Image style={estile.perfil}source={require('../../assets/batman.jpg')}/>
                    <TouchableOpacity style={estile.botao}>
                        <Image style={estile.icon}source={require('../../assets/iconepesquisa.png')}/>
                    </TouchableOpacity>
                </View>
               
            </View>
        )
    }
