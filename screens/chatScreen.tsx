import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CardChat from "../components/cardChat";
import { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from 'expo-constants';



export default function ChatScreen() {
    const [inputText, setInputText] = useState<string>("")
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const flatListRef = useRef<any>(null);
    const API_KEY = Constants.expoConfig.extra.API_KEY;

    const sendMessage = async (inputText: string) => {
        if (inputText) {
            const newMessage = { id: messages.length, text: inputText, sender: 'me' };
            setMessages([...messages, newMessage]);
            setInputText('');
            setLoading(true);

            try {
                const genAI = new GoogleGenerativeAI(API_KEY);
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                const result = await model.generateContent(inputText);
                const responseText = result.response.text();

                receiveMessage(responseText);
                
            } catch (error) {
                console.error("Erro ao gerar resposta:", error);
                setLoading(false);
            }
        }
    };

    const receiveMessage = (response: string) => {
        const responseMessage = {
            id: messages.length + 1,
            text: response,
            sender: 'other',
        };
        setMessages((prevMessages) => [...prevMessages, responseMessage]);
        setLoading(false);
    };

    const scrollToBottom = () => {
      
            flatListRef.current?.scrollToEnd({
                animated: true,
            });

    };

    useEffect(() => {
        scrollToBottom()
    }, [messages]);


    return (
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }} keyboardVerticalOffset={120}>

            <FlatList
                data={messages}
                ref={flatListRef}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 120 }}
                onContentSizeChange={() => scrollToBottom()}
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
                <TouchableOpacity style={styles.button} onPress={() => sendMessage(inputText)} disabled={loading}>
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