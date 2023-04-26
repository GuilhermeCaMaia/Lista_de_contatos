import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppContato from '../AppContato';
import { useNavigation } from '@react-navigation/native';


export default function Lista() {
    const [contatos, setContatos] = useState([]);

    const navigation = useNavigation();

    function verContato(contato) {
        console.log(contato);
        navigation.navigate('Contato', {
            contato: contato
        })
    }

    async function getContatos() {
        return AsyncStorage.getItem('contatos')
            .then(response => {
                if (response)
                    return Promise.resolve(JSON.parse(response));
                else
                    return Promise.resolve([]);
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getContatos().then(contatos => setContatos(contatos));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.conteiner}>
            <StatusBar />
            <ScrollView>

                {contatos.map(contato => {
                    return <View key={contato.id}><TouchableOpacity onPress={() => verContato(contato)}>
                        <AppContato key={contato.id} id={contato.id}
                            contato={contato.Nome + "  " + contato.Telefone} />
                    </TouchableOpacity></View>
                })}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#0E0D0D',
        alignItems: 'baseline'
    }

});