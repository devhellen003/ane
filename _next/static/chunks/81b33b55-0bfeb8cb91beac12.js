! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "acb2de6f-abb5-4126-a1f1-2aea6c76d9be", e._sentryDebugIdIdentifier = "sentry-dbid-acb2de6f-abb5-4126-a1f1-2aea6c76d9be")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [726], {
        74050: function(e, t, n) {
            n.d(t, {
                pYJ: function() {
                    return d
                }
            });
            var a = n(78826);

            function d(e) {
                return (0, a.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            strokeWidth: "2",
                            d: "M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
                        }
                    }]
                })(e)
            }
        }
    }
]);