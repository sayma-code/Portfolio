install gh-page - npm i gh-pages --save-dev
adding homepage - "homepage": "https://sayma-code.github.io/Portfolio",
add these in script - "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

npm run deploy