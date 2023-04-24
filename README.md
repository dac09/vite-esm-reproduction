Steps to view the issue:
`yarn install` ofcourse. And run `yarn rw dev` just to check everything is working!

This repo demonstrates why we need to build to Cjs at the moment. I do not think this is a problem with Vite, but instead that Redwood modules aren't ESM compatible.

1. Build the frontend: `yarn rw build`
This particular repo is configured **not** to use the `buildSsrCjsExternalHeuristics` flag.

2. Open `./web/dist/server` to verify that output is ESM
Note that its not using the usual Redwood plugin but a slightly modified version in `for-reproduction/redwoodVitePlugin.ts`

3. Try serving this code with: `node for-reproduction/startFeServer.mjs` 

4. Go to localhost:8910, and you should see this error on your console:
```
Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '/workspace/vite-esm-reproduction/node_modules/@redwoodjs/web/apollo' is not supported resolving ES modules imported from /workspace/vite-esm-reproduction/web/dist/server/entry-server.mjs
Did you mean to import @redwoodjs/web/apollo/index.js?
```
