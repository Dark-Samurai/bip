!function (e) {
    var n = {};
    function t(i) {
        if (n[i])
            return n[i].exports;
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, t),
        a.l = !0,
        a.exports
    }
    t.m = e,
    t.c = n,
    t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    },
    t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e)
                t.d(i, a, function (n) {
                    return e[n]
                }
                    .bind(null, a));
        return i
    },
    t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return t.d(n, "a", n),
        n
    },
    t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    },
    t.p = "",
    t(t.s = 75)
}
([function (e, n) {
            e.exports = require("electron")
        }, function (e, n) {
            e.exports = require("path")
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.newError = n.asArray = n.CURRENT_APP_PACKAGE_FILE_NAME = n.CURRENT_APP_INSTALLER_FILE_NAME = n.XElement = n.parseXml = n.ProgressCallbackTransform = n.UUID = n.parseDn = n.githubUrl = n.getS3LikeProviderBaseUrl = n.configureRequestUrl = n.parseJson = n.safeStringifyJson = n.configureRequestOptionsFromUrl = n.configureRequestOptions = n.safeGetHeader = n.DigestTransform = n.HttpExecutor = n.createHttpError = n.HttpError = n.CancellationError = n.CancellationToken = void 0;
            var i = t(51);
            Object.defineProperty(n, "CancellationToken", {
                enumerable: !0,
                get: function () {
                    return i.CancellationToken
                }
            }),
            Object.defineProperty(n, "CancellationError", {
                enumerable: !0,
                get: function () {
                    return i.CancellationError
                }
            });
            var a = t(52);
            Object.defineProperty(n, "HttpError", {
                enumerable: !0,
                get: function () {
                    return a.HttpError
                }
            }),
            Object.defineProperty(n, "createHttpError", {
                enumerable: !0,
                get: function () {
                    return a.createHttpError
                }
            }),
            Object.defineProperty(n, "HttpExecutor", {
                enumerable: !0,
                get: function () {
                    return a.HttpExecutor
                }
            }),
            Object.defineProperty(n, "DigestTransform", {
                enumerable: !0,
                get: function () {
                    return a.DigestTransform
                }
            }),
            Object.defineProperty(n, "safeGetHeader", {
                enumerable: !0,
                get: function () {
                    return a.safeGetHeader
                }
            }),
            Object.defineProperty(n, "configureRequestOptions", {
                enumerable: !0,
                get: function () {
                    return a.configureRequestOptions
                }
            }),
            Object.defineProperty(n, "configureRequestOptionsFromUrl", {
                enumerable: !0,
                get: function () {
                    return a.configureRequestOptionsFromUrl
                }
            }),
            Object.defineProperty(n, "safeStringifyJson", {
                enumerable: !0,
                get: function () {
                    return a.safeStringifyJson
                }
            }),
            Object.defineProperty(n, "parseJson", {
                enumerable: !0,
                get: function () {
                    return a.parseJson
                }
            }),
            Object.defineProperty(n, "configureRequestUrl", {
                enumerable: !0,
                get: function () {
                    return a.configureRequestUrl
                }
            });
            var o = t(123);
            Object.defineProperty(n, "getS3LikeProviderBaseUrl", {
                enumerable: !0,
                get: function () {
                    return o.getS3LikeProviderBaseUrl
                }
            }),
            Object.defineProperty(n, "githubUrl", {
                enumerable: !0,
                get: function () {
                    return o.githubUrl
                }
            });
            var r = t(124);
            Object.defineProperty(n, "parseDn", {
                enumerable: !0,
                get: function () {
                    return r.parseDn
                }
            });
            var s = t(125);
            Object.defineProperty(n, "UUID", {
                enumerable: !0,
                get: function () {
                    return s.UUID
                }
            });
            var c = t(55);
            Object.defineProperty(n, "ProgressCallbackTransform", {
                enumerable: !0,
                get: function () {
                    return c.ProgressCallbackTransform
                }
            });
            var l = t(126);
            Object.defineProperty(n, "parseXml", {
                enumerable: !0,
                get: function () {
                    return l.parseXml
                }
            }),
            Object.defineProperty(n, "XElement", {
                enumerable: !0,
                get: function () {
                    return l.XElement
                }
            }),
            n.CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe",
            n.CURRENT_APP_PACKAGE_FILE_NAME = "package.7z",
            n.asArray = function (e) {
                return null == e ? [] : Array.isArray(e) ? e : [e]
            },
            n.newError = function (e, n) {
                const t = new Error(e);
                return t.code = n,
                t
            }
        }, function (e, n, t) {
            const i = t(28), {
                MAX_LENGTH: a,
                MAX_SAFE_INTEGER: o
            } = t(27), {
                safeRe: r,
                safeSrc: s,
                t: c
            } = t(21),
            l = t(40), {
                compareIdentifiers: u
            } = t(59);
            class p {
                constructor(e, n) {
                    if (n = l(n), e instanceof p) {
                        if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
                            return e;
                        e = e.version
                    } else if ("string" != typeof e)
                        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                    if (e.length > a)
                        throw new TypeError(`version is longer than ${a} characters`);
                    i("SemVer", e, n),
                    this.options = n,
                    this.loose = !!n.loose,
                    this.includePrerelease = !!n.includePrerelease;
                    const t = e.trim().match(n.loose ? r[c.LOOSE] : r[c.FULL]);
                    if (!t)
                        throw new TypeError("Invalid Version: " + e);
                    if (this.raw = e, this.major = +t[1], this.minor = +t[2], this.patch = +t[3], this.major > o || this.major < 0)
                        throw new TypeError("Invalid major version");
                    if (this.minor > o || this.minor < 0)
                        throw new TypeError("Invalid minor version");
                    if (this.patch > o || this.patch < 0)
                        throw new TypeError("Invalid patch version");
                    t[4] ? this.prerelease = t[4].split(".").map(e => {
                        if (/^[0-9]+$/.test(e)) {
                            const n = +e;
                            if (n >= 0 && n < o)
                                return n
                        }
                        return e
                    }) : this.prerelease = [],
                    this.build = t[5] ? t[5].split(".") : [],
                    this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`,
                    this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
                    this.version
                }
                toString() {
                    return this.version
                }
                compare(e) {
                    if (i("SemVer.compare", this.version, this.options, e), !(e instanceof p)) {
                        if ("string" == typeof e && e === this.version)
                            return 0;
                        e = new p(e, this.options)
                    }
                    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                }
                compareMain(e) {
                    return e instanceof p || (e = new p(e, this.options)),
                    u(this.major, e.major) || u(this.minor, e.minor) || u(this.patch, e.patch)
                }
                comparePre(e) {
                    if (e instanceof p || (e = new p(e, this.options)), this.prerelease.length && !e.prerelease.length)
                        return -1;
                    if (!this.prerelease.length && e.prerelease.length)
                        return 1;
                    if (!this.prerelease.length && !e.prerelease.length)
                        return 0;
                    let n = 0;
                    do {
                        const t = this.prerelease[n],
                        a = e.prerelease[n];
                        if (i("prerelease compare", n, t, a), void 0 === t && void 0 === a)
                            return 0;
                        if (void 0 === a)
                            return 1;
                        if (void 0 === t)
                            return -1;
                        if (t !== a)
                            return u(t, a)
                    } while (++n)
                }
                compareBuild(e) {
                    e instanceof p || (e = new p(e, this.options));
                    let n = 0;
                    do {
                        const t = this.build[n],
                        a = e.build[n];
                        if (i("build compare", n, t, a), void 0 === t && void 0 === a)
                            return 0;
                        if (void 0 === a)
                            return 1;
                        if (void 0 === t)
                            return -1;
                        if (t !== a)
                            return u(t, a)
                    } while (++n)
                }
                inc(e, n, t) {
                    if (e.startsWith("pre")) {
                        if (!n && !1 === t)
                            throw new Error("invalid increment argument: identifier is empty");
                        if (n) {
                            const e = new RegExp(`^${this.options.loose ? s[c.PRERELEASELOOSE] : s[c.PRERELEASE]}$`),
                            t = ("-" + n).match(e);
                            if (!t || t[1] !== n)
                                throw new Error("invalid identifier: " + n)
                        }
                    }
                    switch (e) {
                    case "premajor":
                        this.prerelease.length = 0,
                        this.patch = 0,
                        this.minor = 0,
                        this.major++,
                        this.inc("pre", n, t);
                        break;
                    case "preminor":
                        this.prerelease.length = 0,
                        this.patch = 0,
                        this.minor++,
                        this.inc("pre", n, t);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0,
                        this.inc("patch", n, t),
                        this.inc("pre", n, t);
                        break;
                    case "prerelease":
                        0 === this.prerelease.length && this.inc("patch", n, t),
                        this.inc("pre", n, t);
                        break;
                    case "release":
                        if (0 === this.prerelease.length)
                            throw new Error(`version ${this.raw} is not a prerelease`);
                        this.prerelease.length = 0;
                        break;
                    case "major":
                        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                        this.minor = 0,
                        this.patch = 0,
                        this.prerelease = [];
                        break;
                    case "minor":
                        0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                        this.patch = 0,
                        this.prerelease = [];
                        break;
                    case "patch":
                        0 === this.prerelease.length && this.patch++,
                        this.prerelease = [];
                        break;
                    case "pre": {
                            const e = Number(t) ? 1 : 0;
                            if (0 === this.prerelease.length)
                                this.prerelease = [e];
                            else {
                                let i = this.prerelease.length;
                                for (; --i >= 0; )
                                    "number" == typeof this.prerelease[i] && (this.prerelease[i]++, i = -2);
                                if (-1 === i) {
                                    if (n === this.prerelease.join(".") && !1 === t)
                                        throw new Error("invalid increment argument: identifier already exists");
                                    this.prerelease.push(e)
                                }
                            }
                            if (n) {
                                let i = [n, e];
                                !1 === t && (i = [n]),
                                0 === u(this.prerelease[0], n) ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
                            }
                            break
                        }
                    default:
                        throw new Error("invalid increment argument: " + e)
                    }
                    return this.raw = this.format(),
                    this.build.length && (this.raw += "+" + this.build.join(".")),
                    this
                }
            }
            e.exports = p
        }, function (e, n, t) {
            var i,
            a,
            o = t(6),
            r = t(129),
            s = t(131),
            c = t(132),
            l = t(12);
            function u(e, n) {
                Object.defineProperty(e, i, {
                    get: function () {
                        return n
                    }
                })
            }
            "function" == typeof Symbol && "function" == typeof Symbol.for ? (i = Symbol.for("graceful-fs.queue"), a = Symbol.for("graceful-fs.previous")) : (i = "___graceful-fs.queue", a = "___graceful-fs.previous");
            var p,
            d = function () {};
            if (l.debuglog ? d = l.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (d = function () {
                        var e = l.format.apply(l, arguments);
                        e = "GFS4: " + e.split(/\n/).join("\nGFS4: "),
                        console.error(e)
                    }), !o[i]) {
                var m = global[i] || [];
                u(o, m),
                o.close = function (e) {
                    function n(n, t) {
                        return e.call(o, n, (function (e) {
                                e || g(),
                                "function" == typeof t && t.apply(this, arguments)
                            }))
                    }
                    return Object.defineProperty(n, a, {
                        value: e
                    }),
                    n
                }
                (o.close),
                o.closeSync = function (e) {
                    function n(n) {
                        e.apply(o, arguments),
                        g()
                    }
                    return Object.defineProperty(n, a, {
                        value: e
                    }),
                    n
                }
                (o.closeSync),
                /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function () {
                        d(o[i]),
                        t(56).equal(o[i].length, 0)
                    }))
            }
            function f(e) {
                r(e),
                e.gracefulify = f,
                e.createReadStream = function (n, t) {
                    return new e.ReadStream(n, t)
                },
                e.createWriteStream = function (n, t) {
                    return new e.WriteStream(n, t)
                };
                var n = e.readFile;
                e.readFile = function (e, t, i) {
                    "function" == typeof t && (i = t, t = null);
                    return function e(t, i, a, o) {
                        return n(t, i, (function (n) {
                                !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? "function" == typeof a && a.apply(this, arguments) : h([e, [t, i, a], n, o || Date.now(), Date.now()])
                            }))
                    }
                    (e, t, i)
                };
                var t = e.writeFile;
                e.writeFile = function (e, n, i, a) {
                    "function" == typeof i && (a = i, i = null);
                    return function e(n, i, a, o, r) {
                        return t(n, i, a, (function (t) {
                                !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [n, i, a, o], t, r || Date.now(), Date.now()])
                            }))
                    }
                    (e, n, i, a)
                };
                var i = e.appendFile;
                i && (e.appendFile = function (e, n, t, a) {
                    "function" == typeof t && (a = t, t = null);
                    return function e(n, t, a, o, r) {
                        return i(n, t, a, (function (i) {
                                !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [n, t, a, o], i, r || Date.now(), Date.now()])
                            }))
                    }
                    (e, n, t, a)
                });
                var a = e.copyFile;
                a && (e.copyFile = function (e, n, t, i) {
                    "function" == typeof t && (i = t, t = 0);
                    return function e(n, t, i, o, r) {
                        return a(n, t, i, (function (a) {
                                !a || "EMFILE" !== a.code && "ENFILE" !== a.code ? "function" == typeof o && o.apply(this, arguments) : h([e, [n, t, i, o], a, r || Date.now(), Date.now()])
                            }))
                    }
                    (e, n, t, i)
                });
                var o = e.readdir;
                e.readdir = function (e, n, t) {
                    "function" == typeof n && (t = n, n = null);
                    var i = c.test(process.version) ? function (e, n, t, i) {
                        return o(e, a(e, n, t, i))
                    }
                     : function (e, n, t, i) {
                        return o(e, n, a(e, n, t, i))
                    };
                    return i(e, n, t);
                    function a(e, n, t, a) {
                        return function (o, r) {
                            !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? (r && r.sort && r.sort(), "function" == typeof t && t.call(this, o, r)) : h([i, [e, n, t], o, a || Date.now(), Date.now()])
                        }
                    }
                };
                var c = /^v[0-5]\./;
                if ("v0.8" === process.version.substr(0, 4)) {
                    var l = s(e);
                    g = l.ReadStream,
                    v = l.WriteStream
                }
                var u = e.ReadStream;
                u && (g.prototype = Object.create(u.prototype), g.prototype.open = function () {
                    var e = this;
                    x(e.path, e.flags, e.mode, (function (n, t) {
                            n ? (e.autoClose && e.destroy(), e.emit("error", n)) : (e.fd = t, e.emit("open", t), e.read())
                        }))
                });
                var p = e.WriteStream;
                p && (v.prototype = Object.create(p.prototype), v.prototype.open = function () {
                    var e = this;
                    x(e.path, e.flags, e.mode, (function (n, t) {
                            n ? (e.destroy(), e.emit("error", n)) : (e.fd = t, e.emit("open", t))
                        }))
                }),
                Object.defineProperty(e, "ReadStream", {
                    get: function () {
                        return g
                    },
                    set: function (e) {
                        g = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e, "WriteStream", {
                    get: function () {
                        return v
                    },
                    set: function (e) {
                        v = e
                    },
                    enumerable: !0,
                    configurable: !0
                });
                var d = g;
                Object.defineProperty(e, "FileReadStream", {
                    get: function () {
                        return d
                    },
                    set: function (e) {
                        d = e
                    },
                    enumerable: !0,
                    configurable: !0
                });
                var m = v;
                function g(e, n) {
                    return this instanceof g ? (u.apply(this, arguments), this) : g.apply(Object.create(g.prototype), arguments)
                }
                function v(e, n) {
                    return this instanceof v ? (p.apply(this, arguments), this) : v.apply(Object.create(v.prototype), arguments)
                }
                Object.defineProperty(e, "FileWriteStream", {
                    get: function () {
                        return m
                    },
                    set: function (e) {
                        m = e
                    },
                    enumerable: !0,
                    configurable: !0
                });
                var b = e.open;
                function x(e, n, t, i) {
                    return "function" == typeof t && (i = t, t = null),
                    function e(n, t, i, a, o) {
                        return b(n, t, i, (function (r, s) {
                                !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? "function" == typeof a && a.apply(this, arguments) : h([e, [n, t, i, a], r, o || Date.now(), Date.now()])
                            }))
                    }
                    (e, n, t, i)
                }
                return e.open = x,
                e
            }
            function h(e) {
                d("ENQUEUE", e[0].name, e[1]),
                o[i].push(e),
                v()
            }
            function g() {
                for (var e = Date.now(), n = 0; n < o[i].length; ++n)
                    o[i][n].length > 2 && (o[i][n][3] = e, o[i][n][4] = e);
                v()
            }
            function v() {
                if (clearTimeout(p), p = void 0, 0 !== o[i].length) {
                    var e = o[i].shift(),
                    n = e[0],
                    t = e[1],
                    a = e[2],
                    r = e[3],
                    s = e[4];
                    if (void 0 === r)
                        d("RETRY", n.name, t), n.apply(null, t);
                    else if (Date.now() - r >= 6e4) {
                        d("TIMEOUT", n.name, t);
                        var c = t.pop();
                        "function" == typeof c && c.call(null, a)
                    } else {
                        var l = Date.now() - s,
                        u = Math.max(s - r, 1);
                        l >= Math.min(1.2 * u, 100) ? (d("RETRY", n.name, t), n.apply(null, t.concat([r]))) : o[i].push(e)
                    }
                    void 0 === p && (p = setTimeout(v, 0))
                }
            }
            global[i] || u(global, o[i]),
            e.exports = f(c(o)),
            process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !o.__patched && (e.exports = f(o), o.__patched = !0)
        }, function (e, n, t) {
            "use strict";
            n.fromCallback = function (e) {
                return Object.defineProperty((function (...n) {
                        if ("function" != typeof n[n.length - 1])
                            return new Promise((t, i) => {
                                n.push((e, n) => null != e ? i(e) : t(n)),
                                e.apply(this, n)
                            });
                        e.apply(this, n)
                    }), "name", {
                    value: e.name
                })
            },
            n.fromPromise = function (e) {
                return Object.defineProperty((function (...n) {
                        const t = n[n.length - 1];
                        if ("function" != typeof t)
                            return e.apply(this, n);
                        n.pop(),
                        e.apply(this, n).then(e => t(null, e), t)
                    }), "name", {
                    value: e.name
                })
            }
        }, function (e, n) {
            e.exports = require("fs")
        }, function (e, n, t) {
            const i = t(3);
            e.exports = (e, n, t) => new i(e, t).compare(new i(n, t))
        }, function (e, n, t) {
            const i = /\s+/g;
            class a {
                constructor(e, n) {
                    if (n = r(n), e instanceof a)
                        return e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease ? e : new a(e.raw, n);
                    if (e instanceof s)
                        return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
                    if (this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease, this.raw = e.trim().replace(i, " "), this.set = this.raw.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length)
                        throw new TypeError("Invalid SemVer Range: " + this.raw);
                    if (this.set.length > 1) {
                        const e = this.set[0];
                        if (this.set = this.set.filter(e => !v(e[0])), 0 === this.set.length)
                            this.set = [e];
                        else if (this.set.length > 1)
                            for (const e of this.set)
                                if (1 === e.length && b(e[0])) {
                                    this.set = [e];
                                    break
                                }
                    }
                    this.formatted = void 0
                }
                get range() {
                    if (void 0 === this.formatted) {
                        this.formatted = "";
                        for (let e = 0; e < this.set.length; e++) {
                            e > 0 && (this.formatted += "||");
                            const n = this.set[e];
                            for (let e = 0; e < n.length; e++)
                                e > 0 && (this.formatted += " "), this.formatted += n[e].toString().trim()
                        }
                    }
                    return this.formatted
                }
                format() {
                    return this.range
                }
                toString() {
                    return this.range
                }
                parseRange(e) {
                    const n = ((this.options.includePrerelease && h) | (this.options.loose && g)) + ":" + e,
                    t = o.get(n);
                    if (t)
                        return t;
                    const i = this.options.loose,
                    a = i ? u[p.HYPHENRANGELOOSE] : u[p.HYPHENRANGE];
                    e = e.replace(a, T(this.options.includePrerelease)),
                    c("hyphen replace", e),
                    e = e.replace(u[p.COMPARATORTRIM], d),
                    c("comparator trim", e),
                    e = e.replace(u[p.TILDETRIM], m),
                    c("tilde trim", e),
                    e = e.replace(u[p.CARETTRIM], f),
                    c("caret trim", e);
                    let r = e.split(" ").map(e => y(e, this.options)).join(" ").split(/\s+/).map(e => S(e, this.options));
                    i && (r = r.filter(e => (c("loose invalid filter", e, this.options), !!e.match(u[p.COMPARATORLOOSE])))),
                    c("range list", r);
                    const l = new Map,
                    b = r.map(e => new s(e, this.options));
                    for (const e of b) {
                        if (v(e))
                            return [e];
                        l.set(e.value, e)
                    }
                    l.size > 1 && l.has("") && l.delete("");
                    const x = [...l.values()];
                    return o.set(n, x),
                    x
                }
                intersects(e, n) {
                    if (!(e instanceof a))
                        throw new TypeError("a Range is required");
                    return this.set.some(t => x(t, n) && e.set.some(e => x(e, n) && t.every(t => e.every(e => t.intersects(e, n)))))
                }
                test(e) {
                    if (!e)
                        return !1;
                    if ("string" == typeof e)
                        try {
                            e = new l(e, this.options)
                        } catch (e) {
                            return !1
                        }
                    for (let n = 0; n < this.set.length; n++)
                        if (O(this.set[n], e, this.options))
                            return !0;
                    return !1
                }
            }
            e.exports = a;
            const o = new(t(168)),
            r = t(40),
            s = t(30),
            c = t(28),
            l = t(3), {
                safeRe: u,
                t: p,
                comparatorTrimReplace: d,
                tildeTrimReplace: m,
                caretTrimReplace: f
            } = t(21), {
                FLAG_INCLUDE_PRERELEASE: h,
                FLAG_LOOSE: g
            } = t(27),
            v = e => "<0.0.0-0" === e.value,
            b = e => "" === e.value,
            x = (e, n) => {
                let t = !0;
                const i = e.slice();
                let a = i.pop();
                for (; t && i.length; )
                    t = i.every(e => a.intersects(e, n)), a = i.pop();
                return t
            },
            y = (e, n) => (c("comp", e, n), e = E(e, n), c("caret", e), e = w(e, n), c("tildes", e), e = C(e, n), c("xrange", e), e = F(e, n), c("stars", e), e),
            D = e => !e || "x" === e.toLowerCase() || "*" === e,
            w = (e, n) => e.trim().split(/\s+/).map(e => k(e, n)).join(" "),
            k = (e, n) => {
                const t = n.loose ? u[p.TILDELOOSE] : u[p.TILDE];
                return e.replace(t, (n, t, i, a, o) => {
                    let r;
                    return c("tilde", e, n, t, i, a, o),
                    D(t) ? r = "" : D(i) ? r = `>=${t}.0.0 <${ + t + 1}.0.0-0` : D(a) ? r = `>=${t}.${i}.0 <${t}.${ + i + 1}.0-0` : o ? (c("replaceTilde pr", o), r = `>=${t}.${i}.${a}-${o} <${t}.${ + i + 1}.0-0`) : r = `>=${t}.${i}.${a} <${t}.${ + i + 1}.0-0`,
                    c("tilde return", r),
                    r
                })
            },
            E = (e, n) => e.trim().split(/\s+/).map(e => _(e, n)).join(" "),
            _ = (e, n) => {
                c("caret", e, n);
                const t = n.loose ? u[p.CARETLOOSE] : u[p.CARET],
                i = n.includePrerelease ? "-0" : "";
                return e.replace(t, (n, t, a, o, r) => {
                    let s;
                    return c("caret", e, n, t, a, o, r),
                    D(t) ? s = "" : D(a) ? s = `>=${t}.0.0${i} <${ + t + 1}.0.0-0` : D(o) ? s = "0" === t ? `>=${t}.${a}.0${i} <${t}.${ + a + 1}.0-0` : `>=${t}.${a}.0${i} <${ + t + 1}.0.0-0` : r ? (c("replaceCaret pr", r), s = "0" === t ? "0" === a ? `>=${t}.${a}.${o}-${r} <${t}.${a}.${ + o + 1}-0` : `>=${t}.${a}.${o}-${r} <${t}.${ + a + 1}.0-0` : `>=${t}.${a}.${o}-${r} <${ + t + 1}.0.0-0`) : (c("no pr"), s = "0" === t ? "0" === a ? `>=${t}.${a}.${o}${i} <${t}.${a}.${ + o + 1}-0` : `>=${t}.${a}.${o}${i} <${t}.${ + a + 1}.0-0` : `>=${t}.${a}.${o} <${ + t + 1}.0.0-0`),
                    c("caret return", s),
                    s
                })
            },
            C = (e, n) => (c("replaceXRanges", e, n), e.split(/\s+/).map(e => A(e, n)).join(" ")),
            A = (e, n) => {
                e = e.trim();
                const t = n.loose ? u[p.XRANGELOOSE] : u[p.XRANGE];
                return e.replace(t, (t, i, a, o, r, s) => {
                    c("xRange", e, t, i, a, o, r, s);
                    const l = D(a),
                    u = l || D(o),
                    p = u || D(r),
                    d = p;
                    return "=" === i && d && (i = ""),
                    s = n.includePrerelease ? "-0" : "",
                    l ? t = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && d ? (u && (o = 0), r = 0, ">" === i ? (i = ">=", u ? (a = +a + 1, o = 0, r = 0) : (o = +o + 1, r = 0)) : "<=" === i && (i = "<", u ? a = +a + 1 : o = +o + 1), "<" === i && (s = "-0"), t = `${i + a}.${o}.${r}${s}`) : u ? t = `>=${a}.0.0${s} <${ + a + 1}.0.0-0` : p && (t = `>=${a}.${o}.0${s} <${a}.${ + o + 1}.0-0`),
                    c("xRange return", t),
                    t
                })
            },
            F = (e, n) => (c("replaceStars", e, n), e.trim().replace(u[p.STAR], "")),
            S = (e, n) => (c("replaceGTE0", e, n), e.trim().replace(u[n.includePrerelease ? p.GTE0PRE : p.GTE0], "")),
            T = e => (n, t, i, a, o, r, s, c, l, u, p, d) => `${t = D(i) ? "" : D(a) ? `>=${i}.0.0${e ? "-0" : ""}` : D(o) ? `>=${i}.${a}.0${e ? "-0" : ""}` : r ? ">=" + t : `>=${t}${e ? "-0" : ""}`
        }
        $ {
            c = D(l) ? "" : D(u) ? `<${ + l + 1}.0.0-0` : D(p) ? `<${l}.${ + u + 1}.0-0` : d ? `<=${l}.${u}.${p}-${d}` : e ? `<${l}.${u}.${ + p + 1}-0` : "<=" + c
        }
        `.trim(),O=(e,n,t)=>{for(let t=0;t<e.length;t++)if(!e[t].test(n))return!1;if(n.prerelease.length&&!t.includePrerelease){for(let t=0;t<e.length;t++)if(c(e[t].semver),e[t].semver!==s.ANY&&e[t].semver.prerelease.length>0){const i=e[t].semver;if(i.major===n.major&&i.minor===n.minor&&i.patch===n.patch)return!0}return!1}return!0}},function(e,n,t){"use strict";const i=t(5).fromPromise,{makeDir:a,makeDirSync:o}=t(134),r=i(a);e.exports={mkdirs:r,mkdirsSync:o,mkdirp:r,mkdirpSync:o,ensureDir:r,ensureDirSync:o}},function(e,n){e.exports=require("url")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resolveFiles=n.getFileList=n.parseUpdateInfo=n.findFile=n.Provider=void 0;const i=t(2),a=t(39),o=t(20);function r(e){const n=e.files;if(null!=n&&n.length>0)return n;if(null!=e.path)return[{url:e.path,sha2:e.sha2,sha512:e.sha512}];throw i.newError("No files provided: "+i.safeStringifyJson(e),"ERR_UPDATER_NO_FILES_PROVIDED")}n.Provider=class{constructor(e){this.runtimeOptions=e,this.requestHeaders=null,this.executor=e.executor}get isUseMultipleRangeRequest(){return!1!==this.runtimeOptions.isUseMultipleRangeRequest}getChannelFilePrefix(){if("linux"===this.runtimeOptions.platform){const e=process.env.TEST_UPDATER_ARCH||process.arch;return"-linux"+("x64"===e?"":"-"+e)}return"darwin"===this.runtimeOptions.platform?"-mac":""}getDefaultChannelName(){return this.getCustomChannelName("latest")}getCustomChannelName(e){return` $ {
            e
        }
        $ {
            this.getChannelFilePrefix()
        }
        `}get fileExtraDownloadHeaders(){return null}setRequestHeaders(e){this.requestHeaders=e}httpRequest(e,n,t){return this.executor.request(this.createRequestOptions(e,n),t)}createRequestOptions(e,n){const t={};return null==this.requestHeaders?null!=n&&(t.headers=n):t.headers=null==n?this.requestHeaders:{...this.requestHeaders,...n},i.configureRequestUrl(e,t),t}},n.findFile=function(e,n,t){if(0===e.length)throw i.newError("No files provided","ERR_UPDATER_NO_FILES_PROVIDED");const a=e.find(e=>e.url.pathname.toLowerCase().endsWith("."+n));return null!=a?a:null==t?e[0]:e.find(e=>!t.some(n=>e.url.pathname.toLowerCase().endsWith("."+n)))},n.parseUpdateInfo=function(e,n,t){if(null==e)throw i.newError(` Cannot parse update info from $ {
            n
        }
        in the latest release artifacts($ {
            t
        }): rawData: null `,"ERR_UPDATER_INVALID_UPDATE_INFO");let o;try{o=a.load(e)}catch(a){throw i.newError(` Cannot parse update info from $ {
            n
        }
        in the latest release artifacts($ {
            t
        }): $ {
            a.stack || a.message
        }, rawData: $ {
            e
        }
        `,"ERR_UPDATER_INVALID_UPDATE_INFO")}return o},n.getFileList=r,n.resolveFiles=function(e,n,t=(e=>e)){const a=r(e).map(e=>{if(null==e.sha2&&null==e.sha512)throw i.newError("Update info doesn't contain nor sha256 neither sha512 checksum: "+i.safeStringifyJson(e),"ERR_UPDATER_NO_CHECKSUM");return{url:o.newUrlFromBase(t(e.url),n),info:e}}),s=e.packages,c=null==s?null:s[process.arch]||s.ia32;return null!=c&&(a[0].packageInfo={...c,path:o.newUrlFromBase(t(c.path),n).href}),a}},function(e,n){e.exports=require("util")},function(e,n){e.exports=require("os")},function(e,n,t){"use strict";e.exports={...t(17),...t(36),...t(137),...t(139),...t(145),...t(9),...t(150),...t(38),...t(15),...t(26)}},function(e,n,t){"use strict";const i=t(5).fromPromise,a=t(17);e.exports={pathExists:i((function(e){return a.access(e).then(()=>!0).catch(()=>!1)})),pathExistsSync:a.existsSync}},function(e,n){e.exports=require("stream")},function(e,n,t){"use strict";const i=t(5).fromCallback,a=t(4),o=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter(e=>"function"==typeof a[e]);Object.assign(n,a),o.forEach(e=>{n[e]=i(a[e])}),n.exists=function(e,n){return"function"==typeof n?a.exists(e,n):new Promise(n=>a.exists(e,n))},n.read=function(e,n,t,i,o,r){return"function"==typeof r?a.read(e,n,t,i,o,r):new Promise((r,s)=>{a.read(e,n,t,i,o,(e,n,t)=>{if(e)return s(e);r({bytesRead:n,buffer:t})})})},n.write=function(e,n,...t){return"function"==typeof t[t.length-1]?a.write(e,n,...t):new Promise((i,o)=>{a.write(e,n,...t,(e,n,t)=>{if(e)return o(e);i({bytesWritten:n,buffer:t})})})},"function"==typeof a.writev&&(n.writev=function(e,n,...t){return"function"==typeof t[t.length-1]?a.writev(e,n,...t):new Promise((i,o)=>{a.writev(e,n,...t,(e,n,t)=>{if(e)return o(e);i({bytesWritten:n,buffers:t})})})}),"function"==typeof a.realpath.native?n.realpath.native=i(a.realpath.native):process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?","Warning","fs-extra-WARN0003")},function(e,n,t){"use strict";const i=t(17),a=t(1),o=t(12);function r(e,n,t){const a=t.dereference?e=>i.stat(e,{bigint:!0}):e=>i.lstat(e,{bigint:!0});return Promise.all([a(e),a(n).catch(e=>{if("ENOENT"===e.code)return null;throw e})]).then(([e,n])=>({srcStat:e,destStat:n}))}function s(e,n){return n.ino&&n.dev&&n.ino===e.ino&&n.dev===e.dev}function c(e,n){const t=a.resolve(e).split(a.sep).filter(e=>e),i=a.resolve(n).split(a.sep).filter(e=>e);return t.reduce((e,n,t)=>e&&i[t]===n,!0)}function l(e,n,t){return` Cannot $ {
            t
        }
        '${e}' to a subdirectory of itself, '${n}'.`}e.exports={checkPaths:function(e,n,t,i,u){o.callbackify(r)(e,n,i,(i,o)=>{if(i)return u(i);const{srcStat:r,destStat:p}=o;if(p){if(s(r,p)){const i=a.basename(e),o=a.basename(n);return"move"===t&&i!==o&&i.toLowerCase()===o.toLowerCase()?u(null,{srcStat:r,destStat:p,isChangingCase:!0}):u(new Error("Source and destination must not be the same."))}if(r.isDirectory()&&!p.isDirectory())return u(new Error(` Cannot overwrite non - directory '${n}' with directory '${e}'.`));if(!r.isDirectory()&&p.isDirectory())return u(new Error(` Cannot overwrite directory '${n}' with non - directory '${e}'.`))}return r.isDirectory()&&c(e,n)?u(new Error(l(e,n,t))):u(null,{srcStat:r,destStat:p})})},checkPathsSync:function(e,n,t,o){const{srcStat:r,destStat:u}=function(e,n,t){let a;const o=t.dereference?e=>i.statSync(e,{bigint:!0}):e=>i.lstatSync(e,{bigint:!0}),r=o(e);try{a=o(n)}catch(e){if("ENOENT"===e.code)return{srcStat:r,destStat:null};throw e}return{srcStat:r,destStat:a}}(e,n,o);if(u){if(s(r,u)){const i=a.basename(e),o=a.basename(n);if("move"===t&&i!==o&&i.toLowerCase()===o.toLowerCase())return{srcStat:r,destStat:u,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(r.isDirectory()&&!u.isDirectory())throw new Error(` Cannot overwrite non - directory '${n}' with directory '${e}'.`);if(!r.isDirectory()&&u.isDirectory())throw new Error(` Cannot overwrite directory '${n}' with non - directory '${e}'.`)}if(r.isDirectory()&&c(e,n))throw new Error(l(e,n,t));return{srcStat:r,destStat:u}},checkParentPaths:function e(n,t,o,r,c){const u=a.resolve(a.dirname(n)),p=a.resolve(a.dirname(o));if(p===u||p===a.parse(p).root)return c();i.stat(p,{bigint:!0},(i,a)=>i?"ENOENT"===i.code?c():c(i):s(t,a)?c(new Error(l(n,o,r))):e(n,t,p,r,c))},checkParentPathsSync:function e(n,t,o,r){const c=a.resolve(a.dirname(n)),u=a.resolve(a.dirname(o));if(u===c||u===a.parse(u).root)return;let p;try{p=i.statSync(u,{bigint:!0})}catch(e){if("ENOENT"===e.code)return;throw e}if(s(t,p))throw new Error(l(n,o,r));return e(n,t,u,r)},isSrcSubdir:c,areIdentical:s}},function(e,n,t){const i=t(3);e.exports=(e,n,t=!1)=>{if(e instanceof i)return e;try{return new i(e,n)}catch(e){if(!t)return null;throw e}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.blockmapFiles=n.getChannelFilename=n.newUrlFromBase=n.newBaseUrl=void 0;const i=t(10),a=t(184);function o(e,n,t=!1){const a=new i.URL(e,n),o=n.search;return null!=o&&0!==o.length?a.search=o:t&&(a.search="noCache="+Date.now().toString(32)),a}n.newBaseUrl=function(e){const n=new i.URL(e);return n.pathname.endsWith("/")||(n.pathname+="/"),n},n.newUrlFromBase=o,n.getChannelFilename=function(e){return e+".yml"},n.blockmapFiles=function(e,n,t){const i=o(e.pathname+".blockmap",e);return[o(e.pathname.replace(new RegExp(a(t),"g"),n)+".blockmap",e),i]}},function(e,n,t){const{MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:a,MAX_LENGTH:o}=t(27),r=t(28),s=(n=e.exports={}).re=[],c=n.safeRe=[],l=n.src=[],u=n.safeSrc=[],p=n.t={};let d=0;const m=[["\\s",1],["\\d",o],["[a-zA-Z0-9-]",a]],f=(e,n,t)=>{const i=(e=>{for(const[n,t]of m)e=e.split(n+"*").join(` $ {
            n
        } {
            0,
            $ {
                t
            }
        }
        `).split(n+"+").join(` $ {
            n
        } {
            1,
            $ {
                t
            }
        }
`);return e})(n),a=d++;r(e,a,n),p[e]=a,l[a]=n,u[a]=i,s[a]=new RegExp(n,t?"g":void 0),c[a]=new RegExp(i,t?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),f("MAINVERSION",`($ {
            l[p.NUMERICIDENTIFIER]
        }) \\ .($ {
            l[p.NUMERICIDENTIFIER]
        }) \\ .($ {
            l[p.NUMERICIDENTIFIER]
        })`),f("MAINVERSIONLOOSE",`($ {
            l[p.NUMERICIDENTIFIERLOOSE]
        }) \\ .($ {
            l[p.NUMERICIDENTIFIERLOOSE]
        }) \\ .($ {
            l[p.NUMERICIDENTIFIERLOOSE]
        })`),f("PRERELEASEIDENTIFIER",`( ?  : $ {
            l[p.NUMERICIDENTIFIER]
        }
             | $ {
            l[p.NONNUMERICIDENTIFIER]
        })`),f("PRERELEASEIDENTIFIERLOOSE",`( ?  : $ {
            l[p.NUMERICIDENTIFIERLOOSE]
        }
             | $ {
            l[p.NONNUMERICIDENTIFIER]
        })`),f("PRERELEASE",`( ?  :  - ($ {
                l[p.PRERELEASEIDENTIFIER]
            }
                ( ?  :  \\ .$ {
                    l[p.PRERELEASEIDENTIFIER]
                }) * ))`),f("PRERELEASELOOSE",`( ?  :  -  ? ($ {
                l[p.PRERELEASEIDENTIFIERLOOSE]
            }
                ( ?  :  \\ .$ {
                    l[p.PRERELEASEIDENTIFIERLOOSE]
                }) * ))`),f("BUILDIDENTIFIER","[a-zA-Z0-9-]+"),f("BUILD",`( ?  :  \\  + ($ {
                l[p.BUILDIDENTIFIER]
            }
                ( ?  :  \\ .$ {
                    l[p.BUILDIDENTIFIER]
                }) * ))`),f("FULLPLAIN",` v ? $ {
            l[p.MAINVERSION]
        }
        $ {
            l[p.PRERELEASE]
        }
         ? $ {
            l[p.BUILD]
        }
         ? `),f("FULL",` ^ $ {
            l[p.FULLPLAIN]
        }
        $ `),f("LOOSEPLAIN",`[v =  \\ s] * $ {
            l[p.MAINVERSIONLOOSE]
        }
        $ {
            l[p.PRERELEASELOOSE]
        }
         ? $ {
            l[p.BUILD]
        }
         ? `),f("LOOSE",` ^ $ {
            l[p.LOOSEPLAIN]
        }
        $ `),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",l[p.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),f("XRANGEIDENTIFIER",l[p.NUMERICIDENTIFIER]+"|x|X|\\*"),f("XRANGEPLAIN",`[v =  \\ s] * ($ {
            l[p.XRANGEIDENTIFIER]
        })( ?  :  \\ .($ {
                l[p.XRANGEIDENTIFIER]
            })( ?  :  \\ .($ {
                    l[p.XRANGEIDENTIFIER]
                })( ?  : $ {
                    l[p.PRERELEASE]
                }) ? $ {
                l[p.BUILD]
            }
                 ? ) ? ) ? `),f("XRANGEPLAINLOOSE",`[v =  \\ s] * ($ {
            l[p.XRANGEIDENTIFIERLOOSE]
        })( ?  :  \\ .($ {
                l[p.XRANGEIDENTIFIERLOOSE]
            })( ?  :  \\ .($ {
                    l[p.XRANGEIDENTIFIERLOOSE]
                })( ?  : $ {
                    l[p.PRERELEASELOOSE]
                }) ? $ {
                l[p.BUILD]
            }
                 ? ) ? ) ? `),f("XRANGE",` ^ $ {
            l[p.GTLT]
        }
         \\ s * $ {
            l[p.XRANGEPLAIN]
        }
        $ `),f("XRANGELOOSE",` ^ $ {
            l[p.GTLT]
        }
         \\ s * $ {
            l[p.XRANGEPLAINLOOSE]
        }
        $ `),f("COERCEPLAIN",`( ^  | [ ^  \\ d])( \\ d {
            1,
            $ {
                i
            }
        })( ?  :  \\ .( \\ d {
                1,
                $ {
                    i
                }
            })) ? ( ?  :  \\ .( \\ d {
                1,
                $ {
                    i
                }
            })) ? `),f("COERCE",l[p.COERCEPLAIN]+"(?:$|[^\\d])"),f("COERCEFULL",l[p.COERCEPLAIN]+`( ?  : $ {
            l[p.PRERELEASE]
        }) ? `+`( ?  : $ {
            l[p.BUILD]
        }) ? ( ?  : $ | [ ^  \\ d])`),f("COERCERTL",l[p.COERCE],!0),f("COERCERTLFULL",l[p.COERCEFULL],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`( \\ s * )$ {
            l[p.LONETILDE]
        }
         \\ s + `,!0),n.tildeTrimReplace="$1~",f("TILDE",` ^ $ {
            l[p.LONETILDE]
        }
        $ {
            l[p.XRANGEPLAIN]
        }
        $ `),f("TILDELOOSE",` ^ $ {
            l[p.LONETILDE]
        }
        $ {
            l[p.XRANGEPLAINLOOSE]
        }
        $ `),f("LONECARET","(?:\\^)"),f("CARETTRIM",`( \\ s * )$ {
            l[p.LONECARET]
        }
         \\ s + `,!0),n.caretTrimReplace="$1^",f("CARET",` ^ $ {
            l[p.LONECARET]
        }
        $ {
            l[p.XRANGEPLAIN]
        }
        $ `),f("CARETLOOSE",` ^ $ {
            l[p.LONECARET]
        }
        $ {
            l[p.XRANGEPLAINLOOSE]
        }
        $ `),f("COMPARATORLOOSE",` ^ $ {
            l[p.GTLT]
        }
         \\ s * ($ {
            l[p.LOOSEPLAIN]
        })$ |  ^ $ `),f("COMPARATOR",` ^ $ {
            l[p.GTLT]
        }
         \\ s * ($ {
            l[p.FULLPLAIN]
        })$ |  ^ $ `),f("COMPARATORTRIM",`( \\ s * )$ {
            l[p.GTLT]
        }
         \\ s * ($ {
            l[p.LOOSEPLAIN]
        }
             | $ {
            l[p.XRANGEPLAIN]
        })`,!0),n.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",` ^  \\ s * ($ {
            l[p.XRANGEPLAIN]
        }) \\ s +  -  \\ s + ($ {
            l[p.XRANGEPLAIN]
        }) \\ s * $ `),f("HYPHENRANGELOOSE",` ^  \\ s * ($ {
            l[p.XRANGEPLAINLOOSE]
        }) \\ s +  -  \\ s + ($ {
            l[p.XRANGEPLAINLOOSE]
        }) \\ s * $ `),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},function(e,n,t){"use strict";var i,a=t(1);try{i=t(0)}catch(e){i=null}var o=t(13);function r(){return c("app")}function s(){var e=r();return e?"name"in e?e.name:e.getName():null}function c(e){return i?i[e]?i[e]:i.remote?i.remote[e]:null:null}function l(){return"browser"===process.type&&i&&i.ipcMain?i.ipcMain:"renderer"===process.type&&i&&i.ipcRenderer?i.ipcRenderer:null}function u(){var e=r();return e?"version"in e?e.version:e.getVersion():null}function p(){var e=o.type().replace("_"," "),n=o.release();return"Darwin"===e&&(e="macOS",n="10."+(Number(o.release().split(".")[0])-4)),e+" "+n}e.exports={getName:s,getPath:function(e){var n=r();if(!n)return null;try{return n.getPath(e)}catch(e){return null}},getVersion:u,getVersions:function(){return{app:s()+" "+u(),electron:"Electron "+process.versions.electron,os:p()}},isDev:function(){var e=r();if(e&&void 0!==e.isPackaged)return!e.isPackaged;if("string"==typeof process.execPath){return a.basename(process.execPath).toLowerCase().startsWith("electron")}return"1"===process.env.ELECTRON_IS_DEV},isElectron:function(){return"browser"===process.type||"renderer"===process.type},isIpcChannelListened:function(e){var n=l();return!!n&&n.listenerCount(e)>0},loadRemoteModule:function(e){"browser"===process.type?r().on("web-contents-created",(function(n,t){var i=t.executeJavaScript('try {require("'+e+'")} catch(e){}; void 0;');i&&"function"==typeof i.catch&&i.catch((function(){}))})):process.type},onIpc:function(e,n){var t=l();t&&t.on(e,n)},openUrl:function(e,n){n=n||console.error;var t=c("shell");if(!t)return;t.openExternal(e).catch(n)},sendIpc:function(e,n){"browser"===process.type?function(e,n){if(!i||!i.BrowserWindow)return;i.BrowserWindow.getAllWindows().forEach((function(t){t.webContents&&!t.webContents.isDestroyed()&&t.webContents.send(e,n)}))}(e,n):"renderer"===process.type&&function(e,n){var t=l();t&&t.send(e,n)}(e,n)},showErrorBox:function(e,n){var t=c("dialog");if(!t)return;t.showErrorBox(e,n)}}},function(e,n,t){"use strict";var i=t(107),a=t(108),o=t(109);function r(e,n,t){return n.reduce((function(n,t){return"function"==typeof t?t(n,e):n}),t||e.data)}e.exports={applyAnsiStyles:a.applyAnsiStyles,concatFirstStringElements:o.concatFirstStringElements,customFormatterFactory:function(e,n,t){if("string"==typeof e)return function(i,a){return r(a,[o.templateVariables,o.templateScopeFactory(t),o.templateDate,o.templateText,n&&o.concatFirstStringElements],[e].concat(i))};if("function"==typeof e)return function(n,t){var i=Object.assign({},t,{data:n}),a=e(i,n);return[].concat(a)};return function(e){return[].concat(e)}},maxDepthFactory:i.maxDepthFactory,removeStyles:a.removeStyles,toJSON:i.toJSON,toStringFactory:i.toStringFactory,transform:r}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.UpdaterSignal=n.UPDATE_DOWNLOADED=n.DOWNLOAD_PROGRESS=n.NsisUpdater=n.MacUpdater=n.AppImageUpdater=n.Provider=n.CancellationToken=n.NoOpLogger=n.AppUpdater=void 0;const i=t(2);Object.defineProperty(n,"CancellationToken",{enumerable:!0,get:function(){return i.CancellationToken}});var a=t(35);Object.defineProperty(n,"AppUpdater",{enumerable:!0,get:function(){return a.AppUpdater}}),Object.defineProperty(n,"NoOpLogger",{enumerable:!0,get:function(){return a.NoOpLogger}});var o=t(11);Object.defineProperty(n,"Provider",{enumerable:!0,get:function(){return o.Provider}});var r=t(65);Object.defineProperty(n,"AppImageUpdater",{enumerable:!0,get:function(){return r.AppImageUpdater}});var s=t(71);Object.defineProperty(n,"MacUpdater",{enumerable:!0,get:function(){return s.MacUpdater}});var c=t(72);let l;Object.defineProperty(n,"NsisUpdater",{enumerable:!0,get:function(){return c.NsisUpdater}}),Object.defineProperty(n,"autoUpdater",{enumerable:!0,get:()=>l||(l="win32"===process.platform?new(t(72).NsisUpdater):"darwin"===process.platform?new(t(71).MacUpdater):new(t(65).AppImageUpdater),l)}),n.DOWNLOAD_PROGRESS="download-progress",n.UPDATE_DOWNLOADED="update-downloaded";n.UpdaterSignal=class{constructor(e){this.emitter=e}login(e){u(this.emitter,"login",e)}progress(e){u(this.emitter,n.DOWNLOAD_PROGRESS,e)}updateDownloaded(e){u(this.emitter,n.UPDATE_DOWNLOADED,e)}updateCancelled(e){u(this.emitter,"update-cancelled",e)}};function u(e,n,t){e.on(n,t)}},function(e,n){e.exports=require("crypto")},function(e,n,t){"use strict";const i=t(4),a=t(5).fromCallback,o=t(138);e.exports={remove:a((function(e,n){if(i.rm)return i.rm(e,{recursive:!0,force:!0},n);o(e,n)})),removeSync:function(e){if(i.rmSync)return i.rmSync(e,{recursive:!0,force:!0});o.sync(e)}}},function(e,n){const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},function(e,n){const t="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=t},function(e,n,t){const i=t(7);e.exports=(e,n,t)=>i(e,n,t)>0},function(e,n,t){const i=Symbol("SemVer ANY");class a{static get ANY(){return i}constructor(e,n){if(n=o(n),e instanceof a){if(e.loose===!!n.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),l("comparator",e,n),this.options=n,this.loose=!!n.loose,this.parse(e),this.semver===i?this.value="":this.value=this.operator+this.semver.version,l("comp",this)}parse(e){const n=this.options.loose?r[s.COMPARATORLOOSE]:r[s.COMPARATOR],t=e.match(n);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==t[1]?t[1]:"","="===this.operator&&(this.operator=""),t[2]?this.semver=new u(t[2],this.options.loose):this.semver=i}toString(){return this.value}test(e){if(l("Comparator.test",e,this.options.loose),this.semver===i||e===i)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return c(e,this.operator,this.semver,this.options)}intersects(e,n){if(!(e instanceof a))throw new TypeError("a Comparator is required");return""===this.operator?""===this.value||new p(e.value,n).test(this.value):""===e.operator?""===e.value||new p(this.value,n).test(e.semver):(!(n=o(n)).includePrerelease||"<0.0.0-0"!==this.value&&"<0.0.0-0"!==e.value)&&(!(!n.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&(!(!this.operator.startsWith(">")||!e.operator.startsWith(">"))||(!(!this.operator.startsWith("<")||!e.operator.startsWith("<"))||(!(this.semver.version!==e.semver.version||!this.operator.includes("=")||!e.operator.includes("="))||(!!(c(this.semver,"<",e.semver,n)&&this.operator.startsWith(">")&&e.operator.startsWith("<"))||!!(c(this.semver,">",e.semver,n)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))))))}}e.exports=a;const o=t(40),{safeRe:r,t:s}=t(21),c=t(62),l=t(28),u=t(3),p=t(8)},function(e,n,t){const i=t(8);e.exports=(e,n,t)=>{try{n=new i(n,t)}catch(e){return!1}return n.test(e)}},function(e,n){e.exports=require("child_process")},function(e,n,t){"use strict";function i(e,n,t){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&a(e[i],n,t)}function a(e,n,t){"function"==typeof e&&!1!==e.level&&o(t.levels,e.level,n.level)&&(n=function(e,n,t){if(!e||!e.length)return t;for(var i=0;i<e.length&&(t=e[i](t,n));i++);return t}(t.hooks,e,n))&&e(n)}function o(e,n,t){var i=e.indexOf(n),a=e.indexOf(t);return-1===a||-1===i||a<=i}e.exports={compareLevels:o,log:function(e,n){var t=e.transports,a={data:Array.prototype.slice.call(arguments,2),date:new Date,level:n.level,scope:n.scope?n.scope.toJSON():null,variables:e.variables};i(t,a,e)},runTransport:a,runTransports:i}},function(e,n){e.exports=require("events")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.NoOpLogger=n.AppUpdater=void 0;const i=t(2),a=t(25),o=t(34),r=t(14),s=t(153),c=t(39),l=t(154),u=t(1),p=t(58),d=t(179),m=t(181),f=t(183),h=t(63),g=t(24),v=t(185);class b extends o.EventEmitter{constructor(e,n){super(),this.autoDownload=!0,this.autoInstallOnAppQuit=!0,this.allowPrerelease=!1,this.fullChangelog=!1,this.allowDowngrade=!1,this._channel=null,this.downloadedUpdateHelper=null,this.requestHeaders=null,this._logger=console,this.signals=new g.UpdaterSignal(this),this._appUpdateConfigPath=null,this.clientPromise=null,this.stagingUserIdPromise=new l.Lazy(()=>this.getOrCreateStagingUserId()),this.configOnDisk=new l.Lazy(()=>this.loadUpdateConfig()),this.checkForUpdatesPromise=null,this.updateInfoAndProvider=null,this._testOnlyOptions=null,this.on("error",e=>{this._logger.error("Error: "+(e.stack||e.message))}),null==n?(this.app=new m.ElectronAppAdapter,this.httpExecutor=new f.ElectronHttpExecutor((e,n)=>this.emit("login",e,n))):(this.app=n,this.httpExecutor=null);const t=this.app.version,a=p.parse(t);if(null==a)throw i.newError(` App version is not a valid semver version : "${t}" `,"ERR_UPDATER_INVALID_VERSION");this.currentVersion=a,this.allowPrerelease=function(e){const n=p.prerelease(e);return null!=n&&n.length>0}(a),null!=e&&(this.setFeedURL(e),"string"!=typeof e&&e.requestHeaders&&(this.requestHeaders=e.requestHeaders))}get channel(){return this._channel}set channel(e){if(null!=this._channel){if("string"!=typeof e)throw i.newError("Channel must be a string, but got: "+e,"ERR_UPDATER_INVALID_CHANNEL");if(0===e.length)throw i.newError("Channel must be not an empty string","ERR_UPDATER_INVALID_CHANNEL")}this._channel=e,this.allowDowngrade=!0}get netSession(){return f.getNetSession()}get logger(){return this._logger}set logger(e){this._logger=null==e?new x:e}set updateConfigPath(e){this.clientPromise=null,this._appUpdateConfigPath=e,this.configOnDisk=new l.Lazy(()=>this.loadUpdateConfig())}getFeedURL(){return"Deprecated. Do not use it."}setFeedURL(e){const n=this.createProviderRuntimeOptions();let t;t="string"==typeof e?new h.GenericProvider({provider:"generic",url:e},this,{...n,isUseMultipleRangeRequest:v.isUrlProbablySupportMultiRangeRequests(e)}):v.createClient(e,this,n),this.clientPromise=Promise.resolve(t)}checkForUpdates(){let e=this.checkForUpdatesPromise;if(null!=e)return this._logger.info("Checking for update (already in progress)"),e;const n=()=>this.checkForUpdatesPromise=null;return this._logger.info("Checking for update"),e=this.doCheckForUpdates().then(e=>(n(),e)).catch(e=>{throw n(),this.emit("error",e,"Cannot check for updates: "+(e.stack||e).toString()),e}),this.checkForUpdatesPromise=e,e}isUpdaterActive(){return!!this.app.isPackaged||(this._logger.info("Skip checkForUpdatesAndNotify because application is not packed"),!1)}checkForUpdatesAndNotify(e){return this.isUpdaterActive()?this.checkForUpdates().then(n=>{const i=n.downloadPromise;return null==i?(null!=this._logger.debug&&this._logger.debug("checkForUpdatesAndNotify called, downloadPromise is null"),n):(i.then(()=>{const i=b.formatDownloadNotification(n.updateInfo.version,this.app.name,e);new(t(0).Notification)(i).show()}),n)}):Promise.resolve(null)}static formatDownloadNotification(e,n,t){return null==t&&(t={title:"A new update is ready to install",body:"{appName} version {version} has been downloaded and will be automatically installed on exit"}),t={title:t.title.replace("{appName}",n).replace("{version}",e),body:t.body.replace("{appName}",n).replace("{version}",e)}}async isStagingMatch(e){const n=e.stagingPercentage;let t=n;if(null==t)return!0;if(t=parseInt(t,10),isNaN(t))return this._logger.warn("Staging percentage is NaN: "+n),!0;t/=100;const a=await this.stagingUserIdPromise.value,o=i.UUID.parse(a).readUInt32BE(12)/4294967295;return this._logger.info(` Staging percentage : $ {
            t
        }, percentage : $ {
            o
        }, user id : $ {
            a
        }
        `),o<t}computeFinalHeaders(e){return null!=this.requestHeaders&&Object.assign(e,this.requestHeaders),e}async isUpdateAvailable(e){const n=p.parse(e.version);if(null==n)throw i.newError(` This file could not be downloaded, or the latest version(from update server)does not have a valid semver version : "${e.version}" `,"ERR_UPDATER_INVALID_VERSION");const t=this.currentVersion;if(p.eq(n,t))return!1;if(!await this.isStagingMatch(e))return!1;const a=p.gt(n,t),o=p.lt(n,t);return!!a||this.allowDowngrade&&o}async getUpdateInfoAndProvider(){await this.app.whenReady(),null==this.clientPromise&&(this.clientPromise=this.configOnDisk.value.then(e=>v.createClient(e,this,this.createProviderRuntimeOptions())));const e=await this.clientPromise,n=await this.stagingUserIdPromise.value;return e.setRequestHeaders(this.computeFinalHeaders({"x-user-staging-id":n})),{info:await e.getLatestVersion(),provider:e}}createProviderRuntimeOptions(){return{isUseMultipleRangeRequest:!0,platform:null==this._testOnlyOptions?process.platform:this._testOnlyOptions.platform,executor:this.httpExecutor}}async doCheckForUpdates(){this.emit("checking-for-update");const e=await this.getUpdateInfoAndProvider(),n=e.info;if(!await this.isUpdateAvailable(n))return this._logger.info(` Update for version $ {
            this.currentVersion
        }
        is not available(latest version : $ {
            n.version
        }, downgrade is $ {
            this.allowDowngrade ? "allowed" : "disallowed"
        }).`),this.emit("update-not-available",n),{versionInfo:n,updateInfo:n};this.updateInfoAndProvider=e,this.onUpdateAvailable(n);const t=new i.CancellationToken;return{versionInfo:n,updateInfo:n,cancellationToken:t,downloadPromise:this.autoDownload?this.downloadUpdate(t):null}}onUpdateAvailable(e){this._logger.info(` Found version $ {
            e.version
        }
        (url : $ {
            i.asArray(e.files).map(e => e.url).join(", ")
        })`),this.emit("update-available",e)}downloadUpdate(e=new i.CancellationToken){const n=this.updateInfoAndProvider;if(null==n){const e=new Error("Please check update first");return this.dispatchError(e),Promise.reject(e)}this._logger.info("Downloading update from "+i.asArray(n.info.files).map(e=>e.url).join(", "));const t=e=>{if(!(e instanceof i.CancellationError))try{this.dispatchError(e)}catch(e){this._logger.warn("Cannot dispatch error event: "+(e.stack||e))}return e};try{return this.doDownloadUpdate({updateInfoAndProvider:n,requestHeaders:this.computeRequestHeaders(n.provider),cancellationToken:e}).catch(e=>{throw t(e)})}catch(e){return Promise.reject(t(e))}}dispatchError(e){this.emit("error",e,(e.stack||e).toString())}dispatchUpdateDownloaded(e){this.emit(g.UPDATE_DOWNLOADED,e)}async loadUpdateConfig(){return null==this._appUpdateConfigPath&&(this._appUpdateConfigPath=this.app.appUpdateConfigPath),c.load(await s.readFile(this._appUpdateConfigPath,"utf-8"))}computeRequestHeaders(e){const n=e.fileExtraDownloadHeaders;if(null!=n){const e=this.requestHeaders;return null==e?n:{...n,...e}}return this.computeFinalHeaders({accept:"*/*"})}async getOrCreateStagingUserId(){const e=u.join(this.app.userDataPath,".updaterId");try{const n=await s.readFile(e,"utf-8");if(i.UUID.check(n))return n;this._logger.warn("Staging user id file exists, but content was invalid: "+n)}catch(e){"ENOENT"!==e.code&&this._logger.warn("Couldn't read staging user ID, creating a blank one: "+e)}const n=i.UUID.v5(a.randomBytes(4096),i.UUID.OID);this._logger.info("Generated new staging user ID: "+n);try{await r.outputFile(e,n)}catch(e){this._logger.warn("Couldn't write out staging user ID: "+e)}return n}get isAddNoCacheQuery(){const e=this.requestHeaders;if(null==e)return!0;for(const n of Object.keys(e)){const e=n.toLowerCase();if("authorization"===e||"private-token"===e)return!1}return!0}async getOrCreateDownloadHelper(){let e=this.downloadedUpdateHelper;if(null==e){const n=(await this.configOnDisk.value).updaterCacheDirName,t=this._logger;null==n&&t.error("updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?");const i=u.join(this.app.baseCachePath,n||this.app.name);null!=t.debug&&t.debug("updater cache dir: "+i),e=new d.DownloadedUpdateHelper(i),this.downloadedUpdateHelper=e}return e}async executeDownload(e){const n=e.fileInfo,t={headers:e.downloadUpdateOptions.requestHeaders,cancellationToken:e.downloadUpdateOptions.cancellationToken,sha2:n.info.sha2,sha512:n.info.sha512};this.listenerCount(g.DOWNLOAD_PROGRESS)>0&&(t.onProgress=e=>this.emit(g.DOWNLOAD_PROGRESS,e));const a=e.downloadUpdateOptions.updateInfoAndProvider.info,o=a.version,r=n.packageInfo;const c=await this.getOrCreateDownloadHelper(),l=c.cacheDirForPendingUpdate;await s.mkdir(l,{recursive:!0});const p=function(){const n=decodeURIComponent(e.fileInfo.url.pathname);return n.endsWith("."+e.fileExtension)?u.posix.basename(n):"update."+e.fileExtension}();let m=u.join(l,p);const f=null==r?null:u.join(l,` package - $ {
            o
        }
        $ {
            u.extname(r.path) || ".7z"
        }
        `),h=async t=>(await c.setDownloadedFile(m,f,a,n,p,t),await e.done({...a,downloadedFile:m}),null==f?[m]:[m,f]),v=this._logger,b=await c.validateDownloadedPath(m,a,n,v);if(null!=b)return m=b,await h(!1);const x=async()=>(await c.clear().catch(()=>{}),await s.unlink(m).catch(()=>{})),y=await d.createTempUpdateFile("temp-"+p,l,v);try{await e.task(y,t,f,x),await s.rename(y,m)}catch(e){throw await x(),e instanceof i.CancellationError&&(v.info("cancelled"),this.emit("update-cancelled",a)),e}return v.info(` New version $ {
            o
        }
        has been downloaded to $ {
            m
        }
        `),await h(!0)}}n.AppUpdater=b;class x{info(e){}warn(e){}error(e){}}n.NoOpLogger=x},function(e,n,t){"use strict";const i=t(5).fromCallback;e.exports={copy:i(t(133)),copySync:t(136)}},function(e,n){e.exports={stringify:function(e,{EOL:n="\n",finalEOL:t=!0,replacer:i=null,spaces:a}={}){const o=t?n:"";return JSON.stringify(e,i,a).replace(/\n/g,n)+o},stripBom:function(e){return Buffer.isBuffer(e)&&(e=e.toString("utf8")),e.replace(/^\uFEFF/,"")}}},function(e,n,t){"use strict";const i=t(5).fromCallback,a=t(4),o=t(1),r=t(9),s=t(15).pathExists;e.exports={outputFile:i((function(e,n,t,i){"function"==typeof t&&(i=t,t="utf8");const c=o.dirname(e);s(c,(o,s)=>o?i(o):s?a.writeFile(e,n,t,i):void r.mkdirs(c,o=>{if(o)return i(o);a.writeFile(e,n,t,i)}))})),outputFileSync:function(e,...n){const t=o.dirname(e);if(a.existsSync(t))return a.writeFileSync(e,...n);r.mkdirsSync(t),a.writeFileSync(e,...n)}}},function(e,n,t){"use strict";
        /*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
        function i(e){return null==e}t.r(n),t.d(n,"CORE_SCHEMA",(function(){return tn})),t.d(n,"DEFAULT_SCHEMA",(function(){return an})),t.d(n,"FAILSAFE_SCHEMA",(function(){return en})),t.d(n,"JSON_SCHEMA",(function(){return nn})),t.d(n,"Schema",(function(){return Ze})),t.d(n,"Type",(function(){return Qe})),t.d(n,"YAMLException",(function(){return cn})),t.d(n,"dump",(function(){return sn})),t.d(n,"load",(function(){return on})),t.d(n,"loadAll",(function(){return rn})),t.d(n,"safeDump",(function(){return dn})),t.d(n,"safeLoad",(function(){return un})),t.d(n,"safeLoadAll",(function(){return pn})),t.d(n,"types",(function(){return ln}));var a={isNothing:i,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:i(e)?[]:[e]},repeat:function(e,n){var t,i="";for(t=0;t<n;t+=1)i+=e;return i},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,n){var t,i,a,o;if(n)for(t=0,i=(o=Object.keys(n)).length;t<i;t+=1)e[a=o[t]]=n[a];return e}};function o(e,n){var t="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+="\n\n"+e.mark.snippet),i+" "+t):i}function r(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=o(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(e){return this.name+": "+o(this,e)};var s=r;function c(e,n,t,i,a){var o="",r="",s=Math.floor(a/2)-1;return i-n>s&&(n=i-s+(o=" ... ").length),t-i>s&&(t=i+s-(r=" ...").length),{str:o+e.slice(n,t).replace(/\t/g,"→")+r,pos:i-n+o.length}}function l(e,n){return a.repeat(" ",n-e.length)+e}var u=function(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),"number"!=typeof n.indent&&(n.indent=1),"number"!=typeof n.linesBefore&&(n.linesBefore=3),"number"!=typeof n.linesAfter&&(n.linesAfter=2);for(var t,i=/\r?\n|\r|\0/g,o=[0],r=[],s=-1;t=i.exec(e.buffer);)r.push(t.index),o.push(t.index+t[0].length),e.position<=t.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);var u,p,d="",m=Math.min(e.line+n.linesAfter,r.length).toString().length,f=n.maxLength-(n.indent+m+3);for(u=1;u<=n.linesBefore&&!(s-u<0);u++)p=c(e.buffer,o[s-u],r[s-u],e.position-(o[s]-o[s-u]),f),d=a.repeat(" ",n.indent)+l((e.line-u+1).toString(),m)+" | "+p.str+"\n"+d;for(p=c(e.buffer,o[s],r[s],e.position,f),d+=a.repeat(" ",n.indent)+l((e.line+1).toString(),m)+" | "+p.str+"\n",d+=a.repeat("-",n.indent+m+3+p.pos)+"^\n",u=1;u<=n.linesAfter&&!(s+u>=r.length);u++)p=c(e.buffer,o[s+u],r[s+u],e.position-(o[s]-o[s+u]),f),d+=a.repeat(" ",n.indent)+l((e.line+u+1).toString(),m)+" | "+p.str+"\n";return d.replace(/\n$/,"")},p=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],d=["scalar","sequence","mapping"];var m=function(e,n){if(n=n||{},Object.keys(n).forEach((function(n){if(-1===p.indexOf(n))throw new s('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')})),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(e){return e},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=function(e){var n={};return null!==e&&Object.keys(e).forEach((function(t){e[t].forEach((function(e){n[String(e)]=t}))})),n}(n.styleAliases||null),-1===d.indexOf(this.kind))throw new s('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function f(e,n){var t=[];return e[n].forEach((function(e){var n=t.length;t.forEach((function(t,i){t.tag===e.tag&&t.kind===e.kind&&t.multi===e.multi&&(n=i)})),t[n]=e})),t}function h(e){return this.extend(e)}h.prototype.extend=function(e){var n=[],t=[];if(e instanceof m)t.push(e);else if(Array.isArray(e))t=t.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new s("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(n=n.concat(e.implicit)),e.explicit&&(t=t.concat(e.explicit))}n.forEach((function(e){if(!(e instanceof m))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new s("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),t.forEach((function(e){if(!(e instanceof m))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var i=Object.create(h.prototype);return i.implicit=(this.implicit||[]).concat(n),i.explicit=(this.explicit||[]).concat(t),i.compiledImplicit=f(i,"implicit"),i.compiledExplicit=f(i,"explicit"),i.compiledTypeMap=function(){var e,n,t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function i(e){e.multi?(t.multi[e.kind].push(e),t.multi.fallback.push(e)):t[e.kind][e.tag]=t.fallback[e.tag]=e}for(e=0,n=arguments.length;e<n;e+=1)arguments[e].forEach(i);return t}(i.compiledImplicit,i.compiledExplicit),i};var g=h,v=new m("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),b=new m("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),x=new m("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),y=new g({explicit:[v,b,x]});var D=new m("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var n=e.length;return 1===n&&"~"===e||4===n&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var w=new m("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var n=e.length;return 4===n&&("true"===e||"True"===e||"TRUE"===e)||5===n&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function k(e){return 48<=e&&e<=55}function E(e){return 48<=e&&e<=57}var _=new m("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var n,t,i=e.length,a=0,o=!1;if(!i)return!1;if("-"!==(n=e[a])&&"+"!==n||(n=e[++a]),"0"===n){if(a+1===i)return!0;if("b"===(n=e[++a])){for(a++;a<i;a++)if("_"!==(n=e[a])){if("0"!==n&&"1"!==n)return!1;o=!0}return o&&"_"!==n}if("x"===n){for(a++;a<i;a++)if("_"!==(n=e[a])){if(!(48<=(t=e.charCodeAt(a))&&t<=57||65<=t&&t<=70||97<=t&&t<=102))return!1;o=!0}return o&&"_"!==n}if("o"===n){for(a++;a<i;a++)if("_"!==(n=e[a])){if(!k(e.charCodeAt(a)))return!1;o=!0}return o&&"_"!==n}}if("_"===n)return!1;for(;a<i;a++)if("_"!==(n=e[a])){if(!E(e.charCodeAt(a)))return!1;o=!0}return!(!o||"_"===n)},construct:function(e){var n,t=e,i=1;if(-1!==t.indexOf("_")&&(t=t.replace(/_/g,"")),"-"!==(n=t[0])&&"+"!==n||("-"===n&&(i=-1),n=(t=t.slice(1))[0]),"0"===t)return 0;if("0"===n){if("b"===t[1])return i*parseInt(t.slice(2),2);if("x"===t[1])return i*parseInt(t.slice(2),16);if("o"===t[1])return i*parseInt(t.slice(2),8)}return i*parseInt(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!a.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),C=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var A=/^[-+]?[0-9]+e/;var F=new m("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!C.test(e)||"_"===e[e.length-1])},construct:function(e){var n,t;return t="-"===(n=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),".inf"===n?1===t?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===n?NaN:t*parseFloat(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||a.isNegativeZero(e))},represent:function(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(a.isNegativeZero(e))return"-0.0";return t=e.toString(10),A.test(t)?t.replace("e",".e"):t},defaultStyle:"lowercase"}),S=y.extend({implicit:[D,w,_,F]}),T=S,O=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),j=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var I=new m("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==O.exec(e)||null!==j.exec(e))},construct:function(e){var n,t,i,a,o,r,s,c,l=0,u=null;if(null===(n=O.exec(e))&&(n=j.exec(e)),null===n)throw new Error("Date resolve error");if(t=+n[1],i=+n[2]-1,a=+n[3],!n[4])return new Date(Date.UTC(t,i,a));if(o=+n[4],r=+n[5],s=+n[6],n[7]){for(l=n[7].slice(0,3);l.length<3;)l+="0";l=+l}return n[9]&&(u=6e4*(60*+n[10]+ +(n[11]||0)),"-"===n[9]&&(u=-u)),c=new Date(Date.UTC(t,i,a,o,r,s,l)),u&&c.setTime(c.getTime()-u),c},instanceOf:Date,represent:function(e){return e.toISOString()}});var N=new m("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),P="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var R=new m("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var n,t,i=0,a=e.length,o=P;for(t=0;t<a;t++)if(!((n=o.indexOf(e.charAt(t)))>64)){if(n<0)return!1;i+=6}return i%8==0},construct:function(e){var n,t,i=e.replace(/[\r\n=]/g,""),a=i.length,o=P,r=0,s=[];for(n=0;n<a;n++)n%4==0&&n&&(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)),r=r<<6|o.indexOf(i.charAt(n));return 0===(t=a%4*6)?(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)):18===t?(s.push(r>>10&255),s.push(r>>2&255)):12===t&&s.push(r>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var n,t,i="",a=0,o=e.length,r=P;for(n=0;n<o;n++)n%3==0&&n&&(i+=r[a>>18&63],i+=r[a>>12&63],i+=r[a>>6&63],i+=r[63&a]),a=(a<<8)+e[n];return 0===(t=o%3)?(i+=r[a>>18&63],i+=r[a>>12&63],i+=r[a>>6&63],i+=r[63&a]):2===t?(i+=r[a>>10&63],i+=r[a>>4&63],i+=r[a<<2&63],i+=r[64]):1===t&&(i+=r[a>>2&63],i+=r[a<<4&63],i+=r[64],i+=r[64]),i}}),z=Object.prototype.hasOwnProperty,M=Object.prototype.toString;var B=new m("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var n,t,i,a,o,r=[],s=e;for(n=0,t=s.length;n<t;n+=1){if(i=s[n],o=!1,"[object Object]"!==M.call(i))return!1;for(a in i)if(z.call(i,a)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==r.indexOf(a))return!1;r.push(a)}return!0},construct:function(e){return null!==e?e:[]}}),L=Object.prototype.toString;var U=new m("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var n,t,i,a,o,r=e;for(o=new Array(r.length),n=0,t=r.length;n<t;n+=1){if(i=r[n],"[object Object]"!==L.call(i))return!1;if(1!==(a=Object.keys(i)).length)return!1;o[n]=[a[0],i[a[0]]]}return!0},construct:function(e){if(null===e)return[];var n,t,i,a,o,r=e;for(o=new Array(r.length),n=0,t=r.length;n<t;n+=1)i=r[n],a=Object.keys(i),o[n]=[a[0],i[a[0]]];return o}}),$=Object.prototype.hasOwnProperty;var G=new m("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var n,t=e;for(n in t)if($.call(t,n)&&null!==t[n])return!1;return!0},construct:function(e){return null!==e?e:{}}}),q=T.extend({implicit:[I,N],explicit:[R,B,U,G]}),H=Object.prototype.hasOwnProperty,W=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Y=/[\x85\u2028\u2029]/,V=/[,\[\]\{\}]/,K=/^(?:!|!!|![a-z\-]+!)$/i,X=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function J(e){return Object.prototype.toString.call(e)}function Q(e){return 10===e||13===e}function Z(e){return 9===e||32===e}function ee(e){return 9===e||32===e||10===e||13===e}function ne(e){return 44===e||91===e||93===e||123===e||125===e}function te(e){var n;return 48<=e&&e<=57?e-48:97<=(n=32|e)&&n<=102?n-97+10:-1}function ie(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function ae(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var oe=new Array(256),re=new Array(256),se=0;se<256;se++)oe[se]=ie(se)?1:0,re[se]=ie(se);function ce(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||q,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function le(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=u(t),new s(n,t)}function ue(e,n){throw le(e,n)}function pe(e,n){e.onWarning&&e.onWarning.call(null,le(e,n))}var de={YAML:function(e,n,t){var i,a,o;null!==e.version&&ue(e,"duplication of %YAML directive"),1!==t.length&&ue(e,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(t[0]))&&ue(e,"ill-formed argument of the YAML directive"),a=parseInt(i[1],10),o=parseInt(i[2],10),1!==a&&ue(e,"unacceptable YAML version of the document"),e.version=t[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&pe(e,"unsupported YAML version of the document")},TAG:function(e,n,t){var i,a;2!==t.length&&ue(e,"TAG directive accepts exactly two arguments"),i=t[0],a=t[1],K.test(i)||ue(e,"ill-formed tag handle (first argument) of the TAG directive"),H.call(e.tagMap,i)&&ue(e,'there is a previously declared suffix for "'+i+'" tag handle'),X.test(a)||ue(e,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch(n){ue(e,"tag prefix is malformed: "+a)}e.tagMap[i]=a}};function me(e,n,t,i){var a,o,r,s;if(n<t){if(s=e.input.slice(n,t),i)for(a=0,o=s.length;a<o;a+=1)9===(r=s.charCodeAt(a))||32<=r&&r<=1114111||ue(e,"expected valid JSON character");else W.test(s)&&ue(e,"the stream contains non-printable characters");e.result+=s}}function fe(e,n,t,i){var o,r,s,c;for(a.isObject(t)||ue(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,c=(o=Object.keys(t)).length;s<c;s+=1)r=o[s],H.call(n,r)||(n[r]=t[r],i[r]=!0)}function he(e,n,t,i,a,o,r,s,c){var l,u;if(Array.isArray(a))for(l=0,u=(a=Array.prototype.slice.call(a)).length;l<u;l+=1)Array.isArray(a[l])&&ue(e,"nested arrays are not supported inside keys"),"object"==typeof a&&"[object Object]"===J(a[l])&&(a[l]="[object Object]");if("object"==typeof a&&"[object Object]"===J(a)&&(a="[object Object]"),a=String(a),null===n&&(n={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(o))for(l=0,u=o.length;l<u;l+=1)fe(e,n,o[l],t);else fe(e,n,o,t);else e.json||H.call(t,a)||!H.call(n,a)||(e.line=r||e.line,e.lineStart=s||e.lineStart,e.position=c||e.position,ue(e,"duplicated mapping key")),"__proto__"===a?Object.defineProperty(n,a,{configurable:!0,enumerable:!0,writable:!0,value:o}):n[a]=o,delete t[a];return n}function ge(e){var n;10===(n=e.input.charCodeAt(e.position))?e.position++:13===n?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):ue(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ve(e,n,t){for(var i=0,a=e.input.charCodeAt(e.position);0!==a;){for(;Z(a);)9===a&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(n&&35===a)do{a=e.input.charCodeAt(++e.position)}while(10!==a&&13!==a&&0!==a);if(!Q(a))break;for(ge(e),a=e.input.charCodeAt(e.position),i++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==t&&0!==i&&e.lineIndent<t&&pe(e,"deficient indentation"),i}function be(e){var n,t=e.position;return!(45!==(n=e.input.charCodeAt(t))&&46!==n||n!==e.input.charCodeAt(t+1)||n!==e.input.charCodeAt(t+2)||(t+=3,0!==(n=e.input.charCodeAt(t))&&!ee(n)))}function xe(e,n){1===n?e.result+=" ":n>1&&(e.result+=a.repeat("\n",n-1))}function ye(e,n){var t,i,a=e.tag,o=e.anchor,r=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=r),i=e.input.charCodeAt(e.position);0!==i&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,ue(e,"tab characters must not be used in indentation")),45===i)&&ee(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,ve(e,!0,-1)&&e.lineIndent<=n)r.push(null),i=e.input.charCodeAt(e.position);else if(t=e.line,ke(e,n,3,!1,!0),r.push(e.result),ve(e,!0,-1),i=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&0!==i)ue(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break;return!!s&&(e.tag=a,e.anchor=o,e.kind="sequence",e.result=r,!0)}function De(e){var n,t,i,a,o=!1,r=!1;if(33!==(a=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&ue(e,"duplication of a tag property"),60===(a=e.input.charCodeAt(++e.position))?(o=!0,a=e.input.charCodeAt(++e.position)):33===a?(r=!0,t="!!",a=e.input.charCodeAt(++e.position)):t="!",n=e.position,o){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&62!==a);e.position<e.length?(i=e.input.slice(n,e.position),a=e.input.charCodeAt(++e.position)):ue(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==a&&!ee(a);)33===a&&(r?ue(e,"tag suffix cannot contain exclamation marks"):(t=e.input.slice(n-1,e.position+1),K.test(t)||ue(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),a=e.input.charCodeAt(++e.position);i=e.input.slice(n,e.position),V.test(i)&&ue(e,"tag suffix cannot contain flow indicator characters")}i&&!X.test(i)&&ue(e,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(n){ue(e,"tag name is malformed: "+i)}return o?e.tag=i:H.call(e.tagMap,t)?e.tag=e.tagMap[t]+i:"!"===t?e.tag="!"+i:"!!"===t?e.tag="tag:yaml.org,2002:"+i:ue(e,'undeclared tag handle "'+t+'"'),!0}function we(e){var n,t;if(38!==(t=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&ue(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;0!==t&&!ee(t)&&!ne(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&ue(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function ke(e,n,t,i,o){var r,s,c,l,u,p,d,m,f,h=1,g=!1,v=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,r=s=c=4===t||3===t,i&&ve(e,!0,-1)&&(g=!0,e.lineIndent>n?h=1:e.lineIndent===n?h=0:e.lineIndent<n&&(h=-1)),1===h)for(;De(e)||we(e);)ve(e,!0,-1)?(g=!0,c=r,e.lineIndent>n?h=1:e.lineIndent===n?h=0:e.lineIndent<n&&(h=-1)):c=!1;if(c&&(c=g||o),1!==h&&4!==t||(m=1===t||2===t?n:n+1,f=e.position-e.lineStart,1===h?c&&(ye(e,f)||function(e,n,t){var i,a,o,r,s,c,l,u=e.tag,p=e.anchor,d={},m=Object.create(null),f=null,h=null,g=null,v=!1,b=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=d),l=e.input.charCodeAt(e.position);0!==l;){if(v||-1===e.firstTabInLine||(e.position=e.firstTabInLine,ue(e,"tab characters must not be used in indentation")),i=e.input.charCodeAt(e.position+1),o=e.line,63!==l&&58!==l||!ee(i)){if(r=e.line,s=e.lineStart,c=e.position,!ke(e,t,2,!1,!0))break;if(e.line===o){for(l=e.input.charCodeAt(e.position);Z(l);)l=e.input.charCodeAt(++e.position);if(58===l)ee(l=e.input.charCodeAt(++e.position))||ue(e,"a whitespace character is expected after the key-value separator within a block mapping"),v&&(he(e,d,m,f,h,null,r,s,c),f=h=g=null),b=!0,v=!1,a=!1,f=e.tag,h=e.result;else{if(!b)return e.tag=u,e.anchor=p,!0;ue(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return e.tag=u,e.anchor=p,!0;ue(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===l?(v&&(he(e,d,m,f,h,null,r,s,c),f=h=g=null),b=!0,v=!0,a=!0):v?(v=!1,a=!0):ue(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,l=i;if((e.line===o||e.lineIndent>n)&&(v&&(r=e.line,s=e.lineStart,c=e.position),ke(e,n,4,!0,a)&&(v?h=e.result:g=e.result),v||(he(e,d,m,f,h,g,r,s,c),f=h=g=null),ve(e,!0,-1),l=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>n)&&0!==l)ue(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return v&&he(e,d,m,f,h,null,r,s,c),b&&(e.tag=u,e.anchor=p,e.kind="mapping",e.result=d),b}(e,f,m))||function(e,n){var t,i,a,o,r,s,c,l,u,p,d,m,f=!0,h=e.tag,g=e.anchor,v=Object.create(null);if(91===(m=e.input.charCodeAt(e.position)))r=93,l=!1,o=[];else{if(123!==m)return!1;r=125,l=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),m=e.input.charCodeAt(++e.position);0!==m;){if(ve(e,!0,n),(m=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=h,e.anchor=g,e.kind=l?"mapping":"sequence",e.result=o,!0;f?44===m&&ue(e,"expected the node content, but found ','"):ue(e,"missed comma between flow collection entries"),d=null,s=c=!1,63===m&&ee(e.input.charCodeAt(e.position+1))&&(s=c=!0,e.position++,ve(e,!0,n)),t=e.line,i=e.lineStart,a=e.position,ke(e,n,1,!1,!0),p=e.tag,u=e.result,ve(e,!0,n),m=e.input.charCodeAt(e.position),!c&&e.line!==t||58!==m||(s=!0,m=e.input.charCodeAt(++e.position),ve(e,!0,n),ke(e,n,1,!1,!0),d=e.result),l?he(e,o,v,p,u,d,t,i,a):s?o.push(he(e,null,v,p,u,d,t,i,a)):o.push(u),ve(e,!0,n),44===(m=e.input.charCodeAt(e.position))?(f=!0,m=e.input.charCodeAt(++e.position)):f=!1}ue(e,"unexpected end of the stream within a flow collection")}(e,m)?v=!0:(s&&function(e,n){var t,i,o,r,s,c=1,l=!1,u=!1,p=n,d=0,m=!1;if(124===(r=e.input.charCodeAt(e.position)))i=!1;else{if(62!==r)return!1;i=!0}for(e.kind="scalar",e.result="";0!==r;)if(43===(r=e.input.charCodeAt(++e.position))||45===r)1===c?c=43===r?3:2:ue(e,"repeat of a chomping mode identifier");else{if(!((o=48<=(s=r)&&s<=57?s-48:-1)>=0))break;0===o?ue(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):u?ue(e,"repeat of an indentation width identifier"):(p=n+o-1,u=!0)}if(Z(r)){do{r=e.input.charCodeAt(++e.position)}while(Z(r));if(35===r)do{r=e.input.charCodeAt(++e.position)}while(!Q(r)&&0!==r)}for(;0!==r;){for(ge(e),e.lineIndent=0,r=e.input.charCodeAt(e.position);(!u||e.lineIndent<p)&&32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position);if(!u&&e.lineIndent>p&&(p=e.lineIndent),Q(r))d++;else{if(e.lineIndent<p){3===c?e.result+=a.repeat("\n",l?1+d:d):1===c&&l&&(e.result+="\n");break}for(i?Z(r)?(m=!0,e.result+=a.repeat("\n",l?1+d:d)):m?(m=!1,e.result+=a.repeat("\n",d+1)):0===d?l&&(e.result+=" "):e.result+=a.repeat("\n",d):e.result+=a.repeat("\n",l?1+d:d),l=!0,u=!0,d=0,t=e.position;!Q(r)&&0!==r;)r=e.input.charCodeAt(++e.position);me(e,t,e.position,!1)}}return!0}(e,m)||function(e,n){var t,i,a;if(39!==(t=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=a=e.position;0!==(t=e.input.charCodeAt(e.position));)if(39===t){if(me(e,i,e.position,!0),39!==(t=e.input.charCodeAt(++e.position)))return!0;i=e.position,e.position++,a=e.position}else Q(t)?(me(e,i,a,!0),xe(e,ve(e,!1,n)),i=a=e.position):e.position===e.lineStart&&be(e)?ue(e,"unexpected end of the document within a single quoted scalar"):(e.position++,a=e.position);ue(e,"unexpected end of the stream within a single quoted scalar")}(e,m)||function(e,n){var t,i,a,o,r,s,c;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,t=i=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return me(e,t,e.position,!0),e.position++,!0;if(92===s){if(me(e,t,e.position,!0),Q(s=e.input.charCodeAt(++e.position)))ve(e,!1,n);else if(s<256&&oe[s])e.result+=re[s],e.position++;else if((r=120===(c=s)?2:117===c?4:85===c?8:0)>0){for(a=r,o=0;a>0;a--)(r=te(s=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+r:ue(e,"expected hexadecimal character");e.result+=ae(o),e.position++}else ue(e,"unknown escape sequence");t=i=e.position}else Q(s)?(me(e,t,i,!0),xe(e,ve(e,!1,n)),t=i=e.position):e.position===e.lineStart&&be(e)?ue(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}ue(e,"unexpected end of the stream within a double quoted scalar")}(e,m)?v=!0:!function(e){var n,t,i;if(42!==(i=e.input.charCodeAt(e.position)))return!1;for(i=e.input.charCodeAt(++e.position),n=e.position;0!==i&&!ee(i)&&!ne(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&ue(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),H.call(e.anchorMap,t)||ue(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ve(e,!0,-1),!0}(e)?function(e,n,t){var i,a,o,r,s,c,l,u,p=e.kind,d=e.result;if(ee(u=e.input.charCodeAt(e.position))||ne(u)||35===u||38===u||42===u||33===u||124===u||62===u||39===u||34===u||37===u||64===u||96===u)return!1;if((63===u||45===u)&&(ee(i=e.input.charCodeAt(e.position+1))||t&&ne(i)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,r=!1;0!==u;){if(58===u){if(ee(i=e.input.charCodeAt(e.position+1))||t&&ne(i))break}else if(35===u){if(ee(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&be(e)||t&&ne(u))break;if(Q(u)){if(s=e.line,c=e.lineStart,l=e.lineIndent,ve(e,!1,-1),e.lineIndent>=n){r=!0,u=e.input.charCodeAt(e.position);continue}e.position=o,e.line=s,e.lineStart=c,e.lineIndent=l;break}}r&&(me(e,a,o,!1),xe(e,e.line-s),a=o=e.position,r=!1),Z(u)||(o=e.position+1),u=e.input.charCodeAt(++e.position)}return me(e,a,o,!1),!!e.result||(e.kind=p,e.result=d,!1)}(e,m,1===t)&&(v=!0,null===e.tag&&(e.tag="?")):(v=!0,null===e.tag&&null===e.anchor||ue(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===h&&(v=c&&ye(e,f))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&ue(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,u=e.implicitTypes.length;l<u;l+=1)if((d=e.implicitTypes[l]).resolve(e.result)){e.result=d.construct(e.result),e.tag=d.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(H.call(e.typeMap[e.kind||"fallback"],e.tag))d=e.typeMap[e.kind||"fallback"][e.tag];else for(d=null,l=0,u=(p=e.typeMap.multi[e.kind||"fallback"]).length;l<u;l+=1)if(e.tag.slice(0,p[l].tag.length)===p[l].tag){d=p[l];break}d||ue(e,"unknown tag !<"+e.tag+">"),null!==e.result&&d.kind!==e.kind&&ue(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+d.kind+'", not "'+e.kind+'"'),d.resolve(e.result,e.tag)?(e.result=d.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):ue(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||v}function Ee(e){var n,t,i,a,o=e.position,r=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(a=e.input.charCodeAt(e.position))&&(ve(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==a));){for(r=!0,a=e.input.charCodeAt(++e.position),n=e.position;0!==a&&!ee(a);)a=e.input.charCodeAt(++e.position);for(i=[],(t=e.input.slice(n,e.position)).length<1&&ue(e,"directive name must not be less than one character in length");0!==a;){for(;Z(a);)a=e.input.charCodeAt(++e.position);if(35===a){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&!Q(a));break}if(Q(a))break;for(n=e.position;0!==a&&!ee(a);)a=e.input.charCodeAt(++e.position);i.push(e.input.slice(n,e.position))}0!==a&&ge(e),H.call(de,t)?de[t](e,t,i):pe(e,'unknown document directive "'+t+'"')}ve(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,ve(e,!0,-1)):r&&ue(e,"directives end mark is expected"),ke(e,e.lineIndent-1,4,!1,!0),ve(e,!0,-1),e.checkLineBreaks&&Y.test(e.input.slice(o,e.position))&&pe(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&be(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,ve(e,!0,-1)):e.position<e.length-1&&ue(e,"end of the stream or a document separator is expected")}function _e(e,n){n=n||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var t=new ce(e,n),i=e.indexOf("\0");for(-1!==i&&(t.position=i,ue(t,"null byte is not allowed in input")),t.input+="\0";32===t.input.charCodeAt(t.position);)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Ee(t);return t.documents}var Ce={loadAll:function(e,n,t){null!==n&&"object"==typeof n&&void 0===t&&(t=n,n=null);var i=_e(e,t);if("function"!=typeof n)return i;for(var a=0,o=i.length;a<o;a+=1)n(i[a])},load:function(e,n){var t=_e(e,n);if(0!==t.length){if(1===t.length)return t[0];throw new s("expected a single document in the stream, but found more")}}},Ae=Object.prototype.toString,Fe=Object.prototype.hasOwnProperty,Se={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Te=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Oe=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function je(e){var n,t,i;if(n=e.toString(16).toUpperCase(),e<=255)t="x",i=2;else if(e<=65535)t="u",i=4;else{if(!(e<=4294967295))throw new s("code point within a string may not be greater than 0xFFFFFFFF");t="U",i=8}return"\\"+t+a.repeat("0",i-n.length)+n}function Ie(e){this.schema=e.schema||q,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=a.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,n){var t,i,a,o,r,s,c;if(null===n)return{};for(t={},a=0,o=(i=Object.keys(n)).length;a<o;a+=1)r=i[a],s=String(n[r]),"!!"===r.slice(0,2)&&(r="tag:yaml.org,2002:"+r.slice(2)),(c=e.compiledTypeMap.fallback[r])&&Fe.call(c.styleAliases,s)&&(s=c.styleAliases[s]),t[r]=s;return t}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ne(e,n){for(var t,i=a.repeat(" ",n),o=0,r=-1,s="",c=e.length;o<c;)-1===(r=e.indexOf("\n",o))?(t=e.slice(o),o=c):(t=e.slice(o,r+1),o=r+1),t.length&&"\n"!==t&&(s+=i),s+=t;return s}function Pe(e,n){return"\n"+a.repeat(" ",e.indent*n)}function Re(e){return 32===e||9===e}function ze(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function Me(e){return ze(e)&&65279!==e&&13!==e&&10!==e}function Be(e,n,t){var i=Me(e),a=i&&!Re(e);return(t?i:i&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===n&&!a)||Me(n)&&!Re(n)&&35===e||58===n&&a}function Le(e,n){var t,i=e.charCodeAt(n);return i>=55296&&i<=56319&&n+1<e.length&&(t=e.charCodeAt(n+1))>=56320&&t<=57343?1024*(i-55296)+t-56320+65536:i}function Ue(e){return/^\n* /.test(e)}function $e(e,n,t,i,a,o,r,s){var c,l,u=0,p=null,d=!1,m=!1,f=-1!==i,h=-1,g=ze(l=Le(e,0))&&65279!==l&&!Re(l)&&45!==l&&63!==l&&58!==l&&44!==l&&91!==l&&93!==l&&123!==l&&125!==l&&35!==l&&38!==l&&42!==l&&33!==l&&124!==l&&61!==l&&62!==l&&39!==l&&34!==l&&37!==l&&64!==l&&96!==l&&function(e){return!Re(e)&&58!==e}(Le(e,e.length-1));if(n||r)for(c=0;c<e.length;u>=65536?c+=2:c++){if(!ze(u=Le(e,c)))return 5;g=g&&Be(u,p,s),p=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(10===(u=Le(e,c)))d=!0,f&&(m=m||c-h-1>i&&" "!==e[h+1],h=c);else if(!ze(u))return 5;g=g&&Be(u,p,s),p=u}m=m||f&&c-h-1>i&&" "!==e[h+1]}return d||m?t>9&&Ue(e)?5:r?2===o?5:2:m?4:3:!g||r||a(e)?2===o?5:2:1}function Ge(e,n,t,i,a){e.dump=function(){if(0===n.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Te.indexOf(n)||Oe.test(n)))return 2===e.quotingType?'"'+n+'"':"'"+n+"'";var o=e.indent*Math.max(1,t),r=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),c=i||e.flowLevel>-1&&t>=e.flowLevel;switch($e(n,c,e.indent,r,(function(n){return function(e,n){var t,i;for(t=0,i=e.implicitTypes.length;t<i;t+=1)if(e.implicitTypes[t].resolve(n))return!0;return!1}(e,n)}),e.quotingType,e.forceQuotes&&!i,a)){case 1:return n;case 2:return"'"+n.replace(/'/g,"''")+"'";case 3:return"|"+qe(n,e.indent)+He(Ne(n,o));case 4:return">"+qe(n,e.indent)+He(Ne(function(e,n){var t,i,a=/(\n+)([^\n]*)/g,o=(s=e.indexOf("\n"),s=-1!==s?s:e.length,a.lastIndex=s,We(e.slice(0,s),n)),r="\n"===e[0]||" "===e[0];var s;for(;i=a.exec(e);){var c=i[1],l=i[2];t=" "===l[0],o+=c+(r||t||""===l?"":"\n")+We(l,n),r=t}return o}(n,r),o));case 5:return'"'+function(e){for(var n,t="",i=0,a=0;a<e.length;i>=65536?a+=2:a++)i=Le(e,a),!(n=Se[i])&&ze(i)?(t+=e[a],i>=65536&&(t+=e[a+1])):t+=n||je(i);return t}(n)+'"';default:throw new s("impossible error: invalid scalar style")}}()}function qe(e,n){var t=Ue(e)?String(n):"",i="\n"===e[e.length-1];return t+(i&&("\n"===e[e.length-2]||"\n"===e)?"+":i?"":"-")+"\n"}function He(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function We(e,n){if(""===e||" "===e[0])return e;for(var t,i,a=/ [^ ]/g,o=0,r=0,s=0,c="";t=a.exec(e);)(s=t.index)-o>n&&(i=r>o?r:s,c+="\n"+e.slice(o,i),o=i+1),r=s;return c+="\n",e.length-o>n&&r>o?c+=e.slice(o,r)+"\n"+e.slice(r+1):c+=e.slice(o),c.slice(1)}function Ye(e,n,t,i){var a,o,r,s="",c=e.tag;for(a=0,o=t.length;a<o;a+=1)r=t[a],e.replacer&&(r=e.replacer.call(t,String(a),r)),(Ke(e,n+1,r,!0,!0,!1,!0)||void 0===r&&Ke(e,n+1,null,!0,!0,!1,!0))&&(i&&""===s||(s+=Pe(e,n)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=c,e.dump=s||"[]"}function Ve(e,n,t){var i,a,o,r,c,l;for(o=0,r=(a=t?e.explicitTypes:e.implicitTypes).length;o<r;o+=1)if(((c=a[o]).instanceOf||c.predicate)&&(!c.instanceOf||"object"==typeof n&&n instanceof c.instanceOf)&&(!c.predicate||c.predicate(n))){if(t?c.multi&&c.representName?e.tag=c.representName(n):e.tag=c.tag:e.tag="?",c.represent){if(l=e.styleMap[c.tag]||c.defaultStyle,"[object Function]"===Ae.call(c.represent))i=c.represent(n,l);else{if(!Fe.call(c.represent,l))throw new s("!<"+c.tag+'> tag resolver accepts not "'+l+'" style');i=c.represent[l](n,l)}e.dump=i}return!0}return!1}function Ke(e,n,t,i,a,o,r){e.tag=null,e.dump=t,Ve(e,t,!1)||Ve(e,t,!0);var c,l=Ae.call(e.dump),u=i;i&&(i=e.flowLevel<0||e.flowLevel>n);var p,d,m="[object Object]"===l||"[object Array]"===l;if(m&&(d=-1!==(p=e.duplicates.indexOf(t))),(null!==e.tag&&"?"!==e.tag||d||2!==e.indent&&n>0)&&(a=!1),d&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(m&&d&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===l)i&&0!==Object.keys(e.dump).length?(!function(e,n,t,i){var a,o,r,c,l,u,p="",d=e.tag,m=Object.keys(t);if(!0===e.sortKeys)m.sort();else if("function"==typeof e.sortKeys)m.sort(e.sortKeys);else if(e.sortKeys)throw new s("sortKeys must be a boolean or a function");for(a=0,o=m.length;a<o;a+=1)u="",i&&""===p||(u+=Pe(e,n)),c=t[r=m[a]],e.replacer&&(c=e.replacer.call(t,r,c)),Ke(e,n+1,r,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?u+="?":u+="? "),u+=e.dump,l&&(u+=Pe(e,n)),Ke(e,n+1,c,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?u+=":":u+=": ",p+=u+=e.dump));e.tag=d,e.dump=p||"{}"}(e,n,e.dump,a),d&&(e.dump="&ref_"+p+e.dump)):(!function(e,n,t){var i,a,o,r,s,c="",l=e.tag,u=Object.keys(t);for(i=0,a=u.length;i<a;i+=1)s="",""!==c&&(s+=", "),e.condenseFlow&&(s+='"'),r=t[o=u[i]],e.replacer&&(r=e.replacer.call(t,o,r)),Ke(e,n,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ke(e,n,r,!1,!1)&&(c+=s+=e.dump));e.tag=l,e.dump="{"+c+"}"}(e,n,e.dump),d&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===l)i&&0!==e.dump.length?(e.noArrayIndent&&!r&&n>0?Ye(e,n-1,e.dump,a):Ye(e,n,e.dump,a),d&&(e.dump="&ref_"+p+e.dump)):(!function(e,n,t){var i,a,o,r="",s=e.tag;for(i=0,a=t.length;i<a;i+=1)o=t[i],e.replacer&&(o=e.replacer.call(t,String(i),o)),(Ke(e,n,o,!1,!1)||void 0===o&&Ke(e,n,null,!1,!1))&&(""!==r&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=s,e.dump="["+r+"]"}(e,n,e.dump),d&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&Ge(e,e.dump,n,o,u)}null!==e.tag&&"?"!==e.tag&&(c=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),c="!"===e.tag[0]?"!"+c:"tag:yaml.org,2002:"===c.slice(0,18)?"!!"+c.slice(18):"!<"+c+">",e.dump=c+" "+e.dump)}return!0}function Xe(e,n){var t,i,a=[],o=[];for(function e(n,t,i){var a,o,r;if(null!==n&&"object"==typeof n)if(-1!==(o=t.indexOf(n)))-1===i.indexOf(o)&&i.push(o);else if(t.push(n),Array.isArray(n))for(o=0,r=n.length;o<r;o+=1)e(n[o],t,i);else for(a=Object.keys(n),o=0,r=a.length;o<r;o+=1)e(n[a[o]],t,i)}(e,a,o),t=0,i=o.length;t<i;t+=1)n.duplicates.push(a[o[t]]);n.usedDuplicates=new Array(i)}function Je(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var Qe=m,Ze=g,en=y,nn=S,tn=T,an=q,on=Ce.load,rn=Ce.loadAll,sn={dump:function(e,n){var t=new Ie(n=n||{});t.noRefs||Xe(e,t);var i=e;return t.replacer&&(i=t.replacer.call({"":i},"",i)),Ke(t,0,i,!0,!0)?t.dump+"\n":""}}.dump,cn=s,ln={binary:R,float:F,map:x,null:D,pairs:U,set:G,timestamp:I,bool:w,int:_,merge:N,omap:B,seq:b,str:v},un=Je("safeLoad","load"),pn=Je("safeLoadAll","loadAll"),dn=Je("safeDump","dump"),mn={Type:Qe,Schema:Ze,FAILSAFE_SCHEMA:en,JSON_SCHEMA:nn,CORE_SCHEMA:tn,DEFAULT_SCHEMA:an,load:on,loadAll:rn,dump:sn,YAMLException:cn,types:ln,safeLoad:un,safeLoadAll:pn,safeDump:dn};n.default=mn},function(e,n){const t=Object.freeze({loose:!0}),i=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:i},function(e,n,t){const i=t(3);e.exports=(e,n,t)=>{const a=new i(e,t),o=new i(n,t);return a.compare(o)||a.compareBuild(o)}},function(e,n,t){const i=t(7);e.exports=(e,n,t)=>i(e,n,t)<0},function(e,n,t){const i=t(7);e.exports=(e,n,t)=>i(e,n,t)>=0},function(e,n,t){const i=t(7);e.exports=(e,n,t)=>i(e,n,t)<=0},function(e,n,t){const i=t(3),a=t(30),{ANY:o}=a,r=t(8),s=t(31),c=t(29),l=t(42),u=t(44),p=t(43);e.exports=(e,n,t,d)=>{let m,f,h,g,v;switch(e=new i(e,d),n=new r(n,d),t){case">":m=c,f=u,h=l,g=">",v=">=";break;case"<":m=l,f=p,h=c,g="<",v="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(s(e,n,d))return!1;for(let t=0;t<n.set.length;++t){const i=n.set[t];let r=null,s=null;if(i.forEach(e=>{e.semver===o&&(e=new a(">=0.0.0")),r=r||e,s=s||e,m(e.semver,r.semver,d)?r=e:h(e.semver,s.semver,d)&&(s=e)}),r.operator===g||r.operator===v)return!1;if((!s.operator||s.operator===g)&&f(e,s.semver))return!1;if(s.operator===v&&h(e,s.semver))return!1}return!0}},function(e,n,t){"use strict";var i;Object.defineProperty(n,"__esModule",{value:!0}),n.computeOperations=n.OperationKind=void 0,function(e){e[e.COPY=0]="COPY",e[e.DOWNLOAD=1]="DOWNLOAD"}(i=n.OperationKind||(n.OperationKind={})),n.computeOperations=function(e,n,t){const a=r(e.files),s=r(n.files);let c=null;const l=n.files[0],u=[],p=l.name,d=a.get(p);if(null==d)throw new Error(` no file $ {
            p
        }
        in old blockmap `);const m=s.get(p);let f=0;const{checksumToOffset:h,checksumToOldSize:g}=function(e,n,t){const i=new Map,a=new Map;let o=n;for(let n=0;n<e.checksums.length;n++){const r=e.checksums[n],s=e.sizes[n],c=a.get(r);if(void 0===c)i.set(r,o),a.set(r,s);else if(null!=t.debug){const e=c===s?"(same size)":`(size : $ {
            c
        }, this size: $ {
            s
        })`;t.debug(` $ {
            r
        }
        duplicated in blockmap $ {
            e
        }, it doesn 't lead to broken differential downloader, just corresponding block will be skipped)`)}o+=s}return{checksumToOffset:i,checksumToOldSize:a}}(a.get(p),d.offset,t);let v=l.offset;for(let e=0;e<m.checksums.length;v+=m.sizes[e],e++){const n=m.sizes[e],a=m.checksums[e];let r=h.get(a);null!=r&&g.get(a)!==n&&(t.warn(`Checksum ("${a}") matches, but size differs (old: ${g.get(a)}, new: ${n})`),r=void 0),void 0===r?(f++,null!=c&&c.kind===i.DOWNLOAD&&c.end===v?c.end+=n:(c={kind:i.DOWNLOAD,start:v,end:v+n},o(c,u,a,e))):null!=c&&c.kind===i.COPY&&c.end===r?c.end+=n:(c={kind:i.COPY,start:r,end:r+n},o(c,u,a,e))}return f>0&&t.info(`File${"file"===l.name?"":" "+l.name} has ${f} changed blocks`),u};const a="true"===process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES;function o(e,n,t,o){if(a&&0!==n.length){const a=n[n.length-1];if(a.kind===e.kind&&e.start<a.end&&e.start>a.start){const n=[a.start,a.end,e.start,e.end].reduce((e,n)=>e<n?e:n);throw new Error(`operation (block index: ${o}, checksum: ${t}, kind: ${i[e.kind]}) overlaps previous operation (checksum: ${t}):\nabs: ${a.start} until ${a.end} and ${e.start} until ${e.end}\nrel: ${a.start-n} until ${a.end-n} and ${e.start-n} until ${e.end-n}`)}}n.push(e)}function r(e){const n=new Map;for(const t of e)n.set(t.name,t);return n}},function(e,n,t){"use strict";const i=e=>!Number.isNaN(e)&&(e>=4352&&(e<=4447||9001===e||9002===e||11904<=e&&e<=12871&&12351!==e||12880<=e&&e<=19903||19968<=e&&e<=42182||43360<=e&&e<=43388||44032<=e&&e<=55203||63744<=e&&e<=64255||65040<=e&&e<=65049||65072<=e&&e<=65131||65281<=e&&e<=65376||65504<=e&&e<=65510||110592<=e&&e<=110593||127488<=e&&e<=127569||131072<=e&&e<=262141));e.exports=i,e.exports.default=i},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){const i=t(82),a={};for(const e of Object.keys(i))a[i[e]]=e;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=o;for(const e of Object.keys(o)){if(!("channels"in o[e]))throw new Error("missing channels property: "+e);if(!("labels"in o[e]))throw new Error("missing channel labels property: "+e);if(o[e].labels.length!==o[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:n,labels:t}=o[e];delete o[e].channels,delete o[e].labels,Object.defineProperty(o[e],"channels",{value:n}),Object.defineProperty(o[e],"labels",{value:t})}o.rgb.hsl=function(e){const n=e[0]/255,t=e[1]/255,i=e[2]/255,a=Math.min(n,t,i),o=Math.max(n,t,i),r=o-a;let s,c;o===a?s=0:n===o?s=(t-i)/r:t===o?s=2+(i-n)/r:i===o&&(s=4+(n-t)/r),s=Math.min(60*s,360),s<0&&(s+=360);const l=(a+o)/2;return c=o===a?0:l<=.5?r/(o+a):r/(2-o-a),[s,100*c,100*l]},o.rgb.hsv=function(e){let n,t,i,a,o;const r=e[0]/255,s=e[1]/255,c=e[2]/255,l=Math.max(r,s,c),u=l-Math.min(r,s,c),p=function(e){return(l-e)/6/u+.5};return 0===u?(a=0,o=0):(o=u/l,n=p(r),t=p(s),i=p(c),r===l?a=i-t:s===l?a=1/3+n-i:c===l&&(a=2/3+t-n),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*l]},o.rgb.hwb=function(e){const n=e[0],t=e[1];let i=e[2];const a=o.rgb.hsl(e)[0],r=1/255*Math.min(n,Math.min(t,i));return i=1-1/255*Math.max(n,Math.max(t,i)),[a,100*r,100*i]},o.rgb.cmyk=function(e){const n=e[0]/255,t=e[1]/255,i=e[2]/255,a=Math.min(1-n,1-t,1-i);return[100*((1-n-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-i-a)/(1-a)||0),100*a]},o.rgb.keyword=function(e){const n=a[e];if(n)return n;let t,o=1/0;for(const n of Object.keys(i)){const a=i[n],c=(s=a,((r=e)[0]-s[0])**2+(r[1]-s[1])**2+(r[2]-s[2])**2);c<o&&(o=c,t=n)}var r,s;return t},o.keyword.rgb=function(e){return i[e]},o.rgb.xyz=function(e){let n=e[0]/255,t=e[1]/255,i=e[2]/255;n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,i=i>.04045?((i+.055)/1.055)**2.4:i/12.92;return[100*(.4124*n+.3576*t+.1805*i),100*(.2126*n+.7152*t+.0722*i),100*(.0193*n+.1192*t+.9505*i)]},o.rgb.lab=function(e){const n=o.rgb.xyz(e);let t=n[0],i=n[1],a=n[2];t/=95.047,i/=100,a/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,i=i>.008856?i**(1/3):7.787*i+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*i-16,500*(t-i),200*(i-a)]},o.hsl.rgb=function(e){const n=e[0]/360,t=e[1]/100,i=e[2]/100;let a,o,r;if(0===t)return r=255*i,[r,r,r];a=i<.5?i*(1+t):i+t-i*t;const s=2*i-a,c=[0,0,0];for(let e=0;e<3;e++)o=n+1/3*-(e-1),o<0&&o++,o>1&&o--,r=6*o<1?s+6*(a-s)*o:2*o<1?a:3*o<2?s+(a-s)*(2/3-o)*6:s,c[e]=255*r;return c},o.hsl.hsv=function(e){const n=e[0];let t=e[1]/100,i=e[2]/100,a=t;const o=Math.max(i,.01);i*=2,t*=i<=1?i:2-i,a*=o<=1?o:2-o;return[n,100*(0===i?2*a/(o+a):2*t/(i+t)),100*((i+t)/2)]},o.hsv.rgb=function(e){const n=e[0]/60,t=e[1]/100;let i=e[2]/100;const a=Math.floor(n)%6,o=n-Math.floor(n),r=255*i*(1-t),s=255*i*(1-t*o),c=255*i*(1-t*(1-o));switch(i*=255,a){case 0:return[i,c,r];case 1:return[s,i,r];case 2:return[r,i,c];case 3:return[r,s,i];case 4:return[c,r,i];case 5:return[i,r,s]}},o.hsv.hsl=function(e){const n=e[0],t=e[1]/100,i=e[2]/100,a=Math.max(i,.01);let o,r;r=(2-t)*i;const s=(2-t)*a;return o=t*a,o/=s<=1?s:2-s,o=o||0,r/=2,[n,100*o,100*r]},o.hwb.rgb=function(e){const n=e[0]/360;let t=e[1]/100,i=e[2]/100;const a=t+i;let o;a>1&&(t/=a,i/=a);const r=Math.floor(6*n),s=1-i;o=6*n-r,0!=(1&r)&&(o=1-o);const c=t+o*(s-t);let l,u,p;switch(r){default:case 6:case 0:l=s,u=c,p=t;break;case 1:l=c,u=s,p=t;break;case 2:l=t,u=s,p=c;break;case 3:l=t,u=c,p=s;break;case 4:l=c,u=t,p=s;break;case 5:l=s,u=t,p=c}return[255*l,255*u,255*p]},o.cmyk.rgb=function(e){const n=e[0]/100,t=e[1]/100,i=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a))]},o.xyz.rgb=function(e){const n=e[0]/100,t=e[1]/100,i=e[2]/100;let a,o,r;return a=3.2406*n+-1.5372*t+-.4986*i,o=-.9689*n+1.8758*t+.0415*i,r=.0557*n+-.204*t+1.057*i,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,r=r>.0031308?1.055*r**(1/2.4)-.055:12.92*r,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),r=Math.min(Math.max(0,r),1),[255*a,255*o,255*r]},o.xyz.lab=function(e){let n=e[0],t=e[1],i=e[2];n/=95.047,t/=100,i/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,i=i>.008856?i**(1/3):7.787*i+16/116;return[116*t-16,500*(n-t),200*(t-i)]},o.lab.xyz=function(e){let n,t,i;t=(e[0]+16)/116,n=e[1]/500+t,i=t-e[2]/200;const a=t**3,o=n**3,r=i**3;return t=a>.008856?a:(t-16/116)/7.787,n=o>.008856?o:(n-16/116)/7.787,i=r>.008856?r:(i-16/116)/7.787,n*=95.047,t*=100,i*=108.883,[n,t,i]},o.lab.lch=function(e){const n=e[0],t=e[1],i=e[2];let a;a=360*Math.atan2(i,t)/2/Math.PI,a<0&&(a+=360);return[n,Math.sqrt(t*t+i*i),a]},o.lch.lab=function(e){const n=e[0],t=e[1],i=e[2]/360*2*Math.PI;return[n,t*Math.cos(i),t*Math.sin(i)]},o.rgb.ansi16=function(e,n=null){const[t,i,a]=e;let r=null===n?o.rgb.hsv(e)[2]:n;if(r=Math.round(r/50),0===r)return 30;let s=30+(Math.round(a/255)<<2|Math.round(i/255)<<1|Math.round(t/255));return 2===r&&(s+=60),s},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){const n=e[0],t=e[1],i=e[2];if(n===t&&t===i)return n<8?16:n>248?231:Math.round((n-8)/247*24)+232;return 16+36*Math.round(n/255*5)+6*Math.round(t/255*5)+Math.round(i/255*5)},o.ansi16.rgb=function(e){let n=e%10;if(0===n||7===n)return e>50&&(n+=3.5),n=n/10.5*255,[n,n,n];const t=.5*(1+~~(e>50));return[(1&n)*t*255,(n>>1&1)*t*255,(n>>2&1)*t*255]},o.ansi256.rgb=function(e){if(e>=232){const n=10*(e-232)+8;return[n,n,n]}let n;e-=16;return[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},o.rgb.hex=function(e){const n=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},o.hex.rgb=function(e){const n=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let t=n[0];3===n[0].length&&(t=t.split("").map(e=>e+e).join(""));const i=parseInt(t,16);return[i>>16&255,i>>8&255,255&i]},o.rgb.hcg=function(e){const n=e[0]/255,t=e[1]/255,i=e[2]/255,a=Math.max(Math.max(n,t),i),o=Math.min(Math.min(n,t),i),r=a-o;let s,c;return s=r<1?o/(1-r):0,c=r<=0?0:a===n?(t-i)/r%6:a===t?2+(i-n)/r:4+(n-t)/r,c/=6,c%=1,[360*c,100*r,100*s]},o.hsl.hcg=function(e){const n=e[1]/100,t=e[2]/100,i=t<.5?2*n*t:2*n*(1-t);let a=0;return i<1&&(a=(t-.5*i)/(1-i)),[e[0],100*i,100*a]},o.hsv.hcg=function(e){const n=e[1]/100,t=e[2]/100,i=n*t;let a=0;return i<1&&(a=(t-i)/(1-i)),[e[0],100*i,100*a]},o.hcg.rgb=function(e){const n=e[0]/360,t=e[1]/100,i=e[2]/100;if(0===t)return[255*i,255*i,255*i];const a=[0,0,0],o=n%1*6,r=o%1,s=1-r;let c=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=r,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=r;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=r,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return c=(1-t)*i,[255*(t*a[0]+c),255*(t*a[1]+c),255*(t*a[2]+c)]},o.hcg.hsv=function(e){const n=e[1]/100,t=n+e[2]/100*(1-n);let i=0;return t>0&&(i=n/t),[e[0],100*i,100*t]},o.hcg.hsl=function(e){const n=e[1]/100,t=e[2]/100*(1-n)+.5*n;let i=0;return t>0&&t<.5?i=n/(2*t):t>=.5&&t<1&&(i=n/(2*(1-t))),[e[0],100*i,100*t]},o.hcg.hwb=function(e){const n=e[1]/100,t=n+e[2]/100*(1-n);return[e[0],100*(t-n),100*(1-t)]},o.hwb.hcg=function(e){const n=e[1]/100,t=1-e[2]/100,i=t-n;let a=0;return i<1&&(a=(t-i)/(1-i)),[e[0],100*i,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=function(e){return[0,0,e[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){const n=255&Math.round(e[0]/100*255),t=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,n){e.exports=require("http")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CancellationError=n.CancellationToken=void 0;const i=t(34);class a extends i.EventEmitter{constructor(e){super(),this.parentCancelHandler=null,this._parent=null,this._cancelled=!1,null!=e&&(this.parent=e)}get cancelled(){return this._cancelled||null!=this._parent&&this._parent.cancelled}set parent(e){this.removeParentCancelHandler(),this._parent=e,this.parentCancelHandler=()=>this.cancel(),this._parent.onCancel(this.parentCancelHandler)}cancel(){this._cancelled=!0,this.emit("cancel")}onCancel(e){this.cancelled?e():this.once("cancel",e)}createPromise(e){if(this.cancelled)return Promise.reject(new o);const n=()=>{if(null!=t)try{this.removeListener("cancel",t),t=null}catch(e){}};let t=null;return new Promise((n,i)=>{let a=null;t=()=>{try{null!=a&&(a(),a=null)}finally{i(new o)}},this.cancelled?t():(this.onCancel(t),e(n,i,e=>{a=e}))}).then(e=>(n(),e)).catch(e=>{throw n(),e})}removeParentCancelHandler(){const e=this._parent;null!=e&&null!=this.parentCancelHandler&&(e.removeListener("cancel",this.parentCancelHandler),this.parentCancelHandler=null)}dispose(){try{this.removeParentCancelHandler()}finally{this.removeAllListeners(),this._parent=null}}}n.CancellationToken=a;class o extends Error{constructor(){super("cancelled")}}n.CancellationError=o},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.safeStringifyJson=n.configureRequestOptions=n.safeGetHeader=n.DigestTransform=n.configureRequestUrl=n.configureRequestOptionsFromUrl=n.HttpExecutor=n.parseJson=n.HttpError=n.createHttpError=void 0;const i=t(25),a=t(117),o=t(6),r=t(16),s=t(10),c=t(51),l=t(2),u=t(55),p=a.default("electron-builder");function d(e,n=null){return new f(e.statusCode||-1,`${e.statusCode} ${e.statusMessage}`+(null==n?"":"\n"+JSON.stringify(n,null,"  "))+"\nHeaders: "+D(e.headers),n)}n.createHttpError=d;const m=new Map([[429,"Too many requests"],[400,"Bad request"],[403,"Forbidden"],[404,"Not found"],[405,"Method not allowed"],[406,"Not acceptable"],[408,"Request timeout"],[413,"Request entity too large"],[500,"Internal server error"],[502,"Bad gateway"],[503,"Service unavailable"],[504,"Gateway timeout"],[505,"HTTP version not supported"]]);class f extends Error{constructor(e,n="HTTP error: "+(m.get(e)||e),t=null){super(n),this.statusCode=e,this.description=t,this.name="HttpError",this.code="HTTP_ERROR_"+e}}n.HttpError=f,n.parseJson=function(e){return e.then(e=>null==e||0===e.length?null:JSON.parse(e))};class h{constructor(){this.maxRedirects=10}request(e,n=new c.CancellationToken,t){y(e);const i=null==t?void 0:Buffer.from(JSON.stringify(t));return null!=i&&(e.method="post",e.headers["Content-Type"]="application/json",e.headers["Content-Length"]=i.length),this.doApiRequest(e,n,e=>{e.end(i)})}doApiRequest(e,n,t,i=0){return p.enabled&&p("Request: "+D(e)),n.createPromise((a,o,r)=>{const s=this.createRequest(e,r=>{try{this.handleResponse(r,e,n,a,o,i,t)}catch(e){o(e)}});this.addErrorAndTimeoutHandlers(s,o),this.addRedirectHandlers(s,e,o,i,e=>{this.doApiRequest(e,n,t,i).then(a).catch(o)}),t(s,o),r(()=>s.abort())})}addRedirectHandlers(e,n,t,i,a){}addErrorAndTimeoutHandlers(e,n){this.addTimeOutHandler(e,n),e.on("error",n),e.on("aborted",()=>{n(new Error("Request has been aborted by the server"))})}handleResponse(e,n,t,i,a,o,r){if(p.enabled&&p(`Response: ${e.statusCode} ${e.statusMessage}, request options: ${D(n)}`),404===e.statusCode)return void a(d(e,`method: ${n.method||"GET"} url: ${n.protocol||"https:"}//${n.hostname}${n.port?":"+n.port:""}${n.path}\n\nPlease double check that your authentication token is correct. Due to security reasons actual status maybe not reported, but 404.\n`));if(204===e.statusCode)return void i();const s=x(e,"location");if(null!=s)return o>this.maxRedirects?void a(this.createMaxRedirectError()):void this.doApiRequest(h.prepareRedirectUrlOptions(s,n),t,r,o).then(i).catch(a);e.setEncoding("utf8");let c="";e.on("error",a),e.on("data",e=>c+=e),e.on("end",()=>{try{if(null!=e.statusCode&&e.statusCode>=400){const n=x(e,"content-type"),t=null!=n&&(Array.isArray(n)?null!=n.find(e=>e.includes("json")):n.includes("json"));a(d(e,t?JSON.parse(c):c))}else i(0===c.length?null:c)}catch(e){a(e)}})}async downloadToBuffer(e,n){return await n.cancellationToken.createPromise((t,i,a)=>{let o=null;const r={headers:n.headers||void 0,redirect:"manual"};v(e,r),y(r),this.doDownload(r,{destination:null,options:n,onCancel:a,callback:e=>{null==e?t(o):i(e)},responseHandler:(e,n)=>{const t=x(e,"content-length");let i=-1;if(null!=t){const e=parseInt(t,10);if(e>0){if(e>524288e3)return void n(new Error("Maximum allowed size is 500 MB"));o=Buffer.alloc(e),i=0}}e.on("data",e=>{if(-1!==i)e.copy(o,i),i+=e.length;else if(null==o)o=e;else{if(o.length>524288e3)return void n(new Error("Maximum allowed size is 500 MB"));o=Buffer.concat([o,e])}}),e.on("end",()=>{null!=o&&-1!==i&&i!==o.length?n(new Error(`Received data length ${i} is not equal to expected ${o.length}`)):n(null)})}},0)})}doDownload(e,n,t){const i=this.createRequest(e,i=>{if(i.statusCode>=400)return void n.callback(new Error(`Cannot download "${e.protocol||"https:"}//${e.hostname}${e.path}", status ${i.statusCode}: ${i.statusMessage}`));i.on("error",n.callback);const a=x(i,"location");null==a?null==n.responseHandler?function(e,n){if(!function(e,n,t){if(null!=e&&null!=n&&e!==n)return t(new Error(`checksum mismatch: expected ${n} but got ${e} (X-Checksum-Sha2 header)`)),!1;return!0}(x(n,"X-Checksum-Sha2"),e.options.sha2,e.callback))return;const t=[];if(null!=e.options.onProgress){const i=x(n,"content-length");null!=i&&t.push(new u.ProgressCallbackTransform(parseInt(i,10),e.options.cancellationToken,e.options.onProgress))}const i=e.options.sha512;null!=i?t.push(new b(i,"sha512",128!==i.length||i.includes("+")||i.includes("Z")||i.includes("=")?"base64":"hex")):null!=e.options.sha2&&t.push(new b(e.options.sha2,"sha256","hex"));const a=o.createWriteStream(e.destination);t.push(a);let r=n;for(const n of t)n.on("error",n=>{e.options.cancellationToken.cancelled||e.callback(n)}),r=r.pipe(n);a.on("finish",()=>{a.close(e.callback)})}(n,i):n.responseHandler(i,n.callback):t<this.maxRedirects?this.doDownload(h.prepareRedirectUrlOptions(a,e),n,t++):n.callback(this.createMaxRedirectError())});this.addErrorAndTimeoutHandlers(i,n.callback),this.addRedirectHandlers(i,e,n.callback,t,e=>{this.doDownload(e,n,t++)}),i.end()}createMaxRedirectError(){return new Error(`Too many redirects (> ${this.maxRedirects})`)}addTimeOutHandler(e,n){e.on("socket",t=>{t.setTimeout(6e4,()=>{e.abort(),n(new Error("Request timed out"))})})}static prepareRedirectUrlOptions(e,n){const t=g(e,{...n}),i=t.headers;if(null!=i&&null!=i.authorization&&i.authorization.startsWith("token")){const n=new s.URL(e);(n.hostname.endsWith(".amazonaws.com")||n.searchParams.has("X-Amz-Credential"))&&delete i.authorization}return t}}function g(e,n){const t=y(n);return v(new s.URL(e),t),t}function v(e,n){n.protocol=e.protocol,n.hostname=e.hostname,e.port?n.port=e.port:n.port&&delete n.port,n.path=e.pathname+e.search}n.HttpExecutor=h,n.configureRequestOptionsFromUrl=g,n.configureRequestUrl=v;class b extends r.Transform{constructor(e,n="sha512",t="base64"){super(),this.expected=e,this.algorithm=n,this.encoding=t,this._actual=null,this.isValidateOnEnd=!0,this.digester=i.createHash(n)}get actual(){return this._actual}_transform(e,n,t){this.digester.update(e),t(null,e)}_flush(e){if(this._actual=this.digester.digest(this.encoding),this.isValidateOnEnd)try{this.validate()}catch(n){return void e(n)}e(null)}validate(){if(null==this._actual)throw l.newError("Not finished yet","ERR_STREAM_NOT_FINISHED");if(this._actual!==this.expected)throw l.newError(`${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`,"ERR_CHECKSUM_MISMATCH");return null}}function x(e,n){const t=e.headers[n];return null==t?null:Array.isArray(t)?0===t.length?null:t[t.length-1]:t}function y(e,n,t){null!=t&&(e.method=t),e.headers={...e.headers};const i=e.headers;return null!=n&&(i.authorization=n.startsWith("Basic")?n:"token "+n),null==i["User-Agent"]&&(i["User-Agent"]="electron-builder"),null!=t&&"GET"!==t&&null!=i["Cache-Control"]||(i["Cache-Control"]="no-cache"),null==e.protocol&&null!=process.versions.electron&&(e.protocol="https:"),e}function D(e,n){return JSON.stringify(e,(e,t)=>e.endsWith("authorization")||e.endsWith("Password")||e.endsWith("PASSWORD")||e.endsWith("Token")||e.includes("password")||e.includes("token")||null!=n&&n.has(e)?"<stripped sensitive data>":t,2)}n.DigestTransform=b,n.safeGetHeader=x,n.configureRequestOptions=y,n.safeStringifyJson=D},function(e,n,t){e.exports=function(e){function n(e){let t,a,o,r=null;function s(...e){if(!s.enabled)return;const i=s,a=Number(new Date),o=a-(t||a);i.diff=o,i.prev=t,i.curr=a,t=a,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let r=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,a)=>{if("%%"===t)return"%";r++;const o=n.formatters[a];if("function"==typeof o){const n=e[r];t=o.call(i,n),e.splice(r,1),r--}return t}),n.formatArgs.call(i,e);(i.log||n.log).apply(i,e)}return s.namespace=e,s.useColors=n.useColors(),s.color=n.selectColor(e),s.extend=i,s.destroy=n.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==r?r:(a!==n.namespaces&&(a=n.namespaces,o=n.enabled(e)),o),set:e=>{r=e}}),"function"==typeof n.init&&n.init(s),s}function i(e,t){const i=n(this.namespace+(void 0===t?":":t)+e);return i.log=this.log,i}function a(e,n){let t=0,i=0,a=-1,o=0;for(;t<e.length;)if(i<n.length&&(n[i]===e[t]||"*"===n[i]))"*"===n[i]?(a=i,o=t,i++):(t++,i++);else{if(-1===a)return!1;i=a+1,o++,t=o}for(;i<n.length&&"*"===n[i];)i++;return i===n.length}return n.debug=n,n.default=n,n.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},n.disable=function(){const e=[...n.names,...n.skips.map(e=>"-"+e)].join(",");return n.enable(""),e},n.enable=function(e){n.save(e),n.namespaces=e,n.names=[],n.skips=[];const t=("string"==typeof e?e:"").trim().replace(" ",",").split(",").filter(Boolean);for(const e of t)"-"===e[0]?n.skips.push(e.slice(1)):n.names.push(e)},n.enabled=function(e){for(const t of n.skips)if(a(e,t))return!1;for(const t of n.names)if(a(e,t))return!0;return!1},n.humanize=t(119),n.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(t=>{n[t]=e[t]}),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return n.colors[Math.abs(t)%n.colors.length]},n.enable(n.load()),n}},function(e,n){e.exports=require("tty")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ProgressCallbackTransform=void 0;const i=t(16);class a extends i.Transform{constructor(e,n,t){super(),this.total=e,this.cancellationToken=n,this.onProgress=t,this.start=Date.now(),this.transferred=0,this.delta=0,this.nextUpdate=this.start+1e3}_transform(e,n,t){if(this.cancellationToken.cancelled)return void t(new Error("cancelled"),null);this.transferred+=e.length,this.delta+=e.length;const i=Date.now();i>=this.nextUpdate&&this.transferred!==this.total&&(this.nextUpdate=i+1e3,this.onProgress({total:this.total,delta:this.delta,transferred:this.transferred,percent:this.transferred/this.total*100,bytesPerSecond:Math.round(this.transferred/((i-this.start)/1e3))}),this.delta=0),t(null,e)}_flush(e){this.cancellationToken.cancelled?e(new Error("cancelled")):(this.onProgress({total:this.total,delta:this.delta,transferred:this.total,percent:100,bytesPerSecond:Math.round(this.transferred/((Date.now()-this.start)/1e3))}),this.delta=0,e(null))}}n.ProgressCallbackTransform=a},function(e,n){e.exports=require("assert")},function(e,n,t){"use strict";const i=t(4);e.exports={utimesMillis:function(e,n,t,a){i.open(e,"r+",(e,o)=>{if(e)return a(e);i.futimes(o,n,t,e=>{i.close(o,n=>{a&&a(e||n)})})})},utimesMillisSync:function(e,n,t){const a=i.openSync(e,"r+");return i.futimesSync(a,n,t),i.closeSync(a)}}},function(e,n,t){const i=t(21),a=t(27),o=t(3),r=t(59),s=t(19),c=t(155),l=t(156),u=t(157),p=t(158),d=t(159),m=t(160),f=t(161),h=t(162),g=t(7),v=t(163),b=t(164),x=t(41),y=t(165),D=t(166),w=t(29),k=t(42),E=t(60),_=t(61),C=t(43),A=t(44),F=t(62),S=t(167),T=t(30),O=t(8),j=t(31),I=t(169),N=t(170),P=t(171),R=t(172),z=t(173),M=t(45),B=t(174),L=t(175),U=t(176),$=t(177),G=t(178);e.exports={parse:s,valid:c,clean:l,inc:u,diff:p,major:d,minor:m,patch:f,prerelease:h,compare:g,rcompare:v,compareLoose:b,compareBuild:x,sort:y,rsort:D,gt:w,lt:k,eq:E,neq:_,gte:C,lte:A,cmp:F,coerce:S,Comparator:T,Range:O,satisfies:j,toComparators:I,maxSatisfying:N,minSatisfying:P,minVersion:R,validRange:z,outside:M,gtr:B,ltr:L,intersects:U,simplifyRange:$,subset:G,SemVer:o,re:i.re,src:i.src,tokens:i.t,SEMVER_SPEC_VERSION:a.SEMVER_SPEC_VERSION,RELEASE_TYPES:a.RELEASE_TYPES,compareIdentifiers:r.compareIdentifiers,rcompareIdentifiers:r.rcompareIdentifiers}},function(e,n){const t=/^[0-9]+$/,i=(e,n)=>{const i=t.test(e),a=t.test(n);return i&&a&&(e=+e,n=+n),e===n?0:i&&!a?-1:a&&!i?1:e<n?-1:1};e.exports={compareIdentifiers:i,rcompareIdentifiers:(e,n)=>i(n,e)}},function(e,n,t){const i=t(7);e.exports=(e,n,t)=>0===i(e,n,t)},function(e,n,t){const i=t(7);e.exports=(e,n,t)=>0!==i(e,n,t)},function(e,n,t){const i=t(60),a=t(61),o=t(29),r=t(43),s=t(42),c=t(44);e.exports=(e,n,t,l)=>{switch(n){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e===t;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return i(e,t,l);case"!=":return a(e,t,l);case">":return o(e,t,l);case">=":return r(e,t,l);case"<":return s(e,t,l);case"<=":return c(e,t,l);default:throw new TypeError("Invalid operator: "+n)}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.GenericProvider=void 0;const i=t(2),a=t(20),o=t(11);class r extends o.Provider{constructor(e,n,t){super(t),this.configuration=e,this.updater=n,this.baseUrl=a.newBaseUrl(this.configuration.url)}get channel(){const e=this.updater.channel||this.configuration.channel;return null==e?this.getDefaultChannelName():this.getCustomChannelName(e)}async getLatestVersion(){const e=a.getChannelFilename(this.channel),n=a.newUrlFromBase(e,this.baseUrl,this.updater.isAddNoCacheQuery);for(let t=0;;t++)try{return o.parseUpdateInfo(await this.httpRequest(n),e,n)}catch(n){if(n instanceof i.HttpError&&404===n.statusCode)throw i.newError(`Cannot find channel "${e}" update info: ${n.stack||n.message}`,"ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");if("ECONNREFUSED"===n.code&&t<3){await new Promise((e,n)=>{try{setTimeout(e,1e3*t)}catch(e){n(e)}});continue}throw n}}resolveFiles(e){return o.resolveFiles(e,this.baseUrl)}}n.GenericProvider=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.computeReleaseNotes=n.GitHubProvider=n.BaseGitHubProvider=void 0;const i=t(2),a=t(58),o=t(10),r=t(20),s=t(11),c=/\/tag\/v?([^/]+)$/;class l extends s.Provider{constructor(e,n,t){super({...t,isUseMultipleRangeRequest:!1}),this.options=e,this.baseUrl=r.newBaseUrl(i.githubUrl(e,n));const a="github.com"===n?"api.github.com":n;this.baseApiUrl=r.newBaseUrl(i.githubUrl(e,a))}computeGithubBasePath(e){const n=this.options.host;return null!=n&&"github.com"!==n&&"api.github.com"!==n?"/api/v3"+e:e}}n.BaseGitHubProvider=l;function u(e){const n=e.elementValueOrEmpty("content");return"No content."===n?"":n}function p(e,n,t,i){if(!n)return u(i);const o=[];for(const n of t.getElements("entry")){const t=/\/tag\/v?([^/]+)$/.exec(n.element("link").attribute("href"))[1];a.lt(e,t)&&o.push({version:t,note:u(n)})}return o.sort((e,n)=>a.rcompare(e.version,n.version))}n.GitHubProvider=class extends l{constructor(e,n,t){super(e,"github.com",t),this.options=e,this.updater=n}async getLatestVersion(){const e=new i.CancellationToken,n=await this.httpRequest(r.newUrlFromBase(this.basePath+".atom",this.baseUrl),{accept:"application/xml, application/atom+xml, text/xml, */*"},e),t=i.parseXml(n);let a,o=t.element("entry",!1,"No published versions on GitHub");try{if(this.updater.allowPrerelease)a=c.exec(o.element("link").attribute("href"))[1];else{a=await this.getLatestVersionString(e);for(const e of t.getElements("entry"))if(c.exec(e.element("link").attribute("href"))[1]===a){o=e;break}}}catch(e){throw i.newError(`Cannot parse releases feed: ${e.stack||e.message},\nXML:\n${n}`,"ERR_UPDATER_INVALID_RELEASE_FEED")}if(null==a)throw i.newError("No published versions on GitHub","ERR_UPDATER_NO_PUBLISHED_VERSIONS");const l=r.getChannelFilename(this.getDefaultChannelName()),u=r.newUrlFromBase(this.getBaseDownloadPath(a,l),this.baseUrl),d=this.createRequestOptions(u);let m;try{m=await this.executor.request(d,e)}catch(e){if(!this.updater.allowPrerelease&&e instanceof i.HttpError&&404===e.statusCode)throw i.newError(`Cannot find ${l} in the latest release artifacts (${u}): ${e.stack||e.message}`,"ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");throw e}const f=s.parseUpdateInfo(m,l,u);return null==f.releaseName&&(f.releaseName=o.elementValueOrEmpty("title")),null==f.releaseNotes&&(f.releaseNotes=p(this.updater.currentVersion,this.updater.fullChangelog,t,o)),f}async getLatestVersionString(e){const n=this.options,t=null==n.host||"github.com"===n.host?r.newUrlFromBase(this.basePath+"/latest",this.baseUrl):new o.URL(this.computeGithubBasePath(`/repos/${n.owner}/${n.repo}/releases`)+"/latest",this.baseApiUrl);try{const n=await this.httpRequest(t,{Accept:"application/json"},e);if(null==n)return null;const i=JSON.parse(n);return i.tag_name.startsWith("v")?i.tag_name.substring(1):i.tag_name}catch(e){throw i.newError(`Unable to find latest version on GitHub (${t}), please ensure a production release exists: ${e.stack||e.message}`,"ERR_UPDATER_LATEST_VERSION_NOT_FOUND")}}get basePath(){return`/${this.options.owner}/${this.options.repo}/releases`}resolveFiles(e){return s.resolveFiles(e,this.baseUrl,n=>this.getBaseDownloadPath(e.version,n.replace(/ /g,"-")))}getBaseDownloadPath(e,n){return`${this.basePath}/download/${!1===this.options.vPrefixedTagName?"":"v"}${e}/${n}`}},n.computeReleaseNotes=p},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppImageUpdater=void 0;const i=t(2),a=t(32),o=t(14),r=t(6),s=t(1),c=t(66),l=t(67),u=t(24),p=t(11);class d extends c.BaseUpdater{constructor(e,n){super(e,n)}isUpdaterActive(){return null==process.env.APPIMAGE?(null==process.env.SNAP?this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage"):this._logger.info("SNAP env is defined, updater is disabled"),!1):super.isUpdaterActive()}doDownloadUpdate(e){const n=e.updateInfoAndProvider.provider,t=p.findFile(n.resolveFiles(e.updateInfoAndProvider.info),"AppImage");return this.executeDownload({fileExtension:"AppImage",fileInfo:t,downloadUpdateOptions:e,task:async(a,r)=>{const s=process.env.APPIMAGE;if(null==s)throw i.newError("APPIMAGE env is not defined","ERR_UPDATER_OLD_FILE_NOT_FOUND");let c=!1;try{const i={newUrl:t.url,oldFile:s,logger:this._logger,newFile:a,isUseMultipleRangeRequest:n.isUseMultipleRangeRequest,requestHeaders:e.requestHeaders,cancellationToken:e.cancellationToken};this.listenerCount(u.DOWNLOAD_PROGRESS)>0&&(i.onProgress=e=>this.emit(u.DOWNLOAD_PROGRESS,e)),await new l.FileWithEmbeddedBlockMapDifferentialDownloader(t.info,this.httpExecutor,i).download()}catch(e){this._logger.error("Cannot download differentially, fallback to full download: "+(e.stack||e)),c="linux"===process.platform}c&&await this.httpExecutor.download(t.url,a,r),await o.chmod(a,493)}})}doInstall(e){const n=process.env.APPIMAGE;if(null==n)throw i.newError("APPIMAGE env is not defined","ERR_UPDATER_OLD_FILE_NOT_FOUND");let t;r.unlinkSync(n);const o=s.basename(n);t=s.basename(e.installerPath)!==o&&/\d+\.\d+\.\d+/.test(o)?s.join(s.dirname(n),s.basename(e.installerPath)):n,a.execFileSync("mv",["-f",e.installerPath,t]),t!==n&&this.emit("appimage-filename-updated",t);const c={...process.env,APPIMAGE_SILENT_INSTALL:"true"};return e.isForceRunAfter?a.spawn(t,[],{detached:!0,stdio:"ignore",env:c}).unref():(c.APPIMAGE_EXIT_AFTER_INSTALL="true",a.execFileSync(t,[],{env:c})),!0}}n.AppImageUpdater=d},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BaseUpdater=void 0;const i=t(35);class a extends i.AppUpdater{constructor(e,n){super(e,n),this.quitAndInstallCalled=!1,this.quitHandlerAdded=!1}quitAndInstall(e=!1,n=!1){this._logger.info("Install on explicit quitAndInstall");this.install(e,!e||n)?setImmediate(()=>{this.app.quit()}):this.quitAndInstallCalled=!1}executeDownload(e){return super.executeDownload({...e,done:e=>(this.dispatchUpdateDownloaded(e),this.addQuitHandler(),Promise.resolve())})}install(e,n){if(this.quitAndInstallCalled)return this._logger.warn("install call ignored: quitAndInstallCalled is set to true"),!1;const t=this.downloadedUpdateHelper,i=null==t?null:t.file,a=null==t?null:t.downloadedFileInfo;if(null==i||null==a)return this.dispatchError(new Error("No valid update available, can' t quit and install ")),!1;this.quitAndInstallCalled=!0;try{return this._logger.info(`Install: isSilent: ${e}, isForceRunAfter: ${n}`),this.doInstall({installerPath:i,isSilent:e,isForceRunAfter:n,isAdminRightsRequired:a.isAdminRightsRequired})}catch(e){return this.dispatchError(e),!1}}addQuitHandler(){!this.quitHandlerAdded&&this.autoInstallOnAppQuit&&(this.quitHandlerAdded=!0,this.app.onQuit(e=>{this.quitAndInstallCalled?this._logger.info(" Update installer has already been triggered.Quitting application."):this.autoInstallOnAppQuit?0===e?(this._logger.info(" Auto install update on quit "),this.install(!0,!1)):this._logger.info(" Update will be not installed on quit because application is quitting with exit code "+e):this._logger.info(" Update will not be installed on quit because autoInstallOnAppQuit is set to false.")}))}}n.BaseUpdater=a},function(e,n,t){" use strict ";Object.defineProperty(n," __esModule ",{value:!0}),n.FileWithEmbeddedBlockMapDifferentialDownloader=void 0;const i=t(14),a=t(68),o=t(70);class r extends a.DifferentialDownloader{async download(){const e=this.blockAwareFileInfo,n=e.size,t=n-(e.blockMapSize+4);this.fileMetadataBuffer=await this.readRemoteBytes(t,n-1);const a=s(this.fileMetadataBuffer.slice(0,this.fileMetadataBuffer.length-4));await this.doDownload(await async function(e){const n=await i.open(e," r ");try{const e=(await i.fstat(n)).size,t=Buffer.allocUnsafe(4);await i.read(n,t,0,t.length,e-t.length);const a=Buffer.allocUnsafe(t.readUInt32BE(0));return await i.read(n,a,0,a.length,e-t.length-a.length),await i.close(n),s(a)}catch(e){throw await i.close(n),e}}(this.options.oldFile),a)}}function s(e){return JSON.parse(o.inflateRawSync(e).toString())}n.FileWithEmbeddedBlockMapDifferentialDownloader=r},function(e,n,t){" use strict ";Object.defineProperty(n," __esModule ",{value:!0}),n.DifferentialDownloader=void 0;const i=t(2),a=t(14),o=t(6),r=t(69),s=t(10),c=t(46),l=t(189),u=t(190);function p(e,n=" KB "){return new Intl.NumberFormat(" en ").format((e/1024).toFixed(2))+n}n.DifferentialDownloader=class{constructor(e,n,t){this.blockAwareFileInfo=e,this.httpExecutor=n,this.options=t,this.fileMetadataBuffer=null,this.logger=t.logger}createRequestOptions(){const e={headers:{...this.options.requestHeaders,accept:" * /*"}};return i.configureRequestUrl(this.options.newUrl,e),i.configureRequestOptions(e),e}doDownload(e,n){if(e.version!==n.version)throw new Error(`version is different (${e.version} - ${n.version}), full download is required`);const t=this.logger,i=c.computeOperations(e,n,t);null!=t.debug&&t.debug(JSON.stringify(i,null,2));let a=0,o=0;for(const e of i){const n=e.end-e.start;e.kind===c.OperationKind.DOWNLOAD?a+=n:o+=n}const r=this.blockAwareFileInfo.size;if(a+o+(null==this.fileMetadataBuffer?0:this.fileMetadataBuffer.length)!==r)throw new Error(`Internal error, size mismatch: downloadSize: ${a}, copySize: ${o}, newSize: ${r}`);return t.info(`Full: ${p(r)}, To download: ${p(a)} (${Math.round(a/(r/100))}%)`),this.downloadFile(i)}downloadFile(e){const n=[],t=()=>Promise.all(n.map(e=>a.close(e.descriptor).catch(n=>{this.logger.error(`cannot close file "${e.path}": ${n}`)})));return this.doDownloadFile(e,n).then(t).catch(e=>t().catch(n=>{try{this.logger.error("cannot close files: "+n)}catch(e){try{console.error(e)}catch(e){}}throw e}).then(()=>{throw e}))}async doDownloadFile(e,n){const t=await a.open(this.options.oldFile,"r");n.push({descriptor:t,path:this.options.oldFile});const p=await a.open(this.options.newFile,"w");n.push({descriptor:p,path:this.options.newFile});const d=o.createWriteStream(this.options.newFile,{fd:p});await new Promise((a,o)=>{const p=[];let m=void 0;if(!this.options.isUseMultipleRangeRequest&&this.options.onProgress){const n=[];let t=0;for(const i of e)i.kind===c.OperationKind.DOWNLOAD&&(n.push(i.end-i.start),t+=i.end-i.start);const i={expectedByteCounts:n,grandTotal:t};m=new u.ProgressDifferentialDownloadCallbackTransform(i,this.options.cancellationToken,this.options.onProgress),p.push(m)}const f=new i.DigestTransform(this.blockAwareFileInfo.sha512);f.isValidateOnEnd=!1,p.push(f),d.on("finish",()=>{d.close(()=>{n.splice(1,1);try{f.validate()}catch(e){return void o(e)}a(void 0)})}),p.push(d);let h=null;for(const e of p)e.on("error",o),h=null==h?e:h.pipe(e);const g=p[0];let v;if(this.options.isUseMultipleRangeRequest)return v=l.executeTasksUsingMultipleRangeRequests(this,e,g,t,o),void v(0);let b=0,x=null;this.logger.info("Differential download: "+this.options.newUrl);const y=this.createRequestOptions();y.redirect="manual",v=n=>{var a,l;if(n>=e.length)return null!=this.fileMetadataBuffer&&g.write(this.fileMetadataBuffer),void g.end();const u=e[n++];if(u.kind===c.OperationKind.COPY)return m&&m.beginFileCopy(),void r.copyData(u,g,t,o,()=>v(n));const p=`bytes=${u.start}-${u.end-1}`;y.headers.range=p,null===(l=null===(a=this.logger)||void 0===a?void 0:a.debug)||void 0===l||l.call(a,"download range: "+p),m&&m.beginRangeDownload();const d=this.httpExecutor.createRequest(y,e=>{e.statusCode>=400&&o(i.createHttpError(e)),e.pipe(g,{end:!1}),e.once("end",()=>{m&&m.endRangeDownload(),100==++b?(b=0,setTimeout(()=>v(n),1e3)):v(n)})});d.on("redirect",(e,n,t)=>{this.logger.info("Redirect to "+function(e){const n=e.indexOf("?");return n<0?e:e.substring(0,n)}(t)),x=t,i.configureRequestUrl(new s.URL(x),y),d.followRedirect()}),this.httpExecutor.addErrorAndTimeoutHandlers(d,o),d.end()},v(0)})}async readRemoteBytes(e,n){const t=Buffer.allocUnsafe(n+1-e),i=this.createRequestOptions();i.headers.range=`bytes=${e}-${n}`;let a=0;if(await this.request(i,e=>{e.copy(t,a),a+=e.length}),a!==t.length)throw new Error(`Received data length ${a} is not equal to expected ${t.length}`);return t}request(e,n){return new Promise((t,i)=>{const a=this.httpExecutor.createRequest(e,e=>{l.checkIsRangesSupported(e,i)&&(e.on("data",n),e.on("end",()=>t()))});this.httpExecutor.addErrorAndTimeoutHandlers(a,i),a.end()})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.DataSplitter=n.copyData=void 0;const i=t(2),a=t(6),o=t(16),r=t(46),s=Buffer.from("\r\n\r\n");var c;function l(e,n,t,i,o){const r=a.createReadStream("",{fd:t,autoClose:!1,start:e.start,end:e.end-1});r.on("error",i),r.once("end",o),r.pipe(n,{end:!1})}!function(e){e[e.INIT=0]="INIT",e[e.HEADER=1]="HEADER",e[e.BODY=2]="BODY"}(c||(c={})),n.copyData=l;class u extends o.Writable{constructor(e,n,t,i,a,o){super(),this.out=e,this.options=n,this.partIndexToTaskIndex=t,this.partIndexToLength=a,this.finishHandler=o,this.partIndex=-1,this.headerListBuffer=null,this.readState=c.INIT,this.ignoreByteCount=0,this.remainingPartDataCount=0,this.actualPartLength=0,this.boundaryLength=i.length+4,this.ignoreByteCount=this.boundaryLength-2}get isFinished(){return this.partIndex===this.partIndexToLength.length}_write(e,n,t){this.isFinished?console.error(`Trailing ignored data: ${e.length} bytes`):this.handleData(e).then(t).catch(t)}async handleData(e){let n=0;if(0!==this.ignoreByteCount&&0!==this.remainingPartDataCount)throw i.newError("Internal error","ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH");if(this.ignoreByteCount>0){const t=Math.min(this.ignoreByteCount,e.length);this.ignoreByteCount-=t,n=t}else if(this.remainingPartDataCount>0){const t=Math.min(this.remainingPartDataCount,e.length);this.remainingPartDataCount-=t,await this.processPartData(e,0,t),n=t}if(n!==e.length){if(this.readState===c.HEADER){const t=this.searchHeaderListEnd(e,n);if(-1===t)return;n=t,this.readState=c.BODY,this.headerListBuffer=null}for(;;){if(this.readState===c.BODY)this.readState=c.INIT;else{this.partIndex++;let t=this.partIndexToTaskIndex.get(this.partIndex);if(null==t){if(!this.isFinished)throw i.newError("taskIndex is null","ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL");t=this.options.end}const a=0===this.partIndex?this.options.start:this.partIndexToTaskIndex.get(this.partIndex-1)+1;if(a<t)await this.copyExistingData(a,t);else if(a>t)throw i.newError("prevTaskIndex must be < taskIndex","ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED");if(this.isFinished)return this.onPartEnd(),void this.finishHandler();if(n=this.searchHeaderListEnd(e,n),-1===n)return void(this.readState=c.HEADER)}const t=this.partIndexToLength[this.partIndex],a=n+t,o=Math.min(a,e.length);if(await this.processPartStarted(e,n,o),this.remainingPartDataCount=t-(o-n),this.remainingPartDataCount>0)return;if(n=a+this.boundaryLength,n>=e.length)return void(this.ignoreByteCount=this.boundaryLength-(e.length-a))}}}copyExistingData(e,n){return new Promise((t,i)=>{const a=()=>{if(e===n)return void t();const o=this.options.tasks[e];o.kind===r.OperationKind.COPY?l(o,this.out,this.options.oldFileFd,i,()=>{e++,a()}):i(new Error("Task kind must be COPY"))};a()})}searchHeaderListEnd(e,n){const t=e.indexOf(s,n);if(-1!==t)return t+s.length;const i=0===n?e:e.slice(n);return null==this.headerListBuffer?this.headerListBuffer=i:this.headerListBuffer=Buffer.concat([this.headerListBuffer,i]),-1}onPartEnd(){const e=this.partIndexToLength[this.partIndex-1];if(this.actualPartLength!==e)throw i.newError(`Expected length: ${e} differs from actual: ${this.actualPartLength}`,"ERR_DATA_SPLITTER_LENGTH_MISMATCH");this.actualPartLength=0}processPartStarted(e,n,t){return 0!==this.partIndex&&this.onPartEnd(),this.processPartData(e,n,t)}processPartData(e,n,t){this.actualPartLength+=t-n;const i=this.out;return i.write(0===n&&e.length===t?e:e.slice(n,t))?Promise.resolve():new Promise((e,n)=>{i.on("error",n),i.once("drain",()=>{i.removeListener("error",n),e()})})}}n.DataSplitter=u},function(e,n){e.exports=require("zlib")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MacUpdater=void 0;const i=t(2),a=t(14),o=t(6),r=t(50),s=t(35),c=t(11),l=t(32);class u extends s.AppUpdater{constructor(e,n){super(e,n),this.nativeUpdater=t(0).autoUpdater,this.squirrelDownloadedUpdate=!1,this.nativeUpdater.on("error",e=>{this._logger.warn(e),this.emit("error",e)}),this.nativeUpdater.on("update-downloaded",()=>{this.squirrelDownloadedUpdate=!0})}async doDownloadUpdate(e){let n=e.updateInfoAndProvider.provider.resolveFiles(e.updateInfoAndProvider.info);let t;try{const e=l.execFileSync("sysctl",["sysctl.proc_translated"],{encoding:"utf8"});t=e.includes("sysctl.proc_translated: 1")}catch(e){this._logger.info("sysctl shell command to check for macOS Rosetta environment failed: "+e)}const s=e=>e.url.pathname.includes("arm64");n.some(s)&&(n=n.filter(e=>("arm64"===process.arch||t)===s(e)));const u=c.findFile(n,"zip",["pkg","dmg"]);if(null==u)throw i.newError("ZIP file not provided: "+i.safeStringifyJson(n),"ERR_UPDATER_ZIP_FILE_NOT_FOUND");const p=r.createServer();function d(){return"http://127.0.0.1:"+p.address().port}return p.on("close",()=>{this._logger.info(`Proxy server for native Squirrel.Mac is closed (was started to download ${u.url.href})`)}),this.executeDownload({fileExtension:"zip",fileInfo:u,downloadUpdateOptions:e,task:(e,n)=>this.httpExecutor.download(u.url,e,n),done:async e=>{const n=e.downloadedFile;let t=u.info.size;return null==t&&(t=(await a.stat(n)).size),await new Promise((i,a)=>{const r=`/${Date.now()}-${Math.floor(9999*Math.random())}.zip`;p.on("request",(e,s)=>{const c=e.url;if(this._logger.info(c+" requested"),"/"===c){const e=Buffer.from(`{ "url": "${d()}${r}" }`);return s.writeHead(200,{"Content-Type":"application/json","Content-Length":e.length}),void s.end(e)}if(!c.startsWith(r))return this._logger.warn(c+" requested, but not supported"),s.writeHead(404),void s.end();this._logger.info(`${r} requested by Squirrel.Mac, pipe ${n}`);let l=!1;s.on("finish",()=>{try{setImmediate(()=>p.close())}finally{l||(this.nativeUpdater.removeListener("error",a),i([]))}});const u=o.createReadStream(n);u.on("error",e=>{try{s.end()}catch(e){this._logger.warn("cannot end response: "+e)}l=!0,this.nativeUpdater.removeListener("error",a),a(new Error(`Cannot pipe "${n}": ${e}`))}),s.writeHead(200,{"Content-Type":"application/zip","Content-Length":t}),u.pipe(s)}),p.listen(0,"127.0.0.1",()=>{this.nativeUpdater.setFeedURL({url:d(),headers:{"Cache-Control":"no-cache"}}),this.dispatchUpdateDownloaded(e),this.autoInstallOnAppQuit?(this.nativeUpdater.once("error",a),this.nativeUpdater.checkForUpdates()):i([])})})}})}quitAndInstall(){this.squirrelDownloadedUpdate?this.nativeUpdater.quitAndInstall():(this.nativeUpdater.on("update-downloaded",()=>{this.nativeUpdater.quitAndInstall()}),this.nativeUpdater.checkForUpdates())}}n.MacUpdater=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.NsisUpdater=void 0;const i=t(2),a=t(32),o=t(1),r=t(66),s=t(67),c=t(191),l=t(24),u=t(20),p=t(11),d=t(14),m=t(192),f=t(10),h=t(70);class g extends r.BaseUpdater{constructor(e,n){super(e,n)}doDownloadUpdate(e){const n=e.updateInfoAndProvider.provider,t=p.findFile(n.resolveFiles(e.updateInfoAndProvider.info),"exe");return this.executeDownload({fileExtension:"exe",downloadUpdateOptions:e,fileInfo:t,task:async(a,o,r,s)=>{const c=t.packageInfo,l=null!=c&&null!=r;(l||await this.differentialDownloadInstaller(t,e,a,n))&&await this.httpExecutor.download(t.url,a,o);const u=await this.verifySignature(a);if(null!=u)throw await s(),i.newError(`New version ${e.updateInfoAndProvider.info.version} is not signed by the application owner: ${u}`,"ERR_UPDATER_INVALID_SIGNATURE");if(l&&await this.differentialDownloadWebPackage(e,c,r,n))try{await this.httpExecutor.download(new f.URL(c.path),r,{headers:e.requestHeaders,cancellationToken:e.cancellationToken,sha512:c.sha512})}catch(e){try{await d.unlink(r)}catch(e){}throw e}}})}async verifySignature(e){let n;try{if(n=(await this.configOnDisk.value).publisherName,null==n)return null}catch(e){if("ENOENT"===e.code)return null;throw e}return await m.verifySignature(Array.isArray(n)?n:[n],e,this._logger)}doInstall(e){const n=["--updated"];e.isSilent&&n.push("/S"),e.isForceRunAfter&&n.push("--force-run");const t=null==this.downloadedUpdateHelper?null:this.downloadedUpdateHelper.packageFile;null!=t&&n.push("--package-file="+t);const i=()=>{v(o.join(process.resourcesPath,"elevate.exe"),[e.installerPath].concat(n)).catch(e=>this.dispatchError(e))};return e.isAdminRightsRequired?(this._logger.info("isAdminRightsRequired is set to true, run installer using elevate.exe"),i(),!0):(v(e.installerPath,n).catch(e=>{const n=e.code;this._logger.info(`Cannot run installer: error code: ${n}, error message: "${e.message}", will be executed again using elevate if EACCES"`),"UNKNOWN"===n||"EACCES"===n?i():this.dispatchError(e)}),!0)}async differentialDownloadInstaller(e,n,t,a){try{if(null!=this._testOnlyOptions&&!this._testOnlyOptions.isUseDifferentialDownload)return!0;const r=u.blockmapFiles(e.url,this.app.version,n.updateInfoAndProvider.info.version);this._logger.info(`Download block maps (old: "${r[0]}", new: ${r[1]})`);const s=async e=>{const t=await this.httpExecutor.downloadToBuffer(e,{headers:n.requestHeaders,cancellationToken:n.cancellationToken});if(null==t||0===t.length)throw new Error(`Blockmap "${e.href}" is empty`);try{return JSON.parse(h.gunzipSync(t).toString())}catch(n){throw new Error(`Cannot parse blockmap "${e.href}", error: ${n}, raw data: ${t}`)}},p={newUrl:e.url,oldFile:o.join(this.downloadedUpdateHelper.cacheDir,i.CURRENT_APP_INSTALLER_FILE_NAME),logger:this._logger,newFile:t,isUseMultipleRangeRequest:a.isUseMultipleRangeRequest,requestHeaders:n.requestHeaders,cancellationToken:n.cancellationToken};this.listenerCount(l.DOWNLOAD_PROGRESS)>0&&(p.onProgress=e=>this.emit(l.DOWNLOAD_PROGRESS,e));const d=await Promise.all(r.map(e=>s(e)));return await new c.GenericDifferentialDownloader(e.info,this.httpExecutor,p).download(d[0],d[1]),!1}catch(e){if(this._logger.error("Cannot download differentially, fallback to full download: "+(e.stack||e)),null!=this._testOnlyOptions)throw e;return!0}}async differentialDownloadWebPackage(e,n,t,a){if(null==n.blockMapSize)return!0;try{const r={newUrl:new f.URL(n.path),oldFile:o.join(this.downloadedUpdateHelper.cacheDir,i.CURRENT_APP_PACKAGE_FILE_NAME),logger:this._logger,newFile:t,requestHeaders:this.requestHeaders,isUseMultipleRangeRequest:a.isUseMultipleRangeRequest,cancellationToken:e.cancellationToken};this.listenerCount(l.DOWNLOAD_PROGRESS)>0&&(r.onProgress=e=>this.emit(l.DOWNLOAD_PROGRESS,e)),await new s.FileWithEmbeddedBlockMapDifferentialDownloader(n,this.httpExecutor,r).download()}catch(e){return this._logger.error("Cannot download differentially, fallback to full download: "+(e.stack||e)),"win32"===process.platform}return!1}}async function v(e,n){return new Promise((t,i)=>{try{const o=a.spawn(e,n,{detached:!0,stdio:"ignore"});o.on("error",e=>{i(e)}),o.unref(),void 0!==o.pid&&t(!0)}catch(e){i(e)}})}n.NsisUpdater=g},function(e){e.exports=JSON.parse('{"About":"About","Actual size":"Actual size","Bring All to Front":"Bring All to Front","Call":"Call","ChatSearch":{"description":{"sameDay":"HH:mm","lastDay":"[Yesterday] HH:mm","lastWeek":"dddd HH:mm","sameElse":"DD.MM.YYYY HH:mm"},"find":"Find","searchFor":"Search for messages with  {{title}}","searchMessages":"Search Messages","not_found":"Message not found"},"Close":"Close","Contact Us":"Contact Us","ContactCard":{"description":{"lastDay":"[Yesterday]","lastWeek":"dddd","nextDay":"[Tomorrow]","nextWeek":"dddd","sameDay":"HH:mm","sameElse":"DD.MM.YYYY"}},"Conversation":{"description":{"lastDay":"[Yesterday at] HH:mm","lastWeek":"[Last] dddd [at] HH:mm","lastseen":"Last seen: ","nextDay":"[Tomorrow at] HH:mm","nextWeek":"dddd [saat] HH:mm","online":"Online","sameDay":"[Today at] HH:mm","sameElse":"DD.MM.YYYY HH:mm","viewInfo":"View contact information"},"info":{"lastDay":"[Yesterday]","lastWeek":"dddd","nextDay":"Tomorrow","nextWeek":"dddd","sameDay":"[Today]","sameElse":"DD.MM.YYYY"},"messageSelected":" message{{pluralSuffix}} selected","noConversationFound":"No conversation found with the contact.","user_is_blocked":"User is blocked"},"Copy":"Copy","Cut":"Cut","Delete":"Delete","E2e":{"description":{"message1":"End to End Encrypted!","message2":"You are using the special version for Bip Beta users."},"link":{"url":"https://bip.com/en/security/"}},"Edit":"Edit","File":"File","Help":"Help","Hide":"Hide","Hide others":"Hide others","Incoming":"Incoming","Kişi Seçin":{"select_contacts":"Select contacts"},"Learn more":"FAQ","MessageEditor":{"activity":"Activity","flags":"Flags","foods":"Food & Drink","max_length_text_content":"Lütfen {{maxLength}} karakterden daha kısa yazı giriniz","nature":"Animals & Nature","notfound":"No Emoji Found","objects":"Objects","people":"Smileys & People","placeholder":"Type your message","places":"Travel & Places","recent":"Recent","search":"Search Emoji","symbols":"Symbols"},"Minimize":"Minimize","NonBeta":{"description":"BiP Beta is a program where requesting users can test new features to BiP before other users and share their feedback.","download":"<a href=\'%s1\' target=\'_blank\'>Click</a>&nbsp;for login to BiP Desktop application.","infoLink":"More Information","redirect":"You are being directed to the BiP Web.","stepHeader":"This Website is for BiP BETA Users."},"Outgoing":"Outgoing","Paste":"Paste","Profile":{"avatar":{"addProfilePhoto":"Add Profile Photo","changeProfilePhoto":"Change Photo","removeProfilePhoto":"Remove Photo","uploadProfilePhoto":"Upload Photo","viewProfilePhoto":"View Photo"},"description":{"about":"About","description":"This is not your username or pin. This name will be visible to your %s1 contacts.","name":"Your Name","telephone":"Your Telephone Number"}},"Quit":"Quit","Redo":"Redo","Reload":"Reload","Select all":"Select all","Services":"Services","Settings":"Settings","Speech":"Speech","Toggle fullscreen":"Toggle fullscreen","Undo":"Undo","Unhide":"Unhide","View":"View","Window":"Window","Zoom":"Zoom","Zoom in":"Zoom in","Zoom out":"Zoom out","Archived":"Archived Chats","NoArchivedChat":"No Archived Chats","accesbility":{"attach":"attach","avatar-change":"change avatar","back":"back","block-contacts":"block contacts","clear_search":"clear search","close-group-info":"close group info window","contact":"contact","contact-list-button":"Contact list","contact-us":"contact us","create-group":"new chat - create new group","create_new_group":"create new group","delete-message":"delete message","delete-search":"clear search","document":"document","emoji":"emojis","forward-message":"forward message","image":"image","message-menu":"message menu","notifications":"notifications","profile-edit":"profile edit","profile_menu":"profile menu","scroll_down":"scroll down","send-button":"Send message","settings":"settings","theme":"theme","video-call":"Video Call","video-call-close":"Close video call","voice-record":"voice record","voip-call":"Voice Call","voip-close":"Close voip call","write-message":"Write your message"},"accessibility":{"accept_call":"Accept Call","add_file":"Add file","add_new_user":"Add new user","attach":"Attach","avatar_selection":"Avatar Selection","back":"Back","block_contact":"Block Contact","call_to_chat":"Open the chat","cancel":"Cancel","cancel_selection":"Cancel message selection","change":"Change {{ name }}","chat_menu":"Chat Menu","chat_search":"Chat search","close":"Close","close_mic":"Close Microphone","decline_call":"Decline Call","delete":"Delete","delete_message":"Delete Message","download":"Download","emoji":"Emoji","end_call":"End Call","forward":"Forward","menu":"Menu","message_info":"Message Info","message_menu":"Message menu","message_read":"Message read","message_received":"Message received","message_sent":"Message sent","mute_notifications":"Mute Notifications","new_chat":"New","notifications":"Notifications","open_mic":"Open Microphone","options":"Options","play_button":"Play button","preview":"Remove","qr_video":"QR video","remove":"Preview","reply":"Reply","save":"Save","select_media":"Select Image or Video","send":"Send","send_media":"Send media","unblock_contact":"Unblock Contact","video_call":"Video call","voice_call":"Voice call","voice_cancel":"Voice message cancel","voice_message":"Voice message","zoom_in":"Zoom In","zoom_out":"Zoom Out"},"actions":{"added":"{{ by }} added {{ sjid}}","addedYou":" {{ by }} added you","addedYouToGroup":" {{ by }} added you to the group named \'{{ groupName }}\'","allMembers":"allow all participants","byRemovedContact":"\\"{{ by }}\\" removed {{ sjid }} ","changedAom":"to send messages in this group.","changedAvatar":"changed this group\'s icon.","changedEndDate":"\'{{ by }}\' changed group termination time to {{ endDate }}","changedGroupAvatar":"changed this group\'s icon.","changedGroupSettings":"\'{{ sjid }}\' changed this group\'s settings to {{ authorized }} {{ infoType }}","changedName":"\'{{ by }}\' changed \'{{ prevName }}\' group name to \'{{ nextName }}\'","changedOcs":"to edit this group\'s info.","contactInfo":"Contact Info","createdGroup":"\'{{ by }}\' created \'{{ groupName }}\' group","endDate":"Group termination time","exception":"something wrong with create group","groupCreated":"Group created","groupSettings":"Group Settings","groupTimeout":"Timeout for timed group.","invitedFromUrl":"\'{{ sjid }}\' joined the group via invite link","joinedAnonymousGroup":"You\'ve joined to the group","joinedGroup":"you\'ve joined {{ groupName }} group","left":"left","messageFormatting":"Message Formatting","onlyAdmins":"allow only admins","onlyAdminsAom":"only allow admins","removedContact":"You\'ve removed {{ sjid }}","removedYou":"\\"{{ by }}\\" removed you","undefinedInviteInfo":"Undefined info message","unlimited":"Unlimited","youAdded":"You\'ve added {{ sjid }}","youAreAdmin":"You are an admin now.","youChangedAom":"to send messages in this group.","youChangedAvatar":"You changed this group\'s icon","youChangedEndDate":"You changed group termination time to {{ endDate }}","youChangedGroupAvatar":"You changed this group\'s icon","youChangedGroupSettings":"You changed this group\'s settings to {{ authorized }} {{ infoType }}","youChangedName":"You\'ve changed group name \'{{ prevName }}\' to \'{{ nextName }}\'","youChangedOcs":"to edit this group\'s info.","youCreatedGroup":"You\'ve created \'{{ groupName }}\' group","youInvitedFromUrl":"You joined the group via invite link","youLeft":"You\'ve left"},"audio":"Audio","audioCall":"Audio Call","blockedContacts":{"cancel":"CANCEL","confirm":"Unblock {{ blockedContactFullName }} ?","info":"Blocked contacts can no longer call or text you.","message":"No blocked people yet","title":"Add blocked contacts","unBlock":"UNBLOCK"},"bubble":{"contact_detail":"SHOW DETAILS","followme":"To follow this person live, open this conversation from your mobile phone"},"bubbleMenu":{"delete":"Delete","download":"Download","forward":"Forward","messageInfo":"Message Info","reply":"Reply","all_download":"Download All","all_forward":"Forward All","all_delete":"Delete All"},"call":{"accept":"Accept","busy":"Busy","cancel":"Decline","exception":"A problem occured when placing a call. Please try again later.","freeze":"Video call frozen","incoming":"Incoming Call","incoming_video":"Video Call","missed":"Missed Call","missed_video":"Missed Video Call","mute":"Microphone and Camera off","outgoing":{"video":"Video Call","voice":"Audio Call"},"trying_to_reconnect":"Reconnecting...","type_audio":"BiP Voice Call","type_ringing":"Ringing...","type_video":"BiP Video Call","you_can_not_call_yourself_warning":"You can not call yourself please try with another contact"},"chat":{"add-member":"Add Member","and_plus":"and +","aom":"%s1 changed this group\'s settings to only allow admins to send messages in this group","aom_false":"%s1 changed this group\'s settings to allow all participants to send messages in this group","aom_you":"You changed this group\'s settings to only allow admins to send messages in this group","aom_you_false":"You changed this group\'s settings to allow all participants to send messages in this group","audio":"Audio","buzz":"Buzz","caps":"Caps","chats":"Chats","composing":"composing...","composing_without_dot":"Composing","contact":"Contact","contacts":"Contacts","contacts_selected":"Contact(s) selected","decryptionFailed":"Waiting for this message. This may take a while.","delete_message_dialog":"Delete this message ?","document":"Document","editor_placeholder":"Type your message","emoji":"EMOJI","followMe":"FollowMe","gif":"Gif","group_call_started":"Grup call has been started. Click the link %s to join them !","group_is_aom":"Only admins can send messages.","group_is_suspend":"Inappropriate activity has been detected. Your messaging will be disabled till %s1","image":"Image","import":"{{sjid}} moved your chat to {{name}}. If you wish, you can also move your chats in the other application from our mobile application to this chat.","import_refresh":"Refresh to see the chat you moved.","import_you":"You moved this conversation. It may take some time to upload the media.","imported":"imported","joined_to_group":"%s1 joined the group\\n","location":"Location","media":"Photos and Videos","mnt":"Money Transfer","new_messages":"New Messages","ocs":"%s1 changed this group\'s settings to allow all participants to edit this group\'s info.","ocs_false":"%s1 changed this group\'s settings to allow only admins to edit this group\'s info.","ocs_you":"You changed this group\'s settings to allow all participants to edit this group\'s info.","ocs_you_false":"You changed this group\'s settings to allow only admins to edit this group\'s info.","recall":"Deleted Message","recording":"Recording Audio...","recording_group":"Audio Recording","refresh":"Refresh","retryFailed":"Sorry, this message appears to be missing. Please ask sender to resend it.","search_contacts_placeholder":"Search contacts","search_placeholder":"Search contacts and groups","select_contacts":"Select contacts","select_contacts_forward":"Select contact or group","sorry":"We\'re sorry","start":"Start New Chat - Create New Group","sticker":"Sticker","subject_is_changed_by_others":"%s1 changed the group name as %s2 ","subject_is_changed_by_you":"You have changed the group name as %s2","suspend":"Message sending is on hold until {{s1}} due to excessive usage.","type_contact_forward":"Contact/Group name...","type_contact_name":"Type contact name...","unread_message":"Unread Message","user_is_blocked":"User is blocked","user_is_exited":"You cannot send messages to this group because you are no longer a participant.","video":"Video","you_joined_to_group":"You  joined to group","pin":{"error":"Maximum chat pin limit reached."},"notFound":"Message not found","click_for_download":"Click for download"},"chatList":{"confirm":"Confirm","mute":"Mute","quitGroup":"Exit Group","quitGroupConfirm":"You will exit from the group, do you confirm?","removeChat":"Delete Conversation","removeChatConfirm":"Your message history will be deleted, do you confirm?","search":"Search","unmute":"Unmute","pin":"Pin Chat","pinned":"Chat pinned","unpin":"Unpin Chat","unpinned":"Chat unpinned","archive":"Archive Chat","archived":"Chat archived","unarchive":"Unarchive Chat","unarchived":"Chat unarchived"},"chatStates":{"_online":"online","composingMessage":"typing...","notMember":"You can\'t send messages to this group because you\'re no longer a participant.","online":"online","onlyAdmins":"Only admins send messsage","otherComposingMessage":"typing...","otherRecordingAudio":"recording audio...","recordingAudio":"recording audio...","sendingAudio":"sending audio..."},"confirm":{"cancel":"Cancel","continue":"Confırm","exit_group":"You will exit from the group, do you confirm?","select":"select","okay":"Okay"},"contact":{"complaint_intro":"Please do not delete the following information. It will be used to identify your problem.","complaint_subject":"Contact Us","email":"Your E-mail","email-hint":"You can write an e-mail address where we can reach you.","fullname":"Full Name","message":"Your Message","message-hint":"You can write your complaint / suggestion you want to convey.","new_chat":"New Chat","not-found":"No contacts found.","selected_contact":"Selected Contacts","send":"Send","send_success":"Your message has been sent to our team.","share":"Send %s1 contacts to “%s2”?","us":"Contact Us"},"contactInfo":{"about":"About","block":"Block","mute":"Mute","telephone":"Phone Number","un_block":"Unblock Contact"},"contactUs":{"email":"E-mail","emailDescription":"You can enter an E-mail address that we can contact you.","fullName":"Name Surname","message":"Message","messageDescription":"You can drop a few lines of recommendations and/or complaints.","messageSent":"Message Sent."},"date":{"today":"Today","yesterday":"Yesterday"},"default":{"caption_message":"Stay always connected","desktop_download":"Download BiP Desktop Application","desktop_message":"BiP Desktop Application","desktop_message2":"Use the desktop application for better experience","desktop_message3":"BiP can be used on MacOS and Windows operating systems.","download_url":"https://bip.com/en/download","error_message":"An error occurred, please try again","explain_message":"To start chatting,please select a conversation from left panel","explain_message1":"To start chatting,","explain_message2":"please select a conversation from left panel","format_text_desc":"You can easily make your messages bold, italic, underlined, and strikethrough by selecting them.","format_text_title":"You can change the font of your messages using BiP Web!","ok_message":"OK"},"dialog":{"OK":"Okay","allowMicrophone":"Allow Microphone","allowMicrophoneAndCamera":"Allow Microphone and Camera","allowMicrophoneAndCameraText":"{{name}} Web needs to access your computer\'s camera and microphone to make a video call. Please approve the following popup screen.","allowMicrophoneText":"{{name}} Web needs to access your computer\'s microphone to make a voice call. Please approve the following popup screen.","close":"Close","messageCountLimitInfo":"You can share maximum 30 media items at once.","messageIsNotSent":"Your message couldn\'t be delivered. Please try again later.","messageSending":"Message Sending...","messageSent":"Message Sent","sendPreview":"Send Preview"},"document":"Document","drawerTitle":{"appearance":"Appearance","background":"Chat Background","blockedContacts":"Blocked Contacts","contactInfo":"Contact Info","contactUs":"Contact Us","createGroup":"Create Group","createGroupLastStep":"Create New Group","desktopSettings":"Desktop Settings","groupAddContact":"Select Contacts","groupInfo":"Group Info","groupName":"Group Name","groupSettings":"Group Settings","help":"Help","messageFormatting":"Message Formatting","messageInfo":"Message Info","newChat":"Start New Chat","notifications":"Notifications","privacy":"Last Seen and Online","profile":"Profile","searchMessages":"Search Messages","send":"Send","sending":"Sending...","settings":"Settings"},"editor":{"max_length_text_content":"Please enter text shorter than %s1 characters"},"emoji":{"category_0":"Recent","category_1":"Smiley & People","category_2":"Animals","category_3":"Food","category_4":"Travel","category_5":"Sport","category_6":"Media","category_7":"Symbols","category_8":"Flags"},"empty-chat":{"download-application":"Download Desktop BETA Application"},"error":{"browser_error_message":"You are using a browser which is not supported by {{name}} Web.You can login to your account by updating your browser or using a supported browser displayed below. ","browser_error_title":"Sorry!","copyright":"© 2020 BiP İletişim Teknolojileri ve Dijital Servisler A.Ş. All rights reserved.","error_max_retry_text":"You are disconnected <br /> Are you having problems with your connection?\\n","error_text":"You\'re disconnected <br /> Trying to connect again...","retry":"TRY AGAIN"},"error-page":{"header":"Trying to connect your mobile phone.","logout-button":"Logout","refresh-button":"Reload Page","retry-button":"Try again","retry-message":"before next retry","retry-question":"Check your phone network connection !","retrying":"Retrying...","second":"Second"},"events":{"groupName":"to","youFormedGroup":"formed group"},"file":{"downloaded":"downloaded","downloading":"downloading..."},"followMe":{"cancel":"Cancelled","duration":"Duration:","info":"Follow Me","request":"Request","response_accept":"Accepted","response_reject":"Rejected","stop":"Stopped"},"followme":{"accepted":"Live location until","canceled":"The FollowMe request has canceled.","rejected":"The FollowMe request has rejected.","stopped":"FollowMe session has stopped."},"forceReload":"Hard Reload","format":{"bold":"Bold","bold-message":"To bold your message, place an asterisk on both sides of the text:","example":"I\'m at the airport now","italic":"İtalic","italic-message":"To italicize your message, place an underscore on both sides of the text:","message":"text","strikethrough":"Strikethrough","strikethrough-message":" To strikethrough your message, place a tilde on both sides of the text:","underline":"Underline","underline-message":"To underline your message, place two caret on both sides of the text:"},"group":{"add_group":"Add to a group","add_user_group":"Add %s1 to “%s2” group?","create_date":"Create date","create_new_group":"Create new group","created_group":"%s1 created group \'%s2\'","done":"Done","group_contact_list_title":"Contacts","group_info_title":"Group Info","group_name_error":"Group Name","group_name_placeholder":"Please Write Group Name","group_unselectable":"Already added to group","import":"%s1 moved your group to {{name}}. If you wish, you can also move your groups in the other application from our mobile application to this group.","join_group_call":"Join Group Call","kicked_from_group":"You\'re removed from group","make_admin":"Make Admin","max_member":"You have reached the maximum number of participants (%s1).","member_title_postfix":"members","message_restriction":"Send Messages","name_and_photo_restriction":"Edit Group Name and Group Avatar","name_cannot_be_empty":"Please enter group name.","name_is_long":"Group name is too long","new":"New Group","new_group":"Create New Group","not_empty":"cannot be empty","only_admin_send_messages":"Only admins","owner":"Owner","remove_member":"Remove member","remove_member_confirm":"%s1 will be removed from group. Confirm?","show_more":"Show more","someone_add_group":"%s1 added \'%s2\'","someone_join_invite_link":"%s1 joined the group via invite link","someone_kicked_from_group":"%s1 removed %s2","today":"Today %s1","update_schedule_group":"%s1 changed group termination time to %s2","user_add_group":"%s1 added you","user_changed_avatar":"%s1 changed this group\'s icon","user_changed_subject":"%s1 changed the group name from \'%s2\' to \'%s3\'","user_kicked_from_group":"You removed %s1","user_left_group":"%s1 left","warning_delete":"Delete group photo?","yesterday":"Yesterday %s1","you_add_group":"You added \'%s1\'","you_are_now_admin":"You\'re now an admin","you_changed_avatar":"You change this group\'s icon","you_changed_subject":"You changed the group name from \'%s1\' to \'%s2\'","you_created_group":"You created group \'%s1\'","you_join_invite_link":"You joined the group via invite link","you_kicked_from_group":"%s1 removed you","you_left_group":"You left","you_update_schedule_group":"You changed group termination time to %s1"},"groupInfo":{"addMember":"Add New Member","admin":"Admin","allUsers":"All Members","cancel":"Cancel","created":"created on {{ createdDate }}","editGroupInfo":"Edit Group Info","exit":"Exit Group","inviteButton":"Add User","makeAdmin":"Make Admin","media":"Media, Links and Docs","members":"Members:","mute":"Mute notifications","ok":"Ok","onlyAdmins":"Only Admins","removeGroupAvatar":"Remove group avatar","removeMember":"Remove Member","sampleTemplate":"{{ count }} kişi \\"{{ contactFullName }}\\" ile paylaşılsın mı?","selectEditors":"Select editors who can change profile image and name of the group","selectSenders":"Select who will be able to send messages to this group.","sendMessage":"Send Messages","settings":"Group settings","you":"You","delete":"Delete Group","deleteGroupConfirm":"The group will be deleted, do you confirm?"},"help":{"built":"Build Date","title":"Contact Us","version":"Version"},"image":"Image","infoCard":{"contactInfo":"Contact Info","contactUs":"Contact Us","groupInfo":"Group Info","logoff":"Logout","messageFormatting":"Message Formatting","newGroup":"New Group","profile":"Profile","removeConversation":"Delete Conversation","selectMessages":"Select Messages","settings":"Settings","archived":"Archived"},"informationMessages":{"e2eInfo1":"Messages and calls are end-to-end encrypted. No one outside of this chat, not even {{name}}, can read or listen to them. Tap to learn more.","e2eInfo2":"Your security code with ","e2eInfo3":" changed. Tap to learn more."},"initialize-page":{"disconnect-message":"End to End Encrypted","loadingChats":"Loading your chats","connecting":"Connecting...","logout-button":"logout","message":"End to End Encrypted"},"lang":{"reserved_text":"&copy; 2020 BiP İletişim Teknolojileri ve Dijital Servisler A.Ş. All rights reserved."},"login":{"automatic_login":"Automatic login","bip":"{{name}}","download":"For better experince <a href=\'%s1\' target=\'_blank\'> Download Desktop Application</a>","download_from_stores":"<a href=\'https://itunes.apple.com/us/app/bip-messenger/id583274826?mt=8\' target=\'_blank\'>iOS</a>  |  <a href=\'https://play.google.com/store/apps/details?id=com.turkcell.bip&hl=en\' target=\'_blank\'>Android</a>","faq":"FAQ","follow_instructions":"To start fast, secure, and entertaining texting;","hello":" ","open_from_phone":"Launch <strong>{{name}}</strong> on your phone or download <strong>{{name}}</strong> for your phone","reserved_text":"&copy; 2020 BiP İletişim Teknolojileri ve Dijital Servisler A.Ş. All rights reserved.","using_instraction_one":"Tap more and select <strong>{{name}} WEB</strong>","using_instraction_two":"Scan the <strong>QR</strong> code you see on the screen using the camera on the <strong>{{name}}</strong> App"},"media":{"error_pattern":"Unsupporrted File","error_size":"File size error is occured while uploading your file. Max file size : ","hd_info":"Click HD button to send in high quality. (Photos in HD are higher in file size and require more time to send.)","loading":"Loading..."},"mediaInfo":{"audio":"Audio","contact":"Contact","docs":"DOCS","document":"Document","file":"File","gif":"GIF","image":"Image","links":"LINKS","location":"Location","media":"MEDIA","reply":"Reply","sendImageVideo":"Image and Video","sticker":"Sticker","video":"Video","poll":"Poll","liveLocation":"Live Location","survey":"Survey","documentation":"Documentation"},"message":{"bubble_for_lgrp":"Since the number of participants exceeds 400, message information (read, delivered) will not be displayed in this group.","cancel":"CANCEL","cannot_call_nonbip":"You can not call non {{name}} user %s1.","cannot_send_message_to_nonbip":"You can not send a message to non {{name}} user %s1.","delete":"Delete","delete_conversation":"Delete Conversation","delete_conversation_text":"Your message history will be deleted, do you confirm?","delete_from_everyone":"Delete From Everyone","delete_from_me":"Delete from me","delete_message_text":"Your message will be deleted, do you confirm ?","delete_title":"Delete this message ?","delivered":"Delivered","download":"Download","exit_group":"Exit Group","forward":"Forward","forwarded":"Forwarded","group_create_confirmation":"Group %s will be created, do you approve?","info":"Message Info","info_for_lgrp":"For a better messaging experience, message information (read, delivered) is not available in groups with more than 400 participants.","make_call_confirmation":"%s will call, do you approve?","message_format":"Message Formatting","messages_selected":"Selected Messages","mute_conversation":"Mute","read":"Read","reply":"Reply","select_messages":"Select Messages","try_again":"Please try again later","unmute_conversation":"Unmute","waiting":"Waiting","edited":"Edited"},"messageFormatting":{"bold":"Bold","boldBubble":"I\'m at the airport now","boldDescription":"*text*","boldMessage":"To bold your message, place an asterisk on both sides of the text:","italic":"Italic","italicBubble":"I\'m at the airport now","italicDescription":"_text_","italicMessage":"To italicize your message, place an underscore on both sides of the text:","strike":"Strikethrough","strikeBubble":"I\'m at the airport now","strikeDescription":"~text~","strikeMessage":"To strikethrough your message, place a tilde on both sides of the text:","underline":"Underline","underlineBubble":"I\'m at the airport now","underlineDescription":"^^text^^","underlineMessage":"To underline your message, place two caret on both sides of the text:"},"messageInfo":{"p2pRead":"Read","p2pReceived":"Delivered","read":"Read","received":"Delivered","waiting":"waiting"},"migration":{"info_message":"Your chats are currently being processed.","message":"Please launch your mobile application to continue using BiP Web"},"mobile_device":{"download_text":"To download {{name}} to your phone","text":"Are you trying to use {{name}} Web client? Browse <a href=\\"https://web.{{name_lowercase}}.com\\">web.{{name_lowercase}}.com</a> on your computer via Chrome, Firefox or Safari browser."},"mute":{"eight_hour":"8 hours","mute_chat_for":"Mute chat for \\"{{title}}\\"","one_day":"24 hours","one_hour":"1 hour","one_week":"1 week","till":"till","unlimited":"Always","until":"Mute {{till}} {{muteTime}}","until_chat":"Until"},"newChat":{"confirm":"CONFIRM","contactName":"Type contact name","continue":"Continue","create":"Create","createGroup":"Create New Group","frequentContacts":"FREQUENT CONTACTS","groupName":"Group Name","searchContacts":"Search in contacts","select":"SELECT","selectPhoto":"Select or drag photo"},"notifications":{"allDesktopNotifs":"Close All Desktop Notifications","callSound":"Call Sound","cancel":"CANCEL","desktopNotifs":"Desktop Notifications","muteNotifications":"MUTE NOTIFICATIONS","notificationSound":"Notification Sound","prompterTitle":"Turn off all desktop notifications for:","showPreview":{"description":"Show message content in desktop notifications.","title":"Show Preview"}},"privacy":{"lastSeenTitle":"Who can see my last seen","onlineTitle":"Who can see when I\'m online","avatarTitle":"Who can see my Profile Photo","everyone":"Everybody","myContacts":"My Contacts","myContactsExcept":{"avatarDescription":"{{ selectedAvatarContacts }} contact{{avatarPluralSuffix}} excluded","lastseenDescription":"{{ selectedLastseenContacts }} contact{{lastseenPluralSuffix}} excluded","title":"My contacts except...","modalTitle":"Hide last seen from..."},"shareOnly":{"avatarDescription":"{{ selectedAvatarContacts }} contact{{avatarPluralSuffix}} added","lastseenDescription":"{{ selectedLastseenContacts }} contact{{lastseenPluralSuffix}} added","title":"Share with these contacts...","modalTitle":"Show last seen to..."},"privacySelectUser":{"shareOnly":"{{ selectedContactsLength }} contact{{pluralSuffix}} added","myContactsExcept":"{{ selectedContactsLength }} contact{{pluralSuffix}} excluded"},"nobody":"Nobody","sameAsLastSeen":"Same with the Last Seen Setting","search":"Search","selectAll":"Select all users","message_contact_not_found":"No contacts found."},"preview":{"file_drop_content":"Drop the media and documents <br/> you want to send here","file_drop_title":"Drag and Drop","information":"Photos/Documents are added.","limit_overflow":"Sorry, You cannot share more than {{limit}} media items at a time.","max_size_exceeded":"Larger than the 100 MB limit.","more_file_added":"are added.","one_file_added":"is added.","page":"Page","select_items_warning":"List is empty please add an item.","title":"Preview","not_have_content":"The file you are trying to add does not have any content."},"profile":{"about":"About","add":"Add Profile Photo","avatar_error":"We are currently unable to perform your transaction.","back":"Back","block":"Block Contact","block_contact":"Blocked Contact List  <br/> Is Empty.","change":"Change Profile Photo","choose_photo":"Upload Photo","close":"Close","contact_info":"Contact Info","contact_us":"Contact Us","delete_photo":"Remove Photo","desktop_contact_title":"Contact Us","desktop_profile_title":"Profile","desktop_settings_title":"Settings","group_participants":"Participants","idea":"What\'s on your mind ?","last_seen":"Last seen","logout":"Logout","name_info":"This is not your username or pin. This name will be visible to your BiP contacts","nick":"Your Name","no_status":"No status","notifications":"Notifications","phone_number":"Phone Number","profile":"Profile","profile_name_input_error":"Name can\'t be empty.","select_only_image":"You can upload only images to this area, please select your image or drag here.","select_or_drag_picture":"Select or drag photo","settings":"Settings","unblock":"Unblock Contact","useHere":"Use here","user_last_seen_unknown":"View contact information","user_online":"Online","view_photo":"View Photo","warning_delete":"Delete profile photo?","your_phone_number":"Your Phone Number","yourself":"You"},"recall":{"other":"This message has been deleted","you":"You have deleted this message"},"recallMessages":{"othersDeleted":"This message was deleted","youDeleted":"You deleted this message"},"rollout":{"desc":"%s1 &nbsp; now to switch to the special version for BiP Beta users!","link":"Click","title":"BiP Web is now end-to-end encrypted!"},"search":{"chat":"Chats","contact":"Contacts","find":"No results were found","message":"Messages","not_found":"No chats, contacts or messages found.","message_contact_not_found":"No chats and contacts found."},"sendContact":{"contacts":"Contacts","last_chats":"Recent chats","no_contacts_found":"No contacts found.","select_contacts":"Select Contacts","selected_contacts":"Selected Contacts","sendcount":"Send {{ count }} contacts to \\"{{ contactFullName }}\\"?"},"settings":{"addBipArt":"Add %s1 Graphics","appearance":"Appearance","blocked":"Blocked","blocked_contacts":"Blocked Contacts","change_theme":"Change Theme","chatBackground":"Chat Background","dark":"Night Mode","delivery":"Delivery","desktopSettings":"Desktop Settings","help":"Help","invite_friends":"Invite Friends","last_seen":"Last Seen","light":"Day Mode","notifications":"Notifications","play_call_sound":"Call Sound","play_sound":"Notification Sound","privacy":"Privacy","read_receipt":"Read Information","show_content":"Show Content","theme":"Theme","web_alerts":"Web Alerts"},"splash-page":{"description":"Beep Web open in another window. Click \'Use Here\' to use the BEEP Web in this window.","loading":"Installing BİP. Please wait…"},"status-message":{"batteryOptimization":{"batterySettings":"Please adjust your Battery settings from the notification panel on your phone.","info":"<a href=\'https://bip.com/en/bip-performance-improvement/\' target=\'_blank\'>Follow the instructions on bip.com to adjust your battery settings so you don\'t miss out any messages. </a>","info_2":"Click to not miss out on any messages sent by %s1 and verify battery settings via the notifications.","title":"Don\'t Miss Any %s1 Messages!"},"disconnect":{"info":"Check the internet connection on your phone","title":"Your phone is not connected."},"low_battery":{"info":"To stay connected to %s1 Web, charge your phone.","title":"Your phone\'s battery is running low!"},"network_error":{"info":"Check the internet connection on your computer.","title":"Your Computer Is Not Connected"},"server_error":{"info":"Reconnecting. Please wait.","title":"Reconnecting..."},"updatable":{"guide":"Download Now","info":"%s1 Version 01.03.01 ","title":"An update is available for your %s1 App"},"updated":{"info":"Lorem ipsum dolor sit amet!","title":"%s1 updated to version 01.03.01"},"newVersionAvailable":{"title":"Updates Completed!","info":"Please refresh pages for chats."}},"sticker":{"title":"BiP Sticker Store","detail":"Sticker Details","not-found":"No result"},"tabs":{"discover":"Discover","games":"Games","message":"Message"},"theme-select":{"cancel":{"title":"Cancel"},"chooseTheme":"Choose Theme","dark":"Dark","light":"Light","lilac":"Lavender","nightBlue":"Night Blue","okay":{"title":"Okay"},"orange":"Orange"},"toast":{"error_default":", unsupported file type","error_maxfile":"Sorry, you cannot send more than %s1 media files at once.","error_maxsize":"maximum file size is exceeded. (Max %s1) ","error_pattern":"extension cannot be supported."},"toggleDevTools":"Developer Tools","unit":{"days":"d","hours":"h","minutes":"m","seconds":"secs"},"update":{"desktop-version":"{{name}} Desktop Version: %s1","download":"Download now","loading":"Installing BiP. Please wait... ","new_update":"An update is available for your BiP App","updated-version":"BiP updated to version %s1","version":"BiP Desktop Version %s1","web-version":"{{name}} Web Version: %s1"},"update-mobile":{"text":"To access BiP Web, download the most recent version on your phone.","update":"Update BiP on your phone."},"update-page":{"chrome":{"name":"Google Chrome"},"firefox":{"name":"Mozilla Firefox"},"message":"To use BiP Web, update your browser or use Mozilla Firefox, Safari, Microsoft Edge, and Opera.","microsoftEdge":{"name":"Microsoft Edge"},"opera":{"name":"Opera"},"safari":{"name":"Safari"},"update-browser-button":"Update","yandex":{"name":"Yandex"}},"user":{"delete":"Delete"},"userSearch":{"admin":"Admin","kick_from_group":"Remove member","make_admin":"Make Admin","no_contacts_found":"No contacts found.","search_contacts":"Search Contacts","send_message":"Message to ","title":"Search Participants","you":"You"},"verify":{"logout-button":"Logout","message":"Bip Web is opened in another window. To use Bip Web in this window, please click \'Use Here\'","use-here-button":"Use Here","warning_message":"{{name}} Web is open in another window. To use {{name}} Web in this window, click \'Use here\'."},"video":"Video","videoCall":"Video Call","voice":{"ask_permission":"{{name}} Web needs to access your computer\'s microphone to make a voice record. Please approve the following popup screen.","done":"done","error_permission":"{{name}} Web needs to access your computer\'s microphone to make a voice record. Please give microphone access to web.{{name_lowercase}}.com from your browser\'s settings.","no_permission":"You need to grant permission for this application to USE your microphone.","title_permission":"Allow your microphone","understood":"Ok"},"voip":{"blockedContentWarning":"Call to {{ title }} can not be placed, because the contact is blocked.","browser_error":"You need to install the latest version of Microsoft Edge to start your call or videocall. <br/> Download link: <a target=\'_blank\' href=\'https://www.microsoft.com/en-us/edge\'>https://www.microsoft.com/en-us/edge</a> ","call_encrypt_text":"End to End Encrypted","camera_denied":"{{name}} Web needs to access your computer\'s camera and microphone to make a video call. Please give camera and microphone access to <b>{{hostname}}</b> from your browser\'s settings.","camera_permission":"{{name}} Web needs to access your computer\'s camera and microphone to make a video call. Please approve the following popup screen.","camera_title_permission":"Allow Camera and Microphone","done":"Ok","incomingCall":"Incoming Call","incomingVideoCall":"Incoming Video Call","microphone_denied":"{{name}} Web needs to access your computer\'s microphone to make a voice call. Please give microphone access to <b>{{hostname}}</b> from your browser\'s settings.","microphone_permission":"{{name}} Web needs to access your computer\'s microphone to make a voice call. Please approve the following popup screen.","microphone_title_permission":"Allow microphone","outgoingCall":"Outgoing Call","outgoingVideoCall":"Outgoing Video Call","understood":"Ok"},"waiting-page":{"header":"Trying to connect your mobile phone.","logout-button":"Logout","refresh-button":"Reload Page","retry-message":"before next retry","retry-question":"Check your phone network connection !","retrying":"Retrying...","second":"second"},"warning":{"backup_setting_disable":"Your backup is disabled. Please enable your backup from Profile > Settings > Chat Settings > Backup","connection_lost":"Connection lost. Please check your internet connection and try again.","invalidFileWarn":"You have selected an invalid file type. Please choose a different file.","message":"BiP Web is open in another window. Click “Use Here” to use BiP Web in this window.","refresh_page":"Try again."},"reaction":{"all_reactions":"All","you_react":"Şu mesaja {{emoji}} ifadesini bıraktınız: {{type}}","react":"{{user}} reacted {{emoji}} to: {{type}}","remove":"Tap to remove","react_to_message":"React to message"},"unread_filter":{"clear":"Clear filter","filtered":"Filtered by unread","no_result":"No Results","none":"No unread chat","search":"Search unread chats","text":"Unread chats filter"},"poll":{"poll":"Poll","question":"Question","createPoll":"Create Poll","editPoll":"Edit Poll","askQuestion":"Ask Question","addOption":"Add an Option","moreOptions":"{{ remainingCount }} more options you can add.","optionExists":"This option already exists","settings":"Settings","anonymousVoting":"Anonymous Voting","multipleAnswer":"Multiple Answer","quizMode":"Quiz Mode","quizModeDescription":"Polls in Quiz Mode have one correct answer. Users cannot cancel their responses.","expireTime":"Expire Time","date":"Date","hour":"Hour","unlimited":"Unlimited","custom":"Custom","hourFormat":"{{ hour }} Hour","dayFormat":"{{ day }} Day","weekFormat":"{{ week }} Week","monthFormat":"{{ month }} Month","endTimeCannotBeEarlier":"Poll end time cannot be earlier than the current date.","endTimeMustBeAtLeast":"Poll end time must be at least %@ hour from now. Please re-adjust the time.","remainingCharacter":"%@ remaining character","maxOptionsReached":"You have added the maximum number of options","description":"Description (Optional)","wrongAnswerText":"Polls in Quiz Mode have one correct answer. Users cannot cancel their responses.","expireDate":"Expire Date: {{ expireDate }}","noOneHasRespondedYet":"No one has responded yet.","pollResults":"Poll Results","quizResults":"Quiz Results","viewResults":"View Results","xVoted":"{{ totalVoters }} people voted","vote":"Vote","endPoll":"End Poll","endPollConfirmation":"Are you sure you want to end the poll?","anonymousPoll":"Anonymous Poll","quiz":"Quiz","anonymousQuiz":"Anonymous Quiz","edit":"Edit","update":"Update","confirmDeletePoll":"Are you sure you want to delete the poll?","keepEditing":"Keep Editing","deletePoll":"Delete Poll","pollDetails":"Detail of Poll","pollEndDate":"Poll End Date","xVotes":"{{voteCount}} Vote","send":"Send","yOfXVoted":"{{currentVoters}} of {{totalVoters}} participants voted.","cancelPollConfirmation":"Are you sure you want to cancel the poll?","readMore":"Read More"}}')},function(e){e.exports=JSON.parse('{"About":"Hakkında","Actual size":"Gerçek Boyut","Bring All to Front":"Tümünü Öne Getir","Call":"Arama","ChatSearch":{"description":{"sameDay":"HH:mm","lastDay":"[Dün] HH:mm","lastWeek":"dddd HH:mm","sameElse":"DD.MM.YYYY HH:mm"},"find":"Ara","searchFor":"{{title}} ile olan sohbetler içinde ara.","searchMessages":"Mesajlarda Ara","not_found":"Mesaj bulunamadı"},"Close":"Kapat","Contact Us":"Bize Ulaşın","ContactCard":{"description":{"lastDay":"[Dün]","lastWeek":"dddd","nextDay":"[Yarın]","nextWeek":"dddd","sameDay":"HH:mm","sameElse":"DD.MM.YYYY"}},"Conversation":{"description":{"lastDay":"[Dün] HH:mm","lastWeek":"dddd[,] HH:mm","lastseen":"Son görülme: ","nextDay":"[Yarın] HH:mm","nextWeek":"dddd[,] HH:mm","online":"Çevrimiçi","sameDay":"[Bugün] HH:mm","sameElse":"DD.MM.YYYY HH:mm","viewInfo":"Kişi bilgisini görüntüle"},"info":{"lastDay":"[Dün]","lastWeek":"dddd","nextDay":"[Yarın]","nextWeek":"dddd","sameDay":"[Bugün]","sameElse":"DD.MM.YYYY"},"messageSelected":" mesaj seçildi","noConversationFound":"İlgili kişi ile gerçekleştirilmiş bir mesajlaşma bulunamadı.","user_is_blocked":"Bu kişiyi daha önce engellediniz. İletişime devam etmek için engeli kaldırınız."},"Copy":"Kopyala","Cut":"Kes","Delete":"Sil","E2e":{"description":{"message1":"Uçtan Uca Şifreli!","message2":"Bip Beta kullanıcılarına özel sürümü kullanıyorsunuz."},"link":{"url":"https://bip.com/tr/guvenlik/"}},"Edit":"Düzenle","File":"Dosya","Help":"Yardım","Hide":"Gizle","Hide others":"Diğerlerini Gizle","Incoming":"Gelen","Kişi Seçin":{"select_contacts":"Kişi seçin"},"Learn more":"Sık Sorulan Sorular","MessageEditor":{"activity":"Aktivite","flags":"Bayraklar","foods":"Yiyecekler ve İçecekler","max_length_text_content":"Lütfen {{maxLength}} karakterden daha kısa yazı giriniz","nature":"Hayvanlar ve Doğa","notfound":"Emoji Bulunamadı","objects":"Nesneler","people":"Suratlar ve İnsanlar","placeholder":"Mesajınızı yazın","places":"Seyahat ve Yerler","recent":"Son arananlar","search":"Emoji Ara","symbols":"Semboller"},"Minimize":"Küçült","NonBeta":{"description":"BiP Beta, talep eden kullanıcıların BiP’e yeni gelecek özellikleri diğer kullanıcılardan önce test edebildiği ve geri bildirimlerini paylaştığı programdır.","download":"BiP Masaüstü uygulamasına giriş yapmak için hemen&nbsp; <a href=\'%s1\' target=\'_blank\'>tıklayın.</a>","infoLink":"Daha Fazla Bilgi","redirect":"BiP Web\'e yönlendiriliyorsunuz.","stepHeader":"Bu Web Sitesi BiP BETA Kullanıcıları İçindir."},"Outgoing":"Giden","Paste":"Yapıştır","Profile":{"avatar":{"addProfilePhoto":"Fotoğraf Yükle","changeProfilePhoto":"Fotoğrafı Değiştir","removeProfilePhoto":"Fotoğrafi Sil","uploadProfilePhoto":"Fotoğraf Yükle","viewProfilePhoto":"Fotoğrafı Göster"},"description":{"about":"Hakkınızda","description":"Bu sizin kullanıcı adınız veya pininiz değil. Bu isim %s1 kişileriniz tarafından görülecektir.","name":"Adınız","telephone":"Telefon Numaranız"}},"Quit":"Çıkış","Redo":"Yeniden Yap","Reload":"Yeniden Yükle","Select all":"Hepsini Seç","Services":"Tercihler","Settings":"Ayarlar","Speech":"Tal","Toggle fullscreen":"Tam Ekrana Geç","Undo":"Geri","Unhide":"Göster","View":"Görüntüle","Window":"Pencere","Zoom":"Gerçek Boyut","Zoom in":"Yakınlaştır","Zoom out":"Uzaklaştır","Archived":"Arşivlenmiş Sohbetler","NoArchivedChat":"Arşivlenmiş Sohbet Yok","accesbility":{"attach":"ekle","avatar-change":"avatar değiştir","back":"geri","block-contacts":"engellenen kişiler","clear_search":"aramayı temizle","close-group-info":"grup bilgisi penceresini kapat","contact":"kişi","contact-list-button":"Kişi Listesi","contact-us":"bize yazın","create-group":"yeni sohbet başlat - yeni grup oluştur","create_new_group":"yeni grup oluştur","delete-message":"mesajı sil","delete-search":"aramayı temizle","document":"döküman","emoji":"emojiler","forward-message":"mesaj ilet","image":"resim","message-menu":"mesaj menu","notifications":"bildirimler","profile-edit":"profil düzenle","profile_menu":"profil menü","scroll_down":"aşağı git","send-button":"Mesajı gönder","settings":"ayarlar","theme":"tema","video-call":"Görüntülü Arama","video-call-close":"Görüntülü Aramayı kapat","voice-record":"sesli mesaj","voip-call":"Sesli arama","voip-close":"Sesli aramayı kapat","write-message":"Mesajınızı Yazınız"},"accessibility":{"accept_call":"Aramayı kabul et","add_file":"Dosya ekle","add_new_user":"Yeni Kullanıcı Ekle","attach":"Ataç","avatar_selection":"Avatar seçenekleri","back":"Geri","block_contact":"Kişiyi Engelle","call_to_chat":"Konuşmayı aç","cancel":"İptal","cancel_selection":"Mesaj seçimini iptal et","change":"{{ name }} değiştir","chat_menu":"Sohbet menüsü","chat_search":"Sohbetlerde ara","close":"Kapat","close_mic":"Mikrofonu kapa","decline_call":"Aramayı iptal et","delete":"Sil","delete_message":"Mesajı Sil","download":"İndir","emoji":"Emoji","end_call":"Aramayı sonlandır","forward":"Yönlendir","menu":"Menü","message_info":"Mesaj Bilgisi","message_menu":"Mesaj menüsü","message_read":"Mesaj okundu","message_received":"Mesaj iletildi","message_sent":"Mesaj gönderildi","mute_notifications":"Sessize al","new_chat":"Yeni","notifications":"Bildirimler","open_mic":"Mikrofonu aç","options":"Seçenekler","play_button":"Video Oynat","preview":"Görüntüle","qr_video":"QR tanıtım video","remove":"Sil","reply":"Yanıtla","save":"Kaydet","select_media":"Resim veya Video seç","send":"Gönder","send_media":"Dosyaları gönder","unblock_contact":"Engeli Kaldır","video_call":"Görüntüllü AArama","voice_call":"Sesli Arama","voice_cancel":"Sesli mesaj iptal","voice_message":"Sesli mesaj","zoom_in":"Yakınlaştır","zoom_out":"Uzaklaştır"},"actions":{"added":" \'{{ by }}\', \'{{ sjid }}\' kişisini ekledi","addedYou":" \'{{ by }}\' sizi ekledi","addedYouToGroup":" \'{{ by }}\' sizi \'{{ groupName }}\' adlı gruba ekledi","allMembers":"tüm katılımcıların,","byRemovedContact":"\'{{ by }}\' {{ sjid }} adlı kullanıcıyı gruptan çıkarttı ","changedAom":"mesaj göndermelerine izin vermek üzere değiştirdi","changedAvatar":"grubun simgesini değiştirdi","changedEndDate":"\'{{ by }}\' Grup sonlanma zamanını {{ endDate }} olarak değiştirdi","changedGroupAvatar":"grubun simgesini değiştirdi","changedGroupSettings":"\'{{ sjid }}\' bu grubun ayarlarını {{ authorized }} {{ infoType }}","changedName":"\'{{ by }}\' önceden \'{{ prevName}}\' olan grup adını \'{{ nextName }}\' olarak değiştirdi","changedOcs":"grup bilgilerini düzenlemeye izin vermek üzere değiştirdi","contactInfo":"Kişi Bilgisi","createdGroup":"\'{{ by }}\', \'{{ groupName }}\' grubunu oluşturdu","endDate":"Grup sonlandırma tarihi","exception":"grup oluşturulurken bir sorun çıktı.","groupCreated":"Grup oluşturuldu.","groupSettings":"bu grubun ayarlarını","groupTimeout":"Zamanlı grup süresi doldu","invitedFromUrl":"\'{{ sjid }}\' grup davet bağlantısını kullanarak katıldı","joinedAnonymousGroup":"Gruba katıldınız.","joinedGroup":"\'{{ groupName }}\' grubuna katıldınız.","left":"ayrıldı","messageFormatting":"Mesaj Formatlama","onlyAdmins":"yalnızca yöneticilerin,","onlyAdminsAom":"yalnızca yöneticilerin bu gruba ","removedContact":" \'{{ sjid }}\' kişisini çıkardınız","removedYou":"\'{{ by }}\' sizi gruptan çıkarttı","undefinedInviteInfo":"Tanımsız bilgi mesajı","unlimited":"Süresiz","youAdded":"\'{{ sjid }}\' kişisini eklediniz","youAreAdmin":"Artık yöneticisiniz","youChangedAom":"mesaj göndermelerine izin vermek üzere değiştirdiniz","youChangedAvatar":"Grubun simgesini değiştirdiniz","youChangedEndDate":"Grup sonlanma zamanını {{ endDate }} olarak değiştirdiniz","youChangedGroupAvatar":"Grubun simgesini değiştirdiniz","youChangedGroupSettings":"Bu grubun ayarlarını {{ authorized }} {{ infoType }}","youChangedName":"\'{{ prevName }}\' grup adını \'{{ nextName }}\' olarak değiştirdiniz","youChangedOcs":"grup bilgilerini düzenlemeye izin vermek üzere değiştirdiniz","youCreatedGroup":"\'{{ groupName }}\' grubunu oluşturdunuz","youInvitedFromUrl":"Bu grubun davet bağlantısı ile katıldınız","youLeft":"Ayrıldınız"},"audio":"Ses","audioCall":"Sesli Arama","blockedContacts":{"cancel":"İPTAL","confirm":"{{ blockedContactFullName }} ile engelleme kaldırılsın mı?","info":"Engellenen kişiler artık sizi arayamaz veya mesaj atamaz.","message":"Henüz engellenen kişi yok","title":"Engellenen kişi ekleyin","unBlock":"ENGELİ KALDIR"},"bubble":{"contact_detail":"DETAYI GÖSTER","followme":"Takip etmek için bu sohbeti uygulamadan açmalısınız."},"bubbleMenu":{"delete":"Sil","download":"İndir","forward":"Yönlendir","messageInfo":"Mesaj Bilgisi","reply":"Yanıtla","all_download":"Tümünü İndir","all_forward":"Tümünü İlet","all_delete":"Tümünü Sil"},"call":{"accept":"Kabul Et","busy":"Meşgul","cancel":"Reddet","exception":"Arama yaparken bir problem oluştu. Biraz sonra tekrar deneyiniz.","freeze":"Görüntülü görüşme durduruldu","incoming":"Gelen Arama","incoming_video":"Görüntülü Arama","missed":"Cevapsız Arama","missed_video":"Cevapsız Görüntülü Arama","mute":"Mikrofon ve kamera kapalı","outgoing":{"video":"Görüntülü Ara","voice":"Sesli Ara"},"trying_to_reconnect":"Yeniden bağlanıyor...","type_audio":"Sesli BiP araması","type_ringing":"Çalıyor...","type_video":"Görüntülü BiP araması","you_can_not_call_yourself_warning":"Kendinizi aramaya çalıştınız lütfen başka bir kişi ile tekrar deneyiniz."},"chat":{"add-member":"Katılımcı Ekle","and_plus":"ve +","aom":"%s1, bu grubun ayarlarını yalnızca yöneticilerin bu gruba mesaj göndermelerine izin vermek üzere değiştirdi.","aom_false":"%s1, bu grubun ayarlarını tüm katılımcıların mesaj göndermelerine izin vermek üzere değiştirdi.","aom_you":"Bu grubun ayarlarını yalnızca yöneticilerin bu gruba mesaj göndermesine izin vermek üzere değiştirdiniz.","aom_you_false":"Bu grubun ayarını tüm katılımcıların mesaj göndermelerine izin vermek üzere değiştirdiniz.","audio":"Ses","buzz":"Titreşim","caps":"Caps","chats":"Konuşmalar","composing":"yazıyor...","composing_without_dot":"Yazıyor","contact":"Kişi","contacts":"Kişiler","contacts_selected":"Kişi Seçildi","decryptionFailed":"Mesaj bekleniyor. Bu biraz zaman alabilir.","delete_message_dialog":"Mesaj silinsin mi?","document":"Doküman","editor_placeholder":"Mesajınızı yazın","emoji":"EMOJİ","followMe":"Takip Et","gif":"Gif","group_call_started":"Grup görüntülü görüşme başlatıldı. Katılmak için tıkla ! %s","group_is_aom":"Sadece yöneticiler mesaj atabilir","group_is_suspend":"Uygunsuz aktivite tespit edildi. Mesajınız %s1 tarihine kadar devre dışı bırakılacak.","image":"Fotoğraf","import":"{{sjid}} sohbetinizi {{name}}’e taşıdı. Dilerseniz siz de mobil uygulamamızdan diğer uygulamadaki sohbetlerinizi {{name}}’e taşıyabilirsiniz.","import_refresh":"Taşıdığınız sohbeti görebilmek için sayfayı yenileyin.","import_you":"Bu sohbeti taşıdınız. Medyaların yüklenmesi biraz zaman alabilir.","imported":"taşındı","joined_to_group":"%s1 gruba eklendi","location":"Konum","media":"Fotoğraf ve Video","mnt":"Para Transferi","new_messages":"Yeni Mesaj","ocs":"%s1 bu grubun ayarlarını tüm katılımcıların, grup bilgilerini düzenlemesine izin vermek üzere değiştirdi.","ocs_false":"%s1 bu gurubun ayarlarını yalnızca yöneticilerin, grup bilgilerini düzenlemesine izin vermek üzere değiştirdi.","ocs_you":"Bu grubun ayarlarını tüm kullanıcıların, grup bilgilerini düzenlemesine izin vermek üzere değiştirdiniz.","ocs_you_false":"Bu grubun ayarlarını yalnızca yöneticilerin, grup bilgilerini düzenlemesine izin vermek üzere değiştirdiniz.","recall":"Silinen Mesaj","recording":"Ses Kaydediliyor...","recording_group":"Ses Kaydediyor","refresh":"Sayfayı Yenile","retryFailed":"Mesaj alınamadı. Lütfen size yeniden gönderilmesini isteyin.","search_contacts_placeholder":"Kişi arayın","search_placeholder":"Kişi veya grup arayın","select_contacts":"Kişi Seçin","select_contacts_forward":"Kişi ya da grup seçin","sorry":"Üzgünüz","start":"Yeni Sohbet Başlat - Yeni Grup Oluştur","sticker":"Çıkartma","subject_is_changed_by_others":"%s1 grup ismini %s2 olarak değiştirdi","subject_is_changed_by_you":"Grup ismini %s2 olarak değiştirdiniz","suspend":"Yoğun kullanımınız nedeniyle, {{s1}} tarihine kadar mesaj atmanız engellenmiştir.","type_contact_forward":"Kişi/Grup ismi...","type_contact_name":"Kişi adı yazın...\\n","unread_message":"Okunmamış Mesaj","user_is_blocked":"Bu kişiyi daha önce engellediniz. İletişime devam etmek için engeli kaldırınız.","user_is_exited":"Artık grup üyelerinden biri olmadığınız için bu gruba mesaj gönderemezsiniz.","video":"Video","you_joined_to_group":"Katıldınız","pin":{"error":"Maksimum sohbet pinleme limitine ulaştınız"},"notFound":"Mesaj bulunamadı","click_for_download":"İndirmek için tıklayınız"},"chatList":{"confirm":"Onayla","mute":"Sessize Al","quitGroup":"Gruptan Çık","quitGroupConfirm":"Gruptan çıkılacak, onaylıyor musunuz?","removeChat":"Konuşmayı Sil","removeChatConfirm":"Yazışmanız silinecek, onaylıyor musunuz?","search":"Ara","unmute":"Sesini Aç","pin":"Sohbeti Sabitle","pinned":"Sohbet sabitlendi","unpin":"Sabitlemeyi Kaldır","unpinned":"Sabitleme kaldırıldı","archive":"Sohbeti Arşivle","archived":"Sohbet arşivlendi","unarchive":"Sohbeti Arşivden Çıkar","unarchived":"Sohbet arşivden çıkarıldı"},"chatStates":{"_online":"çevrimiçi","composingMessage":"yazıyor...","notMember":"Artık grup üyelerinden biri olmadığnız için bu gruba mesaj gönderemezsiniz.","online":"çevrimiçi","onlyAdmins":"Sadece yöneticiler mesaj atabilir","otherComposingMessage":"yazıyor...","otherRecordingAudio":"ses kaydediliyor...","recordingAudio":"ses kaydediliyor...","sendingAudio":"ses gönderiyor..."},"confirm":{"cancel":"Vazgeç","continue":"Onayla","exit_group":"Gruptan çıkılacak, onaylıyor musunuz?","select":"Seç","okay":"Tamam"},"contact":{"complaint_intro":"Lütfen aşağıdaki bilgileri silmeyiniz. Bu bilgiler varsa problemleri bulmak için kullanılacaktır.","complaint_subject":"Bize Ulaşın","email":"E-Posta Adresiniz","email-hint":"Size ulaşabileceğimiz bir e-posta adresi yazabilirsiniz.","fullname":"İsim Soyisim","message":"Mesajınız","message-hint":"İletmek istediğiniz şikayet / önerinizi yazabilirsiniz.","new_chat":"Yeni Sohbet","not-found":"Kullanıcı bulunamadı.","selected_contact":"Seçili Kişiler","send":"Gönder","send_success":"Mesajınız alınmıştır","share":"%s1 kişi “%s2” ile paylaşılsın mı?","us":"Bize Ulaşın"},"contactInfo":{"about":"Hakkında","block":"Engelle","mute":"Sessize Al","telephone":"Telefon Numarası","un_block":"Engeli Kaldır"},"contactUs":{"email":"E-Posta Adresiniz","emailDescription":"Size ulaşabileceğimiz bir eposta adresi yazabilirsiniz.","fullName":"İsim Soyisim","message":"Mesajınız","messageDescription":"İletmek istediğiniz şikayet / önerinizi yazabilirsiniz.","messageSent":"Mesajınız Gönderildi."},"date":{"today":"Bugün","yesterday":"Dün"},"default":{"caption_message":"Her zaman bağlı olun","desktop_download":"BiP Masaüstü Uygulamasını İndir","desktop_message":"BiP Masaüstü Uygulaması","desktop_message2":"Daha iyi deneyim için masaüstü uygulamasını kullanın","desktop_message3":"BiP, MacOS ve Windows işletim sistemlerinde kullanılabilir.","download_url":"https://bip.com/tr/indir","error_message":"Bir hata oluştu, lütfen tekrar deneyiniz.","explain_message":"Sol menüden seçiminizi yaparak hemen mesajlaşmaya başlayın","explain_message1":"Sol menüden seçiminizi yaparak","explain_message2":"hemen mesajlaşmaya başlayın","format_text_desc":"Yazdığınız mesajları seçerek, kolayca kalın, italik, altı çizili ve üstü çizili yapabilirsiniz.","format_text_title":"BiP Web ile mesajlarınızın yazı tipini değiştirebilirsiniz!","ok_message":"Tamam"},"dialog":{"OK":"Tamam","allowMicrophone":"Mikrofon izni ver","allowMicrophoneAndCamera":"Kamera ve Mikrofon İzni Ver","allowMicrophoneAndCameraText":"Görüntülü arama yapabilmek için {{name}} Web’in bilgisayarınızın kamera ve mikrofonuna erişmesi gerekiyor. Açılan uyarı ekranından izin verin.","allowMicrophoneText":"Sesli arama yapabilmek için {{name}} Web’in bilgisayarınızın mikrofonuna erişmesi gerekiyor. Açılan uyarı ekranından izin verin.","close":"Kapat","messageCountLimitInfo":"Üzgünüz, bir seferde 30 medya öğesinden daha fazlasını paylaşamazsınız.","messageIsNotSent":"Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyiniz.","messageSending":"Mesajınız Gönderiliyor...","messageSent":"Mesajınız Gönderildi.","sendPreview":"Ön İzleme Gönder"},"document":"Döküman","drawerTitle":{"appearance":"Görünüm Ayarları","background":"Duvar Kağıdı","blockedContacts":"Engellenen Kişiler","contactInfo":"İletişim Bilgileri","contactUs":"Bize Ulaşın","createGroup":"Gruba Katılımcı Ekle","createGroupLastStep":"Yeni Grup","desktopSettings":"Masaüstü Ayarları","groupAddContact":"Katılımcı Ekle","groupInfo":"Grup Bilgisi","groupName":"Grup Adı","groupSettings":"Grup Ayarları","help":"Yardım","messageFormatting":"Mesaj Formatlama","messageInfo":"Mesaj Bilgisi","newChat":"Yeni Sohbet","notifications":"Bildirimler","privacy":"Son Görülme & Çevrimiçi","profile":"Hesabım","searchMessages":"Mesajlarda Ara","send":"Gönder","sending":"Gönderiliyor...","settings":"Ayarlar"},"editor":{"max_length_text_content":"Lütfen %s1 karakterden daha kısa yazı giriniz"},"emoji":{"category_0":"Geçmiş","category_1":"Yüz ifadeleri ve İnsanlar","category_2":"Hayvanlar","category_3":"Yemek","category_4":"Seyahat","category_5":"Spor","category_6":"Medya","category_7":"Semboller","category_8":"Bayraklar"},"empty-chat":{"download-application":"BiP Masaüstü Uygulamasını İndir"},"error":{"browser_error_message":"{{name}} Web tarafından desteklenmeyen bir tarayıcı kullanıyorsunuz. Tarayıcınızı güncelleyebilir veya aşağıdaki desteklenen tarayıcılardan birisini kullanarak hesabınıza giriş yapabilirsiniz.","browser_error_title":"Üzgünüz","copyright":"© 2020 BiP İletişim Teknolojileri ve Dijital Servisler A.Ş. Tüm Hakları Saklıdır.","error_max_retry_text":"Bağlantınız kesildi<br /> Bağlantı sorunu mu yaşıyorsunuz?\\n","error_text":"Bağlantınız kesildi<br /> Yeniden bağlantı deneniyor...\\n","retry":"TEKRAR DENE"},"error-page":{"header":"Telefonunuza ulaşılmaya çalışılıyor.","logout-button":"Çıkış yap","refresh-button":"Syafayı Yeniden Yükle","retry-button":"Şimdi Tekrar Dene","retry-message":"içinde tekrar denenecek...","retry-question":"Telefonunuzda internet bağlantısı olduğundan emin misiniz?","retrying":"Tekrar deneniyor...","second":"Saniye"},"events":{"groupName":"olan grup adını","youFormedGroup":"grubunu oluşturdunuz"},"file":{"downloaded":"indirildi","downloading":"indiriliyor..."},"followMe":{"cancel":"İptal Edildi","duration":"Süre:","info":"Beni Takip Et","request":"İstek","response_accept":"Kabul Edildi","response_reject":"Reddedildi","stop":"Bitti"},"followme":{"accepted":"Şu zamana kadar canlı takip","canceled":"Canlı takip isteği iptal edildi.","rejected":"Canlı takip isteği reddedildi.","stopped":"Canlı takip sona erdi."},"forceReload":"Zorla Yeniden Yükle","format":{"bold":"Kalın","bold-message":" Mesajınızı kalın yapmak için metnin önüne ve arkasına yıldız ekleyin:","example":"Havalimanındayım şimdi","italic":"İtalik","italic-message":"Mesajınızı italik yapmak için metnin önüne ve arkasına alt çizgi ekleyin:","message":"metin","strikethrough":"Üstü Çizili","strikethrough-message":"Mesajınızı üstü çizili yapmak için metnin önüne ve arkasına yaklaşık işareti (tilde) ekleyin:","underline":"Altı Çizili","underline-message":"Mesajınızı altı çizili yapmak için metnin önüne ve arkasına üstel işareti (caret) ekleyin:"},"group":{"add_group":"Gruba ekle","add_user_group":"Add %s1 to “%s2” group?","create_date":"Oluşturulma zamanı","create_new_group":"Yeni Grup Oluştur","created_group":"%s1, \'%s2\' grubunu oluşturdu","done":"Tamam","group_contact_list_title":"Kişiler","group_info_title":"Grup Bilgisi","group_name_error":"Grup ismini giriniz","group_name_placeholder":"Grup ismi yazınız","group_unselectable":"Zaten gruba eklendi","import":"%s1 grubunuzu {{name}}’e taşıdı. Dilerseniz siz de mobil uygulamamızdan diğer uygulamadaki sohbetlerinizi bu gruba taşıyabilirsiniz.","join_group_call":"Görüntülü Görüşmeye Katıl","kicked_from_group":"Gruptan çıkarıldınız","make_admin":"Yönetici Yap","max_member":"Maksimum katılımcı sayısına (%s1) ulaştınız.","member_title_postfix":"katılımcı","message_restriction":"Mesaj gönderimi","name_and_photo_restriction":"Grup İsmi ve Fotoğraf Değişimi","name_cannot_be_empty":"Lütfen grup adı giriniz.","name_is_long":"Grup ismi çok uzun","new":"Yeni Grup","new_group":"Yeni Grup Oluştur","not_empty":"boş bırakılamaz","only_admin_send_messages":"Sadece Yöneticiler","owner":"(Grup Yöneticisi)","remove_member":"Gruptan çıkart","remove_member_confirm":"%s1 gruptan çıkarılacak. Devam etmek istiyor musunuz?","show_more":"Daha fazla","someone_add_group":"%s1, \'%s2\' kişisini ekledi","someone_join_invite_link":"%s1 gruba davet bağlantısını kullanarak katıldı","someone_kicked_from_group":"%s1, %s2 kişisini çıkardı","today":"Bugün %s1","update_schedule_group":"%s1 grup sonlanma zamanını %s2 olarak değiştirdi","user_add_group":"%s1 sizi ekledi","user_changed_avatar":"%s1 grup simgesini değiştirdi","user_changed_subject":"%s1 \'%s2\' olan grup adını \'%s3\' olarak değiştirdi","user_kicked_from_group":"%s1 kişisini çıkardınız.","user_left_group":"%s1 ayrıldı","warning_delete":"Grup fotoğrafı silinsin mi ?","yesterday":"Dün %s1","you_add_group":"\'%s1\' kişisini eklediniz","you_are_now_admin":"Artık yöneticisiniz","you_changed_avatar":"Grubun simgesini değiştirdiniz","you_changed_subject":"\'%s1\' olan grup adını \'%s2\' olarak değiştirdiniz.","you_created_group":"\'%s1\' grubunu oluşturdunuz","you_join_invite_link":"Bu gruba davet bağlantısı ile katıldınız","you_kicked_from_group":"%s1 sizi çıkardı","you_left_group":"Ayrıldınız","you_update_schedule_group":"Grup sonlanma zamanını %s1 olarak değiştirdiniz"},"groupInfo":{"addMember":"Yeni Katılımcı Ekle","admin":"Grup Yöneticisi","allUsers":"Bütün Katılımcılar","cancel":"Vazgeç","created":"{{ createdDate }} tarihinde oluşturuldu","editGroupInfo":"Grup Bilgisini Düzenle","exit":"Gruptan Çık","inviteButton":"Katılımcı Ekle","makeAdmin":"Yönetici Yap","media":"Medya, Bağlantılar ve Belgeler","members":"Katılımcı:","mute":"Sessiz Bildirimler","ok":"Tamam","onlyAdmins":"Sadece Yöneticiler","removeGroupAvatar":"Grup fotoğrafı silinsin mi?","removeMember":"Gruptan Çıkar","sampleTemplate":"{{ count }} kişi \\"{{ contactFullName }}\\" ile paylaşılsın mı?","selectEditors":"Bu grubun ismini ve fotoğrafını kimin değiştirebileceğini seçin","selectSenders":"Bu gruba kimin mesaj göndereceğini seçin.","sendMessage":"Mesaj Gönderimi","settings":"Grup ayarları","you":"Siz","delete":"Grubu Sil","deleteGroupConfirm":"Grup silinecek, onaylıyor musunuz?"},"help":{"built":"Yapım Tarihi","title":"Bize Ulaşın","version":"Versiyon"},"image":"Fotoğraf","infoCard":{"contactInfo":"Kişi Bilgisi","contactUs":"Bize Ulaşın","groupInfo":"Grup Bilgisi","logoff":"Çıkış","messageFormatting":"Mesaj Formatlama","newGroup":"Yeni Grup","profile":"Hesabım","removeConversation":"Sohbeti Kaldır","selectMessages":"Mesajları Seç","settings":"Ayarlar","archived":"Arşivlenmiş"},"informationMessages":{"e2eInfo1":"Mesajlar ve aramalar uçtan uca şifrelidir. {{name}} de dahil olmak üzere bu sohbetin dışında bulunan hiç kimse mesaj ve aramalarınızı okuyamaz ve dinleyemez. Daha fazla bilgi edinmek için dokunun.","e2eInfo2":"","e2eInfo3":" ile aranızdaki güvenlik kodu değişti. Daha fazla bilgi edinmek için dokunun."},"initialize-page":{"disconnect-message":"Uçtan Uca Şifreli","loadingChats":"Sohbetleriniz Yükleniyor","connecting":"Bağlanıyor...","logout-button":"Çıkış yap","message":"Uçtan Uca Şifreli"},"lang":{"reserved_text":"&copy; 2020 BiP İletişim Teknolojileri ve Dijital Servisler A.Ş. Tüm Hakları Saklıdır."},"login":{"automatic_login":"Web\'de {{name}}\'e her geldiğimde otomatik olarak giriş yap","bip":"{{name}}","download":"Daha iyi deneyim için <a href=\'%s1\' target=\'_blank\'> Masaüstü Uygulamasını Yükleyin</a>","download_from_stores":"<a href=\'https://itunes.apple.com/us/app/bip-messenger/id583274826?mt=8\' target=\'_blank\'>iOS</a>  |  <a href=\'https://play.google.com/store/apps/details?id=com.turkcell.bip&hl=tr\' target=\'_blank\'>Android</a>","faq":"SSS - Sıkça Sorulan Sorular","follow_instructions":"Hızlı, güvenli ve eğlenceli mesajlaşmaya başlamak için;","hello":" ","open_from_phone":"Cihazınızdan <strong>{{name}}\'i</strong> açın, yüklü değilse yükleyin","reserved_text":"&copy; 2020 BiP İletişim Teknolojileri ve Dijital Servisler A.Ş. Tüm Hakları Saklıdır.","using_instraction_one":"<strong>Daha Fazla</strong> simgesine dokunun ve {{name}} Web’i seçin.","using_instraction_two":"Sağdaki <strong>QR</strong> kodu <strong>{{name}}</strong> mobil uygulamasından okutun."},"media":{"error_pattern":"Desteklenmeyen dosya biçimi","error_size":"Dosya boyutu hatası oluştu. En fazla : ","hd_info":"Yüksek kalitede göndermek için HD düğmesine tıklayın. (HD fotoğrafların dosya boyutu daha yüksektir ve gönderilmesi daha fazla zaman gerektirir.)","loading":"Yükleniyor..."},"mediaInfo":{"audio":"Ses","contact":"Kişi","docs":"BELGELER","document":"Doküman","file":"Dosyası","gif":"GIF","image":"Fotoğraf","links":"BAĞLANTILAR","location":"Konum","media":"MEDYA","reply":"Yanıt","sendImageVideo":"Fotoğraf ve Video","sticker":"Çıkartma","video":"Video","poll":"Anket","liveLocation":"Canlı Konum","survey":"Anket","documentation":"Döküman"},"message":{"bubble_for_lgrp":"Katılımcı sayısı 400 kişiyi geçtiği için bu grupta mesaj bilgisi (okundu, iletildi) gösterilmeyecektir.","cancel":"İPTAL","cannot_call_nonbip":"{{name}}\'li olmayan %s1 kişisini arayamazsınız.","cannot_send_message_to_nonbip":"{{name}}\'li olmayan %s1 kişisine mesaj gönderemezsiniz.","delete":"Sil","delete_conversation":"Konuşmayı Sil","delete_conversation_text":"Yazışmanız silinecek, onaylıyor musunuz?","delete_from_everyone":"Herkesten Sil","delete_from_me":"Benden Sil","delete_message_text":"Mesajınız silinecek, onaylıyor musunuz?","delete_title":"Mesaj silinsin mi ?","delivered":"İletildi","download":"İndir","exit_group":"Gruptan Çık","forward":"İlet","forwarded":"Yönlendirildi","group_create_confirmation":"%s grubu yaratılacak, onaylıyor musunuz?","info":"Mesaj Bilgisi","info_for_lgrp":"Daha iyi bir mesajlaşma deneyimi için katılımcı sayısı 400 kişiyi geçen gruplarda mesaj bilgisi (okundu, iletildi) gösterilmemektedir.","make_call_confirmation":"%s aranacak, onaylıyor musunuz?","message_format":"Mesaj formatlama","messages_selected":"mesaj seçildi","mute_conversation":"Sessize Al","read":"Okundu","reply":"Cevapla","select_messages":"Mesajları Seç","try_again":"Lütfen daha sonra tekrar deneyiniz","unmute_conversation":"Sesi aç","waiting":"Bekliyor","edited":"Düzenlendi"},"messageFormatting":{"bold":"Kalın","boldBubble":"Havalimanındayım şimdi","boldDescription":"*mesajınız*","boldMessage":"Mesajınızı kalın yapmak için metnin önüne ve arkasına yıldız ekleyin:","italic":"İtalik","italicBubble":"Havalimanındayım şimdi","italicDescription":"_mesajınız_","italicMessage":"Mesajınızı italik yapmak için metnin önüne ve arkasına alt çizgi ekleyin:","strike":"Üstü Çizili","strikeBubble":"Havalimanındayım şimdi","strikeDescription":"~mesajınız~","strikeMessage":"Mesajınızı üstü çizili yapmak için metnin önüne ve arkasına yaklaşık işareti (tilde) ekleyin:","underline":"Altı Çizili","underlineBubble":"Havalimanındayım şimdi","underlineDescription":"^^mesajınız^^","underlineMessage":"Mesajınızı altı çizili yapmak için metnin önüne ve arkasına üstel işareti ekleyin:"},"messageInfo":{"p2pRead":"Okunma Tarihi","p2pReceived":"Teslim Edilme Tarihi","read":"Okuyan","received":"Teslim Edilen","waiting":"kaldı"},"migration":{"info_message":"Sohbetleriniz hazırlanıyor.","message":"BiP Web\'i kullanmaya devam edebilmek için lütfen mobil uygulamanızı açın."},"mobile_device":{"download_text":"{{name}}\'i telefonunuza indirmek için","text":"{{name}} Web uygulamasını kullanmaya mı çalışıyorsunuz? Bilgisayarınıza geçin ve Chrome, Firefox veya Safari tarayıcınızdan <a href=\\"https://web.{{name_lowercase}}.com\\">web.{{name_lowercase}}.com</a> adresini ziyaret edin."},"mute":{"eight_hour":"8 saat","mute_chat_for":" \\"{{title}}\\" için sohbeti sessize al ","one_day":"24 saat","one_hour":"1 saat","one_week":"1 hafta","till":"dek","unlimited":"Her zaman","until":"{{muteTime}} {{till}} sessize al","until_chat":"saatine kadar"},"newChat":{"confirm":"ONAYLA","contactName":"Kişi ismi yazın","continue":"Devam Et","create":"Oluştur","createGroup":"Yeni Grup","frequentContacts":"SIK GÖRÜŞÜLENLER","groupName":"Grup İsmi","searchContacts":"Kişi arayın","select":"SEÇ","selectPhoto":"Fotoğraf seç ya da sürükle"},"notifications":{"allDesktopNotifs":"Tüm masaüstü bildirimleri kapat","callSound":"Arama Sesi","cancel":"İPTAL","desktopNotifs":"Masaüstü Uyarıları","muteNotifications":"BİLDİRİMLERİ KAPAT","notificationSound":"Bildirim Sesi","prompterTitle":"Masaüstü bildirimleri sessize al;","showPreview":{"description":"Masaüstü uyarılarında mesaj içeriğini göster.","title":"Önizlemeyi göster"}},"privacy":{"lastSeenTitle":"Son görülme bilgimi kimler görebilir","onlineTitle":"Çevrimiçi olduğumu kimler görebilir,","avatarTitle":"Profil fotoğrafımı görebilenler","everyone":"Herkes","myContacts":"Kişilerim","myContactsExcept":{"avatarDescription":"{{ selectedAvatarContacts }} kişi hariç bırakıldı","lastseenDescription":"{{ selectedLastseenContacts }} kişi hariç bırakıldı","title":"Şunlar hariç kişilerim...","modalTitle":"Şunlar hariç kişilerim..."},"shareOnly":{"avatarDescription":"{{ selectedAvatarContacts }} kişi dahil edildi","lastseenDescription":"{{ selectedLastseenContacts }} kişi dahil edildi","title":"Sadece şu kişiler ile paylaş...","modalTitle":"Sadece şu kişiler ile paylaş..."},"privacySelectUser":{"shareOnly":"{{ selectedContactsLength }} kişi dahil edildi","myContactsExcept":"{{ selectedContactsLength }} kişi hariç bırakıldı"},"nobody":"Hiç kimse","sameAsLastSeen":"Son görülme bilgisiyle aynı","search":"Ara","selectAll":"Tümünü seç","message_contact_not_found":"Kişi bulunamadı."},"preview":{"file_drop_content":"Göndermek istediğiniz medya ve <br/> dökümanları buraya bırakın.","file_drop_title":"Sürükle Bırak","information":"Fotoğraf/Döküman eklediniz.","limit_overflow":"Üzgünüz, bir seferde {{limit}} medya öğesinden daha fazla  paylaşamazsınız.","max_size_exceeded":"İzin verilen 100 MB limitinden büyük.","more_file_added":"eklediniz.","one_file_added":"eklediniz.","page":"Sayfa","select_items_warning":"Liste boş lütfen bir medya ekleyin.","title":"Önizleme","not_have_content":"Eklemeye çalıştığınız dosyanın içeriği bulunmamaktadır."},"profile":{"about":"Hakkında","add":"Profil Resmi Ekleyin","avatar_error":"İşleminizi şu anda gerçekleştiremiyoruz","back":"Geri","block":"Engelle","block_contact":"Engellenen Kişi  <br/> Bulunmamaktadır.","change":"Profil Resmini Değiştirin","choose_photo":"Fotoğraf Yükle","close":"Kapat","contact_info":"Kişi Bilgisi","contact_us":"Bize Ulaşın","delete_photo":"Fotoğrafı Sil","desktop_contact_title":"Bize Ulaşın","desktop_profile_title":"Hesabım","desktop_settings_title":"Ayarlar","group_participants":"Katılımcı","idea":"Ne düşünüyorsun ?","last_seen":"Son Görülme","logout":"Çıkış Yap","name_info":"Bu sizin kullanıcı adınız veya pin kodunuz değil. Bu isim, BiP kişileriniz tarafından görülecektir.","nick":"İsim","no_status":"Durum Belirtilmemiş","notifications":"Bildirimler","phone_number":"Telefon Numarası","profile":"Profil","profile_name_input_error":"İsim boş bırakılamaz.","select_only_image":"Bu alana sadece resim yükleyebilirsiniz. Lütfen yüklemek istediğiniz resmi seçin ya da buraya sürükleyin.","select_or_drag_picture":"Fotoğrafı seçin veya sürükleyin","settings":"Ayarlar","unblock":"Engeli Kaldır","useHere":"Burada kullan","user_last_seen_unknown":"Kişi bilgisini görüntüle","user_online":"Çevrimiçi","view_photo":"Fotoğrafı Görüntüle","warning_delete":"Profil fotoğrafı silinsin mi ?","your_phone_number":"Telefon Numaranız","yourself":"Siz"},"recall":{"other":"Bu mesaj silindi","you":"Bu mesajı sildiniz"},"recallMessages":{"othersDeleted":"Bu mesaj silindi","youDeleted":"Bu mesajı sildiniz"},"rollout":{"desc":"BiP Beta kullanıcılarına özel sürüme geçmek için hemen &nbsp; %s1","link":"Tıklayın!","title":"BiP Web artık uçtan uca şifreli!"},"search":{"chat":"Sohbetler","contact":"Kişiler","find":"Sonuç bulunamadı","message":"Mesajlar","not_found":"Sohbet, kişi veya mesaj bulunamadı.","message_contact_not_found":"Sohbet ve kişi bulunamadı."},"sendContact":{"contacts":"Kişiler","last_chats":"Son sohbetler","no_contacts_found":"Kişi bulunamadı.","select_contacts":"Kişileri Seçin","selected_contacts":"Seçili Kişiler","sendcount":"{{ count }} kişi \\"{{ contactFullName }}\\" ile paylaşılsın mı?"},"settings":{"addBipArt":"%s1 Çizimleri Ekle","appearance":"Görünüm Ayarları","blocked":"Engellenenler ","blocked_contacts":"Engellenen Kişiler","change_theme":"Temayı değiştir","chatBackground":"Duvar Kağıdı","dark":"Gece Modu","delivery":"İletim Ayarları","desktopSettings":"Masaüstü Ayarları","help":"Yardım","invite_friends":"Davet Et","last_seen":"Son Görülme","light":"Gündüz Modu","notifications":"Bildirimler","play_call_sound":"Arama Sesi","play_sound":"Bildirim Sesi","privacy":"Gizlilik","read_receipt":"Okundu Bilgisi","show_content":"İçeriği Göster","theme":"Tema","web_alerts":"Web Bildirimleri"},"splash-page":{"description":"Bip Web başka bir pencerede açık. BİP Web’i bu pencerede kullanmak için \'Burada kullan\'a tıklayın.","loading":"BİP yükleniyor. Lütfen bekleyin…"},"status-message":{"batteryOptimization":{"batterySettings":" Lütfen telefonunuza gelen bildirimden Pil ayarlarınızı yapın.","info":"<a href=\'https://bip.com/tr/bip-deneyim-kilavuzu/\' target=\'_blank\'>Mesajlarınızı kaçırmamak için bip.com\'daki yönlendirmeleri takip ederek pil ayarlarınızı yapın.</a>","info_2":"%s1\'ten gelen hiçbir mesajı kaçırmamak için tıklayın ve telefonunuza gelen bildirimden pil ayarına onay verin.","title":"%s1\'ten Gelen Hiçbir Mesajı Kaçırmayın!"},"disconnect":{"info":"Telefonunuzun internet bağlantısını kontrol edin.","title":"Telefonunuz bağlı değil"},"low_battery":{"info":"%s1 Web\'e bağlı kalmaya devam etmek için telefonunuzu şarja takın.","title":"Telefonunuzun Şarjı Bitiyor."},"network_error":{"info":"Bilgisayarınızın internet bağlantısını kontrol edin.","title":"Bilgisayarınız bağlı değil"},"server_error":{"info":"Yeniden bağlantı kuruluyor. Lütfen bekleyiniz.","title":"Yeniden bağlanıyor..."},"updatable":{"guide":"Şimdi İndir","info":"%s1 Versiyon 01.03.01 ","title":"%s1 uygulamanız için güncellemeniz var."},"updated":{"info":"Lorem ipsum dolor sit amet!","title":"%s1 01.03.01 versiyonuna güncellendi."},"newVersionAvailable":{"title":"Güncellemeler Tamamlandı!","info":"Sohbetlerinizin yüklenmesi için lütfen sayfayı yenileyin."}},"sticker":{"title":"BiP Çıkartma Mağazası","detail":"Çıkartma Detayları","not-found":"Sonuç yok"},"tabs":{"discover":"Keşfet","games":"Oyunlar","message":"Mesaj"},"theme-select":{"cancel":{"title":"İptal"},"chooseTheme":"Tema Seçiniz","dark":"Koyu","light":"Açık","lilac":"Eflatun","nightBlue":"Gece Mavisi","okay":{"title":"Tamam"},"orange":"Turuncu"},"toast":{"error_default":", desteklenmeyen dosya biçimi","error_maxfile":"Üzgünüz, bir seferde %s1 medya öğesinden daha fazla paylaşamazsınız.","error_maxsize":"maksimum dosya boyutunu aştığı için yüklenemedi. (Max %s1) ","error_pattern":"uzantılı dökümanlar desteklenmediği için eklenemedi. "},"toggleDevTools":"Geliştirici Araçları","unit":{"days":"g","hours":"s","minutes":"dk","seconds":"sn"},"update":{"desktop-version":"{{name}} Desktop Sürüm: %s1","download":"Hemen İndir","loading":"BiP yükleniyor. Lütfen bekleyin... ","new_update":"BiP uygulaması için yeni bir güncelleme var","updated-version":"BiP %s1 versiyonuna güncellendi","version":"BiP Masaüstü Versiyon %s1","web-version":"{{name}} Web Sürüm: %s1"},"update-mobile":{"text":"BiP Web\'e giriş yapabilmek için telefonunuza en güncel BiP sürümünü yükleyin.","update":"Telefonunuzdan BiP\'i güncelleyin."},"update-page":{"chrome":{"name":"Google Chrome"},"firefox":{"name":"Mozilla Firefox"},"message":" BiP Web’i kullanmak için tarayıcınızı güncelleyin ya da Mozilla,Firefox, Safari, Microsoft Edge ve Opera kullanın.","microsoftEdge":{"name":"Microsoft Edge"},"opera":{"name":"Opera"},"safari":{"name":"Safari"},"update-browser-button":"Güncelle","yandex":{"name":"Yandex"}},"user":{"delete":"isimli kullanıcıyı gruptan çıkarıyorsunuz. Emin misiniz ?"},"userSearch":{"admin":"Grup Yöneticisi","kick_from_group":"Gruptan Çıkar","make_admin":"Yönetici Yap","no_contacts_found":"Kişi bulunamadı.","search_contacts":"Kullanıcı ara","send_message":"Mesaj ","title":"Katılımcıları Ara","you":"Siz"},"verify":{"logout-button":"Çıkış yap","message":"BiP Web başka bir pencerede açık. BiP Web’i bu pencerede kullanmak için “Burada Kullan”a tıklayın.","use-here-button":"Burada Kullan","warning_message":"{{name}} Web başka bir pencerede açık. {{name}} Web\'i bu pencerede kullanmak için \'Burada kullan\' a tıklayın."},"video":"Video","videoCall":"Görüntülü Arama","voice":{"ask_permission":"Ses kaydı yapabilmek için {{name}} Web’in bilgisayarınızın mikrofonuna erişmesi gerekiyor. Açılan uyarı ekranından izin verin.","done":"Tamam","error_permission":"Ses kaydı yapabilmek için {{name}} Web’in bilgisayarınızın mikrofonuna erişmesi gerekiyor. Tarayıcınızın ayarlarından web.{{name_lowercase}}.com için mikrofon kullanım izni verip yeniden deneyin.","no_permission":"Sesli mesaj kaydetmek için {{name}} Web’in, bilgisayarınızın mikrofonuna erişmesi gerekmektedir. Adres çubuğunda çıkan uyarıdan “web.{{name_lowercase}}.com adresinin mikrofonunuza erişmesine her zaman izin ver”i seçin.","title_permission":"Mikrofona izin ver","understood":"Anladım"},"voip":{"blockedContentWarning":"{{ title }} isimli bağlantı engelli durumda olduğu için aranamıyor.","browser_error":"Görüşmenizi başlatabilmeniz için Microsoft Edge son sürümünü yüklemelisiniz. Yüklemek için: <a target=\'_blank\' href=\\\\\\"https://www.microsoft.com/en-us/edge\\\\\\"> ","call_encrypt_text":"Uçtan Uca Şifreli","camera_denied":"Görüntülü arama yapabilmek için {{name}} Web’in bilgisayarınızın kamerasına ve mikrofonuna erişmesi gerekiyor. Tarayıcınızın ayarlarından <b>{{hostname}}</b> için kamera ve mikrofon kullanım izni verip yeniden deneyin.","camera_permission":"Görüntülü arama yapabilmek için {{name}} Web’in bilgisayarınızın kamera ve mikrofonuna erişmesi gerekiyor. Açılan uyarı ekranından izin verin.","camera_title_permission":"Kamera ve Mikrofon İzni Ver","done":"Tamam","incomingCall":"Gelen Arama","incomingVideoCall":"Gelen Görüntülü Arama","microphone_denied":"Sesli arama yapabilmek için {{name}} Web’in bilgisayarınızın mikrofonuna erişmesi gerekiyor. Tarayıcınızın ayarlarından <b>{{hostname}}</b> için mikrofon kullanım izni verip yeniden deneyin.","microphone_permission":"Sesli arama yapabilmek için {{name}} Web’in bilgisayarınızın mikrofonuna erişmesi gerekiyor. Açılan uyarı ekranından izin verin.","microphone_title_permission":"Mikrofon izni ver","outgoingCall":"Giden Arama","outgoingVideoCall":"Giden Görüntülü Arama","understood":"Tamam"},"waiting-page":{"header":"Telefonunuza ulaşılmaya çalışılıyor.","logout-button":"Çıkış yap","refresh-button":"Yenile","retry-message":"içinde tekrar denenecek...","retry-question":"Telefonunuzda internet bağlantısı olduğundan emin misiniz?","retrying":"Tekrar deneniyor...","second":"Saniye"},"warning":{"backup_setting_disable":"Yedekleme ayarınız kapalıdır. Lütfen mobil uygulamanızdan  Profil > Ayarlar > Sohbet Ayarları > Yedekle menüsünden yedekleme ayarınızı kontrol ediniz","connection_lost":"Bağlantı kurulamıyor. Lütfen internet erişiminizi kontrol ediniz.","invalidFileWarn":"Geçersiz bir dosya tipi seçtiniz. Lütfen farklı bir dosya seçiniz.","message":"Bip Web başka bir pencerede açık. BİP Web’i bu pencerede kullanmak için \'Burada kullan\'a tıklayın.","refresh_page":"Tekrar deneyin."},"reaction":{"all_reactions":"Tümü","you_react":"Şu mesaja \'{{emoji}}\' ifadesini bıraktınız: {{type}}","react":"{{user}} şu mesaja \'{{emoji}}\' ifadesini bıraktı: {{type}}","remove":"Kaldırmak için dokunun","react_to_message":"Mesaja ifade bırak"},"unread_filter":{"clear":"Filtreyi temizle","filtered":"Okunmamış sohbetlere göre filtrelendi","no_result":"Sonuç Bulunamadı","none":"Okunmamış sohbet yok","search":"Okunmamış sohbetlerde ara","text":"Okunmamış sohbetler filtresi"},"poll":{"poll":"Anket","question":"Soru","createPoll":"Anket Oluştur","editPoll":"Anket Düzenle","askQuestion":"Sorunuzu yazın","addOption":"Seçenek ekle","moreOptions":"{{ remainingCount }} seçenek daha ekleyebilirsiniz.","optionExists":"Bu seçenek mevcut","settings":"Ayarlar","anonymousVoting":"Anonim Oylama","multipleAnswer":"Çoklu Cevap","quizMode":"Test Modu","quizModeDescription":"Test modundaki anketlerin bir doğru cevabı vardır. Kullanıcılar cevaplarını iptal edemez","expireTime":"Anket Süresi","date":"Tarih","hour":"Saat","unlimited":"Süresiz","custom":"Özel","hourFormat":"{{ hour }} Saat","dayFormat":"{{ day }} Gün","weekFormat":"{{ week }} Hafta","monthFormat":"{{ month }} Ay","endTimeCannotBeEarlier":"Anket bitiş saati, mevcut tarihten önce olamaz.","endTimeMustBeAtLeast":"Anket bitiş saati en az %@ saat sonrası olmalı. Lütfen saati yeniden ayarlayın.","remainingCharacter":"%@ karakter kaldı","maxOptionsReached":"Maksimum sayıda seçenek eklediniz","description":"Açıklama Ekle (Opsiyonel)","wrongAnswerText":"Test modundaki anketlerin bir doğru cevabı vardır. Kullanıcılar cevaplarını iptal edemez.","expireDate":"Son Katılım Tarihi: {{ expireDate }}","noOneHasRespondedYet":"Henüz kimse cevap vermedi.","viewResults":"Sonuçları Görüntüle","pollResults":"Anket Sonuçları","quizResults":"Test Sonuçları","xVoted":"{{ totalVoters }} kişi cevapladı","vote":"Oy Ver","anonymousPoll":"Anonim Anket","quiz":"Test","anonymousQuiz":"Anonim Test","endPoll":"Anketi Bitir","endPollConfirmation":"Bu anketi sonlandırmak istediğinize emin misiniz? Bundan sonra oy vermek mümkün olmayacak.","edit":"Düzenle","update":"Güncelle","confirmDeletePoll":"Anketi silmek istediğinize emin misiniz?","keepEditing":"Düzenlemeye devam et","deletePoll":"Anketi Sil","pollDetails":"Anket Detayları","pollEndDate":"Anket Bitiş Tarihi","xVotes":"{{voteCount}} Oy","send":"Gönder","yOfXVoted":"{{totalVoters}} katılımcıdan {{currentVoters}} tanesi oy verdi.","cancelPollConfirmation":"Anketi iptal etmek istediğinize emin misiniz?","readMore":"Devamını okuyun"}}')},function(e,n,t){e.exports=t(196)},function(e,n,t){"use strict";const i=t(0),a=t(77),{download:o}=t(88),r=t(101),s=e=>e.webContents||e.id&&e,c=e=>(n={})=>(n.transform&&!n.click&&(e.transform=n.transform),e),l=(e,n)=>{const t=(t,l)=>{if("function"==typeof n.shouldShowMenu&&!1===n.shouldShowMenu(t,l))return;const{editFlags:u}=l,p=l.selectionText.trim().length>0,d=Boolean(l.linkURL),m=e=>u["can"+e]&&p,f={separator:()=>({type:"separator"}),learnSpelling:c({id:"learnSpelling",label:"&Learn Spelling",visible:Boolean(l.isEditable&&p&&l.misspelledWord),click(){s(e).session.addWordToSpellCheckerDictionary(l.misspelledWord)}}),lookUpSelection:c({id:"lookUpSelection",label:"Look Up “{selection}”",visible:"darwin"===process.platform&&p&&!d,click(){"darwin"===process.platform&&s(e).showDefinitionForSelection()}}),searchWithGoogle:c({id:"searchWithGoogle",label:"&Search with Google",visible:p,click(){const e=new URL("https://www.google.com/search");e.searchParams.set("q",l.selectionText),i.shell.openExternal(e.toString())}}),cut:c({id:"cut",label:"Cu&t",enabled:m("Cut"),visible:l.isEditable,click(n){const t=s(e);!n.transform&&t?t.cut():(l.selectionText=n.transform?n.transform(l.selectionText):l.selectionText,i.clipboard.writeText(l.selectionText))}}),copy:c({id:"copy",label:"&Copy",enabled:m("Copy"),visible:l.isEditable||p,click(n){const t=s(e);!n.transform&&t?t.copy():(l.selectionText=n.transform?n.transform(l.selectionText):l.selectionText,i.clipboard.writeText(l.selectionText))}}),paste:c({id:"paste",label:"&Paste",enabled:u.canPaste,visible:l.isEditable,click(n){const t=s(e);if(n.transform){let e=i.clipboard.readText(l.selectionText);e=n.transform?n.transform(e):e,t.insertText(e)}else t.paste()}}),saveImage:c({id:"saveImage",label:"Save I&mage",visible:"image"===l.mediaType,click(n){l.srcURL=n.transform?n.transform(l.srcURL):l.srcURL,o(e,l.srcURL)}}),saveImageAs:c({id:"saveImageAs",label:"Sa&ve Image As…",visible:"image"===l.mediaType,click(n){l.srcURL=n.transform?n.transform(l.srcURL):l.srcURL,o(e,l.srcURL,{saveAs:!0})}}),copyLink:c({id:"copyLink",label:"Copy Lin&k",visible:l.linkURL.length>0&&"none"===l.mediaType,click(e){l.linkURL=e.transform?e.transform(l.linkURL):l.linkURL,i.clipboard.write({bookmark:l.linkText,text:l.linkURL})}}),saveLinkAs:c({id:"saveLinkAs",label:"Save Link As…",visible:l.linkURL.length>0&&"none"===l.mediaType,click(n){l.linkURL=n.transform?n.transform(l.linkURL):l.linkURL,o(e,l.linkURL,{saveAs:!0})}}),copyImage:c({id:"copyImage",label:"Cop&y Image",visible:"image"===l.mediaType,click(){s(e).copyImageAt(l.x,l.y)}}),copyImageAddress:c({id:"copyImageAddress",label:"C&opy Image Address",visible:"image"===l.mediaType,click(e){l.srcURL=e.transform?e.transform(l.srcURL):l.srcURL,i.clipboard.write({bookmark:l.srcURL,text:l.srcURL})}}),inspect:()=>({id:"inspect",label:"I&nspect Element",click(){e.inspectElement(l.x,l.y),s(e).isDevToolsOpened()&&s(e).devToolsWebContents.focus()}}),services:()=>({id:"services",label:"Services",role:"services",visible:"darwin"===process.platform&&(l.isEditable||p)})},h="boolean"==typeof n.showInspectElement?n.showInspectElement:r;let g=[];p&&l.misspelledWord&&l.dictionarySuggestions.length>0?g=l.dictionarySuggestions.map(n=>function(n){return{id:"dictionarySuggestions",label:n,visible:Boolean(l.isEditable&&p&&l.misspelledWord),click(n){s(e).replaceMisspelling(n.label)}}}(n)):g.push({id:"dictionarySuggestions",label:"No Guesses Found",visible:Boolean(p&&l.misspelledWord),enabled:!1});let v=[g.length>0&&f.separator(),...g,f.separator(),f.learnSpelling(),f.separator(),!1!==n.showLookUpSelection&&f.lookUpSelection(),f.separator(),!1!==n.showSearchWithGoogle&&f.searchWithGoogle(),f.separator(),f.cut(),f.copy(),f.paste(),f.separator(),n.showSaveImage&&f.saveImage(),n.showSaveImageAs&&f.saveImageAs(),!1!==n.showCopyImage&&f.copyImage(),n.showCopyImageAddress&&f.copyImageAddress(),f.separator(),f.copyLink(),n.showSaveLinkAs&&f.saveLinkAs(),f.separator(),h&&f.inspect(),n.showServices&&f.services(),f.separator()];if(n.menu&&(v=n.menu(f,l,e,g,t)),n.prepend){const i=n.prepend(f,l,e,t);Array.isArray(i)&&v.unshift(...i)}if(n.append){const i=n.append(f,l,e,t);Array.isArray(i)&&v.push(...i)}v=(e=>{let n;return e.filter(e=>void 0!==e&&!1!==e&&!1!==e.visible&&""!==e.visible).filter((e,t,i)=>{const a="separator"===e.type&&(!n||t===i.length-1||"separator"===i[t+1].type);return n=a?n:e,!a})})(v);for(const e of v)if(n.labels&&n.labels[e.id]&&(e.label=n.labels[e.id]),"string"==typeof e.label&&e.label.includes("{selection}")){const n="string"==typeof l.selectionText?l.selectionText.trim():"";e.label=e.label.replace("{selection}",a(n,25).replace(/&/g,"&&"))}if(v.length>0){i.Menu.buildFromTemplate(v).popup(e)}};return s(e).on("context-menu",t),()=>{e.isDestroyed()||s(e).removeListener("context-menu",t)}};e.exports=(e={})=>{if("renderer"===process.type)throw new Error("Cannot use electron-context-menu in the renderer process!");let n=!1;const t=[],a=i=>{if(n)return;const a=l(i,e);t.push(a);const o=()=>{const e=t.indexOf(a);-1!==e&&t.splice(e,1)};void 0!==i.once&&i.once("closed",o),t.push(()=>{i.off("closed",o)})},o=()=>{for(const e of t)e();t.length=0,n=!0};if(e.window){const n=e.window;if(void 0===s(n)){const e=()=>{a(n)};return(n.addEventListener||n.addListener)("dom-ready",e,{once:!0}),t.push(()=>{n.removeEventListener("dom-ready",e,{once:!0})}),o}return a(n),o}for(const e of i.BrowserWindow.getAllWindows())a(e);const r=(e,n)=>{a(n)};return i.app.on("browser-window-created",r),t.push(()=>{i.app.removeListener("browser-window-created",r)}),o}},function(e,n,t){"use strict";const i=t(78),a=t(84);function o(e,n,t){if(" "===e.charAt(n))return n;for(let i=1;i<=3;i++)if(t){if(" "===e.charAt(n+i))return n+i}else if(" "===e.charAt(n-i))return n-i;return n}e.exports=(e,n,t)=>{t={position:"end",preferTruncationOnSpace:!1,...t};const{position:r,space:s,preferTruncationOnSpace:c}=t;let l="…",u=1;if("string"!=typeof e)throw new TypeError("Expected `input` to be a string, got "+typeof e);if("number"!=typeof n)throw new TypeError("Expected `columns` to be a number, got "+typeof n);if(n<1)return"";if(1===n)return l;const p=a(e);if(p<=n)return e;if("start"===r){if(c){const t=o(e,p-n+1,!0);return l+i(e,t,p).trim()}return!0===s&&(l+=" ",u=2),l+i(e,p-n+u,p)}if("middle"===r){!0===s&&(l=" "+l+" ",u=3);const t=Math.floor(n/2);if(c){const a=o(e,t),r=o(e,p-(n-t)+1,!0);return i(e,0,a)+l+i(e,r,p).trim()}return i(e,0,t)+l+i(e,p-(n-t)+u,p)}if("end"===r){if(c){const t=o(e,n-1);return i(e,0,t)+l}return!0===s&&(l=" "+l,u=2),i(e,0,n-u)+l}throw new Error("Expected `options.position` to be either `start`, `middle` or `end`, got "+r)}},function(e,n,t){"use strict";const i=t(47),a=t(79),o=t(80),r=["",""],s=e=>`${r[0]}[${e}m`,c=(e,n,t)=>{let i=[];e=[...e];for(let t of e){const a=t;t.match(";")&&(t=t.split(";")[0][0]+"0");const r=o.codes.get(parseInt(t,10));if(r){const t=e.indexOf(r.toString());t>=0?e.splice(t,1):i.push(s(n?r:a))}else{if(n){i.push(s(0));break}i.push(s(a))}}if(n&&(i=i.filter((e,n)=>i.indexOf(e)===n),void 0!==t)){const e=s(o.codes.get(parseInt(t,10)));i=i.reduce((n,t)=>t===e?[t,...n]:[...n,t],[])}return i.join("")};e.exports=(e,n,t)=>{const o=[...e.normalize()],s=[];t="number"==typeof t?t:o.length;let l,u=!1,p=0,d="";for(const[m,f]of o.entries()){let o=!1;if(r.includes(f)){const n=/\d[^m]*/.exec(e.slice(m, m + 18));
        l = n && n.length > 0 ? n[0] : void 0, p < t && (u = !0, void 0 !== l && s.push(l))
        }
        else
            u && "m" === f && (u = !1, o = !0);
        if (u || o || ++p, !a({
                exact: !0
            }).test(f) && i(f.codePointAt()) && ++p, p > n && p <= t)
            d += f;
        else if (p !== n || u || void 0 === l) {
            if (p >= t) {
                d += c(s, !0, l);
                break
            }
        } else
            d = c(s)
        }
        return d
        }
        }, function (e, n, t) {
            "use strict";
            e.exports = e => e && e.exact ? new RegExp("^[\ud800-\udbff][\udc00-\udfff]$") : new RegExp("[\ud800-\udbff][\udc00-\udfff]", "g")
        }, function (e, n, t) {
            "use strict";
            (function (e) {
                const n = (e, n) => (...t) => `[${e(...t) + n}m`,
                i = (e, n) => (...t) => {
                    const i = e(...t);
                    return `[${38 + n};5;${i}m`
                },
                a = (e, n) => (...t) => {
                    const i = e(...t);
                    return `[${38 + n};2;${i[0]};${i[1]};${i[2]}m`
                },
                o = e => e,
                r = (e, n, t) => [e, n, t],
                s = (e, n, t) => {
                    Object.defineProperty(e, n, {
                        get: () => {
                            const i = t();
                            return Object.defineProperty(e, n, {
                                value: i,
                                enumerable: !0,
                                configurable: !0
                            }),
                            i
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                };
                let c;
                const l = (e, n, i, a) => {
                    void 0 === c && (c = t(81));
                    const o = a ? 10 : 0,
                    r = {};
                    for (const [t, a] of Object.entries(c)) {
                        const s = "ansi16" === t ? "ansi" : t;
                        t === n ? r[s] = e(i, o) : "object" == typeof a && (r[s] = e(a[n], o))
                    }
                    return r
                };
                Object.defineProperty(e, "exports", {
                    enumerable: !0,
                    get: function () {
                        const e = new Map,
                        t = {
                            modifier: {
                                reset: [0, 0],
                                bold: [1, 22],
                                dim: [2, 22],
                                italic: [3, 23],
                                underline: [4, 24],
                                inverse: [7, 27],
                                hidden: [8, 28],
                                strikethrough: [9, 29]
                            },
                            color: {
                                black: [30, 39],
                                red: [31, 39],
                                green: [32, 39],
                                yellow: [33, 39],
                                blue: [34, 39],
                                magenta: [35, 39],
                                cyan: [36, 39],
                                white: [37, 39],
                                blackBright: [90, 39],
                                redBright: [91, 39],
                                greenBright: [92, 39],
                                yellowBright: [93, 39],
                                blueBright: [94, 39],
                                magentaBright: [95, 39],
                                cyanBright: [96, 39],
                                whiteBright: [97, 39]
                            },
                            bgColor: {
                                bgBlack: [40, 49],
                                bgRed: [41, 49],
                                bgGreen: [42, 49],
                                bgYellow: [43, 49],
                                bgBlue: [44, 49],
                                bgMagenta: [45, 49],
                                bgCyan: [46, 49],
                                bgWhite: [47, 49],
                                bgBlackBright: [100, 49],
                                bgRedBright: [101, 49],
                                bgGreenBright: [102, 49],
                                bgYellowBright: [103, 49],
                                bgBlueBright: [104, 49],
                                bgMagentaBright: [105, 49],
                                bgCyanBright: [106, 49],
                                bgWhiteBright: [107, 49]
                            }
                        };
                        t.color.gray = t.color.blackBright,
                        t.bgColor.bgGray = t.bgColor.bgBlackBright,
                        t.color.grey = t.color.blackBright,
                        t.bgColor.bgGrey = t.bgColor.bgBlackBright;
                        for (const [n, i] of Object.entries(t)) {
                            for (const [n, a] of Object.entries(i))
                                t[n] = {
                                    open: `[${a[0]}m`,
                                    close: `[${a[1]}m`
                                },
                            i[n] = t[n],
                            e.set(a[0], a[1]);
                            Object.defineProperty(t, n, {
                                value: i,
                                enumerable: !1
                            })
                        }
                        return Object.defineProperty(t, "codes", {
                            value: e,
                            enumerable: !1
                        }),
                        t.color.close = "[39m",
                        t.bgColor.close = "[49m",
                        s(t.color, "ansi", () => l(n, "ansi16", o, !1)),
                        s(t.color, "ansi256", () => l(i, "ansi256", o, !1)),
                        s(t.color, "ansi16m", () => l(a, "rgb", r, !1)),
                        s(t.bgColor, "ansi", () => l(n, "ansi16", o, !0)),
                        s(t.bgColor, "ansi256", () => l(i, "ansi256", o, !0)),
                        s(t.bgColor, "ansi16m", () => l(a, "rgb", r, !0)),
                        t
                    }
                })
            }).call(this, t(48)(e))
        }, function (e, n, t) {
            const i = t(49),
            a = t(83),
            o = {};
            Object.keys(i).forEach(e => {
                o[e] = {},
                Object.defineProperty(o[e], "channels", {
                    value: i[e].channels
                }),
                Object.defineProperty(o[e], "labels", {
                    value: i[e].labels
                });
                const n = a(e);
                Object.keys(n).forEach(t => {
                    const i = n[t];
                    o[e][t] = function (e) {
                        const n = function (...n) {
                            const t = n[0];
                            if (null == t)
                                return t;
                            t.length > 1 && (n = t);
                            const i = e(n);
                            if ("object" == typeof i)
                                for (let e = i.length, n = 0; n < e; n++)
                                    i[n] = Math.round(i[n]);
                            return i
                        };
                        return "conversion" in e && (n.conversion = e.conversion),
                        n
                    }
                    (i),
                    o[e][t].raw = function (e) {
                        const n = function (...n) {
                            const t = n[0];
                            return null == t ? t : (t.length > 1 && (n = t), e(n))
                        };
                        return "conversion" in e && (n.conversion = e.conversion),
                        n
                    }
                    (i)
                })
            }),
            e.exports = o
        }, function (e, n, t) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, function (e, n, t) {
            const i = t(49);
            function a(e) {
                const n = function () {
                    const e = {},
                    n = Object.keys(i);
                    for (let t = n.length, i = 0; i < t; i++)
                        e[n[i]] = {
                            distance: -1,
                            parent: null
                        };
                    return e
                }
                (),
                t = [e];
                for (n[e].distance = 0; t.length; ) {
                    const e = t.pop(),
                    a = Object.keys(i[e]);
                    for (let i = a.length, o = 0; o < i; o++) {
                        const i = a[o],
                        r = n[i];
                        -1 === r.distance && (r.distance = n[e].distance + 1, r.parent = e, t.unshift(i))
                    }
                }
                return n
            }
            function o(e, n) {
                return function (t) {
                    return n(e(t))
                }
            }
            function r(e, n) {
                const t = [n[e].parent, e];
                let a = i[n[e].parent][e],
                r = n[e].parent;
                for (; n[r].parent; )
                    t.unshift(n[r].parent), a = o(i[n[r].parent][r], a), r = n[r].parent;
                return a.conversion = t,
                a
            }
            e.exports = function (e) {
                const n = a(e),
                t = {},
                i = Object.keys(n);
                for (let e = i.length, a = 0; a < e; a++) {
                    const e = i[a];
                    null !== n[e].parent && (t[e] = r(e, n))
                }
                return t
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(85),
            a = t(47),
            o = t(87),
            r = e => {
                if ("string" != typeof e || 0 === e.length)
                    return 0;
                if (0 === (e = i(e)).length)
                    return 0;
                e = e.replace(o(), "  ");
                let n = 0;
                for (let t = 0; t < e.length; t++) {
                    const i = e.codePointAt(t);
                    i <= 31 || i >= 127 && i <= 159 || (i >= 768 && i <= 879 || (i > 65535 && t++, n += a(i) ? 2 : 1))
                }
                return n
            };
            e.exports = r,
            e.exports.default = r
        }, function (e, n, t) {
            "use strict";
            const i = t(86);
            e.exports = e => "string" == typeof e ? e.replace(i(), "") : e
        }, function (e, n, t) {
            "use strict";
            e.exports = ({
                onlyFirst: e = !1
            } = {}) => {
                const n = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
                return new RegExp(n, e ? void 0 : "g")
            }
        }, function (e, n, t) {
            "use strict";
            e.exports = function () {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(1), {
                app : a,
                BrowserWindow : o,
                shell : r,
                dialog : s
            } = t(0),
            c = t(89),
            l = t(92),
            u = t(94);
            class p extends Error {}
            const d = e => {
                let n;
                switch (e.getType()) {
                case "webview":
                    n = o.fromWebContents(e.hostWebContents);
                    break;
                case "browserView":
                    n = (e => {
                        for (const n of o.getAllWindows())
                            for (const t of n.getBrowserViews())
                                if (t.webContents.id === e.id)
                                    return n
                    })(e);
                    break;
                default:
                    n = o.fromWebContents(e)
                }
                return n
            };
            function m(e, n, t = (() => {})) {
                const s = new Set;
                let m = 0,
                f = 0,
                h = 0;
                const g = () => s.size,
                v = () => m / h;
                n = {
                    showBadge: !0,
                    showProgressBar: !0,
                    ...n
                };
                const b = (x, y, D) => {
                    s.add(y),
                    h += y.getTotalBytes();
                    const w = (() => {
                        const e = process.versions.electron.split(".");
                        return Number.parseInt(e[0], 10)
                    })() >= 12 ? o.fromWebContents(D) : d(D);
                    if (n.directory && !i.isAbsolute(n.directory))
                        throw new Error("The `directory` option must be an absolute path");
                    const k = n.directory || a.getPath("downloads");
                    let E;
                    if (n.filename)
                        E = i.join(k, n.filename);
                    else {
                        const e = y.getFilename(),
                        t = i.extname(e) ? e : ((e, n) => {
                            const t = u.mime(n);
                            return 1 !== t.length ? e : `${e}.${t[0].ext}`
                        })(e, y.getMimeType());
                        E = n.overwrite ? i.join(k, t) : c.sync(i.join(k, t))
                    }
                    const _ = n.errorMessage || "The download of {filename} was interrupted";
                    n.saveAs ? y.setSaveDialogOptions({
                        defaultPath: E,
                        ...n.dialogOptions
                    }) : y.setSavePath(E),
                    y.on("updated", () => {
                        m = f;
                        for (const e of s)
                            m += e.getReceivedBytes();
                        if (n.showBadge && ["darwin", "linux"].includes(process.platform) && (a.badgeCount = g()), !w.isDestroyed() && n.showProgressBar && w.setProgressBar(v()), "function" == typeof n.onProgress) {
                            const e = y.getReceivedBytes(),
                            t = y.getTotalBytes();
                            n.onProgress({
                                percent: t ? e / t : 0,
                                transferredBytes: e,
                                totalBytes: t
                            })
                        }
                        "function" == typeof n.onTotalProgress && n.onTotalProgress({
                            percent: v(),
                            transferredBytes: m,
                            totalBytes: h
                        })
                    }),
                    y.on("done", (o, c) => {
                        if (f += y.getTotalBytes(), s.delete(y), n.showBadge && ["darwin", "linux"].includes(process.platform) && (a.badgeCount = g()), w.isDestroyed() || g() || (w.setProgressBar(-1), m = 0, f = 0, h = 0), n.unregisterWhenDone && e.removeListener("will-download", b), "cancelled" === c)
                            "function" == typeof n.onCancel && n.onCancel(y), t(new p);
                        else if ("interrupted" === c) {
                            const e = l(_, {
                                filename: i.basename(E)
                            });
                            t(new Error(e))
                        } else if ("completed" === c) {
                            const e = y.getSavePath();
                            "darwin" === process.platform && a.dock.downloadFinished(e),
                            n.openFolderWhenDone && r.showItemInFolder(e),
                            "function" == typeof n.onCompleted && n.onCompleted({
                                fileName: y.getFilename(),
                                filename: y.getFilename(),
                                path: e,
                                fileSize: y.getReceivedBytes(),
                                mimeType: y.getMimeType(),
                                url: y.getURL()
                            }),
                            t(null, y)
                        }
                    }),
                    "function" == typeof n.onStarted && n.onStarted(y)
                };
                e.on("will-download", b)
            }
            e.exports = (e = {}) => {
                a.on("session-created", n => {
                    m(n, e, (n, t) => {
                        if (n && !(n instanceof p)) {
                            const t = e.errorTitle || "Download Error";
                            s.showErrorBox(t, n.message)
                        }
                    })
                })
            },
            e.exports.download = (e, n, t) => new Promise((i, a) => {
                t = {
                    ...t,
                    unregisterWhenDone: !0
                },
                m(e.webContents.session, t, (e, n) => {
                    e ? a(e) : i(n)
                }),
                e.webContents.downloadURL(n)
            }),
            e.exports.CancelError = p
        }, function (e, n, t) {
            "use strict";
            const i = t(90),
            a = t(91),
            o = e => {
                let n = 0;
                return () => a(e, (e, t) => `${e} (${++n})${t}`)
            },
            r = e => {
                const n = o(e),
                t = async e => await i(e) ? t(n()) : e;
                return t(e)
            };
            e.exports = r,
            e.exports.default = r,
            e.exports.sync = e => {
                const n = o(e),
                t = e => i.sync(e) ? t(n()) : e;
                return t(e)
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(6), {
                promisify : a
            } = t(12),
            o = a(i.access);
            e.exports = async e => {
                try {
                    return await o(e),
                    !0
                } catch (e) {
                    return !1
                }
            },
            e.exports.sync = e => {
                try {
                    return i.accessSync(e),
                    !0
                } catch (e) {
                    return !1
                }
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(1);
            e.exports = function e(n, t) {
                if (2 !== arguments.length)
                    throw new Error("`path` and `modifier` required");
                if (Array.isArray(n))
                    return n.map((function (n) {
                            return e(n, t)
                        }));
                var a = i.extname(n);
                return i.join(i.dirname(n), t(i.basename(n, a), a))
            }
        }, function (e, n, t) {
            "use strict";
            const { htmlEscape: i } = t(93);
            e.exports = (e, n) => {
                if ("string" != typeof e)
                    throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof e}\``);
                if ("object" != typeof n)
                    throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof n}\``);
                const t = /{{(\d+|[a-z$_][a-z\d$_]*?(?:\.[a-z\d$_]*?)*?)}}/gi;
                t.test(e) && (e = e.replace(t, (e, t) => {
                        let a = n;
                        for (const e of t.split("."))
                            a = a ? a[e] : "";
                        return i(String(a))
                    }));
                return e.replace(/{(\d+|[a-z$_][a-z\d$_]*?(?:\.[a-z\d$_]*?)*?)}/gi, (e, t) => {
                    let i = n;
                    for (const e of t.split("."))
                        i = i ? i[e] : "";
                    return String(i)
                })
            }
        }, function (e, n, t) {
            "use strict";
            n.htmlEscape = e => e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
            n.htmlUnescape = e => e.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&#0?39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
            n.htmlEscapeTag = (e, ...t) => {
                let i = e[0];
                for (let a = 0; a < t.length; a++)
                    i = i + n.htmlEscape(String(t[a])) + e[a + 1];
                return i
            },
            n.htmlUnescapeTag = (e, ...t) => {
                let i = e[0];
                for (let a = 0; a < t.length; a++)
                    i = i + n.htmlUnescape(String(t[a])) + e[a + 1];
                return i
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(95),
            a = t(98);
            e.exports = e => {
                const n = a.desc(i()),
                t = Object.keys(n).filter(n => e.endsWith(n));
                return 0 === t.length ? [] : t.map(e => ({
                        ext: e,
                        mime: n[e]
                    }))
            },
            e.exports.mime = e => {
                const n = a.desc(i()),
                t = Object.keys(n).filter(t => n[t] === e);
                return 0 === t.length ? [] : t.map(e => ({
                        ext: e,
                        mime: n[e]
                    }))
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(96);
            e.exports = function () {
                var e = {};
                return Object.keys(i).forEach((function (n) {
                        var t = i[n];
                        t.extensions && t.extensions.length > 0 && t.extensions.forEach((function (t) {
                                e[t] = n
                            }))
                    })),
                e
            }
        }, function (e, n, t) {
            /*!
             * mime-db
             * Copyright(c) 2014 Jonathan Ong
             * Copyright(c) 2015-2022 Douglas Christopher Wilson
             * MIT Licensed
             */
            e.exports = t(97)
        }, function (e) {
            e.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/ace+json":{"source":"iana","compressible":true},"application/ace-groupcomm+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/aif+cbor":{"source":"iana"},"application/aif+json":{"source":"iana","compressible":true},"application/alto-cdni+json":{"source":"iana","compressible":true},"application/alto-cdnifilter+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-propmap+json":{"source":"iana","compressible":true},"application/alto-propmapparams+json":{"source":"iana","compressible":true},"application/alto-tips+json":{"source":"iana","compressible":true},"application/alto-tipsparams+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/appinstaller":{"compressible":false,"extensions":["appinstaller"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/appx":{"compressible":false,"extensions":["appx"]},"application/appxbundle":{"compressible":false,"extensions":["appxbundle"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/automationml-aml+xml":{"source":"iana","compressible":true,"extensions":["aml"]},"application/automationml-amlx+zip":{"source":"iana","compressible":false,"extensions":["amlx"]},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/bufr":{"source":"iana"},"application/c2pa":{"source":"iana"},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/cid-edhoc+cbor-seq":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/concise-problem-details+cbor":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cose-x509":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwl":{"source":"iana","extensions":["cwl"]},"application/cwl+json":{"source":"iana","compressible":true},"application/cwl+yaml":{"source":"iana"},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dpop+jwt":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"apache","compressible":true,"extensions":["ecma"]},"application/edhoc+cbor-seq":{"source":"iana"},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.legacyesn+json":{"source":"iana","compressible":true},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdf":{"source":"iana","extensions":["fdf"]},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+json":{"source":"iana","compressible":true},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gnap-binding-jws":{"source":"iana"},"application/gnap-binding-jwsd":{"source":"iana"},"application/gnap-binding-rotation-jws":{"source":"iana"},"application/gnap-binding-rotation-jwsd":{"source":"iana"},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/grib":{"source":"iana"},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"iana","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"apache","charset":"UTF-8","compressible":true,"extensions":["js"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/jscontact+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jsonpath":{"source":"iana"},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/linkset":{"source":"iana"},"application/linkset+json":{"source":"iana","compressible":true},"application/load-control+xml":{"source":"iana","compressible":true},"application/logout+jwt":{"source":"iana"},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4","mpg4","mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msix":{"compressible":false,"extensions":["msix"]},"application/msixbundle":{"compressible":false,"extensions":["msixbundle"]},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/ohttp-keys":{"source":"iana"},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["sig","asc"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/private-token-issuer-directory":{"source":"iana"},"application/private-token-request":{"source":"iana"},"application/private-token-response":{"source":"iana"},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.implied-document+xml":{"source":"iana","compressible":true},"application/prs.implied-executable":{"source":"iana"},"application/prs.implied-object+json":{"source":"iana","compressible":true},"application/prs.implied-object+json-seq":{"source":"iana"},"application/prs.implied-object+yaml":{"source":"iana"},"application/prs.implied-structure":{"source":"iana"},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.vcfbzip2":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true,"extensions":["xsf"]},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"apache"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-checklist":{"source":"iana"},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-signed-tal":{"source":"iana"},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"apache"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana","extensions":["sql"]},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/st2110-41":{"source":"iana"},"application/stix+json":{"source":"iana","compressible":true},"application/stratum":{"source":"iana"},"application/swid+cbor":{"source":"iana"},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tm+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vc":{"source":"iana"},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.1ob":{"source":"iana"},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3a+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ach+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc8+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.5gsa2x":{"source":"iana"},"application/vnd.3gpp.5gsa2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.crs+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.current-location-discovery+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-msgstore-ctrl-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-regroup+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-regroup+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-regroup+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.pinapp-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.seal-group-doc+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-network-qos-management-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-ue-config-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-unicast-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.seal-user-profile-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.v2x":{"source":"iana"},"application/vnd.3gpp.vae-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acm.addressxfer+json":{"source":"iana","compressible":true},"application/vnd.acm.chatbot+json":{"source":"iana","compressible":true},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"apache","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"apache"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.parquet":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.apexlang":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"apache"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.belightsoft.lhzd+zip":{"source":"iana","compressible":false},"application/vnd.belightsoft.lhzl+zip":{"source":"iana","compressible":false},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.bzip3":{"source":"iana"},"application/vnd.c3voc.schedule+xml":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.cncf.helm.chart.content.v1.tar+gzip":{"source":"iana"},"application/vnd.cncf.helm.chart.provenance.v1.prov":{"source":"iana"},"application/vnd.cncf.helm.config.v1+json":{"source":"iana","compressible":true},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datalog":{"source":"iana"},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.eln+zip":{"source":"iana","compressible":false},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.erofs":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"apache","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.freelog.comic":{"source":"iana"},"application/vnd.frogans.fnc":{"source":"apache","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"apache","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.ga4gh.passport+jwt":{"source":"iana"},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.genozip":{"source":"iana"},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.gentoo.catmetadata+xml":{"source":"iana","compressible":true},"application/vnd.gentoo.ebuild":{"source":"iana"},"application/vnd.gentoo.eclass":{"source":"iana"},"application/vnd.gentoo.gpkg":{"source":"iana"},"application/vnd.gentoo.manifest":{"source":"iana"},"application/vnd.gentoo.pkgmetadata+xml":{"source":"iana","compressible":true},"application/vnd.gentoo.xpak":{"source":"iana"},"application/vnd.geo+json":{"source":"apache","compressible":true},"application/vnd.geocube+xml":{"source":"apache","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana","extensions":["ggs"]},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.gnu.taler.exchange+json":{"source":"iana","compressible":true},"application/vnd.gnu.taler.merchant+json":{"source":"iana","compressible":true},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"apache","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true,"extensions":["xdcf"]},"application/vnd.gpxsee.map+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.hsl":{"source":"iana"},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"apache"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"apache","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"apache"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.ipfs.ipns-record":{"source":"iana"},"application/vnd.ipld.car":{"source":"iana"},"application/vnd.ipld.dag-cbor":{"source":"iana"},"application/vnd.ipld.dag-json":{"source":"iana"},"application/vnd.ipld.raw":{"source":"iana"},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.ldev.productlicensing":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.mdl":{"source":"iana"},"application/vnd.mdl-mbsdf":{"source":"iana"},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.medicalholodeck.recordxr":{"source":"iana"},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mermaid":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.modl":{"source":"iana"},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msgpack":{"source":"iana"},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.nato.bindingdataobject+cbor":{"source":"iana"},"application/vnd.nato.bindingdataobject+json":{"source":"iana","compressible":true},"application/vnd.nato.bindingdataobject+xml":{"source":"iana","compressible":true,"extensions":["bdo"]},"application/vnd.nato.openxmlformats-package.iepd+zip":{"source":"iana","compressible":false},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"apache","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oai.workflows":{"source":"iana"},"application/vnd.oai.workflows+json":{"source":"iana","compressible":true},"application/vnd.oai.workflows+yaml":{"source":"iana"},"application/vnd.oasis.opendocument.base":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"apache","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-master-template":{"source":"iana"},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"apache","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"apache","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.onvif.metadata":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.pt.mundusmundi":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true,"extensions":["xhtm"]},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.relpipe":{"source":"iana"},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.smintio.portals.archive":{"source":"iana"},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sybyl.mol2":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml","uo"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.wasmflow.wafl":{"source":"iana"},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordlift":{"source":"iana"},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xecrets-encrypted":{"source":"iana"},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vp":{"source":"iana"},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xfdf":{"source":"iana","extensions":["xfdf"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yaml":{"source":"iana"},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+cbor":{"source":"iana"},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yang-sid+json":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana","extensions":["adts","aac"]},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flac":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/matroska":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/midi-clip":{"source":"iana"},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"apache"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"source":"iana","compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp","dib"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/dpx":{"source":"iana","extensions":["dpx"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/j2c":{"source":"iana"},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm","jpgm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxl":{"source":"iana","extensions":["jxl"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif","btf"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"iana","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/bhttp":{"source":"iana"},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/mls":{"source":"iana"},"message/news":{"source":"apache"},"message/ohttp-req":{"source":"iana"},"message/ohttp-res":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"apache"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"apache"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/jt":{"source":"iana","extensions":["jt"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/prc":{"source":"iana","extensions":["prc"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/u3d":{"source":"iana","extensions":["u3d"]},"model/vnd.bary":{"source":"iana","extensions":["bary"]},"model/vnd.cld":{"source":"iana","extensions":["cld"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana","extensions":["pyo","pyox"]},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usda":{"source":"iana","extensions":["usda"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"apache"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/hl7v2":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["md","markdown"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/prs.texi":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.exchangeable":{"source":"iana"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"apache"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.vcf":{"source":"iana"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vnd.zoo.kcl":{"source":"iana"},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/wgsl":{"source":"iana","extensions":["wgsl"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/evc":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/h266":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/matroska":{"source":"iana"},"video/matroska-3d":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts","m2t","m2ts","mts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"apache"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}')
        }, function (e, n, t) {
            "use strict";
            var i = t(99);
            e.exports.desc = function (e) {
                return i(e, (function (e, n) {
                        return n.length - e.length
                    }))
            },
            e.exports.asc = function (e) {
                return i(e, (function (e, n) {
                        return e.length - n.length
                    }))
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(100);
            e.exports = function (e, n) {
                if (!i(e))
                    throw new TypeError("Expected a plain object");
                "function" == typeof(n = n || {}) && (n = {
                        compare: n
                    });
                var t = n.deep,
                a = [],
                o = [],
                r = function (e) {
                    var s = a.indexOf(e);
                    if (-1 !== s)
                        return o[s];
                    var c = {},
                    l = Object.keys(e).sort(n.compare);
                    a.push(e),
                    o.push(c);
                    for (var u = 0; u < l.length; u++) {
                        var p = l[u],
                        d = e[p];
                        c[p] = t && i(d) ? r(d) : d
                    }
                    return c
                };
                return r(e)
            }
        }, function (e, n, t) {
            "use strict";
            var i = Object.prototype.toString;
            e.exports = function (e) {
                var n;
                return "[object Object]" === i.call(e) && (null === (n = Object.getPrototypeOf(e)) || n === Object.getPrototypeOf({}))
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(0);
            if ("string" == typeof i)
                throw new TypeError("Not running in an Electron environment!");
            const a = "ELECTRON_IS_DEV" in process.env,
            o = 1 === Number.parseInt(process.env.ELECTRON_IS_DEV, 10);
            e.exports = a ? o : !i.app.isPackaged
        }, function (e, n, t) {
            "use strict";
            var i = t(103),
            a = t(22),
            o = t(33),
            r = t(105),
            s = t(106),
            c = t(110),
            l = t(114),
            u = t(115);
            e.exports = function e(n) {
                var t = {
                    catchErrors: function (e) {
                        var n = Object.assign({}, {
                            log: t.error,
                            showDialog: "browser" === process.type
                        }, e || {});
                        i(n)
                    },
                    create: e,
                    functions: {},
                    hooks: [],
                    isDev: a.isDev(),
                    levels: [],
                    logId: n,
                    variables: {
                        processType: process.type
                    }
                };
                return t.scope = r(t),
                t.transports = {
                    console: s(t),
                    file: c(t),
                    remote: u(t),
                    ipc: l(t)
                },
                Object.defineProperty(t.levels, "add", {
                    enumerable: !1,
                    value: function (e, n) {
                        n = void 0 === n ? t.levels.length : n,
                        t.levels.splice(n, 0, e),
                        t[e] = o.log.bind(null, t, {
                            level: e
                        }),
                        t.functions[e] = t[e]
                    }
                }),
                ["error", "warn", "info", "verbose", "debug", "silly"].forEach((function (e) {
                        t.levels.add(e)
                    })),
                t.log = o.log.bind(null, t, {
                    level: "info"
                }),
                t.functions.log = t.log,
                t.logMessageWithTransports = function (e, n) {
                    return void 0 === e.date && (e.date = new Date),
                    void 0 === e.variables && (e.variables = t.variables),
                    o.runTransports(n, e, t)
                },
                t
            }
            ("default"),
            e.exports.default = e.exports
        }, function (e, n, t) {
            "use strict";
            var i = t(22),
            a = t(104),
            o = !1;
            e.exports = function (e) {
                return o || (o = !0, "renderer" === process.type ? (window.addEventListener("error", r), window.addEventListener("unhandledrejection", s)) : (process.on("uncaughtException", n), process.on("unhandledRejection", t))), {
                    stop: c
                };
                function n(n) {
                    try {
                        if ("function" == typeof e.onError) {
                            var t = i.getVersions();
                            if (!1 === e.onError(n, t, l))
                                return
                        }
                        if (e.log("Unhandled Exception", n), e.showDialog && n.name.indexOf("UnhandledRejection") < 0) {
                            var a = process.type || "main";
                            i.showErrorBox("A JavaScript error occurred in the " + a + " process", n.stack)
                        }
                    } catch (e) {
                        console.error(n)
                    }
                }
                function t(e) {
                    if (e instanceof Error) {
                        try {
                            Object.defineProperty(e, "name", {
                                value: "UnhandledRejection " + e.name
                            })
                        } catch (e) {}
                        n(e)
                    } else {
                        var t = new Error(JSON.stringify(e));
                        t.name = "UnhandledRejection",
                        n(t)
                    }
                }
                function r(e) {
                    e.preventDefault(),
                    n(e.error)
                }
                function s(e) {
                    e.preventDefault(),
                    t(e.reason)
                }
                function c() {
                    o = !1,
                    "renderer" === process.type ? (window.removeEventListener("error", r), window.removeEventListener("unhandledrejection", s)) : (process.removeListener("uncaughtException", n), process.removeListener("unhandledRejection", t))
                }
                function l(n, t) {
                    var o = n + "?" + a.stringify(t);
                    i.openUrl(o, e.log)
                }
            }
        }, function (e, n) {
            e.exports = require("querystring")
        }, function (e, n, t) {
            "use strict";
            var i = t(33).log;
            e.exports = function (e) {
                return n.labelPadding = !0,
                n.defaultLabel = "",
                n.maxLabelLength = 0,
                n.getOptions = function () {
                    return {
                        defaultLabel: n.defaultLabel,
                        labelLength: t()
                    }
                },
                n;
                function n(t) {
                    var a = {
                        label: t,
                        toJSON: function () {
                            return {
                                label: this.label
                            }
                        }
                    };
                    return e.levels.forEach((function (n) {
                            a[n] = i.bind(null, e, {
                                level: n,
                                scope: a
                            })
                        })),
                    a.log = a.info,
                    n.maxLabelLength = Math.max(n.maxLabelLength, t.length),
                    a
                }
                function t() {
                    return !0 === n.labelPadding ? n.maxLabelLength : !1 === n.labelPadding ? 0 : "number" == typeof n.labelPadding ? n.labelPadding : 0
                }
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(23),
            a = {
                context: console,
                error: console.error,
                warn: console.warn,
                info: console.info,
                verbose: console.verbose,
                debug: console.debug,
                silly: console.silly,
                log: console.log
            };
            e.exports = function (e) {
                return n.level = "silly",
                n.useStyles = process.env.FORCE_STYLES,
                n.format = o[process.type] || o.browser,
                n;
                function n(t) {
                    var i,
                    o = e.scope.getOptions();
                    i = "renderer" === process.type || "worker" === process.type ? r(t, n, o) : s(t, n, o),
                    function (e, n) {
                        var t = a[e] || a.info;
                        if ("renderer" === process.type)
                            return void setTimeout(t.bind.apply(t, [t.context].concat(n)));
                        t.apply(a.context, n)
                    }
                    (t.level, i)
                }
            },
            e.exports.transformRenderer = r,
            e.exports.transformMain = s;
            var o = {
                browser: "%c{h}:{i}:{s}.{ms}{scope}%c " + ("win32" === process.platform ? ">" : "›") + " {text}",
                renderer: "{h}:{i}:{s}.{ms}{scope} › {text}",
                worker: "{h}:{i}:{s}.{ms}{scope} › {text}"
            };
            function r(e, n, t) {
                return i.transform(e, [i.customFormatterFactory(n.format, !0, t)])
            }
            function s(e, n, t) {
                var a,
                r = function (e, n) {
                    if (!0 === e || !1 === e)
                        return e;
                    var t = "error" === n || "warn" === n ? process.stderr : process.stdout;
                    return t && t.isTTY
                }
                (n.useStyles, e.level);
                return i.transform(e, [(a = n.format, function (e, n) {
                            return a !== o.browser ? e : ["color:" + c(n.level), "color:unset"].concat(e)
                        }), i.customFormatterFactory(n.format, !1, t), r ? i.applyAnsiStyles : i.removeStyles, i.concatFirstStringElements, i.maxDepthFactory(4), i.toJSON])
            }
            function c(e) {
                switch (e) {
                case "error":
                    return "red";
                case "warn":
                    return "yellow";
                case "info":
                    return "cyan";
                default:
                    return "unset"
                }
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(12);
            function a(e) {
                var n = function () {
                    if ("undefined" != typeof WeakSet)
                        return new WeakSet;
                    var e = [];
                    return {
                        add: function (n) {
                            e.push(n)
                        },
                        has: function (n) {
                            return -1 !== e.indexOf(n)
                        }
                    }
                }
                ();
                return function (t, i) {
                    if ("object" == typeof i && null !== i) {
                        if (n.has(i))
                            return;
                        n.add(i)
                    }
                    return o(t, i, e)
                }
            }
            function o(e, n, t) {
                var i = !t || !1 !== t.serializeMapAndSet;
                return n instanceof Error ? n.stack : n ? "function" == typeof n.toJSON ? n.toJSON() : "function" == typeof n ? "[function] " + n.toString() : i && n instanceof Map && Object.fromEntries ? Object.fromEntries(n) : i && n instanceof Set && Array.from ? Array.from(n) : n : n
            }
            function r(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            e.exports = {
                maxDepthFactory: function (e) {
                    return e = e || 6,
                    function (n) {
                        return function e(n, t) {
                            if (!n)
                                return n;
                            if (t < 1)
                                return r(n) ? "[array]" : "object" == typeof n && n ? "[object]" : n;
                            if (r(n))
                                return n.map((function (n) {
                                        return e(n, t - 1)
                                    }));
                            if ("object" != typeof n)
                                return n;
                            if (n && "function" == typeof n.toISOString)
                                return n;
                            if (null === n)
                                return null;
                            if (n instanceof Error)
                                return n;
                            var i = {};
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (i[a] = e(n[a], t - 1));
                            return i
                        }
                        (n, e)
                    }
                },
                serialize: o,
                toJSON: function (e) {
                    return JSON.parse(JSON.stringify(e, a()))
                },
                toStringFactory: function (e) {
                    return function (n) {
                        var t = n.map((function (e) {
                                    if (void 0 !== e)
                                        try {
                                            var n = JSON.stringify(e, a(), "  ");
                                            return void 0 === n ? void 0 : JSON.parse(n)
                                        } catch (n) {
                                            return e
                                        }
                                }));
                        return i.formatWithOptions ? (t.unshift(e || {}), i.formatWithOptions.apply(i, t)) : i.format.apply(i, t)
                    }
                }
            }
        }, function (e, n, t) {
            "use strict";
            e.exports = {
                applyAnsiStyles: function (e) {
                    return r(e, a, o)
                },
                removeStyles: function (e) {
                    return r(e, (function () {
                            return ""
                        }))
                },
                transformStyles: r
            };
            var i = {
                unset: "[0m",
                black: "[30m",
                red: "[31m",
                green: "[32m",
                yellow: "[33m",
                blue: "[34m",
                magenta: "[35m",
                cyan: "[36m",
                white: "[37m"
            };
            function a(e) {
                var n = e.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
                return i[n] || ""
            }
            function o(e) {
                return e + i.unset
            }
            function r(e, n, t) {
                var i = {};
                return e.reduce((function (e, a, o, r) {
                        if (i[o])
                            return e;
                        if ("string" == typeof a) {
                            var s = o,
                            c = !1;
                            a = a.replace(/%[1cdfiOos]/g, (function (e) {
                                        if (s += 1, "%c" !== e)
                                            return e;
                                        var t = r[s];
                                        return "string" == typeof t ? (i[s] = !0, c = !0, n(t, a)) : e
                                    })),
                            c && t && (a = t(a))
                        }
                        return e.push(a),
                        e
                    }), [])
            }
        }, function (e, n, t) {
            "use strict";
            function i(e, n) {
                return e.replace("{y}", String(n.getFullYear())).replace("{m}", o(n.getMonth() + 1)).replace("{d}", o(n.getDate())).replace("{h}", o(n.getHours())).replace("{i}", o(n.getMinutes())).replace("{s}", o(n.getSeconds())).replace("{ms}", o(n.getMilliseconds(), 3)).replace("{z}", a(n.getTimezoneOffset())).replace("{iso}", n.toISOString())
            }
            function a(e) {
                var n = Math.abs(e);
                return (e >= 0 ? "-" : "+") + o(Math.floor(n / 60)) + ":" + o(n % 60)
            }
            function o(e, n) {
                return n = n || 2,
                (new Array(n + 1).join("0") + e).substr(-n, n)
            }
            function r(e, n) {
                return n = Math.max(n, e.length),
                (e + Array(n + 1).join(" ")).substring(0, n)
            }
            e.exports = {
                concatFirstStringElements: function (e) {
                    if ("string" != typeof e[0] || "string" != typeof e[1])
                        return e;
                    if (e[0].match(/%[1cdfiOos]/))
                        return e;
                    return e[1] = e[0] + " " + e[1],
                    e.shift(),
                    e
                },
                formatDate: i,
                formatTimeZone: a,
                pad: o,
                padString: r,
                templateDate: function (e, n) {
                    var t = e[0];
                    if ("string" != typeof t)
                        return e;
                    return e[0] = i(t, n.date),
                    e
                },
                templateVariables: function (e, n) {
                    var t = e[0],
                    i = n.variables;
                    if ("string" != typeof t || !n.variables)
                        return e;
                    for (var a in i)
                        Object.prototype.hasOwnProperty.call(i, a) && (t = t.replace("{" + a + "}", i[a]));
                    return t = (t = t.replace("{level}]", r(n.level + "]", 6))).replace("{level}", n.level),
                    e[0] = t,
                    e
                },
                templateScopeFactory: function (e) {
                    var n = (e = e || {}).labelLength || 0;
                    return function (t, i) {
                        var a,
                        o = t[0],
                        s = i.scope && i.scope.label;
                        return s || (s = e.defaultLabel),
                        a = "" === s ? n > 0 ? r("", n + 3) : "" : "string" == typeof s ? r(" (" + s + ")", n + 3) : "",
                        t[0] = o.replace("{scope}", a),
                        t
                    }
                },
                templateText: function (e) {
                    var n = e[0];
                    if ("string" != typeof n)
                        return e;
                    if (n.lastIndexOf("{text}") === n.length - 6)
                        return e[0] = n.replace(/\s?{text}/, ""), "" === e[0] && e.shift(), e;
                    var t = n.split("{text}"),
                    i = [];
                    "" !== t[0] && i.push(t[0]);
                    i = i.concat(e.slice(1)),
                    "" !== t[1] && i.push(t[1]);
                    return i
                }
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(6),
            a = t(1),
            o = t(13),
            r = t(12),
            s = t(23),
            c = t(111).FileRegistry,
            l = t(112);
            e.exports = function (e, n) {
                var t = l.getPathVariables(process.platform),
                c = n || u;
                c.listenerCount("error") < 1 && c.on("error", (function (e, n) {
                        d("Can't write to " + n, e)
                    }));
                return p.archiveLog = function (e) {
                    var n = e.toString(),
                    t = a.parse(n);
                    try {
                        i.renameSync(n, a.join(t.dir, t.name + ".old" + t.ext))
                    } catch (n) {
                        d("Could not rotate log", n);
                        var o = Math.round(p.maxSize / 4);
                        e.crop(Math.min(o, 262144))
                    }
                },
                p.depth = 5,
                p.fileName = function () {
                    switch (process.type) {
                    case "renderer":
                        return "renderer.log";
                    case "worker":
                        return "worker.log";
                    default:
                        return "main.log"
                    }
                }
                (),
                p.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",
                p.getFile = m,
                p.level = "silly",
                p.maxSize = 1048576,
                p.readAllLogs = function (e) {
                    var n = e && "function" == typeof e.fileFilter ? e.fileFilter : function (e) {
                        return e.endsWith(".log")
                    },
                    r = Object.assign({}, t, {
                        fileName: p.fileName
                    }),
                    s = a.dirname(p.resolvePath(r));
                    return i.readdirSync(s).map((function (e) {
                            return a.join(s, e)
                        })).filter(n).map((function (e) {
                            try {
                                return {
                                    path: e,
                                    lines: i.readFileSync(e, "utf8").split(o.EOL)
                                }
                            } catch (e) {
                                return null
                            }
                        })).filter(Boolean)
                },
                p.resolvePath = function (e) {
                    return a.join(e.libraryDefaultDir, e.fileName)
                },
                p.sync = !0,
                p.writeOptions = {
                    flag: "a",
                    mode: 438,
                    encoding: "utf8"
                },
                p.inspectOptions = {},
                function () {
                    var e = " is deprecated and will be removed in v5.",
                    n = " property" + e;
                    function t() {
                        return m().path
                    }
                    Object.defineProperties(p, {
                        bytesWritten: {
                            get: r.deprecate((function () {
                                    return m().bytesWritten
                                }), "bytesWritten" + n)
                        },
                        file: {
                            get: r.deprecate(t, "file" + n),
                            set: r.deprecate((function (e) {
                                    p.resolvePath = function () {
                                        return e
                                    }
                                }), "file" + n)
                        },
                        fileSize: {
                            get: r.deprecate((function () {
                                    return m().size
                                }), "file" + n)
                        }
                    }),
                    p.clear = r.deprecate((function () {
                                m().clear()
                            }), "clear()" + e),
                    p.findLogPath = r.deprecate(t, "findLogPath()" + e),
                    p.init = r.deprecate((function () {}), "init()" + e)
                }
                (),
                p;
                function p(n) {
                    var t = m(n);
                    p.maxSize > 0 && t.size > p.maxSize && (p.archiveLog(t), t.reset());
                    var i = e.scope.getOptions(),
                    a = Object.assign({
                        depth: p.depth
                    }, p.inspectOptions),
                    o = s.transform(n, [s.removeStyles, s.customFormatterFactory(p.format, !1, i), s.concatFirstStringElements, s.toStringFactory(a)]);
                    t.writeLine(o)
                }
                function d(n, t) {
                    var i = ["electron-log.transports.file: " + n];
                    t && i.push(t),
                    e.transports.console({
                        data: i,
                        date: new Date,
                        level: "warn"
                    })
                }
                function m(e) {
                    var n = Object.assign({}, t, {
                        fileName: p.fileName
                    }),
                    i = p.resolvePath(n, e);
                    return c.provide(i, p.writeOptions, !p.sync)
                }
            };
            var u = new c
        }, function (e, n, t) {
            "use strict";
            var i = t(34),
            a = t(6),
            o = t(13),
            r = t(1),
            s = t(10),
            c = t(12);
            function l(e, n, t) {
                i.call(this),
                this.path = e,
                this.initialSize = void 0,
                this.bytesWritten = 0,
                this.writeAsync = Boolean(t),
                this.asyncWriteQueue = [],
                this.hasActiveAsyncWritting = !1,
                this.writeOptions = n || {
                    flag: "a",
                    mode: 438,
                    encoding: "utf8"
                },
                Object.defineProperty(this, "size", {
                    get: this.getSize.bind(this)
                })
            }
            function u(e) {
                l.call(this, e)
            }
            function p() {
                i.call(this),
                this.store = {},
                this.emitError = this.emitError.bind(this)
            }
            e.exports = {
                File: l,
                FileRegistry: p,
                NullFile: u
            },
            c.inherits(l, i),
            l.prototype.clear = function () {
                try {
                    return a.writeFileSync(this.path, "", {
                        mode: this.writeOptions.mode,
                        flag: "w"
                    }),
                    this.reset(),
                    !0
                } catch (e) {
                    return "ENOENT" === e.code || (this.emit("error", e, this), !1)
                }
            },
            l.prototype.crop = function (e) {
                try {
                    var n = (t = this.path, i = e || 4096, r = Buffer.alloc(i), s = a.statSync(t), c = Math.min(s.size, i), l = Math.max(0, s.size - i), u = a.openSync(t, "r"), p = a.readSync(u, r, 0, c, l), a.closeSync(u), r.toString("utf8", 0, p));
                    this.clear(),
                    this.writeLine("[log cropped]" + o.EOL + n)
                } catch (e) {
                    this.emit("error", new Error("Couldn't crop file " + this.path + ". " + e.message), this)
                }
                var t,
                i,
                r,
                s,
                c,
                l,
                u,
                p
            },
            l.prototype.toString = function () {
                return this.path
            },
            l.prototype.reset = function () {
                this.initialSize = void 0,
                this.bytesWritten = 0
            },
            l.prototype.writeLine = function (e) {
                if (e += o.EOL, this.writeAsync)
                    return this.asyncWriteQueue.push(e), void this.nextAsyncWrite();
                try {
                    a.writeFileSync(this.path, e, this.writeOptions),
                    this.increaseBytesWrittenCounter(e)
                } catch (e) {
                    this.emit("error", new Error("Couldn't write to " + this.path + ". " + e.message), this)
                }
            },
            l.prototype.getSize = function () {
                if (void 0 === this.initialSize)
                    try {
                        var e = a.statSync(this.path);
                        this.initialSize = e.size
                    } catch (e) {
                        this.initialSize = 0
                    }
                return this.initialSize + this.bytesWritten
            },
            l.prototype.isNull = function () {
                return !1
            },
            l.prototype.increaseBytesWrittenCounter = function (e) {
                this.bytesWritten += Buffer.byteLength(e, this.writeOptions.encoding)
            },
            l.prototype.nextAsyncWrite = function () {
                var e = this;
                if (!(this.hasActiveAsyncWritting || this.asyncWriteQueue.length < 1)) {
                    var n = this.asyncWriteQueue.shift();
                    this.hasActiveAsyncWritting = !0,
                    a.writeFile(this.path, n, this.writeOptions, (function (t) {
                            e.hasActiveAsyncWritting = !1,
                            t ? e.emit("error", new Error("Couldn't write to " + e.path + ". " + t.message), this) : e.increaseBytesWrittenCounter(n),
                            e.nextAsyncWrite()
                        }))
                }
            },
            c.inherits(u, l),
            u.prototype.clear = function () {},
            u.prototype.crop = function () {},
            u.prototype.writeLine = function () {},
            u.prototype.getSize = function () {
                return 0
            },
            u.prototype.isNull = function () {
                return !0
            },
            c.inherits(p, i),
            p.prototype.provide = function (e, n, t) {
                var i;
                try {
                    if (e = r.resolve(e), this.store[e])
                        return this.store[e];
                    i = this.createFile(e, n, Boolean(t))
                } catch (n) {
                    i = new u(e),
                    this.emitError(n, i)
                }
                return i.on("error", this.emitError),
                this.store[e] = i,
                i
            },
            p.prototype.createFile = function (e, n, t) {
                return this.testFileWriting(e),
                new l(e, n, t)
            },
            p.prototype.emitError = function (e, n) {
                this.emit("error", e, n)
            },
            p.prototype.testFileWriting = function (e) {
                !function e(n) {
                    if (Boolean(s.fileURLToPath))
                        return a.mkdirSync(n, {
                            recursive: !0
                        }), !0;
                    try {
                        return a.mkdirSync(n),
                        !0
                    } catch (t) {
                        if ("ENOENT" === t.code)
                            return e(r.dirname(n)) && e(n);
                        try {
                            if (a.statSync(n).isDirectory())
                                return !0;
                            throw t
                        } catch (e) {
                            throw e
                        }
                    }
                }
                (r.dirname(e)),
                a.writeFileSync(e, "", {
                    flag: "a"
                })
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(13),
            a = t(1),
            o = t(22),
            r = t(113);
            function s(e) {
                var n = o.getPath("appData");
                if (n)
                    return n;
                var t = c();
                switch (e) {
                case "darwin":
                    return a.join(t, "Library/Application Support");
                case "win32":
                    return process.env.APPDATA || a.join(t, "AppData/Roaming");
                default:
                    return process.env.XDG_CONFIG_HOME || a.join(t, ".config")
                }
            }
            function c() {
                return i.homedir ? i.homedir() : process.env.HOME
            }
            function l(e, n) {
                return "darwin" === e ? a.join(c(), "Library/Logs", n) : a.join(d(e, n), "logs")
            }
            function u(e) {
                return "darwin" === e ? a.join(c(), "Library/Logs", "{appName}") : a.join(s(e), "{appName}", "logs")
            }
            function p() {
                var e = o.getName() || "",
                n = o.getVersion();
                if ("electron" === e.toLowerCase() && (e = "", n = ""), e && n)
                    return {
                        name: e,
                        version: n
                    };
                var t = r.readPackageJson();
                return e || (e = t.name),
                n || (n = t.version),
                e || (e = "Electron"), {
                    name: e,
                    version: n
                }
            }
            function d(e, n) {
                return o.getName() !== n ? a.join(s(e), n) : o.getPath("userData") || a.join(s(e), n)
            }
            e.exports = {
                getAppData: s,
                getLibraryDefaultDir: l,
                getLibraryTemplate: u,
                getNameAndVersion: p,
                getPathVariables: function (e) {
                    var n = p(),
                    t = n.name,
                    a = n.version;
                    return {
                        appData: s(e),
                        appName: t,
                        appVersion: a,
                        electronDefaultDir: o.getPath("logs"),
                        home: c(),
                        libraryDefaultDir: l(e, t),
                        libraryTemplate: u(e),
                        temp: o.getPath("temp") || i.tmpdir(),
                        userData: d(e, t)
                    }
                },
                getUserData: d
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(6),
            a = t(1);
            function o(e) {
                if (!e)
                    return null;
                try {
                    var n = r("package.json", e = a.join.apply(a, arguments));
                    if (!n)
                        return null;
                    var t = JSON.parse(i.readFileSync(n, "utf8")),
                    o = t.productName || t.name;
                    if (!o || "electron" === o.toLowerCase())
                        return null;
                    if (t.productName || t.name)
                        return {
                            name: o,
                            version: t.version
                        }
                } catch (e) {
                    return null
                }
            }
            function r(e, n) {
                for (var t = n; ; ) {
                    var o = a.parse(t),
                    r = o.root,
                    s = o.dir;
                    if (i.existsSync(a.join(t, e)))
                        return a.resolve(a.join(t, e));
                    if (t === r)
                        return null;
                    t = s
                }
            }
            e.exports = {
                readPackageJson: function () {
                    return o(t.c[t.s] && t.c[t.s].filename) || o(function () {
                        var e = process.argv.filter((function (e) {
                                    return 0 === e.indexOf("--user-data-dir=")
                                }));
                        if (0 === e.length || "string" != typeof e[0])
                            return null;
                        return e[0].replace("--user-data-dir=", "")
                    }
                        ()) || o(process.resourcesPath, "app.asar") || o(process.resourcesPath, "app") || o(process.cwd()) || {
                        name: null,
                        version: null
                    }
                },
                tryReadJsonAt: o
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(23),
            a = t(22),
            o = t(33);
            e.exports = function (e) {
                if (n.eventId = "__ELECTRON_LOG_IPC_" + e.logId + "__", n.level = !!e.isDev && "silly", a.isIpcChannelListened(n.eventId))
                    return function () {};
                return a.onIpc(n.eventId, (function (n, t) {
                        t.date = new Date(t.date),
                        o.runTransport(e.transports.console, t, e)
                    })),
                a.loadRemoteModule("electron-log"),
                a.isElectron() ? n : null;
                function n(e) {
                    var t = Object.assign({}, e, {
                        data: i.transform(e, [i.toJSON, i.maxDepthFactory(3)])
                    });
                    a.sendIpc(n.eventId, t)
                }
            }
        }, function (e, n, t) {
            "use strict";
            var i = t(50),
            a = t(116),
            o = t(10),
            r = t(23);
            e.exports = function (e) {
                return n.client = {
                    name: "electron-application"
                },
                n.depth = 6,
                n.level = !1,
                n.requestOptions = {},
                n.url = null,
                n.onError = null,
                n.transformBody = function (e) {
                    return JSON.stringify(e)
                },
                n;
                function n(t) {
                    if (n.url) {
                        var s = n.transformBody({
                            client: n.client,
                            data: r.transform(t, [r.removeStyles, r.toJSON, r.maxDepthFactory(n.depth + 1)]),
                            date: t.date.getTime(),
                            level: t.level,
                            variables: t.variables
                        });
                        (function (e, n, t) {
                            var r = o.parse(e),
                            s = "https:" === r.protocol ? a : i,
                            c = {
                                hostname: r.hostname,
                                port: r.port,
                                path: r.path,
                                method: "POST",
                                headers: {}
                            };
                            Object.assign(c, n),
                            c.headers["Content-Length"] = t.length,
                            c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
                            var l = s.request(c);
                            return l.write(t),
                            l.end(),
                            l
                        })(n.url, n.requestOptions, Buffer.from(s, "utf8")).on("error", n.onError || function (t) {
                            e.logMessageWithTransports({
                                data: ["electron-log.transports.remote: cannot send HTTP request to " + n.url, t],
                                level: "warn"
                            }, [e.transports.console, e.transports.ipc, e.transports.file])
                        })
                    }
                }
            }
        }, function (e, n) {
            e.exports = require("https")
        }, function (e, n, t) {
            "undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = t(118) : e.exports = t(120)
        }, function (e, n, t) {
            n.formatArgs = function (n) {
                if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
                    return;
                const t = "color: " + this.color;
                n.splice(1, 0, t, "color: inherit");
                let i = 0,
                a = 0;
                n[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (i++, "%c" === e && (a = i))
                }),
                n.splice(a, 0, t)
            },
            n.save = function (e) {
                try {
                    e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug")
                } catch (e) {}
            },
            n.load = function () {
                let e;
                try {
                    e = n.storage.getItem("debug")
                } catch (e) {}
                !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG);
                return e
            },
            n.useColors = function () {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                    return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                    return !1;
                let e;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            },
            n.storage = function () {
                try {
                    return localStorage
                } catch (e) {}
            }
            (),
            n.destroy = (() => {
                let e = !1;
                return () => {
                    e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            })(),
            n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
            n.log = console.debug || console.log || (() => {}),
            e.exports = t(53)(n);
            const { formatters: i } = e.exports;
            i.j = function (e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        }, function (e, n) {
            var t = 1e3,
            i = 6e4,
            a = 60 * i,
            o = 24 * a;
            function r(e, n, t, i) {
                var a = n >= 1.5 * t;
                return Math.round(e / t) + " " + i + (a ? "s" : "")
            }
            e.exports = function (e, n) {
                n = n || {};
                var s = typeof e;
                if ("string" === s && e.length > 0)
                    return function (e) {
                        if ((e = String(e)).length > 100)
                            return;
                        var n = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (!n)
                            return;
                        var r = parseFloat(n[1]);
                        switch ((n[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * r;
                        case "weeks":
                        case "week":
                        case "w":
                            return 6048e5 * r;
                        case "days":
                        case "day":
                        case "d":
                            return r * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return r * a;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return r * i;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return r * t;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return r;
                        default:
                            return
                        }
                    }
                (e);
                if ("number" === s && isFinite(e))
                    return n.long ? function (e) {
                        var n = Math.abs(e);
                        if (n >= o)
                            return r(e, n, o, "day");
                        if (n >= a)
                            return r(e, n, a, "hour");
                        if (n >= i)
                            return r(e, n, i, "minute");
                        if (n >= t)
                            return r(e, n, t, "second");
                        return e + " ms"
                    }
                (e) : function (e) {
                    var n = Math.abs(e);
                    if (n >= o)
                        return Math.round(e / o) + "d";
                    if (n >= a)
                        return Math.round(e / a) + "h";
                    if (n >= i)
                        return Math.round(e / i) + "m";
                    if (n >= t)
                        return Math.round(e / t) + "s";
                    return e + "ms"
                }
                (e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }, function (e, n, t) {
            const i = t(54),
            a = t(12);
            n.init = function (e) {
                e.inspectOpts = {};
                const t = Object.keys(n.inspectOpts);
                for (let i = 0; i < t.length; i++)
                    e.inspectOpts[t[i]] = n.inspectOpts[t[i]]
            },
            n.log = function (...e) {
                return process.stderr.write(a.formatWithOptions(n.inspectOpts, ...e) + "\n")
            },
            n.formatArgs = function (t) {
                const { namespace: i, useColors: a } = this;
                if (a) {
                    const n = this.color,
                    a = "[3" + (n < 8 ? n : "8;5;" + n),
                    o = `  ${a};1m${i} [0m`;
                    t[0] = o + t[0].split("\n").join("\n" + o),
                    t.push(a + "m+" + e.exports.humanize(this.diff) + "[0m")
                } else
                    t[0] = function () {
                        if (n.inspectOpts.hideDate)
                            return "";
                        return (new Date).toISOString() + " "
                    }
                () + i + " " + t[0]
            },
            n.save = function (e) {
                e ? process.env.DEBUG = e : delete process.env.DEBUG
            },
            n.load = function () {
                return process.env.DEBUG
            },
            n.useColors = function () {
                return "colors" in n.inspectOpts ? Boolean(n.inspectOpts.colors) : i.isatty(process.stderr.fd)
            },
            n.destroy = a.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),
            n.colors = [6, 2, 3, 4, 5, 1];
            try {
                const e = t(121);
                e && (e.stderr || e).level >= 2 && (n.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
            } catch (e) {}
            n.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, n) => {
                const t = n.substring(6).toLowerCase().replace(/_([a-z])/g, (e, n) => n.toUpperCase());
                let i = process.env[n];
                return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)),
                e[t] = i,
                e
            }, {}),
            e.exports = t(53)(n);
            const { formatters: o } = e.exports;
            o.o = function (e) {
                return this.inspectOpts.colors = this.useColors,
                a.inspect(e, this.inspectOpts).split("\n").map(e => e.trim()).join(" ")
            },
            o.O = function (e) {
                return this.inspectOpts.colors = this.useColors,
                a.inspect(e, this.inspectOpts)
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(13),
            a = t(54),
            o = t(122), {
                env : r
            } = process;
            let s;
            function c(e) {
                return 0 !== e && {
                    level: e,
                    hasBasic: !0,
                    has256: e >= 2,
                    has16m: e >= 3
                }
            }
            function l(e, n) {
                if (0 === s)
                    return 0;
                if (o("color=16m") || o("color=full") || o("color=truecolor"))
                    return 3;
                if (o("color=256"))
                    return 2;
                if (e && !n && void 0 === s)
                    return 0;
                const t = s || 0;
                if ("dumb" === r.TERM)
                    return t;
                if ("win32" === process.platform) {
                    const e = i.release().split(".");
                    return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
                }
                if ("CI" in r)
                    return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(e => e in r) || "codeship" === r.CI_NAME ? 1 : t;
                if ("TEAMCITY_VERSION" in r)
                    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
                if ("truecolor" === r.COLORTERM)
                    return 3;
                if ("TERM_PROGRAM" in r) {
                    const e = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                    switch (r.TERM_PROGRAM) {
                    case "iTerm.app":
                        return e >= 3 ? 3 : 2;
                    case "Apple_Terminal":
                        return 2
                    }
                }
                return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) || "COLORTERM" in r ? 1 : t
            }
            o("no-color") || o("no-colors") || o("color=false") || o("color=never") ? s = 0 : (o("color") || o("colors") || o("color=true") || o("color=always")) && (s = 1),
            "FORCE_COLOR" in r && (s = "true" === r.FORCE_COLOR ? 1 : "false" === r.FORCE_COLOR ? 0 : 0 === r.FORCE_COLOR.length ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3)),
            e.exports = {
                supportsColor: function (e) {
                    return c(l(e, e && e.isTTY))
                },
                stdout: c(l(!0, a.isatty(1))),
                stderr: c(l(!0, a.isatty(2)))
            }
        }, function (e, n, t) {
            "use strict";
            e.exports = (e, n = process.argv) => {
                const t = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
                i = n.indexOf(t + e),
                a = n.indexOf("--");
                return -1 !== i && (-1 === a || i < a)
            }
        }, function (e, n, t) {
            "use strict";
            function i(e, n) {
                return null != n && n.length > 0 && (n.startsWith("/") || (e += "/"), e += n),
                e
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.getS3LikeProviderBaseUrl = n.githubUrl = void 0,
            n.githubUrl = function (e, n = "github.com") {
                return `${e.protocol || "https"}://${e.host || n}`
            },
            n.getS3LikeProviderBaseUrl = function (e) {
                const n = e.provider;
                if ("s3" === n)
                    return function (e) {
                        let n;
                        if (null != e.endpoint)
                            n = `${e.endpoint}/${e.bucket}`;
                        else if (e.bucket.includes(".")) {
                            if (null == e.region)
                                throw new Error(`Bucket name "${e.bucket}" includes a dot, but S3 region is missing`);
                            n = "us-east-1" === e.region ? "https://s3.amazonaws.com/" + e.bucket : `https://s3-${e.region}.amazonaws.com/${e.bucket}`
                        } else
                            n = "cn-north-1" === e.region ? `https://${e.bucket}.s3.${e.region}.amazonaws.com.cn` : `https://${e.bucket}.s3.amazonaws.com`;
                        return i(n, e.path)
                    }
                (e);
                if ("spaces" === n)
                    return function (e) {
                        if (null == e.name)
                            throw new Error("name is missing");
                        if (null == e.region)
                            throw new Error("region is missing");
                        return i(`https://${e.name}.${e.region}.digitaloceanspaces.com`, e.path)
                    }
                (e);
                throw new Error("Not supported provider: " + n)
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.parseDn = void 0,
            n.parseDn = function (e) {
                let n = !1,
                t = null,
                i = "",
                a = 0;
                e = e.trim();
                const o = new Map;
                for (let r = 0; r <= e.length; r++) {
                    if (r === e.length) {
                        null !== t && o.set(t, i);
                        break
                    }
                    const s = e[r];
                    if (n) {
                        if ('"' === s) {
                            n = !1;
                            continue
                        }
                    } else {
                        if ('"' === s) {
                            n = !0;
                            continue
                        }
                        if ("\\" === s) {
                            r++;
                            const n = parseInt(e.slice(r, r + 2), 16);
                            Number.isNaN(n) ? i += e[r] : (r++, i += String.fromCharCode(n));
                            continue
                        }
                        if (null === t && "=" === s) {
                            t = i,
                            i = "";
                            continue
                        }
                        if ("," === s || ";" === s || "+" === s) {
                            null !== t && o.set(t, i),
                            t = null,
                            i = "";
                            continue
                        }
                    }
                    if (" " === s && !n) {
                        if (0 === i.length)
                            continue;
                        if (r > a) {
                            let n = r;
                            for (; " " === e[n]; )
                                n++;
                            a = n
                        }
                        if (a >= e.length || "," === e[a] || ";" === e[a] || null === t && "=" === e[a] || null !== t && "+" === e[a]) {
                            r = a - 1;
                            continue
                        }
                    }
                    i += s
                }
                return o
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.nil = n.UUID = void 0;
            const i = t(25),
            a = t(2),
            o = i.randomBytes(16);
            o[0] = 1 | o[0];
            const r = {},
            s = [];
            for (let e = 0; e < 256; e++) {
                const n = (e + 256).toString(16).substr(1);
                r[n] = e,
                s[e] = n
            }
            class c {
                constructor(e) {
                    this.ascii = null,
                    this.binary = null;
                    const n = c.check(e);
                    if (!n)
                        throw new Error("not a UUID");
                    this.version = n.version,
                    "ascii" === n.format ? this.ascii = e : this.binary = e
                }
                static v5(e, n) {
                    return function (e, n, t, o, r = u.ASCII) {
                        const l = i.createHash(n);
                        if ("string" != typeof e && !Buffer.isBuffer(e))
                            throw a.newError("options.name must be either a string or a Buffer", "ERR_INVALID_UUID_NAME");
                        l.update(o),
                        l.update(e);
                        const p = l.digest();
                        let d;
                        switch (r) {
                        case u.BINARY:
                            p[6] = 15 & p[6] | t,
                            p[8] = 63 & p[8] | 128,
                            d = p;
                            break;
                        case u.OBJECT:
                            p[6] = 15 & p[6] | t,
                            p[8] = 63 & p[8] | 128,
                            d = new c(p);
                            break;
                        default:
                            d = s[p[0]] + s[p[1]] + s[p[2]] + s[p[3]] + "-" + s[p[4]] + s[p[5]] + "-" + s[15 & p[6] | t] + s[p[7]] + "-" + s[63 & p[8] | 128] + s[p[9]] + "-" + s[p[10]] + s[p[11]] + s[p[12]] + s[p[13]] + s[p[14]] + s[p[15]]
                        }
                        return d
                    }
                    (e, "sha1", 80, n)
                }
                toString() {
                    var e;
                    return null == this.ascii && (this.ascii = (e = this.binary, s[e[0]] + s[e[1]] + s[e[2]] + s[e[3]] + "-" + s[e[4]] + s[e[5]] + "-" + s[e[6]] + s[e[7]] + "-" + s[e[8]] + s[e[9]] + "-" + s[e[10]] + s[e[11]] + s[e[12]] + s[e[13]] + s[e[14]] + s[e[15]])),
                    this.ascii
                }
                inspect() {
                    return `UUID v${this.version} ${this.toString()}`
                }
                static check(e, n = 0) {
                    if ("string" == typeof e)
                        return e = e.toLowerCase(), !!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(e) && ("00000000-0000-0000-0000-000000000000" === e ? {
                            version: void 0,
                            variant: "nil",
                            format: "ascii"
                        }
                             : {
                            version: (240 & r[e[14] + e[15]]) >> 4,
                            variant: l((224 & r[e[19] + e[20]]) >> 5),
                            format: "ascii"
                        });
                    if (Buffer.isBuffer(e)) {
                        if (e.length < n + 16)
                            return !1;
                        let t = 0;
                        for (; t < 16 && 0 === e[n + t]; t++);
                        return 16 === t ? {
                            version: void 0,
                            variant: "nil",
                            format: "binary"
                        }
                         : {
                            version: (240 & e[n + 6]) >> 4,
                            variant: l((224 & e[n + 8]) >> 5),
                            format: "binary"
                        }
                    }
                    throw a.newError("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE")
                }
                static parse(e) {
                    const n = Buffer.allocUnsafe(16);
                    let t = 0;
                    for (let i = 0; i < 16; i++)
                        n[i] = r[e[t++] + e[t++]], 3 !== i && 5 !== i && 7 !== i && 9 !== i || (t += 1);
                    return n
                }
            }
            function l(e) {
                switch (e) {
                case 0:
                case 1:
                case 3:
                    return "ncs";
                case 4:
                case 5:
                    return "rfc4122";
                case 6:
                    return "microsoft";
                default:
                    return "future"
                }
            }
            var u;
            n.UUID = c,
            c.OID = c.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8"),
            function (e) {
                e[e.ASCII = 0] = "ASCII",
                e[e.BINARY = 1] = "BINARY",
                e[e.OBJECT = 2] = "OBJECT"
            }
            (u || (u = {})),
            n.nil = new c("00000000-0000-0000-0000-000000000000")
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.parseXml = n.XElement = void 0;
            const i = t(127),
            a = t(2);
            class o {
                constructor(e) {
                    if (this.name = e, this.value = "", this.attributes = null, this.isCData = !1, this.elements = null, !e)
                        throw a.newError("Element name cannot be empty", "ERR_XML_ELEMENT_NAME_EMPTY");
                    if (!function (e) {
                        return r.test(e)
                    }
                        (e))
                        throw a.newError("Invalid element name: " + e, "ERR_XML_ELEMENT_INVALID_NAME")
                }
                attribute(e) {
                    const n = null === this.attributes ? null : this.attributes[e];
                    if (null == n)
                        throw a.newError(`No attribute "${e}"`, "ERR_XML_MISSED_ATTRIBUTE");
                    return n
                }
                removeAttribute(e) {
                    null !== this.attributes && delete this.attributes[e]
                }
                element(e, n = !1, t = null) {
                    const i = this.elementOrNull(e, n);
                    if (null === i)
                        throw a.newError(t || `No element "${e}"`, "ERR_XML_MISSED_ELEMENT");
                    return i
                }
                elementOrNull(e, n = !1) {
                    if (null === this.elements)
                        return null;
                    for (const t of this.elements)
                        if (s(t, e, n))
                            return t;
                    return null
                }
                getElements(e, n = !1) {
                    return null === this.elements ? [] : this.elements.filter(t => s(t, e, n))
                }
                elementValueOrEmpty(e, n = !1) {
                    const t = this.elementOrNull(e, n);
                    return null === t ? "" : t.value
                }
            }
            n.XElement = o;
            const r = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);
            function s(e, n, t) {
                const i = e.name;
                return i === n || !0 === t && i.length === n.length && i.toLowerCase() === n.toLowerCase()
            }
            n.parseXml = function (e) {
                let n = null;
                const t = i.parser(!0, {}),
                a = [];
                return t.onopentag = e => {
                    const t = new o(e.name);
                    if (t.attributes = e.attributes, null === n)
                        n = t;
                    else {
                        const e = a[a.length - 1];
                        null == e.elements && (e.elements = []),
                        e.elements.push(t)
                    }
                    a.push(t)
                },
                t.onclosetag = () => {
                    a.pop()
                },
                t.ontext = e => {
                    a.length > 0 && (a[a.length - 1].value = e)
                },
                t.oncdata = e => {
                    const n = a[a.length - 1];
                    n.value = e,
                    n.isCData = !0
                },
                t.onerror = e => {
                    throw e
                },
                t.write(e),
                n
            }
        }, function (e, n, t) {
            !function (e) {
                e.parser = function (e, n) {
                    return new a(e, n)
                },
                e.SAXParser = a,
                e.SAXStream = r,
                e.createStream = function (e, n) {
                    return new r(e, n)
                },
                e.MAX_BUFFER_LENGTH = 65536;
                var n,
                i = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
                function a(n, t) {
                    if (!(this instanceof a))
                        return new a(n, t);
                    !function (e) {
                        for (var n = 0, t = i.length; n < t; n++)
                            e[i[n]] = ""
                    }
                    (this),
                    this.q = this.c = "",
                    this.bufferCheckPosition = e.MAX_BUFFER_LENGTH,
                    this.opt = t || {},
                    this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags,
                    this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase",
                    this.tags = [],
                    this.closed = this.closedRoot = this.sawRoot = !1,
                    this.tag = this.error = null,
                    this.strict = !!n,
                    this.noscript = !(!n && !this.opt.noscript),
                    this.state = D.BEGIN,
                    this.strictEntities = this.opt.strictEntities,
                    this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES),
                    this.attribList = [],
                    this.opt.xmlns && (this.ns = Object.create(c)),
                    void 0 === this.opt.unquotedAttributeValues && (this.opt.unquotedAttributeValues = !n),
                    this.trackPosition = !1 !== this.opt.position,
                    this.trackPosition && (this.position = this.line = this.column = 0),
                    k(this, "onready")
                }
                e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"],
                Object.create || (Object.create = function (e) {
                    function n() {}
                    return n.prototype = e,
                    new n
                }),
                Object.keys || (Object.keys = function (e) {
                    var n = [];
                    for (var t in e)
                        e.hasOwnProperty(t) && n.push(t);
                    return n
                }),
                a.prototype = {
                    end: function () {
                        F(this)
                    },
                    write: function (n) {
                        if (this.error)
                            throw this.error;
                        if (this.closed)
                            return A(this, "Cannot write after close. Assign an onready handler.");
                        if (null === n)
                            return F(this);
                        "object" == typeof n && (n = n.toString());
                        var t = 0,
                        a = "";
                        for (; a = z(n, t++), this.c = a, a; )
                            switch (this.trackPosition && (this.position++, "\n" === a ? (this.line++, this.column = 0) : this.column++), this.state) {
                            case D.BEGIN:
                                if (this.state = D.BEGIN_WHITESPACE, "\ufeff" === a)
                                    continue;
                                R(this, a);
                                continue;
                            case D.BEGIN_WHITESPACE:
                                R(this, a);
                                continue;
                            case D.TEXT:
                                if (this.sawRoot && !this.closedRoot) {
                                    for (var o = t - 1; a && "<" !== a && "&" !== a; )
                                        (a = z(n, t++)) && this.trackPosition && (this.position++, "\n" === a ? (this.line++, this.column = 0) : this.column++);
                                    this.textNode += n.substring(o, t - 1)
                                }
                                "<" !== a || this.sawRoot && this.closedRoot && !this.strict ? (m(a) || this.sawRoot && !this.closedRoot || S(this, "Text data outside of root node."), "&" === a ? this.state = D.TEXT_ENTITY : this.textNode += a) : (this.state = D.OPEN_WAKA, this.startTagPosition = this.position);
                                continue;
                            case D.SCRIPT:
                                "<" === a ? this.state = D.SCRIPT_ENDING : this.script += a;
                                continue;
                            case D.SCRIPT_ENDING:
                                "/" === a ? this.state = D.CLOSE_TAG : (this.script += "<" + a, this.state = D.SCRIPT);
                                continue;
                            case D.OPEN_WAKA:
                                if ("!" === a)
                                    this.state = D.SGML_DECL, this.sgmlDecl = "";
                                else if (m(a));
                                else if (g(l, a))
                                    this.state = D.OPEN_TAG, this.tagName = a;
                                else if ("/" === a)
                                    this.state = D.CLOSE_TAG, this.tagName = "";
                                else if ("?" === a)
                                    this.state = D.PROC_INST, this.procInstName = this.procInstBody = "";
                                else {
                                    if (S(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
                                        var r = this.position - this.startTagPosition;
                                        a = new Array(r).join(" ") + a
                                    }
                                    this.textNode += "<" + a,
                                    this.state = D.TEXT
                                }
                                continue;
                            case D.SGML_DECL:
                                if (this.sgmlDecl + a === "--") {
                                    this.state = D.COMMENT,
                                    this.comment = "",
                                    this.sgmlDecl = "";
                                    continue
                                }
                                this.doctype && !0 !== this.doctype && this.sgmlDecl ? (this.state = D.DOCTYPE_DTD, this.doctype += "<!" + this.sgmlDecl + a, this.sgmlDecl = "") : "[CDATA[" === (this.sgmlDecl + a).toUpperCase() ? (E(this, "onopencdata"), this.state = D.CDATA, this.sgmlDecl = "", this.cdata = "") : "DOCTYPE" === (this.sgmlDecl + a).toUpperCase() ? (this.state = D.DOCTYPE, (this.doctype || this.sawRoot) && S(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === a ? (E(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = D.TEXT) : f(a) ? (this.state = D.SGML_DECL_QUOTED, this.sgmlDecl += a) : this.sgmlDecl += a;
                                continue;
                            case D.SGML_DECL_QUOTED:
                                a === this.q && (this.state = D.SGML_DECL, this.q = ""),
                                this.sgmlDecl += a;
                                continue;
                            case D.DOCTYPE:
                                ">" === a ? (this.state = D.TEXT, E(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += a, "[" === a ? this.state = D.DOCTYPE_DTD : f(a) && (this.state = D.DOCTYPE_QUOTED, this.q = a));
                                continue;
                            case D.DOCTYPE_QUOTED:
                                this.doctype += a,
                                a === this.q && (this.q = "", this.state = D.DOCTYPE);
                                continue;
                            case D.DOCTYPE_DTD:
                                "]" === a ? (this.doctype += a, this.state = D.DOCTYPE) : "<" === a ? (this.state = D.OPEN_WAKA, this.startTagPosition = this.position) : f(a) ? (this.doctype += a, this.state = D.DOCTYPE_DTD_QUOTED, this.q = a) : this.doctype += a;
                                continue;
                            case D.DOCTYPE_DTD_QUOTED:
                                this.doctype += a,
                                a === this.q && (this.state = D.DOCTYPE_DTD, this.q = "");
                                continue;
                            case D.COMMENT:
                                "-" === a ? this.state = D.COMMENT_ENDING : this.comment += a;
                                continue;
                            case D.COMMENT_ENDING:
                                "-" === a ? (this.state = D.COMMENT_ENDED, this.comment = C(this.opt, this.comment), this.comment && E(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + a, this.state = D.COMMENT);
                                continue;
                            case D.COMMENT_ENDED:
                                ">" !== a ? (S(this, "Malformed comment"), this.comment += "--" + a, this.state = D.COMMENT) : this.doctype && !0 !== this.doctype ? this.state = D.DOCTYPE_DTD : this.state = D.TEXT;
                                continue;
                            case D.CDATA:
                                "]" === a ? this.state = D.CDATA_ENDING : this.cdata += a;
                                continue;
                            case D.CDATA_ENDING:
                                "]" === a ? this.state = D.CDATA_ENDING_2 : (this.cdata += "]" + a, this.state = D.CDATA);
                                continue;
                            case D.CDATA_ENDING_2:
                                ">" === a ? (this.cdata && E(this, "oncdata", this.cdata), E(this, "onclosecdata"), this.cdata = "", this.state = D.TEXT) : "]" === a ? this.cdata += "]" : (this.cdata += "]]" + a, this.state = D.CDATA);
                                continue;
                            case D.PROC_INST:
                                "?" === a ? this.state = D.PROC_INST_ENDING : m(a) ? this.state = D.PROC_INST_BODY : this.procInstName += a;
                                continue;
                            case D.PROC_INST_BODY:
                                if (!this.procInstBody && m(a))
                                    continue;
                                "?" === a ? this.state = D.PROC_INST_ENDING : this.procInstBody += a;
                                continue;
                            case D.PROC_INST_ENDING:
                                ">" === a ? (E(this, "onprocessinginstruction", {
                                        name: this.procInstName,
                                        body: this.procInstBody
                                    }), this.procInstName = this.procInstBody = "", this.state = D.TEXT) : (this.procInstBody += "?" + a, this.state = D.PROC_INST_BODY);
                                continue;
                            case D.OPEN_TAG:
                                g(u, a) ? this.tagName += a : (T(this), ">" === a ? I(this) : "/" === a ? this.state = D.OPEN_TAG_SLASH : (m(a) || S(this, "Invalid character in tag name"), this.state = D.ATTRIB));
                                continue;
                            case D.OPEN_TAG_SLASH:
                                ">" === a ? (I(this, !0), N(this)) : (S(this, "Forward-slash in opening tag not followed by >"), this.state = D.ATTRIB);
                                continue;
                            case D.ATTRIB:
                                if (m(a))
                                    continue;
                                ">" === a ? I(this) : "/" === a ? this.state = D.OPEN_TAG_SLASH : g(l, a) ? (this.attribName = a, this.attribValue = "", this.state = D.ATTRIB_NAME) : S(this, "Invalid attribute name");
                                continue;
                            case D.ATTRIB_NAME:
                                "=" === a ? this.state = D.ATTRIB_VALUE : ">" === a ? (S(this, "Attribute without value"), this.attribValue = this.attribName, j(this), I(this)) : m(a) ? this.state = D.ATTRIB_NAME_SAW_WHITE : g(u, a) ? this.attribName += a : S(this, "Invalid attribute name");
                                continue;
                            case D.ATTRIB_NAME_SAW_WHITE:
                                if ("=" === a)
                                    this.state = D.ATTRIB_VALUE;
                                else {
                                    if (m(a))
                                        continue;
                                    S(this, "Attribute without value"),
                                    this.tag.attributes[this.attribName] = "",
                                    this.attribValue = "",
                                    E(this, "onattribute", {
                                        name: this.attribName,
                                        value: ""
                                    }),
                                    this.attribName = "",
                                    ">" === a ? I(this) : g(l, a) ? (this.attribName = a, this.state = D.ATTRIB_NAME) : (S(this, "Invalid attribute name"), this.state = D.ATTRIB)
                                }
                                continue;
                            case D.ATTRIB_VALUE:
                                if (m(a))
                                    continue;
                                f(a) ? (this.q = a, this.state = D.ATTRIB_VALUE_QUOTED) : (this.opt.unquotedAttributeValues || A(this, "Unquoted attribute value"), this.state = D.ATTRIB_VALUE_UNQUOTED, this.attribValue = a);
                                continue;
                            case D.ATTRIB_VALUE_QUOTED:
                                if (a !== this.q) {
                                    "&" === a ? this.state = D.ATTRIB_VALUE_ENTITY_Q : this.attribValue += a;
                                    continue
                                }
                                j(this),
                                this.q = "",
                                this.state = D.ATTRIB_VALUE_CLOSED;
                                continue;
                            case D.ATTRIB_VALUE_CLOSED:
                                m(a) ? this.state = D.ATTRIB : ">" === a ? I(this) : "/" === a ? this.state = D.OPEN_TAG_SLASH : g(l, a) ? (S(this, "No whitespace between attributes"), this.attribName = a, this.attribValue = "", this.state = D.ATTRIB_NAME) : S(this, "Invalid attribute name");
                                continue;
                            case D.ATTRIB_VALUE_UNQUOTED:
                                if (!h(a)) {
                                    "&" === a ? this.state = D.ATTRIB_VALUE_ENTITY_U : this.attribValue += a;
                                    continue
                                }
                                j(this),
                                ">" === a ? I(this) : this.state = D.ATTRIB;
                                continue;
                            case D.CLOSE_TAG:
                                if (this.tagName)
                                    ">" === a ? N(this) : g(u, a) ? this.tagName += a : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = D.SCRIPT) : (m(a) || S(this, "Invalid tagname in closing tag"), this.state = D.CLOSE_TAG_SAW_WHITE);
                                else {
                                    if (m(a))
                                        continue;
                                    v(l, a) ? this.script ? (this.script += "</" + a, this.state = D.SCRIPT) : S(this, "Invalid tagname in closing tag.") : this.tagName = a
                                }
                                continue;
                            case D.CLOSE_TAG_SAW_WHITE:
                                if (m(a))
                                    continue;
                                ">" === a ? N(this) : S(this, "Invalid characters in closing tag");
                                continue;
                            case D.TEXT_ENTITY:
                            case D.ATTRIB_VALUE_ENTITY_Q:
                            case D.ATTRIB_VALUE_ENTITY_U:
                                var s,
                                c;
                                switch (this.state) {
                                case D.TEXT_ENTITY:
                                    s = D.TEXT,
                                    c = "textNode";
                                    break;
                                case D.ATTRIB_VALUE_ENTITY_Q:
                                    s = D.ATTRIB_VALUE_QUOTED,
                                    c = "attribValue";
                                    break;
                                case D.ATTRIB_VALUE_ENTITY_U:
                                    s = D.ATTRIB_VALUE_UNQUOTED,
                                    c = "attribValue"
                                }
                                if (";" === a) {
                                    var b = P(this);
                                    this.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(b) ? (this.entity = "", this.state = s, this.write(b)) : (this[c] += b, this.entity = "", this.state = s)
                                } else
                                    g(this.entity.length ? d : p, a) ? this.entity += a : (S(this, "Invalid character in entity name"), this[c] += "&" + this.entity + a, this.entity = "", this.state = s);
                                continue;
                            default:
                                throw new Error(this, "Unknown state: " + this.state)
                            }
                        this.position >= this.bufferCheckPosition && function (n) {
                            for (var t = Math.max(e.MAX_BUFFER_LENGTH, 10), a = 0, o = 0, r = i.length; o < r; o++) {
                                var s = n[i[o]].length;
                                if (s > t)
                                    switch (i[o]) {
                                    case "textNode":
                                        _(n);
                                        break;
                                    case "cdata":
                                        E(n, "oncdata", n.cdata),
                                        n.cdata = "";
                                        break;
                                    case "script":
                                        E(n, "onscript", n.script),
                                        n.script = "";
                                        break;
                                    default:
                                        A(n, "Max buffer length exceeded: " + i[o])
                                    }
                                a = Math.max(a, s)
                            }
                            var c = e.MAX_BUFFER_LENGTH - a;
                            n.bufferCheckPosition = c + n.position
                        }
                        (this);
                        return this
                    }
                    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
                ,
                    resume: function () {
                        return this.error = null,
                        this
                    },
                    close: function () {
                        return this.write(null)
                    },
                    flush: function () {
                        var e;
                        _(e = this),
                        "" !== e.cdata && (E(e, "oncdata", e.cdata), e.cdata = ""),
                        "" !== e.script && (E(e, "onscript", e.script), e.script = "")
                    }
                };
                try {
                    n = t(16).Stream
                } catch (e) {
                    n = function () {}
                }
                n || (n = function () {});
                var o = e.EVENTS.filter((function (e) {
                            return "error" !== e && "end" !== e
                        }));
                function r(e, t) {
                    if (!(this instanceof r))
                        return new r(e, t);
                    n.apply(this),
                    this._parser = new a(e, t),
                    this.writable = !0,
                    this.readable = !0;
                    var i = this;
                    this._parser.onend = function () {
                        i.emit("end")
                    },
                    this._parser.onerror = function (e) {
                        i.emit("error", e),
                        i._parser.error = null
                    },
                    this._decoder = null,
                    o.forEach((function (e) {
                            Object.defineProperty(i, "on" + e, {
                                get: function () {
                                    return i._parser["on" + e]
                                },
                                set: function (n) {
                                    if (!n)
                                        return i.removeAllListeners(e), i._parser["on" + e] = n, n;
                                    i.on(e, n)
                                },
                                enumerable: !0,
                                configurable: !1
                            })
                        }))
                }
                r.prototype = Object.create(n.prototype, {
                    constructor: {
                        value: r
                    }
                }),
                r.prototype.write = function (e) {
                    if ("function" == typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e)) {
                        if (!this._decoder) {
                            var n = t(128).StringDecoder;
                            this._decoder = new n("utf8")
                        }
                        e = this._decoder.write(e)
                    }
                    return this._parser.write(e.toString()),
                    this.emit("data", e),
                    !0
                },
                r.prototype.end = function (e) {
                    return e && e.length && this.write(e),
                    this._parser.end(),
                    !0
                },
                r.prototype.on = function (e, t) {
                    var i = this;
                    return i._parser["on" + e] || -1 === o.indexOf(e) || (i._parser["on" + e] = function () {
                        var n = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                        n.splice(0, 0, e),
                        i.emit.apply(i, n)
                    }),
                    n.prototype.on.call(i, e, t)
                };
                var s = "http://www.w3.org/XML/1998/namespace",
                c = {
                    xml: s,
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                u = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                d = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
                function m(e) {
                    return " " === e || "\n" === e || "\r" === e || "\t" === e
                }
                function f(e) {
                    return '"' === e || "'" === e
                }
                function h(e) {
                    return ">" === e || m(e)
                }
                function g(e, n) {
                    return e.test(n)
                }
                function v(e, n) {
                    return !g(e, n)
                }
                var b,
                x,
                y,
                D = 0;
                for (var w in e.STATE = {
                        BEGIN: D++,
                        BEGIN_WHITESPACE: D++,
                        TEXT: D++,
                        TEXT_ENTITY: D++,
                        OPEN_WAKA: D++,
                        SGML_DECL: D++,
                        SGML_DECL_QUOTED: D++,
                        DOCTYPE: D++,
                        DOCTYPE_QUOTED: D++,
                        DOCTYPE_DTD: D++,
                        DOCTYPE_DTD_QUOTED: D++,
                        COMMENT_STARTING: D++,
                        COMMENT: D++,
                        COMMENT_ENDING: D++,
                        COMMENT_ENDED: D++,
                        CDATA: D++,
                        CDATA_ENDING: D++,
                        CDATA_ENDING_2: D++,
                        PROC_INST: D++,
                        PROC_INST_BODY: D++,
                        PROC_INST_ENDING: D++,
                        OPEN_TAG: D++,
                        OPEN_TAG_SLASH: D++,
                        ATTRIB: D++,
                        ATTRIB_NAME: D++,
                        ATTRIB_NAME_SAW_WHITE: D++,
                        ATTRIB_VALUE: D++,
                        ATTRIB_VALUE_QUOTED: D++,
                        ATTRIB_VALUE_CLOSED: D++,
                        ATTRIB_VALUE_UNQUOTED: D++,
                        ATTRIB_VALUE_ENTITY_Q: D++,
                        ATTRIB_VALUE_ENTITY_U: D++,
                        CLOSE_TAG: D++,
                        CLOSE_TAG_SAW_WHITE: D++,
                        SCRIPT: D++,
                        SCRIPT_ENDING: D++
                    }, e.XML_ENTITIES = {
                        amp: "&",
                        gt: ">",
                        lt: "<",
                        quot: '"',
                        apos: "'"
                    }, e.ENTITIES = {
                        amp: "&",
                        gt: ">",
                        lt: "<",
                        quot: '"',
                        apos: "'",
                        AElig: 198,
                        Aacute: 193,
                        Acirc: 194,
                        Agrave: 192,
                        Aring: 197,
                        Atilde: 195,
                        Auml: 196,
                        Ccedil: 199,
                        ETH: 208,
                        Eacute: 201,
                        Ecirc: 202,
                        Egrave: 200,
                        Euml: 203,
                        Iacute: 205,
                        Icirc: 206,
                        Igrave: 204,
                        Iuml: 207,
                        Ntilde: 209,
                        Oacute: 211,
                        Ocirc: 212,
                        Ograve: 210,
                        Oslash: 216,
                        Otilde: 213,
                        Ouml: 214,
                        THORN: 222,
                        Uacute: 218,
                        Ucirc: 219,
                        Ugrave: 217,
                        Uuml: 220,
                        Yacute: 221,
                        aacute: 225,
                        acirc: 226,
                        aelig: 230,
                        agrave: 224,
                        aring: 229,
                        atilde: 227,
                        auml: 228,
                        ccedil: 231,
                        eacute: 233,
                        ecirc: 234,
                        egrave: 232,
                        eth: 240,
                        euml: 235,
                        iacute: 237,
                        icirc: 238,
                        igrave: 236,
                        iuml: 239,
                        ntilde: 241,
                        oacute: 243,
                        ocirc: 244,
                        ograve: 242,
                        oslash: 248,
                        otilde: 245,
                        ouml: 246,
                        szlig: 223,
                        thorn: 254,
                        uacute: 250,
                        ucirc: 251,
                        ugrave: 249,
                        uuml: 252,
                        yacute: 253,
                        yuml: 255,
                        copy: 169,
                        reg: 174,
                        nbsp: 160,
                        iexcl: 161,
                        cent: 162,
                        pound: 163,
                        curren: 164,
                        yen: 165,
                        brvbar: 166,
                        sect: 167,
                        uml: 168,
                        ordf: 170,
                        laquo: 171,
                        not: 172,
                        shy: 173,
                        macr: 175,
                        deg: 176,
                        plusmn: 177,
                        sup1: 185,
                        sup2: 178,
                        sup3: 179,
                        acute: 180,
                        micro: 181,
                        para: 182,
                        middot: 183,
                        cedil: 184,
                        ordm: 186,
                        raquo: 187,
                        frac14: 188,
                        frac12: 189,
                        frac34: 190,
                        iquest: 191,
                        times: 215,
                        divide: 247,
                        OElig: 338,
                        oelig: 339,
                        Scaron: 352,
                        scaron: 353,
                        Yuml: 376,
                        fnof: 402,
                        circ: 710,
                        tilde: 732,
                        Alpha: 913,
                        Beta: 914,
                        Gamma: 915,
                        Delta: 916,
                        Epsilon: 917,
                        Zeta: 918,
                        Eta: 919,
                        Theta: 920,
                        Iota: 921,
                        Kappa: 922,
                        Lambda: 923,
                        Mu: 924,
                        Nu: 925,
                        Xi: 926,
                        Omicron: 927,
                        Pi: 928,
                        Rho: 929,
                        Sigma: 931,
                        Tau: 932,
                        Upsilon: 933,
                        Phi: 934,
                        Chi: 935,
                        Psi: 936,
                        Omega: 937,
                        alpha: 945,
                        beta: 946,
                        gamma: 947,
                        delta: 948,
                        epsilon: 949,
                        zeta: 950,
                        eta: 951,
                        theta: 952,
                        iota: 953,
                        kappa: 954,
                        lambda: 955,
                        mu: 956,
                        nu: 957,
                        xi: 958,
                        omicron: 959,
                        pi: 960,
                        rho: 961,
                        sigmaf: 962,
                        sigma: 963,
                        tau: 964,
                        upsilon: 965,
                        phi: 966,
                        chi: 967,
                        psi: 968,
                        omega: 969,
                        thetasym: 977,
                        upsih: 978,
                        piv: 982,
                        ensp: 8194,
                        emsp: 8195,
                        thinsp: 8201,
                        zwnj: 8204,
                        zwj: 8205,
                        lrm: 8206,
                        rlm: 8207,
                        ndash: 8211,
                        mdash: 8212,
                        lsquo: 8216,
                        rsquo: 8217,
                        sbquo: 8218,
                        ldquo: 8220,
                        rdquo: 8221,
                        bdquo: 8222,
                        dagger: 8224,
                        Dagger: 8225,
                        bull: 8226,
                        hellip: 8230,
                        permil: 8240,
                        prime: 8242,
                        Prime: 8243,
                        lsaquo: 8249,
                        rsaquo: 8250,
                        oline: 8254,
                        frasl: 8260,
                        euro: 8364,
                        image: 8465,
                        weierp: 8472,
                        real: 8476,
                        trade: 8482,
                        alefsym: 8501,
                        larr: 8592,
                        uarr: 8593,
                        rarr: 8594,
                        darr: 8595,
                        harr: 8596,
                        crarr: 8629,
                        lArr: 8656,
                        uArr: 8657,
                        rArr: 8658,
                        dArr: 8659,
                        hArr: 8660,
                        forall: 8704,
                        part: 8706,
                        exist: 8707,
                        empty: 8709,
                        nabla: 8711,
                        isin: 8712,
                        notin: 8713,
                        ni: 8715,
                        prod: 8719,
                        sum: 8721,
                        minus: 8722,
                        lowast: 8727,
                        radic: 8730,
                        prop: 8733,
                        infin: 8734,
                        ang: 8736,
                        and: 8743,
                        or: 8744,
                        cap: 8745,
                        cup: 8746,
                        int: 8747,
                        there4: 8756,
                        sim: 8764,
                        cong: 8773,
                        asymp: 8776,
                        ne: 8800,
                        equiv: 8801,
                        le: 8804,
                        ge: 8805,
                        sub: 8834,
                        sup: 8835,
                        nsub: 8836,
                        sube: 8838,
                        supe: 8839,
                        oplus: 8853,
                        otimes: 8855,
                        perp: 8869,
                        sdot: 8901,
                        lceil: 8968,
                        rceil: 8969,
                        lfloor: 8970,
                        rfloor: 8971,
                        lang: 9001,
                        rang: 9002,
                        loz: 9674,
                        spades: 9824,
                        clubs: 9827,
                        hearts: 9829,
                        diams: 9830
                    }, Object.keys(e.ENTITIES).forEach((function (n) {
                            var t = e.ENTITIES[n],
                            i = "number" == typeof t ? String.fromCharCode(t) : t;
                            e.ENTITIES[n] = i
                        })), e.STATE)
                    e.STATE[e.STATE[w]] = w;
                function k(e, n, t) {
                    e[n] && e[n](t)
                }
                function E(e, n, t) {
                    e.textNode && _(e),
                    k(e, n, t)
                }
                function _(e) {
                    e.textNode = C(e.opt, e.textNode),
                    e.textNode && k(e, "ontext", e.textNode),
                    e.textNode = ""
                }
                function C(e, n) {
                    return e.trim && (n = n.trim()),
                    e.normalize && (n = n.replace(/\s+/g, " ")),
                    n
                }
                function A(e, n) {
                    return _(e),
                    e.trackPosition && (n += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c),
                    n = new Error(n),
                    e.error = n,
                    k(e, "onerror", n),
                    e
                }
                function F(e) {
                    return e.sawRoot && !e.closedRoot && S(e, "Unclosed root tag"),
                    e.state !== D.BEGIN && e.state !== D.BEGIN_WHITESPACE && e.state !== D.TEXT && A(e, "Unexpected end"),
                    _(e),
                    e.c = "",
                    e.closed = !0,
                    k(e, "onend"),
                    a.call(e, e.strict, e.opt),
                    e
                }
                function S(e, n) {
                    if ("object" != typeof e || !(e instanceof a))
                        throw new Error("bad call to strictFail");
                    e.strict && A(e, n)
                }
                function T(e) {
                    e.strict || (e.tagName = e.tagName[e.looseCase]());
                    var n = e.tags[e.tags.length - 1] || e,
                    t = e.tag = {
                        name: e.tagName,
                        attributes: {}
                    };
                    e.opt.xmlns && (t.ns = n.ns),
                    e.attribList.length = 0,
                    E(e, "onopentagstart", t)
                }
                function O(e, n) {
                    var t = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
                    i = t[0],
                    a = t[1];
                    return n && "xmlns" === e && (i = "xmlns", a = ""), {
                        prefix: i,
                        local: a
                    }
                }
                function j(e) {
                    if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName))
                        e.attribName = e.attribValue = "";
                    else {
                        if (e.opt.xmlns) {
                            var n = O(e.attribName, !0),
                            t = n.prefix,
                            i = n.local;
                            if ("xmlns" === t)
                                if ("xml" === i && e.attribValue !== s)
                                    S(e, "xml: prefix must be bound to " + s + "\nActual: " + e.attribValue);
                                else if ("xmlns" === i && "http://www.w3.org/2000/xmlns/" !== e.attribValue)
                                    S(e, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + e.attribValue);
                                else {
                                    var a = e.tag,
                                    o = e.tags[e.tags.length - 1] || e;
                                    a.ns === o.ns && (a.ns = Object.create(o.ns)),
                                    a.ns[i] = e.attribValue
                                }
                            e.attribList.push([e.attribName, e.attribValue])
                        } else
                            e.tag.attributes[e.attribName] = e.attribValue, E(e, "onattribute", {
                                name: e.attribName,
                                value: e.attribValue
                            });
                        e.attribName = e.attribValue = ""
                    }
                }
                function I(e, n) {
                    if (e.opt.xmlns) {
                        var t = e.tag,
                        i = O(e.tagName);
                        t.prefix = i.prefix,
                        t.local = i.local,
                        t.uri = t.ns[i.prefix] || "",
                        t.prefix && !t.uri && (S(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), t.uri = i.prefix);
                        var a = e.tags[e.tags.length - 1] || e;
                        t.ns && a.ns !== t.ns && Object.keys(t.ns).forEach((function (n) {
                                E(e, "onopennamespace", {
                                    prefix: n,
                                    uri: t.ns[n]
                                })
                            }));
                        for (var o = 0, r = e.attribList.length; o < r; o++) {
                            var s = e.attribList[o],
                            c = s[0],
                            l = s[1],
                            u = O(c, !0),
                            p = u.prefix,
                            d = u.local,
                            m = "" === p ? "" : t.ns[p] || "",
                            f = {
                                name: c,
                                value: l,
                                prefix: p,
                                local: d,
                                uri: m
                            };
                            p && "xmlns" !== p && !m && (S(e, "Unbound namespace prefix: " + JSON.stringify(p)), f.uri = p),
                            e.tag.attributes[c] = f,
                            E(e, "onattribute", f)
                        }
                        e.attribList.length = 0
                    }
                    e.tag.isSelfClosing = !!n,
                    e.sawRoot = !0,
                    e.tags.push(e.tag),
                    E(e, "onopentag", e.tag),
                    n || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = D.TEXT : e.state = D.SCRIPT, e.tag = null, e.tagName = ""),
                    e.attribName = e.attribValue = "",
                    e.attribList.length = 0
                }
                function N(e) {
                    if (!e.tagName)
                        return S(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = D.TEXT);
                    if (e.script) {
                        if ("script" !== e.tagName)
                            return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = D.SCRIPT);
                        E(e, "onscript", e.script),
                        e.script = ""
                    }
                    var n = e.tags.length,
                    t = e.tagName;
                    e.strict || (t = t[e.looseCase]());
                    for (var i = t; n--; ) {
                        if (e.tags[n].name === i)
                            break;
                        S(e, "Unexpected close tag")
                    }
                    if (n < 0)
                        return S(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = D.TEXT);
                    e.tagName = t;
                    for (var a = e.tags.length; a-- > n; ) {
                        var o = e.tag = e.tags.pop();
                        e.tagName = e.tag.name,
                        E(e, "onclosetag", e.tagName);
                        var r = {};
                        for (var s in o.ns)
                            r[s] = o.ns[s];
                        var c = e.tags[e.tags.length - 1] || e;
                        e.opt.xmlns && o.ns !== c.ns && Object.keys(o.ns).forEach((function (n) {
                                var t = o.ns[n];
                                E(e, "onclosenamespace", {
                                    prefix: n,
                                    uri: t
                                })
                            }))
                    }
                    0 === n && (e.closedRoot = !0),
                    e.tagName = e.attribValue = e.attribName = "",
                    e.attribList.length = 0,
                    e.state = D.TEXT
                }
                function P(e) {
                    var n,
                    t = e.entity,
                    i = t.toLowerCase(),
                    a = "";
                    return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[i] ? e.ENTITIES[i] : ("#" === (t = i).charAt(0) && ("x" === t.charAt(1) ? (t = t.slice(2), a = (n = parseInt(t, 16)).toString(16)) : (t = t.slice(1), a = (n = parseInt(t, 10)).toString(10))), t = t.replace(/^0+/, ""), isNaN(n) || a.toLowerCase() !== t ? (S(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(n))
                }
                function R(e, n) {
                    "<" === n ? (e.state = D.OPEN_WAKA, e.startTagPosition = e.position) : m(n) || (S(e, "Non-whitespace before first tag."), e.textNode = n, e.state = D.TEXT)
                }
                function z(e, n) {
                    var t = "";
                    return n < e.length && (t = e.charAt(n)),
                    t
                }
                D = e.STATE,
                String.fromCodePoint || (b = String.fromCharCode, x = Math.floor, y = function () {
                    var e,
                    n,
                    t = 16384,
                    i = [],
                    a = -1,
                    o = arguments.length;
                    if (!o)
                        return "";
                    for (var r = ""; ++a < o; ) {
                        var s = Number(arguments[a]);
                        if (!isFinite(s) || s < 0 || s > 1114111 || x(s) !== s)
                            throw RangeError("Invalid code point: " + s);
                        s <= 65535 ? i.push(s) : (e = 55296 + ((s -= 65536) >> 10), n = s % 1024 + 56320, i.push(e, n)),
                        (a + 1 === o || i.length > t) && (r += b.apply(null, i), i.length = 0)
                    }
                    return r
                }, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                        value: y,
                        configurable: !0,
                        writable: !0
                    }) : String.fromCodePoint = y)
            }
            (n)
        }, function (e, n) {
            e.exports = require("string_decoder")
        }, function (e, n, t) {
            var i = t(130),
            a = process.cwd,
            o = null,
            r = process.env.GRACEFUL_FS_PLATFORM || process.platform;
            process.cwd = function () {
                return o || (o = a.call(process)),
                o
            };
            try {
                process.cwd()
            } catch (e) {}
            if ("function" == typeof process.chdir) {
                var s = process.chdir;
                process.chdir = function (e) {
                    o = null,
                    s.call(process, e)
                },
                Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, s)
            }
            e.exports = function (e) {
                i.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function (e) {
                    e.lchmod = function (n, t, a) {
                        e.open(n, i.O_WRONLY | i.O_SYMLINK, t, (function (n, i) {
                                n ? a && a(n) : e.fchmod(i, t, (function (n) {
                                        e.close(i, (function (e) {
                                                a && a(n || e)
                                            }))
                                    }))
                            }))
                    },
                    e.lchmodSync = function (n, t) {
                        var a,
                        o = e.openSync(n, i.O_WRONLY | i.O_SYMLINK, t),
                        r = !0;
                        try {
                            a = e.fchmodSync(o, t),
                            r = !1
                        } finally {
                            if (r)
                                try {
                                    e.closeSync(o)
                                } catch (e) {}
                            else
                                e.closeSync(o)
                        }
                        return a
                    }
                }
                (e);
                e.lutimes || function (e) {
                    i.hasOwnProperty("O_SYMLINK") && e.futimes ? (e.lutimes = function (n, t, a, o) {
                        e.open(n, i.O_SYMLINK, (function (n, i) {
                                n ? o && o(n) : e.futimes(i, t, a, (function (n) {
                                        e.close(i, (function (e) {
                                                o && o(n || e)
                                            }))
                                    }))
                            }))
                    }, e.lutimesSync = function (n, t, a) {
                        var o,
                        r = e.openSync(n, i.O_SYMLINK),
                        s = !0;
                        try {
                            o = e.futimesSync(r, t, a),
                            s = !1
                        } finally {
                            if (s)
                                try {
                                    e.closeSync(r)
                                } catch (e) {}
                            else
                                e.closeSync(r)
                        }
                        return o
                    }) : e.futimes && (e.lutimes = function (e, n, t, i) {
                        i && process.nextTick(i)
                    }, e.lutimesSync = function () {})
                }
                (e);
                e.chown = a(e.chown),
                e.fchown = a(e.fchown),
                e.lchown = a(e.lchown),
                e.chmod = n(e.chmod),
                e.fchmod = n(e.fchmod),
                e.lchmod = n(e.lchmod),
                e.chownSync = o(e.chownSync),
                e.fchownSync = o(e.fchownSync),
                e.lchownSync = o(e.lchownSync),
                e.chmodSync = t(e.chmodSync),
                e.fchmodSync = t(e.fchmodSync),
                e.lchmodSync = t(e.lchmodSync),
                e.stat = s(e.stat),
                e.fstat = s(e.fstat),
                e.lstat = s(e.lstat),
                e.statSync = c(e.statSync),
                e.fstatSync = c(e.fstatSync),
                e.lstatSync = c(e.lstatSync),
                e.chmod && !e.lchmod && (e.lchmod = function (e, n, t) {
                    t && process.nextTick(t)
                }, e.lchmodSync = function () {});
                e.chown && !e.lchown && (e.lchown = function (e, n, t, i) {
                    i && process.nextTick(i)
                }, e.lchownSync = function () {});
                "win32" === r && (e.rename = "function" != typeof e.rename ? e.rename : function (n) {
                    function t(t, i, a) {
                        var o = Date.now(),
                        r = 0;
                        n(t, i, (function s(c) {
                                if (c && ("EACCES" === c.code || "EPERM" === c.code || "EBUSY" === c.code) && Date.now() - o < 6e4)
                                    return setTimeout((function () {
                                            e.stat(i, (function (e, o) {
                                                    e && "ENOENT" === e.code ? n(t, i, s) : a(c)
                                                }))
                                        }), r), void(r < 100 && (r += 10));
                                a && a(c)
                            }))
                    }
                    return Object.setPrototypeOf && Object.setPrototypeOf(t, n),
                    t
                }
                    (e.rename));
                function n(n) {
                    return n ? function (t, i, a) {
                        return n.call(e, t, i, (function (e) {
                                l(e) && (e = null),
                                a && a.apply(this, arguments)
                            }))
                    }
                     : n
                }
                function t(n) {
                    return n ? function (t, i) {
                        try {
                            return n.call(e, t, i)
                        } catch (e) {
                            if (!l(e))
                                throw e
                        }
                    }
                     : n
                }
                function a(n) {
                    return n ? function (t, i, a, o) {
                        return n.call(e, t, i, a, (function (e) {
                                l(e) && (e = null),
                                o && o.apply(this, arguments)
                            }))
                    }
                     : n
                }
                function o(n) {
                    return n ? function (t, i, a) {
                        try {
                            return n.call(e, t, i, a)
                        } catch (e) {
                            if (!l(e))
                                throw e
                        }
                    }
                     : n
                }
                function s(n) {
                    return n ? function (t, i, a) {
                        function o(e, n) {
                            n && (n.uid < 0 && (n.uid += 4294967296), n.gid < 0 && (n.gid += 4294967296)),
                            a && a.apply(this, arguments)
                        }
                        return "function" == typeof i && (a = i, i = null),
                        i ? n.call(e, t, i, o) : n.call(e, t, o)
                    }
                     : n
                }
                function c(n) {
                    return n ? function (t, i) {
                        var a = i ? n.call(e, t, i) : n.call(e, t);
                        return a && (a.uid < 0 && (a.uid += 4294967296), a.gid < 0 && (a.gid += 4294967296)),
                        a
                    }
                     : n
                }
                function l(e) {
                    return !e || ("ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code))
                }
                e.read = "function" != typeof e.read ? e.read : function (n) {
                    function t(t, i, a, o, r, s) {
                        var c;
                        if (s && "function" == typeof s) {
                            var l = 0;
                            c = function (u, p, d) {
                                if (u && "EAGAIN" === u.code && l < 10)
                                    return l++, n.call(e, t, i, a, o, r, c);
                                s.apply(this, arguments)
                            }
                        }
                        return n.call(e, t, i, a, o, r, c)
                    }
                    return Object.setPrototypeOf && Object.setPrototypeOf(t, n),
                    t
                }
                (e.read),
                e.readSync = "function" != typeof e.readSync ? e.readSync : (u = e.readSync, function (n, t, i, a, o) {
                    for (var r = 0; ; )
                        try {
                            return u.call(e, n, t, i, a, o)
                        } catch (e) {
                            if ("EAGAIN" === e.code && r < 10) {
                                r++;
                                continue
                            }
                            throw e
                        }
                });
                var u
            }
        }, function (e, n) {
            e.exports = require("constants")
        }, function (e, n, t) {
            var i = t(16).Stream;
            e.exports = function (e) {
                return {
                    ReadStream: function n(t, a) {
                        if (!(this instanceof n))
                            return new n(t, a);
                        i.call(this);
                        var o = this;
                        this.path = t,
                        this.fd = null,
                        this.readable = !0,
                        this.paused = !1,
                        this.flags = "r",
                        this.mode = 438,
                        this.bufferSize = 65536,
                        a = a || {};
                        for (var r = Object.keys(a), s = 0, c = r.length; s < c; s++) {
                            var l = r[s];
                            this[l] = a[l]
                        }
                        this.encoding && this.setEncoding(this.encoding);
                        if (void 0 !== this.start) {
                            if ("number" != typeof this.start)
                                throw TypeError("start must be a Number");
                            if (void 0 === this.end)
                                this.end = 1 / 0;
                            else if ("number" != typeof this.end)
                                throw TypeError("end must be a Number");
                            if (this.start > this.end)
                                throw new Error("start must be <= end");
                            this.pos = this.start
                        }
                        if (null !== this.fd)
                            return void process.nextTick((function () {
                                    o._read()
                                }));
                        e.open(this.path, this.flags, this.mode, (function (e, n) {
                                if (e)
                                    return o.emit("error", e), void(o.readable = !1);
                                o.fd = n,
                                o.emit("open", n),
                                o._read()
                            }))
                    },
                    WriteStream: function n(t, a) {
                        if (!(this instanceof n))
                            return new n(t, a);
                        i.call(this),
                        this.path = t,
                        this.fd = null,
                        this.writable = !0,
                        this.flags = "w",
                        this.encoding = "binary",
                        this.mode = 438,
                        this.bytesWritten = 0,
                        a = a || {};
                        for (var o = Object.keys(a), r = 0, s = o.length; r < s; r++) {
                            var c = o[r];
                            this[c] = a[c]
                        }
                        if (void 0 !== this.start) {
                            if ("number" != typeof this.start)
                                throw TypeError("start must be a Number");
                            if (this.start < 0)
                                throw new Error("start must be >= zero");
                            this.pos = this.start
                        }
                        this.busy = !1,
                        this._queue = [],
                        null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
                    }
                }
            }
        }, function (e, n, t) {
            "use strict";
            e.exports = function (e) {
                if (null === e || "object" != typeof e)
                    return e;
                if (e instanceof Object)
                    var n = {
                        __proto__: i(e)
                    };
                else
                    n = Object.create(null);
                return Object.getOwnPropertyNames(e).forEach((function (t) {
                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                    })),
                n
            };
            var i = Object.getPrototypeOf || function (e) {
                return e.__proto__
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(4),
            a = t(1),
            o = t(9).mkdirs,
            r = t(15).pathExists,
            s = t(57).utimesMillis,
            c = t(18);
            function l(e, n, t, i, s) {
                const c = a.dirname(t);
                r(c, (a, r) => a ? s(a) : r ? p(e, n, t, i, s) : void o(c, a => a ? s(a) : p(e, n, t, i, s)))
            }
            function u(e, n, t, i, a, o) {
                Promise.resolve(a.filter(t, i)).then(r => r ? e(n, t, i, a, o) : o(), e => o(e))
            }
            function p(e, n, t, a, o) {
                (a.dereference ? i.stat : i.lstat)(n, (r, s) => r ? o(r) : s.isDirectory() ? function (e, n, t, a, o, r) {
                    return n ? h(t, a, o, r) : function (e, n, t, a, o) {
                        i.mkdir(t, i => {
                            if (i)
                                return o(i);
                            h(n, t, a, n => n ? o(n) : f(t, e, o))
                        })
                    }
                    (e.mode, t, a, o, r)
                }
                    (s, e, n, t, a, o) : s.isFile() || s.isCharacterDevice() || s.isBlockDevice() ? function (e, n, t, a, o, r) {
                    return n ? function (e, n, t, a, o) {
                        if (!a.overwrite)
                            return a.errorOnExist ? o(new Error(`'${t}' already exists`)) : o();
                        i.unlink(t, i => i ? o(i) : d(e, n, t, a, o))
                    }
                    (e, t, a, o, r) : d(e, t, a, o, r)
                }
                    (s, e, n, t, a, o) : s.isSymbolicLink() ? v(e, n, t, a, o) : s.isSocket() ? o(new Error("Cannot copy a socket file: " + n)) : s.isFIFO() ? o(new Error("Cannot copy a FIFO pipe: " + n)) : o(new Error("Unknown file: " + n)))
            }
            function d(e, n, t, a, o) {
                i.copyFile(n, t, i => i ? o(i) : a.preserveTimestamps ? function (e, n, t, i) {
                    if (function (e) {
                        return 0 == (128 & e)
                    }
                        (e))
                        return function (e, n, t) {
                            return f(e, 128 | n, t)
                        }
                    (t, e, a => a ? i(a) : m(e, n, t, i));
                    return m(e, n, t, i)
                }
                    (e.mode, n, t, o) : f(t, e.mode, o))
            }
            function m(e, n, t, a) {
                !function (e, n, t) {
                    i.stat(e, (e, i) => e ? t(e) : s(n, i.atime, i.mtime, t))
                }
                (n, t, n => n ? a(n) : f(t, e, a))
            }
            function f(e, n, t) {
                return i.chmod(e, n, t)
            }
            function h(e, n, t, a) {
                i.readdir(e, (i, o) => i ? a(i) : g(o, e, n, t, a))
            }
            function g(e, n, t, i, o) {
                const r = e.pop();
                return r ? function (e, n, t, i, o, r) {
                    const s = a.join(t, n),
                    l = a.join(i, n);
                    c.checkPaths(s, l, "copy", o, (n, a) => {
                        if (n)
                            return r(n);
                        const { destStat: c } = a;
                        !function (e, n, t, i, a) {
                            i.filter ? u(p, e, n, t, i, a) : p(e, n, t, i, a)
                        }
                        (c, s, l, o, n => n ? r(n) : g(e, t, i, o, r))
                    })
                }
                (e, r, n, t, i, o) : o()
            }
            function v(e, n, t, o, r) {
                i.readlink(n, (n, s) => n ? r(n) : (o.dereference && (s = a.resolve(process.cwd(), s)), e ? void i.readlink(t, (n, l) => n ? "EINVAL" === n.code || "UNKNOWN" === n.code ? i.symlink(s, t, r) : r(n) : (o.dereference && (l = a.resolve(process.cwd(), l)), c.isSrcSubdir(s, l) ? r(new Error(`Cannot copy '${s}' to a subdirectory of itself, '${l}'.`)) : e.isDirectory() && c.isSrcSubdir(l, s) ? r(new Error(`Cannot overwrite '${l}' with '${s}'.`)) : function (e, n, t) {
                                i.unlink(n, a => a ? t(a) : i.symlink(e, n, t))
                            }
                                (s, t, r))) : i.symlink(s, t, r)))
            }
            e.exports = function (e, n, t, i) {
                "function" != typeof t || i ? "function" == typeof t && (t = {
                        filter: t
                    }) : (i = t, t = {}),
                i = i || function () {},
                (t = t || {}).clobber = !("clobber" in t) || !!t.clobber,
                t.overwrite = "overwrite" in t ? !!t.overwrite : t.clobber,
                t.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0001"),
                c.checkPaths(e, n, "copy", t, (a, o) => {
                    if (a)
                        return i(a);
                    const { srcStat: r, destStat: s } = o;
                    c.checkParentPaths(e, r, n, "copy", a => a ? i(a) : t.filter ? u(l, s, e, n, t, i) : l(s, e, n, t, i))
                })
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(17), {
                checkPath : a
            } = t(135),
            o = e => "number" == typeof e ? e : {
                mode: 511,
                ...e
            }
            .mode;
            e.exports.makeDir = async(e, n) => (a(e), i.mkdir(e, {
                        mode: o(n),
                        recursive: !0
                    })),
            e.exports.makeDirSync = (e, n) => (a(e), i.mkdirSync(e, {
                    mode: o(n),
                    recursive: !0
                }))
        }, function (e, n, t) {
            "use strict";
            const i = t(1);
            e.exports.checkPath = function (e) {
                if ("win32" === process.platform) {
                    if (/[<>:"|?*]/.test(e.replace(i.parse(e).root, ""))) {
                        const n = new Error("Path contains invalid characters: " + e);
                        throw n.code = "EINVAL",
                        n
                    }
                }
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(4),
            a = t(1),
            o = t(9).mkdirsSync,
            r = t(57).utimesMillisSync,
            s = t(18);
            function c(e, n, t, o) {
                const r = (o.dereference ? i.statSync : i.lstatSync)(n);
                if (r.isDirectory())
                    return function (e, n, t, a, o) {
                        return n ? p(t, a, o) : function (e, n, t, a) {
                            return i.mkdirSync(t),
                            p(n, t, a),
                            u(t, e)
                        }
                        (e.mode, t, a, o)
                    }
                (r, e, n, t, o);
                if (r.isFile() || r.isCharacterDevice() || r.isBlockDevice())
                    return function (e, n, t, a, o) {
                        return n ? function (e, n, t, a) {
                            if (a.overwrite)
                                return i.unlinkSync(t), l(e, n, t, a);
                            if (a.errorOnExist)
                                throw new Error(`'${t}' already exists`)
                        }
                        (e, t, a, o) : l(e, t, a, o)
                    }
                (r, e, n, t, o);
                if (r.isSymbolicLink())
                    return function (e, n, t, o) {
                        let r = i.readlinkSync(n);
                        o.dereference && (r = a.resolve(process.cwd(), r));
                        if (e) {
                            let e;
                            try {
                                e = i.readlinkSync(t)
                            } catch (e) {
                                if ("EINVAL" === e.code || "UNKNOWN" === e.code)
                                    return i.symlinkSync(r, t);
                                throw e
                            }
                            if (o.dereference && (e = a.resolve(process.cwd(), e)), s.isSrcSubdir(r, e))
                                throw new Error(`Cannot copy '${r}' to a subdirectory of itself, '${e}'.`);
                            if (i.statSync(t).isDirectory() && s.isSrcSubdir(e, r))
                                throw new Error(`Cannot overwrite '${e}' with '${r}'.`);
                            return function (e, n) {
                                return i.unlinkSync(n),
                                i.symlinkSync(e, n)
                            }
                            (r, t)
                        }
                        return i.symlinkSync(r, t)
                    }
                (e, n, t, o);
                if (r.isSocket())
                    throw new Error("Cannot copy a socket file: " + n);
                if (r.isFIFO())
                    throw new Error("Cannot copy a FIFO pipe: " + n);
                throw new Error("Unknown file: " + n)
            }
            function l(e, n, t, a) {
                return i.copyFileSync(n, t),
                a.preserveTimestamps && function (e, n, t) {
                    (function (e) {
                        return 0 == (128 & e)
                    })(e) && function (e, n) {
                        u(e, 128 | n)
                    }
                    (t, e);
                    (function (e, n) {
                        const t = i.statSync(e);
                        r(n, t.atime, t.mtime)
                    })(n, t)
                }
                (e.mode, n, t),
                u(t, e.mode)
            }
            function u(e, n) {
                return i.chmodSync(e, n)
            }
            function p(e, n, t) {
                i.readdirSync(e).forEach(i => function (e, n, t, i) {
                    const o = a.join(n, e),
                    r = a.join(t, e), {
                        destStat: l
                    } = s.checkPathsSync(o, r, "copy", i);
                    return function (e, n, t, i) {
                        if (!i.filter || i.filter(n, t))
                            return c(e, n, t, i)
                    }
                    (l, o, r, i)
                }
                    (i, e, n, t))
            }
            e.exports = function (e, n, t) {
                "function" == typeof t && (t = {
                        filter: t
                    }),
                (t = t || {}).clobber = !("clobber" in t) || !!t.clobber,
                t.overwrite = "overwrite" in t ? !!t.overwrite : t.clobber,
                t.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0002");
                const { srcStat: r, destStat: l } = s.checkPathsSync(e, n, "copy", t);
                return s.checkParentPathsSync(e, r, n, "copy"),
                function (e, n, t, r) {
                    if (r.filter && !r.filter(n, t))
                        return;
                    const s = a.dirname(t);
                    i.existsSync(s) || o(s);
                    return c(e, n, t, r)
                }
                (l, e, n, t)
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(5).fromPromise,
            a = t(17),
            o = t(1),
            r = t(9),
            s = t(26),
            c = i((async function (e) {
                        let n;
                        try {
                            n = await a.readdir(e)
                        } catch {
                            return r.mkdirs(e)
                        }
                        return Promise.all(n.map(n => s.remove(o.join(e, n))))
                    }));
            function l(e) {
                let n;
                try {
                    n = a.readdirSync(e)
                } catch {
                    return r.mkdirsSync(e)
                }
                n.forEach(n => {
                    n = o.join(e, n),
                    s.removeSync(n)
                })
            }
            e.exports = {
                emptyDirSync: l,
                emptydirSync: l,
                emptyDir: c,
                emptydir: c
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(4),
            a = t(1),
            o = t(56),
            r = "win32" === process.platform;
            function s(e) {
                ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(n => {
                    e[n] = e[n] || i[n],
                    e[n += "Sync"] = e[n] || i[n]
                }),
                e.maxBusyTries = e.maxBusyTries || 3
            }
            function c(e, n, t) {
                let i = 0;
                "function" == typeof n && (t = n, n = {}),
                o(e, "rimraf: missing path"),
                o.strictEqual(typeof e, "string", "rimraf: path should be a string"),
                o.strictEqual(typeof t, "function", "rimraf: callback function required"),
                o(n, "rimraf: invalid options argument provided"),
                o.strictEqual(typeof n, "object", "rimraf: options should be object"),
                s(n),
                l(e, n, (function a(o) {
                        if (o) {
                            if (("EBUSY" === o.code || "ENOTEMPTY" === o.code || "EPERM" === o.code) && i < n.maxBusyTries) {
                                i++;
                                return setTimeout(() => l(e, n, a), 100 * i)
                            }
                            "ENOENT" === o.code && (o = null)
                        }
                        t(o)
                    }))
            }
            function l(e, n, t) {
                o(e),
                o(n),
                o("function" == typeof t),
                n.lstat(e, (i, a) => i && "ENOENT" === i.code ? t(null) : i && "EPERM" === i.code && r ? u(e, n, i, t) : a && a.isDirectory() ? d(e, n, i, t) : void n.unlink(e, i => {
                        if (i) {
                            if ("ENOENT" === i.code)
                                return t(null);
                            if ("EPERM" === i.code)
                                return r ? u(e, n, i, t) : d(e, n, i, t);
                            if ("EISDIR" === i.code)
                                return d(e, n, i, t)
                        }
                        return t(i)
                    }))
            }
            function u(e, n, t, i) {
                o(e),
                o(n),
                o("function" == typeof i),
                n.chmod(e, 438, a => {
                    a ? i("ENOENT" === a.code ? null : t) : n.stat(e, (a, o) => {
                        a ? i("ENOENT" === a.code ? null : t) : o.isDirectory() ? d(e, n, t, i) : n.unlink(e, i)
                    })
                })
            }
            function p(e, n, t) {
                let i;
                o(e),
                o(n);
                try {
                    n.chmodSync(e, 438)
                } catch (e) {
                    if ("ENOENT" === e.code)
                        return;
                    throw t
                }
                try {
                    i = n.statSync(e)
                } catch (e) {
                    if ("ENOENT" === e.code)
                        return;
                    throw t
                }
                i.isDirectory() ? f(e, n, t) : n.unlinkSync(e)
            }
            function d(e, n, t, i) {
                o(e),
                o(n),
                o("function" == typeof i),
                n.rmdir(e, r => {
                    !r || "ENOTEMPTY" !== r.code && "EEXIST" !== r.code && "EPERM" !== r.code ? r && "ENOTDIR" === r.code ? i(t) : i(r) : function (e, n, t) {
                        o(e),
                        o(n),
                        o("function" == typeof t),
                        n.readdir(e, (i, o) => {
                            if (i)
                                return t(i);
                            let r,
                            s = o.length;
                            if (0 === s)
                                return n.rmdir(e, t);
                            o.forEach(i => {
                                c(a.join(e, i), n, i => {
                                    if (!r)
                                        return i ? t(r = i) : void(0 == --s && n.rmdir(e, t))
                                })
                            })
                        })
                    }
                    (e, n, i)
                })
            }
            function m(e, n) {
                let t;
                s(n = n || {}),
                o(e, "rimraf: missing path"),
                o.strictEqual(typeof e, "string", "rimraf: path should be a string"),
                o(n, "rimraf: missing options"),
                o.strictEqual(typeof n, "object", "rimraf: options should be object");
                try {
                    t = n.lstatSync(e)
                } catch (t) {
                    if ("ENOENT" === t.code)
                        return;
                    "EPERM" === t.code && r && p(e, n, t)
                }
                try {
                    t && t.isDirectory() ? f(e, n, null) : n.unlinkSync(e)
                } catch (t) {
                    if ("ENOENT" === t.code)
                        return;
                    if ("EPERM" === t.code)
                        return r ? p(e, n, t) : f(e, n, t);
                    if ("EISDIR" !== t.code)
                        throw t;
                    f(e, n, t)
                }
            }
            function f(e, n, t) {
                o(e),
                o(n);
                try {
                    n.rmdirSync(e)
                } catch (i) {
                    if ("ENOTDIR" === i.code)
                        throw t;
                    if ("ENOTEMPTY" === i.code || "EEXIST" === i.code || "EPERM" === i.code)
                        !function (e, n) {
                            if (o(e), o(n), n.readdirSync(e).forEach(t => m(a.join(e, t), n)), !r) {
                                return n.rmdirSync(e, n)
                            } {
                                const t = Date.now();
                                do {
                                    try {
                                        return n.rmdirSync(e, n)
                                    } catch {}
                                } while (Date.now() - t < 500)
                            }
                        }
                    (e, n);
                    else if ("ENOENT" !== i.code)
                        throw i
                }
            }
            e.exports = c,
            c.sync = m
        }, function (e, n, t) {
            "use strict";
            const { createFile: i, createFileSync: a } = t(140), {
                createLink : o,
                createLinkSync : r
            } = t(141), {
                createSymlink : s,
                createSymlinkSync: c
            } = t(142);
            e.exports = {
                createFile: i,
                createFileSync: a,
                ensureFile: i,
                ensureFileSync: a,
                createLink: o,
                createLinkSync: r,
                ensureLink: o,
                ensureLinkSync: r,
                createSymlink: s,
                createSymlinkSync: c,
                ensureSymlink: s,
                ensureSymlinkSync: c
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(5).fromCallback,
            a = t(1),
            o = t(4),
            r = t(9);
            e.exports = {
                createFile: i((function (e, n) {
                        function t() {
                            o.writeFile(e, "", e => {
                                if (e)
                                    return n(e);
                                n()
                            })
                        }
                        o.stat(e, (i, s) => {
                            if (!i && s.isFile())
                                return n();
                            const c = a.dirname(e);
                            o.stat(c, (e, i) => {
                                if (e)
                                    return "ENOENT" === e.code ? r.mkdirs(c, e => {
                                        if (e)
                                            return n(e);
                                        t()
                                    }) : n(e);
                                i.isDirectory() ? t() : o.readdir(c, e => {
                                    if (e)
                                        return n(e)
                                })
                            })
                        })
                    })),
                createFileSync: function (e) {
                    let n;
                    try {
                        n = o.statSync(e)
                    } catch {}
                    if (n && n.isFile())
                        return;
                    const t = a.dirname(e);
                    try {
                        o.statSync(t).isDirectory() || o.readdirSync(t)
                    } catch (e) {
                        if (!e || "ENOENT" !== e.code)
                            throw e;
                        r.mkdirsSync(t)
                    }
                    o.writeFileSync(e, "")
                }
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(5).fromCallback,
            a = t(1),
            o = t(4),
            r = t(9),
            s = t(15).pathExists, {
                areIdentical: c
            } = t(18);
            e.exports = {
                createLink: i((function (e, n, t) {
                        function i(e, n) {
                            o.link(e, n, e => {
                                if (e)
                                    return t(e);
                                t(null)
                            })
                        }
                        o.lstat(n, (l, u) => {
                            o.lstat(e, (o, l) => {
                                if (o)
                                    return o.message = o.message.replace("lstat", "ensureLink"), t(o);
                                if (u && c(l, u))
                                    return t(null);
                                const p = a.dirname(n);
                                s(p, (a, o) => a ? t(a) : o ? i(e, n) : void r.mkdirs(p, a => {
                                        if (a)
                                            return t(a);
                                        i(e, n)
                                    }))
                            })
                        })
                    })),
                createLinkSync: function (e, n) {
                    let t;
                    try {
                        t = o.lstatSync(n)
                    } catch {}
                    try {
                        const n = o.lstatSync(e);
                        if (t && c(n, t))
                            return
                    } catch (e) {
                        throw e.message = e.message.replace("lstat", "ensureLink"),
                        e
                    }
                    const i = a.dirname(n);
                    return o.existsSync(i) || r.mkdirsSync(i),
                    o.linkSync(e, n)
                }
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(5).fromCallback,
            a = t(1),
            o = t(17),
            r = t(9),
            s = r.mkdirs,
            c = r.mkdirsSync,
            l = t(143),
            u = l.symlinkPaths,
            p = l.symlinkPathsSync,
            d = t(144),
            m = d.symlinkType,
            f = d.symlinkTypeSync,
            h = t(15).pathExists, {
                areIdentical: g
            } = t(18);
            function v(e, n, t, i) {
                u(e, n, (r, c) => {
                    if (r)
                        return i(r);
                    e = c.toDst,
                    m(c.toCwd, t, (t, r) => {
                        if (t)
                            return i(t);
                        const c = a.dirname(n);
                        h(c, (t, a) => t ? i(t) : a ? o.symlink(e, n, r, i) : void s(c, t => {
                                if (t)
                                    return i(t);
                                o.symlink(e, n, r, i)
                            }))
                    })
                })
            }
            e.exports = {
                createSymlink: i((function (e, n, t, i) {
                        i = "function" == typeof t ? t : i,
                        t = "function" != typeof t && t,
                        o.lstat(n, (a, r) => {
                            !a && r.isSymbolicLink() ? Promise.all([o.stat(e), o.stat(n)]).then(([a, o]) => {
                                if (g(a, o))
                                    return i(null);
                                v(e, n, t, i)
                            }) : v(e, n, t, i)
                        })
                    })),
                createSymlinkSync: function (e, n, t) {
                    let i;
                    try {
                        i = o.lstatSync(n)
                    } catch {}
                    if (i && i.isSymbolicLink()) {
                        const t = o.statSync(e),
                        i = o.statSync(n);
                        if (g(t, i))
                            return
                    }
                    const r = p(e, n);
                    e = r.toDst,
                    t = f(r.toCwd, t);
                    const s = a.dirname(n);
                    return o.existsSync(s) || c(s),
                    o.symlinkSync(e, n, t)
                }
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(1),
            a = t(4),
            o = t(15).pathExists;
            e.exports = {
                symlinkPaths: function (e, n, t) {
                    if (i.isAbsolute(e))
                        return a.lstat(e, n => n ? (n.message = n.message.replace("lstat", "ensureSymlink"), t(n)) : t(null, {
                                toCwd: e,
                                toDst: e
                            })); {
                        const r = i.dirname(n),
                        s = i.join(r, e);
                        return o(s, (n, o) => n ? t(n) : o ? t(null, {
                                toCwd: s,
                                toDst: e
                            }) : a.lstat(e, n => n ? (n.message = n.message.replace("lstat", "ensureSymlink"), t(n)) : t(null, {
                                    toCwd: e,
                                    toDst: i.relative(r, e)
                                })))
                    }
                },
                symlinkPathsSync: function (e, n) {
                    let t;
                    if (i.isAbsolute(e)) {
                        if (t = a.existsSync(e), !t)
                            throw new Error("absolute srcpath does not exist");
                        return {
                            toCwd: e,
                            toDst: e
                        }
                    } {
                        const o = i.dirname(n),
                        r = i.join(o, e);
                        if (t = a.existsSync(r), t)
                            return {
                                toCwd: r,
                                toDst: e
                            };
                        if (t = a.existsSync(e), !t)
                            throw new Error("relative srcpath does not exist");
                        return {
                            toCwd: e,
                            toDst: i.relative(o, e)
                        }
                    }
                }
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(4);
            e.exports = {
                symlinkType: function (e, n, t) {
                    if (t = "function" == typeof n ? n : t, n = "function" != typeof n && n)
                        return t(null, n);
                    i.lstat(e, (e, i) => {
                        if (e)
                            return t(null, "file");
                        n = i && i.isDirectory() ? "dir" : "file",
                        t(null, n)
                    })
                },
                symlinkTypeSync: function (e, n) {
                    let t;
                    if (n)
                        return n;
                    try {
                        t = i.lstatSync(e)
                    } catch {
                        return "file"
                    }
                    return t && t.isDirectory() ? "dir" : "file"
                }
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(5).fromPromise,
            a = t(146);
            a.outputJson = i(t(148)),
            a.outputJsonSync = t(149),
            a.outputJSON = a.outputJson,
            a.outputJSONSync = a.outputJsonSync,
            a.writeJSON = a.writeJson,
            a.writeJSONSync = a.writeJsonSync,
            a.readJSON = a.readJson,
            a.readJSONSync = a.readJsonSync,
            e.exports = a
        }, function (e, n, t) {
            "use strict";
            const i = t(147);
            e.exports = {
                readJson: i.readFile,
                readJsonSync: i.readFileSync,
                writeJson: i.writeFile,
                writeJsonSync: i.writeFileSync
            }
        }, function (e, n, t) {
            let i;
            try {
                i = t(4)
            } catch (e) {
                i = t(6)
            }
            const a = t(5), {
                stringify: o,
                stripBom: r
            } = t(37);
            const s = {
                readFile: a.fromPromise((async function (e, n = {}) {
                        "string" == typeof n && (n = {
                                encoding: n
                            });
                        const t = n.fs || i,
                        o = !("throws" in n) || n.throws;
                        let s,
                        c = await a.fromCallback(t.readFile)(e, n);
                        c = r(c);
                        try {
                            s = JSON.parse(c, n ? n.reviver : null)
                        } catch (n) {
                            if (o)
                                throw n.message = `${e}: ${n.message}`, n;
                            return null
                        }
                        return s
                    })),
                readFileSync: function (e, n = {}) {
                    "string" == typeof n && (n = {
                            encoding: n
                        });
                    const t = n.fs || i,
                    a = !("throws" in n) || n.throws;
                    try {
                        let i = t.readFileSync(e, n);
                        return i = r(i),
                        JSON.parse(i, n.reviver)
                    } catch (n) {
                        if (a)
                            throw n.message = `${e}: ${n.message}`, n;
                        return null
                    }
                },
                writeFile: a.fromPromise((async function (e, n, t = {}) {
                        const r = t.fs || i,
                        s = o(n, t);
                        await a.fromCallback(r.writeFile)(e, s, t)
                    })),
                writeFileSync: function (e, n, t = {}) {
                    const a = t.fs || i,
                    r = o(n, t);
                    return a.writeFileSync(e, r, t)
                }
            };
            e.exports = s
        }, function (e, n, t) {
            "use strict";
            const { stringify: i } = t(37), {
                outputFile: a
            } = t(38);
            e.exports = async function (e, n, t = {}) {
                const o = i(n, t);
                await a(e, o, t)
            }
        }, function (e, n, t) {
            "use strict";
            const { stringify: i } = t(37), {
                outputFileSync: a
            } = t(38);
            e.exports = function (e, n, t) {
                const o = i(n, t);
                a(e, o, t)
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(5).fromCallback;
            e.exports = {
                move: i(t(151)),
                moveSync: t(152)
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(4),
            a = t(1),
            o = t(36).copy,
            r = t(26).remove,
            s = t(9).mkdirp,
            c = t(15).pathExists,
            l = t(18);
            function u(e, n, t, i, a) {
                return i ? p(e, n, t, a) : t ? r(n, i => i ? a(i) : p(e, n, t, a)) : void c(n, (i, o) => i ? a(i) : o ? a(new Error("dest already exists.")) : p(e, n, t, a))
            }
            function p(e, n, t, a) {
                i.rename(e, n, i => i ? "EXDEV" !== i.code ? a(i) : function (e, n, t, i) {
                    o(e, n, {
                        overwrite: t,
                        errorOnExist: !0
                    }, n => n ? i(n) : r(e, i))
                }
                    (e, n, t, a) : a())
            }
            e.exports = function (e, n, t, i) {
                "function" == typeof t && (i = t, t = {});
                const o = (t = t || {}).overwrite || t.clobber || !1;
                l.checkPaths(e, n, "move", t, (t, r) => {
                    if (t)
                        return i(t);
                    const { srcStat: c, isChangingCase: p = !1 } = r;
                    l.checkParentPaths(e, c, n, "move", t => t ? i(t) : function (e) {
                        const n = a.dirname(e);
                        return a.parse(n).root === n
                    }
                        (n) ? u(e, n, o, p, i) : void s(a.dirname(n), t => t ? i(t) : u(e, n, o, p, i)))
                })
            }
        }, function (e, n, t) {
            "use strict";
            const i = t(4),
            a = t(1),
            o = t(36).copySync,
            r = t(26).removeSync,
            s = t(9).mkdirpSync,
            c = t(18);
            function l(e, n, t) {
                try {
                    i.renameSync(e, n)
                } catch (i) {
                    if ("EXDEV" !== i.code)
                        throw i;
                    return function (e, n, t) {
                        return o(e, n, {
                            overwrite: t,
                            errorOnExist: true
                        }),
                        r(e)
                    }
                    (e, n, t)
                }
            }
            e.exports = function (e, n, t) {
                const o = (t = t || {}).overwrite || t.clobber || !1, {
                    srcStat: u,
                    isChangingCase: p = !1
                } = c.checkPathsSync(e, n, "move", t);
                return c.checkParentPathsSync(e, u, n, "move"),
                function (e) {
                    const n = a.dirname(e);
                    return a.parse(n).root === n
                }
                (n) || s(a.dirname(n)),
                function (e, n, t, a) {
                    if (a)
                        return l(e, n, t);
                    if (t)
                        return r(n), l(e, n, t);
                    if (i.existsSync(n))
                        throw new Error("dest already exists.");
                    return l(e, n, t)
                }
                (e, n, o, p)
            }
        }, function (e, n) {
            e.exports = require("fs/promises")
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.Lazy = void 0;
            n.Lazy = class {
                constructor(e) {
                    this._value = null,
                    this.creator = e
                }
                get hasValue() {
                    return null == this.creator
                }
                get value() {
                    if (null == this.creator)
                        return this._value;
                    const e = this.creator();
                    return this.value = e,
                    e
                }
                set value(e) {
                    this._value = e,
                    this.creator = null
                }
            }
        }, function (e, n, t) {
            const i = t(19);
            e.exports = (e, n) => {
                const t = i(e, n);
                return t ? t.version : null
            }
        }, function (e, n, t) {
            const i = t(19);
            e.exports = (e, n) => {
                const t = i(e.trim().replace(/^[=v]+/, ""), n);
                return t ? t.version : null
            }
        }, function (e, n, t) {
            const i = t(3);
            e.exports = (e, n, t, a, o) => {
                "string" == typeof t && (o = a, a = t, t = void 0);
                try {
                    return new i(e instanceof i ? e.version : e, t).inc(n, a, o).version
                } catch (e) {
                    return null
                }
            }
        }, function (e, n, t) {
            const i = t(19);
            e.exports = (e, n) => {
                const t = i(e, null, !0),
                a = i(n, null, !0),
                o = t.compare(a);
                if (0 === o)
                    return null;
                const r = o > 0,
                s = r ? t : a,
                c = r ? a : t,
                l = !!s.prerelease.length;
                if (!!c.prerelease.length && !l) {
                    if (!c.patch && !c.minor)
                        return "major";
                    if (0 === c.compareMain(s))
                        return c.minor && !c.patch ? "minor" : "patch"
                }
                const u = l ? "pre" : "";
                return t.major !== a.major ? u + "major" : t.minor !== a.minor ? u + "minor" : t.patch !== a.patch ? u + "patch" : "prerelease"
            }
        }, function (e, n, t) {
            const i = t(3);
            e.exports = (e, n) => new i(e, n).major
        }, function (e, n, t) {
            const i = t(3);
            e.exports = (e, n) => new i(e, n).minor
        }, function (e, n, t) {
            const i = t(3);
            e.exports = (e, n) => new i(e, n).patch
        }, function (e, n, t) {
            const i = t(19);
            e.exports = (e, n) => {
                const t = i(e, n);
                return t && t.prerelease.length ? t.prerelease : null
            }
        }, function (e, n, t) {
            const i = t(7);
            e.exports = (e, n, t) => i(n, e, t)
        }, function (e, n, t) {
            const i = t(7);
            e.exports = (e, n) => i(e, n, !0)
        }, function (e, n, t) {
            const i = t(41);
            e.exports = (e, n) => e.sort((e, t) => i(e, t, n))
        }, function (e, n, t) {
            const i = t(41);
            e.exports = (e, n) => e.sort((e, t) => i(t, e, n))
        }, function (e, n, t) {
            const i = t(3),
            a = t(19), {
                safeRe: o,
                t: r
            } = t(21);
            e.exports = (e, n) => {
                if (e instanceof i)
                    return e;
                if ("number" == typeof e && (e = String(e)), "string" != typeof e)
                    return null;
                let t = null;
                if ((n = n || {}).rtl) {
                    const i = n.includePrerelease ? o[r.COERCERTLFULL] : o[r.COERCERTL];
                    let a;
                    for (; (a = i.exec(e)) && (!t || t.index + t[0].length !== e.length); )
                        t && a.index + a[0].length === t.index + t[0].length || (t = a), i.lastIndex = a.index + a[1].length + a[2].length;
                    i.lastIndex = -1
                } else
                    t = e.match(n.includePrerelease ? o[r.COERCEFULL] : o[r.COERCE]);
                if (null === t)
                    return null;
                const s = t[2],
                c = t[3] || "0",
                l = t[4] || "0",
                u = n.includePrerelease && t[5] ? "-" + t[5] : "",
                p = n.includePrerelease && t[6] ? "+" + t[6] : "";
                return a(`${s}.${c}.${l}${u}${p}`, n)
            }
        }, function (e, n) {
            e.exports = class {
                constructor() {
                    this.max = 1e3,
                    this.map = new Map
                }
                get(e) {
                    const n = this.map.get(e);
                    return void 0 === n ? void 0 : (this.map.delete(e), this.map.set(e, n), n)
                }
                delete (e) {
                    return this.map.delete(e)
                }
                set(e, n) {
                    if (!this.delete(e) && void 0 !== n) {
                        if (this.map.size >= this.max) {
                            const e = this.map.keys().next().value;
                            this.delete(e)
                        }
                        this.map.set(e, n)
                    }
                    return this
                }
            }
        }, function (e, n, t) {
            const i = t(8);
            e.exports = (e, n) => new i(e, n).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
        }, function (e, n, t) {
            const i = t(3),
            a = t(8);
            e.exports = (e, n, t) => {
                let o = null,
                r = null,
                s = null;
                try {
                    s = new a(n, t)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    s.test(e) && (o && -1 !== r.compare(e) || (o = e, r = new i(o, t)))
                }),
                o
            }
        }, function (e, n, t) {
            const i = t(3),
            a = t(8);
            e.exports = (e, n, t) => {
                let o = null,
                r = null,
                s = null;
                try {
                    s = new a(n, t)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    s.test(e) && (o && 1 !== r.compare(e) || (o = e, r = new i(o, t)))
                }),
                o
            }
        }, function (e, n, t) {
            const i = t(3),
            a = t(8),
            o = t(29);
            e.exports = (e, n) => {
                e = new a(e, n);
                let t = new i("0.0.0");
                if (e.test(t))
                    return t;
                if (t = new i("0.0.0-0"), e.test(t))
                    return t;
                t = null;
                for (let n = 0; n < e.set.length; ++n) {
                    const a = e.set[n];
                    let r = null;
                    a.forEach(e => {
                        const n = new i(e.semver.version);
                        switch (e.operator) {
                        case ">":
                            0 === n.prerelease.length ? n.patch++ : n.prerelease.push(0),
                            n.raw = n.format();
                        case "":
                        case ">=":
                            r && !o(n, r) || (r = n);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + e.operator)
                        }
                    }),
                    !r || t && !o(t, r) || (t = r)
                }
                return t && e.test(t) ? t : null
            }
        }, function (e, n, t) {
            const i = t(8);
            e.exports = (e, n) => {
                try {
                    return new i(e, n).range || "*"
                } catch (e) {
                    return null
                }
            }
        }, function (e, n, t) {
            const i = t(45);
            e.exports = (e, n, t) => i(e, n, ">", t)
        }, function (e, n, t) {
            const i = t(45);
            e.exports = (e, n, t) => i(e, n, "<", t)
        }, function (e, n, t) {
            const i = t(8);
            e.exports = (e, n, t) => (e = new i(e, t), n = new i(n, t), e.intersects(n, t))
        }, function (e, n, t) {
            const i = t(31),
            a = t(7);
            e.exports = (e, n, t) => {
                const o = [];
                let r = null,
                s = null;
                const c = e.sort((e, n) => a(e, n, t));
                for (const e of c) {
                    i(e, n, t) ? (s = e, r || (r = e)) : (s && o.push([r, s]), s = null, r = null)
                }
                r && o.push([r, null]);
                const l = [];
                for (const [e, n] of o)
                    e === n ? l.push(e) : n || e !== c[0] ? n ? e === c[0] ? l.push("<=" + n) : l.push(`${e} - ${n}`) : l.push(">=" + e) : l.push("*");
                const u = l.join(" || "),
                p = "string" == typeof n.raw ? n.raw : String(n);
                return u.length < p.length ? u : n
            }
        }, function (e, n, t) {
            const i = t(8),
            a = t(30), {
                ANY: o
            } = a,
            r = t(31),
            s = t(7),
            c = [new a(">=0.0.0-0")],
            l = [new a(">=0.0.0")],
            u = (e, n, t) => {
                if (e === n)
                    return !0;
                if (1 === e.length && e[0].semver === o) {
                    if (1 === n.length && n[0].semver === o)
                        return !0;
                    e = t.includePrerelease ? c : l
                }
                if (1 === n.length && n[0].semver === o) {
                    if (t.includePrerelease)
                        return !0;
                    n = l
                }
                const i = new Set;
                let a,
                u,
                m,
                f,
                h,
                g,
                v;
                for (const n of e)
                    ">" === n.operator || ">=" === n.operator ? a = p(a, n, t) : "<" === n.operator || "<=" === n.operator ? u = d(u, n, t) : i.add(n.semver);
                if (i.size > 1)
                    return null;
                if (a && u) {
                    if (m = s(a.semver, u.semver, t), m > 0)
                        return null;
                    if (0 === m && (">=" !== a.operator || "<=" !== u.operator))
                        return null
                }
                for (const e of i) {
                    if (a && !r(e, String(a), t))
                        return null;
                    if (u && !r(e, String(u), t))
                        return null;
                    for (const i of n)
                        if (!r(e, String(i), t))
                            return !1;
                    return !0
                }
                let b = !(!u || t.includePrerelease || !u.semver.prerelease.length) && u.semver,
                x = !(!a || t.includePrerelease || !a.semver.prerelease.length) && a.semver;
                b && 1 === b.prerelease.length && "<" === u.operator && 0 === b.prerelease[0] && (b = !1);
                for (const e of n) {
                    if (v = v || ">" === e.operator || ">=" === e.operator, g = g || "<" === e.operator || "<=" === e.operator, a)
                        if (x && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === x.major && e.semver.minor === x.minor && e.semver.patch === x.patch && (x = !1), ">" === e.operator || ">=" === e.operator) {
                            if (f = p(a, e, t), f === e && f !== a)
                                return !1
                        } else if (">=" === a.operator && !r(a.semver, String(e), t))
                            return !1;
                    if (u)
                        if (b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = !1), "<" === e.operator || "<=" === e.operator) {
                            if (h = d(u, e, t), h === e && h !== u)
                                return !1
                        } else if ("<=" === u.operator && !r(u.semver, String(e), t))
                            return !1;
                    if (!e.operator && (u || a) && 0 !== m)
                        return !1
                }
                return !(a && g && !u && 0 !== m) && (!(u && v && !a && 0 !== m) && (!x && !b))
            },
            p = (e, n, t) => {
                if (!e)
                    return n;
                const i = s(e.semver, n.semver, t);
                return i > 0 ? e : i < 0 || ">" === n.operator && ">=" === e.operator ? n : e
            },
            d = (e, n, t) => {
                if (!e)
                    return n;
                const i = s(e.semver, n.semver, t);
                return i < 0 ? e : i > 0 || "<" === n.operator && "<=" === e.operator ? n : e
            };
            e.exports = (e, n, t = {}) => {
                if (e === n)
                    return !0;
                e = new i(e, t),
                n = new i(n, t);
                let a = !1;
                e: for (const i of e.set) {
                    for (const e of n.set) {
                        const n = u(i, e, t);
                        if (a = a || null !== n, n)
                            continue e
                    }
                    if (a)
                        return !1
                }
                return !0
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.createTempUpdateFile = n.DownloadedUpdateHelper = void 0;
            const i = t(25),
            a = t(6),
            o = t(180),
            r = t(14),
            s = t(1);
            n.DownloadedUpdateHelper = class {
                constructor(e) {
                    this.cacheDir = e,
                    this._file = null,
                    this._packageFile = null,
                    this.versionInfo = null,
                    this.fileInfo = null,
                    this._downloadedFileInfo = null
                }
                get downloadedFileInfo() {
                    return this._downloadedFileInfo
                }
                get file() {
                    return this._file
                }
                get packageFile() {
                    return this._packageFile
                }
                get cacheDirForPendingUpdate() {
                    return s.join(this.cacheDir, "pending")
                }
                async validateDownloadedPath(e, n, t, i) {
                    if (null != this.versionInfo && this.file === e && null != this.fileInfo)
                        return o(this.versionInfo, n) && o(this.fileInfo.info, t.info) && await r.pathExists(e) ? e : null;
                    const a = await this.getValidCachedUpdateFile(t, i);
                    return null === a ? null : (i.info(`Update has already been downloaded to ${e}).`), this._file = a, a)
                }
                async setDownloadedFile(e, n, t, i, a, o) {
                    this._file = e,
                    this._packageFile = n,
                    this.versionInfo = t,
                    this.fileInfo = i,
                    this._downloadedFileInfo = {
                        fileName: a,
                        sha512: i.info.sha512,
                        isAdminRightsRequired: !0 === i.info.isAdminRightsRequired
                    },
                    o && await r.outputJson(this.getUpdateInfoFile(), this._downloadedFileInfo)
                }
                async clear() {
                    this._file = null,
                    this._packageFile = null,
                    this.versionInfo = null,
                    this.fileInfo = null,
                    await this.cleanCacheDirForPendingUpdate()
                }
                async cleanCacheDirForPendingUpdate() {
                    try {
                        await r.emptyDir(this.cacheDirForPendingUpdate)
                    } catch (e) {}
                }
                async getValidCachedUpdateFile(e, n) {
                    var t;
                    const o = this.getUpdateInfoFile();
                    if (!await r.pathExists(o))
                        return null;
                    let c;
                    try {
                        c = await r.readJson(o)
                    } catch (e) {
                        let t = "No cached update info available";
                        return "ENOENT" !== e.code && (await this.cleanCacheDirForPendingUpdate(), t += ` (error on read: ${e.message})`),
                        n.info(t),
                        null
                    }
                    if (!(null !== (t = null !== (null == c ? void 0 : c.fileName)) && void 0 !== t && t))
                        return n.warn("Cached update info is corrupted: no fileName, directory for cached update will be cleaned"), await this.cleanCacheDirForPendingUpdate(), null;
                    if (e.info.sha512 !== c.sha512)
                        return n.info(`Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${c.sha512}, expected: ${e.info.sha512}. Directory for cached update will be cleaned`), await this.cleanCacheDirForPendingUpdate(), null;
                    const l = s.join(this.cacheDirForPendingUpdate, c.fileName);
                    if (!await r.pathExists(l))
                        return n.info("Cached update file doesn't exist"), null;
                    const u = await function (e, n = "sha512", t = "base64", o) {
                        return new Promise((r, s) => {
                            const c = i.createHash(n);
                            c.on("error", s).setEncoding(t),
                            a.createReadStream(e, {
                                ...o,
                                highWaterMark: 1048576
                            }).on("error", s).on("end", () => {
                                c.end(),
                                r(c.read())
                            }).pipe(c, {
                                end: !1
                            })
                        })
                    }
                    (l);
                    return e.info.sha512 !== u ? (n.warn(`Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${u}, expected: ${e.info.sha512}`), await this.cleanCacheDirForPendingUpdate(), null) : (this._downloadedFileInfo = c, l)
                }
                getUpdateInfoFile() {
                    return s.join(this.cacheDirForPendingUpdate, "update-info.json")
                }
            },
            n.createTempUpdateFile = async function (e, n, t) {
                let i = 0,
                a = s.join(n, e);
                for (let o = 0; o < 3; o++)
                    try {
                        return await r.unlink(a),
                        a
                    } catch (o) {
                        if ("ENOENT" === o.code)
                            return a;
                        t.warn("Error on remove temp update file: " + o),
                        a = s.join(n, `${i++}-${e}`)
                    }
                return a
            }
        }, function (e, n, t) {
            (function (e) {
                var t = "[object Arguments]",
                i = "[object Map]",
                a = "[object Object]",
                o = "[object Set]",
                r = /^\[object .+?Constructor\]$/,
                s = /^(?:0|[1-9]\d*)$/,
                c = {};
                c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0,
                c[t] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c[i] = c["[object Number]"] = c[a] = c["[object RegExp]"] = c[o] = c["[object String]"] = c["[object WeakMap]"] = !1;
                var l = "object" == typeof global && global && global.Object === Object && global,
                u = "object" == typeof self && self && self.Object === Object && self,
                p = l || u || Function("return this")(),
                d = n && !n.nodeType && n,
                m = d && "object" == typeof e && e && !e.nodeType && e,
                f = m && m.exports === d,
                h = f && l.process,
                g = function () {
                    try {
                        return h && h.binding && h.binding("util")
                    } catch (e) {}
                }
                (),
                v = g && g.isTypedArray;
                function b(e, n) {
                    for (var t = -1, i = null == e ? 0 : e.length; ++t < i; )
                        if (n(e[t], t, e))
                            return !0;
                    return !1
                }
                function x(e) {
                    var n = -1,
                    t = Array(e.size);
                    return e.forEach((function (e, i) {
                            t[++n] = [i, e]
                        })),
                    t
                }
                function y(e) {
                    var n = -1,
                    t = Array(e.size);
                    return e.forEach((function (e) {
                            t[++n] = e
                        })),
                    t
                }
                var D,
                w,
                k,
                E = Array.prototype,
                _ = Function.prototype,
                C = Object.prototype,
                A = p["__core-js_shared__"],
                F = _.toString,
                S = C.hasOwnProperty,
                T = (D = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + D : "",
                O = C.toString,
                j = RegExp("^" + F.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                I = f ? p.Buffer : void 0,
                N = p.Symbol,
                P = p.Uint8Array,
                R = C.propertyIsEnumerable,
                z = E.splice,
                M = N ? N.toStringTag : void 0,
                B = Object.getOwnPropertySymbols,
                L = I ? I.isBuffer : void 0,
                U = (w = Object.keys, k = Object, function (e) {
                    return w(k(e))
                }),
                $ = ge(p, "DataView"),
                G = ge(p, "Map"),
                q = ge(p, "Promise"),
                H = ge(p, "Set"),
                W = ge(p, "WeakMap"),
                Y = ge(Object, "create"),
                V = ye($),
                K = ye(G),
                X = ye(q),
                J = ye(H),
                Q = ye(W),
                Z = N ? N.prototype : void 0,
                ee = Z ? Z.valueOf : void 0;
                function ne(e) {
                    var n = -1,
                    t = null == e ? 0 : e.length;
                    for (this.clear(); ++n < t; ) {
                        var i = e[n];
                        this.set(i[0], i[1])
                    }
                }
                function te(e) {
                    var n = -1,
                    t = null == e ? 0 : e.length;
                    for (this.clear(); ++n < t; ) {
                        var i = e[n];
                        this.set(i[0], i[1])
                    }
                }
                function ie(e) {
                    var n = -1,
                    t = null == e ? 0 : e.length;
                    for (this.clear(); ++n < t; ) {
                        var i = e[n];
                        this.set(i[0], i[1])
                    }
                }
                function ae(e) {
                    var n = -1,
                    t = null == e ? 0 : e.length;
                    for (this.__data__ = new ie; ++n < t; )
                        this.add(e[n])
                }
                function oe(e) {
                    var n = this.__data__ = new te(e);
                    this.size = n.size
                }
                function re(e, n) {
                    var t = ke(e),
                    i = !t && we(e),
                    a = !t && !i && Ee(e),
                    o = !t && !i && !a && Se(e),
                    r = t || i || a || o,
                    s = r ? function (e, n) {
                        for (var t = -1, i = Array(e); ++t < e; )
                            i[t] = n(t);
                        return i
                    }
                    (e.length, String) : [],
                    c = s.length;
                    for (var l in e)
                        !n && !S.call(e, l) || r && ("length" == l || a && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || xe(l, c)) || s.push(l);
                    return s
                }
                function se(e, n) {
                    for (var t = e.length; t--; )
                        if (De(e[t][0], n))
                            return t;
                    return -1
                }
                function ce(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : M && M in Object(e) ? function (e) {
                        var n = S.call(e, M),
                        t = e[M];
                        try {
                            e[M] = void 0;
                            var i = !0
                        } catch (e) {}
                        var a = O.call(e);
                        i && (n ? e[M] = t : delete e[M]);
                        return a
                    }
                    (e) : function (e) {
                        return O.call(e)
                    }
                    (e)
                }
                function le(e) {
                    return Fe(e) && ce(e) == t
                }
                function ue(e, n, r, s, c) {
                    return e === n || (null == e || null == n || !Fe(e) && !Fe(n) ? e != e && n != n : function (e, n, r, s, c, l) {
                        var u = ke(e),
                        p = ke(n),
                        d = u ? "[object Array]" : be(e),
                        m = p ? "[object Array]" : be(n),
                        f = (d = d == t ? a : d) == a,
                        h = (m = m == t ? a : m) == a,
                        g = d == m;
                        if (g && Ee(e)) {
                            if (!Ee(n))
                                return !1;
                            u = !0,
                            f = !1
                        }
                        if (g && !f)
                            return l || (l = new oe), u || Se(e) ? me(e, n, r, s, c, l) : function (e, n, t, a, r, s, c) {
                                switch (t) {
                                case "[object DataView]":
                                    if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                                        return !1;
                                    e = e.buffer,
                                    n = n.buffer;
                                case "[object ArrayBuffer]":
                                    return !(e.byteLength != n.byteLength || !s(new P(e), new P(n)));
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                    return De(+e, +n);
                                case "[object Error]":
                                    return e.name == n.name && e.message == n.message;
                                case "[object RegExp]":
                                case "[object String]":
                                    return e == n + "";
                                case i:
                                    var l = x;
                                case o:
                                    var u = 1 & a;
                                    if (l || (l = y), e.size != n.size && !u)
                                        return !1;
                                    var p = c.get(e);
                                    if (p)
                                        return p == n;
                                    a |= 2,
                                    c.set(e, n);
                                    var d = me(l(e), l(n), a, r, s, c);
                                    return c.delete(e),
                                    d;
                                case "[object Symbol]":
                                    if (ee)
                                        return ee.call(e) == ee.call(n)
                                }
                                return !1
                            }
                        (e, n, d, r, s, c, l);
                        if (!(1 & r)) {
                            var v = f && S.call(e, "__wrapped__"),
                            b = h && S.call(n, "__wrapped__");
                            if (v || b) {
                                var D = v ? e.value() : e,
                                w = b ? n.value() : n;
                                return l || (l = new oe),
                                c(D, w, r, s, l)
                            }
                        }
                        if (!g)
                            return !1;
                        return l || (l = new oe),
                        function (e, n, t, i, a, o) {
                            var r = 1 & t,
                            s = fe(e),
                            c = s.length,
                            l = fe(n).length;
                            if (c != l && !r)
                                return !1;
                            var u = c;
                            for (; u--; ) {
                                var p = s[u];
                                if (!(r ? p in n : S.call(n, p)))
                                    return !1
                            }
                            var d = o.get(e);
                            if (d && o.get(n))
                                return d == n;
                            var m = !0;
                            o.set(e, n),
                            o.set(n, e);
                            var f = r;
                            for (; ++u < c; ) {
                                p = s[u];
                                var h = e[p],
                                g = n[p];
                                if (i)
                                    var v = r ? i(g, h, p, n, e, o) : i(h, g, p, e, n, o);
                                if (!(void 0 === v ? h === g || a(h, g, t, i, o) : v)) {
                                    m = !1;
                                    break
                                }
                                f || (f = "constructor" == p)
                            }
                            if (m && !f) {
                                var b = e.constructor,
                                x = n.constructor;
                                b == x || !("constructor" in e) || !("constructor" in n) || "function" == typeof b && b instanceof b && "function" == typeof x && x instanceof x || (m = !1)
                            }
                            return o.delete(e),
                            o.delete(n),
                            m
                        }
                        (e, n, r, s, c, l)
                    }
                        (e, n, r, s, ue, c))
                }
                function pe(e) {
                    return !(!Ae(e) || function (e) {
                        return !!T && T in e
                    }
                        (e)) && (_e(e) ? j : r).test(ye(e))
                }
                function de(e) {
                    if (t = (n = e) && n.constructor, i = "function" == typeof t && t.prototype || C, n !== i)
                        return U(e);
                    var n,
                    t,
                    i,
                    a = [];
                    for (var o in Object(e))
                        S.call(e, o) && "constructor" != o && a.push(o);
                    return a
                }
                function me(e, n, t, i, a, o) {
                    var r = 1 & t,
                    s = e.length,
                    c = n.length;
                    if (s != c && !(r && c > s))
                        return !1;
                    var l = o.get(e);
                    if (l && o.get(n))
                        return l == n;
                    var u = -1,
                    p = !0,
                    d = 2 & t ? new ae : void 0;
                    for (o.set(e, n), o.set(n, e); ++u < s; ) {
                        var m = e[u],
                        f = n[u];
                        if (i)
                            var h = r ? i(f, m, u, n, e, o) : i(m, f, u, e, n, o);
                        if (void 0 !== h) {
                            if (h)
                                continue;
                            p = !1;
                            break
                        }
                        if (d) {
                            if (!b(n, (function (e, n) {
                                        if (r = n, !d.has(r) && (m === e || a(m, e, t, i, o)))
                                            return d.push(n);
                                            var r
                                        }))) {
                                    p = !1;
                                    break
                                }
                        } else if (m !== f && !a(m, f, t, i, o)) {
                            p = !1;
                            break
                        }
                    }
                    return o.delete(e),
                    o.delete(n),
                    p
                }
                function fe(e) {
                    return function (e, n, t) {
                        var i = n(e);
                        return ke(e) ? i : function (e, n) {
                            for (var t = -1, i = n.length, a = e.length; ++t < i; )
                                e[a + t] = n[t];
                            return e
                        }
                        (i, t(e))
                    }
                    (e, Te, ve)
                }
                function he(e, n) {
                    var t,
                    i,
                    a = e.__data__;
                    return ("string" == (i = typeof(t = n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== t : null === t) ? a["string" == typeof n ? "string" : "hash"] : a.map
                }
                function ge(e, n) {
                    var t = function (e, n) {
                        return null == e ? void 0 : e[n]
                    }
                    (e, n);
                    return pe(t) ? t : void 0
                }
                ne.prototype.clear = function () {
                    this.__data__ = Y ? Y(null) : {},
                    this.size = 0
                },
                ne.prototype.delete = function (e) {
                    var n = this.has(e) && delete this.__data__[e];
                    return this.size -= n ? 1 : 0,
                    n
                },
                ne.prototype.get = function (e) {
                    var n = this.__data__;
                    if (Y) {
                        var t = n[e];
                        return "__lodash_hash_undefined__" === t ? void 0 : t
                    }
                    return S.call(n, e) ? n[e] : void 0
                },
                ne.prototype.has = function (e) {
                    var n = this.__data__;
                    return Y ? void 0 !== n[e] : S.call(n, e)
                },
                ne.prototype.set = function (e, n) {
                    var t = this.__data__;
                    return this.size += this.has(e) ? 0 : 1,
                    t[e] = Y && void 0 === n ? "__lodash_hash_undefined__" : n,
                    this
                },
                te.prototype.clear = function () {
                    this.__data__ = [],
                    this.size = 0
                },
                te.prototype.delete = function (e) {
                    var n = this.__data__,
                    t = se(n, e);
                    return !(t < 0) && (t == n.length - 1 ? n.pop() : z.call(n, t, 1), --this.size, !0)
                },
                te.prototype.get = function (e) {
                    var n = this.__data__,
                    t = se(n, e);
                    return t < 0 ? void 0 : n[t][1]
                },
                te.prototype.has = function (e) {
                    return se(this.__data__, e) > -1
                },
                te.prototype.set = function (e, n) {
                    var t = this.__data__,
                    i = se(t, e);
                    return i < 0 ? (++this.size, t.push([e, n])) : t[i][1] = n,
                    this
                },
                ie.prototype.clear = function () {
                    this.size = 0,
                    this.__data__ = {
                        hash: new ne,
                        map: new(G || te),
                        string: new ne
                    }
                },
                ie.prototype.delete = function (e) {
                    var n = he(this, e).delete(e);
                    return this.size -= n ? 1 : 0,
                    n
                },
                ie.prototype.get = function (e) {
                    return he(this, e).get(e)
                },
                ie.prototype.has = function (e) {
                    return he(this, e).has(e)
                },
                ie.prototype.set = function (e, n) {
                    var t = he(this, e),
                    i = t.size;
                    return t.set(e, n),
                    this.size += t.size == i ? 0 : 1,
                    this
                },
                ae.prototype.add = ae.prototype.push = function (e) {
                    return this.__data__.set(e, "__lodash_hash_undefined__"),
                    this
                },
                ae.prototype.has = function (e) {
                    return this.__data__.has(e)
                },
                oe.prototype.clear = function () {
                    this.__data__ = new te,
                    this.size = 0
                },
                oe.prototype.delete = function (e) {
                    var n = this.__data__,
                    t = n.delete(e);
                    return this.size = n.size,
                    t
                },
                oe.prototype.get = function (e) {
                    return this.__data__.get(e)
                },
                oe.prototype.has = function (e) {
                    return this.__data__.has(e)
                },
                oe.prototype.set = function (e, n) {
                    var t = this.__data__;
                    if (t instanceof te) {
                        var i = t.__data__;
                        if (!G || i.length < 199)
                            return i.push([e, n]), this.size = ++t.size, this;
                        t = this.__data__ = new ie(i)
                    }
                    return t.set(e, n),
                    this.size = t.size,
                    this
                };
                var ve = B ? function (e) {
                    return null == e ? [] : (e = Object(e), function (e, n) {
                        for (var t = -1, i = null == e ? 0 : e.length, a = 0, o = []; ++t < i; ) {
                            var r = e[t];
                            n(r, t, e) && (o[a++] = r)
                        }
                        return o
                    }
                        (B(e), (function (n) {
                                return R.call(e, n)
                            })))
                }
                 : function () {
                    return []
                },
                be = ce;
                function xe(e, n) {
                    return !!(n = null == n ? 9007199254740991 : n) && ("number" == typeof e || s.test(e)) && e > -1 && e % 1 == 0 && e < n
                }
                function ye(e) {
                    if (null != e) {
                        try {
                            return F.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }
                function De(e, n) {
                    return e === n || e != e && n != n
                }
                ($ && "[object DataView]" != be(new $(new ArrayBuffer(1))) || G && be(new G) != i || q && "[object Promise]" != be(q.resolve()) || H && be(new H) != o || W && "[object WeakMap]" != be(new W)) && (be = function (e) {
                    var n = ce(e),
                    t = n == a ? e.constructor : void 0,
                    r = t ? ye(t) : "";
                    if (r)
                        switch (r) {
                        case V:
                            return "[object DataView]";
                        case K:
                            return i;
                        case X:
                            return "[object Promise]";
                        case J:
                            return o;
                        case Q:
                            return "[object WeakMap]"
                        }
                    return n
                });
                var we = le(function () {
                    return arguments
                }
                        ()) ? le : function (e) {
                    return Fe(e) && S.call(e, "callee") && !R.call(e, "callee")
                },
                ke = Array.isArray;
                var Ee = L || function () {
                    return !1
                };
                function _e(e) {
                    if (!Ae(e))
                        return !1;
                    var n = ce(e);
                    return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
                }
                function Ce(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                }
                function Ae(e) {
                    var n = typeof e;
                    return null != e && ("object" == n || "function" == n)
                }
                function Fe(e) {
                    return null != e && "object" == typeof e
                }
                var Se = v ? function (e) {
                    return function (n) {
                        return e(n)
                    }
                }
                (v) : function (e) {
                    return Fe(e) && Ce(e.length) && !!c[ce(e)]
                };
                function Te(e) {
                    return null != (n = e) && Ce(n.length) && !_e(n) ? re(e) : de(e);
                    var n
                }
                e.exports = function (e, n) {
                    return ue(e, n)
                }
            }).call(this, t(48)(e))
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.ElectronAppAdapter = void 0;
            const i = t(1),
            a = t(182);
            n.ElectronAppAdapter = class {
                constructor(e = t(0).app) {
                    this.app = e
                }
                whenReady() {
                    return this.app.whenReady()
                }
                get version() {
                    return this.app.getVersion()
                }
                get name() {
                    return this.app.getName()
                }
                get isPackaged() {
                    return !0 === this.app.isPackaged
                }
                get appUpdateConfigPath() {
                    return this.isPackaged ? i.join(process.resourcesPath, "app-update.yml") : i.join(this.app.getAppPath(), "dev-app-update.yml")
                }
                get userDataPath() {
                    return this.app.getPath("userData")
                }
                get baseCachePath() {
                    return a.getAppCacheDir()
                }
                quit() {
                    this.app.quit()
                }
                onQuit(e) {
                    this.app.once("quit", (n, t) => e(t))
                }
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.getAppCacheDir = void 0;
            const i = t(1),
            a = t(13);
            n.getAppCacheDir = function () {
                const e = a.homedir();
                let n;
                return n = "win32" === process.platform ? process.env.LOCALAPPDATA || i.join(e, "AppData", "Local") : "darwin" === process.platform ? i.join(e, "Library", "Application Support", "Caches") : process.env.XDG_CACHE_HOME || i.join(e, ".cache"),
                n
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.ElectronHttpExecutor = n.getNetSession = n.NET_SESSION_NAME = void 0;
            const i = t(2);
            function a() {
                return t(0).session.fromPartition(n.NET_SESSION_NAME, {
                    cache: !1
                })
            }
            n.NET_SESSION_NAME = "electron-updater",
            n.getNetSession = a;
            class o extends i.HttpExecutor {
                constructor(e) {
                    super(),
                    this.proxyLoginCallback = e,
                    this.cachedSession = null
                }
                async download(e, n, t) {
                    return await t.cancellationToken.createPromise((a, o, r) => {
                        const s = {
                            headers: t.headers || void 0,
                            redirect: "manual"
                        };
                        i.configureRequestUrl(e, s),
                        i.configureRequestOptions(s),
                        this.doDownload(s, {
                            destination: n,
                            options: t,
                            onCancel: r,
                            callback: e => {
                                null == e ? a(n) : o(e)
                            },
                            responseHandler: null
                        }, 0)
                    })
                }
                createRequest(e, n) {
                    e.headers && e.headers.Host && (e.host = e.headers.Host, delete e.headers.Host),
                    null == this.cachedSession && (this.cachedSession = a());
                    const i = t(0).net.request({
                        ...e,
                        session: this.cachedSession
                    });
                    return i.on("response", n),
                    null != this.proxyLoginCallback && i.on("login", this.proxyLoginCallback),
                    i
                }
                addRedirectHandlers(e, n, t, a, o) {
                    e.on("redirect", (r, s, c) => {
                        e.abort(),
                        a > this.maxRedirects ? t(this.createMaxRedirectError()) : o(i.HttpExecutor.prepareRedirectUrlOptions(c, n))
                    })
                }
            }
            n.ElectronHttpExecutor = o
        }, function (e, n) {
            var t = /[\\^$.*+?()[\]{}|]/g,
            i = RegExp(t.source),
            a = "object" == typeof global && global && global.Object === Object && global,
            o = "object" == typeof self && self && self.Object === Object && self,
            r = a || o || Function("return this")(),
            s = Object.prototype.toString,
            c = r.Symbol,
            l = c ? c.prototype : void 0,
            u = l ? l.toString : void 0;
            function p(e) {
                if ("string" == typeof e)
                    return e;
                if (function (e) {
                    return "symbol" == typeof e || function (e) {
                        return !!e && "object" == typeof e
                    }
                    (e) && "[object Symbol]" == s.call(e)
                }
                    (e))
                    return u ? u.call(e) : "";
                var n = e + "";
                return "0" == n && 1 / e == -1 / 0 ? "-0" : n
            }
            e.exports = function (e) {
                var n;
                return (e = null == (n = e) ? "" : p(n)) && i.test(e) ? e.replace(t, "\\$&") : e
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.createClient = n.isUrlProbablySupportMultiRangeRequests = void 0;
            const i = t(2),
            a = t(186),
            o = t(63),
            r = t(64),
            s = t(188);
            function c(e) {
                return !e.includes("s3.amazonaws.com")
            }
            n.isUrlProbablySupportMultiRangeRequests = c,
            n.createClient = function (e, n, t) {
                if ("string" == typeof e)
                    throw i.newError("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
                const l = e.provider;
                switch (l) {
                case "github": {
                        const i = e,
                        a = (i.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || i.token;
                        return null == a ? new r.GitHubProvider(i, n, t) : new s.PrivateGitHubProvider(i, n, a, t)
                    }
                case "s3":
                case "spaces":
                    return new o.GenericProvider({
                        provider: "generic",
                        url: i.getS3LikeProviderBaseUrl(e),
                        channel: e.channel || null
                    }, n, {
                        ...t,
                        isUseMultipleRangeRequest: !1
                    });
                case "generic": {
                        const i = e;
                        return new o.GenericProvider(i, n, {
                            ...t,
                            isUseMultipleRangeRequest: !1 !== i.useMultipleRangeRequest && c(i.url)
                        })
                    }
                case "bintray":
                    return new a.BintrayProvider(e, t);
                default:
                    throw i.newError("Unsupported provider: " + l, "ERR_UPDATER_UNSUPPORTED_PROVIDER")
                }
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.BintrayProvider = void 0;
            const i = t(2),
            a = t(187),
            o = t(10),
            r = t(20),
            s = t(11);
            class c extends s.Provider {
                constructor(e, n) {
                    super(n),
                    this.client = new a.BintrayClient(e, n.executor, new i.CancellationToken),
                    this.baseUrl = r.newBaseUrl(`https://dl.bintray.com/${this.client.owner}/${this.client.repo}`)
                }
                setRequestHeaders(e) {
                    super.setRequestHeaders(e),
                    this.client.setRequestHeaders(e)
                }
                async getLatestVersion() {
                    try {
                        const e = await this.client.getVersion("_latest"),
                        n = r.getChannelFilename(this.getDefaultChannelName()),
                        t = await this.client.getVersionFiles(e.name),
                        a = t.find(e => e.name.endsWith("_" + n) || e.name.endsWith("-" + n));
                        if (null == a)
                            throw i.newError(`Cannot find channel file "${n}", existing files:\n${t.map(e => JSON.stringify(e, null, 2)).join(",\n")}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                        const c = new o.URL(`https://dl.bintray.com/${this.client.owner}/${this.client.repo}/${a.name}`);
                        return s.parseUpdateInfo(await this.httpRequest(c), n, c)
                    } catch (e) {
                        if ("statusCode" in e && 404 === e.statusCode)
                            throw i.newError("No latest version, please ensure that user, package and repository correctly configured. Or at least one version is published. " + (e.stack || e.message), "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
                        throw e
                    }
                }
                resolveFiles(e) {
                    return s.resolveFiles(e, this.baseUrl)
                }
            }
            n.BintrayProvider = c
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.BintrayClient = void 0;
            const i = t(52);
            n.BintrayClient = class {
                constructor(e, n, t, i) {
                    if (this.httpExecutor = n, this.cancellationToken = t, this.requestHeaders = null, null == e.owner)
                        throw new Error("owner is not specified");
                    if (null == e.package)
                        throw new Error("package is not specified");
                    this.repo = e.repo || "generic",
                    this.packageName = e.package,
                    this.owner = e.owner,
                    this.user = e.user || e.owner,
                    this.component = e.component || null,
                    this.distribution = e.distribution || "stable",
                    this.auth = null == i ? null : "Basic " + Buffer.from(`${this.user}:${i}`).toString("base64"),
                    this.basePath = `/packages/${this.owner}/${this.repo}/${this.packageName}`
                }
                setRequestHeaders(e) {
                    this.requestHeaders = e
                }
                bintrayRequest(e, n, t = null, a, o) {
                    return i.parseJson(this.httpExecutor.request(i.configureRequestOptions({
                                hostname: "api.bintray.com",
                                path: e,
                                headers: this.requestHeaders || void 0
                            }, n, o), a, t))
                }
                getVersion(e) {
                    return this.bintrayRequest(`${this.basePath}/versions/${e}`, this.auth, null, this.cancellationToken)
                }
                getVersionFiles(e) {
                    return this.bintrayRequest(`${this.basePath}/versions/${e}/files`, this.auth, null, this.cancellationToken)
                }
                createVersion(e) {
                    return this.bintrayRequest(this.basePath + "/versions", this.auth, {
                        name: e
                    }, this.cancellationToken)
                }
                deleteVersion(e) {
                    return this.bintrayRequest(`${this.basePath}/versions/${e}`, this.auth, null, this.cancellationToken, "DELETE")
                }
            }
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.PrivateGitHubProvider = void 0;
            const i = t(2),
            a = t(39),
            o = t(1),
            r = t(10),
            s = t(20),
            c = t(64),
            l = t(11);
            class u extends c.BaseGitHubProvider {
                constructor(e, n, t, i) {
                    super(e, "api.github.com", i),
                    this.updater = n,
                    this.token = t
                }
                createRequestOptions(e, n) {
                    const t = super.createRequestOptions(e, n);
                    return t.redirect = "manual",
                    t
                }
                async getLatestVersion() {
                    const e = new i.CancellationToken,
                    n = s.getChannelFilename(this.getDefaultChannelName()),
                    t = await this.getLatestVersionInfo(e),
                    o = t.assets.find(e => e.name === n);
                    if (null == o)
                        throw i.newError(`Cannot find ${n} in the release ${t.html_url || t.name}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                    const c = new r.URL(o.url);
                    let l;
                    try {
                        l = a.load(await this.httpRequest(c, this.configureHeaders("application/octet-stream"), e))
                    } catch (e) {
                        if (e instanceof i.HttpError && 404 === e.statusCode)
                            throw i.newError(`Cannot find ${n} in the latest release artifacts (${c}): ${e.stack || e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                        throw e
                    }
                    return l.assets = t.assets,
                    l
                }
                get fileExtraDownloadHeaders() {
                    return this.configureHeaders("application/octet-stream")
                }
                configureHeaders(e) {
                    return {
                        accept: e,
                        authorization: "token " + this.token
                    }
                }
                async getLatestVersionInfo(e) {
                    const n = this.updater.allowPrerelease;
                    let t = this.basePath;
                    n || (t += "/latest");
                    const a = s.newUrlFromBase(t, this.baseUrl);
                    try {
                        const t = JSON.parse(await this.httpRequest(a, this.configureHeaders("application/vnd.github.v3+json"), e));
                        return n ? t.find(e => e.prerelease) || t[0] : t
                    } catch (e) {
                        throw i.newError(`Unable to find latest version on GitHub (${a}), please ensure a production release exists: ${e.stack || e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
                    }
                }
                get basePath() {
                    return this.computeGithubBasePath(`/repos/${this.options.owner}/${this.options.repo}/releases`)
                }
                resolveFiles(e) {
                    return l.getFileList(e).map(n => {
                        const t = o.posix.basename(n.url).replace(/ /g, "-"),
                        a = e.assets.find(e => null != e && e.name === t);
                        if (null == a)
                            throw i.newError(`Cannot find asset "${t}" in: ${JSON.stringify(e.assets, null, 2)}`, "ERR_UPDATER_ASSET_NOT_FOUND");
                        return {
                            url: new r.URL(a.url),
                            info: n
                        }
                    })
                }
            }
            n.PrivateGitHubProvider = u
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.checkIsRangesSupported = n.executeTasksUsingMultipleRangeRequests = void 0;
            const i = t(2),
            a = t(69),
            o = t(46);
            function r(e, n) {
                if (e.statusCode >= 400)
                    return n(i.createHttpError(e)), !1;
                if (206 !== e.statusCode) {
                    const t = i.safeGetHeader(e, "accept-ranges");
                    if (null == t || "none" === t)
                        return n(new Error(`Server doesn't support Accept-Ranges (response code ${e.statusCode})`)), !1
                }
                return !0
            }
            n.executeTasksUsingMultipleRangeRequests = function (e, n, t, s, c) {
                const l = u => {
                    if (u >= n.length)
                        return null != e.fileMetadataBuffer && t.write(e.fileMetadataBuffer), void t.end();
                    const p = u + 1e3;
                    !function (e, n, t, s, c) {
                        let l = "bytes=",
                        u = 0;
                        const p = new Map,
                        d = [];
                        for (let e = n.start; e < n.end; e++) {
                            const t = n.tasks[e];
                            t.kind === o.OperationKind.DOWNLOAD && (l += `${t.start}-${t.end - 1}, `, p.set(u, e), u++, d.push(t.end - t.start))
                        }
                        if (u <= 1) {
                            const i = l => {
                                if (l >= n.end)
                                    return void s();
                                const u = n.tasks[l++];
                                if (u.kind === o.OperationKind.COPY)
                                    a.copyData(u, t, n.oldFileFd, c, () => i(l));
                                else {
                                    const n = e.createRequestOptions();
                                    n.headers.Range = `bytes=${u.start}-${u.end - 1}`;
                                    const a = e.httpExecutor.createRequest(n, e => {
                                        r(e, c) && (e.pipe(t, {
                                                end: !1
                                            }), e.once("end", () => i(l)))
                                    });
                                    e.httpExecutor.addErrorAndTimeoutHandlers(a, c),
                                    a.end()
                                }
                            };
                            return void i(n.start)
                        }
                        const m = e.createRequestOptions();
                        m.headers.Range = l.substring(0, l.length - 2);
                        const f = e.httpExecutor.createRequest(m, e => {
                            if (!r(e, c))
                                return;
                            const o = i.safeGetHeader(e, "content-type"),
                            l = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i.exec(o);
                            if (null == l)
                                return void c(new Error(`Content-Type "multipart/byteranges" is expected, but got "${o}"`));
                            const u = new a.DataSplitter(t, n, p, l[1] || l[2], d, s);
                            u.on("error", c),
                            e.pipe(u),
                            e.on("end", () => {
                                setTimeout(() => {
                                    f.abort(),
                                    c(new Error("Response ends without calling any handlers"))
                                }, 1e4)
                            })
                        });
                        e.httpExecutor.addErrorAndTimeoutHandlers(f, c),
                        f.end()
                    }
                    (e, {
                        tasks: n,
                        start: u,
                        end: Math.min(n.length, p),
                        oldFileFd: s
                    }, t, () => l(p), c)
                };
                return l
            },
            n.checkIsRangesSupported = r
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.ProgressDifferentialDownloadCallbackTransform = void 0;
            const i = t(16);
            var a;
            !function (e) {
                e[e.COPY = 0] = "COPY",
                e[e.DOWNLOAD = 1] = "DOWNLOAD"
            }
            (a || (a = {}));
            class o extends i.Transform {
                constructor(e, n, t) {
                    super(),
                    this.progressDifferentialDownloadInfo = e,
                    this.cancellationToken = n,
                    this.onProgress = t,
                    this.start = Date.now(),
                    this.transferred = 0,
                    this.delta = 0,
                    this.expectedBytes = 0,
                    this.index = 0,
                    this.operationType = a.COPY,
                    this.nextUpdate = this.start + 1e3
                }
                _transform(e, n, t) {
                    if (this.cancellationToken.cancelled)
                        return void t(new Error("cancelled"), null);
                    if (this.operationType == a.COPY)
                        return void t(null, e);
                    this.transferred += e.length,
                    this.delta += e.length;
                    const i = Date.now();
                    i >= this.nextUpdate && this.transferred !== this.expectedBytes && this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && (this.nextUpdate = i + 1e3, this.onProgress({
                            total: this.progressDifferentialDownloadInfo.grandTotal,
                            delta: this.delta,
                            transferred: this.transferred,
                            percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
                            bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
                        }), this.delta = 0),
                    t(null, e)
                }
                beginFileCopy() {
                    this.operationType = a.COPY
                }
                beginRangeDownload() {
                    this.operationType = a.DOWNLOAD,
                    this.expectedBytes += this.progressDifferentialDownloadInfo.expectedByteCounts[this.index++]
                }
                endRangeDownload() {
                    this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && this.onProgress({
                        total: this.progressDifferentialDownloadInfo.grandTotal,
                        delta: this.delta,
                        transferred: this.transferred,
                        percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
                        bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
                    })
                }
                _flush(e) {
                    this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
                            total: this.progressDifferentialDownloadInfo.grandTotal,
                            delta: this.delta,
                            transferred: this.transferred,
                            percent: 100,
                            bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
                        }), this.delta = 0, this.transferred = 0, e(null))
                }
            }
            n.ProgressDifferentialDownloadCallbackTransform = o
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.GenericDifferentialDownloader = void 0;
            const i = t(68);
            class a extends i.DifferentialDownloader {
                download(e, n) {
                    return this.doDownload(e, n)
                }
            }
            n.GenericDifferentialDownloader = a
        }, function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.verifySignature = void 0;
            const i = t(2),
            a = t(32),
            o = t(13);
            n.verifySignature = function (e, n, t) {
                return new Promise(r => {
                    const s = n.replace(/'/g, "''").replace(/`/g, "``");
                    a.execFile("powershell.exe", ["-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", `Get-AuthenticodeSignature '${s}' | ConvertTo-Json -Compress | ForEach-Object { [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($_)) }`], {
                        timeout: 2e4
                    }, (n, s, c) => {
                        try {
                            if (null != n || c)
                                return function (e, n, t) {
                                    if (function () {
                                        const e = o.release();
                                        return e.startsWith("6.") && !e.startsWith("6.3")
                                    }
                                        ())
                                        return void e.warn(`Cannot execute Get-AuthenticodeSignature: ${n || t}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
                                    try {
                                        a.execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", "ConvertTo-Json test"], {
                                            timeout: 1e4
                                        })
                                    } catch (n) {
                                        return void e.warn(`Cannot execute ConvertTo-Json: ${n.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`)
                                    }
                                    if (null != n)
                                        throw n;
                                    if (t)
                                        e.warn(`Cannot execute Get-AuthenticodeSignature, stderr: ${t}. Ignoring signature validation due to unknown stderr.`)
                                }
                            (t, n, c),
                            void r(null);
                            const l = function (e) {
                                const n = JSON.parse(e);
                                delete n.PrivateKey,
                                delete n.IsOSBinary,
                                delete n.SignatureType;
                                const t = n.SignerCertificate;
                                null != t && (delete t.Archived, delete t.Extensions, delete t.Handle, delete t.HasPrivateKey, delete t.SubjectName);
                                return delete n.Path,
                                n
                            }
                            (Buffer.from(s, "base64").toString("utf-8"));
                            if (0 === l.Status) {
                                const n = i.parseDn(l.SignerCertificate.Subject).get("CN");
                                if (e.includes(n))
                                    return void r(null)
                            }
                            const u = `publisherNames: ${e.join(" | ")}, raw info: ` + JSON.stringify(l, (e, n) => "RawData" === e ? void 0 : n, 2);
                            t.warn("Sign verification failed, installer signed with incorrect certificate: " + u),
                            r(u)
                        } catch (e) {
                            return t.warn(`Cannot execute Get-AuthenticodeSignature: ${n}. Ignoring signature validation due to unknown error.`),
                            void r(null)
                        }
                    })
                })
            }
        }, function (e, n, t) {
            const { nativeImage: i, ipcMain: a } = t(0),
            o = t(194);
            let r = {
                image: null,
                badgeDescription: "New notification"
            };
            e.exports = class {
                constructor(e, n = {}) {
                    this.win = e,
                    this.opts = n,
                    this.generator = new o(e, n),
                    this.initListeners(),
                    this.win.on("closed", () => {
                        this.win = null
                    }),
                    this.win.on("show", () => {
                        this.win.setOverlayIcon(r.image, r.badgeDescription)
                    })
                }
                update(e) {
                    e ? this.generator.generate(e).then(e => {
                        const n = i.createFromDataURL(e);
                        r = {
                            image: n,
                            badgeDescription: "New notification"
                        },
                        this.win.setOverlayIcon(r.image, r.badgeDescription)
                    }) : (r = {
                            image: null,
                            badgeDescription: "New notification"
                        }, this.win.setOverlayIcon(r.image, r.badgeDescription))
                }
                initListeners() {
                    a.on("update-badge", (e, n) => {
                        this.win && this.update(n),
                        e.returnValue = "success"
                    })
                }
            }
        }, function (e, n, t) {
            "use strict";
            e.exports = class {
                constructor(e, n = {}) {
                    this.win = e,
                    this.style = Object.assign({
                        fontColor: "white",
                        font: "24px arial",
                        color: "red",
                        fit: !0,
                        decimals: 0,
                        radius: 8
                    }, n)
                }
                generate(e) {
                    const n = JSON.stringify(this.style);
                    return this.win.webContents.executeJavaScript(`window.drawBadge = function ${this.drawBadge}; window.drawBadge(${e}, ${n});`)
                }
                drawBadge(e, n) {
                    var t = n.radius,
                    i = document.createElement("canvas");
                    return i.width = Math.ceil(2 * t),
                    i.height = Math.ceil(2 * t),
                    i.ctx = i.getContext("2d"),
                    i.radius = t,
                    i.number = e,
                    i.displayStyle = n,
                    n.color = n.color ? n.color : "red",
                    n.font = n.font ? n.font : "18px arial",
                    n.fontColor = n.fontColor ? n.fontColor : "white",
                    n.fit = void 0 === n.fit || n.fit,
                    n.decimals = void 0 === n.decimals || isNaN(n.decimals) ? 0 : n.decimals,
                    i.draw = function () {
                        var e,
                        n,
                        i,
                        a;
                        return this.width = Math.ceil(2 * this.radius),
                        this.height = Math.ceil(2 * this.radius),
                        this.ctx.clearRect(0, 0, this.width, this.height),
                        this.ctx.fillStyle = this.displayStyle.color,
                        this.ctx.beginPath(),
                        this.ctx.arc(t, t, t, 0, 2 * Math.PI),
                        this.ctx.fill(),
                        this.ctx.font = this.displayStyle.font,
                        this.ctx.textAlign = "center",
                        this.ctx.textBaseline = "middle",
                        this.ctx.fillStyle = this.displayStyle.fontColor,
                        a = this.number.toFixed(this.displayStyle.decimals),
                        i = Number(/[0-9\.]+/.exec(this.ctx.font)[0]),
                        !this.displayStyle.fit || isNaN(i) ? this.ctx.fillText(a, t, t) : (n = this.ctx.measureText(a).width, e = Math.cos(Math.atan(i / n)) * this.radius * 2 / n, this.ctx.setTransform(e, 0, 0, e, this.radius, this.radius), this.ctx.fillText(a, 0, 0), this.ctx.setTransform(1, 0, 0, 1, 0, 0)),
                        !this.displayStyle.fit || isNaN(i) ? this.ctx.fillText(a, t, t) : (e = Math.cos(Math.atan(i / n)) * this.radius * 2 / n, this.ctx.setTransform(e, 0, 0, e, this.radius, this.radius), this.ctx.fillText(a, 0, 0), this.ctx.setTransform(1, 0, 0, 1, 0, 0)),
                        this
                    },
                    i.draw(),
                    i.toDataURL()
                }
            }
        }, function (e, n, t) {
            "use strict";
            t.r(n),
            t.d(n, "setMainMenu", (function () {
                    return m
                })),
            t.d(n, "updateMenuWithLoginMenu", (function () {
                    return f
                }));
            var i,
            a,
            o,
            r,
            s = t(73),
            c = t(74),
            l = t(0).Menu,
            u = t(0).app,
            p = {
                tr: c,
                en: s
            },
            d = !1,
            m = function (e) {
                if (r = e, i = [{
                            label: (a = {
                                    __: function (n) {
                                        var t;
                                        return null == p || null === (t = p[e]) || void 0 === t ? void 0 : t[n]
                                    }
                                }).__("Edit"),
                            submenu: [{
                                    role: "undo",
                                    label: a.__("Undo")
                                }, {
                                    role: "redo",
                                    label: a.__("Redo")
                                }, {
                                    type: "separator"
                                }, {
                                    role: "cut",
                                    label: a.__("Cut")
                                }, {
                                    role: "copy",
                                    label: a.__("Copy")
                                }, {
                                    role: "paste",
                                    label: a.__("Paste")
                                }, {
                                    role: "pasteandmatchstyle"
                                }, {
                                    role: "delete",
                                    label: a.__("Delete")
                                }, {
                                    role: "selectall",
                                    label: a.__("Select all")
                                }
                            ]
                        }, {
                            label: a.__("View"),
                            submenu: [{
                                    label: a.__("Reload"),
                                    accelerator: "CmdOrCtrl+R",
                                    click: function (e, n) {
                                        n && (n.reload(), n.webContents.session.clearCache().then((function (e) {})))
                                    }
                                }, {
                                    label: a.__("toggleDevTools"),
                                    accelerator: "darwin" === process.platform ? "Alt+Command+I" : "Ctrl+Shift+I",
                                    click: function (e, n) {
                                        n && n.webContents.toggleDevTools()
                                    }
                                }, {
                                    type: "separator"
                                }, {
                                    role: "resetzoom",
                                    label: a.__("Actual size")
                                }, {
                                    role: "zoomin",
                                    label: a.__("Zoom in")
                                }, {
                                    role: "zoomout",
                                    label: a.__("Zoom out")
                                }, {
                                    type: "separator"
                                }, {
                                    role: "togglefullscreen",
                                    label: a.__("Toggle fullscreen")
                                }
                            ]
                        }, {
                            role: "window",
                            label: a.__("Window"),
                            submenu: [{
                                    role: "minimize",
                                    label: a.__("Minimize")
                                }, {
                                    role: "close",
                                    label: a.__("Close")
                                }
                            ]
                        }, {
                            role: "help",
                            label: a.__("Help"),
                            submenu: [{
                                    label: a.__("Learn more"),
                                    click: function () {
                                        t(0).shell.openExternal("tr" === r ? "https://bip.com/tr/category/sikca-sorulan-sorular/bip-web/" : "https://bip.com/en/category/faq/").catch(console.error)
                                    }
                                }
                            ]
                        }
                    ], "darwin" === process.platform) {
                    var n = u.getName();
                    i.unshift({
                        label: n,
                        submenu: [{
                                role: "about",
                                label: "About " + u.getName()
                            }, {
                                role: "services",
                                label: "Services",
                                submenu: []
                            }, {
                                type: "separator"
                            }, {
                                role: "hide",
                                label: "Hide " + u.getName()
                            }, {
                                role: "hideothers",
                                label: "Hide others"
                            }, {
                                role: "unhide",
                                label: "Unhide"
                            }, {
                                type: "separator"
                            }, {
                                role: "quit",
                                label: "Quit " + u.getName()
                            }
                        ]
                    }),
                    i[1].submenu.push({
                        label: "Speech"
                    }),
                    i[3].submenu = [{
                            label: "Close",
                            accelerator: "CmdOrCtrl+W",
                            role: "close"
                        }, {
                            label: "Minimize",
                            accelerator: "CmdOrCtrl+M",
                            role: "minimize"
                        }, {
                            label: "Zoom",
                            role: "zoom"
                        }, {
                            type: "separator"
                        }, {
                            role: "front",
                            label: "Bring All to Front"
                        }
                    ]
                }
                l.setApplicationMenu(l.buildFromTemplate(i))
            },
            f = function (e) {
                if (d !== e) {
                    d = e,
                    a = {
                        __: function (e) {
                            return p[r][e]
                        }
                    };
                    var n = null;
                    if (i && (n = i.find((function (e) {
                                        return e.label === a.__("Help")
                                    }))), e) {
                        if (n) {
                            var s = {
                                label: a.__("Contact Us"),
                                click: function () {
                                    var e;
                                    null === (e = t(0).BrowserWindow.getFocusedWindow()) || void 0 === e || e.webContents.executeJavaScript("window.openDrawers('contactUs')", !0)
                                }
                            },
                            c = {
                                label: a.__("Settings"),
                                click: function () {
                                    var e;
                                    null === (e = t(0).BrowserWindow.getFocusedWindow()) || void 0 === e || e.webContents.executeJavaScript("window.openDrawers('settings')", !0)
                                }
                            };
                            n.submenu.push(s),
                            n.submenu.push(c),
                            i && (o = l.buildFromTemplate(i), l.setApplicationMenu(o))
                        }
                    } else
                        n && (n.submenu = n.submenu.filter((function (e) {
                                        return e.label === a.__("Learn more")
                                    })), o = l.buildFromTemplate(i), l.setApplicationMenu(o));
                    l.setApplicationMenu(l.buildFromTemplate(i))
                }
            }
        }, function (e, n, t) {
            "use strict";
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                     : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            function a(e) {
                var n = function (e, n) {
                    if ("object" != i(e) || !e)
                        return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(e, n || "default");
                        if ("object" != i(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }
                (e, "string");
                return "symbol" == i(n) ? n : n + ""
            }
            function o(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, a(i.key), i)
                }
            }
            t.r(n),
            t.d(n, "default", (function () {
                    return g
                }));
            var r = t(0),
            s = t(76),
            c = t(102),
            l = t(24).autoUpdater,
            u = t(193),
            p = [],
            d = !1,
            m = t(195),
            f = m.setMainMenu,
            h = m.updateMenuWithLoginMenu;
            s({
                showInspectElement: !1,
                showSaveImageAs: !0
            });
            var g = function () {
                function e() {
                    !function (e, n) {
                        if (!(e instanceof n))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e)
                }
                return n = e,
                i = [{
                        key: "onContentReady",
                        value: function () {
                            var n;
                            d || (null === (n = e.mainWindow) || void 0 === n || n.show(), e.mainWindow.webContents.setVisualZoomLevelLimits(1, 3))
                        }
                    }, {
                        key: "createLoadingWindow",
                        value: function () {
                            e.loadingWindow = new r.BrowserWindow({
                                width: 600,
                                height: 400,
                                show: !1,
                                frame: !1,
                                movable: !0,
                                backgroundColor: "#1b2638",
                                webPreferences: {
                                    nodeIntegration: !0,
                                    contextIsolation: !1
                                }
                            }),
                            e.loadingWindow.once("ready-to-show", (function () {
                                    v("autoUpdater:ready-to-show checkForUpdates"),
                                    l.checkForUpdates()
                                })),
                            e.loadingWindow.on("close", e.beforeLoadingClose),
                            e.loadingWindow.loadFile("loading.html")
                        }
                    }, {
                        key: "beforeLoadingClose",
                        value: function () {
                            c.info("before loading close", d),
                            v("autoUpdater:before loading close " + d),
                            d && (v("autoUpdater:updateAvailable close loading"), e.mainWindow.close())
                        }
                    }, {
                        key: "createWindow",
                        value: function () {
                            l.logger = c,
                            l.logger.transports.file.level = "info",
                            c.info("App starting..."),
                            e.mainWindow = new r.BrowserWindow({
                                minWidth: 800,
                                minHeight: 600,
                                width: 1400,
                                height: 900,
                                show: !1,
                                webPreferences: {
                                    contextIsolation: !0,
                                    sandbox: !0,
                                    preload: __dirname + "/preload.js"
                                }
                            }),
                            e.mainWindow.loadURL("https://web.bip.com/"),
                            new u(e.mainWindow, {
                                font: "10px calibri",
                                fit: !1
                            }),
                            new r.Notification({}).on("click", (function () {
                                    v("Notification click"),
                                    e.mainWindow.moveTop(),
                                    e.mainWindow.show()
                                })),
                            r.ipcMain.on("notification-popup", (function () {
                                    v("Notification-popup"),
                                    e.mainWindow.show()
                                })),
                            e.mainWindow.webContents.session.on("will-download", (function (n, t) {
                                    v("Will-download " + t.getFilename());
                                    var i = t.getFilename().split(".").pop();
                                    if (v("Will-download item extension " + i), i) {
                                        var a = [{
                                                name: i,
                                                extensions: [i]
                                            }, {
                                                name: "All Files",
                                                extensions: ["*"]
                                            }
                                        ];
                                        t.setSaveDialogOptions({
                                            filters: a,
                                            title: "Save File"
                                        }),
                                        t.once("done", (function (n, i) {
                                                n.preventDefault(),
                                                "completed" === i && p.indexOf(t.getSavePath()) && (p.push(t.getSavePath()), v("Send file-downloaded"), e.mainWindow.webContents.send("file-downloaded", {
                                                        path: t.getSavePath()
                                                    }))
                                            }))
                                    }
                                })),
                            e.mainWindow.on("page-title-updated", (function (n, t) {
                                    var i,
                                    a = /\d+/g,
                                    o = t.split(" ")[0];
                                    if ("darwin" === process.platform)
                                        null != (i = a.exec(o)) ? (r.app.dock.setBadge(i[0]), v("page-title-updated " + i[0])) : (r.app.dock.setBadge(""), v("page-title-updated clear"));
                                    else {
                                        var s = a.exec(o);
                                        e.mainWindow.webContents.send("update-win-badge", s ? s[0] : ""),
                                        s && s[0] ? v("page-title-updated " + s[0]) : v("page-title-updated clear")
                                    }
                                })),
                            e.mainWindow.webContents.setWindowOpenHandler((function (e) {
                                    var n = e.url;
                                    return v("setWindowOpenHandler: open external url " + n),
                                    r.shell.openExternal(n), {
                                        action: "deny"
                                    }
                                })),
                            e.mainWindow.webContents.on("did-finish-load", e.onContentReady),
                            l.on("update-downloaded", (function () {
                                    l.quitAndInstall(),
                                    v("autoUpdater: Update-downloaded")
                                })),
                            l.on("update-available", (function () {
                                    c.info("update avaible, hide main window"),
                                    v("autoUpdater: Update not available."),
                                    e.mainWindow.hide(),
                                    d = !0,
                                    e.loadingWindow.show(),
                                    e.loadingWindow.focus()
                                })),
                            l.on("checking-for-update", (function () {
                                    c.info("Checking for update..."),
                                    v("autoUpdater: Checking for update...")
                                })),
                            l.on("update-not-available", (function (n, t) {
                                    c.info("Update not available."),
                                    v("autoUpdater: Update not available."),
                                    d = !1,
                                    e.loadingWindow.close()
                                })),
                            l.on("error", (function () {
                                    c.info("Error in auto-updater."),
                                    v("autoUpdater: Error in auto-updater."),
                                    e.mainWindow.show(),
                                    d && (d = !1),
                                    e.loadingWindow.close()
                                })),
                            l.on("download-progress", (function (n) {
                                    var t = n.percent;
                                    c.info("Download progress..."),
                                    v("autoUpdater: Download progress...");
                                    var i = Math.floor(t);
                                    e.loadingWindow.webContents.send("download-progress", i)
                                }))
                        }
                    }, {
                        key: "init",
                        value: function () {
                            r.app.enableSandbox(),
                            e.application = r.app,
                            e.application.on("ready", (function () {
                                    "darwin" !== process.platform && r.app.setAppUserModelId("BiP")
                                })),
                            e.application.whenReady().then((function () {
                                    e.createWindow(),
                                    e.createLoadingWindow(),
                                    r.app.on("activate", (function () {
                                            0 === r.BrowserWindow.getAllWindows().length && e.createWindow()
                                        })),
                                    v("Application: whenReady create window")
                                })),
                            e.application.on("window-all-closed", (function () {
                                    "darwin" !== process.platform && r.app.quit()
                                })),
                            r.ipcMain.on("sendLanguage", (function (e, n) {
                                    v("ipcMain:sendLanguage " + n),
                                    f(n)
                                })),
                            r.ipcMain.on("isLoggedIn", (function (e, n) {
                                    v("ipcMain:isLoggedIn " + n),
                                    h(n)
                                })),
                            r.ipcMain.on("openPath", (function (e, n) {
                                    v("ipcMain:openPath " + n),
                                    r.shell.openPath(n)
                                })),
                            r.ipcMain.on("remove-downloaded-file", (function (e, n) {
                                    v("ipcMain:remove-downloaded-file " + n),
                                    p = p.filter((function (e) {
                                                return e !== n
                                            }))
                                })),
                            r.ipcMain.on("notification-popup", (function () {
                                    v("ipcMain: notification-popup"),
                                    e.mainWindow.show(),
                                    e.mainWindow.focus()
                                }))
                        }
                    }
                ],
                (t = null) && o(n.prototype, t),
                i && o(n, i),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
                var n,
                t,
                i
            }
            ();
            function v(e) {
                var n;
                null === (n = g.mainWindow) || void 0 === n || n.webContents.send("send-log", e)
            }
            g.mainWindow = void 0,
            g.loadingWindow = void 0,
            g.application = void 0,
            g.init()
        }
        ]);
