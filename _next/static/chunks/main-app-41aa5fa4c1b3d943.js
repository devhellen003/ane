! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d996a6d5-204c-46e5-b6d2-d55f40926e67", e._sentryDebugIdIdentifier = "sentry-dbid-d996a6d5-204c-46e5-b6d2-d55f40926e67")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [744], {
        94907: function() {},
        9059: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 67330, 23)), Promise.resolve().then(t.t.bind(t, 45673, 23)), Promise.resolve().then(t.t.bind(t, 61307, 23)), Promise.resolve().then(t.t.bind(t, 12559, 23)), Promise.resolve().then(t.t.bind(t, 942, 23)), Promise.resolve().then(t.t.bind(t, 1024, 23))
        },
        41575: function(e, n, t) {
            "use strict";
            var i = t(122),
                r = t(84585),
                s = window;
            s.__sentryRewritesTunnelPath__ = void 0, s.SENTRY_RELEASE = {
                id: "9aaf5af26da8fd071168cd98abbd353691b3d26a"
            }, s.__sentryBasePath = void 0, s.__rewriteFramesAssetPrefixPath__ = "", i.S1({
                debug: !1,
                dsn: "https://560afd2fbdf04ff1aa9e7430888e6666@o4505468958670848.ingest.sentry.io/4505468965814272",
                enabled: !0,
                integrations: [r.G({
                    maskAllText: !1,
                    networkDetailAllowUrls: [window.location.origin, "https://api.coingecko.com/api/v3/simple/price"]
                })],
                replaysOnErrorSampleRate: .25,
                sampleRate: .5
            })
        }
    },
    function(e) {
        var n = function(n) {
            return e(e.s = n)
        };
        e.O(0, [384, 817, 131], function() {
            return n(41575), n(63094), n(9059)
        }), _N_E = e.O()
    }
]);