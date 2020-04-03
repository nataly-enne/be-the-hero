import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import style from './style';

export default function Details(){
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contado pois gostaria de ajudar no caso "Cachorro atropelado", com o valor de R$ 1.000,00.'

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro atropelado',
            recipients: ['nataly.enne@lais.uhol.ufrn.br'],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5584991541100&text=${message}`);
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={[style.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={style.incidentValue}>APAD</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>Cachorro atropelado</Text>

                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={style.incidentValue}>R$ 1.000,00</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}