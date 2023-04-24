var CheckCodecs = {
    video: document.createElement('video'),
    canPlayType: function (type) {
        return CheckCodecs.video.canPlayType(type);
    },
    isTypeSupported: function(type) {
        return MediaSource.isTypeSupported(type);
    },
    stripTags: function (text) {
        return text.replace(/(<([^>]+)>)/gi, '');
    },
    check: function(groups, title, handler) {
        var html = '<h2>' + title + '</h2>\n';
        var codecs = {};
        groups.forEach(function(group) {
            html += '<b>' + group.header + '</b>\n';

            group.items.forEach(function(item) {
                var result = handler(item.mediaType);
                var resultHtml = result;
                if (resultHtml === '') {
                    resultHtml = '""';
                }
                html += item.label + ', ' + '<code>' + item.mediaType + '</code>: ' + resultHtml + '\n';

                codecs[item.mediaType] = result;
            });

            html += '\n';
        });

        html += '\n';

        return {
            html: html,
            text: CheckCodecs.stripTags(html),
            json: JSON.stringify(codecs, '', 4)
        };
    }
};
