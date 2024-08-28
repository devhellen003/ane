(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-vendors~0f485567"], {
        "0676": function(t, r) {
            function e() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "09f5": function(t, r, e) {
            (function(t) {
                (function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function i(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, r, e) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
                    }
                    var s;
                    "object" === typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : e(9).Buffer
                    } catch (x) {}

                    function a(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : e - 48 & 15
                    }

                    function u(t, r, e) {
                        var n = a(t, e);
                        return e - 1 >= r && (n |= a(t, e - 1) << 4), n
                    }

                    function h(t, r, e, n) {
                        for (var i = 0, o = Math.min(t.length, e), s = r; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                        }
                        return i
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, r) {
                        return t.cmp(r) > 0 ? t : r
                    }, o.min = function(t, r) {
                        return t.cmp(r) < 0 ? t : r
                    }, o.prototype._init = function(t, r, e) {
                        if ("number" === typeof t) return this._initNumber(t, r, e);
                        if ("object" === typeof t) return this._initArray(t, r, e);
                        "hex" === r && (r = 16), n(r === (0 | r) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
                        var i = 0;
                        "-" === t[0] && (i++, this.negative = 1), i < t.length && (16 === r ? this._parseHex(t, i, e) : (this._parseBase(t, r, i), "le" === e && this._initArray(this.toArray(), r, e)))
                    }, o.prototype._initNumber = function(t, r, e) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
                    }, o.prototype._initArray = function(t, r, e) {
                        if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var o, s, a = 0;
                        if ("be" === e)
                            for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        else if ("le" === e)
                            for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, r, e) {
                        this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var i, o = 0,
                            s = 0;
                        if ("be" === e)
                            for (n = t.length - 1; n >= r; n -= 2) i = u(t, r, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                        else {
                            var a = t.length - r;
                            for (n = a % 2 === 0 ? r + 1 : r; n < t.length; n += 2) i = u(t, r, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8
                        }
                        this.strip()
                    }, o.prototype._parseBase = function(t, r, e) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= r) n++;
                        n--, i = i / r | 0;
                        for (var o = t.length - e, s = o % n, a = Math.min(o, o - s) + e, u = 0, f = e; f < a; f += n) u = h(t, f, f + n, r), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== s) {
                            var l = 1;
                            for (u = h(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                            this.imuln(l), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this.strip()
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        while (this.length < t) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        while (this.length > 1 && 0 === this.words[this.length - 1]) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        c = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function d(t) {
                        for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                            var n = e / 26 | 0,
                                i = e % 26;
                            r[e] = (t.words[n] & 1 << i) >>> i
                        }
                        return r
                    }

                    function p(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | r.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            u = s / 67108864 | 0;
                        e.words[0] = a;
                        for (var h = 1; h < n; h++) {
                            for (var f = u >>> 26, l = 67108863 & u, c = Math.min(h, r.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                                var p = h - d | 0;
                                i = 0 | t.words[p], o = 0 | r.words[d], s = i * o + l, f += s / 67108864 | 0, l = 67108863 & s
                            }
                            e.words[h] = 0 | l, u = 0 | f
                        }
                        return 0 !== u ? e.words[h] = 0 | u : e.length--, e.strip()
                    }
                    o.prototype.toString = function(t, r) {
                        var e;
                        if (t = t || 10, r = 0 | r || 1, 16 === t || "hex" === t) {
                            e = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    u = (16777215 & (a << i | o)).toString(16);
                                o = a >>> 24 - i & 16777215, e = 0 !== o || s !== this.length - 1 ? f[6 - u.length] + u + e : u + e, i += 2, i >= 26 && (i -= 26, s--)
                            }
                            0 !== o && (e = o.toString(16) + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var h = l[t],
                                d = c[t];
                            e = "";
                            var p = this.clone();
                            p.negative = 0;
                            while (!p.isZero()) {
                                var m = p.modn(d).toString(t);
                                p = p.idivn(d), e = p.isZero() ? m + e : f[h - m.length] + m + e
                            }
                            this.isZero() && (e = "0" + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, r) {
                        return n("undefined" !== typeof s), this.toArrayLike(s, t, r)
                    }, o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    }, o.prototype.toArrayLike = function(t, r, e) {
                        var i = this.byteLength(),
                            o = e || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                        var s, a, u = "le" === r,
                            h = new t(o),
                            f = this.clone();
                        if (u) {
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[a] = s;
                            for (; a < o; a++) h[a] = 0
                        } else {
                            for (a = 0; a < o - i; a++) h[a] = 0;
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[o - a - 1] = s
                        }
                        return h
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 === (8191 & r) && (e += 13, r >>>= 13), 0 === (127 & r) && (e += 7, r >>>= 7), 0 === (15 & r) && (e += 4, r >>>= 4), 0 === (3 & r) && (e += 2, r >>>= 2), 0 === (1 & r) && e++, e
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var e = this._zeroBits(this.words[r]);
                            if (t += e, 26 !== e) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        while (this.length < t.length) this.words[this.length++] = 0;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
                        return this.length = r.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, e;
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0; n < e.length; n++) this.words[n] = r.words[n] ^ e.words[n];
                        if (this !== r)
                            for (; n < r.length; n++) this.words[n] = r.words[n];
                        return this.length = r.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        n("number" === typeof t && t >= 0);
                        var e = t / 26 | 0,
                            i = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << i : this.words[e] & ~(1 << i), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var r, e, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                        for (var i = 0, o = 0; o < n.length; o++) r = (0 | e.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        for (; 0 !== i && o < e.length; o++) r = (0 | e.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        if (this.length = e.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (e !== this)
                            for (; o < e.length; o++) this.words[o] = e.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var e, n, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (e = this, n = t) : (e = t, n = this);
                        for (var o = 0, s = 0; s < n.length; s++) r = (0 | e.words[s]) - (0 | n.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        for (; 0 !== o && s < e.length; s++) r = (0 | e.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        if (0 === o && s < e.length && e !== this)
                            for (; s < e.length; s++) this.words[s] = e.words[s];
                        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var m = function(t, r, e) {
                        var n, i, o, s = t.words,
                            a = r.words,
                            u = e.words,
                            h = 0,
                            f = 0 | s[0],
                            l = 8191 & f,
                            c = f >>> 13,
                            d = 0 | s[1],
                            p = 8191 & d,
                            m = d >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            y = g >>> 13,
                            b = 0 | s[3],
                            w = 8191 & b,
                            M = b >>> 13,
                            E = 0 | s[4],
                            _ = 8191 & E,
                            A = E >>> 13,
                            N = 0 | s[5],
                            S = 8191 & N,
                            x = N >>> 13,
                            I = 0 | s[6],
                            O = 8191 & I,
                            R = I >>> 13,
                            P = 0 | s[7],
                            T = 8191 & P,
                            U = P >>> 13,
                            k = 0 | s[8],
                            C = 8191 & k,
                            j = k >>> 13,
                            F = 0 | s[9],
                            L = 8191 & F,
                            D = F >>> 13,
                            q = 0 | a[0],
                            B = 8191 & q,
                            z = q >>> 13,
                            G = 0 | a[1],
                            K = 8191 & G,
                            V = G >>> 13,
                            Z = 0 | a[2],
                            X = 8191 & Z,
                            J = Z >>> 13,
                            W = 0 | a[3],
                            H = 8191 & W,
                            $ = W >>> 13,
                            Y = 0 | a[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            rt = 0 | a[5],
                            et = 8191 & rt,
                            nt = rt >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ut = 8191 & at,
                            ht = at >>> 13,
                            ft = 0 | a[8],
                            lt = 8191 & ft,
                            ct = ft >>> 13,
                            dt = 0 | a[9],
                            pt = 8191 & dt,
                            mt = dt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19, n = Math.imul(l, B), i = Math.imul(l, z), i = i + Math.imul(c, B) | 0, o = Math.imul(c, z);
                        var gt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, B), i = Math.imul(p, z), i = i + Math.imul(m, B) | 0, o = Math.imul(m, z), n = n + Math.imul(l, K) | 0, i = i + Math.imul(l, V) | 0, i = i + Math.imul(c, K) | 0, o = o + Math.imul(c, V) | 0;
                        var vt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, B), i = Math.imul(v, z), i = i + Math.imul(y, B) | 0, o = Math.imul(y, z), n = n + Math.imul(p, K) | 0, i = i + Math.imul(p, V) | 0, i = i + Math.imul(m, K) | 0, o = o + Math.imul(m, V) | 0, n = n + Math.imul(l, X) | 0, i = i + Math.imul(l, J) | 0, i = i + Math.imul(c, X) | 0, o = o + Math.imul(c, J) | 0;
                        var yt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, B), i = Math.imul(w, z), i = i + Math.imul(M, B) | 0, o = Math.imul(M, z), n = n + Math.imul(v, K) | 0, i = i + Math.imul(v, V) | 0, i = i + Math.imul(y, K) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, X) | 0, i = i + Math.imul(p, J) | 0, i = i + Math.imul(m, X) | 0, o = o + Math.imul(m, J) | 0, n = n + Math.imul(l, H) | 0, i = i + Math.imul(l, $) | 0, i = i + Math.imul(c, H) | 0, o = o + Math.imul(c, $) | 0;
                        var bt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(_, B), i = Math.imul(_, z), i = i + Math.imul(A, B) | 0, o = Math.imul(A, z), n = n + Math.imul(w, K) | 0, i = i + Math.imul(w, V) | 0, i = i + Math.imul(M, K) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(v, X) | 0, i = i + Math.imul(v, J) | 0, i = i + Math.imul(y, X) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, H) | 0, i = i + Math.imul(p, $) | 0, i = i + Math.imul(m, H) | 0, o = o + Math.imul(m, $) | 0, n = n + Math.imul(l, Q) | 0, i = i + Math.imul(l, tt) | 0, i = i + Math.imul(c, Q) | 0, o = o + Math.imul(c, tt) | 0;
                        var wt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, B), i = Math.imul(S, z), i = i + Math.imul(x, B) | 0, o = Math.imul(x, z), n = n + Math.imul(_, K) | 0, i = i + Math.imul(_, V) | 0, i = i + Math.imul(A, K) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(w, X) | 0, i = i + Math.imul(w, J) | 0, i = i + Math.imul(M, X) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(v, H) | 0, i = i + Math.imul(v, $) | 0, i = i + Math.imul(y, H) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = i + Math.imul(p, tt) | 0, i = i + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0, n = n + Math.imul(l, et) | 0, i = i + Math.imul(l, nt) | 0, i = i + Math.imul(c, et) | 0, o = o + Math.imul(c, nt) | 0;
                        var Mt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, B), i = Math.imul(O, z), i = i + Math.imul(R, B) | 0, o = Math.imul(R, z), n = n + Math.imul(S, K) | 0, i = i + Math.imul(S, V) | 0, i = i + Math.imul(x, K) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(_, X) | 0, i = i + Math.imul(_, J) | 0, i = i + Math.imul(A, X) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(w, H) | 0, i = i + Math.imul(w, $) | 0, i = i + Math.imul(M, H) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(v, Q) | 0, i = i + Math.imul(v, tt) | 0, i = i + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, et) | 0, i = i + Math.imul(p, nt) | 0, i = i + Math.imul(m, et) | 0, o = o + Math.imul(m, nt) | 0, n = n + Math.imul(l, ot) | 0, i = i + Math.imul(l, st) | 0, i = i + Math.imul(c, ot) | 0, o = o + Math.imul(c, st) | 0;
                        var Et = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(T, B), i = Math.imul(T, z), i = i + Math.imul(U, B) | 0, o = Math.imul(U, z), n = n + Math.imul(O, K) | 0, i = i + Math.imul(O, V) | 0, i = i + Math.imul(R, K) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(S, X) | 0, i = i + Math.imul(S, J) | 0, i = i + Math.imul(x, X) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(_, H) | 0, i = i + Math.imul(_, $) | 0, i = i + Math.imul(A, H) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(w, Q) | 0, i = i + Math.imul(w, tt) | 0, i = i + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(v, et) | 0, i = i + Math.imul(v, nt) | 0, i = i + Math.imul(y, et) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = i + Math.imul(p, st) | 0, i = i + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0, n = n + Math.imul(l, ut) | 0, i = i + Math.imul(l, ht) | 0, i = i + Math.imul(c, ut) | 0, o = o + Math.imul(c, ht) | 0;
                        var _t = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(C, B), i = Math.imul(C, z), i = i + Math.imul(j, B) | 0, o = Math.imul(j, z), n = n + Math.imul(T, K) | 0, i = i + Math.imul(T, V) | 0, i = i + Math.imul(U, K) | 0, o = o + Math.imul(U, V) | 0, n = n + Math.imul(O, X) | 0, i = i + Math.imul(O, J) | 0, i = i + Math.imul(R, X) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(S, H) | 0, i = i + Math.imul(S, $) | 0, i = i + Math.imul(x, H) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(_, Q) | 0, i = i + Math.imul(_, tt) | 0, i = i + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(w, et) | 0, i = i + Math.imul(w, nt) | 0, i = i + Math.imul(M, et) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(v, ot) | 0, i = i + Math.imul(v, st) | 0, i = i + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = i + Math.imul(p, ht) | 0, i = i + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0, n = n + Math.imul(l, lt) | 0, i = i + Math.imul(l, ct) | 0, i = i + Math.imul(c, lt) | 0, o = o + Math.imul(c, ct) | 0;
                        var At = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, B), i = Math.imul(L, z), i = i + Math.imul(D, B) | 0, o = Math.imul(D, z), n = n + Math.imul(C, K) | 0, i = i + Math.imul(C, V) | 0, i = i + Math.imul(j, K) | 0, o = o + Math.imul(j, V) | 0, n = n + Math.imul(T, X) | 0, i = i + Math.imul(T, J) | 0, i = i + Math.imul(U, X) | 0, o = o + Math.imul(U, J) | 0, n = n + Math.imul(O, H) | 0, i = i + Math.imul(O, $) | 0, i = i + Math.imul(R, H) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(S, Q) | 0, i = i + Math.imul(S, tt) | 0, i = i + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(_, et) | 0, i = i + Math.imul(_, nt) | 0, i = i + Math.imul(A, et) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(w, ot) | 0, i = i + Math.imul(w, st) | 0, i = i + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(v, ut) | 0, i = i + Math.imul(v, ht) | 0, i = i + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, lt) | 0, i = i + Math.imul(p, ct) | 0, i = i + Math.imul(m, lt) | 0, o = o + Math.imul(m, ct) | 0, n = n + Math.imul(l, pt) | 0, i = i + Math.imul(l, mt) | 0, i = i + Math.imul(c, pt) | 0, o = o + Math.imul(c, mt) | 0;
                        var Nt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(L, K), i = Math.imul(L, V), i = i + Math.imul(D, K) | 0, o = Math.imul(D, V), n = n + Math.imul(C, X) | 0, i = i + Math.imul(C, J) | 0, i = i + Math.imul(j, X) | 0, o = o + Math.imul(j, J) | 0, n = n + Math.imul(T, H) | 0, i = i + Math.imul(T, $) | 0, i = i + Math.imul(U, H) | 0, o = o + Math.imul(U, $) | 0, n = n + Math.imul(O, Q) | 0, i = i + Math.imul(O, tt) | 0, i = i + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(S, et) | 0, i = i + Math.imul(S, nt) | 0, i = i + Math.imul(x, et) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(_, ot) | 0, i = i + Math.imul(_, st) | 0, i = i + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(w, ut) | 0, i = i + Math.imul(w, ht) | 0, i = i + Math.imul(M, ut) | 0, o = o + Math.imul(M, ht) | 0, n = n + Math.imul(v, lt) | 0, i = i + Math.imul(v, ct) | 0, i = i + Math.imul(y, lt) | 0, o = o + Math.imul(y, ct) | 0, n = n + Math.imul(p, pt) | 0, i = i + Math.imul(p, mt) | 0, i = i + Math.imul(m, pt) | 0, o = o + Math.imul(m, mt) | 0;
                        var St = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(L, X), i = Math.imul(L, J), i = i + Math.imul(D, X) | 0, o = Math.imul(D, J), n = n + Math.imul(C, H) | 0, i = i + Math.imul(C, $) | 0, i = i + Math.imul(j, H) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(T, Q) | 0, i = i + Math.imul(T, tt) | 0, i = i + Math.imul(U, Q) | 0, o = o + Math.imul(U, tt) | 0, n = n + Math.imul(O, et) | 0, i = i + Math.imul(O, nt) | 0, i = i + Math.imul(R, et) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(S, ot) | 0, i = i + Math.imul(S, st) | 0, i = i + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(_, ut) | 0, i = i + Math.imul(_, ht) | 0, i = i + Math.imul(A, ut) | 0, o = o + Math.imul(A, ht) | 0, n = n + Math.imul(w, lt) | 0, i = i + Math.imul(w, ct) | 0, i = i + Math.imul(M, lt) | 0, o = o + Math.imul(M, ct) | 0, n = n + Math.imul(v, pt) | 0, i = i + Math.imul(v, mt) | 0, i = i + Math.imul(y, pt) | 0, o = o + Math.imul(y, mt) | 0;
                        var xt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(L, H), i = Math.imul(L, $), i = i + Math.imul(D, H) | 0, o = Math.imul(D, $), n = n + Math.imul(C, Q) | 0, i = i + Math.imul(C, tt) | 0, i = i + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(T, et) | 0, i = i + Math.imul(T, nt) | 0, i = i + Math.imul(U, et) | 0, o = o + Math.imul(U, nt) | 0, n = n + Math.imul(O, ot) | 0, i = i + Math.imul(O, st) | 0, i = i + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(S, ut) | 0, i = i + Math.imul(S, ht) | 0, i = i + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(_, lt) | 0, i = i + Math.imul(_, ct) | 0, i = i + Math.imul(A, lt) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(w, pt) | 0, i = i + Math.imul(w, mt) | 0, i = i + Math.imul(M, pt) | 0, o = o + Math.imul(M, mt) | 0;
                        var It = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(L, Q), i = Math.imul(L, tt), i = i + Math.imul(D, Q) | 0, o = Math.imul(D, tt), n = n + Math.imul(C, et) | 0, i = i + Math.imul(C, nt) | 0, i = i + Math.imul(j, et) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(T, ot) | 0, i = i + Math.imul(T, st) | 0, i = i + Math.imul(U, ot) | 0, o = o + Math.imul(U, st) | 0, n = n + Math.imul(O, ut) | 0, i = i + Math.imul(O, ht) | 0, i = i + Math.imul(R, ut) | 0, o = o + Math.imul(R, ht) | 0, n = n + Math.imul(S, lt) | 0, i = i + Math.imul(S, ct) | 0, i = i + Math.imul(x, lt) | 0, o = o + Math.imul(x, ct) | 0, n = n + Math.imul(_, pt) | 0, i = i + Math.imul(_, mt) | 0, i = i + Math.imul(A, pt) | 0, o = o + Math.imul(A, mt) | 0;
                        var Ot = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(L, et), i = Math.imul(L, nt), i = i + Math.imul(D, et) | 0, o = Math.imul(D, nt), n = n + Math.imul(C, ot) | 0, i = i + Math.imul(C, st) | 0, i = i + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, n = n + Math.imul(T, ut) | 0, i = i + Math.imul(T, ht) | 0, i = i + Math.imul(U, ut) | 0, o = o + Math.imul(U, ht) | 0, n = n + Math.imul(O, lt) | 0, i = i + Math.imul(O, ct) | 0, i = i + Math.imul(R, lt) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(S, pt) | 0, i = i + Math.imul(S, mt) | 0, i = i + Math.imul(x, pt) | 0, o = o + Math.imul(x, mt) | 0;
                        var Rt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(L, ot), i = Math.imul(L, st), i = i + Math.imul(D, ot) | 0, o = Math.imul(D, st), n = n + Math.imul(C, ut) | 0, i = i + Math.imul(C, ht) | 0, i = i + Math.imul(j, ut) | 0, o = o + Math.imul(j, ht) | 0, n = n + Math.imul(T, lt) | 0, i = i + Math.imul(T, ct) | 0, i = i + Math.imul(U, lt) | 0, o = o + Math.imul(U, ct) | 0, n = n + Math.imul(O, pt) | 0, i = i + Math.imul(O, mt) | 0, i = i + Math.imul(R, pt) | 0, o = o + Math.imul(R, mt) | 0;
                        var Pt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(L, ut), i = Math.imul(L, ht), i = i + Math.imul(D, ut) | 0, o = Math.imul(D, ht), n = n + Math.imul(C, lt) | 0, i = i + Math.imul(C, ct) | 0, i = i + Math.imul(j, lt) | 0, o = o + Math.imul(j, ct) | 0, n = n + Math.imul(T, pt) | 0, i = i + Math.imul(T, mt) | 0, i = i + Math.imul(U, pt) | 0, o = o + Math.imul(U, mt) | 0;
                        var Tt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(L, lt), i = Math.imul(L, ct), i = i + Math.imul(D, lt) | 0, o = Math.imul(D, ct), n = n + Math.imul(C, pt) | 0, i = i + Math.imul(C, mt) | 0, i = i + Math.imul(j, pt) | 0, o = o + Math.imul(j, mt) | 0;
                        var Ut = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(L, pt), i = Math.imul(L, mt), i = i + Math.imul(D, pt) | 0, o = Math.imul(D, mt);
                        var kt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        return h = (o + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, u[0] = gt, u[1] = vt, u[2] = yt, u[3] = bt, u[4] = wt, u[5] = Mt, u[6] = Et, u[7] = _t, u[8] = At, u[9] = Nt, u[10] = St, u[11] = xt, u[12] = It, u[13] = Ot, u[14] = Rt, u[15] = Pt, u[16] = Tt, u[17] = Ut, u[18] = kt, 0 !== h && (u[19] = h, e.length++), e
                    };

                    function g(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, i = 0, o = 0; o < e.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, u = Math.min(o, r.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                                var f = o - h,
                                    l = 0 | t.words[f],
                                    c = 0 | r.words[h],
                                    d = l * c,
                                    p = 67108863 & d;
                                s = s + (d / 67108864 | 0) | 0, p = p + a | 0, a = 67108863 & p, s = s + (p >>> 26) | 0, i += s >>> 26, s &= 67108863
                            }
                            e.words[o] = a, n = s, s = i
                        }
                        return 0 !== n ? e.words[o] = n : e.length--, e.strip()
                    }

                    function v(t, r, e) {
                        var n = new y;
                        return n.mulp(t, r, e)
                    }

                    function y(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (m = p), o.prototype.mulTo = function(t, r) {
                        var e, n = this.length + t.length;
                        return e = 10 === this.length && 10 === t.length ? m(this, t, r) : n < 63 ? p(this, t, r) : n < 1024 ? g(this, t, r) : v(this, t, r), e
                    }, y.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, n = 0; n < t; n++) r[n] = this.revBin(n, e, t);
                        return r
                    }, y.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, y.prototype.permute = function(t, r, e, n, i, o) {
                        for (var s = 0; s < o; s++) n[s] = r[t[s]], i[s] = e[t[s]]
                    }, y.prototype.transform = function(t, r, e, n, i, o) {
                        this.permute(o, t, r, e, n, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), f = 0; f < i; f += a)
                                for (var l = u, c = h, d = 0; d < s; d++) {
                                    var p = e[f + d],
                                        m = n[f + d],
                                        g = e[f + d + s],
                                        v = n[f + d + s],
                                        y = l * g - c * v;
                                    v = l * v + c * g, g = y, e[f + d] = p + g, n[f + d] = m + v, e[f + d + s] = p - g, n[f + d + s] = m - v, d !== a && (y = u * l - h * c, c = u * c + h * l, l = y)
                                }
                    }, y.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, y.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var n = 0; n < e / 2; n++) {
                                var i = t[n];
                                t[n] = t[e - n - 1], t[e - n - 1] = i, i = r[n], r[n] = -r[e - n - 1], r[e - n - 1] = -i
                            }
                    }, y.prototype.normalize13b = function(t, r) {
                        for (var e = 0, n = 0; n < r / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / r) + Math.round(t[2 * n] / r) + e;
                            t[n] = 67108863 & i, e = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, y.prototype.convert13b = function(t, r, e, i) {
                        for (var o = 0, s = 0; s < r; s++) o += 0 | t[s], e[2 * s] = 8191 & o, o >>>= 13, e[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * r; s < i; ++s) e[s] = 0;
                        n(0 === o), n(0 === (-8192 & o))
                    }, y.prototype.stub = function(t) {
                        for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
                        return r
                    }, y.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            s = new Array(n),
                            a = new Array(n),
                            u = new Array(n),
                            h = new Array(n),
                            f = new Array(n),
                            l = new Array(n),
                            c = e.words;
                        c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(r.words, r.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, f, l, n, i);
                        for (var d = 0; d < n; d++) {
                            var p = a[d] * f[d] - u[d] * l[d];
                            u[d] = a[d] * l[d] + u[d] * f[d], a[d] = p
                        }
                        return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e.strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), v(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        n("number" === typeof t), n(t < 67108864);
                        for (var r = 0, e = 0; e < this.length; e++) {
                            var i = (0 | this.words[e]) * t,
                                o = (67108863 & i) + (67108863 & r);
                            r >>= 26, r += i / 67108864 | 0, r += o >>> 26, this.words[e] = 67108863 & o
                        }
                        return 0 !== r && (this.words[e] = r, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = d(t);
                        if (0 === r.length) return new o(1);
                        for (var e = this, n = 0; n < r.length; n++, e = e.sqr())
                            if (0 !== r[n]) break;
                        if (++n < r.length)
                            for (var i = e.sqr(); n < r.length; n++, i = i.sqr()) 0 !== r[n] && (e = e.mul(i));
                        return e
                    }, o.prototype.iushln = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r, e = t % 26,
                            i = (t - e) / 26,
                            o = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var s = 0;
                            for (r = 0; r < this.length; r++) {
                                var a = this.words[r] & o,
                                    u = (0 | this.words[r]) - a << e;
                                this.words[r] = u | s, s = a >>> 26 - e
                            }
                            s && (this.words[r] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + i] = this.words[r];
                            for (r = 0; r < i; r++) this.words[r] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, e) {
                        var i;
                        n("number" === typeof t && t >= 0), i = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            u = e;
                        if (i -= s, i = Math.max(0, i), u) {
                            for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                            u.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
                            var l = 0 | this.words[h];
                            this.words[h] = f << 26 - o | l >>> o, f = l & a
                        }
                        return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return !1;
                        var o = this.words[e];
                        return !!(o & i)
                    }, o.prototype.imaskn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
                            var i = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, e) {
                        var i, o, s = t.length + e;
                        this._expand(s);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + a;
                            var u = (0 | t.words[i]) * r;
                            o -= 67108863 & u, a = (o >> 26) - (u / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) o = (0 | this.words[i + e]) + a, a = o >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === a) return this.strip();
                        for (n(-1 === a), a = 0, i = 0; i < this.length; i++) o = -(0 | this.words[i]) + a, a = o >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var e = this.length - t.length,
                            n = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1],
                            a = this._countBits(s);
                        e = 26 - a, 0 !== e && (i = i.ushln(e), n.iushln(e), s = 0 | i.words[i.length - 1]);
                        var u, h = n.length - i.length;
                        if ("mod" !== r) {
                            u = new o(null), u.length = h + 1, u.words = new Array(u.length);
                            for (var f = 0; f < u.length; f++) u.words[f] = 0
                        }
                        var l = n.clone()._ishlnsubmul(i, 1, h);
                        0 === l.negative && (n = l, u && (u.words[h] = 1));
                        for (var c = h - 1; c >= 0; c--) {
                            var d = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                            d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, c);
                            while (0 !== n.negative) d--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                            u && (u.words[c] = d)
                        }
                        return u && u.strip(), n.strip(), "div" !== r && 0 !== e && n.iushrn(e), {
                            div: u || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, r), "mod" !== r && (i = a.div.neg()), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), r), "mod" !== r && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), r), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
                            div: a.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var i, s, a
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            i = t.andln(1),
                            o = e.cmp(n);
                        return o < 0 || 1 === i && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        n(t <= 67108863);
                        for (var r = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (r * e + (0 | this.words[i])) % t;
                        return e
                    }, o.prototype.idivn = function(t) {
                        n(t <= 67108863);
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var i = (0 | this.words[e]) + 67108864 * r;
                            this.words[e] = i / t | 0, r = i % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i = new o(1),
                            s = new o(0),
                            a = new o(0),
                            u = new o(1),
                            h = 0;
                        while (r.isEven() && e.isEven()) r.iushrn(1), e.iushrn(1), ++h;
                        var f = e.clone(),
                            l = r.clone();
                        while (!r.isZero()) {
                            for (var c = 0, d = 1; 0 === (r.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0) {
                                r.iushrn(c);
                                while (c-- > 0)(i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(l)), i.iushrn(1), s.iushrn(1)
                            }
                            for (var p = 0, m = 1; 0 === (e.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0) {
                                e.iushrn(p);
                                while (p-- > 0)(a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(l)), a.iushrn(1), u.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), i.isub(a), s.isub(u)) : (e.isub(r), a.isub(i), u.isub(s))
                        }
                        return {
                            a: a,
                            b: u,
                            gcd: e.iushln(h)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i, s = new o(1),
                            a = new o(0),
                            u = e.clone();
                        while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                            for (var h = 0, f = 1; 0 === (r.words[0] & f) && h < 26; ++h, f <<= 1);
                            if (h > 0) {
                                r.iushrn(h);
                                while (h-- > 0) s.isOdd() && s.iadd(u), s.iushrn(1)
                            }
                            for (var l = 0, c = 1; 0 === (e.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0) {
                                e.iushrn(l);
                                while (l-- > 0) a.isOdd() && a.iadd(u), a.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), s.isub(a)) : (e.isub(r), a.isub(s))
                        }
                        return i = 0 === r.cmpn(1) ? s : a, i.cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            e = t.clone();
                        r.negative = 0, e.negative = 0;
                        for (var n = 0; r.isEven() && e.isEven(); n++) r.iushrn(1), e.iushrn(1);
                        do {
                            while (r.isEven()) r.iushrn(1);
                            while (e.isEven()) e.iushrn(1);
                            var i = r.cmp(e);
                            if (i < 0) {
                                var o = r;
                                r = e, e = o
                            } else if (0 === i || 0 === e.cmpn(1)) break;
                            r.isub(e)
                        } while (1);
                        return e.iushln(n)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 === (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 === (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        n("number" === typeof t);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return this._expand(e + 1), this.words[e] |= i, this;
                        for (var o = i, s = e; 0 !== o && s < this.length; s++) {
                            var a = 0 | this.words[s];
                            a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this.strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), n(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            r = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var n = 0 | this.words[e],
                                i = 0 | t.words[e];
                            if (n !== i) {
                                n < i ? r = -1 : n > i && (r = 1);
                                break
                            }
                        }
                        return r
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new N(t)
                    }, o.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var b = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function w(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function M() {
                        w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function E() {
                        w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function _() {
                        w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function A() {
                        w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function N(t) {
                        if ("string" === typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function S(t) {
                        N.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    w.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, w.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), e = this.imulK(e), e = e.iadd(this.tmp), r = e.bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, w.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, w.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(M, w), M.prototype.split = function(t, r) {
                        for (var e = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) r.words[i] = t.words[i];
                        if (r.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var o = t.words[9];
                        for (r.words[r.length++] = o & e, i = 10; i < t.length; i++) {
                            var s = 0 | t.words[i];
                            t.words[i - 10] = (s & e) << 4 | o >>> 22, o = s
                        }
                        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, M.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 0 | t.words[e];
                            r += 977 * n, t.words[e] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(E, w), i(_, w), i(A, w), A.prototype.imulK = function(t) {
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 19 * (0 | t.words[e]) + r,
                                i = 67108863 & n;
                            n >>>= 26, t.words[e] = i, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (b[t]) return b[t];
                        var r;
                        if ("k256" === t) r = new M;
                        else if ("p224" === t) r = new E;
                        else if ("p192" === t) r = new _;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new A
                        }
                        return b[t] = r, r
                    }, N.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, N.prototype._verify2 = function(t, r) {
                        n(0 === (t.negative | r.negative), "red works only with positives"), n(t.red && t.red === r.red, "red works only with red numbers")
                    }, N.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, N.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, N.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var e = t.add(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
                    }, N.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var e = t.iadd(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e
                    }, N.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.sub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, N.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.isub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e
                    }, N.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, N.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, N.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, N.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, N.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, N.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (n(r % 2 === 1), 3 === r) {
                            var e = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, e)
                        }
                        var i = this.m.subn(1),
                            s = 0;
                        while (!i.isZero() && 0 === i.andln(1)) s++, i.iushrn(1);
                        n(!i.isZero());
                        var a = new o(1).toRed(this),
                            u = a.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        f = new o(2 * f * f).toRed(this);
                        while (0 !== this.pow(f, h).cmp(u)) f.redIAdd(u);
                        var l = this.pow(f, i),
                            c = this.pow(t, i.addn(1).iushrn(1)),
                            d = this.pow(t, i),
                            p = s;
                        while (0 !== d.cmp(a)) {
                            for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                            n(g < p);
                            var v = this.pow(l, new o(1).iushln(p - g - 1));
                            c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                        }
                        return c
                    }, N.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, N.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1).toRed(this);
                        if (0 === r.cmpn(1)) return t.clone();
                        var e = 4,
                            n = new Array(1 << e);
                        n[0] = new o(1).toRed(this), n[1] = t;
                        for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
                        var s = n[0],
                            a = 0,
                            u = 0,
                            h = r.bitLength() % 26;
                        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
                            for (var f = r.words[i], l = h - 1; l >= 0; l--) {
                                var c = f >> l & 1;
                                s !== n[0] && (s = this.sqr(s)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, u++, (u === e || 0 === i && 0 === l) && (s = this.mul(s, n[a]), u = 0, a = 0)) : u = 0
                            }
                            h = 26
                        }
                        return s
                    }, N.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, N.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new S(t)
                    }, i(S, N), S.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, S.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, S.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var e = t.imul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, S.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var e = t.mul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, S.prototype.invm = function(t) {
                        var r = this.imod(t._invmp(this.m).mul(this.r2));
                        return r._forceRed(this)
                    }
                })(t, this)
            }).call(this, e("62e4")(t))
        },
        "0a7f": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return c
            })), e.d(r, "b", (function() {
                return d
            }));
            var n = e("549e"),
                i = e("8424"),
                o = e("5273"),
                s = e("6f5a"),
                a = e("ffb2"),
                u = e("5873");
            const h = new a["a"](u["a"]),
                f = new Uint8Array(32);
            f.fill(0);
            const l = new RegExp("^((.*)\\.)?([^.]+)$");

            function c(t) {
                try {
                    const r = t.split(".");
                    for (let t = 0; t < r.length; t++)
                        if (0 === Object(i["a"])(r[t]).length) throw new Error("empty");
                    return !0
                } catch (r) {}
                return !1
            }

            function d(t) {
                "string" !== typeof t && h.throwArgumentError("invalid ENS name; not a string", "name", t);
                let r = t,
                    e = f;
                while (r.length) {
                    const a = r.match(l);
                    null != a && "" !== a[2] || h.throwArgumentError("invalid ENS address; missing component", "name", t);
                    const u = Object(o["f"])(Object(i["a"])(a[3]));
                    e = Object(s["a"])(Object(n["b"])([e, Object(s["a"])(u)])), r = a[2] || ""
                }
                return Object(n["i"])(e)
            }
        },
        "0d17": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return p
            })), e.d(r, "b", (function() {
                return m
            }));
            var n = e("549e"),
                i = e("ffb2"),
                o = e("a960"),
                s = e("e36d");
            const a = new i["a"](o["a"]),
                u = {},
                h = s["a"].from(0),
                f = s["a"].from(-1);

            function l(t, r, e, n) {
                const o = {
                    fault: r,
                    operation: e
                };
                return void 0 !== n && (o.value = n), a.throwError(t, i["a"].errors.NUMERIC_FAULT, o)
            }
            let c = "0";
            while (c.length < 256) c += c;

            function d(t) {
                if ("number" !== typeof t) try {
                    t = s["a"].from(t).toNumber()
                } catch (r) {}
                return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + c.substring(0, t) : a.throwArgumentError("invalid decimal size", "decimals", t)
            }

            function p(t, r) {
                null == r && (r = 0);
                const e = d(r);
                t = s["a"].from(t);
                const n = t.lt(h);
                n && (t = t.mul(f));
                let i = t.mod(e).toString();
                while (i.length < e.length - 1) i = "0" + i;
                i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                const o = t.div(e).toString();
                return t = 1 === e.length ? o : o + "." + i, n && (t = "-" + t), t
            }

            function m(t, r) {
                null == r && (r = 0);
                const e = d(r);
                "string" === typeof t && t.match(/^-?[0-9.]+$/) || a.throwArgumentError("invalid decimal value", "value", t);
                const n = "-" === t.substring(0, 1);
                n && (t = t.substring(1)), "." === t && a.throwArgumentError("missing value", "value", t);
                const i = t.split(".");
                i.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
                let o = i[0],
                    u = i[1];
                o || (o = "0"), u || (u = "0");
                while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
                u.length > e.length - 1 && l("fractional component exceeds decimals", "underflow", "parseFixed"), "" === u && (u = "0");
                while (u.length < e.length - 1) u += "0";
                const h = s["a"].from(o),
                    c = s["a"].from(u);
                let p = h.mul(e).add(c);
                return n && (p = p.mul(f)), p
            }
            class g {
                constructor(t, r, e, n) {
                    t !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i["a"].errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = r, this.width = e, this.decimals = n, this.name = (r ? "" : "u") + "fixed" + String(e) + "x" + String(n), this._multiplier = d(n), Object.freeze(this)
                }
                static from(t) {
                    if (t instanceof g) return t;
                    "number" === typeof t && (t = "fixed128x" + t);
                    let r = !0,
                        e = 128,
                        n = 18;
                    if ("string" === typeof t)
                        if ("fixed" === t);
                        else if ("ufixed" === t) r = !1;
                    else {
                        const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        i || a.throwArgumentError("invalid fixed format", "format", t), r = "u" !== i[1], e = parseInt(i[2]), n = parseInt(i[3])
                    } else if (t) {
                        const i = (r, e, n) => null == t[r] ? n : (typeof t[r] !== e && a.throwArgumentError("invalid fixed format (" + r + " not " + e + ")", "format." + r, t[r]), t[r]);
                        r = i("signed", "boolean", r), e = i("width", "number", e), n = i("decimals", "number", n)
                    }
                    return e % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", e), n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new g(u, r, e, n)
                }
            }
            class v {
                constructor(t, r, e, n) {
                    a.checkNew(new.target, v), t !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i["a"].errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = n, this._hex = r, this._value = e, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(t) {
                    this.format.name !== t.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
                }
                addUnsafe(t) {
                    this._checkFormat(t);
                    const r = m(this._value, this.format.decimals),
                        e = m(t._value, t.format.decimals);
                    return v.fromValue(r.add(e), this.format.decimals, this.format)
                }
                subUnsafe(t) {
                    this._checkFormat(t);
                    const r = m(this._value, this.format.decimals),
                        e = m(t._value, t.format.decimals);
                    return v.fromValue(r.sub(e), this.format.decimals, this.format)
                }
                mulUnsafe(t) {
                    this._checkFormat(t);
                    const r = m(this._value, this.format.decimals),
                        e = m(t._value, t.format.decimals);
                    return v.fromValue(r.mul(e).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(t) {
                    this._checkFormat(t);
                    const r = m(this._value, this.format.decimals),
                        e = m(t._value, t.format.decimals);
                    return v.fromValue(r.mul(this.format._multiplier).div(e), this.format.decimals, this.format)
                }
                floor() {
                    const t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let r = v.from(t[0], this.format);
                    const e = !t[1].match(/^(0*)$/);
                    return this.isNegative() && e && (r = r.subUnsafe(y.toFormat(r.format))), r
                }
                ceiling() {
                    const t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let r = v.from(t[0], this.format);
                    const e = !t[1].match(/^(0*)$/);
                    return !this.isNegative() && e && (r = r.addUnsafe(y.toFormat(r.format))), r
                }
                round(t) {
                    null == t && (t = 0);
                    const r = this.toString().split(".");
                    if (1 === r.length && r.push("0"), (t < 0 || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t), r[1].length <= t) return this;
                    const e = v.from("1" + c.substring(0, t), this.format),
                        n = b.toFormat(this.format);
                    return this.mulUnsafe(e).addUnsafe(n).floor().divUnsafe(e)
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value
                }
                isNegative() {
                    return "-" === this._value[0]
                }
                toString() {
                    return this._value
                }
                toHexString(t) {
                    if (null == t) return this._hex;
                    t % 8 && a.throwArgumentError("invalid byte width", "width", t);
                    const r = s["a"].from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
                    return Object(n["h"])(r, t / 8)
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return v.fromString(this._value, t)
                }
                static fromValue(t, r, e) {
                    return null != e || null == r || Object(s["d"])(r) || (e = r, r = null), null == r && (r = 0), null == e && (e = "fixed"), v.fromString(p(t, r), g.from(e))
                }
                static fromString(t, r) {
                    null == r && (r = "fixed");
                    const e = g.from(r),
                        i = m(t, e.decimals);
                    !e.signed && i.lt(h) && l("unsigned value cannot be negative", "overflow", "value", t);
                    let o = null;
                    e.signed ? o = i.toTwos(e.width).toHexString() : (o = i.toHexString(), o = Object(n["h"])(o, e.width / 8));
                    const s = p(i, e.decimals);
                    return new v(u, o, s, e)
                }
                static fromBytes(t, r) {
                    null == r && (r = "fixed");
                    const e = g.from(r);
                    if (Object(n["a"])(t).length > e.width / 8) throw new Error("overflow");
                    let i = s["a"].from(t);
                    e.signed && (i = i.fromTwos(e.width));
                    const o = i.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
                        a = p(i, e.decimals);
                    return new v(u, o, a, e)
                }
                static from(t, r) {
                    if ("string" === typeof t) return v.fromString(t, r);
                    if (Object(n["j"])(t)) return v.fromBytes(t, r);
                    try {
                        return v.fromValue(t, 0, r)
                    } catch (e) {
                        if (e.code !== i["a"].errors.INVALID_ARGUMENT) throw e
                    }
                    return a.throwArgumentError("invalid FixedNumber value", "value", t)
                }
                static isFixedNumber(t) {
                    return !(!t || !t._isFixedNumber)
                }
            }
            const y = v.from(1),
                b = v.from("0.5")
        },
        "11b0": function(t, r) {
            function e(t) {
                if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "1b18": function(t, r, e) {
            "use strict";
            (function(t) {
                e.d(r, "a", (function() {
                    return K
                }));
                var n = e("9798"),
                    i = e.n(n),
                    o = e("7d92"),
                    s = e.n(o);
                "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t || "undefined" !== typeof self && self;

                function a(t, r, e) {
                    return e = {
                        path: r,
                        exports: {},
                        require: function(t, r) {
                            return u(t, void 0 === r || null === r ? e.path : r)
                        }
                    }, t(e, e.exports), e.exports
                }

                function u() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }
                var h = f;

                function f(t, r) {
                    if (!t) throw new Error(r || "Assertion failed")
                }
                f.equal = function(t, r, e) {
                    if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
                };
                var l = a((function(t, r) {
                        var e = r;

                        function n(t, r) {
                            if (Array.isArray(t)) return t.slice();
                            if (!t) return [];
                            var e = [];
                            if ("string" !== typeof t) {
                                for (var n = 0; n < t.length; n++) e[n] = 0 | t[n];
                                return e
                            }
                            if ("hex" === r) {
                                t = t.replace(/[^a-z0-9]+/gi, ""), t.length % 2 !== 0 && (t = "0" + t);
                                for (n = 0; n < t.length; n += 2) e.push(parseInt(t[n] + t[n + 1], 16))
                            } else
                                for (n = 0; n < t.length; n++) {
                                    var i = t.charCodeAt(n),
                                        o = i >> 8,
                                        s = 255 & i;
                                    o ? e.push(o, s) : e.push(s)
                                }
                            return e
                        }

                        function i(t) {
                            return 1 === t.length ? "0" + t : t
                        }

                        function o(t) {
                            for (var r = "", e = 0; e < t.length; e++) r += i(t[e].toString(16));
                            return r
                        }
                        e.toArray = n, e.zero2 = i, e.toHex = o, e.encode = function(t, r) {
                            return "hex" === r ? o(t) : t
                        }
                    })),
                    c = a((function(t, r) {
                        var e = r;

                        function n(t, r, e) {
                            var n = new Array(Math.max(t.bitLength(), e) + 1);
                            n.fill(0);
                            for (var i = 1 << r + 1, o = t.clone(), s = 0; s < n.length; s++) {
                                var a, u = o.andln(i - 1);
                                o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                            }
                            return n
                        }

                        function o(t, r) {
                            var e = [
                                [],
                                []
                            ];
                            t = t.clone(), r = r.clone();
                            var n, i = 0,
                                o = 0;
                            while (t.cmpn(-i) > 0 || r.cmpn(-o) > 0) {
                                var s, a, u = t.andln(3) + i & 3,
                                    h = r.andln(3) + o & 3;
                                3 === u && (u = -1), 3 === h && (h = -1), 0 === (1 & u) ? s = 0 : (n = t.andln(7) + i & 7, s = 3 !== n && 5 !== n || 2 !== h ? u : -u), e[0].push(s), 0 === (1 & h) ? a = 0 : (n = r.andln(7) + o & 7, a = 3 !== n && 5 !== n || 2 !== u ? h : -h), e[1].push(a), 2 * i === s + 1 && (i = 1 - i), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), r.iushrn(1)
                            }
                            return e
                        }

                        function s(t, r, e) {
                            var n = "_" + r;
                            t.prototype[r] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = e.call(this)
                            }
                        }

                        function a(t) {
                            return "string" === typeof t ? e.toArray(t, "hex") : t
                        }

                        function u(t) {
                            return new i.a(t, "hex", "le")
                        }
                        e.assert = h, e.toArray = l.toArray, e.zero2 = l.zero2, e.toHex = l.toHex, e.encode = l.encode, e.getNAF = n, e.getJSF = o, e.cachedProperty = s, e.parseBytes = a, e.intFromLE = u
                    })),
                    d = c.getNAF,
                    p = c.getJSF,
                    m = c.assert;

                function g(t, r) {
                    this.type = t, this.p = new i.a(r.p, 16), this.red = r.prime ? i.a.red(r.prime) : i.a.mont(this.p), this.zero = new i.a(0).toRed(this.red), this.one = new i.a(1).toRed(this.red), this.two = new i.a(2).toRed(this.red), this.n = r.n && new i.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var e = this.n && this.p.div(this.n);
                    !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var v = g;

                function y(t, r) {
                    this.curve = t, this.type = r, this.precomputed = null
                }
                g.prototype.point = function() {
                    throw new Error("Not implemented")
                }, g.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, g.prototype._fixedNafMul = function(t, r) {
                    m(t.precomputed);
                    var e = t._getDoubles(),
                        n = d(r, 1, this._bitLength),
                        i = (1 << e.step + 1) - (e.step % 2 === 0 ? 2 : 1);
                    i /= 3;
                    var o, s, a = [];
                    for (o = 0; o < n.length; o += e.step) {
                        s = 0;
                        for (var u = o + e.step - 1; u >= o; u--) s = (s << 1) + n[u];
                        a.push(s)
                    }
                    for (var h = this.jpoint(null, null, null), f = this.jpoint(null, null, null), l = i; l > 0; l--) {
                        for (o = 0; o < a.length; o++) s = a[o], s === l ? f = f.mixedAdd(e.points[o]) : s === -l && (f = f.mixedAdd(e.points[o].neg()));
                        h = h.add(f)
                    }
                    return h.toP()
                }, g.prototype._wnafMul = function(t, r) {
                    var e = 4,
                        n = t._getNAFPoints(e);
                    e = n.wnd;
                    for (var i = n.points, o = d(r, e, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                        for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
                        if (a >= 0 && u++, s = s.dblp(u), a < 0) break;
                        var h = o[a];
                        m(0 !== h), s = "affine" === t.type ? h > 0 ? s.mixedAdd(i[h - 1 >> 1]) : s.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? s.add(i[h - 1 >> 1]) : s.add(i[-h - 1 >> 1].neg())
                    }
                    return "affine" === t.type ? s.toP() : s
                }, g.prototype._wnafMulAdd = function(t, r, e, n, i) {
                    var o, s, a, u = this._wnafT1,
                        h = this._wnafT2,
                        f = this._wnafT3,
                        l = 0;
                    for (o = 0; o < n; o++) {
                        a = r[o];
                        var c = a._getNAFPoints(t);
                        u[o] = c.wnd, h[o] = c.points
                    }
                    for (o = n - 1; o >= 1; o -= 2) {
                        var m = o - 1,
                            g = o;
                        if (1 === u[m] && 1 === u[g]) {
                            var v = [r[m], null, null, r[g]];
                            0 === r[m].y.cmp(r[g].y) ? (v[1] = r[m].add(r[g]), v[2] = r[m].toJ().mixedAdd(r[g].neg())) : 0 === r[m].y.cmp(r[g].y.redNeg()) ? (v[1] = r[m].toJ().mixedAdd(r[g]), v[2] = r[m].add(r[g].neg())) : (v[1] = r[m].toJ().mixedAdd(r[g]), v[2] = r[m].toJ().mixedAdd(r[g].neg()));
                            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                b = p(e[m], e[g]);
                            for (l = Math.max(b[0].length, l), f[m] = new Array(l), f[g] = new Array(l), s = 0; s < l; s++) {
                                var w = 0 | b[0][s],
                                    M = 0 | b[1][s];
                                f[m][s] = y[3 * (w + 1) + (M + 1)], f[g][s] = 0, h[m] = v
                            }
                        } else f[m] = d(e[m], u[m], this._bitLength), f[g] = d(e[g], u[g], this._bitLength), l = Math.max(f[m].length, l), l = Math.max(f[g].length, l)
                    }
                    var E = this.jpoint(null, null, null),
                        _ = this._wnafT4;
                    for (o = l; o >= 0; o--) {
                        var A = 0;
                        while (o >= 0) {
                            var N = !0;
                            for (s = 0; s < n; s++) _[s] = 0 | f[s][o], 0 !== _[s] && (N = !1);
                            if (!N) break;
                            A++, o--
                        }
                        if (o >= 0 && A++, E = E.dblp(A), o < 0) break;
                        for (s = 0; s < n; s++) {
                            var S = _[s];
                            0 !== S && (S > 0 ? a = h[s][S - 1 >> 1] : S < 0 && (a = h[s][-S - 1 >> 1].neg()), E = "affine" === a.type ? E.mixedAdd(a) : E.add(a))
                        }
                    }
                    for (o = 0; o < n; o++) h[o] = null;
                    return i ? E : E.toP()
                }, g.BasePoint = y, y.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, y.prototype.validate = function() {
                    return this.curve.validate(this)
                }, g.prototype.decodePoint = function(t, r) {
                    t = c.toArray(t, r);
                    var e = this.p.byteLength();
                    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 === 2 * e) {
                        6 === t[0] ? m(t[t.length - 1] % 2 === 0) : 7 === t[0] && m(t[t.length - 1] % 2 === 1);
                        var n = this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
                        return n
                    }
                    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e) return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
                    throw new Error("Unknown point format")
                }, y.prototype.encodeCompressed = function(t) {
                    return this.encode(t, !0)
                }, y.prototype._encode = function(t) {
                    var r = this.curve.p.byteLength(),
                        e = this.getX().toArray("be", r);
                    return t ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", r))
                }, y.prototype.encode = function(t, r) {
                    return c.encode(this._encode(r), t)
                }, y.prototype.precompute = function(t) {
                    if (this.precomputed) return this;
                    var r = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this
                }, y.prototype._hasDoubles = function(t) {
                    if (!this.precomputed) return !1;
                    var r = this.precomputed.doubles;
                    return !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
                }, y.prototype._getDoubles = function(t, r) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var e = [this], n = this, i = 0; i < r; i += t) {
                        for (var o = 0; o < t; o++) n = n.dbl();
                        e.push(n)
                    }
                    return {
                        step: t,
                        points: e
                    }
                }, y.prototype._getNAFPoints = function(t) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var r = [this], e = (1 << t) - 1, n = 1 === e ? null : this.dbl(), i = 1; i < e; i++) r[i] = r[i - 1].add(n);
                    return {
                        wnd: t,
                        points: r
                    }
                }, y.prototype._getBeta = function() {
                    return null
                }, y.prototype.dblp = function(t) {
                    for (var r = this, e = 0; e < t; e++) r = r.dbl();
                    return r
                };
                var b = a((function(t) {
                        "function" === typeof Object.create ? t.exports = function(t, r) {
                            r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(t, r) {
                            if (r) {
                                t.super_ = r;
                                var e = function() {};
                                e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                            }
                        }
                    })),
                    w = c.assert;

                function M(t) {
                    v.call(this, "short", t), this.a = new i.a(t.a, 16).toRed(this.red), this.b = new i.a(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                b(M, v);
                var E = M;

                function _(t, r, e, n) {
                    v.BasePoint.call(this, t, "affine"), null === r && null === e ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i.a(r, 16), this.y = new i.a(e, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function A(t, r, e, n) {
                    v.BasePoint.call(this, t, "jacobian"), null === r && null === e && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i.a(0)) : (this.x = new i.a(r, 16), this.y = new i.a(e, 16), this.z = new i.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                M.prototype._getEndomorphism = function(t) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var r, e, n;
                        if (t.beta) r = new i.a(t.beta, 16).toRed(this.red);
                        else {
                            var o = this._getEndoRoots(this.p);
                            r = o[0].cmp(o[1]) < 0 ? o[0] : o[1], r = r.toRed(this.red)
                        }
                        if (t.lambda) e = new i.a(t.lambda, 16);
                        else {
                            var s = this._getEndoRoots(this.n);
                            0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(r)) ? e = s[0] : (e = s[1], w(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))))
                        }
                        return n = t.basis ? t.basis.map((function(t) {
                            return {
                                a: new i.a(t.a, 16),
                                b: new i.a(t.b, 16)
                            }
                        })) : this._getEndoBasis(e), {
                            beta: r,
                            lambda: e,
                            basis: n
                        }
                    }
                }, M.prototype._getEndoRoots = function(t) {
                    var r = t === this.p ? this.red : i.a.mont(t),
                        e = new i.a(2).toRed(r).redInvm(),
                        n = e.redNeg(),
                        o = new i.a(3).toRed(r).redNeg().redSqrt().redMul(e),
                        s = n.redAdd(o).fromRed(),
                        a = n.redSub(o).fromRed();
                    return [s, a]
                }, M.prototype._getEndoBasis = function(t) {
                    var r, e, n, o, s, a, u, h, f, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                        c = t,
                        d = this.n.clone(),
                        p = new i.a(1),
                        m = new i.a(0),
                        g = new i.a(0),
                        v = new i.a(1),
                        y = 0;
                    while (0 !== c.cmpn(0)) {
                        var b = d.div(c);
                        h = d.sub(b.mul(c)), f = g.sub(b.mul(p));
                        var w = v.sub(b.mul(m));
                        if (!n && h.cmp(l) < 0) r = u.neg(), e = p, n = h.neg(), o = f;
                        else if (n && 2 === ++y) break;
                        u = h, d = c, c = h, g = p, p = f, v = m, m = w
                    }
                    s = h.neg(), a = f;
                    var M = n.sqr().add(o.sqr()),
                        E = s.sqr().add(a.sqr());
                    return E.cmp(M) >= 0 && (s = r, a = e), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                        a: n,
                        b: o
                    }, {
                        a: s,
                        b: a
                    }]
                }, M.prototype._endoSplit = function(t) {
                    var r = this.endo.basis,
                        e = r[0],
                        n = r[1],
                        i = n.b.mul(t).divRound(this.n),
                        o = e.b.neg().mul(t).divRound(this.n),
                        s = i.mul(e.a),
                        a = o.mul(n.a),
                        u = i.mul(e.b),
                        h = o.mul(n.b),
                        f = t.sub(s).sub(a),
                        l = u.add(h).neg();
                    return {
                        k1: f,
                        k2: l
                    }
                }, M.prototype.pointFromX = function(t, r) {
                    t = new i.a(t, 16), t.red || (t = t.toRed(this.red));
                    var e = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                        n = e.redSqrt();
                    if (0 !== n.redSqr().redSub(e).cmp(this.zero)) throw new Error("invalid point");
                    var o = n.fromRed().isOdd();
                    return (r && !o || !r && o) && (n = n.redNeg()), this.point(t, n)
                }, M.prototype.validate = function(t) {
                    if (t.inf) return !0;
                    var r = t.x,
                        e = t.y,
                        n = this.a.redMul(r),
                        i = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
                    return 0 === e.redSqr().redISub(i).cmpn(0)
                }, M.prototype._endoWnafMulAdd = function(t, r, e) {
                    for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                        var s = this._endoSplit(r[o]),
                            a = t[o],
                            u = a._getBeta();
                        s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                    }
                    for (var h = this._wnafMulAdd(1, n, i, 2 * o, e), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null;
                    return h
                }, b(_, v.BasePoint), M.prototype.point = function(t, r, e) {
                    return new _(this, t, r, e)
                }, M.prototype.pointFromJSON = function(t, r) {
                    return _.fromJSON(this, t, r)
                }, _.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var t = this.precomputed;
                        if (t && t.beta) return t.beta;
                        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (t) {
                            var e = this.curve,
                                n = function(t) {
                                    return e.point(t.x.redMul(e.endo.beta), t.y)
                                };
                            t.beta = r, r.precomputed = {
                                beta: null,
                                naf: t.naf && {
                                    wnd: t.naf.wnd,
                                    points: t.naf.points.map(n)
                                },
                                doubles: t.doubles && {
                                    step: t.doubles.step,
                                    points: t.doubles.points.map(n)
                                }
                            }
                        }
                        return r
                    }
                }, _.prototype.toJSON = function() {
                    return this.precomputed ? [this.x, this.y, this.precomputed && {
                        doubles: this.precomputed.doubles && {
                            step: this.precomputed.doubles.step,
                            points: this.precomputed.doubles.points.slice(1)
                        },
                        naf: this.precomputed.naf && {
                            wnd: this.precomputed.naf.wnd,
                            points: this.precomputed.naf.points.slice(1)
                        }
                    }] : [this.x, this.y]
                }, _.fromJSON = function(t, r, e) {
                    "string" === typeof r && (r = JSON.parse(r));
                    var n = t.point(r[0], r[1], e);
                    if (!r[2]) return n;

                    function i(r) {
                        return t.point(r[0], r[1], e)
                    }
                    var o = r[2];
                    return n.precomputed = {
                        beta: null,
                        doubles: o.doubles && {
                            step: o.doubles.step,
                            points: [n].concat(o.doubles.points.map(i))
                        },
                        naf: o.naf && {
                            wnd: o.naf.wnd,
                            points: [n].concat(o.naf.points.map(i))
                        }
                    }, n
                }, _.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, _.prototype.isInfinity = function() {
                    return this.inf
                }, _.prototype.add = function(t) {
                    if (this.inf) return t;
                    if (t.inf) return this;
                    if (this.eq(t)) return this.dbl();
                    if (this.neg().eq(t)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                    var r = this.y.redSub(t.y);
                    0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
                    var e = r.redSqr().redISub(this.x).redISub(t.x),
                        n = r.redMul(this.x.redSub(e)).redISub(this.y);
                    return this.curve.point(e, n)
                }, _.prototype.dbl = function() {
                    if (this.inf) return this;
                    var t = this.y.redAdd(this.y);
                    if (0 === t.cmpn(0)) return this.curve.point(null, null);
                    var r = this.curve.a,
                        e = this.x.redSqr(),
                        n = t.redInvm(),
                        i = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(n),
                        o = i.redSqr().redISub(this.x.redAdd(this.x)),
                        s = i.redMul(this.x.redSub(o)).redISub(this.y);
                    return this.curve.point(o, s)
                }, _.prototype.getX = function() {
                    return this.x.fromRed()
                }, _.prototype.getY = function() {
                    return this.y.fromRed()
                }, _.prototype.mul = function(t) {
                    return t = new i.a(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
                }, _.prototype.mulAdd = function(t, r, e) {
                    var n = [this, r],
                        i = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
                }, _.prototype.jmulAdd = function(t, r, e) {
                    var n = [this, r],
                        i = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
                }, _.prototype.eq = function(t) {
                    return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
                }, _.prototype.neg = function(t) {
                    if (this.inf) return this;
                    var r = this.curve.point(this.x, this.y.redNeg());
                    if (t && this.precomputed) {
                        var e = this.precomputed,
                            n = function(t) {
                                return t.neg()
                            };
                        r.precomputed = {
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(n)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(n)
                            }
                        }
                    }
                    return r
                }, _.prototype.toJ = function() {
                    if (this.inf) return this.curve.jpoint(null, null, null);
                    var t = this.curve.jpoint(this.x, this.y, this.curve.one);
                    return t
                }, b(A, v.BasePoint), M.prototype.jpoint = function(t, r, e) {
                    return new A(this, t, r, e)
                }, A.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var t = this.z.redInvm(),
                        r = t.redSqr(),
                        e = this.x.redMul(r),
                        n = this.y.redMul(r).redMul(t);
                    return this.curve.point(e, n)
                }, A.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, A.prototype.add = function(t) {
                    if (this.isInfinity()) return t;
                    if (t.isInfinity()) return this;
                    var r = t.z.redSqr(),
                        e = this.z.redSqr(),
                        n = this.x.redMul(r),
                        i = t.x.redMul(e),
                        o = this.y.redMul(r.redMul(t.z)),
                        s = t.y.redMul(e.redMul(this.z)),
                        a = n.redSub(i),
                        u = o.redSub(s);
                    if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h = a.redSqr(),
                        f = h.redMul(a),
                        l = n.redMul(h),
                        c = u.redSqr().redIAdd(f).redISub(l).redISub(l),
                        d = u.redMul(l.redISub(c)).redISub(o.redMul(f)),
                        p = this.z.redMul(t.z).redMul(a);
                    return this.curve.jpoint(c, d, p)
                }, A.prototype.mixedAdd = function(t) {
                    if (this.isInfinity()) return t.toJ();
                    if (t.isInfinity()) return this;
                    var r = this.z.redSqr(),
                        e = this.x,
                        n = t.x.redMul(r),
                        i = this.y,
                        o = t.y.redMul(r).redMul(this.z),
                        s = e.redSub(n),
                        a = i.redSub(o);
                    if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var u = s.redSqr(),
                        h = u.redMul(s),
                        f = e.redMul(u),
                        l = a.redSqr().redIAdd(h).redISub(f).redISub(f),
                        c = a.redMul(f.redISub(l)).redISub(i.redMul(h)),
                        d = this.z.redMul(s);
                    return this.curve.jpoint(l, c, d)
                }, A.prototype.dblp = function(t) {
                    if (0 === t) return this;
                    if (this.isInfinity()) return this;
                    if (!t) return this.dbl();
                    var r;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var e = this;
                        for (r = 0; r < t; r++) e = e.dbl();
                        return e
                    }
                    var n = this.curve.a,
                        i = this.curve.tinv,
                        o = this.x,
                        s = this.y,
                        a = this.z,
                        u = a.redSqr().redSqr(),
                        h = s.redAdd(s);
                    for (r = 0; r < t; r++) {
                        var f = o.redSqr(),
                            l = h.redSqr(),
                            c = l.redSqr(),
                            d = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
                            p = o.redMul(l),
                            m = d.redSqr().redISub(p.redAdd(p)),
                            g = p.redISub(m),
                            v = d.redMul(g);
                        v = v.redIAdd(v).redISub(c);
                        var y = h.redMul(a);
                        r + 1 < t && (u = u.redMul(c)), o = m, a = y, h = v
                    }
                    return this.curve.jpoint(o, h.redMul(i), a)
                }, A.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, A.prototype._zeroDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            i = this.y.redSqr(),
                            o = i.redSqr(),
                            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var a = n.redAdd(n).redIAdd(n),
                            u = a.redSqr().redISub(s).redISub(s),
                            h = o.redIAdd(o);
                        h = h.redIAdd(h), h = h.redIAdd(h), t = u, r = a.redMul(s.redISub(u)).redISub(h), e = this.y.redAdd(this.y)
                    } else {
                        var f = this.x.redSqr(),
                            l = this.y.redSqr(),
                            c = l.redSqr(),
                            d = this.x.redAdd(l).redSqr().redISub(f).redISub(c);
                        d = d.redIAdd(d);
                        var p = f.redAdd(f).redIAdd(f),
                            m = p.redSqr(),
                            g = c.redIAdd(c);
                        g = g.redIAdd(g), g = g.redIAdd(g), t = m.redISub(d).redISub(d), r = p.redMul(d.redISub(t)).redISub(g), e = this.y.redMul(this.z), e = e.redIAdd(e)
                    }
                    return this.curve.jpoint(t, r, e)
                }, A.prototype._threeDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            i = this.y.redSqr(),
                            o = i.redSqr(),
                            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            u = a.redSqr().redISub(s).redISub(s);
                        t = u;
                        var h = o.redIAdd(o);
                        h = h.redIAdd(h), h = h.redIAdd(h), r = a.redMul(s.redISub(u)).redISub(h), e = this.y.redAdd(this.y)
                    } else {
                        var f = this.z.redSqr(),
                            l = this.y.redSqr(),
                            c = this.x.redMul(l),
                            d = this.x.redSub(f).redMul(this.x.redAdd(f));
                        d = d.redAdd(d).redIAdd(d);
                        var p = c.redIAdd(c);
                        p = p.redIAdd(p);
                        var m = p.redAdd(p);
                        t = d.redSqr().redISub(m), e = this.y.redAdd(this.z).redSqr().redISub(l).redISub(f);
                        var g = l.redSqr();
                        g = g.redIAdd(g), g = g.redIAdd(g), g = g.redIAdd(g), r = d.redMul(p.redISub(t)).redISub(g)
                    }
                    return this.curve.jpoint(t, r, e)
                }, A.prototype._dbl = function() {
                    var t = this.curve.a,
                        r = this.x,
                        e = this.y,
                        n = this.z,
                        i = n.redSqr().redSqr(),
                        o = r.redSqr(),
                        s = e.redSqr(),
                        a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                        u = r.redAdd(r);
                    u = u.redIAdd(u);
                    var h = u.redMul(s),
                        f = a.redSqr().redISub(h.redAdd(h)),
                        l = h.redISub(f),
                        c = s.redSqr();
                    c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                    var d = a.redMul(l).redISub(c),
                        p = e.redAdd(e).redMul(n);
                    return this.curve.jpoint(f, d, p)
                }, A.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var t = this.x.redSqr(),
                        r = this.y.redSqr(),
                        e = this.z.redSqr(),
                        n = r.redSqr(),
                        i = t.redAdd(t).redIAdd(t),
                        o = i.redSqr(),
                        s = this.x.redAdd(r).redSqr().redISub(t).redISub(n);
                    s = s.redIAdd(s), s = s.redAdd(s).redIAdd(s), s = s.redISub(o);
                    var a = s.redSqr(),
                        u = n.redIAdd(n);
                    u = u.redIAdd(u), u = u.redIAdd(u), u = u.redIAdd(u);
                    var h = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
                        f = r.redMul(h);
                    f = f.redIAdd(f), f = f.redIAdd(f);
                    var l = this.x.redMul(a).redISub(f);
                    l = l.redIAdd(l), l = l.redIAdd(l);
                    var c = this.y.redMul(h.redMul(u.redISub(h)).redISub(s.redMul(a)));
                    c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                    var d = this.z.redAdd(s).redSqr().redISub(e).redISub(a);
                    return this.curve.jpoint(l, c, d)
                }, A.prototype.mul = function(t, r) {
                    return t = new i.a(t, r), this.curve._wnafMul(this, t)
                }, A.prototype.eq = function(t) {
                    if ("affine" === t.type) return this.eq(t.toJ());
                    if (this === t) return !0;
                    var r = this.z.redSqr(),
                        e = t.z.redSqr();
                    if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0)) return !1;
                    var n = r.redMul(this.z),
                        i = e.redMul(t.z);
                    return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
                }, A.prototype.eqXToP = function(t) {
                    var r = this.z.redSqr(),
                        e = t.toRed(this.curve.red).redMul(r);
                    if (0 === this.x.cmp(e)) return !0;
                    for (var n = t.clone(), i = this.curve.redN.redMul(r);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (e.redIAdd(i), 0 === this.x.cmp(e)) return !0
                    }
                }, A.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, A.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var N = a((function(t, r) {
                        var e = r;
                        e.base = v, e.short = E, e.mont = null, e.edwards = null
                    })),
                    S = a((function(t, r) {
                        var e, n = r,
                            i = c.assert;

                        function o(t) {
                            "short" === t.type ? this.curve = new N.short(t) : "edwards" === t.type ? this.curve = new N.edwards(t) : this.curve = new N.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function a(t, r) {
                            Object.defineProperty(n, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var e = new o(r);
                                    return Object.defineProperty(n, t, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: e
                                    }), e
                                }
                            })
                        }
                        n.PresetCurve = o, a("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), a("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), a("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), a("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: s.a.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), a("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: s.a.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), a("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), a("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            e = null.crash()
                        } catch (u) {
                            e = void 0
                        }
                        a("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: s.a.sha256,
                            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                            basis: [{
                                a: "3086d221a7d46bcde86c90e49284eb15",
                                b: "-e4437ed6010e88286f547fa90abfe4c3"
                            }, {
                                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                b: "3086d221a7d46bcde86c90e49284eb15"
                            }],
                            gRed: !1,
                            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", e]
                        })
                    }));

                function x(t) {
                    if (!(this instanceof x)) return new x(t);
                    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var r = l.toArray(t.entropy, t.entropyEnc || "hex"),
                        e = l.toArray(t.nonce, t.nonceEnc || "hex"),
                        n = l.toArray(t.pers, t.persEnc || "hex");
                    h(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, e, n)
                }
                var I = x;
                x.prototype._init = function(t, r, e) {
                    var n = t.concat(r).concat(e);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, x.prototype._hmac = function() {
                    return new s.a.hmac(this.hash, this.K)
                }, x.prototype._update = function(t) {
                    var r = this._hmac().update(this.V).update([0]);
                    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
                }, x.prototype.reseed = function(t, r, e, n) {
                    "string" !== typeof r && (n = e, e = r, r = null), t = l.toArray(t, r), e = l.toArray(e, n), h(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(e || [])), this._reseed = 1
                }, x.prototype.generate = function(t, r, e, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" !== typeof r && (n = e, e = r, r = null), e && (e = l.toArray(e, n || "hex"), this._update(e));
                    var i = [];
                    while (i.length < t) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                    var o = i.slice(0, t);
                    return this._update(e), this._reseed++, l.encode(o, r)
                };
                var O = c.assert;

                function R(t, r) {
                    this.ec = t, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
                }
                var P = R;
                R.fromPublic = function(t, r, e) {
                    return r instanceof R ? r : new R(t, {
                        pub: r,
                        pubEnc: e
                    })
                }, R.fromPrivate = function(t, r, e) {
                    return r instanceof R ? r : new R(t, {
                        priv: r,
                        privEnc: e
                    })
                }, R.prototype.validate = function() {
                    var t = this.getPublic();
                    return t.isInfinity() ? {
                        result: !1,
                        reason: "Invalid public key"
                    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "Public key * N != O"
                    } : {
                        result: !1,
                        reason: "Public key is not a point"
                    }
                }, R.prototype.getPublic = function(t, r) {
                    return "string" === typeof t && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
                }, R.prototype.getPrivate = function(t) {
                    return "hex" === t ? this.priv.toString(16, 2) : this.priv
                }, R.prototype._importPrivate = function(t, r) {
                    this.priv = new i.a(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, R.prototype._importPublic = function(t, r) {
                    if (t.x || t.y) return "mont" === this.ec.curve.type ? O(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || O(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                    this.pub = this.ec.curve.decodePoint(t, r)
                }, R.prototype.derive = function(t) {
                    return t.validate() || O(t.validate(), "public point not validated"), t.mul(this.priv).getX()
                }, R.prototype.sign = function(t, r, e) {
                    return this.ec.sign(t, this, r, e)
                }, R.prototype.verify = function(t, r) {
                    return this.ec.verify(t, r, this)
                }, R.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var T = c.assert;

                function U(t, r) {
                    if (t instanceof U) return t;
                    this._importDER(t, r) || (T(t.r && t.s, "Signature without r or s"), this.r = new i.a(t.r, 16), this.s = new i.a(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
                }
                var k = U;

                function C() {
                    this.place = 0
                }

                function j(t, r) {
                    var e = t[r.place++];
                    if (!(128 & e)) return e;
                    var n = 15 & e;
                    if (0 === n || n > 4) return !1;
                    for (var i = 0, o = 0, s = r.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                    return !(i <= 127) && (r.place = s, i)
                }

                function F(t) {
                    var r = 0,
                        e = t.length - 1;
                    while (!t[r] && !(128 & t[r + 1]) && r < e) r++;
                    return 0 === r ? t : t.slice(r)
                }

                function L(t, r) {
                    if (r < 128) t.push(r);
                    else {
                        var e = 1 + (Math.log(r) / Math.LN2 >>> 3);
                        t.push(128 | e);
                        while (--e) t.push(r >>> (e << 3) & 255);
                        t.push(r)
                    }
                }
                U.prototype._importDER = function(t, r) {
                    t = c.toArray(t, r);
                    var e = new C;
                    if (48 !== t[e.place++]) return !1;
                    var n = j(t, e);
                    if (!1 === n) return !1;
                    if (n + e.place !== t.length) return !1;
                    if (2 !== t[e.place++]) return !1;
                    var o = j(t, e);
                    if (!1 === o) return !1;
                    var s = t.slice(e.place, o + e.place);
                    if (e.place += o, 2 !== t[e.place++]) return !1;
                    var a = j(t, e);
                    if (!1 === a) return !1;
                    if (t.length !== a + e.place) return !1;
                    var u = t.slice(e.place, a + e.place);
                    if (0 === s[0]) {
                        if (!(128 & s[1])) return !1;
                        s = s.slice(1)
                    }
                    if (0 === u[0]) {
                        if (!(128 & u[1])) return !1;
                        u = u.slice(1)
                    }
                    return this.r = new i.a(s), this.s = new i.a(u), this.recoveryParam = null, !0
                }, U.prototype.toDER = function(t) {
                    var r = this.r.toArray(),
                        e = this.s.toArray();
                    128 & r[0] && (r = [0].concat(r)), 128 & e[0] && (e = [0].concat(e)), r = F(r), e = F(e);
                    while (!e[0] && !(128 & e[1])) e = e.slice(1);
                    var n = [2];
                    L(n, r.length), n = n.concat(r), n.push(2), L(n, e.length);
                    var i = n.concat(e),
                        o = [48];
                    return L(o, i.length), o = o.concat(i), c.encode(o, t)
                };
                var D = function() {
                        throw new Error("unsupported")
                    },
                    q = c.assert;

                function B(t) {
                    if (!(this instanceof B)) return new B(t);
                    "string" === typeof t && (q(Object.prototype.hasOwnProperty.call(S, t), "Unknown curve " + t), t = S[t]), t instanceof S.PresetCurve && (t = {
                        curve: t
                    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
                }
                var z = B;
                B.prototype.keyPair = function(t) {
                    return new P(this, t)
                }, B.prototype.keyFromPrivate = function(t, r) {
                    return P.fromPrivate(this, t, r)
                }, B.prototype.keyFromPublic = function(t, r) {
                    return P.fromPublic(this, t, r)
                }, B.prototype.genKeyPair = function(t) {
                    t || (t = {});
                    for (var r = new I({
                            hash: this.hash,
                            pers: t.pers,
                            persEnc: t.persEnc || "utf8",
                            entropy: t.entropy || D(this.hash.hmacStrength),
                            entropyEnc: t.entropy && t.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), e = this.n.byteLength(), n = this.n.sub(new i.a(2));;) {
                        var o = new i.a(r.generate(e));
                        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                    }
                }, B.prototype._truncateToN = function(t, r) {
                    var e = 8 * t.byteLength() - this.n.bitLength();
                    return e > 0 && (t = t.ushrn(e)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
                }, B.prototype.sign = function(t, r, e, n) {
                    "object" === typeof e && (n = e, e = null), n || (n = {}), r = this.keyFromPrivate(r, e), t = this._truncateToN(new i.a(t, 16));
                    for (var o = this.n.byteLength(), s = r.getPrivate().toArray("be", o), a = t.toArray("be", o), u = new I({
                            hash: this.hash,
                            entropy: s,
                            nonce: a,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), h = this.n.sub(new i.a(1)), f = 0;; f++) {
                        var l = n.k ? n.k(f) : new i.a(u.generate(this.n.byteLength()));
                        if (l = this._truncateToN(l, !0), !(l.cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                            var c = this.g.mul(l);
                            if (!c.isInfinity()) {
                                var d = c.getX(),
                                    p = d.umod(this.n);
                                if (0 !== p.cmpn(0)) {
                                    var m = l.invm(this.n).mul(p.mul(r.getPrivate()).iadd(t));
                                    if (m = m.umod(this.n), 0 !== m.cmpn(0)) {
                                        var g = (c.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                        return n.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new k({
                                            r: p,
                                            s: m,
                                            recoveryParam: g
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, B.prototype.verify = function(t, r, e, n) {
                    t = this._truncateToN(new i.a(t, 16)), e = this.keyFromPublic(e, n), r = new k(r, "hex");
                    var o = r.r,
                        s = r.s;
                    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var a, u = s.invm(this.n),
                        h = u.mul(t).umod(this.n),
                        f = u.mul(o).umod(this.n);
                    return this.curve._maxwellTrick ? (a = this.g.jmulAdd(h, e.getPublic(), f), !a.isInfinity() && a.eqXToP(o)) : (a = this.g.mulAdd(h, e.getPublic(), f), !a.isInfinity() && 0 === a.getX().umod(this.n).cmp(o))
                }, B.prototype.recoverPubKey = function(t, r, e, n) {
                    q((3 & e) === e, "The recovery param is more than two bits"), r = new k(r, n);
                    var o = this.n,
                        s = new i.a(t),
                        a = r.r,
                        u = r.s,
                        h = 1 & e,
                        f = e >> 1;
                    if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw new Error("Unable to find sencond key candinate");
                    a = f ? this.curve.pointFromX(a.add(this.curve.n), h) : this.curve.pointFromX(a, h);
                    var l = r.r.invm(o),
                        c = o.sub(s).mul(l).umod(o),
                        d = u.mul(l).umod(o);
                    return this.g.mulAdd(c, a, d)
                }, B.prototype.getKeyRecoveryParam = function(t, r, e, n) {
                    if (r = new k(r, n), null !== r.recoveryParam) return r.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var o;
                        try {
                            o = this.recoverPubKey(t, r, i)
                        } catch (t) {
                            continue
                        }
                        if (o.eq(e)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var G = a((function(t, r) {
                        var e = r;
                        e.version = {
                            version: "6.5.4"
                        }.version, e.utils = c, e.rand = function() {
                            throw new Error("unsupported")
                        }, e.curve = N, e.curves = S, e.ec = z, e.eddsa = null
                    })),
                    K = G.ec
            }).call(this, e("c8ba"))
        },
        "1d9a": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return d
            })), e.d(r, "c", (function() {
                return y
            })), e.d(r, "b", (function() {
                return b
            }));
            var n = e("9798"),
                i = e.n(n),
                o = e("c9ac"),
                s = e("7308");
            const a = "bignumber/5.6.0";
            var u = i.a.BN;
            const h = new s["a"](a),
                f = {},
                l = 9007199254740991;
            let c = !1;
            class d {
                constructor(t, r) {
                    h.checkNew(new.target, d), t !== f && h.throwError("cannot call constructor directly; use BigNumber.from", s["a"].errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return m(g(this).fromTwos(t))
                }
                toTwos(t) {
                    return m(g(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return m(g(this).add(g(t)))
                }
                sub(t) {
                    return m(g(this).sub(g(t)))
                }
                div(t) {
                    const r = d.from(t);
                    return r.isZero() && v("division-by-zero", "div"), m(g(this).div(g(t)))
                }
                mul(t) {
                    return m(g(this).mul(g(t)))
                }
                mod(t) {
                    const r = g(t);
                    return r.isNeg() && v("division-by-zero", "mod"), m(g(this).umod(r))
                }
                pow(t) {
                    const r = g(t);
                    return r.isNeg() && v("negative-power", "pow"), m(g(this).pow(r))
                }
                and(t) {
                    const r = g(t);
                    return (this.isNegative() || r.isNeg()) && v("unbound-bitwise-result", "and"), m(g(this).and(r))
                }
                or(t) {
                    const r = g(t);
                    return (this.isNegative() || r.isNeg()) && v("unbound-bitwise-result", "or"), m(g(this).or(r))
                }
                xor(t) {
                    const r = g(t);
                    return (this.isNegative() || r.isNeg()) && v("unbound-bitwise-result", "xor"), m(g(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && v("negative-width", "mask"), m(g(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && v("negative-width", "shl"), m(g(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && v("negative-width", "shr"), m(g(this).shrn(t))
                }
                eq(t) {
                    return g(this).eq(g(t))
                }
                lt(t) {
                    return g(this).lt(g(t))
                }
                lte(t) {
                    return g(this).lte(g(t))
                }
                gt(t) {
                    return g(this).gt(g(t))
                }
                gte(t) {
                    return g(this).gte(g(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return g(this).isZero()
                }
                toNumber() {
                    try {
                        return g(this).toNumber()
                    } catch (t) {
                        v("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return h.throwError("this platform does not support BigInt", s["a"].errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? c || (c = !0, h.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? h.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s["a"].errors.UNEXPECTED_ARGUMENT, {}) : h.throwError("BigNumber.toString does not accept parameters", s["a"].errors.UNEXPECTED_ARGUMENT, {})), g(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof d) return t;
                    if ("string" === typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new d(f, p(t)) : t.match(/^-?[0-9]+$/) ? new d(f, p(new u(t))) : h.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" === typeof t) return t % 1 && v("underflow", "BigNumber.from", t), (t >= l || t <= -l) && v("overflow", "BigNumber.from", t), d.from(String(t));
                    const r = t;
                    if ("bigint" === typeof r) return d.from(r.toString());
                    if (Object(o["h"])(r)) return d.from(Object(o["g"])(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" === typeof t) return d.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" === typeof t && (Object(o["j"])(t) || "-" === t[0] && Object(o["j"])(t.substring(1)))) return d.from(t)
                        }
                    return h.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function p(t) {
                if ("string" !== typeof t) return p(t.toString(16));
                if ("-" === t[0]) return t = t.substring(1), "-" === t[0] && h.throwArgumentError("invalid hex", "value", t), t = p(t), "0x00" === t ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                t.length % 2 && (t = "0x0" + t.substring(2));
                while (t.length > 4 && "0x00" === t.substring(0, 4)) t = "0x" + t.substring(4);
                return t
            }

            function m(t) {
                return d.from(p(t))
            }

            function g(t) {
                const r = d.from(t).toHexString();
                return "-" === r[0] ? new u("-" + r.substring(3), 16) : new u(r.substring(2), 16)
            }

            function v(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), h.throwError(t, s["a"].errors.NUMERIC_FAULT, n)
            }

            function y(t) {
                return new u(t, 36).toString(16)
            }

            function b(t) {
                return new u(t, 16).toString(36)
            }
        },
        "207b": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return i
            })), e.d(r, "b", (function() {
                return o
            }));
            var n = e("549e");

            function i(t) {
                t = atob(t);
                const r = [];
                for (let e = 0; e < t.length; e++) r.push(t.charCodeAt(e));
                return Object(n["a"])(r)
            }

            function o(t) {
                t = Object(n["a"])(t);
                let r = "";
                for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
                return btoa(r)
            }
        },
        2236: function(t, r, e) {
            var n = e("5a43");

            function i(t) {
                if (Array.isArray(t)) return n(t)
            }
            t.exports = i, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "278c": function(t, r, e) {
            var n = e("c135"),
                i = e("9b42"),
                o = e("6613"),
                s = e("c240");

            function a(t, r) {
                return n(t) || i(t, r) || o(t, r) || s()
            }
            t.exports = a, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "2cf2": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return S
            }));
            const n = "logger/5.6.0";
            let i = !1,
                o = !1;
            const s = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let a = s["default"],
                u = null;

            function h() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }
            const f = h();
            var l, c;
            (function(t) {
                t["DEBUG"] = "DEBUG", t["INFO"] = "INFO", t["WARNING"] = "WARNING", t["ERROR"] = "ERROR", t["OFF"] = "OFF"
            })(l || (l = {})),
            function(t) {
                t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR", t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED", t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION", t["NETWORK_ERROR"] = "NETWORK_ERROR", t["SERVER_ERROR"] = "SERVER_ERROR", t["TIMEOUT"] = "TIMEOUT", t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN", t["NUMERIC_FAULT"] = "NUMERIC_FAULT", t["MISSING_NEW"] = "MISSING_NEW", t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT", t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT", t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT", t["CALL_EXCEPTION"] = "CALL_EXCEPTION", t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS", t["NONCE_EXPIRED"] = "NONCE_EXPIRED", t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED", t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT", t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"
            }(c || (c = {}));
            const d = "0123456789abcdef";
            class p {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == s[e] && this.throwArgumentError("invalid log level name", "logLevel", t), a > s[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(p.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(p.levels.INFO, t)
                }
                warn(...t) {
                    this._log(p.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (o) return this.makeError("censored error", r, {});
                    r || (r = p.errors.UNKNOWN_ERROR), e || (e = {});
                    const n = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += d[r[t] >> 4], e += d[15 & r[t]];
                                n.push(t + "=Uint8Array(0x" + e + ")")
                            } else n.push(t + "=" + JSON.stringify(r))
                        } catch (a) {
                            n.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), n.push("code=" + r), n.push("version=" + this.version);
                    const i = t;
                    let s = "";
                    switch (r) {
                        case c.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                const r = t;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result";
                                        break
                                }
                                break
                            }
                        case c.CALL_EXCEPTION:
                        case c.INSUFFICIENT_FUNDS:
                        case c.MISSING_NEW:
                        case c.NONCE_EXPIRED:
                        case c.REPLACEMENT_UNDERPRICED:
                        case c.TRANSACTION_REPLACED:
                        case c.UNPREDICTABLE_GAS_LIMIT:
                            s = r;
                            break
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    const a = new Error(t);
                    return a.reason = i, a.code = r, Object.keys(e).forEach((function(t) {
                        a[t] = e[t]
                    })), a
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, p.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, n) {
                    t || this.throwError(r, e, n)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(t, r) {
                    "number" === typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, p.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, p.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return u || (u = new p(n)), u
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), i) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!t, i = !!r
                }
                static setLogLevel(t) {
                    const r = s[t.toLowerCase()];
                    null != r ? a = r : p.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new p(t)
                }
            }
            p.errors = c, p.levels = l;
            const m = "bytes/5.6.1",
                g = new p(m);

            function v(t) {
                return !!t.toHexString
            }

            function y(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return y(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function b(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function w(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!b(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    if (!b(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function M(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    g.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    while (t) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), y(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), v(t) && (t = t.toHexString()), E(t)) {
                    let e = t.substring(2);
                    e.length % 2 && ("left" === r.hexPad ? e = "0" + e : "right" === r.hexPad ? e += "0" : g.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) n.push(parseInt(e.substring(t, t + 2), 16));
                    return y(new Uint8Array(n))
                }
                return w(t) ? y(new Uint8Array(t)) : g.throwArgumentError("invalid arrayify value", "value", t)
            }

            function E(t, r) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }
            const _ = "properties/5.6.0";
            new p(_);

            function A(t, r, e) {
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }
            class N {
                constructor(t) {
                    A(this, "alphabet", t), A(this, "base", t.length), A(this, "_alphabetMap", {}), A(this, "_leader", t.charAt(0));
                    for (let r = 0; r < t.length; r++) this._alphabetMap[t.charAt(r)] = r
                }
                encode(t) {
                    let r = M(t);
                    if (0 === r.length) return "";
                    let e = [0];
                    for (let i = 0; i < r.length; ++i) {
                        let t = r[i];
                        for (let r = 0; r < e.length; ++r) t += e[r] << 8, e[r] = t % this.base, t = t / this.base | 0;
                        while (t > 0) e.push(t % this.base), t = t / this.base | 0
                    }
                    let n = "";
                    for (let i = 0; 0 === r[i] && i < r.length - 1; ++i) n += this._leader;
                    for (let i = e.length - 1; i >= 0; --i) n += this.alphabet[e[i]];
                    return n
                }
                decode(t) {
                    if ("string" !== typeof t) throw new TypeError("Expected String");
                    let r = [];
                    if (0 === t.length) return new Uint8Array(r);
                    r.push(0);
                    for (let e = 0; e < t.length; e++) {
                        let n = this._alphabetMap[t[e]];
                        if (void 0 === n) throw new Error("Non-base" + this.base + " character");
                        let i = n;
                        for (let t = 0; t < r.length; ++t) i += r[t] * this.base, r[t] = 255 & i, i >>= 8;
                        while (i > 0) r.push(255 & i), i >>= 8
                    }
                    for (let e = 0; t[e] === this._leader && e < t.length - 1; ++e) r.push(0);
                    return M(new Uint8Array(r.reverse()))
                }
            }
            new N("abcdefghijklmnopqrstuvwxyz234567");
            const S = new N("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        3147: function(t, r, e) {
            (function(t) {
                (function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function i(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, r, e) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
                    }
                    var s;
                    "object" === typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : e(12).Buffer
                    } catch (x) {}

                    function a(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : e - 48 & 15
                    }

                    function u(t, r, e) {
                        var n = a(t, e);
                        return e - 1 >= r && (n |= a(t, e - 1) << 4), n
                    }

                    function h(t, r, e, n) {
                        for (var i = 0, o = Math.min(t.length, e), s = r; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                        }
                        return i
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, r) {
                        return t.cmp(r) > 0 ? t : r
                    }, o.min = function(t, r) {
                        return t.cmp(r) < 0 ? t : r
                    }, o.prototype._init = function(t, r, e) {
                        if ("number" === typeof t) return this._initNumber(t, r, e);
                        if ("object" === typeof t) return this._initArray(t, r, e);
                        "hex" === r && (r = 16), n(r === (0 | r) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
                        var i = 0;
                        "-" === t[0] && (i++, this.negative = 1), i < t.length && (16 === r ? this._parseHex(t, i, e) : (this._parseBase(t, r, i), "le" === e && this._initArray(this.toArray(), r, e)))
                    }, o.prototype._initNumber = function(t, r, e) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
                    }, o.prototype._initArray = function(t, r, e) {
                        if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var o, s, a = 0;
                        if ("be" === e)
                            for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        else if ("le" === e)
                            for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, r, e) {
                        this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var i, o = 0,
                            s = 0;
                        if ("be" === e)
                            for (n = t.length - 1; n >= r; n -= 2) i = u(t, r, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                        else {
                            var a = t.length - r;
                            for (n = a % 2 === 0 ? r + 1 : r; n < t.length; n += 2) i = u(t, r, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8
                        }
                        this.strip()
                    }, o.prototype._parseBase = function(t, r, e) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= r) n++;
                        n--, i = i / r | 0;
                        for (var o = t.length - e, s = o % n, a = Math.min(o, o - s) + e, u = 0, f = e; f < a; f += n) u = h(t, f, f + n, r), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== s) {
                            var l = 1;
                            for (u = h(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                            this.imuln(l), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this.strip()
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        while (this.length < t) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        while (this.length > 1 && 0 === this.words[this.length - 1]) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        c = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function d(t) {
                        for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                            var n = e / 26 | 0,
                                i = e % 26;
                            r[e] = (t.words[n] & 1 << i) >>> i
                        }
                        return r
                    }

                    function p(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | r.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            u = s / 67108864 | 0;
                        e.words[0] = a;
                        for (var h = 1; h < n; h++) {
                            for (var f = u >>> 26, l = 67108863 & u, c = Math.min(h, r.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                                var p = h - d | 0;
                                i = 0 | t.words[p], o = 0 | r.words[d], s = i * o + l, f += s / 67108864 | 0, l = 67108863 & s
                            }
                            e.words[h] = 0 | l, u = 0 | f
                        }
                        return 0 !== u ? e.words[h] = 0 | u : e.length--, e.strip()
                    }
                    o.prototype.toString = function(t, r) {
                        var e;
                        if (t = t || 10, r = 0 | r || 1, 16 === t || "hex" === t) {
                            e = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    u = (16777215 & (a << i | o)).toString(16);
                                o = a >>> 24 - i & 16777215, e = 0 !== o || s !== this.length - 1 ? f[6 - u.length] + u + e : u + e, i += 2, i >= 26 && (i -= 26, s--)
                            }
                            0 !== o && (e = o.toString(16) + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var h = l[t],
                                d = c[t];
                            e = "";
                            var p = this.clone();
                            p.negative = 0;
                            while (!p.isZero()) {
                                var m = p.modn(d).toString(t);
                                p = p.idivn(d), e = p.isZero() ? m + e : f[h - m.length] + m + e
                            }
                            this.isZero() && (e = "0" + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, r) {
                        return n("undefined" !== typeof s), this.toArrayLike(s, t, r)
                    }, o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    }, o.prototype.toArrayLike = function(t, r, e) {
                        var i = this.byteLength(),
                            o = e || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                        var s, a, u = "le" === r,
                            h = new t(o),
                            f = this.clone();
                        if (u) {
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[a] = s;
                            for (; a < o; a++) h[a] = 0
                        } else {
                            for (a = 0; a < o - i; a++) h[a] = 0;
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[o - a - 1] = s
                        }
                        return h
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 === (8191 & r) && (e += 13, r >>>= 13), 0 === (127 & r) && (e += 7, r >>>= 7), 0 === (15 & r) && (e += 4, r >>>= 4), 0 === (3 & r) && (e += 2, r >>>= 2), 0 === (1 & r) && e++, e
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var e = this._zeroBits(this.words[r]);
                            if (t += e, 26 !== e) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        while (this.length < t.length) this.words[this.length++] = 0;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
                        return this.length = r.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, e;
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0; n < e.length; n++) this.words[n] = r.words[n] ^ e.words[n];
                        if (this !== r)
                            for (; n < r.length; n++) this.words[n] = r.words[n];
                        return this.length = r.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        n("number" === typeof t && t >= 0);
                        var e = t / 26 | 0,
                            i = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << i : this.words[e] & ~(1 << i), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var r, e, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                        for (var i = 0, o = 0; o < n.length; o++) r = (0 | e.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        for (; 0 !== i && o < e.length; o++) r = (0 | e.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        if (this.length = e.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (e !== this)
                            for (; o < e.length; o++) this.words[o] = e.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var e, n, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (e = this, n = t) : (e = t, n = this);
                        for (var o = 0, s = 0; s < n.length; s++) r = (0 | e.words[s]) - (0 | n.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        for (; 0 !== o && s < e.length; s++) r = (0 | e.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        if (0 === o && s < e.length && e !== this)
                            for (; s < e.length; s++) this.words[s] = e.words[s];
                        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var m = function(t, r, e) {
                        var n, i, o, s = t.words,
                            a = r.words,
                            u = e.words,
                            h = 0,
                            f = 0 | s[0],
                            l = 8191 & f,
                            c = f >>> 13,
                            d = 0 | s[1],
                            p = 8191 & d,
                            m = d >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            y = g >>> 13,
                            b = 0 | s[3],
                            w = 8191 & b,
                            M = b >>> 13,
                            E = 0 | s[4],
                            _ = 8191 & E,
                            A = E >>> 13,
                            N = 0 | s[5],
                            S = 8191 & N,
                            x = N >>> 13,
                            I = 0 | s[6],
                            O = 8191 & I,
                            R = I >>> 13,
                            P = 0 | s[7],
                            T = 8191 & P,
                            U = P >>> 13,
                            k = 0 | s[8],
                            C = 8191 & k,
                            j = k >>> 13,
                            F = 0 | s[9],
                            L = 8191 & F,
                            D = F >>> 13,
                            q = 0 | a[0],
                            B = 8191 & q,
                            z = q >>> 13,
                            G = 0 | a[1],
                            K = 8191 & G,
                            V = G >>> 13,
                            Z = 0 | a[2],
                            X = 8191 & Z,
                            J = Z >>> 13,
                            W = 0 | a[3],
                            H = 8191 & W,
                            $ = W >>> 13,
                            Y = 0 | a[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            rt = 0 | a[5],
                            et = 8191 & rt,
                            nt = rt >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ut = 8191 & at,
                            ht = at >>> 13,
                            ft = 0 | a[8],
                            lt = 8191 & ft,
                            ct = ft >>> 13,
                            dt = 0 | a[9],
                            pt = 8191 & dt,
                            mt = dt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19, n = Math.imul(l, B), i = Math.imul(l, z), i = i + Math.imul(c, B) | 0, o = Math.imul(c, z);
                        var gt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, B), i = Math.imul(p, z), i = i + Math.imul(m, B) | 0, o = Math.imul(m, z), n = n + Math.imul(l, K) | 0, i = i + Math.imul(l, V) | 0, i = i + Math.imul(c, K) | 0, o = o + Math.imul(c, V) | 0;
                        var vt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, B), i = Math.imul(v, z), i = i + Math.imul(y, B) | 0, o = Math.imul(y, z), n = n + Math.imul(p, K) | 0, i = i + Math.imul(p, V) | 0, i = i + Math.imul(m, K) | 0, o = o + Math.imul(m, V) | 0, n = n + Math.imul(l, X) | 0, i = i + Math.imul(l, J) | 0, i = i + Math.imul(c, X) | 0, o = o + Math.imul(c, J) | 0;
                        var yt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, B), i = Math.imul(w, z), i = i + Math.imul(M, B) | 0, o = Math.imul(M, z), n = n + Math.imul(v, K) | 0, i = i + Math.imul(v, V) | 0, i = i + Math.imul(y, K) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, X) | 0, i = i + Math.imul(p, J) | 0, i = i + Math.imul(m, X) | 0, o = o + Math.imul(m, J) | 0, n = n + Math.imul(l, H) | 0, i = i + Math.imul(l, $) | 0, i = i + Math.imul(c, H) | 0, o = o + Math.imul(c, $) | 0;
                        var bt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(_, B), i = Math.imul(_, z), i = i + Math.imul(A, B) | 0, o = Math.imul(A, z), n = n + Math.imul(w, K) | 0, i = i + Math.imul(w, V) | 0, i = i + Math.imul(M, K) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(v, X) | 0, i = i + Math.imul(v, J) | 0, i = i + Math.imul(y, X) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, H) | 0, i = i + Math.imul(p, $) | 0, i = i + Math.imul(m, H) | 0, o = o + Math.imul(m, $) | 0, n = n + Math.imul(l, Q) | 0, i = i + Math.imul(l, tt) | 0, i = i + Math.imul(c, Q) | 0, o = o + Math.imul(c, tt) | 0;
                        var wt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, B), i = Math.imul(S, z), i = i + Math.imul(x, B) | 0, o = Math.imul(x, z), n = n + Math.imul(_, K) | 0, i = i + Math.imul(_, V) | 0, i = i + Math.imul(A, K) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(w, X) | 0, i = i + Math.imul(w, J) | 0, i = i + Math.imul(M, X) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(v, H) | 0, i = i + Math.imul(v, $) | 0, i = i + Math.imul(y, H) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = i + Math.imul(p, tt) | 0, i = i + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0, n = n + Math.imul(l, et) | 0, i = i + Math.imul(l, nt) | 0, i = i + Math.imul(c, et) | 0, o = o + Math.imul(c, nt) | 0;
                        var Mt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, B), i = Math.imul(O, z), i = i + Math.imul(R, B) | 0, o = Math.imul(R, z), n = n + Math.imul(S, K) | 0, i = i + Math.imul(S, V) | 0, i = i + Math.imul(x, K) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(_, X) | 0, i = i + Math.imul(_, J) | 0, i = i + Math.imul(A, X) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(w, H) | 0, i = i + Math.imul(w, $) | 0, i = i + Math.imul(M, H) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(v, Q) | 0, i = i + Math.imul(v, tt) | 0, i = i + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, et) | 0, i = i + Math.imul(p, nt) | 0, i = i + Math.imul(m, et) | 0, o = o + Math.imul(m, nt) | 0, n = n + Math.imul(l, ot) | 0, i = i + Math.imul(l, st) | 0, i = i + Math.imul(c, ot) | 0, o = o + Math.imul(c, st) | 0;
                        var Et = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(T, B), i = Math.imul(T, z), i = i + Math.imul(U, B) | 0, o = Math.imul(U, z), n = n + Math.imul(O, K) | 0, i = i + Math.imul(O, V) | 0, i = i + Math.imul(R, K) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(S, X) | 0, i = i + Math.imul(S, J) | 0, i = i + Math.imul(x, X) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(_, H) | 0, i = i + Math.imul(_, $) | 0, i = i + Math.imul(A, H) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(w, Q) | 0, i = i + Math.imul(w, tt) | 0, i = i + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(v, et) | 0, i = i + Math.imul(v, nt) | 0, i = i + Math.imul(y, et) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = i + Math.imul(p, st) | 0, i = i + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0, n = n + Math.imul(l, ut) | 0, i = i + Math.imul(l, ht) | 0, i = i + Math.imul(c, ut) | 0, o = o + Math.imul(c, ht) | 0;
                        var _t = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(C, B), i = Math.imul(C, z), i = i + Math.imul(j, B) | 0, o = Math.imul(j, z), n = n + Math.imul(T, K) | 0, i = i + Math.imul(T, V) | 0, i = i + Math.imul(U, K) | 0, o = o + Math.imul(U, V) | 0, n = n + Math.imul(O, X) | 0, i = i + Math.imul(O, J) | 0, i = i + Math.imul(R, X) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(S, H) | 0, i = i + Math.imul(S, $) | 0, i = i + Math.imul(x, H) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(_, Q) | 0, i = i + Math.imul(_, tt) | 0, i = i + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(w, et) | 0, i = i + Math.imul(w, nt) | 0, i = i + Math.imul(M, et) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(v, ot) | 0, i = i + Math.imul(v, st) | 0, i = i + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = i + Math.imul(p, ht) | 0, i = i + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0, n = n + Math.imul(l, lt) | 0, i = i + Math.imul(l, ct) | 0, i = i + Math.imul(c, lt) | 0, o = o + Math.imul(c, ct) | 0;
                        var At = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, B), i = Math.imul(L, z), i = i + Math.imul(D, B) | 0, o = Math.imul(D, z), n = n + Math.imul(C, K) | 0, i = i + Math.imul(C, V) | 0, i = i + Math.imul(j, K) | 0, o = o + Math.imul(j, V) | 0, n = n + Math.imul(T, X) | 0, i = i + Math.imul(T, J) | 0, i = i + Math.imul(U, X) | 0, o = o + Math.imul(U, J) | 0, n = n + Math.imul(O, H) | 0, i = i + Math.imul(O, $) | 0, i = i + Math.imul(R, H) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(S, Q) | 0, i = i + Math.imul(S, tt) | 0, i = i + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(_, et) | 0, i = i + Math.imul(_, nt) | 0, i = i + Math.imul(A, et) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(w, ot) | 0, i = i + Math.imul(w, st) | 0, i = i + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(v, ut) | 0, i = i + Math.imul(v, ht) | 0, i = i + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, lt) | 0, i = i + Math.imul(p, ct) | 0, i = i + Math.imul(m, lt) | 0, o = o + Math.imul(m, ct) | 0, n = n + Math.imul(l, pt) | 0, i = i + Math.imul(l, mt) | 0, i = i + Math.imul(c, pt) | 0, o = o + Math.imul(c, mt) | 0;
                        var Nt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(L, K), i = Math.imul(L, V), i = i + Math.imul(D, K) | 0, o = Math.imul(D, V), n = n + Math.imul(C, X) | 0, i = i + Math.imul(C, J) | 0, i = i + Math.imul(j, X) | 0, o = o + Math.imul(j, J) | 0, n = n + Math.imul(T, H) | 0, i = i + Math.imul(T, $) | 0, i = i + Math.imul(U, H) | 0, o = o + Math.imul(U, $) | 0, n = n + Math.imul(O, Q) | 0, i = i + Math.imul(O, tt) | 0, i = i + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(S, et) | 0, i = i + Math.imul(S, nt) | 0, i = i + Math.imul(x, et) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(_, ot) | 0, i = i + Math.imul(_, st) | 0, i = i + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(w, ut) | 0, i = i + Math.imul(w, ht) | 0, i = i + Math.imul(M, ut) | 0, o = o + Math.imul(M, ht) | 0, n = n + Math.imul(v, lt) | 0, i = i + Math.imul(v, ct) | 0, i = i + Math.imul(y, lt) | 0, o = o + Math.imul(y, ct) | 0, n = n + Math.imul(p, pt) | 0, i = i + Math.imul(p, mt) | 0, i = i + Math.imul(m, pt) | 0, o = o + Math.imul(m, mt) | 0;
                        var St = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(L, X), i = Math.imul(L, J), i = i + Math.imul(D, X) | 0, o = Math.imul(D, J), n = n + Math.imul(C, H) | 0, i = i + Math.imul(C, $) | 0, i = i + Math.imul(j, H) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(T, Q) | 0, i = i + Math.imul(T, tt) | 0, i = i + Math.imul(U, Q) | 0, o = o + Math.imul(U, tt) | 0, n = n + Math.imul(O, et) | 0, i = i + Math.imul(O, nt) | 0, i = i + Math.imul(R, et) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(S, ot) | 0, i = i + Math.imul(S, st) | 0, i = i + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(_, ut) | 0, i = i + Math.imul(_, ht) | 0, i = i + Math.imul(A, ut) | 0, o = o + Math.imul(A, ht) | 0, n = n + Math.imul(w, lt) | 0, i = i + Math.imul(w, ct) | 0, i = i + Math.imul(M, lt) | 0, o = o + Math.imul(M, ct) | 0, n = n + Math.imul(v, pt) | 0, i = i + Math.imul(v, mt) | 0, i = i + Math.imul(y, pt) | 0, o = o + Math.imul(y, mt) | 0;
                        var xt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(L, H), i = Math.imul(L, $), i = i + Math.imul(D, H) | 0, o = Math.imul(D, $), n = n + Math.imul(C, Q) | 0, i = i + Math.imul(C, tt) | 0, i = i + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(T, et) | 0, i = i + Math.imul(T, nt) | 0, i = i + Math.imul(U, et) | 0, o = o + Math.imul(U, nt) | 0, n = n + Math.imul(O, ot) | 0, i = i + Math.imul(O, st) | 0, i = i + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(S, ut) | 0, i = i + Math.imul(S, ht) | 0, i = i + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(_, lt) | 0, i = i + Math.imul(_, ct) | 0, i = i + Math.imul(A, lt) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(w, pt) | 0, i = i + Math.imul(w, mt) | 0, i = i + Math.imul(M, pt) | 0, o = o + Math.imul(M, mt) | 0;
                        var It = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(L, Q), i = Math.imul(L, tt), i = i + Math.imul(D, Q) | 0, o = Math.imul(D, tt), n = n + Math.imul(C, et) | 0, i = i + Math.imul(C, nt) | 0, i = i + Math.imul(j, et) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(T, ot) | 0, i = i + Math.imul(T, st) | 0, i = i + Math.imul(U, ot) | 0, o = o + Math.imul(U, st) | 0, n = n + Math.imul(O, ut) | 0, i = i + Math.imul(O, ht) | 0, i = i + Math.imul(R, ut) | 0, o = o + Math.imul(R, ht) | 0, n = n + Math.imul(S, lt) | 0, i = i + Math.imul(S, ct) | 0, i = i + Math.imul(x, lt) | 0, o = o + Math.imul(x, ct) | 0, n = n + Math.imul(_, pt) | 0, i = i + Math.imul(_, mt) | 0, i = i + Math.imul(A, pt) | 0, o = o + Math.imul(A, mt) | 0;
                        var Ot = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(L, et), i = Math.imul(L, nt), i = i + Math.imul(D, et) | 0, o = Math.imul(D, nt), n = n + Math.imul(C, ot) | 0, i = i + Math.imul(C, st) | 0, i = i + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, n = n + Math.imul(T, ut) | 0, i = i + Math.imul(T, ht) | 0, i = i + Math.imul(U, ut) | 0, o = o + Math.imul(U, ht) | 0, n = n + Math.imul(O, lt) | 0, i = i + Math.imul(O, ct) | 0, i = i + Math.imul(R, lt) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(S, pt) | 0, i = i + Math.imul(S, mt) | 0, i = i + Math.imul(x, pt) | 0, o = o + Math.imul(x, mt) | 0;
                        var Rt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(L, ot), i = Math.imul(L, st), i = i + Math.imul(D, ot) | 0, o = Math.imul(D, st), n = n + Math.imul(C, ut) | 0, i = i + Math.imul(C, ht) | 0, i = i + Math.imul(j, ut) | 0, o = o + Math.imul(j, ht) | 0, n = n + Math.imul(T, lt) | 0, i = i + Math.imul(T, ct) | 0, i = i + Math.imul(U, lt) | 0, o = o + Math.imul(U, ct) | 0, n = n + Math.imul(O, pt) | 0, i = i + Math.imul(O, mt) | 0, i = i + Math.imul(R, pt) | 0, o = o + Math.imul(R, mt) | 0;
                        var Pt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(L, ut), i = Math.imul(L, ht), i = i + Math.imul(D, ut) | 0, o = Math.imul(D, ht), n = n + Math.imul(C, lt) | 0, i = i + Math.imul(C, ct) | 0, i = i + Math.imul(j, lt) | 0, o = o + Math.imul(j, ct) | 0, n = n + Math.imul(T, pt) | 0, i = i + Math.imul(T, mt) | 0, i = i + Math.imul(U, pt) | 0, o = o + Math.imul(U, mt) | 0;
                        var Tt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(L, lt), i = Math.imul(L, ct), i = i + Math.imul(D, lt) | 0, o = Math.imul(D, ct), n = n + Math.imul(C, pt) | 0, i = i + Math.imul(C, mt) | 0, i = i + Math.imul(j, pt) | 0, o = o + Math.imul(j, mt) | 0;
                        var Ut = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(L, pt), i = Math.imul(L, mt), i = i + Math.imul(D, pt) | 0, o = Math.imul(D, mt);
                        var kt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        return h = (o + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, u[0] = gt, u[1] = vt, u[2] = yt, u[3] = bt, u[4] = wt, u[5] = Mt, u[6] = Et, u[7] = _t, u[8] = At, u[9] = Nt, u[10] = St, u[11] = xt, u[12] = It, u[13] = Ot, u[14] = Rt, u[15] = Pt, u[16] = Tt, u[17] = Ut, u[18] = kt, 0 !== h && (u[19] = h, e.length++), e
                    };

                    function g(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, i = 0, o = 0; o < e.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, u = Math.min(o, r.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                                var f = o - h,
                                    l = 0 | t.words[f],
                                    c = 0 | r.words[h],
                                    d = l * c,
                                    p = 67108863 & d;
                                s = s + (d / 67108864 | 0) | 0, p = p + a | 0, a = 67108863 & p, s = s + (p >>> 26) | 0, i += s >>> 26, s &= 67108863
                            }
                            e.words[o] = a, n = s, s = i
                        }
                        return 0 !== n ? e.words[o] = n : e.length--, e.strip()
                    }

                    function v(t, r, e) {
                        var n = new y;
                        return n.mulp(t, r, e)
                    }

                    function y(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (m = p), o.prototype.mulTo = function(t, r) {
                        var e, n = this.length + t.length;
                        return e = 10 === this.length && 10 === t.length ? m(this, t, r) : n < 63 ? p(this, t, r) : n < 1024 ? g(this, t, r) : v(this, t, r), e
                    }, y.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, n = 0; n < t; n++) r[n] = this.revBin(n, e, t);
                        return r
                    }, y.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, y.prototype.permute = function(t, r, e, n, i, o) {
                        for (var s = 0; s < o; s++) n[s] = r[t[s]], i[s] = e[t[s]]
                    }, y.prototype.transform = function(t, r, e, n, i, o) {
                        this.permute(o, t, r, e, n, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), f = 0; f < i; f += a)
                                for (var l = u, c = h, d = 0; d < s; d++) {
                                    var p = e[f + d],
                                        m = n[f + d],
                                        g = e[f + d + s],
                                        v = n[f + d + s],
                                        y = l * g - c * v;
                                    v = l * v + c * g, g = y, e[f + d] = p + g, n[f + d] = m + v, e[f + d + s] = p - g, n[f + d + s] = m - v, d !== a && (y = u * l - h * c, c = u * c + h * l, l = y)
                                }
                    }, y.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, y.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var n = 0; n < e / 2; n++) {
                                var i = t[n];
                                t[n] = t[e - n - 1], t[e - n - 1] = i, i = r[n], r[n] = -r[e - n - 1], r[e - n - 1] = -i
                            }
                    }, y.prototype.normalize13b = function(t, r) {
                        for (var e = 0, n = 0; n < r / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / r) + Math.round(t[2 * n] / r) + e;
                            t[n] = 67108863 & i, e = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, y.prototype.convert13b = function(t, r, e, i) {
                        for (var o = 0, s = 0; s < r; s++) o += 0 | t[s], e[2 * s] = 8191 & o, o >>>= 13, e[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * r; s < i; ++s) e[s] = 0;
                        n(0 === o), n(0 === (-8192 & o))
                    }, y.prototype.stub = function(t) {
                        for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
                        return r
                    }, y.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            s = new Array(n),
                            a = new Array(n),
                            u = new Array(n),
                            h = new Array(n),
                            f = new Array(n),
                            l = new Array(n),
                            c = e.words;
                        c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(r.words, r.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, f, l, n, i);
                        for (var d = 0; d < n; d++) {
                            var p = a[d] * f[d] - u[d] * l[d];
                            u[d] = a[d] * l[d] + u[d] * f[d], a[d] = p
                        }
                        return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e.strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), v(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        n("number" === typeof t), n(t < 67108864);
                        for (var r = 0, e = 0; e < this.length; e++) {
                            var i = (0 | this.words[e]) * t,
                                o = (67108863 & i) + (67108863 & r);
                            r >>= 26, r += i / 67108864 | 0, r += o >>> 26, this.words[e] = 67108863 & o
                        }
                        return 0 !== r && (this.words[e] = r, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = d(t);
                        if (0 === r.length) return new o(1);
                        for (var e = this, n = 0; n < r.length; n++, e = e.sqr())
                            if (0 !== r[n]) break;
                        if (++n < r.length)
                            for (var i = e.sqr(); n < r.length; n++, i = i.sqr()) 0 !== r[n] && (e = e.mul(i));
                        return e
                    }, o.prototype.iushln = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r, e = t % 26,
                            i = (t - e) / 26,
                            o = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var s = 0;
                            for (r = 0; r < this.length; r++) {
                                var a = this.words[r] & o,
                                    u = (0 | this.words[r]) - a << e;
                                this.words[r] = u | s, s = a >>> 26 - e
                            }
                            s && (this.words[r] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + i] = this.words[r];
                            for (r = 0; r < i; r++) this.words[r] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, e) {
                        var i;
                        n("number" === typeof t && t >= 0), i = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            u = e;
                        if (i -= s, i = Math.max(0, i), u) {
                            for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                            u.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
                            var l = 0 | this.words[h];
                            this.words[h] = f << 26 - o | l >>> o, f = l & a
                        }
                        return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return !1;
                        var o = this.words[e];
                        return !!(o & i)
                    }, o.prototype.imaskn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
                            var i = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, e) {
                        var i, o, s = t.length + e;
                        this._expand(s);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + a;
                            var u = (0 | t.words[i]) * r;
                            o -= 67108863 & u, a = (o >> 26) - (u / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) o = (0 | this.words[i + e]) + a, a = o >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === a) return this.strip();
                        for (n(-1 === a), a = 0, i = 0; i < this.length; i++) o = -(0 | this.words[i]) + a, a = o >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var e = this.length - t.length,
                            n = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1],
                            a = this._countBits(s);
                        e = 26 - a, 0 !== e && (i = i.ushln(e), n.iushln(e), s = 0 | i.words[i.length - 1]);
                        var u, h = n.length - i.length;
                        if ("mod" !== r) {
                            u = new o(null), u.length = h + 1, u.words = new Array(u.length);
                            for (var f = 0; f < u.length; f++) u.words[f] = 0
                        }
                        var l = n.clone()._ishlnsubmul(i, 1, h);
                        0 === l.negative && (n = l, u && (u.words[h] = 1));
                        for (var c = h - 1; c >= 0; c--) {
                            var d = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                            d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, c);
                            while (0 !== n.negative) d--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                            u && (u.words[c] = d)
                        }
                        return u && u.strip(), n.strip(), "div" !== r && 0 !== e && n.iushrn(e), {
                            div: u || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, r), "mod" !== r && (i = a.div.neg()), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), r), "mod" !== r && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), r), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
                            div: a.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var i, s, a
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            i = t.andln(1),
                            o = e.cmp(n);
                        return o < 0 || 1 === i && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        n(t <= 67108863);
                        for (var r = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (r * e + (0 | this.words[i])) % t;
                        return e
                    }, o.prototype.idivn = function(t) {
                        n(t <= 67108863);
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var i = (0 | this.words[e]) + 67108864 * r;
                            this.words[e] = i / t | 0, r = i % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i = new o(1),
                            s = new o(0),
                            a = new o(0),
                            u = new o(1),
                            h = 0;
                        while (r.isEven() && e.isEven()) r.iushrn(1), e.iushrn(1), ++h;
                        var f = e.clone(),
                            l = r.clone();
                        while (!r.isZero()) {
                            for (var c = 0, d = 1; 0 === (r.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0) {
                                r.iushrn(c);
                                while (c-- > 0)(i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(l)), i.iushrn(1), s.iushrn(1)
                            }
                            for (var p = 0, m = 1; 0 === (e.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0) {
                                e.iushrn(p);
                                while (p-- > 0)(a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(l)), a.iushrn(1), u.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), i.isub(a), s.isub(u)) : (e.isub(r), a.isub(i), u.isub(s))
                        }
                        return {
                            a: a,
                            b: u,
                            gcd: e.iushln(h)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i, s = new o(1),
                            a = new o(0),
                            u = e.clone();
                        while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                            for (var h = 0, f = 1; 0 === (r.words[0] & f) && h < 26; ++h, f <<= 1);
                            if (h > 0) {
                                r.iushrn(h);
                                while (h-- > 0) s.isOdd() && s.iadd(u), s.iushrn(1)
                            }
                            for (var l = 0, c = 1; 0 === (e.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0) {
                                e.iushrn(l);
                                while (l-- > 0) a.isOdd() && a.iadd(u), a.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), s.isub(a)) : (e.isub(r), a.isub(s))
                        }
                        return i = 0 === r.cmpn(1) ? s : a, i.cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            e = t.clone();
                        r.negative = 0, e.negative = 0;
                        for (var n = 0; r.isEven() && e.isEven(); n++) r.iushrn(1), e.iushrn(1);
                        do {
                            while (r.isEven()) r.iushrn(1);
                            while (e.isEven()) e.iushrn(1);
                            var i = r.cmp(e);
                            if (i < 0) {
                                var o = r;
                                r = e, e = o
                            } else if (0 === i || 0 === e.cmpn(1)) break;
                            r.isub(e)
                        } while (1);
                        return e.iushln(n)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 === (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 === (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        n("number" === typeof t);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return this._expand(e + 1), this.words[e] |= i, this;
                        for (var o = i, s = e; 0 !== o && s < this.length; s++) {
                            var a = 0 | this.words[s];
                            a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this.strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), n(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            r = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var n = 0 | this.words[e],
                                i = 0 | t.words[e];
                            if (n !== i) {
                                n < i ? r = -1 : n > i && (r = 1);
                                break
                            }
                        }
                        return r
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new N(t)
                    }, o.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var b = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function w(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function M() {
                        w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function E() {
                        w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function _() {
                        w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function A() {
                        w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function N(t) {
                        if ("string" === typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function S(t) {
                        N.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    w.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, w.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), e = this.imulK(e), e = e.iadd(this.tmp), r = e.bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, w.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, w.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(M, w), M.prototype.split = function(t, r) {
                        for (var e = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) r.words[i] = t.words[i];
                        if (r.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var o = t.words[9];
                        for (r.words[r.length++] = o & e, i = 10; i < t.length; i++) {
                            var s = 0 | t.words[i];
                            t.words[i - 10] = (s & e) << 4 | o >>> 22, o = s
                        }
                        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, M.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 0 | t.words[e];
                            r += 977 * n, t.words[e] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(E, w), i(_, w), i(A, w), A.prototype.imulK = function(t) {
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 19 * (0 | t.words[e]) + r,
                                i = 67108863 & n;
                            n >>>= 26, t.words[e] = i, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (b[t]) return b[t];
                        var r;
                        if ("k256" === t) r = new M;
                        else if ("p224" === t) r = new E;
                        else if ("p192" === t) r = new _;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new A
                        }
                        return b[t] = r, r
                    }, N.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, N.prototype._verify2 = function(t, r) {
                        n(0 === (t.negative | r.negative), "red works only with positives"), n(t.red && t.red === r.red, "red works only with red numbers")
                    }, N.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, N.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, N.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var e = t.add(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
                    }, N.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var e = t.iadd(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e
                    }, N.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.sub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, N.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.isub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e
                    }, N.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, N.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, N.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, N.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, N.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, N.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (n(r % 2 === 1), 3 === r) {
                            var e = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, e)
                        }
                        var i = this.m.subn(1),
                            s = 0;
                        while (!i.isZero() && 0 === i.andln(1)) s++, i.iushrn(1);
                        n(!i.isZero());
                        var a = new o(1).toRed(this),
                            u = a.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        f = new o(2 * f * f).toRed(this);
                        while (0 !== this.pow(f, h).cmp(u)) f.redIAdd(u);
                        var l = this.pow(f, i),
                            c = this.pow(t, i.addn(1).iushrn(1)),
                            d = this.pow(t, i),
                            p = s;
                        while (0 !== d.cmp(a)) {
                            for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                            n(g < p);
                            var v = this.pow(l, new o(1).iushln(p - g - 1));
                            c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                        }
                        return c
                    }, N.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, N.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1).toRed(this);
                        if (0 === r.cmpn(1)) return t.clone();
                        var e = 4,
                            n = new Array(1 << e);
                        n[0] = new o(1).toRed(this), n[1] = t;
                        for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
                        var s = n[0],
                            a = 0,
                            u = 0,
                            h = r.bitLength() % 26;
                        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
                            for (var f = r.words[i], l = h - 1; l >= 0; l--) {
                                var c = f >> l & 1;
                                s !== n[0] && (s = this.sqr(s)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, u++, (u === e || 0 === i && 0 === l) && (s = this.mul(s, n[a]), u = 0, a = 0)) : u = 0
                            }
                            h = 26
                        }
                        return s
                    }, N.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, N.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new S(t)
                    }, i(S, N), S.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, S.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, S.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var e = t.imul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, S.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var e = t.mul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, S.prototype.invm = function(t) {
                        var r = this.imod(t._invmp(this.m).mul(this.r2));
                        return r._forceRed(this)
                    }
                })(t, this)
            }).call(this, e("62e4")(t))
        },
        "35a8": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return o
            }));
            var n = e("6f5a"),
                i = e("5273");

            function o(t) {
                return Object(n["a"])(Object(i["f"])(t))
            }
        },
        "36c6": function(t, r) {
            function e(r) {
                return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, t.exports.__esModule = !0, t.exports["default"] = t.exports, e(r)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "3b1c": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return g
            })), e.d(r, "e", (function() {
                return v
            })), e.d(r, "d", (function() {
                return y
            })), e.d(r, "b", (function() {
                return b
            })), e.d(r, "c", (function() {
                return w
            }));
            var n = e("549e"),
                i = e("e36d"),
                o = e("6f5a"),
                s = e("e165"),
                a = e("ffb2");
            const u = "address/5.5.0",
                h = new a["a"](u);

            function f(t) {
                Object(n["l"])(t, 20) || h.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                const r = t.substring(2).split(""),
                    e = new Uint8Array(40);
                for (let n = 0; n < 40; n++) e[n] = r[n].charCodeAt(0);
                const i = Object(n["a"])(Object(o["a"])(e));
                for (let n = 0; n < 40; n += 2) i[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()), (15 & i[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const l = 9007199254740991;

            function c(t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }
            const d = {};
            for (let M = 0; M < 10; M++) d[String(M)] = String(M);
            for (let M = 0; M < 26; M++) d[String.fromCharCode(65 + M)] = String(10 + M);
            const p = Math.floor(c(l));

            function m(t) {
                t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
                let r = t.split("").map(t => d[t]).join("");
                while (r.length >= p) {
                    let t = r.substring(0, p);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let e = String(98 - parseInt(r, 10) % 97);
                while (e.length < 2) e = "0" + e;
                return e
            }

            function g(t) {
                let r = null;
                if ("string" !== typeof t && h.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = f(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && h.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    t.substring(2, 4) !== m(t) && h.throwArgumentError("bad icap checksum", "address", t), r = Object(i["c"])(t.substring(4));
                    while (r.length < 40) r = "0" + r;
                    r = f("0x" + r)
                } else h.throwArgumentError("invalid address", "address", t);
                return r
            }

            function v(t) {
                try {
                    return g(t), !0
                } catch (r) {}
                return !1
            }

            function y(t) {
                let r = Object(i["b"])(g(t).substring(2)).toUpperCase();
                while (r.length < 30) r = "0" + r;
                return "XE" + m("XE00" + r) + r
            }

            function b(t) {
                let r = null;
                try {
                    r = g(t.from)
                } catch (a) {
                    h.throwArgumentError("missing from address", "transaction", t)
                }
                const e = Object(n["o"])(Object(n["a"])(i["a"].from(t.nonce).toHexString()));
                return g(Object(n["e"])(Object(o["a"])(Object(s["encode"])([r, e])), 12))
            }

            function w(t, r, e) {
                return 32 !== Object(n["d"])(r) && h.throwArgumentError("salt must be 32 bytes", "salt", r), 32 !== Object(n["d"])(e) && h.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", e), g(Object(n["e"])(Object(o["a"])(Object(n["b"])(["0xff", g(t), r, e])), 12))
            }
        },
        "3c96": function(t, r) {
            function e(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "448a": function(t, r, e) {
            var n = e("2236"),
                i = e("11b0"),
                o = e("6613"),
                s = e("0676");

            function a(t) {
                return n(t) || i(t) || o(t) || s()
            }
            t.exports = a, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        4877: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            const n = "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "4a4b": function(t, r) {
            function e(r, n) {
                return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                }, t.exports.__esModule = !0, t.exports["default"] = t.exports, e(r, n)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "4ea4": function(t, r) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        5122: function(t, r, e) {
            "use strict";

            function n(t, r) {
                if (!Object.prototype.hasOwnProperty.call(t, r)) throw new TypeError("attempted to use private field on non-instance");
                return t
            }
            e.d(r, "a", (function() {
                return n
            }))
        },
        "51bf": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            const n = "json-wallets/5.6.0"
        },
        "549e": function(t, r, e) {
            "use strict";
            e.d(r, "k", (function() {
                return u
            })), e.d(r, "j", (function() {
                return f
            })), e.d(r, "a", (function() {
                return l
            })), e.d(r, "b", (function() {
                return c
            })), e.d(r, "o", (function() {
                return d
            })), e.d(r, "p", (function() {
                return p
            })), e.d(r, "l", (function() {
                return m
            })), e.d(r, "i", (function() {
                return v
            })), e.d(r, "d", (function() {
                return y
            })), e.d(r, "e", (function() {
                return b
            })), e.d(r, "c", (function() {
                return w
            })), e.d(r, "g", (function() {
                return M
            })), e.d(r, "f", (function() {
                return E
            })), e.d(r, "h", (function() {
                return _
            })), e.d(r, "n", (function() {
                return A
            })), e.d(r, "m", (function() {
                return N
            }));
            var n = e("ffb2");
            const i = "bytes/5.5.0",
                o = new n["a"](i);

            function s(t) {
                return !!t.toHexString
            }

            function a(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return a(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function u(t) {
                return m(t) && !(t.length % 2) || f(t)
            }

            function h(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function f(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!h(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    if (!h(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function l(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    o.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    while (t) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), a(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), s(t) && (t = t.toHexString()), m(t)) {
                    let e = t.substring(2);
                    e.length % 2 && ("left" === r.hexPad ? e = "0x0" + e.substring(2) : "right" === r.hexPad ? e += "0" : o.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) n.push(parseInt(e.substring(t, t + 2), 16));
                    return a(new Uint8Array(n))
                }
                return f(t) ? a(new Uint8Array(t)) : o.throwArgumentError("invalid arrayify value", "value", t)
            }

            function c(t) {
                const r = t.map(t => l(t)),
                    e = r.reduce((t, r) => t + r.length, 0),
                    n = new Uint8Array(e);
                return r.reduce((t, r) => (n.set(r, t), t + r.length), 0), a(n)
            }

            function d(t) {
                let r = l(t);
                if (0 === r.length) return r;
                let e = 0;
                while (e < r.length && 0 === r[e]) e++;
                return e && (r = r.slice(e)), r
            }

            function p(t, r) {
                t = l(t), t.length > r && o.throwArgumentError("value out of range", "value", arguments[0]);
                const e = new Uint8Array(r);
                return e.set(t, r - t.length), a(e)
            }

            function m(t, r) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }
            const g = "0123456789abcdef";

            function v(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    o.checkSafeUint53(t, "invalid hexlify value");
                    let r = "";
                    while (t) r = g[15 & t] + r, t = Math.floor(t / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" === typeof t) return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), s(t)) return t.toHexString();
                if (m(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : o.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (f(t)) {
                    let r = "0x";
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e];
                        r += g[(240 & n) >> 4] + g[15 & n]
                    }
                    return r
                }
                return o.throwArgumentError("invalid hexlify value", "value", t)
            }

            function y(t) {
                if ("string" !== typeof t) t = v(t);
                else if (!m(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function b(t, r, e) {
                return "string" !== typeof t ? t = v(t) : (!m(t) || t.length % 2) && o.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
            }

            function w(t) {
                let r = "0x";
                return t.forEach(t => {
                    r += v(t).substring(2)
                }), r
            }

            function M(t) {
                const r = E(v(t, {
                    hexPad: "left"
                }));
                return "0x" === r ? "0x0" : r
            }

            function E(t) {
                "string" !== typeof t && (t = v(t)), m(t) || o.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
                let r = 0;
                while (r < t.length && "0" === t[r]) r++;
                return "0x" + t.substring(r)
            }

            function _(t, r) {
                "string" !== typeof t ? t = v(t) : m(t) || o.throwArgumentError("invalid hex string", "value", t), t.length > 2 * r + 2 && o.throwArgumentError("value out of range", "value", arguments[1]);
                while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
                return t
            }

            function A(t) {
                const r = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0
                };
                if (u(t)) {
                    const e = l(t);
                    65 !== e.length && o.throwArgumentError("invalid signature string; must be 65 bytes", "signature", t), r.r = v(e.slice(0, 32)), r.s = v(e.slice(32, 64)), r.v = e[64], r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : o.throwArgumentError("signature invalid v byte", "signature", t)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (e[32] |= 128), r._vs = v(e.slice(32, 64))
                } else {
                    if (r.r = t.r, r.s = t.s, r.v = t.v, r.recoveryParam = t.recoveryParam, r._vs = t._vs, null != r._vs) {
                        const e = p(l(r._vs), 32);
                        r._vs = v(e);
                        const n = e[0] >= 128 ? 1 : 0;
                        null == r.recoveryParam ? r.recoveryParam = n : r.recoveryParam !== n && o.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), e[0] &= 127;
                        const i = v(e);
                        null == r.s ? r.s = i : r.s !== i && o.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == r.recoveryParam) null == r.v ? o.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
                    else if (null == r.v) r.v = 27 + r.recoveryParam;
                    else {
                        const e = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
                        r.recoveryParam !== e && o.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != r.r && m(r.r) ? r.r = _(r.r, 32) : o.throwArgumentError("signature missing or invalid r", "signature", t), null != r.s && m(r.s) ? r.s = _(r.s, 32) : o.throwArgumentError("signature missing or invalid s", "signature", t);
                    const e = l(r.s);
                    e[0] >= 128 && o.throwArgumentError("signature s out of range", "signature", t), r.recoveryParam && (e[0] |= 128);
                    const n = v(e);
                    r._vs && (m(r._vs) || o.throwArgumentError("signature invalid _vs", "signature", t), r._vs = _(r._vs, 32)), null == r._vs ? r._vs = n : r._vs !== n && o.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return r
            }

            function N(t) {
                return t = A(t), v(c([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
            }
        },
        5873: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            const n = "hash/5.5.0"
        },
        "5a43": function(t, r) {
            function e(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "5bc3": function(t, r, e) {
            var n = e("a395");

            function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var i = r[e];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, n(i.key), i)
                }
            }

            function o(t, r, e) {
                return r && i(t.prototype, r), e && i(t, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            t.exports = o, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "5cf7": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return i
            }));
            var n = 0;

            function i(t) {
                return "__private_" + n++ + "_" + t
            }
        },
        6613: function(t, r, e) {
            var n = e("5a43");

            function i(t, r) {
                if (t) {
                    if ("string" === typeof t) return n(t, r);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? n(t, r) : void 0
                }
            }
            t.exports = i, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "6b58": function(t, r, e) {
            var n = e("7037")["default"],
                i = e("3c96");

            function o(t, r) {
                if (r && ("object" === n(r) || "function" === typeof r)) return r;
                if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
                return i(t)
            }
            t.exports = o, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "6b5b": function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return i
            })), e.d(r, "c", (function() {
                return o
            })), e.d(r, "a", (function() {
                return s
            }));
            var n = e("ffef");

            function i(t) {
                let r = null;
                try {
                    r = JSON.parse(t)
                } catch (e) {
                    return !1
                }
                return r.encseed && r.ethaddr
            }

            function o(t) {
                let r = null;
                try {
                    r = JSON.parse(t)
                } catch (e) {
                    return !1
                }
                return !(!r.version || parseInt(r.version) !== r.version || 3 !== parseInt(r.version))
            }

            function s(t) {
                if (i(t)) try {
                    return Object(n["a"])(JSON.parse(t).ethaddr)
                } catch (r) {
                    return null
                }
                if (o(t)) try {
                    return Object(n["a"])(JSON.parse(t).address)
                } catch (r) {
                    return null
                }
                return null
            }
        },
        "6f5a": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return s
            }));
            var n = e("1c55"),
                i = e.n(n),
                o = e("549e");

            function s(t) {
                return "0x" + i.a.keccak_256(Object(o["a"])(t))
            }
        },
        7037: function(t, r) {
            function e(r) {
                return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports["default"] = t.exports, e(r)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "714b": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return a
            }));
            var n = e("549e"),
                i = e("6f5a"),
                o = e("5273");
            const s = "Ethereum Signed Message:\n";

            function a(t) {
                return "string" === typeof t && (t = Object(o["f"])(t)), Object(i["a"])(Object(n["b"])([Object(o["f"])(s), Object(o["f"])(String(t.length)), t]))
            }
        },
        "71da": function(t, r, e) {
            "use strict";
            e.r(r);
            var n = e("207b");
            e.d(r, "decode", (function() {
                return n["a"]
            })), e.d(r, "encode", (function() {
                return n["b"]
            }))
        },
        7308: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return p
            }));
            const n = "logger/5.6.0";
            let i = !1,
                o = !1;
            const s = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let a = s["default"],
                u = null;

            function h() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }
            const f = h();
            var l, c;
            (function(t) {
                t["DEBUG"] = "DEBUG", t["INFO"] = "INFO", t["WARNING"] = "WARNING", t["ERROR"] = "ERROR", t["OFF"] = "OFF"
            })(l || (l = {})),
            function(t) {
                t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR", t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED", t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION", t["NETWORK_ERROR"] = "NETWORK_ERROR", t["SERVER_ERROR"] = "SERVER_ERROR", t["TIMEOUT"] = "TIMEOUT", t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN", t["NUMERIC_FAULT"] = "NUMERIC_FAULT", t["MISSING_NEW"] = "MISSING_NEW", t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT", t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT", t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT", t["CALL_EXCEPTION"] = "CALL_EXCEPTION", t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS", t["NONCE_EXPIRED"] = "NONCE_EXPIRED", t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED", t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT", t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"
            }(c || (c = {}));
            const d = "0123456789abcdef";
            class p {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == s[e] && this.throwArgumentError("invalid log level name", "logLevel", t), a > s[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(p.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(p.levels.INFO, t)
                }
                warn(...t) {
                    this._log(p.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (o) return this.makeError("censored error", r, {});
                    r || (r = p.errors.UNKNOWN_ERROR), e || (e = {});
                    const n = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += d[r[t] >> 4], e += d[15 & r[t]];
                                n.push(t + "=Uint8Array(0x" + e + ")")
                            } else n.push(t + "=" + JSON.stringify(r))
                        } catch (a) {
                            n.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), n.push("code=" + r), n.push("version=" + this.version);
                    const i = t;
                    let s = "";
                    switch (r) {
                        case c.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                const r = t;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result";
                                        break
                                }
                                break
                            }
                        case c.CALL_EXCEPTION:
                        case c.INSUFFICIENT_FUNDS:
                        case c.MISSING_NEW:
                        case c.NONCE_EXPIRED:
                        case c.REPLACEMENT_UNDERPRICED:
                        case c.TRANSACTION_REPLACED:
                        case c.UNPREDICTABLE_GAS_LIMIT:
                            s = r;
                            break
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    const a = new Error(t);
                    return a.reason = i, a.code = r, Object.keys(e).forEach((function(t) {
                        a[t] = e[t]
                    })), a
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, p.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, n) {
                    t || this.throwError(r, e, n)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(t, r) {
                    "number" === typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, p.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, p.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return u || (u = new p(n)), u
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), i) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!t, i = !!r
                }
                static setLogLevel(t) {
                    const r = s[t.toLowerCase()];
                    null != r ? a = r : p.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new p(t)
                }
            }
            p.errors = c, p.levels = l
        },
        "7ca5": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return f
            }));
            var n = e("9bda"),
                i = e("ffb2");
            const o = "abstract-signer/5.5.0";
            var s = function(t, r, e, n) {
                function i(t) {
                    return t instanceof e ? t : new e((function(r) {
                        r(t)
                    }))
                }
                return new(e || (e = Promise))((function(e, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function a(t) {
                        try {
                            u(n["throw"](t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function u(t) {
                        t.done ? e(t.value) : i(t.value).then(s, a)
                    }
                    u((n = n.apply(t, r || [])).next())
                }))
            };
            const a = new i["a"](o),
                u = ["accessList", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                h = [i["a"].errors.INSUFFICIENT_FUNDS, i["a"].errors.NONCE_EXPIRED, i["a"].errors.REPLACEMENT_UNDERPRICED];
            class f {
                constructor() {
                    a.checkAbstract(new.target, f), Object(n["d"])(this, "_isSigner", !0)
                }
                getBalance(t) {
                    return s(this, void 0, void 0, (function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                    }))
                }
                getTransactionCount(t) {
                    return s(this, void 0, void 0, (function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                    }))
                }
                estimateGas(t) {
                    return s(this, void 0, void 0, (function*() {
                        this._checkProvider("estimateGas");
                        const r = yield Object(n["f"])(this.checkTransaction(t));
                        return yield this.provider.estimateGas(r)
                    }))
                }
                call(t, r) {
                    return s(this, void 0, void 0, (function*() {
                        this._checkProvider("call");
                        const e = yield Object(n["f"])(this.checkTransaction(t));
                        return yield this.provider.call(e, r)
                    }))
                }
                sendTransaction(t) {
                    return s(this, void 0, void 0, (function*() {
                        this._checkProvider("sendTransaction");
                        const r = yield this.populateTransaction(t), e = yield this.signTransaction(r);
                        return yield this.provider.sendTransaction(e)
                    }))
                }
                getChainId() {
                    return s(this, void 0, void 0, (function*() {
                        this._checkProvider("getChainId");
                        const t = yield this.provider.getNetwork();
                        return t.chainId
                    }))
                }
                getGasPrice() {
                    return s(this, void 0, void 0, (function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    }))
                }
                getFeeData() {
                    return s(this, void 0, void 0, (function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    }))
                }
                resolveName(t) {
                    return s(this, void 0, void 0, (function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                    }))
                }
                checkTransaction(t) {
                    for (const e in t) - 1 === u.indexOf(e) && a.throwArgumentError("invalid transaction key: " + e, "transaction", t);
                    const r = Object(n["g"])(t);
                    return null == r.from ? r.from = this.getAddress() : r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then(r => (r[0].toLowerCase() !== r[1].toLowerCase() && a.throwArgumentError("from address mismatch", "transaction", t), r[0])), r
                }
                populateTransaction(t) {
                    return s(this, void 0, void 0, (function*() {
                        const r = yield Object(n["f"])(this.checkTransaction(t));
                        null != r.to && (r.to = Promise.resolve(r.to).then(t => s(this, void 0, void 0, (function*() {
                            if (null == t) return null;
                            const r = yield this.resolveName(t);
                            return null == r && a.throwArgumentError("provided ENS name resolves to null", "tx.to", t), r
                        }))), r.to.catch(t => {}));
                        const e = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
                        if (null == r.gasPrice || 2 !== r.type && !e ? 0 !== r.type && 1 !== r.type || !e || a.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : a.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 2 !== r.type && null != r.type || null == r.maxFeePerGas || null == r.maxPriorityFeePerGas)
                            if (0 === r.type || 1 === r.type) null == r.gasPrice && (r.gasPrice = this.getGasPrice());
                            else {
                                const t = yield this.getFeeData();
                                if (null == r.type)
                                    if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                                        if (r.type = 2, null != r.gasPrice) {
                                            const t = r.gasPrice;
                                            delete r.gasPrice, r.maxFeePerGas = t, r.maxPriorityFeePerGas = t
                                        } else null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                                else null != t.gasPrice ? (e && a.throwError("network does not support EIP-1559", i["a"].errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == r.gasPrice && (r.gasPrice = t.gasPrice), r.type = 0) : a.throwError("failed to get consistent fee data", i["a"].errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                });
                                else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                            }
                        else r.type = 2;
                        return null == r.nonce && (r.nonce = this.getTransactionCount("pending")), null == r.gasLimit && (r.gasLimit = this.estimateGas(r).catch(t => {
                            if (h.indexOf(t.code) >= 0) throw t;
                            return a.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i["a"].errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: t,
                                tx: r
                            })
                        })), null == r.chainId ? r.chainId = this.getChainId() : r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then(r => (0 !== r[1] && r[0] !== r[1] && a.throwArgumentError("chainId address mismatch", "transaction", t), r[0])), yield Object(n["f"])(r)
                    }))
                }
                _checkProvider(t) {
                    this.provider || a.throwError("missing provider", i["a"].errors.UNSUPPORTED_OPERATION, {
                        operation: t || "_checkProvider"
                    })
                }
                static isSigner(t) {
                    return !(!t || !t._isSigner)
                }
            }
        },
        "7ec2": function(t, r, e) {
            var n = e("7037")["default"];

            function i() {
                "use strict";
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                t.exports = i = function() {
                    return e
                }, t.exports.__esModule = !0, t.exports["default"] = t.exports;
                var r, e = {},
                    o = Object.prototype,
                    s = o.hasOwnProperty,
                    a = Object.defineProperty || function(t, r, e) {
                        t[r] = e.value
                    },
                    u = "function" == typeof Symbol ? Symbol : {},
                    h = u.iterator || "@@iterator",
                    f = u.asyncIterator || "@@asyncIterator",
                    l = u.toStringTag || "@@toStringTag";

                function c(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[r]
                }
                try {
                    c({}, "")
                } catch (r) {
                    c = function(t, r, e) {
                        return t[r] = e
                    }
                }

                function d(t, r, e, n) {
                    var i = r && r.prototype instanceof w ? r : w,
                        o = Object.create(i.prototype),
                        s = new U(n || []);
                    return a(o, "_invoke", {
                        value: O(t, e, s)
                    }), o
                }

                function p(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = d;
                var m = "suspendedStart",
                    g = "suspendedYield",
                    v = "executing",
                    y = "completed",
                    b = {};

                function w() {}

                function M() {}

                function E() {}
                var _ = {};
                c(_, h, (function() {
                    return this
                }));
                var A = Object.getPrototypeOf,
                    N = A && A(A(k([])));
                N && N !== o && s.call(N, h) && (_ = N);
                var S = E.prototype = w.prototype = Object.create(_);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(r) {
                        c(t, r, (function(t) {
                            return this._invoke(r, t)
                        }))
                    }))
                }

                function I(t, r) {
                    function e(i, o, a, u) {
                        var h = p(t[i], t, o);
                        if ("throw" !== h.type) {
                            var f = h.arg,
                                l = f.value;
                            return l && "object" == n(l) && s.call(l, "__await") ? r.resolve(l.__await).then((function(t) {
                                e("next", t, a, u)
                            }), (function(t) {
                                e("throw", t, a, u)
                            })) : r.resolve(l).then((function(t) {
                                f.value = t, a(f)
                            }), (function(t) {
                                return e("throw", t, a, u)
                            }))
                        }
                        u(h.arg)
                    }
                    var i;
                    a(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new r((function(r, i) {
                                    e(t, n, r, i)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function O(t, e, n) {
                    var i = m;
                    return function(o, s) {
                        if (i === v) throw new Error("Generator is already running");
                        if (i === y) {
                            if ("throw" === o) throw s;
                            return {
                                value: r,
                                done: !0
                            }
                        }
                        for (n.method = o, n.arg = s;;) {
                            var a = n.delegate;
                            if (a) {
                                var u = R(a, n);
                                if (u) {
                                    if (u === b) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === m) throw i = y, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = v;
                            var h = p(t, e, n);
                            if ("normal" === h.type) {
                                if (i = n.done ? y : g, h.arg === b) continue;
                                return {
                                    value: h.arg,
                                    done: n.done
                                }
                            }
                            "throw" === h.type && (i = y, n.method = "throw", n.arg = h.arg)
                        }
                    }
                }

                function R(t, e) {
                    var n = e.method,
                        i = t.iterator[n];
                    if (i === r) return e.delegate = null, "throw" === n && t.iterator["return"] && (e.method = "return", e.arg = r, R(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), b;
                    var o = p(i, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, b;
                    var s = o.arg;
                    return s ? s.done ? (e[t.resultName] = s.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, b) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, b)
                }

                function P(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
                }

                function T(t) {
                    var r = t.completion || {};
                    r.type = "normal", delete r.arg, t.completion = r
                }

                function U(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(P, this), this.reset(!0)
                }

                function k(t) {
                    if (t || "" === t) {
                        var e = t[h];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var i = -1,
                                o = function e() {
                                    for (; ++i < t.length;)
                                        if (s.call(t, i)) return e.value = t[i], e.done = !1, e;
                                    return e.value = r, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    throw new TypeError(n(t) + " is not iterable")
                }
                return M.prototype = E, a(S, "constructor", {
                    value: E,
                    configurable: !0
                }), a(E, "constructor", {
                    value: M,
                    configurable: !0
                }), M.displayName = c(E, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === M || "GeneratorFunction" === (r.displayName || r.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, c(t, l, "GeneratorFunction")), t.prototype = Object.create(S), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(I.prototype), c(I.prototype, f, (function() {
                    return this
                })), e.AsyncIterator = I, e.async = function(t, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new I(d(t, r, n, i), o);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(t) {
                        return t.done ? t.value : s.next()
                    }))
                }, x(S), c(S, l, "Generator"), c(S, h, (function() {
                    return this
                })), c(S, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var r = Object(t),
                        e = [];
                    for (var n in r) e.push(n);
                    return e.reverse(),
                        function t() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in r) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, U.prototype = {
                    constructor: U,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(T), !t)
                            for (var e in this) "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, i) {
                            return a.type = "throw", a.arg = t, e.next = n, i && (e.method = "next", e.arg = r), !!i
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = s.call(o, "catchLoc"),
                                    h = s.call(o, "finallyLoc");
                                if (u && h) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!h) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, r) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = t, o.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, b) : this.complete(o)
                    },
                    complete: function(t, r) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), b
                    },
                    finish: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), T(e), b
                        }
                    },
                    catch: function(t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    T(e)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: k(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = r), b
                    }
                }, e
            }
            t.exports = i, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "806c": function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return s
            }));
            var n = e("1c55"),
                i = e.n(n),
                o = e("c9ac");

            function s(t) {
                return "0x" + i.a.keccak_256(Object(o["a"])(t))
            }
        },
        "8a85": function(t, r, e) {
            "use strict";
            e.d(r, "c", (function() {
                return s
            })), e.d(r, "b", (function() {
                return a
            })), e.d(r, "a", (function() {
                return c
            }));
            var n = e("7308");
            const i = "properties/5.6.0";
            const o = new n["a"](i);

            function s(t, r, e) {
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }

            function a(t, r) {
                t && "object" === typeof t || o.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach(e => {
                    r[e] || o.throwArgumentError("invalid object key - " + e, "transaction:" + e, t)
                })
            }
            const u = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function h(t) {
                if (void 0 === t || null === t || u[typeof t]) return !0;
                if (Array.isArray(t) || "object" === typeof t) {
                    if (!Object.isFrozen(t)) return !1;
                    const e = Object.keys(t);
                    for (let n = 0; n < e.length; n++) {
                        let i = null;
                        try {
                            i = t[e[n]]
                        } catch (r) {
                            continue
                        }
                        if (!h(i)) return !1
                    }
                    return !0
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function f(t) {
                if (h(t)) return t;
                if (Array.isArray(t)) return Object.freeze(t.map(t => l(t)));
                if ("object" === typeof t) {
                    const r = {};
                    for (const e in t) {
                        const n = t[e];
                        void 0 !== n && s(r, e, l(n))
                    }
                    return r
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function l(t) {
                return f(t)
            }
            class c {
                constructor(t) {
                    for (const r in t) this[r] = l(t[r])
                }
            }
        },
        "8fa1": function(t, r) {
            var e = 0;

            function n(t) {
                return "__private_" + e++ + "_" + t
            }
            t.exports = n, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        9523: function(t, r, e) {
            var n = e("a395");

            function i(t, r, e) {
                return r = n(r), r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e, t
            }
            t.exports = i, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "970b": function(t, r) {
            function e(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        9798: function(t, r, e) {
            (function(t) {
                (function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function i(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, r, e) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
                    }
                    var s;
                    "object" === typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : e(10).Buffer
                    } catch (x) {}

                    function a(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : e - 48 & 15
                    }

                    function u(t, r, e) {
                        var n = a(t, e);
                        return e - 1 >= r && (n |= a(t, e - 1) << 4), n
                    }

                    function h(t, r, e, n) {
                        for (var i = 0, o = Math.min(t.length, e), s = r; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                        }
                        return i
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, r) {
                        return t.cmp(r) > 0 ? t : r
                    }, o.min = function(t, r) {
                        return t.cmp(r) < 0 ? t : r
                    }, o.prototype._init = function(t, r, e) {
                        if ("number" === typeof t) return this._initNumber(t, r, e);
                        if ("object" === typeof t) return this._initArray(t, r, e);
                        "hex" === r && (r = 16), n(r === (0 | r) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
                        var i = 0;
                        "-" === t[0] && (i++, this.negative = 1), i < t.length && (16 === r ? this._parseHex(t, i, e) : (this._parseBase(t, r, i), "le" === e && this._initArray(this.toArray(), r, e)))
                    }, o.prototype._initNumber = function(t, r, e) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
                    }, o.prototype._initArray = function(t, r, e) {
                        if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var o, s, a = 0;
                        if ("be" === e)
                            for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        else if ("le" === e)
                            for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, r, e) {
                        this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var i, o = 0,
                            s = 0;
                        if ("be" === e)
                            for (n = t.length - 1; n >= r; n -= 2) i = u(t, r, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                        else {
                            var a = t.length - r;
                            for (n = a % 2 === 0 ? r + 1 : r; n < t.length; n += 2) i = u(t, r, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8
                        }
                        this.strip()
                    }, o.prototype._parseBase = function(t, r, e) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= r) n++;
                        n--, i = i / r | 0;
                        for (var o = t.length - e, s = o % n, a = Math.min(o, o - s) + e, u = 0, f = e; f < a; f += n) u = h(t, f, f + n, r), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== s) {
                            var l = 1;
                            for (u = h(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                            this.imuln(l), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this.strip()
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        while (this.length < t) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        while (this.length > 1 && 0 === this.words[this.length - 1]) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        c = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function d(t) {
                        for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                            var n = e / 26 | 0,
                                i = e % 26;
                            r[e] = (t.words[n] & 1 << i) >>> i
                        }
                        return r
                    }

                    function p(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | r.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            u = s / 67108864 | 0;
                        e.words[0] = a;
                        for (var h = 1; h < n; h++) {
                            for (var f = u >>> 26, l = 67108863 & u, c = Math.min(h, r.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                                var p = h - d | 0;
                                i = 0 | t.words[p], o = 0 | r.words[d], s = i * o + l, f += s / 67108864 | 0, l = 67108863 & s
                            }
                            e.words[h] = 0 | l, u = 0 | f
                        }
                        return 0 !== u ? e.words[h] = 0 | u : e.length--, e.strip()
                    }
                    o.prototype.toString = function(t, r) {
                        var e;
                        if (t = t || 10, r = 0 | r || 1, 16 === t || "hex" === t) {
                            e = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    u = (16777215 & (a << i | o)).toString(16);
                                o = a >>> 24 - i & 16777215, e = 0 !== o || s !== this.length - 1 ? f[6 - u.length] + u + e : u + e, i += 2, i >= 26 && (i -= 26, s--)
                            }
                            0 !== o && (e = o.toString(16) + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var h = l[t],
                                d = c[t];
                            e = "";
                            var p = this.clone();
                            p.negative = 0;
                            while (!p.isZero()) {
                                var m = p.modn(d).toString(t);
                                p = p.idivn(d), e = p.isZero() ? m + e : f[h - m.length] + m + e
                            }
                            this.isZero() && (e = "0" + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, r) {
                        return n("undefined" !== typeof s), this.toArrayLike(s, t, r)
                    }, o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    }, o.prototype.toArrayLike = function(t, r, e) {
                        var i = this.byteLength(),
                            o = e || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                        var s, a, u = "le" === r,
                            h = new t(o),
                            f = this.clone();
                        if (u) {
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[a] = s;
                            for (; a < o; a++) h[a] = 0
                        } else {
                            for (a = 0; a < o - i; a++) h[a] = 0;
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[o - a - 1] = s
                        }
                        return h
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 === (8191 & r) && (e += 13, r >>>= 13), 0 === (127 & r) && (e += 7, r >>>= 7), 0 === (15 & r) && (e += 4, r >>>= 4), 0 === (3 & r) && (e += 2, r >>>= 2), 0 === (1 & r) && e++, e
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var e = this._zeroBits(this.words[r]);
                            if (t += e, 26 !== e) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        while (this.length < t.length) this.words[this.length++] = 0;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
                        return this.length = r.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, e;
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0; n < e.length; n++) this.words[n] = r.words[n] ^ e.words[n];
                        if (this !== r)
                            for (; n < r.length; n++) this.words[n] = r.words[n];
                        return this.length = r.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        n("number" === typeof t && t >= 0);
                        var e = t / 26 | 0,
                            i = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << i : this.words[e] & ~(1 << i), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var r, e, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                        for (var i = 0, o = 0; o < n.length; o++) r = (0 | e.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        for (; 0 !== i && o < e.length; o++) r = (0 | e.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        if (this.length = e.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (e !== this)
                            for (; o < e.length; o++) this.words[o] = e.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var e, n, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (e = this, n = t) : (e = t, n = this);
                        for (var o = 0, s = 0; s < n.length; s++) r = (0 | e.words[s]) - (0 | n.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        for (; 0 !== o && s < e.length; s++) r = (0 | e.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        if (0 === o && s < e.length && e !== this)
                            for (; s < e.length; s++) this.words[s] = e.words[s];
                        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var m = function(t, r, e) {
                        var n, i, o, s = t.words,
                            a = r.words,
                            u = e.words,
                            h = 0,
                            f = 0 | s[0],
                            l = 8191 & f,
                            c = f >>> 13,
                            d = 0 | s[1],
                            p = 8191 & d,
                            m = d >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            y = g >>> 13,
                            b = 0 | s[3],
                            w = 8191 & b,
                            M = b >>> 13,
                            E = 0 | s[4],
                            _ = 8191 & E,
                            A = E >>> 13,
                            N = 0 | s[5],
                            S = 8191 & N,
                            x = N >>> 13,
                            I = 0 | s[6],
                            O = 8191 & I,
                            R = I >>> 13,
                            P = 0 | s[7],
                            T = 8191 & P,
                            U = P >>> 13,
                            k = 0 | s[8],
                            C = 8191 & k,
                            j = k >>> 13,
                            F = 0 | s[9],
                            L = 8191 & F,
                            D = F >>> 13,
                            q = 0 | a[0],
                            B = 8191 & q,
                            z = q >>> 13,
                            G = 0 | a[1],
                            K = 8191 & G,
                            V = G >>> 13,
                            Z = 0 | a[2],
                            X = 8191 & Z,
                            J = Z >>> 13,
                            W = 0 | a[3],
                            H = 8191 & W,
                            $ = W >>> 13,
                            Y = 0 | a[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            rt = 0 | a[5],
                            et = 8191 & rt,
                            nt = rt >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ut = 8191 & at,
                            ht = at >>> 13,
                            ft = 0 | a[8],
                            lt = 8191 & ft,
                            ct = ft >>> 13,
                            dt = 0 | a[9],
                            pt = 8191 & dt,
                            mt = dt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19, n = Math.imul(l, B), i = Math.imul(l, z), i = i + Math.imul(c, B) | 0, o = Math.imul(c, z);
                        var gt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, B), i = Math.imul(p, z), i = i + Math.imul(m, B) | 0, o = Math.imul(m, z), n = n + Math.imul(l, K) | 0, i = i + Math.imul(l, V) | 0, i = i + Math.imul(c, K) | 0, o = o + Math.imul(c, V) | 0;
                        var vt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, B), i = Math.imul(v, z), i = i + Math.imul(y, B) | 0, o = Math.imul(y, z), n = n + Math.imul(p, K) | 0, i = i + Math.imul(p, V) | 0, i = i + Math.imul(m, K) | 0, o = o + Math.imul(m, V) | 0, n = n + Math.imul(l, X) | 0, i = i + Math.imul(l, J) | 0, i = i + Math.imul(c, X) | 0, o = o + Math.imul(c, J) | 0;
                        var yt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, B), i = Math.imul(w, z), i = i + Math.imul(M, B) | 0, o = Math.imul(M, z), n = n + Math.imul(v, K) | 0, i = i + Math.imul(v, V) | 0, i = i + Math.imul(y, K) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, X) | 0, i = i + Math.imul(p, J) | 0, i = i + Math.imul(m, X) | 0, o = o + Math.imul(m, J) | 0, n = n + Math.imul(l, H) | 0, i = i + Math.imul(l, $) | 0, i = i + Math.imul(c, H) | 0, o = o + Math.imul(c, $) | 0;
                        var bt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(_, B), i = Math.imul(_, z), i = i + Math.imul(A, B) | 0, o = Math.imul(A, z), n = n + Math.imul(w, K) | 0, i = i + Math.imul(w, V) | 0, i = i + Math.imul(M, K) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(v, X) | 0, i = i + Math.imul(v, J) | 0, i = i + Math.imul(y, X) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, H) | 0, i = i + Math.imul(p, $) | 0, i = i + Math.imul(m, H) | 0, o = o + Math.imul(m, $) | 0, n = n + Math.imul(l, Q) | 0, i = i + Math.imul(l, tt) | 0, i = i + Math.imul(c, Q) | 0, o = o + Math.imul(c, tt) | 0;
                        var wt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, B), i = Math.imul(S, z), i = i + Math.imul(x, B) | 0, o = Math.imul(x, z), n = n + Math.imul(_, K) | 0, i = i + Math.imul(_, V) | 0, i = i + Math.imul(A, K) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(w, X) | 0, i = i + Math.imul(w, J) | 0, i = i + Math.imul(M, X) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(v, H) | 0, i = i + Math.imul(v, $) | 0, i = i + Math.imul(y, H) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = i + Math.imul(p, tt) | 0, i = i + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0, n = n + Math.imul(l, et) | 0, i = i + Math.imul(l, nt) | 0, i = i + Math.imul(c, et) | 0, o = o + Math.imul(c, nt) | 0;
                        var Mt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, B), i = Math.imul(O, z), i = i + Math.imul(R, B) | 0, o = Math.imul(R, z), n = n + Math.imul(S, K) | 0, i = i + Math.imul(S, V) | 0, i = i + Math.imul(x, K) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(_, X) | 0, i = i + Math.imul(_, J) | 0, i = i + Math.imul(A, X) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(w, H) | 0, i = i + Math.imul(w, $) | 0, i = i + Math.imul(M, H) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(v, Q) | 0, i = i + Math.imul(v, tt) | 0, i = i + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, et) | 0, i = i + Math.imul(p, nt) | 0, i = i + Math.imul(m, et) | 0, o = o + Math.imul(m, nt) | 0, n = n + Math.imul(l, ot) | 0, i = i + Math.imul(l, st) | 0, i = i + Math.imul(c, ot) | 0, o = o + Math.imul(c, st) | 0;
                        var Et = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(T, B), i = Math.imul(T, z), i = i + Math.imul(U, B) | 0, o = Math.imul(U, z), n = n + Math.imul(O, K) | 0, i = i + Math.imul(O, V) | 0, i = i + Math.imul(R, K) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(S, X) | 0, i = i + Math.imul(S, J) | 0, i = i + Math.imul(x, X) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(_, H) | 0, i = i + Math.imul(_, $) | 0, i = i + Math.imul(A, H) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(w, Q) | 0, i = i + Math.imul(w, tt) | 0, i = i + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(v, et) | 0, i = i + Math.imul(v, nt) | 0, i = i + Math.imul(y, et) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = i + Math.imul(p, st) | 0, i = i + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0, n = n + Math.imul(l, ut) | 0, i = i + Math.imul(l, ht) | 0, i = i + Math.imul(c, ut) | 0, o = o + Math.imul(c, ht) | 0;
                        var _t = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(C, B), i = Math.imul(C, z), i = i + Math.imul(j, B) | 0, o = Math.imul(j, z), n = n + Math.imul(T, K) | 0, i = i + Math.imul(T, V) | 0, i = i + Math.imul(U, K) | 0, o = o + Math.imul(U, V) | 0, n = n + Math.imul(O, X) | 0, i = i + Math.imul(O, J) | 0, i = i + Math.imul(R, X) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(S, H) | 0, i = i + Math.imul(S, $) | 0, i = i + Math.imul(x, H) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(_, Q) | 0, i = i + Math.imul(_, tt) | 0, i = i + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(w, et) | 0, i = i + Math.imul(w, nt) | 0, i = i + Math.imul(M, et) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(v, ot) | 0, i = i + Math.imul(v, st) | 0, i = i + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = i + Math.imul(p, ht) | 0, i = i + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0, n = n + Math.imul(l, lt) | 0, i = i + Math.imul(l, ct) | 0, i = i + Math.imul(c, lt) | 0, o = o + Math.imul(c, ct) | 0;
                        var At = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, B), i = Math.imul(L, z), i = i + Math.imul(D, B) | 0, o = Math.imul(D, z), n = n + Math.imul(C, K) | 0, i = i + Math.imul(C, V) | 0, i = i + Math.imul(j, K) | 0, o = o + Math.imul(j, V) | 0, n = n + Math.imul(T, X) | 0, i = i + Math.imul(T, J) | 0, i = i + Math.imul(U, X) | 0, o = o + Math.imul(U, J) | 0, n = n + Math.imul(O, H) | 0, i = i + Math.imul(O, $) | 0, i = i + Math.imul(R, H) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(S, Q) | 0, i = i + Math.imul(S, tt) | 0, i = i + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(_, et) | 0, i = i + Math.imul(_, nt) | 0, i = i + Math.imul(A, et) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(w, ot) | 0, i = i + Math.imul(w, st) | 0, i = i + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(v, ut) | 0, i = i + Math.imul(v, ht) | 0, i = i + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, lt) | 0, i = i + Math.imul(p, ct) | 0, i = i + Math.imul(m, lt) | 0, o = o + Math.imul(m, ct) | 0, n = n + Math.imul(l, pt) | 0, i = i + Math.imul(l, mt) | 0, i = i + Math.imul(c, pt) | 0, o = o + Math.imul(c, mt) | 0;
                        var Nt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(L, K), i = Math.imul(L, V), i = i + Math.imul(D, K) | 0, o = Math.imul(D, V), n = n + Math.imul(C, X) | 0, i = i + Math.imul(C, J) | 0, i = i + Math.imul(j, X) | 0, o = o + Math.imul(j, J) | 0, n = n + Math.imul(T, H) | 0, i = i + Math.imul(T, $) | 0, i = i + Math.imul(U, H) | 0, o = o + Math.imul(U, $) | 0, n = n + Math.imul(O, Q) | 0, i = i + Math.imul(O, tt) | 0, i = i + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(S, et) | 0, i = i + Math.imul(S, nt) | 0, i = i + Math.imul(x, et) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(_, ot) | 0, i = i + Math.imul(_, st) | 0, i = i + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(w, ut) | 0, i = i + Math.imul(w, ht) | 0, i = i + Math.imul(M, ut) | 0, o = o + Math.imul(M, ht) | 0, n = n + Math.imul(v, lt) | 0, i = i + Math.imul(v, ct) | 0, i = i + Math.imul(y, lt) | 0, o = o + Math.imul(y, ct) | 0, n = n + Math.imul(p, pt) | 0, i = i + Math.imul(p, mt) | 0, i = i + Math.imul(m, pt) | 0, o = o + Math.imul(m, mt) | 0;
                        var St = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(L, X), i = Math.imul(L, J), i = i + Math.imul(D, X) | 0, o = Math.imul(D, J), n = n + Math.imul(C, H) | 0, i = i + Math.imul(C, $) | 0, i = i + Math.imul(j, H) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(T, Q) | 0, i = i + Math.imul(T, tt) | 0, i = i + Math.imul(U, Q) | 0, o = o + Math.imul(U, tt) | 0, n = n + Math.imul(O, et) | 0, i = i + Math.imul(O, nt) | 0, i = i + Math.imul(R, et) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(S, ot) | 0, i = i + Math.imul(S, st) | 0, i = i + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(_, ut) | 0, i = i + Math.imul(_, ht) | 0, i = i + Math.imul(A, ut) | 0, o = o + Math.imul(A, ht) | 0, n = n + Math.imul(w, lt) | 0, i = i + Math.imul(w, ct) | 0, i = i + Math.imul(M, lt) | 0, o = o + Math.imul(M, ct) | 0, n = n + Math.imul(v, pt) | 0, i = i + Math.imul(v, mt) | 0, i = i + Math.imul(y, pt) | 0, o = o + Math.imul(y, mt) | 0;
                        var xt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(L, H), i = Math.imul(L, $), i = i + Math.imul(D, H) | 0, o = Math.imul(D, $), n = n + Math.imul(C, Q) | 0, i = i + Math.imul(C, tt) | 0, i = i + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(T, et) | 0, i = i + Math.imul(T, nt) | 0, i = i + Math.imul(U, et) | 0, o = o + Math.imul(U, nt) | 0, n = n + Math.imul(O, ot) | 0, i = i + Math.imul(O, st) | 0, i = i + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(S, ut) | 0, i = i + Math.imul(S, ht) | 0, i = i + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(_, lt) | 0, i = i + Math.imul(_, ct) | 0, i = i + Math.imul(A, lt) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(w, pt) | 0, i = i + Math.imul(w, mt) | 0, i = i + Math.imul(M, pt) | 0, o = o + Math.imul(M, mt) | 0;
                        var It = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(L, Q), i = Math.imul(L, tt), i = i + Math.imul(D, Q) | 0, o = Math.imul(D, tt), n = n + Math.imul(C, et) | 0, i = i + Math.imul(C, nt) | 0, i = i + Math.imul(j, et) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(T, ot) | 0, i = i + Math.imul(T, st) | 0, i = i + Math.imul(U, ot) | 0, o = o + Math.imul(U, st) | 0, n = n + Math.imul(O, ut) | 0, i = i + Math.imul(O, ht) | 0, i = i + Math.imul(R, ut) | 0, o = o + Math.imul(R, ht) | 0, n = n + Math.imul(S, lt) | 0, i = i + Math.imul(S, ct) | 0, i = i + Math.imul(x, lt) | 0, o = o + Math.imul(x, ct) | 0, n = n + Math.imul(_, pt) | 0, i = i + Math.imul(_, mt) | 0, i = i + Math.imul(A, pt) | 0, o = o + Math.imul(A, mt) | 0;
                        var Ot = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(L, et), i = Math.imul(L, nt), i = i + Math.imul(D, et) | 0, o = Math.imul(D, nt), n = n + Math.imul(C, ot) | 0, i = i + Math.imul(C, st) | 0, i = i + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, n = n + Math.imul(T, ut) | 0, i = i + Math.imul(T, ht) | 0, i = i + Math.imul(U, ut) | 0, o = o + Math.imul(U, ht) | 0, n = n + Math.imul(O, lt) | 0, i = i + Math.imul(O, ct) | 0, i = i + Math.imul(R, lt) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(S, pt) | 0, i = i + Math.imul(S, mt) | 0, i = i + Math.imul(x, pt) | 0, o = o + Math.imul(x, mt) | 0;
                        var Rt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(L, ot), i = Math.imul(L, st), i = i + Math.imul(D, ot) | 0, o = Math.imul(D, st), n = n + Math.imul(C, ut) | 0, i = i + Math.imul(C, ht) | 0, i = i + Math.imul(j, ut) | 0, o = o + Math.imul(j, ht) | 0, n = n + Math.imul(T, lt) | 0, i = i + Math.imul(T, ct) | 0, i = i + Math.imul(U, lt) | 0, o = o + Math.imul(U, ct) | 0, n = n + Math.imul(O, pt) | 0, i = i + Math.imul(O, mt) | 0, i = i + Math.imul(R, pt) | 0, o = o + Math.imul(R, mt) | 0;
                        var Pt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(L, ut), i = Math.imul(L, ht), i = i + Math.imul(D, ut) | 0, o = Math.imul(D, ht), n = n + Math.imul(C, lt) | 0, i = i + Math.imul(C, ct) | 0, i = i + Math.imul(j, lt) | 0, o = o + Math.imul(j, ct) | 0, n = n + Math.imul(T, pt) | 0, i = i + Math.imul(T, mt) | 0, i = i + Math.imul(U, pt) | 0, o = o + Math.imul(U, mt) | 0;
                        var Tt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(L, lt), i = Math.imul(L, ct), i = i + Math.imul(D, lt) | 0, o = Math.imul(D, ct), n = n + Math.imul(C, pt) | 0, i = i + Math.imul(C, mt) | 0, i = i + Math.imul(j, pt) | 0, o = o + Math.imul(j, mt) | 0;
                        var Ut = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(L, pt), i = Math.imul(L, mt), i = i + Math.imul(D, pt) | 0, o = Math.imul(D, mt);
                        var kt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        return h = (o + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, u[0] = gt, u[1] = vt, u[2] = yt, u[3] = bt, u[4] = wt, u[5] = Mt, u[6] = Et, u[7] = _t, u[8] = At, u[9] = Nt, u[10] = St, u[11] = xt, u[12] = It, u[13] = Ot, u[14] = Rt, u[15] = Pt, u[16] = Tt, u[17] = Ut, u[18] = kt, 0 !== h && (u[19] = h, e.length++), e
                    };

                    function g(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, i = 0, o = 0; o < e.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, u = Math.min(o, r.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                                var f = o - h,
                                    l = 0 | t.words[f],
                                    c = 0 | r.words[h],
                                    d = l * c,
                                    p = 67108863 & d;
                                s = s + (d / 67108864 | 0) | 0, p = p + a | 0, a = 67108863 & p, s = s + (p >>> 26) | 0, i += s >>> 26, s &= 67108863
                            }
                            e.words[o] = a, n = s, s = i
                        }
                        return 0 !== n ? e.words[o] = n : e.length--, e.strip()
                    }

                    function v(t, r, e) {
                        var n = new y;
                        return n.mulp(t, r, e)
                    }

                    function y(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (m = p), o.prototype.mulTo = function(t, r) {
                        var e, n = this.length + t.length;
                        return e = 10 === this.length && 10 === t.length ? m(this, t, r) : n < 63 ? p(this, t, r) : n < 1024 ? g(this, t, r) : v(this, t, r), e
                    }, y.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, n = 0; n < t; n++) r[n] = this.revBin(n, e, t);
                        return r
                    }, y.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, y.prototype.permute = function(t, r, e, n, i, o) {
                        for (var s = 0; s < o; s++) n[s] = r[t[s]], i[s] = e[t[s]]
                    }, y.prototype.transform = function(t, r, e, n, i, o) {
                        this.permute(o, t, r, e, n, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), f = 0; f < i; f += a)
                                for (var l = u, c = h, d = 0; d < s; d++) {
                                    var p = e[f + d],
                                        m = n[f + d],
                                        g = e[f + d + s],
                                        v = n[f + d + s],
                                        y = l * g - c * v;
                                    v = l * v + c * g, g = y, e[f + d] = p + g, n[f + d] = m + v, e[f + d + s] = p - g, n[f + d + s] = m - v, d !== a && (y = u * l - h * c, c = u * c + h * l, l = y)
                                }
                    }, y.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, y.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var n = 0; n < e / 2; n++) {
                                var i = t[n];
                                t[n] = t[e - n - 1], t[e - n - 1] = i, i = r[n], r[n] = -r[e - n - 1], r[e - n - 1] = -i
                            }
                    }, y.prototype.normalize13b = function(t, r) {
                        for (var e = 0, n = 0; n < r / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / r) + Math.round(t[2 * n] / r) + e;
                            t[n] = 67108863 & i, e = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, y.prototype.convert13b = function(t, r, e, i) {
                        for (var o = 0, s = 0; s < r; s++) o += 0 | t[s], e[2 * s] = 8191 & o, o >>>= 13, e[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * r; s < i; ++s) e[s] = 0;
                        n(0 === o), n(0 === (-8192 & o))
                    }, y.prototype.stub = function(t) {
                        for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
                        return r
                    }, y.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            s = new Array(n),
                            a = new Array(n),
                            u = new Array(n),
                            h = new Array(n),
                            f = new Array(n),
                            l = new Array(n),
                            c = e.words;
                        c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(r.words, r.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, f, l, n, i);
                        for (var d = 0; d < n; d++) {
                            var p = a[d] * f[d] - u[d] * l[d];
                            u[d] = a[d] * l[d] + u[d] * f[d], a[d] = p
                        }
                        return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e.strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), v(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        n("number" === typeof t), n(t < 67108864);
                        for (var r = 0, e = 0; e < this.length; e++) {
                            var i = (0 | this.words[e]) * t,
                                o = (67108863 & i) + (67108863 & r);
                            r >>= 26, r += i / 67108864 | 0, r += o >>> 26, this.words[e] = 67108863 & o
                        }
                        return 0 !== r && (this.words[e] = r, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = d(t);
                        if (0 === r.length) return new o(1);
                        for (var e = this, n = 0; n < r.length; n++, e = e.sqr())
                            if (0 !== r[n]) break;
                        if (++n < r.length)
                            for (var i = e.sqr(); n < r.length; n++, i = i.sqr()) 0 !== r[n] && (e = e.mul(i));
                        return e
                    }, o.prototype.iushln = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r, e = t % 26,
                            i = (t - e) / 26,
                            o = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var s = 0;
                            for (r = 0; r < this.length; r++) {
                                var a = this.words[r] & o,
                                    u = (0 | this.words[r]) - a << e;
                                this.words[r] = u | s, s = a >>> 26 - e
                            }
                            s && (this.words[r] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + i] = this.words[r];
                            for (r = 0; r < i; r++) this.words[r] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, e) {
                        var i;
                        n("number" === typeof t && t >= 0), i = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            u = e;
                        if (i -= s, i = Math.max(0, i), u) {
                            for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                            u.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
                            var l = 0 | this.words[h];
                            this.words[h] = f << 26 - o | l >>> o, f = l & a
                        }
                        return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return !1;
                        var o = this.words[e];
                        return !!(o & i)
                    }, o.prototype.imaskn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
                            var i = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, e) {
                        var i, o, s = t.length + e;
                        this._expand(s);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + a;
                            var u = (0 | t.words[i]) * r;
                            o -= 67108863 & u, a = (o >> 26) - (u / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) o = (0 | this.words[i + e]) + a, a = o >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === a) return this.strip();
                        for (n(-1 === a), a = 0, i = 0; i < this.length; i++) o = -(0 | this.words[i]) + a, a = o >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var e = this.length - t.length,
                            n = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1],
                            a = this._countBits(s);
                        e = 26 - a, 0 !== e && (i = i.ushln(e), n.iushln(e), s = 0 | i.words[i.length - 1]);
                        var u, h = n.length - i.length;
                        if ("mod" !== r) {
                            u = new o(null), u.length = h + 1, u.words = new Array(u.length);
                            for (var f = 0; f < u.length; f++) u.words[f] = 0
                        }
                        var l = n.clone()._ishlnsubmul(i, 1, h);
                        0 === l.negative && (n = l, u && (u.words[h] = 1));
                        for (var c = h - 1; c >= 0; c--) {
                            var d = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                            d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, c);
                            while (0 !== n.negative) d--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                            u && (u.words[c] = d)
                        }
                        return u && u.strip(), n.strip(), "div" !== r && 0 !== e && n.iushrn(e), {
                            div: u || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, r), "mod" !== r && (i = a.div.neg()), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), r), "mod" !== r && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), r), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
                            div: a.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var i, s, a
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            i = t.andln(1),
                            o = e.cmp(n);
                        return o < 0 || 1 === i && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        n(t <= 67108863);
                        for (var r = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (r * e + (0 | this.words[i])) % t;
                        return e
                    }, o.prototype.idivn = function(t) {
                        n(t <= 67108863);
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var i = (0 | this.words[e]) + 67108864 * r;
                            this.words[e] = i / t | 0, r = i % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i = new o(1),
                            s = new o(0),
                            a = new o(0),
                            u = new o(1),
                            h = 0;
                        while (r.isEven() && e.isEven()) r.iushrn(1), e.iushrn(1), ++h;
                        var f = e.clone(),
                            l = r.clone();
                        while (!r.isZero()) {
                            for (var c = 0, d = 1; 0 === (r.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0) {
                                r.iushrn(c);
                                while (c-- > 0)(i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(l)), i.iushrn(1), s.iushrn(1)
                            }
                            for (var p = 0, m = 1; 0 === (e.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0) {
                                e.iushrn(p);
                                while (p-- > 0)(a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(l)), a.iushrn(1), u.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), i.isub(a), s.isub(u)) : (e.isub(r), a.isub(i), u.isub(s))
                        }
                        return {
                            a: a,
                            b: u,
                            gcd: e.iushln(h)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i, s = new o(1),
                            a = new o(0),
                            u = e.clone();
                        while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                            for (var h = 0, f = 1; 0 === (r.words[0] & f) && h < 26; ++h, f <<= 1);
                            if (h > 0) {
                                r.iushrn(h);
                                while (h-- > 0) s.isOdd() && s.iadd(u), s.iushrn(1)
                            }
                            for (var l = 0, c = 1; 0 === (e.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0) {
                                e.iushrn(l);
                                while (l-- > 0) a.isOdd() && a.iadd(u), a.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), s.isub(a)) : (e.isub(r), a.isub(s))
                        }
                        return i = 0 === r.cmpn(1) ? s : a, i.cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            e = t.clone();
                        r.negative = 0, e.negative = 0;
                        for (var n = 0; r.isEven() && e.isEven(); n++) r.iushrn(1), e.iushrn(1);
                        do {
                            while (r.isEven()) r.iushrn(1);
                            while (e.isEven()) e.iushrn(1);
                            var i = r.cmp(e);
                            if (i < 0) {
                                var o = r;
                                r = e, e = o
                            } else if (0 === i || 0 === e.cmpn(1)) break;
                            r.isub(e)
                        } while (1);
                        return e.iushln(n)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 === (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 === (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        n("number" === typeof t);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return this._expand(e + 1), this.words[e] |= i, this;
                        for (var o = i, s = e; 0 !== o && s < this.length; s++) {
                            var a = 0 | this.words[s];
                            a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this.strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), n(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            r = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var n = 0 | this.words[e],
                                i = 0 | t.words[e];
                            if (n !== i) {
                                n < i ? r = -1 : n > i && (r = 1);
                                break
                            }
                        }
                        return r
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new N(t)
                    }, o.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var b = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function w(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function M() {
                        w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function E() {
                        w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function _() {
                        w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function A() {
                        w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function N(t) {
                        if ("string" === typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function S(t) {
                        N.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    w.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, w.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), e = this.imulK(e), e = e.iadd(this.tmp), r = e.bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, w.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, w.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(M, w), M.prototype.split = function(t, r) {
                        for (var e = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) r.words[i] = t.words[i];
                        if (r.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var o = t.words[9];
                        for (r.words[r.length++] = o & e, i = 10; i < t.length; i++) {
                            var s = 0 | t.words[i];
                            t.words[i - 10] = (s & e) << 4 | o >>> 22, o = s
                        }
                        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, M.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 0 | t.words[e];
                            r += 977 * n, t.words[e] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(E, w), i(_, w), i(A, w), A.prototype.imulK = function(t) {
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 19 * (0 | t.words[e]) + r,
                                i = 67108863 & n;
                            n >>>= 26, t.words[e] = i, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (b[t]) return b[t];
                        var r;
                        if ("k256" === t) r = new M;
                        else if ("p224" === t) r = new E;
                        else if ("p192" === t) r = new _;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new A
                        }
                        return b[t] = r, r
                    }, N.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, N.prototype._verify2 = function(t, r) {
                        n(0 === (t.negative | r.negative), "red works only with positives"), n(t.red && t.red === r.red, "red works only with red numbers")
                    }, N.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, N.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, N.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var e = t.add(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
                    }, N.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var e = t.iadd(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e
                    }, N.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.sub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, N.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.isub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e
                    }, N.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, N.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, N.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, N.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, N.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, N.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (n(r % 2 === 1), 3 === r) {
                            var e = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, e)
                        }
                        var i = this.m.subn(1),
                            s = 0;
                        while (!i.isZero() && 0 === i.andln(1)) s++, i.iushrn(1);
                        n(!i.isZero());
                        var a = new o(1).toRed(this),
                            u = a.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        f = new o(2 * f * f).toRed(this);
                        while (0 !== this.pow(f, h).cmp(u)) f.redIAdd(u);
                        var l = this.pow(f, i),
                            c = this.pow(t, i.addn(1).iushrn(1)),
                            d = this.pow(t, i),
                            p = s;
                        while (0 !== d.cmp(a)) {
                            for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                            n(g < p);
                            var v = this.pow(l, new o(1).iushln(p - g - 1));
                            c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                        }
                        return c
                    }, N.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, N.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1).toRed(this);
                        if (0 === r.cmpn(1)) return t.clone();
                        var e = 4,
                            n = new Array(1 << e);
                        n[0] = new o(1).toRed(this), n[1] = t;
                        for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
                        var s = n[0],
                            a = 0,
                            u = 0,
                            h = r.bitLength() % 26;
                        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
                            for (var f = r.words[i], l = h - 1; l >= 0; l--) {
                                var c = f >> l & 1;
                                s !== n[0] && (s = this.sqr(s)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, u++, (u === e || 0 === i && 0 === l) && (s = this.mul(s, n[a]), u = 0, a = 0)) : u = 0
                            }
                            h = 26
                        }
                        return s
                    }, N.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, N.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new S(t)
                    }, i(S, N), S.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, S.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, S.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var e = t.imul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, S.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var e = t.mul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, S.prototype.invm = function(t) {
                        var r = this.imod(t._invmp(this.m).mul(this.r2));
                        return r._forceRed(this)
                    }
                })(t, this)
            }).call(this, e("62e4")(t))
        },
        "9b42": function(t, r) {
            function e(t, r) {
                var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != e) {
                    var n, i, o, s, a = [],
                        u = !0,
                        h = !1;
                    try {
                        if (o = (e = e.call(t)).next, 0 === r) {
                            if (Object(e) !== e) return;
                            u = !1
                        } else
                            for (; !(u = (n = o.call(e)).done) && (a.push(n.value), a.length !== r); u = !0);
                    } catch (t) {
                        h = !0, i = t
                    } finally {
                        try {
                            if (!u && null != e["return"] && (s = e["return"](), Object(s) !== s)) return
                        } finally {
                            if (h) throw i
                        }
                    }
                    return a
                }
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        "9cf4": function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return j
            })), e.d(r, "a", (function() {
                return F
            })), e.d(r, "c", (function() {
                return L
            }));
            var n = e("7247"),
                i = e.n(n),
                o = e("9f6a"),
                s = e.n(o),
                a = e("ffef"),
                u = e("c9ac"),
                h = e("f002"),
                f = e("806c"),
                l = e("4105"),
                c = e("6e45"),
                d = e("8a85");
            e("1d9a");
            e("bc84");
            var p = e("1b18"),
                m = e("7308");
            const g = "signing-key/5.6.0",
                v = new m["a"](g);
            let y = null;

            function b() {
                return y || (y = new p["a"]("secp256k1")), y
            }
            class w {
                constructor(t) {
                    Object(d["c"])(this, "curve", "secp256k1"), Object(d["c"])(this, "privateKey", Object(u["g"])(t));
                    const r = b().keyFromPrivate(Object(u["a"])(this.privateKey));
                    Object(d["c"])(this, "publicKey", "0x" + r.getPublic(!1, "hex")), Object(d["c"])(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), Object(d["c"])(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    const r = b().keyFromPublic(Object(u["a"])(this.publicKey)),
                        e = b().keyFromPublic(Object(u["a"])(t));
                    return "0x" + r.pub.add(e.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    const r = b().keyFromPrivate(Object(u["a"])(this.privateKey)),
                        e = Object(u["a"])(t);
                    32 !== e.length && v.throwArgumentError("bad digest length", "digest", t);
                    const n = r.sign(e, {
                        canonical: !0
                    });
                    return Object(u["k"])({
                        recoveryParam: n.recoveryParam,
                        r: Object(u["f"])("0x" + n.r.toString(16), 32),
                        s: Object(u["f"])("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    const r = b().keyFromPrivate(Object(u["a"])(this.privateKey)),
                        e = b().keyFromPublic(Object(u["a"])(M(t)));
                    return Object(u["f"])("0x" + r.derive(e.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !(!t || !t._isSigningKey)
                }
            }

            function M(t, r) {
                const e = Object(u["a"])(t);
                if (32 === e.length) {
                    const t = new w(e);
                    return r ? "0x" + b().keyFromPrivate(e).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === e.length ? r ? Object(u["g"])(e) : "0x" + b().keyFromPublic(e).getPublic(!1, "hex") : 65 === e.length ? r ? "0x" + b().keyFromPublic(e).getPublic(!0, "hex") : Object(u["g"])(e) : v.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            const E = "transactions/5.6.0";
            new m["a"](E);
            var _;
            (function(t) {
                t[t["legacy"] = 0] = "legacy", t[t["eip2930"] = 1] = "eip2930", t[t["eip1559"] = 2] = "eip1559"
            })(_ || (_ = {}));

            function A(t) {
                const r = M(t);
                return Object(a["a"])(Object(u["e"])(Object(f["a"])(Object(u["e"])(r, 1)), 12))
            }
            var N = e("fe6d"),
                S = e("51bf"),
                x = function(t, r, e, n) {
                    function i(t) {
                        return t instanceof e ? t : new e((function(r) {
                            r(t)
                        }))
                    }
                    return new(e || (e = Promise))((function(e, o) {
                        function s(t) {
                            try {
                                u(n.next(t))
                            } catch (r) {
                                o(r)
                            }
                        }

                        function a(t) {
                            try {
                                u(n["throw"](t))
                            } catch (r) {
                                o(r)
                            }
                        }

                        function u(t) {
                            t.done ? e(t.value) : i(t.value).then(s, a)
                        }
                        u((n = n.apply(t, r || [])).next())
                    }))
                };
            const I = new m["a"](S["a"]);

            function O(t) {
                return null != t && t.mnemonic && t.mnemonic.phrase
            }
            class R extends d["a"] {
                isKeystoreAccount(t) {
                    return !(!t || !t._isKeystoreAccount)
                }
            }

            function P(t, r, e) {
                const n = Object(N["c"])(t, "crypto/cipher");
                if ("aes-128-ctr" === n) {
                    const n = Object(N["b"])(Object(N["c"])(t, "crypto/cipherparams/iv")),
                        o = new i.a.Counter(n),
                        s = new i.a.ModeOfOperation.ctr(r, o);
                    return Object(u["a"])(s.decrypt(e))
                }
                return null
            }

            function T(t, r) {
                const e = Object(N["b"])(Object(N["c"])(t, "crypto/ciphertext")),
                    n = Object(u["g"])(Object(f["a"])(Object(u["b"])([r.slice(16, 32), e]))).substring(2);
                if (n !== Object(N["c"])(t, "crypto/mac").toLowerCase()) throw new Error("invalid password");
                const o = P(t, r.slice(0, 16), e);
                o || I.throwError("unsupported cipher", m["a"].errors.UNSUPPORTED_OPERATION, {
                    operation: "decrypt"
                });
                const s = r.slice(32, 64),
                    l = A(o);
                if (t.address) {
                    let r = t.address.toLowerCase();
                    if ("0x" !== r.substring(0, 2) && (r = "0x" + r), Object(a["a"])(r) !== l) throw new Error("address mismatch")
                }
                const c = {
                    _isKeystoreAccount: !0,
                    address: l,
                    privateKey: Object(u["g"])(o)
                };
                if ("0.1" === Object(N["c"])(t, "x-ethers/version")) {
                    const r = Object(N["b"])(Object(N["c"])(t, "x-ethers/mnemonicCiphertext")),
                        e = Object(N["b"])(Object(N["c"])(t, "x-ethers/mnemonicCounter")),
                        n = new i.a.Counter(e),
                        o = new i.a.ModeOfOperation.ctr(s, n),
                        a = Object(N["c"])(t, "x-ethers/path") || h["b"],
                        f = Object(N["c"])(t, "x-ethers/locale") || "en",
                        l = Object(u["a"])(o.decrypt(r));
                    try {
                        const t = Object(h["c"])(l, f),
                            r = h["a"].fromMnemonic(t, null, f).derivePath(a);
                        if (r.privateKey != c.privateKey) throw new Error("mnemonic mismatch");
                        c.mnemonic = r.mnemonic
                    } catch (d) {
                        if (d.code !== m["a"].errors.INVALID_ARGUMENT || "wordlist" !== d.argument) throw d
                    }
                }
                return new R(c)
            }

            function U(t, r, e, n, i) {
                return Object(u["a"])(Object(l["a"])(t, r, e, n, i))
            }

            function k(t, r, e, n, i) {
                return Promise.resolve(U(t, r, e, n, i))
            }

            function C(t, r, e, n, i) {
                const o = Object(N["a"])(r),
                    s = Object(N["c"])(t, "crypto/kdf");
                if (s && "string" === typeof s) {
                    const r = function(t, r) {
                        return I.throwArgumentError("invalid key-derivation function parameters", t, r)
                    };
                    if ("scrypt" === s.toLowerCase()) {
                        const e = Object(N["b"])(Object(N["c"])(t, "crypto/kdfparams/salt")),
                            a = parseInt(Object(N["c"])(t, "crypto/kdfparams/n")),
                            u = parseInt(Object(N["c"])(t, "crypto/kdfparams/r")),
                            h = parseInt(Object(N["c"])(t, "crypto/kdfparams/p"));
                        a && u && h || r("kdf", s), 0 !== (a & a - 1) && r("N", a);
                        const f = parseInt(Object(N["c"])(t, "crypto/kdfparams/dklen"));
                        return 32 !== f && r("dklen", f), n(o, e, a, u, h, 64, i)
                    }
                    if ("pbkdf2" === s.toLowerCase()) {
                        const n = Object(N["b"])(Object(N["c"])(t, "crypto/kdfparams/salt"));
                        let i = null;
                        const s = Object(N["c"])(t, "crypto/kdfparams/prf");
                        "hmac-sha256" === s ? i = "sha256" : "hmac-sha512" === s ? i = "sha512" : r("prf", s);
                        const a = parseInt(Object(N["c"])(t, "crypto/kdfparams/c")),
                            u = parseInt(Object(N["c"])(t, "crypto/kdfparams/dklen"));
                        return 32 !== u && r("dklen", u), e(o, n, a, u, i)
                    }
                }
                return I.throwArgumentError("unsupported key-derivation function", "kdf", s)
            }

            function j(t, r) {
                const e = JSON.parse(t),
                    n = C(e, r, U, s.a.syncScrypt);
                return T(e, n)
            }

            function F(t, r, e) {
                return x(this, void 0, void 0, (function*() {
                    const n = JSON.parse(t),
                        i = yield C(n, r, k, s.a.scrypt, e);
                    return T(n, i)
                }))
            }

            function L(t, r, e, n) {
                try {
                    if (Object(a["a"])(t.address) !== A(t.privateKey)) throw new Error("address/privateKey mismatch");
                    if (O(t)) {
                        const r = t.mnemonic,
                            e = h["a"].fromMnemonic(r.phrase, null, r.locale).derivePath(r.path || h["b"]);
                        if (e.privateKey != t.privateKey) throw new Error("mnemonic mismatch")
                    }
                } catch (_) {
                    return Promise.reject(_)
                }
                "function" !== typeof e || n || (n = e, e = {}), e || (e = {});
                const o = Object(u["a"])(t.privateKey),
                    l = Object(N["a"])(r);
                let d = null,
                    p = null,
                    m = null;
                if (O(t)) {
                    const r = t.mnemonic;
                    d = Object(u["a"])(Object(h["f"])(r.phrase, r.locale || "en")), p = r.path || h["b"], m = r.locale || "en"
                }
                let g = e.client;
                g || (g = "ethers.js");
                let v = null;
                v = e.salt ? Object(u["a"])(e.salt) : Object(c["a"])(32);
                let y = null;
                if (e.iv) {
                    if (y = Object(u["a"])(e.iv), 16 !== y.length) throw new Error("invalid iv")
                } else y = Object(c["a"])(16);
                let b = null;
                if (e.uuid) {
                    if (b = Object(u["a"])(e.uuid), 16 !== b.length) throw new Error("invalid uuid")
                } else b = Object(c["a"])(16);
                let w = 1 << 17,
                    M = 8,
                    E = 1;
                return e.scrypt && (e.scrypt.N && (w = e.scrypt.N), e.scrypt.r && (M = e.scrypt.r), e.scrypt.p && (E = e.scrypt.p)), s.a.scrypt(l, v, w, M, E, 64, n).then(r => {
                    r = Object(u["a"])(r);
                    const e = r.slice(0, 16),
                        n = r.slice(16, 32),
                        s = r.slice(32, 64),
                        a = new i.a.Counter(y),
                        h = new i.a.ModeOfOperation.ctr(e, a),
                        l = Object(u["a"])(h.encrypt(o)),
                        _ = Object(f["a"])(Object(u["b"])([n, l])),
                        A = {
                            address: t.address.substring(2).toLowerCase(),
                            id: Object(N["d"])(b),
                            version: 3,
                            Crypto: {
                                cipher: "aes-128-ctr",
                                cipherparams: {
                                    iv: Object(u["g"])(y).substring(2)
                                },
                                ciphertext: Object(u["g"])(l).substring(2),
                                kdf: "scrypt",
                                kdfparams: {
                                    salt: Object(u["g"])(v).substring(2),
                                    n: w,
                                    dklen: 32,
                                    p: E,
                                    r: M
                                },
                                mac: _.substring(2)
                            }
                        };
                    if (d) {
                        const t = Object(c["a"])(16),
                            r = new i.a.Counter(t),
                            e = new i.a.ModeOfOperation.ctr(s, r),
                            n = Object(u["a"])(e.encrypt(d)),
                            o = new Date,
                            a = o.getUTCFullYear() + "-" + Object(N["e"])(o.getUTCMonth() + 1, 2) + "-" + Object(N["e"])(o.getUTCDate(), 2) + "T" + Object(N["e"])(o.getUTCHours(), 2) + "-" + Object(N["e"])(o.getUTCMinutes(), 2) + "-" + Object(N["e"])(o.getUTCSeconds(), 2) + ".0Z";
                        A["x-ethers"] = {
                            client: g,
                            gethFilename: "UTC--" + a + "--" + A.address,
                            mnemonicCounter: Object(u["g"])(t).substring(2),
                            mnemonicCiphertext: Object(u["g"])(n).substring(2),
                            path: p,
                            locale: m,
                            version: "0.1"
                        }
                    }
                    return JSON.stringify(A)
                })
            }
        },
        "9d56": function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return i
            })), e.d(r, "d", (function() {
                return o
            })), e.d(r, "c", (function() {
                return s
            })), e.d(r, "a", (function() {
                return a
            }));
            var n = e("e36d");
            const i = n["a"].from(-1),
                o = n["a"].from(0),
                s = n["a"].from(1),
                a = n["a"].from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        },
        a34a: function(t, r, e) {
            var n = e("7ec2")();
            t.exports = n;
            try {
                regeneratorRuntime = n
            } catch (i) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
            }
        },
        a395: function(t, r, e) {
            var n = e("7037")["default"],
                i = e("e50d");

            function o(t) {
                var r = i(t, "string");
                return "symbol" == n(r) ? r : String(r)
            }
            t.exports = o, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        a960: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            const n = "bignumber/5.5.0"
        },
        ade3: function(t, r, e) {
            "use strict";

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function i(t, r) {
                if ("object" != n(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != n(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(t)
            }

            function o(t) {
                var r = i(t, "string");
                return "symbol" == n(r) ? r : String(r)
            }

            function s(t, r, e) {
                return r = o(r), r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e, t
            }
            e.d(r, "a", (function() {
                return s
            }))
        },
        b4d1: function(t, r, e) {
            (function(t) {
                (function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function i(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, r, e) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
                    }
                    var s;
                    "object" === typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = e(36).Buffer
                    } catch (S) {}

                    function a(t, r, e) {
                        for (var n = 0, i = Math.min(t.length, e), o = r; o < i; o++) {
                            var s = t.charCodeAt(o) - 48;
                            n <<= 4, n |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s
                        }
                        return n
                    }

                    function u(t, r, e, n) {
                        for (var i = 0, o = Math.min(t.length, e), s = r; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                        }
                        return i
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, r) {
                        return t.cmp(r) > 0 ? t : r
                    }, o.min = function(t, r) {
                        return t.cmp(r) < 0 ? t : r
                    }, o.prototype._init = function(t, r, e) {
                        if ("number" === typeof t) return this._initNumber(t, r, e);
                        if ("object" === typeof t) return this._initArray(t, r, e);
                        "hex" === r && (r = 16), n(r === (0 | r) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
                        var i = 0;
                        "-" === t[0] && i++, 16 === r ? this._parseHex(t, i) : this._parseBase(t, r, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === e && this._initArray(this.toArray(), r, e)
                    }, o.prototype._initNumber = function(t, r, e) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
                    }, o.prototype._initArray = function(t, r, e) {
                        if (n("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var o, s, a = 0;
                        if ("be" === e)
                            for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        else if ("le" === e)
                            for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, a += 24, a >= 26 && (a -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, r) {
                        this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) this.words[e] = 0;
                        var n, i, o = 0;
                        for (e = t.length - 6, n = 0; e >= r; e -= 6) i = a(t, e, e + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, o += 24, o >= 26 && (o -= 26, n++);
                        e + 6 !== r && (i = a(t, r, e + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                    }, o.prototype._parseBase = function(t, r, e) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= r) n++;
                        n--, i = i / r | 0;
                        for (var o = t.length - e, s = o % n, a = Math.min(o, o - s) + e, h = 0, f = e; f < a; f += n) h = u(t, f, f + n, r), this.imuln(i), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== s) {
                            var l = 1;
                            for (h = u(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                            this.imuln(l), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        while (this.length < t) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        while (this.length > 1 && 0 === this.words[this.length - 1]) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function c(t) {
                        for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                            var n = e / 26 | 0,
                                i = e % 26;
                            r[e] = (t.words[n] & 1 << i) >>> i
                        }
                        return r
                    }

                    function d(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | r.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            u = s / 67108864 | 0;
                        e.words[0] = a;
                        for (var h = 1; h < n; h++) {
                            for (var f = u >>> 26, l = 67108863 & u, c = Math.min(h, r.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                                var p = h - d | 0;
                                i = 0 | t.words[p], o = 0 | r.words[d], s = i * o + l, f += s / 67108864 | 0, l = 67108863 & s
                            }
                            e.words[h] = 0 | l, u = 0 | f
                        }
                        return 0 !== u ? e.words[h] = 0 | u : e.length--, e.strip()
                    }
                    o.prototype.toString = function(t, r) {
                        var e;
                        if (t = t || 10, r = 0 | r || 1, 16 === t || "hex" === t) {
                            e = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    u = (16777215 & (a << i | o)).toString(16);
                                o = a >>> 24 - i & 16777215, e = 0 !== o || s !== this.length - 1 ? h[6 - u.length] + u + e : u + e, i += 2, i >= 26 && (i -= 26, s--)
                            }
                            0 !== o && (e = o.toString(16) + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var c = f[t],
                                d = l[t];
                            e = "";
                            var p = this.clone();
                            p.negative = 0;
                            while (!p.isZero()) {
                                var m = p.modn(d).toString(t);
                                p = p.idivn(d), e = p.isZero() ? m + e : h[c - m.length] + m + e
                            }
                            this.isZero() && (e = "0" + e);
                            while (e.length % r !== 0) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, r) {
                        return n("undefined" !== typeof s), this.toArrayLike(s, t, r)
                    }, o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    }, o.prototype.toArrayLike = function(t, r, e) {
                        var i = this.byteLength(),
                            o = e || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                        var s, a, u = "le" === r,
                            h = new t(o),
                            f = this.clone();
                        if (u) {
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[a] = s;
                            for (; a < o; a++) h[a] = 0
                        } else {
                            for (a = 0; a < o - i; a++) h[a] = 0;
                            for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), h[o - a - 1] = s
                        }
                        return h
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 === (8191 & r) && (e += 13, r >>>= 13), 0 === (127 & r) && (e += 7, r >>>= 7), 0 === (15 & r) && (e += 4, r >>>= 4), 0 === (3 & r) && (e += 2, r >>>= 2), 0 === (1 & r) && e++, e
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var e = this._zeroBits(this.words[r]);
                            if (t += e, 26 !== e) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        while (this.length < t.length) this.words[this.length++] = 0;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
                        return this.length = r.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, e;
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0; n < e.length; n++) this.words[n] = r.words[n] ^ e.words[n];
                        if (this !== r)
                            for (; n < r.length; n++) this.words[n] = r.words[n];
                        return this.length = r.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 === (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        n("number" === typeof t && t >= 0);
                        var e = t / 26 | 0,
                            i = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << i : this.words[e] & ~(1 << i), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var r, e, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                        for (var i = 0, o = 0; o < n.length; o++) r = (0 | e.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        for (; 0 !== i && o < e.length; o++) r = (0 | e.words[o]) + i, this.words[o] = 67108863 & r, i = r >>> 26;
                        if (this.length = e.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (e !== this)
                            for (; o < e.length; o++) this.words[o] = e.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var e, n, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (e = this, n = t) : (e = t, n = this);
                        for (var o = 0, s = 0; s < n.length; s++) r = (0 | e.words[s]) - (0 | n.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        for (; 0 !== o && s < e.length; s++) r = (0 | e.words[s]) + o, o = r >> 26, this.words[s] = 67108863 & r;
                        if (0 === o && s < e.length && e !== this)
                            for (; s < e.length; s++) this.words[s] = e.words[s];
                        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var p = function(t, r, e) {
                        var n, i, o, s = t.words,
                            a = r.words,
                            u = e.words,
                            h = 0,
                            f = 0 | s[0],
                            l = 8191 & f,
                            c = f >>> 13,
                            d = 0 | s[1],
                            p = 8191 & d,
                            m = d >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            y = g >>> 13,
                            b = 0 | s[3],
                            w = 8191 & b,
                            M = b >>> 13,
                            E = 0 | s[4],
                            _ = 8191 & E,
                            A = E >>> 13,
                            N = 0 | s[5],
                            S = 8191 & N,
                            x = N >>> 13,
                            I = 0 | s[6],
                            O = 8191 & I,
                            R = I >>> 13,
                            P = 0 | s[7],
                            T = 8191 & P,
                            U = P >>> 13,
                            k = 0 | s[8],
                            C = 8191 & k,
                            j = k >>> 13,
                            F = 0 | s[9],
                            L = 8191 & F,
                            D = F >>> 13,
                            q = 0 | a[0],
                            B = 8191 & q,
                            z = q >>> 13,
                            G = 0 | a[1],
                            K = 8191 & G,
                            V = G >>> 13,
                            Z = 0 | a[2],
                            X = 8191 & Z,
                            J = Z >>> 13,
                            W = 0 | a[3],
                            H = 8191 & W,
                            $ = W >>> 13,
                            Y = 0 | a[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            rt = 0 | a[5],
                            et = 8191 & rt,
                            nt = rt >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ut = 8191 & at,
                            ht = at >>> 13,
                            ft = 0 | a[8],
                            lt = 8191 & ft,
                            ct = ft >>> 13,
                            dt = 0 | a[9],
                            pt = 8191 & dt,
                            mt = dt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19, n = Math.imul(l, B), i = Math.imul(l, z), i = i + Math.imul(c, B) | 0, o = Math.imul(c, z);
                        var gt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, B), i = Math.imul(p, z), i = i + Math.imul(m, B) | 0, o = Math.imul(m, z), n = n + Math.imul(l, K) | 0, i = i + Math.imul(l, V) | 0, i = i + Math.imul(c, K) | 0, o = o + Math.imul(c, V) | 0;
                        var vt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, B), i = Math.imul(v, z), i = i + Math.imul(y, B) | 0, o = Math.imul(y, z), n = n + Math.imul(p, K) | 0, i = i + Math.imul(p, V) | 0, i = i + Math.imul(m, K) | 0, o = o + Math.imul(m, V) | 0, n = n + Math.imul(l, X) | 0, i = i + Math.imul(l, J) | 0, i = i + Math.imul(c, X) | 0, o = o + Math.imul(c, J) | 0;
                        var yt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(w, B), i = Math.imul(w, z), i = i + Math.imul(M, B) | 0, o = Math.imul(M, z), n = n + Math.imul(v, K) | 0, i = i + Math.imul(v, V) | 0, i = i + Math.imul(y, K) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, X) | 0, i = i + Math.imul(p, J) | 0, i = i + Math.imul(m, X) | 0, o = o + Math.imul(m, J) | 0, n = n + Math.imul(l, H) | 0, i = i + Math.imul(l, $) | 0, i = i + Math.imul(c, H) | 0, o = o + Math.imul(c, $) | 0;
                        var bt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(_, B), i = Math.imul(_, z), i = i + Math.imul(A, B) | 0, o = Math.imul(A, z), n = n + Math.imul(w, K) | 0, i = i + Math.imul(w, V) | 0, i = i + Math.imul(M, K) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(v, X) | 0, i = i + Math.imul(v, J) | 0, i = i + Math.imul(y, X) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, H) | 0, i = i + Math.imul(p, $) | 0, i = i + Math.imul(m, H) | 0, o = o + Math.imul(m, $) | 0, n = n + Math.imul(l, Q) | 0, i = i + Math.imul(l, tt) | 0, i = i + Math.imul(c, Q) | 0, o = o + Math.imul(c, tt) | 0;
                        var wt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, B), i = Math.imul(S, z), i = i + Math.imul(x, B) | 0, o = Math.imul(x, z), n = n + Math.imul(_, K) | 0, i = i + Math.imul(_, V) | 0, i = i + Math.imul(A, K) | 0, o = o + Math.imul(A, V) | 0, n = n + Math.imul(w, X) | 0, i = i + Math.imul(w, J) | 0, i = i + Math.imul(M, X) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(v, H) | 0, i = i + Math.imul(v, $) | 0, i = i + Math.imul(y, H) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = i + Math.imul(p, tt) | 0, i = i + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0, n = n + Math.imul(l, et) | 0, i = i + Math.imul(l, nt) | 0, i = i + Math.imul(c, et) | 0, o = o + Math.imul(c, nt) | 0;
                        var Mt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, B), i = Math.imul(O, z), i = i + Math.imul(R, B) | 0, o = Math.imul(R, z), n = n + Math.imul(S, K) | 0, i = i + Math.imul(S, V) | 0, i = i + Math.imul(x, K) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(_, X) | 0, i = i + Math.imul(_, J) | 0, i = i + Math.imul(A, X) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(w, H) | 0, i = i + Math.imul(w, $) | 0, i = i + Math.imul(M, H) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(v, Q) | 0, i = i + Math.imul(v, tt) | 0, i = i + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, et) | 0, i = i + Math.imul(p, nt) | 0, i = i + Math.imul(m, et) | 0, o = o + Math.imul(m, nt) | 0, n = n + Math.imul(l, ot) | 0, i = i + Math.imul(l, st) | 0, i = i + Math.imul(c, ot) | 0, o = o + Math.imul(c, st) | 0;
                        var Et = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(T, B), i = Math.imul(T, z), i = i + Math.imul(U, B) | 0, o = Math.imul(U, z), n = n + Math.imul(O, K) | 0, i = i + Math.imul(O, V) | 0, i = i + Math.imul(R, K) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(S, X) | 0, i = i + Math.imul(S, J) | 0, i = i + Math.imul(x, X) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(_, H) | 0, i = i + Math.imul(_, $) | 0, i = i + Math.imul(A, H) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(w, Q) | 0, i = i + Math.imul(w, tt) | 0, i = i + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(v, et) | 0, i = i + Math.imul(v, nt) | 0, i = i + Math.imul(y, et) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = i + Math.imul(p, st) | 0, i = i + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0, n = n + Math.imul(l, ut) | 0, i = i + Math.imul(l, ht) | 0, i = i + Math.imul(c, ut) | 0, o = o + Math.imul(c, ht) | 0;
                        var _t = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(C, B), i = Math.imul(C, z), i = i + Math.imul(j, B) | 0, o = Math.imul(j, z), n = n + Math.imul(T, K) | 0, i = i + Math.imul(T, V) | 0, i = i + Math.imul(U, K) | 0, o = o + Math.imul(U, V) | 0, n = n + Math.imul(O, X) | 0, i = i + Math.imul(O, J) | 0, i = i + Math.imul(R, X) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(S, H) | 0, i = i + Math.imul(S, $) | 0, i = i + Math.imul(x, H) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(_, Q) | 0, i = i + Math.imul(_, tt) | 0, i = i + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(w, et) | 0, i = i + Math.imul(w, nt) | 0, i = i + Math.imul(M, et) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(v, ot) | 0, i = i + Math.imul(v, st) | 0, i = i + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = i + Math.imul(p, ht) | 0, i = i + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0, n = n + Math.imul(l, lt) | 0, i = i + Math.imul(l, ct) | 0, i = i + Math.imul(c, lt) | 0, o = o + Math.imul(c, ct) | 0;
                        var At = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, B), i = Math.imul(L, z), i = i + Math.imul(D, B) | 0, o = Math.imul(D, z), n = n + Math.imul(C, K) | 0, i = i + Math.imul(C, V) | 0, i = i + Math.imul(j, K) | 0, o = o + Math.imul(j, V) | 0, n = n + Math.imul(T, X) | 0, i = i + Math.imul(T, J) | 0, i = i + Math.imul(U, X) | 0, o = o + Math.imul(U, J) | 0, n = n + Math.imul(O, H) | 0, i = i + Math.imul(O, $) | 0, i = i + Math.imul(R, H) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(S, Q) | 0, i = i + Math.imul(S, tt) | 0, i = i + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(_, et) | 0, i = i + Math.imul(_, nt) | 0, i = i + Math.imul(A, et) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(w, ot) | 0, i = i + Math.imul(w, st) | 0, i = i + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(v, ut) | 0, i = i + Math.imul(v, ht) | 0, i = i + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, lt) | 0, i = i + Math.imul(p, ct) | 0, i = i + Math.imul(m, lt) | 0, o = o + Math.imul(m, ct) | 0, n = n + Math.imul(l, pt) | 0, i = i + Math.imul(l, mt) | 0, i = i + Math.imul(c, pt) | 0, o = o + Math.imul(c, mt) | 0;
                        var Nt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(L, K), i = Math.imul(L, V), i = i + Math.imul(D, K) | 0, o = Math.imul(D, V), n = n + Math.imul(C, X) | 0, i = i + Math.imul(C, J) | 0, i = i + Math.imul(j, X) | 0, o = o + Math.imul(j, J) | 0, n = n + Math.imul(T, H) | 0, i = i + Math.imul(T, $) | 0, i = i + Math.imul(U, H) | 0, o = o + Math.imul(U, $) | 0, n = n + Math.imul(O, Q) | 0, i = i + Math.imul(O, tt) | 0, i = i + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(S, et) | 0, i = i + Math.imul(S, nt) | 0, i = i + Math.imul(x, et) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(_, ot) | 0, i = i + Math.imul(_, st) | 0, i = i + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(w, ut) | 0, i = i + Math.imul(w, ht) | 0, i = i + Math.imul(M, ut) | 0, o = o + Math.imul(M, ht) | 0, n = n + Math.imul(v, lt) | 0, i = i + Math.imul(v, ct) | 0, i = i + Math.imul(y, lt) | 0, o = o + Math.imul(y, ct) | 0, n = n + Math.imul(p, pt) | 0, i = i + Math.imul(p, mt) | 0, i = i + Math.imul(m, pt) | 0, o = o + Math.imul(m, mt) | 0;
                        var St = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(L, X), i = Math.imul(L, J), i = i + Math.imul(D, X) | 0, o = Math.imul(D, J), n = n + Math.imul(C, H) | 0, i = i + Math.imul(C, $) | 0, i = i + Math.imul(j, H) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(T, Q) | 0, i = i + Math.imul(T, tt) | 0, i = i + Math.imul(U, Q) | 0, o = o + Math.imul(U, tt) | 0, n = n + Math.imul(O, et) | 0, i = i + Math.imul(O, nt) | 0, i = i + Math.imul(R, et) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(S, ot) | 0, i = i + Math.imul(S, st) | 0, i = i + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(_, ut) | 0, i = i + Math.imul(_, ht) | 0, i = i + Math.imul(A, ut) | 0, o = o + Math.imul(A, ht) | 0, n = n + Math.imul(w, lt) | 0, i = i + Math.imul(w, ct) | 0, i = i + Math.imul(M, lt) | 0, o = o + Math.imul(M, ct) | 0, n = n + Math.imul(v, pt) | 0, i = i + Math.imul(v, mt) | 0, i = i + Math.imul(y, pt) | 0, o = o + Math.imul(y, mt) | 0;
                        var xt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(L, H), i = Math.imul(L, $), i = i + Math.imul(D, H) | 0, o = Math.imul(D, $), n = n + Math.imul(C, Q) | 0, i = i + Math.imul(C, tt) | 0, i = i + Math.imul(j, Q) | 0, o = o + Math.imul(j, tt) | 0, n = n + Math.imul(T, et) | 0, i = i + Math.imul(T, nt) | 0, i = i + Math.imul(U, et) | 0, o = o + Math.imul(U, nt) | 0, n = n + Math.imul(O, ot) | 0, i = i + Math.imul(O, st) | 0, i = i + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(S, ut) | 0, i = i + Math.imul(S, ht) | 0, i = i + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(_, lt) | 0, i = i + Math.imul(_, ct) | 0, i = i + Math.imul(A, lt) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(w, pt) | 0, i = i + Math.imul(w, mt) | 0, i = i + Math.imul(M, pt) | 0, o = o + Math.imul(M, mt) | 0;
                        var It = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(L, Q), i = Math.imul(L, tt), i = i + Math.imul(D, Q) | 0, o = Math.imul(D, tt), n = n + Math.imul(C, et) | 0, i = i + Math.imul(C, nt) | 0, i = i + Math.imul(j, et) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul(T, ot) | 0, i = i + Math.imul(T, st) | 0, i = i + Math.imul(U, ot) | 0, o = o + Math.imul(U, st) | 0, n = n + Math.imul(O, ut) | 0, i = i + Math.imul(O, ht) | 0, i = i + Math.imul(R, ut) | 0, o = o + Math.imul(R, ht) | 0, n = n + Math.imul(S, lt) | 0, i = i + Math.imul(S, ct) | 0, i = i + Math.imul(x, lt) | 0, o = o + Math.imul(x, ct) | 0, n = n + Math.imul(_, pt) | 0, i = i + Math.imul(_, mt) | 0, i = i + Math.imul(A, pt) | 0, o = o + Math.imul(A, mt) | 0;
                        var Ot = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(L, et), i = Math.imul(L, nt), i = i + Math.imul(D, et) | 0, o = Math.imul(D, nt), n = n + Math.imul(C, ot) | 0, i = i + Math.imul(C, st) | 0, i = i + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, n = n + Math.imul(T, ut) | 0, i = i + Math.imul(T, ht) | 0, i = i + Math.imul(U, ut) | 0, o = o + Math.imul(U, ht) | 0, n = n + Math.imul(O, lt) | 0, i = i + Math.imul(O, ct) | 0, i = i + Math.imul(R, lt) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(S, pt) | 0, i = i + Math.imul(S, mt) | 0, i = i + Math.imul(x, pt) | 0, o = o + Math.imul(x, mt) | 0;
                        var Rt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(L, ot), i = Math.imul(L, st), i = i + Math.imul(D, ot) | 0, o = Math.imul(D, st), n = n + Math.imul(C, ut) | 0, i = i + Math.imul(C, ht) | 0, i = i + Math.imul(j, ut) | 0, o = o + Math.imul(j, ht) | 0, n = n + Math.imul(T, lt) | 0, i = i + Math.imul(T, ct) | 0, i = i + Math.imul(U, lt) | 0, o = o + Math.imul(U, ct) | 0, n = n + Math.imul(O, pt) | 0, i = i + Math.imul(O, mt) | 0, i = i + Math.imul(R, pt) | 0, o = o + Math.imul(R, mt) | 0;
                        var Pt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(L, ut), i = Math.imul(L, ht), i = i + Math.imul(D, ut) | 0, o = Math.imul(D, ht), n = n + Math.imul(C, lt) | 0, i = i + Math.imul(C, ct) | 0, i = i + Math.imul(j, lt) | 0, o = o + Math.imul(j, ct) | 0, n = n + Math.imul(T, pt) | 0, i = i + Math.imul(T, mt) | 0, i = i + Math.imul(U, pt) | 0, o = o + Math.imul(U, mt) | 0;
                        var Tt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(L, lt), i = Math.imul(L, ct), i = i + Math.imul(D, lt) | 0, o = Math.imul(D, ct), n = n + Math.imul(C, pt) | 0, i = i + Math.imul(C, mt) | 0, i = i + Math.imul(j, pt) | 0, o = o + Math.imul(j, mt) | 0;
                        var Ut = (h + n | 0) + ((8191 & i) << 13) | 0;
                        h = (o + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(L, pt), i = Math.imul(L, mt), i = i + Math.imul(D, pt) | 0, o = Math.imul(D, mt);
                        var kt = (h + n | 0) + ((8191 & i) << 13) | 0;
                        return h = (o + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, u[0] = gt, u[1] = vt, u[2] = yt, u[3] = bt, u[4] = wt, u[5] = Mt, u[6] = Et, u[7] = _t, u[8] = At, u[9] = Nt, u[10] = St, u[11] = xt, u[12] = It, u[13] = Ot, u[14] = Rt, u[15] = Pt, u[16] = Tt, u[17] = Ut, u[18] = kt, 0 !== h && (u[19] = h, e.length++), e
                    };

                    function m(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, i = 0, o = 0; o < e.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, u = Math.min(o, r.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                                var f = o - h,
                                    l = 0 | t.words[f],
                                    c = 0 | r.words[h],
                                    d = l * c,
                                    p = 67108863 & d;
                                s = s + (d / 67108864 | 0) | 0, p = p + a | 0, a = 67108863 & p, s = s + (p >>> 26) | 0, i += s >>> 26, s &= 67108863
                            }
                            e.words[o] = a, n = s, s = i
                        }
                        return 0 !== n ? e.words[o] = n : e.length--, e.strip()
                    }

                    function g(t, r, e) {
                        var n = new v;
                        return n.mulp(t, r, e)
                    }

                    function v(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (p = d), o.prototype.mulTo = function(t, r) {
                        var e, n = this.length + t.length;
                        return e = 10 === this.length && 10 === t.length ? p(this, t, r) : n < 63 ? d(this, t, r) : n < 1024 ? m(this, t, r) : g(this, t, r), e
                    }, v.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, n = 0; n < t; n++) r[n] = this.revBin(n, e, t);
                        return r
                    }, v.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, v.prototype.permute = function(t, r, e, n, i, o) {
                        for (var s = 0; s < o; s++) n[s] = r[t[s]], i[s] = e[t[s]]
                    }, v.prototype.transform = function(t, r, e, n, i, o) {
                        this.permute(o, t, r, e, n, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), f = 0; f < i; f += a)
                                for (var l = u, c = h, d = 0; d < s; d++) {
                                    var p = e[f + d],
                                        m = n[f + d],
                                        g = e[f + d + s],
                                        v = n[f + d + s],
                                        y = l * g - c * v;
                                    v = l * v + c * g, g = y, e[f + d] = p + g, n[f + d] = m + v, e[f + d + s] = p - g, n[f + d + s] = m - v, d !== a && (y = u * l - h * c, c = u * c + h * l, l = y)
                                }
                    }, v.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, v.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var n = 0; n < e / 2; n++) {
                                var i = t[n];
                                t[n] = t[e - n - 1], t[e - n - 1] = i, i = r[n], r[n] = -r[e - n - 1], r[e - n - 1] = -i
                            }
                    }, v.prototype.normalize13b = function(t, r) {
                        for (var e = 0, n = 0; n < r / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / r) + Math.round(t[2 * n] / r) + e;
                            t[n] = 67108863 & i, e = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, v.prototype.convert13b = function(t, r, e, i) {
                        for (var o = 0, s = 0; s < r; s++) o += 0 | t[s], e[2 * s] = 8191 & o, o >>>= 13, e[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * r; s < i; ++s) e[s] = 0;
                        n(0 === o), n(0 === (-8192 & o))
                    }, v.prototype.stub = function(t) {
                        for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
                        return r
                    }, v.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            s = new Array(n),
                            a = new Array(n),
                            u = new Array(n),
                            h = new Array(n),
                            f = new Array(n),
                            l = new Array(n),
                            c = e.words;
                        c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(r.words, r.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, f, l, n, i);
                        for (var d = 0; d < n; d++) {
                            var p = a[d] * f[d] - u[d] * l[d];
                            u[d] = a[d] * l[d] + u[d] * f[d], a[d] = p
                        }
                        return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e.strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), g(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        n("number" === typeof t), n(t < 67108864);
                        for (var r = 0, e = 0; e < this.length; e++) {
                            var i = (0 | this.words[e]) * t,
                                o = (67108863 & i) + (67108863 & r);
                            r >>= 26, r += i / 67108864 | 0, r += o >>> 26, this.words[e] = 67108863 & o
                        }
                        return 0 !== r && (this.words[e] = r, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = c(t);
                        if (0 === r.length) return new o(1);
                        for (var e = this, n = 0; n < r.length; n++, e = e.sqr())
                            if (0 !== r[n]) break;
                        if (++n < r.length)
                            for (var i = e.sqr(); n < r.length; n++, i = i.sqr()) 0 !== r[n] && (e = e.mul(i));
                        return e
                    }, o.prototype.iushln = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r, e = t % 26,
                            i = (t - e) / 26,
                            o = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var s = 0;
                            for (r = 0; r < this.length; r++) {
                                var a = this.words[r] & o,
                                    u = (0 | this.words[r]) - a << e;
                                this.words[r] = u | s, s = a >>> 26 - e
                            }
                            s && (this.words[r] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + i] = this.words[r];
                            for (r = 0; r < i; r++) this.words[r] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, e) {
                        var i;
                        n("number" === typeof t && t >= 0), i = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            u = e;
                        if (i -= s, i = Math.max(0, i), u) {
                            for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                            u.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
                            var l = 0 | this.words[h];
                            this.words[h] = f << 26 - o | l >>> o, f = l & a
                        }
                        return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return !1;
                        var o = this.words[e];
                        return !!(o & i)
                    }, o.prototype.imaskn = function(t) {
                        n("number" === typeof t && t >= 0);
                        var r = t % 26,
                            e = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
                            var i = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" === typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" === typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, e) {
                        var i, o, s = t.length + e;
                        this._expand(s);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + a;
                            var u = (0 | t.words[i]) * r;
                            o -= 67108863 & u, a = (o >> 26) - (u / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) o = (0 | this.words[i + e]) + a, a = o >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === a) return this.strip();
                        for (n(-1 === a), a = 0, i = 0; i < this.length; i++) o = -(0 | this.words[i]) + a, a = o >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var e = this.length - t.length,
                            n = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1],
                            a = this._countBits(s);
                        e = 26 - a, 0 !== e && (i = i.ushln(e), n.iushln(e), s = 0 | i.words[i.length - 1]);
                        var u, h = n.length - i.length;
                        if ("mod" !== r) {
                            u = new o(null), u.length = h + 1, u.words = new Array(u.length);
                            for (var f = 0; f < u.length; f++) u.words[f] = 0
                        }
                        var l = n.clone()._ishlnsubmul(i, 1, h);
                        0 === l.negative && (n = l, u && (u.words[h] = 1));
                        for (var c = h - 1; c >= 0; c--) {
                            var d = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                            d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, c);
                            while (0 !== n.negative) d--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                            u && (u.words[c] = d)
                        }
                        return u && u.strip(), n.strip(), "div" !== r && 0 !== e && n.iushrn(e), {
                            div: u || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, r), "mod" !== r && (i = a.div.neg()), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), r), "mod" !== r && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), r), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
                            div: a.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var i, s, a
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            i = t.andln(1),
                            o = e.cmp(n);
                        return o < 0 || 1 === i && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        n(t <= 67108863);
                        for (var r = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (r * e + (0 | this.words[i])) % t;
                        return e
                    }, o.prototype.idivn = function(t) {
                        n(t <= 67108863);
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var i = (0 | this.words[e]) + 67108864 * r;
                            this.words[e] = i / t | 0, r = i % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i = new o(1),
                            s = new o(0),
                            a = new o(0),
                            u = new o(1),
                            h = 0;
                        while (r.isEven() && e.isEven()) r.iushrn(1), e.iushrn(1), ++h;
                        var f = e.clone(),
                            l = r.clone();
                        while (!r.isZero()) {
                            for (var c = 0, d = 1; 0 === (r.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0) {
                                r.iushrn(c);
                                while (c-- > 0)(i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(l)), i.iushrn(1), s.iushrn(1)
                            }
                            for (var p = 0, m = 1; 0 === (e.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0) {
                                e.iushrn(p);
                                while (p-- > 0)(a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(l)), a.iushrn(1), u.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), i.isub(a), s.isub(u)) : (e.isub(r), a.isub(i), u.isub(s))
                        }
                        return {
                            a: a,
                            b: u,
                            gcd: e.iushln(h)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var r = this,
                            e = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        var i, s = new o(1),
                            a = new o(0),
                            u = e.clone();
                        while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                            for (var h = 0, f = 1; 0 === (r.words[0] & f) && h < 26; ++h, f <<= 1);
                            if (h > 0) {
                                r.iushrn(h);
                                while (h-- > 0) s.isOdd() && s.iadd(u), s.iushrn(1)
                            }
                            for (var l = 0, c = 1; 0 === (e.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0) {
                                e.iushrn(l);
                                while (l-- > 0) a.isOdd() && a.iadd(u), a.iushrn(1)
                            }
                            r.cmp(e) >= 0 ? (r.isub(e), s.isub(a)) : (e.isub(r), a.isub(s))
                        }
                        return i = 0 === r.cmpn(1) ? s : a, i.cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            e = t.clone();
                        r.negative = 0, e.negative = 0;
                        for (var n = 0; r.isEven() && e.isEven(); n++) r.iushrn(1), e.iushrn(1);
                        do {
                            while (r.isEven()) r.iushrn(1);
                            while (e.isEven()) e.iushrn(1);
                            var i = r.cmp(e);
                            if (i < 0) {
                                var o = r;
                                r = e, e = o
                            } else if (0 === i || 0 === e.cmpn(1)) break;
                            r.isub(e)
                        } while (1);
                        return e.iushln(n)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 === (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 === (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        n("number" === typeof t);
                        var r = t % 26,
                            e = (t - r) / 26,
                            i = 1 << r;
                        if (this.length <= e) return this._expand(e + 1), this.words[e] |= i, this;
                        for (var o = i, s = e; 0 !== o && s < this.length; s++) {
                            var a = 0 | this.words[s];
                            a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this.strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), n(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            r = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, e = this.length - 1; e >= 0; e--) {
                            var n = 0 | this.words[e],
                                i = 0 | t.words[e];
                            if (n !== i) {
                                n < i ? r = -1 : n > i && (r = 1);
                                break
                            }
                        }
                        return r
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new A(t)
                    }, o.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var y = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function b(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function w() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function M() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function E() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function _() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function A(t) {
                        if ("string" === typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function N(t) {
                        A.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), e = this.imulK(e), e = e.iadd(this.tmp), r = e.bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, b.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(w, b), w.prototype.split = function(t, r) {
                        for (var e = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) r.words[i] = t.words[i];
                        if (r.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var o = t.words[9];
                        for (r.words[r.length++] = o & e, i = 10; i < t.length; i++) {
                            var s = 0 | t.words[i];
                            t.words[i - 10] = (s & e) << 4 | o >>> 22, o = s
                        }
                        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, w.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 0 | t.words[e];
                            r += 977 * n, t.words[e] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(M, b), i(E, b), i(_, b), _.prototype.imulK = function(t) {
                        for (var r = 0, e = 0; e < t.length; e++) {
                            var n = 19 * (0 | t.words[e]) + r,
                                i = 67108863 & n;
                            n >>>= 26, t.words[e] = i, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (y[t]) return y[t];
                        var r;
                        if ("k256" === t) r = new w;
                        else if ("p224" === t) r = new M;
                        else if ("p192" === t) r = new E;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new _
                        }
                        return y[t] = r, r
                    }, A.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, A.prototype._verify2 = function(t, r) {
                        n(0 === (t.negative | r.negative), "red works only with positives"), n(t.red && t.red === r.red, "red works only with red numbers")
                    }, A.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, A.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, A.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var e = t.add(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
                    }, A.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var e = t.iadd(r);
                        return e.cmp(this.m) >= 0 && e.isub(this.m), e
                    }, A.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.sub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, A.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var e = t.isub(r);
                        return e.cmpn(0) < 0 && e.iadd(this.m), e
                    }, A.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, A.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, A.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, A.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, A.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, A.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (n(r % 2 === 1), 3 === r) {
                            var e = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, e)
                        }
                        var i = this.m.subn(1),
                            s = 0;
                        while (!i.isZero() && 0 === i.andln(1)) s++, i.iushrn(1);
                        n(!i.isZero());
                        var a = new o(1).toRed(this),
                            u = a.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        f = new o(2 * f * f).toRed(this);
                        while (0 !== this.pow(f, h).cmp(u)) f.redIAdd(u);
                        var l = this.pow(f, i),
                            c = this.pow(t, i.addn(1).iushrn(1)),
                            d = this.pow(t, i),
                            p = s;
                        while (0 !== d.cmp(a)) {
                            for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                            n(g < p);
                            var v = this.pow(l, new o(1).iushln(p - g - 1));
                            c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                        }
                        return c
                    }, A.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, A.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1).toRed(this);
                        if (0 === r.cmpn(1)) return t.clone();
                        var e = 4,
                            n = new Array(1 << e);
                        n[0] = new o(1).toRed(this), n[1] = t;
                        for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
                        var s = n[0],
                            a = 0,
                            u = 0,
                            h = r.bitLength() % 26;
                        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
                            for (var f = r.words[i], l = h - 1; l >= 0; l--) {
                                var c = f >> l & 1;
                                s !== n[0] && (s = this.sqr(s)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, u++, (u === e || 0 === i && 0 === l) && (s = this.mul(s, n[a]), u = 0, a = 0)) : u = 0
                            }
                            h = 26
                        }
                        return s
                    }, A.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, A.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new N(t)
                    }, i(N, A), N.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, N.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, N.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var e = t.imul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, N.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var e = t.mul(r),
                            n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = e.isub(n).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, N.prototype.invm = function(t) {
                        var r = this.imod(t._invmp(this.m).mul(this.r2));
                        return r._forceRed(this)
                    }
                })(t, this)
            }).call(this, e("62e4")(t))
        },
        b7a2: function(t, r, e) {
            "use strict";
            (function(t) {
                e.d(r, "a", (function() {
                    return K
                }));
                var n = e("09f5"),
                    i = e.n(n),
                    o = e("7d92"),
                    s = e.n(o);
                "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t || "undefined" !== typeof self && self;

                function a(t, r, e) {
                    return e = {
                        path: r,
                        exports: {},
                        require: function(t, r) {
                            return u(t, void 0 === r || null === r ? e.path : r)
                        }
                    }, t(e, e.exports), e.exports
                }

                function u() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }
                var h = f;

                function f(t, r) {
                    if (!t) throw new Error(r || "Assertion failed")
                }
                f.equal = function(t, r, e) {
                    if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
                };
                var l = a((function(t, r) {
                        var e = r;

                        function n(t, r) {
                            if (Array.isArray(t)) return t.slice();
                            if (!t) return [];
                            var e = [];
                            if ("string" !== typeof t) {
                                for (var n = 0; n < t.length; n++) e[n] = 0 | t[n];
                                return e
                            }
                            if ("hex" === r) {
                                t = t.replace(/[^a-z0-9]+/gi, ""), t.length % 2 !== 0 && (t = "0" + t);
                                for (n = 0; n < t.length; n += 2) e.push(parseInt(t[n] + t[n + 1], 16))
                            } else
                                for (n = 0; n < t.length; n++) {
                                    var i = t.charCodeAt(n),
                                        o = i >> 8,
                                        s = 255 & i;
                                    o ? e.push(o, s) : e.push(s)
                                }
                            return e
                        }

                        function i(t) {
                            return 1 === t.length ? "0" + t : t
                        }

                        function o(t) {
                            for (var r = "", e = 0; e < t.length; e++) r += i(t[e].toString(16));
                            return r
                        }
                        e.toArray = n, e.zero2 = i, e.toHex = o, e.encode = function(t, r) {
                            return "hex" === r ? o(t) : t
                        }
                    })),
                    c = a((function(t, r) {
                        var e = r;

                        function n(t, r, e) {
                            var n = new Array(Math.max(t.bitLength(), e) + 1);
                            n.fill(0);
                            for (var i = 1 << r + 1, o = t.clone(), s = 0; s < n.length; s++) {
                                var a, u = o.andln(i - 1);
                                o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                            }
                            return n
                        }

                        function o(t, r) {
                            var e = [
                                [],
                                []
                            ];
                            t = t.clone(), r = r.clone();
                            var n, i = 0,
                                o = 0;
                            while (t.cmpn(-i) > 0 || r.cmpn(-o) > 0) {
                                var s, a, u = t.andln(3) + i & 3,
                                    h = r.andln(3) + o & 3;
                                3 === u && (u = -1), 3 === h && (h = -1), 0 === (1 & u) ? s = 0 : (n = t.andln(7) + i & 7, s = 3 !== n && 5 !== n || 2 !== h ? u : -u), e[0].push(s), 0 === (1 & h) ? a = 0 : (n = r.andln(7) + o & 7, a = 3 !== n && 5 !== n || 2 !== u ? h : -h), e[1].push(a), 2 * i === s + 1 && (i = 1 - i), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), r.iushrn(1)
                            }
                            return e
                        }

                        function s(t, r, e) {
                            var n = "_" + r;
                            t.prototype[r] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = e.call(this)
                            }
                        }

                        function a(t) {
                            return "string" === typeof t ? e.toArray(t, "hex") : t
                        }

                        function u(t) {
                            return new i.a(t, "hex", "le")
                        }
                        e.assert = h, e.toArray = l.toArray, e.zero2 = l.zero2, e.toHex = l.toHex, e.encode = l.encode, e.getNAF = n, e.getJSF = o, e.cachedProperty = s, e.parseBytes = a, e.intFromLE = u
                    })),
                    d = c.getNAF,
                    p = c.getJSF,
                    m = c.assert;

                function g(t, r) {
                    this.type = t, this.p = new i.a(r.p, 16), this.red = r.prime ? i.a.red(r.prime) : i.a.mont(this.p), this.zero = new i.a(0).toRed(this.red), this.one = new i.a(1).toRed(this.red), this.two = new i.a(2).toRed(this.red), this.n = r.n && new i.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var e = this.n && this.p.div(this.n);
                    !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var v = g;

                function y(t, r) {
                    this.curve = t, this.type = r, this.precomputed = null
                }
                g.prototype.point = function() {
                    throw new Error("Not implemented")
                }, g.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, g.prototype._fixedNafMul = function(t, r) {
                    m(t.precomputed);
                    var e = t._getDoubles(),
                        n = d(r, 1, this._bitLength),
                        i = (1 << e.step + 1) - (e.step % 2 === 0 ? 2 : 1);
                    i /= 3;
                    var o, s, a = [];
                    for (o = 0; o < n.length; o += e.step) {
                        s = 0;
                        for (var u = o + e.step - 1; u >= o; u--) s = (s << 1) + n[u];
                        a.push(s)
                    }
                    for (var h = this.jpoint(null, null, null), f = this.jpoint(null, null, null), l = i; l > 0; l--) {
                        for (o = 0; o < a.length; o++) s = a[o], s === l ? f = f.mixedAdd(e.points[o]) : s === -l && (f = f.mixedAdd(e.points[o].neg()));
                        h = h.add(f)
                    }
                    return h.toP()
                }, g.prototype._wnafMul = function(t, r) {
                    var e = 4,
                        n = t._getNAFPoints(e);
                    e = n.wnd;
                    for (var i = n.points, o = d(r, e, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                        for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
                        if (a >= 0 && u++, s = s.dblp(u), a < 0) break;
                        var h = o[a];
                        m(0 !== h), s = "affine" === t.type ? h > 0 ? s.mixedAdd(i[h - 1 >> 1]) : s.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? s.add(i[h - 1 >> 1]) : s.add(i[-h - 1 >> 1].neg())
                    }
                    return "affine" === t.type ? s.toP() : s
                }, g.prototype._wnafMulAdd = function(t, r, e, n, i) {
                    var o, s, a, u = this._wnafT1,
                        h = this._wnafT2,
                        f = this._wnafT3,
                        l = 0;
                    for (o = 0; o < n; o++) {
                        a = r[o];
                        var c = a._getNAFPoints(t);
                        u[o] = c.wnd, h[o] = c.points
                    }
                    for (o = n - 1; o >= 1; o -= 2) {
                        var m = o - 1,
                            g = o;
                        if (1 === u[m] && 1 === u[g]) {
                            var v = [r[m], null, null, r[g]];
                            0 === r[m].y.cmp(r[g].y) ? (v[1] = r[m].add(r[g]), v[2] = r[m].toJ().mixedAdd(r[g].neg())) : 0 === r[m].y.cmp(r[g].y.redNeg()) ? (v[1] = r[m].toJ().mixedAdd(r[g]), v[2] = r[m].add(r[g].neg())) : (v[1] = r[m].toJ().mixedAdd(r[g]), v[2] = r[m].toJ().mixedAdd(r[g].neg()));
                            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                b = p(e[m], e[g]);
                            for (l = Math.max(b[0].length, l), f[m] = new Array(l), f[g] = new Array(l), s = 0; s < l; s++) {
                                var w = 0 | b[0][s],
                                    M = 0 | b[1][s];
                                f[m][s] = y[3 * (w + 1) + (M + 1)], f[g][s] = 0, h[m] = v
                            }
                        } else f[m] = d(e[m], u[m], this._bitLength), f[g] = d(e[g], u[g], this._bitLength), l = Math.max(f[m].length, l), l = Math.max(f[g].length, l)
                    }
                    var E = this.jpoint(null, null, null),
                        _ = this._wnafT4;
                    for (o = l; o >= 0; o--) {
                        var A = 0;
                        while (o >= 0) {
                            var N = !0;
                            for (s = 0; s < n; s++) _[s] = 0 | f[s][o], 0 !== _[s] && (N = !1);
                            if (!N) break;
                            A++, o--
                        }
                        if (o >= 0 && A++, E = E.dblp(A), o < 0) break;
                        for (s = 0; s < n; s++) {
                            var S = _[s];
                            0 !== S && (S > 0 ? a = h[s][S - 1 >> 1] : S < 0 && (a = h[s][-S - 1 >> 1].neg()), E = "affine" === a.type ? E.mixedAdd(a) : E.add(a))
                        }
                    }
                    for (o = 0; o < n; o++) h[o] = null;
                    return i ? E : E.toP()
                }, g.BasePoint = y, y.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, y.prototype.validate = function() {
                    return this.curve.validate(this)
                }, g.prototype.decodePoint = function(t, r) {
                    t = c.toArray(t, r);
                    var e = this.p.byteLength();
                    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 === 2 * e) {
                        6 === t[0] ? m(t[t.length - 1] % 2 === 0) : 7 === t[0] && m(t[t.length - 1] % 2 === 1);
                        var n = this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
                        return n
                    }
                    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e) return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
                    throw new Error("Unknown point format")
                }, y.prototype.encodeCompressed = function(t) {
                    return this.encode(t, !0)
                }, y.prototype._encode = function(t) {
                    var r = this.curve.p.byteLength(),
                        e = this.getX().toArray("be", r);
                    return t ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", r))
                }, y.prototype.encode = function(t, r) {
                    return c.encode(this._encode(r), t)
                }, y.prototype.precompute = function(t) {
                    if (this.precomputed) return this;
                    var r = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this
                }, y.prototype._hasDoubles = function(t) {
                    if (!this.precomputed) return !1;
                    var r = this.precomputed.doubles;
                    return !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
                }, y.prototype._getDoubles = function(t, r) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var e = [this], n = this, i = 0; i < r; i += t) {
                        for (var o = 0; o < t; o++) n = n.dbl();
                        e.push(n)
                    }
                    return {
                        step: t,
                        points: e
                    }
                }, y.prototype._getNAFPoints = function(t) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var r = [this], e = (1 << t) - 1, n = 1 === e ? null : this.dbl(), i = 1; i < e; i++) r[i] = r[i - 1].add(n);
                    return {
                        wnd: t,
                        points: r
                    }
                }, y.prototype._getBeta = function() {
                    return null
                }, y.prototype.dblp = function(t) {
                    for (var r = this, e = 0; e < t; e++) r = r.dbl();
                    return r
                };
                var b = a((function(t) {
                        "function" === typeof Object.create ? t.exports = function(t, r) {
                            r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(t, r) {
                            if (r) {
                                t.super_ = r;
                                var e = function() {};
                                e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                            }
                        }
                    })),
                    w = c.assert;

                function M(t) {
                    v.call(this, "short", t), this.a = new i.a(t.a, 16).toRed(this.red), this.b = new i.a(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                b(M, v);
                var E = M;

                function _(t, r, e, n) {
                    v.BasePoint.call(this, t, "affine"), null === r && null === e ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i.a(r, 16), this.y = new i.a(e, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function A(t, r, e, n) {
                    v.BasePoint.call(this, t, "jacobian"), null === r && null === e && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i.a(0)) : (this.x = new i.a(r, 16), this.y = new i.a(e, 16), this.z = new i.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                M.prototype._getEndomorphism = function(t) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var r, e, n;
                        if (t.beta) r = new i.a(t.beta, 16).toRed(this.red);
                        else {
                            var o = this._getEndoRoots(this.p);
                            r = o[0].cmp(o[1]) < 0 ? o[0] : o[1], r = r.toRed(this.red)
                        }
                        if (t.lambda) e = new i.a(t.lambda, 16);
                        else {
                            var s = this._getEndoRoots(this.n);
                            0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(r)) ? e = s[0] : (e = s[1], w(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))))
                        }
                        return n = t.basis ? t.basis.map((function(t) {
                            return {
                                a: new i.a(t.a, 16),
                                b: new i.a(t.b, 16)
                            }
                        })) : this._getEndoBasis(e), {
                            beta: r,
                            lambda: e,
                            basis: n
                        }
                    }
                }, M.prototype._getEndoRoots = function(t) {
                    var r = t === this.p ? this.red : i.a.mont(t),
                        e = new i.a(2).toRed(r).redInvm(),
                        n = e.redNeg(),
                        o = new i.a(3).toRed(r).redNeg().redSqrt().redMul(e),
                        s = n.redAdd(o).fromRed(),
                        a = n.redSub(o).fromRed();
                    return [s, a]
                }, M.prototype._getEndoBasis = function(t) {
                    var r, e, n, o, s, a, u, h, f, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                        c = t,
                        d = this.n.clone(),
                        p = new i.a(1),
                        m = new i.a(0),
                        g = new i.a(0),
                        v = new i.a(1),
                        y = 0;
                    while (0 !== c.cmpn(0)) {
                        var b = d.div(c);
                        h = d.sub(b.mul(c)), f = g.sub(b.mul(p));
                        var w = v.sub(b.mul(m));
                        if (!n && h.cmp(l) < 0) r = u.neg(), e = p, n = h.neg(), o = f;
                        else if (n && 2 === ++y) break;
                        u = h, d = c, c = h, g = p, p = f, v = m, m = w
                    }
                    s = h.neg(), a = f;
                    var M = n.sqr().add(o.sqr()),
                        E = s.sqr().add(a.sqr());
                    return E.cmp(M) >= 0 && (s = r, a = e), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                        a: n,
                        b: o
                    }, {
                        a: s,
                        b: a
                    }]
                }, M.prototype._endoSplit = function(t) {
                    var r = this.endo.basis,
                        e = r[0],
                        n = r[1],
                        i = n.b.mul(t).divRound(this.n),
                        o = e.b.neg().mul(t).divRound(this.n),
                        s = i.mul(e.a),
                        a = o.mul(n.a),
                        u = i.mul(e.b),
                        h = o.mul(n.b),
                        f = t.sub(s).sub(a),
                        l = u.add(h).neg();
                    return {
                        k1: f,
                        k2: l
                    }
                }, M.prototype.pointFromX = function(t, r) {
                    t = new i.a(t, 16), t.red || (t = t.toRed(this.red));
                    var e = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                        n = e.redSqrt();
                    if (0 !== n.redSqr().redSub(e).cmp(this.zero)) throw new Error("invalid point");
                    var o = n.fromRed().isOdd();
                    return (r && !o || !r && o) && (n = n.redNeg()), this.point(t, n)
                }, M.prototype.validate = function(t) {
                    if (t.inf) return !0;
                    var r = t.x,
                        e = t.y,
                        n = this.a.redMul(r),
                        i = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
                    return 0 === e.redSqr().redISub(i).cmpn(0)
                }, M.prototype._endoWnafMulAdd = function(t, r, e) {
                    for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                        var s = this._endoSplit(r[o]),
                            a = t[o],
                            u = a._getBeta();
                        s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                    }
                    for (var h = this._wnafMulAdd(1, n, i, 2 * o, e), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null;
                    return h
                }, b(_, v.BasePoint), M.prototype.point = function(t, r, e) {
                    return new _(this, t, r, e)
                }, M.prototype.pointFromJSON = function(t, r) {
                    return _.fromJSON(this, t, r)
                }, _.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var t = this.precomputed;
                        if (t && t.beta) return t.beta;
                        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (t) {
                            var e = this.curve,
                                n = function(t) {
                                    return e.point(t.x.redMul(e.endo.beta), t.y)
                                };
                            t.beta = r, r.precomputed = {
                                beta: null,
                                naf: t.naf && {
                                    wnd: t.naf.wnd,
                                    points: t.naf.points.map(n)
                                },
                                doubles: t.doubles && {
                                    step: t.doubles.step,
                                    points: t.doubles.points.map(n)
                                }
                            }
                        }
                        return r
                    }
                }, _.prototype.toJSON = function() {
                    return this.precomputed ? [this.x, this.y, this.precomputed && {
                        doubles: this.precomputed.doubles && {
                            step: this.precomputed.doubles.step,
                            points: this.precomputed.doubles.points.slice(1)
                        },
                        naf: this.precomputed.naf && {
                            wnd: this.precomputed.naf.wnd,
                            points: this.precomputed.naf.points.slice(1)
                        }
                    }] : [this.x, this.y]
                }, _.fromJSON = function(t, r, e) {
                    "string" === typeof r && (r = JSON.parse(r));
                    var n = t.point(r[0], r[1], e);
                    if (!r[2]) return n;

                    function i(r) {
                        return t.point(r[0], r[1], e)
                    }
                    var o = r[2];
                    return n.precomputed = {
                        beta: null,
                        doubles: o.doubles && {
                            step: o.doubles.step,
                            points: [n].concat(o.doubles.points.map(i))
                        },
                        naf: o.naf && {
                            wnd: o.naf.wnd,
                            points: [n].concat(o.naf.points.map(i))
                        }
                    }, n
                }, _.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, _.prototype.isInfinity = function() {
                    return this.inf
                }, _.prototype.add = function(t) {
                    if (this.inf) return t;
                    if (t.inf) return this;
                    if (this.eq(t)) return this.dbl();
                    if (this.neg().eq(t)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                    var r = this.y.redSub(t.y);
                    0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
                    var e = r.redSqr().redISub(this.x).redISub(t.x),
                        n = r.redMul(this.x.redSub(e)).redISub(this.y);
                    return this.curve.point(e, n)
                }, _.prototype.dbl = function() {
                    if (this.inf) return this;
                    var t = this.y.redAdd(this.y);
                    if (0 === t.cmpn(0)) return this.curve.point(null, null);
                    var r = this.curve.a,
                        e = this.x.redSqr(),
                        n = t.redInvm(),
                        i = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(n),
                        o = i.redSqr().redISub(this.x.redAdd(this.x)),
                        s = i.redMul(this.x.redSub(o)).redISub(this.y);
                    return this.curve.point(o, s)
                }, _.prototype.getX = function() {
                    return this.x.fromRed()
                }, _.prototype.getY = function() {
                    return this.y.fromRed()
                }, _.prototype.mul = function(t) {
                    return t = new i.a(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
                }, _.prototype.mulAdd = function(t, r, e) {
                    var n = [this, r],
                        i = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
                }, _.prototype.jmulAdd = function(t, r, e) {
                    var n = [this, r],
                        i = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
                }, _.prototype.eq = function(t) {
                    return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
                }, _.prototype.neg = function(t) {
                    if (this.inf) return this;
                    var r = this.curve.point(this.x, this.y.redNeg());
                    if (t && this.precomputed) {
                        var e = this.precomputed,
                            n = function(t) {
                                return t.neg()
                            };
                        r.precomputed = {
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(n)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(n)
                            }
                        }
                    }
                    return r
                }, _.prototype.toJ = function() {
                    if (this.inf) return this.curve.jpoint(null, null, null);
                    var t = this.curve.jpoint(this.x, this.y, this.curve.one);
                    return t
                }, b(A, v.BasePoint), M.prototype.jpoint = function(t, r, e) {
                    return new A(this, t, r, e)
                }, A.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var t = this.z.redInvm(),
                        r = t.redSqr(),
                        e = this.x.redMul(r),
                        n = this.y.redMul(r).redMul(t);
                    return this.curve.point(e, n)
                }, A.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, A.prototype.add = function(t) {
                    if (this.isInfinity()) return t;
                    if (t.isInfinity()) return this;
                    var r = t.z.redSqr(),
                        e = this.z.redSqr(),
                        n = this.x.redMul(r),
                        i = t.x.redMul(e),
                        o = this.y.redMul(r.redMul(t.z)),
                        s = t.y.redMul(e.redMul(this.z)),
                        a = n.redSub(i),
                        u = o.redSub(s);
                    if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h = a.redSqr(),
                        f = h.redMul(a),
                        l = n.redMul(h),
                        c = u.redSqr().redIAdd(f).redISub(l).redISub(l),
                        d = u.redMul(l.redISub(c)).redISub(o.redMul(f)),
                        p = this.z.redMul(t.z).redMul(a);
                    return this.curve.jpoint(c, d, p)
                }, A.prototype.mixedAdd = function(t) {
                    if (this.isInfinity()) return t.toJ();
                    if (t.isInfinity()) return this;
                    var r = this.z.redSqr(),
                        e = this.x,
                        n = t.x.redMul(r),
                        i = this.y,
                        o = t.y.redMul(r).redMul(this.z),
                        s = e.redSub(n),
                        a = i.redSub(o);
                    if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var u = s.redSqr(),
                        h = u.redMul(s),
                        f = e.redMul(u),
                        l = a.redSqr().redIAdd(h).redISub(f).redISub(f),
                        c = a.redMul(f.redISub(l)).redISub(i.redMul(h)),
                        d = this.z.redMul(s);
                    return this.curve.jpoint(l, c, d)
                }, A.prototype.dblp = function(t) {
                    if (0 === t) return this;
                    if (this.isInfinity()) return this;
                    if (!t) return this.dbl();
                    var r;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var e = this;
                        for (r = 0; r < t; r++) e = e.dbl();
                        return e
                    }
                    var n = this.curve.a,
                        i = this.curve.tinv,
                        o = this.x,
                        s = this.y,
                        a = this.z,
                        u = a.redSqr().redSqr(),
                        h = s.redAdd(s);
                    for (r = 0; r < t; r++) {
                        var f = o.redSqr(),
                            l = h.redSqr(),
                            c = l.redSqr(),
                            d = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
                            p = o.redMul(l),
                            m = d.redSqr().redISub(p.redAdd(p)),
                            g = p.redISub(m),
                            v = d.redMul(g);
                        v = v.redIAdd(v).redISub(c);
                        var y = h.redMul(a);
                        r + 1 < t && (u = u.redMul(c)), o = m, a = y, h = v
                    }
                    return this.curve.jpoint(o, h.redMul(i), a)
                }, A.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, A.prototype._zeroDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            i = this.y.redSqr(),
                            o = i.redSqr(),
                            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var a = n.redAdd(n).redIAdd(n),
                            u = a.redSqr().redISub(s).redISub(s),
                            h = o.redIAdd(o);
                        h = h.redIAdd(h), h = h.redIAdd(h), t = u, r = a.redMul(s.redISub(u)).redISub(h), e = this.y.redAdd(this.y)
                    } else {
                        var f = this.x.redSqr(),
                            l = this.y.redSqr(),
                            c = l.redSqr(),
                            d = this.x.redAdd(l).redSqr().redISub(f).redISub(c);
                        d = d.redIAdd(d);
                        var p = f.redAdd(f).redIAdd(f),
                            m = p.redSqr(),
                            g = c.redIAdd(c);
                        g = g.redIAdd(g), g = g.redIAdd(g), t = m.redISub(d).redISub(d), r = p.redMul(d.redISub(t)).redISub(g), e = this.y.redMul(this.z), e = e.redIAdd(e)
                    }
                    return this.curve.jpoint(t, r, e)
                }, A.prototype._threeDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            i = this.y.redSqr(),
                            o = i.redSqr(),
                            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            u = a.redSqr().redISub(s).redISub(s);
                        t = u;
                        var h = o.redIAdd(o);
                        h = h.redIAdd(h), h = h.redIAdd(h), r = a.redMul(s.redISub(u)).redISub(h), e = this.y.redAdd(this.y)
                    } else {
                        var f = this.z.redSqr(),
                            l = this.y.redSqr(),
                            c = this.x.redMul(l),
                            d = this.x.redSub(f).redMul(this.x.redAdd(f));
                        d = d.redAdd(d).redIAdd(d);
                        var p = c.redIAdd(c);
                        p = p.redIAdd(p);
                        var m = p.redAdd(p);
                        t = d.redSqr().redISub(m), e = this.y.redAdd(this.z).redSqr().redISub(l).redISub(f);
                        var g = l.redSqr();
                        g = g.redIAdd(g), g = g.redIAdd(g), g = g.redIAdd(g), r = d.redMul(p.redISub(t)).redISub(g)
                    }
                    return this.curve.jpoint(t, r, e)
                }, A.prototype._dbl = function() {
                    var t = this.curve.a,
                        r = this.x,
                        e = this.y,
                        n = this.z,
                        i = n.redSqr().redSqr(),
                        o = r.redSqr(),
                        s = e.redSqr(),
                        a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                        u = r.redAdd(r);
                    u = u.redIAdd(u);
                    var h = u.redMul(s),
                        f = a.redSqr().redISub(h.redAdd(h)),
                        l = h.redISub(f),
                        c = s.redSqr();
                    c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                    var d = a.redMul(l).redISub(c),
                        p = e.redAdd(e).redMul(n);
                    return this.curve.jpoint(f, d, p)
                }, A.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var t = this.x.redSqr(),
                        r = this.y.redSqr(),
                        e = this.z.redSqr(),
                        n = r.redSqr(),
                        i = t.redAdd(t).redIAdd(t),
                        o = i.redSqr(),
                        s = this.x.redAdd(r).redSqr().redISub(t).redISub(n);
                    s = s.redIAdd(s), s = s.redAdd(s).redIAdd(s), s = s.redISub(o);
                    var a = s.redSqr(),
                        u = n.redIAdd(n);
                    u = u.redIAdd(u), u = u.redIAdd(u), u = u.redIAdd(u);
                    var h = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
                        f = r.redMul(h);
                    f = f.redIAdd(f), f = f.redIAdd(f);
                    var l = this.x.redMul(a).redISub(f);
                    l = l.redIAdd(l), l = l.redIAdd(l);
                    var c = this.y.redMul(h.redMul(u.redISub(h)).redISub(s.redMul(a)));
                    c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                    var d = this.z.redAdd(s).redSqr().redISub(e).redISub(a);
                    return this.curve.jpoint(l, c, d)
                }, A.prototype.mul = function(t, r) {
                    return t = new i.a(t, r), this.curve._wnafMul(this, t)
                }, A.prototype.eq = function(t) {
                    if ("affine" === t.type) return this.eq(t.toJ());
                    if (this === t) return !0;
                    var r = this.z.redSqr(),
                        e = t.z.redSqr();
                    if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0)) return !1;
                    var n = r.redMul(this.z),
                        i = e.redMul(t.z);
                    return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
                }, A.prototype.eqXToP = function(t) {
                    var r = this.z.redSqr(),
                        e = t.toRed(this.curve.red).redMul(r);
                    if (0 === this.x.cmp(e)) return !0;
                    for (var n = t.clone(), i = this.curve.redN.redMul(r);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (e.redIAdd(i), 0 === this.x.cmp(e)) return !0
                    }
                }, A.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, A.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var N = a((function(t, r) {
                        var e = r;
                        e.base = v, e.short = E, e.mont = null, e.edwards = null
                    })),
                    S = a((function(t, r) {
                        var e, n = r,
                            i = c.assert;

                        function o(t) {
                            "short" === t.type ? this.curve = new N.short(t) : "edwards" === t.type ? this.curve = new N.edwards(t) : this.curve = new N.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function a(t, r) {
                            Object.defineProperty(n, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var e = new o(r);
                                    return Object.defineProperty(n, t, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: e
                                    }), e
                                }
                            })
                        }
                        n.PresetCurve = o, a("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), a("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), a("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), a("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: s.a.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), a("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: s.a.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), a("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), a("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            e = null.crash()
                        } catch (u) {
                            e = void 0
                        }
                        a("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: s.a.sha256,
                            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                            basis: [{
                                a: "3086d221a7d46bcde86c90e49284eb15",
                                b: "-e4437ed6010e88286f547fa90abfe4c3"
                            }, {
                                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                b: "3086d221a7d46bcde86c90e49284eb15"
                            }],
                            gRed: !1,
                            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", e]
                        })
                    }));

                function x(t) {
                    if (!(this instanceof x)) return new x(t);
                    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var r = l.toArray(t.entropy, t.entropyEnc || "hex"),
                        e = l.toArray(t.nonce, t.nonceEnc || "hex"),
                        n = l.toArray(t.pers, t.persEnc || "hex");
                    h(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, e, n)
                }
                var I = x;
                x.prototype._init = function(t, r, e) {
                    var n = t.concat(r).concat(e);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, x.prototype._hmac = function() {
                    return new s.a.hmac(this.hash, this.K)
                }, x.prototype._update = function(t) {
                    var r = this._hmac().update(this.V).update([0]);
                    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
                }, x.prototype.reseed = function(t, r, e, n) {
                    "string" !== typeof r && (n = e, e = r, r = null), t = l.toArray(t, r), e = l.toArray(e, n), h(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(e || [])), this._reseed = 1
                }, x.prototype.generate = function(t, r, e, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" !== typeof r && (n = e, e = r, r = null), e && (e = l.toArray(e, n || "hex"), this._update(e));
                    var i = [];
                    while (i.length < t) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                    var o = i.slice(0, t);
                    return this._update(e), this._reseed++, l.encode(o, r)
                };
                var O = c.assert;

                function R(t, r) {
                    this.ec = t, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
                }
                var P = R;
                R.fromPublic = function(t, r, e) {
                    return r instanceof R ? r : new R(t, {
                        pub: r,
                        pubEnc: e
                    })
                }, R.fromPrivate = function(t, r, e) {
                    return r instanceof R ? r : new R(t, {
                        priv: r,
                        privEnc: e
                    })
                }, R.prototype.validate = function() {
                    var t = this.getPublic();
                    return t.isInfinity() ? {
                        result: !1,
                        reason: "Invalid public key"
                    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "Public key * N != O"
                    } : {
                        result: !1,
                        reason: "Public key is not a point"
                    }
                }, R.prototype.getPublic = function(t, r) {
                    return "string" === typeof t && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
                }, R.prototype.getPrivate = function(t) {
                    return "hex" === t ? this.priv.toString(16, 2) : this.priv
                }, R.prototype._importPrivate = function(t, r) {
                    this.priv = new i.a(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, R.prototype._importPublic = function(t, r) {
                    if (t.x || t.y) return "mont" === this.ec.curve.type ? O(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || O(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                    this.pub = this.ec.curve.decodePoint(t, r)
                }, R.prototype.derive = function(t) {
                    return t.validate() || O(t.validate(), "public point not validated"), t.mul(this.priv).getX()
                }, R.prototype.sign = function(t, r, e) {
                    return this.ec.sign(t, this, r, e)
                }, R.prototype.verify = function(t, r) {
                    return this.ec.verify(t, r, this)
                }, R.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var T = c.assert;

                function U(t, r) {
                    if (t instanceof U) return t;
                    this._importDER(t, r) || (T(t.r && t.s, "Signature without r or s"), this.r = new i.a(t.r, 16), this.s = new i.a(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
                }
                var k = U;

                function C() {
                    this.place = 0
                }

                function j(t, r) {
                    var e = t[r.place++];
                    if (!(128 & e)) return e;
                    var n = 15 & e;
                    if (0 === n || n > 4) return !1;
                    for (var i = 0, o = 0, s = r.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                    return !(i <= 127) && (r.place = s, i)
                }

                function F(t) {
                    var r = 0,
                        e = t.length - 1;
                    while (!t[r] && !(128 & t[r + 1]) && r < e) r++;
                    return 0 === r ? t : t.slice(r)
                }

                function L(t, r) {
                    if (r < 128) t.push(r);
                    else {
                        var e = 1 + (Math.log(r) / Math.LN2 >>> 3);
                        t.push(128 | e);
                        while (--e) t.push(r >>> (e << 3) & 255);
                        t.push(r)
                    }
                }
                U.prototype._importDER = function(t, r) {
                    t = c.toArray(t, r);
                    var e = new C;
                    if (48 !== t[e.place++]) return !1;
                    var n = j(t, e);
                    if (!1 === n) return !1;
                    if (n + e.place !== t.length) return !1;
                    if (2 !== t[e.place++]) return !1;
                    var o = j(t, e);
                    if (!1 === o) return !1;
                    var s = t.slice(e.place, o + e.place);
                    if (e.place += o, 2 !== t[e.place++]) return !1;
                    var a = j(t, e);
                    if (!1 === a) return !1;
                    if (t.length !== a + e.place) return !1;
                    var u = t.slice(e.place, a + e.place);
                    if (0 === s[0]) {
                        if (!(128 & s[1])) return !1;
                        s = s.slice(1)
                    }
                    if (0 === u[0]) {
                        if (!(128 & u[1])) return !1;
                        u = u.slice(1)
                    }
                    return this.r = new i.a(s), this.s = new i.a(u), this.recoveryParam = null, !0
                }, U.prototype.toDER = function(t) {
                    var r = this.r.toArray(),
                        e = this.s.toArray();
                    128 & r[0] && (r = [0].concat(r)), 128 & e[0] && (e = [0].concat(e)), r = F(r), e = F(e);
                    while (!e[0] && !(128 & e[1])) e = e.slice(1);
                    var n = [2];
                    L(n, r.length), n = n.concat(r), n.push(2), L(n, e.length);
                    var i = n.concat(e),
                        o = [48];
                    return L(o, i.length), o = o.concat(i), c.encode(o, t)
                };
                var D = function() {
                        throw new Error("unsupported")
                    },
                    q = c.assert;

                function B(t) {
                    if (!(this instanceof B)) return new B(t);
                    "string" === typeof t && (q(Object.prototype.hasOwnProperty.call(S, t), "Unknown curve " + t), t = S[t]), t instanceof S.PresetCurve && (t = {
                        curve: t
                    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
                }
                var z = B;
                B.prototype.keyPair = function(t) {
                    return new P(this, t)
                }, B.prototype.keyFromPrivate = function(t, r) {
                    return P.fromPrivate(this, t, r)
                }, B.prototype.keyFromPublic = function(t, r) {
                    return P.fromPublic(this, t, r)
                }, B.prototype.genKeyPair = function(t) {
                    t || (t = {});
                    for (var r = new I({
                            hash: this.hash,
                            pers: t.pers,
                            persEnc: t.persEnc || "utf8",
                            entropy: t.entropy || D(this.hash.hmacStrength),
                            entropyEnc: t.entropy && t.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), e = this.n.byteLength(), n = this.n.sub(new i.a(2));;) {
                        var o = new i.a(r.generate(e));
                        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                    }
                }, B.prototype._truncateToN = function(t, r) {
                    var e = 8 * t.byteLength() - this.n.bitLength();
                    return e > 0 && (t = t.ushrn(e)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
                }, B.prototype.sign = function(t, r, e, n) {
                    "object" === typeof e && (n = e, e = null), n || (n = {}), r = this.keyFromPrivate(r, e), t = this._truncateToN(new i.a(t, 16));
                    for (var o = this.n.byteLength(), s = r.getPrivate().toArray("be", o), a = t.toArray("be", o), u = new I({
                            hash: this.hash,
                            entropy: s,
                            nonce: a,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), h = this.n.sub(new i.a(1)), f = 0;; f++) {
                        var l = n.k ? n.k(f) : new i.a(u.generate(this.n.byteLength()));
                        if (l = this._truncateToN(l, !0), !(l.cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                            var c = this.g.mul(l);
                            if (!c.isInfinity()) {
                                var d = c.getX(),
                                    p = d.umod(this.n);
                                if (0 !== p.cmpn(0)) {
                                    var m = l.invm(this.n).mul(p.mul(r.getPrivate()).iadd(t));
                                    if (m = m.umod(this.n), 0 !== m.cmpn(0)) {
                                        var g = (c.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                        return n.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new k({
                                            r: p,
                                            s: m,
                                            recoveryParam: g
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, B.prototype.verify = function(t, r, e, n) {
                    t = this._truncateToN(new i.a(t, 16)), e = this.keyFromPublic(e, n), r = new k(r, "hex");
                    var o = r.r,
                        s = r.s;
                    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var a, u = s.invm(this.n),
                        h = u.mul(t).umod(this.n),
                        f = u.mul(o).umod(this.n);
                    return this.curve._maxwellTrick ? (a = this.g.jmulAdd(h, e.getPublic(), f), !a.isInfinity() && a.eqXToP(o)) : (a = this.g.mulAdd(h, e.getPublic(), f), !a.isInfinity() && 0 === a.getX().umod(this.n).cmp(o))
                }, B.prototype.recoverPubKey = function(t, r, e, n) {
                    q((3 & e) === e, "The recovery param is more than two bits"), r = new k(r, n);
                    var o = this.n,
                        s = new i.a(t),
                        a = r.r,
                        u = r.s,
                        h = 1 & e,
                        f = e >> 1;
                    if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw new Error("Unable to find sencond key candinate");
                    a = f ? this.curve.pointFromX(a.add(this.curve.n), h) : this.curve.pointFromX(a, h);
                    var l = r.r.invm(o),
                        c = o.sub(s).mul(l).umod(o),
                        d = u.mul(l).umod(o);
                    return this.g.mulAdd(c, a, d)
                }, B.prototype.getKeyRecoveryParam = function(t, r, e, n) {
                    if (r = new k(r, n), null !== r.recoveryParam) return r.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var o;
                        try {
                            o = this.recoverPubKey(t, r, i)
                        } catch (t) {
                            continue
                        }
                        if (o.eq(e)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var G = a((function(t, r) {
                        var e = r;
                        e.version = {
                            version: "6.5.4"
                        }.version, e.utils = c, e.rand = function() {
                            throw new Error("unsupported")
                        }, e.curve = N, e.curves = S, e.ec = z, e.eddsa = null
                    })),
                    K = G.ec
            }).call(this, e("c8ba"))
        },
        b93f: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return a
            })), e.d(r, "b", (function() {
                return c
            }));
            var n = e("c9ac"),
                i = e("7308");
            const o = "strings/5.6.0",
                s = new i["a"](o);
            var a, u;

            function h(t, r, e, n, i) {
                return s.throwArgumentError(`invalid codepoint at offset ${r}; ${t}`, "bytes", e)
            }

            function f(t, r, e, n, i) {
                if (t === u.BAD_PREFIX || t === u.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let n = r + 1; n < e.length; n++) {
                        if (e[n] >> 6 !== 2) break;
                        t++
                    }
                    return t
                }
                return t === u.OVERRUN ? e.length - r - 1 : 0
            }

            function l(t, r, e, n, i) {
                return t === u.OVERLONG ? (n.push(i), 0) : (n.push(65533), f(t, r, e, n, i))
            }(function(t) {
                t["current"] = "", t["NFC"] = "NFC", t["NFD"] = "NFD", t["NFKC"] = "NFKC", t["NFKD"] = "NFKD"
            })(a || (a = {})),
            function(t) {
                t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte", t["BAD_PREFIX"] = "bad codepoint prefix", t["OVERRUN"] = "string overrun", t["MISSING_CONTINUE"] = "missing continuation byte", t["OUT_OF_RANGE"] = "out of UTF-8 range", t["UTF16_SURROGATE"] = "UTF-16 surrogate", t["OVERLONG"] = "overlong representation"
            }(u || (u = {}));
            Object.freeze({
                error: h,
                ignore: f,
                replace: l
            });

            function c(t, r = a.current) {
                r != a.current && (s.checkNormalize(), t = t.normalize(r));
                let e = [];
                for (let n = 0; n < t.length; n++) {
                    const r = t.charCodeAt(n);
                    if (r < 128) e.push(r);
                    else if (r < 2048) e.push(r >> 6 | 192), e.push(63 & r | 128);
                    else if (55296 == (64512 & r)) {
                        n++;
                        const i = t.charCodeAt(n);
                        if (n >= t.length || 56320 !== (64512 & i)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & r) << 10) + (1023 & i);
                        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)
                    } else e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)
                }
                return Object(n["a"])(e)
            }
        },
        bc84: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return f
            })), e.d(r, "a", (function() {
                return d
            }));
            var n = e("c9ac"),
                i = e("7308");
            const o = "rlp/5.6.0",
                s = new i["a"](o);

            function a(t) {
                const r = [];
                while (t) r.unshift(255 & t), t >>= 8;
                return r
            }

            function u(t, r, e) {
                let n = 0;
                for (let i = 0; i < e; i++) n = 256 * n + t[r + i];
                return n
            }

            function h(t) {
                if (Array.isArray(t)) {
                    let r = [];
                    if (t.forEach((function(t) {
                            r = r.concat(h(t))
                        })), r.length <= 55) return r.unshift(192 + r.length), r;
                    const e = a(r.length);
                    return e.unshift(247 + e.length), e.concat(r)
                }
                Object(n["i"])(t) || s.throwArgumentError("RLP object must be BytesLike", "object", t);
                const r = Array.prototype.slice.call(Object(n["a"])(t));
                if (1 === r.length && r[0] <= 127) return r;
                if (r.length <= 55) return r.unshift(128 + r.length), r;
                const e = a(r.length);
                return e.unshift(183 + e.length), e.concat(r)
            }

            function f(t) {
                return Object(n["g"])(h(t))
            }

            function l(t, r, e, n) {
                const o = [];
                while (e < r + 1 + n) {
                    const a = c(t, e);
                    o.push(a.result), e += a.consumed, e > r + 1 + n && s.throwError("child data too short", i["a"].errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + n,
                    result: o
                }
            }

            function c(t, r) {
                if (0 === t.length && s.throwError("data too short", i["a"].errors.BUFFER_OVERRUN, {}), t[r] >= 248) {
                    const e = t[r] - 247;
                    r + 1 + e > t.length && s.throwError("data short segment too short", i["a"].errors.BUFFER_OVERRUN, {});
                    const n = u(t, r + 1, e);
                    return r + 1 + e + n > t.length && s.throwError("data long segment too short", i["a"].errors.BUFFER_OVERRUN, {}), l(t, r, r + 1 + e, e + n)
                }
                if (t[r] >= 192) {
                    const e = t[r] - 192;
                    return r + 1 + e > t.length && s.throwError("data array too short", i["a"].errors.BUFFER_OVERRUN, {}), l(t, r, r + 1, e)
                }
                if (t[r] >= 184) {
                    const e = t[r] - 183;
                    r + 1 + e > t.length && s.throwError("data array too short", i["a"].errors.BUFFER_OVERRUN, {});
                    const o = u(t, r + 1, e);
                    r + 1 + e + o > t.length && s.throwError("data array too short", i["a"].errors.BUFFER_OVERRUN, {});
                    const a = Object(n["g"])(t.slice(r + 1 + e, r + 1 + e + o));
                    return {
                        consumed: 1 + e + o,
                        result: a
                    }
                }
                if (t[r] >= 128) {
                    const e = t[r] - 128;
                    r + 1 + e > t.length && s.throwError("data too short", i["a"].errors.BUFFER_OVERRUN, {});
                    const o = Object(n["g"])(t.slice(r + 1, r + 1 + e));
                    return {
                        consumed: 1 + e,
                        result: o
                    }
                }
                return {
                    consumed: 1,
                    result: Object(n["g"])(t[r])
                }
            }

            function d(t) {
                const r = Object(n["a"])(t),
                    e = c(r, 0);
                return e.consumed !== r.length && s.throwArgumentError("invalid rlp data", "data", t), e.result
            }
        },
        c00b: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            const n = "0x0000000000000000000000000000000000000000"
        },
        c135: function(t, r) {
            function e(t) {
                if (Array.isArray(t)) return t
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        c240: function(t, r) {
            function e() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        c973: function(t, r) {
            function e(t, r, e, n, i, o, s) {
                try {
                    var a = t[o](s),
                        u = a.value
                } catch (h) {
                    return void e(h)
                }
                a.done ? r(u) : Promise.resolve(u).then(n, i)
            }

            function n(t) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var s = t.apply(r, n);

                        function a(t) {
                            e(s, i, o, a, u, "next", t)
                        }

                        function u(t) {
                            e(s, i, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            t.exports = n, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        c9ac: function(t, r, e) {
            "use strict";
            e.d(r, "i", (function() {
                return u
            })), e.d(r, "h", (function() {
                return f
            })), e.d(r, "a", (function() {
                return l
            })), e.d(r, "b", (function() {
                return c
            })), e.d(r, "l", (function() {
                return d
            })), e.d(r, "j", (function() {
                return m
            })), e.d(r, "g", (function() {
                return v
            })), e.d(r, "d", (function() {
                return y
            })), e.d(r, "e", (function() {
                return b
            })), e.d(r, "c", (function() {
                return w
            })), e.d(r, "f", (function() {
                return M
            })), e.d(r, "k", (function() {
                return E
            }));
            var n = e("7308");
            const i = "bytes/5.6.1",
                o = new n["a"](i);

            function s(t) {
                return !!t.toHexString
            }

            function a(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return a(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function u(t) {
                return m(t) && !(t.length % 2) || f(t)
            }

            function h(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function f(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!h(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    if (!h(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function l(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    o.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    while (t) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), a(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), s(t) && (t = t.toHexString()), m(t)) {
                    let e = t.substring(2);
                    e.length % 2 && ("left" === r.hexPad ? e = "0" + e : "right" === r.hexPad ? e += "0" : o.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) n.push(parseInt(e.substring(t, t + 2), 16));
                    return a(new Uint8Array(n))
                }
                return f(t) ? a(new Uint8Array(t)) : o.throwArgumentError("invalid arrayify value", "value", t)
            }

            function c(t) {
                const r = t.map(t => l(t)),
                    e = r.reduce((t, r) => t + r.length, 0),
                    n = new Uint8Array(e);
                return r.reduce((t, r) => (n.set(r, t), t + r.length), 0), a(n)
            }

            function d(t) {
                let r = l(t);
                if (0 === r.length) return r;
                let e = 0;
                while (e < r.length && 0 === r[e]) e++;
                return e && (r = r.slice(e)), r
            }

            function p(t, r) {
                t = l(t), t.length > r && o.throwArgumentError("value out of range", "value", arguments[0]);
                const e = new Uint8Array(r);
                return e.set(t, r - t.length), a(e)
            }

            function m(t, r) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }
            const g = "0123456789abcdef";

            function v(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    o.checkSafeUint53(t, "invalid hexlify value");
                    let r = "";
                    while (t) r = g[15 & t] + r, t = Math.floor(t / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" === typeof t) return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), s(t)) return t.toHexString();
                if (m(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : o.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (f(t)) {
                    let r = "0x";
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e];
                        r += g[(240 & n) >> 4] + g[15 & n]
                    }
                    return r
                }
                return o.throwArgumentError("invalid hexlify value", "value", t)
            }

            function y(t) {
                if ("string" !== typeof t) t = v(t);
                else if (!m(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function b(t, r, e) {
                return "string" !== typeof t ? t = v(t) : (!m(t) || t.length % 2) && o.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
            }

            function w(t) {
                let r = "0x";
                return t.forEach(t => {
                    r += v(t).substring(2)
                }), r
            }

            function M(t, r) {
                "string" !== typeof t ? t = v(t) : m(t) || o.throwArgumentError("invalid hex string", "value", t), t.length > 2 * r + 2 && o.throwArgumentError("value out of range", "value", arguments[1]);
                while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
                return t
            }

            function E(t) {
                const r = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (u(t)) {
                    let e = l(t);
                    64 === e.length ? (r.v = 27 + (e[32] >> 7), e[32] &= 127, r.r = v(e.slice(0, 32)), r.s = v(e.slice(32, 64))) : 65 === e.length ? (r.r = v(e.slice(0, 32)), r.s = v(e.slice(32, 64)), r.v = e[64]) : o.throwArgumentError("invalid signature string", "signature", t), r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : o.throwArgumentError("signature invalid v byte", "signature", t)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (e[32] |= 128), r._vs = v(e.slice(32, 64))
                } else {
                    if (r.r = t.r, r.s = t.s, r.v = t.v, r.recoveryParam = t.recoveryParam, r._vs = t._vs, null != r._vs) {
                        const e = p(l(r._vs), 32);
                        r._vs = v(e);
                        const n = e[0] >= 128 ? 1 : 0;
                        null == r.recoveryParam ? r.recoveryParam = n : r.recoveryParam !== n && o.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), e[0] &= 127;
                        const i = v(e);
                        null == r.s ? r.s = i : r.s !== i && o.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == r.recoveryParam) null == r.v ? o.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
                    else if (null == r.v) r.v = 27 + r.recoveryParam;
                    else {
                        const e = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
                        r.recoveryParam !== e && o.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != r.r && m(r.r) ? r.r = M(r.r, 32) : o.throwArgumentError("signature missing or invalid r", "signature", t), null != r.s && m(r.s) ? r.s = M(r.s, 32) : o.throwArgumentError("signature missing or invalid s", "signature", t);
                    const e = l(r.s);
                    e[0] >= 128 && o.throwArgumentError("signature s out of range", "signature", t), r.recoveryParam && (e[0] |= 128);
                    const n = v(e);
                    r._vs && (m(r._vs) || o.throwArgumentError("signature invalid _vs", "signature", t), r._vs = M(r._vs, 32)), null == r._vs ? r._vs = n : r._vs !== n && o.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return r.yParityAndS = r._vs, r.compact = r.r + r.yParityAndS.substring(2), r
            }
        },
        ca6e: function(t, r) {
            function e(t, r) {
                if (!Object.prototype.hasOwnProperty.call(t, r)) throw new TypeError("attempted to use private field on non-instance");
                return t
            }
            t.exports = e, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        ce42: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return b
            })), e.d(r, "b", (function() {
                return w
            }));
            var n = e("7247"),
                i = e.n(n),
                o = e("ffef"),
                s = e("c9ac"),
                a = e("806c"),
                u = e("4105"),
                h = e("b93f"),
                f = e("8a85"),
                l = e("7308"),
                c = e("51bf"),
                d = e("fe6d");
            const p = new l["a"](c["a"]);
            class m extends f["a"] {
                isCrowdsaleAccount(t) {
                    return !(!t || !t._isCrowdsaleAccount)
                }
            }

            function g(t, r) {
                const e = JSON.parse(t);
                r = Object(d["a"])(r);
                const n = Object(o["a"])(Object(d["c"])(e, "ethaddr")),
                    f = Object(d["b"])(Object(d["c"])(e, "encseed"));
                f && f.length % 16 === 0 || p.throwArgumentError("invalid encseed", "json", t);
                const l = Object(s["a"])(Object(u["a"])(r, r, 2e3, 32, "sha256")).slice(0, 16),
                    c = f.slice(0, 16),
                    g = f.slice(16),
                    v = new i.a.ModeOfOperation.cbc(l, c),
                    y = i.a.padding.pkcs7.strip(Object(s["a"])(v.decrypt(g)));
                let b = "";
                for (let i = 0; i < y.length; i++) b += String.fromCharCode(y[i]);
                const w = Object(h["b"])(b),
                    M = Object(a["a"])(w);
                return new m({
                    _isCrowdsaleAccount: !0,
                    address: n,
                    privateKey: M
                })
            }
            var v = e("6b5b"),
                y = e("9cf4");

            function b(t, r, e) {
                if (Object(v["b"])(t)) {
                    e && e(0);
                    const n = g(t, r);
                    return e && e(1), Promise.resolve(n)
                }
                return Object(v["c"])(t) ? Object(y["a"])(t, r, e) : Promise.reject(new Error("invalid JSON wallet"))
            }

            function w(t, r) {
                if (Object(v["b"])(t)) return g(t, r);
                if (Object(v["c"])(t)) return Object(y["b"])(t, r);
                throw new Error("invalid JSON wallet")
            }
        },
        dbce: function(t, r, e) {
            var n = e("7037")["default"];

            function i(t) {
                if ("function" != typeof WeakMap) return null;
                var r = new WeakMap,
                    e = new WeakMap;
                return (i = function(t) {
                    return t ? e : r
                })(t)
            }

            function o(t, r) {
                if (!r && t && t.__esModule) return t;
                if (null === t || "object" != n(t) && "function" != typeof t) return {
                    default: t
                };
                var e = i(r);
                if (e && e.has(t)) return e.get(t);
                var o = {
                        __proto__: null
                    },
                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in t)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                        var u = s ? Object.getOwnPropertyDescriptor(t, a) : null;
                        u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = t[a]
                    }
                return o["default"] = t, e && e.set(t, o), o
            }
            t.exports = o, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        e108: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return x
            }));
            var n = e("3b1c"),
                i = e("e36d"),
                o = e("549e"),
                s = e("6f5a"),
                a = e("9bda"),
                u = e("ffb2"),
                h = e("5873"),
                f = e("35a8"),
                l = function(t, r, e, n) {
                    function i(t) {
                        return t instanceof e ? t : new e((function(r) {
                            r(t)
                        }))
                    }
                    return new(e || (e = Promise))((function(e, o) {
                        function s(t) {
                            try {
                                u(n.next(t))
                            } catch (r) {
                                o(r)
                            }
                        }

                        function a(t) {
                            try {
                                u(n["throw"](t))
                            } catch (r) {
                                o(r)
                            }
                        }

                        function u(t) {
                            t.done ? e(t.value) : i(t.value).then(s, a)
                        }
                        u((n = n.apply(t, r || [])).next())
                    }))
                };
            const c = new u["a"](h["a"]),
                d = new Uint8Array(32);
            d.fill(0);
            const p = i["a"].from(-1),
                m = i["a"].from(0),
                g = i["a"].from(1),
                v = i["a"].from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            function y(t) {
                const r = Object(o["a"])(t),
                    e = r.length % 32;
                return e ? Object(o["c"])([r, d.slice(e)]) : Object(o["i"])(r)
            }
            const b = Object(o["h"])(g.toHexString(), 32),
                w = Object(o["h"])(m.toHexString(), 32),
                M = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                E = ["name", "version", "chainId", "verifyingContract", "salt"];

            function _(t) {
                return function(r) {
                    return "string" !== typeof r && c.throwArgumentError("invalid domain value for " + JSON.stringify(t), "domain." + t, r), r
                }
            }
            const A = {
                name: _("name"),
                version: _("version"),
                chainId: function(t) {
                    try {
                        return i["a"].from(t).toString()
                    } catch (r) {}
                    return c.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
                },
                verifyingContract: function(t) {
                    try {
                        return Object(n["a"])(t).toLowerCase()
                    } catch (r) {}
                    return c.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    try {
                        const r = Object(o["a"])(t);
                        if (32 !== r.length) throw new Error("bad length");
                        return Object(o["i"])(r)
                    } catch (r) {}
                    return c.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
                }
            };

            function N(t) {
                {
                    const r = t.match(/^(u?)int(\d*)$/);
                    if (r) {
                        const e = "" === r[1],
                            n = parseInt(r[2] || "256");
                        (n % 8 !== 0 || n > 256 || r[2] && r[2] !== String(n)) && c.throwArgumentError("invalid numeric width", "type", t);
                        const s = v.mask(e ? n - 1 : n),
                            a = e ? s.add(g).mul(p) : m;
                        return function(r) {
                            const e = i["a"].from(r);
                            return (e.lt(a) || e.gt(s)) && c.throwArgumentError("value out-of-bounds for " + t, "value", r), Object(o["h"])(e.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    const r = t.match(/^bytes(\d+)$/);
                    if (r) {
                        const e = parseInt(r[1]);
                        return (0 === e || e > 32 || r[1] !== String(e)) && c.throwArgumentError("invalid bytes width", "type", t),
                            function(r) {
                                const n = Object(o["a"])(r);
                                return n.length !== e && c.throwArgumentError("invalid length for " + t, "value", r), y(r)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return Object(o["h"])(Object(n["a"])(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? b : w
                        };
                    case "bytes":
                        return function(t) {
                            return Object(s["a"])(t)
                        };
                    case "string":
                        return function(t) {
                            return Object(f["a"])(t)
                        }
                }
                return null
            }

            function S(t, r) {
                return `${t}(${r.map(({name:t,type:r})=>r+" "+t).join(",")})`
            }
            class x {
                constructor(t) {
                    Object(a["d"])(this, "types", Object.freeze(Object(a["c"])(t))), Object(a["d"])(this, "_encoderCache", {}), Object(a["d"])(this, "_types", {});
                    const r = {},
                        e = {},
                        n = {};
                    Object.keys(t).forEach(t => {
                        r[t] = {}, e[t] = [], n[t] = {}
                    });
                    for (const s in t) {
                        const n = {};
                        t[s].forEach(i => {
                            n[i.name] && c.throwArgumentError(`duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(s)}`, "types", t), n[i.name] = !0;
                            const o = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            o === s && c.throwArgumentError("circular type reference to " + JSON.stringify(o), "types", t);
                            const a = N(o);
                            a || (e[o] || c.throwArgumentError("unknown type " + JSON.stringify(o), "types", t), e[o].push(s), r[s][o] = !0)
                        })
                    }
                    const i = Object.keys(e).filter(t => 0 === e[t].length);

                    function o(i, s) {
                        s[i] && c.throwArgumentError("circular type reference to " + JSON.stringify(i), "types", t), s[i] = !0, Object.keys(r[i]).forEach(t => {
                            e[t] && (o(t, s), Object.keys(s).forEach(r => {
                                n[r][t] = !0
                            }))
                        }), delete s[i]
                    }
                    0 === i.length ? c.throwArgumentError("missing primary type", "types", t) : i.length > 1 && c.throwArgumentError("ambiguous primary types or unused types: " + i.map(t => JSON.stringify(t)).join(", "), "types", t), Object(a["d"])(this, "primaryType", i[0]), o(this.primaryType, {});
                    for (const s in n) {
                        const r = Object.keys(n[s]);
                        r.sort(), this._types[s] = S(s, t[s]) + r.map(r => S(r, t[r])).join("")
                    }
                }
                getEncoder(t) {
                    let r = this._encoderCache[t];
                    return r || (r = this._encoderCache[t] = this._getEncoder(t)), r
                }
                _getEncoder(t) {
                    {
                        const r = N(t);
                        if (r) return r
                    }
                    const r = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (r) {
                        const t = r[1],
                            e = this.getEncoder(t),
                            n = parseInt(r[3]);
                        return r => {
                            n >= 0 && r.length !== n && c.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r);
                            let i = r.map(e);
                            return this._types[t] && (i = i.map(s["a"])), Object(s["a"])(Object(o["c"])(i))
                        }
                    }
                    const e = this.types[t];
                    if (e) {
                        const r = Object(f["a"])(this._types[t]);
                        return t => {
                            const n = e.map(({
                                name: r,
                                type: e
                            }) => {
                                const n = this.getEncoder(e)(t[r]);
                                return this._types[e] ? Object(s["a"])(n) : n
                            });
                            return n.unshift(r), Object(o["c"])(n)
                        }
                    }
                    return c.throwArgumentError("unknown type: " + t, "type", t)
                }
                encodeType(t) {
                    const r = this._types[t];
                    return r || c.throwArgumentError("unknown type: " + JSON.stringify(t), "name", t), r
                }
                encodeData(t, r) {
                    return this.getEncoder(t)(r)
                }
                hashStruct(t, r) {
                    return Object(s["a"])(this.encodeData(t, r))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, r, e) {
                    {
                        const n = N(t);
                        if (n) return e(t, r)
                    }
                    const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        const t = n[1],
                            i = parseInt(n[3]);
                        return i >= 0 && r.length !== i && c.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r), r.map(r => this._visit(t, r, e))
                    }
                    const i = this.types[t];
                    return i ? i.reduce((t, {
                        name: n,
                        type: i
                    }) => (t[n] = this._visit(i, r[n], e), t), {}) : c.throwArgumentError("unknown type: " + t, "type", t)
                }
                visit(t, r) {
                    return this._visit(this.primaryType, t, r)
                }
                static from(t) {
                    return new x(t)
                }
                static getPrimaryType(t) {
                    return x.from(t).primaryType
                }
                static hashStruct(t, r, e) {
                    return x.from(r).hashStruct(t, e)
                }
                static hashDomain(t) {
                    const r = [];
                    for (const e in t) {
                        const n = M[e];
                        n || c.throwArgumentError("invalid typed-data domain key: " + JSON.stringify(e), "domain", t), r.push({
                            name: e,
                            type: n
                        })
                    }
                    return r.sort((t, r) => E.indexOf(t.name) - E.indexOf(r.name)), x.hashStruct("EIP712Domain", {
                        EIP712Domain: r
                    }, t)
                }
                static encode(t, r, e) {
                    return Object(o["c"])(["0x1901", x.hashDomain(t), x.from(r).hash(e)])
                }
                static hash(t, r, e) {
                    return Object(s["a"])(x.encode(t, r, e))
                }
                static resolveNames(t, r, e, n) {
                    return l(this, void 0, void 0, (function*() {
                        t = Object(a["g"])(t);
                        const i = {};
                        t.verifyingContract && !Object(o["l"])(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
                        const s = x.from(r);
                        s.visit(e, (t, r) => ("address" !== t || Object(o["l"])(r, 20) || (i[r] = "0x"), r));
                        for (const t in i) i[t] = yield n(t);
                        return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), e = s.visit(e, (t, r) => "address" === t && i[r] ? i[r] : r), {
                            domain: t,
                            value: e
                        }
                    }))
                }
                static getPayload(t, r, e) {
                    x.hashDomain(t);
                    const n = {},
                        s = [];
                    E.forEach(r => {
                        const e = t[r];
                        null != e && (n[r] = A[r](e), s.push({
                            name: r,
                            type: M[r]
                        }))
                    });
                    const u = x.from(r),
                        h = Object(a["g"])(r);
                    return h.EIP712Domain ? c.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : h.EIP712Domain = s, u.encode(e), {
                        types: h,
                        domain: n,
                        primaryType: u.primaryType,
                        message: u.visit(e, (t, r) => {
                            if (t.match(/^bytes(\d*)/)) return Object(o["i"])(Object(o["a"])(r));
                            if (t.match(/^u?int/)) return i["a"].from(r).toString();
                            switch (t) {
                                case "address":
                                    return r.toLowerCase();
                                case "bool":
                                    return !!r;
                                case "string":
                                    return "string" !== typeof r && c.throwArgumentError("invalid string", "value", r), r
                            }
                            return c.throwArgumentError("unsupported type", "type", t)
                        })
                    }
                }
            }
        },
        e36d: function(t, r, e) {
            "use strict";
            e.d(r, "d", (function() {
                return c
            })), e.d(r, "a", (function() {
                return p
            })), e.d(r, "c", (function() {
                return b
            })), e.d(r, "b", (function() {
                return w
            }));
            var n = e("b4d1"),
                i = e.n(n),
                o = e("549e"),
                s = e("ffb2"),
                a = e("a960"),
                u = i.a.BN;
            const h = new s["a"](a["a"]),
                f = {},
                l = 9007199254740991;

            function c(t) {
                return null != t && (p.isBigNumber(t) || "number" === typeof t && t % 1 === 0 || "string" === typeof t && !!t.match(/^-?[0-9]+$/) || Object(o["l"])(t) || "bigint" === typeof t || Object(o["j"])(t))
            }
            let d = !1;
            class p {
                constructor(t, r) {
                    h.checkNew(new.target, p), t !== f && h.throwError("cannot call constructor directly; use BigNumber.from", s["a"].errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return g(v(this).fromTwos(t))
                }
                toTwos(t) {
                    return g(v(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return g(v(this).add(v(t)))
                }
                sub(t) {
                    return g(v(this).sub(v(t)))
                }
                div(t) {
                    const r = p.from(t);
                    return r.isZero() && y("division by zero", "div"), g(v(this).div(v(t)))
                }
                mul(t) {
                    return g(v(this).mul(v(t)))
                }
                mod(t) {
                    const r = v(t);
                    return r.isNeg() && y("cannot modulo negative values", "mod"), g(v(this).umod(r))
                }
                pow(t) {
                    const r = v(t);
                    return r.isNeg() && y("cannot raise to negative values", "pow"), g(v(this).pow(r))
                }
                and(t) {
                    const r = v(t);
                    return (this.isNegative() || r.isNeg()) && y("cannot 'and' negative values", "and"), g(v(this).and(r))
                }
                or(t) {
                    const r = v(t);
                    return (this.isNegative() || r.isNeg()) && y("cannot 'or' negative values", "or"), g(v(this).or(r))
                }
                xor(t) {
                    const r = v(t);
                    return (this.isNegative() || r.isNeg()) && y("cannot 'xor' negative values", "xor"), g(v(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && y("cannot mask negative values", "mask"), g(v(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && y("cannot shift negative values", "shl"), g(v(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && y("cannot shift negative values", "shr"), g(v(this).shrn(t))
                }
                eq(t) {
                    return v(this).eq(v(t))
                }
                lt(t) {
                    return v(this).lt(v(t))
                }
                lte(t) {
                    return v(this).lte(v(t))
                }
                gt(t) {
                    return v(this).gt(v(t))
                }
                gte(t) {
                    return v(this).gte(v(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return v(this).isZero()
                }
                toNumber() {
                    try {
                        return v(this).toNumber()
                    } catch (t) {
                        y("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return h.throwError("this platform does not support BigInt", s["a"].errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? d || (d = !0, h.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? h.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s["a"].errors.UNEXPECTED_ARGUMENT, {}) : h.throwError("BigNumber.toString does not accept parameters", s["a"].errors.UNEXPECTED_ARGUMENT, {})), v(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof p) return t;
                    if ("string" === typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new p(f, m(t)) : t.match(/^-?[0-9]+$/) ? new p(f, m(new u(t))) : h.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" === typeof t) return t % 1 && y("underflow", "BigNumber.from", t), (t >= l || t <= -l) && y("overflow", "BigNumber.from", t), p.from(String(t));
                    const r = t;
                    if ("bigint" === typeof r) return p.from(r.toString());
                    if (Object(o["j"])(r)) return p.from(Object(o["i"])(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" === typeof t) return p.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" === typeof t && (Object(o["l"])(t) || "-" === t[0] && Object(o["l"])(t.substring(1)))) return p.from(t)
                        }
                    return h.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function m(t) {
                if ("string" !== typeof t) return m(t.toString(16));
                if ("-" === t[0]) return t = t.substring(1), "-" === t[0] && h.throwArgumentError("invalid hex", "value", t), t = m(t), "0x00" === t ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                t.length % 2 && (t = "0x0" + t.substring(2));
                while (t.length > 4 && "0x00" === t.substring(0, 4)) t = "0x" + t.substring(4);
                return t
            }

            function g(t) {
                return p.from(m(t))
            }

            function v(t) {
                const r = p.from(t).toHexString();
                return "-" === r[0] ? new u("-" + r.substring(3), 16) : new u(r.substring(2), 16)
            }

            function y(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), h.throwError(t, s["a"].errors.NUMERIC_FAULT, n)
            }

            function b(t) {
                return new u(t, 36).toString(16)
            }

            function w(t) {
                return new u(t, 16).toString(36)
            }
        },
        e50d: function(t, r, e) {
            var n = e("7037")["default"];

            function i(t, r) {
                if ("object" != n(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != n(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(t)
            }
            t.exports = i, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        ed6d: function(t, r, e) {
            var n = e("4a4b");

            function i(t, r) {
                if ("function" !== typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r && n(t, r)
            }
            t.exports = i, t.exports.__esModule = !0, t.exports["default"] = t.exports
        },
        edaa: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return h
            })), e.d(r, "b", (function() {
                return f
            }));
            var n = e("e36d"),
                i = (e("549e"), e("9bda")),
                o = e("ffb2");
            const s = "abstract-provider/5.5.1";
            var a = function(t, r, e, n) {
                function i(t) {
                    return t instanceof e ? t : new e((function(r) {
                        r(t)
                    }))
                }
                return new(e || (e = Promise))((function(e, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function a(t) {
                        try {
                            u(n["throw"](t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function u(t) {
                        t.done ? e(t.value) : i(t.value).then(s, a)
                    }
                    u((n = n.apply(t, r || [])).next())
                }))
            };
            const u = new o["a"](s);
            class h extends i["a"] {
                static isForkEvent(t) {
                    return !(!t || !t._isForkEvent)
                }
            }
            class f {
                constructor() {
                    u.checkAbstract(new.target, f), Object(i["d"])(this, "_isProvider", !0)
                }
                getFeeData() {
                    return a(this, void 0, void 0, (function*() {
                        const {
                            block: t,
                            gasPrice: r
                        } = yield Object(i["f"])({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch(t => null)
                        });
                        let e = null,
                            o = null;
                        return t && t.baseFeePerGas && (o = n["a"].from("2500000000"), e = t.baseFeePerGas.mul(2).add(o)), {
                            maxFeePerGas: e,
                            maxPriorityFeePerGas: o,
                            gasPrice: r
                        }
                    }))
                }
                addListener(t, r) {
                    return this.on(t, r)
                }
                removeListener(t, r) {
                    return this.off(t, r)
                }
                static isProvider(t) {
                    return !(!t || !t._isProvider)
                }
            }
        },
        f002: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return qt
            })), e.d(r, "a", (function() {
                return Bt
            })), e.d(r, "g", (function() {
                return zt
            })), e.d(r, "f", (function() {
                return Gt
            })), e.d(r, "c", (function() {
                return Kt
            })), e.d(r, "e", (function() {
                return Vt
            })), e.d(r, "d", (function() {
                return Zt
            }));
            var n = e("2cf2");
            const i = "logger/5.6.0";
            let o = !1,
                s = !1;
            const a = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let u = a["default"],
                h = null;

            function f() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }
            const l = f();
            var c, d;
            (function(t) {
                t["DEBUG"] = "DEBUG", t["INFO"] = "INFO", t["WARNING"] = "WARNING", t["ERROR"] = "ERROR", t["OFF"] = "OFF"
            })(c || (c = {})),
            function(t) {
                t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR", t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED", t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION", t["NETWORK_ERROR"] = "NETWORK_ERROR", t["SERVER_ERROR"] = "SERVER_ERROR", t["TIMEOUT"] = "TIMEOUT", t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN", t["NUMERIC_FAULT"] = "NUMERIC_FAULT", t["MISSING_NEW"] = "MISSING_NEW", t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT", t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT", t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT", t["CALL_EXCEPTION"] = "CALL_EXCEPTION", t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS", t["NONCE_EXPIRED"] = "NONCE_EXPIRED", t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED", t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT", t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"
            }(d || (d = {}));
            const p = "0123456789abcdef";
            class m {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == a[e] && this.throwArgumentError("invalid log level name", "logLevel", t), u > a[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(m.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(m.levels.INFO, t)
                }
                warn(...t) {
                    this._log(m.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (s) return this.makeError("censored error", r, {});
                    r || (r = m.errors.UNKNOWN_ERROR), e || (e = {});
                    const n = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += p[r[t] >> 4], e += p[15 & r[t]];
                                n.push(t + "=Uint8Array(0x" + e + ")")
                            } else n.push(t + "=" + JSON.stringify(r))
                        } catch (a) {
                            n.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), n.push("code=" + r), n.push("version=" + this.version);
                    const i = t;
                    let o = "";
                    switch (r) {
                        case d.NUMERIC_FAULT:
                            {
                                o = "NUMERIC_FAULT";
                                const r = t;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        o += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        o += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        o += "-unbound-result";
                                        break
                                }
                                break
                            }
                        case d.CALL_EXCEPTION:
                        case d.INSUFFICIENT_FUNDS:
                        case d.MISSING_NEW:
                        case d.NONCE_EXPIRED:
                        case d.REPLACEMENT_UNDERPRICED:
                        case d.TRANSACTION_REPLACED:
                        case d.UNPREDICTABLE_GAS_LIMIT:
                            o = r;
                            break
                    }
                    o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    const a = new Error(t);
                    return a.reason = i, a.code = r, Object.keys(e).forEach((function(t) {
                        a[t] = e[t]
                    })), a
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, m.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, n) {
                    t || this.throwError(r, e, n)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: l
                    })
                }
                checkSafeUint53(t, r) {
                    "number" === typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, m.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, m.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return h || (h = new m(i)), h
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), o) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    s = !!t, o = !!r
                }
                static setLogLevel(t) {
                    const r = a[t.toLowerCase()];
                    null != r ? u = r : m.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new m(t)
                }
            }
            m.errors = d, m.levels = c;
            const g = "bytes/5.6.1",
                v = new m(g);

            function y(t) {
                return !!t.toHexString
            }

            function b(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return b(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function w(t) {
                return S(t) && !(t.length % 2) || E(t)
            }

            function M(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function E(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!M(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    if (!M(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function _(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    v.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    while (t) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), b(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), y(t) && (t = t.toHexString()), S(t)) {
                    let e = t.substring(2);
                    e.length % 2 && ("left" === r.hexPad ? e = "0" + e : "right" === r.hexPad ? e += "0" : v.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) n.push(parseInt(e.substring(t, t + 2), 16));
                    return b(new Uint8Array(n))
                }
                return E(t) ? b(new Uint8Array(t)) : v.throwArgumentError("invalid arrayify value", "value", t)
            }

            function A(t) {
                const r = t.map(t => _(t)),
                    e = r.reduce((t, r) => t + r.length, 0),
                    n = new Uint8Array(e);
                return r.reduce((t, r) => (n.set(r, t), t + r.length), 0), b(n)
            }

            function N(t, r) {
                t = _(t), t.length > r && v.throwArgumentError("value out of range", "value", arguments[0]);
                const e = new Uint8Array(r);
                return e.set(t, r - t.length), b(e)
            }

            function S(t, r) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }
            const x = "0123456789abcdef";

            function I(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    v.checkSafeUint53(t, "invalid hexlify value");
                    let r = "";
                    while (t) r = x[15 & t] + r, t = Math.floor(t / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" === typeof t) return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), y(t)) return t.toHexString();
                if (S(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : v.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (E(t)) {
                    let r = "0x";
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e];
                        r += x[(240 & n) >> 4] + x[15 & n]
                    }
                    return r
                }
                return v.throwArgumentError("invalid hexlify value", "value", t)
            }

            function O(t, r, e) {
                return "string" !== typeof t ? t = I(t) : (!S(t) || t.length % 2) && v.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
            }

            function R(t, r) {
                "string" !== typeof t ? t = I(t) : S(t) || v.throwArgumentError("invalid hex string", "value", t), t.length > 2 * r + 2 && v.throwArgumentError("value out of range", "value", arguments[1]);
                while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
                return t
            }

            function P(t) {
                const r = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (w(t)) {
                    let e = _(t);
                    64 === e.length ? (r.v = 27 + (e[32] >> 7), e[32] &= 127, r.r = I(e.slice(0, 32)), r.s = I(e.slice(32, 64))) : 65 === e.length ? (r.r = I(e.slice(0, 32)), r.s = I(e.slice(32, 64)), r.v = e[64]) : v.throwArgumentError("invalid signature string", "signature", t), r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : v.throwArgumentError("signature invalid v byte", "signature", t)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (e[32] |= 128), r._vs = I(e.slice(32, 64))
                } else {
                    if (r.r = t.r, r.s = t.s, r.v = t.v, r.recoveryParam = t.recoveryParam, r._vs = t._vs, null != r._vs) {
                        const e = N(_(r._vs), 32);
                        r._vs = I(e);
                        const n = e[0] >= 128 ? 1 : 0;
                        null == r.recoveryParam ? r.recoveryParam = n : r.recoveryParam !== n && v.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), e[0] &= 127;
                        const i = I(e);
                        null == r.s ? r.s = i : r.s !== i && v.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == r.recoveryParam) null == r.v ? v.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
                    else if (null == r.v) r.v = 27 + r.recoveryParam;
                    else {
                        const e = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
                        r.recoveryParam !== e && v.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != r.r && S(r.r) ? r.r = R(r.r, 32) : v.throwArgumentError("signature missing or invalid r", "signature", t), null != r.s && S(r.s) ? r.s = R(r.s, 32) : v.throwArgumentError("signature missing or invalid s", "signature", t);
                    const e = _(r.s);
                    e[0] >= 128 && v.throwArgumentError("signature s out of range", "signature", t), r.recoveryParam && (e[0] |= 128);
                    const n = I(e);
                    r._vs && (S(r._vs) || v.throwArgumentError("signature invalid _vs", "signature", t), r._vs = R(r._vs, 32)), null == r._vs ? r._vs = n : r._vs !== n && v.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return r.yParityAndS = r._vs, r.compact = r.r + r.yParityAndS.substring(2), r
            }
            var T = e("09f5"),
                U = e.n(T);
            const k = "bignumber/5.6.0";
            var C = U.a.BN;
            const j = new m(k),
                F = {},
                L = 9007199254740991;
            let D = !1;
            class q {
                constructor(t, r) {
                    j.checkNew(new.target, q), t !== F && j.throwError("cannot call constructor directly; use BigNumber.from", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return z(G(this).fromTwos(t))
                }
                toTwos(t) {
                    return z(G(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? q.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return z(G(this).add(G(t)))
                }
                sub(t) {
                    return z(G(this).sub(G(t)))
                }
                div(t) {
                    const r = q.from(t);
                    return r.isZero() && K("division-by-zero", "div"), z(G(this).div(G(t)))
                }
                mul(t) {
                    return z(G(this).mul(G(t)))
                }
                mod(t) {
                    const r = G(t);
                    return r.isNeg() && K("division-by-zero", "mod"), z(G(this).umod(r))
                }
                pow(t) {
                    const r = G(t);
                    return r.isNeg() && K("negative-power", "pow"), z(G(this).pow(r))
                }
                and(t) {
                    const r = G(t);
                    return (this.isNegative() || r.isNeg()) && K("unbound-bitwise-result", "and"), z(G(this).and(r))
                }
                or(t) {
                    const r = G(t);
                    return (this.isNegative() || r.isNeg()) && K("unbound-bitwise-result", "or"), z(G(this).or(r))
                }
                xor(t) {
                    const r = G(t);
                    return (this.isNegative() || r.isNeg()) && K("unbound-bitwise-result", "xor"), z(G(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && K("negative-width", "mask"), z(G(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && K("negative-width", "shl"), z(G(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && K("negative-width", "shr"), z(G(this).shrn(t))
                }
                eq(t) {
                    return G(this).eq(G(t))
                }
                lt(t) {
                    return G(this).lt(G(t))
                }
                lte(t) {
                    return G(this).lte(G(t))
                }
                gt(t) {
                    return G(this).gt(G(t))
                }
                gte(t) {
                    return G(this).gte(G(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return G(this).isZero()
                }
                toNumber() {
                    try {
                        return G(this).toNumber()
                    } catch (t) {
                        K("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return j.throwError("this platform does not support BigInt", m.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? D || (D = !0, j.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? j.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", m.errors.UNEXPECTED_ARGUMENT, {}) : j.throwError("BigNumber.toString does not accept parameters", m.errors.UNEXPECTED_ARGUMENT, {})), G(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof q) return t;
                    if ("string" === typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new q(F, B(t)) : t.match(/^-?[0-9]+$/) ? new q(F, B(new C(t))) : j.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" === typeof t) return t % 1 && K("underflow", "BigNumber.from", t), (t >= L || t <= -L) && K("overflow", "BigNumber.from", t), q.from(String(t));
                    const r = t;
                    if ("bigint" === typeof r) return q.from(r.toString());
                    if (E(r)) return q.from(I(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" === typeof t) return q.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" === typeof t && (S(t) || "-" === t[0] && S(t.substring(1)))) return q.from(t)
                        }
                    return j.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function B(t) {
                if ("string" !== typeof t) return B(t.toString(16));
                if ("-" === t[0]) return t = t.substring(1), "-" === t[0] && j.throwArgumentError("invalid hex", "value", t), t = B(t), "0x00" === t ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                t.length % 2 && (t = "0x0" + t.substring(2));
                while (t.length > 4 && "0x00" === t.substring(0, 4)) t = "0x" + t.substring(4);
                return t
            }

            function z(t) {
                return q.from(B(t))
            }

            function G(t) {
                const r = q.from(t).toHexString();
                return "-" === r[0] ? new C("-" + r.substring(3), 16) : new C(r.substring(2), 16)
            }

            function K(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), j.throwError(t, m.errors.NUMERIC_FAULT, n)
            }

            function V(t) {
                return new C(t, 36).toString(16)
            }
            const Z = "strings/5.6.0",
                X = new m(Z);
            var J, W;

            function H(t, r, e, n, i) {
                return X.throwArgumentError(`invalid codepoint at offset ${r}; ${t}`, "bytes", e)
            }

            function $(t, r, e, n, i) {
                if (t === W.BAD_PREFIX || t === W.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let n = r + 1; n < e.length; n++) {
                        if (e[n] >> 6 !== 2) break;
                        t++
                    }
                    return t
                }
                return t === W.OVERRUN ? e.length - r - 1 : 0
            }

            function Y(t, r, e, n, i) {
                return t === W.OVERLONG ? (n.push(i), 0) : (n.push(65533), $(t, r, e, n, i))
            }(function(t) {
                t["current"] = "", t["NFC"] = "NFC", t["NFD"] = "NFD", t["NFKC"] = "NFKC", t["NFKD"] = "NFKD"
            })(J || (J = {})),
            function(t) {
                t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte", t["BAD_PREFIX"] = "bad codepoint prefix", t["OVERRUN"] = "string overrun", t["MISSING_CONTINUE"] = "missing continuation byte", t["OUT_OF_RANGE"] = "out of UTF-8 range", t["UTF16_SURROGATE"] = "UTF-16 surrogate", t["OVERLONG"] = "overlong representation"
            }(W || (W = {}));
            Object.freeze({
                error: H,
                ignore: $,
                replace: Y
            });

            function Q(t, r = J.current) {
                r != J.current && (X.checkNormalize(), t = t.normalize(r));
                let e = [];
                for (let n = 0; n < t.length; n++) {
                    const r = t.charCodeAt(n);
                    if (r < 128) e.push(r);
                    else if (r < 2048) e.push(r >> 6 | 192), e.push(63 & r | 128);
                    else if (55296 == (64512 & r)) {
                        n++;
                        const i = t.charCodeAt(n);
                        if (n >= t.length || 56320 !== (64512 & i)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & r) << 10) + (1023 & i);
                        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)
                    } else e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)
                }
                return _(e)
            }
            var tt = e("4105");
            const rt = "properties/5.6.0";
            new m(rt);

            function et(t, r, e) {
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }
            var nt = e("b7a2");
            const it = "signing-key/5.6.0",
                ot = new m(it);
            let st = null;

            function at() {
                return st || (st = new nt["a"]("secp256k1")), st
            }
            class ut {
                constructor(t) {
                    et(this, "curve", "secp256k1"), et(this, "privateKey", I(t));
                    const r = at().keyFromPrivate(_(this.privateKey));
                    et(this, "publicKey", "0x" + r.getPublic(!1, "hex")), et(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), et(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    const r = at().keyFromPublic(_(this.publicKey)),
                        e = at().keyFromPublic(_(t));
                    return "0x" + r.pub.add(e.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    const r = at().keyFromPrivate(_(this.privateKey)),
                        e = _(t);
                    32 !== e.length && ot.throwArgumentError("bad digest length", "digest", t);
                    const n = r.sign(e, {
                        canonical: !0
                    });
                    return P({
                        recoveryParam: n.recoveryParam,
                        r: R("0x" + n.r.toString(16), 32),
                        s: R("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    const r = at().keyFromPrivate(_(this.privateKey)),
                        e = at().keyFromPublic(_(ht(t)));
                    return R("0x" + r.derive(e.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !(!t || !t._isSigningKey)
                }
            }

            function ht(t, r) {
                const e = _(t);
                if (32 === e.length) {
                    const t = new ut(e);
                    return r ? "0x" + at().keyFromPrivate(e).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === e.length ? r ? I(e) : "0x" + at().keyFromPublic(e).getPublic(!1, "hex") : 65 === e.length ? r ? "0x" + at().keyFromPublic(e).getPublic(!0, "hex") : I(e) : ot.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            var ft = e("3796"),
                lt = e("d457"),
                ct = e("1c55"),
                dt = e.n(ct);

            function pt(t) {
                return "0x" + dt.a.keccak_256(_(t))
            }
            const mt = "rlp/5.6.0";
            new m(mt);
            const gt = "address/5.6.0",
                vt = new m(gt);

            function yt(t) {
                S(t, 20) || vt.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                const r = t.substring(2).split(""),
                    e = new Uint8Array(40);
                for (let i = 0; i < 40; i++) e[i] = r[i].charCodeAt(0);
                const n = _(pt(e));
                for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()), (15 & n[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const bt = 9007199254740991;

            function wt(t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }
            const Mt = {};
            for (let Xt = 0; Xt < 10; Xt++) Mt[String(Xt)] = String(Xt);
            for (let Xt = 0; Xt < 26; Xt++) Mt[String.fromCharCode(65 + Xt)] = String(10 + Xt);
            const Et = Math.floor(wt(bt));

            function _t(t) {
                t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
                let r = t.split("").map(t => Mt[t]).join("");
                while (r.length >= Et) {
                    let t = r.substring(0, Et);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let e = String(98 - parseInt(r, 10) % 97);
                while (e.length < 2) e = "0" + e;
                return e
            }

            function At(t) {
                let r = null;
                if ("string" !== typeof t && vt.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = yt(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && vt.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    t.substring(2, 4) !== _t(t) && vt.throwArgumentError("bad icap checksum", "address", t), r = V(t.substring(4));
                    while (r.length < 40) r = "0" + r;
                    r = yt("0x" + r)
                } else vt.throwArgumentError("invalid address", "address", t);
                return r
            }
            const Nt = "transactions/5.6.0";
            new m(Nt);
            var St;
            (function(t) {
                t[t["legacy"] = 0] = "legacy", t[t["eip2930"] = 1] = "eip2930", t[t["eip1559"] = 2] = "eip1559"
            })(St || (St = {}));

            function xt(t) {
                const r = ht(t);
                return At(O(pt(O(r, 1)), 12))
            }
            var It = e("5605");
            const Ot = "hdnode/5.6.0",
                Rt = new m(Ot),
                Pt = q.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                Tt = Q("Bitcoin seed"),
                Ut = 2147483648;

            function kt(t) {
                return (1 << t) - 1 << 8 - t
            }

            function Ct(t) {
                return (1 << t) - 1
            }

            function jt(t) {
                return R(I(t), 32)
            }

            function Ft(t) {
                return n["a"].encode(A([t, O(Object(ft["c"])(Object(ft["c"])(t)), 0, 4)]))
            }

            function Lt(t) {
                if (null == t) return It["a"]["en"];
                if ("string" === typeof t) {
                    const r = It["a"][t];
                    return null == r && Rt.throwArgumentError("unknown locale", "wordlist", t), r
                }
                return t
            }
            const Dt = {},
                qt = "m/44'/60'/0'/0/0";
            class Bt {
                constructor(t, r, e, n, i, o, s, a) {
                    if (Rt.checkNew(new.target, Bt), t !== Dt) throw new Error("HDNode constructor cannot be called directly");
                    if (r) {
                        const t = new ut(r);
                        et(this, "privateKey", t.privateKey), et(this, "publicKey", t.compressedPublicKey)
                    } else et(this, "privateKey", null), et(this, "publicKey", I(e));
                    et(this, "parentFingerprint", n), et(this, "fingerprint", O(Object(ft["b"])(Object(ft["c"])(this.publicKey)), 0, 4)), et(this, "address", xt(this.publicKey)), et(this, "chainCode", i), et(this, "index", o), et(this, "depth", s), null == a ? (et(this, "mnemonic", null), et(this, "path", null)) : "string" === typeof a ? (et(this, "mnemonic", null), et(this, "path", a)) : (et(this, "mnemonic", a), et(this, "path", a.path))
                }
                get extendedKey() {
                    if (this.depth >= 256) throw new Error("Depth too large!");
                    return Ft(A([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", I(this.depth), this.parentFingerprint, R(I(this.index), 4), this.chainCode, null != this.privateKey ? A(["0x00", this.privateKey]) : this.publicKey]))
                }
                neuter() {
                    return new Bt(Dt, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path)
                }
                _derive(t) {
                    if (t > 4294967295) throw new Error("invalid index - " + String(t));
                    let r = this.path;
                    r && (r += "/" + (t & ~Ut));
                    const e = new Uint8Array(37);
                    if (t & Ut) {
                        if (!this.privateKey) throw new Error("cannot derive child of neutered node");
                        e.set(_(this.privateKey), 1), r && (r += "'")
                    } else e.set(_(this.publicKey));
                    for (let f = 24; f >= 0; f -= 8) e[33 + (f >> 3)] = t >> 24 - f & 255;
                    const n = _(Object(ft["a"])(lt["a"].sha512, this.chainCode, e)),
                        i = n.slice(0, 32),
                        o = n.slice(32);
                    let s = null,
                        a = null;
                    if (this.privateKey) s = jt(q.from(i).add(this.privateKey).mod(Pt));
                    else {
                        const t = new ut(I(i));
                        a = t._addPoint(this.publicKey)
                    }
                    let u = r;
                    const h = this.mnemonic;
                    return h && (u = Object.freeze({
                        phrase: h.phrase,
                        path: r,
                        locale: h.locale || "en"
                    })), new Bt(Dt, s, a, this.fingerprint, jt(o), t, this.depth + 1, u)
                }
                derivePath(t) {
                    const r = t.split("/");
                    if (0 === r.length || "m" === r[0] && 0 !== this.depth) throw new Error("invalid path - " + t);
                    "m" === r[0] && r.shift();
                    let e = this;
                    for (let n = 0; n < r.length; n++) {
                        const t = r[n];
                        if (t.match(/^[0-9]+'$/)) {
                            const r = parseInt(t.substring(0, t.length - 1));
                            if (r >= Ut) throw new Error("invalid path index - " + t);
                            e = e._derive(Ut + r)
                        } else {
                            if (!t.match(/^[0-9]+$/)) throw new Error("invalid path component - " + t); {
                                const r = parseInt(t);
                                if (r >= Ut) throw new Error("invalid path index - " + t);
                                e = e._derive(r)
                            }
                        }
                    }
                    return e
                }
                static _fromSeed(t, r) {
                    const e = _(t);
                    if (e.length < 16 || e.length > 64) throw new Error("invalid seed");
                    const n = _(Object(ft["a"])(lt["a"].sha512, Tt, e));
                    return new Bt(Dt, jt(n.slice(0, 32)), null, "0x00000000", jt(n.slice(32)), 0, 0, r)
                }
                static fromMnemonic(t, r, e) {
                    return e = Lt(e), t = Kt(Gt(t, e), e), Bt._fromSeed(zt(t, r), {
                        phrase: t,
                        path: "m",
                        locale: e.locale
                    })
                }
                static fromSeed(t) {
                    return Bt._fromSeed(t, null)
                }
                static fromExtendedKey(t) {
                    const r = n["a"].decode(t);
                    82 === r.length && Ft(r.slice(0, 78)) === t || Rt.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
                    const e = r[4],
                        i = I(r.slice(5, 9)),
                        o = parseInt(I(r.slice(9, 13)).substring(2), 16),
                        s = I(r.slice(13, 45)),
                        a = r.slice(45, 78);
                    switch (I(r.slice(0, 4))) {
                        case "0x0488b21e":
                        case "0x043587cf":
                            return new Bt(Dt, null, I(a), i, s, o, e, null);
                        case "0x0488ade4":
                        case "0x04358394 ":
                            if (0 !== a[0]) break;
                            return new Bt(Dt, I(a.slice(1)), null, i, s, o, e, null)
                    }
                    return Rt.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
                }
            }

            function zt(t, r) {
                r || (r = "");
                const e = Q("mnemonic" + r, J.NFKD);
                return Object(tt["a"])(Q(t, J.NFKD), e, 2048, 64, "sha512")
            }

            function Gt(t, r) {
                r = Lt(r), Rt.checkNormalize();
                const e = r.split(t);
                if (e.length % 3 !== 0) throw new Error("invalid mnemonic");
                const n = _(new Uint8Array(Math.ceil(11 * e.length / 8)));
                let i = 0;
                for (let h = 0; h < e.length; h++) {
                    let t = r.getWordIndex(e[h].normalize("NFKD"));
                    if (-1 === t) throw new Error("invalid mnemonic");
                    for (let r = 0; r < 11; r++) t & 1 << 10 - r && (n[i >> 3] |= 1 << 7 - i % 8), i++
                }
                const o = 32 * e.length / 3,
                    s = e.length / 3,
                    a = kt(s),
                    u = _(Object(ft["c"])(n.slice(0, o / 8)))[0] & a;
                if (u !== (n[n.length - 1] & a)) throw new Error("invalid checksum");
                return I(n.slice(0, o / 8))
            }

            function Kt(t, r) {
                if (r = Lt(r), t = _(t), t.length % 4 !== 0 || t.length < 16 || t.length > 32) throw new Error("invalid entropy");
                const e = [0];
                let n = 11;
                for (let s = 0; s < t.length; s++) n > 8 ? (e[e.length - 1] <<= 8, e[e.length - 1] |= t[s], n -= 8) : (e[e.length - 1] <<= n, e[e.length - 1] |= t[s] >> 8 - n, e.push(t[s] & Ct(8 - n)), n += 3);
                const i = t.length / 4,
                    o = _(Object(ft["c"])(t))[0] & kt(i);
                return e[e.length - 1] <<= i, e[e.length - 1] |= o >> 8 - i, r.join(e.map(t => r.getWord(t)))
            }

            function Vt(t, r) {
                try {
                    return Gt(t, r), !0
                } catch (e) {}
                return !1
            }

            function Zt(t) {
                return ("number" !== typeof t || t < 0 || t >= Ut || t % 1) && Rt.throwArgumentError("invalid account index", "index", t), `m/44'/60'/${t}'/0/0`
            }
        },
        f179: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return In
            })), e.d(r, "b", (function() {
                return On
            })), e.d(r, "c", (function() {
                return Rn
            }));
            const n = "logger/5.7.0";
            let i = !1,
                o = !1;
            const s = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let a = s["default"],
                u = null;

            function h() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }
            const f = h();
            var l, c;
            (function(t) {
                t["DEBUG"] = "DEBUG", t["INFO"] = "INFO", t["WARNING"] = "WARNING", t["ERROR"] = "ERROR", t["OFF"] = "OFF"
            })(l || (l = {})),
            function(t) {
                t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR", t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED", t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION", t["NETWORK_ERROR"] = "NETWORK_ERROR", t["SERVER_ERROR"] = "SERVER_ERROR", t["TIMEOUT"] = "TIMEOUT", t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN", t["NUMERIC_FAULT"] = "NUMERIC_FAULT", t["MISSING_NEW"] = "MISSING_NEW", t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT", t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT", t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT", t["CALL_EXCEPTION"] = "CALL_EXCEPTION", t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS", t["NONCE_EXPIRED"] = "NONCE_EXPIRED", t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED", t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT", t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED", t["ACTION_REJECTED"] = "ACTION_REJECTED"
            }(c || (c = {}));
            const d = "0123456789abcdef";
            class p {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == s[e] && this.throwArgumentError("invalid log level name", "logLevel", t), a > s[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(p.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(p.levels.INFO, t)
                }
                warn(...t) {
                    this._log(p.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (o) return this.makeError("censored error", r, {});
                    r || (r = p.errors.UNKNOWN_ERROR), e || (e = {});
                    const n = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += d[r[t] >> 4], e += d[15 & r[t]];
                                n.push(t + "=Uint8Array(0x" + e + ")")
                            } else n.push(t + "=" + JSON.stringify(r))
                        } catch (a) {
                            n.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), n.push("code=" + r), n.push("version=" + this.version);
                    const i = t;
                    let s = "";
                    switch (r) {
                        case c.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                const r = t;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result";
                                        break
                                }
                                break
                            }
                        case c.CALL_EXCEPTION:
                        case c.INSUFFICIENT_FUNDS:
                        case c.MISSING_NEW:
                        case c.NONCE_EXPIRED:
                        case c.REPLACEMENT_UNDERPRICED:
                        case c.TRANSACTION_REPLACED:
                        case c.UNPREDICTABLE_GAS_LIMIT:
                            s = r;
                            break
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    const a = new Error(t);
                    return a.reason = i, a.code = r, Object.keys(e).forEach((function(t) {
                        a[t] = e[t]
                    })), a
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, p.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, n) {
                    t || this.throwError(r, e, n)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(t, r) {
                    "number" === typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, p.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, p.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return u || (u = new p(n)), u
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), i) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!t, i = !!r
                }
                static setLogLevel(t) {
                    const r = s[t.toLowerCase()];
                    null != r ? a = r : p.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new p(t)
                }
            }
            p.errors = c, p.levels = l;
            const m = "bytes/5.7.0",
                g = new p(m);

            function v(t) {
                return !!t.toHexString
            }

            function y(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return y(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function b(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function w(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!b(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    if (!b(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function M(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    g.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    while (t) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), y(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), v(t) && (t = t.toHexString()), _(t)) {
                    let e = t.substring(2);
                    e.length % 2 && ("left" === r.hexPad ? e = "0" + e : "right" === r.hexPad ? e += "0" : g.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) n.push(parseInt(e.substring(t, t + 2), 16));
                    return y(new Uint8Array(n))
                }
                return w(t) ? y(new Uint8Array(t)) : g.throwArgumentError("invalid arrayify value", "value", t)
            }

            function E(t) {
                const r = t.map(t => M(t)),
                    e = r.reduce((t, r) => t + r.length, 0),
                    n = new Uint8Array(e);
                return r.reduce((t, r) => (n.set(r, t), t + r.length), 0), y(n)
            }

            function _(t, r) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }
            const A = "0123456789abcdef";

            function N(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    g.checkSafeUint53(t, "invalid hexlify value");
                    let r = "";
                    while (t) r = A[15 & t] + r, t = Math.floor(t / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" === typeof t) return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), v(t)) return t.toHexString();
                if (_(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : g.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (w(t)) {
                    let r = "0x";
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e];
                        r += A[(240 & n) >> 4] + A[15 & n]
                    }
                    return r
                }
                return g.throwArgumentError("invalid hexlify value", "value", t)
            }

            function S(t, r, e) {
                return "string" !== typeof t ? t = N(t) : (!_(t) || t.length % 2) && g.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
            }

            function x(t) {
                let r = "0x";
                return t.forEach(t => {
                    r += N(t).substring(2)
                }), r
            }

            function I(t, r) {
                "string" !== typeof t ? t = N(t) : _(t) || g.throwArgumentError("invalid hex string", "value", t), t.length > 2 * r + 2 && g.throwArgumentError("value out of range", "value", arguments[1]);
                while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
                return t
            }
            var O = e("399f"),
                R = e.n(O);
            const P = "bignumber/5.7.0";
            var T = R.a.BN;
            const U = new p(P),
                k = {},
                C = 9007199254740991;
            let j = !1;
            class F {
                constructor(t, r) {
                    t !== k && U.throwError("cannot call constructor directly; use BigNumber.from", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return D(q(this).fromTwos(t))
                }
                toTwos(t) {
                    return D(q(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? F.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return D(q(this).add(q(t)))
                }
                sub(t) {
                    return D(q(this).sub(q(t)))
                }
                div(t) {
                    const r = F.from(t);
                    return r.isZero() && B("division-by-zero", "div"), D(q(this).div(q(t)))
                }
                mul(t) {
                    return D(q(this).mul(q(t)))
                }
                mod(t) {
                    const r = q(t);
                    return r.isNeg() && B("division-by-zero", "mod"), D(q(this).umod(r))
                }
                pow(t) {
                    const r = q(t);
                    return r.isNeg() && B("negative-power", "pow"), D(q(this).pow(r))
                }
                and(t) {
                    const r = q(t);
                    return (this.isNegative() || r.isNeg()) && B("unbound-bitwise-result", "and"), D(q(this).and(r))
                }
                or(t) {
                    const r = q(t);
                    return (this.isNegative() || r.isNeg()) && B("unbound-bitwise-result", "or"), D(q(this).or(r))
                }
                xor(t) {
                    const r = q(t);
                    return (this.isNegative() || r.isNeg()) && B("unbound-bitwise-result", "xor"), D(q(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && B("negative-width", "mask"), D(q(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && B("negative-width", "shl"), D(q(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && B("negative-width", "shr"), D(q(this).shrn(t))
                }
                eq(t) {
                    return q(this).eq(q(t))
                }
                lt(t) {
                    return q(this).lt(q(t))
                }
                lte(t) {
                    return q(this).lte(q(t))
                }
                gt(t) {
                    return q(this).gt(q(t))
                }
                gte(t) {
                    return q(this).gte(q(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return q(this).isZero()
                }
                toNumber() {
                    try {
                        return q(this).toNumber()
                    } catch (t) {
                        B("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return U.throwError("this platform does not support BigInt", p.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? j || (j = !0, U.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? U.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", p.errors.UNEXPECTED_ARGUMENT, {}) : U.throwError("BigNumber.toString does not accept parameters", p.errors.UNEXPECTED_ARGUMENT, {})), q(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof F) return t;
                    if ("string" === typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new F(k, L(t)) : t.match(/^-?[0-9]+$/) ? new F(k, L(new T(t))) : U.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" === typeof t) return t % 1 && B("underflow", "BigNumber.from", t), (t >= C || t <= -C) && B("overflow", "BigNumber.from", t), F.from(String(t));
                    const r = t;
                    if ("bigint" === typeof r) return F.from(r.toString());
                    if (w(r)) return F.from(N(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" === typeof t) return F.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" === typeof t && (_(t) || "-" === t[0] && _(t.substring(1)))) return F.from(t)
                        }
                    return U.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function L(t) {
                if ("string" !== typeof t) return L(t.toString(16));
                if ("-" === t[0]) return t = t.substring(1), "-" === t[0] && U.throwArgumentError("invalid hex", "value", t), t = L(t), "0x00" === t ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                t.length % 2 && (t = "0x0" + t.substring(2));
                while (t.length > 4 && "0x00" === t.substring(0, 4)) t = "0x" + t.substring(4);
                return t
            }

            function D(t) {
                return F.from(L(t))
            }

            function q(t) {
                const r = F.from(t).toHexString();
                return "-" === r[0] ? new T("-" + r.substring(3), 16) : new T(r.substring(2), 16)
            }

            function B(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), U.throwError(t, p.errors.NUMERIC_FAULT, n)
            }

            function z(t) {
                return new T(t, 36).toString(16)
            }
            const G = "properties/5.7.0";
            const K = new p(G);

            function V(t, r, e) {
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }

            function Z(t, r) {
                for (let e = 0; e < 32; e++) {
                    if (t[r]) return t[r];
                    if (!t.prototype || "object" !== typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }
            const X = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function J(t) {
                if (void 0 === t || null === t || X[typeof t]) return !0;
                if (Array.isArray(t) || "object" === typeof t) {
                    if (!Object.isFrozen(t)) return !1;
                    const e = Object.keys(t);
                    for (let n = 0; n < e.length; n++) {
                        let i = null;
                        try {
                            i = t[e[n]]
                        } catch (r) {
                            continue
                        }
                        if (!J(i)) return !1
                    }
                    return !0
                }
                return K.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function W(t) {
                if (J(t)) return t;
                if (Array.isArray(t)) return Object.freeze(t.map(t => H(t)));
                if ("object" === typeof t) {
                    const r = {};
                    for (const e in t) {
                        const n = t[e];
                        void 0 !== n && V(r, e, H(n))
                    }
                    return r
                }
                return K.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function H(t) {
                return W(t)
            }
            class $ {
                constructor(t) {
                    for (const r in t) this[r] = H(t[r])
                }
            }
            const Y = "abi/5.7.0",
                Q = new p(Y);

            function tt(t) {
                const r = [],
                    e = function(t, n) {
                        if (Array.isArray(n))
                            for (let o in n) {
                                const s = t.slice();
                                s.push(o);
                                try {
                                    e(s, n[o])
                                } catch (i) {
                                    r.push({
                                        path: s,
                                        error: i
                                    })
                                }
                            }
                    };
                return e([], t), r
            }
            class rt {
                constructor(t, r, e, n) {
                    this.name = t, this.type = r, this.localName = e, this.dynamic = n
                }
                _throwError(t, r) {
                    Q.throwArgumentError(t, this.localName, r)
                }
            }
            class et {
                constructor(t) {
                    V(this, "wordSize", t || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(t)
                }
                get data() {
                    return x(this._data)
                }
                get length() {
                    return this._dataLength
                }
                _writeData(t) {
                    return this._data.push(t), this._dataLength += t.length, t.length
                }
                appendWriter(t) {
                    return this._writeData(E(t._data))
                }
                writeBytes(t) {
                    let r = M(t);
                    const e = r.length % this.wordSize;
                    return e && (r = E([r, this._padding.slice(e)])), this._writeData(r)
                }
                _getValue(t) {
                    let r = M(F.from(t));
                    return r.length > this.wordSize && Q.throwError("value out-of-bounds", p.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: r.length
                    }), r.length % this.wordSize && (r = E([this._padding.slice(r.length % this.wordSize), r])), r
                }
                writeValue(t) {
                    return this._writeData(this._getValue(t))
                }
                writeUpdatableValue() {
                    const t = this._data.length;
                    return this._data.push(this._padding), this._dataLength += this.wordSize, r => {
                        this._data[t] = this._getValue(r)
                    }
                }
            }
            class nt {
                constructor(t, r, e, n) {
                    V(this, "_data", M(t)), V(this, "wordSize", r || 32), V(this, "_coerceFunc", e), V(this, "allowLoose", n), this._offset = 0
                }
                get data() {
                    return N(this._data)
                }
                get consumed() {
                    return this._offset
                }
                static coerce(t, r) {
                    let e = t.match("^u?int([0-9]+)$");
                    return e && parseInt(e[1]) <= 48 && (r = r.toNumber()), r
                }
                coerce(t, r) {
                    return this._coerceFunc ? this._coerceFunc(t, r) : nt.coerce(t, r)
                }
                _peekBytes(t, r, e) {
                    let n = Math.ceil(r / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && e && this._offset + r <= this._data.length ? n = r : Q.throwError("data out-of-bounds", p.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })), this._data.slice(this._offset, this._offset + n)
                }
                subReader(t) {
                    return new nt(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
                }
                readBytes(t, r) {
                    let e = this._peekBytes(0, t, !!r);
                    return this._offset += e.length, e.slice(0, t)
                }
                readValue() {
                    return F.from(this.readBytes(this.wordSize))
                }
            }
            var it = e("1c55"),
                ot = e.n(it);

            function st(t) {
                return "0x" + ot.a.keccak_256(M(t))
            }
            const at = "rlp/5.7.0";
            new p(at);
            const ut = "address/5.7.0",
                ht = new p(ut);

            function ft(t) {
                _(t, 20) || ht.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                const r = t.substring(2).split(""),
                    e = new Uint8Array(40);
                for (let i = 0; i < 40; i++) e[i] = r[i].charCodeAt(0);
                const n = M(st(e));
                for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()), (15 & n[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const lt = 9007199254740991;

            function ct(t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }
            const dt = {};
            for (let Pn = 0; Pn < 10; Pn++) dt[String(Pn)] = String(Pn);
            for (let Pn = 0; Pn < 26; Pn++) dt[String.fromCharCode(65 + Pn)] = String(10 + Pn);
            const pt = Math.floor(ct(lt));

            function mt(t) {
                t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
                let r = t.split("").map(t => dt[t]).join("");
                while (r.length >= pt) {
                    let t = r.substring(0, pt);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let e = String(98 - parseInt(r, 10) % 97);
                while (e.length < 2) e = "0" + e;
                return e
            }

            function gt(t) {
                let r = null;
                if ("string" !== typeof t && ht.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = ft(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && ht.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    t.substring(2, 4) !== mt(t) && ht.throwArgumentError("bad icap checksum", "address", t), r = z(t.substring(4));
                    while (r.length < 40) r = "0" + r;
                    r = ft("0x" + r)
                } else ht.throwArgumentError("invalid address", "address", t);
                return r
            }
            const vt = "strings/5.7.0",
                yt = new p(vt);
            var bt, wt;

            function Mt(t, r, e, n, i) {
                return yt.throwArgumentError(`invalid codepoint at offset ${r}; ${t}`, "bytes", e)
            }

            function Et(t, r, e, n, i) {
                if (t === wt.BAD_PREFIX || t === wt.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let n = r + 1; n < e.length; n++) {
                        if (e[n] >> 6 !== 2) break;
                        t++
                    }
                    return t
                }
                return t === wt.OVERRUN ? e.length - r - 1 : 0
            }

            function _t(t, r, e, n, i) {
                return t === wt.OVERLONG ? (n.push(i), 0) : (n.push(65533), Et(t, r, e, n, i))
            }(function(t) {
                t["current"] = "", t["NFC"] = "NFC", t["NFD"] = "NFD", t["NFKC"] = "NFKC", t["NFKD"] = "NFKD"
            })(bt || (bt = {})),
            function(t) {
                t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte", t["BAD_PREFIX"] = "bad codepoint prefix", t["OVERRUN"] = "string overrun", t["MISSING_CONTINUE"] = "missing continuation byte", t["OUT_OF_RANGE"] = "out of UTF-8 range", t["UTF16_SURROGATE"] = "UTF-16 surrogate", t["OVERLONG"] = "overlong representation"
            }(wt || (wt = {}));
            const At = Object.freeze({
                error: Mt,
                ignore: Et,
                replace: _t
            });

            function Nt(t, r) {
                null == r && (r = At.error), t = M(t);
                const e = [];
                let n = 0;
                while (n < t.length) {
                    const i = t[n++];
                    if (i >> 7 === 0) {
                        e.push(i);
                        continue
                    }
                    let o = null,
                        s = null;
                    if (192 === (224 & i)) o = 1, s = 127;
                    else if (224 === (240 & i)) o = 2, s = 2047;
                    else {
                        if (240 !== (248 & i)) {
                            n += r(128 === (192 & i) ? wt.UNEXPECTED_CONTINUE : wt.BAD_PREFIX, n - 1, t, e);
                            continue
                        }
                        o = 3, s = 65535
                    }
                    if (n - 1 + o >= t.length) {
                        n += r(wt.OVERRUN, n - 1, t, e);
                        continue
                    }
                    let a = i & (1 << 8 - o - 1) - 1;
                    for (let u = 0; u < o; u++) {
                        let i = t[n];
                        if (128 != (192 & i)) {
                            n += r(wt.MISSING_CONTINUE, n, t, e), a = null;
                            break
                        }
                        a = a << 6 | 63 & i, n++
                    }
                    null !== a && (a > 1114111 ? n += r(wt.OUT_OF_RANGE, n - 1 - o, t, e, a) : a >= 55296 && a <= 57343 ? n += r(wt.UTF16_SURROGATE, n - 1 - o, t, e, a) : a <= s ? n += r(wt.OVERLONG, n - 1 - o, t, e, a) : e.push(a))
                }
                return e
            }

            function St(t, r = bt.current) {
                r != bt.current && (yt.checkNormalize(), t = t.normalize(r));
                let e = [];
                for (let n = 0; n < t.length; n++) {
                    const r = t.charCodeAt(n);
                    if (r < 128) e.push(r);
                    else if (r < 2048) e.push(r >> 6 | 192), e.push(63 & r | 128);
                    else if (55296 == (64512 & r)) {
                        n++;
                        const i = t.charCodeAt(n);
                        if (n >= t.length || 56320 !== (64512 & i)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & r) << 10) + (1023 & i);
                        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)
                    } else e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)
                }
                return M(e)
            }

            function xt(t) {
                return t.map(t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t)))).join("")
            }

            function It(t, r) {
                return xt(Nt(t, r))
            }

            function Ot(t) {
                return st(St(t))
            }
            class Rt extends rt {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(t, r) {
                    try {
                        r = gt(r)
                    } catch (e) {
                        this._throwError(e.message, r)
                    }
                    return t.writeValue(r)
                }
                decode(t) {
                    return gt(I(t.readValue().toHexString(), 20))
                }
            }
            class Pt extends rt {
                constructor(t) {
                    super(t.name, t.type, void 0, t.dynamic), this.coder = t
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(t, r) {
                    return this.coder.encode(t, r)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            }
            const Tt = new p(Y);

            function Ut(t, r, e) {
                let n = null;
                if (Array.isArray(e)) n = e;
                else if (e && "object" === typeof e) {
                    let t = {};
                    n = r.map(r => {
                        const n = r.localName;
                        return n || Tt.throwError("cannot encode object for signature with missing names", p.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: r,
                            value: e
                        }), t[n] && Tt.throwError("cannot encode object for signature with duplicate names", p.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: r,
                            value: e
                        }), t[n] = !0, e[n]
                    })
                } else Tt.throwArgumentError("invalid tuple value", "tuple", e);
                r.length !== n.length && Tt.throwArgumentError("types/value length mismatch", "tuple", e);
                let i = new et(t.wordSize),
                    o = new et(t.wordSize),
                    s = [];
                r.forEach((t, r) => {
                    let e = n[r];
                    if (t.dynamic) {
                        let r = o.length;
                        t.encode(o, e);
                        let n = i.writeUpdatableValue();
                        s.push(t => {
                            n(t + r)
                        })
                    } else t.encode(i, e)
                }), s.forEach(t => {
                    t(i.length)
                });
                let a = t.appendWriter(i);
                return a += t.appendWriter(o), a
            }

            function kt(t, r) {
                let e = [],
                    n = t.subReader(0);
                r.forEach(r => {
                    let i = null;
                    if (r.dynamic) {
                        let e = t.readValue(),
                            s = n.subReader(e.toNumber());
                        try {
                            i = r.decode(s)
                        } catch (o) {
                            if (o.code === p.errors.BUFFER_OVERRUN) throw o;
                            i = o, i.baseType = r.name, i.name = r.localName, i.type = r.type
                        }
                    } else try {
                        i = r.decode(t)
                    } catch (o) {
                        if (o.code === p.errors.BUFFER_OVERRUN) throw o;
                        i = o, i.baseType = r.name, i.name = r.localName, i.type = r.type
                    }
                    void 0 != i && e.push(i)
                });
                const i = r.reduce((t, r) => {
                    const e = r.localName;
                    return e && (t[e] || (t[e] = 0), t[e]++), t
                }, {});
                r.forEach((t, r) => {
                    let n = t.localName;
                    if (!n || 1 !== i[n]) return;
                    if ("length" === n && (n = "_length"), null != e[n]) return;
                    const o = e[r];
                    o instanceof Error ? Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: () => {
                            throw o
                        }
                    }) : e[n] = o
                });
                for (let o = 0; o < e.length; o++) {
                    const t = e[o];
                    t instanceof Error && Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: () => {
                            throw t
                        }
                    })
                }
                return Object.freeze(e)
            }
            class Ct extends rt {
                constructor(t, r, e) {
                    const n = t.type + "[" + (r >= 0 ? r : "") + "]",
                        i = -1 === r || t.dynamic;
                    super("array", n, e, i), this.coder = t, this.length = r
                }
                defaultValue() {
                    const t = this.coder.defaultValue(),
                        r = [];
                    for (let e = 0; e < this.length; e++) r.push(t);
                    return r
                }
                encode(t, r) {
                    Array.isArray(r) || this._throwError("expected array value", r);
                    let e = this.length; - 1 === e && (e = r.length, t.writeValue(r.length)), Tt.checkArgumentCount(r.length, e, "coder array" + (this.localName ? " " + this.localName : ""));
                    let n = [];
                    for (let i = 0; i < r.length; i++) n.push(this.coder);
                    return Ut(t, n, r)
                }
                decode(t) {
                    let r = this.length; - 1 === r && (r = t.readValue().toNumber(), 32 * r > t._data.length && Tt.throwError("insufficient data length", p.errors.BUFFER_OVERRUN, {
                        length: t._data.length,
                        count: r
                    }));
                    let e = [];
                    for (let n = 0; n < r; n++) e.push(new Pt(this.coder));
                    return t.coerce(this.name, kt(t, e))
                }
            }
            class jt extends rt {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(t, r) {
                    return t.writeValue(r ? 1 : 0)
                }
                decode(t) {
                    return t.coerce(this.type, !t.readValue().isZero())
                }
            }
            class Ft extends rt {
                constructor(t, r) {
                    super(t, t, r, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(t, r) {
                    r = M(r);
                    let e = t.writeValue(r.length);
                    return e += t.writeBytes(r), e
                }
                decode(t) {
                    return t.readBytes(t.readValue().toNumber(), !0)
                }
            }
            class Lt extends Ft {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return t.coerce(this.name, N(super.decode(t)))
                }
            }
            class Dt extends rt {
                constructor(t, r) {
                    let e = "bytes" + String(t);
                    super(e, e, r, !1), this.size = t
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(t, r) {
                    let e = M(r);
                    return e.length !== this.size && this._throwError("incorrect data length", r), t.writeBytes(e)
                }
                decode(t) {
                    return t.coerce(this.name, N(t.readBytes(this.size)))
                }
            }
            class qt extends rt {
                constructor(t) {
                    super("null", "", t, !1)
                }
                defaultValue() {
                    return null
                }
                encode(t, r) {
                    return null != r && this._throwError("not null", r), t.writeBytes([])
                }
                decode(t) {
                    return t.readBytes(0), t.coerce(this.name, null)
                }
            }
            const Bt = F.from(-1),
                zt = F.from(0),
                Gt = F.from(1),
                Kt = F.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            class Vt extends rt {
                constructor(t, r, e) {
                    const n = (r ? "int" : "uint") + 8 * t;
                    super(n, n, e, !1), this.size = t, this.signed = r
                }
                defaultValue() {
                    return 0
                }
                encode(t, r) {
                    let e = F.from(r),
                        n = Kt.mask(8 * t.wordSize);
                    if (this.signed) {
                        let t = n.mask(8 * this.size - 1);
                        (e.gt(t) || e.lt(t.add(Gt).mul(Bt))) && this._throwError("value out-of-bounds", r)
                    } else(e.lt(zt) || e.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", r);
                    return e = e.toTwos(8 * this.size).mask(8 * this.size), this.signed && (e = e.fromTwos(8 * this.size).toTwos(8 * t.wordSize)), t.writeValue(e)
                }
                decode(t) {
                    let r = t.readValue().mask(8 * this.size);
                    return this.signed && (r = r.fromTwos(8 * this.size)), t.coerce(this.name, r)
                }
            }
            class Zt extends Ft {
                constructor(t) {
                    super("string", t)
                }
                defaultValue() {
                    return ""
                }
                encode(t, r) {
                    return super.encode(t, St(r))
                }
                decode(t) {
                    return It(super.decode(t))
                }
            }
            class Xt extends rt {
                constructor(t, r) {
                    let e = !1;
                    const n = [];
                    t.forEach(t => {
                        t.dynamic && (e = !0), n.push(t.type)
                    });
                    const i = "tuple(" + n.join(",") + ")";
                    super("tuple", i, r, e), this.coders = t
                }
                defaultValue() {
                    const t = [];
                    this.coders.forEach(r => {
                        t.push(r.defaultValue())
                    });
                    const r = this.coders.reduce((t, r) => {
                        const e = r.localName;
                        return e && (t[e] || (t[e] = 0), t[e]++), t
                    }, {});
                    return this.coders.forEach((e, n) => {
                        let i = e.localName;
                        i && 1 === r[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[n]))
                    }), Object.freeze(t)
                }
                encode(t, r) {
                    return Ut(t, this.coders, r)
                }
                decode(t) {
                    return t.coerce(this.name, kt(t, this.coders))
                }
            }
            const Jt = new p(Y),
                Wt = {};
            let Ht = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                $t = {
                    calldata: !0,
                    memory: !0
                };

            function Yt(t, r) {
                if ("bytes" === t || "string" === t) {
                    if (Ht[r]) return !0
                } else if ("address" === t) {
                    if ("payable" === r) return !0
                } else if ((t.indexOf("[") >= 0 || "tuple" === t) && $t[r]) return !0;
                return (Ht[r] || "payable" === r) && Jt.throwArgumentError("invalid modifier", "name", r), !1
            }

            function Qt(t, r) {
                let e = t;

                function n(r) {
                    Jt.throwArgumentError("unexpected character at position " + r, "param", t)
                }

                function i(t) {
                    let e = {
                        type: "",
                        name: "",
                        parent: t,
                        state: {
                            allowType: !0
                        }
                    };
                    return r && (e.indexed = !1), e
                }
                t = t.replace(/\s/g, " ");
                let o = {
                        type: "",
                        name: "",
                        state: {
                            allowType: !0
                        }
                    },
                    s = o;
                for (let a = 0; a < t.length; a++) {
                    let e = t[a];
                    switch (e) {
                        case "(":
                            s.state.allowType && "" === s.type ? s.type = "tuple" : s.state.allowParams || n(a), s.state.allowType = !1, s.type = pr(s.type), s.components = [i(s)], s = s.components[0];
                            break;
                        case ")":
                            delete s.state, "indexed" === s.name && (r || n(a), s.indexed = !0, s.name = ""), Yt(s.type, s.name) && (s.name = ""), s.type = pr(s.type);
                            let t = s;
                            s = s.parent, s || n(a), delete t.parent, s.state.allowParams = !1, s.state.allowName = !0, s.state.allowArray = !0;
                            break;
                        case ",":
                            delete s.state, "indexed" === s.name && (r || n(a), s.indexed = !0, s.name = ""), Yt(s.type, s.name) && (s.name = ""), s.type = pr(s.type);
                            let o = i(s.parent);
                            s.parent.components.push(o), delete s.parent, s = o;
                            break;
                        case " ":
                            s.state.allowType && "" !== s.type && (s.type = pr(s.type), delete s.state.allowType, s.state.allowName = !0, s.state.allowParams = !0), s.state.allowName && "" !== s.name && ("indexed" === s.name ? (r || n(a), s.indexed && n(a), s.indexed = !0, s.name = "") : Yt(s.type, s.name) ? s.name = "" : s.state.allowName = !1);
                            break;
                        case "[":
                            s.state.allowArray || n(a), s.type += e, s.state.allowArray = !1, s.state.allowName = !1, s.state.readArray = !0;
                            break;
                        case "]":
                            s.state.readArray || n(a), s.type += e, s.state.readArray = !1, s.state.allowArray = !0, s.state.allowName = !0;
                            break;
                        default:
                            s.state.allowType ? (s.type += e, s.state.allowParams = !0, s.state.allowArray = !0) : s.state.allowName ? (s.name += e, delete s.state.allowArray) : s.state.readArray ? s.type += e : n(a)
                    }
                }
                return s.parent && Jt.throwArgumentError("unexpected eof", "param", t), delete o.state, "indexed" === s.name ? (r || n(e.length - 7), s.indexed && n(e.length - 7), s.indexed = !0, s.name = "") : Yt(s.type, s.name) && (s.name = ""), o.type = pr(o.type), o
            }

            function tr(t, r) {
                for (let e in r) V(t, e, r[e])
            }
            const rr = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                er = new RegExp(/^(.*)\[([0-9]*)\]$/);
            class nr {
                constructor(t, r) {
                    t !== Wt && Jt.throwError("use fromString", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "new ParamType()"
                    }), tr(this, r);
                    let e = this.type.match(er);
                    tr(this, e ? {
                        arrayLength: parseInt(e[2] || "-1"),
                        arrayChildren: nr.fromObject({
                            type: e[1],
                            components: this.components
                        }),
                        baseType: "array"
                    } : {
                        arrayLength: null,
                        arrayChildren: null,
                        baseType: null != this.components ? "tuple" : this.type
                    }), this._isParamType = !0, Object.freeze(this)
                }
                format(t) {
                    if (t || (t = rr.sighash), rr[t] || Jt.throwArgumentError("invalid format type", "format", t), t === rr.json) {
                        let r = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" === typeof this.indexed && (r.indexed = this.indexed), this.components && (r.components = this.components.map(r => JSON.parse(r.format(t)))), JSON.stringify(r)
                    }
                    let r = "";
                    return "array" === this.baseType ? (r += this.arrayChildren.format(t), r += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (t !== rr.sighash && (r += this.type), r += "(" + this.components.map(r => r.format(t)).join(t === rr.full ? ", " : ",") + ")") : r += this.type, t !== rr.sighash && (!0 === this.indexed && (r += " indexed"), t === rr.full && this.name && (r += " " + this.name)), r
                }
                static from(t, r) {
                    return "string" === typeof t ? nr.fromString(t, r) : nr.fromObject(t)
                }
                static fromObject(t) {
                    return nr.isParamType(t) ? t : new nr(Wt, {
                        name: t.name || null,
                        type: pr(t.type),
                        indexed: null == t.indexed ? null : !!t.indexed,
                        components: t.components ? t.components.map(nr.fromObject) : null
                    })
                }
                static fromString(t, r) {
                    function e(t) {
                        return nr.fromObject({
                            name: t.name,
                            type: t.type,
                            indexed: t.indexed,
                            components: t.components
                        })
                    }
                    return e(Qt(t, !!r))
                }
                static isParamType(t) {
                    return !(null == t || !t._isParamType)
                }
            }

            function ir(t, r) {
                return yr(t).map(t => nr.fromString(t, r))
            }
            class or {
                constructor(t, r) {
                    t !== Wt && Jt.throwError("use a static from method", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "new Fragment()"
                    }), tr(this, r), this._isFragment = !0, Object.freeze(this)
                }
                static from(t) {
                    return or.isFragment(t) ? t : "string" === typeof t ? or.fromString(t) : or.fromObject(t)
                }
                static fromObject(t) {
                    if (or.isFragment(t)) return t;
                    switch (t.type) {
                        case "function":
                            return lr.fromObject(t);
                        case "event":
                            return sr.fromObject(t);
                        case "constructor":
                            return fr.fromObject(t);
                        case "error":
                            return dr.fromObject(t);
                        case "fallback":
                        case "receive":
                            return null
                    }
                    return Jt.throwArgumentError("invalid fragment object", "value", t)
                }
                static fromString(t) {
                    return t = t.replace(/\s/g, " "), t = t.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " "), t = t.trim(), "event" === t.split(" ")[0] ? sr.fromString(t.substring(5).trim()) : "function" === t.split(" ")[0] ? lr.fromString(t.substring(8).trim()) : "constructor" === t.split("(")[0].trim() ? fr.fromString(t.trim()) : "error" === t.split(" ")[0] ? dr.fromString(t.substring(5).trim()) : Jt.throwArgumentError("unsupported fragment", "value", t)
                }
                static isFragment(t) {
                    return !(!t || !t._isFragment)
                }
            }
            class sr extends or {
                format(t) {
                    if (t || (t = rr.sighash), rr[t] || Jt.throwArgumentError("invalid format type", "format", t), t === rr.json) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(r => JSON.parse(r.format(t)))
                    });
                    let r = "";
                    return t !== rr.sighash && (r += "event "), r += this.name + "(" + this.inputs.map(r => r.format(t)).join(t === rr.full ? ", " : ",") + ") ", t !== rr.sighash && this.anonymous && (r += "anonymous "), r.trim()
                }
                static from(t) {
                    return "string" === typeof t ? sr.fromString(t) : sr.fromObject(t)
                }
                static fromObject(t) {
                    if (sr.isEventFragment(t)) return t;
                    "event" !== t.type && Jt.throwArgumentError("invalid event object", "value", t);
                    const r = {
                        name: gr(t.name),
                        anonymous: t.anonymous,
                        inputs: t.inputs ? t.inputs.map(nr.fromObject) : [],
                        type: "event"
                    };
                    return new sr(Wt, r)
                }
                static fromString(t) {
                    let r = t.match(vr);
                    r || Jt.throwArgumentError("invalid event string", "value", t);
                    let e = !1;
                    return r[3].split(" ").forEach(t => {
                        switch (t.trim()) {
                            case "anonymous":
                                e = !0;
                                break;
                            case "":
                                break;
                            default:
                                Jt.warn("unknown modifier: " + t)
                        }
                    }), sr.fromObject({
                        name: r[1].trim(),
                        anonymous: e,
                        inputs: ir(r[2], !0),
                        type: "event"
                    })
                }
                static isEventFragment(t) {
                    return t && t._isFragment && "event" === t.type
                }
            }

            function ar(t, r) {
                r.gas = null;
                let e = t.split("@");
                return 1 !== e.length ? (e.length > 2 && Jt.throwArgumentError("invalid human-readable ABI signature", "value", t), e[1].match(/^[0-9]+$/) || Jt.throwArgumentError("invalid human-readable ABI signature gas", "value", t), r.gas = F.from(e[1]), e[0]) : t
            }

            function ur(t, r) {
                r.constant = !1, r.payable = !1, r.stateMutability = "nonpayable", t.split(" ").forEach(t => {
                    switch (t.trim()) {
                        case "constant":
                            r.constant = !0;
                            break;
                        case "payable":
                            r.payable = !0, r.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            r.payable = !1, r.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            r.constant = !0, r.stateMutability = "pure";
                            break;
                        case "view":
                            r.constant = !0, r.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + t)
                    }
                })
            }

            function hr(t) {
                let r = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != t.stateMutability ? (r.stateMutability = t.stateMutability, r.constant = "view" === r.stateMutability || "pure" === r.stateMutability, null != t.constant && !!t.constant !== r.constant && Jt.throwArgumentError("cannot have constant function with mutability " + r.stateMutability, "value", t), r.payable = "payable" === r.stateMutability, null != t.payable && !!t.payable !== r.payable && Jt.throwArgumentError("cannot have payable function with mutability " + r.stateMutability, "value", t)) : null != t.payable ? (r.payable = !!t.payable, null != t.constant || r.payable || "constructor" === t.type || Jt.throwArgumentError("unable to determine stateMutability", "value", t), r.constant = !!t.constant, r.constant ? r.stateMutability = "view" : r.stateMutability = r.payable ? "payable" : "nonpayable", r.payable && r.constant && Jt.throwArgumentError("cannot have constant payable function", "value", t)) : null != t.constant ? (r.constant = !!t.constant, r.payable = !r.constant, r.stateMutability = r.constant ? "view" : "payable") : "constructor" !== t.type && Jt.throwArgumentError("unable to determine stateMutability", "value", t), r
            }
            class fr extends or {
                format(t) {
                    if (t || (t = rr.sighash), rr[t] || Jt.throwArgumentError("invalid format type", "format", t), t === rr.json) return JSON.stringify({
                        type: "constructor",
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(r => JSON.parse(r.format(t)))
                    });
                    t === rr.sighash && Jt.throwError("cannot format a constructor for sighash", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    let r = "constructor(" + this.inputs.map(r => r.format(t)).join(t === rr.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (r += this.stateMutability + " "), r.trim()
                }
                static from(t) {
                    return "string" === typeof t ? fr.fromString(t) : fr.fromObject(t)
                }
                static fromObject(t) {
                    if (fr.isConstructorFragment(t)) return t;
                    "constructor" !== t.type && Jt.throwArgumentError("invalid constructor object", "value", t);
                    let r = hr(t);
                    r.constant && Jt.throwArgumentError("constructor cannot be constant", "value", t);
                    const e = {
                        name: null,
                        type: t.type,
                        inputs: t.inputs ? t.inputs.map(nr.fromObject) : [],
                        payable: r.payable,
                        stateMutability: r.stateMutability,
                        gas: t.gas ? F.from(t.gas) : null
                    };
                    return new fr(Wt, e)
                }
                static fromString(t) {
                    let r = {
                        type: "constructor"
                    };
                    t = ar(t, r);
                    let e = t.match(vr);
                    return e && "constructor" === e[1].trim() || Jt.throwArgumentError("invalid constructor string", "value", t), r.inputs = ir(e[2].trim(), !1), ur(e[3].trim(), r), fr.fromObject(r)
                }
                static isConstructorFragment(t) {
                    return t && t._isFragment && "constructor" === t.type
                }
            }
            class lr extends fr {
                format(t) {
                    if (t || (t = rr.sighash), rr[t] || Jt.throwArgumentError("invalid format type", "format", t), t === rr.json) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(r => JSON.parse(r.format(t))),
                        outputs: this.outputs.map(r => JSON.parse(r.format(t)))
                    });
                    let r = "";
                    return t !== rr.sighash && (r += "function "), r += this.name + "(" + this.inputs.map(r => r.format(t)).join(t === rr.full ? ", " : ",") + ") ", t !== rr.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (r += this.stateMutability + " ") : this.constant && (r += "view "), this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map(r => r.format(t)).join(", ") + ") "), null != this.gas && (r += "@" + this.gas.toString() + " ")), r.trim()
                }
                static from(t) {
                    return "string" === typeof t ? lr.fromString(t) : lr.fromObject(t)
                }
                static fromObject(t) {
                    if (lr.isFunctionFragment(t)) return t;
                    "function" !== t.type && Jt.throwArgumentError("invalid function object", "value", t);
                    let r = hr(t);
                    const e = {
                        type: t.type,
                        name: gr(t.name),
                        constant: r.constant,
                        inputs: t.inputs ? t.inputs.map(nr.fromObject) : [],
                        outputs: t.outputs ? t.outputs.map(nr.fromObject) : [],
                        payable: r.payable,
                        stateMutability: r.stateMutability,
                        gas: t.gas ? F.from(t.gas) : null
                    };
                    return new lr(Wt, e)
                }
                static fromString(t) {
                    let r = {
                        type: "function"
                    };
                    t = ar(t, r);
                    let e = t.split(" returns ");
                    e.length > 2 && Jt.throwArgumentError("invalid function string", "value", t);
                    let n = e[0].match(vr);
                    if (n || Jt.throwArgumentError("invalid function signature", "value", t), r.name = n[1].trim(), r.name && gr(r.name), r.inputs = ir(n[2], !1), ur(n[3].trim(), r), e.length > 1) {
                        let n = e[1].match(vr);
                        "" == n[1].trim() && "" == n[3].trim() || Jt.throwArgumentError("unexpected tokens", "value", t), r.outputs = ir(n[2], !1)
                    } else r.outputs = [];
                    return lr.fromObject(r)
                }
                static isFunctionFragment(t) {
                    return t && t._isFragment && "function" === t.type
                }
            }

            function cr(t) {
                const r = t.format();
                return "Error(string)" !== r && "Panic(uint256)" !== r || Jt.throwArgumentError(`cannot specify user defined ${r} error`, "fragment", t), t
            }
            class dr extends or {
                format(t) {
                    if (t || (t = rr.sighash), rr[t] || Jt.throwArgumentError("invalid format type", "format", t), t === rr.json) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(r => JSON.parse(r.format(t)))
                    });
                    let r = "";
                    return t !== rr.sighash && (r += "error "), r += this.name + "(" + this.inputs.map(r => r.format(t)).join(t === rr.full ? ", " : ",") + ") ", r.trim()
                }
                static from(t) {
                    return "string" === typeof t ? dr.fromString(t) : dr.fromObject(t)
                }
                static fromObject(t) {
                    if (dr.isErrorFragment(t)) return t;
                    "error" !== t.type && Jt.throwArgumentError("invalid error object", "value", t);
                    const r = {
                        type: t.type,
                        name: gr(t.name),
                        inputs: t.inputs ? t.inputs.map(nr.fromObject) : []
                    };
                    return cr(new dr(Wt, r))
                }
                static fromString(t) {
                    let r = {
                            type: "error"
                        },
                        e = t.match(vr);
                    return e || Jt.throwArgumentError("invalid error signature", "value", t), r.name = e[1].trim(), r.name && gr(r.name), r.inputs = ir(e[2], !1), cr(dr.fromObject(r))
                }
                static isErrorFragment(t) {
                    return t && t._isFragment && "error" === t.type
                }
            }

            function pr(t) {
                return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t
            }
            const mr = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

            function gr(t) {
                return t && t.match(mr) || Jt.throwArgumentError(`invalid identifier "${t}"`, "value", t), t
            }
            const vr = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");

            function yr(t) {
                t = t.trim();
                let r = [],
                    e = "",
                    n = 0;
                for (let i = 0; i < t.length; i++) {
                    let o = t[i];
                    "," === o && 0 === n ? (r.push(e), e = "") : (e += o, "(" === o ? n++ : ")" === o && (n--, -1 === n && Jt.throwArgumentError("unbalanced parenthesis", "value", t)))
                }
                return e && r.push(e), r
            }
            const br = new p(Y),
                wr = new RegExp(/^bytes([0-9]*)$/),
                Mr = new RegExp(/^(u?int)([0-9]*)$/);
            class Er {
                constructor(t) {
                    V(this, "coerceFunc", t || null)
                }
                _getCoder(t) {
                    switch (t.baseType) {
                        case "address":
                            return new Rt(t.name);
                        case "bool":
                            return new jt(t.name);
                        case "string":
                            return new Zt(t.name);
                        case "bytes":
                            return new Lt(t.name);
                        case "array":
                            return new Ct(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
                        case "tuple":
                            return new Xt((t.components || []).map(t => this._getCoder(t)), t.name);
                        case "":
                            return new qt(t.name)
                    }
                    let r = t.type.match(Mr);
                    if (r) {
                        let e = parseInt(r[2] || "256");
                        return (0 === e || e > 256 || e % 8 !== 0) && br.throwArgumentError("invalid " + r[1] + " bit length", "param", t), new Vt(e / 8, "int" === r[1], t.name)
                    }
                    if (r = t.type.match(wr), r) {
                        let e = parseInt(r[1]);
                        return (0 === e || e > 32) && br.throwArgumentError("invalid bytes length", "param", t), new Dt(e, t.name)
                    }
                    return br.throwArgumentError("invalid type", "type", t.type)
                }
                _getWordSize() {
                    return 32
                }
                _getReader(t, r) {
                    return new nt(t, this._getWordSize(), this.coerceFunc, r)
                }
                _getWriter() {
                    return new et(this._getWordSize())
                }
                getDefaultValue(t) {
                    const r = t.map(t => this._getCoder(nr.from(t))),
                        e = new Xt(r, "_");
                    return e.defaultValue()
                }
                encode(t, r) {
                    t.length !== r.length && br.throwError("types/values length mismatch", p.errors.INVALID_ARGUMENT, {
                        count: {
                            types: t.length,
                            values: r.length
                        },
                        value: {
                            types: t,
                            values: r
                        }
                    });
                    const e = t.map(t => this._getCoder(nr.from(t))),
                        n = new Xt(e, "_"),
                        i = this._getWriter();
                    return n.encode(i, r), i.data
                }
                decode(t, r, e) {
                    const n = t.map(t => this._getCoder(nr.from(t))),
                        i = new Xt(n, "_");
                    return i.decode(this._getReader(M(r), e))
                }
            }
            const _r = new Er,
                Ar = new p(Y);
            class Nr extends $ {}
            class Sr extends $ {}
            class xr extends $ {}
            class Ir extends $ {
                static isIndexed(t) {
                    return !(!t || !t._isIndexed)
                }
            }
            const Or = {
                "0x08c379a0": {
                    signature: "Error(string)",
                    name: "Error",
                    inputs: ["string"],
                    reason: !0
                },
                "0x4e487b71": {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    inputs: ["uint256"]
                }
            };

            function Rr(t, r) {
                const e = new Error("deferred error during ABI decoding triggered accessing " + t);
                return e.error = r, e
            }
            class Pr {
                constructor(t) {
                    let r = [];
                    r = "string" === typeof t ? JSON.parse(t) : t, V(this, "fragments", r.map(t => or.from(t)).filter(t => null != t)), V(this, "_abiCoder", Z(new.target, "getAbiCoder")()), V(this, "functions", {}), V(this, "errors", {}), V(this, "events", {}), V(this, "structs", {}), this.fragments.forEach(t => {
                        let r = null;
                        switch (t.type) {
                            case "constructor":
                                return this.deploy ? void Ar.warn("duplicate definition - constructor") : void V(this, "deploy", t);
                            case "function":
                                r = this.functions;
                                break;
                            case "event":
                                r = this.events;
                                break;
                            case "error":
                                r = this.errors;
                                break;
                            default:
                                return
                        }
                        let e = t.format();
                        r[e] ? Ar.warn("duplicate definition - " + e) : r[e] = t
                    }), this.deploy || V(this, "deploy", fr.from({
                        payable: !1,
                        type: "constructor"
                    })), V(this, "_isInterface", !0)
                }
                format(t) {
                    t || (t = rr.full), t === rr.sighash && Ar.throwArgumentError("interface does not support formatting sighash", "format", t);
                    const r = this.fragments.map(r => r.format(t));
                    return t === rr.json ? JSON.stringify(r.map(t => JSON.parse(t))) : r
                }
                static getAbiCoder() {
                    return _r
                }
                static getAddress(t) {
                    return gt(t)
                }
                static getSighash(t) {
                    return S(Ot(t.format()), 0, 4)
                }
                static getEventTopic(t) {
                    return Ot(t.format())
                }
                getFunction(t) {
                    if (_(t)) {
                        for (const r in this.functions)
                            if (t === this.getSighash(r)) return this.functions[r];
                        Ar.throwArgumentError("no matching function", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        const r = t.trim(),
                            e = Object.keys(this.functions).filter(t => t.split("(")[0] === r);
                        return 0 === e.length ? Ar.throwArgumentError("no matching function", "name", r) : e.length > 1 && Ar.throwArgumentError("multiple matching functions", "name", r), this.functions[e[0]]
                    }
                    const r = this.functions[lr.fromString(t).format()];
                    return r || Ar.throwArgumentError("no matching function", "signature", t), r
                }
                getEvent(t) {
                    if (_(t)) {
                        const r = t.toLowerCase();
                        for (const t in this.events)
                            if (r === this.getEventTopic(t)) return this.events[t];
                        Ar.throwArgumentError("no matching event", "topichash", r)
                    }
                    if (-1 === t.indexOf("(")) {
                        const r = t.trim(),
                            e = Object.keys(this.events).filter(t => t.split("(")[0] === r);
                        return 0 === e.length ? Ar.throwArgumentError("no matching event", "name", r) : e.length > 1 && Ar.throwArgumentError("multiple matching events", "name", r), this.events[e[0]]
                    }
                    const r = this.events[sr.fromString(t).format()];
                    return r || Ar.throwArgumentError("no matching event", "signature", t), r
                }
                getError(t) {
                    if (_(t)) {
                        const r = Z(this.constructor, "getSighash");
                        for (const e in this.errors) {
                            const n = this.errors[e];
                            if (t === r(n)) return this.errors[e]
                        }
                        Ar.throwArgumentError("no matching error", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        const r = t.trim(),
                            e = Object.keys(this.errors).filter(t => t.split("(")[0] === r);
                        return 0 === e.length ? Ar.throwArgumentError("no matching error", "name", r) : e.length > 1 && Ar.throwArgumentError("multiple matching errors", "name", r), this.errors[e[0]]
                    }
                    const r = this.errors[lr.fromString(t).format()];
                    return r || Ar.throwArgumentError("no matching error", "signature", t), r
                }
                getSighash(t) {
                    if ("string" === typeof t) try {
                        t = this.getFunction(t)
                    } catch (r) {
                        try {
                            t = this.getError(t)
                        } catch (e) {
                            throw r
                        }
                    }
                    return Z(this.constructor, "getSighash")(t)
                }
                getEventTopic(t) {
                    return "string" === typeof t && (t = this.getEvent(t)), Z(this.constructor, "getEventTopic")(t)
                }
                _decodeParams(t, r) {
                    return this._abiCoder.decode(t, r)
                }
                _encodeParams(t, r) {
                    return this._abiCoder.encode(t, r)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeErrorResult(t, r) {
                    "string" === typeof t && (t = this.getError(t));
                    const e = M(r);
                    return N(e.slice(0, 4)) !== this.getSighash(t) && Ar.throwArgumentError(`data signature does not match error ${t.name}.`, "data", N(e)), this._decodeParams(t.inputs, e.slice(4))
                }
                encodeErrorResult(t, r) {
                    return "string" === typeof t && (t = this.getError(t)), N(E([this.getSighash(t), this._encodeParams(t.inputs, r || [])]))
                }
                decodeFunctionData(t, r) {
                    "string" === typeof t && (t = this.getFunction(t));
                    const e = M(r);
                    return N(e.slice(0, 4)) !== this.getSighash(t) && Ar.throwArgumentError(`data signature does not match function ${t.name}.`, "data", N(e)), this._decodeParams(t.inputs, e.slice(4))
                }
                encodeFunctionData(t, r) {
                    return "string" === typeof t && (t = this.getFunction(t)), N(E([this.getSighash(t), this._encodeParams(t.inputs, r || [])]))
                }
                decodeFunctionResult(t, r) {
                    "string" === typeof t && (t = this.getFunction(t));
                    let e = M(r),
                        n = null,
                        i = "",
                        o = null,
                        s = null,
                        a = null;
                    switch (e.length % this._abiCoder._getWordSize()) {
                        case 0:
                            try {
                                return this._abiCoder.decode(t.outputs, e)
                            } catch (u) {}
                            break;
                        case 4:
                            {
                                const t = N(e.slice(0, 4)),
                                    r = Or[t];
                                if (r) o = this._abiCoder.decode(r.inputs, e.slice(4)),
                                s = r.name,
                                a = r.signature,
                                r.reason && (n = o[0]),
                                "Error" === s ? i = "; VM Exception while processing transaction: reverted with reason string " + JSON.stringify(o[0]) : "Panic" === s && (i = "; VM Exception while processing transaction: reverted with panic code " + o[0]);
                                else try {
                                    const r = this.getError(t);
                                    o = this._abiCoder.decode(r.inputs, e.slice(4)), s = r.name, a = r.format()
                                } catch (u) {}
                                break
                            }
                    }
                    return Ar.throwError("call revert exception" + i, p.errors.CALL_EXCEPTION, {
                        method: t.format(),
                        data: N(r),
                        errorArgs: o,
                        errorName: s,
                        errorSignature: a,
                        reason: n
                    })
                }
                encodeFunctionResult(t, r) {
                    return "string" === typeof t && (t = this.getFunction(t)), N(this._abiCoder.encode(t.outputs, r || []))
                }
                encodeFilterTopics(t, r) {
                    "string" === typeof t && (t = this.getEvent(t)), r.length > t.inputs.length && Ar.throwError("too many arguments for " + t.format(), p.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: r
                    });
                    let e = [];
                    t.anonymous || e.push(this.getEventTopic(t));
                    const n = (t, r) => "string" === t.type ? Ot(r) : "bytes" === t.type ? st(N(r)) : ("bool" === t.type && "boolean" === typeof r && (r = r ? "0x01" : "0x00"), t.type.match(/^u?int/) && (r = F.from(r).toHexString()), "address" === t.type && this._abiCoder.encode(["address"], [r]), I(N(r), 32));
                    r.forEach((r, i) => {
                        let o = t.inputs[i];
                        o.indexed ? null == r ? e.push(null) : "array" === o.baseType || "tuple" === o.baseType ? Ar.throwArgumentError("filtering with tuples or arrays not supported", "contract." + o.name, r) : Array.isArray(r) ? e.push(r.map(t => n(o, t))) : e.push(n(o, r)) : null != r && Ar.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + o.name, r)
                    });
                    while (e.length && null === e[e.length - 1]) e.pop();
                    return e
                }
                encodeEventLog(t, r) {
                    "string" === typeof t && (t = this.getEvent(t));
                    const e = [],
                        n = [],
                        i = [];
                    return t.anonymous || e.push(this.getEventTopic(t)), r.length !== t.inputs.length && Ar.throwArgumentError("event arguments/values mismatch", "values", r), t.inputs.forEach((t, o) => {
                        const s = r[o];
                        if (t.indexed)
                            if ("string" === t.type) e.push(Ot(s));
                            else if ("bytes" === t.type) e.push(st(s));
                        else {
                            if ("tuple" === t.baseType || "array" === t.baseType) throw new Error("not implemented");
                            e.push(this._abiCoder.encode([t.type], [s]))
                        } else n.push(t), i.push(s)
                    }), {
                        data: this._abiCoder.encode(n, i),
                        topics: e
                    }
                }
                decodeEventLog(t, r, e) {
                    if ("string" === typeof t && (t = this.getEvent(t)), null != e && !t.anonymous) {
                        let r = this.getEventTopic(t);
                        _(e[0], 32) && e[0].toLowerCase() === r || Ar.throwError("fragment/topic mismatch", p.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: r,
                            value: e[0]
                        }), e = e.slice(1)
                    }
                    let n = [],
                        i = [],
                        o = [];
                    t.inputs.forEach((t, r) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (n.push(nr.fromObject({
                            type: "bytes32",
                            name: t.name
                        })), o.push(!0)) : (n.push(t), o.push(!1)) : (i.push(t), o.push(!1))
                    });
                    let s = null != e ? this._abiCoder.decode(n, E(e)) : null,
                        a = this._abiCoder.decode(i, r, !0),
                        u = [],
                        h = 0,
                        f = 0;
                    t.inputs.forEach((t, r) => {
                        if (t.indexed)
                            if (null == s) u[r] = new Ir({
                                _isIndexed: !0,
                                hash: null
                            });
                            else if (o[r]) u[r] = new Ir({
                            _isIndexed: !0,
                            hash: s[f++]
                        });
                        else try {
                            u[r] = s[f++]
                        } catch (e) {
                            u[r] = e
                        } else try {
                            u[r] = a[h++]
                        } catch (e) {
                            u[r] = e
                        }
                        if (t.name && null == u[t.name]) {
                            const e = u[r];
                            e instanceof Error ? Object.defineProperty(u, t.name, {
                                enumerable: !0,
                                get: () => {
                                    throw Rr("property " + JSON.stringify(t.name), e)
                                }
                            }) : u[t.name] = e
                        }
                    });
                    for (let l = 0; l < u.length; l++) {
                        const t = u[l];
                        t instanceof Error && Object.defineProperty(u, l, {
                            enumerable: !0,
                            get: () => {
                                throw Rr("index " + l, t)
                            }
                        })
                    }
                    return Object.freeze(u)
                }
                parseTransaction(t) {
                    let r = this.getFunction(t.data.substring(0, 10).toLowerCase());
                    return r ? new Sr({
                        args: this._abiCoder.decode(r.inputs, "0x" + t.data.substring(10)),
                        functionFragment: r,
                        name: r.name,
                        signature: r.format(),
                        sighash: this.getSighash(r),
                        value: F.from(t.value || "0")
                    }) : null
                }
                parseLog(t) {
                    let r = this.getEvent(t.topics[0]);
                    return !r || r.anonymous ? null : new Nr({
                        eventFragment: r,
                        name: r.name,
                        signature: r.format(),
                        topic: this.getEventTopic(r),
                        args: this.decodeEventLog(r, t.data, t.topics)
                    })
                }
                parseError(t) {
                    const r = N(t);
                    let e = this.getError(r.substring(0, 10).toLowerCase());
                    return e ? new xr({
                        args: this._abiCoder.decode(e.inputs, "0x" + r.substring(10)),
                        errorFragment: e,
                        name: e.name,
                        signature: e.format(),
                        sighash: this.getSighash(e)
                    }) : null
                }
                static isInterface(t) {
                    return !(!t || !t._isInterface)
                }
            }
            var Tr = e("3147"),
                Ur = e.n(Tr);
            const kr = "logger/5.6.0";
            let Cr = !1,
                jr = !1;
            const Fr = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let Lr = Fr["default"],
                Dr = null;

            function qr() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }
            const Br = qr();
            var zr, Gr;
            (function(t) {
                t["DEBUG"] = "DEBUG", t["INFO"] = "INFO", t["WARNING"] = "WARNING", t["ERROR"] = "ERROR", t["OFF"] = "OFF"
            })(zr || (zr = {})),
            function(t) {
                t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR", t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED", t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION", t["NETWORK_ERROR"] = "NETWORK_ERROR", t["SERVER_ERROR"] = "SERVER_ERROR", t["TIMEOUT"] = "TIMEOUT", t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN", t["NUMERIC_FAULT"] = "NUMERIC_FAULT", t["MISSING_NEW"] = "MISSING_NEW", t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT", t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT", t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT", t["CALL_EXCEPTION"] = "CALL_EXCEPTION", t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS", t["NONCE_EXPIRED"] = "NONCE_EXPIRED", t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED", t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT", t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"
            }(Gr || (Gr = {}));
            const Kr = "0123456789abcdef";
            class Vr {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == Fr[e] && this.throwArgumentError("invalid log level name", "logLevel", t), Lr > Fr[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(Vr.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(Vr.levels.INFO, t)
                }
                warn(...t) {
                    this._log(Vr.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (jr) return this.makeError("censored error", r, {});
                    r || (r = Vr.errors.UNKNOWN_ERROR), e || (e = {});
                    const n = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += Kr[r[t] >> 4], e += Kr[15 & r[t]];
                                n.push(t + "=Uint8Array(0x" + e + ")")
                            } else n.push(t + "=" + JSON.stringify(r))
                        } catch (s) {
                            n.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), n.push("code=" + r), n.push("version=" + this.version);
                    const i = t;
                    let o = "";
                    switch (r) {
                        case Gr.NUMERIC_FAULT:
                            {
                                o = "NUMERIC_FAULT";
                                const r = t;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        o += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        o += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        o += "-unbound-result";
                                        break
                                }
                                break
                            }
                        case Gr.CALL_EXCEPTION:
                        case Gr.INSUFFICIENT_FUNDS:
                        case Gr.MISSING_NEW:
                        case Gr.NONCE_EXPIRED:
                        case Gr.REPLACEMENT_UNDERPRICED:
                        case Gr.TRANSACTION_REPLACED:
                        case Gr.UNPREDICTABLE_GAS_LIMIT:
                            o = r;
                            break
                    }
                    o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    const s = new Error(t);
                    return s.reason = i, s.code = r, Object.keys(e).forEach((function(t) {
                        s[t] = e[t]
                    })), s
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, Vr.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, n) {
                    t || this.throwError(r, e, n)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), Br && this.throwError("platform missing String.prototype.normalize", Vr.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: Br
                    })
                }
                checkSafeUint53(t, r) {
                    "number" === typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, Vr.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, Vr.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, Vr.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, Vr.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", Vr.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", Vr.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", Vr.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return Dr || (Dr = new Vr(kr)), Dr
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), Cr) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    jr = !!t, Cr = !!r
                }
                static setLogLevel(t) {
                    const r = Fr[t.toLowerCase()];
                    null != r ? Lr = r : Vr.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new Vr(t)
                }
            }
            Vr.errors = Gr, Vr.levels = zr;
            const Zr = "bytes/5.6.1",
                Xr = new Vr(Zr);

            function Jr(t) {
                return !!t.toHexString
            }

            function Wr(t) {
                return t.slice || (t.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return Wr(new Uint8Array(Array.prototype.slice.apply(t, r)))
                }), t
            }

            function Hr(t) {
                return ee(t) && !(t.length % 2) || Yr(t)
            }

            function $r(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function Yr(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!$r(t.length) || t.length < 0) return !1;
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    if (!$r(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function Qr(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    Xr.checkSafeUint53(t, "invalid arrayify value");
                    const r = [];
                    while (t) r.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === r.length && r.push(0), Wr(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), Jr(t) && (t = t.toHexString()), ee(t)) {
                    let e = t.substring(2);
                    e.length % 2 && ("left" === r.hexPad ? e = "0" + e : "right" === r.hexPad ? e += "0" : Xr.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) n.push(parseInt(e.substring(t, t + 2), 16));
                    return Wr(new Uint8Array(n))
                }
                return Yr(t) ? Wr(new Uint8Array(t)) : Xr.throwArgumentError("invalid arrayify value", "value", t)
            }

            function te(t) {
                const r = t.map(t => Qr(t)),
                    e = r.reduce((t, r) => t + r.length, 0),
                    n = new Uint8Array(e);
                return r.reduce((t, r) => (n.set(r, t), t + r.length), 0), Wr(n)
            }

            function re(t) {
                let r = Qr(t);
                if (0 === r.length) return r;
                let e = 0;
                while (e < r.length && 0 === r[e]) e++;
                return e && (r = r.slice(e)), r
            }

            function ee(t, r) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
            }
            const ne = "0123456789abcdef";

            function ie(t, r) {
                if (r || (r = {}), "number" === typeof t) {
                    Xr.checkSafeUint53(t, "invalid hexlify value");
                    let r = "";
                    while (t) r = ne[15 & t] + r, t = Math.floor(t / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" === typeof t) return t = t.toString(16), t.length % 2 ? "0x0" + t : "0x" + t;
                if (r.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), Jr(t)) return t.toHexString();
                if (ee(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : Xr.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (Yr(t)) {
                    let r = "0x";
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e];
                        r += ne[(240 & n) >> 4] + ne[15 & n]
                    }
                    return r
                }
                return Xr.throwArgumentError("invalid hexlify value", "value", t)
            }

            function oe(t) {
                if ("string" !== typeof t) t = ie(t);
                else if (!ee(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function se(t, r, e) {
                return "string" !== typeof t ? t = ie(t) : (!ee(t) || t.length % 2) && Xr.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
            }
            const ae = "bignumber/5.6.0";
            var ue = Ur.a.BN;
            const he = new Vr(ae),
                fe = {},
                le = 9007199254740991;
            let ce = !1;
            class de {
                constructor(t, r) {
                    he.checkNew(new.target, de), t !== fe && he.throwError("cannot call constructor directly; use BigNumber.from", Vr.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return me(ge(this).fromTwos(t))
                }
                toTwos(t) {
                    return me(ge(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? de.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return me(ge(this).add(ge(t)))
                }
                sub(t) {
                    return me(ge(this).sub(ge(t)))
                }
                div(t) {
                    const r = de.from(t);
                    return r.isZero() && ve("division-by-zero", "div"), me(ge(this).div(ge(t)))
                }
                mul(t) {
                    return me(ge(this).mul(ge(t)))
                }
                mod(t) {
                    const r = ge(t);
                    return r.isNeg() && ve("division-by-zero", "mod"), me(ge(this).umod(r))
                }
                pow(t) {
                    const r = ge(t);
                    return r.isNeg() && ve("negative-power", "pow"), me(ge(this).pow(r))
                }
                and(t) {
                    const r = ge(t);
                    return (this.isNegative() || r.isNeg()) && ve("unbound-bitwise-result", "and"), me(ge(this).and(r))
                }
                or(t) {
                    const r = ge(t);
                    return (this.isNegative() || r.isNeg()) && ve("unbound-bitwise-result", "or"), me(ge(this).or(r))
                }
                xor(t) {
                    const r = ge(t);
                    return (this.isNegative() || r.isNeg()) && ve("unbound-bitwise-result", "xor"), me(ge(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && ve("negative-width", "mask"), me(ge(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && ve("negative-width", "shl"), me(ge(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && ve("negative-width", "shr"), me(ge(this).shrn(t))
                }
                eq(t) {
                    return ge(this).eq(ge(t))
                }
                lt(t) {
                    return ge(this).lt(ge(t))
                }
                lte(t) {
                    return ge(this).lte(ge(t))
                }
                gt(t) {
                    return ge(this).gt(ge(t))
                }
                gte(t) {
                    return ge(this).gte(ge(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return ge(this).isZero()
                }
                toNumber() {
                    try {
                        return ge(this).toNumber()
                    } catch (t) {
                        ve("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return he.throwError("this platform does not support BigInt", Vr.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? ce || (ce = !0, he.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? he.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", Vr.errors.UNEXPECTED_ARGUMENT, {}) : he.throwError("BigNumber.toString does not accept parameters", Vr.errors.UNEXPECTED_ARGUMENT, {})), ge(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof de) return t;
                    if ("string" === typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new de(fe, pe(t)) : t.match(/^-?[0-9]+$/) ? new de(fe, pe(new ue(t))) : he.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" === typeof t) return t % 1 && ve("underflow", "BigNumber.from", t), (t >= le || t <= -le) && ve("overflow", "BigNumber.from", t), de.from(String(t));
                    const r = t;
                    if ("bigint" === typeof r) return de.from(r.toString());
                    if (Yr(r)) return de.from(ie(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" === typeof t) return de.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" === typeof t && (ee(t) || "-" === t[0] && ee(t.substring(1)))) return de.from(t)
                        }
                    return he.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function pe(t) {
                if ("string" !== typeof t) return pe(t.toString(16));
                if ("-" === t[0]) return t = t.substring(1), "-" === t[0] && he.throwArgumentError("invalid hex", "value", t), t = pe(t), "0x00" === t ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                t.length % 2 && (t = "0x0" + t.substring(2));
                while (t.length > 4 && "0x00" === t.substring(0, 4)) t = "0x" + t.substring(4);
                return t
            }

            function me(t) {
                return de.from(pe(t))
            }

            function ge(t) {
                const r = de.from(t).toHexString();
                return "-" === r[0] ? new ue("-" + r.substring(3), 16) : new ue(r.substring(2), 16)
            }

            function ve(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), he.throwError(t, Vr.errors.NUMERIC_FAULT, n)
            }

            function ye(t) {
                return new ue(t, 36).toString(16)
            }
            const be = "properties/5.6.0";
            var we = function(t, r, e, n) {
                function i(t) {
                    return t instanceof e ? t : new e((function(r) {
                        r(t)
                    }))
                }
                return new(e || (e = Promise))((function(e, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function a(t) {
                        try {
                            u(n["throw"](t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function u(t) {
                        t.done ? e(t.value) : i(t.value).then(s, a)
                    }
                    u((n = n.apply(t, r || [])).next())
                }))
            };
            const Me = new Vr(be);

            function Ee(t, r, e) {
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }

            function _e(t, r) {
                for (let e = 0; e < 32; e++) {
                    if (t[r]) return t[r];
                    if (!t.prototype || "object" !== typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }

            function Ae(t) {
                return we(this, void 0, void 0, (function*() {
                    const r = Object.keys(t).map(r => {
                            const e = t[r];
                            return Promise.resolve(e).then(t => ({
                                key: r,
                                value: t
                            }))
                        }),
                        e = yield Promise.all(r);
                    return e.reduce((t, r) => (t[r.key] = r.value, t), {})
                }))
            }

            function Ne(t) {
                const r = {};
                for (const e in t) r[e] = t[e];
                return r
            }
            const Se = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function xe(t) {
                if (void 0 === t || null === t || Se[typeof t]) return !0;
                if (Array.isArray(t) || "object" === typeof t) {
                    if (!Object.isFrozen(t)) return !1;
                    const e = Object.keys(t);
                    for (let n = 0; n < e.length; n++) {
                        let i = null;
                        try {
                            i = t[e[n]]
                        } catch (r) {
                            continue
                        }
                        if (!xe(i)) return !1
                    }
                    return !0
                }
                return Me.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function Ie(t) {
                if (xe(t)) return t;
                if (Array.isArray(t)) return Object.freeze(t.map(t => Oe(t)));
                if ("object" === typeof t) {
                    const r = {};
                    for (const e in t) {
                        const n = t[e];
                        void 0 !== n && Ee(r, e, Oe(n))
                    }
                    return r
                }
                return Me.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function Oe(t) {
                return Ie(t)
            }
            const Re = "abstract-provider/5.6.0";
            var Pe = function(t, r, e, n) {
                function i(t) {
                    return t instanceof e ? t : new e((function(r) {
                        r(t)
                    }))
                }
                return new(e || (e = Promise))((function(e, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function a(t) {
                        try {
                            u(n["throw"](t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function u(t) {
                        t.done ? e(t.value) : i(t.value).then(s, a)
                    }
                    u((n = n.apply(t, r || [])).next())
                }))
            };
            const Te = new Vr(Re);
            class Ue {
                constructor() {
                    Te.checkAbstract(new.target, Ue), Ee(this, "_isProvider", !0)
                }
                getFeeData() {
                    return Pe(this, void 0, void 0, (function*() {
                        const {
                            block: t,
                            gasPrice: r
                        } = yield Ae({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch(t => null)
                        });
                        let e = null,
                            n = null;
                        return t && t.baseFeePerGas && (n = de.from("1500000000"), e = t.baseFeePerGas.mul(2).add(n)), {
                            maxFeePerGas: e,
                            maxPriorityFeePerGas: n,
                            gasPrice: r
                        }
                    }))
                }
                addListener(t, r) {
                    return this.on(t, r)
                }
                removeListener(t, r) {
                    return this.off(t, r)
                }
                static isProvider(t) {
                    return !(!t || !t._isProvider)
                }
            }
            const ke = "abstract-signer/5.6.0";
            var Ce = function(t, r, e, n) {
                function i(t) {
                    return t instanceof e ? t : new e((function(r) {
                        r(t)
                    }))
                }
                return new(e || (e = Promise))((function(e, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function a(t) {
                        try {
                            u(n["throw"](t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function u(t) {
                        t.done ? e(t.value) : i(t.value).then(s, a)
                    }
                    u((n = n.apply(t, r || [])).next())
                }))
            };
            const je = new Vr(ke),
                Fe = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                Le = [Vr.errors.INSUFFICIENT_FUNDS, Vr.errors.NONCE_EXPIRED, Vr.errors.REPLACEMENT_UNDERPRICED];
            class De {
                constructor() {
                    je.checkAbstract(new.target, De), Ee(this, "_isSigner", !0)
                }
                getBalance(t) {
                    return Ce(this, void 0, void 0, (function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                    }))
                }
                getTransactionCount(t) {
                    return Ce(this, void 0, void 0, (function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                    }))
                }
                estimateGas(t) {
                    return Ce(this, void 0, void 0, (function*() {
                        this._checkProvider("estimateGas");
                        const r = yield Ae(this.checkTransaction(t));
                        return yield this.provider.estimateGas(r)
                    }))
                }
                call(t, r) {
                    return Ce(this, void 0, void 0, (function*() {
                        this._checkProvider("call");
                        const e = yield Ae(this.checkTransaction(t));
                        return yield this.provider.call(e, r)
                    }))
                }
                sendTransaction(t) {
                    return Ce(this, void 0, void 0, (function*() {
                        this._checkProvider("sendTransaction");
                        const r = yield this.populateTransaction(t), e = yield this.signTransaction(r);
                        return yield this.provider.sendTransaction(e)
                    }))
                }
                getChainId() {
                    return Ce(this, void 0, void 0, (function*() {
                        this._checkProvider("getChainId");
                        const t = yield this.provider.getNetwork();
                        return t.chainId
                    }))
                }
                getGasPrice() {
                    return Ce(this, void 0, void 0, (function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    }))
                }
                getFeeData() {
                    return Ce(this, void 0, void 0, (function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    }))
                }
                resolveName(t) {
                    return Ce(this, void 0, void 0, (function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                    }))
                }
                checkTransaction(t) {
                    for (const e in t) - 1 === Fe.indexOf(e) && je.throwArgumentError("invalid transaction key: " + e, "transaction", t);
                    const r = Ne(t);
                    return null == r.from ? r.from = this.getAddress() : r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then(r => (r[0].toLowerCase() !== r[1].toLowerCase() && je.throwArgumentError("from address mismatch", "transaction", t), r[0])), r
                }
                populateTransaction(t) {
                    return Ce(this, void 0, void 0, (function*() {
                        const r = yield Ae(this.checkTransaction(t));
                        null != r.to && (r.to = Promise.resolve(r.to).then(t => Ce(this, void 0, void 0, (function*() {
                            if (null == t) return null;
                            const r = yield this.resolveName(t);
                            return null == r && je.throwArgumentError("provided ENS name resolves to null", "tx.to", t), r
                        }))), r.to.catch(t => {}));
                        const e = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
                        if (null == r.gasPrice || 2 !== r.type && !e ? 0 !== r.type && 1 !== r.type || !e || je.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : je.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 2 !== r.type && null != r.type || null == r.maxFeePerGas || null == r.maxPriorityFeePerGas)
                            if (0 === r.type || 1 === r.type) null == r.gasPrice && (r.gasPrice = this.getGasPrice());
                            else {
                                const t = yield this.getFeeData();
                                if (null == r.type)
                                    if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                                        if (r.type = 2, null != r.gasPrice) {
                                            const t = r.gasPrice;
                                            delete r.gasPrice, r.maxFeePerGas = t, r.maxPriorityFeePerGas = t
                                        } else null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                                else null != t.gasPrice ? (e && je.throwError("network does not support EIP-1559", Vr.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == r.gasPrice && (r.gasPrice = t.gasPrice), r.type = 0) : je.throwError("failed to get consistent fee data", Vr.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                });
                                else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                            }
                        else r.type = 2;
                        return null == r.nonce && (r.nonce = this.getTransactionCount("pending")), null == r.gasLimit && (r.gasLimit = this.estimateGas(r).catch(t => {
                            if (Le.indexOf(t.code) >= 0) throw t;
                            return je.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Vr.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: t,
                                tx: r
                            })
                        })), null == r.chainId ? r.chainId = this.getChainId() : r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then(r => (0 !== r[1] && r[0] !== r[1] && je.throwArgumentError("chainId address mismatch", "transaction", t), r[0])), yield Ae(r)
                    }))
                }
                _checkProvider(t) {
                    this.provider || je.throwError("missing provider", Vr.errors.UNSUPPORTED_OPERATION, {
                        operation: t || "_checkProvider"
                    })
                }
                static isSigner(t) {
                    return !(!t || !t._isSigner)
                }
            }
            class qe extends De {
                constructor(t, r) {
                    je.checkNew(new.target, qe), super(), Ee(this, "address", t), Ee(this, "provider", r || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(t, r) {
                    return Promise.resolve().then(() => {
                        je.throwError(t, Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: r
                        })
                    })
                }
                signMessage(t) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(t) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(t, r, e) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(t) {
                    return new qe(this.address, t)
                }
            }

            function Be(t) {
                return "0x" + ot.a.keccak_256(Qr(t))
            }
            const ze = "rlp/5.6.0",
                Ge = new Vr(ze);

            function Ke(t) {
                const r = [];
                while (t) r.unshift(255 & t), t >>= 8;
                return r
            }

            function Ve(t) {
                if (Array.isArray(t)) {
                    let r = [];
                    if (t.forEach((function(t) {
                            r = r.concat(Ve(t))
                        })), r.length <= 55) return r.unshift(192 + r.length), r;
                    const e = Ke(r.length);
                    return e.unshift(247 + e.length), e.concat(r)
                }
                Hr(t) || Ge.throwArgumentError("RLP object must be BytesLike", "object", t);
                const r = Array.prototype.slice.call(Qr(t));
                if (1 === r.length && r[0] <= 127) return r;
                if (r.length <= 55) return r.unshift(128 + r.length), r;
                const e = Ke(r.length);
                return e.unshift(183 + e.length), e.concat(r)
            }

            function Ze(t) {
                return ie(Ve(t))
            }
            const Xe = "address/5.6.0",
                Je = new Vr(Xe);

            function We(t) {
                ee(t, 20) || Je.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                const r = t.substring(2).split(""),
                    e = new Uint8Array(40);
                for (let i = 0; i < 40; i++) e[i] = r[i].charCodeAt(0);
                const n = Qr(Be(e));
                for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()), (15 & n[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const He = 9007199254740991;

            function $e(t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }
            const Ye = {};
            for (let Pn = 0; Pn < 10; Pn++) Ye[String(Pn)] = String(Pn);
            for (let Pn = 0; Pn < 26; Pn++) Ye[String.fromCharCode(65 + Pn)] = String(10 + Pn);
            const Qe = Math.floor($e(He));

            function tn(t) {
                t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
                let r = t.split("").map(t => Ye[t]).join("");
                while (r.length >= Qe) {
                    let t = r.substring(0, Qe);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let e = String(98 - parseInt(r, 10) % 97);
                while (e.length < 2) e = "0" + e;
                return e
            }

            function rn(t) {
                let r = null;
                if ("string" !== typeof t && Je.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = We(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && Je.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    t.substring(2, 4) !== tn(t) && Je.throwArgumentError("bad icap checksum", "address", t), r = ye(t.substring(4));
                    while (r.length < 40) r = "0" + r;
                    r = We("0x" + r)
                } else Je.throwArgumentError("invalid address", "address", t);
                return r
            }

            function en(t) {
                let r = null;
                try {
                    r = rn(t.from)
                } catch (n) {
                    Je.throwArgumentError("missing from address", "transaction", t)
                }
                const e = re(Qr(de.from(t.nonce).toHexString()));
                return rn(se(Be(Ze([r, e])), 12))
            }
            e("fa0c");
            const nn = "signing-key/5.6.0";
            new Vr(nn);
            const on = "transactions/5.6.0",
                sn = new Vr(on);
            var an;
            (function(t) {
                t[t["legacy"] = 0] = "legacy", t[t["eip2930"] = 1] = "eip2930", t[t["eip1559"] = 2] = "eip1559"
            })(an || (an = {}));

            function un(t, r) {
                return {
                    address: rn(t),
                    storageKeys: (r || []).map((r, e) => (32 !== oe(r) && sn.throwArgumentError("invalid access list storageKey", `accessList[${t}:${e}]`, r), r.toLowerCase()))
                }
            }

            function hn(t) {
                if (Array.isArray(t)) return t.map((t, r) => Array.isArray(t) ? (t.length > 2 && sn.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${r}]`, t), un(t[0], t[1])) : un(t.address, t.storageKeys));
                const r = Object.keys(t).map(r => {
                    const e = t[r].reduce((t, r) => (t[r] = !0, t), {});
                    return un(r, Object.keys(e).sort())
                });
                return r.sort((t, r) => t.address.localeCompare(r.address)), r
            }
            const fn = "contracts/5.6.0";
            var ln = function(t, r, e, n) {
                function i(t) {
                    return t instanceof e ? t : new e((function(r) {
                        r(t)
                    }))
                }
                return new(e || (e = Promise))((function(e, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function a(t) {
                        try {
                            u(n["throw"](t))
                        } catch (r) {
                            o(r)
                        }
                    }

                    function u(t) {
                        t.done ? e(t.value) : i(t.value).then(s, a)
                    }
                    u((n = n.apply(t, r || [])).next())
                }))
            };
            const cn = new Vr(fn),
                dn = {
                    chainId: !0,
                    data: !0,
                    from: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    value: !0,
                    type: !0,
                    accessList: !0,
                    maxFeePerGas: !0,
                    maxPriorityFeePerGas: !0,
                    customData: !0,
                    ccipReadEnabled: !0
                };

            function pn(t, r) {
                return ln(this, void 0, void 0, (function*() {
                    const e = yield r;
                    "string" !== typeof e && cn.throwArgumentError("invalid address or ENS name", "name", e);
                    try {
                        return rn(e)
                    } catch (i) {}
                    t || cn.throwError("a provider or signer is needed to resolve ENS names", Vr.errors.UNSUPPORTED_OPERATION, {
                        operation: "resolveName"
                    });
                    const n = yield t.resolveName(e);
                    return null == n && cn.throwArgumentError("resolver or addr is not configured for ENS name", "name", e), n
                }))
            }

            function mn(t, r, e) {
                return ln(this, void 0, void 0, (function*() {
                    return Array.isArray(e) ? yield Promise.all(e.map((e, n) => mn(t, Array.isArray(r) ? r[n] : r[e.name], e))): "address" === e.type ? yield pn(t, r): "tuple" === e.type ? yield mn(t, r, e.components): "array" === e.baseType ? Array.isArray(r) ? yield Promise.all(r.map(r => mn(t, r, e.arrayChildren))): Promise.reject(cn.makeError("invalid value for array", Vr.errors.INVALID_ARGUMENT, {
                        argument: "value",
                        value: r
                    })): r
                }))
            }

            function gn(t, r, e) {
                return ln(this, void 0, void 0, (function*() {
                    let n = {};
                    e.length === r.inputs.length + 1 && "object" === typeof e[e.length - 1] && (n = Ne(e.pop())), cn.checkArgumentCount(e.length, r.inputs.length, "passed to contract"), t.signer ? n.from ? n.from = Ae({
                        override: pn(t.signer, n.from),
                        signer: t.signer.getAddress()
                    }).then(t => ln(this, void 0, void 0, (function*() {
                        return rn(t.signer) !== t.override && cn.throwError("Contract with a Signer cannot override from", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        }), t.override
                    }))) : n.from = t.signer.getAddress() : n.from && (n.from = pn(t.provider, n.from));
                    const i = yield Ae({
                        args: mn(t.signer || t.provider, e, r.inputs),
                        address: t.resolvedAddress,
                        overrides: Ae(n) || {}
                    }), o = t.interface.encodeFunctionData(r, i.args), s = {
                        data: o,
                        to: i.address
                    }, a = i.overrides;
                    if (null != a.nonce && (s.nonce = de.from(a.nonce).toNumber()), null != a.gasLimit && (s.gasLimit = de.from(a.gasLimit)), null != a.gasPrice && (s.gasPrice = de.from(a.gasPrice)), null != a.maxFeePerGas && (s.maxFeePerGas = de.from(a.maxFeePerGas)), null != a.maxPriorityFeePerGas && (s.maxPriorityFeePerGas = de.from(a.maxPriorityFeePerGas)), null != a.from && (s.from = a.from), null != a.type && (s.type = a.type), null != a.accessList && (s.accessList = hn(a.accessList)), null == s.gasLimit && null != r.gas) {
                        let t = 21e3;
                        const e = Qr(o);
                        for (let r = 0; r < e.length; r++) t += 4, e[r] && (t += 64);
                        s.gasLimit = de.from(r.gas).add(t)
                    }
                    if (a.value) {
                        const t = de.from(a.value);
                        t.isZero() || r.payable || cn.throwError("non-payable method cannot override value", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: n.value
                        }), s.value = t
                    }
                    a.customData && (s.customData = Ne(a.customData)), a.ccipReadEnabled && (s.ccipReadEnabled = !!a.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
                    const u = Object.keys(n).filter(t => null != n[t]);
                    return u.length && cn.throwError("cannot override " + u.map(t => JSON.stringify(t)).join(","), Vr.errors.UNSUPPORTED_OPERATION, {
                        operation: "overrides",
                        overrides: u
                    }), s
                }))
            }

            function vn(t, r) {
                return function(...e) {
                    return gn(t, r, e)
                }
            }

            function yn(t, r) {
                const e = t.signer || t.provider;
                return function(...n) {
                    return ln(this, void 0, void 0, (function*() {
                        e || cn.throwError("estimate require a provider or signer", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "estimateGas"
                        });
                        const i = yield gn(t, r, n);
                        return yield e.estimateGas(i)
                    }))
                }
            }

            function bn(t, r) {
                const e = r.wait.bind(r);
                r.wait = r => e(r).then(r => (r.events = r.logs.map(e => {
                    let n = Oe(e),
                        i = null;
                    try {
                        i = t.interface.parseLog(e)
                    } catch (o) {}
                    return i && (n.args = i.args, n.decode = (r, e) => t.interface.decodeEventLog(i.eventFragment, r, e), n.event = i.name, n.eventSignature = i.signature), n.removeListener = () => t.provider, n.getBlock = () => t.provider.getBlock(r.blockHash), n.getTransaction = () => t.provider.getTransaction(r.transactionHash), n.getTransactionReceipt = () => Promise.resolve(r), n
                }), r))
            }

            function wn(t, r, e) {
                const n = t.signer || t.provider;
                return function(...i) {
                    return ln(this, void 0, void 0, (function*() {
                        let o = void 0;
                        if (i.length === r.inputs.length + 1 && "object" === typeof i[i.length - 1]) {
                            const t = Ne(i.pop());
                            null != t.blockTag && (o = yield t.blockTag), delete t.blockTag, i.push(t)
                        }
                        null != t.deployTransaction && (yield t._deployed(o));
                        const s = yield gn(t, r, i), a = yield n.call(s, o);
                        try {
                            let n = t.interface.decodeFunctionResult(r, a);
                            return e && 1 === r.outputs.length && (n = n[0]), n
                        } catch (u) {
                            throw u.code === Vr.errors.CALL_EXCEPTION && (u.address = t.address, u.args = i, u.transaction = s), u
                        }
                    }))
                }
            }

            function Mn(t, r) {
                return function(...e) {
                    return ln(this, void 0, void 0, (function*() {
                        t.signer || cn.throwError("sending a transaction requires a signer", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "sendTransaction"
                        }), null != t.deployTransaction && (yield t._deployed());
                        const n = yield gn(t, r, e), i = yield t.signer.sendTransaction(n);
                        return bn(t, i), i
                    }))
                }
            }

            function En(t, r, e) {
                return r.constant ? wn(t, r, e) : Mn(t, r)
            }

            function _n(t) {
                return !t.address || null != t.topics && 0 !== t.topics.length ? (t.address || "*") + "@" + (t.topics ? t.topics.map(t => Array.isArray(t) ? t.join("|") : t).join(":") : "") : "*"
            }
            class An {
                constructor(t, r) {
                    Ee(this, "tag", t), Ee(this, "filter", r), this._listeners = []
                }
                addListener(t, r) {
                    this._listeners.push({
                        listener: t,
                        once: r
                    })
                }
                removeListener(t) {
                    let r = !1;
                    this._listeners = this._listeners.filter(e => !(!r && e.listener === t) || (r = !0, !1))
                }
                removeAllListeners() {
                    this._listeners = []
                }
                listeners() {
                    return this._listeners.map(t => t.listener)
                }
                listenerCount() {
                    return this._listeners.length
                }
                run(t) {
                    const r = this.listenerCount();
                    return this._listeners = this._listeners.filter(r => {
                        const e = t.slice();
                        return setTimeout(() => {
                            r.listener.apply(this, e)
                        }, 0), !r.once
                    }), r
                }
                prepareEvent(t) {}
                getEmit(t) {
                    return [t]
                }
            }
            class Nn extends An {
                constructor() {
                    super("error", null)
                }
            }
            class Sn extends An {
                constructor(t, r, e, n) {
                    const i = {
                        address: t
                    };
                    let o = r.getEventTopic(e);
                    n ? (o !== n[0] && cn.throwArgumentError("topic mismatch", "topics", n), i.topics = n.slice()) : i.topics = [o], super(_n(i), i), Ee(this, "address", t), Ee(this, "interface", r), Ee(this, "fragment", e)
                }
                prepareEvent(t) {
                    super.prepareEvent(t), t.event = this.fragment.name, t.eventSignature = this.fragment.format(), t.decode = (t, r) => this.interface.decodeEventLog(this.fragment, t, r);
                    try {
                        t.args = this.interface.decodeEventLog(this.fragment, t.data, t.topics)
                    } catch (r) {
                        t.args = null, t.decodeError = r
                    }
                }
                getEmit(t) {
                    const r = tt(t.args);
                    if (r.length) throw r[0].error;
                    const e = (t.args || []).slice();
                    return e.push(t), e
                }
            }
            class xn extends An {
                constructor(t, r) {
                    super("*", {
                        address: t
                    }), Ee(this, "address", t), Ee(this, "interface", r)
                }
                prepareEvent(t) {
                    super.prepareEvent(t);
                    try {
                        const r = this.interface.parseLog(t);
                        t.event = r.name, t.eventSignature = r.signature, t.decode = (t, e) => this.interface.decodeEventLog(r.eventFragment, t, e), t.args = r.args
                    } catch (r) {}
                }
            }
            class In {
                constructor(t, r, e) {
                    cn.checkNew(new.target, On), Ee(this, "interface", _e(new.target, "getInterface")(r)), null == e ? (Ee(this, "provider", null), Ee(this, "signer", null)) : De.isSigner(e) ? (Ee(this, "provider", e.provider || null), Ee(this, "signer", e)) : Ue.isProvider(e) ? (Ee(this, "provider", e), Ee(this, "signer", null)) : cn.throwArgumentError("invalid signer or provider", "signerOrProvider", e), Ee(this, "callStatic", {}), Ee(this, "estimateGas", {}), Ee(this, "functions", {}), Ee(this, "populateTransaction", {}), Ee(this, "filters", {}); {
                        const t = {};
                        Object.keys(this.interface.events).forEach(r => {
                            const e = this.interface.events[r];
                            Ee(this.filters, r, (...t) => ({
                                address: this.address,
                                topics: this.interface.encodeFilterTopics(e, t)
                            })), t[e.name] || (t[e.name] = []), t[e.name].push(r)
                        }), Object.keys(t).forEach(r => {
                            const e = t[r];
                            1 === e.length ? Ee(this.filters, r, this.filters[e[0]]) : cn.warn(`Duplicate definition of ${r} (${e.join(", ")})`)
                        })
                    }
                    if (Ee(this, "_runningEvents", {}), Ee(this, "_wrappedEmits", {}), null == t && cn.throwArgumentError("invalid contract address or ENS name", "addressOrName", t), Ee(this, "address", t), this.provider) Ee(this, "resolvedAddress", pn(this.provider, t));
                    else try {
                        Ee(this, "resolvedAddress", Promise.resolve(rn(t)))
                    } catch (o) {
                        cn.throwError("provider is required to use ENS name as contract address", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Contract"
                        })
                    }
                    this.resolvedAddress.catch(t => {});
                    const n = {},
                        i = {};
                    Object.keys(this.interface.functions).forEach(t => {
                        const r = this.interface.functions[t];
                        if (i[t]) cn.warn("Duplicate ABI entry for " + JSON.stringify(t));
                        else {
                            i[t] = !0; {
                                const e = r.name;
                                n["%" + e] || (n["%" + e] = []), n["%" + e].push(t)
                            }
                            null == this[t] && Ee(this, t, En(this, r, !0)), null == this.functions[t] && Ee(this.functions, t, En(this, r, !1)), null == this.callStatic[t] && Ee(this.callStatic, t, wn(this, r, !0)), null == this.populateTransaction[t] && Ee(this.populateTransaction, t, vn(this, r)), null == this.estimateGas[t] && Ee(this.estimateGas, t, yn(this, r))
                        }
                    }), Object.keys(n).forEach(t => {
                        const r = n[t];
                        if (r.length > 1) return;
                        t = t.substring(1);
                        const e = r[0];
                        try {
                            null == this[t] && Ee(this, t, this[e])
                        } catch (i) {}
                        null == this.functions[t] && Ee(this.functions, t, this.functions[e]), null == this.callStatic[t] && Ee(this.callStatic, t, this.callStatic[e]), null == this.populateTransaction[t] && Ee(this.populateTransaction, t, this.populateTransaction[e]), null == this.estimateGas[t] && Ee(this.estimateGas, t, this.estimateGas[e])
                    })
                }
                static getContractAddress(t) {
                    return en(t)
                }
                static getInterface(t) {
                    return Pr.isInterface(t) ? t : new Pr(t)
                }
                deployed() {
                    return this._deployed()
                }
                _deployed(t) {
                    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, t).then(t => ("0x" === t && cn.throwError("contract not deployed", Vr.errors.UNSUPPORTED_OPERATION, {
                        contractAddress: this.address,
                        operation: "getDeployed"
                    }), this))), this._deployedPromise
                }
                fallback(t) {
                    this.signer || cn.throwError("sending a transactions require a signer", Vr.errors.UNSUPPORTED_OPERATION, {
                        operation: "sendTransaction(fallback)"
                    });
                    const r = Ne(t || {});
                    return ["from", "to"].forEach((function(t) {
                        null != r[t] && cn.throwError("cannot override " + t, Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: t
                        })
                    })), r.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(r))
                }
                connect(t) {
                    "string" === typeof t && (t = new qe(t, this.provider));
                    const r = new this.constructor(this.address, this.interface, t);
                    return this.deployTransaction && Ee(r, "deployTransaction", this.deployTransaction), r
                }
                attach(t) {
                    return new this.constructor(t, this.interface, this.signer || this.provider)
                }
                static isIndexed(t) {
                    return Ir.isIndexed(t)
                }
                _normalizeRunningEvent(t) {
                    return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t
                }
                _getRunningEvent(t) {
                    if ("string" === typeof t) {
                        if ("error" === t) return this._normalizeRunningEvent(new Nn);
                        if ("event" === t) return this._normalizeRunningEvent(new An("event", null));
                        if ("*" === t) return this._normalizeRunningEvent(new xn(this.address, this.interface));
                        const r = this.interface.getEvent(t);
                        return this._normalizeRunningEvent(new Sn(this.address, this.interface, r))
                    }
                    if (t.topics && t.topics.length > 0) {
                        try {
                            const r = t.topics[0];
                            if ("string" !== typeof r) throw new Error("invalid topic");
                            const e = this.interface.getEvent(r);
                            return this._normalizeRunningEvent(new Sn(this.address, this.interface, e, t.topics))
                        } catch (r) {}
                        const e = {
                            address: this.address,
                            topics: t.topics
                        };
                        return this._normalizeRunningEvent(new An(_n(e), e))
                    }
                    return this._normalizeRunningEvent(new xn(this.address, this.interface))
                }
                _checkRunningEvents(t) {
                    if (0 === t.listenerCount()) {
                        delete this._runningEvents[t.tag];
                        const r = this._wrappedEmits[t.tag];
                        r && t.filter && (this.provider.off(t.filter, r), delete this._wrappedEmits[t.tag])
                    }
                }
                _wrapEvent(t, r, e) {
                    const n = Oe(r);
                    return n.removeListener = () => {
                        e && (t.removeListener(e), this._checkRunningEvents(t))
                    }, n.getBlock = () => this.provider.getBlock(r.blockHash), n.getTransaction = () => this.provider.getTransaction(r.transactionHash), n.getTransactionReceipt = () => this.provider.getTransactionReceipt(r.transactionHash), t.prepareEvent(n), n
                }
                _addEventListener(t, r, e) {
                    if (this.provider || cn.throwError("events require a provider or a signer with a provider", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "once"
                        }), t.addListener(r, e), this._runningEvents[t.tag] = t, !this._wrappedEmits[t.tag]) {
                        const e = e => {
                            let n = this._wrapEvent(t, e, r);
                            if (null == n.decodeError) try {
                                const r = t.getEmit(n);
                                this.emit(t.filter, ...r)
                            } catch (i) {
                                n.decodeError = i.error
                            }
                            null != t.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n)
                        };
                        this._wrappedEmits[t.tag] = e, null != t.filter && this.provider.on(t.filter, e)
                    }
                }
                queryFilter(t, r, e) {
                    const n = this._getRunningEvent(t),
                        i = Ne(n.filter);
                    return "string" === typeof r && ee(r, 32) ? (null != e && cn.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", e), i.blockHash = r) : (i.fromBlock = null != r ? r : 0, i.toBlock = null != e ? e : "latest"), this.provider.getLogs(i).then(t => t.map(t => this._wrapEvent(n, t, null)))
                }
                on(t, r) {
                    return this._addEventListener(this._getRunningEvent(t), r, !1), this
                }
                once(t, r) {
                    return this._addEventListener(this._getRunningEvent(t), r, !0), this
                }
                emit(t, ...r) {
                    if (!this.provider) return !1;
                    const e = this._getRunningEvent(t),
                        n = e.run(r) > 0;
                    return this._checkRunningEvents(e), n
                }
                listenerCount(t) {
                    return this.provider ? null == t ? Object.keys(this._runningEvents).reduce((t, r) => t + this._runningEvents[r].listenerCount(), 0) : this._getRunningEvent(t).listenerCount() : 0
                }
                listeners(t) {
                    if (!this.provider) return [];
                    if (null == t) {
                        const t = [];
                        for (let r in this._runningEvents) this._runningEvents[r].listeners().forEach(r => {
                            t.push(r)
                        });
                        return t
                    }
                    return this._getRunningEvent(t).listeners()
                }
                removeAllListeners(t) {
                    if (!this.provider) return this;
                    if (null == t) {
                        for (const t in this._runningEvents) {
                            const r = this._runningEvents[t];
                            r.removeAllListeners(), this._checkRunningEvents(r)
                        }
                        return this
                    }
                    const r = this._getRunningEvent(t);
                    return r.removeAllListeners(), this._checkRunningEvents(r), this
                }
                off(t, r) {
                    if (!this.provider) return this;
                    const e = this._getRunningEvent(t);
                    return e.removeListener(r), this._checkRunningEvents(e), this
                }
                removeListener(t, r) {
                    return this.off(t, r)
                }
            }
            class On extends In {}
            class Rn {
                constructor(t, r, e) {
                    let n = null;
                    n = "string" === typeof r ? r : Yr(r) ? ie(r) : r && "string" === typeof r.object ? r.object : "!", "0x" !== n.substring(0, 2) && (n = "0x" + n), (!ee(n) || n.length % 2) && cn.throwArgumentError("invalid bytecode", "bytecode", r), e && !De.isSigner(e) && cn.throwArgumentError("invalid signer", "signer", e), Ee(this, "bytecode", n), Ee(this, "interface", _e(new.target, "getInterface")(t)), Ee(this, "signer", e || null)
                }
                getDeployTransaction(...t) {
                    let r = {};
                    if (t.length === this.interface.deploy.inputs.length + 1 && "object" === typeof t[t.length - 1]) {
                        r = Ne(t.pop());
                        for (const t in r)
                            if (!dn[t]) throw new Error("unknown transaction override " + t)
                    }
                    if (["data", "from", "to"].forEach(t => {
                            null != r[t] && cn.throwError("cannot override " + t, Vr.errors.UNSUPPORTED_OPERATION, {
                                operation: t
                            })
                        }), r.value) {
                        const t = de.from(r.value);
                        t.isZero() || this.interface.deploy.payable || cn.throwError("non-payable constructor cannot override value", Vr.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: r.value
                        })
                    }
                    return cn.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor"), r.data = ie(te([this.bytecode, this.interface.encodeDeploy(t)])), r
                }
                deploy(...t) {
                    return ln(this, void 0, void 0, (function*() {
                        let r = {};
                        t.length === this.interface.deploy.inputs.length + 1 && (r = t.pop()), cn.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor");
                        const e = yield mn(this.signer, t, this.interface.deploy.inputs);
                        e.push(r);
                        const n = this.getDeployTransaction(...e),
                            i = yield this.signer.sendTransaction(n), o = _e(this.constructor, "getContractAddress")(i), s = _e(this.constructor, "getContract")(o, this.interface, this.signer);
                        return bn(s, i), Ee(s, "deployTransaction", i), s
                    }))
                }
                attach(t) {
                    return this.constructor.getContract(t, this.interface, this.signer)
                }
                connect(t) {
                    return new this.constructor(this.interface, this.bytecode, t)
                }
                static fromSolidity(t, r) {
                    null == t && cn.throwError("missing compiler output", Vr.errors.MISSING_ARGUMENT, {
                        argument: "compilerOutput"
                    }), "string" === typeof t && (t = JSON.parse(t));
                    const e = t.abi;
                    let n = null;
                    return t.bytecode ? n = t.bytecode : t.evm && t.evm.bytecode && (n = t.evm.bytecode), new this(e, n, r)
                }
                static getInterface(t) {
                    return On.getInterface(t)
                }
                static getContractAddress(t) {
                    return en(t)
                }
                static getContract(t, r, e) {
                    return new On(t, r, e)
                }
            }
        },
        fa0c: function(t, r, e) {
            "use strict";
            (function(t) {
                e.d(r, "a", (function() {
                    return K
                }));
                var n = e("3147"),
                    i = e.n(n),
                    o = e("7d92"),
                    s = e.n(o);
                "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t || "undefined" !== typeof self && self;

                function a(t, r, e) {
                    return e = {
                        path: r,
                        exports: {},
                        require: function(t, r) {
                            return u(t, void 0 === r || null === r ? e.path : r)
                        }
                    }, t(e, e.exports), e.exports
                }

                function u() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }
                var h = f;

                function f(t, r) {
                    if (!t) throw new Error(r || "Assertion failed")
                }
                f.equal = function(t, r, e) {
                    if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
                };
                var l = a((function(t, r) {
                        var e = r;

                        function n(t, r) {
                            if (Array.isArray(t)) return t.slice();
                            if (!t) return [];
                            var e = [];
                            if ("string" !== typeof t) {
                                for (var n = 0; n < t.length; n++) e[n] = 0 | t[n];
                                return e
                            }
                            if ("hex" === r) {
                                t = t.replace(/[^a-z0-9]+/gi, ""), t.length % 2 !== 0 && (t = "0" + t);
                                for (n = 0; n < t.length; n += 2) e.push(parseInt(t[n] + t[n + 1], 16))
                            } else
                                for (n = 0; n < t.length; n++) {
                                    var i = t.charCodeAt(n),
                                        o = i >> 8,
                                        s = 255 & i;
                                    o ? e.push(o, s) : e.push(s)
                                }
                            return e
                        }

                        function i(t) {
                            return 1 === t.length ? "0" + t : t
                        }

                        function o(t) {
                            for (var r = "", e = 0; e < t.length; e++) r += i(t[e].toString(16));
                            return r
                        }
                        e.toArray = n, e.zero2 = i, e.toHex = o, e.encode = function(t, r) {
                            return "hex" === r ? o(t) : t
                        }
                    })),
                    c = a((function(t, r) {
                        var e = r;

                        function n(t, r, e) {
                            var n = new Array(Math.max(t.bitLength(), e) + 1);
                            n.fill(0);
                            for (var i = 1 << r + 1, o = t.clone(), s = 0; s < n.length; s++) {
                                var a, u = o.andln(i - 1);
                                o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                            }
                            return n
                        }

                        function o(t, r) {
                            var e = [
                                [],
                                []
                            ];
                            t = t.clone(), r = r.clone();
                            var n, i = 0,
                                o = 0;
                            while (t.cmpn(-i) > 0 || r.cmpn(-o) > 0) {
                                var s, a, u = t.andln(3) + i & 3,
                                    h = r.andln(3) + o & 3;
                                3 === u && (u = -1), 3 === h && (h = -1), 0 === (1 & u) ? s = 0 : (n = t.andln(7) + i & 7, s = 3 !== n && 5 !== n || 2 !== h ? u : -u), e[0].push(s), 0 === (1 & h) ? a = 0 : (n = r.andln(7) + o & 7, a = 3 !== n && 5 !== n || 2 !== u ? h : -h), e[1].push(a), 2 * i === s + 1 && (i = 1 - i), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), r.iushrn(1)
                            }
                            return e
                        }

                        function s(t, r, e) {
                            var n = "_" + r;
                            t.prototype[r] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = e.call(this)
                            }
                        }

                        function a(t) {
                            return "string" === typeof t ? e.toArray(t, "hex") : t
                        }

                        function u(t) {
                            return new i.a(t, "hex", "le")
                        }
                        e.assert = h, e.toArray = l.toArray, e.zero2 = l.zero2, e.toHex = l.toHex, e.encode = l.encode, e.getNAF = n, e.getJSF = o, e.cachedProperty = s, e.parseBytes = a, e.intFromLE = u
                    })),
                    d = c.getNAF,
                    p = c.getJSF,
                    m = c.assert;

                function g(t, r) {
                    this.type = t, this.p = new i.a(r.p, 16), this.red = r.prime ? i.a.red(r.prime) : i.a.mont(this.p), this.zero = new i.a(0).toRed(this.red), this.one = new i.a(1).toRed(this.red), this.two = new i.a(2).toRed(this.red), this.n = r.n && new i.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var e = this.n && this.p.div(this.n);
                    !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var v = g;

                function y(t, r) {
                    this.curve = t, this.type = r, this.precomputed = null
                }
                g.prototype.point = function() {
                    throw new Error("Not implemented")
                }, g.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, g.prototype._fixedNafMul = function(t, r) {
                    m(t.precomputed);
                    var e = t._getDoubles(),
                        n = d(r, 1, this._bitLength),
                        i = (1 << e.step + 1) - (e.step % 2 === 0 ? 2 : 1);
                    i /= 3;
                    var o, s, a = [];
                    for (o = 0; o < n.length; o += e.step) {
                        s = 0;
                        for (var u = o + e.step - 1; u >= o; u--) s = (s << 1) + n[u];
                        a.push(s)
                    }
                    for (var h = this.jpoint(null, null, null), f = this.jpoint(null, null, null), l = i; l > 0; l--) {
                        for (o = 0; o < a.length; o++) s = a[o], s === l ? f = f.mixedAdd(e.points[o]) : s === -l && (f = f.mixedAdd(e.points[o].neg()));
                        h = h.add(f)
                    }
                    return h.toP()
                }, g.prototype._wnafMul = function(t, r) {
                    var e = 4,
                        n = t._getNAFPoints(e);
                    e = n.wnd;
                    for (var i = n.points, o = d(r, e, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                        for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
                        if (a >= 0 && u++, s = s.dblp(u), a < 0) break;
                        var h = o[a];
                        m(0 !== h), s = "affine" === t.type ? h > 0 ? s.mixedAdd(i[h - 1 >> 1]) : s.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? s.add(i[h - 1 >> 1]) : s.add(i[-h - 1 >> 1].neg())
                    }
                    return "affine" === t.type ? s.toP() : s
                }, g.prototype._wnafMulAdd = function(t, r, e, n, i) {
                    var o, s, a, u = this._wnafT1,
                        h = this._wnafT2,
                        f = this._wnafT3,
                        l = 0;
                    for (o = 0; o < n; o++) {
                        a = r[o];
                        var c = a._getNAFPoints(t);
                        u[o] = c.wnd, h[o] = c.points
                    }
                    for (o = n - 1; o >= 1; o -= 2) {
                        var m = o - 1,
                            g = o;
                        if (1 === u[m] && 1 === u[g]) {
                            var v = [r[m], null, null, r[g]];
                            0 === r[m].y.cmp(r[g].y) ? (v[1] = r[m].add(r[g]), v[2] = r[m].toJ().mixedAdd(r[g].neg())) : 0 === r[m].y.cmp(r[g].y.redNeg()) ? (v[1] = r[m].toJ().mixedAdd(r[g]), v[2] = r[m].add(r[g].neg())) : (v[1] = r[m].toJ().mixedAdd(r[g]), v[2] = r[m].toJ().mixedAdd(r[g].neg()));
                            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                b = p(e[m], e[g]);
                            for (l = Math.max(b[0].length, l), f[m] = new Array(l), f[g] = new Array(l), s = 0; s < l; s++) {
                                var w = 0 | b[0][s],
                                    M = 0 | b[1][s];
                                f[m][s] = y[3 * (w + 1) + (M + 1)], f[g][s] = 0, h[m] = v
                            }
                        } else f[m] = d(e[m], u[m], this._bitLength), f[g] = d(e[g], u[g], this._bitLength), l = Math.max(f[m].length, l), l = Math.max(f[g].length, l)
                    }
                    var E = this.jpoint(null, null, null),
                        _ = this._wnafT4;
                    for (o = l; o >= 0; o--) {
                        var A = 0;
                        while (o >= 0) {
                            var N = !0;
                            for (s = 0; s < n; s++) _[s] = 0 | f[s][o], 0 !== _[s] && (N = !1);
                            if (!N) break;
                            A++, o--
                        }
                        if (o >= 0 && A++, E = E.dblp(A), o < 0) break;
                        for (s = 0; s < n; s++) {
                            var S = _[s];
                            0 !== S && (S > 0 ? a = h[s][S - 1 >> 1] : S < 0 && (a = h[s][-S - 1 >> 1].neg()), E = "affine" === a.type ? E.mixedAdd(a) : E.add(a))
                        }
                    }
                    for (o = 0; o < n; o++) h[o] = null;
                    return i ? E : E.toP()
                }, g.BasePoint = y, y.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, y.prototype.validate = function() {
                    return this.curve.validate(this)
                }, g.prototype.decodePoint = function(t, r) {
                    t = c.toArray(t, r);
                    var e = this.p.byteLength();
                    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 === 2 * e) {
                        6 === t[0] ? m(t[t.length - 1] % 2 === 0) : 7 === t[0] && m(t[t.length - 1] % 2 === 1);
                        var n = this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
                        return n
                    }
                    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e) return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
                    throw new Error("Unknown point format")
                }, y.prototype.encodeCompressed = function(t) {
                    return this.encode(t, !0)
                }, y.prototype._encode = function(t) {
                    var r = this.curve.p.byteLength(),
                        e = this.getX().toArray("be", r);
                    return t ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", r))
                }, y.prototype.encode = function(t, r) {
                    return c.encode(this._encode(r), t)
                }, y.prototype.precompute = function(t) {
                    if (this.precomputed) return this;
                    var r = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this
                }, y.prototype._hasDoubles = function(t) {
                    if (!this.precomputed) return !1;
                    var r = this.precomputed.doubles;
                    return !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
                }, y.prototype._getDoubles = function(t, r) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var e = [this], n = this, i = 0; i < r; i += t) {
                        for (var o = 0; o < t; o++) n = n.dbl();
                        e.push(n)
                    }
                    return {
                        step: t,
                        points: e
                    }
                }, y.prototype._getNAFPoints = function(t) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var r = [this], e = (1 << t) - 1, n = 1 === e ? null : this.dbl(), i = 1; i < e; i++) r[i] = r[i - 1].add(n);
                    return {
                        wnd: t,
                        points: r
                    }
                }, y.prototype._getBeta = function() {
                    return null
                }, y.prototype.dblp = function(t) {
                    for (var r = this, e = 0; e < t; e++) r = r.dbl();
                    return r
                };
                var b = a((function(t) {
                        "function" === typeof Object.create ? t.exports = function(t, r) {
                            r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(t, r) {
                            if (r) {
                                t.super_ = r;
                                var e = function() {};
                                e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                            }
                        }
                    })),
                    w = c.assert;

                function M(t) {
                    v.call(this, "short", t), this.a = new i.a(t.a, 16).toRed(this.red), this.b = new i.a(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                b(M, v);
                var E = M;

                function _(t, r, e, n) {
                    v.BasePoint.call(this, t, "affine"), null === r && null === e ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i.a(r, 16), this.y = new i.a(e, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function A(t, r, e, n) {
                    v.BasePoint.call(this, t, "jacobian"), null === r && null === e && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i.a(0)) : (this.x = new i.a(r, 16), this.y = new i.a(e, 16), this.z = new i.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                M.prototype._getEndomorphism = function(t) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var r, e, n;
                        if (t.beta) r = new i.a(t.beta, 16).toRed(this.red);
                        else {
                            var o = this._getEndoRoots(this.p);
                            r = o[0].cmp(o[1]) < 0 ? o[0] : o[1], r = r.toRed(this.red)
                        }
                        if (t.lambda) e = new i.a(t.lambda, 16);
                        else {
                            var s = this._getEndoRoots(this.n);
                            0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(r)) ? e = s[0] : (e = s[1], w(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))))
                        }
                        return n = t.basis ? t.basis.map((function(t) {
                            return {
                                a: new i.a(t.a, 16),
                                b: new i.a(t.b, 16)
                            }
                        })) : this._getEndoBasis(e), {
                            beta: r,
                            lambda: e,
                            basis: n
                        }
                    }
                }, M.prototype._getEndoRoots = function(t) {
                    var r = t === this.p ? this.red : i.a.mont(t),
                        e = new i.a(2).toRed(r).redInvm(),
                        n = e.redNeg(),
                        o = new i.a(3).toRed(r).redNeg().redSqrt().redMul(e),
                        s = n.redAdd(o).fromRed(),
                        a = n.redSub(o).fromRed();
                    return [s, a]
                }, M.prototype._getEndoBasis = function(t) {
                    var r, e, n, o, s, a, u, h, f, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                        c = t,
                        d = this.n.clone(),
                        p = new i.a(1),
                        m = new i.a(0),
                        g = new i.a(0),
                        v = new i.a(1),
                        y = 0;
                    while (0 !== c.cmpn(0)) {
                        var b = d.div(c);
                        h = d.sub(b.mul(c)), f = g.sub(b.mul(p));
                        var w = v.sub(b.mul(m));
                        if (!n && h.cmp(l) < 0) r = u.neg(), e = p, n = h.neg(), o = f;
                        else if (n && 2 === ++y) break;
                        u = h, d = c, c = h, g = p, p = f, v = m, m = w
                    }
                    s = h.neg(), a = f;
                    var M = n.sqr().add(o.sqr()),
                        E = s.sqr().add(a.sqr());
                    return E.cmp(M) >= 0 && (s = r, a = e), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                        a: n,
                        b: o
                    }, {
                        a: s,
                        b: a
                    }]
                }, M.prototype._endoSplit = function(t) {
                    var r = this.endo.basis,
                        e = r[0],
                        n = r[1],
                        i = n.b.mul(t).divRound(this.n),
                        o = e.b.neg().mul(t).divRound(this.n),
                        s = i.mul(e.a),
                        a = o.mul(n.a),
                        u = i.mul(e.b),
                        h = o.mul(n.b),
                        f = t.sub(s).sub(a),
                        l = u.add(h).neg();
                    return {
                        k1: f,
                        k2: l
                    }
                }, M.prototype.pointFromX = function(t, r) {
                    t = new i.a(t, 16), t.red || (t = t.toRed(this.red));
                    var e = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                        n = e.redSqrt();
                    if (0 !== n.redSqr().redSub(e).cmp(this.zero)) throw new Error("invalid point");
                    var o = n.fromRed().isOdd();
                    return (r && !o || !r && o) && (n = n.redNeg()), this.point(t, n)
                }, M.prototype.validate = function(t) {
                    if (t.inf) return !0;
                    var r = t.x,
                        e = t.y,
                        n = this.a.redMul(r),
                        i = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
                    return 0 === e.redSqr().redISub(i).cmpn(0)
                }, M.prototype._endoWnafMulAdd = function(t, r, e) {
                    for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                        var s = this._endoSplit(r[o]),
                            a = t[o],
                            u = a._getBeta();
                        s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                    }
                    for (var h = this._wnafMulAdd(1, n, i, 2 * o, e), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null;
                    return h
                }, b(_, v.BasePoint), M.prototype.point = function(t, r, e) {
                    return new _(this, t, r, e)
                }, M.prototype.pointFromJSON = function(t, r) {
                    return _.fromJSON(this, t, r)
                }, _.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var t = this.precomputed;
                        if (t && t.beta) return t.beta;
                        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (t) {
                            var e = this.curve,
                                n = function(t) {
                                    return e.point(t.x.redMul(e.endo.beta), t.y)
                                };
                            t.beta = r, r.precomputed = {
                                beta: null,
                                naf: t.naf && {
                                    wnd: t.naf.wnd,
                                    points: t.naf.points.map(n)
                                },
                                doubles: t.doubles && {
                                    step: t.doubles.step,
                                    points: t.doubles.points.map(n)
                                }
                            }
                        }
                        return r
                    }
                }, _.prototype.toJSON = function() {
                    return this.precomputed ? [this.x, this.y, this.precomputed && {
                        doubles: this.precomputed.doubles && {
                            step: this.precomputed.doubles.step,
                            points: this.precomputed.doubles.points.slice(1)
                        },
                        naf: this.precomputed.naf && {
                            wnd: this.precomputed.naf.wnd,
                            points: this.precomputed.naf.points.slice(1)
                        }
                    }] : [this.x, this.y]
                }, _.fromJSON = function(t, r, e) {
                    "string" === typeof r && (r = JSON.parse(r));
                    var n = t.point(r[0], r[1], e);
                    if (!r[2]) return n;

                    function i(r) {
                        return t.point(r[0], r[1], e)
                    }
                    var o = r[2];
                    return n.precomputed = {
                        beta: null,
                        doubles: o.doubles && {
                            step: o.doubles.step,
                            points: [n].concat(o.doubles.points.map(i))
                        },
                        naf: o.naf && {
                            wnd: o.naf.wnd,
                            points: [n].concat(o.naf.points.map(i))
                        }
                    }, n
                }, _.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, _.prototype.isInfinity = function() {
                    return this.inf
                }, _.prototype.add = function(t) {
                    if (this.inf) return t;
                    if (t.inf) return this;
                    if (this.eq(t)) return this.dbl();
                    if (this.neg().eq(t)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                    var r = this.y.redSub(t.y);
                    0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
                    var e = r.redSqr().redISub(this.x).redISub(t.x),
                        n = r.redMul(this.x.redSub(e)).redISub(this.y);
                    return this.curve.point(e, n)
                }, _.prototype.dbl = function() {
                    if (this.inf) return this;
                    var t = this.y.redAdd(this.y);
                    if (0 === t.cmpn(0)) return this.curve.point(null, null);
                    var r = this.curve.a,
                        e = this.x.redSqr(),
                        n = t.redInvm(),
                        i = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(n),
                        o = i.redSqr().redISub(this.x.redAdd(this.x)),
                        s = i.redMul(this.x.redSub(o)).redISub(this.y);
                    return this.curve.point(o, s)
                }, _.prototype.getX = function() {
                    return this.x.fromRed()
                }, _.prototype.getY = function() {
                    return this.y.fromRed()
                }, _.prototype.mul = function(t) {
                    return t = new i.a(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
                }, _.prototype.mulAdd = function(t, r, e) {
                    var n = [this, r],
                        i = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
                }, _.prototype.jmulAdd = function(t, r, e) {
                    var n = [this, r],
                        i = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
                }, _.prototype.eq = function(t) {
                    return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
                }, _.prototype.neg = function(t) {
                    if (this.inf) return this;
                    var r = this.curve.point(this.x, this.y.redNeg());
                    if (t && this.precomputed) {
                        var e = this.precomputed,
                            n = function(t) {
                                return t.neg()
                            };
                        r.precomputed = {
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(n)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(n)
                            }
                        }
                    }
                    return r
                }, _.prototype.toJ = function() {
                    if (this.inf) return this.curve.jpoint(null, null, null);
                    var t = this.curve.jpoint(this.x, this.y, this.curve.one);
                    return t
                }, b(A, v.BasePoint), M.prototype.jpoint = function(t, r, e) {
                    return new A(this, t, r, e)
                }, A.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var t = this.z.redInvm(),
                        r = t.redSqr(),
                        e = this.x.redMul(r),
                        n = this.y.redMul(r).redMul(t);
                    return this.curve.point(e, n)
                }, A.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, A.prototype.add = function(t) {
                    if (this.isInfinity()) return t;
                    if (t.isInfinity()) return this;
                    var r = t.z.redSqr(),
                        e = this.z.redSqr(),
                        n = this.x.redMul(r),
                        i = t.x.redMul(e),
                        o = this.y.redMul(r.redMul(t.z)),
                        s = t.y.redMul(e.redMul(this.z)),
                        a = n.redSub(i),
                        u = o.redSub(s);
                    if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h = a.redSqr(),
                        f = h.redMul(a),
                        l = n.redMul(h),
                        c = u.redSqr().redIAdd(f).redISub(l).redISub(l),
                        d = u.redMul(l.redISub(c)).redISub(o.redMul(f)),
                        p = this.z.redMul(t.z).redMul(a);
                    return this.curve.jpoint(c, d, p)
                }, A.prototype.mixedAdd = function(t) {
                    if (this.isInfinity()) return t.toJ();
                    if (t.isInfinity()) return this;
                    var r = this.z.redSqr(),
                        e = this.x,
                        n = t.x.redMul(r),
                        i = this.y,
                        o = t.y.redMul(r).redMul(this.z),
                        s = e.redSub(n),
                        a = i.redSub(o);
                    if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var u = s.redSqr(),
                        h = u.redMul(s),
                        f = e.redMul(u),
                        l = a.redSqr().redIAdd(h).redISub(f).redISub(f),
                        c = a.redMul(f.redISub(l)).redISub(i.redMul(h)),
                        d = this.z.redMul(s);
                    return this.curve.jpoint(l, c, d)
                }, A.prototype.dblp = function(t) {
                    if (0 === t) return this;
                    if (this.isInfinity()) return this;
                    if (!t) return this.dbl();
                    var r;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var e = this;
                        for (r = 0; r < t; r++) e = e.dbl();
                        return e
                    }
                    var n = this.curve.a,
                        i = this.curve.tinv,
                        o = this.x,
                        s = this.y,
                        a = this.z,
                        u = a.redSqr().redSqr(),
                        h = s.redAdd(s);
                    for (r = 0; r < t; r++) {
                        var f = o.redSqr(),
                            l = h.redSqr(),
                            c = l.redSqr(),
                            d = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
                            p = o.redMul(l),
                            m = d.redSqr().redISub(p.redAdd(p)),
                            g = p.redISub(m),
                            v = d.redMul(g);
                        v = v.redIAdd(v).redISub(c);
                        var y = h.redMul(a);
                        r + 1 < t && (u = u.redMul(c)), o = m, a = y, h = v
                    }
                    return this.curve.jpoint(o, h.redMul(i), a)
                }, A.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, A.prototype._zeroDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            i = this.y.redSqr(),
                            o = i.redSqr(),
                            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var a = n.redAdd(n).redIAdd(n),
                            u = a.redSqr().redISub(s).redISub(s),
                            h = o.redIAdd(o);
                        h = h.redIAdd(h), h = h.redIAdd(h), t = u, r = a.redMul(s.redISub(u)).redISub(h), e = this.y.redAdd(this.y)
                    } else {
                        var f = this.x.redSqr(),
                            l = this.y.redSqr(),
                            c = l.redSqr(),
                            d = this.x.redAdd(l).redSqr().redISub(f).redISub(c);
                        d = d.redIAdd(d);
                        var p = f.redAdd(f).redIAdd(f),
                            m = p.redSqr(),
                            g = c.redIAdd(c);
                        g = g.redIAdd(g), g = g.redIAdd(g), t = m.redISub(d).redISub(d), r = p.redMul(d.redISub(t)).redISub(g), e = this.y.redMul(this.z), e = e.redIAdd(e)
                    }
                    return this.curve.jpoint(t, r, e)
                }, A.prototype._threeDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            i = this.y.redSqr(),
                            o = i.redSqr(),
                            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            u = a.redSqr().redISub(s).redISub(s);
                        t = u;
                        var h = o.redIAdd(o);
                        h = h.redIAdd(h), h = h.redIAdd(h), r = a.redMul(s.redISub(u)).redISub(h), e = this.y.redAdd(this.y)
                    } else {
                        var f = this.z.redSqr(),
                            l = this.y.redSqr(),
                            c = this.x.redMul(l),
                            d = this.x.redSub(f).redMul(this.x.redAdd(f));
                        d = d.redAdd(d).redIAdd(d);
                        var p = c.redIAdd(c);
                        p = p.redIAdd(p);
                        var m = p.redAdd(p);
                        t = d.redSqr().redISub(m), e = this.y.redAdd(this.z).redSqr().redISub(l).redISub(f);
                        var g = l.redSqr();
                        g = g.redIAdd(g), g = g.redIAdd(g), g = g.redIAdd(g), r = d.redMul(p.redISub(t)).redISub(g)
                    }
                    return this.curve.jpoint(t, r, e)
                }, A.prototype._dbl = function() {
                    var t = this.curve.a,
                        r = this.x,
                        e = this.y,
                        n = this.z,
                        i = n.redSqr().redSqr(),
                        o = r.redSqr(),
                        s = e.redSqr(),
                        a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                        u = r.redAdd(r);
                    u = u.redIAdd(u);
                    var h = u.redMul(s),
                        f = a.redSqr().redISub(h.redAdd(h)),
                        l = h.redISub(f),
                        c = s.redSqr();
                    c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                    var d = a.redMul(l).redISub(c),
                        p = e.redAdd(e).redMul(n);
                    return this.curve.jpoint(f, d, p)
                }, A.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var t = this.x.redSqr(),
                        r = this.y.redSqr(),
                        e = this.z.redSqr(),
                        n = r.redSqr(),
                        i = t.redAdd(t).redIAdd(t),
                        o = i.redSqr(),
                        s = this.x.redAdd(r).redSqr().redISub(t).redISub(n);
                    s = s.redIAdd(s), s = s.redAdd(s).redIAdd(s), s = s.redISub(o);
                    var a = s.redSqr(),
                        u = n.redIAdd(n);
                    u = u.redIAdd(u), u = u.redIAdd(u), u = u.redIAdd(u);
                    var h = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
                        f = r.redMul(h);
                    f = f.redIAdd(f), f = f.redIAdd(f);
                    var l = this.x.redMul(a).redISub(f);
                    l = l.redIAdd(l), l = l.redIAdd(l);
                    var c = this.y.redMul(h.redMul(u.redISub(h)).redISub(s.redMul(a)));
                    c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                    var d = this.z.redAdd(s).redSqr().redISub(e).redISub(a);
                    return this.curve.jpoint(l, c, d)
                }, A.prototype.mul = function(t, r) {
                    return t = new i.a(t, r), this.curve._wnafMul(this, t)
                }, A.prototype.eq = function(t) {
                    if ("affine" === t.type) return this.eq(t.toJ());
                    if (this === t) return !0;
                    var r = this.z.redSqr(),
                        e = t.z.redSqr();
                    if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0)) return !1;
                    var n = r.redMul(this.z),
                        i = e.redMul(t.z);
                    return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
                }, A.prototype.eqXToP = function(t) {
                    var r = this.z.redSqr(),
                        e = t.toRed(this.curve.red).redMul(r);
                    if (0 === this.x.cmp(e)) return !0;
                    for (var n = t.clone(), i = this.curve.redN.redMul(r);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (e.redIAdd(i), 0 === this.x.cmp(e)) return !0
                    }
                }, A.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, A.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var N = a((function(t, r) {
                        var e = r;
                        e.base = v, e.short = E, e.mont = null, e.edwards = null
                    })),
                    S = a((function(t, r) {
                        var e, n = r,
                            i = c.assert;

                        function o(t) {
                            "short" === t.type ? this.curve = new N.short(t) : "edwards" === t.type ? this.curve = new N.edwards(t) : this.curve = new N.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function a(t, r) {
                            Object.defineProperty(n, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var e = new o(r);
                                    return Object.defineProperty(n, t, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: e
                                    }), e
                                }
                            })
                        }
                        n.PresetCurve = o, a("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), a("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), a("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), a("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: s.a.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), a("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: s.a.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), a("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), a("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: s.a.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            e = null.crash()
                        } catch (u) {
                            e = void 0
                        }
                        a("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: s.a.sha256,
                            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                            basis: [{
                                a: "3086d221a7d46bcde86c90e49284eb15",
                                b: "-e4437ed6010e88286f547fa90abfe4c3"
                            }, {
                                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                b: "3086d221a7d46bcde86c90e49284eb15"
                            }],
                            gRed: !1,
                            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", e]
                        })
                    }));

                function x(t) {
                    if (!(this instanceof x)) return new x(t);
                    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var r = l.toArray(t.entropy, t.entropyEnc || "hex"),
                        e = l.toArray(t.nonce, t.nonceEnc || "hex"),
                        n = l.toArray(t.pers, t.persEnc || "hex");
                    h(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, e, n)
                }
                var I = x;
                x.prototype._init = function(t, r, e) {
                    var n = t.concat(r).concat(e);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, x.prototype._hmac = function() {
                    return new s.a.hmac(this.hash, this.K)
                }, x.prototype._update = function(t) {
                    var r = this._hmac().update(this.V).update([0]);
                    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
                }, x.prototype.reseed = function(t, r, e, n) {
                    "string" !== typeof r && (n = e, e = r, r = null), t = l.toArray(t, r), e = l.toArray(e, n), h(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(e || [])), this._reseed = 1
                }, x.prototype.generate = function(t, r, e, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" !== typeof r && (n = e, e = r, r = null), e && (e = l.toArray(e, n || "hex"), this._update(e));
                    var i = [];
                    while (i.length < t) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                    var o = i.slice(0, t);
                    return this._update(e), this._reseed++, l.encode(o, r)
                };
                var O = c.assert;

                function R(t, r) {
                    this.ec = t, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
                }
                var P = R;
                R.fromPublic = function(t, r, e) {
                    return r instanceof R ? r : new R(t, {
                        pub: r,
                        pubEnc: e
                    })
                }, R.fromPrivate = function(t, r, e) {
                    return r instanceof R ? r : new R(t, {
                        priv: r,
                        privEnc: e
                    })
                }, R.prototype.validate = function() {
                    var t = this.getPublic();
                    return t.isInfinity() ? {
                        result: !1,
                        reason: "Invalid public key"
                    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "Public key * N != O"
                    } : {
                        result: !1,
                        reason: "Public key is not a point"
                    }
                }, R.prototype.getPublic = function(t, r) {
                    return "string" === typeof t && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
                }, R.prototype.getPrivate = function(t) {
                    return "hex" === t ? this.priv.toString(16, 2) : this.priv
                }, R.prototype._importPrivate = function(t, r) {
                    this.priv = new i.a(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, R.prototype._importPublic = function(t, r) {
                    if (t.x || t.y) return "mont" === this.ec.curve.type ? O(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || O(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                    this.pub = this.ec.curve.decodePoint(t, r)
                }, R.prototype.derive = function(t) {
                    return t.validate() || O(t.validate(), "public point not validated"), t.mul(this.priv).getX()
                }, R.prototype.sign = function(t, r, e) {
                    return this.ec.sign(t, this, r, e)
                }, R.prototype.verify = function(t, r) {
                    return this.ec.verify(t, r, this)
                }, R.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var T = c.assert;

                function U(t, r) {
                    if (t instanceof U) return t;
                    this._importDER(t, r) || (T(t.r && t.s, "Signature without r or s"), this.r = new i.a(t.r, 16), this.s = new i.a(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
                }
                var k = U;

                function C() {
                    this.place = 0
                }

                function j(t, r) {
                    var e = t[r.place++];
                    if (!(128 & e)) return e;
                    var n = 15 & e;
                    if (0 === n || n > 4) return !1;
                    for (var i = 0, o = 0, s = r.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                    return !(i <= 127) && (r.place = s, i)
                }

                function F(t) {
                    var r = 0,
                        e = t.length - 1;
                    while (!t[r] && !(128 & t[r + 1]) && r < e) r++;
                    return 0 === r ? t : t.slice(r)
                }

                function L(t, r) {
                    if (r < 128) t.push(r);
                    else {
                        var e = 1 + (Math.log(r) / Math.LN2 >>> 3);
                        t.push(128 | e);
                        while (--e) t.push(r >>> (e << 3) & 255);
                        t.push(r)
                    }
                }
                U.prototype._importDER = function(t, r) {
                    t = c.toArray(t, r);
                    var e = new C;
                    if (48 !== t[e.place++]) return !1;
                    var n = j(t, e);
                    if (!1 === n) return !1;
                    if (n + e.place !== t.length) return !1;
                    if (2 !== t[e.place++]) return !1;
                    var o = j(t, e);
                    if (!1 === o) return !1;
                    var s = t.slice(e.place, o + e.place);
                    if (e.place += o, 2 !== t[e.place++]) return !1;
                    var a = j(t, e);
                    if (!1 === a) return !1;
                    if (t.length !== a + e.place) return !1;
                    var u = t.slice(e.place, a + e.place);
                    if (0 === s[0]) {
                        if (!(128 & s[1])) return !1;
                        s = s.slice(1)
                    }
                    if (0 === u[0]) {
                        if (!(128 & u[1])) return !1;
                        u = u.slice(1)
                    }
                    return this.r = new i.a(s), this.s = new i.a(u), this.recoveryParam = null, !0
                }, U.prototype.toDER = function(t) {
                    var r = this.r.toArray(),
                        e = this.s.toArray();
                    128 & r[0] && (r = [0].concat(r)), 128 & e[0] && (e = [0].concat(e)), r = F(r), e = F(e);
                    while (!e[0] && !(128 & e[1])) e = e.slice(1);
                    var n = [2];
                    L(n, r.length), n = n.concat(r), n.push(2), L(n, e.length);
                    var i = n.concat(e),
                        o = [48];
                    return L(o, i.length), o = o.concat(i), c.encode(o, t)
                };
                var D = function() {
                        throw new Error("unsupported")
                    },
                    q = c.assert;

                function B(t) {
                    if (!(this instanceof B)) return new B(t);
                    "string" === typeof t && (q(Object.prototype.hasOwnProperty.call(S, t), "Unknown curve " + t), t = S[t]), t instanceof S.PresetCurve && (t = {
                        curve: t
                    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
                }
                var z = B;
                B.prototype.keyPair = function(t) {
                    return new P(this, t)
                }, B.prototype.keyFromPrivate = function(t, r) {
                    return P.fromPrivate(this, t, r)
                }, B.prototype.keyFromPublic = function(t, r) {
                    return P.fromPublic(this, t, r)
                }, B.prototype.genKeyPair = function(t) {
                    t || (t = {});
                    for (var r = new I({
                            hash: this.hash,
                            pers: t.pers,
                            persEnc: t.persEnc || "utf8",
                            entropy: t.entropy || D(this.hash.hmacStrength),
                            entropyEnc: t.entropy && t.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), e = this.n.byteLength(), n = this.n.sub(new i.a(2));;) {
                        var o = new i.a(r.generate(e));
                        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                    }
                }, B.prototype._truncateToN = function(t, r) {
                    var e = 8 * t.byteLength() - this.n.bitLength();
                    return e > 0 && (t = t.ushrn(e)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
                }, B.prototype.sign = function(t, r, e, n) {
                    "object" === typeof e && (n = e, e = null), n || (n = {}), r = this.keyFromPrivate(r, e), t = this._truncateToN(new i.a(t, 16));
                    for (var o = this.n.byteLength(), s = r.getPrivate().toArray("be", o), a = t.toArray("be", o), u = new I({
                            hash: this.hash,
                            entropy: s,
                            nonce: a,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), h = this.n.sub(new i.a(1)), f = 0;; f++) {
                        var l = n.k ? n.k(f) : new i.a(u.generate(this.n.byteLength()));
                        if (l = this._truncateToN(l, !0), !(l.cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                            var c = this.g.mul(l);
                            if (!c.isInfinity()) {
                                var d = c.getX(),
                                    p = d.umod(this.n);
                                if (0 !== p.cmpn(0)) {
                                    var m = l.invm(this.n).mul(p.mul(r.getPrivate()).iadd(t));
                                    if (m = m.umod(this.n), 0 !== m.cmpn(0)) {
                                        var g = (c.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                        return n.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new k({
                                            r: p,
                                            s: m,
                                            recoveryParam: g
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, B.prototype.verify = function(t, r, e, n) {
                    t = this._truncateToN(new i.a(t, 16)), e = this.keyFromPublic(e, n), r = new k(r, "hex");
                    var o = r.r,
                        s = r.s;
                    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var a, u = s.invm(this.n),
                        h = u.mul(t).umod(this.n),
                        f = u.mul(o).umod(this.n);
                    return this.curve._maxwellTrick ? (a = this.g.jmulAdd(h, e.getPublic(), f), !a.isInfinity() && a.eqXToP(o)) : (a = this.g.mulAdd(h, e.getPublic(), f), !a.isInfinity() && 0 === a.getX().umod(this.n).cmp(o))
                }, B.prototype.recoverPubKey = function(t, r, e, n) {
                    q((3 & e) === e, "The recovery param is more than two bits"), r = new k(r, n);
                    var o = this.n,
                        s = new i.a(t),
                        a = r.r,
                        u = r.s,
                        h = 1 & e,
                        f = e >> 1;
                    if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw new Error("Unable to find sencond key candinate");
                    a = f ? this.curve.pointFromX(a.add(this.curve.n), h) : this.curve.pointFromX(a, h);
                    var l = r.r.invm(o),
                        c = o.sub(s).mul(l).umod(o),
                        d = u.mul(l).umod(o);
                    return this.g.mulAdd(c, a, d)
                }, B.prototype.getKeyRecoveryParam = function(t, r, e, n) {
                    if (r = new k(r, n), null !== r.recoveryParam) return r.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var o;
                        try {
                            o = this.recoverPubKey(t, r, i)
                        } catch (t) {
                            continue
                        }
                        if (o.eq(e)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var G = a((function(t, r) {
                        var e = r;
                        e.version = {
                            version: "6.5.4"
                        }.version, e.utils = c, e.rand = function() {
                            throw new Error("unsupported")
                        }, e.curve = N, e.curves = S, e.ec = z, e.eddsa = null
                    })),
                    K = G.ec
            }).call(this, e("c8ba"))
        },
        fe6d: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return o
            })), e.d(r, "e", (function() {
                return s
            })), e.d(r, "a", (function() {
                return a
            })), e.d(r, "c", (function() {
                return u
            })), e.d(r, "d", (function() {
                return h
            }));
            var n = e("c9ac"),
                i = e("b93f");

            function o(t) {
                return "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), Object(n["a"])(t)
            }

            function s(t, r) {
                t = String(t);
                while (t.length < r) t = "0" + t;
                return t
            }

            function a(t) {
                return "string" === typeof t ? Object(i["b"])(t, i["a"].NFKC) : Object(n["a"])(t)
            }

            function u(t, r) {
                let e = t;
                const n = r.toLowerCase().split("/");
                for (let i = 0; i < n.length; i++) {
                    let t = null;
                    for (const r in e)
                        if (r.toLowerCase() === n[i]) {
                            t = e[r];
                            break
                        }
                    if (null === t) return null;
                    e = t
                }
                return e
            }

            function h(t) {
                const r = Object(n["a"])(t);
                r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128;
                const e = Object(n["g"])(r);
                return [e.substring(2, 10), e.substring(10, 14), e.substring(14, 18), e.substring(18, 22), e.substring(22, 34)].join("-")
            }
        },
        ffb2: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return p
            }));
            const n = "logger/5.5.0";
            let i = !1,
                o = !1;
            const s = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let a = s["default"],
                u = null;

            function h() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
                            try {
                                if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                            } catch (e) {
                                t.push(r)
                            }
                        }), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }
            const f = h();
            var l, c;
            (function(t) {
                t["DEBUG"] = "DEBUG", t["INFO"] = "INFO", t["WARNING"] = "WARNING", t["ERROR"] = "ERROR", t["OFF"] = "OFF"
            })(l || (l = {})),
            function(t) {
                t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR", t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED", t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION", t["NETWORK_ERROR"] = "NETWORK_ERROR", t["SERVER_ERROR"] = "SERVER_ERROR", t["TIMEOUT"] = "TIMEOUT", t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN", t["NUMERIC_FAULT"] = "NUMERIC_FAULT", t["MISSING_NEW"] = "MISSING_NEW", t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT", t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT", t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT", t["CALL_EXCEPTION"] = "CALL_EXCEPTION", t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS", t["NONCE_EXPIRED"] = "NONCE_EXPIRED", t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED", t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT", t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"
            }(c || (c = {}));
            const d = "0123456789abcdef";
            class p {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == s[e] && this.throwArgumentError("invalid log level name", "logLevel", t), a > s[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(p.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(p.levels.INFO, t)
                }
                warn(...t) {
                    this._log(p.levels.WARNING, t)
                }
                makeError(t, r, e) {
                    if (o) return this.makeError("censored error", r, {});
                    r || (r = p.errors.UNKNOWN_ERROR), e || (e = {});
                    const n = [];
                    Object.keys(e).forEach(t => {
                        const r = e[t];
                        try {
                            if (r instanceof Uint8Array) {
                                let e = "";
                                for (let t = 0; t < r.length; t++) e += d[r[t] >> 4], e += d[15 & r[t]];
                                n.push(t + "=Uint8Array(0x" + e + ")")
                            } else n.push(t + "=" + JSON.stringify(r))
                        } catch (s) {
                            n.push(t + "=" + JSON.stringify(e[t].toString()))
                        }
                    }), n.push("code=" + r), n.push("version=" + this.version);
                    const i = t;
                    n.length && (t += " (" + n.join(", ") + ")");
                    const s = new Error(t);
                    return s.reason = i, s.code = r, Object.keys(e).forEach((function(t) {
                        s[t] = e[t]
                    })), s
                }
                throwError(t, r, e) {
                    throw this.makeError(t, r, e)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, p.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, e, n) {
                    t || this.throwError(r, e, n)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(t, r) {
                    "number" === typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, p.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, p.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return u || (u = new p(n)), u
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), i) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!t, i = !!r
                }
                static setLogLevel(t) {
                    const r = s[t.toLowerCase()];
                    null != r ? a = r : p.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new p(t)
                }
            }
            p.errors = c, p.levels = l
        },
        ffef: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return m
            }));
            var n = e("c9ac"),
                i = e("1d9a"),
                o = e("806c"),
                s = (e("bc84"), e("7308"));
            const a = "address/5.6.0",
                u = new s["a"](a);

            function h(t) {
                Object(n["j"])(t, 20) || u.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                const r = t.substring(2).split(""),
                    e = new Uint8Array(40);
                for (let n = 0; n < 40; n++) e[n] = r[n].charCodeAt(0);
                const i = Object(n["a"])(Object(o["a"])(e));
                for (let n = 0; n < 40; n += 2) i[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()), (15 & i[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const f = 9007199254740991;

            function l(t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }
            const c = {};
            for (let g = 0; g < 10; g++) c[String(g)] = String(g);
            for (let g = 0; g < 26; g++) c[String.fromCharCode(65 + g)] = String(10 + g);
            const d = Math.floor(l(f));

            function p(t) {
                t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
                let r = t.split("").map(t => c[t]).join("");
                while (r.length >= d) {
                    let t = r.substring(0, d);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let e = String(98 - parseInt(r, 10) % 97);
                while (e.length < 2) e = "0" + e;
                return e
            }

            function m(t) {
                let r = null;
                if ("string" !== typeof t && u.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = h(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && u.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    t.substring(2, 4) !== p(t) && u.throwArgumentError("bad icap checksum", "address", t), r = Object(i["c"])(t.substring(4));
                    while (r.length < 40) r = "0" + r;
                    r = h("0x" + r)
                } else u.throwArgumentError("invalid address", "address", t);
                return r
            }
        }
    }
]);