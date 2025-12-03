.PHONY: all

all: bin/music-hall

public:
	mkdir -p public

bin/music-hall: public go/main.go go/tracks.go go/templates/index.tmpl
	go build -o bin/music-hall go/main.go
