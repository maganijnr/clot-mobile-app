import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FormButton from "../components/FormButton";
import { SPACING } from "../theme/theme";

const PasswordResetSuccessScreen = ({ navigation }: any) => {
	return (
		<SafeAreaView
			//@ts-ignore
			className="flex-1 bg-[#1D182A] px-[30px] items-center justify-center"
			edges={["top"]}
		>
			<Image
				source={require("../assets/email-sent.png")}
				//@ts-ignore
				className="w-[100px] h-[100px] object-cover"
			/>

			<Text
				//@ts-ignore
				className="w-full flex flex-wrap text-white text-2xl text-center mt-5 font-medium"
			>
				We Sent you an Email to reset your password.
			</Text>

			<View style={{ width: wp(40), marginTop: SPACING.space_20 }}>
				<FormButton
					btnText="Return to login"
					delayNum={200}
					onPressHandler={() => {
						navigation.navigate("SignIn");
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

export default PasswordResetSuccessScreen;

const styles = StyleSheet.create({});
