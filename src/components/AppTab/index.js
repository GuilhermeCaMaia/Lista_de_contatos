import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Cadastro from "../Cadastro";
import Lista from '../Lista';
import Pessoa from '../Pessoa';


const { Navigator, Screen } = createBottomTabNavigator();

export default function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    //Cor da fonte quando a aba ta selecionada
                    tabBarActiveTintColor: "#0E0D0D",
                    //cor da fonte quando não ta selecionada
                    tabBarInactiveTintColor: '#D9D9D9',
                    //Cor de fundo quando a aba ta selecionada
                    tabBarActiveBackgroundColor: "#2F6642",
                    //Cor de fundo quando não ta selecionada
                    tabBarInactiveBackgroundColor: "#398D74",
                    //css
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    //onde cloca o incone
                    tabBarIconStyle: { display: "none" }
                }}
            >
                <Screen name="Cadastro" component={Cadastro} />
                <Screen name="Lista" component={Lista} />
                <Screen name="Contato" component={Pessoa} />
            </Navigator>
        </NavigationContainer>
    );
}