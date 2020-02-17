#!/bin/bash

cd ClientApp
npm run build
rsync --progress -r build/* adam@timjones.com:/home/adam/sites/sunshinebrass.com

