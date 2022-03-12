/* 
Share-btn
作者：https://minecraft.fandom.com/zh/wiki/User:机智的小鱼君
源代码：https://www.wjghj.cn/wiki/MediaWiki:Gadget-Share-btn.js
授权协议：https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans
备注：此为修改版（由https://github.com/iHuer修改）。
 */
mw.loader.using('jquery.cookie', function () {
    /* 按钮 */
    $('.action-view .firstHeading').after(
        '<div id="share-this-page">' +
        '<button id="QR-btn">页面二维码</button>' +
        '<button id="purge-btn" title="使用Purge参数刷新页面">清除页面缓存</button>' +
        '</div>'
    );
    /* 短链接 */
    $.ajax({
        url: '/api.php',
        type: 'post',
        dataType: 'json',
        data: {
            action: 'shortenurl',
            url: location.href,
            format: 'json'
        },
        success: function (data) {
            var surl = data.shortenurl.shorturl;
            $('#s-url-placeholder').html('<a id="short-url" href="' + surl + '">' + surl + '</a>');
        }
    });
    /* 清除缓存 */
    $('#purge-btn').click(function () {
        var $this = $(this);
        if ($.cookie('wasPerged') > 0) {
            $this.html('请求频率过高 (<span id="purge-btn_countdown">' + Math.floor(($.cookie('wasPerged') -
                new Date().getTime()) / 1000) + '</span>)').attr('disabled', 'disabled');
            var endTime = $.cookie('wasPerged');
            setInterval(function () {
                var timeleft = Math.floor((endTime - new Date().getTime()) / 1000);
                if (timeleft < 1) {
                    $this.html('清除页面缓存').attr('disabled', false);
                    clearInterval();
                } else {
                    $('#purge-btn_countdown').html(timeleft);
                }
            }, 1000);
        } else {
            $this.html(
                '正在清除&nbsp;<img src="https://vignette.wikia.nocookie.net/dftest/images/8/8c/Ms-loading-spinner.svg" style="height:14px;width:auto" />'
            ).attr('disabled', 'disabled');
            // 设置30秒CD时间
            mw.loader.using(['jquery.cookie'], function () {
                var timeLeft = new Date();
                timeLeft.setTime(timeLeft.getTime() + 30 * 1000);
                $.cookie('wasPerged', new Date().getTime() + (30 * 1000), {
                    expires: timeLeft
                });
            });

            new mw.Api().post({
                action: 'purge',
                titles: wgPageName,
            }).done(function () {
                $this.html('清除成功!');
                window.location.reload();
            }).fail(function () {
                $this.html('清除失败，请重试').attr('disabled', false);
            });
        }
    });
    /* 生成二维码 */
    $('#QR-btn').click(function () {
        var QRurl =
            'https://api.qrserver.com/v1/create-qr-code/?color=Fl000000&bgcolor=FFFFFF&data=https://wjghj.cn/' +
            mw.config.get('wgPageName') + '&qzone=1&margin=0&size=150x150';
        var QRimg = '<img id="QR-code" src="' + QRurl +
            '"  alt="二维码服务检索失败！" style="width:150px;height:150px"/>';
        ssi_modal.show({
            sizeClass: 'dialog',
            className: 'centerbox',
            content: '<center>' +
                QRimg +
                '<div>此二维码可直接扫描。<br><span style="color:gray;font-size:70%;">您也可以<a href="' +
                QRurl + '" target="_blank">直接保存</a>二维码<br></span></div>' +
                '</center>',
            title: '分享本页二维码'
        });
    });
});
