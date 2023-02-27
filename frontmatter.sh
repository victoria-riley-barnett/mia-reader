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
