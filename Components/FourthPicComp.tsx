import {View, Image, Text, StyleSheet} from 'react-native'


type prop4 = {
    uri4:string
}


export default function FourthPicComp(props:prop4){
    return (
        <View>
            <Image style={styles.image} source={{uri:props.uri4}}/>
            <Text style={textStyles.text}>Sasuke and I!</Text>
            
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