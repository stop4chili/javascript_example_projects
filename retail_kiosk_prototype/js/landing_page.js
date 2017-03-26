/*
 Google Analytics code
*/
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-89391134-1', {'storage': 'none'});
ga('set', 'checkProtocolTask', null);
ga('send', 'pageview', {'title': 'Landing', 'page': '/landing'});
/*
 End Google Analytics code
*/


$(document).ready(function () {
    try {
        Events.saveEvent("pageview", JSON.stringify({'page': 'landing'}));
        Events.saveEvent("session_begin", "");
    } catch (e) {
        // events only work in player app.
    }

    localStorage.setItem("session_begin", new Date().getTime());
    
});



