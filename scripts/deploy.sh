#!/bin/bash

set -eu

REPO=https://github.com/sugarshin/sugarshin.net.git
COMMIT=$(git rev-parse --short HEAD)
node_modules/.bin/gh-pages -xt -m "Built artifacts of ${COMMIT} [ci skip]" -d build -r $REPO
