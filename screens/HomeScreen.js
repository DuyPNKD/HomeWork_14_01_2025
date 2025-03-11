import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hello 👋</Text>
                    <Text style={styles.name}>Christie Doe</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={{uri: "https://randomuser.me/api/portraits/women/44.jpg"}} style={styles.avatar} />
                </TouchableOpacity>
            </View>

            {/* Insights */}
            <View style={styles.insights}>
                <Text style={styles.insightsGreeting}>Your Insights</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, {backgroundColor: "#E8E7FE"}]}>
                            <Ionicons name="scan-outline" size={28} color="#6C63FF" />
                        </View>
                        <Text style={styles.cardText}>Scan new</Text>
                        <Text style={styles.cardSubText}>Scanned 483</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, {backgroundColor: "#FFE8E1"}]}>
                            <Ionicons name="alert-circle-outline" size={28} color="#FF7043" />
                        </View>
                        <Text style={styles.cardText}>Counterfeits</Text>
                        <Text style={styles.cardSubText}>Counterfeited 32</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, {backgroundColor: "#E8F5E9"}]}>
                            <Ionicons name="checkmark-circle-outline" size={28} color="#4CAF50" />
                        </View>
                        <Text style={styles.cardText}>Success</Text>
                        <Text style={styles.cardSubText}>Checkouts 8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <View style={[styles.iconContainer, {backgroundColor: "#E1F5FE"}]}>
                            <Ionicons name="calendar-outline" size={28} color="#29B6F6" />
                        </View>
                        <Text style={styles.cardText}>Directory</Text>
                        <Text style={styles.cardSubText}>History 26</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "#fff", padding: 20, marginTop: 30},
    header: {flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20},
    greeting: {fontSize: 24, fontWeight: "bold", color: "#000"},
    name: {fontSize: 18, fontWeight: "400", color: "#000"},
    avatar: {width: 50, height: 50, borderRadius: 25},
    insights: {marginBottom: 30},
    row: {flexDirection: "row", justifyContent: "space-between", marginBottom: 15},
    card: {width: "48%", backgroundColor: "#F9F9F9", padding: 20, borderRadius: 12, alignItems: "center", justifyContent: "center", height: 180},
    iconContainer: {width: 50, height: 50, borderRadius: 14, justifyContent: "center", alignItems: "center", marginBottom: 10},
    cardText: {marginTop: 5, fontSize: 16, fontWeight: "600"},
    cardSubText: {fontSize: 14, color: "#757575"},
    bottomNav: {flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, backgroundColor: "#fff", borderTopLeftRadius: 30, borderTopRightRadius: 30, position: "absolute", bottom: 0, left: 0, right: 0, elevation: 5},
    insightsGreeting: {fontSize: 20, fontWeight: "400", color: "#000", marginBottom: 25},
});
