import { View, Text, StyleSheet} from "react-native";

export default function CardChat({item}) {
  
    return (
        <View style={styles.container}>
            <Text></Text>
            <View style={[
              styles.messageContainer,
              item.sender === 'me' ? styles.myMessage : styles.otherMessage,
            ]}>
                <Text>
                    {item.text}
                </Text>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
    },
    messageContainer: {
        borderRadius: 20,
        boxShadow: "medium",
        maxWidth: '70%',
        padding: 20,
        marginHorizontal: 10
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

})