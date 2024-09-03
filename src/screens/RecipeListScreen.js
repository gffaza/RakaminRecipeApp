import React from "react";
import { useNavigation } from "@react-navigation/native";
import  { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import RecipeData from "./contants/RecipeData.json";
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () =>{
    const navigation = useNavigation();
    console.log(RecipeData.recipes)
    return (
        <View style={styles.container}>
            <FlatList
                data={RecipeData.recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (<ItemRecipe item={item}> </ItemRecipe>)}
            
             />
        </View>
            )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});

export default RecipeListScreen;