import {Image, TextInput, Text, View} from 'react-native'
import { useEffect, useState } from 'react';
import styles from './styles'

export default function DashboardPage(){

    let [medico, setMedico] = useState([]);
  
    const baseURL = 'http://localhost:1337/api/medicos';
  
    useEffect(function(){
      fetch(baseURL)
        .then(data => data.json())
        .then(objeto => {
          console.log(objeto);
          setMedico(objeto.data);
        })
    }, []);

    return (
        <View style={styles.container}>
            {medico.length > 0 ? medico.map(medico => <Text>
            {medico.attributes.nome} {medico.attributes.email}</Text>) :
            <text>Carregando ...</text>}
        </View>
    )
}
