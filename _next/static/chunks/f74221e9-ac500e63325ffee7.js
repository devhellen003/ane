! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bc3a1c94-6ed2-49d8-924b-014e17e8c647", e._sentryDebugIdIdentifier = "sentry-dbid-bc3a1c94-6ed2-49d8-924b-014e17e8c647")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [573], {
        36671: function(e, t, n) {
            n.d(t, {
                U4Q: function() {
                    return d
                }
            });
            var a = n(78826);

            function d(e) {
                return (0, a.w_)({
                    tag: "svg",
                    attr: {
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                        }
                    }]
                })(e)
            }
        }
    }
]);