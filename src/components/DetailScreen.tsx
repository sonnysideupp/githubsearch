import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';

import { RootStackParamList } from '../types/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import FONT from '../theme/Fonts';
import Button from '../uicomponents/Button';
import { useRepoLanguages } from '../hooks/useRepoLanguages';
import { formatNumber } from '../utils/helper';
import AppColor from '../theme/Colors';
type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;



const DetailScreen = ({ navigation, route }: Props) => {


	let repo = route.params.repo

	const { languages, isFetching } = useRepoLanguages(repo.languages_url)

	const goToRepoURL = () => {
		Linking.openURL(repo.url)

	}

	return (
		<SafeAreaView>
			<TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
				<Ionicons name="chevron-back" size={30} color="black" />

				<Text style={{ fontFamily: FONT.medium, fontSize: 14, marginLeft: 4 }}>
					Back
				</Text>

			</TouchableOpacity>

			<ScrollView style={{ height: "94%" }}>

				<View style={{ display: "flex", flexDirection: "column", marginHorizontal: 15 }}>

					<View style={styles.nameContainer}>

						<Image source={{ uri: repo.owner?.avatar_url }} style={{ width: 100, height: 100, borderRadius: 15 }} />


						<Text numberOfLines={2} adjustsFontSizeToFit={true} style={styles.name}>
							{repo.full_name}
						</Text>

					</View>

					<Text style={styles.rowTitle}>
						{repo.description}
					</Text>

					<Text style={styles.rowTitle}>
						{`Languages: `}

						<Text style={styles.rowBody}>

							{`${languages.join(", ")}`}
						</Text>
					</Text>

					<Text style={styles.rowTitle}>
						{`Watching: `}

						<Text style={styles.rowBody}>
							{`${formatNumber(repo.watchers)}`}
						</Text>
					</Text>

					<Text style={styles.rowTitle}>
						{`Forks: `}

						<Text style={styles.rowBody}>
							{`${formatNumber(repo.forks)}`}

						</Text>
					</Text>

					<Text style={styles.rowTitle}>
						{`Stars: `}

						<Text style={styles.rowBody}>
							{`${formatNumber(repo.stars)}`}
						</Text>
					</Text>

					<Button text={"Go to repo"} onPress={goToRepoURL} width={150} backgroundColor={AppColor.primary} textColor='white' style={{ marginTop: 15 }} />


				</View>

			</ScrollView>
		</SafeAreaView>)
}



export default DetailScreen


const styles = StyleSheet.create({
	header:{
		display: "flex", 
		flexDirection: "row", 
		alignItems: 'center', 
		margin: 5, 
		height: "6%"},
	rowTitle: { 
		marginTop: 15, 
		fontFamily: FONT.regular, 
		fontSize: 16 },
	rowBody: { 
		fontFamily: FONT.medium, 
		fontSize: 16, 
		color: AppColor.secondary },
	name:{
		fontFamily: FONT.medium, 
		fontSize: 24, 
		marginLeft: 8, 
		maxWidth: 230},
	nameContainer:{
		display: "flex", 
		flexDirection: "row", 
		alignItems: "flex-end", 
		marginVertical: 8 }
});