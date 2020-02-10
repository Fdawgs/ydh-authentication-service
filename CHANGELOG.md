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
