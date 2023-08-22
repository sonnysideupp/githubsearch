import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import { useFonts } from 'expo-font';
import { Repo, RootStackParamList } from './src/types/types';
import AppProvider from './src/components/AppProvider';
import AppNavigator from './src/components/AppNavigation';



export default function App() {

	const [fontsLoaded] = useFonts({
		RoboBold: require("./assets/fonts/Roboto-Bold.ttf"),
		RoboMedium: require("./assets/fonts/Roboto-Medium.ttf"),
		RoboRegular: require("./assets/fonts/Roboto-Regular.ttf"),
		RoboLight: require("./assets/fonts/Roboto-Regular.ttf"),
		RoboMediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
		RoboItalic: require("./assets/fonts/Roboto-Italic.ttf"),
		RoboBoldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
	  });
	
	  if (!fontsLoaded) {
		return null;
	  }
	return (

		<AppProvider> 
			<AppNavigator/>
		</AppProvider>
		
	);
}

