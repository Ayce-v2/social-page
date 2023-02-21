import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function TextInputExample() {
    
    const [comment, setComment] = useState<string>('');


    return <View>

        <Text>Leave a comment: {comment}</Text>
        <TextInput value = {comment} onChangeText = {setComment} style = {styles.comment}/> 


        

    </View>
}

const styles = StyleSheet.create({
    comment : {
        borderWidth: 1,
        width: 200,
        height: 35,
        margin: 'auto'
    }
})