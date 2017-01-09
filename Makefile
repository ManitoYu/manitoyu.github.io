dev:
	NODE_ENV=development node server.js

bundle:
	NODE_ENV=production webpack -p
	
