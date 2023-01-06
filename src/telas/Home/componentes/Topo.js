import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from '../../../assets/logo.png'
import topo from "../../../mocks/topo";
import { carregaProdutos, carregaTopo } from "../../../servicos/carregaDados";

class Topo extends React.Component {
    atualizaTopo() {
        const retorno = carregaTopo();
        console.log(retorno);
    }
    
    componentDidMount() {
        this.atualizaTopo();
    }

    render () {
        return <View style={ estilos.topo }>
        <Image source={logo} style={ estilos.imagem }/>
        <Text style={estilos.boasvindas} > {topo.boasVindas}</Text>
        <Text style={estilos.legenda} > {topo.legenda}</Text>
    </View>
    }
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

export default Topo;