import { StyleSheet, TextInput } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { BORDERRADIUS, COLORS } from "../theme/theme";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";

interface FormInputProps {
	setValue: Dispatch<SetStateAction<any>>;
	value: any;
	placeholder: string;
	keyboardType?: any;
	delayNumber: number;
	secureText?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
	value,
	setValue,
	placeholder,
	keyboardType,
	delayNumber,
	secureText,
}) => {
	return (
		<Animated.View entering={FadeInLeft.delay(delayNumber).springify()}>
			<TextInput
				placeholder={placeholder}
				onChangeText={setValue}
				value={value}
				keyboardType={keyboardType}
				style={{
					backgroundColor: COLORS.primaryPurpleLight,
					borderRadius: BORDERRADIUS.radius_4,
				}}
				//@ts-ignore
				className="py-5 px-3 text-white"
				placeholderTextColor="rgba(255,255,255, .5)"
				secureTextEntry={secureText}
			/>
		</Animated.View>
	);
};

export default FormInput;

const styles = StyleSheet.create({});
