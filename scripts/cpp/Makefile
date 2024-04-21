EXECBIN := build/validate

SOURCES := $(wildcard src/*.cpp)
HEADERS := $(wildcard src/*.h)
OBJECTS := $(patsubst src/%.cpp,build/%.o,$(SOURCES))

CC 			:= g++
FORMAT 	:= clang-format -i -style=google

.PHONY: all format clean

all: $(EXECBIN)

$(EXECBIN): $(OBJECTS)
	$(CC) -o $@ $^

build/%.o: src/%.cpp | build
	$(CC) -c -o $@ $<

build: 
	mkdir -p $@

format: $(SOURCES) $(HEADERS)
	$(FORMAT) $^

clean:
	rm -rf build
