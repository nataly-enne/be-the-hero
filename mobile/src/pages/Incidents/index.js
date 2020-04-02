import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import style from './style';

export default function Incidents(){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data={[1, 2, 3]}
                style={style.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={style.incident}>
                        <Text style={style.incidentProperty}>ONG:</Text>
                        <Text style={style.incidentValue}>APAD</Text>

                        <Text style={style.incidentProperty}>CASO:</Text>
                        <Text style={style.incidentValue}>Cachorro atropelado</Text>

                        <Text style={style.incidentProperty}>VALOR:</Text>
                        <Text style={style.incidentValue}>R$ 1.000,00</Text>
                        
                        <TouchableOpacity style={style.detailsButton} onPress={ () => {}}
                        >
                            <Text style={style.detailsButtonText}>Ver mais detalhes</Text>                         
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>

                )}
            />
        
        </View>
    );
}