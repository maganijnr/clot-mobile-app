import {
	StyleSheet,
	Text,
	TouchableOpacity,
	ImageProps,
	Image,
} from "react-native";
import React from "react";
import { COLORS } from "../theme/theme";
import Animated, { FadeInLeft } from "react-native-reanimated";

interface ButtonProps {
	btnText: string;
	onPressHandler: any;
	image?: ImageProps;
	isIcon?: boolean;
	icon?: any;
	delayNumber: number;
}

const AuthButton: React.FC<ButtonProps> = ({
	btnText,
	isIcon,
	icon,
	onPressHandler,
	image,
	delayNumber,
}) => {
	return (
		<Animated.View entering={FadeInLeft.delay(delayNumber).springify()}>
			<TouchableOpacity
				//@ts-ignore
				className="py-5 px-3 relative items-center justify-center rounded-[100px]"
				style={{ backgroundColor: COLORS.primaryPurpleLight }}
				onPress={onPressHandler}
			>
				{!isIcon && (
					<Image
						//@ts-ignore
						source={image}
						alt="asset"
						className=" absolute left-4 object-fill"
					/>
				)}
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

export default AuthButton;

const styles = StyleSheet.create({});
