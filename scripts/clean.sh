#!/bin/bash
#Clean the 11ty build directory

ln dist/.gitkeep ./
rm -rf dist
mkdir -p dist
mv .gitkeep dist/