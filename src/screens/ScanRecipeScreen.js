import React from "react";
import  { View, Text, StyleSheet } from "react-native"

const ScanRecipeScreen = () =>{
    return (
        <View style={styles.container}>
            <Text>Scan List Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ScanRecipeScreen;