! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2733cd82-26af-4525-99ce-0b1296a4638e", e._sentryDebugIdIdentifier = "sentry-dbid-2733cd82-26af-4525-99ce-0b1296a4638e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [197], {
        92099: function(e, t, r) {
            "use strict";

            function n() {
                for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n);
                        else
                            for (r in t) t[r] && (o && (o += " "), o += r)
                    }
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
            r.d(t, {
                W: function() {
                    return n
                }
            }), t.Z = n
        },
        74553: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return o.a
                }
            });
            var n = r(38576),
                o = r.n(n)
        },
        85486: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return o.a
                }
            });
            var n = r(75856),
                o = r.n(n)
        },
        38576: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return s
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = r(7982),
                o = r(81715),
                i = r(31244),
                l = n._(r(40251));

            function a(e) {
                let {
                    props: t
                } = (0, o.getImgProps)(e, {
                    defaultLoader: l.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let s = i.Image
        },
        38059: function(e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(37858),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = n.useState,
                l = n.useEffect,
                a = n.useLayoutEffect,
                s = n.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !o(e, r)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = i({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    o = n[0].inst,
                    c = n[1];
                return a(function() {
                    o.value = r, o.getSnapshot = t, u(o) && c({
                        inst: o
                    })
                }, [e, r, t]), l(function() {
                    return u(o) && c({
                        inst: o
                    }), e(function() {
                        u(o) && c({
                            inst: o
                        })
                    })
                }, [e]), s(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        67953: function(e, t, r) {
            "use strict";
            e.exports = r(38059)
        },
        55118: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Bai_Jamjuree_2b9e37', '__Bai_Jamjuree_Fallback_2b9e37'",
                    fontStyle: "normal"
                },
                className: "__className_2b9e37"
            }
        },
        45896: function(e, t, r) {
            "use strict";
            let n;

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            r.d(t, {
                VY: function() {
                    return tx
                },
                zt: function() {
                    return tv
                },
                fC: function() {
                    return ty
                },
                NM: function() {
                    return td
                },
                xz: function() {
                    return tw
                }
            });
            var i = r(37858),
                l = r.t(i, 2);

            function a(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (null == e || e(n), !1 === r || !n.defaultPrevented) return null == t ? void 0 : t(n)
                }
            }

            function s(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function u(...e) {
                return (0, i.useCallback)(s(...e), e)
            }

            function c(e, t = []) {
                let r = [],
                    n = () => {
                        let t = r.map(e => (0, i.createContext)(e));
                        return function(r) {
                            let n = (null == r ? void 0 : r[e]) || t;
                            return (0, i.useMemo)(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: n
                                }
                            }), [r, n])
                        }
                    };
                return n.scopeName = e, [function(t, n) {
                    let o = (0, i.createContext)(n),
                        l = r.length;

                    function a(t) {
                        let {
                            scope: r,
                            children: n,
                            ...a
                        } = t, s = (null == r ? void 0 : r[e][l]) || o, u = (0, i.useMemo)(() => a, Object.values(a));
                        return (0, i.createElement)(s.Provider, {
                            value: u
                        }, n)
                    }
                    return r = [...r, n], a.displayName = t + "Provider", [a, function(r, a) {
                        let s = (null == a ? void 0 : a[e][l]) || o,
                            u = (0, i.useContext)(s);
                        if (u) return u;
                        if (void 0 !== n) return n;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let n = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return (0, i.useMemo)(() => ({
                                [`__scope${t.scopeName}`]: n
                            }), [n])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(n, ...t)]
            }
            var d = r(18645);
            let f = (0, i.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...n
                } = e, l = i.Children.toArray(r), a = l.find(g);
                if (a) {
                    let e = a.props.children,
                        r = l.map(t => t !== a ? t : i.Children.count(e) > 1 ? i.Children.only(null) : (0, i.isValidElement)(e) ? e.props.children : null);
                    return (0, i.createElement)(p, o({}, n, {
                        ref: t
                    }), (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, r) : null)
                }
                return (0, i.createElement)(p, o({}, n, {
                    ref: t
                }), r)
            });
            f.displayName = "Slot";
            let p = (0, i.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...n
                } = e;
                return (0, i.isValidElement)(r) ? (0, i.cloneElement)(r, { ... function(e, t) {
                        let r = { ...t
                        };
                        for (let n in t) {
                            let o = e[n],
                                i = t[n];
                            /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                i(...e), o(...e)
                            } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                ...i
                            } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...r
                        }
                    }(n, r.props),
                    ref: t ? s(t, r.ref) : r.ref
                }) : i.Children.count(r) > 1 ? i.Children.only(null) : null
            });
            p.displayName = "SlotClone";
            let m = ({
                children: e
            }) => (0, i.createElement)(i.Fragment, null, e);

            function g(e) {
                return (0, i.isValidElement)(e) && e.type === m
            }
            let h = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let r = (0, i.forwardRef)((e, r) => {
                    let {
                        asChild: n,
                        ...l
                    } = e, a = n ? f : t;
                    return (0, i.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, i.createElement)(a, o({}, l, {
                        ref: r
                    }))
                });
                return r.displayName = `Primitive.${t}`, { ...e,
                    [t]: r
                }
            }, {});

            function b(e) {
                let t = (0, i.useRef)(e);
                return (0, i.useEffect)(() => {
                    t.current = e
                }), (0, i.useMemo)(() => (...e) => {
                    var r;
                    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e)
                }, [])
            }
            let v = "dismissableLayer.update",
                y = (0, i.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                w = (0, i.forwardRef)((e, t) => {
                    var r;
                    let {
                        disableOutsidePointerEvents: l = !1,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: c,
                        onFocusOutside: d,
                        onInteractOutside: f,
                        onDismiss: p,
                        ...m
                    } = e, g = (0, i.useContext)(y), [w, T] = (0, i.useState)(null), C = null !== (r = null == w ? void 0 : w.ownerDocument) && void 0 !== r ? r : null == globalThis ? void 0 : globalThis.document, [, k] = (0, i.useState)({}), R = u(t, e => T(e)), O = Array.from(g.layers), [S] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), P = O.indexOf(S), _ = w ? O.indexOf(w) : -1, L = g.layersWithOutsidePointerEventsDisabled.size > 0, D = _ >= P, A = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let r = b(e),
                            n = (0, i.useRef)(!1),
                            o = (0, i.useRef)(() => {});
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !n.current) {
                                        let n = {
                                            originalEvent: e
                                        };

                                        function i() {
                                            E("dismissableLayer.pointerDownOutside", r, n, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : i()
                                    } else t.removeEventListener("click", o.current);
                                    n.current = !1
                                },
                                i = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, r]), {
                            onPointerDownCapture: () => n.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...g.branches].some(e => e.contains(t));
                        !D || r || (null == c || c(e), null == f || f(e), e.defaultPrevented || null == p || p())
                    }, C), N = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let r = b(e),
                            n = (0, i.useRef)(!1);
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                e.target && !n.current && E("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, r]), {
                            onFocusCapture: () => n.current = !0,
                            onBlurCapture: () => n.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...g.branches].some(e => e.contains(t)) || (null == d || d(e), null == f || f(e), e.defaultPrevented || null == p || p())
                    }, C);
                    return function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let r = b(e);
                        (0, i.useEffect)(() => {
                            let e = e => {
                                "Escape" === e.key && r(e)
                            };
                            return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                        }, [r, t])
                    }(e => {
                        _ !== g.layers.size - 1 || (null == s || s(e), !e.defaultPrevented && p && (e.preventDefault(), p()))
                    }, C), (0, i.useEffect)(() => {
                        if (w) return l && (0 === g.layersWithOutsidePointerEventsDisabled.size && (n = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(w)), g.layers.add(w), x(), () => {
                            l && 1 === g.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = n)
                        }
                    }, [w, C, l, g]), (0, i.useEffect)(() => () => {
                        w && (g.layers.delete(w), g.layersWithOutsidePointerEventsDisabled.delete(w), x())
                    }, [w, g]), (0, i.useEffect)(() => {
                        let e = () => k({});
                        return document.addEventListener(v, e), () => document.removeEventListener(v, e)
                    }, []), (0, i.createElement)(h.div, o({}, m, {
                        ref: R,
                        style: {
                            pointerEvents: L ? D ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: a(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: a(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: a(e.onPointerDownCapture, A.onPointerDownCapture)
                    }))
                });

            function x() {
                let e = new CustomEvent(v);
                document.dispatchEvent(e)
            }

            function E(e, t, r, {
                discrete: n
            }) {
                let o = r.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r
                    });
                (t && o.addEventListener(e, t, {
                    once: !0
                }), n) ? o && (0, d.flushSync)(() => o.dispatchEvent(i)): o.dispatchEvent(i)
            }
            let T = (null == globalThis ? void 0 : globalThis.document) ? i.useLayoutEffect : () => {},
                C = l["useId".toString()] || (() => void 0),
                k = 0,
                R = ["top", "right", "bottom", "left"],
                O = Math.min,
                S = Math.max,
                P = Math.round,
                _ = Math.floor,
                L = e => ({
                    x: e,
                    y: e
                }),
                D = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                A = {
                    start: "end",
                    end: "start"
                };

            function N(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function z(e) {
                return e.split("-")[0]
            }

            function M(e) {
                return e.split("-")[1]
            }

            function I(e) {
                return "x" === e ? "y" : "x"
            }

            function V(e) {
                return "y" === e ? "height" : "width"
            }

            function j(e) {
                return ["top", "bottom"].includes(z(e)) ? "y" : "x"
            }

            function $(e) {
                return e.replace(/start|end/g, e => A[e])
            }

            function F(e) {
                return e.replace(/left|right|bottom|top/g, e => D[e])
            }

            function W(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function H(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function B(e, t, r) {
                let n, {
                        reference: o,
                        floating: i
                    } = e,
                    l = j(t),
                    a = I(j(t)),
                    s = V(a),
                    u = z(t),
                    c = "y" === l,
                    d = o.x + o.width / 2 - i.width / 2,
                    f = o.y + o.height / 2 - i.height / 2,
                    p = o[s] / 2 - i[s] / 2;
                switch (u) {
                    case "top":
                        n = {
                            x: d,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - i.width,
                            y: f
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (M(t)) {
                    case "start":
                        n[a] -= p * (r && c ? -1 : 1);
                        break;
                    case "end":
                        n[a] += p * (r && c ? -1 : 1)
                }
                return n
            }
            let U = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = r, a = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: d
                } = B(u, n, s), f = n, p = {}, m = 0;
                for (let r = 0; r < a.length; r++) {
                    let {
                        name: i,
                        fn: g
                    } = a[r], {
                        x: h,
                        y: b,
                        data: v,
                        reset: y
                    } = await g({
                        x: c,
                        y: d,
                        initialPlacement: n,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != h ? h : c, d = null != b ? b : d, p = { ...p,
                        [i]: { ...p[i],
                            ...v
                        }
                    }, y && m <= 50 && (m++, "object" == typeof y && (y.placement && (f = y.placement), y.rects && (u = !0 === y.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : y.rects), {
                        x: c,
                        y: d
                    } = B(u, f, s)), r = -1)
                }
                return {
                    x: c,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function G(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = N(t, e), m = W(p), g = a[f ? "floating" === d ? "reference" : "floating" : d], h = H(await i.getClippingRect({
                    element: null == (r = await (null == i.isElement ? void 0 : i.isElement(g))) || r ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: s
                })), b = "floating" === d ? {
                    x: n,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), y = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
                    x: 1,
                    y: 1
                }, w = H(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: b,
                    offsetParent: v,
                    strategy: s
                }) : b);
                return {
                    top: (h.top - w.top + m.top) / y.y,
                    bottom: (w.bottom - h.bottom + m.bottom) / y.y,
                    left: (h.left - w.left + m.left) / y.x,
                    right: (w.right - h.right + m.right) / y.x
                }
            }

            function q(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function J(e) {
                return R.some(t => e[t] >= 0)
            }
            async function Y(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), l = z(r), a = M(r), s = "y" === j(r), u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, d = N(t, e), {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...d
                };
                return a && "number" == typeof m && (p = "end" === a ? -1 * m : m), s ? {
                    x: p * c,
                    y: f * u
                } : {
                    x: f * u,
                    y: p * c
                }
            }

            function X(e) {
                return Q(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function K(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function Z(e) {
                var t;
                return null == (t = (Q(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function Q(e) {
                return e instanceof Node || e instanceof K(e).Node
            }

            function ee(e) {
                return e instanceof Element || e instanceof K(e).Element
            }

            function et(e) {
                return e instanceof HTMLElement || e instanceof K(e).HTMLElement
            }

            function er(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof K(e).ShadowRoot)
            }

            function en(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = ea(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
            }

            function eo(e) {
                let t = ei(),
                    r = ea(e);
                return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function ei() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function el(e) {
                return ["html", "body", "#document"].includes(X(e))
            }

            function ea(e) {
                return K(e).getComputedStyle(e)
            }

            function es(e) {
                return ee(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function eu(e) {
                if ("html" === X(e)) return e;
                let t = e.assignedSlot || e.parentNode || er(e) && e.host || Z(e);
                return er(t) ? t.host : t
            }

            function ec(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = eu(t);
                        return el(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : et(r) && en(r) ? r : e(r)
                    }(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    l = K(o);
                return i ? t.concat(l, l.visualViewport || [], en(o) ? o : [], l.frameElement && r ? ec(l.frameElement) : []) : t.concat(o, ec(o, [], r))
            }

            function ed(e) {
                let t = ea(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = et(e),
                    i = o ? e.offsetWidth : r,
                    l = o ? e.offsetHeight : n,
                    a = P(r) !== i || P(n) !== l;
                return a && (r = i, n = l), {
                    width: r,
                    height: n,
                    $: a
                }
            }

            function ef(e) {
                return ee(e) ? e : e.contextElement
            }

            function ep(e) {
                let t = ef(e);
                if (!et(t)) return L(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: i
                    } = ed(t),
                    l = (i ? P(r.width) : r.width) / n,
                    a = (i ? P(r.height) : r.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let em = L(0);

            function eg(e) {
                let t = K(e);
                return ei() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : em
            }

            function eh(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let i = e.getBoundingClientRect(),
                    l = ef(e),
                    a = L(1);
                t && (n ? ee(n) && (a = ep(n)) : a = ep(e));
                let s = (void 0 === (o = r) && (o = !1), n && (!o || n === K(l)) && o) ? eg(l) : L(0),
                    u = (i.left + s.x) / a.x,
                    c = (i.top + s.y) / a.y,
                    d = i.width / a.x,
                    f = i.height / a.y;
                if (l) {
                    let e = K(l),
                        t = n && ee(n) ? K(n) : n,
                        r = e,
                        o = r.frameElement;
                    for (; o && n && t !== r;) {
                        let e = ep(o),
                            t = o.getBoundingClientRect(),
                            n = ea(o),
                            i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        u *= e.x, c *= e.y, d *= e.x, f *= e.y, u += i, c += l, o = (r = K(o)).frameElement
                    }
                }
                return H({
                    width: d,
                    height: f,
                    x: u,
                    y: c
                })
            }
            let eb = [":popover-open", ":modal"];

            function ev(e) {
                return eb.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function ey(e) {
                return eh(Z(e)).left + es(e).scrollLeft
            }

            function ew(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = K(e),
                        n = Z(e),
                        o = r.visualViewport,
                        i = n.clientWidth,
                        l = n.clientHeight,
                        a = 0,
                        s = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = ei();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = Z(e),
                        r = es(e),
                        n = e.ownerDocument.body,
                        o = S(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        i = S(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        l = -r.scrollLeft + ey(e),
                        a = -r.scrollTop;
                    return "rtl" === ea(n).direction && (l += S(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(Z(e));
                else if (ee(t)) n = function(e, t) {
                    let r = eh(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        i = et(e) ? ep(e) : L(1),
                        l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
                else {
                    let r = eg(e);
                    n = { ...t,
                        x: t.x - r.x,
                        y: t.y - r.y
                    }
                }
                return H(n)
            }

            function ex(e) {
                return "static" === ea(e).position
            }

            function eE(e, t) {
                return et(e) && "fixed" !== ea(e).position ? t ? t(e) : e.offsetParent : null
            }

            function eT(e, t) {
                let r = K(e);
                if (ev(e)) return r;
                if (!et(e)) {
                    let t = eu(e);
                    for (; t && !el(t);) {
                        if (ee(t) && !ex(t)) return t;
                        t = eu(t)
                    }
                    return r
                }
                let n = eE(e, t);
                for (; n && ["table", "td", "th"].includes(X(n)) && ex(n);) n = eE(n, t);
                return n && el(n) && ex(n) && !eo(n) ? r : n || function(e) {
                    let t = eu(e);
                    for (; et(t) && !el(t);) {
                        if (eo(t)) return t;
                        t = eu(t)
                    }
                    return null
                }(e) || r
            }
            let eC = async function(e) {
                    let t = this.getOffsetParent || eT,
                        r = this.getDimensions,
                        n = await r(e.floating);
                    return {
                        reference: function(e, t, r) {
                            let n = et(t),
                                o = Z(t),
                                i = "fixed" === r,
                                l = eh(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = L(0);
                            if (n || !n && !i) {
                                if (("body" !== X(t) || en(o)) && (a = es(t)), n) {
                                    let e = eh(t, !0, i, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = ey(o))
                            }
                            return {
                                x: l.left + a.scrollLeft - s.x,
                                y: l.top + a.scrollTop - s.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: n.width,
                            height: n.height
                        }
                    }
                },
                ek = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: r,
                            offsetParent: n,
                            strategy: o
                        } = e, i = "fixed" === o, l = Z(n), a = !!t && ev(t.floating);
                        if (n === l || a && i) return r;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = L(1),
                            c = L(0),
                            d = et(n);
                        if ((d || !d && !i) && (("body" !== X(n) || en(l)) && (s = es(n)), et(n))) {
                            let e = eh(n);
                            u = ep(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop
                        }
                        return {
                            width: r.width * u.x,
                            height: r.height * u.y,
                            x: r.x * u.x - s.scrollLeft * u.x + c.x,
                            y: r.y * u.y - s.scrollTop * u.y + c.y
                        }
                    },
                    getDocumentElement: Z,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: r,
                            rootBoundary: n,
                            strategy: o
                        } = e, i = [..."clippingAncestors" === r ? ev(t) ? [] : function(e, t) {
                            let r = t.get(e);
                            if (r) return r;
                            let n = ec(e, [], !1).filter(e => ee(e) && "body" !== X(e)),
                                o = null,
                                i = "fixed" === ea(e).position,
                                l = i ? eu(e) : e;
                            for (; ee(l) && !el(l);) {
                                let t = ea(l),
                                    r = eo(l);
                                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || en(l) && !r && function e(t, r) {
                                    let n = eu(t);
                                    return !(n === r || !ee(n) || el(n)) && ("fixed" === ea(n).position || e(n, r))
                                }(e, l)) ? n = n.filter(e => e !== l) : o = t, l = eu(l)
                            }
                            return t.set(e, n), n
                        }(t, this._c) : [].concat(r), n], l = i[0], a = i.reduce((e, r) => {
                            let n = ew(t, r, o);
                            return e.top = S(n.top, e.top), e.right = O(n.right, e.right), e.bottom = O(n.bottom, e.bottom), e.left = S(n.left, e.left), e
                        }, ew(t, l, o));
                        return {
                            width: a.right - a.left,
                            height: a.bottom - a.top,
                            x: a.left,
                            y: a.top
                        }
                    },
                    getOffsetParent: eT,
                    getElementRects: eC,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: r
                        } = ed(e);
                        return {
                            width: t,
                            height: r
                        }
                    },
                    getScale: ep,
                    isElement: ee,
                    isRTL: function(e) {
                        return "rtl" === ea(e).direction
                    }
                },
                eR = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: i,
                            platform: l,
                            elements: a,
                            middlewareData: s
                        } = t, {
                            element: u,
                            padding: c = 0
                        } = N(e, t) || {};
                        if (null == u) return {};
                        let d = W(c),
                            f = {
                                x: r,
                                y: n
                            },
                            p = I(j(o)),
                            m = V(p),
                            g = await l.getDimensions(u),
                            h = "y" === p,
                            b = h ? "clientHeight" : "clientWidth",
                            v = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
                            y = f[p] - i.reference[p],
                            w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u)),
                            x = w ? w[b] : 0;
                        x && await (null == l.isElement ? void 0 : l.isElement(w)) || (x = a.floating[b] || i.floating[m]);
                        let E = x / 2 - g[m] / 2 - 1,
                            T = O(d[h ? "top" : "left"], E),
                            C = O(d[h ? "bottom" : "right"], E),
                            k = x - g[m] - C,
                            R = x / 2 - g[m] / 2 + (v / 2 - y / 2),
                            P = S(T, O(R, k)),
                            _ = !s.arrow && null != M(o) && R !== P && i.reference[m] / 2 - (R < T ? T : C) - g[m] / 2 < 0,
                            L = _ ? R < T ? R - T : R - k : 0;
                        return {
                            [p]: f[p] + L,
                            data: {
                                [p]: P,
                                centerOffset: R - P - L,
                                ..._ && {
                                    alignmentOffset: L
                                }
                            },
                            reset: _
                        }
                    }
                }),
                eO = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: ek,
                            ...r
                        },
                        i = { ...o.platform,
                            _c: n
                        };
                    return U(e, t, { ...o,
                        platform: i
                    })
                };
            var eS = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

            function eP(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!eP(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !eP(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function e_(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eL(e, t) {
                let r = e_(e);
                return Math.round(t * r) / r
            }

            function eD(e) {
                let t = i.useRef(e);
                return eS(() => {
                    t.current = e
                }), t
            }
            let eA = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: r,
                            padding: n
                        } = "function" == typeof e ? e(t) : e;
                        return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? eR({
                            element: r.current,
                            padding: n
                        }).fn(t) : {} : r ? eR({
                            element: r,
                            padding: n
                        }).fn(t) : {}
                    }
                }),
                eN = (e, t) => {
                    var r;
                    return { ...(void 0 === (r = e) && (r = 0), {
                            name: "offset",
                            options: r,
                            async fn(e) {
                                var t, n;
                                let {
                                    x: o,
                                    y: i,
                                    placement: l,
                                    middlewareData: a
                                } = e, s = await Y(e, r);
                                return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                                    x: o + s.x,
                                    y: i + s.y,
                                    data: { ...s,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ez = (e, t) => {
                    var r;
                    return { ...(void 0 === (r = e) && (r = {}), {
                            name: "shift",
                            options: r,
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: o
                                } = e, {
                                    mainAxis: i = !0,
                                    crossAxis: l = !1,
                                    limiter: a = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: r
                                            } = e;
                                            return {
                                                x: t,
                                                y: r
                                            }
                                        }
                                    },
                                    ...s
                                } = N(r, e), u = {
                                    x: t,
                                    y: n
                                }, c = await G(e, s), d = j(z(o)), f = I(d), p = u[f], m = u[d];
                                if (i) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        r = p + c[e],
                                        n = p - c[t];
                                    p = S(r, O(p, n))
                                }
                                if (l) {
                                    let e = "y" === d ? "top" : "left",
                                        t = "y" === d ? "bottom" : "right",
                                        r = m + c[e],
                                        n = m - c[t];
                                    m = S(r, O(m, n))
                                }
                                let g = a.fn({ ...e,
                                    [f]: p,
                                    [d]: m
                                });
                                return { ...g,
                                    data: {
                                        x: g.x - t,
                                        y: g.y - n
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eM = (e, t) => {
                    var r;
                    return { ...(void 0 === (r = e) && (r = {}), {
                            options: r,
                            fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: o,
                                    rects: i,
                                    middlewareData: l
                                } = e, {
                                    offset: a = 0,
                                    mainAxis: s = !0,
                                    crossAxis: u = !0
                                } = N(r, e), c = {
                                    x: t,
                                    y: n
                                }, d = j(o), f = I(d), p = c[f], m = c[d], g = N(a, e), h = "number" == typeof g ? {
                                    mainAxis: g,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...g
                                };
                                if (s) {
                                    let e = "y" === f ? "height" : "width",
                                        t = i.reference[f] - i.floating[e] + h.mainAxis,
                                        r = i.reference[f] + i.reference[e] - h.mainAxis;
                                    p < t ? p = t : p > r && (p = r)
                                }
                                if (u) {
                                    var b, v;
                                    let e = "y" === f ? "width" : "height",
                                        t = ["top", "left"].includes(z(o)),
                                        r = i.reference[d] - i.floating[e] + (t && (null == (b = l.offset) ? void 0 : b[d]) || 0) + (t ? 0 : h.crossAxis),
                                        n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (v = l.offset) ? void 0 : v[d]) || 0) - (t ? h.crossAxis : 0);
                                    m < r ? m = r : m > n && (m = n)
                                }
                                return {
                                    [f]: p,
                                    [d]: m
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eI = (e, t) => {
                    var r;
                    return { ...(void 0 === (r = e) && (r = {}), {
                            name: "flip",
                            options: r,
                            async fn(e) {
                                var t, n, o, i, l;
                                let {
                                    placement: a,
                                    middlewareData: s,
                                    rects: u,
                                    initialPlacement: c,
                                    platform: d,
                                    elements: f
                                } = e, {
                                    mainAxis: p = !0,
                                    crossAxis: m = !0,
                                    fallbackPlacements: g,
                                    fallbackStrategy: h = "bestFit",
                                    fallbackAxisSideDirection: b = "none",
                                    flipAlignment: v = !0,
                                    ...y
                                } = N(r, e);
                                if (null != (t = s.arrow) && t.alignmentOffset) return {};
                                let w = z(a),
                                    x = z(c) === c,
                                    E = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                                    T = g || (x || !v ? [F(c)] : function(e) {
                                        let t = F(e);
                                        return [$(e), t, $(t)]
                                    }(c));
                                g || "none" === b || T.push(... function(e, t, r, n) {
                                    let o = M(e),
                                        i = function(e, t, r) {
                                            let n = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return t ? o : n;
                                                    return t ? n : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(z(e), "start" === r, n);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map($)))), i
                                }(c, v, b, E));
                                let C = [c, ...T],
                                    k = await G(e, y),
                                    R = [],
                                    O = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                                if (p && R.push(k[w]), m) {
                                    let e = function(e, t, r) {
                                        void 0 === r && (r = !1);
                                        let n = M(e),
                                            o = I(j(e)),
                                            i = V(o),
                                            l = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = F(l)), [l, F(l)]
                                    }(a, u, E);
                                    R.push(k[e[0]], k[e[1]])
                                }
                                if (O = [...O, {
                                        placement: a,
                                        overflows: R
                                    }], !R.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = C[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: O
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let r = null == (i = O.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!r) switch (h) {
                                        case "bestFit":
                                            {
                                                let e = null == (l = O.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (r = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            r = c
                                    }
                                    if (a !== r) return {
                                        reset: {
                                            placement: r
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                eV = (e, t) => {
                    var r;
                    return { ...(void 0 === (r = e) && (r = {}), {
                            name: "size",
                            options: r,
                            async fn(e) {
                                let t, n;
                                let {
                                    placement: o,
                                    rects: i,
                                    platform: l,
                                    elements: a
                                } = e, {
                                    apply: s = () => {},
                                    ...u
                                } = N(r, e), c = await G(e, u), d = z(o), f = M(o), p = "y" === j(o), {
                                    width: m,
                                    height: g
                                } = i.floating;
                                "top" === d || "bottom" === d ? (t = d, n = f === (await (null == l.isRTL ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (n = d, t = "end" === f ? "top" : "bottom");
                                let h = g - c.top - c.bottom,
                                    b = m - c.left - c.right,
                                    v = O(g - c[t], h),
                                    y = O(m - c[n], b),
                                    w = !e.middlewareData.shift,
                                    x = v,
                                    E = y;
                                if (p ? E = f || w ? O(y, b) : b : x = f || w ? O(v, h) : h, w && !f) {
                                    let e = S(c.left, 0),
                                        t = S(c.right, 0),
                                        r = S(c.top, 0),
                                        n = S(c.bottom, 0);
                                    p ? E = m - 2 * (0 !== e || 0 !== t ? e + t : S(c.left, c.right)) : x = g - 2 * (0 !== r || 0 !== n ? r + n : S(c.top, c.bottom))
                                }
                                await s({ ...e,
                                    availableWidth: E,
                                    availableHeight: x
                                });
                                let T = await l.getDimensions(a.floating);
                                return m !== T.width || g !== T.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                ej = (e, t) => {
                    var r;
                    return { ...(void 0 === (r = e) && (r = {}), {
                            name: "hide",
                            options: r,
                            async fn(e) {
                                let {
                                    rects: t
                                } = e, {
                                    strategy: n = "referenceHidden",
                                    ...o
                                } = N(r, e);
                                switch (n) {
                                    case "referenceHidden":
                                        {
                                            let r = q(await G(e, { ...o,
                                                elementContext: "reference"
                                            }), t.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: r,
                                                    referenceHidden: J(r)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let r = q(await G(e, { ...o,
                                                altBoundary: !0
                                            }), t.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: r,
                                                    escaped: J(r)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                e$ = (e, t) => ({ ...eA(e),
                    options: [e, t]
                }),
                eF = (0, i.forwardRef)((e, t) => {
                    let {
                        children: r,
                        width: n = 10,
                        height: l = 5,
                        ...a
                    } = e;
                    return (0, i.createElement)(h.svg, o({}, a, {
                        ref: t,
                        width: n,
                        height: l,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none"
                    }), e.asChild ? r : (0, i.createElement)("polygon", {
                        points: "0,0 30,0 15,10"
                    }))
                }),
                eW = "Popper",
                [eH, eB] = c(eW),
                [eU, eG] = eH(eW),
                eq = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: n,
                        ...l
                    } = e, a = eG("PopperAnchor", r), s = (0, i.useRef)(null), c = u(t, s);
                    return (0, i.useEffect)(() => {
                        a.onAnchorChange((null == n ? void 0 : n.current) || s.current)
                    }), n ? null : (0, i.createElement)(h.div, o({}, l, {
                        ref: c
                    }))
                }),
                eJ = "PopperContent",
                [eY, eX] = eH(eJ),
                eK = (0, i.forwardRef)((e, t) => {
                    var r, n, l, a, s, c, f, p;
                    let {
                        __scopePopper: m,
                        side: g = "bottom",
                        sideOffset: v = 0,
                        align: y = "center",
                        alignOffset: w = 0,
                        arrowPadding: x = 0,
                        avoidCollisions: E = !0,
                        collisionBoundary: C = [],
                        collisionPadding: k = 0,
                        sticky: R = "partial",
                        hideWhenDetached: P = !1,
                        updatePositionStrategy: L = "optimized",
                        onPlaced: D,
                        ...A
                    } = e, N = eG(eJ, m), [z, M] = (0, i.useState)(null), I = u(t, e => M(e)), [V, j] = (0, i.useState)(null), $ = function(e) {
                        let [t, r] = (0, i.useState)(void 0);
                        return T(() => {
                            if (e) {
                                r({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let n, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        n = t.inlineSize, o = t.blockSize
                                    } else n = e.offsetWidth, o = e.offsetHeight;
                                    r({
                                        width: n,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            r(void 0)
                        }, [e]), t
                    }(V), F = null !== (r = null == $ ? void 0 : $.width) && void 0 !== r ? r : 0, W = null !== (n = null == $ ? void 0 : $.height) && void 0 !== n ? n : 0, H = "number" == typeof k ? k : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...k
                    }, B = Array.isArray(C) ? C : [C], U = B.length > 0, G = {
                        padding: H,
                        boundary: B.filter(eQ),
                        altBoundary: U
                    }, {
                        refs: q,
                        floatingStyles: J,
                        placement: Y,
                        isPositioned: X,
                        middlewareData: K
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: r = "absolute",
                            middleware: n = [],
                            platform: o,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: s = !0,
                            whileElementsMounted: u,
                            open: c
                        } = e, [f, p] = i.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [m, g] = i.useState(n);
                        eP(m, n) || g(n);
                        let [h, b] = i.useState(null), [v, y] = i.useState(null), w = i.useCallback(e => {
                            e !== C.current && (C.current = e, b(e))
                        }, []), x = i.useCallback(e => {
                            e !== k.current && (k.current = e, y(e))
                        }, []), E = l || h, T = a || v, C = i.useRef(null), k = i.useRef(null), R = i.useRef(f), O = null != u, S = eD(u), P = eD(o), _ = i.useCallback(() => {
                            if (!C.current || !k.current) return;
                            let e = {
                                placement: t,
                                strategy: r,
                                middleware: m
                            };
                            P.current && (e.platform = P.current), eO(C.current, k.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                L.current && !eP(R.current, t) && (R.current = t, d.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [m, t, r, P]);
                        eS(() => {
                            !1 === c && R.current.isPositioned && (R.current.isPositioned = !1, p(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let L = i.useRef(!1);
                        eS(() => (L.current = !0, () => {
                            L.current = !1
                        }), []), eS(() => {
                            if (E && (C.current = E), T && (k.current = T), E && T) {
                                if (S.current) return S.current(E, T, _);
                                _()
                            }
                        }, [E, T, _, S, O]);
                        let D = i.useMemo(() => ({
                                reference: C,
                                floating: k,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            A = i.useMemo(() => ({
                                reference: E,
                                floating: T
                            }), [E, T]),
                            N = i.useMemo(() => {
                                let e = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!A.floating) return e;
                                let t = eL(A.floating, f.x),
                                    n = eL(A.floating, f.y);
                                return s ? { ...e,
                                    transform: "translate(" + t + "px, " + n + "px)",
                                    ...e_(A.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: t,
                                    top: n
                                }
                            }, [r, s, A.floating, f.x, f.y]);
                        return i.useMemo(() => ({ ...f,
                            update: _,
                            refs: D,
                            elements: A,
                            floatingStyles: N
                        }), [f, _, D, A, N])
                    }({
                        strategy: "fixed",
                        placement: g + ("center" !== y ? "-" + y : ""),
                        whileElementsMounted: (...e) => (function(e, t, r, n) {
                            let o;
                            void 0 === n && (n = {});
                            let {
                                ancestorScroll: i = !0,
                                ancestorResize: l = !0,
                                elementResize: a = "function" == typeof ResizeObserver,
                                layoutShift: s = "function" == typeof IntersectionObserver,
                                animationFrame: u = !1
                            } = n, c = ef(e), d = i || l ? [...c ? ec(c) : [], ...ec(t)] : [];
                            d.forEach(e => {
                                i && e.addEventListener("scroll", r, {
                                    passive: !0
                                }), l && e.addEventListener("resize", r)
                            });
                            let f = c && s ? function(e, t) {
                                    let r, n = null,
                                        o = Z(e);

                                    function i() {
                                        var e;
                                        clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                                    }
                                    return function l(a, s) {
                                        void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                                        let {
                                            left: u,
                                            top: c,
                                            width: d,
                                            height: f
                                        } = e.getBoundingClientRect();
                                        if (a || t(), !d || !f) return;
                                        let p = _(c),
                                            m = _(o.clientWidth - (u + d)),
                                            g = {
                                                rootMargin: -p + "px " + -m + "px " + -_(o.clientHeight - (c + f)) + "px " + -_(u) + "px",
                                                threshold: S(0, O(1, s)) || 1
                                            },
                                            h = !0;

                                        function b(e) {
                                            let t = e[0].intersectionRatio;
                                            if (t !== s) {
                                                if (!h) return l();
                                                t ? l(!1, t) : r = setTimeout(() => {
                                                    l(!1, 1e-7)
                                                }, 1e3)
                                            }
                                            h = !1
                                        }
                                        try {
                                            n = new IntersectionObserver(b, { ...g,
                                                root: o.ownerDocument
                                            })
                                        } catch (e) {
                                            n = new IntersectionObserver(b, g)
                                        }
                                        n.observe(e)
                                    }(!0), i
                                }(c, r) : null,
                                p = -1,
                                m = null;
                            a && (m = new ResizeObserver(e => {
                                let [n] = e;
                                n && n.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                    var e;
                                    null == (e = m) || e.observe(t)
                                })), r()
                            }), c && !u && m.observe(c), m.observe(t));
                            let g = u ? eh(e) : null;
                            return u && function t() {
                                let n = eh(e);
                                g && (n.x !== g.x || n.y !== g.y || n.width !== g.width || n.height !== g.height) && r(), g = n, o = requestAnimationFrame(t)
                            }(), r(), () => {
                                var e;
                                d.forEach(e => {
                                    i && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r)
                                }), null == f || f(), null == (e = m) || e.disconnect(), m = null, u && cancelAnimationFrame(o)
                            }
                        })(...e, {
                            animationFrame: "always" === L
                        }),
                        elements: {
                            reference: N.anchor
                        },
                        middleware: [eN({
                            mainAxis: v + W,
                            alignmentAxis: w
                        }), E && ez({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === R ? eM() : void 0,
                            ...G
                        }), E && eI({ ...G
                        }), eV({ ...G,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: r,
                                availableHeight: n
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${r}px`), l.setProperty("--radix-popper-available-height", `${n}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), V && e$({
                            element: V,
                            padding: x
                        }), e0({
                            arrowWidth: F,
                            arrowHeight: W
                        }), P && ej({
                            strategy: "referenceHidden",
                            ...G
                        })]
                    }), [Q, ee] = e1(Y), et = b(D);
                    T(() => {
                        X && (null == et || et())
                    }, [X, et]);
                    let er = null === (l = K.arrow) || void 0 === l ? void 0 : l.x,
                        en = null === (a = K.arrow) || void 0 === a ? void 0 : a.y,
                        eo = (null === (s = K.arrow) || void 0 === s ? void 0 : s.centerOffset) !== 0,
                        [ei, el] = (0, i.useState)();
                    return T(() => {
                        z && el(window.getComputedStyle(z).zIndex)
                    }, [z]), (0, i.createElement)("div", {
                        ref: q.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...J,
                            transform: X ? J.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: ei,
                            "--radix-popper-transform-origin": [null === (c = K.transformOrigin) || void 0 === c ? void 0 : c.x, null === (f = K.transformOrigin) || void 0 === f ? void 0 : f.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, i.createElement)(eY, {
                        scope: m,
                        placedSide: Q,
                        onArrowChange: j,
                        arrowX: er,
                        arrowY: en,
                        shouldHideArrow: eo
                    }, (0, i.createElement)(h.div, o({
                        "data-side": Q,
                        "data-align": ee
                    }, A, {
                        ref: I,
                        style: { ...A.style,
                            animation: X ? void 0 : "none",
                            opacity: null !== (p = K.hide) && void 0 !== p && p.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                eZ = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                };

            function eQ(e) {
                return null !== e
            }
            let e0 = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, i, l;
                    let {
                        placement: a,
                        rects: s,
                        middlewareData: u
                    } = t, c = (null === (r = u.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0, d = c ? 0 : e.arrowWidth, f = c ? 0 : e.arrowHeight, [p, m] = e1(a), g = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[m], h = (null !== (n = null === (o = u.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0) + d / 2, b = (null !== (i = null === (l = u.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + f / 2, v = "", y = "";
                    return "bottom" === p ? (v = c ? g : `${h}px`, y = `${-f}px`) : "top" === p ? (v = c ? g : `${h}px`, y = `${s.floating.height+f}px`) : "right" === p ? (v = `${-f}px`, y = c ? g : `${b}px`) : "left" === p && (v = `${s.floating.width+f}px`, y = c ? g : `${b}px`), {
                        data: {
                            x: v,
                            y: y
                        }
                    }
                }
            });

            function e1(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            let e2 = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [n, o] = (0, i.useState)(null);
                    return (0, i.createElement)(eU, {
                        scope: t,
                        anchor: n,
                        onAnchorChange: o
                    }, r)
                },
                e5 = (0, i.forwardRef)((e, t) => {
                    var r;
                    let {
                        container: n = null == globalThis ? void 0 : null === (r = globalThis.document) || void 0 === r ? void 0 : r.body,
                        ...l
                    } = e;
                    return n ? d.createPortal((0, i.createElement)(h.div, o({}, l, {
                        ref: t
                    })), n) : null
                }),
                e3 = e => {
                    let {
                        present: t,
                        children: r
                    } = e, n = function(e) {
                        var t, r;
                        let [n, o] = (0, i.useState)(), l = (0, i.useRef)({}), a = (0, i.useRef)(e), s = (0, i.useRef)("none"), [u, c] = (t = e ? "mounted" : "unmounted", r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, (0, i.useReducer)((e, t) => {
                            let n = r[e][t];
                            return null != n ? n : e
                        }, t));
                        return (0, i.useEffect)(() => {
                            let e = e8(l.current);
                            s.current = "mounted" === u ? e : "none"
                        }, [u]), T(() => {
                            let t = l.current,
                                r = a.current;
                            if (r !== e) {
                                let n = s.current,
                                    o = e8(t);
                                e ? c("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? c("UNMOUNT") : r && n !== o ? c("ANIMATION_OUT") : c("UNMOUNT"), a.current = e
                            }
                        }, [e, c]), T(() => {
                            if (n) {
                                let e = e => {
                                        let t = e8(l.current).includes(e.animationName);
                                        e.target === n && t && (0, d.flushSync)(() => c("ANIMATION_END"))
                                    },
                                    t = e => {
                                        e.target === n && (s.current = e8(l.current))
                                    };
                                return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                                    n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                                }
                            }
                            c("ANIMATION_END")
                        }, [n, c]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(u),
                            ref: (0, i.useCallback)(e => {
                                e && (l.current = getComputedStyle(e)), o(e)
                            }, [])
                        }
                    }(t), o = "function" == typeof r ? r({
                        present: n.isPresent
                    }) : i.Children.only(r), l = u(n.ref, o.ref);
                    return "function" == typeof r || n.isPresent ? (0, i.cloneElement)(o, {
                        ref: l
                    }) : null
                };

            function e8(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            e3.displayName = "Presence";
            let e9 = (0, i.forwardRef)((e, t) => (0, i.createElement)(h.span, o({}, e, {
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }))),
                [e4, e6] = c("Tooltip", [eB]),
                e7 = eB(),
                te = "tooltip.open",
                [tt, tr] = e4("TooltipProvider"),
                tn = "Tooltip",
                [to, ti] = e4(tn),
                tl = "TooltipTrigger",
                ta = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: r,
                        ...n
                    } = e, l = ti(tl, r), s = tr(tl, r), c = e7(r), d = u(t, (0, i.useRef)(null), l.onTriggerChange), f = (0, i.useRef)(!1), p = (0, i.useRef)(!1), m = (0, i.useCallback)(() => f.current = !1, []);
                    return (0, i.useEffect)(() => () => document.removeEventListener("pointerup", m), [m]), (0, i.createElement)(eq, o({
                        asChild: !0
                    }, c), (0, i.createElement)(h.button, o({
                        "aria-describedby": l.open ? l.contentId : void 0,
                        "data-state": l.stateAttribute
                    }, n, {
                        ref: d,
                        onPointerMove: a(e.onPointerMove, e => {
                            "touch" === e.pointerType || p.current || s.isPointerInTransitRef.current || (l.onTriggerEnter(), p.current = !0)
                        }),
                        onPointerLeave: a(e.onPointerLeave, () => {
                            l.onTriggerLeave(), p.current = !1
                        }),
                        onPointerDown: a(e.onPointerDown, () => {
                            f.current = !0, document.addEventListener("pointerup", m, {
                                once: !0
                            })
                        }),
                        onFocus: a(e.onFocus, () => {
                            f.current || l.onOpen()
                        }),
                        onBlur: a(e.onBlur, l.onClose),
                        onClick: a(e.onClick, l.onClose)
                    })))
                }),
                ts = "TooltipPortal",
                [tu, tc] = e4(ts, {
                    forceMount: void 0
                }),
                td = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: r,
                        children: n,
                        container: o
                    } = e, l = ti(ts, t);
                    return (0, i.createElement)(tu, {
                        scope: t,
                        forceMount: r
                    }, (0, i.createElement)(e3, {
                        present: r || l.open
                    }, (0, i.createElement)(e5, {
                        asChild: !0,
                        container: o
                    }, n)))
                },
                tf = "TooltipContent",
                tp = (0, i.forwardRef)((e, t) => {
                    let r = tc(tf, e.__scopeTooltip),
                        {
                            forceMount: n = r.forceMount,
                            side: l = "top",
                            ...a
                        } = e,
                        s = ti(tf, e.__scopeTooltip);
                    return (0, i.createElement)(e3, {
                        present: n || s.open
                    }, s.disableHoverableContent ? (0, i.createElement)(tb, o({
                        side: l
                    }, a, {
                        ref: t
                    })) : (0, i.createElement)(tm, o({
                        side: l
                    }, a, {
                        ref: t
                    })))
                }),
                tm = (0, i.forwardRef)((e, t) => {
                    let r = ti(tf, e.__scopeTooltip),
                        n = tr(tf, e.__scopeTooltip),
                        l = (0, i.useRef)(null),
                        a = u(t, l),
                        [s, c] = (0, i.useState)(null),
                        {
                            trigger: d,
                            onClose: f
                        } = r,
                        p = l.current,
                        {
                            onPointerInTransitChange: m
                        } = n,
                        g = (0, i.useCallback)(() => {
                            c(null), m(!1)
                        }, [m]),
                        h = (0, i.useCallback)((e, t) => {
                            let r = e.currentTarget,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let r = Math.abs(t.top - e.y),
                                        n = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(r, n, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case r:
                                            return "top";
                                        case n:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(n, r.getBoundingClientRect());
                            c(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let r = 0; r < e.length; r++) {
                                            let n = e[r];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    r = t[t.length - 2];
                                                if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
                                                else break
                                            }
                                            t.push(n)
                                        }
                                        t.pop();
                                        let r = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let n = e[t];
                                            for (; r.length >= 2;) {
                                                let e = r[r.length - 1],
                                                    t = r[r.length - 2];
                                                if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();
                                                else break
                                            }
                                            r.push(n)
                                        }
                                        return (r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y) ? t : t.concat(r)
                                    }(t)
                            }([... function(e, t, r = 5) {
                                let n = [];
                                switch (t) {
                                    case "top":
                                        n.push({
                                            x: e.x - r,
                                            y: e.y + r
                                        }, {
                                            x: e.x + r,
                                            y: e.y + r
                                        });
                                        break;
                                    case "bottom":
                                        n.push({
                                            x: e.x - r,
                                            y: e.y - r
                                        }, {
                                            x: e.x + r,
                                            y: e.y - r
                                        });
                                        break;
                                    case "left":
                                        n.push({
                                            x: e.x + r,
                                            y: e.y - r
                                        }, {
                                            x: e.x + r,
                                            y: e.y + r
                                        });
                                        break;
                                    case "right":
                                        n.push({
                                            x: e.x - r,
                                            y: e.y - r
                                        }, {
                                            x: e.x - r,
                                            y: e.y + r
                                        })
                                }
                                return n
                            }(n, o), ... function(e) {
                                let {
                                    top: t,
                                    right: r,
                                    bottom: n,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: r,
                                    y: t
                                }, {
                                    x: r,
                                    y: n
                                }, {
                                    x: o,
                                    y: n
                                }]
                            }(t.getBoundingClientRect())])), m(!0)
                        }, [m]);
                    return (0, i.useEffect)(() => () => g(), [g]), (0, i.useEffect)(() => {
                        if (d && p) {
                            let e = e => h(e, p),
                                t = e => h(e, d);
                            return d.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
                                d.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [d, p, h, g]), (0, i.useEffect)(() => {
                        if (s) {
                            let e = e => {
                                let t = e.target,
                                    r = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    n = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: r,
                                            y: n
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let l = t[e].x,
                                                a = t[e].y,
                                                s = t[i].x,
                                                u = t[i].y;
                                            a > n != u > n && r < (s - l) * (n - a) / (u - a) + l && (o = !o)
                                        }
                                        return o
                                    }(r, s);
                                n ? g() : o && (g(), f())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [d, p, s, f, g]), (0, i.createElement)(tb, o({}, e, {
                        ref: a
                    }))
                }),
                [tg, th] = e4(tn, {
                    isInside: !1
                }),
                tb = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTooltip: r,
                        children: n,
                        "aria-label": l,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        ...u
                    } = e, c = ti(tf, r), d = e7(r), {
                        onClose: f
                    } = c;
                    return (0, i.useEffect)(() => (document.addEventListener(te, f), () => document.removeEventListener(te, f)), [f]), (0, i.useEffect)(() => {
                        if (c.trigger) {
                            let e = e => {
                                let t = e.target;
                                null != t && t.contains(c.trigger) && f()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [c.trigger, f]), (0, i.createElement)(w, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: f
                    }, (0, i.createElement)(eK, o({
                        "data-state": c.stateAttribute
                    }, d, u, {
                        ref: t,
                        style: { ...u.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }), (0, i.createElement)(m, null, n), (0, i.createElement)(tg, {
                        scope: r,
                        isInside: !0
                    }, (0, i.createElement)(e9, {
                        id: c.contentId,
                        role: "tooltip"
                    }, l || n))))
                }),
                tv = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: r = 700,
                        skipDelayDuration: n = 300,
                        disableHoverableContent: o = !1,
                        children: l
                    } = e, [a, s] = (0, i.useState)(!0), u = (0, i.useRef)(!1), c = (0, i.useRef)(0);
                    return (0, i.useEffect)(() => {
                        let e = c.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, i.createElement)(tt, {
                        scope: t,
                        isOpenDelayed: a,
                        delayDuration: r,
                        onOpen: (0, i.useCallback)(() => {
                            window.clearTimeout(c.current), s(!1)
                        }, []),
                        onClose: (0, i.useCallback)(() => {
                            window.clearTimeout(c.current), c.current = window.setTimeout(() => s(!0), n)
                        }, [n]),
                        isPointerInTransitRef: u,
                        onPointerInTransitChange: (0, i.useCallback)(e => {
                            u.current = e
                        }, []),
                        disableHoverableContent: o
                    }, l)
                },
                ty = e => {
                    let {
                        __scopeTooltip: t,
                        children: r,
                        open: n,
                        defaultOpen: o = !1,
                        onOpenChange: l,
                        disableHoverableContent: a,
                        delayDuration: s
                    } = e, u = tr(tn, e.__scopeTooltip), c = e7(t), [d, f] = (0, i.useState)(null), p = function(e) {
                        let [t, r] = i.useState(C());
                        return T(() => {
                            r(e => null != e ? e : String(k++))
                        }, [void 0]), t ? `radix-${t}` : ""
                    }(), m = (0, i.useRef)(0), g = null != a ? a : u.disableHoverableContent, h = null != s ? s : u.delayDuration, v = (0, i.useRef)(!1), [y = !1, w] = function({
                        prop: e,
                        defaultProp: t,
                        onChange: r = () => {}
                    }) {
                        let [n, o] = function({
                            defaultProp: e,
                            onChange: t
                        }) {
                            let r = (0, i.useState)(e),
                                [n] = r,
                                o = (0, i.useRef)(n),
                                l = b(t);
                            return (0, i.useEffect)(() => {
                                o.current !== n && (l(n), o.current = n)
                            }, [n, o, l]), r
                        }({
                            defaultProp: t,
                            onChange: r
                        }), l = void 0 !== e, a = l ? e : n, s = b(r);
                        return [a, (0, i.useCallback)(t => {
                            if (l) {
                                let r = "function" == typeof t ? t(e) : t;
                                r !== e && s(r)
                            } else o(t)
                        }, [l, e, o, s])]
                    }({
                        prop: n,
                        defaultProp: o,
                        onChange: e => {
                            e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(te))) : u.onClose(), null == l || l(e)
                        }
                    }), x = (0, i.useMemo)(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), E = (0, i.useCallback)(() => {
                        window.clearTimeout(m.current), v.current = !1, w(!0)
                    }, [w]), R = (0, i.useCallback)(() => {
                        window.clearTimeout(m.current), w(!1)
                    }, [w]), O = (0, i.useCallback)(() => {
                        window.clearTimeout(m.current), m.current = window.setTimeout(() => {
                            v.current = !0, w(!0)
                        }, h)
                    }, [h, w]);
                    return (0, i.useEffect)(() => () => window.clearTimeout(m.current), []), (0, i.createElement)(e2, c, (0, i.createElement)(to, {
                        scope: t,
                        contentId: p,
                        open: y,
                        stateAttribute: x,
                        trigger: d,
                        onTriggerChange: f,
                        onTriggerEnter: (0, i.useCallback)(() => {
                            u.isOpenDelayed ? O() : E()
                        }, [u.isOpenDelayed, O, E]),
                        onTriggerLeave: (0, i.useCallback)(() => {
                            g ? R() : window.clearTimeout(m.current)
                        }, [R, g]),
                        onOpen: E,
                        onClose: R,
                        disableHoverableContent: g
                    }, r))
                },
                tw = ta,
                tx = tp
        },
        94096: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                J$: function() {
                    return ee
                },
                ZP: function() {
                    return et
                }
            });
            var o = r(37858),
                i = r(67953);
            let l = () => {},
                a = l(),
                s = Object,
                u = e => e === a,
                c = e => "function" == typeof e,
                d = (e, t) => ({ ...e,
                    ...t
                }),
                f = e => c(e.then),
                p = new WeakMap,
                m = 0,
                g = e => {
                    let t, r;
                    let n = typeof e,
                        o = e && e.constructor,
                        i = o == Date;
                    if (s(e) !== e || i || o == RegExp) t = i ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = p.get(e)) return t;
                        if (t = ++m + "~", p.set(e, t), o == Array) {
                            for (r = 0, t = "@"; r < e.length; r++) t += g(e[r]) + ",";
                            p.set(e, t)
                        }
                        if (o == s) {
                            t = "#";
                            let n = s.keys(e).sort();
                            for (; !u(r = n.pop());) u(e[r]) || (t += r + ":" + g(e[r]) + ",");
                            p.set(e, t)
                        }
                    }
                    return t
                },
                h = new WeakMap,
                b = {},
                v = {},
                y = "undefined",
                w = typeof window != y,
                x = typeof document != y,
                E = () => w && typeof window.requestAnimationFrame != y,
                T = (e, t) => {
                    let r = h.get(e);
                    return [() => !u(t) && e.get(t) || b, n => {
                        if (!u(t)) {
                            let o = e.get(t);
                            t in v || (v[t] = o), r[5](t, d(o, n), o || b)
                        }
                    }, r[6], () => !u(t) && t in v ? v[t] : !u(t) && e.get(t) || b]
                },
                C = !0,
                [k, R] = w && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [l, l],
                O = {
                    initFocus: e => (x && document.addEventListener("visibilitychange", e), k("focus", e), () => {
                        x && document.removeEventListener("visibilitychange", e), R("focus", e)
                    }),
                    initReconnect: e => {
                        let t = () => {
                                C = !0, e()
                            },
                            r = () => {
                                C = !1
                            };
                        return k("online", t), k("offline", r), () => {
                            R("online", t), R("offline", r)
                        }
                    }
                },
                S = !o.useId,
                P = !w || "Deno" in window,
                _ = e => E() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                L = P ? o.useEffect : o.useLayoutEffect,
                D = "undefined" != typeof navigator && navigator.connection,
                A = !P && D && (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData),
                N = e => {
                    if (c(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? g(e) : "", t]
                },
                z = 0,
                M = () => ++z;
            var I = {
                ERROR_REVALIDATE_EVENT: 3,
                FOCUS_EVENT: 0,
                MUTATE_EVENT: 2,
                RECONNECT_EVENT: 1
            };
            async function V(...e) {
                let [t, r, n, o] = e, i = d({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof o ? {
                    revalidate: o
                } : o || {}), l = i.populateCache, s = i.rollbackOnError, p = i.optimisticData, m = e => "function" == typeof s ? s(e) : !1 !== s, g = i.throwOnError;
                if (c(r)) {
                    let e = [];
                    for (let n of t.keys()) !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
                    return Promise.all(e.map(b))
                }
                return b(r);
                async function b(r) {
                    let o;
                    let [s] = N(r);
                    if (!s) return;
                    let [d, b] = T(t, s), [v, y, w, x] = h.get(t), E = () => {
                        let e = v[s];
                        return (c(i.revalidate) ? i.revalidate(d().data, r) : !1 !== i.revalidate) && (delete w[s], delete x[s], e && e[0]) ? e[0](2).then(() => d().data) : d().data
                    };
                    if (e.length < 3) return E();
                    let C = n,
                        k = M();
                    y[s] = [k, 0];
                    let R = !u(p),
                        O = d(),
                        S = O.data,
                        P = O._c,
                        _ = u(P) ? S : P;
                    if (R && b({
                            data: p = c(p) ? p(_, S) : p,
                            _c: _
                        }), c(C)) try {
                        C = C(_)
                    } catch (e) {
                        o = e
                    }
                    if (C && f(C)) {
                        if (C = await C.catch(e => {
                                o = e
                            }), k !== y[s][0]) {
                            if (o) throw o;
                            return C
                        }
                        o && R && m(o) && (l = !0, b({
                            data: _,
                            _c: a
                        }))
                    }
                    if (l && !o && (c(l) ? b({
                            data: l(C, _),
                            error: a,
                            _c: a
                        }) : b({
                            data: C,
                            error: a,
                            _c: a
                        })), y[s][1] = M(), Promise.resolve(E()).then(() => {
                            b({
                                _c: a
                            })
                        }), o) {
                        if (g) throw o;
                        return
                    }
                    return C
                }
            }
            let j = (e, t) => {
                    for (let r in e) e[r][0] && e[r][0](t)
                },
                $ = (e, t) => {
                    if (!h.has(e)) {
                        let r = d(O, t),
                            n = {},
                            o = V.bind(a, e),
                            i = l,
                            s = {},
                            u = (e, t) => {
                                let r = s[e] || [];
                                return s[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            c = (t, r, n) => {
                                e.set(t, r);
                                let o = s[t];
                                if (o)
                                    for (let e of o) e(r, n)
                            },
                            f = () => {
                                if (!h.has(e) && (h.set(e, [n, {}, {}, {}, o, c, u]), !P)) {
                                    let t = r.initFocus(setTimeout.bind(a, j.bind(a, n, 0))),
                                        o = r.initReconnect(setTimeout.bind(a, j.bind(a, n, 1)));
                                    i = () => {
                                        t && t(), o && o(), h.delete(e)
                                    }
                                }
                            };
                        return f(), [e, o, f, i]
                    }
                    return [e, h.get(e)[4]]
                },
                [F, W] = $(new Map),
                H = d({
                    onLoadingSlow: l,
                    onSuccess: l,
                    onError: l,
                    onErrorRetry: (e, t, r, n, o) => {
                        let i = r.errorRetryCount,
                            l = o.retryCount,
                            a = ~~((Math.random() + .5) * (1 << (l < 8 ? l : 8))) * r.errorRetryInterval;
                        (u(i) || !(l > i)) && setTimeout(n, a, o)
                    },
                    onDiscarded: l,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: A ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: A ? 5e3 : 3e3,
                    compare: (e, t) => g(e) == g(t),
                    isPaused: () => !1,
                    cache: F,
                    mutate: W,
                    fallback: {}
                }, {
                    isOnline: () => C,
                    isVisible: () => {
                        let e = x && document.visibilityState;
                        return u(e) || "hidden" !== e
                    }
                }),
                B = (e, t) => {
                    let r = d(e, t);
                    if (t) {
                        let {
                            use: n,
                            fallback: o
                        } = e, {
                            use: i,
                            fallback: l
                        } = t;
                        n && i && (r.use = n.concat(i)), o && l && (r.fallback = d(o, l))
                    }
                    return r
                },
                U = (0, o.createContext)({}),
                G = w && window.__SWR_DEVTOOLS_USE__,
                q = G ? window.__SWR_DEVTOOLS_USE__ : [],
                J = e => c(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                Y = () => d(H, (0, o.useContext)(U)),
                X = q.concat(e => (t, r, n) => {
                    let o = r && ((...e) => {
                        let [n] = N(t), [, , , o] = h.get(F);
                        if (n.startsWith("$inf$")) return r(...e);
                        let i = o[n];
                        return u(i) ? r(...e) : (delete o[n], i)
                    });
                    return e(t, o, n)
                }),
                K = (e, t, r) => {
                    let n = t[e] || (t[e] = []);
                    return n.push(r), () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1], n.pop())
                    }
                };
            G && (window.__SWR_DEVTOOLS_REACT__ = o);
            let Z = o.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    if ("rejected" === e.status) throw e.reason;
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
                }),
                Q = {
                    dedupe: !0
                },
                ee = s.defineProperty(e => {
                    let {
                        value: t
                    } = e, r = (0, o.useContext)(U), n = c(t), i = (0, o.useMemo)(() => n ? t(r) : t, [n, r, t]), l = (0, o.useMemo)(() => n ? i : B(r, i), [n, r, i]), s = i && i.provider, u = (0, o.useRef)(a);
                    s && !u.current && (u.current = $(s(l.cache || F), i));
                    let f = u.current;
                    return f && (l.cache = f[0], l.mutate = f[1]), L(() => {
                        if (f) return f[2] && f[2](), f[3]
                    }, []), (0, o.createElement)(U.Provider, d(e, {
                        value: l
                    }))
                }, "defaultValue", {
                    value: H
                }),
                et = (n = (e, t, r) => {
                    let {
                        cache: n,
                        compare: l,
                        suspense: s,
                        fallbackData: f,
                        revalidateOnMount: p,
                        revalidateIfStale: m,
                        refreshInterval: g,
                        refreshWhenHidden: b,
                        refreshWhenOffline: v,
                        keepPreviousData: y
                    } = r, [w, x, E, C] = h.get(n), [k, R] = N(e), O = (0, o.useRef)(!1), D = (0, o.useRef)(!1), A = (0, o.useRef)(k), z = (0, o.useRef)(t), j = (0, o.useRef)(r), $ = () => j.current, F = () => $().isVisible() && $().isOnline(), [W, H, B, U] = T(n, k), G = (0, o.useRef)({}).current, q = u(f) ? r.fallback[k] : f, J = (e, t) => {
                        for (let r in G)
                            if ("data" === r) {
                                if (!l(e[r], t[r]) && (!u(e[r]) || !l(el, t[r]))) return !1
                            } else if (t[r] !== e[r]) return !1;
                        return !0
                    }, Y = (0, o.useMemo)(() => {
                        let e = !!k && !!t && (u(p) ? !$().isPaused() && !s && (!!u(m) || m) : p),
                            r = t => {
                                let r = d(t);
                                return (delete r._k, e) ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...r
                                } : r
                            },
                            n = W(),
                            o = U(),
                            i = r(n),
                            l = n === o ? i : r(o),
                            a = i;
                        return [() => {
                            let e = r(W());
                            return J(e, a) ? (a.data = e.data, a.isLoading = e.isLoading, a.isValidating = e.isValidating, a.error = e.error, a) : (a = e, e)
                        }, () => l]
                    }, [n, k]), X = (0, i.useSyncExternalStore)((0, o.useCallback)(e => B(k, (t, r) => {
                        J(r, t) || e()
                    }), [n, k]), Y[0], Y[1]), ee = !O.current, et = w[k] && w[k].length > 0, er = X.data, en = u(er) ? q : er, eo = X.error, ei = (0, o.useRef)(en), el = y ? u(er) ? ei.current : er : en, ea = (!et || !!u(eo)) && (ee && !u(p) ? p : !$().isPaused() && (s ? !u(en) && m : u(en) || m)), es = !!(k && t && ee && ea), eu = u(X.isValidating) ? es : X.isValidating, ec = u(X.isLoading) ? es : X.isLoading, ed = (0, o.useCallback)(async e => {
                        let t, n;
                        let o = z.current;
                        if (!k || !o || D.current || $().isPaused()) return !1;
                        let i = !0,
                            s = e || {},
                            d = !E[k] || !s.dedupe,
                            f = () => S ? !D.current && k === A.current && O.current : k === A.current,
                            p = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            m = () => {
                                H(p)
                            },
                            g = () => {
                                let e = E[k];
                                e && e[1] === n && delete E[k]
                            },
                            h = {
                                isValidating: !0
                            };
                        u(W().data) && (h.isLoading = !0);
                        try {
                            if (d && (H(h), r.loadingTimeout && u(W().data) && setTimeout(() => {
                                    i && f() && $().onLoadingSlow(k, r)
                                }, r.loadingTimeout), E[k] = [o(R), M()]), [t, n] = E[k], t = await t, d && setTimeout(g, r.dedupingInterval), !E[k] || E[k][1] !== n) return d && f() && $().onDiscarded(k), !1;
                            p.error = a;
                            let e = x[k];
                            if (!u(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return m(), d && f() && $().onDiscarded(k), !1;
                            let s = W().data;
                            p.data = l(s, t) ? s : t, d && f() && $().onSuccess(t, k, r)
                        } catch (r) {
                            g();
                            let e = $(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            !e.isPaused() && (p.error = r, d && f() && (e.onError(r, k, e), (!0 === t || c(t) && t(r)) && (!$().revalidateOnFocus || !$().revalidateOnReconnect || F()) && e.onErrorRetry(r, k, e, e => {
                                let t = w[k];
                                t && t[0] && t[0](I.ERROR_REVALIDATE_EVENT, e)
                            }, {
                                retryCount: (s.retryCount || 0) + 1,
                                dedupe: !0
                            })))
                        }
                        return i = !1, m(), !0
                    }, [k, n]), ef = (0, o.useCallback)((...e) => V(n, A.current, ...e), []);
                    if (L(() => {
                            z.current = t, j.current = r, u(er) || (ei.current = er)
                        }), L(() => {
                            if (!k) return;
                            let e = ed.bind(a, Q),
                                t = 0,
                                r = K(k, w, (r, n = {}) => {
                                    if (r == I.FOCUS_EVENT) {
                                        let r = Date.now();
                                        $().revalidateOnFocus && r > t && F() && (t = r + $().focusThrottleInterval, e())
                                    } else if (r == I.RECONNECT_EVENT) $().revalidateOnReconnect && F() && e();
                                    else if (r == I.MUTATE_EVENT) return ed();
                                    else if (r == I.ERROR_REVALIDATE_EVENT) return ed(n)
                                });
                            return D.current = !1, A.current = k, O.current = !0, H({
                                _k: R
                            }), ea && (u(en) || P ? e() : _(e)), () => {
                                D.current = !0, r()
                            }
                        }, [k]), L(() => {
                            let e;

                            function t() {
                                let t = c(g) ? g(W().data) : g;
                                t && -1 !== e && (e = setTimeout(r, t))
                            }

                            function r() {
                                !W().error && (b || $().isVisible()) && (v || $().isOnline()) ? ed(Q).then(t) : t()
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }, [g, b, v, k]), (0, o.useDebugValue)(el), s && u(en) && k) {
                        if (!S && P) throw Error("Fallback data is required when using suspense in SSR.");
                        z.current = t, j.current = r, D.current = !1;
                        let e = C[k];
                        if (u(e) || Z(ef(e)), u(eo)) {
                            let e = ed(Q);
                            u(el) || (e.status = "fulfilled", e.value = !0), Z(e)
                        } else throw eo
                    }
                    return {
                        mutate: ef,
                        get data() {
                            return G.data = !0, el
                        },
                        get error() {
                            return G.error = !0, eo
                        },
                        get isValidating() {
                            return G.isValidating = !0, eu
                        },
                        get isLoading() {
                            return G.isLoading = !0, ec
                        }
                    }
                }, function(...e) {
                    let t = Y(),
                        [r, o, i] = J(e),
                        l = B(t, i),
                        a = n,
                        {
                            use: s
                        } = l,
                        u = (s || []).concat(X);
                    for (let e = u.length; e--;) a = u[e](a);
                    return a(r, o || l.fetcher || null, l)
                })
        },
        81310: function(e, t, r) {
            "use strict";
            r.d(t, {
                m6: function() {
                    return M
                }
            });
            let n = /^\[(.+)\]$/;

            function o(e, t) {
                let r = e;
                return t.split("-").forEach(e => {
                    r.nextPart.has(e) || r.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), r = r.nextPart.get(e)
                }), r
            }
            let i = /\s+/;

            function l() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    let r;
                    if ("string" == typeof t) return t;
                    let n = "";
                    for (let o = 0; o < t.length; o++) t[o] && (r = e(t[o])) && (n && (n += " "), n += r);
                    return n
                }(e)) && (n && (n += " "), n += t);
                return n
            }

            function a(e) {
                let t = t => t[e] || [];
                return t.isThemeGetter = !0, t
            }
            let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                u = /^\d+\/\d+$/,
                c = new Set(["px", "full", "screen"]),
                d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                g = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function h(e) {
                return v(e) || c.has(e) || u.test(e)
            }

            function b(e) {
                return L(e, "length", D)
            }

            function v(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function y(e) {
                return L(e, "number", v)
            }

            function w(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function x(e) {
                return e.endsWith("%") && v(e.slice(0, -1))
            }

            function E(e) {
                return s.test(e)
            }

            function T(e) {
                return d.test(e)
            }
            let C = new Set(["length", "size", "percentage"]);

            function k(e) {
                return L(e, C, A)
            }

            function R(e) {
                return L(e, "position", A)
            }
            let O = new Set(["image", "url"]);

            function S(e) {
                return L(e, O, z)
            }

            function P(e) {
                return L(e, "", N)
            }

            function _() {
                return !0
            }

            function L(e, t, r) {
                let n = s.exec(e);
                return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
            }

            function D(e) {
                return f.test(e) && !p.test(e)
            }

            function A() {
                return !1
            }

            function N(e) {
                return m.test(e)
            }

            function z(e) {
                return g.test(e)
            }
            let M = function(e, ...t) {
                let r, a, s;
                let u = function(i) {
                    var l;
                    return a = (r = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let t = 0,
                                r = new Map,
                                n = new Map;

                            function o(o, i) {
                                r.set(o, i), ++t > e && (t = 0, n = r, r = new Map)
                            }
                            return {
                                get(e) {
                                    let t = r.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                                },
                                set(e, t) {
                                    r.has(e) ? r.set(e, t) : o(e, t)
                                }
                            }
                        }((l = t.reduce((e, t) => t(e), e())).cacheSize),
                        splitModifiers: function(e) {
                            let t = e.separator,
                                r = 1 === t.length,
                                n = t[0],
                                o = t.length;
                            return function(e) {
                                let i;
                                let l = [],
                                    a = 0,
                                    s = 0;
                                for (let u = 0; u < e.length; u++) {
                                    let c = e[u];
                                    if (0 === a) {
                                        if (c === n && (r || e.slice(u, u + o) === t)) {
                                            l.push(e.slice(s, u)), s = u + o;
                                            continue
                                        }
                                        if ("/" === c) {
                                            i = u;
                                            continue
                                        }
                                    }
                                    "[" === c ? a++ : "]" === c && a--
                                }
                                let u = 0 === l.length ? e : e.substring(s),
                                    c = u.startsWith("!"),
                                    d = c ? u.substring(1) : u;
                                return {
                                    modifiers: l,
                                    hasImportantModifier: c,
                                    baseClassName: d,
                                    maybePostfixModifierPosition: i && i > s ? i - s : void 0
                                }
                            }
                        }(l),
                        ... function(e) {
                            let t = function(e) {
                                    var t;
                                    let {
                                        theme: r,
                                        prefix: n
                                    } = e, i = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (t = Object.entries(e.classGroups), n ? t.map(([e, t]) => [e, t.map(e => "string" == typeof e ? n + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [n + e, t])) : e)]) : t).forEach(([e, t]) => {
                                        (function e(t, r, n, i) {
                                            t.forEach(t => {
                                                if ("string" == typeof t) {
                                                    ("" === t ? r : o(r, t)).classGroupId = n;
                                                    return
                                                }
                                                if ("function" == typeof t) {
                                                    if (t.isThemeGetter) {
                                                        e(t(i), r, n, i);
                                                        return
                                                    }
                                                    r.validators.push({
                                                        validator: t,
                                                        classGroupId: n
                                                    });
                                                    return
                                                }
                                                Object.entries(t).forEach(([t, l]) => {
                                                    e(l, o(r, t), n, i)
                                                })
                                            })
                                        })(t, i, e, r)
                                    }), i
                                }(e),
                                {
                                    conflictingClassGroups: r,
                                    conflictingClassGroupModifiers: i
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let r = e.split("-");
                                    return "" === r[0] && 1 !== r.length && r.shift(),
                                        function e(t, r) {
                                            if (0 === t.length) return r.classGroupId;
                                            let n = t[0],
                                                o = r.nextPart.get(n),
                                                i = o ? e(t.slice(1), o) : void 0;
                                            if (i) return i;
                                            if (0 === r.validators.length) return;
                                            let l = t.join("-");
                                            return r.validators.find(({
                                                validator: e
                                            }) => e(l)) ? .classGroupId
                                        }(r, t) || function(e) {
                                            if (n.test(e)) {
                                                let t = n.exec(e)[1],
                                                    r = t ? .substring(0, t.indexOf(":"));
                                                if (r) return "arbitrary.." + r
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    let n = r[e] || [];
                                    return t && i[e] ? [...n, ...i[e]] : n
                                }
                            }
                        }(l)
                    }).cache.get, s = r.cache.set, u = c, c(i)
                };

                function c(e) {
                    let t = a(e);
                    if (t) return t;
                    let n = function(e, t) {
                        let {
                            splitModifiers: r,
                            getClassGroupId: n,
                            getConflictingClassGroupIds: o
                        } = t, l = new Set;
                        return e.trim().split(i).map(e => {
                            let {
                                modifiers: t,
                                hasImportantModifier: o,
                                baseClassName: i,
                                maybePostfixModifierPosition: l
                            } = r(e), a = n(l ? i.substring(0, l) : i), s = !!l;
                            if (!a) {
                                if (!l || !(a = n(i))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                s = !1
                            }
                            let u = (function(e) {
                                if (e.length <= 1) return e;
                                let t = [],
                                    r = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                                }), t.push(...r.sort()), t
                            })(t).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: o ? u + "!" : u,
                                classGroupId: a,
                                originalClassName: e,
                                hasPostfixModifier: s
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: t,
                                classGroupId: r,
                                hasPostfixModifier: n
                            } = e, i = t + r;
                            return !l.has(i) && (l.add(i), o(r, n).forEach(e => l.add(t + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, r);
                    return s(e, n), n
                }
                return function() {
                    return u(l.apply(null, arguments))
                }
            }(function() {
                let e = a("colors"),
                    t = a("spacing"),
                    r = a("blur"),
                    n = a("brightness"),
                    o = a("borderColor"),
                    i = a("borderRadius"),
                    l = a("borderSpacing"),
                    s = a("borderWidth"),
                    u = a("contrast"),
                    c = a("grayscale"),
                    d = a("hueRotate"),
                    f = a("invert"),
                    p = a("gap"),
                    m = a("gradientColorStops"),
                    g = a("gradientColorStopPositions"),
                    C = a("inset"),
                    O = a("margin"),
                    L = a("opacity"),
                    D = a("padding"),
                    A = a("saturate"),
                    N = a("scale"),
                    z = a("sepia"),
                    M = a("skew"),
                    I = a("space"),
                    V = a("translate"),
                    j = () => ["auto", "contain", "none"],
                    $ = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    F = () => ["auto", E, t],
                    W = () => [E, t],
                    H = () => ["", h, b],
                    B = () => ["auto", v, E],
                    U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    G = () => ["solid", "dashed", "dotted", "double", "none"],
                    q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
                    J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    Y = () => ["", "0", E],
                    X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    K = () => [v, y],
                    Z = () => [v, E];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [_],
                        spacing: [h, b],
                        blur: ["none", "", T, E],
                        brightness: K(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", T, E],
                        borderSpacing: W(),
                        borderWidth: H(),
                        contrast: K(),
                        grayscale: Y(),
                        hueRotate: Z(),
                        invert: Y(),
                        gap: W(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [x, b],
                        inset: F(),
                        margin: F(),
                        opacity: K(),
                        padding: W(),
                        saturate: K(),
                        scale: K(),
                        sepia: Y(),
                        skew: Z(),
                        space: W(),
                        translate: W()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", E]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [T]
                        }],
                        "break-after": [{
                            "break-after": X()
                        }],
                        "break-before": [{
                            "break-before": X()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...U(), E]
                        }],
                        overflow: [{
                            overflow: $()
                        }],
                        "overflow-x": [{
                            "overflow-x": $()
                        }],
                        "overflow-y": [{
                            "overflow-y": $()
                        }],
                        overscroll: [{
                            overscroll: j()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": j()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": j()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [C]
                        }],
                        "inset-x": [{
                            "inset-x": [C]
                        }],
                        "inset-y": [{
                            "inset-y": [C]
                        }],
                        start: [{
                            start: [C]
                        }],
                        end: [{
                            end: [C]
                        }],
                        top: [{
                            top: [C]
                        }],
                        right: [{
                            right: [C]
                        }],
                        bottom: [{
                            bottom: [C]
                        }],
                        left: [{
                            left: [C]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", w, E]
                        }],
                        basis: [{
                            basis: F()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", E]
                        }],
                        grow: [{
                            grow: Y()
                        }],
                        shrink: [{
                            shrink: Y()
                        }],
                        order: [{
                            order: ["first", "last", "none", w, E]
                        }],
                        "grid-cols": [{
                            "grid-cols": [_]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", w, E]
                            }, E]
                        }],
                        "col-start": [{
                            "col-start": B()
                        }],
                        "col-end": [{
                            "col-end": B()
                        }],
                        "grid-rows": [{
                            "grid-rows": [_]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [w, E]
                            }, E]
                        }],
                        "row-start": [{
                            "row-start": B()
                        }],
                        "row-end": [{
                            "row-end": B()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", E]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", E]
                        }],
                        gap: [{
                            gap: [p]
                        }],
                        "gap-x": [{
                            "gap-x": [p]
                        }],
                        "gap-y": [{
                            "gap-y": [p]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...J()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...J(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...J(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [D]
                        }],
                        px: [{
                            px: [D]
                        }],
                        py: [{
                            py: [D]
                        }],
                        ps: [{
                            ps: [D]
                        }],
                        pe: [{
                            pe: [D]
                        }],
                        pt: [{
                            pt: [D]
                        }],
                        pr: [{
                            pr: [D]
                        }],
                        pb: [{
                            pb: [D]
                        }],
                        pl: [{
                            pl: [D]
                        }],
                        m: [{
                            m: [O]
                        }],
                        mx: [{
                            mx: [O]
                        }],
                        my: [{
                            my: [O]
                        }],
                        ms: [{
                            ms: [O]
                        }],
                        me: [{
                            me: [O]
                        }],
                        mt: [{
                            mt: [O]
                        }],
                        mr: [{
                            mr: [O]
                        }],
                        mb: [{
                            mb: [O]
                        }],
                        ml: [{
                            ml: [O]
                        }],
                        "space-x": [{
                            "space-x": [I]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [I]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t]
                        }],
                        "min-w": [{
                            "min-w": [E, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [E, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [T]
                            }, T]
                        }],
                        h: [{
                            h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [E, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", T, b]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                        }],
                        "font-family": [{
                            font: [_]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", v, y]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", h, E]
                        }],
                        "list-image": [{
                            "list-image": ["none", E]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", E]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [L]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [L]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...G(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", h, b]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", h, E]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: W()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", E]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [L]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...U(), R]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", k]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, S]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [g]
                        }],
                        "gradient-via-pos": [{
                            via: [g]
                        }],
                        "gradient-to-pos": [{
                            to: [g]
                        }],
                        "gradient-from": [{
                            from: [m]
                        }],
                        "gradient-via": [{
                            via: [m]
                        }],
                        "gradient-to": [{
                            to: [m]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [L]
                        }],
                        "border-style": [{
                            border: [...G(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [L]
                        }],
                        "divide-style": [{
                            divide: G()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: ["", ...G()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [h, E]
                        }],
                        "outline-w": [{
                            outline: [h, b]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: H()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [L]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [h, b]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", T, P]
                        }],
                        "shadow-color": [{
                            shadow: [_]
                        }],
                        opacity: [{
                            opacity: [L]
                        }],
                        "mix-blend": [{
                            "mix-blend": q()
                        }],
                        "bg-blend": [{
                            "bg-blend": q()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [u]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", T, E]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [d]
                        }],
                        invert: [{
                            invert: [f]
                        }],
                        saturate: [{
                            saturate: [A]
                        }],
                        sepia: [{
                            sepia: [z]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [u]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [d]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [f]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [L]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [A]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [z]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [l]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [l]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [l]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
                        }],
                        duration: [{
                            duration: Z()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", E]
                        }],
                        delay: [{
                            delay: Z()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", E]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [N]
                        }],
                        "scale-x": [{
                            "scale-x": [N]
                        }],
                        "scale-y": [{
                            "scale-y": [N]
                        }],
                        rotate: [{
                            rotate: [w, E]
                        }],
                        "translate-x": [{
                            "translate-x": [V]
                        }],
                        "translate-y": [{
                            "translate-y": [V]
                        }],
                        "skew-x": [{
                            "skew-x": [M]
                        }],
                        "skew-y": [{
                            "skew-y": [M]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": W()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": W()
                        }],
                        "scroll-my": [{
                            "scroll-my": W()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": W()
                        }],
                        "scroll-me": [{
                            "scroll-me": W()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": W()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": W()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": W()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": W()
                        }],
                        "scroll-p": [{
                            "scroll-p": W()
                        }],
                        "scroll-px": [{
                            "scroll-px": W()
                        }],
                        "scroll-py": [{
                            "scroll-py": W()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": W()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": W()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": W()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": W()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": W()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": W()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", E]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [h, b, y]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        },
        74422: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return n
                }
            });
            let n = "0x0000000000000000000000000000000000000000"
        },
        85120: function(e, t, r) {
            "use strict";

            function n(e, t) {
                let r = e.toString(),
                    n = r.startsWith("-");
                n && (r = r.slice(1));
                let [o, i] = [(r = r.padStart(t, "0")).slice(0, r.length - t), r.slice(r.length - t)];
                return i = i.replace(/(0+)$/, ""), `${n?"-":""}${o||"0"}${i?`.${i}`:""}`
            }
            r.d(t, {
                b: function() {
                    return n
                }
            })
        }
    }
]);