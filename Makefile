#Makefile
install:
	npm install
start:
	NODE_ENV=development node dist
prod:
	node dist
lint:
	npm run eslint --  --ext js --ext jsx .
build:
	npm run build
develop:
	NODE_ENV=development npm run build
test:
	npm run test
watch-test:
	npm run test -- --watchAll
