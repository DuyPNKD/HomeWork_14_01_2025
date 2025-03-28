import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileSection}>
                    <Image source={require("../assets/profile.png")} style={styles.profileImage} />
                    <View>
                        <Text style={styles.locationLabel}>Your Location</Text>
                        <Text style={styles.locationText}>Savar, Dhaka</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon name="notifications-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput placeholder="Search your food" style={styles.searchInput} />
                <TouchableOpacity style={styles.filterButton}>
                    <Icon name="filter" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryButton}>
                    <View style={styles.categoryIconContainer}>
                        <Icon name="pizza" size={24} color="#007bff" />
                    </View>
                    <Text style={styles.categoryText}>PIZZA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <View style={styles.categoryIconContainer}>
                        <Icon name="burger" size={24} color="#007bff" />
                    </View>
                    <Text style={styles.categoryText}>BURGER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <View style={styles.categoryIconContainer}>
                        <Icon name="wine" size={24} color="#007bff" />
                    </View>
                    <Text style={styles.categoryText}>DRINK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <View style={styles.categoryIconContainer}>
                        <Icon name="restaurant" size={24} color="#007bff" />
                    </View>
                    <Text style={styles.categoryText}>RICE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.promoContainer}>
                <View style={styles.promoDetails}>
                    <View style={styles.promoDiscount}>
                        <Text style={styles.promoDiscountText}>10% OFF</Text>
                    </View>
                    <Text style={styles.promoTitle}>BURGER</Text>
                    <Text style={styles.promoSubtitle}>Today's Hot Offer</Text>
                    <View style={styles.promoRating}>
                        <Icon name="star" size={16} color="#ffd700" />
                        <Text style={styles.promoRatingText}>4.5 (25+ Rating)</Text>
                    </View>
                </View>
                <Image source={require("../assets/burger.png")} style={styles.promoImage} resizeMode="contain" />
            </View>

            <View style={styles.popularHeader}>
                <Text style={styles.popularTitle}>Popular Items</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.popularItemsContainer}>
                <TouchableOpacity style={styles.popularItemCard}>
                    <Image source={require("../assets/burger.png")} style={styles.popularItemImage} resizeMode="cover" />
                    <Text style={styles.popularItemText}>BURGER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popularItemCard}>
                    <Image source={require("../assets/pizza.jpg")} style={styles.popularItemImage} resizeMode="cover" />
                    <Text style={styles.popularItemText}>PIZZA</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={24} color="#007bff" />
                    <Text style={styles.navItemActive}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="cart-outline" size={24} color="#888" />
                    <Text style={styles.navItemInactive}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="chatbox-outline" size={24} color="#888" />
                    <Text style={styles.navItemInactive}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="person-outline" size={24} color="#888" />
                    <Text style={styles.navItemInactive}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    locationLabel: {
        fontSize: 12,
        color: "#888",
    },
    locationText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    searchContainer: {
        flexDirection: "row",
        marginBottom: 15,
    },
    searchInput: {
        flex: 1,
        backgroundColor: "#f1f2f3",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    filterButton: {
        backgroundColor: "#007bff",
        borderRadius: 15,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    categoryButton: {
        alignItems: "center",
    },
    categoryIconContainer: {
        backgroundColor: "#e6f2ff",
        borderRadius: 15,
        padding: 10,
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 12,
        color: "#007bff",
    },
    promoContainer: {
        backgroundColor: "#1a2541",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginBottom: 15,
    },
    promoDetails: {
        flex: 1,
    },
    promoDiscount: {
        backgroundColor: "#007bff",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    promoDiscountText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    promoTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    promoSubtitle: {
        color: "#fff",
        fontSize: 14,
        marginBottom: 10,
    },
    promoRating: {
        flexDirection: "row",
        alignItems: "center",
    },
    promoRatingText: {
        color: "#fff",
        marginLeft: 5,
        fontSize: 12,
    },
    promoImage: {
        width: 120,
        height: 120,
    },
    popularHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    popularTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    viewAllText: {
        color: "#007bff",
    },
    popularItemsContainer: {
        paddingRight: 15,
    },
    popularItemCard: {
        marginRight: 15,
        alignItems: "center",
    },
    popularItemImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    popularItemText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "bold",
    },
    bottomNavigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: "#f1f2f3",
        paddingVertical: 10,
    },
    navItem: {
        alignItems: "center",
    },
    navItemActive: {
        color: "#007bff",
        fontSize: 12,
        marginTop: 5,
    },
    navItemInactive: {
        color: "#888",
        fontSize: 12,
        marginTop: 5,
    },
});

export default HomeScreen;
