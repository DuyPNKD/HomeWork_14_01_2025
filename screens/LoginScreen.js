import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Add validation logic here
        if (email && password) {
            // Navigate to the appropriate screen after login
            navigation.navigate("Number");
        } else {
            // Show error message
            alert("Please enter email and password");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.time}>9:41</Text>
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            <View style={styles.centerContent}>
                <View style={styles.iconContainer}>
                    <Text style={styles.carrotIcon}>🥕</Text>
                </View>

                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Enter your emails and password</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.textInput} placeholder="imshuvv97@gmail.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput style={styles.textInput} placeholder="********" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={styles.eyeIcon}>👁️</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => alert("Forgot password functionality")}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <View style={styles.bottomText}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signupText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        alignItems: "center",
        paddingTop: 10,
    },
    time: {
        fontWeight: "bold",
    },
    backButton: {
        marginTop: 20,
        marginLeft: 20,
        padding: 5,
    },
    backIcon: {
        fontSize: 24,
    },
    centerContent: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    iconContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    carrotIcon: {
        fontSize: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#888",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        color: "#888",
        marginBottom: 10,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        paddingVertical: 10,
        flex: 1,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    eyeIcon: {
        padding: 10,
    },
    forgotPasswordButton: {
        alignSelf: "flex-end",
        marginBottom: 30,
    },
    forgotPassword: {
        color: "#888",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    bottomText: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    signupText: {
        color: "#4CAF50",
        fontWeight: "bold",
    },
});

export default LoginScreen;
