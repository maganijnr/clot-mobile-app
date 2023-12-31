import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING } from "../theme/theme";
import { StatusBar } from "expo-status-bar";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const SignUpScreen = ({ navigation }: any) => {
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

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
				Create Account
			</Text>

			{/*FORM VIEW*/}
			<View style={{ gap: SPACING.space_15 }}>
				<FormInput
					delayNumber={100}
					placeholder="Firstname"
					setValue={setFirstName}
					value={firstName}
					keyboardType="default"
				/>
				<FormInput
					delayNumber={300}
					placeholder="Lastname"
					setValue={setLastName}
					value={lastName}
					keyboardType="default"
				/>
				<FormInput
					delayNumber={500}
					placeholder="Email Address"
					setValue={setEmail}
					value={email}
					keyboardType="email-address"
				/>
				<FormInput
					delayNumber={700}
					placeholder="Password"
					setValue={setPassword}
					value={password}
					keyboardType="default"
					secureText={true}
				/>

				<View style={{ paddingTop: SPACING.space_20 }}>
					<FormButton
						delayNum={900}
						btnText="Continue"
						onPressHandler={() => {
							navigation.navigate("Tab", { screen: "Home" });
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({});
