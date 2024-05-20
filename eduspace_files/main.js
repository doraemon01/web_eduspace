/*! For license information please see main.js.LICENSE.txt */
(() => {
    var e = {
            993: function (e, t, n) {
                var o, i, r;
                function l(e) {
                    return (
                        (l =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e &&
                                          "function" == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? "symbol"
                                          : typeof e;
                                  }),
                        l(e)
                    );
                }
                (r = function () {
                    "use strict";
                    var e, t, n, o;
                    Array.prototype.find ||
                        Object.defineProperty(Array.prototype, "find", {
                            value: function (e) {
                                if (null == this)
                                    throw new TypeError(
                                        '"this" is null or not defined'
                                    );
                                var t = Object(this),
                                    n = t.length >>> 0;
                                if ("function" != typeof e)
                                    throw new TypeError(
                                        "predicate must be a function"
                                    );
                                for (var o = arguments[1], i = 0; i < n; ) {
                                    var r = t[i];
                                    if (e.call(o, r, i, t)) return r;
                                    i++;
                                }
                            },
                        }),
                        Array.from ||
                            (Array.from =
                                ((e = Object.prototype.toString),
                                (t = function (t) {
                                    return (
                                        "function" == typeof t ||
                                        "[object Function]" === e.call(t)
                                    );
                                }),
                                (n = Math.pow(2, 53) - 1),
                                (o = function (e) {
                                    var t = (function (e) {
                                        var t = Number(e);
                                        return isNaN(t)
                                            ? 0
                                            : 0 !== t && isFinite(t)
                                            ? (t > 0 ? 1 : -1) *
                                              Math.floor(Math.abs(t))
                                            : t;
                                    })(e);
                                    return Math.min(Math.max(t, 0), n);
                                }),
                                function (e) {
                                    var n = Object(e);
                                    if (null == e)
                                        throw new TypeError(
                                            "Array.from requires an array-like object - not null or undefined"
                                        );
                                    var i,
                                        r =
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0;
                                    if (void 0 !== r) {
                                        if (!t(r))
                                            throw new TypeError(
                                                "Array.from: when provided, the second argument must be a function"
                                            );
                                        arguments.length > 2 &&
                                            (i = arguments[2]);
                                    }
                                    for (
                                        var l,
                                            c = o(n.length),
                                            a = t(this)
                                                ? Object(new this(c))
                                                : new Array(c),
                                            s = 0;
                                        s < c;

                                    )
                                        (l = n[s]),
                                            (a[s] = r
                                                ? void 0 === i
                                                    ? r(l, s)
                                                    : r.call(i, l, s)
                                                : l),
                                            (s += 1);
                                    return (a.length = c), a;
                                }));
                    var i = window,
                        r = document,
                        l = navigator.userAgent.match(
                            /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
                        ),
                        c = /(Mac|iPhone|iPod|iPad)/i.test(
                            i.navigator.userAgent
                        ),
                        a =
                            "ontouchstart" in i ||
                            navigator.msMaxTouchPoints > 0 ||
                            navigator.maxTouchPoints,
                        s =
                            !!window.MSInputMethodContext &&
                            !!document.documentMode,
                        u =
                            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                        f = {
                            test: {},
                            shared: {},
                        },
                        d = [
                            "parallax",
                            "scrollOverflowReset",
                            "dragAndMove",
                            "offsetSections",
                            "fadingEffect",
                            "responsiveSlides",
                            "continuousHorizontal",
                            "interlockedSlides",
                            "scrollHorizontally",
                            "resetSliders",
                            "cards",
                            "dropEffect",
                            "waterEffect",
                        ];
                    function h(e, t) {
                        i.console &&
                            i.console[e] &&
                            i.console[e]("fullPage: " + t);
                    }
                    function v(e) {
                        return "none" !== i.getComputedStyle(e).display;
                    }
                    function p(e) {
                        return Array.from(e).filter(function (e) {
                            return v(e);
                        });
                    }
                    function m(e, t) {
                        return (t = arguments.length > 1 ? t : document)
                            ? t.querySelectorAll(e)
                            : null;
                    }
                    function g(e) {
                        e = e || {};
                        for (var t = 1, n = arguments.length; t < n; ++t) {
                            var o = arguments[t];
                            if (o)
                                for (var i in o)
                                    o.hasOwnProperty(i) &&
                                        "__proto__" != i &&
                                        "constructor" != i &&
                                        ("[object Object]" !==
                                        Object.prototype.toString.call(o[i])
                                            ? (e[i] = o[i])
                                            : (e[i] = g(e[i], o[i])));
                        }
                        return e;
                    }
                    function y(e, t) {
                        return null != e && e.classList.contains(t);
                    }
                    function S() {
                        return "innerHeight" in i
                            ? i.innerHeight
                            : r.documentElement.offsetHeight;
                    }
                    function b() {
                        return i.innerWidth;
                    }
                    function w(e, t) {
                        var n;
                        for (n in ((e = T(e)), t))
                            if (t.hasOwnProperty(n) && null !== n)
                                for (var o = 0; o < e.length; o++)
                                    e[o].style[n] = t[n];
                        return e;
                    }
                    function x(e) {
                        return e.previousElementSibling;
                    }
                    function E(e) {
                        return e.nextElementSibling;
                    }
                    function A(e) {
                        return e[e.length - 1];
                    }
                    function L(e, t) {
                        e = P(e) ? e[0] : e;
                        for (
                            var n =
                                    null != t
                                        ? m(t, e.parentNode)
                                        : e.parentNode.childNodes,
                                o = 0,
                                i = 0;
                            i < n.length;
                            i++
                        ) {
                            if (n[i] == e) return o;
                            1 == n[i].nodeType && o++;
                        }
                        return -1;
                    }
                    function T(e) {
                        return P(e) ? e : [e];
                    }
                    function O(e) {
                        e = T(e);
                        for (var t = 0; t < e.length; t++)
                            e[t].style.display = "none";
                        return e;
                    }
                    function _(e) {
                        e = T(e);
                        for (var t = 0; t < e.length; t++)
                            e[t].style.display = "block";
                        return e;
                    }
                    function P(e) {
                        return (
                            "[object Array]" ===
                                Object.prototype.toString.call(e) ||
                            "[object NodeList]" ===
                                Object.prototype.toString.call(e)
                        );
                    }
                    function M(e, t) {
                        e = T(e);
                        for (var n = 0; n < e.length; n++)
                            e[n].classList.add(t);
                        return e;
                    }
                    function k(e, t) {
                        e = T(e);
                        for (var n = t.split(" "), o = 0; o < n.length; o++) {
                            t = n[o];
                            for (var i = 0; i < e.length; i++)
                                e[i].classList.remove(t);
                        }
                        return e;
                    }
                    function j(e, t) {
                        t.appendChild(e);
                    }
                    function B(e, t, n) {
                        var o;
                        t = t || r.createElement("div");
                        for (var i = 0; i < e.length; i++) {
                            var l = e[i];
                            ((n && !i) || !n) &&
                                ((o = t.cloneNode(!0)),
                                l.parentNode.insertBefore(o, l)),
                                o.appendChild(l);
                        }
                        return e;
                    }
                    function R(e, t) {
                        B(e, t, !0);
                    }
                    function C(e, t) {
                        for (e.appendChild(t); e.firstChild !== t; )
                            t.appendChild(e.firstChild);
                    }
                    function I(e) {
                        for (var t = r.createDocumentFragment(); e.firstChild; )
                            t.appendChild(e.firstChild);
                        e.parentNode.replaceChild(t, e);
                    }
                    function D(e, t) {
                        return e && 1 === e.nodeType
                            ? $(e, t)
                                ? e
                                : D(e.parentNode, t)
                            : null;
                    }
                    function q(e, t) {
                        F(e, e.nextSibling, t);
                    }
                    function H(e, t) {
                        F(e, e, t);
                    }
                    function F(e, t, n) {
                        P(n) || ("string" == typeof n && (n = Z(n)), (n = [n]));
                        for (var o = 0; o < n.length; o++)
                            e.parentNode.insertBefore(n[o], t);
                    }
                    function z() {
                        var e = r.documentElement;
                        return (
                            (i.pageYOffset || e.scrollTop) - (e.clientTop || 0)
                        );
                    }
                    function N(e) {
                        return Array.prototype.filter.call(
                            e.parentNode.children,
                            function (t) {
                                return t !== e;
                            }
                        );
                    }
                    function W(e) {
                        e.preventDefault();
                    }
                    function V(e, t) {
                        return e.getAttribute(t);
                    }
                    function U(e, t, n) {
                        r.addEventListener(e, t, "undefined" === n ? null : n);
                    }
                    function Y(e, t, n) {
                        i.addEventListener(e, t, "undefined" === n ? null : n);
                    }
                    function K(e, t, n) {
                        r.removeEventListener(
                            e,
                            t,
                            "undefined" === n ? null : n
                        );
                    }
                    function X(e, t, n) {
                        i.removeEventListener(
                            e,
                            t,
                            "undefined" === n ? null : n
                        );
                    }
                    function G(e) {
                        if ("function" == typeof e) return !0;
                        var t = Object.prototype.toString.call(e);
                        return (
                            "[object Function]" === t ||
                            "[object GeneratorFunction]" === t
                        );
                    }
                    function Q(e, t, n) {
                        var o;
                        (n = void 0 === n ? {} : n),
                            "function" == typeof i.CustomEvent
                                ? (o = new CustomEvent(t, {
                                      detail: n,
                                  }))
                                : (o =
                                      r.createEvent(
                                          "CustomEvent"
                                      )).initCustomEvent(t, !0, !0, n),
                            e.dispatchEvent(o);
                    }
                    function $(e, t) {
                        return (
                            e.matches ||
                            e.matchesSelector ||
                            e.msMatchesSelector ||
                            e.mozMatchesSelector ||
                            e.webkitMatchesSelector ||
                            e.oMatchesSelector
                        ).call(e, t);
                    }
                    function J(e, t) {
                        if ("boolean" == typeof t)
                            for (var n = 0; n < e.length; n++)
                                e[n].style.display = t ? "block" : "none";
                        return e;
                    }
                    function Z(e) {
                        var t = r.createElement("div");
                        return (t.innerHTML = e.trim()), t.firstChild;
                    }
                    function ee(e) {
                        e = T(e);
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n && n.parentElement && n.parentNode.removeChild(n);
                        }
                    }
                    function te(e, t, n) {
                        for (var o = e[n], i = []; o; )
                            ($(o, t) || null == t) && i.push(o), (o = o[n]);
                        return i;
                    }
                    function ne(e, t) {
                        return te(e, t, "nextElementSibling");
                    }
                    function oe(e, t) {
                        return te(e, t, "previousElementSibling");
                    }
                    function ie(e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    }
                    function re(e) {
                        return e[e.length - 1];
                    }
                    function le(e, t) {
                        for (
                            var n = 0,
                                o = e.slice(Math.max(e.length - t, 1)),
                                i = 0;
                            i < o.length;
                            i++
                        )
                            n += o[i];
                        return Math.ceil(n / t);
                    }
                    function ce(e, t) {
                        e.setAttribute(t, V(e, "data-" + t)),
                            e.removeAttribute("data-" + t);
                    }
                    function ae(e, t) {
                        var n = [e];
                        do {
                            (e = e.parentNode), n.push(e);
                        } while (!$(e, t));
                        return n;
                    }
                    function se() {
                        var e = r.activeElement;
                        return (
                            $(e, "textarea") ||
                            $(e, "input") ||
                            $(e, "select") ||
                            "true" == V(e, "contentEditable") ||
                            "" == V(e, "contentEditable")
                        );
                    }
                    i.NodeList &&
                        !NodeList.prototype.forEach &&
                        (NodeList.prototype.forEach = function (e, t) {
                            t = t || window;
                            for (var n = 0; n < this.length; n++)
                                e.call(t, this[n], n, this);
                        }),
                        "function" != typeof Object.assign &&
                            Object.defineProperty(Object, "assign", {
                                value: function (e, t) {
                                    if (null == e)
                                        throw new TypeError(
                                            "Cannot convert undefined or null to object"
                                        );
                                    for (
                                        var n = Object(e), o = 1;
                                        o < arguments.length;
                                        o++
                                    ) {
                                        var i = arguments[o];
                                        if (null != i)
                                            for (var r in i)
                                                Object.prototype.hasOwnProperty.call(
                                                    i,
                                                    r
                                                ) && (n[r] = i[r]);
                                    }
                                    return n;
                                },
                                writable: !0,
                                configurable: !0,
                            }),
                        String.prototype.padStart ||
                            (String.prototype.padStart = function (e, t) {
                                return (
                                    (e >>= 0),
                                    (t = String(void 0 !== t ? t : " ")),
                                    this.length > e
                                        ? String(this)
                                        : ((e -= this.length) > t.length &&
                                              (t += Array.apply(null, Array(e))
                                                  .map(function () {
                                                      return t;
                                                  })
                                                  .join("")),
                                          t.slice(0, e) + String(this))
                                );
                            }),
                        (window.fp_utils = {
                            $: m,
                            deepExtend: g,
                            hasClass: y,
                            getWindowHeight: S,
                            css: w,
                            prev: x,
                            next: E,
                            last: A,
                            index: L,
                            getList: T,
                            hide: O,
                            show: _,
                            isArrayOrList: P,
                            addClass: M,
                            removeClass: k,
                            appendTo: j,
                            wrap: B,
                            wrapAll: R,
                            unwrap: I,
                            closest: D,
                            after: q,
                            before: H,
                            insertBefore: F,
                            getScrollTop: z,
                            siblings: N,
                            preventDefault: W,
                            isFunction: G,
                            trigger: Q,
                            matches: $,
                            toggle: J,
                            createElementFromHTML: Z,
                            remove: ee,
                            untilAll: te,
                            nextAll: ne,
                            prevAll: oe,
                            showError: h,
                        });
                    var ue = Object.freeze({
                        __proto__: null,
                        showError: h,
                        isVisible: v,
                        getVisible: p,
                        $: m,
                        deepExtend: g,
                        hasClass: y,
                        getWindowHeight: S,
                        getWindowWidth: b,
                        css: w,
                        prev: x,
                        next: E,
                        last: A,
                        index: L,
                        getList: T,
                        hide: O,
                        show: _,
                        isArrayOrList: P,
                        addClass: M,
                        removeClass: k,
                        appendTo: j,
                        wrap: B,
                        wrapAll: R,
                        wrapInner: C,
                        unwrap: I,
                        closest: D,
                        after: q,
                        before: H,
                        insertBefore: F,
                        getScrollTop: z,
                        siblings: N,
                        preventDefault: W,
                        getAttr: V,
                        docAddEvent: U,
                        windowAddEvent: Y,
                        docRemoveEvent: K,
                        windowRemoveEvent: X,
                        isFunction: G,
                        trigger: Q,
                        matches: $,
                        toggle: J,
                        createElementFromHTML: Z,
                        remove: ee,
                        untilAll: te,
                        nextAll: ne,
                        prevAll: oe,
                        toArray: ie,
                        getLast: re,
                        getAverage: le,
                        setSrc: ce,
                        getParentsUntil: ae,
                        isInsideInput: se,
                    });
                    function fe(e) {
                        return (
                            (fe =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" == typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
                                      }),
                            fe(e)
                        );
                    }
                    var de = {
                            events: {},
                            on: function (e, t) {
                                var n = this;
                                return (
                                    "object" !== fe(this.events[e]) &&
                                        (this.events[e] = []),
                                    this.events[e].push(t),
                                    function () {
                                        return n.removeListener(e, t);
                                    }
                                );
                            },
                            removeListener: function (e, t) {
                                if ("object" === fe(this.events[e])) {
                                    var n = this.events[e].indexOf(t);
                                    n > -1 && this.events[e].splice(n, 1);
                                }
                            },
                            emit: function (e) {
                                for (
                                    var t = this,
                                        n = arguments.length,
                                        o = new Array(n > 1 ? n - 1 : 0),
                                        i = 1;
                                    i < n;
                                    i++
                                )
                                    o[i - 1] = arguments[i];
                                "object" === fe(this.events[e]) &&
                                    this.events[e].forEach(function (e) {
                                        return e.apply(t, o);
                                    });
                            },
                            once: function (e, t) {
                                var n = this,
                                    o = this.on(e, function () {
                                        o();
                                        for (
                                            var e = arguments.length,
                                                i = new Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            i[r] = arguments[r];
                                        t.apply(n, i);
                                    });
                            },
                        },
                        he = {
                            numSections: 0,
                            numSlides: 0,
                            slides: [],
                            sections: [],
                            activeSection: null,
                            scrollTrigger: null,
                            isBeyondFullpage: !1,
                            aboutToScrollToFullPage: !1,
                            slideMoving: !1,
                            isResizing: !1,
                            isScrolling: !1,
                            lastScrolledDestiny: void 0,
                            lastScrolledSlide: void 0,
                            activeAnimation: !1,
                            canScroll: !0,
                            touchDirection: "none",
                            wheelDirection: "none",
                            isGrabbing: !1,
                            isUsingWheel: !1,
                            isWindowFocused: !0,
                            previousDestTop: 0,
                            windowsHeight: S(),
                            isDoingContinousVertical: !1,
                            timeouts: {},
                            scrollY: 0,
                            scrollX: 0,
                        };
                    function ve(e) {
                        Object.assign(he, e);
                    }
                    function pe() {
                        return he;
                    }
                    i.state = he;
                    var me = {
                        onAfterRenderNoAnchor: "onAfterRenderNoAnchor",
                        onClickOrTouch: "onClickOrTouch",
                        moveSlideLeft: "moveSlideLeft",
                        moveSlideRight: "moveSlideRight",
                        onInitialise: "onInitialise",
                        beforeInit: "beforeInit",
                        bindEvents: "bindEvents",
                        onDestroy: "onDestroy",
                        contentChanged: "contentChanged",
                        onScrollOverflowScrolled: "onScrollOverflowScrolled",
                        onScrollPageAndSlide: "onScrollPageAndSlide",
                        onKeyDown: "onKeyDown",
                        onMenuClick: "onMenuClick",
                        scrollPage: "scrollPage",
                        landscapeScroll: "landscapeScroll",
                        scrollBeyondFullpage: "scrollBeyondFullpage",
                        onPerformMovement: "onPerformMovement",
                        onSlideLeave: "onSlideLeave",
                        onLeave: "onLeave",
                        afterSectionLoads: "afterSectionLoads",
                        afterSlideLoads: "afterSlideLoads",
                    };
                    function ge(e) {
                        de.emit(me.onClickOrTouch, {
                            e,
                            target: e.target,
                        });
                    }
                    function ye() {
                        ["click", "touchstart"].forEach(function (e) {
                            K(e, ge);
                        });
                    }
                    function Se() {
                        ve({
                            isWindowFocused: !0,
                        });
                    }
                    de.on(me.bindEvents, function () {
                        ["click", "touchstart"].forEach(function (e) {
                            U(e, ge);
                        }),
                            Y("focus", Se),
                            de.on(me.onDestroy, ye);
                    });
                    var be = "fullpage-wrapper",
                        we = "." + be,
                        xe = "fp-responsive",
                        Ee = "fp-notransition",
                        Ae = "fp-destroyed",
                        Le = "fp-enabled",
                        Te = "fp-viewing",
                        Oe = "active",
                        _e = "." + Oe,
                        Pe = "fp-completely",
                        Me = "." + Pe,
                        ke = "fp-section",
                        je = "." + ke,
                        Be = je + _e,
                        Re = ".fp-tableCell",
                        Ce = "fp-auto-height",
                        Ie = "." + Ce,
                        De = "fp-auto-height-responsive",
                        qe = "." + De,
                        He = "fp-normal-scroll",
                        Fe = "fp-nav",
                        ze = "#" + Fe,
                        Ne = "fp-tooltip",
                        We = "." + Ne,
                        Ve = "fp-show-active",
                        Ue = "fp-slide",
                        Ye = "." + Ue,
                        Ke = Ye + _e,
                        Xe = "fp-slides",
                        Ge = "." + Xe,
                        Qe = "fp-slidesContainer",
                        $e = "." + Qe,
                        Je = "fp-table",
                        Ze = "fp-overflow",
                        et = "." + Ze,
                        tt = "fp-is-overflow",
                        nt = "fp-slidesNav",
                        ot = "." + nt,
                        it = ot + " a",
                        rt = "fp-arrow",
                        lt = "fp-controlArrow",
                        ct = "." + lt,
                        at = "fp-prev",
                        st = ct + "." + at,
                        ut = "fp-next",
                        ft = ct + "." + ut,
                        dt = {
                            menu: !1,
                            anchors: [],
                            lockAnchors: !1,
                            navigation: !1,
                            navigationPosition: "right",
                            navigationTooltips: [],
                            showActiveTooltip: !1,
                            slidesNavigation: !1,
                            slidesNavPosition: "bottom",
                            scrollBar: !1,
                            hybrid: !1,
                            licenseKey: "IL277-2O54I-0PIT8-KQNEI-RSKTN",
                            credits: {
                                enabled: !0,
                                label: "Made with fullPage.js",
                                position: "right",
                            },
                            css3: !0,
                            scrollingSpeed: 700,
                            autoScrolling: !0,
                            fitToSection: !0,
                            fitToSectionDelay: 600,
                            easing: "easeInOutCubic",
                            easingcss3: "ease",
                            loopBottom: !1,
                            loopTop: !1,
                            loopHorizontal: !0,
                            continuousVertical: !1,
                            continuousHorizontal: !1,
                            scrollHorizontally: !1,
                            interlockedSlides: !1,
                            dragAndMove: !1,
                            offsetSections: !1,
                            resetSliders: !1,
                            fadingEffect: !1,
                            normalScrollElements: null,
                            scrollOverflow: !0,
                            scrollOverflowReset: !1,
                            touchSensitivity: 5,
                            touchWrapper: null,
                            bigSectionsDestination: null,
                            keyboardScrolling: !0,
                            animateAnchor: !0,
                            recordHistory: !0,
                            allowCorrectDirection: !1,
                            scrollOverflowMacStyle: !0,
                            controlArrows: !0,
                            controlArrowsHTML: [
                                '<div class="' + rt + '"></div>',
                                '<div class="' + rt + '"></div>',
                            ],
                            controlArrowColor: "#fff",
                            verticalCentered: !0,
                            sectionsColor: [],
                            paddingTop: 0,
                            paddingBottom: 0,
                            fixedElements: null,
                            responsive: 0,
                            responsiveWidth: 0,
                            responsiveHeight: 0,
                            responsiveSlides: !1,
                            parallax: !1,
                            parallaxOptions: {
                                type: "reveal",
                                percentage: 62,
                                property: "translate",
                            },
                            cards: !1,
                            cardsOptions: {
                                perspective: 100,
                                fadeContent: !0,
                                fadeBackground: !0,
                            },
                            sectionSelector: ".section",
                            slideSelector: ".slide",
                            afterLoad: null,
                            beforeLeave: null,
                            onLeave: null,
                            afterRender: null,
                            afterResize: null,
                            afterReBuild: null,
                            afterSlideLoad: null,
                            onSlideLeave: null,
                            afterResponsive: null,
                            onScrollOverflow: null,
                            lazyLoading: !0,
                            observer: !0,
                            scrollBeyondFullpage: !0,
                        },
                        ht = null,
                        vt = !1,
                        pt = g({}, dt),
                        mt = null;
                    function gt(e) {
                        return ht;
                    }
                    function yt() {
                        return mt || dt;
                    }
                    function St() {
                        return pt;
                    }
                    function bt(e, t, n) {
                        (mt[e] = t), "internal" !== n && (pt[e] = t);
                    }
                    function wt() {
                        if (!yt().anchors.length) {
                            var e = "[data-anchor]",
                                t = m(
                                    yt()
                                        .sectionSelector.split(",")
                                        .join(e + ",") + e,
                                    ht
                                );
                            t.length &&
                                t.length ===
                                    m(yt().sectionSelector, ht).length &&
                                ((vt = !0),
                                t.forEach(function (e) {
                                    yt().anchors.push(
                                        V(e, "data-anchor").toString()
                                    );
                                }));
                        }
                        if (!yt().navigationTooltips.length) {
                            var n = "[data-tooltip]",
                                o = m(
                                    yt()
                                        .sectionSelector.split(",")
                                        .join(n + ",") + n,
                                    ht
                                );
                            o.length &&
                                o.forEach(function (e) {
                                    yt().navigationTooltips.push(
                                        V(e, "data-tooltip").toString()
                                    );
                                });
                        }
                    }
                    var xt = function (e) {
                            (this.anchor = e.anchor),
                                (this.item = e.item),
                                (this.index = e.index()),
                                (this.isLast =
                                    this.index ===
                                    e.item.parentElement.querySelectorAll(
                                        e.selector
                                    ).length -
                                        1),
                                (this.isFirst = !this.index),
                                (this.isActive = e.isActive);
                        },
                        Et = function (e, t) {
                            (this.parent = this.parent || null),
                                (this.selector = t),
                                (this.anchor =
                                    V(e, "data-anchor") ||
                                    yt().anchors[L(e, yt().sectionSelector)]),
                                (this.item = e),
                                (this.isVisible = v(e)),
                                (this.isActive = y(e, Oe)),
                                (this.hasScroll =
                                    y(e, Ze) || null != m(et, e)[0]),
                                (this.isSection = t === yt().sectionSelector),
                                (this.container = D(e, $e) || D(e, we)),
                                (this.index = function () {
                                    return this.siblings().indexOf(this);
                                });
                        };
                    function At(e) {
                        return e.map(function (e) {
                            return e.item;
                        });
                    }
                    function Lt(e, t) {
                        return e.find(function (e) {
                            return e.item === t;
                        });
                    }
                    (Et.prototype.siblings = function () {
                        return this.isSection
                            ? this.isVisible
                                ? he.sections
                                : he.sectionsIncludingHidden
                            : this.parent
                            ? this.parent.slides
                            : 0;
                    }),
                        (Et.prototype.prev = function () {
                            var e = this.siblings(),
                                t =
                                    (this.isSection
                                        ? e.indexOf(this)
                                        : this.parent.slides.indexOf(this)) - 1;
                            return t >= 0 ? e[t] : null;
                        }),
                        (Et.prototype.next = function () {
                            var e = this.siblings(),
                                t =
                                    (this.isSection
                                        ? e.indexOf(this)
                                        : this.parent.slides.indexOf(this)) + 1;
                            return t < e.length ? e[t] : null;
                        }),
                        (Et.prototype.prevPanel = function () {
                            return (
                                this.prev() ||
                                (this.parent ? this.parent.prev() : null)
                            );
                        }),
                        (Et.prototype.nextPanel = function () {
                            return (
                                this.next() ||
                                (this.parent ? this.parent.next() : null)
                            );
                        }),
                        (Et.prototype.getSiblings = function () {
                            return this.isSection ? he.sections : he.panels;
                        });
                    var Tt,
                        Ot = function (e) {
                            xt.call(this, e);
                        },
                        _t = function (e) {
                            xt.call(this, e);
                        };
                    function Pt(e) {
                        var t = m(Ke, e);
                        return t.length && (e = t[0]), e;
                    }
                    function Mt(e) {
                        return e ? (e.activeSlide ? e.activeSlide : e) : null;
                    }
                    function kt(e) {
                        var t,
                            n,
                            o = yt();
                        return (
                            o.autoScrolling && !o.scrollBar
                                ? ((t = -e), (n = m(we)[0]))
                                : ((t = e), (n = window)),
                            {
                                options: t,
                                element: n,
                            }
                        );
                    }
                    function jt(e, t) {
                        !yt().autoScrolling ||
                        yt().scrollBar ||
                        (e.self != window && y(e, Xe))
                            ? e.self != window && y(e, Xe)
                                ? (e.scrollLeft = t)
                                : e.scrollTo(0, t)
                            : (e.style.top = t + "px");
                    }
                    function Bt(e) {
                        var t =
                            "transform " +
                            yt().scrollingSpeed +
                            "ms " +
                            yt().easingcss3;
                        return (
                            k(e, Ee),
                            w(e, {
                                "-webkit-transition": t,
                                transition: t,
                            })
                        );
                    }
                    function Rt(e, t) {
                        var n = e.index(),
                            o = L(t, je);
                        return n == o ? "none" : n > o ? "up" : "down";
                    }
                    function Ct(e) {
                        return M(e, Ee);
                    }
                    function It(e) {
                        return {
                            "-webkit-transform": e,
                            "-moz-transform": e,
                            "-ms-transform": e,
                            transform: e,
                        };
                    }
                    function Dt(e, t) {
                        t ? Bt(gt()) : Ct(gt()),
                            clearTimeout(Tt),
                            w(gt(), It(e)),
                            (f.test.translate3d = e),
                            (Tt = setTimeout(function () {
                                k(gt(), Ee);
                            }, 10));
                    }
                    function qt(e) {
                        var t = Math.round(e);
                        if (yt().css3 && yt().autoScrolling && !yt().scrollBar)
                            Dt("translate3d(0px, -" + t + "px, 0px)", !1);
                        else if (yt().autoScrolling && !yt().scrollBar)
                            w(gt(), {
                                top: -t + "px",
                            }),
                                (f.test.top = -t + "px");
                        else {
                            var n = kt(t);
                            jt(n.element, n.options);
                        }
                    }
                    function Ht(e, t) {
                        bt("scrollingSpeed", e, t);
                    }
                    f.setScrollingSpeed = Ht;
                    var Ft,
                        zt = null,
                        Nt = null,
                        Wt = null;
                    function Vt(e, t, n, o) {
                        var r,
                            l = (function (e) {
                                return e.self != i && y(e, Xe)
                                    ? e.scrollLeft
                                    : !yt().autoScrolling || yt().scrollBar
                                    ? z()
                                    : e.offsetTop;
                            })(e),
                            c = t - l,
                            a = !1,
                            s = he.activeAnimation;
                        ve({
                            activeAnimation: !0,
                        }),
                            Ft && window.cancelAnimationFrame(Ft),
                            (Ft = function (u) {
                                r || (r = u);
                                var f = Math.floor(u - r);
                                if (he.activeAnimation) {
                                    var d = t;
                                    n &&
                                        (d = i.fp_easings[yt().easing](
                                            f,
                                            l,
                                            c,
                                            n
                                        )),
                                        f <= n && jt(e, d),
                                        f < n
                                            ? window.requestAnimationFrame(Ft)
                                            : void 0 === o ||
                                              a ||
                                              (o(),
                                              ve({
                                                  activeAnimation: !1,
                                              }),
                                              (a = !0));
                                } else
                                    a ||
                                        s ||
                                        (o(),
                                        ve({
                                            activeAnimation: !1,
                                        }),
                                        (a = !0));
                            }),
                            window.requestAnimationFrame(Ft);
                    }
                    function Ut(e) {
                        return e && !e.item
                            ? new Ot(new $n(e))
                            : e
                            ? new Ot(e)
                            : null;
                    }
                    function Yt(e) {
                        return e ? new _t(e) : null;
                    }
                    function Kt(e, t) {
                        var n = (function (e, t) {
                            var n = {
                                afterRender: function () {
                                    return {
                                        section: Ut(pe().activeSection),
                                        slide: Yt(
                                            pe().activeSection.activeSlide
                                        ),
                                    };
                                },
                                onLeave: function () {
                                    return {
                                        origin: Ut(t.items.origin),
                                        destination: Ut(t.items.destination),
                                        direction: t.direction,
                                        trigger: pe().scrollTrigger,
                                    };
                                },
                                afterLoad: function () {
                                    return n.onLeave();
                                },
                                afterSlideLoad: function () {
                                    return {
                                        section: Ut(t.items.section),
                                        origin: Ut(t.items.origin),
                                        destination: Ut(t.items.destination),
                                        direction: t.direction,
                                        trigger: pe().scrollTrigger,
                                    };
                                },
                                onSlideLeave: function () {
                                    return n.afterSlideLoad();
                                },
                                beforeLeave: function () {
                                    return n.onLeave();
                                },
                                onScrollOverflow: function () {
                                    return {
                                        section: Ut(pe().activeSection),
                                        slide: Yt(
                                            pe().activeSection.activeSlide
                                        ),
                                        position: t.position,
                                        direction: t.direction,
                                    };
                                },
                            };
                            return n[e]();
                        })(e, t);
                        return (
                            Q(gt(), e, n),
                            !1 !== yt()[e].apply(n[Object.keys(n)[0]], ie(n))
                        );
                    }
                    function Xt(e) {
                        var t = Pt(e);
                        m("video, audio", t).forEach(function (e) {
                            e.hasAttribute("data-autoplay") &&
                                "function" == typeof e.play &&
                                e.play();
                        }),
                            m('iframe[src*="youtube.com/embed/"]', t).forEach(
                                function (e) {
                                    e.hasAttribute("data-autoplay") && Gt(e),
                                        (e.onload = function () {
                                            e.hasAttribute("data-autoplay") &&
                                                Gt(e);
                                        });
                                }
                            );
                    }
                    function Gt(e) {
                        e.contentWindow.postMessage(
                            '{"event":"command","func":"playVideo","args":""}',
                            "*"
                        );
                    }
                    function Qt(e) {
                        var t = Pt(e);
                        m("video, audio", t).forEach(function (e) {
                            e.hasAttribute("data-keepplaying") ||
                                "function" != typeof e.pause ||
                                e.pause();
                        }),
                            m('iframe[src*="youtube.com/embed/"]', t).forEach(
                                function (e) {
                                    /youtube\.com\/embed\//.test(V(e, "src")) &&
                                        !e.hasAttribute("data-keepplaying") &&
                                        e.contentWindow.postMessage(
                                            '{"event":"command","func":"pauseVideo","args":""}',
                                            "*"
                                        );
                                }
                            );
                    }
                    function $t(e) {
                        yt().lazyLoading &&
                            m(
                                "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",
                                Pt(e)
                            ).forEach(function (e) {
                                if (
                                    (["src", "srcset"].forEach(function (t) {
                                        var n = V(e, "data-" + t);
                                        null != n &&
                                            n &&
                                            (ce(e, t),
                                            e.addEventListener(
                                                "load",
                                                function () {}
                                            ));
                                    }),
                                    $(e, "source"))
                                ) {
                                    var t = D(e, "video, audio");
                                    t &&
                                        (t.load(),
                                        (t.onloadeddata = function () {}));
                                }
                            });
                    }
                    function Jt() {
                        var e = pe().activeSection.item,
                            t = pe().activeSection.activeSlide,
                            n = Zt(e),
                            o = String(n);
                        t && (o = o + "-" + Zt(t.item)),
                            (o = o.replace("/", "-").replace("#", ""));
                        var i = new RegExp("\\b\\s?" + Te + "-[^\\s]+\\b", "g");
                        (zt.className = zt.className.replace(i, "")),
                            M(zt, Te + "-" + o);
                    }
                    function Zt(e) {
                        if (!e) return null;
                        var t = V(e, "data-anchor"),
                            n = L(e);
                        return null == t && (t = n), t;
                    }
                    function en(e, t, n) {
                        var o = "";
                        yt().anchors.length &&
                            !yt().lockAnchors &&
                            (e
                                ? (null != n && (o = n),
                                  null == t && (t = e),
                                  ve({
                                      lastScrolledSlide: t,
                                  }),
                                  tn(o + "/" + t))
                                : null != e
                                ? (ve({
                                      lastScrolledSlide: t,
                                  }),
                                  tn(n))
                                : tn(n)),
                            Jt();
                    }
                    function tn(e) {
                        if (yt().recordHistory) location.hash = e;
                        else if (l || a)
                            i.history.replaceState(void 0, void 0, "#" + e);
                        else {
                            var t = i.location.href.split("#")[0];
                            i.location.replace(t + "#" + e);
                        }
                    }
                    function nn(e, t, n) {
                        var o =
                            "Section" === t
                                ? yt().anchors[e]
                                : V(n, "data-anchor");
                        return encodeURI(
                            yt().navigationTooltips[e] || o || t + " " + (e + 1)
                        );
                    }
                    function on(e) {
                        e.cancelable && W(e),
                            ve({
                                scrollTrigger: "horizontalNav",
                            });
                        var t = D(this, je),
                            n = m(Ge, D(this, je))[0],
                            o = Lt(pe().sections, t).slides[L(D(this, "li"))];
                        de.emit(me.landscapeScroll, {
                            slides: n,
                            destination: o.item,
                        });
                    }
                    var rn = {};
                    function ln(e, t, n) {
                        "all" !== t
                            ? (rn[n][t] = e)
                            : Object.keys(rn[n]).forEach(function (t) {
                                  rn[n][t] = e;
                              });
                    }
                    function cn() {
                        return rn;
                    }
                    function an() {
                        var e = D(this, je);
                        y(this, at)
                            ? cn().m.left &&
                              (ve({
                                  scrollTrigger: "slideArrow",
                              }),
                              de.emit(me.moveSlideLeft, {
                                  section: e,
                              }))
                            : cn().m.right &&
                              (ve({
                                  scrollTrigger: "slideArrow",
                              }),
                              de.emit(me.moveSlideRight, {
                                  section: e,
                              }));
                    }
                    function sn(e, t) {
                        bt("recordHistory", e, t);
                    }
                    function un(e, t) {
                        e || qt(0), bt("autoScrolling", e, t);
                        var n = pe().activeSection.item;
                        if (yt().autoScrolling && !yt().scrollBar)
                            w(Wt, {
                                overflow: "hidden",
                                height: "100%",
                            }),
                                k(zt, "fp-scrollable"),
                                sn(St().recordHistory, "internal"),
                                w(gt(), {
                                    "-ms-touch-action": "none",
                                    "touch-action": "none",
                                }),
                                null != n && qt(n.offsetTop);
                        else if (
                            (w(Wt, {
                                overflow: "visible",
                                height: "initial",
                            }),
                            M(zt, "fp-scrollable"),
                            sn(
                                !!yt().autoScrolling && St().recordHistory,
                                "internal"
                            ),
                            w(gt(), {
                                "-ms-touch-action": "",
                                "touch-action": "",
                            }),
                            null != n)
                        ) {
                            var o = kt(n.offsetTop);
                            o.element.scrollTo(0, o.options);
                        }
                    }
                    function fn() {
                        var e = m(Ie)[0] || (Mn() && m(qe)[0]);
                        yt().lazyLoading &&
                            e &&
                            m(je + ":not(" + _e + ")").forEach(function (e) {
                                var t, n, o, i, r;
                                (n = (t = e.getBoundingClientRect()).top),
                                    (o = t.bottom),
                                    (i = n + 2 < he.windowsHeight && n > 0),
                                    (r = o > 2 && o < he.windowsHeight),
                                    (i || r) && $t(e);
                            });
                    }
                    function dn() {
                        Q(x(this), "click");
                    }
                    function hn() {
                        ee(m(ze));
                        var e = r.createElement("div");
                        e.setAttribute("id", Fe);
                        var t = r.createElement("ul");
                        e.appendChild(t), j(e, zt);
                        var n = m(ze)[0];
                        M(n, "fp-" + yt().navigationPosition),
                            yt().showActiveTooltip && M(n, Ve);
                        for (var o = "", i = 0; i < pe().sections.length; i++) {
                            var l = pe().sections[i],
                                c = "";
                            yt().anchors.length && (c = l.anchor),
                                (o +=
                                    '<li><a href="#' +
                                    encodeURI(c) +
                                    '"><span class="fp-sr-only">' +
                                    nn(l.index(), "Section") +
                                    "</span><span></span></a>");
                            var a = yt().navigationTooltips[l.index()];
                            void 0 !== a &&
                                "" !== a &&
                                (o +=
                                    '<div class="' +
                                    Ne +
                                    " fp-" +
                                    yt().navigationPosition +
                                    '">' +
                                    a +
                                    "</div>"),
                                (o += "</li>");
                        }
                        m("ul", n)[0].innerHTML = o;
                        var s = m("li", m(ze)[0])[pe().activeSection.index()];
                        M(m("a", s), Oe);
                    }
                    function vn(e) {
                        e.preventDefault && W(e),
                            ve({
                                scrollTrigger: "verticalNav",
                            });
                        var t = L(D(this, ze + " li"));
                        de.emit(me.scrollPage, {
                            destination: pe().sections[t],
                        });
                    }
                    function pn(e, t) {
                        var n;
                        (n = e),
                            yt().menu &&
                                yt().menu.length &&
                                m(yt().menu).forEach(function (e) {
                                    null != e &&
                                        (k(m(_e, e), Oe),
                                        M(
                                            m(
                                                '[data-menuanchor="' + n + '"]',
                                                e
                                            ),
                                            Oe
                                        ));
                                }),
                            (function (e, t) {
                                var n = m(ze)[0];
                                yt().navigation &&
                                    null != n &&
                                    "none" !== n.style.display &&
                                    (k(m(_e, n), Oe),
                                    M(
                                        e
                                            ? m('a[href="#' + e + '"]', n)
                                            : m("a", m("li", n)[t]),
                                        Oe
                                    ));
                            })(e, t);
                    }
                    (rn.m = {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0,
                    }),
                        (rn.k = g({}, rn.m)),
                        de.on(me.onClickOrTouch, function (e) {
                            var t = e.target;
                            ($(t, ct) || D(t, ct)) && an.call(t, e);
                        }),
                        (f.setRecordHistory = sn),
                        (f.setAutoScrolling = un),
                        (f.test.setAutoScrolling = un),
                        new Date().getTime();
                    var mn,
                        gn,
                        yn,
                        Sn,
                        bn,
                        wn,
                        xn =
                            ((gn = !0),
                            (yn = new Date().getTime()),
                            (Sn = !i.fullpage_api),
                            function (e, t) {
                                var n = new Date().getTime(),
                                    o =
                                        "wheel" === e
                                            ? yt().scrollingSpeed
                                            : 100;
                                return (
                                    (gn = Sn || n - yn >= o),
                                    (Sn = !i.fullpage_api),
                                    gn && ((mn = t()), (yn = n)),
                                    void 0 === mn || mn
                                );
                            });
                    function En(e, t) {
                        if (G(yt().beforeLeave))
                            return xn(pe().scrollTrigger, function () {
                                return Kt(e, t);
                            });
                    }
                    function An(e, t, n) {
                        var o = e.item;
                        if (null != o) {
                            var i,
                                r,
                                l = (function (e) {
                                    var t = e.offsetHeight,
                                        n = e.offsetTop,
                                        o = n,
                                        i = n > he.previousDestTop,
                                        r = o - S() + t,
                                        l = yt().bigSectionsDestination;
                                    return (
                                        t > S()
                                            ? ((i || l) && "bottom" !== l) ||
                                              (o = r)
                                            : (i ||
                                                  (he.isResizing &&
                                                      null == E(e))) &&
                                              (o = r),
                                        ve({
                                            previousDestTop: o,
                                        }),
                                        o
                                    );
                                })(o),
                                c = {
                                    element: o,
                                    callback: t,
                                    isMovementUp: n,
                                    dtop: l,
                                    yMovement: Rt(pe().activeSection, o),
                                    anchorLink: e.anchor,
                                    sectionIndex: e.index(),
                                    activeSlide: e.activeSlide
                                        ? e.activeSlide.item
                                        : null,
                                    leavingSection:
                                        pe().activeSection.index() + 1,
                                    localIsResizing: he.isResizing,
                                    items: {
                                        origin: pe().activeSection,
                                        destination: e,
                                    },
                                    direction: null,
                                };
                            if (
                                !(
                                    (pe().activeSection.item == o &&
                                        !he.isResizing) ||
                                    (yt().scrollBar &&
                                        z() === c.dtop &&
                                        !y(o, Ce))
                                )
                            ) {
                                if (
                                    (null != c.activeSlide &&
                                        ((i = V(c.activeSlide, "data-anchor")),
                                        (r = L(c.activeSlide, null))),
                                    !c.localIsResizing)
                                ) {
                                    var a = c.yMovement;
                                    if (
                                        (void 0 !== n &&
                                            (a = n ? "up" : "down"),
                                        (c.direction = a),
                                        G(yt().beforeLeave) &&
                                            !1 === En("beforeLeave", c))
                                    )
                                        return;
                                    if (G(yt().onLeave) && !Kt("onLeave", c))
                                        return;
                                }
                                yt().autoScrolling &&
                                    yt().continuousVertical &&
                                    void 0 !== c.isMovementUp &&
                                    ((!c.isMovementUp && "up" == c.yMovement) ||
                                        (c.isMovementUp &&
                                            "down" == c.yMovement)) &&
                                    (c = (function (e) {
                                        ve({
                                            isDoingContinousVertical: !0,
                                        });
                                        var t = pe().activeSection.item;
                                        return (
                                            e.isMovementUp
                                                ? H(t, ne(t, je))
                                                : q(t, oe(t, je).reverse()),
                                            qt(
                                                pe().activeSection.item
                                                    .offsetTop
                                            ),
                                            (function () {
                                                for (
                                                    var e = m(Ke), t = 0;
                                                    t < e.length;
                                                    t++
                                                )
                                                    Vn(e[t], "internal");
                                            })(),
                                            (e.wrapAroundElements = t),
                                            (e.dtop = e.element.offsetTop),
                                            (e.yMovement = Rt(
                                                pe().activeSection,
                                                e.element
                                            )),
                                            e
                                        );
                                    })(c)),
                                    c.localIsResizing ||
                                        Qt(pe().activeSection.item),
                                    M(o, Oe),
                                    k(N(o), Oe),
                                    Kn(),
                                    $t(o),
                                    ve({
                                        canScroll: f.test.isTesting,
                                    }),
                                    en(r, i, c.anchorLink),
                                    de.emit(me.onLeave, c),
                                    (function (e) {
                                        var t = yt().scrollingSpeed < 700,
                                            n = t ? 700 : yt().scrollingSpeed;
                                        if (
                                            (ve({
                                                touchDirection: "none",
                                                scrollY: Math.round(e.dtop),
                                            }),
                                            de.emit(me.onPerformMovement),
                                            yt().css3 &&
                                                yt().autoScrolling &&
                                                !yt().scrollBar)
                                        )
                                            Dt(
                                                "translate3d(0px, -" +
                                                    Math.round(e.dtop) +
                                                    "px, 0px)",
                                                !0
                                            ),
                                                yt().scrollingSpeed
                                                    ? (clearTimeout(bn),
                                                      (bn = setTimeout(
                                                          function () {
                                                              Ln(e),
                                                                  ve({
                                                                      canScroll:
                                                                          !t ||
                                                                          f.test
                                                                              .isTesting,
                                                                  });
                                                          },
                                                          yt().scrollingSpeed
                                                      )))
                                                    : Ln(e);
                                        else {
                                            var o = kt(e.dtop);
                                            (f.test.top = -e.dtop + "px"),
                                                clearTimeout(bn),
                                                Vt(
                                                    o.element,
                                                    o.options,
                                                    yt().scrollingSpeed,
                                                    function () {
                                                        yt().scrollBar
                                                            ? (bn = setTimeout(
                                                                  function () {
                                                                      Ln(e);
                                                                  },
                                                                  30
                                                              ))
                                                            : (Ln(e),
                                                              ve({
                                                                  canScroll:
                                                                      !t ||
                                                                      f.test
                                                                          .isTesting,
                                                              }));
                                                    }
                                                );
                                        }
                                        t &&
                                            (clearTimeout(wn),
                                            (wn = setTimeout(function () {
                                                ve({
                                                    canScroll: !0,
                                                });
                                            }, n)));
                                    })(c),
                                    ve({
                                        lastScrolledDestiny: c.anchorLink,
                                    }),
                                    pn(c.anchorLink, c.sectionIndex);
                            }
                        }
                    }
                    function Ln(e) {
                        ve({
                            isBeyondFullpage: !1,
                        }),
                            (function (e) {
                                null != e.wrapAroundElements &&
                                    (e.isMovementUp
                                        ? H(m(je)[0], e.wrapAroundElements)
                                        : q(
                                              m(je)[pe().sections.length - 1],
                                              e.wrapAroundElements
                                          ),
                                    qt(pe().activeSection.item.offsetTop),
                                    (function () {
                                        for (
                                            var e = m(Ke), t = 0;
                                            t < e.length;
                                            t++
                                        )
                                            Vn(e[t], "internal");
                                    })(),
                                    ve({
                                        isDoingContinousVertical: !1,
                                    }));
                            })(e),
                            G(yt().afterLoad) &&
                                !e.localIsResizing &&
                                Kt("afterLoad", e),
                            Kn(),
                            e.localIsResizing || Xt(e.element),
                            M(e.element, Pe),
                            k(N(e.element), Pe),
                            fn(),
                            ve({
                                canScroll: !0,
                            }),
                            de.emit(me.afterSectionLoads, e),
                            G(e.callback) && e.callback();
                    }
                    function Tn(e, t) {
                        bt("fitToSection", e, t);
                    }
                    function On() {
                        he.canScroll &&
                            (ve({
                                isResizing: !0,
                            }),
                            An(he.activeSection),
                            ve({
                                isResizing: !1,
                            }));
                    }
                    function _n() {
                        var e = yt().responsive || yt().responsiveWidth,
                            t = yt().responsiveHeight,
                            n = e && i.innerWidth < e,
                            o = t && i.innerHeight < t;
                        e && t ? Pn(n || o) : e ? Pn(n) : t && Pn(o);
                    }
                    function Pn(e) {
                        var t = Mn();
                        e
                            ? t ||
                              (un(!1, "internal"),
                              Tn(!1, "internal"),
                              O(m(ze)),
                              M(zt, xe),
                              G(yt().afterResponsive) &&
                                  yt().afterResponsive.call(gt(), e))
                            : t &&
                              (un(St().autoScrolling, "internal"),
                              Tn(St().autoScrolling, "internal"),
                              _(m(ze)),
                              k(zt, xe),
                              G(yt().afterResponsive) &&
                                  yt().afterResponsive.call(gt(), e));
                    }
                    function Mn() {
                        return y(zt, xe);
                    }
                    function kn(e) {
                        yt().verticalCentered &&
                            ((!yt().scrollOverflow &&
                                Hn.shouldBeScrollable(e.item)) ||
                                Hn.isScrollable(e) ||
                                y(e.item, Je) ||
                                M(e.item, Je));
                    }
                    (f.moveTo = moveTo),
                        (f.getScrollY = function () {
                            return he.scrollY;
                        }),
                        de.on(me.onDestroy, function () {
                            clearTimeout(bn), clearTimeout(wn);
                        }),
                        (f.setFitToSection = Tn),
                        (f.fitToSection = On),
                        (f.setResponsive = Pn);
                    var jn,
                        Bn = null;
                    function Rn(e) {
                        var t = e.item,
                            n = e.allSlidesItems.length,
                            o = e.index();
                        !pe().activeSection &&
                            e.isVisible &&
                            (M(t, Oe), Kn(), (Bn = pe().activeSection.item)),
                            yt().paddingTop &&
                                w(t, {
                                    "padding-top": yt().paddingTop,
                                }),
                            yt().paddingBottom &&
                                w(t, {
                                    "padding-bottom": yt().paddingBottom,
                                }),
                            void 0 !== yt().sectionsColor[o] &&
                                w(t, {
                                    "background-color": yt().sectionsColor[o],
                                }),
                            void 0 !== yt().anchors[o] &&
                                t.setAttribute("data-anchor", e.anchor),
                            n || kn(e);
                    }
                    function Cn() {
                        yt().scrollOverflow &&
                            !yt().scrollBar &&
                            (Hn.makeScrollable(), Hn.focusScrollable());
                    }
                    function In() {
                        de.removeListener(me.onAfterRenderNoAnchor, Cn),
                            K("keyup", Hn.keyUpHandler);
                    }
                    (f.getActiveSection = function () {
                        return pe().activeSection;
                    }),
                        de.on(me.bindEvents, function () {
                            de.on(me.onAfterRenderNoAnchor, Cn),
                                de.on(me.onLeave, Hn.onLeave),
                                de.on(me.onSlideLeave, Hn.onLeave),
                                de.on(me.afterSlideLoads, Hn.afterLoad),
                                de.on(me.afterSectionLoads, Hn.afterLoad),
                                de.on(me.onDestroy, In),
                                U("keyup", Hn.keyUpHandler);
                        });
                    var Dn,
                        qn,
                        Hn = {
                            focusedElem: null,
                            shouldFocusScrollable: !0,
                            isInnerScrollAllowed: !0,
                            timeBeforeReachingLimit: null,
                            timeLastScroll: null,
                            preventScrollWithMouseWheel: function (e) {
                                if (!he.canScroll) return W(e), !1;
                            },
                            preventScrollWithKeyboard: function (e) {
                                if (
                                    !se() &&
                                    yt().keyboardScrolling &&
                                    [38, 33, 32, 40, 34, 36, 35].indexOf(
                                        e.keyCode
                                    ) > -1 &&
                                    !Hn.isInnerScrollAllowed
                                )
                                    return W(e), !1;
                            },
                            keyUpHandler: function () {
                                Hn.shouldFocusScrollable = he.canScroll;
                            },
                            onLeave: function () {
                                clearTimeout(jn),
                                    (Hn.isInnerScrollAllowed = !1);
                            },
                            afterLoad: function () {
                                (Hn.isInnerScrollAllowed = !1),
                                    clearTimeout(jn),
                                    (jn = setTimeout(function () {
                                        Hn.shouldFocusScrollable = he.canScroll;
                                    }, 200));
                            },
                            unfocusScrollable: function () {
                                r.activeElement === this.focusedElem &&
                                    (this.focusedElem.blur(),
                                    (Hn.isInnerScrollAllowed = !1));
                            },
                            focusScrollable: function () {
                                if (
                                    yt().scrollOverflow &&
                                    Hn.shouldFocusScrollable
                                ) {
                                    Hn.unfocusScrollable();
                                    var e = Hn.getScrollableItem(
                                        pe().activeSection.item
                                    );
                                    !e ||
                                        l ||
                                        a ||
                                        ((this.focusedElem = e),
                                        requestAnimationFrame(function () {
                                            e.focus(),
                                                (Hn.isInnerScrollAllowed = !0);
                                        })),
                                        (Hn.shouldFocusScrollable = !1);
                                }
                            },
                            makeScrollable: function () {
                                yt().scrollOverflowMacStyle &&
                                    !c &&
                                    M(zt, "fp-scroll-mac"),
                                    pe().panels.forEach(function (e) {
                                        if (
                                            !(
                                                (e.slides && e.slides.length) ||
                                                (y(e.item, De) && Mn())
                                            )
                                        ) {
                                            var t,
                                                n = Pt(e.item),
                                                o = Hn.shouldBeScrollable(
                                                    e.item
                                                ),
                                                i = (t = e).isSection
                                                    ? t
                                                    : t.parent;
                                            if (s) {
                                                var r = o
                                                    ? "addClass"
                                                    : "removeClass";
                                                ue[r](i.item, tt),
                                                    ue[r](e.item, tt);
                                            } else M(i.item, tt), M(e.item, tt);
                                            e.hasScroll ||
                                                (Hn.createWrapper(n),
                                                Hn.bindEvents(n)),
                                                (e.hasScroll = !0);
                                        }
                                    });
                            },
                            bindEvents: function (e) {
                                Hn.getScrollableItem(e).addEventListener(
                                    "scroll",
                                    Hn.onPanelScroll
                                ),
                                    e.addEventListener(
                                        "wheel",
                                        Hn.preventScrollWithMouseWheel,
                                        {
                                            passive: !1,
                                        }
                                    ),
                                    e.addEventListener(
                                        "keydown",
                                        Hn.preventScrollWithKeyboard,
                                        {
                                            passive: !1,
                                        }
                                    );
                            },
                            createWrapper: function (e) {
                                var t = document.createElement("div");
                                (t.className = Ze),
                                    C(e, t),
                                    t.setAttribute("tabindex", "-1");
                            },
                            destroyWrapper: function (e) {
                                var t = m(et, e)[0];
                                t && (I(t), e.removeAttribute("tabindex"));
                            },
                            getScrollableItem: function (e) {
                                var t = Pt(e);
                                return m(et, t)[0] || t;
                            },
                            hasScroll: function (e) {
                                return y(e, Ze) || null != m(et, e)[0];
                            },
                            isScrollable: function (e) {
                                return e.isSection && e.activeSlide
                                    ? e.activeSlide.hasScroll
                                    : e.hasScroll;
                            },
                            shouldBeScrollable: function (e) {
                                return (
                                    Hn.getScrollableItem(e).scrollHeight >
                                    i.innerHeight
                                );
                            },
                            isScrolled: function (e, t) {
                                if (!he.canScroll) return !1;
                                if (yt().scrollBar) return !0;
                                var n = Hn.getScrollableItem(t);
                                if (
                                    !yt().scrollOverflow ||
                                    !y(n, Ze) ||
                                    y(t, "fp-noscroll") ||
                                    y(Pt(t), "fp-noscroll")
                                )
                                    return !0;
                                var o = s ? 1 : 0,
                                    i = n.scrollTop,
                                    r = "up" === e && i <= 0,
                                    l =
                                        "down" === e &&
                                        n.scrollHeight <=
                                            Math.ceil(n.offsetHeight + i) + o,
                                    c = r || l;
                                return (
                                    c ||
                                        (this.timeBeforeReachingLimit =
                                            new Date().getTime()),
                                    c
                                );
                            },
                            shouldMovePage: function () {
                                this.timeLastScroll = new Date().getTime();
                                var e =
                                        this.timeLastScroll -
                                        Hn.timeBeforeReachingLimit,
                                    t = (l || a) && he.isGrabbing,
                                    n = he.isUsingWheel && e > 600;
                                return (t && e > 400) || n;
                            },
                            onPanelScroll:
                                ((Dn = 0),
                                function (e) {
                                    var t = e.target.scrollTop,
                                        n =
                                            "none" !== he.touchDirection
                                                ? he.touchDirection
                                                : Dn < t
                                                ? "down"
                                                : "up";
                                    (Dn = t),
                                        G(yt().onScrollOverflow) &&
                                            Kt("onScrollOverflow", {
                                                position: t,
                                                direction: n,
                                            }),
                                        y(e.target, Ze) &&
                                            he.canScroll &&
                                            Hn.isScrolled(n, e.target) &&
                                            Hn.shouldMovePage() &&
                                            Hn.shouldBeScrollable(
                                                pe().activeSection.item
                                            ) &&
                                            de.emit(
                                                me.onScrollOverflowScrolled,
                                                {
                                                    direction: n,
                                                }
                                            );
                                }),
                        };
                    function Fn() {
                        clearTimeout(qn),
                            ve({
                                slideMoving: !1,
                            });
                    }
                    function zn(e, t, n) {
                        var o,
                            i,
                            r = D(e, je),
                            l = pe().sections.filter(function (e) {
                                return e.item == r;
                            })[0],
                            c = l.slides.filter(function (e) {
                                return e.item == t;
                            })[0],
                            a = {
                                slides: e,
                                destiny: t,
                                direction: n,
                                destinyPos: {
                                    left: t.offsetLeft,
                                },
                                slideIndex: c.index(),
                                section: r,
                                sectionIndex: l.index(),
                                anchorLink: l.anchor,
                                slidesNav: m(ot, r)[0],
                                slideAnchor: c.anchor,
                                prevSlide: l.activeSlide.item,
                                prevSlideIndex: l.activeSlide.index(),
                                items: {
                                    section: l,
                                    origin: l.activeSlide,
                                    destination: c,
                                },
                                localIsResizing: he.isResizing,
                            };
                        (a.xMovement =
                            (o = a.prevSlideIndex) == (i = a.slideIndex)
                                ? "none"
                                : o > i
                                ? "left"
                                : "right"),
                            (a.direction = a.direction
                                ? a.direction
                                : a.xMovement),
                            a.localIsResizing ||
                                ve({
                                    canScroll: !1,
                                }),
                            yt().onSlideLeave &&
                            !a.localIsResizing &&
                            "none" !== a.xMovement &&
                            G(yt().onSlideLeave) &&
                            !1 === Kt("onSlideLeave", a)
                                ? ve({
                                      slideMoving: !1,
                                  })
                                : (M(t, Oe),
                                  k(N(t), Oe),
                                  Kn(),
                                  a.localIsResizing || (Qt(a.prevSlide), $t(t)),
                                  (function (e) {
                                      !yt().loopHorizontal &&
                                          yt().controlArrows &&
                                          (J(
                                              m(st, e.section),
                                              0 !== e.slideIndex
                                          ),
                                          J(
                                              m(ft, e.section),
                                              null != E(e.destiny)
                                          ));
                                  })(a),
                                  l.isActive &&
                                      !a.localIsResizing &&
                                      en(
                                          a.slideIndex,
                                          a.slideAnchor,
                                          a.anchorLink
                                      ),
                                  de.emit(me.onSlideLeave, a),
                                  (function (e, t, n) {
                                      var o,
                                          i,
                                          r = t.destinyPos;
                                      if (
                                          ((o = t.slidesNav),
                                          (i = t.slideIndex),
                                          yt().slidesNavigation &&
                                              null != o &&
                                              (k(m(_e, o), Oe),
                                              M(m("a", m("li", o)[i]), Oe)),
                                          ve({
                                              scrollX: Math.round(r.left),
                                          }),
                                          yt().css3)
                                      ) {
                                          var l =
                                              "translate3d(-" +
                                              Math.round(r.left) +
                                              "px, 0px, 0px)";
                                          (f.test.translate3dH[t.sectionIndex] =
                                              l),
                                              w(Bt(m($e, e)), It(l)),
                                              clearTimeout(qn),
                                              (qn = setTimeout(function () {
                                                  Wn(t);
                                              }, yt().scrollingSpeed));
                                      } else
                                          (f.test.left[t.sectionIndex] =
                                              Math.round(r.left)),
                                              Vt(
                                                  e,
                                                  Math.round(r.left),
                                                  yt().scrollingSpeed,
                                                  function () {
                                                      Wn(t);
                                                  }
                                              );
                                  })(e, a));
                    }
                    function Nn() {
                        clearTimeout(qn);
                    }
                    function Wn(e) {
                        e.localIsResizing ||
                            (G(yt().afterSlideLoad) && Kt("afterSlideLoad", e),
                            ve({
                                canScroll: !0,
                            }),
                            Xt(e.destiny),
                            de.emit(me.afterSlideLoads, e)),
                            ve({
                                slideMoving: !1,
                            });
                    }
                    function Vn(e, t) {
                        Ht(0, "internal"),
                            void 0 !== t &&
                                ve({
                                    isResizing: !0,
                                }),
                            zn(D(e, Ge), e),
                            void 0 !== t &&
                                ve({
                                    isResizing: !1,
                                }),
                            Ht(St().scrollingSpeed, "internal");
                    }
                    (f.landscapeScroll = zn),
                        de.on(me.bindEvents, function () {
                            de.on(me.onPerformMovement, Fn);
                        });
                    var Un = null,
                        Yn = null;
                    function Kn() {
                        (he.activeSection = null),
                            he.sections.map(function (e) {
                                var t = y(e.item, Oe);
                                (e.isActive = t),
                                    (e.hasScroll = Hn.hasScroll(e.item)),
                                    t && (he.activeSection = e),
                                    e.slides.length &&
                                        ((e.activeSlide = null),
                                        e.slides.map(function (t) {
                                            var n = y(t.item, Oe);
                                            (t.hasScroll = Hn.hasScroll(
                                                e.item
                                            )),
                                                (t.isActive = n),
                                                n && (e.activeSlide = t);
                                        }));
                            }),
                            (function () {
                                var e = he.activeSection,
                                    t =
                                        !!he.activeSection &&
                                        he.activeSection.slides.length,
                                    n = he.activeSection
                                        ? he.activeSection.activeSlide
                                        : null;
                                if (
                                    !e &&
                                    he.sections.length &&
                                    !pe().isBeyondFullpage &&
                                    Un
                                ) {
                                    var o = Qn(Un, he.sections);
                                    o &&
                                        ((he.activeSection = o),
                                        (he.activeSection.isActive = !0),
                                        M(he.activeSection.item, Oe)),
                                        he.activeSection &&
                                            qt(he.activeSection.item.offsetTop);
                                }
                                if (t && !n && Yn) {
                                    var i = Qn(Yn, he.activeSection.slides);
                                    i &&
                                        ((he.activeSection.activeSlide = i),
                                        (he.activeSection.activeSlide.isActive =
                                            !0),
                                        M(
                                            he.activeSection.activeSlide.item,
                                            Oe
                                        )),
                                        he.activeSection.activeSlide &&
                                            Vn(
                                                he.activeSection.activeSlide
                                                    .item,
                                                "internal"
                                            );
                                }
                            })();
                    }
                    function Xn() {
                        var e = m(yt().sectionSelector, gt()),
                            t = p(e),
                            n = Array.from(e).map(function (e) {
                                return new $n(e);
                            }),
                            o = n.filter(function (e) {
                                return e.isVisible;
                            }),
                            i = o.reduce(function (e, t) {
                                return e.concat(t.slides);
                            }, []);
                        (Un = Gn(he.activeSection)),
                            (Yn = Gn(
                                he.activeSection
                                    ? he.activeSection.activeSlide
                                    : null
                            )),
                            (he.numSections = t.length),
                            (he.numSlides = o.reduce(function (e, t) {
                                return e + t.slides.length;
                            }, 0)),
                            (he.sections = o),
                            (he.sectionsIncludingHidden = n),
                            (he.slides = i),
                            (he.panels = he.sections.concat(he.slides));
                    }
                    function Gn(e) {
                        if (!e) return null;
                        var t = e ? e.item : null,
                            n = e.isSection
                                ? he.sectionsIncludingHidden
                                : he.activeSection.slidesIncludingHidden;
                        if (t) {
                            var o = Lt(n, t);
                            return o ? o.index() : null;
                        }
                        return null;
                    }
                    function Qn(e, t) {
                        var n,
                            o = e - 1,
                            i = e;
                        do {
                            if ((n = t[o] || t[i])) break;
                            (o -= 1), (i += 1);
                        } while (o >= 0 || i < t.length);
                        return n;
                    }
                    var $n = function (e) {
                        var t = this;
                        [].push.call(arguments, yt().sectionSelector),
                            Et.apply(this, arguments),
                            (this.allSlidesItems = m(yt().slideSelector, e)),
                            (this.slidesIncludingHidden = Array.from(
                                this.allSlidesItems
                            ).map(function (e) {
                                return new Zn(e, t);
                            })),
                            (this.slides = this.slidesIncludingHidden.filter(
                                function (e) {
                                    return e.isVisible;
                                }
                            )),
                            (this.activeSlide = this.slides.length
                                ? this.slides.filter(function (e) {
                                      return e.isActive;
                                  })[0] || this.slides[0]
                                : null);
                    };
                    ($n.prototype = Et.prototype),
                        ($n.prototype.constructor = $n);
                    var Jn,
                        Zn = function (e, t) {
                            (this.parent = t),
                                Et.call(this, e, yt().slideSelector);
                        };
                    function eo() {
                        M(m(yt().sectionSelector, gt()), ke),
                            M(m(yt().slideSelector, gt()), Ue);
                    }
                    function to(e) {
                        var t = e.slides.length,
                            n = e.allSlidesItems,
                            o = e.slides,
                            i = 100 * t,
                            l = 100 / t;
                        if (!m(Ge, e.item)[0]) {
                            var c = r.createElement("div");
                            (c.className = Xe), R(n, c);
                            var a = r.createElement("div");
                            (a.className = Qe), R(n, a);
                        }
                        w(m($e, e.item), {
                            width: i + "%",
                        }),
                            t > 1 &&
                                (yt().controlArrows &&
                                    (function (e) {
                                        var t = e.item,
                                            n = [
                                                Z(yt().controlArrowsHTML[0]),
                                                Z(yt().controlArrowsHTML[1]),
                                            ];
                                        q(m(Ge, t)[0], n),
                                            M(n, lt),
                                            M(n[0], at),
                                            M(n[1], ut),
                                            "#fff" !== yt().controlArrowColor &&
                                                (w(m(ft, t), {
                                                    "border-color":
                                                        "transparent transparent transparent " +
                                                        yt().controlArrowColor,
                                                }),
                                                w(m(st, t), {
                                                    "border-color":
                                                        "transparent " +
                                                        yt().controlArrowColor +
                                                        " transparent transparent",
                                                })),
                                            yt().loopHorizontal || O(m(st, t));
                                    })(e),
                                yt().slidesNavigation &&
                                    (function (e) {
                                        var t = e.item,
                                            n = e.slides.length;
                                        j(
                                            Z(
                                                '<div class="' +
                                                    nt +
                                                    '"><ul></ul></div>'
                                            ),
                                            t
                                        );
                                        var o = m(ot, t)[0];
                                        M(o, "fp-" + yt().slidesNavPosition);
                                        for (var i = 0; i < n; i++)
                                            j(
                                                Z(
                                                    '<li><a href="#"><span class="fp-sr-only">' +
                                                        nn(
                                                            i,
                                                            "Slide",
                                                            m(Ye, t)[i]
                                                        ) +
                                                        "</span><span></span></a></li>"
                                                ),
                                                m("ul", o)[0]
                                            );
                                        w(o, {
                                            "margin-left":
                                                "-" + o.innerWidth / 2 + "px",
                                        });
                                        var r = e.activeSlide
                                            ? e.activeSlide.index()
                                            : 0;
                                        M(m("a", m("li", o)[r]), Oe);
                                    })(e)),
                            o.forEach(function (e) {
                                w(e.item, {
                                    width: l + "%",
                                }),
                                    yt().verticalCentered && kn(e);
                            });
                        var s = e.activeSlide || null;
                        null != s &&
                        he.activeSection &&
                        (0 !== he.activeSection.index() ||
                            (0 === he.activeSection.index() && 0 !== s.index()))
                            ? Vn(s.item, "internal")
                            : M(n[0], Oe);
                    }
                    (Zn.prototype = Et.prototype),
                        (Zn.prototype.constructor = $n);
                    var no = {
                        attributes: !1,
                        subtree: !0,
                        childList: !0,
                        characterData: !0,
                    };
                    function oo() {
                        return (
                            p(m(yt().slideSelector, gt())).length !==
                            pe().numSlides
                        );
                    }
                    function io(e) {
                        var t = oo();
                        (oo() ||
                            p(m(yt().sectionSelector, gt())).length !==
                                pe().numSections) &&
                            !he.isDoingContinousVertical &&
                            (yt().observer && Jn && Jn.disconnect(),
                            Xn(),
                            Kn(),
                            (yt().anchors = []),
                            ee(m(ze)),
                            eo(),
                            wt(),
                            yt().navigation && hn(),
                            t && (ee(m(ot)), ee(m(ct))),
                            pe().sections.forEach(function (e) {
                                e.slides.length ? t && to(e) : Rn(e);
                            })),
                            yt().observer &&
                                Jn &&
                                m(we)[0] &&
                                Jn.observe(m(we)[0], no);
                    }
                    de.on(me.bindEvents, function () {
                        var e, t, n;
                        yt().observer &&
                            "MutationObserver" in window &&
                            m(we)[0] &&
                            ((e = m(we)[0]),
                            (t = no),
                            (n = new MutationObserver(io)).observe(e, t),
                            (Jn = n)),
                            de.on(me.contentChanged, io);
                    }),
                        (f.render = io);
                    var ro = (function () {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function () {
                                    e = !0;
                                },
                            });
                            Y("testPassive", null, t),
                                X("testPassive", null, t);
                        } catch (e) {}
                        return function () {
                            return e;
                        };
                    })();
                    function lo() {
                        return (
                            !!ro() && {
                                passive: !1,
                            }
                        );
                    }
                    var co,
                        ao,
                        so,
                        uo,
                        fo =
                            ((so = new Date().getTime()),
                            (uo = []),
                            {
                                registerEvent: function (e) {
                                    var t =
                                            (e = e || i.event).wheelDelta ||
                                            -e.deltaY ||
                                            -e.detail,
                                        n = Math.max(-1, Math.min(1, t)),
                                        o =
                                            void 0 !== e.wheelDeltaX ||
                                            void 0 !== e.deltaX;
                                    co =
                                        Math.abs(e.wheelDeltaX) <
                                            Math.abs(e.wheelDelta) ||
                                        Math.abs(e.deltaX) <
                                            Math.abs(e.deltaY) ||
                                        !o;
                                    var r = new Date().getTime();
                                    (ao = n < 0 ? "down" : "up"),
                                        uo.length > 149 && uo.shift(),
                                        uo.push(Math.abs(t));
                                    var l = r - so;
                                    (so = r), l > 200 && (uo = []);
                                },
                                isAccelerating: function () {
                                    var e = le(uo, 10) >= le(uo, 70);
                                    return !!uo.length && e && co;
                                },
                                getDirection: function () {
                                    return ao;
                                },
                            });
                    function ho() {
                        var e = yt().css3
                                ? z() + S()
                                : re(pe().sections).item.offsetTop +
                                  re(pe().sections).item.offsetHeight,
                            t = kt(e);
                        (f.test.top = -e + "px"),
                            ve({
                                canScroll: !1,
                            }),
                            Vt(
                                t.element,
                                t.options,
                                yt().scrollingSpeed,
                                function () {
                                    setTimeout(function () {
                                        ve({
                                            isBeyondFullpage: !0,
                                        }),
                                            ve({
                                                canScroll: !0,
                                            });
                                    }, 30);
                                }
                            );
                    }
                    function vo() {
                        gt().getBoundingClientRect().bottom >= 0 && po();
                    }
                    function po() {
                        var e = kt(re(pe().sections).item.offsetTop);
                        ve({
                            canScroll: !1,
                        }),
                            Vt(
                                e.element,
                                e.options,
                                yt().scrollingSpeed,
                                function () {
                                    ve({
                                        canScroll: !0,
                                    }),
                                        ve({
                                            isBeyondFullpage: !1,
                                        }),
                                        ve({
                                            isAboutToScrollToFullPage: !1,
                                        });
                                }
                            );
                    }
                    var mo,
                        go,
                        yo,
                        So =
                            ((mo = !1),
                            (go = {}),
                            (yo = {}),
                            function (e, t, n) {
                                switch (e) {
                                    case "set":
                                        (go[t] = new Date().getTime()),
                                            (yo[t] = n);
                                        break;
                                    case "isNewKeyframe":
                                        var o = new Date().getTime();
                                        mo = o - go[t] > yo[t];
                                }
                                return mo;
                            });
                    function bo() {
                        var e = pe().activeSection.next();
                        e ||
                            (!yt().loopBottom && !yt().continuousVertical) ||
                            (e = pe().sections[0]),
                            null != e
                                ? An(e, null, !1)
                                : gt().scrollHeight < zt.scrollHeight &&
                                  yt().scrollBar &&
                                  yt().scrollBeyondFullpage &&
                                  de.emit(me.scrollBeyondFullpage);
                    }
                    function wo() {
                        var e = pe().activeSection.prev();
                        e ||
                            (!yt().loopTop && !yt().continuousVertical) ||
                            (e = re(pe().sections)),
                            null != e && An(e, null, !0);
                    }
                    (f.moveSectionDown = bo), (f.moveSectionUp = wo);
                    var xo = 0;
                    function Eo(e) {
                        yt().autoScrolling &&
                            (he.canScroll &&
                                (e.pageY < xo && cn().m.up
                                    ? wo()
                                    : e.pageY > xo && cn().m.down && bo()),
                            (xo = e.pageY));
                    }
                    function Ao(e) {
                        if (cn().m[e]) {
                            var t = "down" === e ? bo : wo;
                            yt().scrollOverflow &&
                            Hn.isScrollable(pe().activeSection)
                                ? Hn.isScrolled(e, pe().activeSection.item) &&
                                  Hn.shouldMovePage() &&
                                  t()
                                : t();
                        }
                    }
                    var Lo,
                        To,
                        Oo,
                        _o,
                        Po = 0,
                        Mo = 0,
                        ko = 0,
                        jo = 0,
                        Bo =
                            (i.PointerEvent &&
                                (_o = {
                                    down: "pointerdown",
                                    move: "pointermove",
                                }),
                            _o),
                        Ro = {
                            touchmove:
                                "ontouchmove" in window
                                    ? "touchmove"
                                    : Bo
                                    ? Bo.move
                                    : null,
                            touchstart:
                                "ontouchstart" in window
                                    ? "touchstart"
                                    : Bo
                                    ? Bo.down
                                    : null,
                        };
                    function Co(e) {
                        var t = D(e.target, je) || pe().activeSection.item,
                            n = Hn.isScrollable(pe().activeSection);
                        if (Io(e)) {
                            ve({
                                isGrabbing: !0,
                                isUsingWheel: !1,
                            }),
                                yt().autoScrolling &&
                                    ((n && !he.canScroll) || yt().scrollBar) &&
                                    W(e);
                            var o = Ho(e);
                            (ko = o.y), (jo = o.x);
                            var r =
                                    Math.abs(Po - ko) >
                                    (i.innerHeight / 100) *
                                        yt().touchSensitivity,
                                l =
                                    Math.abs(Mo - jo) >
                                    (b() / 100) * yt().touchSensitivity,
                                c =
                                    m(Ge, t).length &&
                                    Math.abs(Mo - jo) > Math.abs(Po - ko),
                                a = Po > ko ? "down" : "up";
                            ve({
                                touchDirection: c
                                    ? Mo > jo
                                        ? "right"
                                        : "left"
                                    : a,
                            }),
                                c
                                    ? !he.slideMoving &&
                                      l &&
                                      (Mo > jo
                                          ? cn().m.right &&
                                            de.emit(me.moveSlideRight, {
                                                section: t,
                                            })
                                          : cn().m.left &&
                                            de.emit(me.moveSlideLeft, {
                                                section: t,
                                            }))
                                    : yt().autoScrolling &&
                                      he.canScroll &&
                                      r &&
                                      Ao(a);
                        }
                    }
                    function Io(e) {
                        return (
                            void 0 === e.pointerType || "mouse" != e.pointerType
                        );
                    }
                    function Do(e) {
                        if (
                            (yt().fitToSection &&
                                ve({
                                    activeAnimation: !1,
                                }),
                            Io(e))
                        ) {
                            var t = Ho(e);
                            (Po = t.y), (Mo = t.x);
                        }
                        Y("touchend", qo);
                    }
                    function qo() {
                        X("touchend", qo),
                            ve({
                                isGrabbing: !1,
                            });
                    }
                    function Ho(e) {
                        var t = {};
                        return (
                            (t.y =
                                void 0 !== e.pageY && (e.pageY || e.pageX)
                                    ? e.pageY
                                    : e.touches[0].pageY),
                            (t.x =
                                void 0 !== e.pageX && (e.pageY || e.pageX)
                                    ? e.pageX
                                    : e.touches[0].pageX),
                            a &&
                                Io(e) &&
                                yt().scrollBar &&
                                void 0 !== e.touches &&
                                ((t.y = e.touches[0].pageY),
                                (t.x = e.touches[0].pageX)),
                            t
                        );
                    }
                    function Fo(e) {
                        yt().autoScrolling &&
                            Io(e) &&
                            cn().m.up &&
                            (he.canScroll || W(e));
                    }
                    function zo(e, t) {
                        var n = null == t ? pe().activeSection.item : t,
                            o = Lt(he.sections, n),
                            i = m(Ge, n)[0];
                        if (
                            !(
                                null == i ||
                                he.slideMoving ||
                                o.slides.length < 2
                            )
                        ) {
                            var r = o.activeSlide,
                                l = "left" === e ? r.prev() : r.next();
                            if (!l) {
                                if (!yt().loopHorizontal) return;
                                l = "left" === e ? re(o.slides) : o.slides[0];
                            }
                            ve({
                                slideMoving: !f.test.isTesting,
                            }),
                                zn(i, l.item, e);
                        }
                    }
                    function No(e) {
                        zo("left", e);
                    }
                    function Wo(e) {
                        zo("right", e);
                    }
                    function Vo(e) {
                        var t = pe().sections.filter(function (t) {
                            return t.anchor === e;
                        })[0];
                        if (!t) {
                            var n = void 0 !== e ? e - 1 : 0;
                            t = pe().sections[n];
                        }
                        return t;
                    }
                    function Uo(e) {
                        null != e && zn(D(e, Ge), e);
                    }
                    function Yo(e, t) {
                        var n = Vo(e);
                        if (null != n) {
                            var o = (function (e, t) {
                                var n = t.slides.filter(function (t) {
                                    return t.anchor === e;
                                })[0];
                                return (
                                    null == n &&
                                        ((e = void 0 !== e ? e : 0),
                                        (n = t.slides[e])),
                                    n ? n.item : null
                                );
                            })(t, n);
                            (n.anchor && n.anchor === he.lastScrolledDestiny) ||
                            y(n.item, Oe)
                                ? Uo(o)
                                : An(n, function () {
                                      Uo(o);
                                  });
                        }
                    }
                    function Ko(e, t) {
                        var n = Vo(e);
                        void 0 !== t ? Yo(e, t) : null != n && An(n);
                    }
                    function Xo() {
                        clearTimeout(To), K("keydown", Go), K("keyup", Qo);
                    }
                    function Go(e) {
                        clearTimeout(To);
                        var t = e.keyCode,
                            n = [37, 39].indexOf(t) > -1,
                            o = yt().autoScrolling || yt().fitToSection || n;
                        9 === t
                            ? (function (e) {
                                  var t = e.shiftKey,
                                      n = r.activeElement,
                                      o = ti(Pt(pe().activeSection.item));
                                  function i(e) {
                                      return W(e), o[0] ? o[0].focus() : null;
                                  }
                                  if (he.canScroll) {
                                      if (
                                          !(function (e) {
                                              var t = ti(r),
                                                  n = t.indexOf(
                                                      r.activeElement
                                                  ),
                                                  o =
                                                      t[
                                                          e.shiftKey
                                                              ? n - 1
                                                              : n + 1
                                                      ],
                                                  i = D(o, Ye),
                                                  l = D(o, je);
                                              return !i && !l;
                                          })(e)
                                      ) {
                                          n
                                              ? null ==
                                                    D(
                                                        n,
                                                        Be + "," + Be + " " + Ke
                                                    ) && (n = i(e))
                                              : i(e);
                                          var l = n == o[0],
                                              c = n == o[o.length - 1],
                                              a = t && l;
                                          if (a || (!t && c)) {
                                              W(e);
                                              var s = (function (e) {
                                                      var t,
                                                          n = e
                                                              ? "prevPanel"
                                                              : "nextPanel",
                                                          o = [],
                                                          i = Mt(
                                                              (he.activeSection &&
                                                              he.activeSection
                                                                  .activeSlide
                                                                  ? he
                                                                        .activeSection
                                                                        .activeSlide
                                                                  : he.activeSection)[
                                                                  n
                                                              ]()
                                                          );
                                                      do {
                                                          (o = ti(i.item))
                                                              .length &&
                                                              (t = {
                                                                  panel: i,
                                                                  itemToFocus:
                                                                      o[
                                                                          e
                                                                              ? o.length -
                                                                                1
                                                                              : 0
                                                                      ],
                                                              }),
                                                              (i = Mt(i[n]()));
                                                      } while (
                                                          i &&
                                                          0 === o.length
                                                      );
                                                      return t;
                                                  })(a),
                                                  u = s ? s.panel : null;
                                              if (u) {
                                                  var f = u.isSection
                                                      ? u
                                                      : u.parent;
                                                  de.emit(
                                                      me.onScrollPageAndSlide,
                                                      {
                                                          sectionAnchor:
                                                              f.index() + 1,
                                                          slideAnchor:
                                                              u.isSection
                                                                  ? 0
                                                                  : u.index(),
                                                      }
                                                  ),
                                                      (Oo = s.itemToFocus),
                                                      W(e);
                                              }
                                          }
                                      }
                                  } else W(e);
                              })(e)
                            : !se() &&
                              yt().keyboardScrolling &&
                              o &&
                              ((Lo = e.ctrlKey),
                              (To = setTimeout(function () {
                                  !(function (e) {
                                      var t = e.shiftKey,
                                          n = r.activeElement,
                                          o = $(n, "video") || $(n, "audio"),
                                          i = Hn.isScrolled(
                                              "up",
                                              pe().activeSection.item
                                          ),
                                          l = Hn.isScrolled(
                                              "down",
                                              pe().activeSection.item
                                          ),
                                          c = [37, 39].indexOf(e.keyCode) > -1;
                                      if (
                                          ((function (e) {
                                              (function (e) {
                                                  return (
                                                      [
                                                          40, 38, 32, 33, 34,
                                                      ].indexOf(e.keyCode) >
                                                          -1 &&
                                                      !he.isBeyondFullpage
                                                  );
                                              })(e) &&
                                                  !D(e.target, et) &&
                                                  e.preventDefault();
                                          })(e),
                                          he.canScroll || c)
                                      )
                                          switch (
                                              (ve({
                                                  scrollTrigger: "keydown",
                                              }),
                                              e.keyCode)
                                          ) {
                                              case 38:
                                              case 33:
                                                  cn().k.up && i
                                                      ? he.isBeyondFullpage
                                                          ? de.emit(
                                                                me.onKeyDown,
                                                                {
                                                                    e,
                                                                }
                                                            )
                                                          : wo()
                                                      : Hn.focusScrollable();
                                                  break;
                                              case 32:
                                                  if (
                                                      t &&
                                                      cn().k.up &&
                                                      !o &&
                                                      i
                                                  ) {
                                                      wo();
                                                      break;
                                                  }
                                              case 40:
                                              case 34:
                                                  if (cn().k.down && l) {
                                                      if (he.isBeyondFullpage)
                                                          return;
                                                      (32 === e.keyCode && o) ||
                                                          bo();
                                                  } else Hn.focusScrollable();
                                                  break;
                                              case 36:
                                                  cn().k.up && Ko(1);
                                                  break;
                                              case 35:
                                                  cn().k.down &&
                                                      Ko(pe().sections.length);
                                                  break;
                                              case 37:
                                                  cn().k.left && No();
                                                  break;
                                              case 39:
                                                  cn().k.right && Wo();
                                          }
                                  })(e);
                              }, 0)));
                    }
                    function Qo(e) {
                        he.isWindowFocused && (Lo = e.ctrlKey);
                    }
                    function $o() {
                        ve({
                            isWindowFocused: !1,
                        }),
                            (Lo = !1);
                    }
                    function Jo(e) {
                        ei();
                    }
                    function Zo(e) {
                        (D(Oo, Ye) && !D(Oo, Ke)) || ei();
                    }
                    function ei() {
                        Oo && (Oo.focus(), (Oo = null));
                    }
                    function ti(e) {
                        return [].slice.call(m(u, e)).filter(function (e) {
                            return (
                                "-1" !== V(e, "tabindex") &&
                                null !== e.offsetParent
                            );
                        });
                    }
                    (f.moveSlideLeft = No),
                        (f.moveSlideRight = Wo),
                        (f.moveTo = Ko),
                        de.on(me.bindEvents, function () {
                            Y("blur", $o),
                                U("keydown", Go),
                                U("keyup", Qo),
                                de.on(me.onDestroy, Xo),
                                de.on(me.afterSlideLoads, Jo),
                                de.on(me.afterSectionLoads, Zo);
                        });
                    var ni = new Date().getTime(),
                        oi = [];
                    function ii(e) {
                        e
                            ? ((function () {
                                  var e,
                                      t = "";
                                  i.addEventListener
                                      ? (e = "addEventListener")
                                      : ((e = "attachEvent"), (t = "on"));
                                  var n =
                                          "onwheel" in r.createElement("div")
                                              ? "wheel"
                                              : void 0 !== r.onmousewheel
                                              ? "mousewheel"
                                              : "DOMMouseScroll",
                                      o = lo();
                                  "DOMMouseScroll" == n
                                      ? r[e](t + "MozMousePixelScroll", ri, o)
                                      : r[e](t + n, ri, o);
                              })(),
                              gt().addEventListener("mousedown", li),
                              gt().addEventListener("mouseup", ci))
                            : (r.addEventListener
                                  ? (K("mousewheel", ri, !1),
                                    K("wheel", ri, !1),
                                    K("MozMousePixelScroll", ri, !1))
                                  : r.detachEvent("onmousewheel", ri),
                              gt().removeEventListener("mousedown", li),
                              gt().removeEventListener("mouseup", ci));
                    }
                    function ri(e) {
                        var t = new Date().getTime(),
                            n = y(m(Me)[0], He),
                            o = (function (e, t) {
                                new Date().getTime();
                                var n =
                                        pe().isBeyondFullpage &&
                                        e.getBoundingClientRect().bottom >= 0 &&
                                        "up" === fo.getDirection(),
                                    o = pe().isAboutToScrollToFullPage;
                                if (o) return W(t), !1;
                                if (pe().isBeyondFullpage) {
                                    if (n) {
                                        var i;
                                        if (
                                            !(
                                                o ||
                                                (So(
                                                    "isNewKeyframe",
                                                    "beyondFullpage"
                                                ) &&
                                                    fo.isAccelerating())
                                            )
                                        )
                                            return (
                                                (i = kt(
                                                    re(pe().sections).item
                                                        .offsetTop +
                                                        re(pe().sections).item
                                                            .offsetHeight
                                                )).element.scrollTo(
                                                    0,
                                                    i.options
                                                ),
                                                ve({
                                                    isAboutToScrollToFullPage:
                                                        !1,
                                                }),
                                                W(t),
                                                !1
                                            );
                                        if (fo.isAccelerating())
                                            return (
                                                (n = !1),
                                                ve({
                                                    isAboutToScrollToFullPage:
                                                        !0,
                                                }),
                                                ve({
                                                    scrollTrigger: "wheel",
                                                }),
                                                po(),
                                                W(t),
                                                !1
                                            );
                                    } else So("set", "beyondFullpage", 1e3);
                                    if (!o && !n) return !0;
                                }
                            })(gt(), e);
                        if (
                            (he.isUsingWheel ||
                                ve({
                                    isGrabbing: !1,
                                    isUsingWheel: !0,
                                    touchDirection: "none",
                                }),
                            !cn().m.down && !cn().m.up)
                        )
                            return W(e), !1;
                        if (o) return !0;
                        if (!1 === o) return W(e), !1;
                        if (yt().autoScrolling && !Lo && !n) {
                            var r =
                                    (e = e || i.event).wheelDelta ||
                                    -e.deltaY ||
                                    -e.detail,
                                l = Math.max(-1, Math.min(1, r)),
                                c =
                                    void 0 !== e.wheelDeltaX ||
                                    void 0 !== e.deltaX,
                                a =
                                    Math.abs(e.wheelDeltaX) <
                                        Math.abs(e.wheelDelta) ||
                                    Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
                                    !c,
                                s = l < 0 ? "down" : l > 0 ? "up" : "none";
                            oi.length > 149 && oi.shift(),
                                oi.push(Math.abs(r)),
                                yt().scrollBar && W(e);
                            var u = t - ni;
                            return (
                                (ni = t),
                                u > 200 && (oi = []),
                                ve({
                                    wheelDirection: s,
                                }),
                                he.canScroll &&
                                    le(oi, 10) >= le(oi, 70) &&
                                    a &&
                                    (ve({
                                        scrollTrigger: "wheel",
                                    }),
                                    Ao(l < 0 ? "down" : "up")),
                                !1
                            );
                        }
                        yt().fitToSection &&
                            ve({
                                activeAnimation: !1,
                            });
                    }
                    function li(e) {
                        var t;
                        2 == e.which &&
                            ((t = e.pageY),
                            (xo = t),
                            gt().addEventListener("mousemove", Eo));
                    }
                    function ci(e) {
                        2 == e.which &&
                            gt().removeEventListener("mousemove", Eo);
                    }
                    function ai(e) {
                        e
                            ? (ii(!0),
                              (function () {
                                  if (Ro.touchmove && (l || a)) {
                                      yt().autoScrolling &&
                                          (zt.removeEventListener(
                                              Ro.touchmove,
                                              Fo,
                                              {
                                                  passive: !1,
                                              }
                                          ),
                                          zt.addEventListener(
                                              Ro.touchmove,
                                              Fo,
                                              {
                                                  passive: !1,
                                              }
                                          ));
                                      var e = yt().touchWrapper;
                                      e.removeEventListener(Ro.touchstart, Do),
                                          e.removeEventListener(
                                              Ro.touchmove,
                                              Co,
                                              {
                                                  passive: !1,
                                              }
                                          ),
                                          e.addEventListener(Ro.touchstart, Do),
                                          e.addEventListener(Ro.touchmove, Co, {
                                              passive: !1,
                                          });
                                  }
                              })())
                            : (ii(!1),
                              (function () {
                                  if (Ro.touchmove && (l || a)) {
                                      yt().autoScrolling &&
                                          (zt.removeEventListener(
                                              Ro.touchmove,
                                              Co,
                                              {
                                                  passive: !1,
                                              }
                                          ),
                                          zt.removeEventListener(
                                              Ro.touchmove,
                                              Fo,
                                              {
                                                  passive: !1,
                                              }
                                          ));
                                      var e = yt().touchWrapper;
                                      e.removeEventListener(Ro.touchstart, Do),
                                          e.removeEventListener(
                                              Ro.touchmove,
                                              Co,
                                              {
                                                  passive: !1,
                                              }
                                          );
                                  }
                              })());
                    }
                    f.setMouseWheelScrolling = ii;
                    var si = !0;
                    function ui() {
                        [
                            "mouseenter",
                            "touchstart",
                            "mouseleave",
                            "touchend",
                        ].forEach(function (e) {
                            K(e, di, !0);
                        });
                    }
                    function fi(e, t) {
                        (document["fp_" + e] = t), U(e, di, !0);
                    }
                    function di(e) {
                        var t = e.type,
                            n = !1,
                            o =
                                "mouseleave" === t
                                    ? e.toElement || e.relatedTarget
                                    : e.target;
                        o != document && o
                            ? ("touchend" === t &&
                                  ((si = !1),
                                  setTimeout(function () {
                                      si = !0;
                                  }, 800)),
                              ("mouseenter" !== t || si) &&
                                  (yt()
                                      .normalScrollElements.split(",")
                                      .forEach(function (e) {
                                          if (!n) {
                                              var t = $(o, e),
                                                  i = D(o, e);
                                              (t || i) &&
                                                  (f.shared
                                                      .isNormalScrollElement ||
                                                      ai(!1),
                                                  (f.shared.isNormalScrollElement =
                                                      !0),
                                                  (n = !0));
                                          }
                                      }),
                                  !n &&
                                      f.shared.isNormalScrollElement &&
                                      (ai(!0),
                                      (f.shared.isNormalScrollElement = !1))))
                            : ai(!0);
                    }
                    function hi(e, t) {
                        Ht(0, "internal"),
                            Ko(e, t),
                            Ht(St().scrollingSpeed, "internal");
                    }
                    de.on(me.bindEvents, function () {
                        yt().normalScrollElements &&
                            (["mouseenter", "touchstart"].forEach(function (e) {
                                fi(e, !1);
                            }),
                            ["mouseleave", "touchend"].forEach(function (e) {
                                fi(e, !0);
                            })),
                            de.on(me.onDestroy, ui);
                    }),
                        (f.silentMoveTo = hi);
                    var vi,
                        pi,
                        mi = S(),
                        gi = b(),
                        yi = !1;
                    function Si() {
                        clearTimeout(vi), clearTimeout(pi), X("resize", bi);
                    }
                    function bi() {
                        yi ||
                            (((yt().autoScrolling && !yt().scrollBar) ||
                                !yt().fitToSection) &&
                                xi(S())),
                            (function () {
                                if (l)
                                    for (var e = 0; e < 4; e++)
                                        pi = setTimeout(function () {
                                            window.requestAnimationFrame(
                                                function () {
                                                    yt().autoScrolling &&
                                                        !yt().scrollBar &&
                                                        (ve({
                                                            isResizing: !0,
                                                        }),
                                                        hi(
                                                            he.activeSection.index() +
                                                                1
                                                        ),
                                                        ve({
                                                            isResizing: !1,
                                                        }));
                                                }
                                            );
                                        }, 200 * e);
                            })(),
                            (yi = !0),
                            clearTimeout(vi),
                            (vi = setTimeout(function () {
                                !(function () {
                                    if (
                                        (ve({
                                            isResizing: !0,
                                        }),
                                        xi(""),
                                        yt().autoScrolling ||
                                            he.isBeyondFullpage ||
                                            (function () {
                                                if (
                                                    !yt().autoScrolling ||
                                                    yt().scrollBar
                                                ) {
                                                    var e =
                                                        0.01 * i.innerHeight;
                                                    r.documentElement.style.setProperty(
                                                        "--vh",
                                                        "".concat(e, "px")
                                                    );
                                                }
                                            })(),
                                        de.emit(me.contentChanged),
                                        Kn(),
                                        _n(),
                                        l)
                                    ) {
                                        var e = r.activeElement;
                                        if (
                                            !$(e, "textarea") &&
                                            !$(e, "input") &&
                                            !$(e, "select")
                                        ) {
                                            var t = S();
                                            Math.abs(t - mi) >
                                                (20 * Math.max(mi, t)) / 100 &&
                                                (wi(!0), (mi = t));
                                        }
                                    } else
                                        (n = S()),
                                            (o = b()),
                                            (he.windowsHeight === n &&
                                                gi === o) ||
                                                (ve({
                                                    windowsHeight: n,
                                                }),
                                                (gi = o),
                                                wi(!0));
                                    var n, o;
                                    ve({
                                        isResizing: !1,
                                    });
                                })(),
                                    (yi = !1);
                            }, 400));
                    }
                    function wi(e) {
                        if (!y(gt(), Ae)) {
                            ve({
                                isResizing: !0,
                                windowsHeight: S(),
                                windowsWidth: b(),
                            });
                            for (
                                var t = pe().sections, n = 0;
                                n < t.length;
                                ++n
                            ) {
                                var o = t[n],
                                    r = m(Ge, o.item)[0];
                                o.slides.length > 1 &&
                                    zn(r, o.activeSlide.item);
                            }
                            yt().scrollOverflow && Hn.makeScrollable();
                            var l = pe().activeSection.index();
                            he.isBeyondFullpage || (l && hi(l + 1)),
                                ve({
                                    isResizing: !1,
                                }),
                                G(yt().afterResize) &&
                                    e &&
                                    yt().afterResize.call(
                                        gt(),
                                        i.innerWidth,
                                        i.innerHeight
                                    ),
                                G(yt().afterReBuild) &&
                                    !e &&
                                    yt().afterReBuild.call(gt()),
                                Q(gt(), "afterRebuild");
                        }
                    }
                    function xi(e) {
                        var t = "" === e ? "" : e + "px";
                        pe().sections.forEach(function (e) {
                            w(e.item, {
                                height: t,
                            });
                        });
                    }
                    function Ei() {
                        var e,
                            t,
                            n = i.location.hash;
                        if (n.length) {
                            var o = n.replace("#", "").split("/"),
                                r = n.indexOf("#/") > -1;
                            e = r ? "/" + o[1] : decodeURIComponent(o[0]);
                            var l = r ? o[2] : o[1];
                            l && l.length && (t = decodeURIComponent(l));
                        }
                        return {
                            section: e,
                            slide: t,
                        };
                    }
                    function Ai() {
                        X("hashchange", Li);
                    }
                    function Li() {
                        if (!he.isScrolling && !yt().lockAnchors) {
                            var e = Ei(),
                                t = e.section,
                                n = e.slide,
                                o = void 0 === he.lastScrolledDestiny,
                                i =
                                    void 0 === he.lastScrolledDestiny &&
                                    void 0 === n &&
                                    !he.slideMoving;
                            t &&
                                t.length &&
                                ((t && t !== he.lastScrolledDestiny && !o) ||
                                    i ||
                                    (!he.slideMoving &&
                                        he.lastScrolledSlide != n)) &&
                                de.emit(me.onScrollPageAndSlide, {
                                    sectionAnchor: t,
                                    slideAnchor: n,
                                });
                        }
                    }
                    function Ti(e) {
                        var t = e.target;
                        D(t, yt().menu + " [data-menuanchor]") && Oi.call(t, e);
                    }
                    function Oi(e) {
                        ve({
                            scrollTrigger: "menu",
                        }),
                            !m(yt().menu)[0] ||
                                (!yt().lockAnchors && yt().anchors.length) ||
                                (W(e),
                                de.emit(me.onMenuClick, {
                                    anchor: V(this, "data-menuanchor"),
                                }));
                    }
                    function _i(e) {
                        var t = e.target;
                        t && D(t, ze + " a")
                            ? vn.call(t, e.e)
                            : $(t, We)
                            ? dn.call(t)
                            : ($(t, it) || null != D(t, it)) && on.call(t, e.e);
                    }
                    (f.reBuild = wi),
                        de.on(me.bindEvents, function () {
                            bi(), Y("resize", bi), de.on(me.onDestroy, Si);
                        }),
                        (f.setLockAnchors = function (e) {
                            yt().lockAnchors = e;
                        }),
                        de.on(me.bindEvents, function () {
                            Y("hashchange", Li), de.on(me.onDestroy, Ai);
                        }),
                        de.on(me.bindEvents, function () {
                            U("wheel", fo.registerEvent, lo()),
                                de.on(me.scrollBeyondFullpage, ho),
                                de.on(me.onKeyDown, vo);
                        }),
                        de.on(me.bindEvents, function () {
                            de.on(me.onClickOrTouch, Ti);
                        }),
                        de.on(me.bindEvents, function () {
                            de.on(me.onClickOrTouch, _i);
                        });
                    var Pi,
                        Mi,
                        ki = 0;
                    function ji(e) {
                        var t, n, o, i, r;
                        if (
                            !he.isResizing &&
                            pe().activeSection &&
                            (re(pe().sections),
                            !pe().isBeyondFullpage &&
                                !pe().isAboutToScrollToFullPage &&
                                (!yt().autoScrolling || yt().scrollBar))
                        ) {
                            var l = z(),
                                c = (function (e) {
                                    var t = e > ki ? "down" : "up";
                                    return (
                                        (ki = e),
                                        ve({
                                            previousDestTop: e,
                                        }),
                                        t
                                    );
                                })(l),
                                a = 0,
                                s = l + S() / 2,
                                u = zt.scrollHeight - S() === l,
                                f = pe().sections;
                            if (
                                (ve({
                                    scrollY: l,
                                }),
                                u)
                            )
                                a = f.length - 1;
                            else if (l)
                                for (var d = 0; d < f.length; ++d)
                                    f[d].item.offsetTop <= s && (a = d);
                            else a = 0;
                            if (
                                ((o = c),
                                (r =
                                    (i = pe().activeSection.item.offsetTop) +
                                    S()),
                                ("up" == o ? r >= z() + S() : i <= z()) &&
                                    (y(pe().activeSection.item, Pe) ||
                                        (M(pe().activeSection.item, Pe),
                                        k(N(pe().activeSection.item), Pe))),
                                (n = (t = f[a]).item),
                                !t.isActive)
                            ) {
                                ve({
                                    isScrolling: !0,
                                });
                                var h,
                                    v,
                                    p = pe().activeSection.item,
                                    m = pe().activeSection.index() + 1,
                                    g = Rt(pe().activeSection, n),
                                    b = t.anchor,
                                    w = t.index() + 1,
                                    x = t.activeSlide,
                                    E = {
                                        activeSection: p,
                                        sectionIndex: w - 1,
                                        anchorLink: b,
                                        element: n,
                                        leavingSection: m,
                                        direction: g,
                                        items: {
                                            origin: pe().activeSection,
                                            destination: t,
                                        },
                                    };
                                x && ((v = x.anchor), (h = x.index())),
                                    he.canScroll &&
                                        (M(n, Oe),
                                        k(N(n), Oe),
                                        G(yt().beforeLeave) &&
                                            En("beforeLeave", E),
                                        G(yt().onLeave) && Kt("onLeave", E),
                                        G(yt().afterLoad) && Kt("afterLoad", E),
                                        Qt(p),
                                        $t(n),
                                        Xt(n),
                                        pn(b, w - 1),
                                        yt().anchors.length &&
                                            ve({
                                                lastScrolledDestiny: b,
                                            }),
                                        Kn(),
                                        en(h, v, b)),
                                    clearTimeout(Pi),
                                    (Pi = setTimeout(function () {
                                        ve({
                                            isScrolling: !1,
                                        });
                                    }, 100));
                            }
                            yt().fitToSection &&
                                he.canScroll &&
                                (clearTimeout(Mi),
                                (Mi = setTimeout(function () {
                                    he.sections.filter(function (e) {
                                        var t = e.item.getBoundingClientRect();
                                        return (
                                            Math.round(t.bottom) ===
                                                Math.round(S()) ||
                                            0 === Math.round(t.top)
                                        );
                                    }).length || On();
                                }, yt().fitToSectionDelay)));
                        }
                    }
                    function Bi(e, t) {
                        void 0 !== t
                            ? (t = t.replace(/ /g, "").split(",")).forEach(
                                  function (t) {
                                      ln(e, t, "k");
                                  }
                              )
                            : (ln(e, "all", "k"), (yt().keyboardScrolling = e));
                    }
                    function Ri(e) {
                        var t = e.index();
                        void 0 !== yt().anchors[t] &&
                            e.isActive &&
                            pn(yt().anchors[t], t),
                            yt().menu &&
                                yt().css3 &&
                                null != D(m(yt().menu)[0], we) &&
                                m(yt().menu).forEach(function (e) {
                                    zt.appendChild(e);
                                });
                    }
                    function Ci() {
                        var e,
                            t,
                            n = pe().activeSection,
                            o = pe().activeSection.item;
                        M(o, Pe),
                            $t(o),
                            fn(),
                            Xt(o),
                            (t = Vo((e = Ei()).section)),
                            (e.section &&
                                t &&
                                (void 0 === t || t.index() !== L(Bn))) ||
                                !G(yt().afterLoad) ||
                                Kt("afterLoad", {
                                    activeSection: o,
                                    element: o,
                                    direction: null,
                                    anchorLink: n.anchor,
                                    sectionIndex: n.index(),
                                    items: {
                                        origin: pe().activeSection,
                                        destination: pe().activeSection,
                                    },
                                }),
                            G(yt().afterRender) && Kt("afterRender");
                    }
                    function Ii(e, t) {
                        void 0 !== t
                            ? (t = t.replace(/ /g, "").split(",")).forEach(
                                  function (t) {
                                      ln(e, t, "m");
                                  }
                              )
                            : ln(e, "all", "m");
                    }
                    function Di() {
                        var e = Ei(),
                            t = e.section,
                            n = e.slide;
                        t
                            ? yt().animateAnchor
                                ? Yo(t, n)
                                : hi(t, n)
                            : de.emit(me.onAfterRenderNoAnchor, null);
                    }
                    function qi() {
                        Xn(),
                            Kn(),
                            (yt().scrollBar = yt().scrollBar || yt().hybrid),
                            wt(),
                            (function () {
                                w(ae(gt(), "body"), {
                                    height: "100%",
                                    position: "relative",
                                }),
                                    M(gt(), be),
                                    M(Nt, Le),
                                    ve({
                                        windowsHeight: S(),
                                    }),
                                    k(gt(), Ae),
                                    eo();
                                for (
                                    var e = pe().sectionsIncludingHidden, t = 0;
                                    t < e.length;
                                    t++
                                ) {
                                    var n = e[t],
                                        o = n.allSlidesItems,
                                        i = V(n.item, "style");
                                    i &&
                                        n.item.setAttribute(
                                            "data-fp-styles",
                                            i
                                        ),
                                        Rn(n),
                                        Ri(n),
                                        o.length > 0 && to(n);
                                }
                                yt().fixedElements &&
                                    yt().css3 &&
                                    m(yt().fixedElements).forEach(function (e) {
                                        zt.appendChild(e);
                                    }),
                                    yt().navigation && hn(),
                                    m(
                                        'iframe[src*="youtube.com/embed/"]',
                                        gt()
                                    ).forEach(function (e) {
                                        var t, n;
                                        (n = V((t = e), "src")),
                                            t.setAttribute(
                                                "src",
                                                n +
                                                    (/\?/.test(n) ? "&" : "?") +
                                                    "enablejsapi=1"
                                            );
                                    }),
                                    yt().scrollOverflow && Hn.makeScrollable();
                            })(),
                            Ii(!0),
                            ai(!0),
                            un(yt().autoScrolling, "internal"),
                            _n(),
                            Jt(),
                            "complete" === r.readyState && Di(),
                            Y("load", Di),
                            Ci(),
                            Xn(),
                            Kn();
                    }
                    de.on(me.onDestroy, function () {
                        clearTimeout(Pi), clearTimeout(Mi);
                    }),
                        de.on(me.bindEvents, function () {
                            Y("scroll", ji),
                                r.body.addEventListener("scroll", ji),
                                de.on(me.onScrollPageAndSlide, function (e) {
                                    Yo(e.sectionAnchor, e.slideAnchor);
                                }),
                                de.on(me.onMenuClick, function (e) {
                                    Ko(e.anchor, void 0);
                                }),
                                de.on(
                                    me.onScrollOverflowScrolled,
                                    function (e) {
                                        ("down" === e.direction ? bo : wo)();
                                    }
                                ),
                                de.on(me.scrollPage, function (e) {
                                    An(e.destination);
                                });
                        }),
                        de.on(me.onDestroy, function () {
                            X("scroll", ji);
                        }),
                        (f.getActiveSlide = function () {
                            return Yt(pe().activeSection.activeSlide);
                        }),
                        (f.getScrollX = function () {
                            return he.scrollX;
                        }),
                        de.on(me.bindEvents, function () {
                            de.on(me.onDestroy, Nn),
                                de.on(me.landscapeScroll, function (e) {
                                    zn(e.slides, e.destination);
                                }),
                                de.on(me.moveSlideRight, function (e) {
                                    Wo(e.section);
                                }),
                                de.on(me.moveSlideLeft, function (e) {
                                    No(e.section);
                                });
                        }),
                        de.on(me.bindEvents, function () {
                            var e = yt().credits.position || "right",
                                t =
                                    ["left", "right"].indexOf(e) > -1
                                        ? "".concat(e, ": 0;")
                                        : "",
                                n =
                                    '\n        <div class="fp-watermark" style="'
                                        .concat(
                                            t,
                                            '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    '
                                        )
                                        .concat(
                                            yt().credits.label ||
                                                "Made with fullPage.js",
                                            "\n            </a>\n        </div>\n    "
                                        ),
                                o = re(he.sections),
                                i = !he.isValid || yt().credits.enabled;
                            o &&
                                o.item &&
                                i &&
                                o.item.insertAdjacentHTML("beforeend", n);
                        }),
                        (function () {
                            de.on(me.onInitialise, function () {
                                var t, c, a;
                                ve({
                                    isValid:
                                        (yt().licenseKey,
                                        (t = yt().licenseKey),
                                        (c = (function (t) {
                                            var n =
                                                parseInt("514").toString(16);
                                            if (
                                                !t ||
                                                t.length < 29 ||
                                                4 === t.split(e[0]).length
                                            )
                                                return null;
                                            var o = ["Each", "for"]
                                                    [i()]()
                                                    .join(""),
                                                c = t[["split"]]("-"),
                                                a = [];
                                            c[o](function (e, t) {
                                                if (t < 4) {
                                                    var o = (function (e) {
                                                        var t = e[e.length - 1],
                                                            n = ["NaN", "is"]
                                                                [i()]()
                                                                .join("");
                                                        return window[n](t)
                                                            ? r(t)
                                                            : (function (e) {
                                                                  return (
                                                                      e -
                                                                      Oe.length
                                                                  );
                                                              })(t);
                                                    })(e);
                                                    a.push(o);
                                                    var l = r(e[o]);
                                                    if (1 === t) {
                                                        var c = [
                                                            "pa",
                                                            "dS",
                                                            "t",
                                                            "art",
                                                        ].join("");
                                                        l = l
                                                            .toString()
                                                            [c](2, "0");
                                                    }
                                                    (n += l),
                                                        (0 !== t && 1 !== t) ||
                                                            (n += "-");
                                                }
                                            });
                                            var s = 0,
                                                u = "";
                                            return (
                                                t
                                                    .split("-")
                                                    .forEach(function (e, t) {
                                                        if (t < 4) {
                                                            for (
                                                                var n = 0,
                                                                    o = 0;
                                                                o < 4;
                                                                o++
                                                            )
                                                                o !== a[t] &&
                                                                    ((n +=
                                                                        Math.abs(
                                                                            r(
                                                                                e[
                                                                                    o
                                                                                ]
                                                                            )
                                                                        )),
                                                                    isNaN(
                                                                        e[o]
                                                                    ) || s++);
                                                            var i = l(n);
                                                            u += i;
                                                        }
                                                    }),
                                                (u += l(s)),
                                                {
                                                    v: new Date(n + "T00:00"),
                                                    o:
                                                        n.split("-")[2] ===
                                                        8 * (Oe.length - 2) +
                                                            "",
                                                    l: u,
                                                }
                                            );
                                        })(t)),
                                        (a = (function (e) {
                                            var t = o[i()]().join("");
                                            return (
                                                e &&
                                                0 === t.indexOf(e) &&
                                                e.length === t.length
                                            );
                                        })(t)),
                                        ((c || a) &&
                                            ((c &&
                                                n <= c.v &&
                                                c.l === t.split(e[0])[4]) ||
                                                a ||
                                                c.o)) ||
                                            !1),
                                });
                            });
                            var e = ["-"],
                                t = "2023-4-29".split("-"),
                                n = new Date(t[0], t[1], t[2]),
                                o = ["se", "licen", "-", "v3", "l", "gp"];
                            function i() {
                                return ["re", "verse"].join("");
                            }
                            function r(e) {
                                return e
                                    ? isNaN(e)
                                        ? e.charCodeAt(0) - 72
                                        : e
                                    : "";
                            }
                            function l(e) {
                                var t = 72 + e;
                                return (
                                    t > 90 && t < 97 && (t += 15),
                                    String.fromCharCode(t).toUpperCase()
                                );
                            }
                        })(),
                        (f.setKeyboardScrolling = Bi),
                        (f.shared.afterRenderActions = Ci),
                        (f.setAllowScrolling = Ii),
                        (f.destroy = function (e) {
                            un(!1, "internal"),
                                Ii(!0),
                                ai(!1),
                                Bi(!1),
                                M(gt(), Ae),
                                de.emit(me.onDestroy),
                                e &&
                                    (qt(0),
                                    m(
                                        "img[data-src], source[data-src], audio[data-src], iframe[data-src]",
                                        gt()
                                    ).forEach(function (e) {
                                        ce(e, "src");
                                    }),
                                    m("img[data-srcset]").forEach(function (e) {
                                        ce(e, "srcset");
                                    }),
                                    ee(m(ze + ", " + ot + ", " + ct)),
                                    w(At(pe().sections), {
                                        height: "",
                                        "background-color": "",
                                        padding: "",
                                    }),
                                    w(At(pe().slides), {
                                        width: "",
                                    }),
                                    w(gt(), {
                                        height: "",
                                        position: "",
                                        "-ms-touch-action": "",
                                        "touch-action": "",
                                    }),
                                    w(Wt, {
                                        overflow: "",
                                        height: "",
                                    }),
                                    k(Nt, Le),
                                    k(zt, xe + " fp-scrollable"),
                                    zt.className
                                        .split(/\s+/)
                                        .forEach(function (e) {
                                            0 === e.indexOf(Te) && k(zt, e);
                                        }),
                                    At(pe().panels).forEach(function (e) {
                                        yt().scrollOverflow &&
                                            Hn.destroyWrapper(e),
                                            k(
                                                e,
                                                Je +
                                                    " " +
                                                    Oe +
                                                    " " +
                                                    Pe +
                                                    " " +
                                                    tt
                                            );
                                        var t = V(e, "data-fp-styles");
                                        t && e.setAttribute("style", t),
                                            y(e, ke) &&
                                                !vt &&
                                                e.removeAttribute(
                                                    "data-anchor"
                                                );
                                    }),
                                    Ct(gt()),
                                    [Re, $e, Ge].forEach(function (e) {
                                        m(e, gt()).forEach(function (e) {
                                            I(e);
                                        });
                                    }),
                                    w(gt(), {
                                        "-webkit-transition": "none",
                                        transition: "none",
                                    }),
                                    k(gt(), be),
                                    i.scrollTo(0, 0),
                                    [ke, Ue, Qe].forEach(function (e) {
                                        k(m("." + e), e);
                                    }));
                        });
                    var Hi = function () {
                        return (
                            (yt() && he.isValid) ||
                            r.domain.indexOf("alvarotrigo.com") > -1
                        );
                    };
                    function Fi() {
                        var e = yt().licenseKey,
                            t = "font-size: 15px;background:yellow;";
                        "" === yt().licenseKey.trim()
                            ? (h(
                                  "error",
                                  "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"
                              ),
                              h(
                                  "error",
                                  "https://github.com/alvarotrigo/fullPage.js#options"
                              ))
                            : Hi()
                            ? e &&
                              e.length < 20 &&
                              (console.warn(
                                  "%c This website was made using fullPage.js slider. More info on the following website:",
                                  t
                              ),
                              console.warn(
                                  "%c https://alvarotrigo.com/fullPage/",
                                  t
                              ))
                            : (h(
                                  "error",
                                  "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"
                              ),
                              h(
                                  "error",
                                  "https://alvarotrigo.com/fullPage/pricing"
                              )),
                            y(Nt, Le)
                                ? h(
                                      "error",
                                      "Fullpage.js can only be initialized once and you are doing it multiple times!"
                                  )
                                : (yt().continuousVertical &&
                                      (yt().loopTop || yt().loopBottom) &&
                                      ((yt().continuousVertical = !1),
                                      h(
                                          "warn",
                                          "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                                      )),
                                  !yt().scrollOverflow ||
                                      (!yt().scrollBar && yt().autoScrolling) ||
                                      h(
                                          "warn",
                                          "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"
                                      ),
                                  !yt().continuousVertical ||
                                      (!yt().scrollBar && yt().autoScrolling) ||
                                      ((yt().continuousVertical = !1),
                                      h(
                                          "warn",
                                          "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                                      )),
                                  d.forEach(function (e) {
                                      yt()[e] &&
                                          h(
                                              "warn",
                                              "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " +
                                                  e
                                          );
                                  }),
                                  yt().anchors.forEach(function (e) {
                                      var t = [].slice
                                              .call(m("[name]"))
                                              .filter(function (t) {
                                                  return (
                                                      V(t, "name") &&
                                                      V(
                                                          t,
                                                          "name"
                                                      ).toLowerCase() ==
                                                          e.toLowerCase()
                                                  );
                                              }),
                                          n = [].slice
                                              .call(m("[id]"))
                                              .filter(function (t) {
                                                  return (
                                                      V(t, "id") &&
                                                      V(
                                                          t,
                                                          "id"
                                                      ).toLowerCase() ==
                                                          e.toLowerCase()
                                                  );
                                              });
                                      if (n.length || t.length) {
                                          h(
                                              "error",
                                              "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                                          );
                                          var o = n.length ? "id" : "name";
                                          (n.length || t.length) &&
                                              h(
                                                  "error",
                                                  '"' +
                                                      e +
                                                      '" is is being used by another element `' +
                                                      o +
                                                      "` property"
                                              );
                                      }
                                  }));
                    }
                    function zi(e, t) {
                        var n;
                        if (
                            ((zt = m("body")[0]),
                            (Nt = m("html")[0]),
                            (Wt = m("html, body")),
                            !y(Nt, Le))
                        )
                            return (
                                "touchWrapper",
                                (n = "string" == typeof e ? m(e)[0] : e),
                                (dt.touchWrapper = n),
                                (function (e) {
                                    (mt = g({}, dt, e)),
                                        (pt = Object.assign({}, mt));
                                })(t),
                                (function (e) {
                                    ht = e;
                                })("string" == typeof e ? m(e)[0] : e),
                                de.emit(me.onInitialise),
                                Fi(),
                                (f.getFullpageData = function () {
                                    return {
                                        options: yt(),
                                    };
                                }),
                                (f.version = "4.0.20"),
                                (f.test = Object.assign(f.test, {
                                    top: "0px",
                                    translate3d: "translate3d(0px, 0px, 0px)",
                                    translate3dH: (function () {
                                        for (
                                            var e = [], t = 0;
                                            t <
                                            m(yt().sectionSelector, gt())
                                                .length;
                                            t++
                                        )
                                            e.push(
                                                "translate3d(0px, 0px, 0px)"
                                            );
                                        return e;
                                    })(),
                                    left: (function () {
                                        for (
                                            var e = [], t = 0;
                                            t <
                                            m(yt().sectionSelector, gt())
                                                .length;
                                            t++
                                        )
                                            e.push(0);
                                        return e;
                                    })(),
                                    options: yt(),
                                    setAutoScrolling: null,
                                })),
                                (f.shared = Object.assign(f.shared, {
                                    afterRenderActions: null,
                                    isNormalScrollElement: !1,
                                })),
                                (i.fullpage_api = f),
                                gt() &&
                                    (de.emit(me.beforeInit),
                                    qi(),
                                    de.emit(me.bindEvents)),
                                i.fullpage_api
                            );
                        Fi();
                    }
                    return (
                        (i.fp_easings = g(i.fp_easings, {
                            easeInOutCubic: function (e, t, n, o) {
                                return (e /= o / 2) < 1
                                    ? (n / 2) * e * e * e + t
                                    : (n / 2) * ((e -= 2) * e * e + 2) + t;
                            },
                        })),
                        i.jQuery &&
                            (function (e, t) {
                                e && t
                                    ? (e.fn.fullpage = function (n) {
                                          (n = e.extend({}, n, {
                                              $: e,
                                          })),
                                              new t(this[0], n),
                                              Object.keys(f).forEach(function (
                                                  e
                                              ) {
                                                  yt().$.fn.fullpage[e] = f[e];
                                              });
                                      })
                                    : h(
                                          "error",
                                          "jQuery is required to use the jQuery fullpage adapter!"
                                      );
                            })(i.jQuery, zi),
                        zi
                    );
                }),
                    "object" === l(t)
                        ? (e.exports = r())
                        : void 0 ===
                              (i =
                                  "function" == typeof (o = r)
                                      ? o.call(t, n, t, e)
                                      : o) || (e.exports = i);
            },
        },
        t = {};
    function n(o) {
        var i = t[o];
        if (void 0 !== i) return i.exports;
        var r = (t[o] = {
            exports: {},
        });
        return e[o].call(r.exports, r, r.exports, n), r.exports;
    }
    (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return (
            n.d(t, {
                a: t,
            }),
            t
        );
    }),
        (n.d = (e, t) => {
            for (var o in t)
                n.o(t, o) &&
                    !n.o(e, o) &&
                    Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: t[o],
                    });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            "use strict";
            var e = n(993),
                t = n.n(e);
            function o(e) {
                return (
                    (o =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    o(e)
                );
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(
                            e,
                            (void 0,
                            (r = (function (e, t) {
                                if ("object" !== o(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var i = n.call(e, "string");
                                    if ("object" !== o(i)) return i;
                                    throw new TypeError(
                                        "@@toPrimitive must return a primitive value."
                                    );
                                }
                                return String(e);
                            })(i.key)),
                            "symbol" === o(r) ? r : String(r)),
                            i
                        );
                }
                var r;
            }
            function r(e, t, n) {
                return (
                    t && i(e.prototype, t),
                    n && i(e, n),
                    Object.defineProperty(e, "prototype", {
                        writable: !1,
                    }),
                    e
                );
            }
            var l = r(function e() {
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.canvas = document.getElementById("main__canvas")),
                        (this.ctx = this.canvas.getContext("2d")),
                        (this.dpr = devicePixelRatio),
                        (this.fps = 60),
                        (this.interval = 1e3 / this.fps),
                        (this.canvasWidth = innerWidth),
                        (this.canvasHeight = innerHeight);
                }),
                c = function (e, t) {
                    return Math.random() * (t - e) + e;
                };
            function a(e) {
                return (
                    (a =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    a(e)
                );
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            e,
                            (void 0,
                            (i = (function (e, t) {
                                if ("object" !== a(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var o = n.call(e, "string");
                                    if ("object" !== a(o)) return o;
                                    throw new TypeError(
                                        "@@toPrimitive must return a primitive value."
                                    );
                                }
                                return String(e);
                            })(o.key)),
                            "symbol" === a(i) ? i : String(i)),
                            o
                        );
                }
                var i;
            }
            function u(e, t) {
                return (
                    (u = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    u(e, t)
                );
            }
            function f(e) {
                return (
                    (f = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    f(e)
                );
            }
            var d = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError(
                            "Super expression must either be null or a function"
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        Object.defineProperty(e, "prototype", {
                            writable: !1,
                        }),
                        t && u(e, t);
                })(l, e);
                var t,
                    n,
                    o,
                    i,
                    r =
                        ((o = l),
                        (i = (function () {
                            if (
                                "undefined" == typeof Reflect ||
                                !Reflect.construct
                            )
                                return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(
                                        Reflect.construct(
                                            Boolean,
                                            [],
                                            function () {}
                                        )
                                    ),
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                t = f(o);
                            if (i) {
                                var n = f(this).constructor;
                                e = Reflect.construct(t, arguments, n);
                            } else e = t.apply(this, arguments);
                            return (function (e, t) {
                                if (
                                    t &&
                                    ("object" === a(t) ||
                                        "function" == typeof t)
                                )
                                    return t;
                                if (void 0 !== t)
                                    throw new TypeError(
                                        "Derived constructors may only return object or undefined"
                                    );
                                return (function (e) {
                                    if (void 0 === e)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        );
                                    return e;
                                })(e);
                            })(this, e);
                        });
                function l(e, t, n, o, i, a, s, u) {
                    var f;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, l),
                        ((f = r.call(this)).x = e),
                        (f.y = t),
                        (f.r = n),
                        (f.centerX = o),
                        (f.centerY = i),
                        (f.radian = a),
                        (f.degree = s),
                        (f.speed = (Math.PI / 180) * c(0, 0.2)),
                        (f.opacity = u),
                        (f.vOpacity = c(0.01, 0.03)),
                        f
                    );
                }
                return (
                    (t = l),
                    (n = [
                        {
                            key: "update",
                            value: function () {
                                (this.degree += this.speed),
                                    (this.x =
                                        this.radian * Math.cos(this.degree) +
                                        this.centerX),
                                    (this.y =
                                        this.radian * Math.sin(this.degree) +
                                        this.centerY),
                                    (this.opacity += this.vOpacity),
                                    (this.opacity >= 1 || this.opacity <= 0) &&
                                        (this.vOpacity = -this.vOpacity);
                            },
                        },
                        {
                            key: "draw",
                            value: function () {
                                (this.ctx.fillStyle =
                                    "rgba(255, 255, 255, ".concat(
                                        this.opacity,
                                        ")"
                                    )),
                                    this.ctx.beginPath(),
                                    this.ctx.arc(
                                        this.x,
                                        this.y,
                                        this.r,
                                        0,
                                        2 * Math.PI
                                    ),
                                    this.ctx.fill(),
                                    this.ctx.closePath();
                            },
                        },
                    ]) && s(t.prototype, n),
                    Object.defineProperty(t, "prototype", {
                        writable: !1,
                    }),
                    l
                );
            })(l);
            function h(e) {
                return (
                    (h =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    h(e)
                );
            }
            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            e,
                            (void 0,
                            (i = (function (e, t) {
                                if ("object" !== h(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var o = n.call(e, "string");
                                    if ("object" !== h(o)) return o;
                                    throw new TypeError(
                                        "@@toPrimitive must return a primitive value."
                                    );
                                }
                                return String(e);
                            })(o.key)),
                            "symbol" === h(i) ? i : String(i)),
                            o
                        );
                }
                var i;
            }
            function p(e, t, n) {
                return (
                    t && v(e.prototype, t),
                    n && v(e, n),
                    Object.defineProperty(e, "prototype", {
                        writable: !1,
                    }),
                    e
                );
            }
            var m = p(function e() {
                !(function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, e),
                    (this.canvas = document.getElementById("history__canvas")),
                    (this.ctx = this.canvas.getContext("2d")),
                    (this.dpr = devicePixelRatio),
                    (this.fps = 60),
                    (this.interval = 1e3 / this.fps),
                    (this.canvasWidth = 550),
                    (this.canvasHeight = 660);
            });
            function g(e) {
                return (
                    (g =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    g(e)
                );
            }
            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            e,
                            (void 0,
                            (i = (function (e, t) {
                                if ("object" !== g(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var o = n.call(e, "string");
                                    if ("object" !== g(o)) return o;
                                    throw new TypeError(
                                        "@@toPrimitive must return a primitive value."
                                    );
                                }
                                return String(e);
                            })(o.key)),
                            "symbol" === g(i) ? i : String(i)),
                            o
                        );
                }
                var i;
            }
            function S(e, t) {
                return (
                    (S = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    S(e, t)
                );
            }
            function b(e) {
                return (
                    (b = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    b(e)
                );
            }
            var w = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError(
                            "Super expression must either be null or a function"
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        Object.defineProperty(e, "prototype", {
                            writable: !1,
                        }),
                        t && S(e, t);
                })(l, e);
                var t,
                    n,
                    o,
                    i,
                    r =
                        ((o = l),
                        (i = (function () {
                            if (
                                "undefined" == typeof Reflect ||
                                !Reflect.construct
                            )
                                return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(
                                        Reflect.construct(
                                            Boolean,
                                            [],
                                            function () {}
                                        )
                                    ),
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                t = b(o);
                            if (i) {
                                var n = b(this).constructor;
                                e = Reflect.construct(t, arguments, n);
                            } else e = t.apply(this, arguments);
                            return (function (e, t) {
                                if (
                                    t &&
                                    ("object" === g(t) ||
                                        "function" == typeof t)
                                )
                                    return t;
                                if (void 0 !== t)
                                    throw new TypeError(
                                        "Derived constructors may only return object or undefined"
                                    );
                                return (function (e) {
                                    if (void 0 === e)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        );
                                    return e;
                                })(e);
                            })(this, e);
                        });
                function l(e, t, n, o, i, c) {
                    var a;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, l),
                        ((a = r.call(this)).x = e),
                        (a.y = t),
                        (a.width = n),
                        (a.height = o),
                        (a.vw = i),
                        (a.vh = c),
                        a
                    );
                }
                return (
                    (t = l),
                    (n = [
                        {
                            key: "update",
                            value: function () {
                                (this.width += this.vw),
                                    (this.width > 150 || this.width < -150) &&
                                        (this.vw = 0),
                                    (this.height += this.vh),
                                    this.height > 555 && (this.vh = 0);
                            },
                        },
                        {
                            key: "draw",
                            value: function () {
                                (this.ctx.fillStyle = "#ffffff"),
                                    this.ctx.beginPath(),
                                    this.ctx.rect(
                                        this.x,
                                        this.y,
                                        this.width,
                                        this.height
                                    ),
                                    this.ctx.fill(),
                                    this.ctx.closePath();
                            },
                        },
                    ]) && y(t.prototype, n),
                    Object.defineProperty(t, "prototype", {
                        writable: !1,
                    }),
                    l
                );
            })(m);
            function x(e) {
                return (
                    (x =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    x(e)
                );
            }
            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            e,
                            (void 0,
                            (i = (function (e, t) {
                                if ("object" !== x(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var o = n.call(e, "string");
                                    if ("object" !== x(o)) return o;
                                    throw new TypeError(
                                        "@@toPrimitive must return a primitive value."
                                    );
                                }
                                return String(e);
                            })(o.key)),
                            "symbol" === x(i) ? i : String(i)),
                            o
                        );
                }
                var i;
            }
            function A(e, t) {
                return (
                    (A = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    A(e, t)
                );
            }
            function L(e) {
                return (
                    (L = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    L(e)
                );
            }
            var T = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError(
                            "Super expression must either be null or a function"
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        Object.defineProperty(e, "prototype", {
                            writable: !1,
                        }),
                        t && A(e, t);
                })(l, e);
                var t,
                    n,
                    o,
                    i,
                    r =
                        ((o = l),
                        (i = (function () {
                            if (
                                "undefined" == typeof Reflect ||
                                !Reflect.construct
                            )
                                return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(
                                        Reflect.construct(
                                            Boolean,
                                            [],
                                            function () {}
                                        )
                                    ),
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                t = L(o);
                            if (i) {
                                var n = L(this).constructor;
                                e = Reflect.construct(t, arguments, n);
                            } else e = t.apply(this, arguments);
                            return (function (e, t) {
                                if (
                                    t &&
                                    ("object" === x(t) ||
                                        "function" == typeof t)
                                )
                                    return t;
                                if (void 0 !== t)
                                    throw new TypeError(
                                        "Derived constructors may only return object or undefined"
                                    );
                                return (function (e) {
                                    if (void 0 === e)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        );
                                    return e;
                                })(e);
                            })(this, e);
                        });
                function l(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, l),
                        ((t = r.call(this)).y = e),
                        (t.r = 2),
                        (t.vr = 0.2),
                        (t.radian = 0),
                        (t.vRadian = 0.2),
                        t
                    );
                }
                return (
                    (t = l),
                    (n = [
                        {
                            key: "update",
                            value: function () {
                                (this.r += this.vr),
                                    this.r > 9 && (this.vr = 0),
                                    (this.radian += this.vRadian),
                                    this.radian > (Math.PI / 180) * 270 &&
                                        ((this.radian =
                                            (Math.PI / 180) * 269.9),
                                        (this.vRadian = 0));
                            },
                        },
                        {
                            key: "draw",
                            value: function () {
                                (this.fillStyle = "#ffffff"),
                                    this.ctx.beginPath(),
                                    this.ctx.arc(
                                        276,
                                        this.y,
                                        this.r,
                                        0,
                                        2 * Math.PI
                                    ),
                                    this.ctx.fill(),
                                    this.ctx.closePath(),
                                    (this.ctx.strokeStyle = "#ffffff"),
                                    (this.ctx.lineWidth = 2),
                                    this.ctx.beginPath(),
                                    this.ctx.arc(
                                        276,
                                        this.y,
                                        20,
                                        (Math.PI / 180) * 270,
                                        this.radian
                                    ),
                                    this.ctx.stroke(),
                                    this.ctx.closePath();
                            },
                        },
                    ]) && E(t.prototype, n),
                    Object.defineProperty(t, "prototype", {
                        writable: !1,
                    }),
                    l
                );
            })(m);
            function O(e) {
                return (
                    (O =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    O(e)
                );
            }
            function _() {
                _ = function () {
                    return e;
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    o =
                        Object.defineProperty ||
                        function (e, t, n) {
                            e[t] = n.value;
                        },
                    i = "function" == typeof Symbol ? Symbol : {},
                    r = i.iterator || "@@iterator",
                    l = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";
                function a(e, t, n) {
                    return (
                        Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        }),
                        e[t]
                    );
                }
                try {
                    a({}, "");
                } catch (e) {
                    a = function (e, t, n) {
                        return (e[t] = n);
                    };
                }
                function s(e, t, n, i) {
                    var r = t && t.prototype instanceof d ? t : d,
                        l = Object.create(r.prototype),
                        c = new L(i || []);
                    return (
                        o(l, "_invoke", {
                            value: w(e, n, c),
                        }),
                        l
                    );
                }
                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n),
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e,
                        };
                    }
                }
                e.wrap = s;
                var f = {};
                function d() {}
                function h() {}
                function v() {}
                var p = {};
                a(p, r, function () {
                    return this;
                });
                var m = Object.getPrototypeOf,
                    g = m && m(m(T([])));
                g && g !== t && n.call(g, r) && (p = g);
                var y = (v.prototype = d.prototype = Object.create(p));
                function S(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                        a(e, t, function (e) {
                            return this._invoke(t, e);
                        });
                    });
                }
                function b(e, t) {
                    function i(o, r, l, c) {
                        var a = u(e[o], e, r);
                        if ("throw" !== a.type) {
                            var s = a.arg,
                                f = s.value;
                            return f && "object" == O(f) && n.call(f, "__await")
                                ? t.resolve(f.__await).then(
                                      function (e) {
                                          i("next", e, l, c);
                                      },
                                      function (e) {
                                          i("throw", e, l, c);
                                      }
                                  )
                                : t.resolve(f).then(
                                      function (e) {
                                          (s.value = e), l(s);
                                      },
                                      function (e) {
                                          return i("throw", e, l, c);
                                      }
                                  );
                        }
                        c(a.arg);
                    }
                    var r;
                    o(this, "_invoke", {
                        value: function (e, n) {
                            function o() {
                                return new t(function (t, o) {
                                    i(e, n, t, o);
                                });
                            }
                            return (r = r ? r.then(o, o) : o());
                        },
                    });
                }
                function w(e, t, n) {
                    var o = "suspendedStart";
                    return function (i, r) {
                        if ("executing" === o)
                            throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === i) throw r;
                            return {
                                value: void 0,
                                done: !0,
                            };
                        }
                        for (n.method = i, n.arg = r; ; ) {
                            var l = n.delegate;
                            if (l) {
                                var c = x(l, n);
                                if (c) {
                                    if (c === f) continue;
                                    return c;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === o)
                                    throw ((o = "completed"), n.arg);
                                n.dispatchException(n.arg);
                            } else
                                "return" === n.method &&
                                    n.abrupt("return", n.arg);
                            o = "executing";
                            var a = u(e, t, n);
                            if ("normal" === a.type) {
                                if (
                                    ((o = n.done
                                        ? "completed"
                                        : "suspendedYield"),
                                    a.arg === f)
                                )
                                    continue;
                                return {
                                    value: a.arg,
                                    done: n.done,
                                };
                            }
                            "throw" === a.type &&
                                ((o = "completed"),
                                (n.method = "throw"),
                                (n.arg = a.arg));
                        }
                    };
                }
                function x(e, t) {
                    var n = t.method,
                        o = e.iterator[n];
                    if (void 0 === o)
                        return (
                            (t.delegate = null),
                            ("throw" === n &&
                                e.iterator.return &&
                                ((t.method = "return"),
                                (t.arg = void 0),
                                x(e, t),
                                "throw" === t.method)) ||
                                ("return" !== n &&
                                    ((t.method = "throw"),
                                    (t.arg = new TypeError(
                                        "The iterator does not provide a '" +
                                            n +
                                            "' method"
                                    )))),
                            f
                        );
                    var i = u(o, e.iterator, t.arg);
                    if ("throw" === i.type)
                        return (
                            (t.method = "throw"),
                            (t.arg = i.arg),
                            (t.delegate = null),
                            f
                        );
                    var r = i.arg;
                    return r
                        ? r.done
                            ? ((t[e.resultName] = r.value),
                              (t.next = e.nextLoc),
                              "return" !== t.method &&
                                  ((t.method = "next"), (t.arg = void 0)),
                              (t.delegate = null),
                              f)
                            : r
                        : ((t.method = "throw"),
                          (t.arg = new TypeError(
                              "iterator result is not an object"
                          )),
                          (t.delegate = null),
                          f);
                }
                function E(e) {
                    var t = {
                        tryLoc: e[0],
                    };
                    1 in e && (t.catchLoc = e[1]),
                        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                        this.tryEntries.push(t);
                }
                function A(e) {
                    var t = e.completion || {};
                    (t.type = "normal"), delete t.arg, (e.completion = t);
                }
                function L(e) {
                    (this.tryEntries = [
                        {
                            tryLoc: "root",
                        },
                    ]),
                        e.forEach(E, this),
                        this.reset(!0);
                }
                function T(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function t() {
                                    for (; ++o < e.length; )
                                        if (n.call(e, o))
                                            return (
                                                (t.value = e[o]),
                                                (t.done = !1),
                                                t
                                            );
                                    return (t.value = void 0), (t.done = !0), t;
                                };
                            return (i.next = i);
                        }
                    }
                    return {
                        next: P,
                    };
                }
                function P() {
                    return {
                        value: void 0,
                        done: !0,
                    };
                }
                return (
                    (h.prototype = v),
                    o(y, "constructor", {
                        value: v,
                        configurable: !0,
                    }),
                    o(v, "constructor", {
                        value: h,
                        configurable: !0,
                    }),
                    (h.displayName = a(v, c, "GeneratorFunction")),
                    (e.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return (
                            !!t &&
                            (t === h ||
                                "GeneratorFunction" ===
                                    (t.displayName || t.name))
                        );
                    }),
                    (e.mark = function (e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, v)
                                : ((e.__proto__ = v),
                                  a(e, c, "GeneratorFunction")),
                            (e.prototype = Object.create(y)),
                            e
                        );
                    }),
                    (e.awrap = function (e) {
                        return {
                            __await: e,
                        };
                    }),
                    S(b.prototype),
                    a(b.prototype, l, function () {
                        return this;
                    }),
                    (e.AsyncIterator = b),
                    (e.async = function (t, n, o, i, r) {
                        void 0 === r && (r = Promise);
                        var l = new b(s(t, n, o, i), r);
                        return e.isGeneratorFunction(n)
                            ? l
                            : l.next().then(function (e) {
                                  return e.done ? e.value : l.next();
                              });
                    }),
                    S(y),
                    a(y, c, "Generator"),
                    a(y, r, function () {
                        return this;
                    }),
                    a(y, "toString", function () {
                        return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                        var t = Object(e),
                            n = [];
                        for (var o in t) n.push(o);
                        return (
                            n.reverse(),
                            function e() {
                                for (; n.length; ) {
                                    var o = n.pop();
                                    if (o in t)
                                        return (e.value = o), (e.done = !1), e;
                                }
                                return (e.done = !0), e;
                            }
                        );
                    }),
                    (e.values = T),
                    (L.prototype = {
                        constructor: L,
                        reset: function (e) {
                            if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = void 0),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = "next"),
                                (this.arg = void 0),
                                this.tryEntries.forEach(A),
                                !e)
                            )
                                for (var t in this)
                                    "t" === t.charAt(0) &&
                                        n.call(this, t) &&
                                        !isNaN(+t.slice(1)) &&
                                        (this[t] = void 0);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var t = this;
                            function o(n, o) {
                                return (
                                    (l.type = "throw"),
                                    (l.arg = e),
                                    (t.next = n),
                                    o &&
                                        ((t.method = "next"), (t.arg = void 0)),
                                    !!o
                                );
                            }
                            for (
                                var i = this.tryEntries.length - 1;
                                i >= 0;
                                --i
                            ) {
                                var r = this.tryEntries[i],
                                    l = r.completion;
                                if ("root" === r.tryLoc) return o("end");
                                if (r.tryLoc <= this.prev) {
                                    var c = n.call(r, "catchLoc"),
                                        a = n.call(r, "finallyLoc");
                                    if (c && a) {
                                        if (this.prev < r.catchLoc)
                                            return o(r.catchLoc, !0);
                                        if (this.prev < r.finallyLoc)
                                            return o(r.finallyLoc);
                                    } else if (c) {
                                        if (this.prev < r.catchLoc)
                                            return o(r.catchLoc, !0);
                                    } else {
                                        if (!a)
                                            throw new Error(
                                                "try statement without catch or finally"
                                            );
                                        if (this.prev < r.finallyLoc)
                                            return o(r.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (
                                var o = this.tryEntries.length - 1;
                                o >= 0;
                                --o
                            ) {
                                var i = this.tryEntries[o];
                                if (
                                    i.tryLoc <= this.prev &&
                                    n.call(i, "finallyLoc") &&
                                    this.prev < i.finallyLoc
                                ) {
                                    var r = i;
                                    break;
                                }
                            }
                            r &&
                                ("break" === e || "continue" === e) &&
                                r.tryLoc <= t &&
                                t <= r.finallyLoc &&
                                (r = null);
                            var l = r ? r.completion : {};
                            return (
                                (l.type = e),
                                (l.arg = t),
                                r
                                    ? ((this.method = "next"),
                                      (this.next = r.finallyLoc),
                                      f)
                                    : this.complete(l)
                            );
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return (
                                "break" === e.type || "continue" === e.type
                                    ? (this.next = e.arg)
                                    : "return" === e.type
                                    ? ((this.rval = this.arg = e.arg),
                                      (this.method = "return"),
                                      (this.next = "end"))
                                    : "normal" === e.type &&
                                      t &&
                                      (this.next = t),
                                f
                            );
                        },
                        finish: function (e) {
                            for (
                                var t = this.tryEntries.length - 1;
                                t >= 0;
                                --t
                            ) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e)
                                    return (
                                        this.complete(n.completion, n.afterLoc),
                                        A(n),
                                        f
                                    );
                            }
                        },
                        catch: function (e) {
                            for (
                                var t = this.tryEntries.length - 1;
                                t >= 0;
                                --t
                            ) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var o = n.completion;
                                    if ("throw" === o.type) {
                                        var i = o.arg;
                                        A(n);
                                    }
                                    return i;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, t, n) {
                            return (
                                (this.delegate = {
                                    iterator: T(e),
                                    resultName: t,
                                    nextLoc: n,
                                }),
                                "next" === this.method && (this.arg = void 0),
                                f
                            );
                        },
                    }),
                    e
                );
            }
            function P(e, t, n, o, i, r, l) {
                try {
                    var c = e[r](l),
                        a = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(a) : Promise.resolve(a).then(o, i);
            }
            function M(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise(function (o, i) {
                        var r = e.apply(t, n);
                        function l(e) {
                            P(r, o, i, l, c, "next", e);
                        }
                        function c(e) {
                            P(r, o, i, l, c, "throw", e);
                        }
                        l(void 0);
                    });
                };
            }
            function k(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function j(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            e,
                            (void 0,
                            (i = (function (e, t) {
                                if ("object" !== O(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var o = n.call(e, "string");
                                    if ("object" !== O(o)) return o;
                                    throw new TypeError(
                                        "@@toPrimitive must return a primitive value."
                                    );
                                }
                                return String(e);
                            })(o.key)),
                            "symbol" === O(i) ? i : String(i)),
                            o
                        );
                }
                var i;
            }
            function B(e, t, n) {
                return (
                    t && j(e.prototype, t),
                    n && j(e, n),
                    Object.defineProperty(e, "prototype", {
                        writable: !1,
                    }),
                    e
                );
            }
            function R(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function"
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                    Object.defineProperty(e, "prototype", {
                        writable: !1,
                    }),
                    t && C(e, t);
            }
            function C(e, t) {
                return (
                    (C = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    C(e, t)
                );
            }
            function I(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = D(e);
                    if (t) {
                        var i = D(this).constructor;
                        n = Reflect.construct(o, arguments, i);
                    } else n = o.apply(this, arguments);
                    return (function (e, t) {
                        if (t && ("object" === O(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        return (function (e) {
                            if (void 0 === e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return e;
                        })(e);
                    })(this, n);
                };
            }
            function D(e) {
                return (
                    (D = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    D(e)
                );
            }
            var q = function (e) {
                    (e.style.opacity = 1),
                        (e.style.transform = "translateY(0px)");
                },
                H = function (e) {
                    (e.style.opacity = 0),
                        (e.style.transform = "translateY(80px)");
                },
                F = function (e, t) {
                    return new Promise(function (n) {
                        setTimeout(function () {
                            t(), n();
                        }, e);
                    });
                };
            function z(e, t, n, o) {
                var i = null;
                window.requestAnimationFrame(function r(l) {
                    i || (i = l);
                    var c = Math.min((l - i) / o, 1),
                        a = Math.floor(c * (n - t) + t);
                    (e.innerHTML = a.toLocaleString()),
                        c < 1 && window.requestAnimationFrame(r);
                });
            }
            var N = new ((function (e) {
                    R(n, e);
                    var t = I(n);
                    function n() {
                        var e;
                        return (
                            k(this, n),
                            ((e = t.call(this)).particles = []),
                            (e.PARTICLE_NUM = 1500),
                            e.req,
                            e
                        );
                    }
                    return (
                        B(n, [
                            {
                                key: "init",
                                value: function () {
                                    (this.canvasWidth = innerWidth),
                                        (this.canvasHeight = innerHeight),
                                        (this.canvas.width =
                                            this.canvasWidth * this.dpr),
                                        (this.canvas.height =
                                            this.canvasHeight * this.dpr),
                                        this.ctx.scale(this.dpr, this.dpr),
                                        (this.canvas.style.width =
                                            this.canvasWidth + "px"),
                                        (this.canvas.style.height =
                                            this.canvasHeight + "px"),
                                        this.particles.length <
                                            this.PARTICLE_NUM &&
                                            this.createParticles();
                                },
                            },
                            {
                                key: "createParticle",
                                value: function () {
                                    var e = c(0.1, 1.2),
                                        t = this.canvasWidth / 2,
                                        n = this.canvasHeight / 2,
                                        o = (function (e, t) {
                                            return Math.sqrt(
                                                Math.pow(e, 2) + Math.pow(t, 2)
                                            );
                                        })(t, n),
                                        i = c(e, o),
                                        r = (Math.PI / 180) * c(0, 360),
                                        l = i * Math.cos(r),
                                        a = i * Math.sin(r);
                                    this.particles.push(
                                        new d(l, a, e, t, n, i, r, 0.01)
                                    );
                                },
                            },
                            {
                                key: "createParticles",
                                value: function () {
                                    for (var e = 0; e < this.PARTICLE_NUM; e++)
                                        this.createParticle();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        t,
                                        n = this,
                                        o = Date.now();
                                    requestAnimationFrame(function i() {
                                        (n.req = requestAnimationFrame(i)),
                                            (e = Date.now()),
                                            (t = e - o) < n.interval ||
                                                (n.ctx.clearRect(
                                                    0,
                                                    0,
                                                    n.canvasWidth,
                                                    n.canvasHeight
                                                ),
                                                n.particles.forEach(function (
                                                    e,
                                                    t
                                                ) {
                                                    e.update(),
                                                        e.draw(),
                                                        e.opacity < 0 &&
                                                            (n.particles.splice(
                                                                t,
                                                                1
                                                            ),
                                                            n.createParticle());
                                                }),
                                                (o = e - (t % n.interval)));
                                    });
                                },
                            },
                            {
                                key: "clear",
                                value: function () {
                                    cancelAnimationFrame(this.req),
                                        this.ctx.clearRect(
                                            0,
                                            0,
                                            this.canvasWidth,
                                            this.canvasHeight
                                        );
                                },
                            },
                        ]),
                        n
                    );
                })(l))(),
                W = new ((function (e) {
                    R(n, e);
                    var t = I(n);
                    function n() {
                        return k(this, n), t.call(this);
                    }
                    return (
                        B(n, [
                            {
                                key: "init",
                                value: function () {
                                    (this.canvas.width =
                                        this.canvasWidth * this.dpr),
                                        (this.canvas.height =
                                            this.canvasHeight * this.dpr),
                                        this.ctx.scale(this.dpr, this.dpr),
                                        (this.canvas.style.width =
                                            this.canvasWidth + "px"),
                                        (this.canvas.style.height =
                                            this.canvasHeight + "px"),
                                        (this.verticalBar = new w(
                                            275,
                                            50,
                                            2,
                                            2,
                                            0,
                                            8
                                        )),
                                        (this.horizontalBars = []),
                                        this.horizontalBars.push(
                                            new w(275, 50, 2, 2, 4, 0)
                                        ),
                                        this.horizontalBars.push(
                                            new w(275, 190, 2, 2, -4, 0)
                                        ),
                                        this.horizontalBars.push(
                                            new w(275, 330, 2, 2, 4, 0)
                                        ),
                                        this.horizontalBars.push(
                                            new w(275, 470, 2, 2, -4, 0)
                                        ),
                                        this.horizontalBars.push(
                                            new w(275, 610, 2, 2, 4, 0)
                                        ),
                                        (this.particles = []),
                                        this.particles.push(new T(52)),
                                        this.particles.push(new T(190)),
                                        this.particles.push(new T(330)),
                                        this.particles.push(new T(470)),
                                        this.particles.push(new T(610)),
                                        this.req;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        t,
                                        n = this,
                                        o = Date.now();
                                    requestAnimationFrame(function i() {
                                        (n.req = requestAnimationFrame(i)),
                                            (e = Date.now()),
                                            (t = e - o) < n.interval ||
                                                (n.ctx.clearRect(
                                                    0,
                                                    0,
                                                    550,
                                                    660
                                                ),
                                                n.verticalBar.update(),
                                                n.verticalBar.draw(),
                                                n.verticalBar.height > 2 &&
                                                    (n.horizontalBars[0].update(),
                                                    n.horizontalBars[0].draw(),
                                                    n.particles[0].update(),
                                                    n.particles[0].draw()),
                                                n.verticalBar.height > 192 &&
                                                    (n.horizontalBars[1].update(),
                                                    n.horizontalBars[1].draw(),
                                                    n.particles[1].update(),
                                                    n.particles[1].draw()),
                                                n.verticalBar.height > 332 &&
                                                    (n.horizontalBars[2].update(),
                                                    n.horizontalBars[2].draw(),
                                                    n.particles[2].update(),
                                                    n.particles[2].draw()),
                                                n.verticalBar.height > 472 &&
                                                    (n.horizontalBars[3].update(),
                                                    n.horizontalBars[3].draw(),
                                                    n.particles[3].update(),
                                                    n.particles[3].draw()),
                                                n.verticalBar.height > 555 &&
                                                    (n.horizontalBars[4].update(),
                                                    n.horizontalBars[4].draw(),
                                                    n.particles[4].update(),
                                                    n.particles[4].draw()),
                                                (o = e - (t % n.interval)));
                                    });
                                },
                            },
                            {
                                key: "clear",
                                value: function () {
                                    cancelAnimationFrame(this.req),
                                        this.ctx.clearRect(0, 0, 550, 660);
                                },
                            },
                        ]),
                        n
                    );
                })(m))();
            window.addEventListener("resize", function () {
                N.init(), W.init();
            }),
                new (t())("#myFullpage", {
                    licenseKey: "IL277-2O54I-0PIT8-KQNEI-RSKTN",
                    credits: {
                        enabled: !1,
                    },
                    navigation: !0,
                    verticalCentered: !1,
                    css3: !1,
                    afterLoad: function (e, t, n) {
                        if (
                            (0 == t.index
                                ? (N.init(),
                                  N.render(),
                                  document
                                      .querySelectorAll(".main__text-box img")
                                      .forEach(function (e) {
                                          q(e);
                                      }),
                                  document
                                      .querySelectorAll(".main__text-box p")
                                      .forEach(function (e) {
                                          q(e);
                                      }))
                                : e &&
                                  0 == e.index &&
                                  (N.clear(),
                                  document
                                      .querySelectorAll(".main__text-box img")
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelectorAll(".main__text-box p")
                                      .forEach(function (e) {
                                          H(e);
                                      })),
                            1 == t.index
                                ? document
                                      .querySelectorAll(".links__title p")
                                      .forEach(function (e) {
                                          q(e);
                                      })
                                : e &&
                                  1 == e.index &&
                                  document
                                      .querySelectorAll(".links__title p")
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                            2 == t.index
                                ? (document
                                      .querySelectorAll(".history__title p")
                                      .forEach(function (e) {
                                          q(e);
                                      }),
                                  W.init(),
                                  W.render(),
                                  M(
                                      _().mark(function e() {
                                          return _().wrap(function (e) {
                                              for (;;)
                                                  switch ((e.prev = e.next)) {
                                                      case 0:
                                                          return (
                                                              (e.next = 2),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".history__text-box .line-1 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 2:
                                                          return (
                                                              (e.next = 4),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".history__text-box .line-2 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 4:
                                                          return (
                                                              (e.next = 6),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".history__text-box .line-3 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 6:
                                                          return (
                                                              (e.next = 8),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".history__text-box .line-4 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 8:
                                                          return (
                                                              (e.next = 10),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".history__text-box .line-5 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 10:
                                                      case "end":
                                                          return e.stop();
                                                  }
                                          }, e);
                                      })
                                  )())
                                : e &&
                                  2 == e.index &&
                                  (W.clear(),
                                  document
                                      .querySelectorAll(".history__title p")
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelectorAll(
                                          ".history__text-box .line-1 p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelectorAll(
                                          ".history__text-box .line-2 p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelectorAll(
                                          ".history__text-box .line-3 p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelectorAll(
                                          ".history__text-box .line-4 p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelectorAll(
                                          ".history__text-box .line-5 p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      })),
                            3 == t.index)
                        ) {
                            q(
                                document.querySelector(
                                    ".accomplishment-title p"
                                )
                            );
                            var o = document.getElementById("4,000"),
                                i = document.getElementById("50"),
                                r = document.getElementById("300"),
                                l = document.getElementById("15,000"),
                                c = document.getElementById("100"),
                                a = document.getElementById("934");
                            setTimeout(function () {
                                z(o, 0, 4e3, 1500),
                                    z(i, 0, 50, 1500),
                                    z(r, 0, 300, 1500),
                                    z(l, 0, 15e3, 1500),
                                    z(c, 0, 100, 1500),
                                    z(a, 0, 934, 1500);
                            }, 50),
                                document
                                    .querySelectorAll(".accplisshment__contant")
                                    .forEach(function (e) {
                                        e.classList.add("scale"),
                                            (e.style.opacity = 1);
                                    });
                        } else
                            e &&
                                3 == e.index &&
                                (H(
                                    document.querySelector(
                                        ".accomplishment-title p"
                                    )
                                ),
                                document
                                    .querySelectorAll("accomplishment-counter")
                                    .forEach(function (e) {
                                        e.innerHTML = "0";
                                    }),
                                document
                                    .querySelectorAll(".accplisshment__contant")
                                    .forEach(function (e) {
                                        e.classList.remove("scale"),
                                            (e.style.opacity = 0);
                                    }));
                        4 == t.index
                            ? (q(document.querySelector(".platform__title p")),
                              document
                                  .querySelectorAll(".platform-palette img")
                                  .forEach(function (e) {
                                      q(e);
                                  }),
                              M(
                                  _().mark(function e() {
                                      return _().wrap(function (e) {
                                          for (;;)
                                              switch ((e.prev = e.next)) {
                                                  case 0:
                                                      return (
                                                          (e.next = 2),
                                                          F(400, function () {
                                                              document
                                                                  .querySelectorAll(
                                                                      ".platform-light img"
                                                                  )
                                                                  .forEach(
                                                                      function (
                                                                          e
                                                                      ) {
                                                                          e.style.opacity = 1;
                                                                      }
                                                                  ),
                                                                  document
                                                                      .querySelectorAll(
                                                                          ".contant__text-wrapper p"
                                                                      )
                                                                      .forEach(
                                                                          function (
                                                                              e
                                                                          ) {
                                                                              q(
                                                                                  e
                                                                              );
                                                                          }
                                                                      );
                                                          })
                                                      );
                                                  case 2:
                                                      return (
                                                          (e.next = 4),
                                                          F(200, function () {
                                                              return document
                                                                  .querySelectorAll(
                                                                      ".contant__pannel"
                                                                  )
                                                                  .forEach(
                                                                      function (
                                                                          e
                                                                      ) {
                                                                          q(e);
                                                                      }
                                                                  );
                                                          })
                                                      );
                                                  case 4:
                                                  case "end":
                                                      return e.stop();
                                              }
                                      }, e);
                                  })
                              )())
                            : e &&
                              4 == e.index &&
                              (H(document.querySelector(".platform__title p")),
                              document
                                  .querySelectorAll(".contant__pannel")
                                  .forEach(function (e) {
                                      H(e);
                                  }),
                              document
                                  .querySelectorAll(".contant__text-wrapper p")
                                  .forEach(function (e) {
                                      H(e);
                                  }),
                              document
                                  .querySelectorAll(".platform-light img")
                                  .forEach(function (e) {
                                      e.style.opacity = 0;
                                  }),
                              document
                                  .querySelectorAll(".platform-palette img")
                                  .forEach(function (e) {
                                      H(e);
                                  })),
                            5 == t.index
                                ? (q(
                                      document.querySelector(
                                          ".explanation__title p"
                                      )
                                  ),
                                  M(
                                      _().mark(function e() {
                                          return _().wrap(function (e) {
                                              for (;;)
                                                  switch ((e.prev = e.next)) {
                                                      case 0:
                                                          return (
                                                              (e.next = 2),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return q(
                                                                          document.querySelector(
                                                                              ".explanation__text-box .line-1 p"
                                                                          )
                                                                      );
                                                                  }
                                                              )
                                                          );
                                                      case 2:
                                                          return (
                                                              (e.next = 4),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".explanation__text-box .line-2 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 4:
                                                          return (
                                                              (e.next = 6),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".explanation__text-box .line-3 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 6:
                                                          return (
                                                              (e.next = 8),
                                                              F(
                                                                  150,
                                                                  function () {
                                                                      return document
                                                                          .querySelectorAll(
                                                                              ".explanation__text-box .line-4 p"
                                                                          )
                                                                          .forEach(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  q(
                                                                                      e
                                                                                  );
                                                                              }
                                                                          );
                                                                  }
                                                              )
                                                          );
                                                      case 8:
                                                      case "end":
                                                          return e.stop();
                                                  }
                                          }, e);
                                      })
                                  )(),
                                  document
                                      .getElementById("explanation")
                                      .classList.add("zoom-in"))
                                : e &&
                                  5 == e.index &&
                                  (H(
                                      document.querySelector(
                                          ".explanation__title p"
                                      )
                                  ),
                                  document
                                      .querySelectorAll(
                                          ".explanation__text-wrapper p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .getElementById("explanation")
                                      .classList.remove("zoom-in")),
                            6 == t.index
                                ? (q(
                                      document.querySelector(
                                          ".location__title p"
                                      )
                                  ),
                                  q(
                                      document.querySelector(
                                          ".location__map img"
                                      )
                                  ),
                                  document
                                      .querySelectorAll(
                                          ".location__map .text-wrapper p"
                                      )
                                      .forEach(function (e) {
                                          q(e);
                                      }),
                                  document
                                      .querySelector(".location__bottom img")
                                      .classList.add("closeUp"))
                                : e &&
                                  6 == e.index &&
                                  (H(
                                      document.querySelector(
                                          ".location__title p"
                                      )
                                  ),
                                  H(
                                      document.querySelector(
                                          ".location__map img"
                                      )
                                  ),
                                  document
                                      .querySelectorAll(
                                          ".location__map .text-wrapper p"
                                      )
                                      .forEach(function (e) {
                                          H(e);
                                      }),
                                  document
                                      .querySelector(".location__bottom img")
                                      .classList.remove("closeUp"));
                    },
                    onLeave: function (e, t, n) {
                        0 != t.index && 1 != t.index
                            ? t.item.classList.add("load-background")
                            : t.index;
                    },
                });
            var V = window.matchMedia("screen and (max-width: 840px"),
                U = document.querySelector(".links__wrapper"),
                Y = document.querySelector(".links__box_edu"),
                K = document.querySelector(".links__box_consult"),
                X = document.querySelector(".title-edu"),
                G = document.querySelector(".title-consult"),
                Q = document.querySelectorAll(".edu-icon"),
                $ = document.querySelectorAll(".consult-icon");
            V.matches ||
                (Y.addEventListener("mouseover", function () {
                    (Y.style.width = "65%"),
                        (K.style.width = "34.8%"),
                        X.classList.add("rising-left"),
                        Q.forEach(function (e) {
                            (e.style.display = "block"), e.classList.add("on");
                        });
                }),
                K.addEventListener("mouseover", function () {
                    (Y.style.width = "34.8%"),
                        (K.style.width = "65%"),
                        G.classList.add("rising-right"),
                        $.forEach(function (e) {
                            (e.style.display = "block"), e.classList.add("on");
                        });
                }),
                U.addEventListener("mouseout", function () {
                    (Y.style.width = "49.9%"),
                        (K.style.width = "49.9%"),
                        X.classList.remove("rising-left"),
                        G.classList.remove("rising-right"),
                        Q.forEach(function (e) {
                            e.style.display = "none";
                        }),
                        $.forEach(function (e) {
                            e.style.display = "none";
                        });
                }));
        })();
})();
