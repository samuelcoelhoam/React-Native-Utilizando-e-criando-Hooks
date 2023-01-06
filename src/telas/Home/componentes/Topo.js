import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from '../../../assets/logo.png'

export default function Topo() {
    return <View style={ estilos.topo }>
        <Image source={logo} style={ estilos.imagem }/>
        <Text style={estilos.boasvindas} > Olá Samira </Text>
        <Text style={estilos.legenda} > Encontre os melhores produtores</Text>
    </View>
} 

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasvindas: {
        color: "black",
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        color: "black",
        fontSize: 16,
        lineHeight: 26,
    },
});