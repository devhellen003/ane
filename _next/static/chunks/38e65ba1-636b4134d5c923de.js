! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "974041b4-d133-4c8a-a244-0e134bbf9020", e._sentryDebugIdIdentifier = "sentry-dbid-974041b4-d133-4c8a-a244-0e134bbf9020")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [898], {
        63485: function(e, t, n) {
            n.d(t, {
                LCd: function() {
                    return r
                }
            });
            var d = n(78826);

            function r(e) {
                return (0, d.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 512 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                        }
                    }]
                })(e)
            }
        }
    }
]);