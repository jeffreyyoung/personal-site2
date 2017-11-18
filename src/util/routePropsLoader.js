export default {
	async load(jsonPath) {
		if (this.isCached(jsonPath)) {
			return this.loadFromCache(jsonPath);
		}
		
		try {
			let res = await fetch(jsonPath);
			let json = await res.json();
			return json;
		} catch(e) {
			console.error('there was an error loading route params',jsonPath);
		}
	},
	
	getJsonPath(route) {
		return `${process.env.PUBLIC_URL}/data${route}.json`
	},
	
	isCached(jsonPath) {
		return (window && window.__jCache && window.__jCache[jsonPath])
	},
	
	loadFromCache(jsonPath) {
		return window.__jCache[jsonPath];
	}
}
