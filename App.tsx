import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MainScreen from "./MainScreen";

export default function App() {
	return (
		<AnimatedSplashScreen>
			<MainScreen />
		</AnimatedSplashScreen>
	);
}

function AnimatedSplashScreen({ children }: any) {
	const [isAppReady, setAppReady] = useState(false);

	const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		if (isAppReady) {
			setAnimationComplete(true);
		}
	}, [isAppReady]);

	useEffect(() => {
		setTimeout(async () => {
			await SplashScreen.hideAsync();
			setAppReady(true);
		}, 2000);
	}, []);

	return (
		//@ts-ignore
		<View className="flex-1">
			{isAppReady && children}
			{!isSplashAnimationComplete && (
				<Animated.View
					entering={FadeIn.delay(100).springify()}
					//@ts-ignore
					className="flex-1 items-center justify-center bg-[#8E6CEF] w-full"
				>
					<Animated.Image
						entering={FadeInUp.delay(300).springify()}
						source={require("./assets/clot-logo.png")}
						style={{ width: wp(30), height: hp(5) }}
						//@ts-ignore
						className="object-cover  mx-auto"
					/>
				</Animated.View>
			)}
		</View>
	);
}
