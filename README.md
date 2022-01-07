<h1 align="center">DD</h1>
<p align="center">DD Package provides functionality for JS console logging, inspired by the PHP Symfony dd() and dump() functions.</p>

<p align="center">
<a href="https://github.com/glowyjs/dd/releases"><img alt="Version" src="https://img.shields.io/github/release/glowyjs/dd.svg?label=version&color=green"></a> <a href="https://github.com/glowyjs/dd"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a>

## Install

```
$ npm install --save @glowyjs/dd
```

## Usage

```js
import {dump, dd} from '@glowyjs/dd';

dump('Foo');
//=> Foo

dump('Foo', 'Bar');
//=> Foo
//=> Bar

dd('Foo', 'Bar')
//=> Foo
//=> Bar
//
// dd
//
// Function threw exception that is not an error:
//
// 'Stopped execution because dd(), use dump() if you want to proceed.'
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/glowyjs/dd/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
