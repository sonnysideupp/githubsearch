import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { useFonts } from 'expo-font';
import { Repo, RootStackParamList } from '../types/types';




const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {

	
	return (

		
			<NavigationContainer >
				<Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Detail" component={DetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
	
		
	);
}

