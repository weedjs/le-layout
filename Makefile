OUT_DIR = "dist"
OUT_OBJECT = $(OUT_DIR)/le-render

index.js = $(OUT_DIR)/index.js

.PHONY: all

all: build $(index.js)

build:
	npx tsc

modules := \
	src/layoutElement.js \
	src/layoutParser.js \
	src/le-render.js

$(index.js): $(modules)
	mkdir -p $(OUT_OBJECT)
	mkdir -p $(OUT_OBJECT)/src
	mv index.js $@
	mv $^ $(OUT_OBJECT)/src

clean:
	$(RM) -rf $(OUT_DIR)