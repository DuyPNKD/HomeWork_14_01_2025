import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

const LocationScreen = () => {
    const navigation = useNavigation();

    const handleSubmit = () => {
        // Thêm console.log để gỡ lỗi
        console.log("Attempting to navigate to SignIn screen");

        // Thử sử dụng try-catch để bắt lỗi
        try {
            navigation.navigate("Login");
        } catch (error) {
            console.error("Navigation error:", error);
            // Phương án dự phòng nếu điều hướng thất bại
            alert("Không thể chuyển đến trang đăng nhập. Vui lòng thử lại sau.");
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
                    <View style={styles.mapIcon}>
                        <Text style={styles.iconText}>📍</Text>
                    </View>
                </View>

                <Text style={styles.title}>Select Your Location</Text>
                <Text style={styles.subtitle}>Switch on your location to stay in tune with what's happening in your area</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Your Zone</Text>
                    <TouchableOpacity style={styles.selectBox}>
                        <Text>Banasree</Text>
                        <Text>▼</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Your Area</Text>
                    <TouchableOpacity style={styles.selectBox}>
                        <Text>Types of your area</Text>
                        <Text>▼</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
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
    mapIcon: {
        width: 60,
        height: 60,
        backgroundColor: "#4285F4",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    iconText: {
        fontSize: 24,
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
        paddingHorizontal: 30,
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
    selectBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        paddingVertical: 10,
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
        width: "100%",
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});

export default LocationScreen;
