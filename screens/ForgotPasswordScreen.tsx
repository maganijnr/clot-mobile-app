import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS, SPACING } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const ForgotPasswordScreen = ({ navigation }: any) => {
	const [email, setEmail] = useState<string>("");
	return (
		<SafeAreaView
			//@ts-ignore
			className="flex-1 bg-[#1D182A] px-[30px] pt-[50px]"
			edges={["top"]}
		>
			<StatusBar style="light" />
			<View
				//@ts-ignore
				className="mb-8"
			>
				<TouchableOpacity
					//@ts-ignore
					className=" h-[40px] w-[40px] rounded-full items-center justify-center"
					style={{ backgroundColor: COLORS.primaryPurpleLight }}
					onPress={() => {
						navigation.pop();
					}}
				>
					<Ionicons
						name="chevron-back"
						size={24}
						color={COLORS.primaryWhiteLight}
					/>
				</TouchableOpacity>
			</View>
			<Text
				//@ts-ignore
				className="text-white font-medium mb-8"
				style={{ fontSize: wp(9) }}
			>
				Forgot Password
			</Text>

			<View style={{ gap: SPACING.space_15 }}>
				<FormInput
					delayNumber={100}
					placeholder="Email Address"
					setValue={setEmail}
					value={email}
					keyboardType="email-address"
				/>

				<FormButton
					delayNum={300}
					btnText="Continue"
					onPressHandler={() => {
						navigation.navigate("PasswordSuccess");
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
