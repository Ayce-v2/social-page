import {View, Image, Text, StyleSheet} from 'react-native'


type prop1 = {
    uri1:string
}


export default function FirstPicComp(props:prop1){
    return (
        <View>
            <Image style={styles.image} source={{uri:props.uri1}}/>
            <Text style={textStyles.text}>The 7th Hokage!</Text>
            
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