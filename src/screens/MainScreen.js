import React from "react";
import RecipeListScreen from "./RecipeListScreen";
import ScanRecipeScreen from "./ScanRecipeScreen";
import SavedRecipeScreen from "./SavedRecipeScreen";
import Feather from '@expo/vector-icons/Feather';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { title } from "process";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="RecipeListScreen" component={RecipeListScreen} options={
                {title: 'Recipes', 
                tabBarLabel: 'Recipes',
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={focused? "home-sharp" : "home-outline" }
                    size={size}
                    color={color}
                    ></Ionicons>
                )
                }
            }/>
            <Tab.Screen name="ScanRecipeScreen" component={ScanRecipeScreen} options={
                {title: 'Scan', 
                tabBarLabel: 'Scan',
                 tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={focused ? "scan-sharp" : "scan-outline" }
                    size={size}
                    color={color}
                    />
                )
                }
            } />
            <Tab.Screen name="SavedRecipeScreen" component={SavedRecipeScreen} options={{title: 'Saved', tabBarLabel: 'Saved', tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={focused ? "heart-sharp" : "heart-outline" }
                    size={size}
                    color={color}
                    ></Ionicons>
                )} }/>
        </Tab.Navigator>
    );
}

export default MainScreen;