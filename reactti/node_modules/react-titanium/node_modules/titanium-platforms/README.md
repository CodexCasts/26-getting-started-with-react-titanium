titanium-platforms
==================

Titanium™ SDK utils for device conditional code.

Usage
-----

To be used **only** with [Titaniumifier](https://github.com/smclab/titaniumifier) in both package mode and in [app mode](https://github.com/smclab/titaniumifier/wiki/Host-mode).

If you’re using Alloy just use one of the [built-in `OS_*` constants](http://docs.appcelerator.com/platform/latest/#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-ConditionalCode).

#### Install

```bash
$ npm install --save titanium-platforms
```

#### ECMAScript 5

```js
var OS_ANDROID = require('titanium-platforms/os/android');
var OS_IOS = require('titanium-platforms/os/ios');
var OS_MOBILEWEB = require('titanium-platforms/os/mobileweb');
var OS_WINDOWS = require('titanium-platforms/os/windows');
```

#### ECMAScript 2015 (aka ES6)

To be used with [Babel pre-compilation](https://github.com/smclab/titaniumifier/wiki/Host-mode#usage-with-babeljs), for example.

```js
import OS_ANDROID from 'titanium-platforms/os/android';
import OS_IOS from 'titanium-platforms/os/ios';
import OS_MOBILEWEB from 'titanium-platforms/os/mobileweb';
import OS_WINDOWS from 'titanium-platforms/os/windows';
```

License
-------

MIT
