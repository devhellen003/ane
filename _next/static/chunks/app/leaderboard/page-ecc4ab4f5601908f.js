! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "46cf786b-6160-41f5-bb1d-478d0d7719da", e._sentryDebugIdIdentifier = "sentry-dbid-46cf786b-6160-41f5-bb1d-478d0d7719da")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [173], {
        65204: function() {},
        97354: function() {},
        84812: function() {},
        64900: function() {},
        83629: function(e, t, l) {
            Promise.resolve().then(l.bind(l, 86935))
        },
        86935: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return U
                }
            });
            var a = l(46328),
                r = l(75443),
                s = l(62229),
                n = l(13479),
                i = l(12742);
            let d = e => {
                let {
                    data: t,
                    error: l
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: !t && (0, a.jsx)("div", {
                        className: "absolute z-[1] left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-1.5",
                        children: l ? (0, a.jsxs)(a.Fragment, {
                            children: ["Error retrieving data ", (0, a.jsx)(i.$Vt, {})]
                        }) : (0, a.jsx)(n.Qzg, {
                            className: "ml-8 mr-4 h-8 w-8 animate-spinSlow"
                        })
                    })
                })
            };
            var o = l(33182),
                c = l(27286),
                u = l(6157),
                x = l(92099);
            let f = (0, u.j)("text-white text-base leading-[16px] outline-none flex justify-between w-full items-center overflow-y-hidden", {
                    defaultVariants: {
                        overflow: "default",
                        variant: "default"
                    },
                    variants: {
                        overflow: {
                            default: "overflow-x-auto",
                            hidden: "overflow-x-hidden"
                        },
                        variant: {
                            default: "gradient-box rounded-lg backdrop-blur-[4.5px]",
                            noStyles: ""
                        }
                    }
                }),
                m = e => {
                    let {
                        children: t,
                        className: l,
                        overflow: r,
                        variant: s
                    } = e;
                    return (0, a.jsx)("div", {
                        className: f({
                            className: l,
                            overflow: r,
                            variant: s
                        }),
                        children: (0, a.jsx)("div", {
                            role: "table",
                            className: (0, x.Z)("w-full border-spacing-0", "hidden" === r || "noStyles" === s ? "w-full" : "table table-auto"),
                            children: t
                        })
                    })
                };
            var p = l(37858);
            let h = (0, u.j)("", {
                    defaultVariants: {
                        variant: "default"
                    },
                    variants: {
                        variant: {
                            default: "bg-[rgba(28,32,41,0.60)] border border-solid border-white border-opacity-5 rounded-bl-lg rounded-br-lg",
                            splitUnstyled: "flex flex-col gap-4"
                        }
                    }
                }),
                v = (0, p.forwardRef)((e, t) => {
                    let {
                        children: l,
                        className: r,
                        variant: s
                    } = e;
                    return (0, a.jsx)("div", {
                        role: "rowgroup",
                        ref: t,
                        className: h({
                            className: r,
                            variant: s
                        }),
                        children: l
                    })
                });
            v.displayName = "TableBody";
            let b = e => {
                    let {
                        children: t,
                        classes: l = "min-w-[125px] h-full justify-center text-end",
                        dataTest: r,
                        flex: s = !0,
                        fontSize: n = "text-sm sm:text-xs",
                        padding: i = "px-2",
                        styles: d
                    } = e;
                    return (0, a.jsx)("div", {
                        className: (0, x.Z)(n, "items-center", s && "flex", l, i),
                        "data-test": r,
                        style: d,
                        children: t
                    })
                },
                g = (0, u.j)("w-full border rounded-lg border-white border-opacity-5", {
                    defaultVariants: {
                        blur: "default",
                        variant: "default"
                    },
                    variants: {
                        blur: {
                            default: "backdrop-blur-[4.5px]",
                            none: ""
                        },
                        variant: {
                            dark: "transaction-controls-dark",
                            default: "bg-[rgba(20,24,33,0.60)]"
                        }
                    }
                }),
                j = e => {
                    let {
                        blur: t,
                        children: l,
                        className: r,
                        variant: s
                    } = e;
                    return (0, a.jsx)("div", {
                        className: g({
                            blur: t,
                            className: r,
                            variant: s
                        }),
                        children: l
                    })
                },
                w = (0, u.j)("text-white text-base leading-[16px] outline-none flex justify-between items-center", {
                    defaultVariants: {
                        justify: "between",
                        padding: "default",
                        size: "default",
                        variant: "default"
                    },
                    variants: {
                        justify: {
                            between: "",
                            start: ""
                        },
                        padding: {
                            default: "py-0 px-5",
                            none: ""
                        },
                        size: {
                            default: "h-10 w-full"
                        },
                        variant: {
                            default: "border-b-0 rounded-b-none font-normal"
                        }
                    }
                }),
                y = e => {
                    let {
                        children: t,
                        className: l,
                        justify: r,
                        padding: s,
                        size: n,
                        variant: i
                    } = e;
                    return (0, a.jsx)(j, {
                        className: w({
                            className: l,
                            padding: s,
                            size: n,
                            variant: i
                        }),
                        variant: "default",
                        blur: "none",
                        children: (0, a.jsx)("div", {
                            className: (0, x.Z)("flex flex-no-wrap w-full", "start" === r ? "justify-start" : "justify-between"),
                            children: t
                        })
                    })
                },
                N = e => {
                    let {
                        children: t,
                        justify: l = "justify-between",
                        last: r,
                        padding: s = "px-5",
                        showBg: n
                    } = e;
                    return (0, a.jsx)("div", {
                        className: (0, x.Z)("text-xs flex w-full items-center w-100 h-10", l, s, {
                            "bg-[rgba(30,38,54,0.60)]": n,
                            "border-b border-solid border-white border-opacity-5": !r
                        }),
                        children: t
                    })
                };
            var k = l(24660);
            let Z = e => {
                let {
                    children: t,
                    classes: l,
                    hasPager: r,
                    justify: s = "justify-between",
                    lastUpdated: n,
                    logo: i,
                    showLastUpdate: d,
                    text: o,
                    textClasses: c
                } = e;
                return (0, a.jsxs)(j, {
                    className: (0, x.Z)("".concat(r ? "mb-3" : "mb-4", " flex flex-wrap sm:items-center p-2 sm:px-3 sm:pt-2 sm:pb-1.5"), l, s),
                    children: [(0, a.jsxs)("div", {
                        className: "flex",
                        children: [i, (0, a.jsxs)("div", {
                            className: (0, x.Z)("flex flex-col gap-[3px]", c),
                            children: [(0, a.jsx)("h1", {
                                className: "sm:text-[20px] font-semibold sm:leading-[22px]",
                                children: o
                            }), d && (0, a.jsx)("span", {
                                className: "text-cgray-100 text-2xs sm:text-[11px] leading-none sm:leading-[16px]",
                                children: (0, a.jsx)(k.Z, {
                                    isLoading: !n,
                                    classes: "w-[150px] h-3 sm:h-[14px]",
                                    children: n
                                })
                            })]
                        })]
                    }), t]
                })
            };
            var F = l(96262),
                _ = l(79229),
                q = l(62230);
            let z = (e, t) => t ? (0, _.R)(t).slice(0, 25) : "string" == typeof e && (0, q.At)(e) ? "".concat(e.slice(0, 4), "...").concat(e.slice(-4)) : "-";
            var E = l(74553),
                S = l(85486),
                W = l(87988),
                R = l(16706),
                C = l(94096);
            let D = e => {
                    if (1 === e) return "text-[#E9FA29]";
                    if (2 === e) return "text-[#ADB836]";
                    if (3 === e) return "text-[#79802E]";
                    let t = "text-cblue-400 ";
                    return 4 === e ? t : 5 === e ? t + " opacity-90" : 6 === e ? t + " opacity-80" : 7 === e ? t + " opacity-70" : 8 === e ? t + " opacity-60" : 9 === e ? t + " opacity-50" : 10 === e ? t + " opacity-40" : t + " opacity-30"
                },
                B = "w-[60px] sm:w-[80px] lg:w-[100px]",
                A = "w-[110px] sm:w-[150px] lg:w-[200px]",
                I = "w-[120px]",
                L = "justify-center text-center whitespace-nowrap overflow-hidden overflow-ellipsis",
                M = "0xA2aF0b03aaf167cfC9624C6eF587581B6FcCED92";

            function U() {
                var e, t, l;
                let n = (0, r.a)(),
                    {
                        data: i,
                        error: u
                    } = (0, C.ZP)("/api/leaderboard"),
                    f = (0, p.useRef)(null),
                    h = (0, p.useMemo)(() => {
                        var e, t, l;
                        let {
                            accumulatedTotalShardsEarnedSum: r
                        } = null !== (l = null == i ? void 0 : i.aggregateWallet) && void 0 !== l ? l : {}, n = "number" == typeof r ? (0, s.uf)(r, s.sw.SwapTradeAmount) : void 0;
                        return (0, a.jsxs)("div", {
                            className: "flex items-center gap-1 flex-wrap justify-end",
                            children: [(0, a.jsx)(c.k, {
                                label: "Sats",
                                stat: n,
                                classes: "bg-[#1F1F28] h-fit",
                                fontSize: "text-sm",
                                valueWeight: "font-bold"
                            }), (0, a.jsx)(c.k, {
                                label: "Users",
                                stat: (null == i ? void 0 : null === (e = i.aggregateWallet) || void 0 === e ? void 0 : e.count) ? (0, s.uf)(Math.round((null == i ? void 0 : null === (t = i.aggregateWallet) || void 0 === t ? void 0 : t.count) / 2)) : void 0,
                                classes: "bg-[#1F1F28] h-fit",
                                fontSize: "text-sm",
                                valueWeight: "font-bold"
                            })]
                        })
                    }, [null == i ? void 0 : i.aggregateWallet]),
                    g = (0, p.useMemo)(() => {
                        if (!(null == i ? void 0 : i.queryWallet) || u) return [(0, a.jsx)("div", {
                            className: "flex justify-center w-80 py-44 max-h-[20vh] max-w-[calc(80vw)]",
                            children: (0, a.jsx)(d, {
                                error: u
                            })
                        }, "loading-error")];
                        let e = i.queryWallet.length;
                        return i.queryWallet.map((t, l) => {
                            if (!t || t.address === M) return null;
                            let {
                                accumulatedTotalShardsEarned: r,
                                address: n,
                                nickname: i,
                                referrer: d
                            } = t;
                            return (0, a.jsxs)(N, {
                                last: l === e - 1,
                                padding: "",
                                children: [(0, a.jsx)(b, {
                                    fontSize: "text-base",
                                    classes: (0, x.Z)(B, "justify-center font-bold", D(l + 1)),
                                    children: l + 1
                                }), (0, a.jsx)(b, {
                                    flex: !1,
                                    classes: (0, x.Z)(A, L),
                                    children: z(n, i)
                                }), (0, a.jsxs)(b, {
                                    flex: !0,
                                    classes: (0, x.Z)(A, L),
                                    children: [z(null == d ? void 0 : d.address, null == d ? void 0 : d.nickname), (null == d ? void 0 : d.referralCode) && (0, a.jsx)(S.default, {
                                        href: F.eC + "/join/" + d.referralCode,
                                        target: "_blank",
                                        className: "ml-1",
                                        children: (0, a.jsx)(R._Hk, {
                                            className: "text-cblue-400 text-xs mt-0.5"
                                        })
                                    })]
                                }), (0, a.jsx)(b, {
                                    classes: (0, x.Z)(I, L),
                                    children: (0, s.uf)(r, s.sw.NoDecimals, "0")
                                })]
                            }, n)
                        })
                    }, [null == i ? void 0 : i.queryWallet, u]);
                return (0, a.jsxs)("div", {
                    className: "flex mt-3 px-4 sm:px-0 flex-wrap flex-col lg:flex-row gap-12 w-stretch max-w-full mx-auto justify-center sm:mx-6 h-fit min-h-[500px] items-center lg:items-start mb-8 lg:mb-0",
                    children: [(0, a.jsxs)("div", {
                        className: "max-w-[100%] md:max-w-[700px] flex-[2] mx-auto",
                        children: [(0, a.jsx)(Z, {
                            logo: (0, a.jsx)(E.default, {
                                src: "/shared/sats-large.svg",
                                alt: "Stake",
                                width: 29,
                                height: 38,
                                className: "mr-2.5 mb-0.5"
                            }),
                            text: (0, a.jsxs)("div", {
                                className: "flex gap-1 items-center",
                                children: ["Leaderboard", (0, a.jsx)(S.default, {
                                    target: "_blank",
                                    href: "https://mirror.xyz/0xF99d0E4E3435cc9C9868D1C6274DfaB3e2721341/GTbzFynrve4gzSjIEKL0vz7Kq0UHkIiekHkup0EXgjU",
                                    children: (0, a.jsx)(R._Hk, {
                                        className: "text-cblue-400 text-sm mt-0.5"
                                    })
                                })]
                            }),
                            lastUpdated: n ? "Last Updated: ".concat((0, W.Z)(new Date, "dd MMM yy HH:mm")) : void 0,
                            showLastUpdate: !0,
                            classes: "gap-2 flex-wrap xs:flex-nowrap",
                            children: h
                        }), (0, a.jsx)(m, {
                            overflow: (null == i ? void 0 : null === (e = i.queryWallet) || void 0 === e ? void 0 : e.length) ? "default" : "hidden",
                            className: (0, x.Z)("relative", (null == i ? void 0 : null === (t = i.queryWallet) || void 0 === t ? void 0 : t.length) && "faded-scrolling-table-body"),
                            children: (null == i ? void 0 : i.queryWallet) ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)(y, {
                                    padding: "none",
                                    className: "pr-[6px]",
                                    children: [(0, a.jsx)(b, {
                                        classes: (0, x.Z)(B, "justify-center font-medium"),
                                        children: "Rank"
                                    }), (0, a.jsx)(b, {
                                        classes: (0, x.Z)(A, "justify-center font-medium"),
                                        children: "Name"
                                    }), (0, a.jsx)(b, {
                                        classes: (0, x.Z)(A, "justify-center font-medium"),
                                        children: "Invited By"
                                    }), (0, a.jsxs)(b, {
                                        classes: (0, x.Z)(I, "justify-center font-medium gap-2"),
                                        children: [(0, a.jsx)(E.default, {
                                            src: "/shared/sats-large.svg",
                                            alt: "Lock",
                                            width: 14.5,
                                            height: 19
                                        }), "Sats"]
                                    })]
                                }), (0, a.jsx)(v, {
                                    className: "max-h-[max(calc(100vh-340px),300px)] xl:max-h-[max(calc(100vh-295px),300px)] overflow-y-auto",
                                    ref: f,
                                    children: g
                                })]
                            }) : (0, a.jsx)("div", {
                                className: "flex justify-center w-80 py-44 max-w-[calc(70vw)]",
                                children: (0, a.jsx)(d, {
                                    data: i,
                                    error: u
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex-1 h-fit min-w-[250px] w-full max-w-[370px] justify-self-end mb-[60px] xl:mb-0",
                        children: [(0, a.jsx)(o.B, {
                            className: "py-3 text-l sm:text-xl font-semibold justify-center",
                            children: "Recent Joins"
                        }), (0, a.jsxs)(o.B, {
                            className: (0, x.Z)("mt-4 justify-center text-sm flex flex-col relative", (null == i ? void 0 : null === (l = i.queryRecentJoins) || void 0 === l ? void 0 : l.length) && "faded-scrolling-table-body"),
                            rounded: "large",
                            children: [(0, a.jsx)("div", {
                                className: "text-xs font-medium py-3 border-b border-white border-opacity-5 w-full text-center pr-1.5",
                                children: "Name"
                            }), (0, a.jsx)("div", {
                                className: "w-full max-h-[max(calc(100vh-400px),300px)] lg:max-h-[max(calc(100vh-335px),300px)] overflow-y-auto",
                                children: (null == i ? void 0 : i.queryRecentJoins) ? null == i ? void 0 : i.queryRecentJoins.map((e, t) => {
                                    var l;
                                    return (null == e ? void 0 : e.address) === M ? null : (0, a.jsx)("div", {
                                        className: (0, x.Z)("py-3 w-full text-center", !(null === (l = i.queryRecentJoins) || void 0 === l ? void 0 : l.length) || t !== i.queryRecentJoins.length - 1 && "border-b border-white border-opacity-5"),
                                        children: z(null == e ? void 0 : e.address, null == e ? void 0 : e.nickname)
                                    }, "joiner" + (null == e ? void 0 : e.address) + (null == e ? void 0 : e.nickname))
                                }) : (0, a.jsx)("div", {
                                    className: "flex justify-center w-80 py-44 max-w-[calc(70vw)]",
                                    children: (0, a.jsx)(d, {
                                        data: i,
                                        error: u
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        33182: function(e, t, l) {
            "use strict";
            l.d(t, {
                B: function() {
                    return s
                }
            });
            var a = l(46328);
            let r = (0, l(6157).j)("flex items-center border border-neutrals-700 bg-black bg-opacity-30", {
                    defaultVariants: {
                        rounded: "default",
                        variant: "default"
                    },
                    variants: {
                        rounded: {
                            default: "rounded-full",
                            large: "rounded-4xl"
                        },
                        variant: {
                            default: "backdrop-blur-[4.5px]",
                            nav: "z-20 box-content backdrop-blur-[1.5px] h-12 sm:h-16 px-3 sm:px-5"
                        }
                    }
                }),
                s = e => {
                    let {
                        children: t,
                        className: l,
                        rounded: s,
                        variant: n
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r({
                            className: l,
                            rounded: s,
                            variant: n
                        }),
                        children: t
                    })
                }
        },
        27286: function(e, t, l) {
            "use strict";
            l.d(t, {
                k: function() {
                    return i
                }
            });
            var a = l(46328),
                r = l(92099),
                s = l(17088),
                n = l(24660);
            let i = e => {
                let {
                    classes: t = "bg-[#121216]",
                    fontSize: l = "text-xs",
                    gap: i = "gap-2",
                    label: d,
                    labelWeight: o = "font-medium",
                    margin: c = "mx-1",
                    padding: u = "px-2.5 py-1.5",
                    stat: x,
                    tooltip: f,
                    tooltipWidth: m = "w-[200px]",
                    valueWeight: p = "font-semibold"
                } = e, h = (0, a.jsxs)("div", {
                    className: (0, r.Z)("flex items-center whitespace-nowrap rounded leading-4 text-white", c, i, l, o, t, u),
                    children: [(0, a.jsx)("span", {
                        children: d
                    }), (0, a.jsx)("span", {
                        className: (0, r.Z)(p, "text-cblue-400"),
                        children: (0, a.jsx)(n.Z, {
                            isLoading: !x,
                            classes: "w-[42px] h-4",
                            children: x
                        })
                    })]
                });
                return f ? (0, a.jsx)(s.M, {
                    width: m,
                    padding: "p-3",
                    content: f,
                    children: h
                }) : h
            }
        },
        96262: function(e, t, l) {
            "use strict";
            var a, r;
            let s;
            l.d(t, {
                eC: function() {
                    return d
                }
            }), (r = a || (a = {})).Development = "development", r.Local = "local", r.Production = "production", r.Staging = "staging";
            let n = ("string" == typeof(s = "production") && Object.values(a).includes(s), "production"),
                i = {
                    development: "dev-app.ethena.fi",
                    local: "localhost:3009",
                    production: "app.ethena.fi",
                    staging: "staging-app.ethena.fi"
                }[n],
                d = "local" === n ? "http://" + i : "https://" + i
        },
        75443: function(e, t, l) {
            "use strict";
            l.d(t, {
                a: function() {
                    return r
                }
            });
            var a = l(37858);

            function r() {
                let [e, t] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    t(!0)
                }, []), e
            }
        },
        79229: function(e, t, l) {
            "use strict";
            l.d(t, {
                R: function() {
                    return n
                }
            });
            var a = l(78971),
                r = l.n(a),
                s = l(7890);
            let n = e => "string" == typeof e ? (0, s.escape)(r()(e)) : e
        },
        62230: function(e, t, l) {
            "use strict";
            l.d(t, {
                At: function() {
                    return s
                },
                Br: function() {
                    return r
                }
            });
            var a = l(79229);
            let r = e => {
                    let t = (0, a.R)(e);
                    return "string" == typeof t && /^[A-Za-z0-9]{5}$/.test(t)
                },
                s = e => "string" == typeof e && /^0x[a-fA-F0-9]{40}$/.test(e)
        }
    },
    function(e) {
        e.O(0, [219, 377, 811, 932, 296, 197, 543, 292, 802, 384, 817, 131, 744], function() {
            return e(e.s = 83629)
        }), _N_E = e.O()
    }
]);