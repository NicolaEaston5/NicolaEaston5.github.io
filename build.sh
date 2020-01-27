#!/bin/bash
cd css
npx postcss *.css --use autoprefixer -d build/
