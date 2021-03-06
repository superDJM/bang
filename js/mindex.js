function _$(e, n) {
    var t = e.substr(0, 1);
    return document.querySelectorAll ? (n = n || document, "#" === t && 1 === e.split(" ").length ? n.querySelector(e) : n.querySelectorAll(e)) : void 0
}
function hasClass(e, n) {
    return e.className.match(new RegExp("(\\s|^)" + n + "(\\s|$)"))
}
function addClass(e, n) {
    if (e.length > 0)for (var t = 0; t < e.length; t++)hasClass(e[t], n) || (e[t].className += " " + n); else hasClass(e, n) || (e.className += " " + n)
}
function removeClass(e, n) {
    var t = new RegExp(n, "gm");
    if (e.length > 0)for (var a = 0; a < e.length; a++)e[a].className = e[a].className.replace(t, ""); else e.className = e.className.replace(t, "")
}
function addEvent(e, n, t) {
    window.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent("on" + n, function (n) {
        return t.call(e, n)
    })
}
function initFirstSite() {
    var e = window.innerHeight, n = window.innerWidth, t = _$("#header-img");
    if (418 >= e) {
        t.setAttribute("src", small_banner_url);
        var a = .828125
    } else var a = 1.069444;
    var i = parseInt((e - n * a - 80) / 2);
    _$("#top-btn").style.margin = i + "px 77px"
}
function isAnimate() {
    var e = window.navigator.userAgent.toLowerCase();
    return /coolpad 5890/.test(e) && /360/.test(e) ? !1 : !0
}
window.onload = function () {
    var e = document, n = e.body, t = e.head;
    t.removeChild(e.getElementById("s")), n.removeChild(e.getElementById("t")), initFirstSite();
    for (var a = [_$("#more"), _$(".part1")[0], _$(".part2")[0], _$(".part3")[0], _$(".part4")[0], _$("#footer")], i = [], s = 0; s < a.length; s++) {
        var o = a[s], r = .5 * o.clientHeight + o.offsetTop;
        i[s] = r
    }
    isAnimate() ? window.onscroll = function () {
        var e = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (0 !== e)for (var n = window.innerHeight + e, t = 0; t < a.length; t++) {
            var s = a[t], o = i[t];
            n > o && (0 != t || hasClass(s, "hide-animation") ? t > 0 && hasClass(s, "hide-animation") && removeClass(s, "hide-animation") : addClass(s, "hide-animation"))
        }
    } : (removeClass(_$(".hide-animation"), "hide-animation"), addClass(_$("#more"), "hide-animation"))
};