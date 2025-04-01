import React, {useState, useRef, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";

const VerificationScreen = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const inputs = useRef([]);

    // Start timer when component mounts
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                setCanResend(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (text, index) => {
        // Only allow numeric input
        if (/^[0-9]?$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);

            // Auto-focus next input after entering a digit
            if (text && index < 3) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        // Handle backspace to go to previous input
        if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleResendCode = () => {
        if (canResend) {
            // Reset OTP fields
            setOtp(["", "", "", ""]);
            // Focus first input
            inputs.current[0].focus();
            // Reset timer
            setTimer(60);
            setCanResend(false);
            // Show confirmation
            Alert.alert("Code Sent", "A new verification code has been sent to your device.");
        }
    };

    const validateOtp = () => {
        const fullOtp = otp.join("");
        if (fullOtp.length === 4) {
            return true;
        }
        return false;
    };

    const handleContinue = () => {
        if (validateOtp()) {
            // Navigate to Location screen on successful verification
            navigation.navigate("Location");
        } else {
            Alert.alert("Invalid Code", "Please enter the 4-digit verification code.");
        }
    };

    // Format timer to show minutes and seconds
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" + secs : secs}`;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Enter your 4-digit code</Text>
            <Text style={styles.subtitle}>We've sent the code to your phone. Please enter it below.</Text>

            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput key={index} style={styles.otpInput} value={digit} onChangeText={(text) => handleOtpChange(text, index)} onKeyPress={(e) => handleKeyPress(e, index)} keyboardType="numeric" maxLength={1} ref={(ref) => (inputs.current[index] = ref)} autoFocus={index === 0} />
                ))}
            </View>

            <View style={styles.timerContainer}>
                {canResend ? (
                    <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
                        <Text style={styles.resendText}>Resend Code</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={styles.timerText}>Resend code in {formatTime(timer)}</Text>
                )}
            </View>

            <TouchableOpacity style={[styles.button, !validateOtp() && styles.disabledButton]} onPress={handleContinue} disabled={!validateOtp()}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <View style={styles.navigationOptions}>
                <Text style={styles.optionsText}>Having trouble?</Text>
                <View style={styles.optionsRow}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("SignIn")}>
                        <Text style={styles.optionButtonText}>Try another method</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate("Number")}>
                        <Text style={styles.optionButtonText}>Change number</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
        marginBottom: 20,
        padding: 5,
        width: 40,
    },
    backIcon: {
        fontSize: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#888",
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    otpInput: {
        width: 65,
        height: 65,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 24,
        color: "#000",
        backgroundColor: "#f9f9f9",
    },
    timerContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    timerText: {
        fontSize: 16,
        color: "#888",
    },
    resendButton: {
        padding: 10,
    },
    resendText: {
        fontSize: 16,
        color: "#4CAF50",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 20,
    },
    disabledButton: {
        backgroundColor: "#A5D6A7", // Lighter green
        opacity: 0.7,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    navigationOptions: {
        marginTop: 20,
    },
    optionsText: {
        fontSize: 16,
        color: "#888",
        textAlign: "center",
        marginBottom: 15,
    },
    optionsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    optionButton: {
        padding: 10,
    },
    optionButtonText: {
        color: "#4CAF50",
        fontWeight: "bold",
    },
});

export default VerificationScreen;
