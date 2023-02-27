---
layout: page
title: Contributing
permalink: /contributing
nav_order: 3
---

# How to contribute
Contributions are very welcome! Thanks for your interest in contributing to mia-reader. Volunteer contributions are the lifeblood of open source projects, and mia-reader is no exception. If you're interested in contributing, please read the following guidelines. This guide mostly focuses on expanding the archive - if you're interested in contributing to the codebase, feel free to reach out to me via [email](mailto:victoria.022@proton.me) or [twitter](https://twitter.com/victoriaposting) or github issues.

One great thing about Jekyll is that it hosts [Markdown](https://www.markdownguide.org/getting-started/) files. This means that you can contribute to this project without needing to know any programming or advanced technical skills. A markdown file is a text file with light formatting rules saved with a .md or .markdown extension. If you have a library of any size of interesting works on marxism, communism, imperialism, etc, you can contribute to this project by converting them to markdown and submitting a pull request, or opening an issue (for example, to request the next section of [mia](https:www.marxists.org) to be mirrored). Most types of text file can be converted to markdown using a [markdown converter](https://codebeautify.org/html-to-markdown), [pandoc](https://pandoc.org/), or commands like ```sed``` and ```find``` are capable of batch converting files if you're comfortable with scripting. My workflow for setting this up initially has been to ```wget -mpE -w .5 --limit-rate=500k -r --level=2  https://www.marxists.org/archive/your-category-here (initial section was: arvhive/marx/works/sw/progress-publishers/one-volume.htm)```, then convert the .htm files to .md using pandoc, and then manually edit the files to add the front matter and fix any formatting issues. 



### A note on that wget command used for marxists.org downloads
The ```-m``` flag tells wget to mirror the site, ```-p``` tells wget to download all the files it needs to display the site (ie, css and static images, though I've not yet incorporated these into mia-reader so feel free to submit without assets), ```-E``` tells wget to convert links to local files,```-w .5``` tells wget to wait half a second between requests, ```--limit-rate=500k``` tells wget to limit the download rate to 500k so the mia admins don't think we're DDoSing them, though I haven't had problems running without this command (which helps a lot with downloading any .pdfs in your archive section) ```-r``` tells wget to recursively download the site, and ```--level=2``` tells it to only download two levels deep. The ```--level=2``` flag is important because the archive is structured in such a way that makes it quite easy to download the entire archive, but not structured in a way that makes it easy to download a singlular work. You can also make use of the ```--no-parent``` flag to prevent wget from crawling up the directory tree and downloading the entire archive. Appropriate use of ```--level and --no-parent``` will allow you to download a single work, or a single category of works, or a single author's works, etc.

### Pandoc/bash command for converting .htm files to .md
The following command will recursively search the current directory for .htm files and convert them to .md files. This is useful if you've downloaded a whole category of works from marxists.org and want to convert them all to markdown.
```
find ./ -iname "*.htm" -type f -exec sh -c 'pandoc "${0}" -o "${0%.*}.md"' {} \;
```

## Front matter
The front matter is a set of key-value pairs that tell Jekyll how to render the page. The front matter is contained within a pair of ```---``` lines at the top of the file. The front matter is used to tell Jekyll what layout to use, what the title of the page should be, what the permalink should be, and what order the page should appear in the navigation. The front matter for the Marx & Engels page looks like this:
```
---
layout: page
title: Marx & Engels Selected Works
permalink: /marx-engels-selected-works/
nav_order: 2
has_children: true
---
```
While the front matter for the contributions page looks like this:
```
---
layout: page
title: Contributions
permalink: /contributions
nav_order: 3
---
```
to be clear, the best way to submit your work with front matter would be, at a minimum,to follow the format of:
```
---
layout: page
title: title of the markdown file that is one page
---
```
### Optional front matter flags:

- has_children: true (if you have multiple pages, the top level page should have this, which allows the subpages or chapters to be listed in the sidebar)
- nav_order: # (this is the order the page will appear in the sidebar - 
only use this if you have multiple pages to define the chapters/subpages of your index/contents page)
- dont worry about:
    - permalink: (I'll set this up if needed)

### Bash & ```sed``` script for adding front matter to .md files
```
#!/usr/bin/env bash
# This script is used to generate the front matter for fresh markdown files without any.
# Victoria Barnett | victoriabarnett.codes | @victoriaposting

for file in $(find . -type f -name "*.md"); do
    if [[ $(head -n 1 "$file") != "---" ]]; then
        # Print the file name
        echo "$file"

        # Add front matter to the top of the file
        sed -i '1i ---' "$file"
        sed -i '2i layout: default' "$file"
        sed -i '3i title: ' "$file"
        sed -i '4i ---' "$file"
    fi
done
```

## Markdown Layout
While I've not enforced a standard layout (and the archive uses a staggering many, many different layouts), a generally correct manner to present a book or chapter well is with proper paragraph breaks, markdown ```##``` headers for chapter and section titles, and markdown ```>``` quotes for quotations. The [Markdown Guide](https://www.markdownguide.org/getting-started/) is a good resource for learning how to use markdown. If you're uploading a book or article that has a table of contents or is using a box of some sort for navigation (as many books on marxists.org do), you can use a markdown table like this:
```
| [Link to Previous](previous-page.md) | [Link to Next](next-page.md) |

longer tables for TOC:

| TOC | Link |
|---|---|
| Chapter Name | [Link to Chapter](next-page.md) |
```
which will render as:

| [Link to Previous]() | [Link to Next]()|

and:

| Table Of Contents | Link |
|---|---|
| Chapter Name | [Link to Chapter]() |

## Submitting your work
Once you have beautiful markdown files you want to add to the site or a request for the next section of mia or another archive mia-reader should mirror, submit a [pull request](https://www.github.com/victoria-riley-barnett/mia-reader/pulls) or an [issue request](https://www.github.com/victoria-riley-barnett/mia-reader/issues).

