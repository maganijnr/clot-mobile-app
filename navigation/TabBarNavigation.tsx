import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";

//Icons
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBarStyle,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign
							name="home"
							size={25}
							color={focused ? "#8E6CEF" : "#FFFFFF"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={NotificationScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Feather
							name="bell"
							size={25}
							color={focused ? "#8E6CEF" : "#FFFFFF"}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Orders"
				component={OrdersScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<MaterialIcons
							name="history-edu"
							size={25}
							color={focused ? "#8E6CEF" : "#FFFFFF"}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							name="user"
							size={25}
							color={focused ? "#8E6CEF" : "#FFFFFF"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabBarNavigation;

const styles = StyleSheet.create({
	tabBarStyle: {
		height: 90,
		position: "absolute",
		backgroundColor: "#1D182A",
		borderTopWidth: 0,
		elevation: 0,
		borderTopColor: "transparent",
	},
	BlurViewStyle: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});
