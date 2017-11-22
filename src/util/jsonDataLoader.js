const CACHE_NAME = '__j_cache'

export default {
	load(route) {
		//FOR DEBUGGING
		// return new Promise((resolve) => {
		// 	setTimeout(async () => {
		// 		resolve(await this._load(jsonPath))
		// 	}, 1500);
		// })
		return this._load(route)
	},
	
	async fetch(jsonPath) {
		let res = await fetch(jsonPath);
		let json = await res.json();
		return json;
	},
	
	async _load(route) {
		const jsonPath = this.getJsonPath(route);
		if (!this.isCached(jsonPath)) {
			try {
				this.getCache()[jsonPath] = await this.fetch(jsonPath);
			} catch(e) {
				console.error('there was an error loading route params',e, jsonPath);
			}
		}
		
		return this.loadFromCache(route);
	},
	
	getJsonPath(route) {
		return `${process.env.PUBLIC_URL}/data${route}.json`
	},
	
	isCached(route) {
		const jsonPath = this.getJsonPath(route);
		return Boolean(this.getCache()[jsonPath])
	},
	
	loadFromCache(route) {
		const jsonPath = this.getJsonPath(route);
		return this.getCache()[jsonPath];
	},
	
	getCache() {
		if (window) {
			if (!window[CACHE_NAME]) {
				window[CACHE_NAME] = {}
			}
			return window[CACHE_NAME];
		} else {
			return {};
		}
	}
}
