import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from "react-native";


export default function Cadastro() {
    const [Nome, setNome] = useState(null)
    const [Telefone, setTelefone] = useState(null)
    const [Email, setEmail] = useState(null)
    const [Rua, setRua] = useState(null)
    const [Numero, setNumero] = useState(null)
    const [Bairro, setBairro] = useState(null)
    const [Cidade, setCidade] = useState(null)
    const [Data_aniversario, setData_aniversario] = useState(null)

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

    async function botaoPressed() {
        const contato = {
            id: new Date().getTime(), Nome, Telefone, Email,
            Rua, Numero, Bairro, Cidade, Data_aniversario
        };
        let contatos = [];
        const response = await AsyncStorage.getItem('contatos');

        if (response) contatos = JSON.parse(response);

        contatos.push(contato);

        console.log(contatos);

        await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

    }

    //Nome
    //Telefone
    //Email
    //Rua
    //Numero
    //Bairro
    //Cidade
    //Data aniversario

    return (
        <View>
            <View>
                <Text>
                    Nome
                </Text>
                <TextInput
                    placeholder="Nome e sobrenome"
                    onChangeText={nomeChanged}
                />
                <Text>
                    Telefone
                </Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={telefoneChanged}
                />
                <Text>
                    Email
                </Text>
                <TextInput
                    placeholder="fulano@gmail.com"
                    onChangeText={emailChanged}
                />
                <Text>
                    Endereço
                </Text>
                <Text>
                    Rua
                </Text>
                <TextInput
                    placeholder="Rua tal"
                    onChangeText={ruaChanged}
                />
                <Text>
                    Numero
                </Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={numeroChanged}
                />
                <Text>
                    Bairro
                </Text>
                <TextInput
                    onChangeText={bairroChanged}
                />
                <Text>
                    Cidade
                </Text>
                <TextInput
                    onChangeText={cidadeChanged}
                />
                <Text>
                    Data Nascimento
                </Text>
                <TextInput
                    placeholder="01/01/2000"
                    onChangeText={data_aniversarioChanged}
                />
                <TouchableOpacity

                    onPress={botaoPressed}
                >
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}