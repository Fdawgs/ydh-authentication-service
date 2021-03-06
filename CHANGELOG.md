## 6.3.0 (2020-12-02)

-   feat(config): allow log rotation to be customised; tidy env template ([48bbd80](https://github.com/Fdawgs/ydh-authentication-service/commit/48bbd80))
-   build(deps-dev): bump prettier from 2.2.0 to 2.2.1 ([c468e82](https://github.com/Fdawgs/ydh-authentication-service/commit/c468e82))
-   build(deps): bump sanitize-middleware from 4.0.0 to 4.0.1 ([16bf711](https://github.com/Fdawgs/ydh-authentication-service/commit/16bf711))
-   docs: update example env template ([f2046b5](https://github.com/Fdawgs/ydh-authentication-service/commit/f2046b5))
-   docs(security): remove backticks ([8818677](https://github.com/Fdawgs/ydh-authentication-service/commit/8818677))
-   chore: add security.md ([a9df235](https://github.com/Fdawgs/ydh-authentication-service/commit/a9df235))

## <small>6.2.5 (2020-11-24)</small>

-   Revert "fix(routes): protect all request types with bearer token authentication" ([3db6018](https://github.com/Fdawgs/ydh-authentication-service/commit/3db6018))

## <small>6.2.4 (2020-11-24)</small>

-   build(deps-dev): bump dev dependencies ([2d6b921](https://github.com/Fdawgs/ydh-authentication-service/commit/2d6b921))
-   fix(routes): protect all request types with bearer token authentication ([1136082](https://github.com/Fdawgs/ydh-authentication-service/commit/1136082))
-   ci: add aggregate coverage calculations ([a081517](https://github.com/Fdawgs/ydh-authentication-service/commit/a081517))
-   ci: clean up config ([9d9fbec](https://github.com/Fdawgs/ydh-authentication-service/commit/9d9fbec))
-   ci: replace travis-ci with github actions ([48facad](https://github.com/Fdawgs/ydh-authentication-service/commit/48facad))
-   style: fix build name ([6f3011d](https://github.com/Fdawgs/ydh-authentication-service/commit/6f3011d))
-   style: format codeql.yml ([7f902ee](https://github.com/Fdawgs/ydh-authentication-service/commit/7f902ee))

## <small>6.2.3 (2020-11-02)</small>

-   build(deps-dev): bump jest from 26.6.1 to 26.6.2 ([1928a6e](https://github.com/Fdawgs/ydh-authentication-service/commit/1928a6e))
-   build(deps): bump helmet from 4.1.1 to 4.2.0 ([dcd2a90](https://github.com/Fdawgs/ydh-authentication-service/commit/dcd2a90))
-   build(deps): bump sanitize-middleware from 3.1.0 to 4.0.0 ([2a0d217](https://github.com/Fdawgs/ydh-authentication-service/commit/2a0d217))

## <small>6.2.2 (2020-11-01)</small>

-   build(deps-dev): bump dev dependencies ([19da49b](https://github.com/Fdawgs/ydh-authentication-service/commit/19da49b))
-   build(deps): bump axios from 0.20.0 to 0.21.0 ([d767731](https://github.com/Fdawgs/ydh-authentication-service/commit/d767731))
-   build(deps): bump jwks-rsa from 1.10.1 to 1.11.0 ([eb1a861](https://github.com/Fdawgs/ydh-authentication-service/commit/eb1a861))
-   build(deps): bump sanitize-middleware from 2.0.20 to 3.1.0 ([c680b3c](https://github.com/Fdawgs/ydh-authentication-service/commit/c680b3c))

## <small>6.2.1 (2020-10-19)</small>

-   build: create codeql-analysis.yml workflow file ([a3ffddd](https://github.com/Fdawgs/ydh-authentication-service/commit/a3ffddd))
-   build(deps-dev): bump dev dependencies ([2850ef3](https://github.com/Fdawgs/ydh-authentication-service/commit/2850ef3))
-   build(deps): bump sanitize-middleware from 2.0.19 to 2.0.20 ([abe8afb](https://github.com/Fdawgs/ydh-authentication-service/commit/abe8afb))
-   build(docker): restrict mapped ports to localhost ([bda5f29](https://github.com/Fdawgs/ydh-authentication-service/commit/bda5f29))
-   build(docker): update system and dependencies ([bf3647b](https://github.com/Fdawgs/ydh-authentication-service/commit/bf3647b))
-   fix(routes): remove sanitize object ([3180402](https://github.com/Fdawgs/ydh-authentication-service/commit/3180402))
-   docs: spelling and grammar fixes ([8d0c406](https://github.com/Fdawgs/ydh-authentication-service/commit/8d0c406))
-   docs(contributing): remove reference to replaced jest script ([81cbe20](https://github.com/Fdawgs/ydh-authentication-service/commit/81cbe20))

## 6.2.0 (2020-10-01)

-   feat(utils): validate issuer of openid connect jwt ([00cfab1](https://github.com/Fdawgs/ydh-authentication-service/commit/00cfab1))
-   docs(contributing): correct release step order ([19d14c0](https://github.com/Fdawgs/ydh-authentication-service/commit/19d14c0))
-   docs(readme): correct pm2 statement ([3abc6d3](https://github.com/Fdawgs/ydh-authentication-service/commit/3abc6d3))
-   fix(routes): handle patient and identifier query and params as strings ([fbd4ee5](https://github.com/Fdawgs/ydh-authentication-service/commit/fbd4ee5))
-   fix(routes): handle phone numbers as strings ([f723906](https://github.com/Fdawgs/ydh-authentication-service/commit/f723906))
-   build(deps-dev): bump dev dependencies ([87f36f3](https://github.com/Fdawgs/ydh-authentication-service/commit/87f36f3))
-   build(deps): bump jwks-rsa from 1.9.0 to 1.10.1 ([f283661](https://github.com/Fdawgs/ydh-authentication-service/commit/f283661))
-   build(deps): bump sanitize-middleware from 2.0.18 to 2.0.19 ([f246b5c](https://github.com/Fdawgs/ydh-authentication-service/commit/f246b5c))

## 6.1.0 (2020-09-24)

-   fix(utils): remove unused variable ([ca24255](https://github.com/Fdawgs/ydh-authentication-service/commit/ca24255))
-   feat(utils): add openid connect jwt verification support ([66b5a63](https://github.com/Fdawgs/ydh-authentication-service/commit/66b5a63))

## <small>6.0.4 (2020-09-22)</small>

-   build(dependabot): remove assignment of pull requests to user ([1fbf92f](https://github.com/Fdawgs/ydh-authentication-service/commit/1fbf92f))
-   build(deps-dev): bump dev dependencies ([58f7860](https://github.com/Fdawgs/ydh-authentication-service/commit/58f7860))
-   build(deps): bump helmet from 4.1.0 to 4.1.1 ([b75271f](https://github.com/Fdawgs/ydh-authentication-service/commit/b75271f))
-   build(deps): bump sanitize-middleware from 2.0.17 to 2.0.18 ([578d14c](https://github.com/Fdawgs/ydh-authentication-service/commit/578d14c))
-   build(docker): reduce image size; restrict user privileges ([422d3f0](https://github.com/Fdawgs/ydh-authentication-service/commit/422d3f0))
-   tests: correct test rules ([0f20497](https://github.com/Fdawgs/ydh-authentication-service/commit/0f20497))
-   style(config): sort allowed headers alphabetically ([53d6f59](https://github.com/Fdawgs/ydh-authentication-service/commit/53d6f59))
-   fix(routes): correct cors header settings for get requests ([24793de](https://github.com/Fdawgs/ydh-authentication-service/commit/24793de))
-   docs(readme): add snyk badge ([24376d9](https://github.com/Fdawgs/ydh-authentication-service/commit/24376d9))
-   docs(readme): repoint travis-ci badge from .org to .com ([7c7a666](https://github.com/Fdawgs/ydh-authentication-service/commit/7c7a666))
-   chore(eslint): remove unnecessary eslint rules ([f34b588](https://github.com/Fdawgs/ydh-authentication-service/commit/f34b588))
-   chore(nodemon): configure nodemon to watch dev .env file ([6452961](https://github.com/Fdawgs/ydh-authentication-service/commit/6452961))
-   chore(pm2): watch .env files for config changes; set instances to max ([a7cc433](https://github.com/Fdawgs/ydh-authentication-service/commit/a7cc433))
-   chore(scripts): remove nodemon script ([bc883f5](https://github.com/Fdawgs/ydh-authentication-service/commit/bc883f5))

## <small>6.0.3 (2020-08-28)</small>

-   refactor(server): use address() for host and port logging ([777334f](https://github.com/Fdawgs/ydh-authentication-service/commit/777334f))
-   build(deps-dev): add eslint-plugin-security dev dependency ([8a6b236](https://github.com/Fdawgs/ydh-authentication-service/commit/8a6b236))
-   build(deps-dev): bump dev dependencies ([2cacf89](https://github.com/Fdawgs/ydh-authentication-service/commit/2cacf89))
-   build(deps): bump axios from 0.19.2 to 0.20.0 ([d690aac](https://github.com/Fdawgs/ydh-authentication-service/commit/d690aac))
-   build(deps): bump sanitize-middleware from 2.0.16 to 2.0.17 ([aa08aed](https://github.com/Fdawgs/ydh-authentication-service/commit/aa08aed))
-   chore(pm2): increase cluster instances from 8 to 16 ([32e3349](https://github.com/Fdawgs/ydh-authentication-service/commit/32e3349))

## <small>6.0.2 (2020-08-18)</small>

-   build(deps-dev): bump dev dependencies ([bacd58d](https://github.com/Fdawgs/ydh-authentication-service/commit/bacd58d))
-   build(deps-dev): bump dev dependencies to resolve security cve ([d73fa0b](https://github.com/Fdawgs/ydh-authentication-service/commit/d73fa0b))
-   build(deps): bump helmet from 3.23.3 to 4.0.0 ([263595f](https://github.com/Fdawgs/ydh-authentication-service/commit/263595f))
-   build(deps): bump helmet from 4.0.0 to 4.1.0 ([00cd382](https://github.com/Fdawgs/ydh-authentication-service/commit/00cd382))
-   build(deps): bump sanitize-middleware from 2.0.14 to 2.0.15 ([244a2b6](https://github.com/Fdawgs/ydh-authentication-service/commit/244a2b6))
-   build(deps): bump sanitize-middleware from 2.0.15 to 2.0.16 ([10c702a](https://github.com/Fdawgs/ydh-authentication-service/commit/10c702a))
-   tests(server): fix expected response headers ([36b96b1](https://github.com/Fdawgs/ydh-authentication-service/commit/36b96b1))
-   chore: reduce minimum nodejs engine version from 12.x to 10.x ([515d580](https://github.com/Fdawgs/ydh-authentication-service/commit/515d580))
-   chore(github): add issue templates ([1c3898e](https://github.com/Fdawgs/ydh-authentication-service/commit/1c3898e))
-   fix: remove hidepoweredby config ([8145c88](https://github.com/Fdawgs/ydh-authentication-service/commit/8145c88))
-   docs(contributing): clarification on env variables ([1323c9e](https://github.com/Fdawgs/ydh-authentication-service/commit/1323c9e))
-   docs(readme): replace convoluted pm2 windows service deploy steps ([a69f294](https://github.com/Fdawgs/ydh-authentication-service/commit/a69f294))

## <small>6.0.1 (2020-07-27)</small>

-   build(deps-dev): bump dev dependencies ([7988298](https://github.com/Fdawgs/ydh-authentication-service/commit/7988298))
-   build(deps-dev): remove typescript ([08cb497](https://github.com/Fdawgs/ydh-authentication-service/commit/08cb497))
-   build(deps): bump sanitize-middleware from 2.0.12 to 2.0.14 ([0dbec0c](https://github.com/Fdawgs/ydh-authentication-service/commit/0dbec0c))
-   build(docker): use .env file for config ([0b779c9](https://github.com/Fdawgs/ydh-authentication-service/commit/0b779c9))
-   build(travis): add test step ([80f9c66](https://github.com/Fdawgs/ydh-authentication-service/commit/80f9c66))
-   build(travis): make scripts multiline ([f0f74e6](https://github.com/Fdawgs/ydh-authentication-service/commit/f0f74e6))
-   build(travis): set osx image to latest version ([e5c88e4](https://github.com/Fdawgs/ydh-authentication-service/commit/e5c88e4))
-   build(travis): suppress git log; structure job stages ([ea5cafe](https://github.com/Fdawgs/ydh-authentication-service/commit/ea5cafe))
-   build(travis): update linux dist to latest lts ([09b7835](https://github.com/Fdawgs/ydh-authentication-service/commit/09b7835))
-   chore: update team contact email ([e0ca9a2](https://github.com/Fdawgs/ydh-authentication-service/commit/e0ca9a2))

## 6.0.0 (2020-07-14)

-   build(deps-dev): bump @commitlint/config-conventional ([c542374](https://github.com/Fdawgs/ydh-authentication-service/commit/c542374))
-   build(deps-dev): bump eslint from 7.3.1 to 7.4.0 ([32a7588](https://github.com/Fdawgs/ydh-authentication-service/commit/32a7588))
-   build(deps-dev): bump eslint-plugin-jest from 23.17.1 to 23.18.0 ([edec577](https://github.com/Fdawgs/ydh-authentication-service/commit/edec577))
-   build(deps-dev): bump eslint-plugin-jsdoc from 28.5.1 to 29.2.0 ([76df322](https://github.com/Fdawgs/ydh-authentication-service/commit/76df322))
-   build(deps-dev): bump lodash from 4.17.15 to 4.17.19 ([8001799](https://github.com/Fdawgs/ydh-authentication-service/commit/8001799))
-   build(deps-dev): bump typescript from 3.9.5 to 3.9.6 ([ce6a3e3](https://github.com/Fdawgs/ydh-authentication-service/commit/ce6a3e3))
-   build(travis): remove windows and osx os from allowed failures ([dc4fca7](https://github.com/Fdawgs/ydh-authentication-service/commit/dc4fca7))
-   build(travis): set linux dist ([c00281f](https://github.com/Fdawgs/ydh-authentication-service/commit/c00281f))
-   build(travis): use lts version of node for jobs ([c4d02cc](https://github.com/Fdawgs/ydh-authentication-service/commit/c4d02cc))
-   refactor(config): move api tokens to environment variables ([fa54e8f](https://github.com/Fdawgs/ydh-authentication-service/commit/fa54e8f))
-   chore: update contact email ([92bd773](https://github.com/Fdawgs/ydh-authentication-service/commit/92bd773))
-   chore(scripts): use gitignore for ignore-path options ([87c49ff](https://github.com/Fdawgs/ydh-authentication-service/commit/87c49ff))
-   docs(readme): add missing step to pm2 windows service installation ([46799e4](https://github.com/Fdawgs/ydh-authentication-service/commit/46799e4))
-   docs(readme): remove inactive dependabot badge ([9fe2e3c](https://github.com/Fdawgs/ydh-authentication-service/commit/9fe2e3c))

### BREAKING CHANGE

-   `auth.apiKeys` in `config.js` now uses `api_bearer_token_array` from .env file

## <small>5.0.4 (2020-06-30)</small>

-   chore: create code_of_conduct.md ([39018aa](https://github.com/Fdawgs/ydh-authentication-service/commit/39018aa))
-   chore: rename .env.test to .env.template; add .env.test to gitignore ([3d01dd3](https://github.com/Fdawgs/ydh-authentication-service/commit/3d01dd3))
-   chore(eslint): convert from json to js file format ([77abb50](https://github.com/Fdawgs/ydh-authentication-service/commit/77abb50))
-   chore(scripts): expand coverage of eslint and prettier ([94c98a1](https://github.com/Fdawgs/ydh-authentication-service/commit/94c98a1))
-   build(deps-dev): bump @commitlint/config-conventional ([7bf70a8](https://github.com/Fdawgs/ydh-authentication-service/commit/7bf70a8))
-   build(deps-dev): bump eslint-plugin-import from 2.20.2 to 2.22.0 ([2c4b14c](https://github.com/Fdawgs/ydh-authentication-service/commit/2c4b14c))
-   build(deps-dev): bump eslint-plugin-jest from 23.13.2 to 23.17.1 ([02b5d29](https://github.com/Fdawgs/ydh-authentication-service/commit/02b5d29))
-   build(deps-dev): bump eslint-plugin-jsdoc from 27.0.3 to 28.5.1 ([f1f7cc0](https://github.com/Fdawgs/ydh-authentication-service/commit/f1f7cc0))
-   build(deps-dev): bump jest from 26.0.1 to 26.1.0 ([cfe4c89](https://github.com/Fdawgs/ydh-authentication-service/commit/cfe4c89))
-   build(deps-dev): bump superagent from 5.2.2 to 5.3.1 ([5a7ba77](https://github.com/Fdawgs/ydh-authentication-service/commit/5a7ba77))
-   build(deps-dev): bump typescript from 3.9.3 to 3.9.5 ([23c01de](https://github.com/Fdawgs/ydh-authentication-service/commit/23c01de))
-   build(deps): bump helmet from 3.22.0 to 3.23.3 ([0125b21](https://github.com/Fdawgs/ydh-authentication-service/commit/0125b21))
-   build(deps): bump sanitize-middleware from 2.0.8 to 2.0.12 ([6a9cebf](https://github.com/Fdawgs/ydh-authentication-service/commit/6a9cebf))
-   build(travis): copy template file ([b4e08df](https://github.com/Fdawgs/ydh-authentication-service/commit/b4e08df))
-   Create Dependabot config file ([6127c98](https://github.com/Fdawgs/ydh-authentication-service/commit/6127c98))
-   style: tidy whitespace ([1c00436](https://github.com/Fdawgs/ydh-authentication-service/commit/1c00436))

## <small>5.0.3 (2020-06-04)</small>

-   docs(readme): simplify intro section ([d176f7e](https://github.com/Fdawgs/ydh-authentication-service/commit/d176f7e))
-   chore: watch .env.production file for pm2 restarts ([048b00f](https://github.com/Fdawgs/ydh-authentication-service/commit/048b00f))
-   build(deps-dev): bump eslint-plugin-jsdoc from 26.0.2 to 27.0.3 ([99e652c](https://github.com/Fdawgs/ydh-authentication-service/commit/99e652c))
-   build(deps): bump sanitize-middleware from 2.0.7 to 2.0.8 ([71478b9](https://github.com/Fdawgs/ydh-authentication-service/commit/71478b9))

## <small>5.0.2 (2020-06-02)</small>

-   fix(server): check for string instead of boolean to enable https ([687c8e0](https://github.com/Fdawgs/ydh-authentication-service/commit/687c8e0))
-   build(deps-dev): bump eslint-plugin-jsdoc from 26.0.1 to 26.0.2 ([51e6fa8](https://github.com/Fdawgs/ydh-authentication-service/commit/51e6fa8))

## <small>5.0.1 (2020-06-01)</small>

-   build(deps-dev): add promise and jsdoc eslint plugins; update config ([5b30320](https://github.com/Fdawgs/ydh-authentication-service/commit/5b30320))
-   build(deps-dev): bump eslint-plugin-jest from 23.11.0 to 23.13.2 ([17b9d16](https://github.com/Fdawgs/ydh-authentication-service/commit/17b9d16))
-   build(deps-dev): bump eslint-plugin-jsdoc from 25.4.3 to 26.0.1 ([03439d3](https://github.com/Fdawgs/ydh-authentication-service/commit/03439d3))
-   build(deps-dev): bump typescript from 3.9.2 to 3.9.3 ([2fea9e3](https://github.com/Fdawgs/ydh-authentication-service/commit/2fea9e3))
-   build(deps): bump sanitize-middleware from 2.0.6 to 2.0.7 ([d80d998](https://github.com/Fdawgs/ydh-authentication-service/commit/d80d998))
-   build(docker): lint dockerfile ([030f034](https://github.com/Fdawgs/ydh-authentication-service/commit/030f034))
-   tests: remove host value ([b168a00](https://github.com/Fdawgs/ydh-authentication-service/commit/b168a00))
-   tests: tidy test structure ([1917c45](https://github.com/Fdawgs/ydh-authentication-service/commit/1917c45))
-   tests: use pseudo-real data to test input ([6a69ac5](https://github.com/Fdawgs/ydh-authentication-service/commit/6a69ac5))
-   tests(server): add additional test level ([62e27c0](https://github.com/Fdawgs/ydh-authentication-service/commit/62e27c0))
-   tests(server): rebuild server for each test ([1e7b7c4](https://github.com/Fdawgs/ydh-authentication-service/commit/1e7b7c4))
-   tests(server): remove redundant try...catch ([fc36ba7](https://github.com/Fdawgs/ydh-authentication-service/commit/fc36ba7))
-   refactor(config): remove alt default host value ([daf02c8](https://github.com/Fdawgs/ydh-authentication-service/commit/daf02c8))
-   refactor(route): replace then() method with async/await ([e483f7b](https://github.com/Fdawgs/ydh-authentication-service/commit/e483f7b))
-   refactor(route): use options directly ([f2dd004](https://github.com/Fdawgs/ydh-authentication-service/commit/f2dd004))
-   chore: correct case of type for @param jsdoc tag ([aa9a7bf](https://github.com/Fdawgs/ydh-authentication-service/commit/aa9a7bf))
-   chore: use @returns jsdoc tag over synonym ([855948a](https://github.com/Fdawgs/ydh-authentication-service/commit/855948a))
-   chore(dockerignore): add yarn berry inst state ([4c22b66](https://github.com/Fdawgs/ydh-authentication-service/commit/4c22b66))
-   chore(eslintrc): add multi-line rule ([cf1c9f5](https://github.com/Fdawgs/ydh-authentication-service/commit/cf1c9f5))
-   chore(gitignore): add dev env variables; add yarn berry inst state ([c882576](https://github.com/Fdawgs/ydh-authentication-service/commit/c882576))
-   chore(routes): remove console.log ([c19f2fe](https://github.com/Fdawgs/ydh-authentication-service/commit/c19f2fe))

## 5.0.0 (2020-05-15)

-   chore: rename repo to reflect new purpose ([5a9a0db](https://github.com/Fdawgs/ydh-authentication-service/commit/5a9a0db))
-   chore: update gitignore with latest github version ([a16b0ce](https://github.com/Fdawgs/ydh-authentication-service/commit/a16b0ce))
-   docs: add docker deploy section; correct file references ([d2859c3](https://github.com/Fdawgs/ydh-authentication-service/commit/d2859c3))
-   docs(contributing): update conventional commit link to latest version ([1735097](https://github.com/Fdawgs/ydh-authentication-service/commit/1735097))
-   docs(readme): reference new env files ([d49fd13](https://github.com/Fdawgs/ydh-authentication-service/commit/d49fd13))
-   fix(config): correct global var name ([eaf86d2](https://github.com/Fdawgs/ydh-authentication-service/commit/eaf86d2))
-   fix(routes): tidy returned error structure ([8b7dddf](https://github.com/Fdawgs/ydh-authentication-service/commit/8b7dddf))
-   build(deps-dev): bump conventional-changelog-cli from 2.0.31 to 2.0.34 ([aa40234](https://github.com/Fdawgs/ydh-authentication-service/commit/aa40234))
-   build(deps-dev): bump eslint-plugin-jest from 23.9.0 to 23.11.0 ([571f530](https://github.com/Fdawgs/ydh-authentication-service/commit/571f530))
-   build(deps-dev): bump typescript from 3.8.3 to 3.9.2 ([8ee80af](https://github.com/Fdawgs/ydh-authentication-service/commit/8ee80af))
-   build(deps-dev): replace supertest with superagent ([fa4d130](https://github.com/Fdawgs/ydh-authentication-service/commit/fa4d130))
-   build(docker): add docker files ([2ed7c50](https://github.com/Fdawgs/ydh-authentication-service/commit/2ed7c50))
-   tests: fix request syntax ([c463b90](https://github.com/Fdawgs/ydh-authentication-service/commit/c463b90))
-   tests: remove .env.test from gitignore file ([b052512](https://github.com/Fdawgs/ydh-authentication-service/commit/b052512))
-   tests: use lodash for deep cloning ([494c8d9](https://github.com/Fdawgs/ydh-authentication-service/commit/494c8d9))
-   tests(route): fix superagent syntax ([c2a6cad](https://github.com/Fdawgs/ydh-authentication-service/commit/c2a6cad))
-   tests(server): ignore self-signed certs for https tests ([7c14bf2](https://github.com/Fdawgs/ydh-authentication-service/commit/7c14bf2))
-   tests(server): move mock mirth server config into own object ([b46146b](https://github.com/Fdawgs/ydh-authentication-service/commit/b46146b))
-   tests(server): refactor https capability testing ([4745e8a](https://github.com/Fdawgs/ydh-authentication-service/commit/4745e8a))
-   tests(server): remove async await for mock mirth server shutdown ([f66c3d4](https://github.com/Fdawgs/ydh-authentication-service/commit/f66c3d4))
-   tests(server): remove leftover console log ([2a2846b](https://github.com/Fdawgs/ydh-authentication-service/commit/2a2846b))
-   tests(server): remove server default variable tests ([85eefd7](https://github.com/Fdawgs/ydh-authentication-service/commit/85eefd7))
-   refactor(server): move listen console log into callback ([f83049d](https://github.com/Fdawgs/ydh-authentication-service/commit/f83049d))
-   refactor(server): move listenerUrl to env ([ef9de57](https://github.com/Fdawgs/ydh-authentication-service/commit/ef9de57))
-   refactor(server): remove redundant config object mapping ([3e08634](https://github.com/Fdawgs/ydh-authentication-service/commit/3e08634))
-   refactor(server): separate instance and application configuration ([38ca1a5](https://github.com/Fdawgs/ydh-authentication-service/commit/38ca1a5))
-   refactor(server): server force closes on shutdown, promise removed ([4cb6f59](https://github.com/Fdawgs/ydh-authentication-service/commit/4cb6f59))
-   feat(server): use only config file for port; allow host to be set ([61a2faa](https://github.com/Fdawgs/ydh-authentication-service/commit/61a2faa))

## 4.0.0 (2020-05-06)

-   docs(readme): add steps on setting cors headers in mirth connect config ([4bf9729](https://github.com/Fdawgs/ydh-authentication-service/commit/4bf9729))
-   refactor(routes): remove option to hide cors headers ([106fe38](https://github.com/Fdawgs/ydh-authentication-service/commit/106fe38))
-   chore(package): set minimum engine version ([31a1453](https://github.com/Fdawgs/ydh-authentication-service/commit/31a1453))
-   tests(server): add test self-signed localhost pfx file ([32874a6](https://github.com/Fdawgs/ydh-authentication-service/commit/32874a6))
-   tests(server): add test self-signed localhost ssl cert and key ([aea7369](https://github.com/Fdawgs/ydh-authentication-service/commit/aea7369))
-   tests(server): align modified server config variable name across tests ([41e3562](https://github.com/Fdawgs/ydh-authentication-service/commit/41e3562))
-   tests(server): replace shallow spread with deep copies ([11e3c1c](https://github.com/Fdawgs/ydh-authentication-service/commit/11e3c1c))
-   build(deps-dev): bump eslint-plugin-jest from 23.8.2 to 23.9.0 ([48c744d](https://github.com/Fdawgs/ydh-authentication-service/commit/48c744d))
-   build(deps-dev): bump jest from 25.5.3 to 26.0.1 ([3523588](https://github.com/Fdawgs/ydh-authentication-service/commit/3523588))

### BREAKING CHANGE

-   `routing.hide` key in `serverConfig` object in config file removed, follow new readme steps to set cors headers in Mirth Connect config file

## <small>3.3.8 (2020-05-01)</small>

-   build(deps-dev): bump coveralls from 3.0.11 to 3.1.0 ([33e130d](https://github.com/Fdawgs/ydh-authentication-service/commit/33e130d))
-   build(deps-dev): bump eslint-config-prettier from 6.10.1 to 6.11.0 ([49e94e1](https://github.com/Fdawgs/ydh-authentication-service/commit/49e94e1))
-   build(deps-dev): bump jest from 25.3.0 to 25.5.1 ([5c54709](https://github.com/Fdawgs/ydh-authentication-service/commit/5c54709))
-   build(deps-dev): bump jest from 25.5.1 to 25.5.2 ([1909158](https://github.com/Fdawgs/ydh-authentication-service/commit/1909158))
-   build(deps-dev): bump jest from 25.5.2 to 25.5.3 ([d74b4eb](https://github.com/Fdawgs/ydh-authentication-service/commit/d74b4eb))
-   build(deps-dev): bump prettier from 2.0.4 to 2.0.5 ([36407d8](https://github.com/Fdawgs/ydh-authentication-service/commit/36407d8))
-   build(deps): bump sanitize-middleware from 2.0.5 to 2.0.6 ([9d84396](https://github.com/Fdawgs/ydh-authentication-service/commit/9d84396))
-   tests: ignore index and config in coverage collection ([dd6720f](https://github.com/Fdawgs/ydh-authentication-service/commit/dd6720f))
-   tests(package): add runinband option for jest cli ([ceb5f68](https://github.com/Fdawgs/ydh-authentication-service/commit/ceb5f68))
-   style: capitalise leading character of comments ([14b9cec](https://github.com/Fdawgs/ydh-authentication-service/commit/14b9cec))
-   refactor: replace query-string module with native module ([0cc2355](https://github.com/Fdawgs/ydh-authentication-service/commit/0cc2355))
-   refactor(server): rename configureWinston function to configureLogging ([1e44e4a](https://github.com/Fdawgs/ydh-authentication-service/commit/1e44e4a))
-   refactor(server): replace winston logging modules with pino ([f158106](https://github.com/Fdawgs/ydh-authentication-service/commit/f158106))

## <small>3.3.7 (2020-04-17)</small>

-   style: format tests ([8a7412d](https://github.com/Fdawgs/ydh-authentication-service/commit/8a7412d))
-   refactor(routes): remove unreachable path ([7d07c8b](https://github.com/Fdawgs/ydh-authentication-service/commit/7d07c8b))
-   docs: correct case when referencing express ([b926f5c](https://github.com/Fdawgs/ydh-authentication-service/commit/b926f5c))
-   tests: remove redundant jest timeout setting ([e80bf4e](https://github.com/Fdawgs/ydh-authentication-service/commit/e80bf4e))
-   tests: replace promises with async/await ([e358272](https://github.com/Fdawgs/ydh-authentication-service/commit/e358272))
-   tests(server): merge request tests to reduce code duplication ([d45a2e5](https://github.com/Fdawgs/ydh-authentication-service/commit/d45a2e5))

## <small>3.3.6 (2020-04-16)</small>

-   test(routes): make wildcard route tests async ([8315993](https://github.com/Fdawgs/ydh-authentication-service/commit/8315993))
-   refactor(routes): move cors middleware to route ([d410252](https://github.com/Fdawgs/ydh-authentication-service/commit/d410252))
-   refactor(routes): remove hard coded get route ([fe51f03](https://github.com/Fdawgs/ydh-authentication-service/commit/fe51f03))
-   refactor(routes): replace deprecated request module with axios ([70974c6](https://github.com/Fdawgs/ydh-authentication-service/commit/70974c6))
-   tests(routes): alter tests to use promises ([122640d](https://github.com/Fdawgs/ydh-authentication-service/commit/122640d))
-   tests(server): alter tests to use promises ([17a122e](https://github.com/Fdawgs/ydh-authentication-service/commit/17a122e))
-   docs(readme): update pm2-windows-service link ([c7b5210](https://github.com/Fdawgs/ydh-authentication-service/commit/c7b5210))

## <small>3.3.5 (2020-04-06)</small>

-   tests: remove async flags ([f4532b8](https://github.com/Fdawgs/ydh-authentication-service/commit/f4532b8))
-   chore: rename bearer token util ([415a81a](https://github.com/Fdawgs/ydh-authentication-service/commit/415a81a))
-   chore(package): tidy jest config and cli options ([c08abdc](https://github.com/Fdawgs/ydh-authentication-service/commit/c08abdc))
-   refactor(server): move error handler middleware to own util file ([b8a69e7](https://github.com/Fdawgs/ydh-authentication-service/commit/b8a69e7))
-   build(deps-dev): bump eslint-plugin-import from 2.20.1 to 2.20.2 ([ce5bd84](https://github.com/Fdawgs/ydh-authentication-service/commit/ce5bd84))
-   build(deps-dev): bump jest from 25.2.3 to 25.2.4 ([f505aa9](https://github.com/Fdawgs/ydh-authentication-service/commit/f505aa9))
-   build(deps): bump dependencies ([9ac4ada](https://github.com/Fdawgs/ydh-authentication-service/commit/9ac4ada))
-   docs: grammar and spelling fixes ([212a38f](https://github.com/Fdawgs/ydh-authentication-service/commit/212a38f))
-   docs(readme): correct section sizes ([558fbcd](https://github.com/Fdawgs/ydh-authentication-service/commit/558fbcd))

## <small>3.3.4 (2020-03-27)</small>

-   tests(routes): add wilcard route test ([32e4f5e](https://github.com/Fdawgs/ydh-authentication-service/commit/32e4f5e))
-   tests(server): remove superfluous console log ([3fae28b](https://github.com/Fdawgs/ydh-authentication-service/commit/3fae28b))
-   docs(routes): add missing jsdoc tag ([9f2f2bf](https://github.com/Fdawgs/ydh-authentication-service/commit/9f2f2bf))
-   refactor(routes): remove object init from argument ([8d12674](https://github.com/Fdawgs/ydh-authentication-service/commit/8d12674))
-   refactor(server): use nocache module as helmet.nocache is deprecated ([a0ec8d6](https://github.com/Fdawgs/ydh-authentication-service/commit/a0ec8d6))
-   build(deps-dev): bump jest from 25.1.0 to 25.2.3 ([2ede211](https://github.com/Fdawgs/ydh-authentication-service/commit/2ede211))
-   fix(routes): pass errors to next function ([6a3203a](https://github.com/Fdawgs/ydh-authentication-service/commit/6a3203a))
-   fix(server): remove misuse of json serialization ([15ee8b2](https://github.com/Fdawgs/ydh-authentication-service/commit/15ee8b2))

## <small>3.3.3 (2020-03-25)</small>

-   fix(server): call nocache function directly due to change in helmet ([6a0663b](https://github.com/Fdawgs/ydh-authentication-service/commit/6a0663b))
-   build(deps-dev): bump prettier from 2.0.1 to 2.0.2 ([a3139d6](https://github.com/Fdawgs/ydh-authentication-service/commit/a3139d6))
-   build(deps): bump helmet from 3.21.3 to 3.22.0 ([1b48fd2](https://github.com/Fdawgs/ydh-authentication-service/commit/1b48fd2))
-   build(deps): bump sanitize-middleware from 2.0.3 to 2.0.4 ([781a6fa](https://github.com/Fdawgs/ydh-authentication-service/commit/781a6fa))
-   ci(travis): run jobs using linux ([322ff11](https://github.com/Fdawgs/ydh-authentication-service/commit/322ff11))
-   docs(readme): update pm2 section to reflect auto restart changes ([392fb15](https://github.com/Fdawgs/ydh-authentication-service/commit/392fb15))
-   chore(pm2): remove need to manually restart upon config change ([cac584a](https://github.com/Fdawgs/ydh-authentication-service/commit/cac584a))

## <small>3.3.2 (2020-03-23)</small>

-   ci(travis): add release tags to branch safelist ([aca2ac4](https://github.com/Fdawgs/ydh-authentication-service/commit/aca2ac4))
-   ci(travis): test osx ([ffff11d](https://github.com/Fdawgs/ydh-authentication-service/commit/ffff11d))
-   chore(package): add prettier call to changelog gen script ([d7a646b](https://github.com/Fdawgs/ydh-authentication-service/commit/d7a646b))
-   chore(package): use test-only script when testing ([5f8e8ff](https://github.com/Fdawgs/ydh-authentication-service/commit/5f8e8ff))
-   build(deps-dev): bump coveralls from 3.0.9 to 3.0.11 ([3ef6c9c](https://github.com/Fdawgs/ydh-authentication-service/commit/3ef6c9c))
-   build(deps-dev): bump eslint-config-prettier from 6.10.0 to 6.10.1 ([6b8211f](https://github.com/Fdawgs/ydh-authentication-service/commit/6b8211f))
-   build(deps-dev): bump prettier from 1.19.1 to 2.0.1 ([0e35d6e](https://github.com/Fdawgs/ydh-authentication-service/commit/0e35d6e))
-   build(deps): bump sanitize-middleware from 2.0.1 to 2.0.3 ([074d709](https://github.com/Fdawgs/ydh-authentication-service/commit/074d709))
-   build(deps): update dependencies ([959bb03](https://github.com/Fdawgs/ydh-authentication-service/commit/959bb03))
-   tests(server): refactor header setting for mock mirth connect server ([17800d3](https://github.com/Fdawgs/ydh-authentication-service/commit/17800d3))
-   tests(server): remove superfluous console logs ([3664eed](https://github.com/Fdawgs/ydh-authentication-service/commit/3664eed))
-   style(server): add whitespace to increase readability ([0860611](https://github.com/Fdawgs/ydh-authentication-service/commit/0860611))
-   fix(server): add deep cloning when assigning config param ([081b57e](https://github.com/Fdawgs/ydh-authentication-service/commit/081b57e))
-   docs(utils): correct return jsdoc tag ([c92d032](https://github.com/Fdawgs/ydh-authentication-service/commit/c92d032))

## <small>3.3.1 (2020-03-17)</small>

-   style(config): add whitespace ([b7dc60d](https://github.com/Fdawgs/ydh-authentication-service/commit/b7dc60d))
-   fix(routes): remove cors headers from get response ([11c7d42](https://github.com/Fdawgs/ydh-authentication-service/commit/11c7d42))
-   fix(routes): remove preflight headers, add allow header ([123bfec](https://github.com/Fdawgs/ydh-authentication-service/commit/123bfec))
-   fix(tests): remove expected cors headers ([c3852a2](https://github.com/Fdawgs/ydh-authentication-service/commit/c3852a2))
-   tests(server): add tests for options requests ([0c78186](https://github.com/Fdawgs/ydh-authentication-service/commit/0c78186))
-   refactor(config): add spacing to allowedHeaders property ([6ae97c4](https://github.com/Fdawgs/ydh-authentication-service/commit/6ae97c4))

## 3.3.0 (2020-03-16)

-   tests(server): update tests to expect new cors headers ([e1a7ac9](https://github.com/Fdawgs/ydh-authentication-service/commit/e1a7ac9))
-   feat(server): add cors middleware ([b088cf4](https://github.com/Fdawgs/ydh-authentication-service/commit/b088cf4))
-   refactor(server): remove redundant error handler ([c0b810b](https://github.com/Fdawgs/ydh-authentication-service/commit/c0b810b))

## <small>3.2.4 (2020-03-16)</small>

-   build(deps-dev): bump eslint-plugin-json from 2.1.0 to 2.1.1 ([d71ae09](https://github.com/Fdawgs/ydh-authentication-service/commit/d71ae09))
-   build(deps): bump sanitize-middleware from 1.0.1 to 2.0.0 ([7260bf8](https://github.com/Fdawgs/ydh-authentication-service/commit/7260bf8))
-   build(deps): bump sanitize-middleware from 2.0.0 to 2.0.1 ([7a576b3](https://github.com/Fdawgs/ydh-authentication-service/commit/7a576b3))
-   chore: update dependencies ([f41a341](https://github.com/Fdawgs/ydh-authentication-service/commit/f41a341))
-   style: rename main file to index from app ([902d776](https://github.com/Fdawgs/ydh-authentication-service/commit/902d776))

## <small>3.2.3 (2020-03-12)</small>

-   chore: update lockfile ([ecae517](https://github.com/Fdawgs/ydh-authentication-service/commit/ecae517))
-   docs(readme): remove redundant sentence regarding pm2 service ([750172b](https://github.com/Fdawgs/ydh-authentication-service/commit/750172b))

## <small>3.2.2 (2020-03-10)</small>

-   docs(readme): change example call to curl request ([bc95761](https://github.com/Fdawgs/ydh-authentication-service/commit/bc95761))
-   docs(readme): clarify pm2 usage ([b8447c2](https://github.com/Fdawgs/ydh-authentication-service/commit/b8447c2))
-   chore: update lockfile ([05cfd4a](https://github.com/Fdawgs/ydh-authentication-service/commit/05cfd4a))
-   build(deps-dev): bump eslint-plugin-jest from 23.8.1 to 23.8.2 ([a838feb](https://github.com/Fdawgs/ydh-authentication-service/commit/a838feb))
-   build(deps): bump cross-env from 7.0.0 to 7.0.1 ([8910bbe](https://github.com/Fdawgs/ydh-authentication-service/commit/8910bbe))
-   build(deps): bump cross-env from 7.0.1 to 7.0.2 ([b26b1cd](https://github.com/Fdawgs/ydh-authentication-service/commit/b26b1cd))
-   build(deps): bump sanitize-middleware from 1.0.0 to 1.0.1 ([c21a901](https://github.com/Fdawgs/ydh-authentication-service/commit/c21a901))
-   build(deps): move cross-env to dev dependencies ([49126c4](https://github.com/Fdawgs/ydh-authentication-service/commit/49126c4))

## <small>3.2.1 (2020-03-02)</small>

-   refactor(middleware): move sanitization middleware to own module ([1540844](https://github.com/Fdawgs/ydh-authentication-service/commit/1540844))
-   build(deps-dev): bump eslint-plugin-jest from 23.8.0 to 23.8.1 ([cd5043e](https://github.com/Fdawgs/ydh-authentication-service/commit/cd5043e))
-   build(deps-dev): bump typescript from 3.8.2 to 3.8.3 ([6738278](https://github.com/Fdawgs/ydh-authentication-service/commit/6738278))

## 3.2.0 (2020-02-26)

-   chore: remove watch options ([e704cbe](https://github.com/Fdawgs/ydh-authentication-service/commit/e704cbe))
-   chore(deps): remove redundant winser dependency ([cea9098](https://github.com/Fdawgs/ydh-authentication-service/commit/cea9098))
-   chore(package): remove winser scripts ([46c3cbc](https://github.com/Fdawgs/ydh-authentication-service/commit/46c3cbc))
-   docs(readme): add pm2 windows service steps ([a8407b0](https://github.com/Fdawgs/ydh-authentication-service/commit/a8407b0))
-   docs(readme): remove winser steps ([d337b7d](https://github.com/Fdawgs/ydh-authentication-service/commit/d337b7d))
-   refactor(middleware): return entire error rather than just message ([331dcb3](https://github.com/Fdawgs/ydh-authentication-service/commit/331dcb3))
-   feat(server): add basic error handling ([be63d7f](https://github.com/Fdawgs/ydh-authentication-service/commit/be63d7f))

## 3.1.0 (2020-02-25)

-   fix(server): remove console log from configurePassport function ([f372f21](https://github.com/Fdawgs/ydh-authentication-service/commit/f372f21))
-   chore: add options to pm2 config ([b40014a](https://github.com/Fdawgs/ydh-authentication-service/commit/b40014a))
-   chore(utils): rename bearer util ([5c1ee31](https://github.com/Fdawgs/ydh-authentication-service/commit/5c1ee31))
-   feat(middleware): add sanitize middleware ([b07d621](https://github.com/Fdawgs/ydh-authentication-service/commit/b07d621))
-   build(deps): bump helmet from 3.21.2 to 3.21.3 ([3c4fac9](https://github.com/Fdawgs/ydh-authentication-service/commit/3c4fac9))

## <small>3.0.3 (2020-02-24)</small>

-   chore: convert pm2 config file from yml to js ([db47569](https://github.com/Fdawgs/ydh-authentication-service/commit/db47569))
-   build(deps-dev): bump eslint-plugin-jest from 23.7.0 to 23.8.0 ([66a3534](https://github.com/Fdawgs/ydh-authentication-service/commit/66a3534))
-   build(deps-dev): bump eslint-plugin-json from 2.0.1 to 2.1.0 ([48a650d](https://github.com/Fdawgs/ydh-authentication-service/commit/48a650d))
-   build(deps-dev): bump typescript from 3.7.5 to 3.8.2 ([a1bb84f](https://github.com/Fdawgs/ydh-authentication-service/commit/a1bb84f))
-   docs(readme): add additional install steps for pm2 ([0bdf506](https://github.com/Fdawgs/ydh-authentication-service/commit/0bdf506))
-   docs(readme): change process manager link ([405623f](https://github.com/Fdawgs/ydh-authentication-service/commit/405623f))

## <small>3.0.2 (2020-02-19)</small>

-   docs(readme): add pm2 deployment section ([f6292a6](https://github.com/Fdawgs/ydh-authentication-service/commit/f6292a6))
-   docs(readme): add reference to process managers for deployment ([b4f2dae](https://github.com/Fdawgs/ydh-authentication-service/commit/b4f2dae))
-   chore: add pm2 config file ([2a6671c](https://github.com/Fdawgs/ydh-authentication-service/commit/2a6671c))
-   chore(changelog): spell check ([b5101ed](https://github.com/Fdawgs/ydh-authentication-service/commit/b5101ed))
-   chore(config): add comment for example cert path ([c62808c](https://github.com/Fdawgs/ydh-authentication-service/commit/c62808c))
-   chore(deps): update lock file ([43895bb](https://github.com/Fdawgs/ydh-authentication-service/commit/43895bb))
-   chore(gitignore): remove ssl_certs from list ([d398eb9](https://github.com/Fdawgs/ydh-authentication-service/commit/d398eb9))
-   chore(prettierignore): add comment ([0cc431a](https://github.com/Fdawgs/ydh-authentication-service/commit/0cc431a))
-   build(deps): bump express-winston from 4.0.2 to 4.0.3 ([4338426](https://github.com/Fdawgs/ydh-authentication-service/commit/4338426))

## <small>3.0.1 (2020-02-12)</small>

-   chore(server): remove name key from defaultConfig ([b458836](https://github.com/Fdawgs/ydh-authentication-service/commit/b458836))
-   style(server): alphabetically sort imports ([168bd92](https://github.com/Fdawgs/ydh-authentication-service/commit/168bd92))
-   refactor(server): use name key value from package.json ([f221bc4](https://github.com/Fdawgs/ydh-authentication-service/commit/f221bc4))
-   fix(app): remove param from listen function ([fb1d92e](https://github.com/Fdawgs/ydh-authentication-service/commit/fb1d92e))
-   build(deps): bump request from 2.88.0 to 2.88.2 ([6e5efc1](https://github.com/Fdawgs/ydh-authentication-service/commit/6e5efc1))

## 3.0.0 (2020-02-10)

-   chore: format code style ([601b29f](https://github.com/Fdawgs/ydh-authentication-service/commit/601b29f))
-   chore(config): set x-frame-options to deny ([9471ca3](https://github.com/Fdawgs/ydh-authentication-service/commit/9471ca3))
-   chore(middleware): remove redundant auth-header middleware ([3d7ccf8](https://github.com/Fdawgs/ydh-authentication-service/commit/3d7ccf8))
-   refactor(routes): move sanitization step to own util function ([93c85ef](https://github.com/Fdawgs/ydh-authentication-service/commit/93c85ef))
-   refactor(server): move bearer token authentication to util function ([6e24081](https://github.com/Fdawgs/ydh-authentication-service/commit/6e24081))
-   refactor(server): remove port param from listen function ([5119d83](https://github.com/Fdawgs/ydh-authentication-service/commit/5119d83))
-   refactor(server): rename configureAuthorization function ([c5a53c0](https://github.com/Fdawgs/ydh-authentication-service/commit/c5a53c0))
-   refactor(server): use passportjs middleware for authentication ([a184da7](https://github.com/Fdawgs/ydh-authentication-service/commit/a184da7))
-   build(deps-dev): bump eslint-plugin-jest from 23.6.0 to 23.7.0 ([5c987fb](https://github.com/Fdawgs/ydh-authentication-service/commit/5c987fb))
-   feat(auth): move auth options to config file ([f94669f](https://github.com/Fdawgs/ydh-authentication-service/commit/f94669f))
-   feat(routes): add check for missing config values ([e2cfa51](https://github.com/Fdawgs/ydh-authentication-service/commit/e2cfa51))
-   feat(routes): move routing options to config file ([7de0cbe](https://github.com/Fdawgs/ydh-authentication-service/commit/7de0cbe))
-   feat(server): add ability for listen function to use env port ([7e9040c](https://github.com/Fdawgs/ydh-authentication-service/commit/7e9040c))
-   test(auth): add test for missing config files ([67353d8](https://github.com/Fdawgs/ydh-authentication-service/commit/67353d8))
-   test(server): update expect x-frame-options to deny ([fc277a0](https://github.com/Fdawgs/ydh-authentication-service/commit/fc277a0))

### BREAKING CHANGE

-   `authConfig` object has been removed from config file, contents moved to `serverConfig.auth.apiKeys`
-   `listener_url` key in config file move to new `routing` object in file
-   `port` param for listen function of Server class removed

## <small>2.3.1 (2020-02-05)</small>

-   fix(package): remove cross-env from winser scripts ([248e9ea](https://github.com/Fdawgs/ydh-authentication-service/commit/248e9ea))

## 2.3.0 (2020-02-03)

-   docs: refine test example ([81993ed](https://github.com/Fdawgs/ydh-authentication-service/commit/81993ed))
-   docs(contributing): punctuation fixes ([600bb7e](https://github.com/Fdawgs/ydh-authentication-service/commit/600bb7e))
-   docs(routes): update jsdoc return tag ([0ad0c11](https://github.com/Fdawgs/ydh-authentication-service/commit/0ad0c11))
-   docs(server): uppercase first letter of comment ([ef05fe4](https://github.com/Fdawgs/ydh-authentication-service/commit/ef05fe4))
-   build(deps-dev): bump eslint-plugin-import from 2.20.0 to 2.20.1 ([c14297e](https://github.com/Fdawgs/ydh-authentication-service/commit/c14297e))
-   build(deps): make cross-env dep rather than devdep ([b181276](https://github.com/Fdawgs/ydh-authentication-service/commit/b181276))
-   build(scripts): change node_env to test for test scripts ([7fa75da](https://github.com/Fdawgs/ydh-authentication-service/commit/7fa75da))
-   fix(routes): remove slashes from param blacklist ([7538636](https://github.com/Fdawgs/ydh-authentication-service/commit/7538636))
-   feat(routes): add sanitization step ([771e10b](https://github.com/Fdawgs/ydh-authentication-service/commit/771e10b))
-   feat(routes): add simple error handling ([ee709d4](https://github.com/Fdawgs/ydh-authentication-service/commit/ee709d4))
-   bug(server): remove reassigning config values ([0a2a282](https://github.com/Fdawgs/ydh-authentication-service/commit/0a2a282))
-   refactor(server): move routing to own router instance ([2b38804](https://github.com/Fdawgs/ydh-authentication-service/commit/2b38804))
-   perf: set node_env variable for nodemon ([d67c987](https://github.com/Fdawgs/ydh-authentication-service/commit/d67c987))
-   perf: set node_env variables for test and production ([d867a9a](https://github.com/Fdawgs/ydh-authentication-service/commit/d867a9a))
-   chore(eslint): remove redundant rules ([9af0267](https://github.com/Fdawgs/ydh-authentication-service/commit/9af0267))

### BREAKING CHANGE

-   refactor to use separate router instances. configureRoute Server function replaced with configureRoutes

## <small>2.2.8 (2020-01-28)</small>

-   docs: add contributing guide ([137cb82](https://github.com/Fdawgs/ydh-authentication-service/commit/137cb82))
-   docs: declare yarn a non-optional prerequisite ([70b3021](https://github.com/Fdawgs/ydh-authentication-service/commit/70b3021))
-   docs: revise section order ([77d9dc3](https://github.com/Fdawgs/ydh-authentication-service/commit/77d9dc3))
-   docs(readme): add contributing section ([9433586](https://github.com/Fdawgs/ydh-authentication-service/commit/9433586))
-   docs(readme): grammatical fixes and minor corrections ([1b32492](https://github.com/Fdawgs/ydh-authentication-service/commit/1b32492))
-   docs(readme): move test section to contributing file ([1d704fa](https://github.com/Fdawgs/ydh-authentication-service/commit/1d704fa))
-   docs(readme): remove reference to npm ([25ad8bf](https://github.com/Fdawgs/ydh-authentication-service/commit/25ad8bf))
-   Bump eslint-config-prettier from 6.9.0 to 6.10.0 ([31dfeeb](https://github.com/Fdawgs/ydh-authentication-service/commit/31dfeeb))
-   Bump eslint-plugin-import from 2.19.1 to 2.20.0 ([4ebc836](https://github.com/Fdawgs/ydh-authentication-service/commit/4ebc836))
-   Bump eslint-plugin-jest from 23.3.0 to 23.6.0 ([603c381](https://github.com/Fdawgs/ydh-authentication-service/commit/603c381))
-   Bump jest from 24.9.0 to 25.1.0 ([0c61ac8](https://github.com/Fdawgs/ydh-authentication-service/commit/0c61ac8))
-   Bump typescript from 3.7.4 to 3.7.5 ([074381c](https://github.com/Fdawgs/ydh-authentication-service/commit/074381c))
-   Bump winston-daily-rotate-file from 4.4.1 to 4.4.2 ([592ae2c](https://github.com/Fdawgs/ydh-authentication-service/commit/592ae2c))
-   Update dependencies ([93ea4e3](https://github.com/Fdawgs/ydh-authentication-service/commit/93ea4e3))
-   chore: add prettierignore file ([c9c22fc](https://github.com/Fdawgs/ydh-authentication-service/commit/c9c22fc))
-   chore(package): remove redundant config values ([42917fc](https://github.com/Fdawgs/ydh-authentication-service/commit/42917fc))
-   style: add whitespace ([5b0162e](https://github.com/Fdawgs/ydh-authentication-service/commit/5b0162e))
-   ci(travis): fix build config ([14a4d18](https://github.com/Fdawgs/ydh-authentication-service/commit/14a4d18))
-   feat: add changelog generation ([6789224](https://github.com/Fdawgs/ydh-authentication-service/commit/6789224))
