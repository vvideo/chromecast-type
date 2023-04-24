var Codecs = [
    {
        header: 'MP4 video and audio',
        items: [
            // Video codec, Video profile, Audio codec, Audio profile
            { label: 'H.264 level 3.0, baseline, AAC, aac_he', mediaType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.5"' },
            { label: 'H.264 level 3.0, baseline, AAC, aac_lc', mediaType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
            { label: 'H.264 level 3.0, MP3', mediaType: 'video/mp4; codecs="avc1.42E01E, mp4a.69"' },
            { label: 'H.264 level 3.0, MP3', mediaType: 'video/mp4; codecs="avc1.640028, mp4a.6B"' },
            { label: 'H.264 level 3.1, baseline, AAC, aac_he', mediaType: 'video/mp4; codecs="avc1.42E01F, mp4a.40.5"' },
            { label: 'H.264 level 3.1, baseline, AAC, aac_lc', mediaType: 'video/mp4; codecs="avc1.42E01F, mp4a.40.5"' },
            { label: 'H.264 level 3.1, MP3', mediaType: 'video/mp4; codecs="avc1.42E01F, mp4a.69"' },
            { label: 'H.264 level 3.1, MP3', mediaType: 'video/mp4; codecs="avc1.42E01F, mp4a.6B"' },
            { label: 'H.264 level 3.1, main, AAC, aac_he', mediaType: 'video/mp4; codecs="avc1.4D401F, mp4a.40.5"' },
            { label: 'H.264 level 3.1, main, AAC, aac_lc', mediaType: 'video/mp4; codecs="avc1.4D401F, mp4a.40.2"' },
            { label: 'H.264 level 3.1, main, MP3', mediaType: 'video/mp4; codecs="avc1.4D401F, mp4a.69"' },
            { label: 'H.264 level 3.1, main, MP3', mediaType: 'video/mp4; codecs="avc1.4D401F, mp4a.6B"' },
            { label: 'H.264 level 4.0, main, AAC, aac_he', mediaType: 'video/mp4; codecs="avc1.4D4028, mp4a.40.5"' },
            { label: 'H.264 level 4.0, main, AAC, aac_lc', mediaType: 'video/mp4; codecs="avc1.4D4028, mp4a.40.2"' },
            { label: 'H.264 level 4.0, main, MP3', mediaType: 'video/mp4; codecs="avc1.4D4028, mp4a.69"' },
            { label: 'H.264 level 4.0, main, MP3', mediaType: 'video/mp4; codecs="avc1.4D4028, mp4a.6B"' },
            { label: 'H.264 level 4.0, high, AAC, aac_he', mediaType: 'video/mp4; codecs="avc1.640028, mp4a.40.5"' },
            { label: 'H.264 level 4.0, high, AAC, aac_lc', mediaType: 'video/mp4; codecs="avc1.640028, mp4a.40.2"' },
            { label: 'H.264 level 4.0, high, MP3', mediaType: 'video/mp4; codecs="avc1.640028, mp4a.69"' },
            { label: 'H.264 level 4.0, high, MP3', mediaType: 'video/mp4; codecs="avc1.640028, mp4a.6B"' },
            { label: 'H.264 level 4.2, high, AAC, aac_he', mediaType: 'video/mp4; codecs="avc1.64002A, mp4a.40.5"' },
            { label: 'H.264 level 4.2, high, AAC, aac_lc', mediaType: 'video/mp4; codecs="avc1.64002A, mp4a.40.2"' },
            { label: 'H.264 level 4.2, high, MP3', mediaType: 'video/mp4; codecs="avc1.64002A, mp4a.40.69"' },
            { label: 'H.264 level 4.2, high, MP3', mediaType: 'video/mp4; codecs="avc1.64002A, mp4a.40.6B"' },
        ]
    },
    {
        header: 'MP4 video only',
        items: [
            // Video codec, Video profile, Video level (Notes)
            { label: 'Dolby Vision, 05, 06 (4K24fps)', mediaType: 'video/mp4; codecs="dvhe.05.06"' },
            { label: 'Dolby Vision, 05, 07 (4K30fps)', mediaType: 'video/mp4; codecs="dvhe.05.07"' },
            { label: 'Dolby Vision, 05, 09 (4K60fps)', mediaType: 'video/mp4; codecs="dvhe.05.09"' },
            { label: 'Dolby Vision, 08, 06 (4K24fps, compatible with HEVC decoder)', mediaType: 'video/mp4; codecs="dvhe.08.06"' },
            { label: 'Dolby Vision, 08, 07 (4K30fps, compatible with HEVC decoder)', mediaType: 'video/mp4; codecs="dvhe.08.07"' },
            { label: 'Dolby Vision, 08, 09 (4K60fps, compatible with HEVC decoder)', mediaType: 'video/mp4; codecs="dvhe.08.09"' },
            { label: 'H.265, main, 5.0', mediaType: 'video/mp4; codecs="hev1.1.6.L150.B0"' },
            { label: 'H.265, main, 5.1', mediaType: 'video/mp4; codecs="hev1.1.6.L153.B0"' },
            { label: 'H.265, main10, 5.0', mediaType: 'video/mp4; codecs="hev1.2.6.L150.B0"' },
            { label: 'H.265, main10, 5.1', mediaType: 'video/mp4; codecs="hev1.2.6.L153.B0"' },
        ]
    },
    {
        header: 'MP4 non-compliant audio media types',
        items: [
            // Format, Audio codec
            { label: 'M4A, HE-AAC', mediaType: 'audio/mp4; codecs="mp4a.40.05"' },
            { label: 'M4A, LC-AAC', mediaType: 'audio/mp4; codecs="mp4a.40.02"' }
        ]
    },
    {
        header: 'MP4 audio only',
        items: [
            // Format, Audio codec, Audio profile
            { label: 'M4A, AAC, aac_he', mediaType: 'audio/mp4; codecs="mp4a.40.5"' },
            { label: 'M4A, AAC, aac_lc', mediaType: 'audio/mp4; codecs="mp4a.40.2"' },
            { label: 'MP3', mediaType: 'audio/mp3' },
            { label: 'MPA, MP3', mediaType: 'audio/mpeg' },
            { label: 'MPA, MP3', mediaType: 'audio/mpeg; codecs="mp3"' },
            { label: 'MP4, MP3', mediaType: 'audio/mp4; codecs="mp4a.69"' },
            { label: 'MP4, MP3', mediaType: 'audio/mp4; codecs="mp4a.6B"' }
        ]
    },
    {
        header: 'Audio passthrough',
        items: [
            // Format, Audio codec
            { label: 'MP4, AAC', mediaType: 'audio/mp4; codecs="mp4a.40.2"' },
            { label: 'MP4, AC-3', mediaType: 'audio/mp4; codecs="ac-3"' },
            { label: 'MP4, AC-3', mediaType: 'audio/mp4; codecs="mp4a.a5"' },
            { label: 'MP4, E-AC-3', mediaType: 'audio/mp4; codecs="ec-3"' },
            { label: 'MP4, E-AC-3', mediaType: 'audio/mp4; codecs="mp4a.a6"' },
            { label: 'MP4, MPEG-H Audio', mediaType: 'audio/mp4; codecs="mhm1.0x0D"' },
            { label: 'MP4, Dolby® Atmos™', mediaType: 'audio/mp4; codecs="ec-3"; spatialRendering=true' }
        ],
    },
    {
        header: 'WebM video and audio',
        items: [
            // Format, Video codec, Audio codec
            { label: 'WebM, VP8, Vorbis', mediaType: 'video/webm; codecs="vp8, vorbis"' },
            { label: 'WebM, VP9, Vorbis', mediaType: 'video/webm; codecs="vp9, vorbis"' },
            { label: 'WebM (audio only), Vorbis', mediaType: 'audio/webm; codecs="vorbis"' }
        ]
    }
];
