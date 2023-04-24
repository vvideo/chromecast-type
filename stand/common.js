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
        groups.forEach(function(group) {
            html += '<b>' + group.header + '</b>\n';

            group.items.forEach(function(item) {
                var result = handler(item.mediaType);
                if (result === '') {
                    result = '""';
                }
                html += item.label + ', ' + '<code>' + item.mediaType + '</code>: ' + result + '\n';
            });

            html += '\n';
        });

        return html + '\n';
    }
};
