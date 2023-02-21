import {View, Image, Text, StyleSheet} from 'react-native'


type prop2 = {
    uri2:string
}

export default function SecondPicComp(props:prop2) {
    return (
        <View>
            <Image style={styles.image} source={{uri:props.uri2}}/>
            <Text style={textStyles.text}>My wife and I under the moon.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        borderWidth: 2,
        height: 390
    }
})

const textStyles = StyleSheet.create({
    text: {
        textAlign:'center',
        fontWeight:'bold'
    }
})