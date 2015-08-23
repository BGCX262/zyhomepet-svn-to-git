function setCopy(text, msg) {
        if (BROWSER.ie) {
                clipboardData.setData('Text', text);
                if (msg) {
                        showPrompt(null, null, '<span style="color: rgb(255, 255, 255); font-size: 14px;font-weight:700">'+msg+'</span>', '3000')}
        } else {
                var msg = '<div style="text-decoration:underline;">点此复制到剪贴板</div>' + AC_FL_RunContent('id', 'clipboardswf', 'name', 'clipboardswf', 'devicefont', 'false', 'width', '120', 'height', '40', 'src', 'images/common/clipboard.swf', 'menu', 'false', 'allowScriptAccess', 'sameDomain', 'swLiveConnect', 'true', 'wmode', 'transparent', 'style', 'margin-top:-20px');
                showPrompt(null, null, '<span style="color: rgb(255, 255, 255); font-size: 14px;font-weight:700">'+msg+'</span>', '3000');
                text = text.replace(/[\xA0]/g, ' ');
                clipboardswfdata = text;
        }
}