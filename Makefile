#Makefile
install:
	npm install
start:
	node dist
lint:
	npm run eslint .
build:
	rm -rf dist
	npm run build
test:
	npm test
watch-test:
	npm run test -- --watchAll
