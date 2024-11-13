import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonBasic from "../components/buttonBasic";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>NomeApp</Text>
            <Text style={styles.subTitle}>Converse sobre sua saúde e tire dúvidas!</Text>
            <ButtonBasic navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#69B8F4',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    title: {
      fontSize: 60,
      fontWeight: "700",
      color: "white",
  
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