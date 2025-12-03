package main

type Album struct {
	Meta   AlbumMeta
	Tracks []Track
}

type AlbumMeta struct {
	Title       string
	Slug        string
	Artist      string
	Description string
	CoverImage  string
	Tags        []string
}

type Track struct {
	Title       string
	Year        int
	Length      int // length in seconds, rounded down to the nearest second
	Filename    string
	Description string
	IsMp3       bool
}
