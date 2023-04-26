import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native';
import AppContato from '../AppContato';


export default function Pessoa(contato) {
    const [contatoPessoa, setContatoPessoa] = useState([]);

    // console.log(contato.route.params.contato)

    function nomeChanged(Nome) {
        setNome(Nome);
    }
    function telefoneChanged(Telefone) {
        setTelefone(Telefone);
    }
    function emailChanged(Email) {
        setEmail(Email);
    }
    function ruaChanged(Rua) {
        setRua(Rua);
    }
    function numeroChanged(Numero) {
        setNumero(Numero);
    }
    function bairroChanged(Bairro) {
        setBairro(Bairro);
    }
    function cidadeChanged(Cidade) {
        setCidade(Cidade);
    }
    function data_aniversarioChanged(Data_aniversario) {
        setData_aniversario(Data_aniversario);
    }

    //Função de edição
    // async function botaoPressed() {
    //     const contato = {
    //         id: new Date().getTime(), Nome, Telefone, Email,
    //         Rua, Numero, Bairro, Cidade, Data_aniversario
    //     };
    //     let contatos = [];
    //     const response = await AsyncStorage.getItem('contatos');

    //     if (response) contatos = JSON.parse(response);

    //     contatos.push(contato);

    //     console.log(contatos);

    //     await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

    // }

    useEffect(() => { setContatoPessoa(contato.route.params.contato) }), [contato.route.params.contato]
    console.log(contatoPessoa)
    return (
        <View style={styles.conteiner}>
            <ScrollView>
                <View>
                    <Text style={styles.titulo}>
                        Nome e sobrenome
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={contatoPessoa.Nome}
                    />
                    <Text style={styles.titulo}>
                        Telefone
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={contatoPessoa.Telefone}
                    />
                    <Text style={styles.titulo}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="fulano@gmail.com"
                        value={contatoPessoa.Email}
                    />
                    <Text style={styles.titulo}>
                        Endereço:
                    </Text>
                    <Text style={styles.titulo}>
                        Rua
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Rua tal"
                        value={contatoPessoa.Rua}
                    />
                    <Text style={styles.titulo}>
                        Numero
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={contatoPessoa.Numero}
                    />
                    <Text style={styles.titulo}>
                        Bairro
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={contatoPessoa.Bairro}
                    />
                    <Text style={styles.titulo}>
                        Cidade
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={contatoPessoa.Cidade}
                    />
                    <Text style={styles.titulo}>
                        Data Nascimento
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={contatoPessoa.Data_aniversario}
                    />
                    {/* <TouchableOpacity
                        style={styles.button}
                        onPress={botaoPressed}
                    >
                        <Text style={styles.buttonText}
                        >Editar</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#0E0D0D',
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
    },
    inputConteiner: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#2F6642'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#e1ded9',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#CCC'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#2F6642',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: "#051a10"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: 'bold'
    }
});