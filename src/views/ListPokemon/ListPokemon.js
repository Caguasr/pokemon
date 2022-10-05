import {ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {CardPokemon} from './components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


const ListPokemon = ({navigation}) => {

    const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon'
    const IMAGE_POKEMON = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

    const [getPokemon, setPokemon] = useState([])
    const [getUrl, setUrl] = useState(URL_POKEMON)
    const {top} = useSafeAreaInsets()

    const getDataPokemon = async () => {
        setTimeout(async () => {
            const {data} = await axios.get(getUrl);
            const {results, next} = data;
            const transformPokemon = results.map((item) => {
                const splitData = item.url.split('/')
                const id = splitData[splitData.length - 2]
                const name = item.name
                const image = `${IMAGE_POKEMON}${id}.png`
                return {id, name, image}
            });
            setUrl(next)
            setPokemon([...getPokemon, ...transformPokemon])
        }, 1000)
    }

    useEffect(() => {
        getDataPokemon()
    }, [])

    return (
        <View style={styles.root}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={{marginTop: top + 20}}>
                <Text style={{...styles.colorText, fontSize: 30, fontWeight: 'bold'}}>POKEMON</Text>
                <FlatList
                    data={getPokemon}
                    keyExtractor={(getPokemon) => getPokemon.name}
                    renderItem={({item}) => (<CardPokemon image={item.image} name={item.name} id={item.id}/>)}
                    onEndReached={getDataPokemon}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={<ActivityIndicator style={{height: 100}} color={'#fff'}
                                                            size={50}></ActivityIndicator>}
                    numColumns={2}
                >
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    colorText: {
        color: '#ffffff',
        textTransform: 'capitalize'
    },
    list: {
        backgroundColor: '#000',
        color: '#fff'
    }
})

export default ListPokemon
