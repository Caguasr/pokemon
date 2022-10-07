import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const InfoPokemon = ({detail}) => {
    return (
        <View>
            <Text style={styles.title}>Tipo</Text>
            <View style={styles.type}>
                {
                    detail.types.map((item, index) => (
                        <Text key={index} style={styles.normalText}>{item.type.name}</Text>
                    ))
                }
            </View>
            <Text style={styles.title}>Peso</Text>
            <Text style={styles.normalText}>{detail.weight} KG</Text>

            <Text style={styles.title}>Vistas</Text>
            <ScrollView horizontal={true}>
                <Image source={{uri: detail.sprites.back_default}} style={{width: 120, height: 100}}></Image>
                <Image source={{uri: detail.sprites.back_shiny}} style={{width: 120, height: 100}}></Image>
                <Image source={{uri: detail.sprites.front_default}} style={{width: 120, height: 100}}></Image>
                <Image source={{uri: detail.sprites.front_shiny}} style={{width: 120, height: 100}}></Image>
            </ScrollView>

            <Text style={styles.title}>Habilidades</Text>
            <ScrollView horizontal={true}>
                {
                    detail.abilities.map((item, index) => (
                        <Text style={styles.normalText}>{item.ability.name}</Text>
                    ))
                }
            </ScrollView>

            <Text style={styles.title}> Información</Text>
            <Text style={styles.normalText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                beatae, dolorum fugit hic, illum nostrum odio odit optio placeat praesentium quasi quod ratione sed,
                similique suscipit ut veniam. Modi, nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci architecto eveniet, id laboriosam libero magni natus, nostrum numquam officiis perspiciatis
                possimus provident quibusdam repellendus repudiandae ullam velit, voluptas! Aliquid, similique!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 20,
        marginLeft: 20
    },
    normalText: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 20,
        textTransform: 'capitalize',
        marginTop: 5
    },
    type: {
        flexDirection: 'row',
        flex: 1
    }
})
export default InfoPokemon
