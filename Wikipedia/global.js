/* 
iHuer用于Wikipedia全域的MediaWiki个人JavaScript
作者：https://GitHub.com/iHuer
信息：https://GitHub.com/iHuer/MediaWiki-Backup/blob/main/README.md
源代码：https://GitHub.com/iHuer/MediaWiki-Backup/blob/main/Wikipedia/global.js
 */

/* 
iHuer用于Wikipedia全域的MediaWiki个人CSS
作者：https://GitHub.com/iHuer
信息：https://GitHub.com/iHuer/MediaWiki-Backup/blob/main/README.md
源代码：https://GitHub.com/iHuer/MediaWiki-Backup/blob/main/Wikipedia/global.css
 */
mw.loader.load('https://cdn.jsdelivr.net/gh/iHuer/MediaWiki-Backup@main/Wikipedia/global.min.css', 'text/css');

/* 
InPageEdit
作者：https://minecraft.fandom.com/zh/wiki/User:机智的小鱼君
信息：https://ipe.js.org
源代码：https://github.com/inpageedit/inpageedit-v2
 */
mw.loader.load("https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js");

//参数设置
window.InPageEdit = window.InPageEdit || {};
InPageEdit.myPreference = {
  "editMinor": true,
  "editSummary": "$section$oldid",
  "redLinkQuickEdit": false,
  "outSideClose": false,
  "watchList": "0",
  "plugins": [
    "toolbox.js",
    "edit-any-page.js",
    "color-preview.js",
    "quick-thank.js",
    "fix-double-entrance.js"
  ]
}

/* 
PreViewTab
作者：https://terraria.fandom.com/zh/wiki/UserProfile:Westgrass
信息：https://terraria.fandom.com/zh/wiki/MediaWiki:Gadget-previewTab
源代码：
JS：https://terraria.fandom.com/zh/wiki/MediaWiki:Gadget-previewTab.js
CSS：https://terraria.fandom.com/zh/wiki/MediaWiki:Gadget-previewTab.css
 */
// JS
mw.loader.load('https://terraria.fandom.com/zh/index.php?title=MediaWiki:Gadget-previewTab.js&action=raw&ctype=text/javascript');

// CSS
mw.loader.load('https://terraria.fandom.com/zh/index.php?title=MediaWiki:Gadget-previewTab.css&action=raw&ctype=text/css', 'text/css');

/* 
CopyTitle
作者：https://help.fandom.com/wiki/UserProfile:RheingoldRiver
信息：https://help.fandom.com/wiki/MediaWiki:Gadget-copyTitle
源代码：
JS：https://help.fandom.com/wiki/MediaWiki:Gadget-copyTitle.js
CSS：https://help.fandom.com/wiki/MediaWiki:Gadget-copyTitle.css
 */
// JS
mw.loader.load('https://help.fandom.com/index.php?title=MediaWiki:Gadget-copyTitle.js&action=raw&ctype=text/javascript');

// CSS
mw.loader.load('https://help.fandom.com/index.php?title=MediaWiki:Gadget-copyTitle.css&action=raw&ctype=text/css', 'text/css');

/* 
DocTabs
作者：https://minecraft.fandom.com/wiki/User:Majr
源代码：https://minecraft.fandom.com/wiki/User:Majr/docTabs.js
 */
mw.loader.load('https://minecraft.fandom.com/index.php?title=User:Majr/docTabs.js&action=raw&ctype=text/javascript');

/* 
更新服务器缓存
作者：https://zh.wikipedia.org/wiki/User:AngeCI
信息：https://zh.wikipedia.org/zh-hans/Wikipedia:更新服务器缓存#自定义配置
源代码：https://zh.wikipedia.org/zh-hans/Wikipedia:更新服务器缓存#自定义配置
 */
$(function () {
    var hist; var url;
    if (!(hist = document.getElementById('ca-history') )) return;
    if (!(url = hist.getElementsByTagName('a')[0] )) return;
    if (!(url = url.href )) return;
    mw.util.addPortletLink('p-cactions', url.replace(/([?&]action=)history([&#]|$)/, '$1purge$2'),
                   wgULS("清除缓存","清除快取"), 'ca-purge', wgULS("更新服务器缓存","更新伺服器快取"), '*');
});

/* 
FloatToc
作者：https://zh.moegirl.org.cn/User:850710247liu
源代码：https://zh.moegirl.org.cn/User:850710247liu/js/FloatToc.js
 */
mw.loader.load('https://zh.moegirl.org.cn/index.php?title=User:850710247liu/js/FloatToc.js&action=raw&ctype=text/javascript');

/* 
Origin title
作者：https://zh.wikipedia.org/wiki/User:Shizhao
源代码：https://zh.wikipedia.org/wiki/User:Shizhao/origintitle.js
 */
mw.loader.load('https://zh.wikipedia.org/w/index.php?title=User:Shizhao/origintitle.js&action=raw&ctype=text/javascript');

/* 
XTools
作者：
https://meta.wikimedia.org/wiki/User:MusikAnimal
https://en.wikipedia.org/wiki/User:Matthewrbowker
https://en.wikisource.org/wiki/User:Samwilson
信息：https://www.mediawiki.org/wiki/XTools/zh
源代码：https://github.com/x-tools/xtools
 */
mw.loader.load('https://www.mediawiki.org/w/index.php?title=XTools/ArticleInfo.js&action=raw&ctype=text/javascript');