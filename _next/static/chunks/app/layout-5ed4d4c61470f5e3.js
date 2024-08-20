! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9a06c91a-3335-417c-992e-6762bc0d0dd4", e._sentryDebugIdIdentifier = "sentry-dbid-9a06c91a-3335-417c-992e-6762bc0d0dd4")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        71855: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 86168)), Promise.resolve().then(s.bind(s, 62968)), Promise.resolve().then(s.t.bind(s, 66613, 23)), Promise.resolve().then(s.t.bind(s, 64482, 23)), Promise.resolve().then(s.t.bind(s, 88351, 23))
        },
        86168: function(e, t, s) {
            "use strict";
            s.d(t, {
                GlobalContainer: function() {
                    return em
                }
            });
            var r = s(46328),
                a = s(55118),
                n = s.n(a),
                l = s(74553),
                i = s(66939),
                d = s(25193),
                o = s(8061),
                c = s(36671),
                u = s(12742),
                h = s(94096),
                m = s(92104);
            let x = async e => {
                    let t = await e.json();
                    if (!e.ok && "true" !== m.env.NEXT_PUBLIC_PLAYWRIGHT_ENABLED) {
                        let s = Error("An error occurred while fetching the data.");
                        throw s.info = t, s.status = e.status, s
                    }
                    return t
                },
                g = {
                    error: (0, r.jsx)(l.default, {
                        src: "/shared/error.svg",
                        alt: "error",
                        width: 19.3,
                        height: 19.3
                    }),
                    success: (0, r.jsx)(c.U4Q, {
                        className: "text-green-500 text-xl"
                    })
                },
                p = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.J$, {
                            value: {
                                fetcher: (e, t) => fetch(e, t).then(e => x(e))
                            },
                            children: t
                        }), (0, r.jsx)(d.c, {
                            debug: !1
                        }), (0, r.jsx)(o.x7, {
                            position: "top-right",
                            toastOptions: {
                                duration: 1e4,
                                style: {
                                    backdropFilter: "blur(4.5px)",
                                    background: "radial-gradient(232.36% 214.3% at 124.11% -92.78%, rgba(218, 227, 242, 0.20) 0%, rgba(53, 84, 137, 0.00) 100%), rgba(37, 45, 64, 0.70)",
                                    border: "1px solid #323232",
                                    borderRadius: "8px",
                                    boxShadow: "0px 0px 20px 0px rgba(66, 75, 108, 0.60)",
                                    color: "#e5e7eb",
                                    fontFamily: n().style.fontFamily,
                                    textOverflow: "ellipsis",
                                    wordBreak: "break-word"
                                },
                                success: {
                                    duration: 6e3
                                }
                            },
                            children: e => (0, r.jsx)(o.$x, {
                                toast: e,
                                children: t => {
                                    let {
                                        icon: s,
                                        message: a
                                    } = t, n = g[e.type];
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [null != n ? n : s, a, "loading" !== e.type && (0, r.jsx)("button", {
                                            onClick: () => {
                                                o.ZP.dismiss(e.id), i.ZP.track("Toast dismiss")
                                            },
                                            children: (0, r.jsx)(u.ven, {
                                                className: "text-gray-200"
                                            })
                                        })]
                                    })
                                }
                            })
                        })]
                    })
                };
            var b = s(93115),
                f = s(48584),
                v = s(24591),
                w = s(46315),
                j = s(30541),
                y = s(37984),
                k = s(12179);
            let N = (0, s(15394).a)({
                    blockExplorers: {
                        default: {
                            name: "Kintoscan",
                            url: "https://kintoscan.io/"
                        }
                    },
                    id: 7887,
                    name: "Kinto",
                    nativeCurrency: {
                        decimals: 18,
                        name: "Ether",
                        symbol: "ETH"
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://rpc.kinto-rpc.com"]
                        }
                    },
                    sourceId: 1
                }),
                E = "a0562db9-f909-489d-8cfe-d1215612ce30",
                L = {
                    [v.R.id]: (0, b.t)([(0, f.d)("https://eth-mainnet.blastapi.io/" + E), (0, f.d)("https://rpc.ankr.com/eth"), (0, f.d)("https://eth-mainnet.rpc.grove.city/v1/5aef9a19"), (0, f.d)("https://cloudflare-eth.com")]),
                    [w.d.id]: (0, f.d)("http://localhost:8545"),
                    [j.y.id]: (0, b.t)([(0, f.d)("https://arbitrum-one.blastapi.io/" + E), (0, f.d)("https://arb1.arbitrum.io/rpc")]),
                    [y.Z.id]: (0, b.t)([(0, f.d)("https://mantle-mainnet.blastapi.io/" + E), (0, f.d)("https://rpc.mantle.xyz")]),
                    [k.A.id]: (0, b.t)([(0, f.d)("https://blastl2-mainnet.blastapi.io/" + E), (0, f.d)("https://rpc.blast.io")]),
                    [N.id]: (0, f.d)("https://rpc.kinto-rpc.com")
                };
            var _ = s(23710),
                T = s(37858),
                B = s(12052),
                I = s(15838),
                Z = s(4277),
                S = s(81930);
            let P = (0, s(75419).Ue)(e => ({
                isIdle: !1,
                setIsIdle: t => e({
                    isIdle: t
                })
            }));
            var C = s(59913),
                A = s(75443),
                D = s(62229),
                F = s(85486),
                U = s(92099),
                M = s(16706),
                z = s(89451),
                Y = s(82560);
            let H = e => {
                let {
                    first: t,
                    last: s,
                    route: a,
                    title: n
                } = e, l = (0, z.usePathname)() === a;
                return (0, r.jsx)(F.default, {
                    href: a,
                    children: (0, r.jsx)(Y.v.Item, {
                        children: (0, r.jsx)("button", {
                            className: (0, U.Z)("group flex w-full items-center whitespace-nowrap py-3 px-4 text-md", l ? "text-cblue-400 selected-nav-item-mobile" : "text-gray-200", t ? "rounded-t-lg" : "", s ? "rounded-b-lg" : ""),
                            children: n
                        })
                    })
                })
            };

            function O(e) {
                let {
                    classes: t,
                    isActiveOverride: s,
                    padding: a = "py-6 px-3 lg:px-4",
                    route: n,
                    title: l
                } = e, i = (0, z.usePathname)() === n;
                return (0, r.jsx)(F.default, {
                    href: n,
                    className: (0, U.Z)("text-sm", i || s ? "text-cblue-400 selected-nav-item" : "hover:text-cblue-100", t, a),
                    target: n.startsWith("/") ? void 0 : "_blank",
                    children: l
                })
            }
            var R = s(4714);

            function W(e) {
                let {
                    buttonContentOrText: t,
                    children: s,
                    classes: a,
                    itemsPosition: n = "right-0 mt-2 origin-top-right",
                    mobileMenuSize: i,
                    padding: d = "p-2",
                    stats: o,
                    textColor: c = "text-gray-200",
                    textSize: u = "text-sm"
                } = e;
                return (0, r.jsxs)(Y.v, {
                    as: "div",
                    className: (0, U.Z)("relative ml-1.5 inline-block text-left opacity-95", a),
                    children: [(0, r.jsx)("div", {
                        children: (0, r.jsx)(Y.v.Button, {
                            children: e => {
                                let {
                                    open: s
                                } = e;
                                return (0, r.jsx)("div", {
                                    className: (0, U.Z)("inline-flex w-full items-center justify-center gap-1 rounded-sm bg-black bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75", s ? "bg-gray-700" : "", d, u, c),
                                    children: "string" == typeof t ? (0, r.jsxs)(r.Fragment, {
                                        children: [t, (0, r.jsx)(M.jX5, {})]
                                    }) : s ? (0, r.jsx)("span", {
                                        className: "flex justify-center w-5",
                                        children: (0, r.jsx)(l.default, {
                                            src: "/shared/close-icon.svg",
                                            alt: "Close",
                                            width: 16,
                                            height: 16
                                        })
                                    }) : t
                                })
                            }
                        })
                    }), (0, r.jsx)(R.u, {
                        as: T.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, r.jsxs)("div", {
                            className: (0, U.Z)("absolute z-20 p-0 rounded-[25px] border border-[#273248] bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-[calc(100vh-100px)] -right-[10px] top-[50px] sm:-right-[20px] sm:top-[70px] sm:h-[calc(100vh-140px)]", i),
                            children: [(0, r.jsx)(Y.v.Items, {
                                className: (0, U.Z)("h-full", n),
                                children: s
                            }), (0, r.jsx)("div", {
                                className: "flex flex-col gap-2 pb-2 px-4 absolute bottom-4 w-full",
                                children: o
                            })]
                        })
                    })]
                })
            }
            var G = s(33182);
            let K = e => {
                let {
                    callToAction: t,
                    collapseBreakpoint: s = "md:hidden",
                    isAnimated: a,
                    margin: n = "mx-4 mt-6 mb-2 sm:mx-8 sm:mt-8",
                    mobileMenuSize: i,
                    routes: d,
                    stats: o,
                    width: c
                } = e;
                return (0, r.jsxs)(G.B, {
                    variant: "nav",
                    className: (0, U.Z)(n, c, a && "animate-in slide-in-from-top-6 duration-500"),
                    children: [(0, r.jsxs)(F.default, {
                        href: "/",
                        className: "flex h-full items-center",
                        children: [(0, r.jsx)(l.default, {
                            src: "/shared/ethena.svg",
                            alt: "Ethena Logo",
                            priority: !0,
                            width: 0,
                            height: 0,
                            style: {
                                height: "50%",
                                width: "auto"
                            },
                            className: "mr-2"
                        }), (0, r.jsx)("span", {
                            className: (0, U.Z)("mr-2 text-xl sm:text-2xl sm:mr-8 lg:mr-9"),
                            children: "Ethena"
                        })]
                    }), d.map(e => {
                        let {
                            cutToMenuBreakpoint: t,
                            isActiveOverride: s,
                            route: a,
                            title: n
                        } = e;
                        return (0, r.jsx)(O, {
                            title: n,
                            route: a,
                            isActiveOverride: s,
                            classes: t ? "hidden ".concat(t) : void 0
                        }, n)
                    }), (0, r.jsxs)("div", {
                        className: "ml-auto flex items-center",
                        children: [(0, r.jsx)("div", {
                            className: "sm:flex hidden",
                            children: o
                        }), t && (0, r.jsx)("div", {
                            className: "ml-1 md:ml-4 lg:ml-8",
                            children: t
                        })]
                    }), !!d.length && (0, r.jsx)(W, {
                        buttonContentOrText: (0, r.jsx)(M.Bbf, {
                            className: "w-5 text-xl"
                        }),
                        classes: "block ".concat(s),
                        padding: "p-2",
                        stats: o,
                        mobileMenuSize: i,
                        children: d.map((e, t) => {
                            let {
                                route: s,
                                title: a
                            } = e;
                            return (0, r.jsx)(H, {
                                title: a,
                                route: s,
                                first: 0 === t,
                                last: t === d.length - 1
                            }, a)
                        })
                    })]
                })
            };
            var Q = s(49936),
                V = s(63485),
                X = s(74050);
            let $ = "https://discord.gg/ethena";
            var q = s(24660);
            let J = e => {
                    let {
                        stat: t,
                        title: s
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "flex gap-1 text-neutral-400 text-xs sm:hidden",
                        children: [(0, r.jsx)("span", {
                            children: s + ":"
                        }), (0, r.jsx)(q.Z, {
                            isLoading: !t,
                            classes: "w-[42px] h-4",
                            children: t
                        })]
                    })
                },
                ee = e => {
                    let {
                        className: t,
                        handleReset: s,
                        susdeYield: a,
                        tvl: n
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, U.Z)("flex flex-wrap justify-center items-center", s && "animate-in slide-in-from-right duration-500", t),
                        children: [(0, r.jsx)(F.default, {
                            href: $,
                            target: "_blank",
                            children: (0, r.jsx)(Q.j2d, {
                                className: "text-[#808080] h-5 w-auto",
                                width: 0,
                                height: 0
                            })
                        }), (0, r.jsx)(F.default, {
                            href: "https://twitter.com/ethena_labs",
                            target: "_blank",
                            children: (0, r.jsx)(V.LCd, {
                                className: "text-[#808080] h-5 w-auto",
                                width: 0,
                                height: 0
                            })
                        }), (0, r.jsx)(F.default, {
                            href: "https://ethena-labs.gitbook.io/ethena-labs/",
                            target: "_blank",
                            children: (0, r.jsx)(l.default, {
                                src: "/shared/gitbook.svg",
                                width: 0,
                                height: 0,
                                alt: "gitbook",
                                className: "h-5 w-auto"
                            })
                        }), (0, r.jsx)(F.default, {
                            href: "https://t.me/ethena_labs",
                            target: "_blank",
                            children: (0, r.jsx)(l.default, {
                                src: "/shared/telegram.svg",
                                width: 0,
                                height: 0,
                                alt: "telegram",
                                className: "h-5 w-auto"
                            })
                        }), (0, r.jsx)(F.default, {
                            href: "https://github.com/ethena-labs",
                            target: "_blank",
                            children: (0, r.jsx)(l.default, {
                                src: "/shared/github.svg",
                                width: 0,
                                height: 0,
                                alt: "github",
                                className: "h-5 w-auto"
                            })
                        }), (0, r.jsx)(F.default, {
                            href: "https://ethena.notion.site/Ethena-FAQs-3ccc1437e13343f8b74c0d005e4f5128",
                            target: "_blank",
                            children: (0, r.jsx)(l.default, {
                                src: "/shared/notion.svg",
                                width: 0,
                                height: 0,
                                alt: "notion",
                                className: "h-5 w-auto"
                            })
                        }), (0, r.jsx)(F.default, {
                            href: "https://mirror.xyz/0xF99d0E4E3435cc9C9868D1C6274DfaB3e2721341",
                            target: "_blank",
                            children: (0, r.jsx)(l.default, {
                                src: "/shared/mirror.svg",
                                width: 0,
                                height: 0,
                                alt: "mirror",
                                className: "h-3.5 w-auto"
                            })
                        }), s && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("button", {
                                className: "text-[#808080] h-5 w-auto",
                                title: "Reset Wallets",
                                onClick: s,
                                children: (0, r.jsx)(X.pYJ, {})
                            }), (0, r.jsx)(J, {
                                title: "APY",
                                stat: a
                            }), (0, r.jsx)(J, {
                                title: "TVL",
                                stat: n
                            })]
                        })]
                    })
                };
            var et = s(17088);
            let es = e => {
                let {
                    classes: t,
                    imgClasses: s,
                    imgSrc: a,
                    label: n,
                    tooltip: i,
                    value: d
                } = e, o = (0, T.useMemo)(() => (0, r.jsxs)("div", {
                    className: (0, U.Z)(t, "flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"),
                    children: [(0, r.jsx)(l.default, {
                        src: a,
                        width: 0,
                        height: 0,
                        style: {
                            height: "24px",
                            width: "auto"
                        },
                        alt: n,
                        className: s
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, r.jsx)("span", {
                            className: "text-2xs text-white font-medium leading-none",
                            children: n
                        }), (0, r.jsx)(q.Z, {
                            isLoading: !d,
                            classes: "w-[32px] mt-1 h-3.5",
                            children: (0, r.jsx)("span", {
                                className: "text-sm font-bold text-cblue-400",
                                children: d
                            })
                        })]
                    })]
                }), [t, s, a, n, d]);
                return i ? (0, r.jsx)(et.M, {
                    padding: "p-3",
                    content: (0, r.jsx)("span", {
                        className: "text-neutrals-400",
                        children: i
                    }),
                    children: o
                }) : o
            };
            var er = s(29068);
            let ea = "true" === s(92104).env.NEXT_PUBLIC_PLAYWRIGHT_ENABLED,
                en = e => {
                    let {
                        interval: t = 2,
                        isIdle: s,
                        queryKey: r,
                        shouldPoll: a = !0
                    } = e, n = (0, I.NL)();
                    (0, er.x)({
                        chainId: 1,
                        onBlockNumber: e => {
                            a && e && e % BigInt(t) == BigInt(0) && (!s || ea) && (Array.isArray(r) ? r.forEach(e => {
                                n.invalidateQueries({
                                    queryKey: [e]
                                })
                            }) : n.invalidateQueries({
                                queryKey: [r]
                            }))
                        }
                    })
                },
                el = () => document.body.scrollHeight - window.innerHeight,
                ei = () => {
                    let [e, t] = (0, T.useState)(0);
                    return (0, T.useEffect)(() => {
                        t(el());
                        let e = () => {
                            t(el())
                        };
                        return window.addEventListener("resize", (0, _.Z)(e, 100)), () => window.removeEventListener("resize", e)
                    }, []), e
                };
            var ed = s(10414),
                eo = s(28305),
                ec = s(99729);

            function eu(e) {
                let {
                    children: t
                } = e, s = ei(), {
                    data: a
                } = (0, h.ZP)("/api/user-count"), {
                    isIdle: n
                } = P(), {
                    data: i,
                    queryKey: d
                } = (0, ec.u)({
                    abi: eo.Wo,
                    address: C.Nf.USDe,
                    chainId: 1,
                    functionName: "totalSupply"
                });
                en({
                    interval: 20,
                    isIdle: n,
                    queryKey: d
                });
                let {
                    tooltip: o,
                    yieldStr: c
                } = (0, ed.g)(), u = (0, A.a)(), m = (0, T.useMemo)(() => u && i ? (0, D.Zr)(i, "USDe", D.sw.FiatTokenAmt) : "-", [u, i]), x = (0, T.useMemo)(() => (0, r.jsxs)("div", {
                    className: "flex flex-wrap gap-4 sm:gap-5 justify-center sm:justify-between mb-3 mx-2 sm:mx-0",
                    children: [(0, r.jsxs)("div", {
                        className: "flex gap-1.5 lg:hidden",
                        children: [(0, r.jsx)(es, {
                            imgSrc: "/shared/usde.svg",
                            label: "TVL",
                            value: m
                        }), (0, r.jsx)(es, {
                            imgSrc: "/shared/sUSDe.svg",
                            label: "Yield",
                            value: c
                        }), (0, r.jsx)(es, {
                            imgSrc: "/shared/ethena.svg",
                            label: "Users",
                            value: null == a ? void 0 : a.count
                        })]
                    }), (0, r.jsx)(ee, {
                        className: "gap-4 lg:gap-[2.2rem] lg:ml-4 lg:mr-6 lg:mt-1"
                    })]
                }), [m, null == a ? void 0 : a.count, c]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: (0, U.Z)("flex min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-40px)] flex-col rounded-4xl mx-2.5 sm:mx-[30px] my-2.5 sm:my-5 border-2 border-cblue-600 relative", "w-[calc(100vw - ".concat(s, "px] max-w-[2000px] 4xl:mx-auto"), "layout-background-image"),
                        children: [(0, r.jsx)(K, {
                            margin: "mx-4 mt-6 hbase:mt-8 mb-2 sm:mx-6",
                            routes: [{
                                cutToMenuBreakpoint: "md:block",
                                route: "/",
                                title: "Airdrop"
                            }, {
                                cutToMenuBreakpoint: "md:block",
                                route: "https://claim.ethena.fi",
                                title: "Claim $ENA"
                            }, {
                                cutToMenuBreakpoint: "md:block",
                                route: "/leaderboard",
                                title: "Leaderboard"
                            }, {
                                cutToMenuBreakpoint: "lg:block",
                                route: "https://ethena-labs.gitbook.io/ethena-labs/",
                                title: "Docs"
                            }, {
                                cutToMenuBreakpoint: "xl:block",
                                route: $,
                                title: "Community"
                            }, {
                                cutToMenuBreakpoint: "xl:block",
                                route: "https://blog.bitmex.com/dust-on-crust/",
                                title: "Genesis Story"
                            }],
                            collapseBreakpoint: "xl:hidden",
                            stats: (0, r.jsxs)("div", {
                                className: "flex gap-1.5 mr-2",
                                children: [(0, r.jsx)(es, {
                                    imgSrc: "/shared/usde.svg",
                                    label: "TVL",
                                    value: m,
                                    classes: "hidden lg:flex"
                                }), (0, r.jsx)(es, {
                                    imgSrc: "/shared/sUSDe.svg",
                                    label: "Yield",
                                    value: c,
                                    tooltip: o,
                                    imgClasses: "hidden md:flex"
                                }), (0, r.jsx)(es, {
                                    imgSrc: "/shared/ethena.svg",
                                    label: "Users",
                                    value: null == a ? void 0 : a.count,
                                    classes: "hidden xl:flex"
                                })]
                            }),
                            mobileMenuSize: "w-[calc(100vw-60px)] sm:w-[calc(100vw-110px)] md:w-[calc(100vw-110px)]"
                        }), t, (0, r.jsxs)("div", {
                            className: "absolute hidden sm:block -bottom-0.5 -right-0.5 w-fit h-12 bg-black rounded-tl-2xl border-2 border-b-0 border-r-0 border-cblue-600 pl-[11px] py-2.5",
                            children: [x, (0, r.jsx)(l.default, {
                                src: "/rounded-corner.svg",
                                className: "absolute hidden sm:block bottom-0 -left-4",
                                width: 16,
                                height: 16,
                                alt: "rounded-corner"
                            }), (0, r.jsx)(l.default, {
                                src: "/rounded-corner.svg",
                                className: "absolute hidden sm:block -top-4 right-0",
                                width: 16,
                                height: 16,
                                alt: "rounded-corner"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "sm:hidden",
                        children: x
                    })]
                })
            }
            var eh = s(92104);
            let em = e => {
                let {
                    children: t
                } = e, {
                    setIsIdle: s
                } = P(), a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4,
                        [t, s] = T.useState(!1);
                    return T.useEffect(() => {
                        let t;
                        let r = () => {
                                s(!0)
                            },
                            a = (0, _.Z)(() => {
                                s(!1), window.clearTimeout(t), t = setTimeout(r, e)
                            }, 500),
                            n = () => {
                                document.hidden || a()
                            };
                        return t = setTimeout(r, e), window.addEventListener("mousemove", a), window.addEventListener("mousedown", a), window.addEventListener("resize", a), window.addEventListener("keydown", a), window.addEventListener("touchstart", a, {
                            passive: !0
                        }), window.addEventListener("wheel", a), document.addEventListener("visibilitychange", n), () => {
                            window.removeEventListener("mousemove", a), window.removeEventListener("mousedown", a), window.removeEventListener("resize", a), window.removeEventListener("keydown", a), window.removeEventListener("touchstart", a), window.removeEventListener("wheel", a), document.removeEventListener("visibilitychange", n), window.clearTimeout(t)
                        }
                    }, [e]), t
                }(12e4);
                (0, T.useEffect)(() => {
                    s(a)
                }, [a, s]);
                let n = new B.S,
                    l = (0, Z._)({
                        chains: ["true" === eh.env.NEXT_PUBLIC_PLAYWRIGHT_ENABLED ? w.d : v.R],
                        ssr: !0,
                        transports: L
                    });
                return (0, r.jsx)(S.F, {
                    config: l,
                    children: (0, r.jsx)(I.aH, {
                        client: n,
                        children: (0, r.jsx)(p, {
                            children: (0, r.jsx)(eu, {
                                children: t
                            })
                        })
                    })
                })
            }
        },
        33182: function(e, t, s) {
            "use strict";
            s.d(t, {
                B: function() {
                    return n
                }
            });
            var r = s(46328);
            let a = (0, s(6157).j)("flex items-center border border-neutrals-700 bg-black bg-opacity-30", {
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
                n = e => {
                    let {
                        children: t,
                        className: s,
                        rounded: n,
                        variant: l
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a({
                            className: s,
                            rounded: n,
                            variant: l
                        }),
                        children: t
                    })
                }
        },
        75443: function(e, t, s) {
            "use strict";
            s.d(t, {
                a: function() {
                    return a
                }
            });
            var r = s(37858);

            function a() {
                let [e, t] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    t(!0)
                }, []), e
            }
        },
        10414: function(e, t, s) {
            "use strict";
            s.d(t, {
                g: function() {
                    return l
                }
            });
            var r = s(37858),
                a = s(94096),
                n = s(62229);
            let l = () => {
                let {
                    data: e
                } = (0, a.ZP)("/api/yields/protocol-and-staking-yield"), [t, s] = (0, r.useMemo)(() => {
                    let t, s;
                    (null == e ? void 0 : e.stakingYield) && (t = (0, n.uf)(e.stakingYield.value, n.sw.OneDecimal) + "%", s = e.stakingYield.lastUpdated);
                    let r = "Trailing one-week daily average of protocol return transferred into the staking rewards distributor contract, divided by total staked USDe, annualized with weekly compounding. This figure does not represent or guarantee future results.";
                    return s && (r += "\n\nLast Updated: ".concat(s)), [t, r]
                }, [null == e ? void 0 : e.stakingYield]);
                return {
                    tooltip: s,
                    yieldStr: t
                }
            }
        },
        88351: function() {},
        64482: function() {}
    },
    function(e) {
        e.O(0, [219, 755, 377, 811, 726, 898, 466, 573, 296, 197, 61, 371, 802, 384, 817, 131, 744], function() {
            return e(e.s = 71855)
        }), _N_E = e.O()
    }
]);