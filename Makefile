OUT_DIR = "dist"
OUT_OBJECT = $(OUT_DIR)/le-render

index.js = $(OUT_OBJECT)/index.js
index.d.ts = $(OUT_OBJECT)/index.d.ts

.PHONY: all

all: install build $(index.js) $(index.d.ts)

install:
	npm install

build:
	npx tsc

modules := \
	src/layoutElement.js \
	src/layoutParser.js \
	src/le-render.js \
	src/le-util.js \

d.ts := \
	src/layoutElement.d.ts \
	src/layoutParser.d.ts \
	src/le-render.d.ts \
	src/le-util.d.ts \

$(index.js): $(modules)
	mkdir -p $(OUT_OBJECT)
	mkdir -p $(OUT_OBJECT)/src
	cp index.js $@
	cp $^ $(OUT_OBJECT)/src
	cp package.json README.md LICENSE $(OUT_OBJECT)

$(index.d.ts): $(d.ts)
	cp index.d.ts $@
	cp $^ $(OUT_OBJECT)/src

clean:
	$(RM) -rf $(modules) $(d.ts) index.js index.d.ts