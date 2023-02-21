import React from 'react'
import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native'
import FirstPicComp from './FirstPicComp'
import FourthPicComp from './FourthPicComp'
import SecondPicComp from './SecondPicComp'
import ThirdPicComp from './ThirdPicComp'


const uri1:string[] = [
    'https://www.justamericanjackets.com/wp-content/uploads/2022/09/Uzumaki-Boruto-Naruto-Next-Generations-2017-Orange-Jacket.jpg'
]

const uri2:string[] = [
    'https://preview.redd.it/5oa1s4chtj061.jpg?auto=webp&s=8786a8243df4236ccabd91b5b84a7548a22e4062'
]

const uri3:string[] = [
    'https://sportshub.cbsistatic.com/i/2021/03/18/26c2453a-20a3-4bb0-9abe-70bd84f9d9d0/naruto-family-boruto-1223781.jpg'
]

const uri4:string[] = [
    'https://pbs.twimg.com/media/Fmb9tloXoAAmd5B.jpg:large'
]

const backgroundImage = {uri:'https://i.pinimg.com/originals/d0/84/ed/d084ed2e115c4693d913c7308b4a4ce6.jpg'}


export default function MainComponent() {
    return (
        <View style={styles2.container}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles2.image}>
        <ScrollView contentContainerStyle={styles.imagesContainer}>
            {uri1.map(uri => (
                <FirstPicComp uri1={uri} key={uri}/>
            ))}

            {uri2.map(uri => (
                <SecondPicComp uri2={uri} key={uri}/>
            ))}

            {uri3.map(uri => (
                <ThirdPicComp uri3={uri} key={uri}/>
            ))}

            {uri4.map(uri => (
                <FourthPicComp uri4={uri} key={uri}/>
            ))}

        </ScrollView>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });
  
