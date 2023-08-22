import { useState, useEffect } from "react";
import { Repo, Owner } from "../types/types";
import axios from "axios";

export const useRepos = () => {

	const [repos, setRepos] = useState<Repo[] | null>([])
	const [isFetching, setIsFetching] = useState<boolean>(false)


	

	const fetchRepos = async (query: string) => {


		if(!query){
			setRepos([])
		}

		try{

		setIsFetching(true)

		
		let url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=10&sort=stars`
	

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

		//console.log("url", url)

		let items = response.data.items
		
		let array: Repo[] = []
		for (const item of items){
			
			let owner: Owner | null =  item.owner ? {
				id: item.owner.id,
				name: item.owner.name,
				login: item.owner.login,
				avatar_url: item.owner.avatar_url
			} : null
			let repo: Repo = {
				id: item.id,
				avatar_url: item.avatar_url,
				url: item.html_url,
				forks: item.forks_count,
				watchers: item.watchers_count, 
				full_name: item.full_name,
				description: item.description,
				stars: item.stargazers_count,
				language: item.language,
				languages_url: item.languages_url,
				owner: owner

			}
			array.push(repo)
		}

		setRepos(array)
		}catch(error){
			console.log("error", error)
			

		}finally{

		setIsFetching(false)
		}

	}


	return {isFetching, repos, fetchRepos, setIsFetching}


}