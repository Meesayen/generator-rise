<div align="center">
  <a href="http://git.io/rise">
    <img width=110px src="https://cloud.githubusercontent.com/assets/8317250/11298615/b7d9f5b6-8fc3-11e5-8f27-8f4a6e60db8e.png">
  </a>
</div>
<br>

<p align="center"><big>
Scaffold out a node module with <a href="https://github.com/lukehoban/es6features">ES6</a>+, <a href="https://babeljs.io">Babel</a>, <a href="https://github.com/sindresorhus/ava">Ava</a> and <a href="https://docs.npmjs.com/misc/scripts">npm scripts</a>
</big></p>

<p align="center">
  <a href="https://npmjs.org/package/generator-rise">
    <img src="https://img.shields.io/npm/v/generator-rise.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/bucaran/generator-rise">
    <img src="https://img.shields.io/coveralls/bucaran/generator-rise.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/bucaran/generator-rise">
    <img src="https://img.shields.io/travis/bucaran/generator-rise.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/generator-rise">
    <img src="http://img.shields.io/npm/dm/generator-rise.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/bucaran/generator-rise.svg">
    <img src="https://david-dm.org/bucaran/generator-rise.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/bucaran/generator-rise/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/generator-rise.svg?style=flat-square"
         alt="License">
  </a>
</p>

# Install

```
npm i -g generator-rise
```

# 升 Features

* [Babel](https://babeljs.io)
* [Lint](http://stackoverflow.com/questions/8503559/what-is-linting) with [ESLint](http://eslint.org/)
* [Tests](http://programmers.stackexchange.com/questions/135218/what-is-the-difference-between-writing-test-cases-for-bdd-and-tdd) with [Ava][ava] in ES6
* [Travis CI](http://docs.travis-ci.com/user/languages/javascript-with-nodejs/) and [Coveralls](https://coveralls.io) with [nyc][nyc] code coverage
* Productivity   [scripts](https://github.com/bucaran/generator-rise/blob/master/app/templates/package.json#L11) and source [watcher](https://github.com/mikeal/watch)
* [Check](https://github.com/maxogden/dependency-check) `package` dependencies
* Automatic TOC with [tocdoc](https://github.com/thlorenz/doctoc)
* Badges with [![][shields]](http://shields.io/)
* Option to center title and badges in README.
* Simple [workflow](#beginner-workflow).
<!-- * [Example][example] -->

# Usage
> You need [Yeoman](http://yeoman.io/) to run this command.

```
yo rise
→ create package.json
→ create README.md
→ create LICENSE
→ create CHANGELOG.md
→ create src/index.js
→ create test/index.test.js
→ create .babelrc
→ create .editorconfig
→ create .gitignore
→ create .travis.yml
→ create .eslintrc
→ create .eslintignore
```

# Workflow

* Add code to `src/index.js` and tests to `test/index.test.js`.

* Lint, build and test a project with `npm run build`.

* Build and watch changes in `src/` with `npm run watch`

* Run only tests with `npm run test`.

* Check coverage with `npm run coverage`.

* Generate a TOC for the `CHANGELOG` with `npm run toc`

* Deploy to a remote origin with `npm run deploy`.

* Bump version and publish a package with `npm run major` or `minor/patch`

# License

MIT © [Jorge Bucaran][author] (Enhanced by [Federico Giovagnoli][Meesayen])

[author]:  https://github.com/bucaran
[Meesayen]:  https://github.com/Meesayen
[ava]:    https://github.com/sindresorhus/ava
[nyc]:    https://github.com/bcoe/nyc
[shields]: https://img.shields.io/badge/shields-io-FF3399.svg?style=flat-square
<!-- [example]: https://github.com/bucaran/example-rise -->
