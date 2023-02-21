import {View, Image, Text, StyleSheet} from 'react-native'

type prop3 = {
    uri3:string
}

export default function ThirdPicComp(props:prop3) {
    return (
        <View>
            <Image style={styles.image} source={{uri:props.uri3}}/>
            <Text style={textStyles.text}>My Beautiful Daughter!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        borderWidth: 3,
        height: 390
    }
})

const textStyles = StyleSheet.create({
    text: {
        textAlign:'center',
        fontWeight:'bold'
    }
})