export interface Podcast {
	title?: string,
	subtitle?: string,
	website?: string,
	lastUpdated?: Date,
	description?: string,
	language?: string,
	copyright?: string,
	owner?: {
		name: string,
		email: string
	},
	author?: string,
	explicit?: boolean,
	funding?: string,
	image?: string,
	category?: string[],
	episodes?: Episode[]
}

export interface Episode {
	title?: string,
	description?: string,
	image?: string,
	published?: Date,
	language?: string,
	audio?: {
		url: string,
		type: string,
		size: number
	},
	guid?: string,
	duration?: number,
	block?: boolean,
	explicit?: boolean
}