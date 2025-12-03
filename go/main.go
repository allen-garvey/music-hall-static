package main

import (
	_ "embed"
	"fmt"
	"html/template"
	"os"
	"path"
	"path/filepath"
)

//go:embed "templates/index.tmpl"
var homePageTemplate string

func main() {
	homeTemplate, err := template.New("home").Parse(homePageTemplate)

	if err != nil {
		fmt.Fprintln(os.Stderr, "Unable to parse home template")
		panic(err)
	}

	executable, err := os.Executable()
	if err != nil {
		fmt.Fprintln(os.Stderr, "Unable to get executable directory.")
		fmt.Fprintln(os.Stderr, err)
		panic(err)
	}

	publicDirectoryPath := path.Join(filepath.Dir(executable), "..", "public")

	indexOutputPath := path.Join(publicDirectoryPath, "index.html")
	indexOutputWriter, err := os.Create(indexOutputPath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to open home template writer for %s.\n", indexOutputPath)
		fmt.Fprintln(os.Stderr, err)
	}
	defer indexOutputWriter.Close()

	err = homeTemplate.ExecuteTemplate(indexOutputWriter, "home", []string{})

	if err != nil {
		fmt.Fprintln(os.Stderr, "Unable to execute home template.")
		fmt.Fprintln(os.Stderr, err)
	}
}
