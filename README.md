# facebook-locales

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Maps locales to Facebook locales.

### Usage
Install the library with `npm install facebook-locales`

```javascript
var FacebookLocales = require('facebook-locales');

FacebookLocales.bestFacebookLocaleFor("en_US"); //-> "en_US"
FacebookLocales.bestFacebookLocaleFor("fr_FR"); //-> "fr_FR"
FacebookLocales.bestFacebookLocaleFor("es_AR"); //-> "es_LA"
FacebookLocales.bestFacebookLocaleFor("ar_EG"); //-> "ar_AR"
```

[downloads-image]: https://img.shields.io/npm/dm/facebook-locales.svg

[npm-url]: https://npmjs.org/package/facebook-locales
[npm-image]: https://img.shields.io/npm/v/facebook-locales.svg
