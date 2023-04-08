import { getChromecastType, getChromecastTypeByUserAgent } from '../src';
import {
    chromecastAndroidTvUserAgent,
    chromecastUserAgent,
    chromecastUserAgentDeviceType,
    chromecastWithGoogleTvUserAgent,
    firefoxUserAgent,
    safariUserAgent,
    fuchsiaUserAgent,
} from '../test/userAgent';

describe('Chromecast', () => {
    it('#getChromecastTypeByUserAgent', () => {
        const variants = [
            [chromecastUserAgent, 'chromecast'],
            [firefoxUserAgent, ''],
            [fuchsiaUserAgent, 'google-nest-hub'],
            [chromecastUserAgentDeviceType, 'chromecast'],
            [chromecastWithGoogleTvUserAgent, 'chromecast-with-google-tv'],            [chromecastAndroidTvUserAgent, 'android-tv-with-chromecast'],
            [safariUserAgent, ''],
        ];

        variants.forEach(([userAgent, expected]) => {
            expect(getChromecastTypeByUserAgent(userAgent)).toEqual(expected);
        });
    });
});
