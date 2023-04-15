import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppContato from '../AppContato';


export default function Lista() {
    const [contatos, setContatos] = useState([]);

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
        getContatos().then(contatos => setContatos(contatos));
    }, []);

    return (
        <View>
            <StatusBar />
            <Text>Lista de Contatos</Text>
            <ScrollView>{contatos.map(contato => {
                return <AppContato key={contato.id} id={contato.id}
                    contato={contato.Nome + "  " + contato.Telefone} />
            })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

})