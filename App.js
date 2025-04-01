import "react-native-gesture-handler";
import React, {useState, useEffect} from "react";
import RootRouter from "./routers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Load trạng thái đăng nhập từ AsyncStorage khi mở app
    useEffect(() => {
        const checkLoginStatus = async () => {
            const storedLogin = await AsyncStorage.getItem("isLoggedIn");
            if (storedLogin === "true") {
                setIsLoggedIn(true);
            }
        };
        checkLoginStatus();
    }, []);

    // Hàm để thay đổi trạng thái đăng nhập
    const toggleLogin = async (status) => {
        setIsLoggedIn(status);
        await AsyncStorage.setItem("isLoggedIn", status.toString());
    };

    return (
        <SafeAreaProvider>
            <RootRouter isLoggedIn={isLoggedIn} setIsLoggedIn={toggleLogin} />
        </SafeAreaProvider>
    );
};

export default App;
