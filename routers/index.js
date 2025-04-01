import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SignInScreen from "../screens/SingIn";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Auth Stack
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="SignIn" component={SignInScreen} />
    </AuthStack.Navigator>
);

// Main Tab (Home + Profile)
const MainTab = createBottomTabNavigator();
const MainTabNavigator = () => (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
        <MainTab.Screen name="Home" component={HomeScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
);

// Main Stack
const MainStack = createStackNavigator();
const MainStackNavigator = () => (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="MainTab" component={MainTabNavigator} />
    </MainStack.Navigator>
);

// Root Router
export default function RootRouter({isLoggedIn}) {
    return <NavigationContainer>{isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}</NavigationContainer>;
}
