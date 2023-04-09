# chromecast-type
 Google Cast Web SDK does not allow you to determine the Chromecast version, but indirectly, this can be done.
 
 ## Support
 - Chromecast 1st generation
 - Chromecast 2nd generation
 - Chromecast Ultra
 - Chromecast 3th generation
 - Chromecast with Google TV 4K
 - Chromecast with Google TV HD
 - Android TV with Chromecast
 - Google Nest Hub
 - Google Nest Hub Max


## Install
`npm install chromecast-type`

## Using
### `getChromecastTypeByUserAgent(userAgent): string`
For Node.js:
```js
import { getChromecastTypeByUserAgent } from 'chromecast-type';
// ...
console.log(getChromecastTypeByUserAgent(userAgent));
```

For browser:
```js
import { getChromecastTypeByUserAgent } from 'chromecast-type';
// ...
console.log(getChromecastTypeByUserAgent(navigator.userAgent));
```

### `getChromecastType(): string`
For only browser using.
```js
import { getChromecastType } from 'chromecast-type';

console.log(getChromecastType());
```

## Links
- [Wiki](https://en.wikipedia.org/wiki/Chromecast)
- [Supported Media for Google Cast
](https://developers.google.com/cast/docs/media#video_codecs)
