import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/theme";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";

interface ButtonProps {
	btnText: string;
	onPressHandler: any;
	delayNum: number;
}

const FormButton: React.FC<ButtonProps> = ({
	btnText,
	onPressHandler,
	delayNum,
}) => {
	return (
		<Animated.View entering={FadeInLeft.delay(delayNum).springify()}>
			<TouchableOpacity
				onPress={onPressHandler}
				//@ts-ignore
				className="w-full h-[49px] items-center justify-center rounded-[100px]"
				style={{ backgroundColor: COLORS.primaryPurple }}
			>
				<Text
					//@ts-ignore
					className="text-white font-medium text-base"
				>
					{btnText}
				</Text>
			</TouchableOpacity>
		</Animated.View>
	);
};

export default FormButton;

const styles = StyleSheet.create({});
