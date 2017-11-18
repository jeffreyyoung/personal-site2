const path = require('path');
const config = require('./initialProps');
const fs = require('fs');
function routesToFiles(config) {
	const destination = config.destination || './';
	config.routes.map(r => routeToFile('', r, destination))
}

async function routeToFile(routePathPrefix='', route, destination) {
	var currentRoute = routePathPrefix+route.path;
	console.log('PATH:', JSON.stringify(route), 'CURRENT ROUTE', currentRoute);
	console.log('------')
	if (route.getProps) {
		let props = await route.getProps(currentRoute);
		if (props) {
			//write to file
			writeJsonObjectToFile(props, destination+currentRoute+'.json');
		}
	}
	if (route.getChildRoutes) {
		let children = await route.getChildRoutes(currentRoute);
		children.forEach(childRoute => routeToFile(currentRoute, childRoute, destination));
	}
}

routesToFiles(config);

async function writeJsonObjectToFile(object, file) {
	return new Promise( (resolve, reject) => {
		//console.log('WRITING FILE', file);
		const str = JSON.stringify(object);
		ensureDirectoryExistence(file);
		fs.writeFile(file, str, (err) => {
			if (err) {
				reject(err);
			}
			resolve(true);
		}); 
	});
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
	//console.log('MAKING SURE DIRECTORY EXISTS');
	//console.log(dirname);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}