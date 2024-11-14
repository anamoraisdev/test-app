import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonBasic({ navigation }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('chat')}>
            <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
    },
    buttonText: {
        color: '#0098D0',
        fontSize: 20,
        fontWeight: 'bold',
    },
});