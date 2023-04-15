import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AppContato(props) {
    // function Deletar() {
    //     // envie a solicitação de exclusão para o servidor
    //     fetch('/users/' + userId, {
    //         method: 'DELETE'
    //     })
    //         .then(response => {
    //             // verifique se a exclusão foi bem-sucedida
    //             if (response.ok) {
    //                 // atualize a interface do usuário para refletir a exclusão
    //                 alert('Usuário excluído com sucesso!');
    //             } else {
    //                 // caso contrário, exiba uma mensagem de erro
    //                 alert('Houve um problema ao excluir o usuário.');
    //             }
    //         })
    //         .catch(error => {
    //             // em caso de erro, exiba uma mensagem de erro
    //             alert(error.message);
    //         });
    // }


    return (
        <View>
            <Text>{props.contato}</Text>
            <View>
                <TouchableOpacity
                // onPress={Deletar}
                >
                    <Text>Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})