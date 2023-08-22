import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Repo } from '../types/types';
import FONT from '../theme/Fonts';
import { formatNumber } from '../utils/helper';
import { Ionicons } from '@expo/vector-icons';
import AppColor from '../theme/Colors';
interface Props {
	repo: Repo;
	navigate: (repo: Repo) => void;
}

const ListItem = ({ repo, navigate }: Props) => {



	return (

		<TouchableOpacity onPress={() => navigate(repo)} style={styles.container}>

			<View style={styles.imageContainer}>

				<View style={styles.row}>
					<Image source={{ uri: repo.owner?.avatar_url }} style={styles.image} />

					<Text numberOfLines={2} adjustsFontSizeToFit={true} style={styles.name}>
						{repo.full_name}
					</Text>
				</View>
				<View style={styles.row}>
				<Text style={styles.starsText}>
					{`${formatNumber(repo.stars)}`}
				</Text>

				<Ionicons name="ios-star" size={18} color="orange" style={{marginRight: 8}} />

				</View>
				



			</View>
			<Text  numberOfLines={2} style={styles.description}>
				{repo.description}
			</Text>
		</TouchableOpacity>)
}



export default ListItem 



const styles = StyleSheet.create({
	starsText:{
		marginRight: 2, 
		lineHeight: 20, 
		fontFamily: FONT.medium, 
		fontSize: 12
	},
	container: { 
		height: 80, 
		marginTop: 15, 
		display: "flex", 
		flexDirection: "column", 
		alignItems: "flex-start", 
		borderColor: "gray", 
		borderWidth: 1, 
		borderRadius: 10, 
		overflow: "hidden"},
	imageContainer: { 
		display: "flex", 
		flexDirection: "row",
		 alignItems: "center", 
		 justifyContent: "space-between", 
		 width: "100%" },
	image: {
		width: 30, 
		height: 30, 
		borderRadius: 5, 
		margin: 5},
	name: {
		fontFamily: FONT.medium, 
		fontSize: 14, 
		color: AppColor.secondary, 
		textDecorationLine: "underline", 
		marginLeft: 4, 
		maxWidth: 260},
	row: {
		display: "flex", 
		flexDirection: "row",
		alignItems: "center" 
	},
	message:{
		fontFamily: FONT.medium,
		fontSize: 14,
		textAlign: "center",
		marginTop: 10,
		color: "gray"
	},
	description:{
		marginHorizontal: 5, 
		marginBottom: 5, 
		fontFamily: FONT.regular, 
		fontSize: 12
	}
});