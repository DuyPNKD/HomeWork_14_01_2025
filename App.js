import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

// Import existing screens
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
import NumberScreen from "./screens/NumberScreen";
import VerificationScreen from "./screens/VerificationScreen";

// Import new screens
import LocationScreen from "./screens/LocationScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
                <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
                <Stack.Screen name="Number" component={NumberScreen} options={{headerShown: false}} />
                <Stack.Screen name="Verification" component={VerificationScreen} options={{headerShown: false}} />
                {/* New screens */}
                <Stack.Screen name="Location" component={LocationScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
