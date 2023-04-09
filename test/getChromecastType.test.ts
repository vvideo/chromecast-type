import { getChromecastType, getChromecastTypeByUserAgent } from '../src';
import {
    chromecastAndroidTvUserAgent,
    chromecastUserAgent,
    chromecastUserAgentDeviceType,
    chromecastWithGoogleTvUserAgent,
    firefoxUserAgent,
    safariUserAgent,
    fuchsiaUserAgent,
    googleNestHub,
    googleNestHubMax,
} from '../test/userAgent';

describe('Chromecast', () => {
    it('#getChromecastTypeByUserAgent', () => {
        const variants = [
            [chromecastUserAgent, 'chromecast'],

            [chromecastUserAgentDeviceType, 'chromecast'],
            [chromecastWithGoogleTvUserAgent, 'chromecast-with-google-tv'],
            [chromecastAndroidTvUserAgent, 'android-tv-with-chromecast'],

            [fuchsiaUserAgent, 'google-nest-hub-2'],
            [googleNestHub, 'google-nest-hub-1'],
            [googleNestHubMax, 'chromecast'],

            [safariUserAgent, ''],
            [firefoxUserAgent, ''],
        ];

        variants.forEach(([userAgent, expected]) => {
            expect(getChromecastTypeByUserAgent(userAgent)).toEqual(expected);
        });
    });

    it('#getChromecastType', () => {
        expect(getChromecastType()).toEqual('');
    });
});
