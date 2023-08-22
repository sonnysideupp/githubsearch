import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleProp, ViewStyle} from 'react-native';
import FONT from '../theme/Fonts';



interface Props {
	onPress?: () => void;
	text: string;
	width: number;
	textColor: string;
	backgroundColor: string;
	style?: StyleProp<ViewStyle>;
  }



const Button = ({onPress, text, width, textColor = "white", backgroundColor, style}: Props) => {

	


	return(
	<TouchableOpacity onPress={onPress} style={[{ shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 1 ,
    shadowOffset : { width: 4, height: 4}, width: width, backgroundColor: backgroundColor, borderColor: "black", borderWidth: 2}, style]}>

		<Text style={{fontFamily: FONT.medium, color: textColor, paddingVertical: 6, textAlign: "center"}}>
			{text}
		</Text>



	</TouchableOpacity>)


}


export default Button