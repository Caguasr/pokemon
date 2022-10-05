import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';


const CardPokemon = ({image, name, id}) => {
    return (
        <TouchableOpacity style={styles.root}>
            <Text style={styles.textTitle}>{name}</Text>
            <Text style={{...styles.textTitle, fontSize: 17}}>#{id}</Text>
            <Image source={{uri: image}} style={styles.image}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: 10,
        width: 165,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: 'grey',
        shadowColor: '#0dda1d',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    textTitle: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 7
    },
    image: {
        position: 'absolute',
        height: 90,
        width: 90,
        left: 90
    }
})

export default CardPokemon;
