// ==UserScript==
// @name                 503 Auto Reloader
// @description    Auto Page Reload on Busy Servers
// @author              WhiteAnthrax
// @version            201201090239
// @include        *
// ==/UserScript==

(function () 
{
        if (document.title == '503 Service Temporarily Unavailable' )
        {window.location.reload(true);}
        else if (document.title == '503 Service Unavailable' )
        {window.location.reload(true);}
        else if (document.getElementsByTagName('h1')[0].innerHTML == 'Error 503')
        {window.location.reload(true);}
 })();
