import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, ListRenderItemInfo, FlatList, ListRenderItem, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import FONT from '../theme/Fonts';
import { useRepos } from '../hooks/useRepos';
import ListItem from './ListItem';
import { useCallback, useState } from "react"
import { RootStackParamList, Repo } from '../types/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { isValidSearchLength } from '../utils/helper';
import ListItemSkeleton from '../skeletons/ListItemSkeleton';
import useDebounce from '../hooks/useDebounce';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {

	const { repos, isFetching, fetchRepos, setIsFetching } = useRepos()

	const { debounce } = useDebounce();

	const searchRepo = (text: string) => {

		fetchRepos(text)
	}

	const [text, setText] = useState<string>("")

	const handleSearch = useCallback(debounce((inputVal: string) => searchRepo(inputVal), 300), []);



	const renderItem: ListRenderItem<Repo> = (info: ListRenderItemInfo<Repo>) => {

		if (isFetching) return <ListItemSkeleton />

		return <ListItem repo={info.item} navigate={(repo) => {
			navigation.navigate('Detail', {
				repo: repo
			});
		}} />
	}

	const renderList = () => {


		if (isValidSearchLength(text) && !isFetching && text && repos?.length == 0) return <Text style={styles.message} >
			No repos found
		</Text>


		return <FlatList
			data={isFetching ? Array(8) : repos}
			keyboardShouldPersistTaps='handled'
			showsVerticalScrollIndicator={false}
			renderItem={renderItem}
			keyExtractor={(item, index) => item ? `${item.id}` : `${index}`}
			style={{ height: "80%", marginHorizontal: 10 }}
			contentContainerStyle={{paddingBottom: 20}}
		/>

	}




	return (

		<SafeAreaView>
			<View style={{ height: "20%" }}>
				<View style={styles.headerContainer}>

					<Image source={require("../../assets/icon.png")} style={{ width: 50, height: 50 }} />

					<Text style={styles.title}>
						Github Search
					</Text>


				</View>

				<View style={styles.searchContainer}>

					<Ionicons name="ios-search" size={20} color="gray" />
					<TextInput
						value={text}
						style={styles.input}
						placeholder="Search a repo"
						onChange={({ nativeEvent }) => {
							let val = nativeEvent.text
							setText(val)
							if (!isValidSearchLength(val)) return

							if (val) {
								setIsFetching(true)
							}
							handleSearch(nativeEvent.text)
						}}
						clearButtonMode="while-editing" />

				</View>

			</View>


			{renderList()}





		</SafeAreaView>)

}



export default HomeScreen



const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: 10
	},
	title: {
		fontFamily: FONT.bold,
		fontSize: 16,
		marginHorizontal: 10
	},
	searchContainer:{
		display: "flex", 
		flexDirection: "row", 
		alignItems: "center", 
		borderColor: "gray",
		borderRadius: 10,
		borderWidth: 1,
		marginHorizontal: 10,
		marginTop: 10,
		paddingVertical: 8,
		paddingHorizontal: 12
	},
	input: {

		width: "90%",
		marginHorizontal: 10,
		
	},
	message: {
		fontFamily: FONT.medium,
		fontSize: 14,
		textAlign: "center",
		marginTop: 10,
		color: "gray",
		height: "80%"
	}
});