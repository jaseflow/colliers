/* Querystring helper
- Call with a query string key to retrieve the value (or blank, if it's got no value). Null if not found
ie: ?id=1&flag   queryString("id") == "1"    queryString("flag") == ""
- Call with no args to return an object containing all pairs (each key is a property. If the key has no value, the property will be null)
ie: ?id=1&flag   queryString() == {id:"1", flag:null}
- Call with null to retrieve the first item on the querystring:
ie: ?somecode&id=1   queryString(null) == "somecode"   queryString("id") == 1
*/
jQuery.queryString = function (name) {
    if (name === undefined) {
        if (!location.search) return {};
        var parts = location.search.substr(1).split('&');
        var ret = {};
        for (var x = 0; x < parts.length; x++) {
            var cutat = parts[x].indexOf('=');
            if (cutat == -1) ret[parts[x]] = null;
            else ret[parts[x].substr(0, cutat)] = decodeURIComponent(parts[x].substr(cutat + 1));
        }
        return ret;
    }
    else if (name === null) {
        if (!location.search) return null;
        var m = /\?(.*?)(?:&|$)/.exec(location.search);
        return m == null ? null : decodeURIComponent(m[1]);
    }
    else {
        if (!location.search) return null;
        var rx = new RegExp("[?&]" + name + "(?:=(.*?)(?:&|$))?", "i");
        var m = rx.exec(location.search);
        return m == null ? null : decodeURIComponent(m[1]);
    }
}



/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function (e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function (e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function (e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function (e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function (e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function (e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function (e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function (e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function (e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function (e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function (e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function (e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function (e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function (e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function (e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function (e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function (e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });

/*================================================================================
 * @name: bPopup - if you can't get it up, use bPopup
 * @author: (c)Bjoern Klinggaard (twitter@bklinggaard)
 * @demo: http://dinbror.dk/bpopup
 * @version: 0.9.3.min
 ================================================================================*/
(function (b) { b.fn.bPopup = function (u, C) { function v() { a.modal && b('<div class="b-modal ' + e + '"></div>').css({ backgroundColor: a.modalColor, position: "fixed", top: 0, right: 0, bottom: 0, left: 0, opacity: 0, zIndex: a.zIndex + l }).appendTo(a.appendTo).fadeTo(a.speed, a.opacity); z(); c.data("bPopup", a).data("id", e).css({ left: "slideIn" === a.transition ? -1 * (m + h) : n(!(!a.follow[0] && p || g)), position: a.positionStyle || "absolute", top: "slideDown" === a.transition ? -1 * (q + h) : r(!(!a.follow[1] && s || g)), "z-index": a.zIndex + l + 1 }).each(function () { a.appending && b(this).appendTo(a.appendTo) }); D(!0) } function t() { a.modal && b(".b-modal." + c.data("id")).fadeTo(a.speed, 0, function () { b(this).remove() }); a.scrollBar || b("html").css("overflow", "auto"); b(".b-modal." + e).unbind("click"); j.unbind("keydown." + e); d.unbind("." + e).data("bPopup", 0 < d.data("bPopup") - 1 ? d.data("bPopup") - 1 : null); c.undelegate(".bClose, ." + a.closeClass, "click." + e, t).data("bPopup", null); D(); return !1 } function E(f) { var b = f.width(), e = f.height(), d = {}; a.contentContainer.css({ height: e, width: b }); e >= c.height() && (d.height = c.height()); b >= c.width() && (d.width = c.width()); w = c.outerHeight(!0); h = c.outerWidth(!0); z(); a.contentContainer.css({ height: "auto", width: "auto" }); d.left = n(!(!a.follow[0] && p || g)); d.top = r(!(!a.follow[1] && s || g)); c.animate(d, 250, function () { f.show(); x = A() }) } function D(f) { switch (a.transition) { case "slideIn": c.css({ display: "block", opacity: 1 }).animate({ left: f ? n(!(!a.follow[0] && p || g)) : j.scrollLeft() - (h || c.outerWidth(!0)) - 200 }, a.speed, a.easing, function () { B(f) }); break; case "slideDown": c.css({ display: "block", opacity: 1 }).animate({ top: f ? r(!(!a.follow[1] && s || g)) : j.scrollTop() - (w || c.outerHeight(!0)) - 200 }, a.speed, a.easing, function () { B(f) }); break; default: c.stop().fadeTo(a.speed, f ? 1 : 0, function () { B(f) }) } } function B(f) { f ? (d.data("bPopup", l), c.delegate(".bClose, ." + a.closeClass, "click." + e, t), a.modalClose && b(".b-modal." + e).css("cursor", "pointer").bind("click", t), !G && (a.follow[0] || a.follow[1]) && d.bind("scroll." + e, function () { x && c.dequeue().animate({ left: a.follow[0] ? n(!g) : "auto", top: a.follow[1] ? r(!g) : "auto" }, a.followSpeed, a.followEasing) }).bind("resize." + e, function () { if (x = A()) clearTimeout(F), F = setTimeout(function () { z(); c.dequeue().each(function () { g ? b(this).css({ left: m, top: q }) : b(this).animate({ left: a.follow[0] ? n(!0) : "auto", top: a.follow[1] ? r(!0) : "auto" }, a.followSpeed, a.followEasing) }) }, 50) }), a.escClose && j.bind("keydown." + e, function (a) { 27 == a.which && t() }), k(C)) : (c.hide(), k(a.onClose), a.loadUrl && (a.contentContainer.empty(), c.css({ height: "auto", width: "auto" }))) } function n(a) { return a ? m + j.scrollLeft() : m } function r(a) { return a ? q + j.scrollTop() : q } function k(a) { b.isFunction(a) && a.call(c) } function z() { var b; s ? b = a.position[1] : (b = ((window.innerHeight || d.height()) - c.outerHeight(!0)) / 2 - a.amsl, b = b < y ? y : b); q = b; m = p ? a.position[0] : ((window.innerWidth || d.width()) - c.outerWidth(!0)) / 2; x = A() } function A() { return (window.innerHeight || d.height()) > c.outerHeight(!0) + y && (window.innerWidth || d.width()) > c.outerWidth(!0) + y } b.isFunction(u) && (C = u, u = null); var a = b.extend({}, b.fn.bPopup.defaults, u); a.scrollBar || b("html").css("overflow", "hidden"); var c = this, j = b(document), d = b(window), G = /OS 6(_\d)+/i.test(navigator.userAgent), y = 20, l = 0, e, x, s, p, g, q, m, w, h, F; c.close = function () { a = this.data("bPopup"); e = "__b-popup" + d.data("bPopup") + "__"; t() }; return c.each(function () { if (!b(this).data("bPopup")) if (k(a.onOpen), l = (d.data("bPopup") || 0) + 1, e = "__b-popup" + l + "__", s = "auto" !== a.position[1], p = "auto" !== a.position[0], g = "fixed" === a.positionStyle, w = c.outerHeight(!0), h = c.outerWidth(!0), a.loadUrl) switch (a.contentContainer = b(a.contentContainer || c), a.content) { case "iframe": var f = b('<iframe class="b-iframe" scrolling="no" frameborder="0"></iframe>'); f.appendTo(a.contentContainer); w = c.outerHeight(!0); h = c.outerWidth(!0); v(); f.attr("src", a.loadUrl); k(a.loadCallback); break; case "image": v(); b("<img />").load(function () { k(a.loadCallback); E(b(this)) }).attr("src", a.loadUrl).hide().appendTo(a.contentContainer); break; default: v(), b('<div class="b-ajax-wrapper"></div>').load(a.loadUrl, a.loadData, function () { k(a.loadCallback); E(b(this)) }).hide().appendTo(a.contentContainer) } else v() }) }; b.fn.bPopup.defaults = { amsl: 50, appending: !0, appendTo: "body", closeClass: "b-close", content: "ajax", contentContainer: !1, easing: "swing", escClose: !0, follow: [!0, !0], followEasing: "swing", followSpeed: 500, loadCallback: !1, loadData: !1, loadUrl: !1, modal: !0, modalClose: !0, modalColor: "#000", onClose: !1, onOpen: !1, opacity: 0.7, position: ["auto", "auto"], positionStyle: "absolute", scrollBar: !0, speed: 250, transition: "fadeIn", zIndex: 1099999 } })(jQuery);

/*
* jQuery BlockUI; v20130718
* http://jquery.malsup.com/block/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
(function () { "use strict"; function e(e) { function o(o, i) { var s, h, k = o == window, v = i && void 0 !== i.message ? i.message : void 0; if (i = e.extend({}, e.blockUI.defaults, i || {}), !i.ignoreIfBlocked || !e(o).data("blockUI.isBlocked")) { if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), v = void 0 === v ? i.message : v, k && b && t(window, { fadeOut: 0 }), v && "string" != typeof v && (v.parentNode || v.jquery)) { var y = v.jquery ? v[0] : v, m = {}; e(o).data("blockUI.history", m), m.el = y, m.parent = y.parentNode, m.display = y.style.display, m.position = y.style.position, m.parent && m.parent.removeChild(y) } e(o).data("blockUI.onUnblock", i.onUnblock); var g, I, w, U, x = i.baseZ; g = r || i.forceIframe ? e('<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>') : e('<div class="blockUI" style="display:none"></div>'), I = i.theme ? e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>') : e('<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && k ? (U = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', i.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : i.theme ? (U = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', i.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), v && (i.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), i.theme || I.css(i.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || i.forceIframe) && g.css("opacity", 0); var C = [g, I, w], S = k ? e("body") : e(o); e.each(C, function () { this.appendTo(S) }), i.theme && i.draggable && e.fn.draggable && w.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" }); var O = f && (!e.support.boxModel || e("object,embed", k ? null : o).length > 0); if (u || O) { if (k && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(o, "borderTopWidth"), T = d(o, "borderLeftWidth"), M = E ? "(0 - " + E + ")" : 0, B = T ? "(0 - " + T + ")" : 0; e.each(C, function (e, o) { var t = o[0].style; if (t.position = "absolute", 2 > e) k ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && t.setExpression("left", B), M && t.setExpression("top", M); else if (i.centerY) k && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0; else if (!i.centerY && k) { var n = i.css && i.css.top ? parseInt(i.css.top, 10) : 0, s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + n + ') + "px"'; t.setExpression("top", s) } }) } if (v && (i.theme ? w.find(".ui-widget-content").append(v) : w.append(v), (v.jquery || v.nodeType) && e(v).show()), (r || i.forceIframe) && i.showOverlay && g.show(), i.fadeIn) { var j = i.onBlock ? i.onBlock : c, H = i.showOverlay && !v ? j : c, z = v ? j : c; i.showOverlay && I._fadeIn(i.fadeIn, H), v && w._fadeIn(i.fadeIn, z) } else i.showOverlay && I.show(), v && w.show(), i.onBlock && i.onBlock(); if (n(1, o, i), k ? (b = w[0], p = e(i.focusableElements, b), i.focusInput && setTimeout(l, 20)) : a(w[0], i.centerX, i.centerY), i.timeout) { var W = setTimeout(function () { k ? e.unblockUI(i) : e(o).unblock(i) }, i.timeout); e(o).data("blockUI.timeout", W) } } } function t(o, t) { var s, l = o == window, a = e(o), d = a.data("blockUI.history"), c = a.data("blockUI.timeout"); c && (clearTimeout(c), a.removeData("blockUI.timeout")), t = e.extend({}, e.blockUI.defaults, t || {}), n(0, o, t), null === t.onUnblock && (t.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock")); var r; r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), t.cursorReset && (r.length > 1 && (r[1].style.cursor = t.cursorReset), r.length > 2 && (r[2].style.cursor = t.cursorReset)), l && (b = p = null), t.fadeOut ? (s = r.length, r.stop().fadeOut(t.fadeOut, function () { 0 === --s && i(r, d, t, o) })) : i(r, d, t, o) } function i(o, t, i, n) { var s = e(n); if (!s.data("blockUI.isBlocked")) { o.each(function () { this.parentNode && this.parentNode.removeChild(this) }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.parent && t.parent.appendChild(t.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(n, i); var l = e(document.body), a = l.width(), d = l[0].style.width; l.width(a - 1).width(a), l[0].style.width = d } } function n(o, t, i) { var n = t == window, l = e(t); if ((o || (!n || b) && (n || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", o), n && i.bindEvents && (!o || i.showOverlay))) { var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove"; o ? e(document).bind(a, i, s) : e(document).unbind(a, s) } } function s(o) { if ("keydown" === o.type && o.keyCode && 9 == o.keyCode && b && o.data.constrainTabKey) { var t = p, i = !o.shiftKey && o.target === t[t.length - 1], n = o.shiftKey && o.target === t[0]; if (i || n) return setTimeout(function () { l(n) }, 10), !1 } var s = o.data, a = e(o.target); return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length } function l(e) { if (p) { var o = p[e === !0 ? p.length - 1 : 0]; o && o.focus() } } function a(e, o, t) { var i = e.parentNode, n = e.style, s = (i.offsetWidth - e.offsetWidth) / 2 - d(i, "borderLeftWidth"), l = (i.offsetHeight - e.offsetHeight) / 2 - d(i, "borderTopWidth"); o && (n.left = s > 0 ? s + "px" : "0"), t && (n.top = l > 0 ? l + "px" : "0") } function d(o, t) { return parseInt(e.css(o, t), 10) || 0 } e.fn._fadeIn = e.fn.fadeIn; var c = e.noop || function () { }, r = /MSIE/.test(navigator.userAgent), u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent); document.documentMode || 0; var f = e.isFunction(document.createElement("div").style.setExpression); e.blockUI = function (e) { o(window, e) }, e.unblockUI = function (e) { t(window, e) }, e.growlUI = function (o, t, i, n) { var s = e('<div class="growlUI"></div>'); o && s.append("<h1>" + o + "</h1>"), t && s.append("<h2>" + t + "</h2>"), void 0 === i && (i = 3e3); var l = function (o) { o = o || {}, e.blockUI({ message: s, fadeIn: o.fadeIn !== void 0 ? o.fadeIn : 700, fadeOut: o.fadeOut !== void 0 ? o.fadeOut : 1e3, timeout: o.timeout !== void 0 ? o.timeout : i, centerY: !1, showOverlay: !1, onUnblock: n, css: e.blockUI.defaults.growlCSS }) }; l(), s.css("opacity"), s.mouseover(function () { l({ fadeIn: 0, timeout: 3e4 }); var o = e(".blockMsg"); o.stop(), o.fadeTo(300, 1) }).mouseout(function () { e(".blockMsg").fadeOut(1e3) }) }, e.fn.block = function (t) { if (this[0] === window) return e.blockUI(t), this; var i = e.extend({}, e.blockUI.defaults, t || {}); return this.each(function () { var o = e(this); i.ignoreIfBlocked && o.data("blockUI.isBlocked") || o.unblock({ fadeOut: 0 }) }), this.each(function () { "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, t) }) }, e.fn.unblock = function (o) { return this[0] === window ? (e.unblockUI(o), this) : this.each(function () { t(this, o) }) }, e.blockUI.version = 2.6, e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 2e6, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 }; var b = null, p = [] } "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery) })();

/*
 * jQuery Anystretch
 * Version 1.2 (@jbrooksuk / me.itslimetime.com)
 * https://github.com/jbrooksuk/jquery-anystretch
 * Based on Dan Millar's Port
 * https://github.com/danmillar/jquery-anystretch
 *
 * Add a dynamically-resized background image to the body
 * of a page or any other block level element within it
 *
 * Copyright (c) 2012 Dan Millar (@danmillar / decode.uk.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * This is a fork of jQuery Backstretch (v1.2)
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
*/
(function (a) { a.fn.anystretch = function (d, c, e) { var b = this.selector.length ? false : true; return this.each(function (q) { var s = { positionX: "center", positionY: "center", speed: 0, elPosition: "absolute", dataName: "stretch" }, h = a(this), g = b ? a(".anystretch") : h.children(".anystretch"), l = g.data("settings") || s, m = g.data("settings"), j, f, r, p, v, u; if (c && typeof c == "object") { a.extend(l, c) } if (c && typeof c == "function") { e = c } a(document).ready(t); return this; function t() { if (d || h.length >= 1) { var i; if (!b) { h.css({ position: l.elPosition, background: "none" }) } if (g.length == 0) { g = a("<div />").attr("class", "anystretch").css({ left: 0, top: 0, position: (b ? "fixed" : "absolute"), overflow: "hidden", zIndex: (b ? -999999 : -999998), margin: 0, padding: 0, height: "100%", width: "100%" }) } else { g.find("img").addClass("deleteable") } i = a("<img />").css({ position: "absolute", display: "none", margin: 0, padding: 0, border: "none", zIndex: -999999 }).bind("load", function (A) { var z = a(this), y, x; z.css({ width: "auto", height: "auto" }); y = this.width || a(A.target).width(); x = this.height || a(A.target).height(); j = y / x; o(function () { z.fadeIn(l.speed, function () { g.find(".deleteable").remove(); if (typeof e == "function") { e() } }) }) }).appendTo(g); if (h.children(".anystretch").length == 0) { if (b) { a("body").append(g) } else { h.append(g) } } g.data("settings", l); var w = ""; if (d) { w = d } else { if (h.data(l.dataName)) { w = h.data(l.dataName) } else { return } } i.attr("src", w); a(window).resize(o) } } function o(i) { try { u = { left: 0, top: 0 }; r = k(); p = r / j; if (p >= n()) { v = (p - n()) / 2; if (l.positionY == "center" || l.centeredY) { a.extend(u, { top: "-" + v + "px" }) } else { if (l.positionY == "bottom") { a.extend(u, { top: "auto", bottom: "0px" }) } } } else { p = n(); r = p * j; v = (r - k()) / 2; if (l.positionX == "center" || l.centeredX) { a.extend(u, { left: "-" + v + "px" }) } else { if (l.positionX == "right") { a.extend(u, { left: "auto", right: "0px" }) } } } g.children("img:not(.deleteable)").width(r).height(p).filter("img").css(u) } catch (w) { } if (typeof i == "function") { i() } } function k() { return b ? h.width() : h.innerWidth() } function n() { return b ? h.height() : h.innerHeight() } }) }; a.anystretch = function (d, b, e) { var c = ("onorientationchange" in window) ? a(document) : a(window); c.anystretch(d, b, e) } })(jQuery);

// image preloader - jquery plugin
// http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript
(function ($) {
    var cache = [];
    // Arguments are image paths relative to the current page.
    $.preLoadImages = function () {
        var args_len = arguments.length;
        for (var i = args_len; i--;) {
            var cacheImage = document.createElement('img');
            cacheImage.src = arguments[i];
            cache.push(cacheImage);
        }
    };
})(jQuery);

/**
 * DropKick
 *
 * Highly customizable <select> lists
 * https://github.com/JamieLottering/DropKick
 *
 * &copy; 2011 Jamie Lottering <http://github.com/JamieLottering>
 *                        <http://twitter.com/JamieLottering>
 * 
 */
(function ($, window, document) {

    var msVersion = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),
        msie = !!msVersion,
        ie6 = msie && parseFloat(msVersion[1]) < 7;

    // Help prevent flashes of unstyled content
    if (!ie6) {
        document.documentElement.className = document.documentElement.className + ' dk_fouc';
    }

    var
      // Public methods exposed to $.fn.dropkick()
      methods = {},

      // Cache every <select> element that gets dropkicked
      lists = [],

      // Convenience keys for keyboard navigation
      keyMap = {
          'left': 37,
          'up': 38,
          'right': 39,
          'down': 40,
          'enter': 13
      },

      // HTML template for the dropdowns
      dropdownTemplate = [
        '<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">',
          '<a class="dk_toggle">',
            '<span class="dk_label">{{ label }}</span><span class="dk_arrow"><span class="icon"></span></span>',
          '</a>',
          '<div class="dk_options">',
            '<ul class="dk_options_inner">',
            '</ul>',
          '</div>',
        '</div>'
      ].join(''),

      // HTML template for dropdown options
      optionTemplate = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',

      // Some nice default values
      defaults = {
          startSpeed: 1000,  // I recommend a high value here, I feel it makes the changes less noticeable to the user
          theme: false,
          change: false
      },

      // Make sure we only bind keydown on the document once
      keysBound = false
    ;

    // Called by using $('foo').dropkick();
    methods.init = function (settings) {
        settings = $.extend({}, defaults, settings);

        return this.each(function () {
            var
              // The current <select> element
              $select = $(this),

              // Store a reference to the originally selected <option> element
              $original = $select.find(':selected').first(),

              // Save all of the <option> elements
              $options = $select.find('option'),

              // We store lots of great stuff using jQuery data
              data = $select.data('dropkick') || {},

              // This gets applied to the 'dk_container' element
              id = $select.attr('id') || $select.attr('name'),

              // This gets updated to be equal to the longest <option> element
              width = settings.width || $select.outerWidth(),

              // Check if we have a tabindex set or not
              tabindex = $select.attr('tabindex') ? $select.attr('tabindex') : '',

              // The completed dk_container element
              $dk = false,

              theme
            ;

            // Dont do anything if we've already setup dropkick on this element
            if (data.id) {
                return $select;
            } else {
                data.settings = settings;
                data.tabindex = tabindex;
                data.id = id;
                data.$original = $original;
                data.$select = $select;
                data.value = _notBlank($select.val()) || _notBlank($original.attr('value'));
                data.label = $original.text();
                data.options = $options;
            }

            // Build the dropdown HTML
            $dk = _build(dropdownTemplate, data);

            // Make the dropdown fixed width if desired
            $dk.find('.dk_toggle').css({
                'width': width + 'px'
            });

            // Hide the <select> list and place our new one in front of it
            $select.before($dk);

            // Update the reference to $dk
            $dk = $('#dk_container_' + id).fadeIn(settings.startSpeed);

            // Save the current theme
            theme = settings.theme ? settings.theme : 'default';
            $dk.addClass('dk_theme_' + theme);
            data.theme = theme;

            // Save the updated $dk reference into our data object
            data.$dk = $dk;

            // Save the dropkick data onto the <select> element
            $select.data('dropkick', data);

            // Do the same for the dropdown, but add a few helpers
            $dk.data('dropkick', data);

            lists[lists.length] = $select;

            // Focus events
            $dk.bind('focus.dropkick', function (e) {
                $dk.addClass('dk_focus');
            }).bind('blur.dropkick', function (e) {
                $dk.removeClass('dk_open dk_focus');
            });

            setTimeout(function () {
                $select.hide();
            }, 0);
        });
    };

    // Allows dynamic theme changes
    methods.theme = function (newTheme) {
        var
          $select = $(this),
          list = $select.data('dropkick'),
          $dk = list.$dk,
          oldtheme = 'dk_theme_' + list.theme
        ;

        $dk.removeClass(oldtheme).addClass('dk_theme_' + newTheme);

        list.theme = newTheme;
    };

    // Reset all <selects and dropdowns in our lists array
    methods.reset = function () {
        for (var i = 0, l = lists.length; i < l; i++) {
            var
              listData = lists[i].data('dropkick'),
              $dk = listData.$dk,
              $current = $dk.find('li').first()
            ;

            $dk.find('.dk_label').text(listData.label);
            $dk.find('.dk_options_inner').animate({ scrollTop: 0 }, 0);

            _setCurrent($current, $dk);
            _updateFields($current, $dk, true);
        }
    };

    // Reload the dropkick select widget after options have changed
    // usage: $("...").dropkick('reload');
    methods.reload = function () {
        var $select = $(this);
        var data = $select.data('dropkick');
        $select.removeData("dropkick");
        $("#dk_container_" + data.id).remove();
        $select.dropkick(data.settings);
    };

    // Expose the plugin
    $.fn.dropkick = function (method) {
        if (!ie6) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            }
        }
    };

    // private
    function _handleKeyBoardNav(e, $dk) {
        var
          code = e.keyCode,
          data = $dk.data('dropkick'),
          options = $dk.find('.dk_options'),
          open = $dk.hasClass('dk_open'),
          current = $dk.find('.dk_option_current'),
          first = options.find('li').first(),
          last = options.find('li').last(),
          next,
          prev
        ;

        switch (code) {
            case keyMap.enter:
                if (open) {
                    _updateFields(current.find('a'), $dk);
                    _closeDropdown($dk);
                } else {
                    _openDropdown($dk);
                }
                e.preventDefault();
                break;

            case keyMap.up:
                prev = current.prev('li');
                if (open) {
                    if (prev.length) {
                        _setCurrent(prev, $dk);
                    } else {
                        _setCurrent(last, $dk);
                    }
                } else {
                    _openDropdown($dk);
                }
                e.preventDefault();
                break;

            case keyMap.down:
                if (open) {
                    next = current.next('li').first();
                    if (next.length) {
                        _setCurrent(next, $dk);
                    } else {
                        _setCurrent(first, $dk);
                    }
                } else {
                    _openDropdown($dk);
                }
                e.preventDefault();
                break;

            default:
                break;
        }
    }

    // Update the <select> value, and the dropdown label
    function _updateFields(option, $dk, reset) {
        var value, label, data;

        value = option.attr('data-dk-dropdown-value');

        label = option.text();
        data = $dk.data('dropkick');

        $select = data.$select;

        $select.val(value);
        $select.trigger("change");

        $dk.find('.dk_label').text(label);

        reset = reset || false;

        if (data.settings.change && !reset) {
            data.settings.change.call($select, value, label);
        }
    }

    // Set the currently selected option
    function _setCurrent($current, $dk) {
        $dk.find('.dk_option_current').removeClass('dk_option_current');
        $current.addClass('dk_option_current');

        _setScrollPos($dk, $current);
    }

    function _setScrollPos($dk, anchor) {
        var height = anchor.prevAll('li').outerHeight() * anchor.prevAll('li').length;
        $dk.find('.dk_options_inner').animate({ scrollTop: height + 'px' }, 0);
    }

    // Close a dropdown
    function _closeDropdown($dk) {
        $dk.removeClass('dk_open');
    }

    // Open a dropdown
    function _openDropdown($dk) {
        var data = $dk.data('dropkick');
        $dk.find('.dk_options').css({ top: $dk.find('.dk_toggle').outerHeight() - 1 });
        $dk.toggleClass('dk_open');

    }

    /**
     * Turn the dropdownTemplate into a jQuery object and fill in the variables.
     */
    function _build(tpl, view) {
        var
          // Template for the dropdown
          template = tpl,
          // Holder of the dropdowns options
          options = [],
          $dk
        ;

        template = template.replace('{{ id }}', view.id);
        template = template.replace('{{ label }}', view.label);
        template = template.replace('{{ tabindex }}', view.tabindex);

        if (view.options && view.options.length) {
            for (var i = 0, l = view.options.length; i < l; i++) {
                var
                  $option = $(view.options[i]),
                  current = 'dk_option_current',
                  oTemplate = optionTemplate
                ;

                oTemplate = oTemplate.replace('{{ value }}', $option.val());
                oTemplate = oTemplate.replace('{{ current }}', (_notBlank($option.val()) === view.value) ? current : '');
                oTemplate = oTemplate.replace('{{ text }}', $option.text());

                options[options.length] = oTemplate;
            }
        }

        $dk = $(template);
        $dk.find('.dk_options_inner').html(options.join(''));

        return $dk;
    }

    function _notBlank(text) {
        return ($.trim(text).length > 0) ? text : false;
    }

    $(function () {

        // Handle click events on the dropdown toggler
        $(document).on('click', '.dk_toggle', function (e) {
            var $dk = $(this).parents('.dk_container').first();

            _openDropdown($dk);

            if ("ontouchstart" in window) {
                $dk.addClass('dk_touch');
                $dk.find('.dk_options_inner').addClass('scrollable vertical');
            }

            e.preventDefault();
            return false;
        });

        // Handle click events on individual dropdown options
        $(document).on((msie ? 'mousedown' : 'click'), '.dk_options a', function (e) {
            var
              $option = $(this),
              $dk = $option.parents('.dk_container').first(),
              data = $dk.data('dropkick')
            ;

            _closeDropdown($dk);
            _updateFields($option, $dk);
            _setCurrent($option.parent(), $dk);

            e.preventDefault();
            return false;
        });

        // Setup keyboard nav
        $(document).bind('keydown.dk_nav', function (e) {
            var
              // Look for an open dropdown...
              $open = $('.dk_container.dk_open'),

              // Look for a focused dropdown
              $focused = $('.dk_container.dk_focus'),

              // Will be either $open, $focused, or null
              $dk = null
            ;

            // If we have an open dropdown, key events should get sent to that one
            if ($open.length) {
                $dk = $open;
            } else if ($focused.length && !$open.length) {
                // But if we have no open dropdowns, use the focused dropdown instead
                $dk = $focused;
            }

            if ($dk) {
                _handleKeyBoardNav(e, $dk);
            }
        });
    });
})(jQuery, window, document);

(function ($) {

    $.fn.wrapChildren = function (options) {

        var options = $.extend({
            childElem: undefined,
            sets: 1,
            wrapper: 'div'
        }, options || {});
        if (options.childElem === undefined) return this;

        return this.each(function () {
            var elems = $(this).children(options.childElem);
            var arr = [];

            elems.each(function (i, value) {
                arr.push(value);
                if (((i + 1) % options.sets === 0) || (i === elems.length - 1)) {
                    var set = $(arr);
                    arr = [];
                    set.wrapAll($("<" + options.wrapper + ">"));
                }
            });
        });

    }

})(jQuery);

/*! http://mths.be/placeholder v2.0.7 by @mathias */
; (function (window, document, $) {

    var isInputSupported = 'placeholder' in document.createElement('input');
    var isTextareaSupported = 'placeholder' in document.createElement('textarea');
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function () {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function () {
            var $this = this;
            $this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
				    'focus.placeholder': clearPlaceholder,
				    'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function (element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != document.activeElement) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function () {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                //setTimeout(function () {
                //    $inputs.each(setPlaceholder);
                //}, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == document.activeElement && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({ 'type': 'text' });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }
                    $replacement
						.removeAttr('name')
						.data({
						    'placeholder-password': $input,
						    'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
                    $input
						.data({
						    'placeholder-textinput': $replacement,
						    'placeholder-id': id
						})
						.before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

}(this, document, jQuery));

(function ($) {
    $.fn.justtext = function () {

        return $(this).clone()
                .children()
                .remove()
                .end()
                .text();

    };
})(jQuery);

var Common = {};

$(document).ready(function () {

    //-------------------Main Navigation---------------------//
    $("#primaryNav ul li").hover(
        function () {
            var $hoveredItem = $(this);
            if ($hoveredItem.hasClass("ItemHasChild")) {
                $hoveredItem.addClass("ChildItemOpen");
                //$hoveredItem.children("ul").fadeIn(200, "swing");
            } else $hoveredItem.addClass("Open");
        },
        function () {
            var $hoveredItem = $(this);
            if ($hoveredItem.hasClass("ChildItemOpen")) {
                //$hoveredItem.children("ul").fadeOut(0, "swing", function () {
                $hoveredItem.removeClass("ChildItemOpen");
                //});
            } else $hoveredItem.removeClass("Open");
        }
    );

    //-------------------Click To Call---------------------//

    (function () {

        $(".ClickToCall_Button").each(function (index) {
            var $ctaButton = $(this);
            var $showFormButton = $(this).find(".Message .btn");
            var $formPopup = $(this).next(".ClickToCall_Form");
            var $makeCallButton = $formPopup.find(".Submit");
            var $formContainer = $(".ClickToCall_FormContainer");
            var $validationMessage = $formContainer.find(".validation");
            var $feedbackContainer = $formPopup.find(".ClickToCall_FeedbackContainer");
            var $feedbackTitle = $feedbackContainer.find("h2");
            var $feedbackMessage = $feedbackContainer.find("p.Message");

            $ctaButton
                .delay(6000)
                .animate({ width: '62' }, 200);

            $ctaButton.hover(
                function () {
                    $ctaButton.stop().animate({ width: '235' }, 200);
                },
                function () {
                    $ctaButton.stop().animate({ width: '62' }, 200);
                }
            );

            $showFormButton.click(function (event) {
                event.preventDefault();
                $feedbackTitle.removeClass("Success");
                $feedbackTitle.removeClass("Failed");
                $feedbackMessage.text("");
                $validationMessage.text("");
                $validationMessage.hide();
                $formContainer.show();
                $feedbackContainer.hide();

                $formPopup.bPopup({
                    closeClass: "modalCloseButton"
                });
            });

            $makeCallButton.click(function (event) {
                event.preventDefault();

                //Hacked in validation. no time for more
                var validationErrors = 0;
                $formContainer.find("label .asterisk").each(function (index) {
                    var $dataField = $(this).parent().next("input, select");
                    if ($dataField.length > 0 && $dataField.val() == "") validationErrors++;
                });

                if (validationErrors > 0) {
                    $validationMessage.text("Please complete all mandatory fields");
                    $validationMessage.show();
                    return;
                } else {
                    $validationMessage.text("");
                    $validationMessage.hide();
                }
                //Hacked in validation. no time for more

                var postData = {};

                var $fields = $formPopup.find("[clicktocallapikey]");

                $fields.each(function (index) {
                    var clickToCallAPIkey = $(this).attr("clicktocallapikey");
                    if (clickToCallAPIkey == "") return true;

                    var value = "";

                    //WFFM Custom Field
                    if ($(this).is("div")) {
                        var $wffmField = $(this).find("[id*='_field_']").not("label");
                        if ($wffmField.length == 0) return true;

                        value = $wffmField.val();
                    } else {
                        value = $(this).val();
                    }

                    postData[clickToCallAPIkey] = value;
                });

                var postUrl = $makeCallButton.attr("href");
                var postDataStr = jQuery.param(postData);

                $formContainer.hide();
                $feedbackContainer.show();
                $.ajax({
                    type: "POST",
                    url: $makeCallButton.attr("href"),
                    data: postDataStr,
                    success: function (response) {
                        if (response.resultCode == "success") {
                            $feedbackTitle.addClass("Success");
                            $feedbackMessage.text("Thank you for contacting us, you are now being connected");
                        } else {
                            $feedbackTitle.addClass("Failed");
                            $feedbackMessage.text("Sorry there was a problem making the call.");
                        }
                    }
                });
            });
        });
    })();

    //-------------------Click To Call---------------------//

    //-------------------Accordians---------------------//

    (function() {

        $(".accordion").each(function (index) {
            var $accordian = $(this);

            $accordian.find('.accordion-section-title').click(function(e) {

                // Grab current anchor value
                var currentAttrValue = $(this).attr('href');

                if ($(e.target).is('.active')) {
                    $accordian.find('.accordion-section-title').removeClass('active');
                    $accordian.find('.accordion-section-content').slideUp(300).removeClass('open');
                } else {
                    $accordian.find('.accordion-section-title').removeClass('active');
                    $accordian.find('.accordion-section-content').slideUp(300).removeClass('open');

                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $accordian.find(currentAttrValue).slideDown(300).addClass('open');
                }

                e.preventDefault();
            });
        });
    })();

    

    //$(".savePropertyContainer").on("click", ".SaveProperty", function () {
        
    //});

    //---------------------Storage Helpers---------------//

    // create, read, destroy cookies
    Common.Cookie = {

        checkSupport: function () {
            this.create('cookieSupportTest', 'test', 10000);
            if (this.read('cookieSupportTest')) {
                this.destroy('cookieSupportTest');
                return true;
            } else {
                return false;
            }
        },

        create: function (name, value, days) {
            var date,
                expires;

            if (days) {
                date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }

            document.cookie = name + "=" + value + expires + "; path=/";
        },

        read: function (name) {
            var nameEQ = name + "=",
                ca = document.cookie.split(';'),
                i,
                c;

            for (i = 0; i < ca.length; i++) {
                c = ca[i];

                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }

                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }

            return null;
        },

        destroy: function (name) {
            this.create(name, "", -1);
        }
    };

    // create, read & destroy local storage data (falls back to cookie if local storage not supported)
    Common.Storage = {

        supported: false, // cached flag for support or not after check is run once

        // checks both for browser support and if it's enabled by user (disabled creates an error)
        checkSupport: function () {
            if (typeof (Storage) !== "undefined") {
                try {
                    localStorage.setItem('test', 'test local storage');
                    localStorage.getItem('test');
                    localStorage.removeItem('test');
                    this.supported = true;
                    return true;

                } catch (e) {
                    this.supported = false;
                    return false;
                }

            } else {
                this.supported = false;
                return false;
            }
        },

        save: function (key, data, duration) { // note: duration is used to determine localStorage or sessionStorage, or used for cookie fallback. should be truthy, or a num days value for use with cookie fallback
            if (typeof data !== 'string') {
                data = JSON.stringify(data);
            }

            if (this.supported || this.checkSupport() === true) {
                if (duration) {
                    localStorage[key] = data;
                } else {
                    sessionStorage[key] = data;
                }
            } else {
                COLLIERS.utilities.cookie.create(key, data, duration);
            }
        },

        read: function (key) {
            if (this.supported || this.checkSupport() === true) {
                if (localStorage[key]) {
                    return JSON.parse(localStorage[key]);
                } else if (sessionStorage[key]) {
                    return JSON.parse(sessionStorage[key]);
                } else {
                    return null;
                }

            } else {
                return JSON.parse(COLLIERS.utilities.cookie.read(key));
            }
        },

        destroy: function (key) {
            if (this.supported || this.checkSupport() === true) {
                if (localStorage[key]) {
                    delete localStorage[key];
                } else if (sessionStorage[key]) {
                    delete sessionStorage[key];
                }
            } else {
                COLLIERS.utilities.cookie.destroy(key);
            }

        }
    };

    //----------------------Storage Helpers------------------//
    
    Common.Properties = {};

    Common.Properties.SavedProperties = {

        CookieSettings: {
            name: 'colliersAUSSavedProperties',
            duration: 99999
        },

        Update: function (propertyRefs) {
            Common.Storage.save(Common.Properties.SavedProperties.CookieSettings.name, propertyRefs, Common.Properties.SavedProperties.CookieSettings.duration);
        },

        Save: function (propertyRef) {
            var currentVal = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name) || [];

            if ($.inArray(propertyRef, currentVal) >= 0) return;

            currentVal.push(propertyRef);
            Common.Properties.SavedProperties.Update(currentVal);
        },

        Remove: function (propertyRef) {
            var currentVal = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name) || [];
            for (var i = 0, len = currentVal.length; i < len; i++) {
                if (currentVal[i] == propertyRef) { // if cookie exists, and id is found in cookie
                    currentVal.splice(i, 1);
                }
            }
            Common.Properties.SavedProperties.Update(currentVal);
        },

        InitButtons: function ($container, clickCallBack) {
            $container.find(".SaveProperty[data-ClickEventAttached != '1']").each(function (index) {
                var $button = $(this);
                var propId = $button.justtext();

                if (propId == "") return;

                if (Common.Properties.SavedProperties.IsSaved(propId))
                    $button.addClass("Saved");
                else
                    $button.removeClass("Saved");

                $button.click(function () {

                    var isSaving = $(this).hasClass("Saved") == false;
                    
                    if (clickCallBack != null && clickCallBack != undefined) clickCallBack($button, isSaving);

                    if (isSaving) Common.Properties.SavedProperties.Save(propId);
                    else Common.Properties.SavedProperties.Remove(propId);
                    
                    Common.Properties.SavedProperties.UpdateButtonStates();

                    $("#globalSavedPropertiesCount").text(Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name).length);

                });
                $button.attr("data-ClickEventAttached", "1");
            });
        },

        UpdateButtonStates: function(){
            $(".SaveProperty").each(function (index) {
                var $button = $(this);
                var propId = $button.justtext();

                if (Common.Properties.SavedProperties.IsSaved(propId)) {
                    $button.addClass("Saved");
                    //TrackMetrics(propListingRef, "Save Property");
                }
                else
                    $button.removeClass("Saved");
            });
        },

        IsSaved: function (propertyRef) {
            var currentVal = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name);

            if ($.inArray(propertyRef, currentVal) >= 0) return true;
        },

        GetAll: function () {
            var currentVal = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name);

            return currentVal;
        },

        InitViewWindow: function () {
            var $popup = $("#savedPropertiesModalPopup");
            var $modalHeader = $(".modalHeader");
            var $modalInner = $(".savedPropertiesListWrapper");
            var $modalFooter = $(".modalFooter");
            var $headercount = $(".savedCount");
            var $count = $("#globalSavedPropertiesCount");
            var $noProps = $("#noProperties");
            var $favouritesList = $("#favouritesList");

            var currentItems = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name);
            $count.text(currentItems == null ? 0 : currentItems.length);
            
            $favouritesList.hide();
            $noProps.hide();

            $(".clearSavedProperties").click(function () {
                $favouritesList.empty();
                $favouritesList.hide();
                $noProps.show();
                $count.text("0");
                Common.Storage.destroy(Common.Properties.SavedProperties.CookieSettings.name);
                Common.Properties.SavedProperties.UpdateButtonStates();
            });
            
            $(".showSavedProperties").click(function (event) {
                event.preventDefault();

                var $button = $(this);

                $popup.bPopup({
                    closeClass: "modalCloseButton",
                    onOpen: function () {                        
                        $popup.height($(window).height() * 0.75);
                        $modalInner.height($($popup).height() - $modalHeader.height() - $modalFooter.height());
                        $modalInner.fadeIn(1000);

                        currentItems = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name);
                        //$headercount.text(currentItems == null ? 0 : currentItems.length);

                        $favouritesList.hide();
                        $noProps.hide();

                        if (currentItems == null || currentItems.length == 0) {
                            $noProps.show();
                        } else {
                            $favouritesList.empty();
                            $modalInner.addClass("loading");

                            var data = {};
                            data.refs = currentItems.toString();
                        
                            $.get("/Services/Favourites/Properties.ashx", data)
                                .done(function (response) {
                                    var $newElems = $(response);

                                    if ($newElems.length == 0) {
                                        $modalInner.removeClass("loading");
                                        $noProps.show();
                                        return;
                                    }

                                    $modalInner.removeClass("loading");
                                    $favouritesList.append($newElems);

                                    Common.Properties.SavedProperties.InitButtons($favouritesList);

                                    $newElems.find(".SaveProperty").click(function () {
                                        $(this).parents(".listItem").remove();

                                        var currentItems = Common.Storage.read(Common.Properties.SavedProperties.CookieSettings.name);

                                        if (currentItems == null || currentItems.length == 0){
                                            $noProps.show();
                                            $favouritesList.hide();
                                        }
                                    });

                                    $favouritesList.show();
                                });
                        }
                    },
                    onClose: function () {
                        $modalInner.fadeOut(10);
                    }
                });
            });
        }
    };

    Common.Properties.SavedProperties.InitViewWindow();

    //---------Save Property Search Parameters---------//

    Common.SavedSearchParameters = {
        CookieSettings: {
            name: 'colliersAUSSavedPropertySearchParameters',
            duration: 99999
        },

        Save: function(searchParams) {
            Common.Storage.save(Common.SavedSearchParameters.CookieSettings.name, searchParams, Common.SavedSearchParameters.CookieSettings.duration);
        },

        Remove: function () {
            if (Common.Storage.read(Common.SavedSearchParameters.CookieSettings.name) !== []) {
                Common.Storage.destroy(Common.Properties.SavedProperties.CookieSettings.name);
            }
        },

        get: function read()
        {
            return Common.Storage.read('colliersAUSSavedPropertySearchParameters');
        }
    }

    //---------Sticky Header----------//

    StickyHeader = {};
    StickyHeader.Elem = $('<div id="stickyHeader"><div class="shInner"><a title="Colliers International" class="shLogo" href="/"><img alt="Colliers International" src="/Skin/V2/sh_logo.png" /></a><a class="shBackToTop">Back to Top<span class="icon"></span></a></div></div>');
    StickyHeader.IsAppended = false;
    StickyHeader.IsVisible = false;
    StickyHeader.BackToTopButtonElem = StickyHeader.Elem.find(".shBackToTop");
    StickyHeader.BackToTopButtonElem.hide();
    StickyHeader.IsBackToTopButtonVisible = false;

    StickyHeader.BackToTopButtonElem.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
    
    Common.StickyHeader = {};

    Common.StickyHeader.Show = function () {
        if (!StickyHeader.IsAppended) {
            $("body").prepend(StickyHeader.Elem);
            StickyHeader.IsAppended = true;
        }

        if (!StickyHeader.IsVisible) {
            StickyHeader.Elem.show();
            StickyHeader.IsVisible = true;
        }
    };
    Common.StickyHeader.Hide = function () {
        if (StickyHeader.IsAppended && StickyHeader.IsVisible) {
            StickyHeader.Elem.hide();
            StickyHeader.IsVisible = false;
        }
    };
    Common.StickyHeader.ShowJumpToTopButton = function () {
        if (!StickyHeader.IsBackToTopButtonVisible) {
            StickyHeader.BackToTopButtonElem.show();
            StickyHeader.IsBackToTopButtonVisible = true;
        }
    }
    Common.StickyHeader.HideJumpToTopButton = function () {
        if (StickyHeader.IsBackToTopButtonVisible) {
            StickyHeader.BackToTopButtonElem.hide();
            StickyHeader.IsBackToTopButtonVisible = false;
        }
    };

    //------------ToolTips------------//

    (function () {

        $(".toolTip").each(function () {
            var $toolTip = $(this);
            var $content = $toolTip.children(".toolTipContent");
            if ($content.length == 0) return;
            $content.wrapInner("<div class='inner'></div>");
            $content.prepend($("<div class='icon pointer'></div>"));

            $content.css("bottom", "-" + $content.outerHeight() + "px");


        });

    }());


    //---------Even Rows------------//
    (function () {
        $("[data-evenRows-colCount][data-evenRows-childSelector]").each(function (index) {
            var childSelector = $(this).attr("data-evenRows-childSelector");
            var columns = parseInt($(this).attr("data-evenRows-colCount"));

            if (columns == undefined || childSelector == "")
                return;

            var lastMatchedItem = -1;

            var children = $(this).find(childSelector);
            children.each(function (index) {

                if ((index + 1) % columns == 0) {
                    lastMatchedItem = index;

                    var height = 0;
                    var from = index + 1 - columns;
                    var to = index;
                    for (var i = from; i <= to; i++) {
                        var thisHeight = children.eq(i).outerHeight();
                        if (thisHeight > height) height = thisHeight;
                    }
                    for (var i = from; i <= to; i++) {
                        children.eq(i).height(height);
                    }
                }
            });

            if (lastMatchedItem < children.length - 1) {
                var height = 0;
                var from = lastMatchedItem + 1;
                var to = children.length - 1;
                for (var i = from; i <= to; i++) {
                    var thisHeight = children.eq(i).outerHeight();
                    if (thisHeight > height) height = thisHeight;
                }
                for (var i = from; i <= to; i++) {
                    children.eq(i).height(height);
                }
            }
        });
    }());
//---------Even Rows------------//


//---------Custom RadioButtons/Checkboxes-----------//
    $(".radioButton, .checkbox").each(function (index) {
        var $container = $(this);
        $container.addClass("custom");
        var $input = $container.children("input");

        $input.animate({ opacity: 0.0 }, 0.0, 'linear');
        $input.css("visibility", "visible");
        $input.css("outline", "none");

        var $label = $container.children("label");
        var $fakeInput = $('<label class="input" style="width:14px;height:14px;" for="' + $label.attr("for") + '"></label>');
        if ($container.hasClass("textAlignLeft")) $container.append($fakeInput);
        else $container.prepend($fakeInput);

        if ($input.is(":checked")) $fakeInput.addClass("checked");
        else $fakeInput.removeClass("checked");

        $input.change(function () {
            if ($input.is(":checked")) {
                if ($input.is("input[type=radio]")) {
                    var groupName = $(this).attr("name");
                    if (groupName != null && groupName != undefined && groupName != "") {
                        $('.radioButton input[type="radio"][name="' + groupName + '"]').prev().removeClass("checked");
                    }
                }
                $fakeInput.addClass("checked");
            }
            else
                $fakeInput.removeClass("checked");
        });
    });
//---------Custom RadioButtons/Checkboxes-----------//

//---------Custom dropdown lists-----------//

    Common.renderCustomDropdowns = function () {
        $('.pretty').each(function (index) {
            var width = parseInt($(this).attr("data-width"));
            var theme = $(this).attr("data-theme");
            $(this).dropkick({
                width: width,
                theme: theme
            });
        });
    };

    Common.renderCustomDropdowns();

//---------Custom dropdown lists-----------//

//---------Expanding buttons-----------//
    var $btns = $('.btnExpandable');
    var $btnLabels = $('.btnExpandable .btnText');
    //$btnLabels.show();
    $btns.each(function () { // setup buttons for animation
        var thisWidth = $(this).width();
        $(this).data('width', thisWidth);
    });

    $(window).load(function () { // have to wait until page (fonts) fully loaded to get correct button widths
        
        $btns.each(function () { // setup buttons for animation
            var thisWidth = $(this).width();
            $btnText = $(this).find('.btnText');

            
            $btnText.width($btnText.width());
            $btnText.hide();
            $(this).width(0);

            $(this).hover(
                function (e) {
                    e.stopPropagation();
                    $(this).stop(true, true).animate({
                        'width': $(this).data('width')
                    }, 300, 'easeOutExpo');

                    $(this).find('.btnText').stop(true, true).fadeIn(500);
                },
                function (e) {
                    e.stopPropagation();
                    $(this).find('.btnText').stop(true, true).fadeOut(200);

                    $(this).stop(true, true).animate({
                        'width': '0px'
                    }, 200, 'easeOutExpo');
                }
            );
        });

        $(".panelLink").hover(function (e) {
            $(this).find(".btnExpandable").trigger(e.type);
        });

    });
//---------Expanding buttons-----------//

//---------Init carousels-----------//

    Common.initCarousels = function () {
        //genarate html of twitter widget
        $(".twitterWidgetContent").each(function (i, v) {
            var id = "twitterWidget_" + i;
            $(v).attr("id", id);

            var config = {
                "id": '498723875144753152',
                "domId": id,
                "maxTweets": 2,
                "showUser": false,
                "showTime": true,
                "enableLinks": true,
                "showInteraction": false,
                //"showRetweet": false,
                //"showImages": true
            };
            twitterFetcher.fetch(config);
        });

        $(".carousel").each(function () {
            var $carousel = $(this);

            if ($carousel.attr("data-isRunning") != null && $carousel.attr("data-isRunning") != undefined) return;

            var $container = $carousel.find(".carousel-items").filter(":first");

            var groupItemsCount = $(this).attr("data-groupItemsCount");
            if (!groupItemsCount != null && groupItemsCount != undefined)
                groupItemsCount = parseInt(groupItemsCount);
            var groupedItemSelector = $(this).attr("data-groupedItemSelector");

            if (groupItemsCount != null && groupItemsCount != undefined && groupedItemSelector != null && groupedItemSelector != undefined && groupedItemSelector != "") {
                $container.wrapChildren({ childElem: groupedItemSelector, sets: groupItemsCount, wrapper: 'div class="carousel-item"' });
            }

            var showBullets = $(this).attr("data-showBullets");
            showBullets = showBullets != null && showBullets != undefined && showBullets == "true" ? true : false;

            var $items = $container.children(".carousel-item");
            var maxItemCount = $items.length;
            if (maxItemCount == 0) {
                $container.css("display", "none");
                return;
            }

            var animateDuration = "slow";
            var animateDurationAttr = $(this).attr("data-animateDuration");
            if (animateDurationAttr != null && animateDurationAttr != "")
                animateDuration = parseInt(animateDurationAttr);
            if (isNaN(animateDuration)) animateDuration = "slow";

            var pauseDuration = "slow";
            var pauseDurationAttr = $(this).attr("data-pauseDuration");
            if (pauseDurationAttr != null && pauseDurationAttr != "")
                pauseDuration = parseInt(pauseDurationAttr);
            if (isNaN(pauseDuration)) pauseDuration = "slow";


            var isFade = $carousel.hasClass("fade");
            var isSwipe = $carousel.hasClass("swipe");
            var isSlide = $carousel.hasClass("slide");
            var $prevButton = $carousel.find(".buttons .prev").filter(":first");
            var $nextButton = $carousel.find(".buttons .next").filter(":first");

            //Ensure all items are the same height despite possibly having different content
            
            var itemWidth = $items.width();
            var variableHeight = 0;
            $items.each(function () {
                var $variableHeightPanel = $(this).find(".carousel-variableHeight");
                if ($variableHeightPanel.length > 0) {
                    var height = $variableHeightPanel.height();
                    if (height > variableHeight) variableHeight = height;
                }
            });
            $items.find(".carousel-variableHeight").height(variableHeight);

            
            var definedItemHeight = $container.css("height");
            if (definedItemHeight == null || definedItemHeight == "" || definedItemHeight == "0px") {
                var itemHeight = 0;
                $items.each(function () {
                    var height = $(this).height();
                    if (height > itemHeight) itemHeight = height;
                });
                $items.height(itemHeight);
                $(this).height(itemHeight);
                $container.height(itemHeight);
            } else {
                $items.css("height", definedItemHeight);
                $(this).css("height", definedItemHeight);
            }
            
            var definedItemWidth = $container.css("width");
            if (definedItemWidth == null || definedItemWidth == "" || definedItemWidth == "0px") {
                var itemWidth = 0;
                $items.each(function () {
                    var width = $(this).width();
                    if (width > itemWidth) itemWidth = width;
                });
                $items.width(itemWidth);
                $(this).width(itemWidth);
                $container.width(itemWidth);
            } else {
                $items.css("width", definedItemWidth);
                $(this).css("width", definedItemWidth);
            }
            
            $items.each(function (index) {
                $(this).attr("data-itemCount", index + 1);
                if (index == 0) $(this).attr("data-currentItem", "1");
                else $(this).css("display", "none");
            });


            if (showBullets) {
                var $bulletsList = $("<ul class='bullets'></ul>");
                $items.each(function (index) {
                    var $bulletListItem = $("<li></li>");
                    if (index == 0) $bulletListItem.addClass("current");

                    $bulletsList.append($bulletListItem);
                });


                $carousel.append($bulletsList);
            }

            var currentItemCount = 1;

            if ($prevButton.length > 0) {
                if (maxItemCount > 1) {
                    $prevButton.fadeTo(0, "0.4");
                    $prevButton.on("click",
                        function () {
                            $container.children().stop(true, true);
                            if (maxItemCount > 1) clearInterval(timer);
                            goToPrevItem();
                            if (maxItemCount > 1) createTimer();
                        });
                } else
                    $prevButton.remove();
            }

            if ($nextButton.length > 0) {
                if (maxItemCount > 1) {
                    $nextButton.addClass("Active");
                    $nextButton.on("click",
                        function () {
                            $container.children().stop(true, true);
                            if (maxItemCount > 1) clearInterval(timer);
                            goToNextItem();
                            if (maxItemCount > 1) createTimer();
                        });
                } else
                    $nextButton.remove();
            }

            function goToPrevItem() {
                if (currentItemCount == 1) return;

                currentItemCount--;
                if (isSwipe) swipeItem("right");
                else if (isSlide) slideItem("right");
                else fadeItem();

                setupButtons();
            }

            function goToNextItem() {
                if (currentItemCount == maxItemCount) return;

                currentItemCount++;
                if (isSwipe) swipeItem("left");
                else if (isSlide) slideItem("left");
                else fadeItem();

                setupButtons();
            }

            function fadeItem() {
                var $newItem = $items.filter("[data-itemCount='" + currentItemCount + "']");
                var $currentItem = $items.filter("[data-currentItem='1']");

                $container.prepend($newItem.css("display","block"));
                $currentItem.fadeOut(animateDuration, function () {
                    $currentItem.attr("data-currentItem", "0");
                    $newItem.attr("data-currentItem", "1");
                });
            }

            function swipeItem(swipeDirection) {
                var $newItem = $items.filter("[data-itemCount='" + currentItemCount + "']");
                var $currentItem = $items.filter("[data-currentItem='1']");

                if (swipeDirection == "right") {
                    $container.prepend($newItem.css("display", "block"));

                    $currentItem.animate({ left: "+=" + itemWidth }, animateDuration, function () {
                        $currentItem.css("display", "none");
                        $currentItem.attr("data-currentItem", "0");
                        $newItem.attr("data-currentItem", "1");
                    });
                }
                if (swipeDirection == "left") {
                    $newItem.css("left", itemWidth + "px").css("display", "block");
                    $container.append($newItem);

                    $newItem.animate({ left: "0" }, animateDuration, function () {
                        $currentItem.css("display", "none");
                        $currentItem.attr("data-currentItem", "0");
                        $newItem.attr("data-currentItem", "1");
                    });
                }
            }

            function slideItem(swipeDirection) {
                var $newItem = $items.filter("[data-itemCount='" + currentItemCount + "']");
                var $currentItem = $items.filter("[data-currentItem='1']");


                if (swipeDirection == "right") {
                    $newItem.css("left", "-" + itemWidth + "px");
                    $container.prepend($newItem.css("display", "block"));

                    $currentItem.animate({ left: "+=" + itemWidth }, animateDuration);
                    
                    $newItem.animate({ left: "0" }, animateDuration, function () {
                        $currentItem.css("display", "none");
                        $currentItem.attr("data-currentItem", "0");
                        $newItem.attr("data-currentItem", "1");
                    });

                }
                if (swipeDirection == "left") {
                    $newItem.css("left", itemWidth + "px").css("display", "block");
                    $container.append($newItem);

                    $currentItem.animate({ left: "-=" + itemWidth }, animateDuration);

                    $newItem.animate({ left: "0" }, animateDuration, function () {
                        $currentItem.css("display", "none");
                        $currentItem.attr("data-currentItem", "0");
                        $newItem.attr("data-currentItem", "1");
                    });
                }
            }

            function setupButtons() {
                if (currentItemCount > 1) {
                    $prevButton.fadeTo(0, "1");
                    if (!$prevButton.hasClass("Active")) $prevButton.addClass("Active");
                } else {
                    $prevButton.fadeTo(0, "0.4");
                    $prevButton.removeClass("Active");
                }

                if (currentItemCount < maxItemCount) {
                    $nextButton.fadeTo(0, "1");
                    if (!$nextButton.hasClass("Active")) $nextButton.addClass("Active");
                } else {
                    $nextButton.fadeTo(0, "0.4");
                    $nextButton.removeClass("Active");
                }

                if (showBullets) {
                    var $bullets = $carousel.find(".bullets");
                    $bullets.children().removeClass("current");
                    $bullets.children().eq(currentItemCount - 1).addClass("current");
                }
            }

            if (maxItemCount > 1) {
                var timer;
                function createTimer() {
                    timer = setInterval(function () {
                        if (currentItemCount == maxItemCount) currentItemCount = 0;
                        goToNextItem();
                    }, pauseDuration);
                }
                createTimer();
            }

            $carousel.attr("data-isRunning", "true");
        });

        $(".carousel").css("visibility", "visible");
    };

    $(window).load(function () {
        Common.initCarousels();
    });
//---------Init carousels-----------//
    
//---------Global language selector dropdown-----------//
    (function () {
        var $container = $('#siteLanguagePicker');
        var $languageLink = $container.find('.language');
        var $linkList = $('#languageList');

        var listHeight = 0;
        var listOpen = false;

        $languageLink.on('click', function (e) {
            if (listOpen === false) {
                showList();
            } else {
                hideList();
            }
            return false;
        });

        setup();

        function setup() {
            $linkList.addClass('calcSizeThenShow').show();
            listHeight = $linkList.height();
            $linkList.css({
                'height': '0px',
                'opacity': '0'
            }).removeClass('calcSizeThenShow');

            $linkList.find('li:last').addClass('last');
        }

        function showList() {
            $linkList.stop().animate({
                'height': listHeight + 'px',
                'opacity': '1'
            }, 200, 'easeOutExpo');
            var lang = $languageLink.addClass('active').text();
            setActiveLinkList(lang);
            listOpen = true;
        }

        function hideList() {
            $linkList.stop().animate({
                'height': '0px',
                'opacity': '0'
            }, 200, 'easeOutExpo');
            $languageLink.removeClass('active');
            listOpen = false;
        }

        function setActiveLinkList(currentLanguage) {
            $linkList.find('li').each(function () {
                var LanguageEl = $(this).find('a');
                var Language = LanguageEl.text();
                if (currentLanguage === Language) {
                    $(this).addClass('active');
                    return false;
                }
            });
        }
    }());
//---------Global language selector dropdown-----------//

//---------Global site search-----------//
    $(".searchOptions > .options").slideUp(0).css("visibility", "visible");
    $(".searchOptions .toggle").click(function () {
        var $button = $(this);
        var $container = $button.parent();
        var $optionsPanel = $button.next();

        if ($container.hasClass("open")) {
            $optionsPanel.stop(true, true).slideUp(100, "easeOutExpo", function () {
                $container.removeClass("open");
            });
        } else {
            $container.addClass("open");
            $optionsPanel.stop(true, true).slideDown(100, "easeInExpo");
        }
    });

    $("#globalSearch .searchField input.text").keyup(function (ev) {
        if (ev.keyCode == 13) {
            ev.preventDefault();
            $(".btnSiteSearch input[type=submit]").click();
            return false;
        }
    });
//---------Global site search-----------//

//---------Home search panel popout-----------//
    var $homeSearchPanels = $(".homeSearchPanel");
    $homeSearchPanels.removeClass("panelOpen");
    $(window).load(function () {
        $homeSearchPanels.each(function (index) {
            var $homeSearchPanel = $(this);
            var $panelHeadText = $(this).children(".panelHeadText");
            var $searchBoxOption = $panelHeadText.children(".searchBoxOption");
            var $panelArrow = $panelHeadText.children(".panelArrow");
            var $panelSearchCriteria = $(this).children(".panelSearchCriteria");
            var $residentialOption = $homeSearchPanels.find(".residentialOption");
            var $commercialOption = $homeSearchPanels.find(".commercialOption");
            var $residentialHidden = $homeSearchPanels.find("#residentialHidden");

            var closedWidth = $panelHeadText.width() + 1;

            $searchBoxOption.click(function () {
                if ($homeSearchPanel.hasClass("panelAnimating")) return;

                if (!$(this).hasClass("selectedOption")) {
                    $homeSearchPanel.addClass("panelAnimating");
                    $panelArrow.stop(true, true).fadeOut(200, "easeInExpo");
                    $panelHeadText.animate({ "width": "980px" }, 300, "easeInExpo", function () {
                        $panelSearchCriteria.css("display", "block");
                        $panelSearchCriteria.animate({ "height": "110px" }, 300, "easeOutExpo", function () {
                            $homeSearchPanel.addClass("panelOpen");
                            $homeSearchPanel.removeClass("panelAnimating");
                        });
                    });

                    //trigger between cammercial and residential search
                    $searchBoxOption.removeClass("selectedOption");
                    $(this).addClass("selectedOption").addClass("rotateBack");

                    if ($homeSearchPanel.find("#searchListingTypeBoth").prop("checked") && !$(this).hasClass("commercialButton")) {
                        $homeSearchPanel.find("#searchListingTypeSale").prop("checked", true).trigger("change");
                    }

                    if ($(this).hasClass("commercialButton")) {
                        $residentialOption.hide();
                        $commercialOption.show();

                        $homeSearchPanels.find(".residentialOption input:not(#residentialHidden)").val("");
                        $homeSearchPanels.find("#searchPropertyType option").filter("[value='" + $residentialHidden.val() + "']").remove();
                        $homeSearchPanels.find("#searchResidentialType option").prop("selected", false);
                        //$homeSearchPanels.find("#searchResidentialCategory option").prop("selected", false);
                        $homeSearchPanels.find("#searchPropertyType").trigger("chosen:updated");
                        $homeSearchPanels.find("#searchResidentialType").trigger("chosen:updated");
                        //$homeSearchPanels.find("#searchResidentialCategory").trigger("chosen:updated");
                    } else {
                        $commercialOption.hide();
                        $residentialOption.show();

                        $homeSearchPanels.find(".commercialOption input:not(#residentialHidden)").val("");
                        $homeSearchPanels.find("#searchPropertyType option").last().after("<option value='" + $residentialHidden.val() + "'>" + $residentialHidden.val() + "</option>");
                        $homeSearchPanels.find("#searchPropertyType option").prop("selected", false).filter("[value='" + $residentialHidden.val() + "']").prop("selected", true);
                        $homeSearchPanels.find("#searchPropertyType").trigger("chosen:updated");
                    }
                } else {
                    $homeSearchPanel.addClass("panelAnimating");
                    $panelSearchCriteria.animate({ "height": "0" }, 300, "easeInExpo", function () {
                        $panelSearchCriteria.css("display", "none");
                        $panelArrow.fadeIn(200, "easeOutExpo");
                        $panelHeadText.animate({
                            "width": closedWidth + "px"
                        }, 300, "easeOutExpo", function () {
                            $homeSearchPanel.removeClass("panelOpen");
                            $homeSearchPanel.removeClass("panelAnimating");
                        });
                    });
                    $searchBoxOption.removeClass("selectedOption");
                }

                //search button arrow rotate
                var angle = 90;
                $({ deg: 0 }).animate({ deg: angle }, {
                    duration: 300,
                    step: function (now) {
                        $(".selectedOption .searchBoxArrow").css({
                            transform: 'rotate(' + now + 'deg)'
                        });
                    }
                });

                $({ deg: angle }).animate({ deg: 0 }, {
                    duration: 300,
                    step: function (now) {
                        $(".rotateBack:not(.selectedOption) .searchBoxArrow").each(function () {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        });
                    },
                    complete: function () { $(".rotateBack:not(.selectedOption)").removeClass("rotateBack"); }
                });
            });
        });
    });

    $(window).load(function () {
        $homeSearchPanels.each(function (index) {
            var $homeSearchPanel = $(this);
            var $panelHeadText = $(this).children(".panelHeadText");
            var $panelArrow = $panelHeadText.children(".panelArrow");
            var $panelSearchCriteria = $(this).children(".panelSearchCriteria");

            var closedWidth = $panelHeadText.width() + $(this).children(".commercialOption").width() + $(this).children(".residentialOption").width() + $(this).children(".gap").width() + 1;
           
            $panelHeadText.click(function () {
                if ($homeSearchPanel.hasClass("panelAnimating")) return;

                if (!$homeSearchPanel.hasClass("panelOpen")) {
                    $homeSearchPanel.addClass("panelAnimating");
                    $panelArrow.stop(true, true).fadeOut(200, "easeInExpo");
                    $panelHeadText.animate({ "width": "980px" }, 300, "easeInExpo", function () {
                        $panelSearchCriteria.css("display", "block");
                        $panelSearchCriteria.animate({ "height": "110px" }, 300, "easeOutExpo", function () {
                            $homeSearchPanel.addClass("panelOpen");
                            $homeSearchPanel.removeClass("panelAnimating");
                        });
                    });

                } else {
                    $homeSearchPanel.addClass("panelAnimating");
                    $panelSearchCriteria.animate({ "height": "0" }, 300, "easeInExpo", function () {
                        $panelSearchCriteria.css("display", "none");
                        $panelArrow.fadeIn(200, "easeOutExpo");
                        $panelHeadText.animate({
                            "width": closedWidth + "px"
                        }, 300, "easeOutExpo", function () {
                            $homeSearchPanel.removeClass("panelOpen");
                            $homeSearchPanel.removeClass("panelAnimating");
                        });
                    });
                }

            });
        });
    });
//---------Home search panel popout-----------//


//-------------Custom placeholders------------//
    $('input, textarea').placeholder();

    //I feel dirty doing this. SORRY they made me do it
    $(".disableContext").on("contextmenu", "img", function () {
        return false;
    });

    //----------Utilities-----------------//

    Common.Utilities = {};

    Common.Utilities.GetInnerDimensions = function ($elem) {

        if ($elem == null || $elem.length == 0) return NaN;

        var innerWidth = $elem.innerWidth();
        var innerHeight = $elem.innerHeight();

        var padding = {
            top: parseInt($elem.css("padding-top")),
            right: parseInt($elem.css("padding-right")),
            bottom: parseInt($elem.css("padding-bottom")),
            left: parseInt($elem.css("padding-left")),
            horizontal: function(){
                if(this.left != NaN && this.right != NaN) return this.left + this.right;
                if(this.left != NaN) return this.left;
                if(this.right != NaN) return this.right;

                return 0;
            },
            verticle: function () {
                if(this.top != NaN && this.bottom != NaN) return this.top + this.bottom;
                if(this.top != NaN) return this.top;
                if(this.bottom != NaN) return this.bottom;

                return 0;
            }
        };

        return {
            width: innerWidth - padding.horizontal(),
            height: innerHeight - padding.verticle()
        };
        
    };

    Common.Utilities.SetDimensions = function ($elem, dimensions) {
        $elem.width = dimensions.width;
        $elem.height = dimensions.height;

        $elem.attr("width", dimensions.width);
        $elem.attr("height", dimensions.height);

        $elem.attr("style", "width:" + dimensions.width + "px;height:" + dimensions.height + "px;");
    };
});

