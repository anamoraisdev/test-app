import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ButtonBasic from "../components/buttonBasic";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/chatMed.png')} style={{objectFit: 'contain'}}/>
            <Text style={styles.subTitle}>Converse sobre sua saúde e tire dúvidas!</Text>
            <ButtonBasic navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0098D0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subTitle: {
      fontSize: 20,
      fontWeight: "300",
      color: "white",
    },
    button: {
      color: "white",
      width:"auto",
      borderRadius: "medium",
      
    }
  });