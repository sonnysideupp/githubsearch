import { useState, useEffect } from "react";
import { Repo, Owner } from "../types/types";
import axios from "axios"



export const useRepoLanguages = (url: string) => {


	const [languages, setLanguages] = useState<string[]>([])
	const [isFetching, setIsFetching] = useState<boolean>(false)



	useEffect(() => {
		async function fetchData(){
			try{

				setIsFetching(true)
		
			
		
				const options = {
					method: "GET",
					url: url,
					headers: {
						"Authorization": `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
						"X-GitHub-Api-Version": "2022-11-28",
						"Accept": "application/vnd.github+json"
					},
				};
				const response = await axios.request(options);
		
				let items = response.data

				console.log("lang items", items)

				let array = Object.keys(items)
		
				setLanguages(array.length > 0 ? array : ["None listed"])
				}catch(error){
					console.log("error", error)
		
				}finally{
		
				setIsFetching(false)
				}
		}

		fetchData()

	},[])

	return {languages, isFetching}
}