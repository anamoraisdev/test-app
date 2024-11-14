import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CardChat from "../components/cardChat";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function ChatScreen() {
    const [inputText, setInputText] = useState<string>("")
    const [messages, setMessages] = useState([]);
  

    return (
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }} keyboardVerticalOffset={120}>

            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 120 }}
                renderItem={({ item }) =>
                    <CardChat item={item} />
                }
            />

            <View style={styles.container}>
                <TextInput
                    placeholder="Digite sua mensagem"
                    value={inputText}
                    onChangeText={(value) => setInputText(value)}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} >
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 120,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        gap: 4
    },

    input: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "gray",
        width: "70%",
        height: 50,
        paddingVertical: 15,
        paddingInlineStart: 20,
        fontSize: 20
    },
    button: {
        backgroundColor: "#0098D0",
        borderRadius: 40,
        paddingHorizontal: 20,
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})