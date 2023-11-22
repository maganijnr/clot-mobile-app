import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TabBarNavigation from "./navigation/TabBarNavigation";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import PasswordResetSuccessScreen from "./screens/PasswordResetSuccessScreen";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="SignIn"
					component={SignInScreen}
					options={{ animation: "slide_from_bottom" }}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUpScreen}
					options={{ animation: "slide_from_bottom" }}
				/>
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPasswordScreen}
					options={{ animation: "slide_from_bottom" }}
				/>
				<Stack.Screen
					name="PasswordSuccess"
					component={PasswordResetSuccessScreen}
					options={{ animation: "slide_from_bottom" }}
				/>
				<Stack.Screen
					name="Tab"
					component={TabBarNavigation}
					options={{ animation: "slide_from_bottom" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainScreen;

const styles = StyleSheet.create({});
