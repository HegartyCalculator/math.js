PACKAGE_VERSION=$(shell node -p -e "require('./package.json').version")

$(info version is $(PACKAGE_VERSION))

build:
	./node_modules/.bin/browserify math.js --standalone math > out/math-$(PACKAGE_VERSION).js

minify: build
	./node_modules/.bin/uglifyjs --mangle --beautify ascii_only=true,beautify=false out/math-$(PACKAGE_VERSION).js > out/math-$(PACKAGE_VERSION).min.js