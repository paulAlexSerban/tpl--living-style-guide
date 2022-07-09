#!bin/bash
cd $(dirname $0) # makes sure the folder containing the script will be the root folder

echo "🔍  Lint Frontend Living Style Guide"
npm --prefix ../frontend/living-style-guide run lint