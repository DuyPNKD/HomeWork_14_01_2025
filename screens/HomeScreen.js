import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from "react-native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
                <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
            </View>

            {/* Top Categories */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Top Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                <Image source={require("../assets/pizza.jpg")} style={styles.categoryImage} />
                <Image source={require("../assets/burger.jpg")} style={styles.categoryImage} />
                <Image source={require("../assets/steak.jpg")} style={styles.categoryImage} />
            </ScrollView>

            {/* Popular Items */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Popular Items</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularContainer}>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food1.jpg")} style={styles.foodImage} />
                    <Text>Food 1</Text>
                    <Text>$1</Text>
                </View>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food2.jpg")} style={styles.foodImage} />
                    <Text>Food 2</Text>
                    <Text>$3</Text>
                </View>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food3.jpg")} style={styles.foodImage} />
                    <Text>Food 2</Text>
                    <Text>$3</Text>
                </View>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food4.jpg")} style={styles.foodImage} />
                    <Text>Food 2</Text>
                    <Text>$3</Text>
                </View>
            </ScrollView>

            {/* Popular Items */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Popular Items</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularContainer}>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food3.jpg")} style={styles.foodImage} />
                    <Text>Food 1</Text>
                    <Text>$1</Text>
                </View>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food4.jpg")} style={styles.foodImage} />
                    <Text>Food 2</Text>
                    <Text>$3</Text>
                </View>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food1.jpg")} style={styles.foodImage} />
                    <Text>Food 1</Text>
                    <Text>$1</Text>
                </View>
                <View style={styles.foodItem}>
                    <Image source={require("../assets/food2.jpg")} style={styles.foodImage} />
                    <Text>Food 2</Text>
                    <Text>$3</Text>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white", padding: 10},
    headerContainer: {flexDirection: "row", justifyContent: "space-between", marginBottom: 10},
    headerText: {fontSize: 24, fontWeight: "bold"},
    searchContainer: {flexDirection: "row", alignItems: "center", backgroundColor: "#f0f0f0", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10},
    searchInput: {flex: 1, height: 40},
    searchIcon: {marginLeft: 5},
    sectionContainer: {flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10},
    sectionTitle: {fontSize: 18, fontWeight: "bold"},
    filterText: {color: "orange"},
    categoryContainer: {flexDirection: "row", marginBottom: 10},
    categoryImage: {width: 100, height: 80, borderRadius: 10, marginRight: 10},
    popularContainer: {flexDirection: "row", marginBottom: 10},
    foodItem: {alignItems: "center", marginRight: 10},
    foodImage: {width: 120, height: 100, borderRadius: 10},
    viewAllText: {color: "orange"},
});

export default HomeScreen;
