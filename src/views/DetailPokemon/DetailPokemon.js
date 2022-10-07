import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {URL_POKEMON} from '../../types/variables';
import {InfoPokemon} from './components';


const DetailPokemon = ({navigation, route}) => {
    const {name, image, id} = route.params;

    const [getDetail, setDetail] = useState({})
    const [getLoading, setLoading] = useState(true)


    const getFetchDetail = async () => {
        const {data} = await axios.get(`${URL_POKEMON}/${id}`);
        setDetail(data)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        getFetchDetail()
    }, [])
    return (
        <>
            <View style={{...styles.root}}>
                <Ionicons name="arrow-back-outline" style={styles.icon} onPress={() => navigation.pop()}></Ionicons>
                <Text style={styles.text}>{name}</Text>
                <Text style={{...styles.text, marginTop: 55}}>#{id}</Text>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
            <ScrollView style={styles.detail}>
                {
                    getLoading ? (
                        <ActivityIndicator color={'#fff'} size={30} style={styles.loading}></ActivityIndicator>
                    ) : (<InfoPokemon detail={getDetail}/>)
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 250,
        backgroundColor: '#000',
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        zIndex: 999,
    },
    icon: {
        color: '#fff',
        fontSize: 30,
        position: 'absolute',
        top: 10,
        left: 10
    },
    text: {
        color: '#fff',
        fontSize: 30,
        textTransform: 'capitalize',
        position: 'absolute',
        marginTop: 20
    },
    image: {
        width: 160,
        height: 160,
        position: 'absolute',
        marginTop: 90
    },
    detail: {
        marginTop: 10,
        backgroundColor: '#000',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default DetailPokemon;
