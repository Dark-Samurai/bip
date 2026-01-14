!function (e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    },
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function (t) {
                    return e[t]
                }
                    .bind(null, r));
        return o
    },
    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return n.d(t, "a", t),
        t
    },
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "",
    n(n.s = 0)
}
([function (e, t, n) {
            e.exports = n(1)
        }, function (e, t, n) {
            var o,
            r,
            s,
            i = n(2),
            l = i.ipcRenderer;
            i.contextBridge.exposeInMainWorld("electron", {
                listen: function (e, t) {
                    "send-log" === e && (r = t),
                    "version" === e && (s = t)
                }
            }),
            window.addEventListener("DOMContentLoaded", (function () {
                    var e,
                    t,
                    i;
                    o = null !== (e = window.localStorage.getItem("i18nextLng")) && void 0 !== e ? e : "en",
                    r("get local storage i18nextLng " + window.localStorage.getItem("i18nextLng")),
                    o && l.send("sendLanguage", o),
                    i = n(3).version,
                    r("current version " + i),
                    null === (t = s) || void 0 === t || t(i),
                    setInterval((function () {
                            var e,
                            t = window.localStorage.getItem("auth_token"),
                            n = null !== (e = window.localStorage.getItem("i18nextLng")) && void 0 !== e ? e : "en";
                            n !== o && (l.send("sendLanguage", n), o = n),
                            t ? l.send("isLoggedIn", !0) : l.send("isLoggedIn", !1)
                        }), 3e3),
                    l.on("file-downloaded", (function (e, t) {
                            r("ipcRenderer: file-downloaded " + t.path),
                            function (e) {
                                var t = document.getElementById("toasts"),
                                n = document.createElement("div");
                                n.className = "media-toast",
                                n.style.backgroundColor = "rgba(36,42,50, 0.89)";
                                var s = document.createElement("p");
                                s.className = "toast-text";
                                var i = document.createElement("a");
                                i.className = "toast-open";
                                var a = document.createElement("a");
                                a.className = "toast-close";
                                var c = document.createElement("div");
                                c.className = "toast-icon",
                                a.appendChild(c),
                                n.appendChild(s),
                                n.appendChild(i),
                                n.appendChild(a),
                                t && t.appendChild(n);
                                a.style.display = "inline",
                                i.style.display = "inline",
                                "tr" === o ? (s.textContent = "İndirme tamamlandı", i.textContent = "aç") : (s.textContent = "Download completed", i.textContent = "open");
                                r("showDownloadProcess: Download completed, show toast"),
                                i.addEventListener("click", (function (t) {
                                        t.stopPropagation(),
                                        r("showDownloadProcess: openPath clicked"),
                                        l.send("openPath", e)
                                    }));
                                var p = setTimeout((function () {
                                            n.classList.remove("show-downloaded"),
                                            n.remove(),
                                            r("showDownloadProcess: removed toast"),
                                            l.send("remove-downloaded-file", e)
                                        }), 4900);
                                a.addEventListener("click", (function () {
                                        n.classList.remove("show-downloaded"),
                                        p && clearTimeout(p),
                                        n.remove(),
                                        l.send("remove-downloaded-file", e)
                                    })),
                                n.classList.add("show-downloaded")
                            }
                            (t.path)
                        })),
                    l.on("update-win-badge", (function (e, t) {
                            r("ipcRenderer: update-win-badge " + t),
                            l.sendSync("update-badge", t)
                        })),
                    l.on("send-log", (function (e, t) {
                            r(t)
                        }))
                }))
        }, function (e, t) {
            e.exports = require("electron")
        }, function (e) {
            e.exports = JSON.parse('{"author":"Turkcell İletişim Hizmetleri A.Ş","bugs":"https://jira.turkcell.com.tr/","build":{"appId":"com.turkcell.bip","productName":"BiP","mac":{"icon":"src/assets/images/512x512@2x.icns","entitlements":"entitlements.plist","entitlementsInherit":"entitlements.plist","extendInfo":{"NSCameraUsageDescription":"BiP requires access to your camera in order to make video-calls.","NSMicrophoneUsageDescription":"BiP requires access to your microphone in order to make calls (audio/video)."},"hardenedRuntime":"true","gatekeeperAssess":"false"},"win":{"icon":"src/assets/images/256x256.ico","target":["nsis"],"publisherName":"TURKCELL İLETİŞİM HİZMETLERİ A.Ş.","certificateSubjectName":"TURKCELL �LET���M H�ZMETLER� A.�."},"files":["!**/node_modules/**",{"from":"build/","to":"."},{"from":".electron/","to":"."},"package.json"],"publish":{"provider":"generic","url":"https://bip.com/newdesktop/"},"afterSign":"src/sign.js","afterPack":"src/afterPack.js"},"contributors":[{"name":"Turkcell İletişim Hizmetleri A.Ş","email":"info@bip.com","url":"https://web.bip.com"}],"description":"Telefonunuz kapalı olduğunda bile BiP Web ile sevdiklerinizle mesajlaşmanın keyfini çıkarırsınız!","dependencies":{"@electron/fuses":"^1.8.0","@electron/notarize":"^2.3.2","electron-context-menu":"~3.1.2","electron-log":"~4.4.7","electron-updater":"~4.3.5","electron-windows-badge":"~1.1.0"},"devDependencies":{"electron-builder":"^25.1.8","@babel/core":"~7.18.6","@babel/plugin-proposal-class-properties":"~7.16.7","@babel/plugin-proposal-decorators":"~7.17.9","@babel/plugin-proposal-nullish-coalescing-operator":"~7.16.7","@babel/plugin-proposal-object-rest-spread":"~7.17.3","@babel/plugin-proposal-private-methods":"~7.16.11","@babel/plugin-proposal-private-property-in-object":"~7.21.11","@babel/plugin-transform-runtime":"~7.17.0","@babel/preset-env":"~7.16.11","@babel/preset-typescript":"~7.16.7","@svgr/webpack":"~5.5.0","@types/crypto-js":"~4.1.1","@types/draft-js":"~0.11.9","@types/emoji-mart":"~3.0.9","@types/file-saver":"^2.0.7","@types/lodash":"~4.14.178","@types/ltx":"~3.0.2","@types/node":"~16.9.6","@types/pako":"~1.0.3","@types/ramda":"~0.27.64","@types/vcf":"~2.0.3","@types/wicg-file-system-access":"~2020.9.5","@typescript-eslint/eslint-plugin":"~5.10.2","@typescript-eslint/parser":"~5.10.2","babel-loader":"~8.2.4","babel-plugin-transform-import-meta":"^2.2.1","babel-plugin-transform-typescript-metadata":"~0.3.2","babel-preset-react-app":"~10.0.1","chalk":"~4.1.2","clean-webpack-plugin":"~3.0.0","cli-cursor":"~3.1.0","cli-progress":"~3.9.1","copy-webpack-plugin":"~6.4.1","cross-spawn":"~7.0.3","css-loader":"~5.0.1","dotenv-webpack":"~7.0.3","electron":"22.0.0","eslint":"~7.17.0","eslint-config-prettier":"~7.1.0","eslint-config-universe":"~6.0.1","eslint-import-resolver-typescript":"~2.7.1","eslint-plugin-import":"~2.26.0","eslint-plugin-use-decorator":"~0.2.0","eslint-webpack-plugin":"~2.4.1","file-loader":"~6.2.0","fs-extra":"~10.0.1","html-webpack-plugin":"~4.5.1","husky":"~7.0.1","inquirer":"~8.1.0","mini-css-extract-plugin":"~1.3.8","minimist":"~1.2.5","node-html-parser":"~3.3.5","obsolete-webpack-plugin":"~0.5.6","postcss":"~8.4.5","postcss-preset-env":"~7.2.0","prettier":"~2.4.1","process":"~0.11.10","progress-bar-webpack-plugin":"~2.1.0","react-dev-utils":"~11.0.4","resolve-url-loader":"~3.1.3","sass":"~1.32.0","sass-loader":"~10.1.0","script-ext-html-webpack-plugin":"~2.1.5","style-loader":"~2.0.0","stylelint":"~13.13.1","stylelint-config-sass-guidelines":"~7.1.0","stylelint-webpack-plugin":"~2.1.1","svg-url-loader":"~7.1.1","terser-webpack-plugin":"~4.2.3","type-fest":"~2.0.0","typescript":"~4.2.2","url-loader":"~4.1.1","webpack":"~4.44.2","webpack-auto-inject-version":"~1.2.2","webpack-bundle-analyzer":"~4.4.2","webpack-cli":"~4.9.2","webpack-dashboard":"~3.3.7","webpack-dev-server":"~4.8.1","webpack-format-messages":"~3.0.1","webpack-merge":"~5.7.3","webpack-report":"~2.0.3","workbox-webpack-plugin":"~6.5.4"},"engineStrict":true,"engines":{"node":"^12.13.0 || ^14.15.0 || >=15.0.0 || >=16.13.2","npm":">=6.14.11","yarn":"~1.22.0"},"homepage":"https://web.bip.com","keywords":["web","bip"],"license":"MIT","main":"app.js","name":"BiP","repository":"https://stash.turkcell.com.tr/git/projects/TBB/repos/bip-desktop","scripts":{"build:electron":"node multivac --electron --prod --config=prp3","build:electron:prod":"node multivac --electron --prod --config=prod","start":"node multivac","start:electron":"node multivac --electron --dev --config=dev","start:electron:prp3":"node multivac --electron --dev --config=prp3","builder":"electron-builder","storybook":"start-storybook -p 6006","build-storybook":"build-storybook","lint":"eslint \\"**/*.{ts,tsx}\\"","prepare":"husky install","test":"jest","start:esbuild":"node builder.js","electron":"electron","webpack:start":"webpack serve --config scripts/webpack.config.dev.js","webpack:start:prp3":"webpack serve --config scripts/webpack.config.prp3.js","webpack:build:beta":"webpack --config scripts/webpack.config.beta.js","dashboard":" webpack-dashboard -- webpack --config scripts/webpack.config.js"},"stylelint":{"extends":"stylelint-config-sass-guidelines","rules":{"selector-no-qualifying-type":null,"selector-max-id":null,"max-nesting-depth":null,"at-rule-disallowed-list":null,"selector-class-pattern":null,"property-no-vendor-prefix":null,"selector-max-compound-selectors":null},"ignoreFiles":["**/node_modules/*","**/*.css","**/*.tsx"]},"types":"dist","version":"3.0.101"}')
        }
    ]);
