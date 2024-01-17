install:
	npm install

compile:
	sass app/assets/styles/index.scss app/assets/styles/index.css
	node_modules/.bin/stylelint app/**/*.scss lint --fix

lint:
	node_modules/.bin/stylelint app/**/*.scss lint --fix

local:
	gulp

build:
	gulp build