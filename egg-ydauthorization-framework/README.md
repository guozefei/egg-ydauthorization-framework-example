# egg-ydauthorization-framework

youdao authorization eggegg-mysql, egg-passport-neteasecorp and egg-ydauthorization plugins framework based on egg-passport, egg-passport-neteasecorp, egg-ydauthorization

## QuickStart

```bash
$ npm install
$ npm test
```

publish your framework to npm, then change app's dependencies:

```js
// {app_root}/index.js
require('egg-ydauthorization-framework').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
});

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

