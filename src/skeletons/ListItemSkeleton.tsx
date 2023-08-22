import {Skeleton, VStack, HStack} from "native-base"



const ListItemSkeleton = () => {



	return(
	<VStack height={"75"} mt={"15"} px={1} >

		<HStack alignItems="center" space="2">
			<Skeleton size="30" rounded="5"  />

			<Skeleton.Text lines={1} h="3"  width={"150"}  />
		</HStack>

		<Skeleton.Text lines={1} h="3" mt={"2"} mb={"2"} />


	</VStack>)
	
}




export default ListItemSkeleton