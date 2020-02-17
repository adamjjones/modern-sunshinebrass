#!/bin/bash

cd ClientApp
npm run build
rsync --progress -r build/* adam@timjones.com:/home/tim/sites/sunshinebrass.com

