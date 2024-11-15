import { View, StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";

export default function CardChat({ item }) {

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageContainer,
                item.sender === 'me' ? styles.myMessage : styles.otherMessage,
            ]}>

                <Markdown style={{body: {
                    fontSize: 20
                }}}>
                    {item.text}
                </Markdown>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",

    },
    messageContainer: {
        borderRadius: 20,
        boxShadow: "medium",
        maxWidth: '70%',
        padding: 20,
        margin: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
    myMessage: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        alignSelf: 'flex-end',
        borderTopRightRadius: 0,
    },
    otherMessage: {
        backgroundColor: '#e0e0e0',
        alignSelf: 'flex-start',
        borderTopLeftRadius: 0,
    },
    markdown: {
        fontSize: 20,
        color: '#444',
    },

})