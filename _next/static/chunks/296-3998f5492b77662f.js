! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "570e743b-45e1-4ab4-9d58-1a392122bb7e", e._sentryDebugIdIdentifier = "sentry-dbid-570e743b-45e1-4ab4-9d58-1a392122bb7e")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [296], {
        38910: function(e, t, n) {
            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(67364), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        31244: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return v
                }
            });
            let r = n(7982),
                o = n(79540),
                i = n(46328),
                l = o._(n(37858)),
                a = r._(n(18645)),
                u = r._(n(94683)),
                s = n(81715),
                d = n(43089),
                f = n(74160);
            n(51630);
            let c = n(25626),
                p = r._(n(40251)),
                g = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(e, t, n, r, o, i, l) {
                let a = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && o(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                o = !1;
                            n.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                }))
            }

            function h(e) {
                let [t, n] = l.version.split(".", 2), r = parseInt(t, 10), o = parseInt(n, 10);
                return r > 18 || 18 === r && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let y = (0, l.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: o,
                    height: a,
                    width: u,
                    decoding: s,
                    className: d,
                    style: f,
                    fetchPriority: c,
                    placeholder: p,
                    loading: g,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: v,
                    onLoadingCompleteRef: _,
                    setBlurComplete: w,
                    setShowAltText: j,
                    sizesInput: C,
                    onLoad: x,
                    onError: P,
                    ...S
                } = e;
                return (0, i.jsx)("img", { ...S,
                    ...h(c),
                    loading: g,
                    width: u,
                    height: a,
                    decoding: s,
                    "data-nimg": b ? "fill" : "1",
                    className: d,
                    style: f,
                    sizes: o,
                    srcSet: r,
                    src: n,
                    ref: (0, l.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (P && (e.src = e.src), e.complete && m(e, p, v, _, w, y, C))
                    }, [n, p, v, _, w, P, y, C, t]),
                    onLoad: e => {
                        m(e.currentTarget, p, v, _, w, y, C)
                    },
                    onError: e => {
                        j(!0), "empty" !== p && w(!0), P && P(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...h(n.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(n.src, r), null) : (0, i.jsx)(u.default, {
                    children: (0, i.jsx)("link", {
                        rel: "preload",
                        href: n.srcSet ? void 0 : n.src,
                        ...r
                    }, "__nimg-" + n.src + n.srcSet + n.sizes)
                })
            }
            let v = (0, l.forwardRef)((e, t) => {
                let n = (0, l.useContext)(c.RouterContext),
                    r = (0, l.useContext)(f.ImageConfigContext),
                    o = (0, l.useMemo)(() => {
                        let e = g || r || d.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [r]),
                    {
                        onLoad: a,
                        onLoadingComplete: u
                    } = e,
                    m = (0, l.useRef)(a);
                (0, l.useEffect)(() => {
                    m.current = a
                }, [a]);
                let h = (0, l.useRef)(u);
                (0, l.useEffect)(() => {
                    h.current = u
                }, [u]);
                let [v, _] = (0, l.useState)(!1), [w, j] = (0, l.useState)(!1), {
                    props: C,
                    meta: x
                } = (0, s.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: v,
                    showAltText: w
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(y, { ...C,
                        unoptimized: x.unoptimized,
                        placeholder: x.placeholder,
                        fill: x.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: h,
                        setBlurComplete: _,
                        setShowAltText: j,
                        sizesInput: e.sizes,
                        ref: t
                    }), x.priority ? (0, i.jsx)(b, {
                        isAppRouter: !n,
                        imgAttributes: C
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        75856: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            let r = n(7982),
                o = n(46328),
                i = r._(n(37858)),
                l = n(67003),
                a = n(3929),
                u = n(84696),
                s = n(43408),
                d = n(18077),
                f = n(25626),
                c = n(72993),
                p = n(17737),
                g = n(38910),
                m = n(77903),
                h = n(37393),
                y = new Set;

            function b(e, t, n, r, o, i) {
                if ("undefined" != typeof window && (i || (0, a.isLocalURL)(t))) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (y.has(o)) return;
                        y.add(o)
                    }
                    Promise.resolve(i ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(e => {})
                }
            }

            function v(e) {
                return "string" == typeof e ? e : (0, u.formatUrl)(e)
            }
            let _ = i.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: u,
                    as: y,
                    children: _,
                    prefetch: w = null,
                    passHref: j,
                    replace: C,
                    shallow: x,
                    scroll: P,
                    locale: S,
                    onClick: O,
                    onMouseEnter: M,
                    onTouchStart: E,
                    legacyBehavior: I = !1,
                    ...k
                } = e;
                n = _, I && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let z = i.default.useContext(f.RouterContext),
                    R = i.default.useContext(c.AppRouterContext),
                    A = null != z ? z : R,
                    D = !z,
                    L = !1 !== w,
                    T = null === w ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: U,
                        as: N
                    } = i.default.useMemo(() => {
                        if (!z) {
                            let e = v(u);
                            return {
                                href: e,
                                as: y ? v(y) : e
                            }
                        }
                        let [e, t] = (0, l.resolveHref)(z, u, !0);
                        return {
                            href: e,
                            as: y ? (0, l.resolveHref)(z, y) : t || e
                        }
                    }, [z, u, y]),
                    F = i.default.useRef(U),
                    B = i.default.useRef(N);
                I && (r = i.default.Children.only(n));
                let G = I ? r && "object" == typeof r && r.ref : t,
                    [H, K, W] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    q = i.default.useCallback(e => {
                        (B.current !== N || F.current !== U) && (W(), B.current = N, F.current = U), H(e), G && ("function" == typeof G ? G(e) : "object" == typeof G && (G.current = e))
                    }, [N, G, U, W, H]);
                i.default.useEffect(() => {
                    A && K && L && b(A, U, N, {
                        locale: S
                    }, {
                        kind: T
                    }, D)
                }, [N, U, K, S, L, null == z ? void 0 : z.locale, A, D, T]);
                let V = {
                    ref: q,
                    onClick(e) {
                        I || "function" != typeof O || O(e), I && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), A && !e.defaultPrevented && function(e, t, n, r, o, l, u, s, d) {
                            let {
                                nodeName: f
                            } = e.currentTarget;
                            if ("A" === f.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !d && !(0, a.isLocalURL)(n))) return;
                            e.preventDefault();
                            let c = () => {
                                let e = null == u || u;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: s,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            d ? i.default.startTransition(c) : c()
                        }(e, A, U, N, C, x, P, S, D)
                    },
                    onMouseEnter(e) {
                        I || "function" != typeof M || M(e), I && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), A && (L || !D) && b(A, U, N, {
                            locale: S,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: T
                        }, D)
                    },
                    onTouchStart: function(e) {
                        I || "function" != typeof E || E(e), I && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), A && (L || !D) && b(A, U, N, {
                            locale: S,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: T
                        }, D)
                    }
                };
                if ((0, s.isAbsoluteUrl)(N)) V.href = N;
                else if (!I || j || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== S ? S : null == z ? void 0 : z.locale,
                        t = (null == z ? void 0 : z.isLocaleDomain) && (0, g.getDomainLocale)(N, e, null == z ? void 0 : z.locales, null == z ? void 0 : z.domainLocales);
                    V.href = t || (0, m.addBasePath)((0, d.addLocale)(N, e, null == z ? void 0 : z.defaultLocale))
                }
                return I ? i.default.cloneElement(r, V) : (0, o.jsx)("a", { ...k,
                    ...V,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        17737: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(37858),
                o = n(61804),
                i = "function" == typeof IntersectionObserver,
                l = new Map,
                a = [];

            function u(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: u
                } = e, s = u || !i, [d, f] = (0, r.useState)(!1), c = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    c.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (i) {
                        if (s || d) return;
                        let e = c.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: i
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = a.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, a.push(n), l.set(n, t), t
                            }(n);
                            return i.set(e, t), o.observe(e),
                                function() {
                                    if (i.delete(e), o.unobserve(e), 0 === i.size) {
                                        o.disconnect(), l.delete(r);
                                        let e = a.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && a.splice(e, 1)
                                    }
                                }
                        }(e, e => e && f(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!d) {
                        let e = (0, o.requestIdleCallback)(() => f(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [s, n, t, d, c.current]), [p, d, (0, r.useCallback)(() => {
                    f(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3903: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(7982)._(n(37858)).default.createContext({})
        },
        59033: function(e, t) {
            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        81715: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), n(51630);
            let r = n(48394),
                o = n(43089);

            function i(e) {
                return void 0 !== e.default
            }

            function l(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function a(e, t) {
                var n;
                let a, u, s, {
                        src: d,
                        sizes: f,
                        unoptimized: c = !1,
                        priority: p = !1,
                        loading: g,
                        className: m,
                        quality: h,
                        width: y,
                        height: b,
                        fill: v = !1,
                        style: _,
                        overrideSrc: w,
                        onLoad: j,
                        onLoadingComplete: C,
                        placeholder: x = "empty",
                        blurDataURL: P,
                        fetchPriority: S,
                        layout: O,
                        objectFit: M,
                        objectPosition: E,
                        lazyBoundary: I,
                        lazyRoot: k,
                        ...z
                    } = e,
                    {
                        imgConf: R,
                        showAltText: A,
                        blurComplete: D,
                        defaultLoader: L
                    } = t,
                    T = R || o.imageConfigDefault;
                if ("allSizes" in T) a = T;
                else {
                    let e = [...T.deviceSizes, ...T.imageSizes].sort((e, t) => e - t),
                        t = T.deviceSizes.sort((e, t) => e - t);
                    a = { ...T,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                if (void 0 === L) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let U = z.loader || L;
                delete z.loader, delete z.srcSet;
                let N = "__next_img_default" in U;
                if (N) {
                    if ("custom" === a.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = U;
                    U = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (O) {
                    "fill" === O && (v = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[O];
                    e && (_ = { ..._,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[O];
                    t && !f && (f = t)
                }
                let F = "",
                    B = l(y),
                    G = l(b);
                if ("object" == typeof(n = d) && (i(n) || void 0 !== n.src)) {
                    let e = i(d) ? d.default : d;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (u = e.blurWidth, s = e.blurHeight, P = P || e.blurDataURL, F = e.src, !v) {
                        if (B || G) {
                            if (B && !G) {
                                let t = B / e.width;
                                G = Math.round(e.height * t)
                            } else if (!B && G) {
                                let t = G / e.height;
                                B = Math.round(e.width * t)
                            }
                        } else B = e.width, G = e.height
                    }
                }
                let H = !p && ("lazy" === g || void 0 === g);
                (!(d = "string" == typeof d ? d : F) || d.startsWith("data:") || d.startsWith("blob:")) && (c = !0, H = !1), a.unoptimized && (c = !0), N && d.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0), p && (S = "high");
                let K = l(h),
                    W = Object.assign(v ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: E
                    } : {}, A ? {} : {
                        color: "transparent"
                    }, _),
                    q = D || "empty" === x ? null : "blur" === x ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: B,
                        heightInt: G,
                        blurWidth: u,
                        blurHeight: s,
                        blurDataURL: P || "",
                        objectFit: W.objectFit
                    }) + '")' : 'url("' + x + '")',
                    V = q ? {
                        backgroundSize: W.objectFit || "cover",
                        backgroundPosition: W.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: q
                    } : {},
                    $ = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: i,
                            sizes: l,
                            loader: a
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: s
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                                kind: "x"
                            }
                        }(t, o, l), d = u.length - 1;
                        return {
                            sizes: l || "w" !== s ? l : "100vw",
                            srcSet: u.map((e, r) => a({
                                config: t,
                                src: n,
                                quality: i,
                                width: e
                            }) + " " + ("w" === s ? e : r + 1) + s).join(", "),
                            src: a({
                                config: t,
                                src: n,
                                quality: i,
                                width: u[d]
                            })
                        }
                    }({
                        config: a,
                        src: d,
                        unoptimized: c,
                        width: B,
                        quality: K,
                        sizes: f,
                        loader: U
                    });
                return {
                    props: { ...z,
                        loading: H ? "lazy" : g,
                        fetchPriority: S,
                        width: B,
                        height: G,
                        decoding: "async",
                        className: m,
                        style: { ...W,
                            ...V
                        },
                        sizes: $.sizes,
                        srcSet: $.srcSet,
                        src: w || $.src
                    },
                    meta: {
                        unoptimized: c,
                        priority: p,
                        placeholder: x,
                        fill: v
                    }
                }
            }
        },
        94683: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return m
                    },
                    defaultHead: function() {
                        return f
                    }
                });
            let r = n(7982),
                o = n(79540),
                i = n(46328),
                l = o._(n(37858)),
                a = r._(n(5078)),
                u = n(3903),
                s = n(9870),
                d = n(59033);

            function f(e) {
                void 0 === e && (e = !1);
                let t = [(0, i.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push((0, i.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function c(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(51630);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function g(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(c, []).reverse().concat(f(n).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return o => {
                        let i = !0,
                            l = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            l = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? i = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = p.length; e < t; e++) {
                                    let t = p[e];
                                    if (o.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? i = !1 : n.add(t);
                                        else {
                                            let e = o.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !l) && n.has(e) ? i = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return i
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, l.default.cloneElement(e, t)
                    }
                    return l.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let m = function(e) {
                let {
                    children: t
                } = e, n = (0, l.useContext)(u.AmpStateContext), r = (0, l.useContext)(s.HeadManagerContext);
                return (0, i.jsx)(a.default, {
                    reduceComponentsToState: g,
                    headManager: r,
                    inAmpMode: (0, d.isInAmpMode)(n),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48394: function(e, t) {
            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: l
                } = e, a = r ? 40 * r : t, u = o ? 40 * o : n, s = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        74160: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(7982)._(n(37858)),
                o = n(43089),
                i = r.default.createContext(o.imageConfigDefault)
        },
        43089: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return n
                    },
                    imageConfigDefault: function() {
                        return r
                    }
                });
            let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        40251: function(e, t) {
            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        5078: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(37858),
                o = "undefined" == typeof window,
                i = o ? () => {} : r.useLayoutEffect,
                l = o ? () => {} : r.useEffect;

            function a(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function a() {
                    if (t && t.mountedInstances) {
                        let o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(o, e))
                    }
                }
                if (o) {
                    var u;
                    null == t || null == (u = t.mountedInstances) || u.add(e.children), a()
                }
                return i(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = a), () => {
                    t && (t._pendingUpdate = a)
                })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        }
    }
]);