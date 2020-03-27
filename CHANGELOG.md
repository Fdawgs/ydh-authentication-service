## <small>3.3.4 (2020-03-27)</small>

-   tests(routes): add wilcard route test ([32e4f5e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/32e4f5e))
-   tests(server): remove superfluous console log ([3fae28b](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/3fae28b))
-   docs(routes): add missing jsdoc tag ([9f2f2bf](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/9f2f2bf))
-   refactor(routes): remove object init from argument ([8d12674](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/8d12674))
-   refactor(server): use nocache module as helmet.nocache is deprecated ([a0ec8d6](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/a0ec8d6))
-   build(deps-dev): bump jest from 25.1.0 to 25.2.3 ([2ede211](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/2ede211))
-   fix(routes): pass errors to next function ([6a3203a](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6a3203a))
-   fix(server): remove misuse of json serialization ([15ee8b2](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/15ee8b2))

## <small>3.3.3 (2020-03-25)</small>

-   fix(server): call nocache function directly due to change in helmet ([6a0663b](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6a0663b))
-   build(deps-dev): bump prettier from 2.0.1 to 2.0.2 ([a3139d6](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/a3139d6))
-   build(deps): bump helmet from 3.21.3 to 3.22.0 ([1b48fd2](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/1b48fd2))
-   build(deps): bump sanitize-middleware from 2.0.3 to 2.0.4 ([781a6fa](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/781a6fa))
-   ci(travis): run jobs using linux ([322ff11](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/322ff11))
-   docs(readme): update pm2 section to reflect auto restart changes ([392fb15](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/392fb15))
-   chore(pm2): remove need to manually restart upon config change ([cac584a](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/cac584a))

## <small>3.3.2 (2020-03-23)</small>

-   ci(travis): add release tags to branch safelist ([aca2ac4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/aca2ac4))
-   ci(travis): test osx ([ffff11d](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/ffff11d))
-   chore(package): add prettier call to changelog gen script ([d7a646b](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/d7a646b))
-   chore(package): use test-only script when testing ([5f8e8ff](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/5f8e8ff))
-   build(deps-dev): bump coveralls from 3.0.9 to 3.0.11 ([3ef6c9c](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/3ef6c9c))
-   build(deps-dev): bump eslint-config-prettier from 6.10.0 to 6.10.1 ([6b8211f](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6b8211f))
-   build(deps-dev): bump prettier from 1.19.1 to 2.0.1 ([0e35d6e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0e35d6e))
-   build(deps): bump sanitize-middleware from 2.0.1 to 2.0.3 ([074d709](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/074d709))
-   build(deps): update dependencies ([959bb03](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/959bb03))
-   tests(server): refactor header setting for mock mirth connect server ([17800d3](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/17800d3))
-   tests(server): remove superfluous console logs ([3664eed](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/3664eed))
-   style(server): add whitespace to increase readability ([0860611](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0860611))
-   fix(server): add deep cloning when assigning config param ([081b57e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/081b57e))
-   docs(utils): correct return jsdoc tag ([c92d032](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c92d032))

## <small>3.3.1 (2020-03-17)</small>

-   style(config): add whitespace ([b7dc60d](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b7dc60d))
-   fix(routes): remove cors headers from get response ([11c7d42](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/11c7d42))
-   fix(routes): remove preflight headers, add allow header ([123bfec](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/123bfec))
-   fix(tests): remove expected cors headers ([c3852a2](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c3852a2))
-   tests(server): add tests for options requests ([0c78186](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0c78186))
-   refactor(config): add spacing to allowedHeaders property ([6ae97c4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6ae97c4))

## 3.3.0 (2020-03-16)

-   tests(server): update tests to expect new cors headers ([e1a7ac9](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/e1a7ac9))
-   feat(server): add cors middleware ([b088cf4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b088cf4))
-   refactor(server): remove redundant error handler ([c0b810b](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c0b810b))

## <small>3.2.4 (2020-03-16)</small>

-   build(deps-dev): bump eslint-plugin-json from 2.1.0 to 2.1.1 ([d71ae09](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/d71ae09))
-   build(deps): bump sanitize-middleware from 1.0.1 to 2.0.0 ([7260bf8](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/7260bf8))
-   build(deps): bump sanitize-middleware from 2.0.0 to 2.0.1 ([7a576b3](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/7a576b3))
-   chore: update dependencies ([f41a341](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/f41a341))
-   style: rename main file to index from app ([902d776](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/902d776))

## <small>3.2.3 (2020-03-12)</small>

-   chore: update lockfile ([ecae517](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/ecae517))
-   docs(readme): remove redundant sentence regarding pm2 service ([750172b](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/750172b))

## <small>3.2.2 (2020-03-10)</small>

-   docs(readme): change example call to curl request ([bc95761](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/bc95761))
-   docs(readme): clarify pm2 usage ([b8447c2](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b8447c2))
-   chore: update lockfile ([05cfd4a](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/05cfd4a))
-   build(deps-dev): bump eslint-plugin-jest from 23.8.1 to 23.8.2 ([a838feb](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/a838feb))
-   build(deps): bump cross-env from 7.0.0 to 7.0.1 ([8910bbe](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/8910bbe))
-   build(deps): bump cross-env from 7.0.1 to 7.0.2 ([b26b1cd](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b26b1cd))
-   build(deps): bump sanitize-middleware from 1.0.0 to 1.0.1 ([c21a901](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c21a901))
-   build(deps): move cross-env to dev dependencies ([49126c4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/49126c4))

## <small>3.2.1 (2020-03-02)</small>

-   refactor(middleware): move sanitization middleware to own module ([1540844](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/1540844))
-   build(deps-dev): bump eslint-plugin-jest from 23.8.0 to 23.8.1 ([cd5043e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/cd5043e))
-   build(deps-dev): bump typescript from 3.8.2 to 3.8.3 ([6738278](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6738278))

## 3.2.0 (2020-02-26)

-   chore: remove watch options ([e704cbe](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/e704cbe))
-   chore(deps): remove redundant winser dependency ([cea9098](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/cea9098))
-   chore(package): remove winser scripts ([46c3cbc](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/46c3cbc))
-   docs(readme): add pm2 windows service steps ([a8407b0](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/a8407b0))
-   docs(readme): remove winser steps ([d337b7d](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/d337b7d))
-   refactor(middleware): return entire error rather than just message ([331dcb3](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/331dcb3))
-   feat(server): add basic error handling ([be63d7f](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/be63d7f))

## 3.1.0 (2020-02-25)

-   fix(server): remove console log from configurePassport function ([f372f21](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/f372f21))
-   chore: add options to pm2 config ([b40014a](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b40014a))
-   chore(utils): rename bearer util ([5c1ee31](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/5c1ee31))
-   feat(middleware): add sanitize middleware ([b07d621](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b07d621))
-   build(deps): bump helmet from 3.21.2 to 3.21.3 ([3c4fac9](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/3c4fac9))

## <small>3.0.3 (2020-02-24)</small>

-   chore: convert pm2 config file from yml to js ([db47569](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/db47569))
-   build(deps-dev): bump eslint-plugin-jest from 23.7.0 to 23.8.0 ([66a3534](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/66a3534))
-   build(deps-dev): bump eslint-plugin-json from 2.0.1 to 2.1.0 ([48a650d](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/48a650d))
-   build(deps-dev): bump typescript from 3.7.5 to 3.8.2 ([a1bb84f](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/a1bb84f))
-   docs(readme): add additional install steps for pm2 ([0bdf506](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0bdf506))
-   docs(readme): change process manager link ([405623f](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/405623f))

## <small>3.0.2 (2020-02-19)</small>

-   docs(readme): add pm2 deployment section ([f6292a6](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/f6292a6))
-   docs(readme): add reference to process managers for deployment ([b4f2dae](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b4f2dae))
-   chore: add pm2 config file ([2a6671c](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/2a6671c))
-   chore(changelog): spell check ([b5101ed](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b5101ed))
-   chore(config): add comment for example cert path ([c62808c](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c62808c))
-   chore(deps): update lock file ([43895bb](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/43895bb))
-   chore(gitignore): remove ssl_certs from list ([d398eb9](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/d398eb9))
-   chore(prettierignore): add comment ([0cc431a](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0cc431a))
-   build(deps): bump express-winston from 4.0.2 to 4.0.3 ([4338426](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/4338426))

## <small>3.0.1 (2020-02-12)</small>

-   chore(server): remove name key from defaultConfig ([b458836](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b458836))
-   style(server): alphabetically sort imports ([168bd92](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/168bd92))
-   refactor(server): use name key value from package.json ([f221bc4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/f221bc4))
-   fix(app): remove param from listen function ([fb1d92e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/fb1d92e))
-   build(deps): bump request from 2.88.0 to 2.88.2 ([6e5efc1](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6e5efc1))

## 3.0.0 (2020-02-10)

-   chore: format code style ([601b29f](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/601b29f))
-   chore(config): set x-frame-options to deny ([9471ca3](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/9471ca3))
-   chore(middleware): remove redundant auth-header middleware ([3d7ccf8](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/3d7ccf8))
-   refactor(routes): move sanitization step to own util function ([93c85ef](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/93c85ef))
-   refactor(server): move bearer token authentication to util function ([6e24081](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6e24081))
-   refactor(server): remove port param from listen function ([5119d83](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/5119d83))
-   refactor(server): rename configureAuthorization function ([c5a53c0](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c5a53c0))
-   refactor(server): use passportjs middleware for authentication ([a184da7](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/a184da7))
-   build(deps-dev): bump eslint-plugin-jest from 23.6.0 to 23.7.0 ([5c987fb](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/5c987fb))
-   feat(auth): move auth options to config file ([f94669f](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/f94669f))
-   feat(routes): add check for missing config values ([e2cfa51](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/e2cfa51))
-   feat(routes): move routing options to config file ([7de0cbe](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/7de0cbe))
-   feat(server): add ability for listen function to use env port ([7e9040c](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/7e9040c))
-   test(auth): add test for missing config files ([67353d8](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/67353d8))
-   test(server): update expect x-frame-options to deny ([fc277a0](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/fc277a0))

### BREAKING CHANGE

-   `authConfig` object has been removed from config file, contents moved to `serverConfig.auth.apiKeys`
-   `listener_url` key in config file move to new `routing` object in file
-   `port` param for listen function of Server class removed

## <small>2.3.1 (2020-02-05)</small>

-   fix(package): remove cross-env from winser scripts ([248e9ea](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/248e9ea))

## 2.3.0 (2020-02-03)

-   docs: refine test example ([81993ed](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/81993ed))
-   docs(contributing): punctuation fixes ([600bb7e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/600bb7e))
-   docs(routes): update jsdoc return tag ([0ad0c11](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0ad0c11))
-   docs(server): uppercase first letter of comment ([ef05fe4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/ef05fe4))
-   build(deps-dev): bump eslint-plugin-import from 2.20.0 to 2.20.1 ([c14297e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c14297e))
-   build(deps): make cross-env dep rather than devdep ([b181276](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/b181276))
-   build(scripts): change node_env to test for test scripts ([7fa75da](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/7fa75da))
-   fix(routes): remove slashes from param blacklist ([7538636](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/7538636))
-   feat(routes): add sanitization step ([771e10b](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/771e10b))
-   feat(routes): add simple error handling ([ee709d4](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/ee709d4))
-   bug(server): remove reassigning config values ([0a2a282](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0a2a282))
-   refactor(server): move routing to own router instance ([2b38804](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/2b38804))
-   perf: set node_env variable for nodemon ([d67c987](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/d67c987))
-   perf: set node_env variables for test and production ([d867a9a](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/d867a9a))
-   chore(eslint): remove redundant rules ([9af0267](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/9af0267))

### BREAKING CHANGE

-   refactor to use separate router instances. configureRoute Server function replaced with configureRoutes

## <small>2.2.8 (2020-01-28)</small>

-   docs: add contributing guide ([137cb82](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/137cb82))
-   docs: declare yarn a non-optional prerequisite ([70b3021](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/70b3021))
-   docs: revise section order ([77d9dc3](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/77d9dc3))
-   docs(readme): add contributing section ([9433586](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/9433586))
-   docs(readme): grammatical fixes and minor corrections ([1b32492](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/1b32492))
-   docs(readme): move test section to contributing file ([1d704fa](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/1d704fa))
-   docs(readme): remove reference to npm ([25ad8bf](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/25ad8bf))
-   Bump eslint-config-prettier from 6.9.0 to 6.10.0 ([31dfeeb](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/31dfeeb))
-   Bump eslint-plugin-import from 2.19.1 to 2.20.0 ([4ebc836](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/4ebc836))
-   Bump eslint-plugin-jest from 23.3.0 to 23.6.0 ([603c381](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/603c381))
-   Bump jest from 24.9.0 to 25.1.0 ([0c61ac8](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/0c61ac8))
-   Bump typescript from 3.7.4 to 3.7.5 ([074381c](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/074381c))
-   Bump winston-daily-rotate-file from 4.4.1 to 4.4.2 ([592ae2c](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/592ae2c))
-   Update dependencies ([93ea4e3](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/93ea4e3))
-   chore: add prettierignore file ([c9c22fc](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/c9c22fc))
-   chore(package): remove redundant config values ([42917fc](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/42917fc))
-   style: add whitespace ([5b0162e](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/5b0162e))
-   ci(travis): fix build config ([14a4d18](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/14a4d18))
-   feat: add changelog generation ([6789224](https://github.com/Fdawgs/ydh-sider-authentication-service/commit/6789224))
