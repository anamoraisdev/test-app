import { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function Loading() {
    const [bounceAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(bounceAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(bounceAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                })
            ],)
        );
        animation.start();
        return () => animation.stop();
    }, [bounceAnim]);

    return (
        <View style={styles.loadingContainer}>
            <View style={styles.dots}>
                <Animated.View
                    style={[styles.dot, { opacity: bounceAnim}]} />
                <Animated.View
                    style={[styles.dot, { opacity: bounceAnim }]} />
                <Animated.View
                    style={[styles.dot, { opacity: bounceAnim}]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        padding: 10,
        alignItems: 'flex-start',
    },
    dots: {
        borderRadius: 20,
        boxShadow: "medium",
        maxWidth: '70%',
        padding: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        justifyContent: 'space-around',
        borderTopLeftRadius: 0,
        width: 100,
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#888',
        borderRadius: 5,
    },
});
