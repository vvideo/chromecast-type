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

            [fuchsiaUserAgent, 'google-nest-hub'],
            [googleNestHub, 'google-nest-hub'],
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
