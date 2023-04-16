export type ChromecastTypeByUserAgent = '' |
    'chromecast' |
    'google-nest-hub' |
    'chromecast-with-google-tv' |
    'android-tv-with-chromecast';

export function getChromecastTypeByUserAgent(userAgent: string): ChromecastTypeByUserAgent {
    if (userAgent.search('CrKey') === -1) {
        return '';
    }

    if (userAgent.search('Fuchsia') !== -1 || userAgent.search(/Android\)/) !== -1) {
        return 'google-nest-hub';
    }

    if (userAgent.search(/Android \d/) !== -1) {
        if (userAgent.search('Build/STTE') !== -1) {
            return 'chromecast-with-google-tv';
        }

        return 'android-tv-with-chromecast';
    }

    if (userAgent.search('DeviceType/AndroidTV') !== -1) {
        return 'android-tv-with-chromecast';
    }

    return 'chromecast';
}

export type ChromecastType = ChromecastTypeByUserAgent |
    'chromecast-1' |
    'chromecast-2' |
    'chromecast-ultra' |
    'chromecast-3' |
    'chromecast-with-google-tv-4k' |
    'chromecast-with-google-tv-hd' |
    'google-nest-hub-max';

export function getChromecastType(): ChromecastType {
    const type = getChromecastTypeByUserAgent(navigator.userAgent);

    if (type === 'chromecast') {
        // https://developers.google.com/cast/docs/media#video_codecs
        // Chromecast Ultra supports 'HEVC main profile, level 3.1'
        if (window.MediaSource && MediaSource.isTypeSupported('video/mp4; codecs=hev1.1.6.L93.B0')) {
            return 'chromecast-ultra';
        }

        // 3rd generation Chromecast supports 'H.264 high profile, level 4.2'
        if (window.MediaSource && MediaSource.isTypeSupported('video/mp4; codecs=avc1.64002A')) {
            return 'chromecast-3';
        }

        // 2nd generation Chromecast
        if (navigator.hardwareConcurrency === 2) {
            return 'chromecast-2';
        }

        // 1st generation Chromecast
        if (navigator.hardwareConcurrency === 1) {
            return 'chromecast-1';
        }
    }

    if (type === 'google-nest-hub') {
        // Nest Hub Max: 1280x800, Nest Hub: 1024x600
        if (screen.height === 800) {
            return 'google-nest-hub-max';
        }
    }

    if (type === 'chromecast-with-google-tv') {
        // Chromecast with Google TV supports Dolby Vision
        if (window.MediaSource && MediaSource.isTypeSupported('video/mp4; codecs=dvhe.05.06')) {
            return 'chromecast-with-google-tv-4k';
        }

        return 'chromecast-with-google-tv-hd';
    }

    return type;
}
