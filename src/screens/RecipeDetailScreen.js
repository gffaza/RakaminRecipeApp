import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,ScrollView, Image} from 'react-native'
import colors from '../../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import ItemRecipe from '../components/ItemRecipe';
import RecipesData from '../screens/contants/RecipeData.json';



const RecipeDetailScreen = ({route}) => {
    // const route = useRoute();
    console.log('route');
    const {recipeId} = route.params;
    const recipeDetail = RecipesData.recipes.find((recipe) => Number(recipe.id) === Number(recipeId));
    console.log('recipeId', recipeDetail);
    return(
        
        <ScrollView style={styles.container}>
            <Image 
                source = {{uri:recipeDetail.image}}
                resizeMode = "stretch"
                style = {styles.imageRecipe}
            />
            <Text>{recipeDetail.name}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // textAlign: "center",
        // justifyContent: "center",
        flexGrow:1,

    },
    imageRecipe:{
        backgroundColor:colors.border,
        height: 600,
        // resizeMode: "stretch",
        // borderRadius: 8 
    },
})

export default RecipeDetailScreen;