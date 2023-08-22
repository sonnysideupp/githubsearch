export interface Repo{
	id: number
	avatar_url: string
	url: string
	forks: number
	watchers: number 
	full_name: string
	description: string | null
	stars: number 
	language: string | null 
	owner: Owner | null
	languages_url: string
}


export type RootStackParamList = {
	Home: undefined;
	Detail: { repo: Repo };
  };

export interface Owner {
	id: number
	name: string | null
	login: string
	avatar_url: string
}