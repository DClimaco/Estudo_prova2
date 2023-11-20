import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/simbolo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Link to={{screen: 'Tratamento'}}> Login </Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'ForgotPasswordPage'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
            </View>
        </View>
    )
}