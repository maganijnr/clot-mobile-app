import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { SPACING } from "../theme/theme";
import AuthButton from "../components/AuthButton";
import Animated, {
	Easing,
	FadeIn,
	FadeInLeft,
	FadeInUp,
} from "react-native-reanimated";

const SignInScreen = ({ navigation }: any) => {
	const [email, setEmail] = useState<any>("");
	const [password, setPassword] = useState<string>("");

	const [currentStep, setCurrentStep] = useState<"EMAIL" | "PASSWORD">(
		"EMAIL"
	);

	return (
		<SafeAreaView
			//@ts-ignore
			className="flex-1 bg-[#1D182A] px-[30px] pt-[50px]"
			edges={["top"]}
		>
			<StatusBar style="light" />

			<Text
				//@ts-ignore
				className="text-white font-medium"
				style={{ fontSize: wp(9) }}
			>
				Sign in
			</Text>

			{currentStep === "EMAIL" && (
				<>
					{/*Form view*/}
					<View
						//@ts-ignore
						className="mt-8 "
						style={{ gap: SPACING.space_15 }}
					>
						<FormInput
							setValue={setEmail}
							value={email}
							placeholder="Email Address"
							keyboardType="email-address"
							delayNumber={300}
						/>
						<FormButton
							delayNum={500}
							btnText="Continue"
							onPressHandler={() => {
								setCurrentStep("PASSWORD");
							}}
						/>
						<Animated.View entering={FadeInLeft.delay(800).springify()}>
							<TouchableOpacity
								//@ts-ignore
								className="flex flex-row gap-1"
								onPress={() => navigation.navigate("SignUp")}
							>
								<Text
									//@ts-ignore
									className="text-white font-normal text-xs"
								>
									Don't have an Account?
								</Text>

								<Text
									//@ts-ignore
									className="text-white font-semibold text-xs"
								>
									Create One
								</Text>
							</TouchableOpacity>
						</Animated.View>
					</View>

					{/*Account option*/}
					<View
						//@ts-ignore
						className="flex mt-20"
						style={{ gap: SPACING.space_15 }}
					>
						<AuthButton
							btnText="Continue With Apple"
							onPressHandler={() => {}}
							isIcon={false}
							image={require(`../assets/apple-vector.png`)}
							delayNumber={1200}
						/>
						<AuthButton
							btnText="Continue With Google"
							onPressHandler={() => {}}
							isIcon={false}
							image={require(`../assets/google-vector.png`)}
							delayNumber={1300}
						/>
						<AuthButton
							btnText="Continue With Facebook"
							onPressHandler={() => {}}
							isIcon={false}
							image={require(`../assets/facebook-vector.png`)}
							delayNumber={1400}
						/>
					</View>
				</>
			)}

			{currentStep === "PASSWORD" && (
				<>
					{/*Form view*/}
					<View
						//@ts-ignore
						className="mt-8 "
						style={{ gap: SPACING.space_15 }}
					>
						<FormInput
							setValue={setPassword}
							value={password}
							placeholder="Password"
							keyboardType="default"
							delayNumber={300}
							secureText={true}
						/>
						<FormButton
							delayNum={500}
							btnText="Continue"
							onPressHandler={() => {
								navigation.navigate("Tab", { screen: "Home" });
							}}
						/>
						<Animated.View entering={FadeInLeft.delay(800).springify()}>
							<TouchableOpacity
								//@ts-ignore
								className="flex flex-row gap-1"
								onPress={() => navigation.navigate("ForgotPassword")}
							>
								<Text
									//@ts-ignore
									className="text-white font-normal text-xs"
								>
									Forgot Password
								</Text>

								<Text
									//@ts-ignore
									className="text-white font-semibold text-xs"
								>
									Reset
								</Text>
							</TouchableOpacity>
						</Animated.View>
					</View>
				</>
			)}
		</SafeAreaView>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({});
