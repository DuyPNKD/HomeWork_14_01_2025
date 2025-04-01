import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const validateEmail = (text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(text));
    };

    const handleSignUp = () => {
        // Add validation logic here
        if (username && email && password && isEmailValid) {
            // Navigate to the next screen after signup
            navigation.navigate("Number");
        } else {
            // Show error message
            alert("Please fill all fields with valid information");
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

                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>Enter your credentials to continue</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput style={styles.textInput} placeholder="Afsar Hossen Shuvo" value={username} onChangeText={setUsername} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <View style={styles.emailContainer}>
                        <TextInput style={styles.textInput} placeholder="imshuvv97@gmail.com" value={email} onChangeText={validateEmail} keyboardType="email-address" autoCapitalize="none" />
                        {email.length > 0 && <Text style={[styles.checkIcon, !isEmailValid && styles.invalidIcon]}>{isEmailValid ? "✓" : "✗"}</Text>}
                    </View>
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

                <Text style={styles.termsText}>
                    By continuing you agree to our <Text style={styles.highlightText}>Terms of Service</Text> and <Text style={styles.highlightText}>Privacy Policy</Text>
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.bottomText}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                        <Text style={styles.signinText}>Signin</Text>
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
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    eyeIcon: {
        padding: 10,
    },
    checkIcon: {
        color: "#4CAF50",
        padding: 10,
    },
    invalidIcon: {
        color: "red",
    },
    termsText: {
        fontSize: 14,
        color: "#888",
        textAlign: "center",
        marginBottom: 20,
    },
    highlightText: {
        color: "#4CAF50",
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
    signinText: {
        color: "#4CAF50",
        fontWeight: "bold",
    },
});

export default SignUpScreen;
