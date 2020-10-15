# Compile typescript for deployment
Since typescript we need to compile to JS with: 

terminal > `npm run build`

see functions/package.json scripts

# Debugging Firebase Functions in VS Code
 Google Cloud Emulator requires node v6.11.5 as of 4/17/2018 (check w/ terminal> 'node -v')
 https://stackoverflow.com/questions/45920014/functions-debugging-in-vs-code
 https://github.com/GoogleCloudPlatform/cloud-functions-emulator/wiki/Debugging-with-Visual-Studio-Code

 Example terminal commands to debug:
 step 1: 'use tsc to build functions (each source code update requires a new emulator deployment)'
 step 1: > functions start
 step 2: > functions deploy api --trigger-http
 step 3: > functions debug api
 step 3: 'set break point and attach process to port 5858, see .vscode/launch.json'


# Watch development video
https://www.youtube.com/watch?v=LOeioOKUKI8

# Error on deployment with $RESOURCE_DIR
https://github.com/firebase/firebase-tools/issues/610
Fix: Edit firebase.json and replace $RESOURCE_DIR with functions.

# Development firebase-function emulator
1. Emulate both functions and hosting

terminal > `firebase serve --only functions,hosting`
IMPORTANT: if the functions/lib folder is not present you must 
use 'tsc' or 'tsc -w' from the 'functions/' root directory
to compile out the initial .js files to serve in the firebase emulator

2. Watch function for changes and recompile
TODO: add vscode debug configuration to automate the following steps

STEP 1:
terminal 1 > `tsc -w` (watches for changes to typescript)

STEP 2:
terminal 2 > `firebase serve --only functions` (emulates firebase functions)

# Deployment 
terminal > `firebase deploy`

# Naming functions and firebase.json rewrites
## IMPORTANT: for development & deployment
```json
"rewrites": [
    {
 the rewrites ORDER MATTERS
        "source": "/test",
        "function": "hello"
    },
    {
 Since order maters "source": "**" must come last
        "source": "**",
	    "destination": "/index.html"
    }
]
```

## Deployment Checklist:
1. Compile Firebase Functions from TS to JS see above 'Compile typescript for deployment'
2. remove 'localhost' from recaptcha domains (only used in development)
https://www.google.com/recaptcha/admin