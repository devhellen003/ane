(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-vendors~8a6c828a"], {
        "00e3": function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.shake256 = e.shake128 = e.keccak_512 = e.keccak_384 = e.keccak_256 = e.keccak_224 = e.sha3_512 = e.sha3_384 = e.sha3_256 = e.sha3_224 = e.Keccak = e.keccakP = void 0;
            const n = r("b40a"),
                i = r("5220"),
                o = r("531d"),
                [s, c, u] = [
                    [],
                    [],
                    []
                ],
                a = BigInt(0),
                h = BigInt(1),
                l = BigInt(2),
                f = BigInt(7),
                d = BigInt(256),
                p = BigInt(113);
            for (let I = 0, S = h, T = 1, x = 0; I < 24; I++) {
                [T, x] = [x, (2 * T + 3 * x) % 5], s.push(2 * (5 * x + T)), c.push((I + 1) * (I + 2) / 2 % 64);
                let t = a;
                for (let e = 0; e < 7; e++) S = (S << h ^ (S >> f) * p) % d, S & l && (t ^= h << (h << BigInt(e)) - h);
                u.push(t)
            }
            const [b, y] = i.default.split(u, !0), v = (t, e, r) => r > 32 ? i.default.rotlBH(t, e, r) : i.default.rotlSH(t, e, r), E = (t, e, r) => r > 32 ? i.default.rotlBL(t, e, r) : i.default.rotlSL(t, e, r);

            function m(t, e = 24) {
                const r = new Uint32Array(10);
                for (let n = 24 - e; n < 24; n++) {
                    for (let n = 0; n < 10; n++) r[n] = t[n] ^ t[n + 10] ^ t[n + 20] ^ t[n + 30] ^ t[n + 40];
                    for (let n = 0; n < 10; n += 2) {
                        const e = (n + 8) % 10,
                            i = (n + 2) % 10,
                            o = r[i],
                            s = r[i + 1],
                            c = v(o, s, 1) ^ r[e],
                            u = E(o, s, 1) ^ r[e + 1];
                        for (let r = 0; r < 50; r += 10) t[n + r] ^= c, t[n + r + 1] ^= u
                    }
                    let e = t[2],
                        i = t[3];
                    for (let r = 0; r < 24; r++) {
                        const n = c[r],
                            o = v(e, i, n),
                            u = E(e, i, n),
                            a = s[r];
                        e = t[a], i = t[a + 1], t[a] = o, t[a + 1] = u
                    }
                    for (let n = 0; n < 50; n += 10) {
                        for (let e = 0; e < 10; e++) r[e] = t[n + e];
                        for (let e = 0; e < 10; e++) t[n + e] ^= ~r[(e + 2) % 10] & r[(e + 4) % 10]
                    }
                    t[0] ^= b[n], t[1] ^= y[n]
                }
                r.fill(0)
            }
            e.keccakP = m;
            class g extends o.Hash {
                constructor(t, e, r, i = !1, s = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, n.default.number(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, o.u32)(this.state)
                }
                keccak() {
                    m(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    n.default.exists(this);
                    const {
                        blockLen: e,
                        state: r
                    } = this;
                    t = (0, o.toBytes)(t);
                    const i = t.length;
                    for (let n = 0; n < i;) {
                        const o = Math.min(e - this.pos, i - n);
                        for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    const {
                        state: t,
                        suffix: e,
                        pos: r,
                        blockLen: n
                    } = this;
                    t[r] ^= e, 0 !== (128 & e) && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    n.default.exists(this, !1), n.default.bytes(t), this.finish();
                    const e = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, i = t.length; n < i;) {
                        this.posOut >= r && this.keccak();
                        const o = Math.min(r - this.posOut, i - n);
                        t.set(e.subarray(this.posOut, this.posOut + o), n), this.posOut += o, n += o
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return n.default.number(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if (n.default.output(t, this), this.finished) throw new Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    const {
                        blockLen: e,
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return t || (t = new g(e, r, n, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = n, t.enableXOF = o, t.destroyed = this.destroyed, t
                }
            }
            e.Keccak = g;
            const w = (t, e, r) => (0, o.wrapConstructor)(() => new g(e, t, r));
            e.sha3_224 = w(6, 144, 28), e.sha3_256 = w(6, 136, 32), e.sha3_384 = w(6, 104, 48), e.sha3_512 = w(6, 72, 64), e.keccak_224 = w(1, 144, 28), e.keccak_256 = w(1, 136, 32), e.keccak_384 = w(1, 104, 48), e.keccak_512 = w(1, 72, 64);
            const _ = (t, e, r) => (0, o.wrapConstructorWithOpts)((n = {}) => new g(e, t, void 0 === n.dkLen ? r : n.dkLen, !0));
            e.shake128 = _(31, 168, 16), e.shake256 = _(31, 136, 32)
        },
        "0435": function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return o
                }));
                var n = r("8a94"),
                    i = r("bd42");
                const o = e => n["a"].create(r => {
                    function n(e) {
                        const n = e.target;
                        n.value && r.next(t.from(n.value.buffer))
                    }
                    return Object(i["log"])("ble-verbose", "start monitor " + e.uuid), e.startNotifications().then(() => {
                        e.addEventListener("characteristicvaluechanged", n)
                    }), () => {
                        Object(i["log"])("ble-verbose", "end monitor " + e.uuid), e.stopNotifications()
                    }
                })
            }).call(this, r("b639").Buffer)
        },
        "05f8": function(t, e, r) {
            const n = r("40ab"),
                i = (t, e, r) => n(t, e, ">", r);
            t.exports = i
        },
        "0872": function(t, e, r) {
            class n {
                constructor(t, e) {
                    if (e = s(e), t instanceof n) return t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease ? t : new n(t.raw, e);
                    if (t instanceof c) return this.raw = t.value, this.set = [
                        [t]
                    ], this.format(), this;
                    if (this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease, this.raw = t.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(t => this.parseRange(t.trim())).filter(t => t.length), !this.set.length) throw new TypeError("Invalid SemVer Range: " + this.raw);
                    if (this.set.length > 1) {
                        const t = this.set[0];
                        if (this.set = this.set.filter(t => !v(t[0])), 0 === this.set.length) this.set = [t];
                        else if (this.set.length > 1)
                            for (const e of this.set)
                                if (1 === e.length && E(e[0])) {
                                    this.set = [e];
                                    break
                                }
                    }
                    this.format()
                }
                format() {
                    return this.range = this.set.map(t => t.join(" ").trim()).join("||").trim(), this.range
                }
                toString() {
                    return this.range
                }
                parseRange(t) {
                    const e = (this.options.includePrerelease && b) | (this.options.loose && y),
                        r = e + ":" + t,
                        n = o.get(r);
                    if (n) return n;
                    const i = this.options.loose,
                        s = i ? h[l.HYPHENRANGELOOSE] : h[l.HYPHENRANGE];
                    t = t.replace(s, B(this.options.includePrerelease)), u("hyphen replace", t), t = t.replace(h[l.COMPARATORTRIM], f), u("comparator trim", t), t = t.replace(h[l.TILDETRIM], d), u("tilde trim", t), t = t.replace(h[l.CARETTRIM], p), u("caret trim", t);
                    let a = t.split(" ").map(t => g(t, this.options)).join(" ").split(/\s+/).map(t => N(t, this.options));
                    i && (a = a.filter(t => (u("loose invalid filter", t, this.options), !!t.match(h[l.COMPARATORLOOSE])))), u("range list", a);
                    const E = new Map,
                        m = a.map(t => new c(t, this.options));
                    for (const o of m) {
                        if (v(o)) return [o];
                        E.set(o.value, o)
                    }
                    E.size > 1 && E.has("") && E.delete("");
                    const w = [...E.values()];
                    return o.set(r, w), w
                }
                intersects(t, e) {
                    if (!(t instanceof n)) throw new TypeError("a Range is required");
                    return this.set.some(r => m(r, e) && t.set.some(t => m(t, e) && r.every(r => t.every(t => r.intersects(t, e)))))
                }
                test(t) {
                    if (!t) return !1;
                    if ("string" === typeof t) try {
                        t = new a(t, this.options)
                    } catch (e) {
                        return !1
                    }
                    for (let r = 0; r < this.set.length; r++)
                        if (R(this.set[r], t, this.options)) return !0;
                    return !1
                }
            }
            t.exports = n;
            const i = r("d39e"),
                o = new i,
                s = r("83e2"),
                c = r("49ac"),
                u = r("0f35"),
                a = r("c2a4"),
                {
                    safeRe: h,
                    t: l,
                    comparatorTrimReplace: f,
                    tildeTrimReplace: d,
                    caretTrimReplace: p
                } = r("0d26"),
                {
                    FLAG_INCLUDE_PRERELEASE: b,
                    FLAG_LOOSE: y
                } = r("11a3"),
                v = t => "<0.0.0-0" === t.value,
                E = t => "" === t.value,
                m = (t, e) => {
                    let r = !0;
                    const n = t.slice();
                    let i = n.pop();
                    while (r && n.length) r = n.every(t => i.intersects(t, e)), i = n.pop();
                    return r
                },
                g = (t, e) => (u("comp", t, e), t = S(t, e), u("caret", t), t = _(t, e), u("tildes", t), t = x(t, e), u("xrange", t), t = O(t, e), u("stars", t), t),
                w = t => !t || "x" === t.toLowerCase() || "*" === t,
                _ = (t, e) => t.trim().split(/\s+/).map(t => I(t, e)).join(" "),
                I = (t, e) => {
                    const r = e.loose ? h[l.TILDELOOSE] : h[l.TILDE];
                    return t.replace(r, (e, r, n, i, o) => {
                        let s;
                        return u("tilde", t, e, r, n, i, o), w(r) ? s = "" : w(n) ? s = `>=${r}.0.0 <${+r+1}.0.0-0` : w(i) ? s = `>=${r}.${n}.0 <${r}.${+n+1}.0-0` : o ? (u("replaceTilde pr", o), s = `>=${r}.${n}.${i}-${o} <${r}.${+n+1}.0-0`) : s = `>=${r}.${n}.${i} <${r}.${+n+1}.0-0`, u("tilde return", s), s
                    })
                },
                S = (t, e) => t.trim().split(/\s+/).map(t => T(t, e)).join(" "),
                T = (t, e) => {
                    u("caret", t, e);
                    const r = e.loose ? h[l.CARETLOOSE] : h[l.CARET],
                        n = e.includePrerelease ? "-0" : "";
                    return t.replace(r, (e, r, i, o, s) => {
                        let c;
                        return u("caret", t, e, r, i, o, s), w(r) ? c = "" : w(i) ? c = `>=${r}.0.0${n} <${+r+1}.0.0-0` : w(o) ? c = "0" === r ? `>=${r}.${i}.0${n} <${r}.${+i+1}.0-0` : `>=${r}.${i}.0${n} <${+r+1}.0.0-0` : s ? (u("replaceCaret pr", s), c = "0" === r ? "0" === i ? `>=${r}.${i}.${o}-${s} <${r}.${i}.${+o+1}-0` : `>=${r}.${i}.${o}-${s} <${r}.${+i+1}.0-0` : `>=${r}.${i}.${o}-${s} <${+r+1}.0.0-0`) : (u("no pr"), c = "0" === r ? "0" === i ? `>=${r}.${i}.${o}${n} <${r}.${i}.${+o+1}-0` : `>=${r}.${i}.${o}${n} <${r}.${+i+1}.0-0` : `>=${r}.${i}.${o} <${+r+1}.0.0-0`), u("caret return", c), c
                    })
                },
                x = (t, e) => (u("replaceXRanges", t, e), t.split(/\s+/).map(t => A(t, e)).join(" ")),
                A = (t, e) => {
                    t = t.trim();
                    const r = e.loose ? h[l.XRANGELOOSE] : h[l.XRANGE];
                    return t.replace(r, (r, n, i, o, s, c) => {
                        u("xRange", t, r, n, i, o, s, c);
                        const a = w(i),
                            h = a || w(o),
                            l = h || w(s),
                            f = l;
                        return "=" === n && f && (n = ""), c = e.includePrerelease ? "-0" : "", a ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && f ? (h && (o = 0), s = 0, ">" === n ? (n = ">=", h ? (i = +i + 1, o = 0, s = 0) : (o = +o + 1, s = 0)) : "<=" === n && (n = "<", h ? i = +i + 1 : o = +o + 1), "<" === n && (c = "-0"), r = `${n+i}.${o}.${s}${c}`) : h ? r = `>=${i}.0.0${c} <${+i+1}.0.0-0` : l && (r = `>=${i}.${o}.0${c} <${i}.${+o+1}.0-0`), u("xRange return", r), r
                    })
                },
                O = (t, e) => (u("replaceStars", t, e), t.trim().replace(h[l.STAR], "")),
                N = (t, e) => (u("replaceGTE0", t, e), t.trim().replace(h[e.includePrerelease ? l.GTE0PRE : l.GTE0], "")),
                B = t => (e, r, n, i, o, s, c, u, a, h, l, f) => (r = w(n) ? "" : w(i) ? `>=${n}.0.0${t?"-0":""}` : w(o) ? `>=${n}.${i}.0${t?"-0":""}` : s ? ">=" + r : `>=${r}${t?"-0":""}`, u = w(a) ? "" : w(h) ? `<${+a+1}.0.0-0` : w(l) ? `<${a}.${+h+1}.0-0` : f ? `<=${a}.${h}.${l}-${f}` : t ? `<${a}.${h}.${+l+1}-0` : "<=" + u, `${r} ${u}`.trim()),
                R = (t, e, r) => {
                    for (let n = 0; n < t.length; n++)
                        if (!t[n].test(e)) return !1;
                    if (e.prerelease.length && !r.includePrerelease) {
                        for (let r = 0; r < t.length; r++)
                            if (u(t[r].semver), t[r].semver !== c.ANY && t[r].semver.prerelease.length > 0) {
                                const n = t[r].semver;
                                if (n.major === e.major && n.minor === e.minor && n.patch === e.patch) return !0
                            }
                        return !1
                    }
                    return !0
                }
        },
        "092a": function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pbkdf2Async = e.pbkdf2 = void 0;
            const n = r("b40a"),
                i = r("e632"),
                o = r("531d");

            function s(t, e, r, s) {
                n.default.hash(t);
                const c = (0, o.checkOpts)({
                        dkLen: 32,
                        asyncTick: 10
                    }, s),
                    {
                        c: u,
                        dkLen: a,
                        asyncTick: h
                    } = c;
                if (n.default.number(u), n.default.number(a), n.default.number(h), u < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
                const l = (0, o.toBytes)(e),
                    f = (0, o.toBytes)(r),
                    d = new Uint8Array(a),
                    p = i.hmac.create(t, l),
                    b = p._cloneInto().update(f);
                return {
                    c: u,
                    dkLen: a,
                    asyncTick: h,
                    DK: d,
                    PRF: p,
                    PRFSalt: b
                }
            }

            function c(t, e, r, n, i) {
                return t.destroy(), e.destroy(), n && n.destroy(), i.fill(0), r
            }

            function u(t, e, r, n) {
                const {
                    c: i,
                    dkLen: u,
                    DK: a,
                    PRF: h,
                    PRFSalt: l
                } = s(t, e, r, n);
                let f;
                const d = new Uint8Array(4),
                    p = (0, o.createView)(d),
                    b = new Uint8Array(h.outputLen);
                for (let o = 1, s = 0; s < u; o++, s += h.outputLen) {
                    const t = a.subarray(s, s + h.outputLen);
                    p.setInt32(0, o, !1), (f = l._cloneInto(f)).update(d).digestInto(b), t.set(b.subarray(0, t.length));
                    for (let e = 1; e < i; e++) {
                        h._cloneInto(f).update(b).digestInto(b);
                        for (let e = 0; e < t.length; e++) t[e] ^= b[e]
                    }
                }
                return c(h, l, a, f, b)
            }
            async function a(t, e, r, n) {
                const {
                    c: i,
                    dkLen: u,
                    asyncTick: a,
                    DK: h,
                    PRF: l,
                    PRFSalt: f
                } = s(t, e, r, n);
                let d;
                const p = new Uint8Array(4),
                    b = (0, o.createView)(p),
                    y = new Uint8Array(l.outputLen);
                for (let s = 1, c = 0; c < u; s++, c += l.outputLen) {
                    const t = h.subarray(c, c + l.outputLen);
                    b.setInt32(0, s, !1), (d = f._cloneInto(d)).update(p).digestInto(y), t.set(y.subarray(0, t.length)), await (0, o.asyncLoop)(i - 1, a, e => {
                        l._cloneInto(d).update(y).digestInto(y);
                        for (let r = 0; r < t.length; r++) t[r] ^= y[r]
                    })
                }
                return c(l, f, h, d, y)
            }
            e.pbkdf2 = u, e.pbkdf2Async = a
        },
        "0a9d": function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => n(t, e, r) <= 0;
            t.exports = i
        },
        "0b47": function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e, r) => {
                    const i = new n(t, r),
                        o = new n(e, r);
                    return i.compare(o) || i.compareBuild(o)
                };
            t.exports = i
        },
        "0cd1": function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "Observable", (function() {
                return S
            })), r.d(e, "ConnectableObservable", (function() {
                return H
            })), r.d(e, "GroupedObservable", (function() {
                return D
            })), r.d(e, "observable", (function() {
                return g
            })), r.d(e, "Subject", (function() {
                return B
            })), r.d(e, "BehaviorSubject", (function() {
                return k
            })), r.d(e, "ReplaySubject", (function() {
                return ut
            })), r.d(e, "AsyncSubject", (function() {
                return ht
            })), r.d(e, "asap", (function() {
                return mt
            })), r.d(e, "asapScheduler", (function() {
                return Et
            })), r.d(e, "async", (function() {
                return wt
            })), r.d(e, "asyncScheduler", (function() {
                return gt
            })), r.d(e, "queue", (function() {
                return q
            })), r.d(e, "queueScheduler", (function() {
                return Y
            })), r.d(e, "animationFrame", (function() {
                return Tt
            })), r.d(e, "animationFrameScheduler", (function() {
                return St
            })), r.d(e, "VirtualTimeScheduler", (function() {
                return xt
            })), r.d(e, "VirtualAction", (function() {
                return At
            })), r.d(e, "Scheduler", (function() {
                return $
            })), r.d(e, "Subscription", (function() {
                return d
            })), r.d(e, "Subscriber", (function() {
                return y
            })), r.d(e, "Notification", (function() {
                return ot
            })), r.d(e, "NotificationKind", (function() {
                return J
            })), r.d(e, "pipe", (function() {
                return _
            })), r.d(e, "noop", (function() {
                return Ot
            })), r.d(e, "identity", (function() {
                return w
            })), r.d(e, "isObservable", (function() {
                return Nt
            })), r.d(e, "ArgumentOutOfRangeError", (function() {
                return Rt
            })), r.d(e, "EmptyError", (function() {
                return Pt
            })), r.d(e, "ObjectUnsubscribedError", (function() {
                return A
            })), r.d(e, "UnsubscriptionError", (function() {
                return f
            })), r.d(e, "TimeoutError", (function() {
                return Ht
            })), r.d(e, "bindCallback", (function() {
                return kt
            })), r.d(e, "bindNodeCallback", (function() {
                return Gt
            })), r.d(e, "combineLatest", (function() {
                return ie
            })), r.d(e, "concat", (function() {
                return _e
            })), r.d(e, "defer", (function() {
                return Ie
            })), r.d(e, "empty", (function() {
                return W
            })), r.d(e, "forkJoin", (function() {
                return Se
            })), r.d(e, "from", (function() {
                return de
            })), r.d(e, "fromEvent", (function() {
                return xe
            })), r.d(e, "fromEventPattern", (function() {
                return Re
            })), r.d(e, "generate", (function() {
                return Le
            })), r.d(e, "iif", (function() {
                return Ce
            })), r.d(e, "interval", (function() {
                return Ue
            })), r.d(e, "merge", (function() {
                return Me
            })), r.d(e, "never", (function() {
                return je
            })), r.d(e, "of", (function() {
                return rt
            })), r.d(e, "onErrorResumeNext", (function() {
                return Fe
            })), r.d(e, "pairs", (function() {
                return Ge
            })), r.d(e, "partition", (function() {
                return ze
            })), r.d(e, "race", (function() {
                return We
            })), r.d(e, "range", (function() {
                return Je
            })), r.d(e, "throwError", (function() {
                return nt
            })), r.d(e, "timer", (function() {
                return tr
            })), r.d(e, "using", (function() {
                return rr
            })), r.d(e, "zip", (function() {
                return nr
            })), r.d(e, "scheduled", (function() {
                return fe
            })), r.d(e, "EMPTY", (function() {
                return z
            })), r.d(e, "NEVER", (function() {
                return ke
            })), r.d(e, "config", (function() {
                return s
            }));
            var n = r("9ab4");

            function i(t) {
                return "function" === typeof t
            }
            var o = !1,
                s = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        if (t) {
                            var e = new Error;
                            e.stack
                        }
                        o = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return o
                    }
                };

            function c(t) {
                setTimeout((function() {
                    throw t
                }), 0)
            }
            var u = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (s.useDeprecatedSynchronousErrorHandling) throw t;
                        c(t)
                    },
                    complete: function() {}
                },
                a = function() {
                    return Array.isArray || function(t) {
                        return t && "number" === typeof t.length
                    }
                }();

            function h(t) {
                return null !== t && "object" === typeof t
            }
            var l = function() {
                    function t(t) {
                        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                            return e + 1 + ") " + t.toString()
                        })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                f = l,
                d = function() {
                    function t(t) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                    }
                    return t.prototype.unsubscribe = function() {
                        var e;
                        if (!this.closed) {
                            var r = this,
                                n = r._parentOrParents,
                                o = r._ctorUnsubscribe,
                                s = r._unsubscribe,
                                c = r._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                            else if (null !== n)
                                for (var u = 0; u < n.length; ++u) {
                                    var l = n[u];
                                    l.remove(this)
                                }
                            if (i(s)) {
                                o && (this._unsubscribe = void 0);
                                try {
                                    s.call(this)
                                } catch (y) {
                                    e = y instanceof f ? p(y.errors) : [y]
                                }
                            }
                            if (a(c)) {
                                u = -1;
                                var d = c.length;
                                while (++u < d) {
                                    var b = c[u];
                                    if (h(b)) try {
                                        b.unsubscribe()
                                    } catch (y) {
                                        e = e || [], y instanceof f ? e = e.concat(p(y.errors)) : e.push(y)
                                    }
                                }
                            }
                            if (e) throw new f(e)
                        }
                    }, t.prototype.add = function(e) {
                        var r = e;
                        if (!e) return t.EMPTY;
                        switch (typeof e) {
                            case "function":
                                r = new t(e);
                            case "object":
                                if (r === this || r.closed || "function" !== typeof r.unsubscribe) return r;
                                if (this.closed) return r.unsubscribe(), r;
                                if (!(r instanceof t)) {
                                    var n = r;
                                    r = new t, r._subscriptions = [n]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        var i = r._parentOrParents;
                        if (null === i) r._parentOrParents = this;
                        else if (i instanceof t) {
                            if (i === this) return r;
                            r._parentOrParents = [i, this]
                        } else {
                            if (-1 !== i.indexOf(this)) return r;
                            i.push(this)
                        }
                        var o = this._subscriptions;
                        return null === o ? this._subscriptions = [r] : o.push(r), r
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
                        }
                    }, t.EMPTY = function(t) {
                        return t.closed = !0, t
                    }(new t), t
                }();

            function p(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof f ? e.errors : e)
                }), [])
            }
            var b = function() {
                    return "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
                }(),
                y = function(t) {
                    function e(r, n, i) {
                        var o = t.call(this) || this;
                        switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                            case 0:
                                o.destination = u;
                                break;
                            case 1:
                                if (!r) {
                                    o.destination = u;
                                    break
                                }
                                if ("object" === typeof r) {
                                    r instanceof e ? (o.syncErrorThrowable = r.syncErrorThrowable, o.destination = r, r.add(o)) : (o.syncErrorThrowable = !0, o.destination = new v(o, r));
                                    break
                                }
                            default:
                                o.syncErrorThrowable = !0, o.destination = new v(o, r, n, i);
                                break
                        }
                        return o
                    }
                    return n["__extends"](e, t), e.prototype[b] = function() {
                        return this
                    }, e.create = function(t, r, n) {
                        var i = new e(t, r, n);
                        return i.syncErrorThrowable = !1, i
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                    }, e
                }(d),
                v = function(t) {
                    function e(e, r, n, o) {
                        var s, c = t.call(this) || this;
                        c._parentSubscriber = e;
                        var a = c;
                        return i(r) ? s = r : r && (s = r.next, n = r.error, o = r.complete, r !== u && (a = Object.create(r), i(a.unsubscribe) && c.add(a.unsubscribe.bind(a)), a.unsubscribe = c.unsubscribe.bind(c))), c._context = a, c._next = s, c._error = n, c._complete = o, c
                    }
                    return n["__extends"](e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                r = s.useDeprecatedSynchronousErrorHandling;
                            if (this._error) r && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) r ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : c(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), r) throw t;
                                c(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var r = function() {
                                    return t._complete.call(t._context)
                                };
                                s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (r) {
                            if (this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling) throw r;
                            c(r)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, r) {
                        if (!s.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, r)
                        } catch (n) {
                            return s.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = n, t.syncErrorThrown = !0, !0) : (c(n), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(y);

            function E(t) {
                while (t) {
                    var e = t,
                        r = e.closed,
                        n = e.destination,
                        i = e.isStopped;
                    if (r || i) return !1;
                    t = n && n instanceof y ? n : null
                }
                return !0
            }

            function m(t, e, r) {
                if (t) {
                    if (t instanceof y) return t;
                    if (t[b]) return t[b]()
                }
                return t || e || r ? new y(t, e, r) : new y(u)
            }
            var g = function() {
                return "function" === typeof Symbol && Symbol.observable || "@@observable"
            }();

            function w(t) {
                return t
            }

            function _() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return I(t)
            }

            function I(t) {
                return 0 === t.length ? w : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }), e)
                }
            }
            var S = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var r = new t;
                    return r.source = this, r.operator = e, r
                }, t.prototype.subscribe = function(t, e, r) {
                    var n = this.operator,
                        i = m(t, e, r);
                    if (n ? i.add(n.call(i, this.source)) : i.add(this.source || s.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), s.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                    return i
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        s.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), E(t) ? t.error(e) : console.warn(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var r = this;
                    return e = T(e), new e((function(e, n) {
                        var i;
                        i = r.subscribe((function(e) {
                            try {
                                t(e)
                            } catch (r) {
                                n(r), i && i.unsubscribe()
                            }
                        }), n, e)
                    }))
                }, t.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }, t.prototype[g] = function() {
                    return this
                }, t.prototype.pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 0 === t.length ? this : I(t)(this)
                }, t.prototype.toPromise = function(t) {
                    var e = this;
                    return t = T(t), new t((function(t, r) {
                        var n;
                        e.subscribe((function(t) {
                            return n = t
                        }), (function(t) {
                            return r(t)
                        }), (function() {
                            return t(n)
                        }))
                    }))
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }();

            function T(t) {
                if (t || (t = s.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }
            var x = function() {
                    function t() {
                        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                A = x,
                O = function(t) {
                    function e(e, r) {
                        var n = t.call(this) || this;
                        return n.subject = e, n.subscriber = r, n.closed = !1, n
                    }
                    return n["__extends"](e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var r = e.indexOf(this.subscriber); - 1 !== r && e.splice(r, 1)
                            }
                        }
                    }, e
                }(d),
                N = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.destination = e, r
                    }
                    return n["__extends"](e, t), e
                }(y),
                B = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return n["__extends"](e, t), e.prototype[b] = function() {
                        return new N(this)
                    }, e.prototype.lift = function(t) {
                        var e = new R(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed) throw new A;
                        if (!this.isStopped)
                            for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed) throw new A;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed) throw new A;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, r = t.slice(), n = 0; n < e; n++) r[n].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed) throw new A;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed) throw new A;
                        return this.hasError ? (t.error(this.thrownError), d.EMPTY) : this.isStopped ? (t.complete(), d.EMPTY) : (this.observers.push(t), new O(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new S;
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new R(t, e)
                    }, e
                }(S),
                R = function(t) {
                    function e(e, r) {
                        var n = t.call(this) || this;
                        return n.destination = e, n.source = r, n
                    }
                    return n["__extends"](e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        var e = this.source;
                        return e ? this.source.subscribe(t) : d.EMPTY
                    }, e
                }(B);

            function L() {
                return function(t) {
                    return t.lift(new P(t))
                }
            }
            var P = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var r = this.connectable;
                        r._refCount++;
                        var n = new C(t, r),
                            i = e.subscribe(n);
                        return n.closed || (n.connection = r.connect()), i
                    }, t
                }(),
                C = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.connectable = r, n
                    }
                    return n["__extends"](e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var r = this.connection,
                                    n = t._connection;
                                this.connection = null, !n || r && n !== r || n.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(y),
                H = function(t) {
                    function e(e, r) {
                        var n = t.call(this) || this;
                        return n.source = e, n.subjectFactory = r, n._refCount = 0, n._isComplete = !1, n
                    }
                    return n["__extends"](e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, t = this._connection = new d, t.add(this.source.subscribe(new U(this.getSubject(), this))), t.closed && (this._connection = null, t = d.EMPTY)), t
                    }, e.prototype.refCount = function() {
                        return L()(this)
                    }, e
                }(S),
                U = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.connectable = r, n
                    }
                    return n["__extends"](e, t), e.prototype._error = function(e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(N);
            var D = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this) || this;
                        return i.key = e, i.groupSubject = r, i.refCountSubscription = n, i
                    }
                    return n["__extends"](e, t), e.prototype._subscribe = function(t) {
                        var e = new d,
                            r = this,
                            n = r.refCountSubscription,
                            i = r.groupSubject;
                        return n && !n.closed && e.add(new M(n)), e.add(i.subscribe(t)), e
                    }, e
                }(S),
                M = function(t) {
                    function e(e) {
                        var r = t.call(this) || this;
                        return r.parent = e, e.count++, r
                    }
                    return n["__extends"](e, t), e.prototype.unsubscribe = function() {
                        var e = this.parent;
                        e.closed || this.closed || (t.prototype.unsubscribe.call(this), e.count -= 1, 0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe())
                    }, e
                }(d),
                k = function(t) {
                    function e(e) {
                        var r = t.call(this) || this;
                        return r._value = e, r
                    }
                    return n["__extends"](e, t), Object.defineProperty(e.prototype, "value", {
                        get: function() {
                            return this.getValue()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._subscribe = function(e) {
                        var r = t.prototype._subscribe.call(this, e);
                        return r && !r.closed && e.next(this._value), r
                    }, e.prototype.getValue = function() {
                        if (this.hasError) throw this.thrownError;
                        if (this.closed) throw new A;
                        return this._value
                    }, e.prototype.next = function(e) {
                        t.prototype.next.call(this, this._value = e)
                    }, e
                }(B),
                j = function(t) {
                    function e(e, r) {
                        return t.call(this) || this
                    }
                    return n["__extends"](e, t), e.prototype.schedule = function(t, e) {
                        return void 0 === e && (e = 0), this
                    }, e
                }(d),
                F = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        return n.scheduler = e, n.work = r, n.pending = !1, n
                    }
                    return n["__extends"](e, t), e.prototype.schedule = function(t, e) {
                        if (void 0 === e && (e = 0), this.closed) return this;
                        this.state = t;
                        var r = this.id,
                            n = this.scheduler;
                        return null != r && (this.id = this.recycleAsyncId(n, r, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(n, this.id, e), this
                    }, e.prototype.requestAsyncId = function(t, e, r) {
                        return void 0 === r && (r = 0), setInterval(t.flush.bind(t, this), r)
                    }, e.prototype.recycleAsyncId = function(t, e, r) {
                        if (void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending) return e;
                        clearInterval(e)
                    }, e.prototype.execute = function(t, e) {
                        if (this.closed) return new Error("executing a cancelled action");
                        this.pending = !1;
                        var r = this._execute(t, e);
                        if (r) return r;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, e.prototype._execute = function(t, e) {
                        var r = !1,
                            n = void 0;
                        try {
                            this.work(t)
                        } catch (i) {
                            r = !0, n = !!i && i || new Error(i)
                        }
                        if (r) return this.unsubscribe(), n
                    }, e.prototype._unsubscribe = function() {
                        var t = this.id,
                            e = this.scheduler,
                            r = e.actions,
                            n = r.indexOf(this);
                        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(n, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                    }, e
                }(j),
                G = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        return n.scheduler = e, n.work = r, n
                    }
                    return n["__extends"](e, t), e.prototype.schedule = function(e, r) {
                        return void 0 === r && (r = 0), r > 0 ? t.prototype.schedule.call(this, e, r) : (this.delay = r, this.state = e, this.scheduler.flush(this), this)
                    }, e.prototype.execute = function(e, r) {
                        return r > 0 || this.closed ? t.prototype.execute.call(this, e, r) : this._execute(e, r)
                    }, e.prototype.requestAsyncId = function(e, r, n) {
                        return void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, r, n) : e.flush(this)
                    }, e
                }(F),
                $ = function() {
                    function t(e, r) {
                        void 0 === r && (r = t.now), this.SchedulerAction = e, this.now = r
                    }
                    return t.prototype.schedule = function(t, e, r) {
                        return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(r, e)
                    }, t.now = function() {
                        return Date.now()
                    }, t
                }(),
                V = function(t) {
                    function e(r, n) {
                        void 0 === n && (n = $.now);
                        var i = t.call(this, r, (function() {
                            return e.delegate && e.delegate !== i ? e.delegate.now() : n()
                        })) || this;
                        return i.actions = [], i.active = !1, i.scheduled = void 0, i
                    }
                    return n["__extends"](e, t), e.prototype.schedule = function(r, n, i) {
                        return void 0 === n && (n = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(r, n, i) : t.prototype.schedule.call(this, r, n, i)
                    }, e.prototype.flush = function(t) {
                        var e = this.actions;
                        if (this.active) e.push(t);
                        else {
                            var r;
                            this.active = !0;
                            do {
                                if (r = t.execute(t.state, t.delay)) break
                            } while (t = e.shift());
                            if (this.active = !1, r) {
                                while (t = e.shift()) t.unsubscribe();
                                throw r
                            }
                        }
                    }, e
                }($),
                X = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n["__extends"](e, t), e
                }(V),
                Y = new X(G),
                q = Y,
                z = new S((function(t) {
                    return t.complete()
                }));

            function W(t) {
                return t ? K(t) : z
            }

            function K(t) {
                return new S((function(e) {
                    return t.schedule((function() {
                        return e.complete()
                    }))
                }))
            }

            function Z(t) {
                return t && "function" === typeof t.schedule
            }
            var J, Q = function(t) {
                return function(e) {
                    for (var r = 0, n = t.length; r < n && !e.closed; r++) e.next(t[r]);
                    e.complete()
                }
            };

            function tt(t, e) {
                return new S((function(r) {
                    var n = new d,
                        i = 0;
                    return n.add(e.schedule((function() {
                        i !== t.length ? (r.next(t[i++]), r.closed || n.add(this.schedule())) : r.complete()
                    }))), n
                }))
            }

            function et(t, e) {
                return e ? tt(t, e) : new S(Q(t))
            }

            function rt() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = t[t.length - 1];
                return Z(r) ? (t.pop(), tt(t, r)) : et(t)
            }

            function nt(t, e) {
                return new S(e ? function(r) {
                    return e.schedule(it, 0, {
                        error: t,
                        subscriber: r
                    })
                } : function(e) {
                    return e.error(t)
                })
            }

            function it(t) {
                var e = t.error,
                    r = t.subscriber;
                r.error(e)
            }
            J || (J = {});
            var ot = function() {
                function t(t, e, r) {
                    this.kind = t, this.value = e, this.error = r, this.hasValue = "N" === t
                }
                return t.prototype.observe = function(t) {
                    switch (this.kind) {
                        case "N":
                            return t.next && t.next(this.value);
                        case "E":
                            return t.error && t.error(this.error);
                        case "C":
                            return t.complete && t.complete()
                    }
                }, t.prototype.do = function(t, e, r) {
                    var n = this.kind;
                    switch (n) {
                        case "N":
                            return t && t(this.value);
                        case "E":
                            return e && e(this.error);
                        case "C":
                            return r && r()
                    }
                }, t.prototype.accept = function(t, e, r) {
                    return t && "function" === typeof t.next ? this.observe(t) : this.do(t, e, r)
                }, t.prototype.toObservable = function() {
                    var t = this.kind;
                    switch (t) {
                        case "N":
                            return rt(this.value);
                        case "E":
                            return nt(this.error);
                        case "C":
                            return W()
                    }
                    throw new Error("unexpected notification kind value")
                }, t.createNext = function(e) {
                    return "undefined" !== typeof e ? new t("N", e) : t.undefinedValueNotification
                }, t.createError = function(e) {
                    return new t("E", void 0, e)
                }, t.createComplete = function() {
                    return t.completeNotification
                }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
            }();
            var st = function(t) {
                    function e(e, r, n) {
                        void 0 === n && (n = 0);
                        var i = t.call(this, e) || this;
                        return i.scheduler = r, i.delay = n, i
                    }
                    return n["__extends"](e, t), e.dispatch = function(t) {
                        var e = t.notification,
                            r = t.destination;
                        e.observe(r), this.unsubscribe()
                    }, e.prototype.scheduleMessage = function(t) {
                        var r = this.destination;
                        r.add(this.scheduler.schedule(e.dispatch, this.delay, new ct(t, this.destination)))
                    }, e.prototype._next = function(t) {
                        this.scheduleMessage(ot.createNext(t))
                    }, e.prototype._error = function(t) {
                        this.scheduleMessage(ot.createError(t)), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.scheduleMessage(ot.createComplete()), this.unsubscribe()
                    }, e
                }(y),
                ct = function() {
                    function t(t, e) {
                        this.notification = t, this.destination = e
                    }
                    return t
                }(),
                ut = function(t) {
                    function e(e, r, n) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var i = t.call(this) || this;
                        return i.scheduler = n, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = e < 1 ? 1 : e, i._windowTime = r < 1 ? 1 : r, r === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i
                    }
                    return n["__extends"](e, t), e.prototype.nextInfiniteTimeWindow = function(e) {
                        if (!this.isStopped) {
                            var r = this._events;
                            r.push(e), r.length > this._bufferSize && r.shift()
                        }
                        t.prototype.next.call(this, e)
                    }, e.prototype.nextTimeWindow = function(e) {
                        this.isStopped || (this._events.push(new at(this._getNow(), e)), this._trimBufferThenGetEvents()), t.prototype.next.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        var e, r = this._infiniteTimeWindow,
                            n = r ? this._events : this._trimBufferThenGetEvents(),
                            i = this.scheduler,
                            o = n.length;
                        if (this.closed) throw new A;
                        if (this.isStopped || this.hasError ? e = d.EMPTY : (this.observers.push(t), e = new O(this, t)), i && t.add(t = new st(t, i)), r)
                            for (var s = 0; s < o && !t.closed; s++) t.next(n[s]);
                        else
                            for (s = 0; s < o && !t.closed; s++) t.next(n[s].value);
                        return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
                    }, e.prototype._getNow = function() {
                        return (this.scheduler || q).now()
                    }, e.prototype._trimBufferThenGetEvents = function() {
                        var t = this._getNow(),
                            e = this._bufferSize,
                            r = this._windowTime,
                            n = this._events,
                            i = n.length,
                            o = 0;
                        while (o < i) {
                            if (t - n[o].time < r) break;
                            o++
                        }
                        return i > e && (o = Math.max(o, i - e)), o > 0 && n.splice(0, o), n
                    }, e
                }(B),
                at = function() {
                    function t(t, e) {
                        this.time = t, this.value = e
                    }
                    return t
                }(),
                ht = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.value = null, e.hasNext = !1, e.hasCompleted = !1, e
                    }
                    return n["__extends"](e, t), e.prototype._subscribe = function(e) {
                        return this.hasError ? (e.error(this.thrownError), d.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value), e.complete(), d.EMPTY) : t.prototype._subscribe.call(this, e)
                    }, e.prototype.next = function(t) {
                        this.hasCompleted || (this.value = t, this.hasNext = !0)
                    }, e.prototype.error = function(e) {
                        this.hasCompleted || t.prototype.error.call(this, e)
                    }, e.prototype.complete = function() {
                        this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this)
                    }, e
                }(B),
                lt = 1,
                ft = function() {
                    return Promise.resolve()
                }(),
                dt = {};

            function pt(t) {
                return t in dt && (delete dt[t], !0)
            }
            var bt = {
                    setImmediate: function(t) {
                        var e = lt++;
                        return dt[e] = !0, ft.then((function() {
                            return pt(e) && t()
                        })), e
                    },
                    clearImmediate: function(t) {
                        pt(t)
                    }
                },
                yt = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        return n.scheduler = e, n.work = r, n
                    }
                    return n["__extends"](e, t), e.prototype.requestAsyncId = function(e, r, n) {
                        return void 0 === n && (n = 0), null !== n && n > 0 ? t.prototype.requestAsyncId.call(this, e, r, n) : (e.actions.push(this), e.scheduled || (e.scheduled = bt.setImmediate(e.flush.bind(e, null))))
                    }, e.prototype.recycleAsyncId = function(e, r, n) {
                        if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, r, n);
                        0 === e.actions.length && (bt.clearImmediate(r), e.scheduled = void 0)
                    }, e
                }(F),
                vt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n["__extends"](e, t), e.prototype.flush = function(t) {
                        this.active = !0, this.scheduled = void 0;
                        var e, r = this.actions,
                            n = -1,
                            i = r.length;
                        t = t || r.shift();
                        do {
                            if (e = t.execute(t.state, t.delay)) break
                        } while (++n < i && (t = r.shift()));
                        if (this.active = !1, e) {
                            while (++n < i && (t = r.shift())) t.unsubscribe();
                            throw e
                        }
                    }, e
                }(V),
                Et = new vt(yt),
                mt = Et,
                gt = new V(F),
                wt = gt,
                _t = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        return n.scheduler = e, n.work = r, n
                    }
                    return n["__extends"](e, t), e.prototype.requestAsyncId = function(e, r, n) {
                        return void 0 === n && (n = 0), null !== n && n > 0 ? t.prototype.requestAsyncId.call(this, e, r, n) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame((function() {
                            return e.flush(null)
                        }))))
                    }, e.prototype.recycleAsyncId = function(e, r, n) {
                        if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, r, n);
                        0 === e.actions.length && (cancelAnimationFrame(r), e.scheduled = void 0)
                    }, e
                }(F),
                It = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n["__extends"](e, t), e.prototype.flush = function(t) {
                        this.active = !0, this.scheduled = void 0;
                        var e, r = this.actions,
                            n = -1,
                            i = r.length;
                        t = t || r.shift();
                        do {
                            if (e = t.execute(t.state, t.delay)) break
                        } while (++n < i && (t = r.shift()));
                        if (this.active = !1, e) {
                            while (++n < i && (t = r.shift())) t.unsubscribe();
                            throw e
                        }
                    }, e
                }(V),
                St = new It(_t),
                Tt = St,
                xt = function(t) {
                    function e(e, r) {
                        void 0 === e && (e = At), void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var n = t.call(this, e, (function() {
                            return n.frame
                        })) || this;
                        return n.maxFrames = r, n.frame = 0, n.index = -1, n
                    }
                    return n["__extends"](e, t), e.prototype.flush = function() {
                        var t, e, r = this,
                            n = r.actions,
                            i = r.maxFrames;
                        while ((e = n[0]) && e.delay <= i)
                            if (n.shift(), this.frame = e.delay, t = e.execute(e.state, e.delay)) break;
                        if (t) {
                            while (e = n.shift()) e.unsubscribe();
                            throw t
                        }
                    }, e.frameTimeFactor = 10, e
                }(V),
                At = function(t) {
                    function e(e, r, n) {
                        void 0 === n && (n = e.index += 1);
                        var i = t.call(this, e, r) || this;
                        return i.scheduler = e, i.work = r, i.index = n, i.active = !0, i.index = e.index = n, i
                    }
                    return n["__extends"](e, t), e.prototype.schedule = function(r, n) {
                        if (void 0 === n && (n = 0), !this.id) return t.prototype.schedule.call(this, r, n);
                        this.active = !1;
                        var i = new e(this.scheduler, this.work);
                        return this.add(i), i.schedule(r, n)
                    }, e.prototype.requestAsyncId = function(t, r, n) {
                        void 0 === n && (n = 0), this.delay = t.frame + n;
                        var i = t.actions;
                        return i.push(this), i.sort(e.sortActions), !0
                    }, e.prototype.recycleAsyncId = function(t, e, r) {
                        void 0 === r && (r = 0)
                    }, e.prototype._execute = function(e, r) {
                        if (!0 === this.active) return t.prototype._execute.call(this, e, r)
                    }, e.sortActions = function(t, e) {
                        return t.delay === e.delay ? t.index === e.index ? 0 : t.index > e.index ? 1 : -1 : t.delay > e.delay ? 1 : -1
                    }, e
                }(F);

            function Ot() {}

            function Nt(t) {
                return !!t && (t instanceof S || "function" === typeof t.lift && "function" === typeof t.subscribe)
            }
            var Bt = function() {
                    function t() {
                        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                Rt = Bt,
                Lt = function() {
                    function t() {
                        return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                Pt = Lt,
                Ct = function() {
                    function t() {
                        return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                Ht = Ct;

            function Ut(t, e) {
                return function(r) {
                    if ("function" !== typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return r.lift(new Dt(t, e))
                }
            }
            var Dt = function() {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Mt(t, this.project, this.thisArg))
                    }, t
                }(),
                Mt = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e) || this;
                        return i.project = r, i.count = 0, i.thisArg = n || i, i
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.destination.next(e)
                    }, e
                }(y);

            function kt(t, e, r) {
                if (e) {
                    if (!Z(e)) return function() {
                        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                        return kt(t, r).apply(void 0, n).pipe(Ut((function(t) {
                            return a(t) ? e.apply(void 0, t) : e(t)
                        })))
                    };
                    r = e
                }
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var i, o = this,
                        s = {
                            context: o,
                            subject: i,
                            callbackFunc: t,
                            scheduler: r
                        };
                    return new S((function(n) {
                        if (r) {
                            var c = {
                                args: e,
                                subscriber: n,
                                params: s
                            };
                            return r.schedule(jt, 0, c)
                        }
                        if (!i) {
                            i = new ht;
                            var u = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                i.next(t.length <= 1 ? t[0] : t), i.complete()
                            };
                            try {
                                t.apply(o, e.concat([u]))
                            } catch (a) {
                                E(i) ? i.error(a) : console.warn(a)
                            }
                        }
                        return i.subscribe(n)
                    }))
                }
            }

            function jt(t) {
                var e = this,
                    r = t.args,
                    n = t.subscriber,
                    i = t.params,
                    o = i.callbackFunc,
                    s = i.context,
                    c = i.scheduler,
                    u = i.subject;
                if (!u) {
                    u = i.subject = new ht;
                    var a = function() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var n = t.length <= 1 ? t[0] : t;
                        e.add(c.schedule(Ft, 0, {
                            value: n,
                            subject: u
                        }))
                    };
                    try {
                        o.apply(s, r.concat([a]))
                    } catch (h) {
                        u.error(h)
                    }
                }
                this.add(u.subscribe(n))
            }

            function Ft(t) {
                var e = t.value,
                    r = t.subject;
                r.next(e), r.complete()
            }

            function Gt(t, e, r) {
                if (e) {
                    if (!Z(e)) return function() {
                        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                        return Gt(t, r).apply(void 0, n).pipe(Ut((function(t) {
                            return a(t) ? e.apply(void 0, t) : e(t)
                        })))
                    };
                    r = e
                }
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var i = {
                        subject: void 0,
                        args: e,
                        callbackFunc: t,
                        scheduler: r,
                        context: this
                    };
                    return new S((function(n) {
                        var o = i.context,
                            s = i.subject;
                        if (r) return r.schedule($t, 0, {
                            params: i,
                            subscriber: n,
                            context: o
                        });
                        if (!s) {
                            s = i.subject = new ht;
                            var c = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                var r = t.shift();
                                r ? s.error(r) : (s.next(t.length <= 1 ? t[0] : t), s.complete())
                            };
                            try {
                                t.apply(o, e.concat([c]))
                            } catch (u) {
                                E(s) ? s.error(u) : console.warn(u)
                            }
                        }
                        return s.subscribe(n)
                    }))
                }
            }

            function $t(t) {
                var e = this,
                    r = t.params,
                    n = t.subscriber,
                    i = t.context,
                    o = r.callbackFunc,
                    s = r.args,
                    c = r.scheduler,
                    u = r.subject;
                if (!u) {
                    u = r.subject = new ht;
                    var a = function() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var n = t.shift();
                        if (n) e.add(c.schedule(Xt, 0, {
                            err: n,
                            subject: u
                        }));
                        else {
                            var i = t.length <= 1 ? t[0] : t;
                            e.add(c.schedule(Vt, 0, {
                                value: i,
                                subject: u
                            }))
                        }
                    };
                    try {
                        o.apply(i, s.concat([a]))
                    } catch (h) {
                        this.add(c.schedule(Xt, 0, {
                            err: h,
                            subject: u
                        }))
                    }
                }
                this.add(u.subscribe(n))
            }

            function Vt(t) {
                var e = t.value,
                    r = t.subject;
                r.next(e), r.complete()
            }

            function Xt(t) {
                var e = t.err,
                    r = t.subject;
                r.error(e)
            }
            var Yt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n["__extends"](e, t), e.prototype.notifyNext = function(t, e, r, n, i) {
                        this.destination.next(e)
                    }, e.prototype.notifyError = function(t, e) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function(t) {
                        this.destination.complete()
                    }, e
                }(y),
                qt = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this) || this;
                        return i.parent = e, i.outerValue = r, i.outerIndex = n, i.index = 0, i
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t, this), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(this), this.unsubscribe()
                    }, e
                }(y),
                zt = function(t) {
                    return function(e) {
                        return t.then((function(t) {
                            e.closed || (e.next(t), e.complete())
                        }), (function(t) {
                            return e.error(t)
                        })).then(null, c), e
                    }
                };

            function Wt() {
                return "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            var Kt = Wt(),
                Zt = function(t) {
                    return function(e) {
                        var r = t[Kt]();
                        do {
                            var n = void 0;
                            try {
                                n = r.next()
                            } catch (i) {
                                return e.error(i), e
                            }
                            if (n.done) {
                                e.complete();
                                break
                            }
                            if (e.next(n.value), e.closed) break
                        } while (1);
                        return "function" === typeof r.return && e.add((function() {
                            r.return && r.return()
                        })), e
                    }
                },
                Jt = function(t) {
                    return function(e) {
                        var r = t[g]();
                        if ("function" !== typeof r.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return r.subscribe(e)
                    }
                },
                Qt = function(t) {
                    return t && "number" === typeof t.length && "function" !== typeof t
                };

            function te(t) {
                return !!t && "function" !== typeof t.subscribe && "function" === typeof t.then
            }
            var ee = function(t) {
                if (t && "function" === typeof t[g]) return Jt(t);
                if (Qt(t)) return Q(t);
                if (te(t)) return zt(t);
                if (t && "function" === typeof t[Kt]) return Zt(t);
                var e = h(t) ? "an invalid object" : "'" + t + "'",
                    r = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
                throw new TypeError(r)
            };

            function re(t, e, r, n, i) {
                if (void 0 === i && (i = new qt(t, r, n)), !i.closed) return e instanceof S ? e.subscribe(i) : ee(e)(i)
            }
            var ne = {};

            function ie() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = void 0,
                    n = void 0;
                return Z(t[t.length - 1]) && (n = t.pop()), "function" === typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && a(t[0]) && (t = t[0]), et(t, n).lift(new oe(r))
            }
            var oe = function() {
                    function t(t) {
                        this.resultSelector = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new se(t, this.resultSelector))
                    }, t
                }(),
                se = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.resultSelector = r, n.active = 0, n.values = [], n.observables = [], n
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        this.values.push(ne), this.observables.push(t)
                    }, e.prototype._complete = function() {
                        var t = this.observables,
                            e = t.length;
                        if (0 === e) this.destination.complete();
                        else {
                            this.active = e, this.toRespond = e;
                            for (var r = 0; r < e; r++) {
                                var n = t[r];
                                this.add(re(this, n, void 0, r))
                            }
                        }
                    }, e.prototype.notifyComplete = function(t) {
                        0 === (this.active -= 1) && this.destination.complete()
                    }, e.prototype.notifyNext = function(t, e, r) {
                        var n = this.values,
                            i = n[r],
                            o = this.toRespond ? i === ne ? --this.toRespond : this.toRespond : 0;
                        n[r] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(n) : this.destination.next(n.slice()))
                    }, e.prototype._tryResultSelector = function(t) {
                        var e;
                        try {
                            e = this.resultSelector.apply(this, t)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.destination.next(e)
                    }, e
                }(Yt);

            function ce(t, e) {
                return new S((function(r) {
                    var n = new d;
                    return n.add(e.schedule((function() {
                        var i = t[g]();
                        n.add(i.subscribe({
                            next: function(t) {
                                n.add(e.schedule((function() {
                                    return r.next(t)
                                })))
                            },
                            error: function(t) {
                                n.add(e.schedule((function() {
                                    return r.error(t)
                                })))
                            },
                            complete: function() {
                                n.add(e.schedule((function() {
                                    return r.complete()
                                })))
                            }
                        }))
                    }))), n
                }))
            }

            function ue(t, e) {
                return new S((function(r) {
                    var n = new d;
                    return n.add(e.schedule((function() {
                        return t.then((function(t) {
                            n.add(e.schedule((function() {
                                r.next(t), n.add(e.schedule((function() {
                                    return r.complete()
                                })))
                            })))
                        }), (function(t) {
                            n.add(e.schedule((function() {
                                return r.error(t)
                            })))
                        }))
                    }))), n
                }))
            }

            function ae(t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new S((function(r) {
                    var n, i = new d;
                    return i.add((function() {
                        n && "function" === typeof n.return && n.return()
                    })), i.add(e.schedule((function() {
                        n = t[Kt](), i.add(e.schedule((function() {
                            if (!r.closed) {
                                var t, e;
                                try {
                                    var i = n.next();
                                    t = i.value, e = i.done
                                } catch (o) {
                                    return void r.error(o)
                                }
                                e ? r.complete() : (r.next(t), this.schedule())
                            }
                        })))
                    }))), i
                }))
            }

            function he(t) {
                return t && "function" === typeof t[g]
            }

            function le(t) {
                return t && "function" === typeof t[Kt]
            }

            function fe(t, e) {
                if (null != t) {
                    if (he(t)) return ce(t, e);
                    if (te(t)) return ue(t, e);
                    if (Qt(t)) return tt(t, e);
                    if (le(t) || "string" === typeof t) return ae(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }

            function de(t, e) {
                return e ? fe(t, e) : t instanceof S ? t : new S(ee(t))
            }
            var pe = function(t) {
                    function e(e) {
                        var r = t.call(this) || this;
                        return r.parent = e, r
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(t)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(), this.unsubscribe()
                    }, e
                }(y),
                be = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n["__extends"](e, t), e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyError = function(t) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function() {
                        this.destination.complete()
                    }, e
                }(y);

            function ye(t, e) {
                if (!e.closed) {
                    if (t instanceof S) return t.subscribe(e);
                    var r;
                    try {
                        r = ee(t)(e)
                    } catch (n) {
                        e.error(n)
                    }
                    return r
                }
            }

            function ve(t, e, r) {
                return void 0 === r && (r = Number.POSITIVE_INFINITY), "function" === typeof e ? function(n) {
                    return n.pipe(ve((function(r, n) {
                        return de(t(r, n)).pipe(Ut((function(t, i) {
                            return e(r, t, n, i)
                        })))
                    }), r))
                } : ("number" === typeof e && (r = e), function(e) {
                    return e.lift(new Ee(t, r))
                })
            }
            var Ee = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new me(t, this.project, this.concurrent))
                    }, t
                }(),
                me = function(t) {
                    function e(e, r, n) {
                        void 0 === n && (n = Number.POSITIVE_INFINITY);
                        var i = t.call(this, e) || this;
                        return i.project = r, i.concurrent = n, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, r = this.index++;
                        try {
                            e = this.project(t, r)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.active++, this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = new pe(this),
                            r = this.destination;
                        r.add(e);
                        var n = ye(t, e);
                        n !== e && r.add(n)
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyComplete = function() {
                        var t = this.buffer;
                        this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(be);

            function ge(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), ve(w, t)
            }

            function we() {
                return ge(1)
            }

            function _e() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return we()(rt.apply(void 0, t))
            }

            function Ie(t) {
                return new S((function(e) {
                    var r;
                    try {
                        r = t()
                    } catch (i) {
                        return void e.error(i)
                    }
                    var n = r ? de(r) : W();
                    return n.subscribe(e)
                }))
            }

            function Se() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (1 === t.length) {
                    var r = t[0];
                    if (a(r)) return Te(r, null);
                    if (h(r) && Object.getPrototypeOf(r) === Object.prototype) {
                        var n = Object.keys(r);
                        return Te(n.map((function(t) {
                            return r[t]
                        })), n)
                    }
                }
                if ("function" === typeof t[t.length - 1]) {
                    var i = t.pop();
                    return t = 1 === t.length && a(t[0]) ? t[0] : t, Te(t, null).pipe(Ut((function(t) {
                        return i.apply(void 0, t)
                    })))
                }
                return Te(t, null)
            }

            function Te(t, e) {
                return new S((function(r) {
                    var n = t.length;
                    if (0 !== n)
                        for (var i = new Array(n), o = 0, s = 0, c = function(c) {
                                var u = de(t[c]),
                                    a = !1;
                                r.add(u.subscribe({
                                    next: function(t) {
                                        a || (a = !0, s++), i[c] = t
                                    },
                                    error: function(t) {
                                        return r.error(t)
                                    },
                                    complete: function() {
                                        o++, o !== n && a || (s === n && r.next(e ? e.reduce((function(t, e, r) {
                                            return t[e] = i[r], t
                                        }), {}) : i), r.complete())
                                    }
                                }))
                            }, u = 0; u < n; u++) c(u);
                    else r.complete()
                }))
            }

            function xe(t, e, r, n) {
                return i(r) && (n = r, r = void 0), n ? xe(t, e, r).pipe(Ut((function(t) {
                    return a(t) ? n.apply(void 0, t) : n(t)
                }))) : new S((function(n) {
                    function i(t) {
                        arguments.length > 1 ? n.next(Array.prototype.slice.call(arguments)) : n.next(t)
                    }
                    Ae(t, e, i, n, r)
                }))
            }

            function Ae(t, e, r, n, i) {
                var o;
                if (Be(t)) {
                    var s = t;
                    t.addEventListener(e, r, i), o = function() {
                        return s.removeEventListener(e, r, i)
                    }
                } else if (Ne(t)) {
                    var c = t;
                    t.on(e, r), o = function() {
                        return c.off(e, r)
                    }
                } else if (Oe(t)) {
                    var u = t;
                    t.addListener(e, r), o = function() {
                        return u.removeListener(e, r)
                    }
                } else {
                    if (!t || !t.length) throw new TypeError("Invalid event target");
                    for (var a = 0, h = t.length; a < h; a++) Ae(t[a], e, r, n, i)
                }
                n.add(o)
            }

            function Oe(t) {
                return t && "function" === typeof t.addListener && "function" === typeof t.removeListener
            }

            function Ne(t) {
                return t && "function" === typeof t.on && "function" === typeof t.off
            }

            function Be(t) {
                return t && "function" === typeof t.addEventListener && "function" === typeof t.removeEventListener
            }

            function Re(t, e, r) {
                return r ? Re(t, e).pipe(Ut((function(t) {
                    return a(t) ? r.apply(void 0, t) : r(t)
                }))) : new S((function(r) {
                    var n, o = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return r.next(1 === t.length ? t[0] : t)
                    };
                    try {
                        n = t(o)
                    } catch (s) {
                        return void r.error(s)
                    }
                    if (i(e)) return function() {
                        return e(o, n)
                    }
                }))
            }

            function Le(t, e, r, n, i) {
                var o, s;
                if (1 == arguments.length) {
                    var c = t;
                    s = c.initialState, e = c.condition, r = c.iterate, o = c.resultSelector || w, i = c.scheduler
                } else void 0 === n || Z(n) ? (s = t, o = w, i = n) : (s = t, o = n);
                return new S((function(t) {
                    var n = s;
                    if (i) return i.schedule(Pe, 0, {
                        subscriber: t,
                        iterate: r,
                        condition: e,
                        resultSelector: o,
                        state: n
                    });
                    do {
                        if (e) {
                            var c = void 0;
                            try {
                                c = e(n)
                            } catch (a) {
                                return void t.error(a)
                            }
                            if (!c) {
                                t.complete();
                                break
                            }
                        }
                        var u = void 0;
                        try {
                            u = o(n)
                        } catch (a) {
                            return void t.error(a)
                        }
                        if (t.next(u), t.closed) break;
                        try {
                            n = r(n)
                        } catch (a) {
                            return void t.error(a)
                        }
                    } while (1)
                }))
            }

            function Pe(t) {
                var e = t.subscriber,
                    r = t.condition;
                if (!e.closed) {
                    if (t.needIterate) try {
                        t.state = t.iterate(t.state)
                    } catch (o) {
                        return void e.error(o)
                    } else t.needIterate = !0;
                    if (r) {
                        var n = void 0;
                        try {
                            n = r(t.state)
                        } catch (o) {
                            return void e.error(o)
                        }
                        if (!n) return void e.complete();
                        if (e.closed) return
                    }
                    var i;
                    try {
                        i = t.resultSelector(t.state)
                    } catch (o) {
                        return void e.error(o)
                    }
                    if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t)
                }
            }

            function Ce(t, e, r) {
                return void 0 === e && (e = z), void 0 === r && (r = z), Ie((function() {
                    return t() ? e : r
                }))
            }

            function He(t) {
                return !a(t) && t - parseFloat(t) + 1 >= 0
            }

            function Ue(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = wt), (!He(t) || t < 0) && (t = 0), e && "function" === typeof e.schedule || (e = wt), new S((function(r) {
                    return r.add(e.schedule(De, t, {
                        subscriber: r,
                        counter: 0,
                        period: t
                    })), r
                }))
            }

            function De(t) {
                var e = t.subscriber,
                    r = t.counter,
                    n = t.period;
                e.next(r), this.schedule({
                    subscriber: e,
                    counter: r + 1,
                    period: n
                }, n)
            }

            function Me() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = Number.POSITIVE_INFINITY,
                    n = null,
                    i = t[t.length - 1];
                return Z(i) ? (n = t.pop(), t.length > 1 && "number" === typeof t[t.length - 1] && (r = t.pop())) : "number" === typeof i && (r = t.pop()), null === n && 1 === t.length && t[0] instanceof S ? t[0] : ge(r)(et(t, n))
            }
            var ke = new S(Ot);

            function je() {
                return ke
            }

            function Fe() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (0 === t.length) return z;
                var r = t[0],
                    n = t.slice(1);
                return 1 === t.length && a(r) ? Fe.apply(void 0, r) : new S((function(t) {
                    var e = function() {
                        return t.add(Fe.apply(void 0, n).subscribe(t))
                    };
                    return de(r).subscribe({
                        next: function(e) {
                            t.next(e)
                        },
                        error: e,
                        complete: e
                    })
                }))
            }

            function Ge(t, e) {
                return new S(e ? function(r) {
                    var n = Object.keys(t),
                        i = new d;
                    return i.add(e.schedule($e, 0, {
                        keys: n,
                        index: 0,
                        subscriber: r,
                        subscription: i,
                        obj: t
                    })), i
                } : function(e) {
                    for (var r = Object.keys(t), n = 0; n < r.length && !e.closed; n++) {
                        var i = r[n];
                        t.hasOwnProperty(i) && e.next([i, t[i]])
                    }
                    e.complete()
                })
            }

            function $e(t) {
                var e = t.keys,
                    r = t.index,
                    n = t.subscriber,
                    i = t.subscription,
                    o = t.obj;
                if (!n.closed)
                    if (r < e.length) {
                        var s = e[r];
                        n.next([s, o[s]]), i.add(this.schedule({
                            keys: e,
                            index: r + 1,
                            subscriber: n,
                            subscription: i,
                            obj: o
                        }))
                    } else n.complete()
            }

            function Ve(t, e) {
                function r() {
                    return !r.pred.apply(r.thisArg, arguments)
                }
                return r.pred = t, r.thisArg = e, r
            }

            function Xe(t, e) {
                return function(r) {
                    return r.lift(new Ye(t, e))
                }
            }
            var Ye = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new qe(t, this.predicate, this.thisArg))
                    }, t
                }(),
                qe = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e) || this;
                        return i.predicate = r, i.thisArg = n, i.count = 0, i
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        e && this.destination.next(t)
                    }, e
                }(y);

            function ze(t, e, r) {
                return [Xe(e, r)(new S(ee(t))), Xe(Ve(e, r))(new S(ee(t)))]
            }

            function We() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (1 === t.length) {
                    if (!a(t[0])) return t[0];
                    t = t[0]
                }
                return et(t, void 0).lift(new Ke)
            }
            var Ke = function() {
                    function t() {}
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Ze(t))
                    }, t
                }(),
                Ze = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.hasFirst = !1, r.observables = [], r.subscriptions = [], r
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        this.observables.push(t)
                    }, e.prototype._complete = function() {
                        var t = this.observables,
                            e = t.length;
                        if (0 === e) this.destination.complete();
                        else {
                            for (var r = 0; r < e && !this.hasFirst; r++) {
                                var n = t[r],
                                    i = re(this, n, void 0, r);
                                this.subscriptions && this.subscriptions.push(i), this.add(i)
                            }
                            this.observables = null
                        }
                    }, e.prototype.notifyNext = function(t, e, r) {
                        if (!this.hasFirst) {
                            this.hasFirst = !0;
                            for (var n = 0; n < this.subscriptions.length; n++)
                                if (n !== r) {
                                    var i = this.subscriptions[n];
                                    i.unsubscribe(), this.remove(i)
                                }
                            this.subscriptions = null
                        }
                        this.destination.next(e)
                    }, e
                }(Yt);

            function Je(t, e, r) {
                return void 0 === t && (t = 0), new S((function(n) {
                    void 0 === e && (e = t, t = 0);
                    var i = 0,
                        o = t;
                    if (r) return r.schedule(Qe, 0, {
                        index: i,
                        count: e,
                        start: t,
                        subscriber: n
                    });
                    do {
                        if (i++ >= e) {
                            n.complete();
                            break
                        }
                        if (n.next(o++), n.closed) break
                    } while (1)
                }))
            }

            function Qe(t) {
                var e = t.start,
                    r = t.index,
                    n = t.count,
                    i = t.subscriber;
                r >= n ? i.complete() : (i.next(e), i.closed || (t.index = r + 1, t.start = e + 1, this.schedule(t)))
            }

            function tr(t, e, r) {
                void 0 === t && (t = 0);
                var n = -1;
                return He(e) ? n = Number(e) < 1 ? 1 : Number(e) : Z(e) && (r = e), Z(r) || (r = wt), new S((function(e) {
                    var i = He(t) ? t : +t - r.now();
                    return r.schedule(er, i, {
                        index: 0,
                        period: n,
                        subscriber: e
                    })
                }))
            }

            function er(t) {
                var e = t.index,
                    r = t.period,
                    n = t.subscriber;
                if (n.next(e), !n.closed) {
                    if (-1 === r) return n.complete();
                    t.index = e + 1, this.schedule(t, r)
                }
            }

            function rr(t, e) {
                return new S((function(r) {
                    var n, i;
                    try {
                        n = t()
                    } catch (c) {
                        return void r.error(c)
                    }
                    try {
                        i = e(n)
                    } catch (c) {
                        return void r.error(c)
                    }
                    var o = i ? de(i) : z,
                        s = o.subscribe(r);
                    return function() {
                        s.unsubscribe(), n && n.unsubscribe()
                    }
                }))
            }

            function nr() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = t[t.length - 1];
                return "function" === typeof r && t.pop(), et(t, void 0).lift(new ir(r))
            }
            var ir = function() {
                    function t(t) {
                        this.resultSelector = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new or(t, this.resultSelector))
                    }, t
                }(),
                or = function(t) {
                    function e(e, r, n) {
                        void 0 === n && (n = Object.create(null));
                        var i = t.call(this, e) || this;
                        return i.resultSelector = r, i.iterators = [], i.active = 0, i.resultSelector = "function" === typeof r ? r : void 0, i
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        var e = this.iterators;
                        a(t) ? e.push(new cr(t)) : "function" === typeof t[Kt] ? e.push(new sr(t[Kt]())) : e.push(new ur(this.destination, this, t))
                    }, e.prototype._complete = function() {
                        var t = this.iterators,
                            e = t.length;
                        if (this.unsubscribe(), 0 !== e) {
                            this.active = e;
                            for (var r = 0; r < e; r++) {
                                var n = t[r];
                                if (n.stillUnsubscribed) {
                                    var i = this.destination;
                                    i.add(n.subscribe())
                                } else this.active--
                            }
                        } else this.destination.complete()
                    }, e.prototype.notifyInactive = function() {
                        this.active--, 0 === this.active && this.destination.complete()
                    }, e.prototype.checkIterators = function() {
                        for (var t = this.iterators, e = t.length, r = this.destination, n = 0; n < e; n++) {
                            var i = t[n];
                            if ("function" === typeof i.hasValue && !i.hasValue()) return
                        }
                        var o = !1,
                            s = [];
                        for (n = 0; n < e; n++) {
                            i = t[n];
                            var c = i.next();
                            if (i.hasCompleted() && (o = !0), c.done) return void r.complete();
                            s.push(c.value)
                        }
                        this.resultSelector ? this._tryresultSelector(s) : r.next(s), o && r.complete()
                    }, e.prototype._tryresultSelector = function(t) {
                        var e;
                        try {
                            e = this.resultSelector.apply(this, t)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.destination.next(e)
                    }, e
                }(y),
                sr = function() {
                    function t(t) {
                        this.iterator = t, this.nextResult = t.next()
                    }
                    return t.prototype.hasValue = function() {
                        return !0
                    }, t.prototype.next = function() {
                        var t = this.nextResult;
                        return this.nextResult = this.iterator.next(), t
                    }, t.prototype.hasCompleted = function() {
                        var t = this.nextResult;
                        return Boolean(t && t.done)
                    }, t
                }(),
                cr = function() {
                    function t(t) {
                        this.array = t, this.index = 0, this.length = 0, this.length = t.length
                    }
                    return t.prototype[Kt] = function() {
                        return this
                    }, t.prototype.next = function(t) {
                        var e = this.index++,
                            r = this.array;
                        return e < this.length ? {
                            value: r[e],
                            done: !1
                        } : {
                            value: null,
                            done: !0
                        }
                    }, t.prototype.hasValue = function() {
                        return this.array.length > this.index
                    }, t.prototype.hasCompleted = function() {
                        return this.array.length === this.index
                    }, t
                }(),
                ur = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e) || this;
                        return i.parent = r, i.observable = n, i.stillUnsubscribed = !0, i.buffer = [], i.isComplete = !1, i
                    }
                    return n["__extends"](e, t), e.prototype[Kt] = function() {
                        return this
                    }, e.prototype.next = function() {
                        var t = this.buffer;
                        return 0 === t.length && this.isComplete ? {
                            value: null,
                            done: !0
                        } : {
                            value: t.shift(),
                            done: !1
                        }
                    }, e.prototype.hasValue = function() {
                        return this.buffer.length > 0
                    }, e.prototype.hasCompleted = function() {
                        return 0 === this.buffer.length && this.isComplete
                    }, e.prototype.notifyComplete = function() {
                        this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
                    }, e.prototype.notifyNext = function(t) {
                        this.buffer.push(t), this.parent.checkIterators()
                    }, e.prototype.subscribe = function() {
                        return ye(this.observable, new pe(this))
                    }, e
                }(be)
        },
        "0d26": function(t, e, r) {
            const {
                MAX_SAFE_COMPONENT_LENGTH: n,
                MAX_SAFE_BUILD_LENGTH: i,
                MAX_LENGTH: o
            } = r("11a3"), s = r("0f35");
            e = t.exports = {};
            const c = e.re = [],
                u = e.safeRe = [],
                a = e.src = [],
                h = e.t = {};
            let l = 0;
            const f = "[a-zA-Z0-9-]",
                d = [
                    ["\\s", 1],
                    ["\\d", o],
                    [f, i]
                ],
                p = t => {
                    for (const [e, r] of d) t = t.split(e + "*").join(`${e}{0,${r}}`).split(e + "+").join(`${e}{1,${r}}`);
                    return t
                },
                b = (t, e, r) => {
                    const n = p(e),
                        i = l++;
                    s(t, i, e), h[t] = i, a[i] = e, c[i] = new RegExp(e, r ? "g" : void 0), u[i] = new RegExp(n, r ? "g" : void 0)
                };
            b("NUMERICIDENTIFIER", "0|[1-9]\\d*"), b("NUMERICIDENTIFIERLOOSE", "\\d+"), b("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), b("MAINVERSION", `(${a[h.NUMERICIDENTIFIER]})\\.(${a[h.NUMERICIDENTIFIER]})\\.(${a[h.NUMERICIDENTIFIER]})`), b("MAINVERSIONLOOSE", `(${a[h.NUMERICIDENTIFIERLOOSE]})\\.(${a[h.NUMERICIDENTIFIERLOOSE]})\\.(${a[h.NUMERICIDENTIFIERLOOSE]})`), b("PRERELEASEIDENTIFIER", `(?:${a[h.NUMERICIDENTIFIER]}|${a[h.NONNUMERICIDENTIFIER]})`), b("PRERELEASEIDENTIFIERLOOSE", `(?:${a[h.NUMERICIDENTIFIERLOOSE]}|${a[h.NONNUMERICIDENTIFIER]})`), b("PRERELEASE", `(?:-(${a[h.PRERELEASEIDENTIFIER]}(?:\\.${a[h.PRERELEASEIDENTIFIER]})*))`), b("PRERELEASELOOSE", `(?:-?(${a[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[h.PRERELEASEIDENTIFIERLOOSE]})*))`), b("BUILDIDENTIFIER", f + "+"), b("BUILD", `(?:\\+(${a[h.BUILDIDENTIFIER]}(?:\\.${a[h.BUILDIDENTIFIER]})*))`), b("FULLPLAIN", `v?${a[h.MAINVERSION]}${a[h.PRERELEASE]}?${a[h.BUILD]}?`), b("FULL", `^${a[h.FULLPLAIN]}$`), b("LOOSEPLAIN", `[v=\\s]*${a[h.MAINVERSIONLOOSE]}${a[h.PRERELEASELOOSE]}?${a[h.BUILD]}?`), b("LOOSE", `^${a[h.LOOSEPLAIN]}$`), b("GTLT", "((?:<|>)?=?)"), b("XRANGEIDENTIFIERLOOSE", a[h.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"), b("XRANGEIDENTIFIER", a[h.NUMERICIDENTIFIER] + "|x|X|\\*"), b("XRANGEPLAIN", `[v=\\s]*(${a[h.XRANGEIDENTIFIER]})(?:\\.(${a[h.XRANGEIDENTIFIER]})(?:\\.(${a[h.XRANGEIDENTIFIER]})(?:${a[h.PRERELEASE]})?${a[h.BUILD]}?)?)?`), b("XRANGEPLAINLOOSE", `[v=\\s]*(${a[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[h.XRANGEIDENTIFIERLOOSE]})(?:${a[h.PRERELEASELOOSE]})?${a[h.BUILD]}?)?)?`), b("XRANGE", `^${a[h.GTLT]}\\s*${a[h.XRANGEPLAIN]}$`), b("XRANGELOOSE", `^${a[h.GTLT]}\\s*${a[h.XRANGEPLAINLOOSE]}$`), b("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), b("COERCE", a[h.COERCEPLAIN] + "(?:$|[^\\d])"), b("COERCEFULL", a[h.COERCEPLAIN] + `(?:${a[h.PRERELEASE]})?` + `(?:${a[h.BUILD]})?(?:$|[^\\d])`), b("COERCERTL", a[h.COERCE], !0), b("COERCERTLFULL", a[h.COERCEFULL], !0), b("LONETILDE", "(?:~>?)"), b("TILDETRIM", `(\\s*)${a[h.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", b("TILDE", `^${a[h.LONETILDE]}${a[h.XRANGEPLAIN]}$`), b("TILDELOOSE", `^${a[h.LONETILDE]}${a[h.XRANGEPLAINLOOSE]}$`), b("LONECARET", "(?:\\^)"), b("CARETTRIM", `(\\s*)${a[h.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", b("CARET", `^${a[h.LONECARET]}${a[h.XRANGEPLAIN]}$`), b("CARETLOOSE", `^${a[h.LONECARET]}${a[h.XRANGEPLAINLOOSE]}$`), b("COMPARATORLOOSE", `^${a[h.GTLT]}\\s*(${a[h.LOOSEPLAIN]})$|^$`), b("COMPARATOR", `^${a[h.GTLT]}\\s*(${a[h.FULLPLAIN]})$|^$`), b("COMPARATORTRIM", `(\\s*)${a[h.GTLT]}\\s*(${a[h.LOOSEPLAIN]}|${a[h.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", b("HYPHENRANGE", `^\\s*(${a[h.XRANGEPLAIN]})\\s+-\\s+(${a[h.XRANGEPLAIN]})\\s*$`), b("HYPHENRANGELOOSE", `^\\s*(${a[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[h.XRANGEPLAINLOOSE]})\\s*$`), b("STAR", "(<|>)?=?\\s*\\*"), b("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), b("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        "0e60": function(t, e, r) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.sendAPDU = void 0;
                var n = r("0cd1"),
                    i = r("bd42");
                const o = 5;

                function s(t, e) {
                    const r = [];
                    for (let n = 0, i = e(0); n < t.length; n += i, i = e(n)) r.push(t.slice(n, n + i));
                    return r
                }
                const c = (e, r, c) => {
                    const u = s(r, t => c - (0 === t ? 5 : 3)).map((e, n) => {
                        const i = t.alloc(0 === n ? 5 : 3);
                        return i.writeUInt8(o, 0), i.writeUInt16BE(n, 1), 0 === n && i.writeUInt16BE(r.length, 3), t.concat([i, e])
                    });
                    return n.Observable.create(t => {
                        let r = !1;
                        async function n() {
                            for (const t of u) {
                                if (r) return;
                                await e(t)
                            }
                        }
                        n().then(() => {
                            r = !0, t.complete()
                        }, e => {
                            r = !0, (0, i.log)("ble-error", "sendAPDU failure " + String(e)), t.error(e)
                        });
                        const o = () => {
                            r || ((0, i.log)("ble-verbose", "sendAPDU interruption"), r = !0)
                        };
                        return o
                    })
                };
                e.sendAPDU = c
            }).call(this, r("b639").Buffer)
        },
        "0f35": function(t, e, r) {
            (function(e) {
                const r = "object" === typeof e && Object({
                    VUE_APP_ENV: "production",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }) && Object({
                    VUE_APP_ENV: "production",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).NODE_DEBUG && /\bsemver\b/i.test(Object({
                    VUE_APP_ENV: "production",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {};
                t.exports = r
            }).call(this, r("4362"))
        },
        "0f5d": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return v
            }));
            var n = r("8a94"),
                i = r("5859"),
                o = r("a393"),
                s = r("4cf8");

            function c(t, e) {
                return new n["a"]((function(r) {
                    var n = new o["a"];
                    return n.add(e.schedule((function() {
                        var i = t[s["a"]]();
                        n.add(i.subscribe({
                            next: function(t) {
                                n.add(e.schedule((function() {
                                    return r.next(t)
                                })))
                            },
                            error: function(t) {
                                n.add(e.schedule((function() {
                                    return r.error(t)
                                })))
                            },
                            complete: function() {
                                n.add(e.schedule((function() {
                                    return r.complete()
                                })))
                            }
                        }))
                    }))), n
                }))
            }

            function u(t, e) {
                return new n["a"]((function(r) {
                    var n = new o["a"];
                    return n.add(e.schedule((function() {
                        return t.then((function(t) {
                            n.add(e.schedule((function() {
                                r.next(t), n.add(e.schedule((function() {
                                    return r.complete()
                                })))
                            })))
                        }), (function(t) {
                            n.add(e.schedule((function() {
                                return r.error(t)
                            })))
                        }))
                    }))), n
                }))
            }
            var a = r("2af0"),
                h = r("5382");

            function l(t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new n["a"]((function(r) {
                    var n, i = new o["a"];
                    return i.add((function() {
                        n && "function" === typeof n.return && n.return()
                    })), i.add(e.schedule((function() {
                        n = t[h["a"]](), i.add(e.schedule((function() {
                            if (!r.closed) {
                                var t, e;
                                try {
                                    var i = n.next();
                                    t = i.value, e = i.done
                                } catch (o) {
                                    return void r.error(o)
                                }
                                e ? r.complete() : (r.next(t), this.schedule())
                            }
                        })))
                    }))), i
                }))
            }

            function f(t) {
                return t && "function" === typeof t[s["a"]]
            }
            var d = r("d749"),
                p = r("b4b3");

            function b(t) {
                return t && "function" === typeof t[h["a"]]
            }

            function y(t, e) {
                if (null != t) {
                    if (f(t)) return c(t, e);
                    if (Object(d["a"])(t)) return u(t, e);
                    if (Object(p["a"])(t)) return Object(a["a"])(t, e);
                    if (b(t) || "string" === typeof t) return l(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }

            function v(t, e) {
                return e ? y(t, e) : t instanceof n["a"] ? t : new n["a"](Object(i["a"])(t))
            }
        },
        "11a3": function(t, e) {
            const r = "2.0.0",
                n = 256,
                i = Number.MAX_SAFE_INTEGER || 9007199254740991,
                o = 16,
                s = n - 6,
                c = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
            t.exports = {
                MAX_LENGTH: n,
                MAX_SAFE_COMPONENT_LENGTH: o,
                MAX_SAFE_BUILD_LENGTH: s,
                MAX_SAFE_INTEGER: i,
                RELEASE_TYPES: c,
                SEMVER_SPEC_VERSION: r,
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        1240: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = function(t) {
                return function(e) {
                    for (var r = 0, n = t.length; r < n && !e.closed; r++) e.next(t[r]);
                    e.complete()
                }
            }
        },
        "144b": function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => n(t, e, r) < 0;
            t.exports = i
        },
        "146e": function(t, e, r) {
            "use strict";
            r.r(e),
                function(t) {
                    r.d(e, "default", (function() {
                        return T
                    }));
                    var n = r("f685"),
                        i = r("a8fc"),
                        o = r("8854"),
                        s = r("0e60"),
                        c = r("3cb0"),
                        u = r("bd42"),
                        a = r("8a94"),
                        h = r("d2dd"),
                        l = r("1e59"),
                        f = r("0f5d"),
                        d = r("5880"),
                        p = r("8409"),
                        b = r("79b2"),
                        y = r("4d3d"),
                        v = r("d47e"),
                        E = r("0435");
                    const m = () => {
                            const {
                                bluetooth: t
                            } = navigator;
                            if ("undefined" === typeof t) throw new Error("web bluetooth not supported");
                            return t
                        },
                        g = () => a["a"].create(t => {
                            const e = m(),
                                r = e => {
                                    t.next(e.value)
                                };
                            e.addEventListener("availabilitychanged", r);
                            let n = !1;
                            return e.getAvailability().then(e => {
                                n || t.next(e)
                            }), () => {
                                n = !0, e.removeEventListener("availabilitychanged", r)
                            }
                        }),
                        w = {},
                        _ = () => ({
                            filters: Object(o["a"])().map(t => ({
                                services: [t]
                            }))
                        }),
                        I = async t => {
                            if (!t.gatt) throw new Error("bluetooth gatt not found");
                            const [e] = await t.gatt.getPrimaryServices();
                            if (!e) throw new Error("bluetooth service not found");
                            const r = Object(o["b"])(e.uuid);
                            if (!r) throw new Error("bluetooth service infos not found");
                            return [e, r]
                        };
                    async function S(t, e) {
                        let r;
                        if ("string" === typeof t) {
                            if (w[t]) return Object(u["log"])("ble-verbose", "Transport in cache, using that."), w[t];
                            const e = m();
                            r = await e.requestDevice(_())
                        } else r = t;
                        r.gatt.connected || (Object(u["log"])("ble-verbose", "not connected. connecting..."), await r.gatt.connect());
                        const [n, o] = await I(r), {
                            deviceModel: s,
                            writeUuid: c,
                            notifyUuid: a
                        } = o, [h, l] = await Promise.all([n.getCharacteristic(c), n.getCharacteristic(a)]), f = Object(E["a"])(l).pipe(Object(d["a"])(t => {
                            Object(u["log"])("ble-frame", "<= " + t.toString("hex"))
                        }), Object(p["a"])()), b = f.subscribe(), y = new T(r, h, f, s);
                        if (!r.gatt.connected) throw new i["DisconnectedDevice"];
                        w[y.id] = y;
                        const v = t => {
                            console.log("onDisconnect!", t), delete w[y.id], y.notYetDisconnected = !1, b.unsubscribe(), r.removeEventListener("gattserverdisconnected", v), Object(u["log"])("ble-verbose", `BleTransport(${y.id}) disconnected`), y.emit("disconnect", t)
                        };
                        r.addEventListener("gattserverdisconnected", v);
                        let g = Date.now();
                        try {
                            await y.inferMTU()
                        } finally {
                            let t = Date.now();
                            t - g < 1e3 && (e = !1), e && (await r.gatt.disconnect(), await new Promise(t => setTimeout(t, 4e3)))
                        }
                        return e ? S(r, !1) : y
                    }
                    class T extends n["a"] {
                        static listen(t) {
                            let e;
                            Object(u["log"])("ble-verbose", "listen...");
                            const r = m();

                            function n() {
                                e = !0
                            }
                            return r.requestDevice(_()).then(async r => {
                                e || (t.next({
                                    type: "add",
                                    descriptor: r
                                }), t.complete())
                            }, e => {
                                t.error(new i["TransportOpenUserCancelled"](e.message))
                            }), {
                                unsubscribe: n
                            }
                        }
                        static async open(t) {
                            return S(t, !0)
                        }
                        constructor(t, e, r, n) {
                            super(), this.id = void 0, this.device = void 0, this.mtuSize = 20, this.writeCharacteristic = void 0, this.notifyObservable = void 0, this.notYetDisconnected = !0, this.deviceModel = void 0, this.exchange = t => this.exchangeAtomicImpl(async () => {
                                try {
                                    const e = t.toString("hex");
                                    Object(u["log"])("apdu", "=> " + e);
                                    const r = await Object(h["a"])(this.notifyObservable.pipe(c["receiveAPDU"]), Object(s["sendAPDU"])(this.write, t, this.mtuSize)).toPromise(),
                                        n = r.toString("hex");
                                    return Object(u["log"])("apdu", "<= " + n), r
                                } catch (e) {
                                    throw Object(u["log"])("ble-error", "exchange got " + String(e)), this.notYetDisconnected && this.device.gatt.disconnect(), e
                                }
                            }), this.write = async t => {
                                Object(u["log"])("ble-frame", "=> " + t.toString("hex")), await this.writeCharacteristic.writeValue(t)
                            }, this.id = t.id, this.device = t, this.writeCharacteristic = e, this.notifyObservable = r, this.deviceModel = n, Object(u["log"])("ble-verbose", `BleTransport(${String(this.id)}) new instance`)
                        }
                        async inferMTU() {
                            let e = 23;
                            if (await this.exchangeAtomicImpl(async () => {
                                    try {
                                        e = await Object(h["a"])(this.notifyObservable.pipe(Object(b["a"])(t => 8 === t.readUInt8(0)), Object(y["a"])(t => t.readUInt8(5))), Object(l["a"])(() => Object(f["a"])(this.write(t.from([8, 0, 0, 0, 0])))).pipe(Object(v["a"])())).toPromise() + 3
                                    } catch (r) {
                                        throw Object(u["log"])("ble-error", "inferMTU got " + String(r)), this.device.gatt.disconnect(), r
                                    }
                                }), e > 23) {
                                const t = e - 3;
                                Object(u["log"])("ble-verbose", `BleTransport(${String(this.id)}) mtu set to ${String(t)}`), this.mtuSize = t
                            }
                            return this.mtuSize
                        }
                        setScrambleKey() {}
                        async close() {
                            this.exchangeBusyPromise && await this.exchangeBusyPromise
                        }
                    }
                    T.isSupported = () => Promise.resolve().then(m).then(() => !0, () => !1), T.observeAvailability = t => g.subscribe(t), T.list = () => Promise.resolve([]), T.disconnect = async t => {
                        Object(u["log"])("ble-verbose", `user disconnect(${t})`);
                        const e = w[t];
                        e && e.device.gatt.disconnect()
                    }
                }.call(this, r("b639").Buffer)
        },
        "158c": function(t, e, r) {
            "use strict";

            function n(t) {
                setTimeout((function() {
                    throw t
                }), 0)
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        "1e59": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return s
            }));
            var n = r("8a94"),
                i = r("0f5d"),
                o = r("68f2");

            function s(t) {
                return new n["a"]((function(e) {
                    var r;
                    try {
                        r = t()
                    } catch (s) {
                        return void e.error(s)
                    }
                    var n = r ? Object(i["a"])(r) : Object(o["a"])();
                    return n.subscribe(e)
                }))
            }
        },
        "1f59": function(t, e, r) {
            const n = r("2ae6"),
                i = (t, e) => {
                    const r = n(t, e);
                    return r && r.prerelease.length ? r.prerelease : null
                };
            t.exports = i
        },
        "21ce": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return h
            }));
            var n = r("9ab4"),
                i = r("746b"),
                o = r("61bb"),
                s = r("a393"),
                c = r("ae50"),
                u = r("31a6"),
                a = r("158c"),
                h = function(t) {
                    function e(r, n, i) {
                        var s = t.call(this) || this;
                        switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
                            case 0:
                                s.destination = o["a"];
                                break;
                            case 1:
                                if (!r) {
                                    s.destination = o["a"];
                                    break
                                }
                                if ("object" === typeof r) {
                                    r instanceof e ? (s.syncErrorThrowable = r.syncErrorThrowable, s.destination = r, r.add(s)) : (s.syncErrorThrowable = !0, s.destination = new l(s, r));
                                    break
                                }
                            default:
                                s.syncErrorThrowable = !0, s.destination = new l(s, r, n, i);
                                break
                        }
                        return s
                    }
                    return n["__extends"](e, t), e.prototype[c["a"]] = function() {
                        return this
                    }, e.create = function(t, r, n) {
                        var i = new e(t, r, n);
                        return i.syncErrorThrowable = !1, i
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                    }, e
                }(s["a"]),
                l = function(t) {
                    function e(e, r, n, s) {
                        var c, u = t.call(this) || this;
                        u._parentSubscriber = e;
                        var a = u;
                        return Object(i["a"])(r) ? c = r : r && (c = r.next, n = r.error, s = r.complete, r !== o["a"] && (a = Object.create(r), Object(i["a"])(a.unsubscribe) && u.add(a.unsubscribe.bind(a)), a.unsubscribe = u.unsubscribe.bind(u))), u._context = a, u._next = c, u._error = n, u._complete = s, u
                    }
                    return n["__extends"](e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            u["a"].useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                r = u["a"].useDeprecatedSynchronousErrorHandling;
                            if (this._error) r && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) r ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(a["a"])(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), r) throw t;
                                Object(a["a"])(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var r = function() {
                                    return t._complete.call(t._context)
                                };
                                u["a"].useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (r) {
                            if (this.unsubscribe(), u["a"].useDeprecatedSynchronousErrorHandling) throw r;
                            Object(a["a"])(r)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, r) {
                        if (!u["a"].useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, r)
                        } catch (n) {
                            return u["a"].useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = n, t.syncErrorThrown = !0, !0) : (Object(a["a"])(n), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(h)
        },
        "281f": function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha384 = e.sha512_256 = e.sha512 = e.SHA512 = void 0;
            const n = r("993b"),
                i = r("5220"),
                o = r("531d"),
                [s, c] = i.default.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
                u = new Uint32Array(80),
                a = new Uint32Array(80);
            class h extends n.SHA2 {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    const {
                        Ah: t,
                        Al: e,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: o,
                        Dh: s,
                        Dl: c,
                        Eh: u,
                        El: a,
                        Fh: h,
                        Fl: l,
                        Gh: f,
                        Gl: d,
                        Hh: p,
                        Hl: b
                    } = this;
                    return [t, e, r, n, i, o, s, c, u, a, h, l, f, d, p, b]
                }
                set(t, e, r, n, i, o, s, c, u, a, h, l, f, d, p, b) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | s, this.Dl = 0 | c, this.Eh = 0 | u, this.El = 0 | a, this.Fh = 0 | h, this.Fl = 0 | l, this.Gh = 0 | f, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | b
                }
                process(t, e) {
                    for (let i = 0; i < 16; i++, e += 4) u[i] = t.getUint32(e), a[i] = t.getUint32(e += 4);
                    for (let s = 16; s < 80; s++) {
                        const t = 0 | u[s - 15],
                            e = 0 | a[s - 15],
                            r = i.default.rotrSH(t, e, 1) ^ i.default.rotrSH(t, e, 8) ^ i.default.shrSH(t, e, 7),
                            n = i.default.rotrSL(t, e, 1) ^ i.default.rotrSL(t, e, 8) ^ i.default.shrSL(t, e, 7),
                            o = 0 | u[s - 2],
                            c = 0 | a[s - 2],
                            h = i.default.rotrSH(o, c, 19) ^ i.default.rotrBH(o, c, 61) ^ i.default.shrSH(o, c, 6),
                            l = i.default.rotrSL(o, c, 19) ^ i.default.rotrBL(o, c, 61) ^ i.default.shrSL(o, c, 6),
                            f = i.default.add4L(n, l, a[s - 7], a[s - 16]),
                            d = i.default.add4H(f, r, h, u[s - 7], u[s - 16]);
                        u[s] = 0 | d, a[s] = 0 | f
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: o,
                        Bl: h,
                        Ch: l,
                        Cl: f,
                        Dh: d,
                        Dl: p,
                        Eh: b,
                        El: y,
                        Fh: v,
                        Fl: E,
                        Gh: m,
                        Gl: g,
                        Hh: w,
                        Hl: _
                    } = this;
                    for (let I = 0; I < 80; I++) {
                        const t = i.default.rotrSH(b, y, 14) ^ i.default.rotrSH(b, y, 18) ^ i.default.rotrBH(b, y, 41),
                            e = i.default.rotrSL(b, y, 14) ^ i.default.rotrSL(b, y, 18) ^ i.default.rotrBL(b, y, 41),
                            S = b & v ^ ~b & m,
                            T = y & E ^ ~y & g,
                            x = i.default.add5L(_, e, T, c[I], a[I]),
                            A = i.default.add5H(x, w, t, S, s[I], u[I]),
                            O = 0 | x,
                            N = i.default.rotrSH(r, n, 28) ^ i.default.rotrBH(r, n, 34) ^ i.default.rotrBH(r, n, 39),
                            B = i.default.rotrSL(r, n, 28) ^ i.default.rotrBL(r, n, 34) ^ i.default.rotrBL(r, n, 39),
                            R = r & o ^ r & l ^ o & l,
                            L = n & h ^ n & f ^ h & f;
                        w = 0 | m, _ = 0 | g, m = 0 | v, g = 0 | E, v = 0 | b, E = 0 | y, ({
                            h: b,
                            l: y
                        } = i.default.add(0 | d, 0 | p, 0 | A, 0 | O)), d = 0 | l, p = 0 | f, l = 0 | o, f = 0 | h, o = 0 | r, h = 0 | n;
                        const P = i.default.add3L(O, B, L);
                        r = i.default.add3H(P, A, N, R), n = 0 | P
                    }({
                        h: r,
                        l: n
                    } = i.default.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: o,
                        l: h
                    } = i.default.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | h)), ({
                        h: l,
                        l: f
                    } = i.default.add(0 | this.Ch, 0 | this.Cl, 0 | l, 0 | f)), ({
                        h: d,
                        l: p
                    } = i.default.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)), ({
                        h: b,
                        l: y
                    } = i.default.add(0 | this.Eh, 0 | this.El, 0 | b, 0 | y)), ({
                        h: v,
                        l: E
                    } = i.default.add(0 | this.Fh, 0 | this.Fl, 0 | v, 0 | E)), ({
                        h: m,
                        l: g
                    } = i.default.add(0 | this.Gh, 0 | this.Gl, 0 | m, 0 | g)), ({
                        h: w,
                        l: _
                    } = i.default.add(0 | this.Hh, 0 | this.Hl, 0 | w, 0 | _)), this.set(r, n, o, h, l, f, d, p, b, y, v, E, m, g, w, _)
                }
                roundClean() {
                    u.fill(0), a.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            e.SHA512 = h;
            class l extends h {
                constructor() {
                    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32
                }
            }
            class f extends h {
                constructor() {
                    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48
                }
            }
            e.sha512 = (0, o.wrapConstructor)(() => new h), e.sha512_256 = (0, o.wrapConstructor)(() => new l), e.sha384 = (0, o.wrapConstructor)(() => new f)
        },
        "2ae6": function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e, r = !1) => {
                    if (t instanceof n) return t;
                    try {
                        return new n(t, e)
                    } catch (i) {
                        if (!r) return null;
                        throw i
                    }
                };
            t.exports = i
        },
        "2ae8": function(t, e, r) {
            "use strict";
            r.d(e, "l", (function() {
                return dt
            })), r.d(e, "d", (function() {
                return c
            })), r.d(e, "a", (function() {
                return u
            })), r.d(e, "e", (function() {
                return a
            })), r.d(e, "b", (function() {
                return h
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "i", (function() {
                return f
            })), r.d(e, "g", (function() {
                return d
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "j", (function() {
                return b
            })), r.d(e, "f", (function() {
                return y
            })), r.d(e, "c", (function() {
                return v
            }));
            var n = function() {
                return n = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r], e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, n.apply(this, arguments)
            };
            Object.create;
            var i, o, s;
            Object.create;

            function c(t) {
                return t.type === o.literal
            }

            function u(t) {
                return t.type === o.argument
            }

            function a(t) {
                return t.type === o.number
            }

            function h(t) {
                return t.type === o.date
            }

            function l(t) {
                return t.type === o.time
            }

            function f(t) {
                return t.type === o.select
            }

            function d(t) {
                return t.type === o.plural
            }

            function p(t) {
                return t.type === o.pound
            }

            function b(t) {
                return t.type === o.tag
            }

            function y(t) {
                return !(!t || "object" !== typeof t || t.type !== s.number)
            }

            function v(t) {
                return !(!t || "object" !== typeof t || t.type !== s.dateTime)
            }(function(t) {
                t[t["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT", t[t["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT", t[t["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE", t[t["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE", t[t["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE", t[t["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON", t[t["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON", t[t["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON", t[t["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON", t[t["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE", t[t["INVALID_TAG"] = 23] = "INVALID_TAG", t[t["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME", t[t["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG", t[t["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG"
            })(i || (i = {})),
            function(t) {
                t[t["literal"] = 0] = "literal", t[t["argument"] = 1] = "argument", t[t["number"] = 2] = "number", t[t["date"] = 3] = "date", t[t["time"] = 4] = "time", t[t["select"] = 5] = "select", t[t["plural"] = 6] = "plural", t[t["pound"] = 7] = "pound", t[t["tag"] = 8] = "tag"
            }(o || (o = {})),
            function(t) {
                t[t["number"] = 0] = "number", t[t["dateTime"] = 1] = "dateTime"
            }(s || (s = {}));
            var E = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                m = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function g(t) {
                var e = {};
                return t.replace(m, (function(t) {
                    var r = t.length;
                    switch (t[0]) {
                        case "G":
                            e.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                            break;
                        case "y":
                            e.year = 2 === r ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            e.day = ["numeric", "2-digit"][r - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            e.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                            break;
                        case "e":
                            if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            e.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "c":
                            if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            e.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "a":
                            e.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "H":
                            e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "K":
                            e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "k":
                            e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            e.minute = ["numeric", "2-digit"][r - 1];
                            break;
                        case "s":
                            e.second = ["numeric", "2-digit"][r - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            e.timeZoneName = r < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), e
            }
            var w = function() {
                return w = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r], e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, w.apply(this, arguments)
            };
            Object.create;
            Object.create;
            var _ = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

            function I(t) {
                if (0 === t.length) throw new Error("Number skeleton cannot be empty");
                for (var e = t.split(_).filter((function(t) {
                        return t.length > 0
                    })), r = [], n = 0, i = e; n < i.length; n++) {
                    var o = i[n],
                        s = o.split("/");
                    if (0 === s.length) throw new Error("Invalid number skeleton");
                    for (var c = s[0], u = s.slice(1), a = 0, h = u; a < h.length; a++) {
                        var l = h[a];
                        if (0 === l.length) throw new Error("Invalid number skeleton")
                    }
                    r.push({
                        stem: c,
                        options: u
                    })
                }
                return r
            }

            function S(t) {
                return t.replace(/^(.*?)-/, "")
            }
            var T = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                x = /^(@+)?(\+|#+)?[rs]?$/g,
                A = /(\*)(0+)|(#+)(0+)|(0+)/g,
                O = /^(0+)$/;

            function N(t) {
                var e = {};
                return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(x, (function(t, r, n) {
                    return "string" !== typeof n ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : "+" === n ? e.minimumSignificantDigits = r.length : "#" === r[0] ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + ("string" === typeof n ? n.length : 0)), ""
                })), e
            }

            function B(t) {
                switch (t) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function R(t) {
                var e;
                if ("E" === t[0] && "E" === t[1] ? (e = {
                        notation: "engineering"
                    }, t = t.slice(2)) : "E" === t[0] && (e = {
                        notation: "scientific"
                    }, t = t.slice(1)), e) {
                    var r = t.slice(0, 2);
                    if ("+!" === r ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === r && (e.signDisplay = "exceptZero", t = t.slice(2)), !O.test(t)) throw new Error("Malformed concise eng/scientific notation");
                    e.minimumIntegerDigits = t.length
                }
                return e
            }

            function L(t) {
                var e = {},
                    r = B(t);
                return r || e
            }

            function P(t) {
                for (var e = {}, r = 0, n = t; r < n.length; r++) {
                    var i = n[r];
                    switch (i.stem) {
                        case "percent":
                        case "%":
                            e.style = "percent";
                            continue;
                        case "%x100":
                            e.style = "percent", e.scale = 100;
                            continue;
                        case "currency":
                            e.style = "currency", e.currency = i.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            e.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            e.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            e.style = "unit", e.unit = S(i.options[0]);
                            continue;
                        case "compact-short":
                        case "K":
                            e.notation = "compact", e.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            e.notation = "compact", e.compactDisplay = "long";
                            continue;
                        case "scientific":
                            e = w(w(w({}, e), {
                                notation: "scientific"
                            }), i.options.reduce((function(t, e) {
                                return w(w({}, t), L(e))
                            }), {}));
                            continue;
                        case "engineering":
                            e = w(w(w({}, e), {
                                notation: "engineering"
                            }), i.options.reduce((function(t, e) {
                                return w(w({}, t), L(e))
                            }), {}));
                            continue;
                        case "notation-simple":
                            e.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            e.currencyDisplay = "code", e.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            e.currencyDisplay = "name", e.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            e.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            e.scale = parseFloat(i.options[0]);
                            continue;
                        case "integer-width":
                            if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            i.options[0].replace(A, (function(t, r, n, i, o, s) {
                                if (r) e.minimumIntegerDigits = n.length;
                                else {
                                    if (i && o) throw new Error("We currently do not support maximum integer digits");
                                    if (s) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (O.test(i.stem)) e.minimumIntegerDigits = i.stem.length;
                    else if (T.test(i.stem)) {
                        if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        i.stem.replace(T, (function(t, r, n, i, o, s) {
                            return "*" === n ? e.minimumFractionDigits = r.length : i && "#" === i[0] ? e.maximumFractionDigits = i.length : o && s ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), ""
                        }));
                        var o = i.options[0];
                        "w" === o ? e = w(w({}, e), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : o && (e = w(w({}, e), N(o)))
                    } else if (x.test(i.stem)) e = w(w({}, e), N(i.stem));
                    else {
                        var s = B(i.stem);
                        s && (e = w(w({}, e), s));
                        var c = R(i.stem);
                        c && (e = w(w({}, e), c))
                    }
                }
                return e
            }
            var C, H = {
                AX: ["H"],
                BQ: ["H"],
                CP: ["H"],
                CZ: ["H"],
                DK: ["H"],
                FI: ["H"],
                ID: ["H"],
                IS: ["H"],
                ML: ["H"],
                NE: ["H"],
                RU: ["H"],
                SE: ["H"],
                SJ: ["H"],
                SK: ["H"],
                AS: ["h", "H"],
                BT: ["h", "H"],
                DJ: ["h", "H"],
                ER: ["h", "H"],
                GH: ["h", "H"],
                IN: ["h", "H"],
                LS: ["h", "H"],
                PG: ["h", "H"],
                PW: ["h", "H"],
                SO: ["h", "H"],
                TO: ["h", "H"],
                VU: ["h", "H"],
                WS: ["h", "H"],
                "001": ["H", "h"],
                AL: ["h", "H", "hB"],
                TD: ["h", "H", "hB"],
                "ca-ES": ["H", "h", "hB"],
                CF: ["H", "h", "hB"],
                CM: ["H", "h", "hB"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                LU: ["H", "h", "hB"],
                NP: ["H", "h", "hB"],
                PF: ["H", "h", "hB"],
                SC: ["H", "h", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                TF: ["H", "h", "hB"],
                VA: ["H", "h", "hB"],
                CY: ["h", "H", "hb", "hB"],
                GR: ["h", "H", "hb", "hB"],
                CO: ["h", "H", "hB", "hb"],
                DO: ["h", "H", "hB", "hb"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                NA: ["h", "H", "hB", "hb"],
                PA: ["h", "H", "hB", "hb"],
                PR: ["h", "H", "hB", "hb"],
                VE: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AI: ["H", "h", "hb", "hB"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CX: ["H", "h", "hb", "hB"],
                DG: ["H", "h", "hb", "hB"],
                FK: ["H", "h", "hb", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GI: ["H", "h", "hb", "hB"],
                IE: ["H", "h", "hb", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IO: ["H", "h", "hb", "hB"],
                JE: ["H", "h", "hb", "hB"],
                LT: ["H", "h", "hb", "hB"],
                MK: ["H", "h", "hb", "hB"],
                MN: ["H", "h", "hb", "hB"],
                MS: ["H", "h", "hb", "hB"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                PN: ["H", "h", "hb", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SX: ["H", "h", "hb", "hB"],
                TA: ["H", "h", "hb", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                AR: ["H", "h", "hB", "hb"],
                CL: ["H", "h", "hB", "hb"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                EA: ["H", "h", "hB", "hb"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                GT: ["H", "h", "hB", "hb"],
                HN: ["H", "h", "hB", "hb"],
                IC: ["H", "h", "hB", "hb"],
                KG: ["H", "h", "hB", "hb"],
                KM: ["H", "h", "hB", "hb"],
                LK: ["H", "h", "hB", "hb"],
                MA: ["H", "h", "hB", "hb"],
                MX: ["H", "h", "hB", "hb"],
                NI: ["H", "h", "hB", "hb"],
                PY: ["H", "h", "hB", "hb"],
                SV: ["H", "h", "hB", "hb"],
                UY: ["H", "h", "hB", "hb"],
                JP: ["H", "h", "K"],
                AD: ["H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AT: ["H", "hB"],
                AW: ["H", "hB"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BR: ["H", "hB"],
                CG: ["H", "hB"],
                CI: ["H", "hB"],
                CV: ["H", "hB"],
                DE: ["H", "hB"],
                EE: ["H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GF: ["H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GW: ["H", "hB"],
                HR: ["H", "hB"],
                IL: ["H", "hB"],
                IT: ["H", "hB"],
                KZ: ["H", "hB"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                MF: ["H", "hB"],
                MQ: ["H", "hB"],
                MZ: ["H", "hB"],
                NC: ["H", "hB"],
                NL: ["H", "hB"],
                PM: ["H", "hB"],
                PT: ["H", "hB"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                SI: ["H", "hB"],
                SR: ["H", "hB"],
                ST: ["H", "hB"],
                TG: ["H", "hB"],
                TR: ["H", "hB"],
                WF: ["H", "hB"],
                YT: ["H", "hB"],
                BD: ["h", "hB", "H"],
                PK: ["h", "hB", "H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BG: ["H", "hB", "h"],
                CH: ["H", "hB", "h"],
                GE: ["H", "hB", "h"],
                LI: ["H", "hB", "h"],
                ME: ["H", "hB", "h"],
                RS: ["H", "hB", "h"],
                UA: ["H", "hB", "h"],
                UZ: ["H", "hB", "h"],
                XK: ["H", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                BB: ["h", "hb", "H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                CA: ["h", "hb", "H", "hB"],
                DM: ["h", "hb", "H", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                FJ: ["h", "hb", "H", "hB"],
                FM: ["h", "hb", "H", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GU: ["h", "hb", "H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                JM: ["h", "hb", "H", "hB"],
                KI: ["h", "hb", "H", "hB"],
                KN: ["h", "hb", "H", "hB"],
                KY: ["h", "hb", "H", "hB"],
                LC: ["h", "hb", "H", "hB"],
                LR: ["h", "hb", "H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MP: ["h", "hb", "H", "hB"],
                MW: ["h", "hb", "H", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                SB: ["h", "hb", "H", "hB"],
                SG: ["h", "hb", "H", "hB"],
                SL: ["h", "hb", "H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                SZ: ["h", "hb", "H", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                BO: ["H", "hB", "h", "hb"],
                EC: ["H", "hB", "h", "hb"],
                ES: ["H", "hB", "h", "hb"],
                GQ: ["H", "hB", "h", "hb"],
                PE: ["H", "hB", "h", "hb"],
                AE: ["h", "hB", "hb", "H"],
                "ar-001": ["h", "hB", "hb", "H"],
                BH: ["h", "hB", "hb", "H"],
                DZ: ["h", "hB", "hb", "H"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                HK: ["h", "hB", "hb", "H"],
                IQ: ["h", "hB", "hb", "H"],
                JO: ["h", "hB", "hb", "H"],
                KW: ["h", "hB", "hb", "H"],
                LB: ["h", "hB", "hb", "H"],
                LY: ["h", "hB", "hb", "H"],
                MO: ["h", "hB", "hb", "H"],
                MR: ["h", "hB", "hb", "H"],
                OM: ["h", "hB", "hb", "H"],
                PH: ["h", "hB", "hb", "H"],
                PS: ["h", "hB", "hb", "H"],
                QA: ["h", "hB", "hb", "H"],
                SA: ["h", "hB", "hb", "H"],
                SD: ["h", "hB", "hb", "H"],
                SY: ["h", "hB", "hb", "H"],
                TN: ["h", "hB", "hb", "H"],
                YE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                LA: ["H", "hb", "hB", "h"],
                CN: ["H", "hB", "hb", "h"],
                LV: ["H", "hB", "hb", "h"],
                TL: ["H", "hB", "hb", "h"],
                "zu-ZA": ["H", "hB", "hb", "h"],
                CD: ["hB", "H"],
                IR: ["hB", "H"],
                "hi-IN": ["hB", "h", "H"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "te-IN": ["hB", "h", "H"],
                KH: ["hB", "h", "H", "hb"],
                "ta-IN": ["hB", "h", "hb", "H"],
                BN: ["hb", "hB", "h", "H"],
                MY: ["hb", "hB", "h", "H"],
                ET: ["hB", "hb", "h", "H"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                TW: ["hB", "hb", "h", "H"],
                KE: ["hB", "hb", "H", "h"],
                MM: ["hB", "hb", "H", "h"],
                TZ: ["hB", "hb", "H", "h"],
                UG: ["hB", "hb", "H", "h"]
            };

            function U(t, e) {
                for (var r = "", n = 0; n < t.length; n++) {
                    var i = t.charAt(n);
                    if ("j" === i) {
                        var o = 0;
                        while (n + 1 < t.length && t.charAt(n + 1) === i) o++, n++;
                        var s = 1 + (1 & o),
                            c = o < 2 ? 1 : 3 + (o >> 1),
                            u = "a",
                            a = D(e);
                        "H" != a && "k" != a || (c = 0);
                        while (c-- > 0) r += u;
                        while (s-- > 0) r = a + r
                    } else r += "J" === i ? "H" : i
                }
                return r
            }

            function D(t) {
                var e = t.hourCycle;
                if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var r, n = t.language;
                "root" !== n && (r = t.maximize().region);
                var i = H[r || ""] || H[n || ""] || H["".concat(n, "-001")] || H["001"];
                return i[0]
            }
            var M = new RegExp("^".concat(E.source, "*")),
                k = new RegExp("".concat(E.source, "*$"));

            function j(t, e) {
                return {
                    start: t,
                    end: e
                }
            }
            var F = !!String.prototype.startsWith,
                G = !!String.fromCodePoint,
                $ = !!Object.fromEntries,
                V = !!String.prototype.codePointAt,
                X = !!String.prototype.trimStart,
                Y = !!String.prototype.trimEnd,
                q = !!Number.isSafeInteger,
                z = q ? Number.isSafeInteger : function(t) {
                    return "number" === typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991
                },
                W = !0;
            try {
                var K = it("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                W = "a" === (null === (C = K.exec("a")) || void 0 === C ? void 0 : C[0])
            } catch (pt) {
                W = !1
            }
            var Z, J = F ? function(t, e, r) {
                    return t.startsWith(e, r)
                } : function(t, e, r) {
                    return t.slice(r, r + e.length) === e
                },
                Q = G ? String.fromCodePoint : function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var r, n = "",
                        i = t.length,
                        o = 0;
                    while (i > o) {
                        if (r = t[o++], r > 1114111) throw RangeError(r + " is not a valid code point");
                        n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
                    }
                    return n
                },
                tt = $ ? Object.fromEntries : function(t) {
                    for (var e = {}, r = 0, n = t; r < n.length; r++) {
                        var i = n[r],
                            o = i[0],
                            s = i[1];
                        e[o] = s
                    }
                    return e
                },
                et = V ? function(t, e) {
                    return t.codePointAt(e)
                } : function(t, e) {
                    var r = t.length;
                    if (!(e < 0 || e >= r)) {
                        var n, i = t.charCodeAt(e);
                        return i < 55296 || i > 56319 || e + 1 === r || (n = t.charCodeAt(e + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
                    }
                },
                rt = X ? function(t) {
                    return t.trimStart()
                } : function(t) {
                    return t.replace(M, "")
                },
                nt = Y ? function(t) {
                    return t.trimEnd()
                } : function(t) {
                    return t.replace(k, "")
                };

            function it(t, e) {
                return new RegExp(t, e)
            }
            if (W) {
                var ot = it("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                Z = function(t, e) {
                    var r;
                    ot.lastIndex = e;
                    var n = ot.exec(t);
                    return null !== (r = n[1]) && void 0 !== r ? r : ""
                }
            } else Z = function(t, e) {
                var r = [];
                while (1) {
                    var n = et(t, e);
                    if (void 0 === n || ht(n) || lt(n)) break;
                    r.push(n), e += n >= 65536 ? 2 : 1
                }
                return Q.apply(void 0, r)
            };
            var st = function() {
                function t(t, e) {
                    void 0 === e && (e = {}), this.message = t, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
                }
                return t.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, t.prototype.parseMessage = function(t, e, r) {
                    var n = [];
                    while (!this.isEOF()) {
                        var s = this.char();
                        if (123 === s) {
                            var c = this.parseArgument(t, r);
                            if (c.err) return c;
                            n.push(c.val)
                        } else {
                            if (125 === s && t > 0) break;
                            if (35 !== s || "plural" !== e && "selectordinal" !== e) {
                                if (60 === s && !this.ignoreTag && 47 === this.peek()) {
                                    if (r) break;
                                    return this.error(i.UNMATCHED_CLOSING_TAG, j(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === s && !this.ignoreTag && ct(this.peek() || 0)) {
                                    c = this.parseTag(t, e);
                                    if (c.err) return c;
                                    n.push(c.val)
                                } else {
                                    c = this.parseLiteral(t, e);
                                    if (c.err) return c;
                                    n.push(c.val)
                                }
                            } else {
                                var u = this.clonePosition();
                                this.bump(), n.push({
                                    type: o.pound,
                                    location: j(u, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: n,
                        err: null
                    }
                }, t.prototype.parseTag = function(t, e) {
                    var r = this.clonePosition();
                    this.bump();
                    var n = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: o.literal,
                            value: "<".concat(n, "/>"),
                            location: j(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var s = this.parseMessage(t + 1, e, !0);
                        if (s.err) return s;
                        var c = s.val,
                            u = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !ct(this.char())) return this.error(i.INVALID_TAG, j(u, this.clonePosition()));
                            var a = this.clonePosition(),
                                h = this.parseTagName();
                            return n !== h ? this.error(i.UNMATCHED_CLOSING_TAG, j(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: o.tag,
                                    value: n,
                                    children: c,
                                    location: j(r, this.clonePosition())
                                },
                                err: null
                            } : this.error(i.INVALID_TAG, j(u, this.clonePosition())))
                        }
                        return this.error(i.UNCLOSED_TAG, j(r, this.clonePosition()))
                    }
                    return this.error(i.INVALID_TAG, j(r, this.clonePosition()))
                }, t.prototype.parseTagName = function() {
                    var t = this.offset();
                    this.bump();
                    while (!this.isEOF() && at(this.char())) this.bump();
                    return this.message.slice(t, this.offset())
                }, t.prototype.parseLiteral = function(t, e) {
                    var r = this.clonePosition(),
                        n = "";
                    while (1) {
                        var i = this.tryParseQuote(e);
                        if (i) n += i;
                        else {
                            var s = this.tryParseUnquoted(t, e);
                            if (s) n += s;
                            else {
                                var c = this.tryParseLeftAngleBracket();
                                if (!c) break;
                                n += c
                            }
                        }
                    }
                    var u = j(r, this.clonePosition());
                    return {
                        val: {
                            type: o.literal,
                            value: n,
                            location: u
                        },
                        err: null
                    }
                }, t.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && ut(this.peek() || 0) ? null : (this.bump(), "<")
                }, t.prototype.tryParseQuote = function(t) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === t || "selectordinal" === t) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var e = [this.char()];
                    this.bump();
                    while (!this.isEOF()) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            e.push(39), this.bump()
                        } else e.push(r);
                        this.bump()
                    }
                    return Q.apply(void 0, e)
                }, t.prototype.tryParseUnquoted = function(t, e) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === e || "selectordinal" === e) || 125 === r && t > 0 ? null : (this.bump(), Q(r))
                }, t.prototype.parseArgument = function(t, e) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, j(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(i.EMPTY_ARGUMENT, j(r, this.clonePosition()));
                    var n = this.parseIdentifierIfPossible().value;
                    if (!n) return this.error(i.MALFORMED_ARGUMENT, j(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, j(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: o.argument,
                                    value: n,
                                    location: j(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, j(r, this.clonePosition())) : this.parseArgumentOptions(t, e, n, r);
                        default:
                            return this.error(i.MALFORMED_ARGUMENT, j(r, this.clonePosition()))
                    }
                }, t.prototype.parseIdentifierIfPossible = function() {
                    var t = this.clonePosition(),
                        e = this.offset(),
                        r = Z(this.message, e),
                        n = e + r.length;
                    this.bumpTo(n);
                    var i = this.clonePosition(),
                        o = j(t, i);
                    return {
                        value: r,
                        location: o
                    }
                }, t.prototype.parseArgumentOptions = function(t, e, r, c) {
                    var u, a = this.clonePosition(),
                        h = this.parseIdentifierIfPossible().value,
                        l = this.clonePosition();
                    switch (h) {
                        case "":
                            return this.error(i.EXPECT_ARGUMENT_TYPE, j(a, l));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var f = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var d = this.clonePosition(),
                                    p = this.parseSimpleArgStyleIfPossible();
                                if (p.err) return p;
                                var b = nt(p.val);
                                if (0 === b.length) return this.error(i.EXPECT_ARGUMENT_STYLE, j(this.clonePosition(), this.clonePosition()));
                                var y = j(d, this.clonePosition());
                                f = {
                                    style: b,
                                    styleLocation: y
                                }
                            }
                            var v = this.tryParseArgumentClose(c);
                            if (v.err) return v;
                            var E = j(c, this.clonePosition());
                            if (f && J(null === f || void 0 === f ? void 0 : f.style, "::", 0)) {
                                var m = rt(f.style.slice(2));
                                if ("number" === h) {
                                    p = this.parseNumberSkeletonFromString(m, f.styleLocation);
                                    return p.err ? p : {
                                        val: {
                                            type: o.number,
                                            value: r,
                                            location: E,
                                            style: p.val
                                        },
                                        err: null
                                    }
                                }
                                if (0 === m.length) return this.error(i.EXPECT_DATE_TIME_SKELETON, E);
                                var w = m;
                                this.locale && (w = U(m, this.locale));
                                b = {
                                    type: s.dateTime,
                                    pattern: w,
                                    location: f.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? g(w) : {}
                                };
                                var _ = "date" === h ? o.date : o.time;
                                return {
                                    val: {
                                        type: _,
                                        value: r,
                                        location: E,
                                        style: b
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === h ? o.number : "date" === h ? o.date : o.time,
                                    value: r,
                                    location: E,
                                    style: null !== (u = null === f || void 0 === f ? void 0 : f.style) && void 0 !== u ? u : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var I = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(i.EXPECT_SELECT_ARGUMENT_OPTIONS, j(I, n({}, I)));
                            this.bumpSpace();
                            var S = this.parseIdentifierIfPossible(),
                                T = 0;
                            if ("select" !== h && "offset" === S.value) {
                                if (!this.bumpIf(":")) return this.error(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j(this.clonePosition(), this.clonePosition()));
                                this.bumpSpace();
                                p = this.tryParseDecimalInteger(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, i.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                                if (p.err) return p;
                                this.bumpSpace(), S = this.parseIdentifierIfPossible(), T = p.val
                            }
                            var x = this.tryParsePluralOrSelectOptions(t, h, e, S);
                            if (x.err) return x;
                            v = this.tryParseArgumentClose(c);
                            if (v.err) return v;
                            var A = j(c, this.clonePosition());
                            return "select" === h ? {
                                val: {
                                    type: o.select,
                                    value: r,
                                    options: tt(x.val),
                                    location: A
                                },
                                err: null
                            } : {
                                val: {
                                    type: o.plural,
                                    value: r,
                                    options: tt(x.val),
                                    offset: T,
                                    pluralType: "plural" === h ? "cardinal" : "ordinal",
                                    location: A
                                },
                                err: null
                            };
                        default:
                            return this.error(i.INVALID_ARGUMENT_TYPE, j(a, l))
                    }
                }, t.prototype.tryParseArgumentClose = function(t) {
                    return this.isEOF() || 125 !== this.char() ? this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, j(t, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, t.prototype.parseSimpleArgStyleIfPossible = function() {
                    var t = 0,
                        e = this.clonePosition();
                    while (!this.isEOF()) {
                        var r = this.char();
                        switch (r) {
                            case 39:
                                this.bump();
                                var n = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(i.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, j(n, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                t += 1, this.bump();
                                break;
                            case 125:
                                if (!(t > 0)) return {
                                    val: this.message.slice(e.offset, this.offset()),
                                    err: null
                                };
                                t -= 1;
                                break;
                            default:
                                this.bump();
                                break
                        }
                    }
                    return {
                        val: this.message.slice(e.offset, this.offset()),
                        err: null
                    }
                }, t.prototype.parseNumberSkeletonFromString = function(t, e) {
                    var r = [];
                    try {
                        r = I(t)
                    } catch (n) {
                        return this.error(i.INVALID_NUMBER_SKELETON, e)
                    }
                    return {
                        val: {
                            type: s.number,
                            tokens: r,
                            location: e,
                            parsedOptions: this.shouldParseSkeletons ? P(r) : {}
                        },
                        err: null
                    }
                }, t.prototype.tryParsePluralOrSelectOptions = function(t, e, r, n) {
                    var o, s = !1,
                        c = [],
                        u = new Set,
                        a = n.value,
                        h = n.location;
                    while (1) {
                        if (0 === a.length) {
                            var l = this.clonePosition();
                            if ("select" === e || !this.bumpIf("=")) break;
                            var f = this.tryParseDecimalInteger(i.EXPECT_PLURAL_ARGUMENT_SELECTOR, i.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (f.err) return f;
                            h = j(l, this.clonePosition()), a = this.message.slice(l.offset, this.offset())
                        }
                        if (u.has(a)) return this.error("select" === e ? i.DUPLICATE_SELECT_ARGUMENT_SELECTOR : i.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
                        "other" === a && (s = !0), this.bumpSpace();
                        var d = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === e ? i.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : i.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, j(this.clonePosition(), this.clonePosition()));
                        var p = this.parseMessage(t + 1, e, r);
                        if (p.err) return p;
                        var b = this.tryParseArgumentClose(d);
                        if (b.err) return b;
                        c.push([a, {
                            value: p.val,
                            location: j(d, this.clonePosition())
                        }]), u.add(a), this.bumpSpace(), o = this.parseIdentifierIfPossible(), a = o.value, h = o.location
                    }
                    return 0 === c.length ? this.error("select" === e ? i.EXPECT_SELECT_ARGUMENT_SELECTOR : i.EXPECT_PLURAL_ARGUMENT_SELECTOR, j(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(i.MISSING_OTHER_CLAUSE, j(this.clonePosition(), this.clonePosition())) : {
                        val: c,
                        err: null
                    }
                }, t.prototype.tryParseDecimalInteger = function(t, e) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    var i = !1,
                        o = 0;
                    while (!this.isEOF()) {
                        var s = this.char();
                        if (!(s >= 48 && s <= 57)) break;
                        i = !0, o = 10 * o + (s - 48), this.bump()
                    }
                    var c = j(n, this.clonePosition());
                    return i ? (o *= r, z(o) ? {
                        val: o,
                        err: null
                    } : this.error(e, c)) : this.error(t, c)
                }, t.prototype.offset = function() {
                    return this.position.offset
                }, t.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, t.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, t.prototype.char = function() {
                    var t = this.position.offset;
                    if (t >= this.message.length) throw Error("out of bound");
                    var e = et(this.message, t);
                    if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
                    return e
                }, t.prototype.error = function(t, e) {
                    return {
                        val: null,
                        err: {
                            kind: t,
                            message: this.message,
                            location: e
                        }
                    }
                }, t.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var t = this.char();
                        10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
                    }
                }, t.prototype.bumpIf = function(t) {
                    if (J(this.message, t, this.offset())) {
                        for (var e = 0; e < t.length; e++) this.bump();
                        return !0
                    }
                    return !1
                }, t.prototype.bumpUntil = function(t) {
                    var e = this.offset(),
                        r = this.message.indexOf(t, e);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, t.prototype.bumpTo = function(t) {
                    if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
                    t = Math.min(t, this.message.length);
                    while (1) {
                        var e = this.offset();
                        if (e === t) break;
                        if (e > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, t.prototype.bumpSpace = function() {
                    while (!this.isEOF() && ht(this.char())) this.bump()
                }, t.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var t = this.char(),
                        e = this.offset(),
                        r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
                    return null !== r && void 0 !== r ? r : null
                }, t
            }();

            function ct(t) {
                return t >= 97 && t <= 122 || t >= 65 && t <= 90
            }

            function ut(t) {
                return ct(t) || 47 === t
            }

            function at(t) {
                return 45 === t || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039
            }

            function ht(t) {
                return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t
            }

            function lt(t) {
                return t >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094
            }

            function ft(t) {
                t.forEach((function(t) {
                    if (delete t.location, f(t) || d(t))
                        for (var e in t.options) delete t.options[e].location, ft(t.options[e].value);
                    else a(t) && y(t.style) || (h(t) || l(t)) && v(t.style) ? delete t.style.location : b(t) && ft(t.children)
                }))
            }

            function dt(t, e) {
                void 0 === e && (e = {}), e = n({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, e);
                var r = new st(t, e).parse();
                if (r.err) {
                    var o = SyntaxError(i[r.err.kind]);
                    throw o.location = r.err.location, o.originalMessage = r.err.message, o
                }
                return (null === e || void 0 === e ? void 0 : e.captureLocation) || ft(r.val), r.val
            }
        },
        "2af0": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r("8a94"),
                i = r("a393");

            function o(t, e) {
                return new n["a"]((function(r) {
                    var n = new i["a"],
                        o = 0;
                    return n.add(e.schedule((function() {
                        o !== t.length ? (r.next(t[o++]), r.closed || n.add(this.schedule())) : r.complete()
                    }))), n
                }))
            }
        },
        "31a6": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return i
            }));
            var n = !1,
                i = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        if (t) {
                            var e = new Error;
                            e.stack
                        }
                        n = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return n
                    }
                }
        },
        "392f": function(t, e, r) {
            const n = r("0d26"),
                i = r("11a3"),
                o = r("c2a4"),
                s = r("fced"),
                c = r("2ae6"),
                u = r("4024"),
                a = r("8acd"),
                h = r("40a3"),
                l = r("7239"),
                f = r("5536"),
                d = r("cde5"),
                p = r("7cbf"),
                b = r("1f59"),
                y = r("61dc"),
                v = r("9965"),
                E = r("c0e7"),
                m = r("0b47"),
                g = r("46ec"),
                w = r("f9fd"),
                _ = r("54cf"),
                I = r("144b"),
                S = r("c53d"),
                T = r("9074"),
                x = r("dcc1"),
                A = r("0a9d"),
                O = r("dda2"),
                N = r("913b"),
                B = r("49ac"),
                R = r("0872"),
                L = r("5503"),
                P = r("7467"),
                C = r("6a56"),
                H = r("fffa"),
                U = r("f7c0"),
                D = r("ed3c"),
                M = r("40ab"),
                k = r("05f8"),
                j = r("694f"),
                F = r("b127"),
                G = r("cdff"),
                $ = r("f552");
            t.exports = {
                parse: c,
                valid: u,
                clean: a,
                inc: h,
                diff: l,
                major: f,
                minor: d,
                patch: p,
                prerelease: b,
                compare: y,
                rcompare: v,
                compareLoose: E,
                compareBuild: m,
                sort: g,
                rsort: w,
                gt: _,
                lt: I,
                eq: S,
                neq: T,
                gte: x,
                lte: A,
                cmp: O,
                coerce: N,
                Comparator: B,
                Range: R,
                satisfies: L,
                toComparators: P,
                maxSatisfying: C,
                minSatisfying: H,
                minVersion: U,
                validRange: D,
                outside: M,
                gtr: k,
                ltr: j,
                intersects: F,
                simplifyRange: G,
                subset: $,
                SemVer: o,
                re: n.re,
                src: n.src,
                tokens: n.t,
                SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: i.RELEASE_TYPES,
                compareIdentifiers: s.compareIdentifiers,
                rcompareIdentifiers: s.rcompareIdentifiers
            }
        },
        "3cb0": function(t, e, r) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.receiveAPDU = void 0;
                var n = r("a8fc"),
                    i = r("0cd1"),
                    o = r("bd42");
                const s = 5,
                    c = e => i.Observable.create(r => {
                        let i = 0,
                            c = 0,
                            u = t.alloc(0);
                        const a = e.subscribe({
                            complete: () => {
                                r.error(new n.DisconnectedDevice), a.unsubscribe()
                            },
                            error: t => {
                                (0, o.log)("ble-error", "in receiveAPDU " + String(t)), r.error(t), a.unsubscribe()
                            },
                            next: e => {
                                const o = e.readUInt8(0),
                                    h = e.readUInt16BE(1);
                                let l = e.slice(3);
                                o === s ? i === h ? (0 === h && (c = l.readUInt16BE(0), l = l.slice(2)), i++, u = t.concat([u, l]), u.length > c ? r.error(new n.TransportError("BLE: received too much data. discontinued chunk. Received " + u.length + " but expected " + c, "BLETooMuchData")) : u.length === c && (r.next(u), r.complete(), a.unsubscribe())) : r.error(new n.TransportError("BLE: Invalid sequence number. discontinued chunk. Received " + h + " but expected " + i, "InvalidSequence")) : r.error(new n.TransportError("Invalid tag " + o.toString(16), "InvalidTag"))
                            }
                        });
                        return () => {
                            a.unsubscribe()
                        }
                    });
                e.receiveAPDU = c
            }).call(this, r("b639").Buffer)
        },
        "3cdb": function(t, e, r) {
            "use strict";

            function n(t) {
                return t
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        4024: function(t, e, r) {
            const n = r("2ae6"),
                i = (t, e) => {
                    const r = n(t, e);
                    return r ? r.version : null
                };
            t.exports = i
        },
        "40a3": function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e, r, i, o) => {
                    "string" === typeof r && (o = i, i = r, r = void 0);
                    try {
                        return new n(t instanceof n ? t.version : t, r).inc(e, i, o).version
                    } catch (s) {
                        return null
                    }
                };
            t.exports = i
        },
        "40ab": function(t, e, r) {
            const n = r("c2a4"),
                i = r("49ac"),
                {
                    ANY: o
                } = i,
                s = r("0872"),
                c = r("5503"),
                u = r("54cf"),
                a = r("144b"),
                h = r("0a9d"),
                l = r("dcc1"),
                f = (t, e, r, f) => {
                    let d, p, b, y, v;
                    switch (t = new n(t, f), e = new s(e, f), r) {
                        case ">":
                            d = u, p = h, b = a, y = ">", v = ">=";
                            break;
                        case "<":
                            d = a, p = l, b = u, y = "<", v = "<=";
                            break;
                        default:
                            throw new TypeError('Must provide a hilo val of "<" or ">"')
                    }
                    if (c(t, e, f)) return !1;
                    for (let n = 0; n < e.set.length; ++n) {
                        const r = e.set[n];
                        let s = null,
                            c = null;
                        if (r.forEach(t => {
                                t.semver === o && (t = new i(">=0.0.0")), s = s || t, c = c || t, d(t.semver, s.semver, f) ? s = t : b(t.semver, c.semver, f) && (c = t)
                            }), s.operator === y || s.operator === v) return !1;
                        if ((!c.operator || c.operator === y) && p(t, c.semver)) return !1;
                        if (c.operator === v && b(t, c.semver)) return !1
                    }
                    return !0
                };
            t.exports = f
        },
        "46ec": function(t, e, r) {
            const n = r("0b47"),
                i = (t, e) => t.sort((t, r) => n(t, r, e));
            t.exports = i
        },
        "49ac": function(t, e, r) {
            const n = Symbol("SemVer ANY");
            class i {
                static get ANY() {
                    return n
                }
                constructor(t, e) {
                    if (e = o(e), t instanceof i) {
                        if (t.loose === !!e.loose) return t;
                        t = t.value
                    }
                    t = t.trim().split(/\s+/).join(" "), a("comparator", t, e), this.options = e, this.loose = !!e.loose, this.parse(t), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, a("comp", this)
                }
                parse(t) {
                    const e = this.options.loose ? s[c.COMPARATORLOOSE] : s[c.COMPARATOR],
                        r = t.match(e);
                    if (!r) throw new TypeError("Invalid comparator: " + t);
                    this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new h(r[2], this.options.loose) : this.semver = n
                }
                toString() {
                    return this.value
                }
                test(t) {
                    if (a("Comparator.test", t, this.options.loose), this.semver === n || t === n) return !0;
                    if ("string" === typeof t) try {
                        t = new h(t, this.options)
                    } catch (e) {
                        return !1
                    }
                    return u(t, this.operator, this.semver, this.options)
                }
                intersects(t, e) {
                    if (!(t instanceof i)) throw new TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new l(t.value, e).test(this.value) : "" === t.operator ? "" === t.value || new l(this.value, e).test(t.semver) : (e = o(e), (!e.includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== t.value) && (!(!e.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !t.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !t.operator.startsWith("<")) || (!(this.semver.version !== t.semver.version || !this.operator.includes("=") || !t.operator.includes("=")) || (!!(u(this.semver, "<", t.semver, e) && this.operator.startsWith(">") && t.operator.startsWith("<")) || !!(u(this.semver, ">", t.semver, e) && this.operator.startsWith("<") && t.operator.startsWith(">"))))))))
                }
            }
            t.exports = i;
            const o = r("83e2"),
                {
                    safeRe: s,
                    t: c
                } = r("0d26"),
                u = r("dda2"),
                a = r("0f35"),
                h = r("c2a4"),
                l = r("0872")
        },
        "4cf8": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = function() {
                return "function" === typeof Symbol && Symbol.observable || "@@observable"
            }()
        },
        "4d3d": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r("9ab4"),
                i = r("21ce");

            function o(t, e) {
                return function(r) {
                    if ("function" !== typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return r.lift(new s(t, e))
                }
            }
            var s = function() {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t, this.project, this.thisArg))
                    }, t
                }(),
                c = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e) || this;
                        return i.project = r, i.count = 0, i.thisArg = n || i, i
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.destination.next(e)
                    }, e
                }(i["a"])
        },
        5220: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.add = e.toBig = e.split = e.fromBig = void 0;
            const n = BigInt(2 ** 32 - 1),
                i = BigInt(32);

            function o(t, e = !1) {
                return e ? {
                    h: Number(t & n),
                    l: Number(t >> i & n)
                } : {
                    h: 0 | Number(t >> i & n),
                    l: 0 | Number(t & n)
                }
            }

            function s(t, e = !1) {
                let r = new Uint32Array(t.length),
                    n = new Uint32Array(t.length);
                for (let i = 0; i < t.length; i++) {
                    const {
                        h: s,
                        l: c
                    } = o(t[i], e);
                    [r[i], n[i]] = [s, c]
                }
                return [r, n]
            }
            e.fromBig = o, e.split = s;
            const c = (t, e) => BigInt(t >>> 0) << i | BigInt(e >>> 0);
            e.toBig = c;
            const u = (t, e, r) => t >>> r,
                a = (t, e, r) => t << 32 - r | e >>> r,
                h = (t, e, r) => t >>> r | e << 32 - r,
                l = (t, e, r) => t << 32 - r | e >>> r,
                f = (t, e, r) => t << 64 - r | e >>> r - 32,
                d = (t, e, r) => t >>> r - 32 | e << 64 - r,
                p = (t, e) => e,
                b = (t, e) => t,
                y = (t, e, r) => t << r | e >>> 32 - r,
                v = (t, e, r) => e << r | t >>> 32 - r,
                E = (t, e, r) => e << r - 32 | t >>> 64 - r,
                m = (t, e, r) => t << r - 32 | e >>> 64 - r;

            function g(t, e, r, n) {
                const i = (e >>> 0) + (n >>> 0);
                return {
                    h: t + r + (i / 2 ** 32 | 0) | 0,
                    l: 0 | i
                }
            }
            e.add = g;
            const w = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
                _ = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0,
                I = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
                S = (t, e, r, n, i) => e + r + n + i + (t / 2 ** 32 | 0) | 0,
                T = (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
                x = (t, e, r, n, i, o) => e + r + n + i + o + (t / 2 ** 32 | 0) | 0,
                A = {
                    fromBig: o,
                    split: s,
                    toBig: e.toBig,
                    shrSH: u,
                    shrSL: a,
                    rotrSH: h,
                    rotrSL: l,
                    rotrBH: f,
                    rotrBL: d,
                    rotr32H: p,
                    rotr32L: b,
                    rotlSH: y,
                    rotlSL: v,
                    rotlBH: E,
                    rotlBL: m,
                    add: g,
                    add3L: w,
                    add3H: _,
                    add4L: I,
                    add4H: S,
                    add5H: x,
                    add5L: T
                };
            e.default = A
        },
        "531d": function(t, e, r) {
            "use strict";
            /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.randomBytes = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
            const n = r("cae7"),
                i = t => new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            e.u8 = i;
            const o = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
            e.u32 = o;
            const s = t => new DataView(t.buffer, t.byteOffset, t.byteLength);
            e.createView = s;
            const c = (t, e) => t << 32 - e | t >>> e;
            if (e.rotr = c, e.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !e.isLE) throw new Error("Non little-endian hardware is not supported");
            const u = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function a(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Uint8Array expected");
                let e = "";
                for (let r = 0; r < t.length; r++) e += u[t[r]];
                return e
            }

            function h(t) {
                if ("string" !== typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const e = new Uint8Array(t.length / 2);
                for (let r = 0; r < e.length; r++) {
                    const n = 2 * r,
                        i = t.slice(n, n + 2),
                        o = Number.parseInt(i, 16);
                    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
                    e[r] = o
                }
                return e
            }
            e.bytesToHex = a, e.hexToBytes = h;
            const l = async () => {};
            async function f(t, r, n) {
                let i = Date.now();
                for (let o = 0; o < t; o++) {
                    n(o);
                    const t = Date.now() - i;
                    t >= 0 && t < r || (await (0, e.nextTick)(), i += t)
                }
            }

            function d(t) {
                if ("string" !== typeof t) throw new TypeError("utf8ToBytes expected string, got " + typeof t);
                return (new TextEncoder).encode(t)
            }

            function p(t) {
                if ("string" === typeof t && (t = d(t)), !(t instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
                return t
            }

            function b(...t) {
                if (!t.every(t => t instanceof Uint8Array)) throw new Error("Uint8Array list expected");
                if (1 === t.length) return t[0];
                const e = t.reduce((t, e) => t + e.length, 0),
                    r = new Uint8Array(e);
                for (let n = 0, i = 0; n < t.length; n++) {
                    const e = t[n];
                    r.set(e, i), i += e.length
                }
                return r
            }
            e.nextTick = l, e.asyncLoop = f, e.utf8ToBytes = d, e.toBytes = p, e.concatBytes = b;
            class y {
                clone() {
                    return this._cloneInto()
                }
            }
            e.Hash = y;
            const v = t => "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object;

            function E(t, e) {
                if (void 0 !== e && ("object" !== typeof e || !v(e))) throw new TypeError("Options should be object or undefined");
                const r = Object.assign(t, e);
                return r
            }

            function m(t) {
                const e = e => t().update(p(e)).digest(),
                    r = t();
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
            }

            function g(t) {
                const e = (e, r) => t(r).update(p(e)).digest(),
                    r = t({});
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = e => t(e), e
            }

            function w(t = 32) {
                if (n.crypto.web) return n.crypto.web.getRandomValues(new Uint8Array(t));
                if (n.crypto.node) return new Uint8Array(n.crypto.node.randomBytes(t).buffer);
                throw new Error("The environment doesn't have randomBytes function")
            }
            e.checkOpts = E, e.wrapConstructor = m, e.wrapConstructorWithOpts = g, e.randomBytes = w
        },
        5382: function(t, e, r) {
            "use strict";

            function n() {
                return "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            r.d(e, "a", (function() {
                return i
            }));
            var i = n()
        },
        "54cf": function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => n(t, e, r) > 0;
            t.exports = i
        },
        5503: function(t, e, r) {
            const n = r("0872"),
                i = (t, e, r) => {
                    try {
                        e = new n(e, r)
                    } catch (i) {
                        return !1
                    }
                    return e.test(t)
                };
            t.exports = i
        },
        5536: function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e) => new n(t, e).major;
            t.exports = i
        },
        5859: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return d
            }));
            var n = r("1240"),
                i = r("158c"),
                o = function(t) {
                    return function(e) {
                        return t.then((function(t) {
                            e.closed || (e.next(t), e.complete())
                        }), (function(t) {
                            return e.error(t)
                        })).then(null, i["a"]), e
                    }
                },
                s = r("5382"),
                c = function(t) {
                    return function(e) {
                        var r = t[s["a"]]();
                        do {
                            var n = void 0;
                            try {
                                n = r.next()
                            } catch (i) {
                                return e.error(i), e
                            }
                            if (n.done) {
                                e.complete();
                                break
                            }
                            if (e.next(n.value), e.closed) break
                        } while (1);
                        return "function" === typeof r.return && e.add((function() {
                            r.return && r.return()
                        })), e
                    }
                },
                u = r("4cf8"),
                a = function(t) {
                    return function(e) {
                        var r = t[u["a"]]();
                        if ("function" !== typeof r.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return r.subscribe(e)
                    }
                },
                h = r("b4b3"),
                l = r("d749"),
                f = r("b92d"),
                d = function(t) {
                    if (t && "function" === typeof t[u["a"]]) return a(t);
                    if (Object(h["a"])(t)) return Object(n["a"])(t);
                    if (Object(l["a"])(t)) return o(t);
                    if (t && "function" === typeof t[s["a"]]) return c(t);
                    var e = Object(f["a"])(t) ? "an invalid object" : "'" + t + "'",
                        r = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
                    throw new TypeError(r)
                }
        },
        5880: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return c
            }));
            var n = r("9ab4"),
                i = r("21ce");

            function o() {}
            var s = r("746b");

            function c(t, e, r) {
                return function(n) {
                    return n.lift(new u(t, e, r))
                }
            }
            var u = function() {
                    function t(t, e, r) {
                        this.nextOrObserver = t, this.error = e, this.complete = r
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.nextOrObserver, this.error, this.complete))
                    }, t
                }(),
                a = function(t) {
                    function e(e, r, n, i) {
                        var c = t.call(this, e) || this;
                        return c._tapNext = o, c._tapError = o, c._tapComplete = o, c._tapError = n || o, c._tapComplete = i || o, Object(s["a"])(r) ? (c._context = c, c._tapNext = r) : r && (c._context = r, c._tapNext = r.next || o, c._tapError = r.error || o, c._tapComplete = r.complete || o), c
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {
                        try {
                            this._tapNext.call(this._context, t)
                        } catch (e) {
                            return void this.destination.error(e)
                        }
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        try {
                            this._tapError.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.error(t)
                    }, e.prototype._complete = function() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        return this.destination.complete()
                    }, e
                }(i["a"])
        },
        "61bb": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r("31a6"),
                i = r("158c"),
                o = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (n["a"].useDeprecatedSynchronousErrorHandling) throw t;
                        Object(i["a"])(t)
                    },
                    complete: function() {}
                }
        },
        "61dc": function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e, r) => new n(t, r).compare(new n(e, r));
            t.exports = i
        },
        "68f2": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r("8a94"),
                i = new n["a"]((function(t) {
                    return t.complete()
                }));

            function o(t) {
                return t ? s(t) : i
            }

            function s(t) {
                return new n["a"]((function(e) {
                    return t.schedule((function() {
                        return e.complete()
                    }))
                }))
            }
        },
        "694f": function(t, e, r) {
            const n = r("40ab"),
                i = (t, e, r) => n(t, e, "<", r);
            t.exports = i
        },
        "6a56": function(t, e, r) {
            const n = r("c2a4"),
                i = r("0872"),
                o = (t, e, r) => {
                    let o = null,
                        s = null,
                        c = null;
                    try {
                        c = new i(e, r)
                    } catch (u) {
                        return null
                    }
                    return t.forEach(t => {
                        c.test(t) && (o && -1 !== s.compare(t) || (o = t, s = new n(o, r)))
                    }), o
                };
            t.exports = o
        },
        7239: function(t, e, r) {
            const n = r("2ae6"),
                i = (t, e) => {
                    const r = n(t, null, !0),
                        i = n(e, null, !0),
                        o = r.compare(i);
                    if (0 === o) return null;
                    const s = o > 0,
                        c = s ? r : i,
                        u = s ? i : r,
                        a = !!c.prerelease.length,
                        h = !!u.prerelease.length;
                    if (h && !a) return u.patch || u.minor ? c.patch ? "patch" : c.minor ? "minor" : "major" : "major";
                    const l = a ? "pre" : "";
                    return r.major !== i.major ? l + "major" : r.minor !== i.minor ? l + "minor" : r.patch !== i.patch ? l + "patch" : "prerelease"
                };
            t.exports = i
        },
        7264: function(t, e, r) {
            "use strict";

            function n(t, e) {
                var r = e && e.cache ? e.cache : d,
                    n = e && e.serializer ? e.serializer : l,
                    i = e && e.strategy ? e.strategy : u;
                return i(t, {
                    cache: r,
                    serializer: n
                })
            }

            function i(t) {
                return null == t || "number" === typeof t || "boolean" === typeof t
            }

            function o(t, e, r, n) {
                var o = i(n) ? n : r(n),
                    s = e.get(o);
                return "undefined" === typeof s && (s = t.call(this, n), e.set(o, s)), s
            }

            function s(t, e, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    o = e.get(i);
                return "undefined" === typeof o && (o = t.apply(this, n), e.set(i, o)), o
            }

            function c(t, e, r, n, i) {
                return r.bind(e, t, n, i)
            }

            function u(t, e) {
                var r = 1 === t.length ? o : s;
                return c(t, this, r, e.cache.create(), e.serializer)
            }

            function a(t, e) {
                return c(t, this, s, e.cache.create(), e.serializer)
            }

            function h(t, e) {
                return c(t, this, o, e.cache.create(), e.serializer)
            }
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return p
            }));
            var l = function() {
                return JSON.stringify(arguments)
            };

            function f() {
                this.cache = Object.create(null)
            }
            f.prototype.get = function(t) {
                return this.cache[t]
            }, f.prototype.set = function(t, e) {
                this.cache[t] = e
            };
            var d = {
                    create: function() {
                        return new f
                    }
                },
                p = {
                    variadic: a,
                    monadic: h
                }
        },
        7467: function(t, e, r) {
            const n = r("0872"),
                i = (t, e) => new n(t, e).set.map(t => t.map(t => t.value).join(" ").trim().split(" "));
            t.exports = i
        },
        "746b": function(t, e, r) {
            "use strict";

            function n(t) {
                return "function" === typeof t
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        "79b2": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return S
            }));
            var n = function() {
                    function t() {
                        return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                i = n,
                o = r("9ab4"),
                s = r("21ce");

            function c(t, e) {
                return function(r) {
                    return r.lift(new u(t, e))
                }
            }
            var u = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new a(t, this.predicate, this.thisArg))
                    }, t
                }(),
                a = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e) || this;
                        return i.predicate = r, i.thisArg = n, i.count = 0, i
                    }
                    return o["__extends"](e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        e && this.destination.next(t)
                    }, e
                }(s["a"]),
                h = function() {
                    function t() {
                        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                l = h,
                f = r("68f2");

            function d(t) {
                return function(e) {
                    return 0 === t ? Object(f["a"])() : e.lift(new p(t))
                }
            }
            var p = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new l
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new b(t, this.total))
                    }, t
                }(),
                b = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.total = r, n.count = 0, n
                    }
                    return o["__extends"](e, t), e.prototype._next = function(t) {
                        var e = this.total,
                            r = ++this.count;
                        r <= e && (this.destination.next(t), r === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(s["a"]);

            function y(t) {
                return void 0 === t && (t = null),
                    function(e) {
                        return e.lift(new v(t))
                    }
            }
            var v = function() {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new E(t, this.defaultValue))
                    }, t
                }(),
                E = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.defaultValue = r, n.isEmpty = !0, n
                    }
                    return o["__extends"](e, t), e.prototype._next = function(t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }, e
                }(s["a"]);

            function m(t) {
                return void 0 === t && (t = _),
                    function(e) {
                        return e.lift(new g(t))
                    }
            }
            var g = function() {
                    function t(t) {
                        this.errorFactory = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new w(t, this.errorFactory))
                    }, t
                }(),
                w = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.errorFactory = r, n.hasValue = !1, n
                    }
                    return o["__extends"](e, t), e.prototype._next = function(t) {
                        this.hasValue = !0, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        if (this.hasValue) return this.destination.complete();
                        var t = void 0;
                        try {
                            t = this.errorFactory()
                        } catch (e) {
                            t = e
                        }
                        this.destination.error(t)
                    }, e
                }(s["a"]);

            function _() {
                return new i
            }
            var I = r("3cdb");

            function S(t, e) {
                var r = arguments.length >= 2;
                return function(n) {
                    return n.pipe(t ? c((function(e, r) {
                        return t(e, r, n)
                    })) : I["a"], d(1), r ? y(e) : m((function() {
                        return new i
                    })))
                }
            }
        },
        "7b8f": function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "CURVE", (function() {
                return a
            })), r.d(e, "ExtendedPoint", (function() {
                return y
            })), r.d(e, "RistrettoPoint", (function() {
                return w
            })), r.d(e, "Point", (function() {
                return I
            })), r.d(e, "Signature", (function() {
                return S
            })), r.d(e, "getPublicKey", (function() {
                return tt
            })), r.d(e, "sign", (function() {
                return rt
            })), r.d(e, "verify", (function() {
                return st
            })), r.d(e, "sync", (function() {
                return ut
            })), r.d(e, "getSharedSecret", (function() {
                return at
            })), r.d(e, "curve25519", (function() {
                return pt
            })), r.d(e, "utils", (function() {
                return yt
            }));
            var n = r(0);
            /*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
            const i = BigInt(0),
                o = BigInt(1),
                s = BigInt(2),
                c = BigInt(8),
                u = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
                a = Object.freeze({
                    a: BigInt(-1),
                    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
                    P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
                    l: u,
                    n: u,
                    h: BigInt(8),
                    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
                    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
                }),
                h = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000"),
                l = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),
                f = (BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742"), BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235")),
                d = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),
                p = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),
                b = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
            class y {
                constructor(t, e, r, n) {
                    this.x = t, this.y = e, this.z = r, this.t = n
                }
                static fromAffine(t) {
                    if (!(t instanceof I)) throw new TypeError("ExtendedPoint#fromAffine: expected Point");
                    return t.equals(I.ZERO) ? y.ZERO : new y(t.x, t.y, o, H(t.x * t.y))
                }
                static toAffineBatch(t) {
                    const e = D(t.map(t => t.z));
                    return t.map((t, r) => t.toAffine(e[r]))
                }
                static normalizeZ(t) {
                    return this.toAffineBatch(t).map(this.fromAffine)
                }
                equals(t) {
                    E(t);
                    const {
                        x: e,
                        y: r,
                        z: n
                    } = this, {
                        x: i,
                        y: o,
                        z: s
                    } = t, c = H(e * s), u = H(i * n), a = H(r * s), h = H(o * n);
                    return c === u && a === h
                }
                negate() {
                    return new y(H(-this.x), this.y, this.z, H(-this.t))
                }
                double() {
                    const {
                        x: t,
                        y: e,
                        z: r
                    } = this, {
                        a: n
                    } = a, i = H(t * t), o = H(e * e), c = H(s * H(r * r)), u = H(n * i), h = t + e, l = H(H(h * h) - i - o), f = u + o, d = f - c, p = u - o, b = H(l * d), v = H(f * p), E = H(l * p), m = H(d * f);
                    return new y(b, v, m, E)
                }
                add(t) {
                    E(t);
                    const {
                        x: e,
                        y: r,
                        z: n,
                        t: o
                    } = this, {
                        x: c,
                        y: u,
                        z: a,
                        t: h
                    } = t, l = H((r - e) * (u + c)), f = H((r + e) * (u - c)), d = H(f - l);
                    if (d === i) return this.double();
                    const p = H(n * s * h),
                        b = H(o * s * a),
                        v = b + p,
                        m = f + l,
                        g = b - p,
                        w = H(v * d),
                        _ = H(m * g),
                        I = H(v * g),
                        S = H(d * m);
                    return new y(w, _, S, I)
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                precomputeWindow(t) {
                    const e = 1 + 256 / t,
                        r = [];
                    let n = this,
                        i = n;
                    for (let o = 0; o < e; o++) {
                        i = n, r.push(i);
                        for (let e = 1; e < 2 ** (t - 1); e++) i = i.add(n), r.push(i);
                        n = i.double()
                    }
                    return r
                }
                wNAF(t, e) {
                    !e && this.equals(y.BASE) && (e = I.BASE);
                    const r = e && e._WINDOW_SIZE || 1;
                    if (256 % r) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let n = e && _.get(e);
                    n || (n = this.precomputeWindow(r), e && 1 !== r && (n = y.normalizeZ(n), _.set(e, n)));
                    let i = y.ZERO,
                        s = y.BASE;
                    const c = 1 + 256 / r,
                        u = 2 ** (r - 1),
                        a = BigInt(2 ** r - 1),
                        h = 2 ** r,
                        l = BigInt(r);
                    for (let f = 0; f < c; f++) {
                        const e = f * u;
                        let r = Number(t & a);
                        t >>= l, r > u && (r -= h, t += o);
                        const c = e,
                            d = e + Math.abs(r) - 1,
                            p = f % 2 !== 0,
                            b = r < 0;
                        0 === r ? s = s.add(v(p, n[c])) : i = i.add(v(b, n[d]))
                    }
                    return y.normalizeZ([i, s])[0]
                }
                multiply(t, e) {
                    return this.wNAF(X(t, a.l), e)
                }
                multiplyUnsafe(t) {
                    let e = X(t, a.l, !1);
                    const r = y.BASE,
                        n = y.ZERO;
                    if (e === i) return n;
                    if (this.equals(n) || e === o) return this;
                    if (this.equals(r)) return this.wNAF(e);
                    let s = n,
                        c = this;
                    while (e > i) e & o && (s = s.add(c)), c = c.double(), e >>= o;
                    return s
                }
                isSmallOrder() {
                    return this.multiplyUnsafe(a.h).equals(y.ZERO)
                }
                isTorsionFree() {
                    let t = this.multiplyUnsafe(a.l / s).double();
                    return a.l % s && (t = t.add(this)), t.equals(y.ZERO)
                }
                toAffine(t) {
                    const {
                        x: e,
                        y: r,
                        z: n
                    } = this, i = this.equals(y.ZERO);
                    null == t && (t = i ? c : U(n));
                    const s = H(e * t),
                        u = H(r * t),
                        a = H(n * t);
                    if (i) return I.ZERO;
                    if (a !== o) throw new Error("invZ was invalid");
                    return new I(s, u)
                }
                fromRistrettoBytes() {
                    g()
                }
                toRistrettoBytes() {
                    g()
                }
                fromRistrettoHash() {
                    g()
                }
            }

            function v(t, e) {
                const r = e.negate();
                return t ? r : e
            }

            function E(t) {
                if (!(t instanceof y)) throw new TypeError("ExtendedPoint expected")
            }

            function m(t) {
                if (!(t instanceof w)) throw new TypeError("RistrettoPoint expected")
            }

            function g() {
                throw new Error("Legacy method: switch to RistrettoPoint")
            }
            y.BASE = new y(a.Gx, a.Gy, o, H(a.Gx * a.Gy)), y.ZERO = new y(i, o, o, i);
            class w {
                constructor(t) {
                    this.ep = t
                }
                static calcElligatorRistrettoMap(t) {
                    const {
                        d: e
                    } = a, r = H(l * t * t), n = H((r + o) * p);
                    let i = BigInt(-1);
                    const s = H((i - e * r) * H(r + e));
                    let {
                        isValid: c,
                        value: u
                    } = j(n, s), h = H(u * t);
                    R(h) || (h = H(-h)), c || (u = h), c || (i = r);
                    const d = H(i * (r - o) * b - s),
                        v = u * u,
                        E = H((u + u) * s),
                        m = H(d * f),
                        g = H(o - v),
                        w = H(o + v);
                    return new y(H(E * w), H(g * m), H(m * w), H(E * g))
                }
                static hashToCurve(t) {
                    t = V(t, 64);
                    const e = C(t.slice(0, 32)),
                        r = this.calcElligatorRistrettoMap(e),
                        n = C(t.slice(32, 64)),
                        i = this.calcElligatorRistrettoMap(n);
                    return new w(r.add(i))
                }
                static fromHex(t) {
                    t = V(t, 32);
                    const {
                        a: e,
                        d: r
                    } = a, n = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", s = C(t);
                    if (!$(B(s), t) || R(s)) throw new Error(n);
                    const c = H(s * s),
                        u = H(o + e * c),
                        h = H(o - e * c),
                        l = H(u * u),
                        f = H(h * h),
                        d = H(e * r * l - f),
                        {
                            isValid: p,
                            value: b
                        } = F(H(d * f)),
                        v = H(b * h),
                        E = H(b * v * d);
                    let m = H((s + s) * v);
                    R(m) && (m = H(-m));
                    const g = H(u * E),
                        _ = H(m * g);
                    if (!p || R(_) || g === i) throw new Error(n);
                    return new w(new y(m, g, o, _))
                }
                toRawBytes() {
                    let {
                        x: t,
                        y: e,
                        z: r,
                        t: n
                    } = this.ep;
                    const i = H(H(r + e) * H(r - e)),
                        o = H(t * e),
                        s = H(o * o),
                        {
                            value: c
                        } = F(H(i * s)),
                        u = H(c * i),
                        a = H(c * o),
                        h = H(u * a * n);
                    let f;
                    if (R(n * h)) {
                        let r = H(e * l),
                            n = H(t * l);
                        t = r, e = n, f = H(u * d)
                    } else f = a;
                    R(t * h) && (e = H(-e));
                    let p = H((r - e) * f);
                    return R(p) && (p = H(-p)), B(p)
                }
                toHex() {
                    return A(this.toRawBytes())
                }
                toString() {
                    return this.toHex()
                }
                equals(t) {
                    m(t);
                    const e = this.ep,
                        r = t.ep,
                        n = H(e.x * r.y) === H(e.y * r.x),
                        i = H(e.y * r.y) === H(e.x * r.x);
                    return n || i
                }
                add(t) {
                    return m(t), new w(this.ep.add(t.ep))
                }
                subtract(t) {
                    return m(t), new w(this.ep.subtract(t.ep))
                }
                multiply(t) {
                    return new w(this.ep.multiply(t))
                }
                multiplyUnsafe(t) {
                    return new w(this.ep.multiplyUnsafe(t))
                }
            }
            w.BASE = new w(y.BASE), w.ZERO = new w(y.ZERO);
            const _ = new WeakMap;
            class I {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                _setWindowSize(t) {
                    this._WINDOW_SIZE = t, _.delete(this)
                }
                static fromHex(t, e = !0) {
                    const {
                        d: r,
                        P: n
                    } = a;
                    t = V(t, 32);
                    const i = t.slice();
                    i[31] = -129 & t[31];
                    const s = L(i);
                    if (e && s >= n) throw new Error("Expected 0 < hex < P");
                    if (!e && s >= h) throw new Error("Expected 0 < hex < 2**256");
                    const c = H(s * s),
                        u = H(c - o),
                        l = H(r * c + o);
                    let {
                        isValid: f,
                        value: d
                    } = j(u, l);
                    if (!f) throw new Error("Point.fromHex: invalid y coordinate");
                    const p = (d & o) === o,
                        b = 0 !== (128 & t[31]);
                    return b !== p && (d = H(-d)), new I(d, s)
                }
                static async fromPrivateKey(t) {
                    return (await J(t)).point
                }
                toRawBytes() {
                    const t = B(this.y);
                    return t[31] |= this.x & o ? 128 : 0, t
                }
                toHex() {
                    return A(this.toRawBytes())
                }
                toX25519() {
                    const {
                        y: t
                    } = this, e = H((o + t) * U(o - t));
                    return B(e)
                }
                isTorsionFree() {
                    return y.fromAffine(this).isTorsionFree()
                }
                equals(t) {
                    return this.x === t.x && this.y === t.y
                }
                negate() {
                    return new I(H(-this.x), this.y)
                }
                add(t) {
                    return y.fromAffine(this).add(y.fromAffine(t)).toAffine()
                }
                subtract(t) {
                    return this.add(t.negate())
                }
                multiply(t) {
                    return y.fromAffine(this).multiply(t, this).toAffine()
                }
            }
            I.BASE = new I(a.Gx, a.Gy), I.ZERO = new I(i, o);
            class S {
                constructor(t, e) {
                    this.r = t, this.s = e, this.assertValidity()
                }
                static fromHex(t) {
                    const e = V(t, 64),
                        r = I.fromHex(e.slice(0, 32), !1),
                        n = L(e.slice(32, 64));
                    return new S(r, n)
                }
                assertValidity() {
                    const {
                        r: t,
                        s: e
                    } = this;
                    if (!(t instanceof I)) throw new Error("Expected Point instance");
                    return X(e, a.l, !1), this
                }
                toRawBytes() {
                    const t = new Uint8Array(64);
                    return t.set(this.r.toRawBytes()), t.set(B(this.s), 32), t
                }
                toHex() {
                    return A(this.toRawBytes())
                }
            }

            function T(...t) {
                if (!t.every(t => t instanceof Uint8Array)) throw new Error("Expected Uint8Array list");
                if (1 === t.length) return t[0];
                const e = t.reduce((t, e) => t + e.length, 0),
                    r = new Uint8Array(e);
                for (let n = 0, i = 0; n < t.length; n++) {
                    const e = t[n];
                    r.set(e, i), i += e.length
                }
                return r
            }
            const x = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function A(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Uint8Array expected");
                let e = "";
                for (let r = 0; r < t.length; r++) e += x[t[r]];
                return e
            }

            function O(t) {
                if ("string" !== typeof t) throw new TypeError("hexToBytes: expected string, got " + typeof t);
                if (t.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                const e = new Uint8Array(t.length / 2);
                for (let r = 0; r < e.length; r++) {
                    const n = 2 * r,
                        i = t.slice(n, n + 2),
                        o = Number.parseInt(i, 16);
                    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
                    e[r] = o
                }
                return e
            }

            function N(t) {
                const e = 32,
                    r = t.toString(16).padStart(2 * e, "0");
                return O(r)
            }

            function B(t) {
                return N(t).reverse()
            }

            function R(t) {
                return (H(t) & o) === o
            }

            function L(t) {
                if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
                return BigInt("0x" + A(Uint8Array.from(t).reverse()))
            }
            const P = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            function C(t) {
                return H(L(t) & P)
            }

            function H(t, e = a.P) {
                const r = t % e;
                return r >= i ? r : e + r
            }

            function U(t, e = a.P) {
                if (t === i || e <= i) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = H(t, e),
                    n = e,
                    s = i,
                    c = o,
                    u = o,
                    h = i;
                while (r !== i) {
                    const t = n / r,
                        e = n % r,
                        i = s - u * t,
                        o = c - h * t;
                    n = r, r = e, s = u, c = h, u = i, h = o
                }
                const l = n;
                if (l !== o) throw new Error("invert: does not exist");
                return H(s, e)
            }

            function D(t, e = a.P) {
                const r = new Array(t.length),
                    n = t.reduce((t, n, o) => n === i ? t : (r[o] = t, H(t * n, e)), o),
                    s = U(n, e);
                return t.reduceRight((t, n, o) => n === i ? t : (r[o] = H(t * r[o], e), H(t * n, e)), s), r
            }

            function M(t, e) {
                const {
                    P: r
                } = a;
                let n = t;
                while (e-- > i) n *= n, n %= r;
                return n
            }

            function k(t) {
                const {
                    P: e
                } = a, r = BigInt(5), n = BigInt(10), i = BigInt(20), c = BigInt(40), u = BigInt(80), h = t * t % e, l = h * t % e, f = M(l, s) * l % e, d = M(f, o) * t % e, p = M(d, r) * d % e, b = M(p, n) * p % e, y = M(b, i) * b % e, v = M(y, c) * y % e, E = M(v, u) * v % e, m = M(E, u) * v % e, g = M(m, n) * p % e, w = M(g, s) * t % e;
                return {
                    pow_p_5_8: w,
                    b2: l
                }
            }

            function j(t, e) {
                const r = H(e * e * e),
                    n = H(r * r * e),
                    i = k(t * n).pow_p_5_8;
                let o = H(t * r * i);
                const s = H(e * o * o),
                    c = o,
                    u = H(o * l),
                    a = s === t,
                    h = s === H(-t),
                    f = s === H(-t * l);
                return a && (o = c), (h || f) && (o = u), R(o) && (o = H(-o)), {
                    isValid: a || h,
                    value: o
                }
            }

            function F(t) {
                return j(o, t)
            }

            function G(t) {
                return H(L(t), a.l)
            }

            function $(t, e) {
                if (t.length !== e.length) return !1;
                for (let r = 0; r < t.length; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function V(t, e) {
                const r = t instanceof Uint8Array ? Uint8Array.from(t) : O(t);
                if ("number" === typeof e && r.length !== e) throw new Error(`Expected ${e} bytes`);
                return r
            }

            function X(t, e, r = !0) {
                if (!e) throw new TypeError("Specify max value");
                if ("number" === typeof t && Number.isSafeInteger(t) && (t = BigInt(t)), "bigint" === typeof t && t < e)
                    if (r) {
                        if (i < t) return t
                    } else if (i <= t) return t;
                throw new TypeError("Expected valid scalar: 0 < scalar < max")
            }

            function Y(t) {
                return t[0] &= 248, t[31] &= 127, t[31] |= 64, t
            }

            function q(t) {
                return L(Y(V(t, 32)))
            }

            function z(t) {
                if (t = "bigint" === typeof t || "number" === typeof t ? N(X(t, h)) : V(t), 32 !== t.length) throw new Error("Expected 32 bytes");
                return t
            }

            function W(t) {
                const e = Y(t.slice(0, 32)),
                    r = t.slice(32, 64),
                    n = G(e),
                    i = I.BASE.multiply(n),
                    o = i.toRawBytes();
                return {
                    head: e,
                    prefix: r,
                    scalar: n,
                    point: i,
                    pointBytes: o
                }
            }
            let K;

            function Z(...t) {
                if ("function" !== typeof K) throw new Error("utils.sha512Sync must be set to use sync methods");
                return K(...t)
            }
            async function J(t) {
                return W(await yt.sha512(z(t)))
            }

            function Q(t) {
                return W(Z(z(t)))
            }
            async function tt(t) {
                return (await J(t)).pointBytes
            }

            function et(t) {
                return Q(t).pointBytes
            }
            async function rt(t, e) {
                t = V(t);
                const {
                    prefix: r,
                    scalar: n,
                    pointBytes: i
                } = await J(e), o = G(await yt.sha512(r, t)), s = I.BASE.multiply(o), c = G(await yt.sha512(s.toRawBytes(), i, t)), u = H(o + c * n, a.l);
                return new S(s, u).toRawBytes()
            }

            function nt(t, e) {
                t = V(t);
                const {
                    prefix: r,
                    scalar: n,
                    pointBytes: i
                } = Q(e), o = G(Z(r, t)), s = I.BASE.multiply(o), c = G(Z(s.toRawBytes(), i, t)), u = H(o + c * n, a.l);
                return new S(s, u).toRawBytes()
            }

            function it(t, e, r) {
                e = V(e), r instanceof I || (r = I.fromHex(r, !1));
                const {
                    r: n,
                    s: i
                } = t instanceof S ? t.assertValidity() : S.fromHex(t), o = y.BASE.multiplyUnsafe(i);
                return {
                    r: n,
                    s: i,
                    SB: o,
                    pub: r,
                    msg: e
                }
            }

            function ot(t, e, r, n) {
                const i = G(n),
                    o = y.fromAffine(t).multiplyUnsafe(i),
                    s = y.fromAffine(e).add(o);
                return s.subtract(r).multiplyUnsafe(a.h).equals(y.ZERO)
            }
            async function st(t, e, r) {
                const {
                    r: n,
                    SB: i,
                    msg: o,
                    pub: s
                } = it(t, e, r), c = await yt.sha512(n.toRawBytes(), s.toRawBytes(), o);
                return ot(s, n, i, c)
            }

            function ct(t, e, r) {
                const {
                    r: n,
                    SB: i,
                    msg: o,
                    pub: s
                } = it(t, e, r), c = Z(n.toRawBytes(), s.toRawBytes(), o);
                return ot(s, n, i, c)
            }
            const ut = {
                getExtendedPublicKey: Q,
                getPublicKey: et,
                sign: nt,
                verify: ct
            };
            async function at(t, e) {
                const {
                    head: r
                } = await J(t), n = I.fromHex(e).toX25519();
                return pt.scalarMult(r, n)
            }

            function ht(t, e, r) {
                const n = H(t * (e - r));
                return e = H(e - n), r = H(r + n), [e, r]
            }

            function lt(t, e) {
                const {
                    P: r
                } = a, n = X(t, r), s = X(e, r), c = BigInt(121665), u = n;
                let h, l = o,
                    f = i,
                    d = n,
                    p = o,
                    b = i;
                for (let a = BigInt(254); a >= i; a--) {
                    const t = s >> a & o;
                    b ^= t, h = ht(b, l, d), l = h[0], d = h[1], h = ht(b, f, p), f = h[0], p = h[1], b = t;
                    const e = l + f,
                        r = H(e * e),
                        n = l - f,
                        i = H(n * n),
                        y = r - i,
                        v = d + p,
                        E = d - p,
                        m = H(E * e),
                        g = H(v * n),
                        w = m + g,
                        _ = m - g;
                    d = H(w * w), p = H(u * H(_ * _)), l = H(r * i), f = H(y * (r + H(c * y)))
                }
                h = ht(b, l, d), l = h[0], d = h[1], h = ht(b, f, p), f = h[0], p = h[1];
                const {
                    pow_p_5_8: y,
                    b2: v
                } = k(f), E = H(M(y, BigInt(3)) * v);
                return H(l * E)
            }

            function ft(t) {
                return B(H(t, a.P))
            }

            function dt(t) {
                const e = V(t, 32);
                return e[31] &= 127, L(e)
            }
            I.BASE._setWindowSize(8);
            const pt = {
                    BASE_POINT_U: "0900000000000000000000000000000000000000000000000000000000000000",
                    scalarMult(t, e) {
                        const r = dt(e),
                            n = q(t),
                            o = lt(r, n);
                        if (o === i) throw new Error("Invalid private or public key received");
                        return ft(o)
                    },
                    scalarMultBase(t) {
                        return pt.scalarMult(t, pt.BASE_POINT_U)
                    }
                },
                bt = {
                    node: n,
                    web: "object" === typeof self && "crypto" in self ? self.crypto : void 0
                },
                yt = {
                    bytesToHex: A,
                    hexToBytes: O,
                    concatBytes: T,
                    getExtendedPublicKey: J,
                    mod: H,
                    invert: U,
                    TORSION_SUBGROUP: ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"],
                    hashToPrivateScalar: t => {
                        if (t = V(t), t.length < 40 || t.length > 1024) throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
                        return H(L(t), a.l - o) + o
                    },
                    randomBytes: (t = 32) => {
                        if (bt.web) return bt.web.getRandomValues(new Uint8Array(t));
                        if (bt.node) {
                            const {
                                randomBytes: e
                            } = bt.node;
                            return new Uint8Array(e(t).buffer)
                        }
                        throw new Error("The environment doesn't have randomBytes function")
                    },
                    randomPrivateKey: () => yt.randomBytes(32),
                    sha512: async (...t) => {
                        const e = T(...t);
                        if (bt.web) {
                            const t = await bt.web.subtle.digest("SHA-512", e.buffer);
                            return new Uint8Array(t)
                        }
                        if (bt.node) return Uint8Array.from(bt.node.createHash("sha512").update(e).digest());
                        throw new Error("The environment doesn't have sha512 function")
                    },
                    precompute(t = 8, e = I.BASE) {
                        const r = e.equals(I.BASE) ? e : new I(e.x, e.y);
                        return r._setWindowSize(t), r.multiply(s), r
                    },
                    sha512Sync: void 0
                };
            Object.defineProperties(yt, {
                sha512Sync: {
                    configurable: !1,
                    get() {
                        return K
                    },
                    set(t) {
                        K || (K = t)
                    }
                }
            })
        },
        "7cbf": function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e) => new n(t, e).patch;
            t.exports = i
        },
        8378: function(t, e, r) {
            "use strict";
            r.r(e),
                function(t, n) {
                    r.d(e, "default", (function() {
                        return y
                    }));
                    var i = r("f685"),
                        o = r("c86d"),
                        s = r.n(o),
                        c = r("8854"),
                        u = r("bd42"),
                        a = r("a8fc");
                    const h = [{
                            vendorId: c["d"]
                        }],
                        l = () => Promise.resolve(!(!t.navigator || !t.navigator.hid)),
                        f = () => {
                            const {
                                hid: t
                            } = navigator;
                            if (!t) throw new a["TransportError"]("navigator.hid is not supported", "HIDNotSupported");
                            return t
                        };
                    async function d() {
                        const t = await f().requestDevice({
                            filters: h
                        });
                        return Array.isArray(t) ? t : [t]
                    }
                    async function p() {
                        const t = await f().getDevices();
                        return t.filter(t => t.vendorId === c["d"])
                    }
                    async function b() {
                        const t = await p();
                        if (t.length > 0) return t[0];
                        const e = await d();
                        return e[0]
                    }
                    class y extends i["a"] {
                        constructor(t) {
                            super(), this.device = void 0, this.deviceModel = void 0, this.channel = Math.floor(65535 * Math.random()), this.packetSize = 64, this.inputs = [], this.inputCallback = void 0, this.read = () => this.inputs.length ? Promise.resolve(this.inputs.shift()) : new Promise(t => {
                                this.inputCallback = t
                            }), this.onInputReport = t => {
                                const e = n.from(t.data.buffer);
                                this.inputCallback ? (this.inputCallback(e), this.inputCallback = null) : this.inputs.push(e)
                            }, this._disconnectEmitted = !1, this._emitDisconnect = t => {
                                this._disconnectEmitted || (this._disconnectEmitted = !0, this.emit("disconnect", t))
                            }, this.exchange = t => this.exchangeAtomicImpl(async () => {
                                const {
                                    channel: e,
                                    packetSize: r
                                } = this;
                                Object(u["log"])("apdu", "=> " + t.toString("hex"));
                                const n = s()(e, r),
                                    i = n.makeBlocks(t);
                                for (let t = 0; t < i.length; t++) await this.device.sendReport(0, i[t]);
                                let o, c;
                                while (!(o = n.getReducedResult(c))) {
                                    const t = await this.read();
                                    c = n.reduceResponse(c, t)
                                }
                                return Object(u["log"])("apdu", "<= " + o.toString("hex")), o
                            }).catch(t => {
                                if (t && t.message && t.message.includes("write")) throw this._emitDisconnect(t), new a["DisconnectedDeviceDuringOperation"](t.message);
                                throw t
                            }), this.device = t, this.deviceModel = Object(c["c"])(t.productId), t.addEventListener("inputreport", this.onInputReport)
                        }
                        static async request() {
                            const [t] = await d();
                            return y.open(t)
                        }
                        static async openConnected() {
                            const t = await p();
                            return 0 === t.length ? null : y.open(t[0])
                        }
                        static async open(t) {
                            await t.open();
                            const e = new y(t),
                                r = n => {
                                    t === n.device && (f().removeEventListener("disconnect", r), e._emitDisconnect(new a["DisconnectedDevice"]))
                                };
                            return f().addEventListener("disconnect", r), e
                        }
                        async close() {
                            await this.exchangeBusyPromise, this.device.removeEventListener("inputreport", this.onInputReport), await this.device.close()
                        }
                        setScrambleKey() {}
                    }
                    y.isSupported = l, y.list = p, y.listen = t => {
                        let e = !1;

                        function r() {
                            e = !0
                        }
                        return b().then(r => {
                            if (r) {
                                if (!e) {
                                    const e = Object(c["c"])(r.productId);
                                    t.next({
                                        type: "add",
                                        descriptor: r,
                                        deviceModel: e
                                    }), t.complete()
                                }
                            } else t.error(new a["TransportOpenUserCancelled"]("Access denied to use Ledger device"))
                        }, e => {
                            t.error(new a["TransportOpenUserCancelled"](e.message))
                        }), {
                            unsubscribe: r
                        }
                    }
                }.call(this, r("c8ba"), r("b639").Buffer)
        },
        "83e2": function(t, e) {
            const r = Object.freeze({
                    loose: !0
                }),
                n = Object.freeze({}),
                i = t => t ? "object" !== typeof t ? r : t : n;
            t.exports = i
        },
        8409: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return I
            }));
            var n = r("9ab4"),
                i = r("8a94"),
                o = r("21ce"),
                s = r("a393"),
                c = function() {
                    function t() {
                        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                u = c,
                a = function(t) {
                    function e(e, r) {
                        var n = t.call(this) || this;
                        return n.subject = e, n.subscriber = r, n.closed = !1, n
                    }
                    return n["__extends"](e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var r = e.indexOf(this.subscriber); - 1 !== r && e.splice(r, 1)
                            }
                        }
                    }, e
                }(s["a"]),
                h = r("ae50"),
                l = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.destination = e, r
                    }
                    return n["__extends"](e, t), e
                }(o["a"]),
                f = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return n["__extends"](e, t), e.prototype[h["a"]] = function() {
                        return new l(this)
                    }, e.prototype.lift = function(t) {
                        var e = new d(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed) throw new u;
                        if (!this.isStopped)
                            for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed) throw new u;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed) throw new u;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, r = t.slice(), n = 0; n < e; n++) r[n].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed) throw new u;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed) throw new u;
                        return this.hasError ? (t.error(this.thrownError), s["a"].EMPTY) : this.isStopped ? (t.complete(), s["a"].EMPTY) : (this.observers.push(t), new a(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new i["a"];
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new d(t, e)
                    }, e
                }(i["a"]),
                d = function(t) {
                    function e(e, r) {
                        var n = t.call(this) || this;
                        return n.destination = e, n.source = r, n
                    }
                    return n["__extends"](e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        var e = this.source;
                        return e ? this.source.subscribe(t) : s["a"].EMPTY
                    }, e
                }(f);

            function p() {
                return function(t) {
                    return t.lift(new b(t))
                }
            }
            var b = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var r = this.connectable;
                        r._refCount++;
                        var n = new y(t, r),
                            i = e.subscribe(n);
                        return n.closed || (n.connection = r.connect()), i
                    }, t
                }(),
                y = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.connectable = r, n
                    }
                    return n["__extends"](e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var r = this.connection,
                                    n = t._connection;
                                this.connection = null, !n || r && n !== r || n.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(o["a"]),
                v = function(t) {
                    function e(e, r) {
                        var n = t.call(this) || this;
                        return n.source = e, n.subjectFactory = r, n._refCount = 0, n._isComplete = !1, n
                    }
                    return n["__extends"](e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, t = this._connection = new s["a"], t.add(this.source.subscribe(new m(this.getSubject(), this))), t.closed && (this._connection = null, t = s["a"].EMPTY)), t
                    }, e.prototype.refCount = function() {
                        return p()(this)
                    }, e
                }(i["a"]),
                E = function() {
                    var t = v.prototype;
                    return {
                        operator: {
                            value: null
                        },
                        _refCount: {
                            value: 0,
                            writable: !0
                        },
                        _subject: {
                            value: null,
                            writable: !0
                        },
                        _connection: {
                            value: null,
                            writable: !0
                        },
                        _subscribe: {
                            value: t._subscribe
                        },
                        _isComplete: {
                            value: t._isComplete,
                            writable: !0
                        },
                        getSubject: {
                            value: t.getSubject
                        },
                        connect: {
                            value: t.connect
                        },
                        refCount: {
                            value: t.refCount
                        }
                    }
                }(),
                m = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.connectable = r, n
                    }
                    return n["__extends"](e, t), e.prototype._error = function(e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(l);
            o["a"];

            function g(t, e) {
                return function(r) {
                    var n;
                    if (n = "function" === typeof t ? t : function() {
                            return t
                        }, "function" === typeof e) return r.lift(new w(n, e));
                    var i = Object.create(r, E);
                    return i.source = r, i.subjectFactory = n, i
                }
            }
            var w = function() {
                function t(t, e) {
                    this.subjectFactory = t, this.selector = e
                }
                return t.prototype.call = function(t, e) {
                    var r = this.selector,
                        n = this.subjectFactory(),
                        i = r(n).subscribe(t);
                    return i.add(e.subscribe(n)), i
                }, t
            }();

            function _() {
                return new f
            }

            function I() {
                return function(t) {
                    return p()(g(_)(t))
                }
            }
        },
        8854: function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return c
            })), r.d(e, "c", (function() {
                return u
            })), r.d(e, "a", (function() {
                return l
            })), r.d(e, "b", (function() {
                return f
            }));
            var n = r("392f"),
                i = r.n(n);
            const o = {
                    blue: {
                        id: "blue",
                        productName: "Ledger Blue",
                        productIdMM: 0,
                        legacyUsbProductId: 0,
                        usbOnly: !0,
                        memorySize: 491520,
                        blockSize: 4096,
                        getBlockSize: t => 4096
                    },
                    nanoS: {
                        id: "nanoS",
                        productName: "Ledger Nano S",
                        productIdMM: 16,
                        legacyUsbProductId: 1,
                        usbOnly: !0,
                        memorySize: 327680,
                        blockSize: 4096,
                        getBlockSize: t => i.a.lt(i.a.coerce(t), "2.0.0") ? 4096 : 2048
                    },
                    nanoX: {
                        id: "nanoX",
                        productName: "Ledger Nano X",
                        productIdMM: 64,
                        legacyUsbProductId: 4,
                        usbOnly: !1,
                        memorySize: 2097152,
                        blockSize: 4096,
                        getBlockSize: t => 4096,
                        bluetoothSpec: [{
                            serviceUuid: "d973f2e0-b19e-11e2-9e96-0800200c9a66",
                            notifyUuid: "d973f2e1-b19e-11e2-9e96-0800200c9a66",
                            writeUuid: "d973f2e2-b19e-11e2-9e96-0800200c9a66"
                        }, {
                            serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
                            notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
                            writeUuid: "13d63400-2c97-0004-0002-4c6564676572"
                        }]
                    }
                },
                s = Object.values(o),
                c = 11415,
                u = t => {
                    const e = s.find(e => e.legacyUsbProductId === t);
                    if (e) return e;
                    const r = t >> 8,
                        n = s.find(t => t.productIdMM === r);
                    return n
                },
                a = [],
                h = {};
            for (let d in o) {
                const t = o[d],
                    {
                        bluetoothSpec: e
                    } = t;
                if (e)
                    for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        a.push(n.serviceUuid), h[n.serviceUuid] = h[n.serviceUuid.replace(/-/g, "")] = {
                            deviceModel: t,
                            ...n
                        }
                    }
            }
            const l = () => a,
                f = t => h[t.toLowerCase()]
        },
        "8a94": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return f
            }));
            var n = r("21ce");

            function i(t) {
                while (t) {
                    var e = t,
                        r = e.closed,
                        i = e.destination,
                        o = e.isStopped;
                    if (r || o) return !1;
                    t = i && i instanceof n["a"] ? i : null
                }
                return !0
            }
            var o = r("ae50"),
                s = r("61bb");

            function c(t, e, r) {
                if (t) {
                    if (t instanceof n["a"]) return t;
                    if (t[o["a"]]) return t[o["a"]]()
                }
                return t || e || r ? new n["a"](t, e, r) : new n["a"](s["a"])
            }
            var u = r("4cf8"),
                a = r("3cdb");

            function h(t) {
                return 0 === t.length ? a["a"] : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }), e)
                }
            }
            var l = r("31a6"),
                f = function() {
                    function t(t) {
                        this._isScalar = !1, t && (this._subscribe = t)
                    }
                    return t.prototype.lift = function(e) {
                        var r = new t;
                        return r.source = this, r.operator = e, r
                    }, t.prototype.subscribe = function(t, e, r) {
                        var n = this.operator,
                            i = c(t, e, r);
                        if (n ? i.add(n.call(i, this.source)) : i.add(this.source || l["a"].useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), l["a"].useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                        return i
                    }, t.prototype._trySubscribe = function(t) {
                        try {
                            return this._subscribe(t)
                        } catch (e) {
                            l["a"].useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), i(t) ? t.error(e) : console.warn(e)
                        }
                    }, t.prototype.forEach = function(t, e) {
                        var r = this;
                        return e = d(e), new e((function(e, n) {
                            var i;
                            i = r.subscribe((function(e) {
                                try {
                                    t(e)
                                } catch (r) {
                                    n(r), i && i.unsubscribe()
                                }
                            }), n, e)
                        }))
                    }, t.prototype._subscribe = function(t) {
                        var e = this.source;
                        return e && e.subscribe(t)
                    }, t.prototype[u["a"]] = function() {
                        return this
                    }, t.prototype.pipe = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return 0 === t.length ? this : h(t)(this)
                    }, t.prototype.toPromise = function(t) {
                        var e = this;
                        return t = d(t), new t((function(t, r) {
                            var n;
                            e.subscribe((function(t) {
                                return n = t
                            }), (function(t) {
                                return r(t)
                            }), (function() {
                                return t(n)
                            }))
                        }))
                    }, t.create = function(e) {
                        return new t(e)
                    }, t
                }();

            function d(t) {
                if (t || (t = l["a"].Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }
        },
        "8acd": function(t, e, r) {
            const n = r("2ae6"),
                i = (t, e) => {
                    const r = n(t.trim().replace(/^[=v]+/, ""), e);
                    return r ? r.version : null
                };
            t.exports = i
        },
        9074: function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => 0 !== n(t, e, r);
            t.exports = i
        },
        "913b": function(t, e, r) {
            const n = r("c2a4"),
                i = r("2ae6"),
                {
                    safeRe: o,
                    t: s
                } = r("0d26"),
                c = (t, e) => {
                    if (t instanceof n) return t;
                    if ("number" === typeof t && (t = String(t)), "string" !== typeof t) return null;
                    e = e || {};
                    let r = null;
                    if (e.rtl) {
                        const n = e.includePrerelease ? o[s.COERCERTLFULL] : o[s.COERCERTL];
                        let i;
                        while ((i = n.exec(t)) && (!r || r.index + r[0].length !== t.length)) r && i.index + i[0].length === r.index + r[0].length || (r = i), n.lastIndex = i.index + i[1].length + i[2].length;
                        n.lastIndex = -1
                    } else r = t.match(e.includePrerelease ? o[s.COERCEFULL] : o[s.COERCE]);
                    if (null === r) return null;
                    const c = r[2],
                        u = r[3] || "0",
                        a = r[4] || "0",
                        h = e.includePrerelease && r[5] ? "-" + r[5] : "",
                        l = e.includePrerelease && r[6] ? "+" + r[6] : "";
                    return i(`${c}.${u}.${a}${h}${l}`, e)
                };
            t.exports = c
        },
        "95f3": function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return o
            })), r.d(e, "b", (function() {
                return s
            })), r.d(e, "a", (function() {
                return c
            })), r.d(e, "c", (function() {
                return u
            }));
            var n = r("8854");
            const i = [{
                vendorId: n["d"]
            }];
            async function o() {
                const t = await navigator.usb.requestDevice({
                    filters: i
                });
                return t
            }
            async function s() {
                const t = await navigator.usb.getDevices();
                return t.filter(t => t.vendorId === n["d"])
            }
            async function c() {
                const t = await s();
                return t.length > 0 ? t[0] : o()
            }
            const u = () => Promise.resolve(!!navigator && !!navigator.usb && "function" === typeof navigator.usb.getDevices)
        },
        "993b": function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SHA2 = void 0;
            const n = r("b40a"),
                i = r("531d");

            function o(t, e, r, n) {
                if ("function" === typeof t.setBigUint64) return t.setBigUint64(e, r, n);
                const i = BigInt(32),
                    o = BigInt(4294967295),
                    s = Number(r >> i & o),
                    c = Number(r & o),
                    u = n ? 4 : 0,
                    a = n ? 0 : 4;
                t.setUint32(e + u, s, n), t.setUint32(e + a, c, n)
            }
            class s extends i.Hash {
                constructor(t, e, r, n) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, i.createView)(this.buffer)
                }
                update(t) {
                    n.default.exists(this);
                    const {
                        view: e,
                        buffer: r,
                        blockLen: o
                    } = this;
                    t = (0, i.toBytes)(t);
                    const s = t.length;
                    for (let n = 0; n < s;) {
                        const c = Math.min(o - this.pos, s - n);
                        if (c !== o) r.set(t.subarray(n, n + c), this.pos), this.pos += c, n += c, this.pos === o && (this.process(e, 0), this.pos = 0);
                        else {
                            const e = (0, i.createView)(t);
                            for (; o <= s - n; n += o) this.process(e, n)
                        }
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    n.default.exists(this), n.default.output(t, this), this.finished = !0;
                    const {
                        buffer: e,
                        view: r,
                        blockLen: s,
                        isLE: c
                    } = this;
                    let {
                        pos: u
                    } = this;
                    e[u++] = 128, this.buffer.subarray(u).fill(0), this.padOffset > s - u && (this.process(r, 0), u = 0);
                    for (let n = u; n < s; n++) e[n] = 0;
                    o(r, s - 8, BigInt(8 * this.length), c), this.process(r, 0);
                    const a = (0, i.createView)(t);
                    this.get().forEach((t, e) => a.setUint32(4 * e, t, c))
                }
                digest() {
                    const {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    const r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    const {
                        blockLen: e,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: s
                    } = this;
                    return t.length = n, t.pos = s, t.finished = i, t.destroyed = o, n % e && t.buffer.set(r), t
                }
            }
            e.SHA2 = s
        },
        9965: function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => n(e, t, r);
            t.exports = i
        },
        a393: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return u
            }));
            var n = function() {
                    return Array.isArray || function(t) {
                        return t && "number" === typeof t.length
                    }
                }(),
                i = r("b92d"),
                o = r("746b"),
                s = function() {
                    function t(t) {
                        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                            return e + 1 + ") " + t.toString()
                        })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                c = s,
                u = function() {
                    function t(t) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                    }
                    return t.prototype.unsubscribe = function() {
                        var e;
                        if (!this.closed) {
                            var r = this,
                                s = r._parentOrParents,
                                u = r._ctorUnsubscribe,
                                h = r._unsubscribe,
                                l = r._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, s instanceof t) s.remove(this);
                            else if (null !== s)
                                for (var f = 0; f < s.length; ++f) {
                                    var d = s[f];
                                    d.remove(this)
                                }
                            if (Object(o["a"])(h)) {
                                u && (this._unsubscribe = void 0);
                                try {
                                    h.call(this)
                                } catch (y) {
                                    e = y instanceof c ? a(y.errors) : [y]
                                }
                            }
                            if (n(l)) {
                                f = -1;
                                var p = l.length;
                                while (++f < p) {
                                    var b = l[f];
                                    if (Object(i["a"])(b)) try {
                                        b.unsubscribe()
                                    } catch (y) {
                                        e = e || [], y instanceof c ? e = e.concat(a(y.errors)) : e.push(y)
                                    }
                                }
                            }
                            if (e) throw new c(e)
                        }
                    }, t.prototype.add = function(e) {
                        var r = e;
                        if (!e) return t.EMPTY;
                        switch (typeof e) {
                            case "function":
                                r = new t(e);
                            case "object":
                                if (r === this || r.closed || "function" !== typeof r.unsubscribe) return r;
                                if (this.closed) return r.unsubscribe(), r;
                                if (!(r instanceof t)) {
                                    var n = r;
                                    r = new t, r._subscriptions = [n]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        var i = r._parentOrParents;
                        if (null === i) r._parentOrParents = this;
                        else if (i instanceof t) {
                            if (i === this) return r;
                            r._parentOrParents = [i, this]
                        } else {
                            if (-1 !== i.indexOf(this)) return r;
                            i.push(this)
                        }
                        var o = this._subscriptions;
                        return null === o ? this._subscriptions = [r] : o.push(r), r
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
                        }
                    }, t.EMPTY = function(t) {
                        return t.closed = !0, t
                    }(new t), t
                }();

            function a(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof c ? e.errors : e)
                }), [])
            }
        },
        a8fc: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "AccountNameRequiredError", (function() {
                return h
            })), r.d(e, "AccountNotSupported", (function() {
                return l
            })), r.d(e, "AmountRequired", (function() {
                return f
            })), r.d(e, "BluetoothRequired", (function() {
                return d
            })), r.d(e, "BtcUnmatchedApp", (function() {
                return p
            })), r.d(e, "CantOpenDevice", (function() {
                return b
            })), r.d(e, "CantScanQRCode", (function() {
                return Dt
            })), r.d(e, "CashAddrNotSupported", (function() {
                return y
            })), r.d(e, "CurrencyNotSupported", (function() {
                return v
            })), r.d(e, "DBNotReset", (function() {
                return Wt
            })), r.d(e, "DBWrongPassword", (function() {
                return zt
            })), r.d(e, "DeviceAppVerifyNotSupported", (function() {
                return E
            })), r.d(e, "DeviceGenuineSocketEarlyClose", (function() {
                return m
            })), r.d(e, "DeviceHalted", (function() {
                return S
            })), r.d(e, "DeviceInOSUExpected", (function() {
                return I
            })), r.d(e, "DeviceNameInvalid", (function() {
                return T
            })), r.d(e, "DeviceNotGenuineError", (function() {
                return g
            })), r.d(e, "DeviceOnDashboardExpected", (function() {
                return w
            })), r.d(e, "DeviceOnDashboardUnexpected", (function() {
                return _
            })), r.d(e, "DeviceShouldStayInApp", (function() {
                return Rt
            })), r.d(e, "DeviceSocketFail", (function() {
                return x
            })), r.d(e, "DeviceSocketNoBulkStatus", (function() {
                return A
            })), r.d(e, "DisconnectedDevice", (function() {
                return O
            })), r.d(e, "DisconnectedDeviceDuringOperation", (function() {
                return N
            })), r.d(e, "ETHAddressNonEIP", (function() {
                return Ut
            })), r.d(e, "EnpointConfigError", (function() {
                return B
            })), r.d(e, "EthAppPleaseEnableContractData", (function() {
                return R
            })), r.d(e, "FeeEstimationFailed", (function() {
                return L
            })), r.d(e, "FeeNotLoaded", (function() {
                return Mt
            })), r.d(e, "FeeRequired", (function() {
                return kt
            })), r.d(e, "FeeTooHigh", (function() {
                return jt
            })), r.d(e, "FirmwareNotRecognized", (function() {
                return P
            })), r.d(e, "FirmwareOrAppUpdateRequired", (function() {
                return Yt
            })), r.d(e, "GasLessThanEstimate", (function() {
                return ct
            })), r.d(e, "GenuineCheckFailed", (function() {
                return $t
            })), r.d(e, "HardResetFail", (function() {
                return C
            })), r.d(e, "InvalidAddress", (function() {
                return U
            })), r.d(e, "InvalidAddressBecauseDestinationIsAlsoSource", (function() {
                return D
            })), r.d(e, "InvalidXRPTag", (function() {
                return H
            })), r.d(e, "LatestMCUInstalledError", (function() {
                return M
            })), r.d(e, "LedgerAPI4xx", (function() {
                return Vt
            })), r.d(e, "LedgerAPI5xx", (function() {
                return Xt
            })), r.d(e, "LedgerAPIError", (function() {
                return j
            })), r.d(e, "LedgerAPIErrorWithMessage", (function() {
                return F
            })), r.d(e, "LedgerAPINotAvailable", (function() {
                return G
            })), r.d(e, "MCUNotGenuineToDashboard", (function() {
                return pt
            })), r.d(e, "ManagerAppAlreadyInstalledError", (function() {
                return $
            })), r.d(e, "ManagerAppDepInstallRequired", (function() {
                return X
            })), r.d(e, "ManagerAppDepUninstallRequired", (function() {
                return Y
            })), r.d(e, "ManagerAppRelyOnBTCError", (function() {
                return V
            })), r.d(e, "ManagerDeviceLockedError", (function() {
                return q
            })), r.d(e, "ManagerFirmwareNotEnoughSpaceError", (function() {
                return z
            })), r.d(e, "ManagerNotEnoughSpaceError", (function() {
                return W
            })), r.d(e, "ManagerUninstallBTCDep", (function() {
                return K
            })), r.d(e, "NetworkDown", (function() {
                return Z
            })), r.d(e, "NoAccessToCamera", (function() {
                return it
            })), r.d(e, "NoAddressesFound", (function() {
                return J
            })), r.d(e, "NoDBPathGiven", (function() {
                return qt
            })), r.d(e, "NotEnoughBalance", (function() {
                return Q
            })), r.d(e, "NotEnoughBalanceBecauseDestinationNotCreated", (function() {
                return nt
            })), r.d(e, "NotEnoughBalanceInParentAccount", (function() {
                return et
            })), r.d(e, "NotEnoughBalanceToDelegate", (function() {
                return tt
            })), r.d(e, "NotEnoughGas", (function() {
                return ot
            })), r.d(e, "NotEnoughSpendableBalance", (function() {
                return rt
            })), r.d(e, "NotSupportedLegacyAddress", (function() {
                return st
            })), r.d(e, "PairingFailed", (function() {
                return Gt
            })), r.d(e, "PasswordIncorrectError", (function() {
                return at
            })), r.d(e, "PasswordsDontMatchError", (function() {
                return ut
            })), r.d(e, "RecipientRequired", (function() {
                return bt
            })), r.d(e, "RecommendSubAccountsToEmpty", (function() {
                return ht
            })), r.d(e, "RecommendUndelegation", (function() {
                return lt
            })), r.d(e, "StatusCodes", (function() {
                return Zt
            })), r.d(e, "SyncError", (function() {
                return Ft
            })), r.d(e, "TimeoutTagged", (function() {
                return ft
            })), r.d(e, "TransportError", (function() {
                return Kt
            })), r.d(e, "TransportInterfaceNotAvailable", (function() {
                return Ot
            })), r.d(e, "TransportOpenUserCancelled", (function() {
                return At
            })), r.d(e, "TransportRaceCondition", (function() {
                return Nt
            })), r.d(e, "TransportStatusError", (function() {
                return Qt
            })), r.d(e, "TransportWebUSBGestureRequired", (function() {
                return Bt
            })), r.d(e, "UnavailableTezosOriginatedAccountReceive", (function() {
                return yt
            })), r.d(e, "UnavailableTezosOriginatedAccountSend", (function() {
                return vt
            })), r.d(e, "UnexpectedBootloader", (function() {
                return dt
            })), r.d(e, "UnknownMCU", (function() {
                return k
            })), r.d(e, "UpdateFetchFileFail", (function() {
                return Et
            })), r.d(e, "UpdateIncorrectHash", (function() {
                return mt
            })), r.d(e, "UpdateIncorrectSig", (function() {
                return gt
            })), r.d(e, "UpdateYourApp", (function() {
                return wt
            })), r.d(e, "UserRefusedAddress", (function() {
                return It
            })), r.d(e, "UserRefusedAllowManager", (function() {
                return Tt
            })), r.d(e, "UserRefusedDeviceNameChange", (function() {
                return _t
            })), r.d(e, "UserRefusedFirmwareUpdate", (function() {
                return St
            })), r.d(e, "UserRefusedOnDevice", (function() {
                return xt
            })), r.d(e, "WebsocketConnectionError", (function() {
                return Lt
            })), r.d(e, "WebsocketConnectionFailed", (function() {
                return Pt
            })), r.d(e, "WrongAppForCurrency", (function() {
                return Ht
            })), r.d(e, "WrongDeviceForAccount", (function() {
                return Ct
            })), r.d(e, "addCustomErrorDeserializer", (function() {
                return o
            })), r.d(e, "createCustomErrorClass", (function() {
                return s
            })), r.d(e, "deserializeError", (function() {
                return c
            })), r.d(e, "getAltStatusMessage", (function() {
                return Jt
            })), r.d(e, "serializeError", (function() {
                return u
            }));
            var n = {},
                i = {},
                o = function(t, e) {
                    i[t] = e
                },
                s = function(t) {
                    var e = function(e, r) {
                        Object.assign(this, r), this.name = t, this.message = e || t, this.stack = (new Error).stack
                    };
                    return e.prototype = new Error, n[t] = e, e
                },
                c = function(t) {
                    if ("object" === typeof t && t) {
                        try {
                            var e = JSON.parse(t.message);
                            e.message && e.name && (t = e)
                        } catch (l) {}
                        var r = void 0;
                        if ("string" === typeof t.name) {
                            var o = t.name,
                                u = i[o];
                            if (u) r = u(t);
                            else {
                                var a = "Error" === o ? Error : n[o];
                                a || (console.warn("deserializing an unknown class '" + o + "'"), a = s(o)), r = Object.create(a.prototype);
                                try {
                                    for (var h in t) t.hasOwnProperty(h) && (r[h] = t[h])
                                } catch (l) {}
                            }
                        } else r = new Error(t.message);
                        return !r.stack && Error.captureStackTrace && Error.captureStackTrace(r, c), r
                    }
                    return new Error(String(t))
                },
                u = function(t) {
                    return t ? "object" === typeof t ? a(t, []) : "function" === typeof t ? "[Function: " + (t.name || "anonymous") + "]" : t : t
                };

            function a(t, e) {
                var r = {};
                e.push(t);
                for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                    var o = i[n],
                        s = t[o];
                    "function" !== typeof s && (s && "object" === typeof s ? -1 !== e.indexOf(t[o]) ? r[o] = "[Circular]" : r[o] = a(t[o], e.slice(0)) : r[o] = s)
                }
                return "string" === typeof t.name && (r.name = t.name), "string" === typeof t.message && (r.message = t.message), "string" === typeof t.stack && (r.stack = t.stack), r
            }
            var h = s("AccountNameRequired"),
                l = s("AccountNotSupported"),
                f = s("AmountRequired"),
                d = s("BluetoothRequired"),
                p = s("BtcUnmatchedApp"),
                b = s("CantOpenDevice"),
                y = s("CashAddrNotSupported"),
                v = s("CurrencyNotSupported"),
                E = s("DeviceAppVerifyNotSupported"),
                m = s("DeviceGenuineSocketEarlyClose"),
                g = s("DeviceNotGenuine"),
                w = s("DeviceOnDashboardExpected"),
                _ = s("DeviceOnDashboardUnexpected"),
                I = s("DeviceInOSUExpected"),
                S = s("DeviceHalted"),
                T = s("DeviceNameInvalid"),
                x = s("DeviceSocketFail"),
                A = s("DeviceSocketNoBulkStatus"),
                O = s("DisconnectedDevice"),
                N = s("DisconnectedDeviceDuringOperation"),
                B = s("EnpointConfig"),
                R = s("EthAppPleaseEnableContractData"),
                L = s("FeeEstimationFailed"),
                P = s("FirmwareNotRecognized"),
                C = s("HardResetFail"),
                H = s("InvalidXRPTag"),
                U = s("InvalidAddress"),
                D = s("InvalidAddressBecauseDestinationIsAlsoSource"),
                M = s("LatestMCUInstalledError"),
                k = s("UnknownMCU"),
                j = s("LedgerAPIError"),
                F = s("LedgerAPIErrorWithMessage"),
                G = s("LedgerAPINotAvailable"),
                $ = s("ManagerAppAlreadyInstalled"),
                V = s("ManagerAppRelyOnBTC"),
                X = s("ManagerAppDepInstallRequired"),
                Y = s("ManagerAppDepUninstallRequired"),
                q = s("ManagerDeviceLocked"),
                z = s("ManagerFirmwareNotEnoughSpace"),
                W = s("ManagerNotEnoughSpace"),
                K = s("ManagerUninstallBTCDep"),
                Z = s("NetworkDown"),
                J = s("NoAddressesFound"),
                Q = s("NotEnoughBalance"),
                tt = s("NotEnoughBalanceToDelegate"),
                et = s("NotEnoughBalanceInParentAccount"),
                rt = s("NotEnoughSpendableBalance"),
                nt = s("NotEnoughBalanceBecauseDestinationNotCreated"),
                it = s("NoAccessToCamera"),
                ot = s("NotEnoughGas"),
                st = s("NotSupportedLegacyAddress"),
                ct = s("GasLessThanEstimate"),
                ut = s("PasswordsDontMatch"),
                at = s("PasswordIncorrect"),
                ht = s("RecommendSubAccountsToEmpty"),
                lt = s("RecommendUndelegation"),
                ft = s("TimeoutTagged"),
                dt = s("UnexpectedBootloader"),
                pt = s("MCUNotGenuineToDashboard"),
                bt = s("RecipientRequired"),
                yt = s("UnavailableTezosOriginatedAccountReceive"),
                vt = s("UnavailableTezosOriginatedAccountSend"),
                Et = s("UpdateFetchFileFail"),
                mt = s("UpdateIncorrectHash"),
                gt = s("UpdateIncorrectSig"),
                wt = s("UpdateYourApp"),
                _t = s("UserRefusedDeviceNameChange"),
                It = s("UserRefusedAddress"),
                St = s("UserRefusedFirmwareUpdate"),
                Tt = s("UserRefusedAllowManager"),
                xt = s("UserRefusedOnDevice"),
                At = s("TransportOpenUserCancelled"),
                Ot = s("TransportInterfaceNotAvailable"),
                Nt = s("TransportRaceCondition"),
                Bt = s("TransportWebUSBGestureRequired"),
                Rt = s("DeviceShouldStayInApp"),
                Lt = s("WebsocketConnectionError"),
                Pt = s("WebsocketConnectionFailed"),
                Ct = s("WrongDeviceForAccount"),
                Ht = s("WrongAppForCurrency"),
                Ut = s("ETHAddressNonEIP"),
                Dt = s("CantScanQRCode"),
                Mt = s("FeeNotLoaded"),
                kt = s("FeeRequired"),
                jt = s("FeeTooHigh"),
                Ft = s("SyncError"),
                Gt = s("PairingFailed"),
                $t = s("GenuineCheckFailed"),
                Vt = s("LedgerAPI4xx"),
                Xt = s("LedgerAPI5xx"),
                Yt = s("FirmwareOrAppUpdateRequired"),
                qt = s("NoDBPathGiven"),
                zt = s("DBWrongPassword"),
                Wt = s("DBNotReset");

            function Kt(t, e) {
                this.name = "TransportError", this.message = t, this.stack = (new Error).stack, this.id = e
            }
            Kt.prototype = new Error, o("TransportError", (function(t) {
                return new Kt(t.message, t.id)
            }));
            var Zt = {
                PIN_REMAINING_ATTEMPTS: 25536,
                INCORRECT_LENGTH: 26368,
                MISSING_CRITICAL_PARAMETER: 26624,
                COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
                SECURITY_STATUS_NOT_SATISFIED: 27010,
                CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
                INCORRECT_DATA: 27264,
                NOT_ENOUGH_MEMORY_SPACE: 27268,
                REFERENCED_DATA_NOT_FOUND: 27272,
                FILE_ALREADY_EXISTS: 27273,
                INCORRECT_P1_P2: 27392,
                INS_NOT_SUPPORTED: 27904,
                CLA_NOT_SUPPORTED: 28160,
                TECHNICAL_PROBLEM: 28416,
                OK: 36864,
                MEMORY_PROBLEM: 37440,
                NO_EF_SELECTED: 37888,
                INVALID_OFFSET: 37890,
                FILE_NOT_FOUND: 37892,
                INCONSISTENT_FILE: 37896,
                ALGORITHM_NOT_SUPPORTED: 38020,
                INVALID_KCV: 38021,
                CODE_NOT_INITIALIZED: 38914,
                ACCESS_CONDITION_NOT_FULFILLED: 38916,
                CONTRADICTION_SECRET_CODE_STATUS: 38920,
                CONTRADICTION_INVALIDATION: 38928,
                CODE_BLOCKED: 38976,
                MAX_VALUE_REACHED: 38992,
                GP_AUTH_FAILED: 25344,
                LICENSING: 28482,
                HALTED: 28586
            };

            function Jt(t) {
                switch (t) {
                    case 26368:
                        return "Incorrect length";
                    case 26624:
                        return "Missing critical parameter";
                    case 27010:
                        return "Security not satisfied (dongle locked or have invalid access rights)";
                    case 27013:
                        return "Condition of use not satisfied (denied by the user?)";
                    case 27264:
                        return "Invalid data received";
                    case 27392:
                        return "Invalid parameter received"
                }
                if (28416 <= t && t <= 28671) return "Internal error, please report"
            }

            function Qt(t) {
                this.name = "TransportStatusError";
                var e = Object.keys(Zt).find((function(e) {
                        return Zt[e] === t
                    })) || "UNKNOWN_ERROR",
                    r = Jt(t) || e,
                    n = t.toString(16);
                this.message = "Ledger device: " + r + " (0x" + n + ")", this.stack = (new Error).stack, this.statusCode = t, this.statusText = e
            }
            Qt.prototype = new Error, o("TransportStatusError", (function(t) {
                return new Qt(t.statusCode)
            }))
        },
        ae50: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = function() {
                return "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
            }()
        },
        afe4: function(t, e, r) {
            "use strict";
            r.r(e),
                function(t) {
                    r.d(e, "default", (function() {
                        return f
                    }));
                    var n = r("f685"),
                        i = r("c86d"),
                        o = r.n(i),
                        s = r("8854"),
                        c = r("bd42"),
                        u = r("a8fc"),
                        a = r("95f3");
                    const h = 1,
                        l = 3;
                    class f extends n["a"] {
                        constructor(e, r) {
                            super(), this.device = void 0, this.deviceModel = void 0, this.channel = Math.floor(65535 * Math.random()), this.packetSize = 64, this.interfaceNumber = void 0, this._disconnectEmitted = !1, this._emitDisconnect = t => {
                                this._disconnectEmitted || (this._disconnectEmitted = !0, this.emit("disconnect", t))
                            }, this.exchange = e => this.exchangeAtomicImpl(async () => {
                                const {
                                    channel: r,
                                    packetSize: n
                                } = this;
                                Object(c["log"])("apdu", "=> " + e.toString("hex"));
                                const i = o()(r, n),
                                    s = i.makeBlocks(e);
                                for (let t = 0; t < s.length; t++) await this.device.transferOut(l, s[t]);
                                let u, a;
                                while (!(u = i.getReducedResult(a))) {
                                    const e = await this.device.transferIn(l, n),
                                        r = t.from(e.data.buffer);
                                    a = i.reduceResponse(a, r)
                                }
                                return Object(c["log"])("apdu", "<= " + u.toString("hex")), u
                            }).catch(t => {
                                if (t && t.message && t.message.includes("disconnected")) throw this._emitDisconnect(t), new u["DisconnectedDeviceDuringOperation"](t.message);
                                throw t
                            }), this.device = e, this.interfaceNumber = r, this.deviceModel = Object(s["c"])(e.productId)
                        }
                        static async request() {
                            const t = await Object(a["d"])();
                            return f.open(t)
                        }
                        static async openConnected() {
                            const t = await Object(a["b"])();
                            return 0 === t.length ? null : f.open(t[0])
                        }
                        static async open(t) {
                            await t.open(), null === t.configuration && await t.selectConfiguration(h), await d(t);
                            const e = t.configurations[0].interfaces.find(({
                                alternates: t
                            }) => t.some(t => 255 === t.interfaceClass));
                            if (!e) throw new u["TransportInterfaceNotAvailable"]("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");
                            const r = e.interfaceNumber;
                            try {
                                await t.claimInterface(r)
                            } catch (o) {
                                throw await t.close(), new u["TransportInterfaceNotAvailable"](o.message)
                            }
                            const n = new f(t, r),
                                i = e => {
                                    t === e.device && (navigator.usb.removeEventListener("disconnect", i), n._emitDisconnect(new u["DisconnectedDevice"]))
                                };
                            return navigator.usb.addEventListener("disconnect", i), n
                        }
                        async close() {
                            await this.exchangeBusyPromise, await this.device.releaseInterface(this.interfaceNumber), await d(this.device), await this.device.close()
                        }
                        setScrambleKey() {}
                    }
                    async function d(t) {
                        try {
                            await t.reset()
                        } catch (e) {
                            console.warn(e)
                        }
                    }
                    f.isSupported = a["c"], f.list = a["b"], f.listen = t => {
                        let e = !1;

                        function r() {
                            e = !0
                        }
                        return Object(a["a"])().then(r => {
                            if (!e) {
                                const e = Object(s["c"])(r.productId);
                                t.next({
                                    type: "add",
                                    descriptor: r,
                                    deviceModel: e
                                }), t.complete()
                            }
                        }, e => {
                            window.DOMException && e instanceof window.DOMException && 18 === e.code ? t.error(new u["TransportWebUSBGestureRequired"](e.message)) : t.error(new u["TransportOpenUserCancelled"](e.message))
                        }), {
                            unsubscribe: r
                        }
                    }
                }.call(this, r("b639").Buffer)
        },
        b127: function(t, e, r) {
            const n = r("0872"),
                i = (t, e, r) => (t = new n(t, r), e = new n(e, r), t.intersects(e, r));
            t.exports = i
        },
        b40a: function(t, e, r) {
            "use strict";

            function n(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw new Error("Wrong positive integer: " + t)
            }

            function i(t) {
                if ("boolean" !== typeof t) throw new Error("Expected boolean, not " + t)
            }

            function o(t, ...e) {
                if (!(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (e.length > 0 && !e.includes(t.length)) throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
            }

            function s(t) {
                if ("function" !== typeof t || "function" !== typeof t.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
                n(t.outputLen), n(t.blockLen)
            }

            function c(t, e = !0) {
                if (t.destroyed) throw new Error("Hash instance has been destroyed");
                if (e && t.finished) throw new Error("Hash#digest() has already been called")
            }

            function u(t, e) {
                o(t);
                const r = e.outputLen;
                if (t.length < r) throw new Error("digestInto() expects output buffer of length at least " + r)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.output = e.exists = e.hash = e.bytes = e.bool = e.number = void 0, e.number = n, e.bool = i, e.bytes = o, e.hash = s, e.exists = c, e.output = u;
            const a = {
                number: n,
                bool: i,
                bytes: o,
                hash: s,
                exists: c,
                output: u
            };
            e.default = a
        },
        b4b3: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = function(t) {
                return t && "number" === typeof t.length && "function" !== typeof t
            }
        },
        b92d: function(t, e, r) {
            "use strict";

            function n(t) {
                return null !== t && "object" === typeof t
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        bd42: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "log", (function() {
                return o
            })), r.d(e, "listen", (function() {
                return s
            }));
            let n = 0;
            const i = [],
                o = (t, e, r) => {
                    const i = {
                        type: t,
                        id: String(++n),
                        date: new Date
                    };
                    e && (i.message = e), r && (i.data = r), c(i)
                },
                s = t => (i.push(t), () => {
                    const e = i.indexOf(t); - 1 !== e && (i[e] = i[i.length - 1], i.pop())
                });

            function c(t) {
                for (let r = 0; r < i.length; r++) try {
                    i[r](t)
                } catch (e) {
                    console.error(e)
                }
            }
            "undefined" !== typeof window && (window.__ledgerLogsListen = s)
        },
        c0e7: function(t, e, r) {
            const n = r("61dc"),
                i = (t, e) => n(t, e, !0);
            t.exports = i
        },
        c2a4: function(t, e, r) {
            const n = r("0f35"),
                {
                    MAX_LENGTH: i,
                    MAX_SAFE_INTEGER: o
                } = r("11a3"),
                {
                    safeRe: s,
                    t: c
                } = r("0d26"),
                u = r("83e2"),
                {
                    compareIdentifiers: a
                } = r("fced");
            class h {
                constructor(t, e) {
                    if (e = u(e), t instanceof h) {
                        if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) return t;
                        t = t.version
                    } else if ("string" !== typeof t) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
                    if (t.length > i) throw new TypeError(`version is longer than ${i} characters`);
                    n("SemVer", t, e), this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease;
                    const r = t.trim().match(e.loose ? s[c.LOOSE] : s[c.FULL]);
                    if (!r) throw new TypeError("Invalid Version: " + t);
                    if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
                    r[4] ? this.prerelease = r[4].split(".").map(t => {
                        if (/^[0-9]+$/.test(t)) {
                            const e = +t;
                            if (e >= 0 && e < o) return e
                        }
                        return t
                    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
                }
                toString() {
                    return this.version
                }
                compare(t) {
                    if (n("SemVer.compare", this.version, this.options, t), !(t instanceof h)) {
                        if ("string" === typeof t && t === this.version) return 0;
                        t = new h(t, this.options)
                    }
                    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
                }
                compareMain(t) {
                    return t instanceof h || (t = new h(t, this.options)), a(this.major, t.major) || a(this.minor, t.minor) || a(this.patch, t.patch)
                }
                comparePre(t) {
                    if (t instanceof h || (t = new h(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
                    if (!this.prerelease.length && t.prerelease.length) return 1;
                    if (!this.prerelease.length && !t.prerelease.length) return 0;
                    let e = 0;
                    do {
                        const r = this.prerelease[e],
                            i = t.prerelease[e];
                        if (n("prerelease compare", e, r, i), void 0 === r && void 0 === i) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        if (r !== i) return a(r, i)
                    } while (++e)
                }
                compareBuild(t) {
                    t instanceof h || (t = new h(t, this.options));
                    let e = 0;
                    do {
                        const r = this.build[e],
                            i = t.build[e];
                        if (n("build compare", e, r, i), void 0 === r && void 0 === i) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        if (r !== i) return a(r, i)
                    } while (++e)
                }
                inc(t, e, r) {
                    switch (t) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e, r);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e, r);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", e, r), this.inc("pre", e, r);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", e, r), this.inc("pre", e, r);
                            break;
                        case "major":
                            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                const t = Number(r) ? 1 : 0;
                                if (!e && !1 === r) throw new Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [t];
                                else {
                                    let n = this.prerelease.length;
                                    while (--n >= 0) "number" === typeof this.prerelease[n] && (this.prerelease[n]++, n = -2);
                                    if (-1 === n) {
                                        if (e === this.prerelease.join(".") && !1 === r) throw new Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(t)
                                    }
                                }
                                if (e) {
                                    let n = [e, t];
                                    !1 === r && (n = [e]), 0 === a(this.prerelease[0], e) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                                }
                                break
                            }
                        default:
                            throw new Error("invalid increment argument: " + t)
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += "+" + this.build.join(".")), this
                }
            }
            t.exports = h
        },
        c53d: function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => 0 === n(t, e, r);
            t.exports = i
        },
        c86d: function(t, e, r) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = r("a8fc");
                const i = 5;

                function o(e) {
                    const r = t.alloc(2);
                    return r.writeUInt16BE(e, 0), r
                }
                const s = {
                        data: t.alloc(0),
                        dataLength: 0,
                        sequence: 0
                    },
                    c = (e, r) => ({
                        makeBlocks(n) {
                            let s = t.concat([o(n.length), n]);
                            const c = r - 5,
                                u = Math.ceil(s.length / c);
                            s = t.concat([s, t.alloc(u * c - s.length + 1).fill(0)]);
                            const a = [];
                            for (let r = 0; r < u; r++) {
                                const n = t.alloc(5);
                                n.writeUInt16BE(e, 0), n.writeUInt8(i, 2), n.writeUInt16BE(r, 3);
                                const o = s.slice(r * c, (r + 1) * c);
                                a.push(t.concat([n, o]))
                            }
                            return a
                        },
                        reduceResponse(r, o) {
                            let {
                                data: c,
                                dataLength: u,
                                sequence: a
                            } = r || s;
                            if (o.readUInt16BE(0) !== e) throw new n.TransportError("Invalid channel", "InvalidChannel");
                            if (o.readUInt8(2) !== i) throw new n.TransportError("Invalid tag", "InvalidTag");
                            if (o.readUInt16BE(3) !== a) throw new n.TransportError("Invalid sequence", "InvalidSequence");
                            r || (u = o.readUInt16BE(5)), a++;
                            const h = o.slice(r ? 5 : 7);
                            return c = t.concat([c, h]), c.length > u && (c = c.slice(0, u)), {
                                data: c,
                                dataLength: u,
                                sequence: a
                            }
                        },
                        getReducedResult(t) {
                            if (t && t.dataLength === t.data.length) return t.data
                        }
                    });
                var u = c;
                e.default = u
            }).call(this, r("b639").Buffer)
        },
        cae7: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.crypto = void 0, e.crypto = {
                node: void 0,
                web: "object" === typeof self && "crypto" in self ? self.crypto : void 0
            }
        },
        cde5: function(t, e, r) {
            const n = r("c2a4"),
                i = (t, e) => new n(t, e).minor;
            t.exports = i
        },
        cdff: function(t, e, r) {
            const n = r("5503"),
                i = r("61dc");
            t.exports = (t, e, r) => {
                const o = [];
                let s = null,
                    c = null;
                const u = t.sort((t, e) => i(t, e, r));
                for (const i of u) {
                    const t = n(i, e, r);
                    t ? (c = i, s || (s = i)) : (c && o.push([s, c]), c = null, s = null)
                }
                s && o.push([s, null]);
                const a = [];
                for (const [n, i] of o) n === i ? a.push(n) : i || n !== u[0] ? i ? n === u[0] ? a.push("<=" + i) : a.push(`${n} - ${i}`) : a.push(">=" + n) : a.push("*");
                const h = a.join(" || "),
                    l = "string" === typeof e.raw ? e.raw : String(e);
                return h.length < l.length ? h : e
            }
        },
        d129: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sha256 = void 0;
            const n = r("993b"),
                i = r("531d"),
                o = (t, e, r) => t & e ^ ~t & r,
                s = (t, e, r) => t & e ^ t & r ^ e & r,
                c = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                u = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                a = new Uint32Array(64);
            class h extends n.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | u[0], this.B = 0 | u[1], this.C = 0 | u[2], this.D = 0 | u[3], this.E = 0 | u[4], this.F = 0 | u[5], this.G = 0 | u[6], this.H = 0 | u[7]
                }
                get() {
                    const {
                        A: t,
                        B: e,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: s,
                        H: c
                    } = this;
                    return [t, e, r, n, i, o, s, c]
                }
                set(t, e, r, n, i, o, s, c) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | c
                }
                process(t, e) {
                    for (let i = 0; i < 16; i++, e += 4) a[i] = t.getUint32(e, !1);
                    for (let o = 16; o < 64; o++) {
                        const t = a[o - 15],
                            e = a[o - 2],
                            r = (0, i.rotr)(t, 7) ^ (0, i.rotr)(t, 18) ^ t >>> 3,
                            n = (0, i.rotr)(e, 17) ^ (0, i.rotr)(e, 19) ^ e >>> 10;
                        a[o] = n + a[o - 7] + r + a[o - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: u,
                        D: h,
                        E: l,
                        F: f,
                        G: d,
                        H: p
                    } = this;
                    for (let b = 0; b < 64; b++) {
                        const t = (0, i.rotr)(l, 6) ^ (0, i.rotr)(l, 11) ^ (0, i.rotr)(l, 25),
                            e = p + t + o(l, f, d) + c[b] + a[b] | 0,
                            y = (0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22),
                            v = y + s(r, n, u) | 0;
                        p = d, d = f, f = l, l = h + e | 0, h = u, u = n, n = r, r = e + v | 0
                    }
                    r = r + this.A | 0, n = n + this.B | 0, u = u + this.C | 0, h = h + this.D | 0, l = l + this.E | 0, f = f + this.F | 0, d = d + this.G | 0, p = p + this.H | 0, this.set(r, n, u, h, l, f, d, p)
                }
                roundClean() {
                    a.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            e.sha256 = (0, i.wrapConstructor)(() => new h)
        },
        d2dd: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return w
            }));
            var n = r("8a94");

            function i(t) {
                return t && "function" === typeof t.schedule
            }
            var o = r("9ab4"),
                s = r("4d3d"),
                c = r("0f5d"),
                u = r("21ce"),
                a = r("5859"),
                h = function(t) {
                    function e(e) {
                        var r = t.call(this) || this;
                        return r.parent = e, r
                    }
                    return o["__extends"](e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(t)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(), this.unsubscribe()
                    }, e
                }(u["a"]),
                l = (u["a"], function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o["__extends"](e, t), e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyError = function(t) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function() {
                        this.destination.complete()
                    }, e
                }(u["a"]));
            u["a"];

            function f(t, e) {
                if (!e.closed) {
                    if (t instanceof n["a"]) return t.subscribe(e);
                    var r;
                    try {
                        r = Object(a["a"])(t)(e)
                    } catch (i) {
                        e.error(i)
                    }
                    return r
                }
            }

            function d(t, e, r) {
                return void 0 === r && (r = Number.POSITIVE_INFINITY), "function" === typeof e ? function(n) {
                    return n.pipe(d((function(r, n) {
                        return Object(c["a"])(t(r, n)).pipe(Object(s["a"])((function(t, i) {
                            return e(r, t, n, i)
                        })))
                    }), r))
                } : ("number" === typeof e && (r = e), function(e) {
                    return e.lift(new p(t, r))
                })
            }
            var p = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new b(t, this.project, this.concurrent))
                    }, t
                }(),
                b = function(t) {
                    function e(e, r, n) {
                        void 0 === n && (n = Number.POSITIVE_INFINITY);
                        var i = t.call(this, e) || this;
                        return i.project = r, i.concurrent = n, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
                    }
                    return o["__extends"](e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, r = this.index++;
                        try {
                            e = this.project(t, r)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.active++, this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = new h(this),
                            r = this.destination;
                        r.add(e);
                        var n = f(t, e);
                        n !== e && r.add(n)
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyComplete = function() {
                        var t = this.buffer;
                        this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(l),
                y = r("3cdb");

            function v(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), d(y["a"], t)
            }
            var E = r("1240"),
                m = r("2af0");

            function g(t, e) {
                return e ? Object(m["a"])(t, e) : new n["a"](Object(E["a"])(t))
            }

            function w() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = Number.POSITIVE_INFINITY,
                    o = null,
                    s = t[t.length - 1];
                return i(s) ? (o = t.pop(), t.length > 1 && "number" === typeof t[t.length - 1] && (r = t.pop())) : "number" === typeof s && (r = t.pop()), null === o && 1 === t.length && t[0] instanceof n["a"] ? t[0] : v(r)(g(t, o))
            }
        },
        d39e: function(t, e) {
            class r {
                constructor() {
                    this.max = 1e3, this.map = new Map
                }
                get(t) {
                    const e = this.map.get(t);
                    return void 0 === e ? void 0 : (this.map.delete(t), this.map.set(t, e), e)
                }
                delete(t) {
                    return this.map.delete(t)
                }
                set(t, e) {
                    const r = this.delete(t);
                    if (!r && void 0 !== e) {
                        if (this.map.size >= this.max) {
                            const t = this.map.keys().next().value;
                            this.delete(t)
                        }
                        this.map.set(t, e)
                    }
                    return this
                }
            }
            t.exports = r
        },
        d47e: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r("9ab4"),
                i = r("21ce");

            function o() {
                return function(t) {
                    return t.lift(new s)
                }
            }
            var s = function() {
                    function t() {}
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new c(t))
                    }, t
                }(),
                c = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n["__extends"](e, t), e.prototype._next = function(t) {}, e
                }(i["a"])
        },
        d749: function(t, e, r) {
            "use strict";

            function n(t) {
                return !!t && "function" !== typeof t.subscribe && "function" === typeof t.then
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        dcc1: function(t, e, r) {
            const n = r("61dc"),
                i = (t, e, r) => n(t, e, r) >= 0;
            t.exports = i
        },
        dda2: function(t, e, r) {
            const n = r("c53d"),
                i = r("9074"),
                o = r("54cf"),
                s = r("dcc1"),
                c = r("144b"),
                u = r("0a9d"),
                a = (t, e, r, a) => {
                    switch (e) {
                        case "===":
                            return "object" === typeof t && (t = t.version), "object" === typeof r && (r = r.version), t === r;
                        case "!==":
                            return "object" === typeof t && (t = t.version), "object" === typeof r && (r = r.version), t !== r;
                        case "":
                        case "=":
                        case "==":
                            return n(t, r, a);
                        case "!=":
                            return i(t, r, a);
                        case ">":
                            return o(t, r, a);
                        case ">=":
                            return s(t, r, a);
                        case "<":
                            return c(t, r, a);
                        case "<=":
                            return u(t, r, a);
                        default:
                            throw new TypeError("Invalid operator: " + e)
                    }
                };
            t.exports = a
        },
        e632: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hmac = void 0;
            const n = r("b40a"),
                i = r("531d");
            class o extends i.Hash {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, n.default.hash(t);
                    const r = (0, i.toBytes)(e);
                    if (this.iHash = t.create(), "function" !== typeof this.iHash.update) throw new TypeError("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    const o = this.blockLen,
                        s = new Uint8Array(o);
                    s.set(r.length > o ? t.create().update(r).digest() : r);
                    for (let n = 0; n < s.length; n++) s[n] ^= 54;
                    this.iHash.update(s), this.oHash = t.create();
                    for (let n = 0; n < s.length; n++) s[n] ^= 106;
                    this.oHash.update(s), s.fill(0)
                }
                update(t) {
                    return n.default.exists(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    n.default.exists(this), n.default.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    const t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    const {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: s
                    } = this;
                    return t = t, t.finished = n, t.destroyed = i, t.blockLen = o, t.outputLen = s, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            const s = (t, e, r) => new o(t, e).update(r).digest();
            e.hmac = s, e.hmac.create = (t, e) => new o(t, e)
        },
        ed3c: function(t, e, r) {
            const n = r("0872"),
                i = (t, e) => {
                    try {
                        return new n(t, e).range || "*"
                    } catch (r) {
                        return null
                    }
                };
            t.exports = i
        },
        f552: function(t, e, r) {
            const n = r("0872"),
                i = r("49ac"),
                {
                    ANY: o
                } = i,
                s = r("5503"),
                c = r("61dc"),
                u = (t, e, r = {}) => {
                    if (t === e) return !0;
                    t = new n(t, r), e = new n(e, r);
                    let i = !1;
                    t: for (const n of t.set) {
                        for (const t of e.set) {
                            const e = l(n, t, r);
                            if (i = i || null !== e, e) continue t
                        }
                        if (i) return !1
                    }
                    return !0
                },
                a = [new i(">=0.0.0-0")],
                h = [new i(">=0.0.0")],
                l = (t, e, r) => {
                    if (t === e) return !0;
                    if (1 === t.length && t[0].semver === o) {
                        if (1 === e.length && e[0].semver === o) return !0;
                        t = r.includePrerelease ? a : h
                    }
                    if (1 === e.length && e[0].semver === o) {
                        if (r.includePrerelease) return !0;
                        e = h
                    }
                    const n = new Set;
                    let i, u, l, p, b, y, v;
                    for (const o of t) ">" === o.operator || ">=" === o.operator ? i = f(i, o, r) : "<" === o.operator || "<=" === o.operator ? u = d(u, o, r) : n.add(o.semver);
                    if (n.size > 1) return null;
                    if (i && u) {
                        if (l = c(i.semver, u.semver, r), l > 0) return null;
                        if (0 === l && (">=" !== i.operator || "<=" !== u.operator)) return null
                    }
                    for (const o of n) {
                        if (i && !s(o, String(i), r)) return null;
                        if (u && !s(o, String(u), r)) return null;
                        for (const t of e)
                            if (!s(o, String(t), r)) return !1;
                        return !0
                    }
                    let E = !(!u || r.includePrerelease || !u.semver.prerelease.length) && u.semver,
                        m = !(!i || r.includePrerelease || !i.semver.prerelease.length) && i.semver;
                    E && 1 === E.prerelease.length && "<" === u.operator && 0 === E.prerelease[0] && (E = !1);
                    for (const o of e) {
                        if (v = v || ">" === o.operator || ">=" === o.operator, y = y || "<" === o.operator || "<=" === o.operator, i)
                            if (m && o.semver.prerelease && o.semver.prerelease.length && o.semver.major === m.major && o.semver.minor === m.minor && o.semver.patch === m.patch && (m = !1), ">" === o.operator || ">=" === o.operator) {
                                if (p = f(i, o, r), p === o && p !== i) return !1
                            } else if (">=" === i.operator && !s(i.semver, String(o), r)) return !1;
                        if (u)
                            if (E && o.semver.prerelease && o.semver.prerelease.length && o.semver.major === E.major && o.semver.minor === E.minor && o.semver.patch === E.patch && (E = !1), "<" === o.operator || "<=" === o.operator) {
                                if (b = d(u, o, r), b === o && b !== u) return !1
                            } else if ("<=" === u.operator && !s(u.semver, String(o), r)) return !1;
                        if (!o.operator && (u || i) && 0 !== l) return !1
                    }
                    return !(i && y && !u && 0 !== l) && (!(u && v && !i && 0 !== l) && (!m && !E))
                },
                f = (t, e, r) => {
                    if (!t) return e;
                    const n = c(t.semver, e.semver, r);
                    return n > 0 ? t : n < 0 || ">" === e.operator && ">=" === t.operator ? e : t
                },
                d = (t, e, r) => {
                    if (!t) return e;
                    const n = c(t.semver, e.semver, r);
                    return n < 0 ? t : n > 0 || "<" === e.operator && "<=" === t.operator ? e : t
                };
            t.exports = u
        },
        f685: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return s
                }));
                var n = r("faa1"),
                    i = r.n(n),
                    o = r("a8fc");
                class s {
                    constructor() {
                        this.exchangeTimeout = 3e4, this.unresponsiveTimeout = 15e3, this.deviceModel = null, this._events = new i.a, this.send = async (e, r, n, i, s = t.alloc(0), c = [o["StatusCodes"].OK]) => {
                            if (s.length >= 256) throw new o["TransportError"]("data.length exceed 256 bytes limit. Got: " + s.length, "DataLengthTooBig");
                            const u = await this.exchange(t.concat([t.from([e, r, n, i]), t.from([s.length]), s])),
                                a = u.readUInt16BE(u.length - 2);
                            if (!c.some(t => t === a)) throw new o["TransportStatusError"](a);
                            return u
                        }, this.exchangeBusyPromise = void 0, this.exchangeAtomicImpl = async t => {
                            if (this.exchangeBusyPromise) throw new o["TransportRaceCondition"]("An action was already pending on the Ledger device. Please deny or reconnect.");
                            let e;
                            const r = new Promise(t => {
                                e = t
                            });
                            this.exchangeBusyPromise = r;
                            let n = !1;
                            const i = setTimeout(() => {
                                n = !0, this.emit("unresponsive")
                            }, this.unresponsiveTimeout);
                            try {
                                const r = await t();
                                return n && this.emit("responsive"), r
                            } finally {
                                clearTimeout(i), e && e(), this.exchangeBusyPromise = null
                            }
                        }, this._appAPIlock = null
                    }
                    exchange(t) {
                        throw new Error("exchange not implemented")
                    }
                    setScrambleKey(t) {}
                    close() {
                        return Promise.resolve()
                    }
                    on(t, e) {
                        this._events.on(t, e)
                    }
                    off(t, e) {
                        this._events.removeListener(t, e)
                    }
                    emit(t, ...e) {
                        this._events.emit(t, ...e)
                    }
                    setDebugMode() {
                        console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")
                    }
                    setExchangeTimeout(t) {
                        this.exchangeTimeout = t
                    }
                    setExchangeUnresponsiveTimeout(t) {
                        this.unresponsiveTimeout = t
                    }
                    static create(t = 3e3, e) {
                        return new Promise((r, n) => {
                            let i = !1;
                            const s = this.listen({
                                    next: e => {
                                        i = !0, s && s.unsubscribe(), c && clearTimeout(c), this.open(e.descriptor, t).then(r, n)
                                    },
                                    error: t => {
                                        c && clearTimeout(c), n(t)
                                    },
                                    complete: () => {
                                        c && clearTimeout(c), i || n(new o["TransportError"](this.ErrorMessage_NoDeviceFound, "NoDeviceFound"))
                                    }
                                }),
                                c = e ? setTimeout(() => {
                                    s.unsubscribe(), n(new o["TransportError"](this.ErrorMessage_ListenTimeout, "ListenTimeout"))
                                }, e) : null
                        })
                    }
                    decorateAppAPIMethods(t, e, r) {
                        for (let n of e) t[n] = this.decorateAppAPIMethod(n, t[n], t, r)
                    }
                    decorateAppAPIMethod(t, e, r, n) {
                        return async (...i) => {
                            const {
                                _appAPIlock: s
                            } = this;
                            if (s) return Promise.reject(new o["TransportError"]("Ledger Device is busy (lock " + s + ")", "TransportLocked"));
                            try {
                                return this._appAPIlock = t, this.setScrambleKey(n), await e.apply(r, i)
                            } finally {
                                this._appAPIlock = null
                            }
                        }
                    }
                }
                s.isSupported = void 0, s.list = void 0, s.listen = void 0, s.open = void 0, s.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)", s.ErrorMessage_NoDeviceFound = "No Ledger device found"
            }).call(this, r("b639").Buffer)
        },
        f7c0: function(t, e, r) {
            const n = r("c2a4"),
                i = r("0872"),
                o = r("54cf"),
                s = (t, e) => {
                    t = new i(t, e);
                    let r = new n("0.0.0");
                    if (t.test(r)) return r;
                    if (r = new n("0.0.0-0"), t.test(r)) return r;
                    r = null;
                    for (let i = 0; i < t.set.length; ++i) {
                        const e = t.set[i];
                        let s = null;
                        e.forEach(t => {
                            const e = new n(t.semver.version);
                            switch (t.operator) {
                                case ">":
                                    0 === e.prerelease.length ? e.patch++ : e.prerelease.push(0), e.raw = e.format();
                                case "":
                                case ">=":
                                    s && !o(e, s) || (s = e);
                                    break;
                                case "<":
                                case "<=":
                                    break;
                                default:
                                    throw new Error("Unexpected operation: " + t.operator)
                            }
                        }), !s || r && !o(r, s) || (r = s)
                    }
                    return r && t.test(r) ? r : null
                };
            t.exports = s
        },
        f9fd: function(t, e, r) {
            const n = r("0b47"),
                i = (t, e) => t.sort((t, r) => n(r, t, e));
            t.exports = i
        },
        fced: function(t, e) {
            const r = /^[0-9]+$/,
                n = (t, e) => {
                    const n = r.test(t),
                        i = r.test(e);
                    return n && i && (t = +t, e = +e), t === e ? 0 : n && !i ? -1 : i && !n ? 1 : t < e ? -1 : 1
                },
                i = (t, e) => n(e, t);
            t.exports = {
                compareIdentifiers: n,
                rcompareIdentifiers: i
            }
        },
        fffa: function(t, e, r) {
            const n = r("c2a4"),
                i = r("0872"),
                o = (t, e, r) => {
                    let o = null,
                        s = null,
                        c = null;
                    try {
                        c = new i(e, r)
                    } catch (u) {
                        return null
                    }
                    return t.forEach(t => {
                        c.test(t) && (o && 1 !== s.compare(t) || (o = t, s = new n(o, r)))
                    }), o
                };
            t.exports = o
        }
    }
]);