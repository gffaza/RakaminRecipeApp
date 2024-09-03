import React from "react";
import  { View, Text, StyleSheet } from "react-native"

const SavedRecipeScreen = () =>{
    return (
        <View style={styles.container}>
            <Text>Recycle List Screen</Text>
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

export default SavedRecipeScreen;