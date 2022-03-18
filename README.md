# Minimalistic React

An attempt to create the simplest project setup to start with react.
`npm run run` -> Runs a stupid ass webserver on port 8081 to serve static files
`npm run typeCheck` -> runs `tsc` on the React code
`npm run bundle` -> bundles typescript code into a single js file

*Note*: Please do not use the `listerner.js` in Production. It is extremely unsafe
and will probably get your computer nuked.

What does this setup do ? 

1. Type check typescript and JSX code using the typescript compiler.
2. Once type checks are successful we can compile it into JS and bundle it into a single JS file.
Step 1. is taken care of by `npm run typeCheck`
Step 2. is taken care of by `npm run bundle`, using `esbuild`

We set a callback for the `window.onload` to render our React app. 
window.onload triggers after all the DOM and the scripts are loaded, thus signaling that we
are ready to load our react app

The server runs on port 8081. Request for `/index.html` to see the app in action
