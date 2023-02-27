---
layout: page
title: Contributions
permalink: /contributions
nav_order: 3
---

# Contributions

## How to contribute
One great thing about Jekyll is that it hosts [Markdown](https://www.markdownguide.org/getting-started/) files. This means that you can contribute to this project without needing to know any HTML or CSS. If you have a library of any size of interesting works on Marxism, you can contribute to this project by converting them to markdown and submitting a pull request. Most types of text file can be converted to markdown using a [markdown converter](https://codebeautify.org/html-to-markdown), [pandoc](https://pandoc.org/), or commands like ```sed``` and ```find``` are capable of batch converting files if you're comfortable with scripting. My workflow for setting this up initially has been to ```wget -mpE -w .5 --limit-rate=500k -r --level=2  https://www.marxists.org/archive/your-category-here (initial section was: arvhive/marx/works/sw/progress-publishers/one-volume.htm)```, then convert the .htm files to .md using pandoc, and then manually edit the files to add the front matter and fix any formatting issues.

### A note on that wget command used for marxists.org downloads
The ```-m``` flag tells wget to mirror the site, ```-p``` tells wget to download all the files it needs to display the site (ie, css and static images, though I've not yet incorporated these into mia-reader so feel free to submit without assets), ```-E``` tells wget to convert links to local files,```-w .5``` tells wget to wait half a second between requests, ```--limit-rate=500k``` tells wget to limit the download rate to 500k so the mia admins don't think we're DDoSing them, ```-r``` tells wget to recursively download the site, and ```--level=2``` tells it to only download two levels deep. The ```--level=2``` flag is important because the archive is structured in such a way that makes it quite easy to download the entire archive, but not structured in a way that makes it easy to download a singlular work. You can also make use of the ```--no-parent``` flag to prevent wget from crawling up the directory tree and downloading the entire archive.

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
The front matter for the contributions page looks like this:
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
```

### Markdown Layout
While I've not enforced a standard layout (and the archive uses a staggering many, many different layouts), a generally correct manner to present a book or chapter well is with proper paragraph breaks, markdown ```##``` headers for chapter and section titles, and markdown ```>``` quotes for quotations. The [Markdown Guide](https://www.markdownguide.org/getting-started/) is a good resource for learning how to use markdown.


