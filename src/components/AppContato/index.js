import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AppContato(props) {
    return (
        <View style={styles.contato}>
            <Text style={styles.text}>{props.contato}</Text>
            {/* <View>
                <TouchableOpacity
                // onPress={Deletar}
                >
                    <Text>Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Editar</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    contato: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#2F6642',
        borderRadius: 10,
        paddingHorizontal: '25%',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: "#051a10"
    },
    text: {
        color: "#FFF",
        fontWeight: 'bold'
    }
})