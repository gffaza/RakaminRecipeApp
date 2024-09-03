import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import colors from '../../theme/colors';
import { Ionicons } from '@expo/vector-icons';


const ItemRecipe = ({item}) => {
    console.log('props:', item);
    return (
        <TouchableOpacity 
            onPress={() => {}}
            style={styles.itemContainer}
        >
       
            <Image 
            source = {{uri:item.image}}
            resizeMode = "cover"
            style = {styles.imageRecipe}
            />

            <View style={styles.infoCointainer}>

                <Text style = {styles.text}>{item.name}</Text>
                <View style = {styles.ratingContainer}>
                    <Ionicons name="star-sharp" size={20} color={"orange"} />
                    <Text style = {styles.rating}>{item.rating}</Text>
                </View>
            
            </View>
            
        </TouchableOpacity>

        
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: 'white',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        padding: 16,
        borderBottomWidth:1,
        borderColor:'white',
        flexDirection:"row",
        marginLeft:16,
        marginRight:16
    },
    imageRecipe:{
        backgroundColor:colors.border,
        height: 78,
        width: 78,
        borderRadius: 8 
    },
    text:{
        fontWeight: "bold",
        // justifyContent: "center",
        // alignItems: "center",
        fontSize: 16,
        // marginLeft: 16,
        // color: colors.primary,
        // flex:1,
        // lineHeight: 24,
    },
    rating:{
        fontSize:16,
        // color : colors.primary,
        marginLeft : 8
    },
    ratingContainer:{
        flexDirection:"row",
        alignItems: "center",
        // marginLeft:16,
        marginTop: 8,
        // marginBottom: 4
    },
    infoCointainer:{
        marginLeft:16,
        flex:1,
        justifyContent: "flex-start",
        // backgroundColor:
    }
});

export default ItemRecipe;