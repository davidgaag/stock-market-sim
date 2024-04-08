"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Kd = Object.defineProperty;
var Gd = (e, t, n) => t in e ? Kd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var J = (e, t, n) => (Gd(e, typeof t != "symbol" ? t + "" : t, n), n);
function Yd(e, t) { for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r)
            if (i !== "default" && !(i in e)) {
                const o = Object.getOwnPropertyDescriptor(r, i);
                o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i); new MutationObserver(i => { for (const o of i)
    if (o.type === "childList")
        for (const l of o.addedNodes)
            l.tagName === "LINK" && l.rel === "modulepreload" && r(l); }).observe(document, { childList: !0, subtree: !0 }); function n(i) { const o = {}; return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o; } function r(i) { if (i.ep)
    return; i.ep = !0; const o = n(i); fetch(i.href, o); } })();
function io(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Va = { exports: {} }, oo = {}, Ha = { exports: {} }, W = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr = Symbol.for("react.element"), Jd = Symbol.for("react.portal"), Xd = Symbol.for("react.fragment"), Zd = Symbol.for("react.strict_mode"), qd = Symbol.for("react.profiler"), bd = Symbol.for("react.provider"), ep = Symbol.for("react.context"), tp = Symbol.for("react.forward_ref"), np = Symbol.for("react.suspense"), rp = Symbol.for("react.memo"), ip = Symbol.for("react.lazy"), ws = Symbol.iterator;
function op(e) { return e === null || typeof e != "object" ? null : (e = ws && e[ws] || e["@@iterator"], typeof e == "function" ? e : null); }
var Qa = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Ka = Object.assign, Ga = {};
function Kn(e, t, n) { this.props = e, this.context = t, this.refs = Ga, this.updater = n || Qa; }
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
Kn.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Ya() { }
Ya.prototype = Kn.prototype;
function au(e, t, n) { this.props = e, this.context = t, this.refs = Ga, this.updater = n || Qa; }
var cu = au.prototype = new Ya;
cu.constructor = au;
Ka(cu, Kn.prototype);
cu.isPureReactComponent = !0;
var xs = Array.isArray, Ja = Object.prototype.hasOwnProperty, fu = { current: null }, Xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Za(e, t, n) { var r, i = {}, o = null, l = null; if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        Ja.call(t, r) && !Xa.hasOwnProperty(r) && (i[r] = t[r]); var s = arguments.length - 2; if (s === 1)
    i.children = n;
else if (1 < s) {
    for (var c = Array(s), d = 0; d < s; d++)
        c[d] = arguments[d + 2];
    i.children = c;
} if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
        i[r] === void 0 && (i[r] = s[r]); return { $$typeof: Hr, type: e, key: o, ref: l, props: i, _owner: fu.current }; }
function lp(e, t) { return { $$typeof: Hr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function du(e) { return typeof e == "object" && e !== null && e.$$typeof === Hr; }
function up(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var Es = /\/+/g;
function Po(e, t) { return typeof e == "object" && e !== null && e.key != null ? up("" + e.key) : t.toString(36); }
function vi(e, t, n, r, i) { var o = typeof e; (o === "undefined" || o === "boolean") && (e = null); var l = !1; if (e === null)
    l = !0;
else
    switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object": switch (e.$$typeof) {
            case Hr:
            case Jd: l = !0;
        }
    } if (l)
    return l = e, i = i(l), e = r === "" ? "." + Po(l, 0) : r, xs(i) ? (n = "", e != null && (n = e.replace(Es, "$&/") + "/"), vi(i, t, n, "", function (d) { return d; })) : i != null && (du(i) && (i = lp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Es, "$&/") + "/") + e)), t.push(i)), 1; if (l = 0, r = r === "" ? "." : r + ":", xs(e))
    for (var s = 0; s < e.length; s++) {
        o = e[s];
        var c = r + Po(o, s);
        l += vi(o, t, n, c, i);
    }
else if (c = op(e), typeof c == "function")
    for (e = c.call(e), s = 0; !(o = e.next()).done;)
        o = o.value, c = r + Po(o, s++), l += vi(o, t, n, c, i);
else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return l; }
function qr(e, t, n) { if (e == null)
    return e; var r = [], i = 0; return vi(e, r, "", "", function (o) { return t.call(n, o, i++); }), r; }
function sp(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var _e = { current: null }, wi = { transition: null }, ap = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: wi, ReactCurrentOwner: fu };
W.Children = { map: qr, forEach: function (e, t, n) { qr(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return qr(e, function () { t++; }), t; }, toArray: function (e) { return qr(e, function (t) { return t; }) || []; }, only: function (e) { if (!du(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
W.Component = Kn;
W.Fragment = Xd;
W.Profiler = qd;
W.PureComponent = au;
W.StrictMode = Zd;
W.Suspense = np;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
W.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Ka({}, e.props), i = e.key, o = e.ref, l = e._owner; if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = fu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
    for (c in t)
        Ja.call(t, c) && !Xa.hasOwnProperty(c) && (r[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
} var c = arguments.length - 2; if (c === 1)
    r.children = n;
else if (1 < c) {
    s = Array(c);
    for (var d = 0; d < c; d++)
        s[d] = arguments[d + 2];
    r.children = s;
} return { $$typeof: Hr, type: e.type, key: i, ref: o, props: r, _owner: l }; };
W.createContext = function (e) { return e = { $$typeof: ep, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: bd, _context: e }, e.Consumer = e; };
W.createElement = Za;
W.createFactory = function (e) { var t = Za.bind(null, e); return t.type = e, t; };
W.createRef = function () { return { current: null }; };
W.forwardRef = function (e) { return { $$typeof: tp, render: e }; };
W.isValidElement = du;
W.lazy = function (e) { return { $$typeof: ip, _payload: { _status: -1, _result: e }, _init: sp }; };
W.memo = function (e, t) { return { $$typeof: rp, type: e, compare: t === void 0 ? null : t }; };
W.startTransition = function (e) { var t = wi.transition; wi.transition = {}; try {
    e();
}
finally {
    wi.transition = t;
} };
W.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); };
W.useCallback = function (e, t) { return _e.current.useCallback(e, t); };
W.useContext = function (e) { return _e.current.useContext(e); };
W.useDebugValue = function () { };
W.useDeferredValue = function (e) { return _e.current.useDeferredValue(e); };
W.useEffect = function (e, t) { return _e.current.useEffect(e, t); };
W.useId = function () { return _e.current.useId(); };
W.useImperativeHandle = function (e, t, n) { return _e.current.useImperativeHandle(e, t, n); };
W.useInsertionEffect = function (e, t) { return _e.current.useInsertionEffect(e, t); };
W.useLayoutEffect = function (e, t) { return _e.current.useLayoutEffect(e, t); };
W.useMemo = function (e, t) { return _e.current.useMemo(e, t); };
W.useReducer = function (e, t, n) { return _e.current.useReducer(e, t, n); };
W.useRef = function (e) { return _e.current.useRef(e); };
W.useState = function (e) { return _e.current.useState(e); };
W.useSyncExternalStore = function (e, t, n) { return _e.current.useSyncExternalStore(e, t, n); };
W.useTransition = function () { return _e.current.useTransition(); };
W.version = "18.2.0";
Ha.exports = W;
var S = Ha.exports;
const dt = io(S), cp = Yd({ __proto__: null, default: dt }, [S]); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var fp = S, dp = Symbol.for("react.element"), pp = Symbol.for("react.fragment"), hp = Object.prototype.hasOwnProperty, mp = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function qa(e, t, n) { var r, i = {}, o = null, l = null; n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref); for (r in t)
    hp.call(t, r) && !yp.hasOwnProperty(r) && (i[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]); return { $$typeof: dp, type: e, key: o, ref: l, props: i, _owner: mp.current }; }
oo.Fragment = pp;
oo.jsx = qa;
oo.jsxs = qa;
Va.exports = oo;
var B = Va.exports, al = {}, ba = { exports: {} }, je = {}, ec = { exports: {} }, tc = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(O, z) { var A = O.length; O.push(z); e: for (; 0 < A;) {
    var D = A - 1 >>> 1, V = O[D];
    if (0 < i(V, z))
        O[D] = z, O[A] = V, A = D;
    else
        break e;
} } function n(O) { return O.length === 0 ? null : O[0]; } function r(O) { if (O.length === 0)
    return null; var z = O[0], A = O.pop(); if (A !== z) {
    O[0] = A;
    e: for (var D = 0, V = O.length, Yt = V >>> 1; D < Yt;) {
        var be = 2 * (D + 1) - 1, hn = O[be], et = be + 1, Jt = O[et];
        if (0 > i(hn, A))
            et < V && 0 > i(Jt, hn) ? (O[D] = Jt, O[et] = A, D = et) : (O[D] = hn, O[be] = A, D = be);
        else if (et < V && 0 > i(Jt, A))
            O[D] = Jt, O[et] = A, D = et;
        else
            break e;
    }
} return z; } function i(O, z) { var A = O.sortIndex - z.sortIndex; return A !== 0 ? A : O.id - z.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () { return o.now(); };
}
else {
    var l = Date, s = l.now();
    e.unstable_now = function () { return l.now() - s; };
} var c = [], d = [], g = 1, y = null, x = 3, k = !1, C = !1, N = !1, U = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function v(O) { for (var z = n(d); z !== null;) {
    if (z.callback === null)
        r(d);
    else if (z.startTime <= O)
        r(d), z.sortIndex = z.expirationTime, t(c, z);
    else
        break;
    z = n(d);
} } function _(O) { if (N = !1, v(O), !C)
    if (n(c) !== null)
        C = !0, bn(I);
    else {
        var z = n(d);
        z !== null && er(_, z.startTime - O);
    } } function I(O, z) { C = !1, N && (N = !1, m(F), F = -1), k = !0; var A = x; try {
    for (v(z), y = n(c); y !== null && (!(y.expirationTime > z) || O && !pe());) {
        var D = y.callback;
        if (typeof D == "function") {
            y.callback = null, x = y.priorityLevel;
            var V = D(y.expirationTime <= z);
            z = e.unstable_now(), typeof V == "function" ? y.callback = V : y === n(c) && r(c), v(z);
        }
        else
            r(c);
        y = n(c);
    }
    if (y !== null)
        var Yt = !0;
    else {
        var be = n(d);
        be !== null && er(_, be.startTime - z), Yt = !1;
    }
    return Yt;
}
finally {
    y = null, x = A, k = !1;
} } var R = !1, L = null, F = -1, Y = 5, M = -1; function pe() { return !(e.unstable_now() - M < Y); } function qe() { if (L !== null) {
    var O = e.unstable_now();
    M = O;
    var z = !0;
    try {
        z = L(!0, O);
    }
    finally {
        z ? Gt() : (R = !1, L = null);
    }
}
else
    R = !1; } var Gt; if (typeof h == "function")
    Gt = function () { h(qe); };
else if (typeof MessageChannel < "u") {
    var qn = new MessageChannel, Xr = qn.port2;
    qn.port1.onmessage = qe, Gt = function () { Xr.postMessage(null); };
}
else
    Gt = function () { U(qe, 0); }; function bn(O) { L = O, R || (R = !0, Gt()); } function er(O, z) { F = U(function () { O(e.unstable_now()); }, z); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (O) { O.callback = null; }, e.unstable_continueExecution = function () { C || k || (C = !0, bn(I)); }, e.unstable_forceFrameRate = function (O) { 0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < O ? Math.floor(1e3 / O) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return x; }, e.unstable_getFirstCallbackNode = function () { return n(c); }, e.unstable_next = function (O) { switch (x) {
    case 1:
    case 2:
    case 3:
        var z = 3;
        break;
    default: z = x;
} var A = x; x = z; try {
    return O();
}
finally {
    x = A;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (O, z) { switch (O) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: O = 3;
} var A = x; x = O; try {
    return z();
}
finally {
    x = A;
} }, e.unstable_scheduleCallback = function (O, z, A) { var D = e.unstable_now(); switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? D + A : D) : A = D, O) {
    case 1:
        var V = -1;
        break;
    case 2:
        V = 250;
        break;
    case 5:
        V = 1073741823;
        break;
    case 4:
        V = 1e4;
        break;
    default: V = 5e3;
} return V = A + V, O = { id: g++, callback: z, priorityLevel: O, startTime: A, expirationTime: V, sortIndex: -1 }, A > D ? (O.sortIndex = A, t(d, O), n(c) === null && O === n(d) && (N ? (m(F), F = -1) : N = !0, er(_, A - D))) : (O.sortIndex = V, t(c, O), C || k || (C = !0, bn(I))), O; }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function (O) { var z = x; return function () { var A = x; x = z; try {
    return O.apply(this, arguments);
}
finally {
    x = A;
} }; }; })(tc);
ec.exports = tc;
var gp = ec.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var nc = S, Oe = gp;
function P(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var rc = new Set, _r = {};
function dn(e, t) { An(e, t), An(e + "Capture", t); }
function An(e, t) { for (_r[e] = t, e = 0; e < t.length; e++)
    rc.add(t[e]); }
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cl = Object.prototype.hasOwnProperty, vp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ss = {}, ks = {};
function wp(e) { return cl.call(ks, e) ? !0 : cl.call(Ss, e) ? !1 : vp.test(e) ? ks[e] = !0 : (Ss[e] = !0, !1); }
function xp(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Ep(e, t, n, r) { if (t === null || typeof t > "u" || xp(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function Te(e, t, n, r, i, o, l) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l; }
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { ve[e] = new Te(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; ve[t] = new Te(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { ve[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { ve[e] = new Te(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { ve[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { ve[e] = new Te(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { ve[e] = new Te(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { ve[e] = new Te(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { ve[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var pu = /[\-:]([a-z])/g;
function hu(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(pu, hu); ve[t] = new Te(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(pu, hu); ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(pu, hu); ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1); });
ve.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function mu(e, t, n, r) { var i = ve.hasOwnProperty(t) ? ve[t] : null; (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ep(t, n, i, r) && (n = null), r || i === null ? wp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var xt = nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, br = Symbol.for("react.element"), xn = Symbol.for("react.portal"), En = Symbol.for("react.fragment"), yu = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), ic = Symbol.for("react.provider"), oc = Symbol.for("react.context"), gu = Symbol.for("react.forward_ref"), dl = Symbol.for("react.suspense"), pl = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), lc = Symbol.for("react.offscreen"), Cs = Symbol.iterator;
function nr(e) { return e === null || typeof e != "object" ? null : (e = Cs && e[Cs] || e["@@iterator"], typeof e == "function" ? e : null); }
var ne = Object.assign, Lo;
function cr(e) {
    if (Lo === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Lo = t && t[1] || "";
        }
    return `
` + Lo + e;
}
var Uo = !1;
function Bo(e, t) {
    if (!e || Uo)
        return "";
    Uo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (d) {
                    var r = d;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (d) {
                    r = d;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (d) {
                r = d;
            }
            e();
        }
    }
    catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var i = d.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s];)
                s--;
            for (; 1 <= l && 0 <= s; l--, s--)
                if (i[l] !== o[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--, s--, 0 > s || i[l] !== o[s]) {
                                var c = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
                            }
                        while (1 <= l && 0 <= s);
                    break;
                }
        }
    }
    finally {
        Uo = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Sp(e) { switch (e.tag) {
    case 5: return cr(e.type);
    case 16: return cr("Lazy");
    case 13: return cr("Suspense");
    case 19: return cr("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Bo(e.type, !1), e;
    case 11: return e = Bo(e.type.render, !1), e;
    case 1: return e = Bo(e.type, !0), e;
    default: return "";
} }
function hl(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case En: return "Fragment";
    case xn: return "Portal";
    case fl: return "Profiler";
    case yu: return "StrictMode";
    case dl: return "Suspense";
    case pl: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case oc: return (e.displayName || "Context") + ".Consumer";
        case ic: return (e._context.displayName || "Context") + ".Provider";
        case gu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case vu: return t = e.displayName || null, t !== null ? t : hl(e.type) || "Memo";
        case Ct:
            t = e._payload, e = e._init;
            try {
                return hl(e(t));
            }
            catch (_b) { }
    } return null; }
function kp(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return hl(t);
    case 8: return t === yu ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function Dt(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function uc(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function Cp(e) { var t = uc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (l) { r = "" + l, o.call(this, l); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (l) { r = "" + l; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function ei(e) { e._valueTracker || (e._valueTracker = Cp(e)); }
function sc(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = uc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function Pi(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch (_b) {
    return e.body;
} }
function ml(e, t) { var n = t.checked; return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked }); }
function _s(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function ac(e, t) { t = t.checked, t != null && mu(e, "checked", t, !1); }
function yl(e, t) { ac(e, t); var n = Dt(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && gl(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function Ts(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function gl(e, t, n) { (t !== "number" || Pi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var fr = Array.isArray;
function Un(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
            e[i].selected = !0, r && (e[i].defaultSelected = !0);
            return;
        }
        t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
} }
function vl(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(P(91)); return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function Ns(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(P(92));
        if (fr(n)) {
            if (1 < n.length)
                throw Error(P(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Dt(n) }; }
function cc(e, t) { var n = Dt(t.value), r = Dt(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function Is(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function fc(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function wl(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? fc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var ti, dc = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, i); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (ti = ti || document.createElement("div"), ti.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ti.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function Tr(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var yr = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, _p = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) { _p.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e]; }); });
function pc(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px"; }
function hc(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = pc(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    } }
var Tp = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xl(e, t) { if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(P(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(P(62));
} }
function El(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var Sl = null;
function wu(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var kl = null, Bn = null, Fn = null;
function Rs(e) { if (e = Gr(e)) {
    if (typeof kl != "function")
        throw Error(P(280));
    var t = e.stateNode;
    t && (t = co(t), kl(e.stateNode, e.type, t));
} }
function mc(e) { Bn ? Fn ? Fn.push(e) : Fn = [e] : Bn = e; }
function yc() { if (Bn) {
    var e = Bn, t = Fn;
    if (Fn = Bn = null, Rs(e), t)
        for (e = 0; e < t.length; e++)
            Rs(t[e]);
} }
function gc(e, t) { return e(t); }
function vc() { }
var Fo = !1;
function wc(e, t, n) { if (Fo)
    return e(t, n); Fo = !0; try {
    return gc(e, t, n);
}
finally {
    Fo = !1, (Bn !== null || Fn !== null) && (vc(), yc());
} }
function Nr(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = co(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(P(231, t, typeof n)); return n; }
var Cl = !1;
if (yt)
    try {
        var rr = {};
        Object.defineProperty(rr, "passive", { get: function () { Cl = !0; } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
    }
    catch (_b) {
        Cl = !1;
    }
function Np(e, t, n, r, i, o, l, s, c) { var d = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, d);
}
catch (g) {
    this.onError(g);
} }
var gr = !1, Li = null, Ui = !1, _l = null, Ip = { onError: function (e) { gr = !0, Li = e; } };
function Rp(e, t, n, r, i, o, l, s, c) { gr = !1, Li = null, Np.apply(Ip, arguments); }
function Pp(e, t, n, r, i, o, l, s, c) { if (Rp.apply(this, arguments), gr) {
    if (gr) {
        var d = Li;
        gr = !1, Li = null;
    }
    else
        throw Error(P(198));
    Ui || (Ui = !0, _l = d);
} }
function pn(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function xc(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Ps(e) { if (pn(e) !== e)
    throw Error(P(188)); }
function Lp(e) { var t = e.alternate; if (!t) {
    if (t = pn(e), t === null)
        throw Error(P(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var i = n.return;
    if (i === null)
        break;
    var o = i.alternate;
    if (o === null) {
        if (r = i.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (i.child === o.child) {
        for (o = i.child; o;) {
            if (o === n)
                return Ps(i), e;
            if (o === r)
                return Ps(i), t;
            o = o.sibling;
        }
        throw Error(P(188));
    }
    if (n.return !== r.return)
        n = i, r = o;
    else {
        for (var l = !1, s = i.child; s;) {
            if (s === n) {
                l = !0, n = i, r = o;
                break;
            }
            if (s === r) {
                l = !0, r = i, n = o;
                break;
            }
            s = s.sibling;
        }
        if (!l) {
            for (s = o.child; s;) {
                if (s === n) {
                    l = !0, n = o, r = i;
                    break;
                }
                if (s === r) {
                    l = !0, r = o, n = i;
                    break;
                }
                s = s.sibling;
            }
            if (!l)
                throw Error(P(189));
        }
    }
    if (n.alternate !== r)
        throw Error(P(190));
} if (n.tag !== 3)
    throw Error(P(188)); return n.stateNode.current === n ? e : t; }
function Ec(e) { return e = Lp(e), e !== null ? Sc(e) : null; }
function Sc(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = Sc(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var kc = Oe.unstable_scheduleCallback, Ls = Oe.unstable_cancelCallback, Up = Oe.unstable_shouldYield, Bp = Oe.unstable_requestPaint, le = Oe.unstable_now, Fp = Oe.unstable_getCurrentPriorityLevel, xu = Oe.unstable_ImmediatePriority, Cc = Oe.unstable_UserBlockingPriority, Bi = Oe.unstable_NormalPriority, Op = Oe.unstable_LowPriority, _c = Oe.unstable_IdlePriority, lo = null, lt = null;
function jp(e) { if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
        lt.onCommitFiberRoot(lo, e, void 0, (e.current.flags & 128) === 128);
    }
    catch (_b) { } }
var Je = Math.clz32 ? Math.clz32 : Ap, Mp = Math.log, zp = Math.LN2;
function Ap(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Mp(e) / zp | 0) | 0; }
var ni = 64, ri = 4194304;
function dr(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function Fi(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455; if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? r = dr(s) : (o &= l, o !== 0 && (r = dr(o)));
}
else
    l = n & ~i, l !== 0 ? r = dr(l) : o !== 0 && (r = dr(o)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - Je(t), i = 1 << n, r |= e[n], t &= ~i; return r; }
function Dp(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function $p(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var l = 31 - Je(o), s = 1 << l, c = i[l];
    c === -1 ? (!(s & n) || s & r) && (i[l] = Dp(s, t)) : c <= t && (e.expiredLanes |= s), o &= ~s;
} }
function Tl(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function Tc() { var e = ni; return ni <<= 1, !(ni & 4194240) && (ni = 64), e; }
function Oo(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function Qr(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n; }
function Wp(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - Je(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
} }
function Eu(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - Je(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
} }
var Q = 0;
function Nc(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var Ic, Su, Rc, Pc, Lc, Nl = !1, ii = [], Lt = null, Ut = null, Bt = null, Ir = new Map, Rr = new Map, Tt = [], Vp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Us(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        Lt = null;
        break;
    case "dragenter":
    case "dragleave":
        Ut = null;
        break;
    case "mouseover":
    case "mouseout":
        Bt = null;
        break;
    case "pointerover":
    case "pointerout":
        Ir.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": Rr.delete(t.pointerId);
} }
function ir(e, t, n, r, i, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Gr(t), t !== null && Su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e); }
function Hp(e, t, n, r, i) { switch (t) {
    case "focusin": return Lt = ir(Lt, e, t, n, r, i), !0;
    case "dragenter": return Ut = ir(Ut, e, t, n, r, i), !0;
    case "mouseover": return Bt = ir(Bt, e, t, n, r, i), !0;
    case "pointerover":
        var o = i.pointerId;
        return Ir.set(o, ir(Ir.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture": return o = i.pointerId, Rr.set(o, ir(Rr.get(o) || null, e, t, n, r, i)), !0;
} return !1; }
function Uc(e) { var t = en(e.target); if (t !== null) {
    var n = pn(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = xc(n), t !== null) {
                e.blockedOn = t, Lc(e.priority, function () { Rc(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function xi(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Sl = r, n.target.dispatchEvent(r), Sl = null;
    }
    else
        return t = Gr(n), t !== null && Su(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Bs(e, t, n) { xi(e) && n.delete(t); }
function Qp() { Nl = !1, Lt !== null && xi(Lt) && (Lt = null), Ut !== null && xi(Ut) && (Ut = null), Bt !== null && xi(Bt) && (Bt = null), Ir.forEach(Bs), Rr.forEach(Bs); }
function or(e, t) { e.blockedOn === t && (e.blockedOn = null, Nl || (Nl = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Qp))); }
function Pr(e) { function t(i) { return or(i, e); } if (0 < ii.length) {
    or(ii[0], e);
    for (var n = 1; n < ii.length; n++) {
        var r = ii[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Lt !== null && or(Lt, e), Ut !== null && or(Ut, e), Bt !== null && or(Bt, e), Ir.forEach(t), Rr.forEach(t), n = 0; n < Tt.length; n++)
    r = Tt[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null);)
    Uc(n), n.blockedOn === null && Tt.shift(); }
var On = xt.ReactCurrentBatchConfig, Oi = !0;
function Kp(e, t, n, r) { var i = Q, o = On.transition; On.transition = null; try {
    Q = 1, ku(e, t, n, r);
}
finally {
    Q = i, On.transition = o;
} }
function Gp(e, t, n, r) { var i = Q, o = On.transition; On.transition = null; try {
    Q = 4, ku(e, t, n, r);
}
finally {
    Q = i, On.transition = o;
} }
function ku(e, t, n, r) { if (Oi) {
    var i = Il(e, t, n, r);
    if (i === null)
        Qo(e, t, r, ji, n), Us(e, r);
    else if (Hp(i, e, t, n, r))
        r.stopPropagation();
    else if (Us(e, r), t & 4 && -1 < Vp.indexOf(e)) {
        for (; i !== null;) {
            var o = Gr(i);
            if (o !== null && Ic(o), o = Il(e, t, n, r), o === null && Qo(e, t, r, ji, n), o === i)
                break;
            i = o;
        }
        i !== null && r.stopPropagation();
    }
    else
        Qo(e, t, r, null, n);
} }
var ji = null;
function Il(e, t, n, r) { if (ji = null, e = wu(r), e = en(e), e !== null)
    if (t = pn(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = xc(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return ji = e, null; }
function Bc(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (Fp()) {
        case xu: return 1;
        case Cc: return 4;
        case Bi:
        case Op: return 16;
        case _c: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var It = null, Cu = null, Ei = null;
function Fc() { if (Ei)
    return Ei; var e, t = Cu, n = t.length, r, i = "value" in It ? It.value : It.textContent, o = i.length; for (e = 0; e < n && t[e] === i[e]; e++)
    ; var l = n - e; for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
    ; return Ei = i.slice(e, 1 < r ? 1 - r : void 0); }
function Si(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function oi() { return !0; }
function Fs() { return !1; }
function Me(e) { function t(n, r, i, o, l) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null; for (var s in e)
    e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? oi : Fs, this.isPropagationStopped = Fs, this; } return ne(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = oi); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = oi); }, persist: function () { }, isPersistent: oi }), t; }
var Gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, _u = Me(Gn), Kr = ne({}, Gn, { view: 0, detail: 0 }), Yp = Me(Kr), jo, Mo, lr, uo = ne({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tu, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (jo = e.screenX - lr.screenX, Mo = e.screenY - lr.screenY) : Mo = jo = 0, lr = e), jo); }, movementY: function (e) { return "movementY" in e ? e.movementY : Mo; } }), Os = Me(uo), Jp = ne({}, uo, { dataTransfer: 0 }), Xp = Me(Jp), Zp = ne({}, Kr, { relatedTarget: 0 }), zo = Me(Zp), qp = ne({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bp = Me(qp), eh = ne({}, Gn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), th = Me(eh), nh = ne({}, Gn, { data: 0 }), js = Me(nh), rh = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ih = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, oh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function lh(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = oh[e]) ? !!t[e] : !1; }
function Tu() { return lh; }
var uh = ne({}, Kr, { key: function (e) { if (e.key) {
        var t = rh[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ih[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tu, charCode: function (e) { return e.type === "keypress" ? Si(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), sh = Me(uh), ah = ne({}, uo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ms = Me(ah), ch = ne({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tu }), fh = Me(ch), dh = ne({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = Me(dh), hh = ne({}, uo, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), mh = Me(hh), yh = [9, 13, 27, 32], Nu = yt && "CompositionEvent" in window, vr = null;
yt && "documentMode" in document && (vr = document.documentMode);
var gh = yt && "TextEvent" in window && !vr, Oc = yt && (!Nu || vr && 8 < vr && 11 >= vr), zs = " ", As = !1;
function jc(e, t) { switch (e) {
    case "keyup": return yh.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Mc(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var Sn = !1;
function vh(e, t) { switch (e) {
    case "compositionend": return Mc(t);
    case "keypress": return t.which !== 32 ? null : (As = !0, zs);
    case "textInput": return e = t.data, e === zs && As ? null : e;
    default: return null;
} }
function wh(e, t) { if (Sn)
    return e === "compositionend" || !Nu && jc(e, t) ? (e = Fc(), Ei = Cu = It = null, Sn = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return Oc && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ds(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!xh[e.type] : t === "textarea"; }
function zc(e, t, n, r) { mc(r), t = Mi(t, "onChange"), 0 < t.length && (n = new _u("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var wr = null, Lr = null;
function Eh(e) { Jc(e, 0); }
function so(e) { var t = _n(e); if (sc(t))
    return e; }
function Sh(e, t) { if (e === "change")
    return t; }
var Ac = !1;
if (yt) {
    var Ao;
    if (yt) {
        var Do = "oninput" in document;
        if (!Do) {
            var $s = document.createElement("div");
            $s.setAttribute("oninput", "return;"), Do = typeof $s.oninput == "function";
        }
        Ao = Do;
    }
    else
        Ao = !1;
    Ac = Ao && (!document.documentMode || 9 < document.documentMode);
}
function Ws() { wr && (wr.detachEvent("onpropertychange", Dc), Lr = wr = null); }
function Dc(e) { if (e.propertyName === "value" && so(Lr)) {
    var t = [];
    zc(t, Lr, e, wu(e)), wc(Eh, t);
} }
function kh(e, t, n) { e === "focusin" ? (Ws(), wr = t, Lr = n, wr.attachEvent("onpropertychange", Dc)) : e === "focusout" && Ws(); }
function Ch(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return so(Lr); }
function _h(e, t) { if (e === "click")
    return so(t); }
function Th(e, t) { if (e === "input" || e === "change")
    return so(t); }
function Nh(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var Ze = typeof Object.is == "function" ? Object.is : Nh;
function Ur(e, t) { if (Ze(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!cl.call(t, i) || !Ze(e[i], t[i]))
        return !1;
} return !0; }
function Vs(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Hs(e, t) { var n = Vs(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Vs(n);
} }
function $c(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $c(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function Wc() { for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch (_b) {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = Pi(e.document);
} return t; }
function Iu(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function Ih(e) { var t = Wc(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && $c(n.ownerDocument.documentElement, n)) {
    if (r !== null && Iu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length, o = Math.min(r.start, i);
            r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Hs(n, o);
            var l = Hs(n, r);
            i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var Rh = yt && "documentMode" in document && 11 >= document.documentMode, kn = null, Rl = null, xr = null, Pl = !1;
function Qs(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Pl || kn == null || kn !== Pi(r) || (r = kn, "selectionStart" in r && Iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xr && Ur(xr, r) || (xr = r, r = Mi(Rl, "onSelect"), 0 < r.length && (t = new _u("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn))); }
function li(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var Cn = { animationend: li("Animation", "AnimationEnd"), animationiteration: li("Animation", "AnimationIteration"), animationstart: li("Animation", "AnimationStart"), transitionend: li("Transition", "TransitionEnd") }, $o = {}, Vc = {};
yt && (Vc = document.createElement("div").style, "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation), "TransitionEvent" in window || delete Cn.transitionend.transition);
function ao(e) { if ($o[e])
    return $o[e]; if (!Cn[e])
    return e; var t = Cn[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in Vc)
        return $o[e] = t[n]; return e; }
var Hc = ao("animationend"), Qc = ao("animationiteration"), Kc = ao("animationstart"), Gc = ao("transitionend"), Yc = new Map, Ks = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) { Yc.set(e, t), dn(t, [e]); }
for (var Wo = 0; Wo < Ks.length; Wo++) {
    var Vo = Ks[Wo], Ph = Vo.toLowerCase(), Lh = Vo[0].toUpperCase() + Vo.slice(1);
    Wt(Ph, "on" + Lh);
}
Wt(Hc, "onAnimationEnd");
Wt(Qc, "onAnimationIteration");
Wt(Kc, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Gc, "onTransitionEnd");
An("onMouseEnter", ["mouseout", "mouseover"]);
An("onMouseLeave", ["mouseout", "mouseover"]);
An("onPointerEnter", ["pointerout", "pointerover"]);
An("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Gs(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, Pp(r, t, void 0, e), e.currentTarget = null; }
function Jc(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
        var o = void 0;
        if (t)
            for (var l = r.length - 1; 0 <= l; l--) {
                var s = r[l], c = s.instance, d = s.currentTarget;
                if (s = s.listener, c !== o && i.isPropagationStopped())
                    break e;
                Gs(i, s, d), o = c;
            }
        else
            for (l = 0; l < r.length; l++) {
                if (s = r[l], c = s.instance, d = s.currentTarget, s = s.listener, c !== o && i.isPropagationStopped())
                    break e;
                Gs(i, s, d), o = c;
            }
    }
} if (Ui)
    throw e = _l, Ui = !1, _l = null, e; }
function X(e, t) { var n = t[Ol]; n === void 0 && (n = t[Ol] = new Set); var r = e + "__bubble"; n.has(r) || (Xc(t, e, 2, !1), n.add(r)); }
function Ho(e, t, n) { var r = 0; t && (r |= 4), Xc(n, e, r, t); }
var ui = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) { if (!e[ui]) {
    e[ui] = !0, rc.forEach(function (n) { n !== "selectionchange" && (Uh.has(n) || Ho(n, !1, e), Ho(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ui] || (t[ui] = !0, Ho("selectionchange", !1, t));
} }
function Xc(e, t, n, r) { switch (Bc(t)) {
    case 1:
        var i = Kp;
        break;
    case 4:
        i = Gp;
        break;
    default: i = ku;
} n = i.bind(null, t, n, e), i = void 0, !Cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1); }
function Qo(e, t, n, r, i) { var o = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || s.nodeType === 8 && s.parentNode === i)
                break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var c = l.tag;
                    if ((c === 3 || c === 4) && (c = l.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i))
                        return;
                    l = l.return;
                }
            for (; s !== null;) {
                if (l = en(s), l === null)
                    return;
                if (c = l.tag, c === 5 || c === 6) {
                    r = o = l;
                    continue e;
                }
                s = s.parentNode;
            }
        }
        r = r.return;
    } wc(function () { var d = o, g = wu(n), y = []; e: {
    var x = Yc.get(e);
    if (x !== void 0) {
        var k = _u, C = e;
        switch (e) {
            case "keypress": if (Si(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                k = sh;
                break;
            case "focusin":
                C = "focus", k = zo;
                break;
            case "focusout":
                C = "blur", k = zo;
                break;
            case "beforeblur":
            case "afterblur":
                k = zo;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                k = Os;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                k = Xp;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                k = fh;
                break;
            case Hc:
            case Qc:
            case Kc:
                k = bp;
                break;
            case Gc:
                k = ph;
                break;
            case "scroll":
                k = Yp;
                break;
            case "wheel":
                k = mh;
                break;
            case "copy":
            case "cut":
            case "paste":
                k = th;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": k = Ms;
        }
        var N = (t & 4) !== 0, U = !N && e === "scroll", m = N ? x !== null ? x + "Capture" : null : x;
        N = [];
        for (var h = d, v; h !== null;) {
            v = h;
            var _ = v.stateNode;
            if (v.tag === 5 && _ !== null && (v = _, m !== null && (_ = Nr(h, m), _ != null && N.push(Fr(h, _, v)))), U)
                break;
            h = h.return;
        }
        0 < N.length && (x = new k(x, C, null, n, g), y.push({ event: x, listeners: N }));
    }
} if (!(t & 7)) {
    e: {
        if (x = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", x && n !== Sl && (C = n.relatedTarget || n.fromElement) && (en(C) || C[gt]))
            break e;
        if ((k || x) && (x = g.window === g ? g : (x = g.ownerDocument) ? x.defaultView || x.parentWindow : window, k ? (C = n.relatedTarget || n.toElement, k = d, C = C ? en(C) : null, C !== null && (U = pn(C), C !== U || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = d), k !== C)) {
            if (N = Os, _ = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (N = Ms, _ = "onPointerLeave", m = "onPointerEnter", h = "pointer"), U = k == null ? x : _n(k), v = C == null ? x : _n(C), x = new N(_, h + "leave", k, n, g), x.target = U, x.relatedTarget = v, _ = null, en(g) === d && (N = new N(m, h + "enter", C, n, g), N.target = v, N.relatedTarget = U, _ = N), U = _, k && C)
                t: {
                    for (N = k, m = C, h = 0, v = N; v; v = gn(v))
                        h++;
                    for (v = 0, _ = m; _; _ = gn(_))
                        v++;
                    for (; 0 < h - v;)
                        N = gn(N), h--;
                    for (; 0 < v - h;)
                        m = gn(m), v--;
                    for (; h--;) {
                        if (N === m || m !== null && N === m.alternate)
                            break t;
                        N = gn(N), m = gn(m);
                    }
                    N = null;
                }
            else
                N = null;
            k !== null && Ys(y, x, k, N, !1), C !== null && U !== null && Ys(y, U, C, N, !0);
        }
    }
    e: {
        if (x = d ? _n(d) : window, k = x.nodeName && x.nodeName.toLowerCase(), k === "select" || k === "input" && x.type === "file")
            var I = Sh;
        else if (Ds(x))
            if (Ac)
                I = Th;
            else {
                I = Ch;
                var R = kh;
            }
        else
            (k = x.nodeName) && k.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (I = _h);
        if (I && (I = I(e, d))) {
            zc(y, I, n, g);
            break e;
        }
        R && R(e, x, d), e === "focusout" && (R = x._wrapperState) && R.controlled && x.type === "number" && gl(x, "number", x.value);
    }
    switch (R = d ? _n(d) : window, e) {
        case "focusin":
            (Ds(R) || R.contentEditable === "true") && (kn = R, Rl = d, xr = null);
            break;
        case "focusout":
            xr = Rl = kn = null;
            break;
        case "mousedown":
            Pl = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Pl = !1, Qs(y, n, g);
            break;
        case "selectionchange": if (Rh)
            break;
        case "keydown":
        case "keyup": Qs(y, n, g);
    }
    var L;
    if (Nu)
        e: {
            switch (e) {
                case "compositionstart":
                    var F = "onCompositionStart";
                    break e;
                case "compositionend":
                    F = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    F = "onCompositionUpdate";
                    break e;
            }
            F = void 0;
        }
    else
        Sn ? jc(e, n) && (F = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
    F && (Oc && n.locale !== "ko" && (Sn || F !== "onCompositionStart" ? F === "onCompositionEnd" && Sn && (L = Fc()) : (It = g, Cu = "value" in It ? It.value : It.textContent, Sn = !0)), R = Mi(d, F), 0 < R.length && (F = new js(F, e, null, n, g), y.push({ event: F, listeners: R }), L ? F.data = L : (L = Mc(n), L !== null && (F.data = L)))), (L = gh ? vh(e, n) : wh(e, n)) && (d = Mi(d, "onBeforeInput"), 0 < d.length && (g = new js("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: d }), g.data = L));
} Jc(y, t); }); }
function Fr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function Mi(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Nr(e, n), o != null && r.unshift(Fr(e, o, i)), o = Nr(e, t), o != null && r.push(Fr(e, o, i))), e = e.return;
} return r; }
function gn(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Ys(e, t, n, r, i) { for (var o = t._reactName, l = []; n !== null && n !== r;) {
    var s = n, c = s.alternate, d = s.stateNode;
    if (c !== null && c === r)
        break;
    s.tag === 5 && d !== null && (s = d, i ? (c = Nr(n, o), c != null && l.unshift(Fr(n, c, s))) : i || (c = Nr(n, o), c != null && l.push(Fr(n, c, s)))), n = n.return;
} l.length !== 0 && e.push({ event: t, listeners: l }); }
var Bh = /\r\n?/g, Fh = /\u0000|\uFFFD/g;
function Js(e) {
    return (typeof e == "string" ? e : "" + e).replace(Bh, `
`).replace(Fh, "");
}
function si(e, t, n) { if (t = Js(t), Js(e) !== t && n)
    throw Error(P(425)); }
function zi() { }
var Ll = null, Ul = null;
function Bl(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var Fl = typeof setTimeout == "function" ? setTimeout : void 0, Oh = typeof clearTimeout == "function" ? clearTimeout : void 0, Xs = typeof Promise == "function" ? Promise : void 0, jh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xs < "u" ? function (e) { return Xs.resolve(null).then(e).catch(Mh); } : Fl;
function Mh(e) { setTimeout(function () { throw e; }); }
function Ko(e, t) { var n = t, r = 0; do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), Pr(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
} while (n); Pr(t); }
function Ft(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function Zs(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var Yn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Yn, Or = "__reactProps$" + Yn, gt = "__reactContainer$" + Yn, Ol = "__reactEvents$" + Yn, zh = "__reactListeners$" + Yn, Ah = "__reactHandles$" + Yn;
function en(e) { var t = e[it]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[gt] || n[it]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Zs(e); e !== null;) {
                if (n = e[it])
                    return n;
                e = Zs(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function Gr(e) { return e = e[it] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function _n(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(P(33)); }
function co(e) { return e[Or] || null; }
var jl = [], Tn = -1;
function Vt(e) { return { current: e }; }
function Z(e) { 0 > Tn || (e.current = jl[Tn], jl[Tn] = null, Tn--); }
function G(e, t) { Tn++, jl[Tn] = e.current, e.current = t; }
var $t = {}, Se = Vt($t), Re = Vt(!1), un = $t;
function Dn(e, t) { var n = e.type.contextTypes; if (!n)
    return $t; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var i = {}, o; for (o in n)
    i[o] = t[o]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i; }
function Pe(e) { return e = e.childContextTypes, e != null; }
function Ai() { Z(Re), Z(Se); }
function qs(e, t, n) { if (Se.current !== $t)
    throw Error(P(168)); G(Se, t), G(Re, n); }
function Zc(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var i in r)
    if (!(i in t))
        throw Error(P(108, kp(e) || "Unknown", i)); return ne({}, n, r); }
function Di(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, un = Se.current, G(Se, e), G(Re, Re.current), !0; }
function bs(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(P(169)); n ? (e = Zc(e, t, un), r.__reactInternalMemoizedMergedChildContext = e, Z(Re), Z(Se), G(Se, e)) : Z(Re), G(Re, n); }
var ct = null, fo = !1, Go = !1;
function qc(e) { ct === null ? ct = [e] : ct.push(e); }
function Dh(e) { fo = !0, qc(e); }
function Ht() { if (!Go && ct !== null) {
    Go = !0;
    var e = 0, t = Q;
    try {
        var n = ct;
        for (Q = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        ct = null, fo = !1;
    }
    catch (i) {
        throw ct !== null && (ct = ct.slice(e + 1)), kc(xu, Ht), i;
    }
    finally {
        Q = t, Go = !1;
    }
} return null; }
var Nn = [], In = 0, $i = null, Wi = 0, Ae = [], De = 0, sn = null, pt = 1, ht = "";
function Xt(e, t) { Nn[In++] = Wi, Nn[In++] = $i, $i = e, Wi = t; }
function bc(e, t, n) { Ae[De++] = pt, Ae[De++] = ht, Ae[De++] = sn, sn = e; var r = pt; e = ht; var i = 32 - Je(r) - 1; r &= ~(1 << i), n += 1; var o = 32 - Je(t) + i; if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, pt = 1 << 32 - Je(t) + i | n << i | r, ht = o + e;
}
else
    pt = 1 << o | n << i | r, ht = e; }
function Ru(e) { e.return !== null && (Xt(e, 1), bc(e, 1, 0)); }
function Pu(e) { for (; e === $i;)
    $i = Nn[--In], Nn[In] = null, Wi = Nn[--In], Nn[In] = null; for (; e === sn;)
    sn = Ae[--De], Ae[De] = null, ht = Ae[--De], Ae[De] = null, pt = Ae[--De], Ae[De] = null; }
var Fe = null, Be = null, b = !1, Ye = null;
function ef(e, t) { var n = $e(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function ea(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, Be = Ft(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, Be = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? { id: pt, overflow: ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, Be = null, !0) : !1;
    default: return !1;
} }
function Ml(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function zl(e) { if (b) {
    var t = Be;
    if (t) {
        var n = t;
        if (!ea(e, t)) {
            if (Ml(e))
                throw Error(P(418));
            t = Ft(n.nextSibling);
            var r = Fe;
            t && ea(e, t) ? ef(r, n) : (e.flags = e.flags & -4097 | 2, b = !1, Fe = e);
        }
    }
    else {
        if (Ml(e))
            throw Error(P(418));
        e.flags = e.flags & -4097 | 2, b = !1, Fe = e;
    }
} }
function ta(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Fe = e; }
function ai(e) { if (e !== Fe)
    return !1; if (!b)
    return ta(e), b = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps)), t && (t = Be)) {
    if (Ml(e))
        throw tf(), Error(P(418));
    for (; t;)
        ef(e, t), t = Ft(t.nextSibling);
} if (ta(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(P(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        Be = Ft(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        Be = null;
    }
}
else
    Be = Fe ? Ft(e.stateNode.nextSibling) : null; return !0; }
function tf() { for (var e = Be; e;)
    e = Ft(e.nextSibling); }
function $n() { Be = Fe = null, b = !1; }
function Lu(e) { Ye === null ? Ye = [e] : Ye.push(e); }
var $h = xt.ReactCurrentBatchConfig;
function Ke(e, t) { if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
var Vi = Vt(null), Hi = null, Rn = null, Uu = null;
function Bu() { Uu = Rn = Hi = null; }
function Fu(e) { var t = Vi.current; Z(Vi), e._currentValue = t; }
function Al(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function jn(e, t) { Hi = e, Uu = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null); }
function Ve(e) { var t = e._currentValue; if (Uu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Rn === null) {
        if (Hi === null)
            throw Error(P(308));
        Rn = e, Hi.dependencies = { lanes: 0, firstContext: e };
    }
    else
        Rn = Rn.next = e; return t; }
var tn = null;
function Ou(e) { tn === null ? tn = [e] : tn.push(e); }
function nf(e, t, n, r) { var i = t.interleaved; return i === null ? (n.next = n, Ou(t)) : (n.next = i.next, i.next = n), t.interleaved = n, vt(e, r); }
function vt(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var _t = !1;
function ju(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function rf(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function mt(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function Ot(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, H & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, vt(e, n);
} return i = r.interleaved, i === null ? (t.next = t, Ou(r)) : (t.next = i.next, i.next = t), r.interleaved = t, vt(e, n); }
function ki(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eu(e, n);
} }
function na(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            o === null ? i = o = l : o = o.next = l, n = n.next;
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t;
    }
    else
        i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function Qi(e, t, n, r) { var i = e.updateQueue; _t = !1; var o = i.firstBaseUpdate, l = i.lastBaseUpdate, s = i.shared.pending; if (s !== null) {
    i.shared.pending = null;
    var c = s, d = c.next;
    c.next = null, l === null ? o = d : l.next = d, l = c;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== l && (s === null ? g.firstBaseUpdate = d : s.next = d, g.lastBaseUpdate = c));
} if (o !== null) {
    var y = i.baseState;
    l = 0, g = d = c = null, s = o;
    do {
        var x = s.lane, k = s.eventTime;
        if ((r & x) === x) {
            g !== null && (g = g.next = { eventTime: k, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
            e: {
                var C = e, N = s;
                switch (x = t, k = n, N.tag) {
                    case 1:
                        if (C = N.payload, typeof C == "function") {
                            y = C.call(k, y, x);
                            break e;
                        }
                        y = C;
                        break e;
                    case 3: C.flags = C.flags & -65537 | 128;
                    case 0:
                        if (C = N.payload, x = typeof C == "function" ? C.call(k, y, x) : C, x == null)
                            break e;
                        y = ne({}, y, x);
                        break e;
                    case 2: _t = !0;
                }
            }
            s.callback !== null && s.lane !== 0 && (e.flags |= 64, x = i.effects, x === null ? i.effects = [s] : x.push(s));
        }
        else
            k = { eventTime: k, lane: x, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, g === null ? (d = g = k, c = y) : g = g.next = k, l |= x;
        if (s = s.next, s === null) {
            if (s = i.shared.pending, s === null)
                break;
            x = s, s = x.next, x.next = null, i.lastBaseUpdate = x, i.shared.pending = null;
        }
    } while (!0);
    if (g === null && (c = y), i.baseState = c, i.firstBaseUpdate = d, i.lastBaseUpdate = g, t = i.shared.interleaved, t !== null) {
        i = t;
        do
            l |= i.lane, i = i.next;
        while (i !== t);
    }
    else
        o === null && (i.shared.lanes = 0);
    cn |= l, e.lanes = l, e.memoizedState = y;
} }
function ra(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function")
                throw Error(P(191, i));
            i.call(r);
        }
    } }
var of = new nc.Component().refs;
function Dl(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var po = { isMounted: function (e) { return (e = e._reactInternals) ? pn(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Ce(), i = Mt(e), o = mt(r, i); o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (Xe(t, e, i, r), ki(t, e, i)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Ce(), i = Mt(e), o = mt(r, i); o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (Xe(t, e, i, r), ki(t, e, i)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Ce(), r = Mt(e), i = mt(n, r); i.tag = 2, t != null && (i.callback = t), t = Ot(e, i, r), t !== null && (Xe(t, e, r, n), ki(t, e, r)); } };
function ia(e, t, n, r, i, o, l) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(i, o) : !0; }
function lf(e, t, n) { var r = !1, i = $t, o = t.contextType; return typeof o == "object" && o !== null ? o = Ve(o) : (i = Pe(t) ? un : Se.current, r = t.contextTypes, o = (r = r != null) ? Dn(e, i) : $t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = po, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t; }
function oa(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && po.enqueueReplaceState(t, t.state, null); }
function $l(e, t, n, r) { var i = e.stateNode; i.props = n, i.state = e.memoizedState, i.refs = of, ju(e); var o = t.contextType; typeof o == "object" && o !== null ? i.context = Ve(o) : (o = Pe(t) ? un : Se.current, i.context = Dn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Dl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && po.enqueueReplaceState(i, i.state, null), Qi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308); }
function ur(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(P(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(P(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (l) { var s = i.refs; s === of && (s = i.refs = {}), l === null ? delete s[o] : s[o] = l; }, t._stringRef = o, t);
    }
    if (typeof e != "string")
        throw Error(P(284));
    if (!n._owner)
        throw Error(P(290, e));
} return e; }
function ci(e, t) { throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function la(e) { var t = e._init; return t(e._payload); }
function uf(e) { function t(m, h) { if (e) {
    var v = m.deletions;
    v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h);
} } function n(m, h) { if (!e)
    return null; for (; h !== null;)
    t(m, h), h = h.sibling; return null; } function r(m, h) { for (m = new Map; h !== null;)
    h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling; return m; } function i(m, h) { return m = zt(m, h), m.index = 0, m.sibling = null, m; } function o(m, h, v) { return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h); } function l(m) { return e && m.alternate === null && (m.flags |= 2), m; } function s(m, h, v, _) { return h === null || h.tag !== 6 ? (h = el(v, m.mode, _), h.return = m, h) : (h = i(h, v), h.return = m, h); } function c(m, h, v, _) { var I = v.type; return I === En ? g(m, h, v.props.children, _, v.key) : h !== null && (h.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Ct && la(I) === h.type) ? (_ = i(h, v.props), _.ref = ur(m, h, v), _.return = m, _) : (_ = Ri(v.type, v.key, v.props, null, m.mode, _), _.ref = ur(m, h, v), _.return = m, _); } function d(m, h, v, _) { return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = tl(v, m.mode, _), h.return = m, h) : (h = i(h, v.children || []), h.return = m, h); } function g(m, h, v, _, I) { return h === null || h.tag !== 7 ? (h = on(v, m.mode, _, I), h.return = m, h) : (h = i(h, v), h.return = m, h); } function y(m, h, v) { if (typeof h == "string" && h !== "" || typeof h == "number")
    return h = el("" + h, m.mode, v), h.return = m, h; if (typeof h == "object" && h !== null) {
    switch (h.$$typeof) {
        case br: return v = Ri(h.type, h.key, h.props, null, m.mode, v), v.ref = ur(m, null, h), v.return = m, v;
        case xn: return h = tl(h, m.mode, v), h.return = m, h;
        case Ct:
            var _ = h._init;
            return y(m, _(h._payload), v);
    }
    if (fr(h) || nr(h))
        return h = on(h, m.mode, v, null), h.return = m, h;
    ci(m, h);
} return null; } function x(m, h, v, _) { var I = h !== null ? h.key : null; if (typeof v == "string" && v !== "" || typeof v == "number")
    return I !== null ? null : s(m, h, "" + v, _); if (typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case br: return v.key === I ? c(m, h, v, _) : null;
        case xn: return v.key === I ? d(m, h, v, _) : null;
        case Ct: return I = v._init, x(m, h, I(v._payload), _);
    }
    if (fr(v) || nr(v))
        return I !== null ? null : g(m, h, v, _, null);
    ci(m, v);
} return null; } function k(m, h, v, _, I) { if (typeof _ == "string" && _ !== "" || typeof _ == "number")
    return m = m.get(v) || null, s(h, m, "" + _, I); if (typeof _ == "object" && _ !== null) {
    switch (_.$$typeof) {
        case br: return m = m.get(_.key === null ? v : _.key) || null, c(h, m, _, I);
        case xn: return m = m.get(_.key === null ? v : _.key) || null, d(h, m, _, I);
        case Ct:
            var R = _._init;
            return k(m, h, v, R(_._payload), I);
    }
    if (fr(_) || nr(_))
        return m = m.get(v) || null, g(h, m, _, I, null);
    ci(h, _);
} return null; } function C(m, h, v, _) { for (var I = null, R = null, L = h, F = h = 0, Y = null; L !== null && F < v.length; F++) {
    L.index > F ? (Y = L, L = null) : Y = L.sibling;
    var M = x(m, L, v[F], _);
    if (M === null) {
        L === null && (L = Y);
        break;
    }
    e && L && M.alternate === null && t(m, L), h = o(M, h, F), R === null ? I = M : R.sibling = M, R = M, L = Y;
} if (F === v.length)
    return n(m, L), b && Xt(m, F), I; if (L === null) {
    for (; F < v.length; F++)
        L = y(m, v[F], _), L !== null && (h = o(L, h, F), R === null ? I = L : R.sibling = L, R = L);
    return b && Xt(m, F), I;
} for (L = r(m, L); F < v.length; F++)
    Y = k(L, m, F, v[F], _), Y !== null && (e && Y.alternate !== null && L.delete(Y.key === null ? F : Y.key), h = o(Y, h, F), R === null ? I = Y : R.sibling = Y, R = Y); return e && L.forEach(function (pe) { return t(m, pe); }), b && Xt(m, F), I; } function N(m, h, v, _) { var I = nr(v); if (typeof I != "function")
    throw Error(P(150)); if (v = I.call(v), v == null)
    throw Error(P(151)); for (var R = I = null, L = h, F = h = 0, Y = null, M = v.next(); L !== null && !M.done; F++, M = v.next()) {
    L.index > F ? (Y = L, L = null) : Y = L.sibling;
    var pe = x(m, L, M.value, _);
    if (pe === null) {
        L === null && (L = Y);
        break;
    }
    e && L && pe.alternate === null && t(m, L), h = o(pe, h, F), R === null ? I = pe : R.sibling = pe, R = pe, L = Y;
} if (M.done)
    return n(m, L), b && Xt(m, F), I; if (L === null) {
    for (; !M.done; F++, M = v.next())
        M = y(m, M.value, _), M !== null && (h = o(M, h, F), R === null ? I = M : R.sibling = M, R = M);
    return b && Xt(m, F), I;
} for (L = r(m, L); !M.done; F++, M = v.next())
    M = k(L, m, F, M.value, _), M !== null && (e && M.alternate !== null && L.delete(M.key === null ? F : M.key), h = o(M, h, F), R === null ? I = M : R.sibling = M, R = M); return e && L.forEach(function (qe) { return t(m, qe); }), b && Xt(m, F), I; } function U(m, h, v, _) { if (typeof v == "object" && v !== null && v.type === En && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case br:
            e: {
                for (var I = v.key, R = h; R !== null;) {
                    if (R.key === I) {
                        if (I = v.type, I === En) {
                            if (R.tag === 7) {
                                n(m, R.sibling), h = i(R, v.props.children), h.return = m, m = h;
                                break e;
                            }
                        }
                        else if (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Ct && la(I) === R.type) {
                            n(m, R.sibling), h = i(R, v.props), h.ref = ur(m, R, v), h.return = m, m = h;
                            break e;
                        }
                        n(m, R);
                        break;
                    }
                    else
                        t(m, R);
                    R = R.sibling;
                }
                v.type === En ? (h = on(v.props.children, m.mode, _, v.key), h.return = m, m = h) : (_ = Ri(v.type, v.key, v.props, null, m.mode, _), _.ref = ur(m, h, v), _.return = m, m = _);
            }
            return l(m);
        case xn:
            e: {
                for (R = v.key; h !== null;) {
                    if (h.key === R)
                        if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                            n(m, h.sibling), h = i(h, v.children || []), h.return = m, m = h;
                            break e;
                        }
                        else {
                            n(m, h);
                            break;
                        }
                    else
                        t(m, h);
                    h = h.sibling;
                }
                h = tl(v, m.mode, _), h.return = m, m = h;
            }
            return l(m);
        case Ct: return R = v._init, U(m, h, R(v._payload), _);
    }
    if (fr(v))
        return C(m, h, v, _);
    if (nr(v))
        return N(m, h, v, _);
    ci(m, v);
} return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = i(h, v), h.return = m, m = h) : (n(m, h), h = el(v, m.mode, _), h.return = m, m = h), l(m)) : n(m, h); } return U; }
var Wn = uf(!0), sf = uf(!1), Yr = {}, ut = Vt(Yr), jr = Vt(Yr), Mr = Vt(Yr);
function nn(e) { if (e === Yr)
    throw Error(P(174)); return e; }
function Mu(e, t) { switch (G(Mr, t), G(jr, e), G(ut, Yr), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wl(t, e);
} Z(ut), G(ut, t); }
function Vn() { Z(ut), Z(jr), Z(Mr); }
function af(e) { nn(Mr.current); var t = nn(ut.current), n = wl(t, e.type); t !== n && (G(jr, e), G(ut, n)); }
function zu(e) { jr.current === e && (Z(ut), Z(jr)); }
var ee = Vt(0);
function Ki(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var Yo = [];
function Au() { for (var e = 0; e < Yo.length; e++)
    Yo[e]._workInProgressVersionPrimary = null; Yo.length = 0; }
var Ci = xt.ReactCurrentDispatcher, Jo = xt.ReactCurrentBatchConfig, an = 0, te = null, ae = null, fe = null, Gi = !1, Er = !1, zr = 0, Wh = 0;
function we() { throw Error(P(321)); }
function Du(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n]))
        return !1; return !0; }
function $u(e, t, n, r, i, o) { if (an = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ci.current = e === null || e.memoizedState === null ? Kh : Gh, e = n(r, i), Er) {
    o = 0;
    do {
        if (Er = !1, zr = 0, 25 <= o)
            throw Error(P(301));
        o += 1, fe = ae = null, t.updateQueue = null, Ci.current = Yh, e = n(r, i);
    } while (Er);
} if (Ci.current = Yi, t = ae !== null && ae.next !== null, an = 0, fe = ae = te = null, Gi = !1, t)
    throw Error(P(300)); return e; }
function Wu() { var e = zr !== 0; return zr = 0, e; }
function rt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return fe === null ? te.memoizedState = fe = e : fe = fe.next = e, fe; }
function He() { if (ae === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = ae.next; var t = fe === null ? te.memoizedState : fe.next; if (t !== null)
    fe = t, ae = e;
else {
    if (e === null)
        throw Error(P(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, fe === null ? te.memoizedState = fe = e : fe = fe.next = e;
} return fe; }
function Ar(e, t) { return typeof t == "function" ? t(e) : t; }
function Xo(e) { var t = He(), n = t.queue; if (n === null)
    throw Error(P(311)); n.lastRenderedReducer = e; var r = ae, i = r.baseQueue, o = n.pending; if (o !== null) {
    if (i !== null) {
        var l = i.next;
        i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
} if (i !== null) {
    o = i.next, r = r.baseState;
    var s = l = null, c = null, d = o;
    do {
        var g = d.lane;
        if ((an & g) === g)
            c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
        else {
            var y = { lane: g, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null };
            c === null ? (s = c = y, l = r) : c = c.next = y, te.lanes |= g, cn |= g;
        }
        d = d.next;
    } while (d !== null && d !== o);
    c === null ? l = r : c.next = s, Ze(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = c, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    i = e;
    do
        o = i.lane, te.lanes |= o, cn |= o, i = i.next;
    while (i !== e);
}
else
    i === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function Zo(e) { var t = He(), n = t.queue; if (n === null)
    throw Error(P(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, o = t.memoizedState; if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
        o = e(o, l.action), l = l.next;
    while (l !== i);
    Ze(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
} return [o, r]; }
function cf() { }
function ff(e, t) { var n = te, r = He(), i = t(), o = !Ze(r.memoizedState, i); if (o && (r.memoizedState = i, Ie = !0), r = r.queue, Vu(hf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || fe !== null && fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, pf.bind(null, n, r, i, t), void 0, null), de === null)
        throw Error(P(349));
    an & 30 || df(n, t, i);
} return i; }
function df(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function pf(e, t, n, r) { t.value = n, t.getSnapshot = r, mf(t) && yf(e); }
function hf(e, t, n) { return n(function () { mf(t) && yf(e); }); }
function mf(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !Ze(e, n);
}
catch (_b) {
    return !0;
} }
function yf(e) { var t = vt(e, 1); t !== null && Xe(t, e, 1, -1); }
function ua(e) { var t = rt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = Qh.bind(null, te, e), [t.memoizedState, e]; }
function Dr(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function gf() { return He().memoizedState; }
function _i(e, t, n, r) { var i = rt(); te.flags |= e, i.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r); }
function ho(e, t, n, r) { var i = He(); r = r === void 0 ? null : r; var o = void 0; if (ae !== null) {
    var l = ae.memoizedState;
    if (o = l.destroy, r !== null && Du(r, l.deps)) {
        i.memoizedState = Dr(t, n, o, r);
        return;
    }
} te.flags |= e, i.memoizedState = Dr(1 | t, n, o, r); }
function sa(e, t) { return _i(8390656, 8, e, t); }
function Vu(e, t) { return ho(2048, 8, e, t); }
function vf(e, t) { return ho(4, 2, e, t); }
function wf(e, t) { return ho(4, 4, e, t); }
function xf(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function Ef(e, t, n) { return n = n != null ? n.concat([e]) : null, ho(4, 4, xf.bind(null, t, e), n); }
function Hu() { }
function Sf(e, t) { var n = He(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function kf(e, t) { var n = He(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function Cf(e, t, n) { return an & 21 ? (Ze(n, t) || (n = Tc(), te.lanes |= n, cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n); }
function Vh(e, t) { var n = Q; Q = n !== 0 && 4 > n ? n : 4, e(!0); var r = Jo.transition; Jo.transition = {}; try {
    e(!1), t();
}
finally {
    Q = n, Jo.transition = r;
} }
function _f() { return He().memoizedState; }
function Hh(e, t, n) { var r = Mt(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Tf(e))
    Nf(t, n);
else if (n = nf(e, t, n, r), n !== null) {
    var i = Ce();
    Xe(n, e, r, i), If(n, t, r);
} }
function Qh(e, t, n) { var r = Mt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Tf(e))
    Nf(t, i);
else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
            var l = t.lastRenderedState, s = o(l, n);
            if (i.hasEagerState = !0, i.eagerState = s, Ze(s, l)) {
                var c = t.interleaved;
                c === null ? (i.next = i, Ou(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
                return;
            }
        }
        catch (_b) { }
        finally { }
    n = nf(e, t, i, r), n !== null && (i = Ce(), Xe(n, e, r, i), If(n, t, r));
} }
function Tf(e) { var t = e.alternate; return e === te || t !== null && t === te; }
function Nf(e, t) { Er = Gi = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function If(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eu(e, n);
} }
var Yi = { readContext: Ve, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, Kh = { readContext: Ve, useCallback: function (e, t) { return rt().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: Ve, useEffect: sa, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, _i(4194308, 4, xf.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return _i(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return _i(4, 2, e, t); }, useMemo: function (e, t) { var n = rt(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = rt(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hh.bind(null, te, e), [r.memoizedState, e]; }, useRef: function (e) { var t = rt(); return e = { current: e }, t.memoizedState = e; }, useState: ua, useDebugValue: Hu, useDeferredValue: function (e) { return rt().memoizedState = e; }, useTransition: function () { var e = ua(!1), t = e[0]; return e = Vh.bind(null, e[1]), rt().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = te, i = rt(); if (b) {
        if (n === void 0)
            throw Error(P(407));
        n = n();
    }
    else {
        if (n = t(), de === null)
            throw Error(P(349));
        an & 30 || df(r, t, n);
    } i.memoizedState = n; var o = { value: n, getSnapshot: t }; return i.queue = o, sa(hf.bind(null, r, o, e), [e]), r.flags |= 2048, Dr(9, pf.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = rt(), t = de.identifierPrefix; if (b) {
        var n = ht, r = pt;
        n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = Wh++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, Gh = { readContext: Ve, useCallback: Sf, useContext: Ve, useEffect: Vu, useImperativeHandle: Ef, useInsertionEffect: vf, useLayoutEffect: wf, useMemo: kf, useReducer: Xo, useRef: gf, useState: function () { return Xo(Ar); }, useDebugValue: Hu, useDeferredValue: function (e) { var t = He(); return Cf(t, ae.memoizedState, e); }, useTransition: function () { var e = Xo(Ar)[0], t = He().memoizedState; return [e, t]; }, useMutableSource: cf, useSyncExternalStore: ff, useId: _f, unstable_isNewReconciler: !1 }, Yh = { readContext: Ve, useCallback: Sf, useContext: Ve, useEffect: Vu, useImperativeHandle: Ef, useInsertionEffect: vf, useLayoutEffect: wf, useMemo: kf, useReducer: Zo, useRef: gf, useState: function () { return Zo(Ar); }, useDebugValue: Hu, useDeferredValue: function (e) { var t = He(); return ae === null ? t.memoizedState = e : Cf(t, ae.memoizedState, e); }, useTransition: function () { var e = Zo(Ar)[0], t = He().memoizedState; return [e, t]; }, useMutableSource: cf, useSyncExternalStore: ff, useId: _f, unstable_isNewReconciler: !1 };
function Hn(e, t) {
    try {
        var n = "", r = t;
        do
            n += Sp(r), r = r.return;
        while (r);
        var i = n;
    }
    catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function qo(e, t, n) { return { value: e, source: null, stack: n !== null && n !== void 0 ? n : null, digest: t !== null && t !== void 0 ? t : null }; }
function Wl(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var Jh = typeof WeakMap == "function" ? WeakMap : Map;
function Rf(e, t, n) { n = mt(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Xi || (Xi = !0, ql = r), Wl(e, t); }, n; }
function Pf(e, t, n) { n = mt(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var i = t.value;
    n.payload = function () { return r(i); }, n.callback = function () { Wl(e, t); };
} var o = e.stateNode; return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () { Wl(e, t), typeof r != "function" && (jt === null ? jt = new Set([this]) : jt.add(this)); var l = t.stack; this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" }); }), n; }
function aa(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new Jh;
    var i = new Set;
    r.set(t, i);
}
else
    i = r.get(t), i === void 0 && (i = new Set, r.set(t, i)); i.has(n) || (i.add(n), e = a0.bind(null, e, t, n), t.then(e, e)); }
function ca(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function fa(e, t, n, r, i) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e); }
var Xh = xt.ReactCurrentOwner, Ie = !1;
function ke(e, t, n, r) { t.child = e === null ? sf(t, null, n, r) : Wn(t, e.child, n, r); }
function da(e, t, n, r, i) { n = n.render; var o = t.ref; return jn(t, i), r = $u(e, t, n, r, o, i), n = Wu(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wt(e, t, i)) : (b && n && Ru(t), t.flags |= 1, ke(e, t, r, i), t.child); }
function pa(e, t, n, r, i) { if (e === null) {
    var o = n.type;
    return typeof o == "function" && !qu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Lf(e, t, o, r, i)) : (e = Ri(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
} if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ur, n(l, r) && e.ref === t.ref)
        return wt(e, t, i);
} return t.flags |= 1, e = zt(o, r), e.ref = t.ref, e.return = t, t.child = e; }
function Lf(e, t, n, r, i) { if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
        if (Ie = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
            e.flags & 131072 && (Ie = !0);
        else
            return t.lanes = e.lanes, wt(e, t, i);
} return Vl(e, t, n, r, i); }
function Uf(e, t, n) { var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Ln, Ue), Ue |= n;
    else {
        if (!(n & 1073741824))
            return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(Ln, Ue), Ue |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(Ln, Ue), Ue |= r;
    }
else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(Ln, Ue), Ue |= r; return ke(e, t, i, n), t.child; }
function Bf(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function Vl(e, t, n, r, i) { var o = Pe(n) ? un : Se.current; return o = Dn(t, o), jn(t, i), n = $u(e, t, n, r, o, i), r = Wu(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wt(e, t, i)) : (b && r && Ru(t), t.flags |= 1, ke(e, t, n, i), t.child); }
function ha(e, t, n, r, i) { if (Pe(n)) {
    var o = !0;
    Di(t);
}
else
    o = !1; if (jn(t, i), t.stateNode === null)
    Ti(e, t), lf(t, n, r), $l(t, n, r, i), r = !0;
else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var c = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Ve(d) : (d = Pe(n) ? un : Se.current, d = Dn(t, d));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    y || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || c !== d) && oa(t, l, r, d), _t = !1;
    var x = t.memoizedState;
    l.state = x, Qi(t, r, l, i), c = t.memoizedState, s !== r || x !== c || Re.current || _t ? (typeof g == "function" && (Dl(t, n, g, r), c = t.memoizedState), (s = _t || ia(t, n, s, r, x, c, d)) ? (y || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), l.props = r, l.state = c, l.context = d, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    l = t.stateNode, rf(e, t), s = t.memoizedProps, d = t.type === t.elementType ? s : Ke(t.type, s), l.props = d, y = t.pendingProps, x = l.context, c = n.contextType, typeof c == "object" && c !== null ? c = Ve(c) : (c = Pe(n) ? un : Se.current, c = Dn(t, c));
    var k = n.getDerivedStateFromProps;
    (g = typeof k == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== y || x !== c) && oa(t, l, r, c), _t = !1, x = t.memoizedState, l.state = x, Qi(t, r, l, i);
    var C = t.memoizedState;
    s !== y || x !== C || Re.current || _t ? (typeof k == "function" && (Dl(t, n, k, r), C = t.memoizedState), (d = _t || ia(t, n, d, r, x, C, c) || !1) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, C, c), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, C, c)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), l.props = r, l.state = C, l.context = c, r = d) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
} return Hl(e, t, n, r, o, i); }
function Hl(e, t, n, r, i, o) { Bf(e, t); var l = (t.flags & 128) !== 0; if (!r && !l)
    return i && bs(t, n, !1), wt(e, t, o); r = t.stateNode, Xh.current = t; var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && l ? (t.child = Wn(t, e.child, null, o), t.child = Wn(t, null, s, o)) : ke(e, t, s, o), t.memoizedState = r.state, i && bs(t, n, !0), t.child; }
function Ff(e) { var t = e.stateNode; t.pendingContext ? qs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qs(e, t.context, !1), Mu(e, t.containerInfo); }
function ma(e, t, n, r, i) { return $n(), Lu(i), t.flags |= 256, ke(e, t, n, r), t.child; }
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kl(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Of(e, t, n) { var r = t.pendingProps, i = ee.current, o = !1, l = (t.flags & 128) !== 0, s; if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(ee, i & 1), e === null)
    return zl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = go(l, r, 0, null), e = on(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Kl(n), t.memoizedState = Ql, e) : Qu(t, l)); if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null))
    return Zh(e, t, l, r, s, i, n); if (o) {
    o = r.fallback, l = t.mode, i = e.child, s = i.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = zt(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = zt(s, o) : (o = on(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Kl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Ql, r;
} return o = e.child, e = o.sibling, r = zt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function Qu(e, t) { return t = go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function fi(e, t, n, r) { return r !== null && Lu(r), Wn(t, e.child, null, n), e = Qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function Zh(e, t, n, r, i, o, l) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = qo(Error(P(422))), fi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = go({ mode: "visible", children: r.children }, i, 0, null), o = on(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Wn(t, e.child, null, l), t.child.memoizedState = Kl(l), t.memoizedState = Ql, o); if (!(t.mode & 1))
    return fi(e, t, l, null); if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
        var s = r.dgst;
    return r = s, o = Error(P(419)), r = qo(o, r, void 0), fi(e, t, l, r);
} if (s = (l & e.childLanes) !== 0, Ie || s) {
    if (r = de, r !== null) {
        switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default: i = 0;
        }
        i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, vt(e, i), Xe(r, e, i, -1));
    }
    return Zu(), r = qo(Error(P(421))), fi(e, t, l, r);
} return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = c0.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Be = Ft(i.nextSibling), Fe = t, b = !0, Ye = null, e !== null && (Ae[De++] = pt, Ae[De++] = ht, Ae[De++] = sn, pt = e.id, ht = e.overflow, sn = t), t = Qu(t, r.children), t.flags |= 4096, t); }
function ya(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), Al(e.return, t, n); }
function bo(e, t, n, r, i) { var o = e.memoizedState; o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i); }
function jf(e, t, n) { var r = t.pendingProps, i = r.revealOrder, o = r.tail; if (ke(e, t, r.children, n), r = ee.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && ya(e, n, t);
            else if (e.tag === 19)
                ya(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (G(ee, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;)
                e = n.alternate, e !== null && Ki(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), bo(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Ki(e) === null) {
                    t.child = i;
                    break;
                }
                e = i.sibling, i.sibling = n, n = i, i = e;
            }
            bo(t, !0, n, null, o);
            break;
        case "together":
            bo(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Ti(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function wt(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(P(153)); if (t.child !== null) {
    for (e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = zt(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function qh(e, t, n) { switch (t.tag) {
    case 3:
        Ff(t), $n();
        break;
    case 5:
        af(t);
        break;
    case 1:
        Pe(t.type) && Di(t);
        break;
    case 4:
        Mu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        G(Vi, r._currentValue), r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (G(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Of(e, t, n) : (G(ee, ee.current & 1), e = wt(e, t, n), e !== null ? e.sibling : null);
        G(ee, ee.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return jf(e, t, n);
            t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(ee, ee.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, Uf(e, t, n);
} return wt(e, t, n); }
var Mf, Gl, zf, Af;
Mf = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
Gl = function () { };
zf = function (e, t, n, r) { var i = e.memoizedProps; if (i !== r) {
    e = t.stateNode, nn(ut.current);
    var o = null;
    switch (n) {
        case "input":
            i = ml(e, i), r = ml(e, r), o = [];
            break;
        case "select":
            i = ne({}, i, { value: void 0 }), r = ne({}, r, { value: void 0 }), o = [];
            break;
        case "textarea":
            i = vl(e, i), r = vl(e, r), o = [];
            break;
        default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zi);
    }
    xl(n, r);
    var l;
    n = null;
    for (d in i)
        if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
            if (d === "style") {
                var s = i[d];
                for (l in s)
                    s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
            }
            else
                d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_r.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
        var c = r[d];
        if (s = i != null ? i[d] : void 0, r.hasOwnProperty(d) && c !== s && (c != null || s != null))
            if (d === "style")
                if (s) {
                    for (l in s)
                        !s.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                    for (l in c)
                        c.hasOwnProperty(l) && s[l] !== c[l] && (n || (n = {}), n[l] = c[l]);
                }
                else
                    n || (o || (o = []), o.push(d, n)), n = c;
            else
                d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, c != null && s !== c && (o = o || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (_r.hasOwnProperty(d) ? (c != null && d === "onScroll" && X("scroll", e), o || s === c || (o = [])) : (o = o || []).push(d, c));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
} };
Af = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function sr(e, t) { if (!b)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function xe(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
else
    for (i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function bh(e, t, n) { var r = t.pendingProps; switch (Pu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return xe(t), null;
    case 1: return Pe(t.type) && Ai(), xe(t), null;
    case 3: return r = t.stateNode, Vn(), Z(Re), Z(Se), Au(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ai(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (tu(Ye), Ye = null))), Gl(e, t), xe(t), null;
    case 5:
        zu(t);
        var i = nn(Mr.current);
        if (n = t.type, e !== null && t.stateNode != null)
            zf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return xe(t), null;
            }
            if (e = nn(ut.current), ai(t)) {
                r = t.stateNode, n = t.type;
                var o = t.memoizedProps;
                switch (r[it] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        X("cancel", r), X("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        X("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < pr.length; i++)
                            X(pr[i], r);
                        break;
                    case "source":
                        X("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        X("error", r), X("load", r);
                        break;
                    case "details":
                        X("toggle", r);
                        break;
                    case "input":
                        _s(r, o), X("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
                        break;
                    case "textarea": Ns(r, o), X("invalid", r);
                }
                xl(n, o), i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var s = o[l];
                        l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && si(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && si(r.textContent, s, e), i = ["children", "" + s]) : _r.hasOwnProperty(l) && s != null && l === "onScroll" && X("scroll", r);
                    }
                switch (n) {
                    case "input":
                        ei(r), Ts(r, o, !0);
                        break;
                    case "textarea":
                        ei(r), Is(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof o.onClick == "function" && (r.onclick = zi);
                }
                r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[it] = t, e[Or] = r, Mf(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (l = El(n, r), n) {
                        case "dialog":
                            X("cancel", e), X("close", e), i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            X("load", e), i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < pr.length; i++)
                                X(pr[i], e);
                            i = r;
                            break;
                        case "source":
                            X("error", e), i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            X("error", e), X("load", e), i = r;
                            break;
                        case "details":
                            X("toggle", e), i = r;
                            break;
                        case "input":
                            _s(e, r), i = ml(e, r), X("invalid", e);
                            break;
                        case "option":
                            i = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, i = ne({}, r, { value: void 0 }), X("invalid", e);
                            break;
                        case "textarea":
                            Ns(e, r), i = vl(e, r), X("invalid", e);
                            break;
                        default: i = r;
                    }
                    xl(n, i), s = i;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var c = s[o];
                            o === "style" ? hc(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && dc(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Tr(e, c) : typeof c == "number" && Tr(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (_r.hasOwnProperty(o) ? c != null && o === "onScroll" && X("scroll", e) : c != null && mu(e, o, c, l));
                        }
                    switch (n) {
                        case "input":
                            ei(e), Ts(e, r, !1);
                            break;
                        case "textarea":
                            ei(e), Is(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Dt(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, o = r.value, o != null ? Un(e, !!r.multiple, o, !1) : r.defaultValue != null && Un(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof i.onClick == "function" && (e.onclick = zi);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return xe(t), null;
    case 6:
        if (e && t.stateNode != null)
            Af(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = nn(Mr.current), nn(ut.current), ai(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (o = r.nodeValue !== n) && (e = Fe, e !== null))
                    switch (e.tag) {
                        case 3:
                            si(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && si(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                o && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
        }
        return xe(t), null;
    case 13:
        if (Z(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (b && Be !== null && t.mode & 1 && !(t.flags & 128))
                tf(), $n(), t.flags |= 98560, o = !1;
            else if (o = ai(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(P(318));
                    if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                        throw Error(P(317));
                    o[it] = t;
                }
                else
                    $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                xe(t), o = !1;
            }
            else
                Ye !== null && (tu(Ye), Ye = null), o = !0;
            if (!o)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ce === 0 && (ce = 3) : Zu())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4: return Vn(), Gl(e, t), e === null && Br(t.stateNode.containerInfo), xe(t), null;
    case 10: return Fu(t.type._context), xe(t), null;
    case 17: return Pe(t.type) && Ai(), xe(t), null;
    case 19:
        if (Z(ee), o = t.memoizedState, o === null)
            return xe(t), null;
        if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
            if (r)
                sr(o, !1);
            else {
                if (ce !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (l = Ki(e), l !== null) {
                            for (t.flags |= 128, sr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return G(ee, ee.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                o.tail !== null && le() > Qn && (t.flags |= 128, r = !0, sr(o, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = Ki(l), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !b)
                        return xe(t), null;
                }
                else
                    2 * le() - o.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128, r = !0, sr(o, !1), t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = le(), t.sibling = null, n = ee.current, G(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23: return Xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(P(156, t.tag)); }
function e0(e, t) { switch (Pu(t), t.tag) {
    case 1: return Pe(t.type) && Ai(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return Vn(), Z(Re), Z(Se), Au(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return zu(t), null;
    case 13:
        if (Z(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            $n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return Z(ee), null;
    case 4: return Vn(), null;
    case 10: return Fu(t.type._context), null;
    case 22:
    case 23: return Xu(), null;
    case 24: return null;
    default: return null;
} }
var di = !1, Ee = !1, t0 = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function Pn(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            oe(e, t, r);
        }
    else
        n.current = null; }
function Yl(e, t, n) { try {
    n();
}
catch (r) {
    oe(e, t, r);
} }
var ga = !1;
function n0(e, t) { if (Ll = Oi, e = Wc(), Iu(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType;
                }
                catch (_b) {
                    n = null;
                    break e;
                }
                var l = 0, s = -1, c = -1, d = 0, g = 0, y = e, x = null;
                t: for (;;) {
                    for (var k; y !== n || i !== 0 && y.nodeType !== 3 || (s = l + i), y !== o || r !== 0 && y.nodeType !== 3 || (c = l + r), y.nodeType === 3 && (l += y.nodeValue.length), (k = y.firstChild) !== null;)
                        x = y, y = k;
                    for (;;) {
                        if (y === e)
                            break t;
                        if (x === n && ++d === i && (s = l), x === o && ++g === r && (c = l), (k = y.nextSibling) !== null)
                            break;
                        y = x, x = y.parentNode;
                    }
                    y = k;
                }
                n = s === -1 || c === -1 ? null : { start: s, end: c };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (Ul = { focusedElem: e, selectionRange: n }, Oi = !1, j = t; j !== null;)
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, j = e;
    else
        for (; j !== null;) {
            t = j;
            try {
                var C = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (C !== null) {
                                var N = C.memoizedProps, U = C.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? N : Ke(t.type, N), U);
                                m.__reactInternalSnapshotBeforeUpdate = h;
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(P(163));
                    }
            }
            catch (_) {
                oe(t, t.return, _);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, j = e;
                break;
            }
            j = t.return;
        } return C = ga, ga = !1, C; }
function Sr(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
        if ((i.tag & e) === e) {
            var o = i.destroy;
            i.destroy = void 0, o !== void 0 && Yl(t, n, o);
        }
        i = i.next;
    } while (i !== r);
} }
function mo(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function Jl(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function Df(e) { var t = e.alternate; t !== null && (e.alternate = null, Df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[Or], delete t[Ol], delete t[zh], delete t[Ah])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function $f(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function va(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || $f(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function Xl(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = zi));
else if (r !== 4 && (e = e.child, e !== null))
    for (Xl(e, t, n), e = e.sibling; e !== null;)
        Xl(e, t, n), e = e.sibling; }
function Zl(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (Zl(e, t, n), e = e.sibling; e !== null;)
        Zl(e, t, n), e = e.sibling; }
var ye = null, Ge = !1;
function kt(e, t, n) { for (n = n.child; n !== null;)
    Wf(e, t, n), n = n.sibling; }
function Wf(e, t, n) { if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
        lt.onCommitFiberUnmount(lo, n);
    }
    catch (_b) { } switch (n.tag) {
    case 5: Ee || Pn(n, t);
    case 6:
        var r = ye, i = Ge;
        ye = null, kt(e, t, n), ye = r, Ge = i, ye !== null && (Ge ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
    case 18:
        ye !== null && (Ge ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Ko(e.parentNode, n) : e.nodeType === 1 && Ko(e, n), Pr(e)) : Ko(ye, n.stateNode));
        break;
    case 4:
        r = ye, i = Ge, ye = n.stateNode.containerInfo, Ge = !0, kt(e, t, n), ye = r, Ge = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
                var o = i, l = o.destroy;
                o = o.tag, l !== void 0 && (o & 2 || o & 4) && Yl(n, t, l), i = i.next;
            } while (i !== r);
        }
        kt(e, t, n);
        break;
    case 1:
        if (!Ee && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (s) {
                oe(n, t, s);
            }
        kt(e, t, n);
        break;
    case 21:
        kt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, kt(e, t, n), Ee = r) : kt(e, t, n);
        break;
    default: kt(e, t, n);
} }
function wa(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new t0), t.forEach(function (r) { var i = f0.bind(null, e, r); n.has(r) || (n.add(r), r.then(i, i)); });
} }
function Qe(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var o = e, l = t, s = l;
            e: for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        ye = s.stateNode, Ge = !1;
                        break e;
                    case 3:
                        ye = s.stateNode.containerInfo, Ge = !0;
                        break e;
                    case 4:
                        ye = s.stateNode.containerInfo, Ge = !0;
                        break e;
                }
                s = s.return;
            }
            if (ye === null)
                throw Error(P(160));
            Wf(o, l, i), ye = null, Ge = !1;
            var c = i.alternate;
            c !== null && (c.return = null), i.return = null;
        }
        catch (d) {
            oe(i, t, d);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        Vf(t, e), t = t.sibling; }
function Vf(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Qe(t, e), nt(e), r & 4) {
            try {
                Sr(3, e, e.return), mo(3, e);
            }
            catch (N) {
                oe(e, e.return, N);
            }
            try {
                Sr(5, e, e.return);
            }
            catch (N) {
                oe(e, e.return, N);
            }
        }
        break;
    case 1:
        Qe(t, e), nt(e), r & 512 && n !== null && Pn(n, n.return);
        break;
    case 5:
        if (Qe(t, e), nt(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
                Tr(i, "");
            }
            catch (N) {
                oe(e, e.return, N);
            }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
            var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, s = e.type, c = e.updateQueue;
            if (e.updateQueue = null, c !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && ac(i, o), El(s, l);
                    var d = El(s, o);
                    for (l = 0; l < c.length; l += 2) {
                        var g = c[l], y = c[l + 1];
                        g === "style" ? hc(i, y) : g === "dangerouslySetInnerHTML" ? dc(i, y) : g === "children" ? Tr(i, y) : mu(i, g, y, d);
                    }
                    switch (s) {
                        case "input":
                            yl(i, o);
                            break;
                        case "textarea":
                            cc(i, o);
                            break;
                        case "select":
                            var x = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var k = o.value;
                            k != null ? Un(i, !!o.multiple, k, !1) : x !== !!o.multiple && (o.defaultValue != null ? Un(i, !!o.multiple, o.defaultValue, !0) : Un(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[Or] = o;
                }
                catch (N) {
                    oe(e, e.return, N);
                }
        }
        break;
    case 6:
        if (Qe(t, e), nt(e), r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            i = e.stateNode, o = e.memoizedProps;
            try {
                i.nodeValue = o;
            }
            catch (N) {
                oe(e, e.return, N);
            }
        }
        break;
    case 3:
        if (Qe(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Pr(t.containerInfo);
            }
            catch (N) {
                oe(e, e.return, N);
            }
        break;
    case 4:
        Qe(t, e), nt(e);
        break;
    case 13:
        Qe(t, e), nt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Yu = le())), r & 4 && wa(e);
        break;
    case 22:
        if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (d = Ee) || g, Qe(t, e), Ee = d) : Qe(t, e), nt(e), r & 8192) {
            if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1)
                for (j = e, g = e.child; g !== null;) {
                    for (y = j = g; j !== null;) {
                        switch (x = j, k = x.child, x.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Sr(4, x, x.return);
                                break;
                            case 1:
                                Pn(x, x.return);
                                var C = x.stateNode;
                                if (typeof C.componentWillUnmount == "function") {
                                    r = x, n = x.return;
                                    try {
                                        t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                                    }
                                    catch (N) {
                                        oe(r, n, N);
                                    }
                                }
                                break;
                            case 5:
                                Pn(x, x.return);
                                break;
                            case 22: if (x.memoizedState !== null) {
                                Ea(y);
                                continue;
                            }
                        }
                        k !== null ? (k.return = x, j = k) : Ea(y);
                    }
                    g = g.sibling;
                }
            e: for (g = null, y = e;;) {
                if (y.tag === 5) {
                    if (g === null) {
                        g = y;
                        try {
                            i = y.stateNode, d ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = y.stateNode, c = y.memoizedProps.style, l = c != null && c.hasOwnProperty("display") ? c.display : null, s.style.display = pc("display", l));
                        }
                        catch (N) {
                            oe(e, e.return, N);
                        }
                    }
                }
                else if (y.tag === 6) {
                    if (g === null)
                        try {
                            y.stateNode.nodeValue = d ? "" : y.memoizedProps;
                        }
                        catch (N) {
                            oe(e, e.return, N);
                        }
                }
                else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
                    y.child.return = y, y = y.child;
                    continue;
                }
                if (y === e)
                    break e;
                for (; y.sibling === null;) {
                    if (y.return === null || y.return === e)
                        break e;
                    g === y && (g = null), y = y.return;
                }
                g === y && (g = null), y.sibling.return = y.return, y = y.sibling;
            }
        }
        break;
    case 19:
        Qe(t, e), nt(e), r & 4 && wa(e);
        break;
    case 21: break;
    default: Qe(t, e), nt(e);
} }
function nt(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if ($f(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(P(160));
        }
        switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Tr(i, ""), r.flags &= -33);
                var o = va(e);
                Zl(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo, s = va(e);
                Xl(e, s, l);
                break;
            default: throw Error(P(161));
        }
    }
    catch (c) {
        oe(e, e.return, c);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function r0(e, t, n) { j = e, Hf(e); }
function Hf(e, t, n) { for (var r = (e.mode & 1) !== 0; j !== null;) {
    var i = j, o = i.child;
    if (i.tag === 22 && r) {
        var l = i.memoizedState !== null || di;
        if (!l) {
            var s = i.alternate, c = s !== null && s.memoizedState !== null || Ee;
            s = di;
            var d = Ee;
            if (di = l, (Ee = c) && !d)
                for (j = i; j !== null;)
                    l = j, c = l.child, l.tag === 22 && l.memoizedState !== null ? Sa(i) : c !== null ? (c.return = l, j = c) : Sa(i);
            for (; o !== null;)
                j = o, Hf(o), o = o.sibling;
            j = i, di = s, Ee = d;
        }
        xa(e);
    }
    else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, j = o) : xa(e);
} }
function xa(e) { for (; j !== null;) {
    var t = j;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ee || mo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ee)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var o = t.updateQueue;
                        o !== null && ra(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            ra(t, l, n);
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var c = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    c.autoFocus && n.focus();
                                    break;
                                case "img": c.src && (n.src = c.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var g = d.memoizedState;
                                if (g !== null) {
                                    var y = g.dehydrated;
                                    y !== null && Pr(y);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(P(163));
                }
            Ee || t.flags & 512 && Jl(t);
        }
        catch (x) {
            oe(t, t.return, x);
        }
    }
    if (t === e) {
        j = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, j = n;
        break;
    }
    j = t.return;
} }
function Ea(e) { for (; j !== null;) {
    var t = j;
    if (t === e) {
        j = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, j = n;
        break;
    }
    j = t.return;
} }
function Sa(e) { for (; j !== null;) {
    var t = j;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    mo(4, t);
                }
                catch (c) {
                    oe(t, n, c);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (c) {
                        oe(t, i, c);
                    }
                }
                var o = t.return;
                try {
                    Jl(t);
                }
                catch (c) {
                    oe(t, o, c);
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Jl(t);
                }
                catch (c) {
                    oe(t, l, c);
                }
        }
    }
    catch (c) {
        oe(t, t.return, c);
    }
    if (t === e) {
        j = null;
        break;
    }
    var s = t.sibling;
    if (s !== null) {
        s.return = t.return, j = s;
        break;
    }
    j = t.return;
} }
var i0 = Math.ceil, Ji = xt.ReactCurrentDispatcher, Ku = xt.ReactCurrentOwner, We = xt.ReactCurrentBatchConfig, H = 0, de = null, se = null, ge = 0, Ue = 0, Ln = Vt(0), ce = 0, $r = null, cn = 0, yo = 0, Gu = 0, kr = null, Ne = null, Yu = 0, Qn = 1 / 0, at = null, Xi = !1, ql = null, jt = null, pi = !1, Rt = null, Zi = 0, Cr = 0, bl = null, Ni = -1, Ii = 0;
function Ce() { return H & 6 ? le() : Ni !== -1 ? Ni : Ni = le(); }
function Mt(e) { return e.mode & 1 ? H & 2 && ge !== 0 ? ge & -ge : $h.transition !== null ? (Ii === 0 && (Ii = Tc()), Ii) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bc(e.type)), e) : 1; }
function Xe(e, t, n, r) { if (50 < Cr)
    throw Cr = 0, bl = null, Error(P(185)); Qr(e, n, r), (!(H & 2) || e !== de) && (e === de && (!(H & 2) && (yo |= n), ce === 4 && Nt(e, ge)), Le(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Qn = le() + 500, fo && Ht())); }
function Le(e, t) { var n = e.callbackNode; $p(e, t); var r = Fi(e, e === de ? ge : 0); if (r === 0)
    n !== null && Ls(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ls(n), t === 1)
        e.tag === 0 ? Dh(ka.bind(null, e)) : qc(ka.bind(null, e)), jh(function () { !(H & 6) && Ht(); }), n = null;
    else {
        switch (Nc(r)) {
            case 1:
                n = xu;
                break;
            case 4:
                n = Cc;
                break;
            case 16:
                n = Bi;
                break;
            case 536870912:
                n = _c;
                break;
            default: n = Bi;
        }
        n = qf(n, Qf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function Qf(e, t) { if (Ni = -1, Ii = 0, H & 6)
    throw Error(P(327)); var n = e.callbackNode; if (Mn() && e.callbackNode !== n)
    return null; var r = Fi(e, e === de ? ge : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = qi(e, r);
else {
    t = r;
    var i = H;
    H |= 2;
    var o = Gf();
    (de !== e || ge !== t) && (at = null, Qn = le() + 500, rn(e, t));
    do
        try {
            u0();
            break;
        }
        catch (s) {
            Kf(e, s);
        }
    while (!0);
    Bu(), Ji.current = o, H = i, se !== null ? t = 0 : (de = null, ge = 0, t = ce);
} if (t !== 0) {
    if (t === 2 && (i = Tl(e), i !== 0 && (r = i, t = eu(e, i))), t === 1)
        throw n = $r, rn(e, 0), Nt(e, r), Le(e, le()), n;
    if (t === 6)
        Nt(e, r);
    else {
        if (i = e.current.alternate, !(r & 30) && !o0(i) && (t = qi(e, r), t === 2 && (o = Tl(e), o !== 0 && (r = o, t = eu(e, o))), t === 1))
            throw n = $r, rn(e, 0), Nt(e, r), Le(e, le()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(P(345));
            case 2:
                Zt(e, Ne, at);
                break;
            case 3:
                if (Nt(e, r), (r & 130023424) === r && (t = Yu + 500 - le(), 10 < t)) {
                    if (Fi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes, (i & r) !== r) {
                        Ce(), e.pingedLanes |= e.suspendedLanes & i;
                        break;
                    }
                    e.timeoutHandle = Fl(Zt.bind(null, e, Ne, at), t);
                    break;
                }
                Zt(e, Ne, at);
                break;
            case 4:
                if (Nt(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                    var l = 31 - Je(r);
                    o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
                }
                if (r = i, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * i0(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = Fl(Zt.bind(null, e, Ne, at), r);
                    break;
                }
                Zt(e, Ne, at);
                break;
            case 5:
                Zt(e, Ne, at);
                break;
            default: throw Error(P(329));
        }
    }
} return Le(e, le()), e.callbackNode === n ? Qf.bind(null, e) : null; }
function eu(e, t) { var n = kr; return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = qi(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && tu(t)), e; }
function tu(e) { Ne === null ? Ne = e : Ne.push.apply(Ne, e); }
function o0(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var i = n[r], o = i.getSnapshot;
                i = i.value;
                try {
                    if (!Ze(o(), i))
                        return !1;
                }
                catch (_b) {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function Nt(e, t) { for (t &= ~Gu, t &= ~yo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function ka(e) { if (H & 6)
    throw Error(P(327)); Mn(); var t = Fi(e, 0); if (!(t & 1))
    return Le(e, le()), null; var n = qi(e, t); if (e.tag !== 0 && n === 2) {
    var r = Tl(e);
    r !== 0 && (t = r, n = eu(e, r));
} if (n === 1)
    throw n = $r, rn(e, 0), Nt(e, t), Le(e, le()), n; if (n === 6)
    throw Error(P(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Ne, at), Le(e, le()), null; }
function Ju(e, t) { var n = H; H |= 1; try {
    return e(t);
}
finally {
    H = n, H === 0 && (Qn = le() + 500, fo && Ht());
} }
function fn(e) { Rt !== null && Rt.tag === 0 && !(H & 6) && Mn(); var t = H; H |= 1; var n = We.transition, r = Q; try {
    if (We.transition = null, Q = 1, e)
        return e();
}
finally {
    Q = r, We.transition = n, H = t, !(H & 6) && Ht();
} }
function Xu() { Ue = Ln.current, Z(Ln); }
function rn(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, Oh(n)), se !== null)
    for (n = se.return; n !== null;) {
        var r = n;
        switch (Pu(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Ai();
                break;
            case 3:
                Vn(), Z(Re), Z(Se), Au();
                break;
            case 5:
                zu(r);
                break;
            case 4:
                Vn();
                break;
            case 13:
                Z(ee);
                break;
            case 19:
                Z(ee);
                break;
            case 10:
                Fu(r.type._context);
                break;
            case 22:
            case 23: Xu();
        }
        n = n.return;
    } if (de = e, se = e = zt(e.current, null), ge = Ue = t, ce = 0, $r = null, Gu = yo = cn = 0, Ne = kr = null, tn !== null) {
    for (t = 0; t < tn.length; t++)
        if (n = tn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, o = n.pending;
            if (o !== null) {
                var l = o.next;
                o.next = i, r.next = l;
            }
            n.pending = r;
        }
    tn = null;
} return e; }
function Kf(e, t) { do {
    var n = se;
    try {
        if (Bu(), Ci.current = Yi, Gi) {
            for (var r = te.memoizedState; r !== null;) {
                var i = r.queue;
                i !== null && (i.pending = null), r = r.next;
            }
            Gi = !1;
        }
        if (an = 0, fe = ae = te = null, Er = !1, zr = 0, Ku.current = null, n === null || n.return === null) {
            ce = 1, $r = t, se = null;
            break;
        }
        e: {
            var o = e, l = n.return, s = n, c = t;
            if (t = ge, s.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                var d = c, g = s, y = g.tag;
                if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
                    var x = g.alternate;
                    x ? (g.updateQueue = x.updateQueue, g.memoizedState = x.memoizedState, g.lanes = x.lanes) : (g.updateQueue = null, g.memoizedState = null);
                }
                var k = ca(l);
                if (k !== null) {
                    k.flags &= -257, fa(k, l, s, o, t), k.mode & 1 && aa(o, d, t), t = k, c = d;
                    var C = t.updateQueue;
                    if (C === null) {
                        var N = new Set;
                        N.add(c), t.updateQueue = N;
                    }
                    else
                        C.add(c);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        aa(o, d, t), Zu();
                        break e;
                    }
                    c = Error(P(426));
                }
            }
            else if (b && s.mode & 1) {
                var U = ca(l);
                if (U !== null) {
                    !(U.flags & 65536) && (U.flags |= 256), fa(U, l, s, o, t), Lu(Hn(c, s));
                    break e;
                }
            }
            o = c = Hn(c, s), ce !== 4 && (ce = 2), kr === null ? kr = [o] : kr.push(o), o = l;
            do {
                switch (o.tag) {
                    case 3:
                        o.flags |= 65536, t &= -t, o.lanes |= t;
                        var m = Rf(o, c, t);
                        na(o, m);
                        break e;
                    case 1:
                        s = c;
                        var h = o.type, v = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (jt === null || !jt.has(v)))) {
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var _ = Pf(o, s, t);
                            na(o, _);
                            break e;
                        }
                }
                o = o.return;
            } while (o !== null);
        }
        Jf(n);
    }
    catch (I) {
        t = I, se === n && n !== null && (se = n = n.return);
        continue;
    }
    break;
} while (!0); }
function Gf() { var e = Ji.current; return Ji.current = Yi, e === null ? Yi : e; }
function Zu() { (ce === 0 || ce === 3 || ce === 2) && (ce = 4), de === null || !(cn & 268435455) && !(yo & 268435455) || Nt(de, ge); }
function qi(e, t) { var n = H; H |= 2; var r = Gf(); (de !== e || ge !== t) && (at = null, rn(e, t)); do
    try {
        l0();
        break;
    }
    catch (i) {
        Kf(e, i);
    }
while (!0); if (Bu(), H = n, Ji.current = r, se !== null)
    throw Error(P(261)); return de = null, ge = 0, ce; }
function l0() { for (; se !== null;)
    Yf(se); }
function u0() { for (; se !== null && !Up();)
    Yf(se); }
function Yf(e) { var t = Zf(e.alternate, e, Ue); e.memoizedProps = e.pendingProps, t === null ? Jf(e) : se = t, Ku.current = null; }
function Jf(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = e0(n, t), n !== null) {
            n.flags &= 32767, se = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            ce = 6, se = null;
            return;
        }
    }
    else if (n = bh(n, t, Ue), n !== null) {
        se = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        se = t;
        return;
    }
    se = t = e;
} while (t !== null); ce === 0 && (ce = 5); }
function Zt(e, t, n) { var r = Q, i = We.transition; try {
    We.transition = null, Q = 1, s0(e, t, n, r);
}
finally {
    We.transition = i, Q = r;
} return null; }
function s0(e, t, n, r) { do
    Mn();
while (Rt !== null); if (H & 6)
    throw Error(P(327)); n = e.finishedWork; var i = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(P(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (Wp(e, o), e === de && (se = de = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || pi || (pi = !0, qf(Bi, function () { return Mn(), null; })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = We.transition, We.transition = null;
    var l = Q;
    Q = 1;
    var s = H;
    H |= 4, Ku.current = null, n0(e, n), Vf(n, e), Ih(Ul), Oi = !!Ll, Ul = Ll = null, e.current = n, r0(n), Bp(), H = s, Q = l, We.transition = o;
}
else
    e.current = n; if (pi && (pi = !1, Rt = e, Zi = i), o = e.pendingLanes, o === 0 && (jt = null), jp(n.stateNode), Le(e, le()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (Xi)
    throw Xi = !1, e = ql, ql = null, e; return Zi & 1 && e.tag !== 0 && Mn(), o = e.pendingLanes, o & 1 ? e === bl ? Cr++ : (Cr = 0, bl = e) : Cr = 0, Ht(), null; }
function Mn() { if (Rt !== null) {
    var e = Nc(Zi), t = We.transition, n = Q;
    try {
        if (We.transition = null, Q = 16 > e ? 16 : e, Rt === null)
            var r = !1;
        else {
            if (e = Rt, Rt = null, Zi = 0, H & 6)
                throw Error(P(331));
            var i = H;
            for (H |= 4, j = e.current; j !== null;) {
                var o = j, l = o.child;
                if (j.flags & 16) {
                    var s = o.deletions;
                    if (s !== null) {
                        for (var c = 0; c < s.length; c++) {
                            var d = s[c];
                            for (j = d; j !== null;) {
                                var g = j;
                                switch (g.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Sr(8, g, o);
                                }
                                var y = g.child;
                                if (y !== null)
                                    y.return = g, j = y;
                                else
                                    for (; j !== null;) {
                                        g = j;
                                        var x = g.sibling, k = g.return;
                                        if (Df(g), g === d) {
                                            j = null;
                                            break;
                                        }
                                        if (x !== null) {
                                            x.return = k, j = x;
                                            break;
                                        }
                                        j = k;
                                    }
                            }
                        }
                        var C = o.alternate;
                        if (C !== null) {
                            var N = C.child;
                            if (N !== null) {
                                C.child = null;
                                do {
                                    var U = N.sibling;
                                    N.sibling = null, N = U;
                                } while (N !== null);
                            }
                        }
                        j = o;
                    }
                }
                if (o.subtreeFlags & 2064 && l !== null)
                    l.return = o, j = l;
                else
                    e: for (; j !== null;) {
                        if (o = j, o.flags & 2048)
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15: Sr(9, o, o.return);
                            }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, j = m;
                            break e;
                        }
                        j = o.return;
                    }
            }
            var h = e.current;
            for (j = h; j !== null;) {
                l = j;
                var v = l.child;
                if (l.subtreeFlags & 2064 && v !== null)
                    v.return = l, j = v;
                else
                    e: for (l = h; j !== null;) {
                        if (s = j, s.flags & 2048)
                            try {
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15: mo(9, s);
                                }
                            }
                            catch (I) {
                                oe(s, s.return, I);
                            }
                        if (s === l) {
                            j = null;
                            break e;
                        }
                        var _ = s.sibling;
                        if (_ !== null) {
                            _.return = s.return, j = _;
                            break e;
                        }
                        j = s.return;
                    }
            }
            if (H = i, Ht(), lt && typeof lt.onPostCommitFiberRoot == "function")
                try {
                    lt.onPostCommitFiberRoot(lo, e);
                }
                catch (_b) { }
            r = !0;
        }
        return r;
    }
    finally {
        Q = n, We.transition = t;
    }
} return !1; }
function Ca(e, t, n) { t = Hn(n, t), t = Rf(e, t, 1), e = Ot(e, t, 1), t = Ce(), e !== null && (Qr(e, 1, t), Le(e, t)); }
function oe(e, t, n) { if (e.tag === 3)
    Ca(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            Ca(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
                e = Hn(n, e), e = Pf(t, e, 1), t = Ot(t, e, 1), e = Ce(), t !== null && (Qr(t, 1, e), Le(t, e));
                break;
            }
        }
        t = t.return;
    } }
function a0(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, de === e && (ge & n) === n && (ce === 4 || ce === 3 && (ge & 130023424) === ge && 500 > le() - Yu ? rn(e, 0) : Gu |= n), Le(e, t); }
function Xf(e, t) { t === 0 && (e.mode & 1 ? (t = ri, ri <<= 1, !(ri & 130023424) && (ri = 4194304)) : t = 1); var n = Ce(); e = vt(e, t), e !== null && (Qr(e, t, n), Le(e, n)); }
function c0(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), Xf(e, n); }
function f0(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(P(314));
} r !== null && r.delete(t), Xf(e, n); }
var Zf;
Zf = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current)
        Ie = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return Ie = !1, qh(e, t, n);
        Ie = !!(e.flags & 131072);
    }
else
    Ie = !1, b && t.flags & 1048576 && bc(t, Wi, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        Ti(e, t), e = t.pendingProps;
        var i = Dn(t, Se.current);
        jn(t, n), i = $u(null, t, r, e, i, n);
        var o = Wu();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Di(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ju(t), i.updater = po, t.stateNode = i, i._reactInternals = t, $l(t, r, e, n), t = Hl(null, t, r, !0, o, n)) : (t.tag = 0, b && o && Ru(t), ke(null, t, i, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ti(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = p0(r), e = Ke(r, e), i) {
                case 0:
                    t = Vl(null, t, r, e, n);
                    break e;
                case 1:
                    t = ha(null, t, r, e, n);
                    break e;
                case 11:
                    t = da(null, t, r, e, n);
                    break e;
                case 14:
                    t = pa(null, t, r, Ke(r.type, e), n);
                    break e;
            }
            throw Error(P(306, r, ""));
        }
        return t;
    case 0: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Vl(e, t, r, i, n);
    case 1: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), ha(e, t, r, i, n);
    case 3:
        e: {
            if (Ff(t), e === null)
                throw Error(P(387));
            r = t.pendingProps, o = t.memoizedState, i = o.element, rf(e, t), Qi(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element, o.isDehydrated)
                if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    i = Hn(Error(P(423)), t), t = ma(e, t, r, n, i);
                    break e;
                }
                else if (r !== i) {
                    i = Hn(Error(P(424)), t), t = ma(e, t, r, n, i);
                    break e;
                }
                else
                    for (Be = Ft(t.stateNode.containerInfo.firstChild), Fe = t, b = !0, Ye = null, n = sf(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if ($n(), r === i) {
                    t = wt(e, t, n);
                    break e;
                }
                ke(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return af(t), e === null && zl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Bl(r, i) ? l = null : o !== null && Bl(r, o) && (t.flags |= 32), Bf(e, t), ke(e, t, l, n), t.child;
    case 6: return e === null && zl(t), null;
    case 13: return Of(e, t, n);
    case 4: return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), da(e, t, r, i, n);
    case 7: return ke(e, t, t.pendingProps, n), t.child;
    case 8: return ke(e, t, t.pendingProps.children, n), t.child;
    case 12: return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, G(Vi, r._currentValue), r._currentValue = l, o !== null)
                if (Ze(o.value, l)) {
                    if (o.children === i.children && !Re.current) {
                        t = wt(e, t, n);
                        break e;
                    }
                }
                else
                    for (o = t.child, o !== null && (o.return = t); o !== null;) {
                        var s = o.dependencies;
                        if (s !== null) {
                            l = o.child;
                            for (var c = s.firstContext; c !== null;) {
                                if (c.context === r) {
                                    if (o.tag === 1) {
                                        c = mt(-1, n & -n), c.tag = 2;
                                        var d = o.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var g = d.pending;
                                            g === null ? c.next = c : (c.next = g.next, g.next = c), d.pending = c;
                                        }
                                    }
                                    o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Al(o.return, n, t), s.lanes |= n;
                                    break;
                                }
                                c = c.next;
                            }
                        }
                        else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return, l === null)
                                throw Error(P(341));
                            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Al(l, n, t), l = o.sibling;
                        }
                        else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null;) {
                                if (l === t) {
                                    l = null;
                                    break;
                                }
                                if (o = l.sibling, o !== null) {
                                    o.return = l.return, l = o;
                                    break;
                                }
                                l = l.return;
                            }
                        o = l;
                    }
            ke(e, t, i.children, n), t = t.child;
        }
        return t;
    case 9: return i = t.type, r = t.pendingProps.children, jn(t, n), i = Ve(i), r = r(i), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14: return r = t.type, i = Ke(r, t.pendingProps), i = Ke(r.type, i), pa(e, t, r, i, n);
    case 15: return Lf(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ti(e, t), t.tag = 1, Pe(r) ? (e = !0, Di(t)) : e = !1, jn(t, n), lf(t, r, i), $l(t, r, i, n), Hl(null, t, r, !0, e, n);
    case 19: return jf(e, t, n);
    case 22: return Uf(e, t, n);
} throw Error(P(156, t.tag)); };
function qf(e, t) { return kc(e, t); }
function d0(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function $e(e, t, n, r) { return new d0(e, t, n, r); }
function qu(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function p0(e) { if (typeof e == "function")
    return qu(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === gu)
        return 11;
    if (e === vu)
        return 14;
} return 2; }
function zt(e, t) { var n = e.alternate; return n === null ? (n = $e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function Ri(e, t, n, r, i, o) { var l = 2; if (r = e, typeof e == "function")
    qu(e) && (l = 1);
else if (typeof e == "string")
    l = 5;
else
    e: switch (e) {
        case En: return on(n.children, i, o, t);
        case yu:
            l = 8, i |= 8;
            break;
        case fl: return e = $e(12, n, t, i | 2), e.elementType = fl, e.lanes = o, e;
        case dl: return e = $e(13, n, t, i), e.elementType = dl, e.lanes = o, e;
        case pl: return e = $e(19, n, t, i), e.elementType = pl, e.lanes = o, e;
        case lc: return go(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case ic:
                        l = 10;
                        break e;
                    case oc:
                        l = 9;
                        break e;
                    case gu:
                        l = 11;
                        break e;
                    case vu:
                        l = 14;
                        break e;
                    case Ct:
                        l = 16, r = null;
                        break e;
                }
            throw Error(P(130, e == null ? e : typeof e, ""));
    } return t = $e(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t; }
function on(e, t, n, r) { return e = $e(7, e, r, t), e.lanes = n, e; }
function go(e, t, n, r) { return e = $e(22, e, r, t), e.elementType = lc, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function el(e, t, n) { return e = $e(6, e, null, t), e.lanes = n, e; }
function tl(e, t, n) { return t = $e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function h0(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oo(0), this.expirationTimes = Oo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null; }
function bu(e, t, n, r, i, o, l, s, c) { return e = new h0(e, t, n, s, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = $e(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(o), e; }
function m0(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: xn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function bf(e) { if (!e)
    return $t; e = e._reactInternals; e: {
    if (pn(e) !== e || e.tag !== 1)
        throw Error(P(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (Pe(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(P(171));
} if (e.tag === 1) {
    var n = e.type;
    if (Pe(n))
        return Zc(e, n, t);
} return t; }
function ed(e, t, n, r, i, o, l, s, c) { return e = bu(n, r, !0, e, i, o, l, s, c), e.context = bf(null), n = e.current, r = Ce(), i = Mt(n), o = mt(r, i), o.callback = t !== null && t !== void 0 ? t : null, Ot(n, o, i), e.current.lanes = i, Qr(e, i, r), Le(e, r), e; }
function vo(e, t, n, r) { var i = t.current, o = Ce(), l = Mt(i); return n = bf(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(i, t, l), e !== null && (Xe(e, i, l, o), ki(e, i, l)), l; }
function bi(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function _a(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function es(e, t) { _a(e, t), (e = e.alternate) && _a(e, t); }
function y0() { return null; }
var td = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function ts(e) { this._internalRoot = e; }
wo.prototype.render = ts.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(P(409)); vo(e, t, null, null); };
wo.prototype.unmount = ts.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () { vo(null, e, null, null); }), t[gt] = null;
} };
function wo(e) { this._internalRoot = e; }
wo.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = Pc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
        ;
    Tt.splice(n, 0, e), n === 0 && Uc(e);
} };
function ns(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function xo(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function Ta() { }
function g0(e, t, n, r, i) { if (i) {
    if (typeof r == "function") {
        var o = r;
        r = function () { var d = bi(l); o.call(d); };
    }
    var l = ed(t, r, e, 0, null, !1, !1, "", Ta);
    return e._reactRootContainer = l, e[gt] = l.current, Br(e.nodeType === 8 ? e.parentNode : e), fn(), l;
} for (; i = e.lastChild;)
    e.removeChild(i); if (typeof r == "function") {
    var s = r;
    r = function () { var d = bi(c); s.call(d); };
} var c = bu(e, 0, !1, null, null, !1, !1, "", Ta); return e._reactRootContainer = c, e[gt] = c.current, Br(e.nodeType === 8 ? e.parentNode : e), fn(function () { vo(t, c, n, r); }), c; }
function Eo(e, t, n, r, i) { var o = n._reactRootContainer; if (o) {
    var l = o;
    if (typeof i == "function") {
        var s = i;
        i = function () { var c = bi(l); s.call(c); };
    }
    vo(t, l, e, i);
}
else
    l = g0(n, t, e, i, r); return bi(l); }
Ic = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = dr(t.pendingLanes);
            n !== 0 && (Eu(t, n | 1), Le(t, le()), !(H & 6) && (Qn = le() + 500, Ht()));
        }
        break;
    case 13: fn(function () { var r = vt(e, 1); if (r !== null) {
        var i = Ce();
        Xe(r, e, 1, i);
    } }), es(e, 1);
} };
Su = function (e) { if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
        var n = Ce();
        Xe(t, e, 134217728, n);
    }
    es(e, 134217728);
} };
Rc = function (e) { if (e.tag === 13) {
    var t = Mt(e), n = vt(e, t);
    if (n !== null) {
        var r = Ce();
        Xe(n, e, t, r);
    }
    es(e, t);
} };
Pc = function () { return Q; };
Lc = function (e, t) { var n = Q; try {
    return Q = e, t();
}
finally {
    Q = n;
} };
kl = function (e, t, n) { switch (t) {
    case "input":
        if (yl(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = co(r);
                    if (!i)
                        throw Error(P(90));
                    sc(r), yl(r, i);
                }
            }
        }
        break;
    case "textarea":
        cc(e, n);
        break;
    case "select": t = n.value, t != null && Un(e, !!n.multiple, t, !1);
} };
gc = Ju;
vc = fn;
var v0 = { usingClientEntryPoint: !1, Events: [Gr, _n, co, mc, yc, Ju] }, ar = { findFiberByHostInstance: en, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, w0 = { bundleType: ar.bundleType, version: ar.version, rendererPackageName: ar.rendererPackageName, rendererConfig: ar.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xt.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Ec(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: ar.findFiberByHostInstance || y0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hi.isDisabled && hi.supportsFiber)
        try {
            lo = hi.inject(w0), lt = hi;
        }
        catch (_g) { }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v0;
je.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!ns(t))
    throw Error(P(200)); return m0(e, t, null, n); };
je.createRoot = function (e, t) { if (!ns(e))
    throw Error(P(299)); var n = !1, r = "", i = td; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = bu(e, 1, !1, null, null, n, !1, r, i), e[gt] = t.current, Br(e.nodeType === 8 ? e.parentNode : e), new ts(t); };
je.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e))); return e = Ec(t), e = e === null ? null : e.stateNode, e; };
je.flushSync = function (e) { return fn(e); };
je.hydrate = function (e, t, n) { if (!xo(t))
    throw Error(P(200)); return Eo(null, e, t, !0, n); };
je.hydrateRoot = function (e, t, n) { if (!ns(e))
    throw Error(P(405)); var r = n != null && n.hydratedSources || null, i = !1, o = "", l = td; if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ed(t, null, e, 1, n !== null && n !== void 0 ? n : null, i, !1, o, l), e[gt] = t.current, Br(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i); return new wo(t); };
je.render = function (e, t, n) { if (!xo(t))
    throw Error(P(200)); return Eo(null, e, t, !1, n); };
je.unmountComponentAtNode = function (e) { if (!xo(e))
    throw Error(P(40)); return e._reactRootContainer ? (fn(function () { Eo(null, null, e, !1, function () { e._reactRootContainer = null, e[gt] = null; }); }), !0) : !1; };
je.unstable_batchedUpdates = Ju;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!xo(n))
    throw Error(P(200)); if (e == null || e._reactInternals === void 0)
    throw Error(P(38)); return Eo(e, t, n, !1, r); };
je.version = "18.2.0-next-9e3b772b8-20220608";
function nd() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd);
    }
    catch (e) {
        console.error(e);
    } }
nd(), ba.exports = je;
var rd = ba.exports;
const hr = io(rd);
var Na = rd;
al.createRoot = Na.createRoot, al.hydrateRoot = Na.hydrateRoot; /**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wr() { return Wr = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Wr.apply(this, arguments); }
var Pt;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(Pt || (Pt = {}));
const Ia = "popstate";
function x0(e) { e === void 0 && (e = {}); function t(r, i) { let { pathname: o, search: l, hash: s } = r.location; return nu("", { pathname: o, search: l, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default"); } function n(r, i) { return typeof i == "string" ? i : eo(i); } return S0(t, n, null, e); }
function ue(e, t) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(t); }
function id(e, t) { if (!e) {
    typeof console < "u" && console.warn(t);
    try {
        throw new Error(t);
    }
    catch (_b) { }
} }
function E0() { return Math.random().toString(36).substr(2, 8); }
function Ra(e, t) { return { usr: e.state, key: e.key, idx: t }; }
function nu(e, t, n, r) { return n === void 0 && (n = null), Wr({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Jn(t) : t, { state: n, key: t && t.key || r || E0() }); }
function eo(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t; }
function Jn(e) { let t = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
} return t; }
function S0(e, t, n, r) { r === void 0 && (r = {}); let { window: i = document.defaultView, v5Compat: o = !1 } = r, l = i.history, s = Pt.Pop, c = null, d = g(); d == null && (d = 0, l.replaceState(Wr({}, l.state, { idx: d }), "")); function g() { return (l.state || { idx: null }).idx; } function y() { s = Pt.Pop; let U = g(), m = U == null ? null : U - d; d = U, c && c({ action: s, location: N.location, delta: m }); } function x(U, m) { s = Pt.Push; let h = nu(N.location, U, m); n && n(h, U), d = g() + 1; let v = Ra(h, d), _ = N.createHref(h); try {
    l.pushState(v, "", _);
}
catch (I) {
    if (I instanceof DOMException && I.name === "DataCloneError")
        throw I;
    i.location.assign(_);
} o && c && c({ action: s, location: N.location, delta: 1 }); } function k(U, m) { s = Pt.Replace; let h = nu(N.location, U, m); n && n(h, U), d = g(); let v = Ra(h, d), _ = N.createHref(h); l.replaceState(v, "", _), o && c && c({ action: s, location: N.location, delta: 0 }); } function C(U) { let m = i.location.origin !== "null" ? i.location.origin : i.location.href, h = typeof U == "string" ? U : eo(U); return h = h.replace(/ $/, "%20"), ue(m, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, m); } let N = { get action() { return s; }, get location() { return e(i, l); }, listen(U) { if (c)
        throw new Error("A history only accepts one active listener"); return i.addEventListener(Ia, y), c = U, () => { i.removeEventListener(Ia, y), c = null; }; }, createHref(U) { return t(i, U); }, createURL: C, encodeLocation(U) { let m = C(U); return { pathname: m.pathname, search: m.search, hash: m.hash }; }, push: x, replace: k, go(U) { return l.go(U); } }; return N; }
var Pa;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(Pa || (Pa = {}));
function k0(e, t, n) { n === void 0 && (n = "/"); let r = typeof t == "string" ? Jn(t) : t, i = rs(r.pathname || "/", n); if (i == null)
    return null; let o = od(e); C0(o); let l = null; for (let s = 0; l == null && s < o.length; ++s) {
    let c = j0(i);
    l = B0(o[s], c);
} return l; }
function od(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let i = (o, l, s) => { let c = { relativePath: s === void 0 ? o.path || "" : s, caseSensitive: o.caseSensitive === !0, childrenIndex: l, route: o }; c.relativePath.startsWith("/") && (ue(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length)); let d = At([r, c.relativePath]), g = n.concat(c); o.children && o.children.length > 0 && (ue(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')), od(o.children, t, g, d)), !(o.path == null && !o.index) && t.push({ path: d, score: L0(d, o.index), routesMeta: g }); }; return e.forEach((o, l) => { var s; if (o.path === "" || !((s = o.path) != null && s.includes("?")))
    i(o, l);
else
    for (let c of ld(o.path))
        i(o, l, c); }), t; }
function ld(e) { let t = e.split("/"); if (t.length === 0)
    return []; let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, ""); if (r.length === 0)
    return i ? [o, ""] : [o]; let l = ld(r.join("/")), s = []; return s.push(...l.map(c => c === "" ? o : [o, c].join("/"))), i && s.push(...l), s.map(c => e.startsWith("/") && c === "" ? "/" : c); }
function C0(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : U0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const _0 = /^:[\w-]+$/, T0 = 3, N0 = 2, I0 = 1, R0 = 10, P0 = -2, La = e => e === "*";
function L0(e, t) { let n = e.split("/"), r = n.length; return n.some(La) && (r += P0), t && (r += N0), n.filter(i => !La(i)).reduce((i, o) => i + (_0.test(o) ? T0 : o === "" ? I0 : R0), r); }
function U0(e, t) { return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0; }
function B0(e, t) { let { routesMeta: n } = e, r = {}, i = "/", o = []; for (let l = 0; l < n.length; ++l) {
    let s = n[l], c = l === n.length - 1, d = i === "/" ? t : t.slice(i.length) || "/", g = F0({ path: s.relativePath, caseSensitive: s.caseSensitive, end: c }, d);
    if (!g)
        return null;
    Object.assign(r, g.params);
    let y = s.route;
    o.push({ params: r, pathname: At([i, g.pathname]), pathnameBase: D0(At([i, g.pathnameBase])), route: y }), g.pathnameBase !== "/" && (i = At([i, g.pathnameBase]));
} return o; }
function F0(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = O0(e.path, e.caseSensitive, e.end), i = t.match(n); if (!i)
    return null; let o = i[0], l = o.replace(/(.)\/+$/, "$1"), s = i.slice(1); return { params: r.reduce((d, g, y) => { let { paramName: x, isOptional: k } = g; if (x === "*") {
        let N = s[y] || "";
        l = o.slice(0, o.length - N.length).replace(/(.)\/+$/, "$1");
    } const C = s[y]; return k && !C ? d[x] = void 0 : d[x] = (C || "").replace(/%2F/g, "/"), d; }, {}), pathname: o, pathnameBase: l, pattern: e }; }
function O0(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), id(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, s, c) => (r.push({ paramName: s, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]; }
function j0(e) { try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
}
catch (t) {
    return id(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
} }
function rs(e, t) { if (t === "/")
    return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
function M0(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Jn(e) : e; return { pathname: n ? n.startsWith("/") ? n : z0(n, t) : t, search: $0(r), hash: W0(i) }; }
function z0(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(i => { i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i); }), n.length > 1 ? n.join("/") : "/"; }
function nl(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function A0(e) { return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0); }
function is(e, t) { let n = A0(e); return t ? n.map((r, i) => i === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase); }
function os(e, t, n, r) { r === void 0 && (r = !1); let i; typeof e == "string" ? i = Jn(e) : (i = Wr({}, e), ue(!i.pathname || !i.pathname.includes("?"), nl("?", "pathname", "search", i)), ue(!i.pathname || !i.pathname.includes("#"), nl("#", "pathname", "hash", i)), ue(!i.search || !i.search.includes("#"), nl("#", "search", "hash", i))); let o = e === "" || i.pathname === "", l = o ? "/" : i.pathname, s; if (l == null)
    s = n;
else {
    let y = t.length - 1;
    if (!r && l.startsWith("..")) {
        let x = l.split("/");
        for (; x[0] === "..";)
            x.shift(), y -= 1;
        i.pathname = x.join("/");
    }
    s = y >= 0 ? t[y] : "/";
} let c = M0(i, s), d = l && l !== "/" && l.endsWith("/"), g = (o || l === ".") && n.endsWith("/"); return !c.pathname.endsWith("/") && (d || g) && (c.pathname += "/"), c; }
const At = e => e.join("/").replace(/\/\/+/g, "/"), D0 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), $0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, W0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function V0(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const ud = ["post", "put", "patch", "delete"];
new Set(ud);
const H0 = ["get", ...ud];
new Set(H0); /**
* React Router v6.22.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Vr() { return Vr = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Vr.apply(this, arguments); }
const ls = S.createContext(null), Q0 = S.createContext(null), Qt = S.createContext(null), So = S.createContext(null), Kt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }), sd = S.createContext(null);
function K0(e, t) { let { relative: n } = t === void 0 ? {} : t; Xn() || ue(!1); let { basename: r, navigator: i } = S.useContext(Qt), { hash: o, pathname: l, search: s } = cd(e, { relative: n }), c = l; return r !== "/" && (c = l === "/" ? r : At([r, l])), i.createHref({ pathname: c, search: s, hash: o }); }
function Xn() { return S.useContext(So) != null; }
function Zn() { return Xn() || ue(!1), S.useContext(So).location; }
function ad(e) { S.useContext(Qt).static || S.useLayoutEffect(e); }
function ko() { let { isDataRoute: e } = S.useContext(Kt); return e ? om() : G0(); }
function G0() { Xn() || ue(!1); let e = S.useContext(ls), { basename: t, future: n, navigator: r } = S.useContext(Qt), { matches: i } = S.useContext(Kt), { pathname: o } = Zn(), l = JSON.stringify(is(i, n.v7_relativeSplatPath)), s = S.useRef(!1); return ad(() => { s.current = !0; }), S.useCallback(function (d, g) { if (g === void 0 && (g = {}), !s.current)
    return; if (typeof d == "number") {
    r.go(d);
    return;
} let y = os(d, JSON.parse(l), o, g.relative === "path"); e == null && t !== "/" && (y.pathname = y.pathname === "/" ? t : At([t, y.pathname])), (g.replace ? r.replace : r.push)(y, g.state, g); }, [t, r, l, o, e]); }
function cd(e, t) { let { relative: n } = t === void 0 ? {} : t, { future: r } = S.useContext(Qt), { matches: i } = S.useContext(Kt), { pathname: o } = Zn(), l = JSON.stringify(is(i, r.v7_relativeSplatPath)); return S.useMemo(() => os(e, JSON.parse(l), o, n === "path"), [e, l, o, n]); }
function Y0(e, t) { return J0(e, t); }
function J0(e, t, n, r) { Xn() || ue(!1); let { navigator: i } = S.useContext(Qt), { matches: o } = S.useContext(Kt), l = o[o.length - 1], s = l ? l.params : {}; l && l.pathname; let c = l ? l.pathnameBase : "/"; l && l.route; let d = Zn(), g; if (t) {
    var y;
    let U = typeof t == "string" ? Jn(t) : t;
    c === "/" || (y = U.pathname) != null && y.startsWith(c) || ue(!1), g = U;
}
else
    g = d; let x = g.pathname || "/", k = x; if (c !== "/") {
    let U = c.replace(/^\//, "").split("/");
    k = "/" + x.replace(/^\//, "").split("/").slice(U.length).join("/");
} let C = k0(e, { pathname: k }), N = em(C && C.map(U => Object.assign({}, U, { params: Object.assign({}, s, U.params), pathname: At([c, i.encodeLocation ? i.encodeLocation(U.pathname).pathname : U.pathname]), pathnameBase: U.pathnameBase === "/" ? c : At([c, i.encodeLocation ? i.encodeLocation(U.pathnameBase).pathname : U.pathnameBase]) })), o, n, r); return t && N ? S.createElement(So.Provider, { value: { location: Vr({ pathname: "/", search: "", hash: "", state: null, key: "default" }, g), navigationType: Pt.Pop } }, N) : N; }
function X0() { let e = im(), t = V0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? S.createElement("pre", { style: i }, n) : null, null); }
const Z0 = S.createElement(X0, null);
class q0 extends S.Component {
    constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error }; }
    static getDerivedStateFromError(t) { return { error: t }; }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }; }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n); }
    render() { return this.state.error !== void 0 ? S.createElement(Kt.Provider, { value: this.props.routeContext }, S.createElement(sd.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function b0(e) { let { routeContext: t, match: n, children: r } = e, i = S.useContext(ls); return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(Kt.Provider, { value: t }, r); }
function em(e, t, n, r) { var i; if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
        e = n.matches;
    else
        return null;
} let l = e, s = (i = n) == null ? void 0 : i.errors; if (s != null) {
    let g = l.findIndex(y => y.route.id && (s == null ? void 0 : s[y.route.id]));
    g >= 0 || ue(!1), l = l.slice(0, Math.min(l.length, g + 1));
} let c = !1, d = -1; if (n && r && r.v7_partialHydration)
    for (let g = 0; g < l.length; g++) {
        let y = l[g];
        if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (d = g), y.route.id) {
            let { loaderData: x, errors: k } = n, C = y.route.loader && x[y.route.id] === void 0 && (!k || k[y.route.id] === void 0);
            if (y.route.lazy || C) {
                c = !0, d >= 0 ? l = l.slice(0, d + 1) : l = [l[0]];
                break;
            }
        }
    } return l.reduceRight((g, y, x) => { let k, C = !1, N = null, U = null; n && (k = s && y.route.id ? s[y.route.id] : void 0, N = y.route.errorElement || Z0, c && (d < 0 && x === 0 ? (lm("route-fallback", !1), C = !0, U = null) : d === x && (C = !0, U = y.route.hydrateFallbackElement || null))); let m = t.concat(l.slice(0, x + 1)), h = () => { let v; return k ? v = N : C ? v = U : y.route.Component ? v = S.createElement(y.route.Component, null) : y.route.element ? v = y.route.element : v = g, S.createElement(b0, { match: y, routeContext: { outlet: g, matches: m, isDataRoute: n != null }, children: v }); }; return n && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? S.createElement(q0, { location: n.location, revalidation: n.revalidation, component: N, error: k, children: h(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : h(); }, null); }
var fd = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(fd || {}), to = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(to || {});
function tm(e) { let t = S.useContext(ls); return t || ue(!1), t; }
function nm(e) { let t = S.useContext(Q0); return t || ue(!1), t; }
function rm(e) { let t = S.useContext(Kt); return t || ue(!1), t; }
function dd(e) { let t = rm(), n = t.matches[t.matches.length - 1]; return n.route.id || ue(!1), n.route.id; }
function im() { var e; let t = S.useContext(sd), n = nm(to.UseRouteError), r = dd(to.UseRouteError); return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]; }
function om() { let { router: e } = tm(fd.UseNavigateStable), t = dd(to.UseNavigateStable), n = S.useRef(!1); return ad(() => { n.current = !0; }), S.useCallback(function (i, o) { o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Vr({ fromRouteId: t }, o))); }, [e, t]); }
const Ua = {};
function lm(e, t, n) { !t && !Ua[e] && (Ua[e] = !0); }
function Ba(e) { let { to: t, replace: n, state: r, relative: i } = e; Xn() || ue(!1); let { future: o, static: l } = S.useContext(Qt), { matches: s } = S.useContext(Kt), { pathname: c } = Zn(), d = ko(), g = os(t, is(s, o.v7_relativeSplatPath), c, i === "path"), y = JSON.stringify(g); return S.useEffect(() => d(JSON.parse(y), { replace: n, state: r, relative: i }), [d, y, i, n, r]), null; }
function zn(e) { ue(!1); }
function um(e) { let { basename: t = "/", children: n = null, location: r, navigationType: i = Pt.Pop, navigator: o, static: l = !1, future: s } = e; Xn() && ue(!1); let c = t.replace(/^\/*/, "/"), d = S.useMemo(() => ({ basename: c, navigator: o, static: l, future: Vr({ v7_relativeSplatPath: !1 }, s) }), [c, s, o, l]); typeof r == "string" && (r = Jn(r)); let { pathname: g = "/", search: y = "", hash: x = "", state: k = null, key: C = "default" } = r, N = S.useMemo(() => { let U = rs(g, c); return U == null ? null : { location: { pathname: U, search: y, hash: x, state: k, key: C }, navigationType: i }; }, [c, g, y, x, k, C, i]); return N == null ? null : S.createElement(Qt.Provider, { value: d }, S.createElement(So.Provider, { children: n, value: N })); }
function pd(e) { let { children: t, location: n } = e; return Y0(ru(t), n); }
new Promise(() => { });
function ru(e, t) { t === void 0 && (t = []); let n = []; return S.Children.forEach(e, (r, i) => { if (!S.isValidElement(r))
    return; let o = [...t, i]; if (r.type === S.Fragment) {
    n.push.apply(n, ru(r.props.children, o));
    return;
} r.type !== zn && ue(!1), !r.props.index || !r.props.children || ue(!1); let l = { id: r.props.id || o.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (l.children = ru(r.props.children, o)), n.push(l); }), n; } /**
* React Router DOM v6.22.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function iu() { return iu = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, iu.apply(this, arguments); }
function sm(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, o; for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function am(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }
function cm(e, t) { return e.button === 0 && (!t || t === "_self") && !am(e); }
const fm = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], dm = "6";
try {
    window.__reactRouterVersion = dm;
}
catch (_j) { }
const pm = "startTransition", Fa = cp[pm];
function hm(e) { let { basename: t, children: n, future: r, window: i } = e, o = S.useRef(); o.current == null && (o.current = x0({ window: i, v5Compat: !0 })); let l = o.current, [s, c] = S.useState({ action: l.action, location: l.location }), { v7_startTransition: d } = r || {}, g = S.useCallback(y => { d && Fa ? Fa(() => c(y)) : c(y); }, [c, d]); return S.useLayoutEffect(() => l.listen(g), [l, g]), S.createElement(um, { basename: t, children: n, location: s.location, navigationType: s.action, navigator: l, future: r }); }
const mm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ym = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, hd = S.forwardRef(function (t, n) { let { onClick: r, relative: i, reloadDocument: o, replace: l, state: s, target: c, to: d, preventScrollReset: g, unstable_viewTransition: y } = t, x = sm(t, fm), { basename: k } = S.useContext(Qt), C, N = !1; if (typeof d == "string" && ym.test(d) && (C = d, mm))
    try {
        let v = new URL(window.location.href), _ = d.startsWith("//") ? new URL(v.protocol + d) : new URL(d), I = rs(_.pathname, k);
        _.origin === v.origin && I != null ? d = I + _.search + _.hash : N = !0;
    }
    catch (_b) { } let U = K0(d, { relative: i }), m = gm(d, { replace: l, state: s, target: c, preventScrollReset: g, relative: i, unstable_viewTransition: y }); function h(v) { r && r(v), v.defaultPrevented || m(v); } return S.createElement("a", iu({}, x, { href: C || U, onClick: N || o ? r : h, ref: n, target: c })); });
var Oa;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(Oa || (Oa = {}));
var ja;
(function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(ja || (ja = {}));
function gm(e, t) { let { target: n, replace: r, state: i, preventScrollReset: o, relative: l, unstable_viewTransition: s } = t === void 0 ? {} : t, c = ko(), d = Zn(), g = cd(e, { relative: l }); return S.useCallback(y => { if (cm(y, n)) {
    y.preventDefault();
    let x = r !== void 0 ? r : eo(d) === eo(g);
    c(e, { replace: x, state: i, preventScrollReset: o, relative: l, unstable_viewTransition: s });
} }, [d, c, g, r, i, n, e, o, l, s]); }
class Co {
    constructor(t, n, r, i) { J(this, "_firstName"); J(this, "_lastName"); J(this, "_alias"); J(this, "_imageUrl"); this._firstName = t, this._lastName = n, this._alias = r, this._imageUrl = i; }
    get firstName() { return this._firstName; }
    set firstName(t) { this._firstName = t; }
    get lastName() { return this._lastName; }
    set lastName(t) { this._lastName = t; }
    get name() { return `${this.firstName} ${this.lastName}`; }
    get alias() { return this._alias; }
    set alias(t) { this._alias = t; }
    get imageUrl() { return this._imageUrl; }
    set imageUrl(t) { this._imageUrl = t; }
    equals(t) { return this._alias === t._alias; }
    static fromJson(t) { if (t) {
        let n = JSON.parse(t);
        return new Co(n._firstName, n._lastName, n._alias, n._imageUrl);
    }
    else
        return null; }
    toJson() { return JSON.stringify(this); }
}
let mi;
const vm = new Uint8Array(16);
function wm() { if (!mi && (mi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !mi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return mi(vm); }
const he = [];
for (let e = 0; e < 256; ++e)
    he.push((e + 256).toString(16).slice(1));
function xm(e, t = 0) { return he[e[t + 0]] + he[e[t + 1]] + he[e[t + 2]] + he[e[t + 3]] + "-" + he[e[t + 4]] + he[e[t + 5]] + "-" + he[e[t + 6]] + he[e[t + 7]] + "-" + he[e[t + 8]] + he[e[t + 9]] + "-" + he[e[t + 10]] + he[e[t + 11]] + he[e[t + 12]] + he[e[t + 13]] + he[e[t + 14]] + he[e[t + 15]]; }
const Em = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ma = { randomUUID: Em };
function Sm(e, t, n) { if (Ma.randomUUID && !t && !e)
    return Ma.randomUUID(); e = e || {}; const r = e.random || (e.rng || wm)(); if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
        t[n + i] = r[i];
    return t;
} return xm(r); }
class ln {
    constructor(t, n) { J(this, "_token"); J(this, "_timestamp"); this._token = t, this._timestamp = n; }
    static Generate() { let t = ln.generateToken(), n = Date.now(); return new ln(t, n); }
    static generateToken() { try {
        return Sm().toString();
    }
    catch (_b) {
        let n = "";
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$^*()-+", i = r.length;
        for (let o = 0; o < 64; o++)
            n += r.charAt(Math.floor(Math.random() * i));
        return n;
    } }
    get token() { return this._token; }
    set token(t) { this._token = t; }
    get timestamp() { return this._timestamp; }
    set timestamp(t) { this._timestamp = t; }
    static fromJson(t) { if (t) {
        let n = JSON.parse(t);
        return new ln(n._token, n._timestamp);
    }
    else
        return null; }
    toJson() { return JSON.stringify(this); }
}
class us {
}
class km extends us {
    constructor(n, r) { super(); J(this, "_username"); J(this, "_password"); this._username = n, this._password = r; }
    get username() { return this._username; }
    get password() { return this._password; }
}
class Cm extends us {
    constructor(n, r, i, o, l) { super(); J(this, "_firstName"); J(this, "_lastName"); J(this, "_alias"); J(this, "_password"); J(this, "_imageStringBase64"); this._firstName = n, this._lastName = r, this._alias = i, this._password = o, this._imageStringBase64 = l; }
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    get alias() { return this._alias; }
    get password() { return this._password; }
    get imageStringBase64() { return this._imageStringBase64; }
}
class ss extends us {
    constructor(n) { super(); J(this, "_authToken"); this._authToken = n; }
    get authToken() { return this._authToken; }
    static fromJson(n) {
        const r = n, i = ln.fromJson(JSON.stringify(r._authToken));
        if (i === null)
            throw new Error(`LogOutRequest, could not deserialize token with json:
` + JSON.stringify(r._authToken));
        return new ss(i);
    }
}
class as {
    constructor(t, n = null) { J(this, "_success"); J(this, "_message"); this._success = t, this._message = n; }
    get success() { return this._success; }
    get message() { return this._message; }
    static fromJson(t) { const n = t; return new as(n._success, n._message); }
}
class no extends as {
    constructor(n, r, i, o) { super(n, o); J(this, "_user"); J(this, "_token"); this._user = r, this._token = i; }
    get user() { return this._user; }
    get token() { return this._token; }
    static fromJson(n) {
        const r = n, i = Co.fromJson(JSON.stringify(r._user));
        if (i === null)
            throw new Error(`AuthResponse, could not deserialize user with json:
` + JSON.stringify(r._user));
        const o = ln.fromJson(JSON.stringify(r._token));
        if (o === null)
            throw new Error(`AuthResponse, could not deserialize token with json:
` + JSON.stringify(r._token));
        return new no(r._success, i, o, r._message);
    }
}
const rl = "CurrentUserKey", il = "AuthTokenKey", md = { currentUser: null, authToken: null, updateUserInfo: () => null, clearUserInfo: () => null }, yd = S.createContext(md), _m = ({ children: e }) => { const t = (c, d) => { localStorage.setItem(rl, c.toJson()), localStorage.setItem(il, d.toJson()); }, n = () => { const c = Co.fromJson(localStorage.getItem(rl)), d = ln.fromJson(localStorage.getItem(il)); return c && d ? { currentUser: c, authToken: d } : { currentUser: null, authToken: null }; }, r = () => { localStorage.removeItem(rl), localStorage.removeItem(il); }, [i, o] = S.useState(Object.assign(Object.assign({}, md), n())), l = (c, d, g) => { o(Object.assign(Object.assign({}, i), { currentUser: c, authToken: d })), g && t(c, d); }, s = () => { o(Object.assign(Object.assign({}, i), { currentUser: null, authToken: null })), r(); }; return B.jsx(yd.Provider, { value: Object.assign(Object.assign({}, i), { updateUserInfo: l, clearUserInfo: s }), children: e }); }, cs = () => S.useContext(yd);
class Tm {
    constructor(t) { J(this, "_view"); this._view = t; }
    get view() { return this._view; }
    doFailureReportingOperation(t, n) {
        return __awaiter(this, void 0, void 0, function* () { try {
            yield t();
        }
        catch (r) {
            this.view.displayErrorMessage(`Failed to ${n} because of exception: ${r.message}`);
        } });
    }
}
var fs = {}, _o = {};
_o.byteLength = Rm;
_o.toByteArray = Lm;
_o.fromByteArray = Fm;
var ot = [], ze = [], Nm = typeof Uint8Array < "u" ? Uint8Array : Array, ol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vn = 0, Im = ol.length; vn < Im; ++vn)
    ot[vn] = ol[vn], ze[ol.charCodeAt(vn)] = vn;
ze[45] = 62;
ze[95] = 63;
function gd(e) { var t = e.length; if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); n === -1 && (n = t); var r = n === t ? 0 : 4 - n % 4; return [n, r]; }
function Rm(e) { var t = gd(e), n = t[0], r = t[1]; return (n + r) * 3 / 4 - r; }
function Pm(e, t, n) { return (t + n) * 3 / 4 - n; }
function Lm(e) { var t, n = gd(e), r = n[0], i = n[1], o = new Nm(Pm(e, r, i)), l = 0, s = i > 0 ? r - 4 : r, c; for (c = 0; c < s; c += 4)
    t = ze[e.charCodeAt(c)] << 18 | ze[e.charCodeAt(c + 1)] << 12 | ze[e.charCodeAt(c + 2)] << 6 | ze[e.charCodeAt(c + 3)], o[l++] = t >> 16 & 255, o[l++] = t >> 8 & 255, o[l++] = t & 255; return i === 2 && (t = ze[e.charCodeAt(c)] << 2 | ze[e.charCodeAt(c + 1)] >> 4, o[l++] = t & 255), i === 1 && (t = ze[e.charCodeAt(c)] << 10 | ze[e.charCodeAt(c + 1)] << 4 | ze[e.charCodeAt(c + 2)] >> 2, o[l++] = t >> 8 & 255, o[l++] = t & 255), o; }
function Um(e) { return ot[e >> 18 & 63] + ot[e >> 12 & 63] + ot[e >> 6 & 63] + ot[e & 63]; }
function Bm(e, t, n) { for (var r, i = [], o = t; o < n; o += 3)
    r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(Um(r)); return i.join(""); }
function Fm(e) { for (var t, n = e.length, r = n % 3, i = [], o = 16383, l = 0, s = n - r; l < s; l += o)
    i.push(Bm(e, l, l + o > s ? s : l + o)); return r === 1 ? (t = e[n - 1], i.push(ot[t >> 2] + ot[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(ot[t >> 10] + ot[t >> 4 & 63] + ot[t << 2 & 63] + "=")), i.join(""); }
var ds = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ds.read = function (e, t, n, r, i) { var o, l, s = i * 8 - r - 1, c = (1 << s) - 1, d = c >> 1, g = -7, y = n ? i - 1 : 0, x = n ? -1 : 1, k = e[t + y]; for (y += x, o = k & (1 << -g) - 1, k >>= -g, g += s; g > 0; o = o * 256 + e[t + y], y += x, g -= 8)
    ; for (l = o & (1 << -g) - 1, o >>= -g, g += r; g > 0; l = l * 256 + e[t + y], y += x, g -= 8)
    ; if (o === 0)
    o = 1 - d;
else {
    if (o === c)
        return l ? NaN : (k ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, r), o = o - d;
} return (k ? -1 : 1) * l * Math.pow(2, o - r); };
ds.write = function (e, t, n, r, i, o) { var l, s, c, d = o * 8 - i - 1, g = (1 << d) - 1, y = g >> 1, x = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = r ? 0 : o - 1, C = r ? 1 : -1, N = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, l = g) : (l = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -l)) < 1 && (l--, c *= 2), l + y >= 1 ? t += x / c : t += x * Math.pow(2, 1 - y), t * c >= 2 && (l++, c /= 2), l + y >= g ? (s = 0, l = g) : l + y >= 1 ? (s = (t * c - 1) * Math.pow(2, i), l = l + y) : (s = t * Math.pow(2, y - 1) * Math.pow(2, i), l = 0)); i >= 8; e[n + k] = s & 255, k += C, s /= 256, i -= 8)
    ; for (l = l << i | s, d += i; d > 0; e[n + k] = l & 255, k += C, l /= 256, d -= 8)
    ; e[n + k - C] |= N * 128; }; /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (e) { const t = _o, n = ds, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null; e.Buffer = s, e.SlowBuffer = h, e.INSPECT_MAX_BYTES = 50; const i = 2147483647; e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = o(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."); function o() { try {
    const f = new Uint8Array(1), u = { foo: function () { return 42; } };
    return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(f, u), f.foo() === 42;
}
catch (_b) {
    return !1;
} } Object.defineProperty(s.prototype, "parent", { enumerable: !0, get: function () { if (s.isBuffer(this))
        return this.buffer; } }), Object.defineProperty(s.prototype, "offset", { enumerable: !0, get: function () { if (s.isBuffer(this))
        return this.byteOffset; } }); function l(f) { if (f > i)
    throw new RangeError('The value "' + f + '" is invalid for option "size"'); const u = new Uint8Array(f); return Object.setPrototypeOf(u, s.prototype), u; } function s(f, u, a) { if (typeof f == "number") {
    if (typeof u == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
    return y(f);
} return c(f, u, a); } s.poolSize = 8192; function c(f, u, a) { if (typeof f == "string")
    return x(f, u); if (ArrayBuffer.isView(f))
    return C(f); if (f == null)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f); if (tt(f, ArrayBuffer) || f && tt(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (tt(f, SharedArrayBuffer) || f && tt(f.buffer, SharedArrayBuffer)))
    return N(f, u, a); if (typeof f == "number")
    throw new TypeError('The "value" argument must not be of type number. Received type number'); const p = f.valueOf && f.valueOf(); if (p != null && p !== f)
    return s.from(p, u, a); const w = U(f); if (w)
    return w; if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
    return s.from(f[Symbol.toPrimitive]("string"), u, a); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f); } s.from = function (f, u, a) { return c(f, u, a); }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array); function d(f) { if (typeof f != "number")
    throw new TypeError('"size" argument must be of type number'); if (f < 0)
    throw new RangeError('The value "' + f + '" is invalid for option "size"'); } function g(f, u, a) { return d(f), f <= 0 ? l(f) : u !== void 0 ? typeof a == "string" ? l(f).fill(u, a) : l(f).fill(u) : l(f); } s.alloc = function (f, u, a) { return g(f, u, a); }; function y(f) { return d(f), l(f < 0 ? 0 : m(f) | 0); } s.allocUnsafe = function (f) { return y(f); }, s.allocUnsafeSlow = function (f) { return y(f); }; function x(f, u) { if ((typeof u != "string" || u === "") && (u = "utf8"), !s.isEncoding(u))
    throw new TypeError("Unknown encoding: " + u); const a = v(f, u) | 0; let p = l(a); const w = p.write(f, u); return w !== a && (p = p.slice(0, w)), p; } function k(f) { const u = f.length < 0 ? 0 : m(f.length) | 0, a = l(u); for (let p = 0; p < u; p += 1)
    a[p] = f[p] & 255; return a; } function C(f) { if (tt(f, Uint8Array)) {
    const u = new Uint8Array(f);
    return N(u.buffer, u.byteOffset, u.byteLength);
} return k(f); } function N(f, u, a) { if (u < 0 || f.byteLength < u)
    throw new RangeError('"offset" is outside of buffer bounds'); if (f.byteLength < u + (a || 0))
    throw new RangeError('"length" is outside of buffer bounds'); let p; return u === void 0 && a === void 0 ? p = new Uint8Array(f) : a === void 0 ? p = new Uint8Array(f, u) : p = new Uint8Array(f, u, a), Object.setPrototypeOf(p, s.prototype), p; } function U(f) { if (s.isBuffer(f)) {
    const u = m(f.length) | 0, a = l(u);
    return a.length === 0 || f.copy(a, 0, 0, u), a;
} if (f.length !== void 0)
    return typeof f.length != "number" || Ro(f.length) ? l(0) : k(f); if (f.type === "Buffer" && Array.isArray(f.data))
    return k(f.data); } function m(f) { if (f >= i)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes"); return f | 0; } function h(f) { return +f != f && (f = 0), s.alloc(+f); } s.isBuffer = function (u) { return u != null && u._isBuffer === !0 && u !== s.prototype; }, s.compare = function (u, a) { if (tt(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), tt(a, Uint8Array) && (a = s.from(a, a.offset, a.byteLength)), !s.isBuffer(u) || !s.isBuffer(a))
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (u === a)
    return 0; let p = u.length, w = a.length; for (let E = 0, T = Math.min(p, w); E < T; ++E)
    if (u[E] !== a[E]) {
        p = u[E], w = a[E];
        break;
    } return p < w ? -1 : w < p ? 1 : 0; }, s.isEncoding = function (u) { switch (String(u).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le": return !0;
    default: return !1;
} }, s.concat = function (u, a) { if (!Array.isArray(u))
    throw new TypeError('"list" argument must be an Array of Buffers'); if (u.length === 0)
    return s.alloc(0); let p; if (a === void 0)
    for (a = 0, p = 0; p < u.length; ++p)
        a += u[p].length; const w = s.allocUnsafe(a); let E = 0; for (p = 0; p < u.length; ++p) {
    let T = u[p];
    if (tt(T, Uint8Array))
        E + T.length > w.length ? (s.isBuffer(T) || (T = s.from(T)), T.copy(w, E)) : Uint8Array.prototype.set.call(w, T, E);
    else if (s.isBuffer(T))
        T.copy(w, E);
    else
        throw new TypeError('"list" argument must be an Array of Buffers');
    E += T.length;
} return w; }; function v(f, u) { if (s.isBuffer(f))
    return f.length; if (ArrayBuffer.isView(f) || tt(f, ArrayBuffer))
    return f.byteLength; if (typeof f != "string")
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f); const a = f.length, p = arguments.length > 2 && arguments[2] === !0; if (!p && a === 0)
    return 0; let w = !1; for (;;)
    switch (u) {
        case "ascii":
        case "latin1":
        case "binary": return a;
        case "utf8":
        case "utf-8": return Io(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return a * 2;
        case "hex": return a >>> 1;
        case "base64": return vs(f).length;
        default:
            if (w)
                return p ? -1 : Io(f).length;
            u = ("" + u).toLowerCase(), w = !0;
    } } s.byteLength = v; function _(f, u, a) { let p = !1; if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, u >>>= 0, a <= u))
    return ""; for (f || (f = "utf8");;)
    switch (f) {
        case "hex": return z(this, u, a);
        case "utf8":
        case "utf-8": return qn(this, u, a);
        case "ascii": return er(this, u, a);
        case "latin1":
        case "binary": return O(this, u, a);
        case "base64": return Gt(this, u, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return A(this, u, a);
        default:
            if (p)
                throw new TypeError("Unknown encoding: " + f);
            f = (f + "").toLowerCase(), p = !0;
    } } s.prototype._isBuffer = !0; function I(f, u, a) { const p = f[u]; f[u] = f[a], f[a] = p; } s.prototype.swap16 = function () { const u = this.length; if (u % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits"); for (let a = 0; a < u; a += 2)
    I(this, a, a + 1); return this; }, s.prototype.swap32 = function () { const u = this.length; if (u % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits"); for (let a = 0; a < u; a += 4)
    I(this, a, a + 3), I(this, a + 1, a + 2); return this; }, s.prototype.swap64 = function () { const u = this.length; if (u % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits"); for (let a = 0; a < u; a += 8)
    I(this, a, a + 7), I(this, a + 1, a + 6), I(this, a + 2, a + 5), I(this, a + 3, a + 4); return this; }, s.prototype.toString = function () { const u = this.length; return u === 0 ? "" : arguments.length === 0 ? qn(this, 0, u) : _.apply(this, arguments); }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function (u) { if (!s.isBuffer(u))
    throw new TypeError("Argument must be a Buffer"); return this === u ? !0 : s.compare(this, u) === 0; }, s.prototype.inspect = function () { let u = ""; const a = e.INSPECT_MAX_BYTES; return u = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (u += " ... "), "<Buffer " + u + ">"; }, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function (u, a, p, w, E) { if (tt(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(u))
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u); if (a === void 0 && (a = 0), p === void 0 && (p = u ? u.length : 0), w === void 0 && (w = 0), E === void 0 && (E = this.length), a < 0 || p > u.length || w < 0 || E > this.length)
    throw new RangeError("out of range index"); if (w >= E && a >= p)
    return 0; if (w >= E)
    return -1; if (a >= p)
    return 1; if (a >>>= 0, p >>>= 0, w >>>= 0, E >>>= 0, this === u)
    return 0; let T = E - w, $ = p - a; const re = Math.min(T, $), q = this.slice(w, E), ie = u.slice(a, p); for (let K = 0; K < re; ++K)
    if (q[K] !== ie[K]) {
        T = q[K], $ = ie[K];
        break;
    } return T < $ ? -1 : $ < T ? 1 : 0; }; function R(f, u, a, p, w) { if (f.length === 0)
    return -1; if (typeof a == "string" ? (p = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Ro(a) && (a = w ? 0 : f.length - 1), a < 0 && (a = f.length + a), a >= f.length) {
    if (w)
        return -1;
    a = f.length - 1;
}
else if (a < 0)
    if (w)
        a = 0;
    else
        return -1; if (typeof u == "string" && (u = s.from(u, p)), s.isBuffer(u))
    return u.length === 0 ? -1 : L(f, u, a, p, w); if (typeof u == "number")
    return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? w ? Uint8Array.prototype.indexOf.call(f, u, a) : Uint8Array.prototype.lastIndexOf.call(f, u, a) : L(f, [u], a, p, w); throw new TypeError("val must be string, number or Buffer"); } function L(f, u, a, p, w) { let E = 1, T = f.length, $ = u.length; if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
    if (f.length < 2 || u.length < 2)
        return -1;
    E = 2, T /= 2, $ /= 2, a /= 2;
} function re(ie, K) { return E === 1 ? ie[K] : ie.readUInt16BE(K * E); } let q; if (w) {
    let ie = -1;
    for (q = a; q < T; q++)
        if (re(f, q) === re(u, ie === -1 ? 0 : q - ie)) {
            if (ie === -1 && (ie = q), q - ie + 1 === $)
                return ie * E;
        }
        else
            ie !== -1 && (q -= q - ie), ie = -1;
}
else
    for (a + $ > T && (a = T - $), q = a; q >= 0; q--) {
        let ie = !0;
        for (let K = 0; K < $; K++)
            if (re(f, q + K) !== re(u, K)) {
                ie = !1;
                break;
            }
        if (ie)
            return q;
    } return -1; } s.prototype.includes = function (u, a, p) { return this.indexOf(u, a, p) !== -1; }, s.prototype.indexOf = function (u, a, p) { return R(this, u, a, p, !0); }, s.prototype.lastIndexOf = function (u, a, p) { return R(this, u, a, p, !1); }; function F(f, u, a, p) { a = Number(a) || 0; const w = f.length - a; p ? (p = Number(p), p > w && (p = w)) : p = w; const E = u.length; p > E / 2 && (p = E / 2); let T; for (T = 0; T < p; ++T) {
    const $ = parseInt(u.substr(T * 2, 2), 16);
    if (Ro($))
        return T;
    f[a + T] = $;
} return T; } function Y(f, u, a, p) { return Zr(Io(u, f.length - a), f, a, p); } function M(f, u, a, p) { return Zr(Wd(u), f, a, p); } function pe(f, u, a, p) { return Zr(vs(u), f, a, p); } function qe(f, u, a, p) { return Zr(Vd(u, f.length - a), f, a, p); } s.prototype.write = function (u, a, p, w) { if (a === void 0)
    w = "utf8", p = this.length, a = 0;
else if (p === void 0 && typeof a == "string")
    w = a, p = this.length, a = 0;
else if (isFinite(a))
    a = a >>> 0, isFinite(p) ? (p = p >>> 0, w === void 0 && (w = "utf8")) : (w = p, p = void 0);
else
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); const E = this.length - a; if ((p === void 0 || p > E) && (p = E), u.length > 0 && (p < 0 || a < 0) || a > this.length)
    throw new RangeError("Attempt to write outside buffer bounds"); w || (w = "utf8"); let T = !1; for (;;)
    switch (w) {
        case "hex": return F(this, u, a, p);
        case "utf8":
        case "utf-8": return Y(this, u, a, p);
        case "ascii":
        case "latin1":
        case "binary": return M(this, u, a, p);
        case "base64": return pe(this, u, a, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return qe(this, u, a, p);
        default:
            if (T)
                throw new TypeError("Unknown encoding: " + w);
            w = ("" + w).toLowerCase(), T = !0;
    } }, s.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; }; function Gt(f, u, a) { return u === 0 && a === f.length ? t.fromByteArray(f) : t.fromByteArray(f.slice(u, a)); } function qn(f, u, a) { a = Math.min(f.length, a); const p = []; let w = u; for (; w < a;) {
    const E = f[w];
    let T = null, $ = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
    if (w + $ <= a) {
        let re, q, ie, K;
        switch ($) {
            case 1:
                E < 128 && (T = E);
                break;
            case 2:
                re = f[w + 1], (re & 192) === 128 && (K = (E & 31) << 6 | re & 63, K > 127 && (T = K));
                break;
            case 3:
                re = f[w + 1], q = f[w + 2], (re & 192) === 128 && (q & 192) === 128 && (K = (E & 15) << 12 | (re & 63) << 6 | q & 63, K > 2047 && (K < 55296 || K > 57343) && (T = K));
                break;
            case 4: re = f[w + 1], q = f[w + 2], ie = f[w + 3], (re & 192) === 128 && (q & 192) === 128 && (ie & 192) === 128 && (K = (E & 15) << 18 | (re & 63) << 12 | (q & 63) << 6 | ie & 63, K > 65535 && K < 1114112 && (T = K));
        }
    }
    T === null ? (T = 65533, $ = 1) : T > 65535 && (T -= 65536, p.push(T >>> 10 & 1023 | 55296), T = 56320 | T & 1023), p.push(T), w += $;
} return bn(p); } const Xr = 4096; function bn(f) { const u = f.length; if (u <= Xr)
    return String.fromCharCode.apply(String, f); let a = "", p = 0; for (; p < u;)
    a += String.fromCharCode.apply(String, f.slice(p, p += Xr)); return a; } function er(f, u, a) { let p = ""; a = Math.min(f.length, a); for (let w = u; w < a; ++w)
    p += String.fromCharCode(f[w] & 127); return p; } function O(f, u, a) { let p = ""; a = Math.min(f.length, a); for (let w = u; w < a; ++w)
    p += String.fromCharCode(f[w]); return p; } function z(f, u, a) { const p = f.length; (!u || u < 0) && (u = 0), (!a || a < 0 || a > p) && (a = p); let w = ""; for (let E = u; E < a; ++E)
    w += Hd[f[E]]; return w; } function A(f, u, a) { const p = f.slice(u, a); let w = ""; for (let E = 0; E < p.length - 1; E += 2)
    w += String.fromCharCode(p[E] + p[E + 1] * 256); return w; } s.prototype.slice = function (u, a) { const p = this.length; u = ~~u, a = a === void 0 ? p : ~~a, u < 0 ? (u += p, u < 0 && (u = 0)) : u > p && (u = p), a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), a < u && (a = u); const w = this.subarray(u, a); return Object.setPrototypeOf(w, s.prototype), w; }; function D(f, u, a) { if (f % 1 !== 0 || f < 0)
    throw new RangeError("offset is not uint"); if (f + u > a)
    throw new RangeError("Trying to access beyond buffer length"); } s.prototype.readUintLE = s.prototype.readUIntLE = function (u, a, p) { u = u >>> 0, a = a >>> 0, p || D(u, a, this.length); let w = this[u], E = 1, T = 0; for (; ++T < a && (E *= 256);)
    w += this[u + T] * E; return w; }, s.prototype.readUintBE = s.prototype.readUIntBE = function (u, a, p) { u = u >>> 0, a = a >>> 0, p || D(u, a, this.length); let w = this[u + --a], E = 1; for (; a > 0 && (E *= 256);)
    w += this[u + --a] * E; return w; }, s.prototype.readUint8 = s.prototype.readUInt8 = function (u, a) { return u = u >>> 0, a || D(u, 1, this.length), this[u]; }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function (u, a) { return u = u >>> 0, a || D(u, 2, this.length), this[u] | this[u + 1] << 8; }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function (u, a) { return u = u >>> 0, a || D(u, 2, this.length), this[u] << 8 | this[u + 1]; }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function (u, a) { return u = u >>> 0, a || D(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216; }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function (u, a) { return u = u >>> 0, a || D(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]); }, s.prototype.readBigUInt64LE = St(function (u) { u = u >>> 0, yn(u, "offset"); const a = this[u], p = this[u + 7]; (a === void 0 || p === void 0) && tr(u, this.length - 8); const w = a + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, E = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + p * 2 ** 24; return BigInt(w) + (BigInt(E) << BigInt(32)); }), s.prototype.readBigUInt64BE = St(function (u) { u = u >>> 0, yn(u, "offset"); const a = this[u], p = this[u + 7]; (a === void 0 || p === void 0) && tr(u, this.length - 8); const w = a * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], E = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + p; return (BigInt(w) << BigInt(32)) + BigInt(E); }), s.prototype.readIntLE = function (u, a, p) { u = u >>> 0, a = a >>> 0, p || D(u, a, this.length); let w = this[u], E = 1, T = 0; for (; ++T < a && (E *= 256);)
    w += this[u + T] * E; return E *= 128, w >= E && (w -= Math.pow(2, 8 * a)), w; }, s.prototype.readIntBE = function (u, a, p) { u = u >>> 0, a = a >>> 0, p || D(u, a, this.length); let w = a, E = 1, T = this[u + --w]; for (; w > 0 && (E *= 256);)
    T += this[u + --w] * E; return E *= 128, T >= E && (T -= Math.pow(2, 8 * a)), T; }, s.prototype.readInt8 = function (u, a) { return u = u >>> 0, a || D(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]; }, s.prototype.readInt16LE = function (u, a) { u = u >>> 0, a || D(u, 2, this.length); const p = this[u] | this[u + 1] << 8; return p & 32768 ? p | 4294901760 : p; }, s.prototype.readInt16BE = function (u, a) { u = u >>> 0, a || D(u, 2, this.length); const p = this[u + 1] | this[u] << 8; return p & 32768 ? p | 4294901760 : p; }, s.prototype.readInt32LE = function (u, a) { return u = u >>> 0, a || D(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24; }, s.prototype.readInt32BE = function (u, a) { return u = u >>> 0, a || D(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]; }, s.prototype.readBigInt64LE = St(function (u) { u = u >>> 0, yn(u, "offset"); const a = this[u], p = this[u + 7]; (a === void 0 || p === void 0) && tr(u, this.length - 8); const w = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (p << 24); return (BigInt(w) << BigInt(32)) + BigInt(a + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24); }), s.prototype.readBigInt64BE = St(function (u) { u = u >>> 0, yn(u, "offset"); const a = this[u], p = this[u + 7]; (a === void 0 || p === void 0) && tr(u, this.length - 8); const w = (a << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u]; return (BigInt(w) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + p); }), s.prototype.readFloatLE = function (u, a) { return u = u >>> 0, a || D(u, 4, this.length), n.read(this, u, !0, 23, 4); }, s.prototype.readFloatBE = function (u, a) { return u = u >>> 0, a || D(u, 4, this.length), n.read(this, u, !1, 23, 4); }, s.prototype.readDoubleLE = function (u, a) { return u = u >>> 0, a || D(u, 8, this.length), n.read(this, u, !0, 52, 8); }, s.prototype.readDoubleBE = function (u, a) { return u = u >>> 0, a || D(u, 8, this.length), n.read(this, u, !1, 52, 8); }; function V(f, u, a, p, w, E) { if (!s.isBuffer(f))
    throw new TypeError('"buffer" argument must be a Buffer instance'); if (u > w || u < E)
    throw new RangeError('"value" argument is out of bounds'); if (a + p > f.length)
    throw new RangeError("Index out of range"); } s.prototype.writeUintLE = s.prototype.writeUIntLE = function (u, a, p, w) { if (u = +u, a = a >>> 0, p = p >>> 0, !w) {
    const $ = Math.pow(2, 8 * p) - 1;
    V(this, u, a, p, $, 0);
} let E = 1, T = 0; for (this[a] = u & 255; ++T < p && (E *= 256);)
    this[a + T] = u / E & 255; return a + p; }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function (u, a, p, w) { if (u = +u, a = a >>> 0, p = p >>> 0, !w) {
    const $ = Math.pow(2, 8 * p) - 1;
    V(this, u, a, p, $, 0);
} let E = p - 1, T = 1; for (this[a + E] = u & 255; --E >= 0 && (T *= 256);)
    this[a + E] = u / T & 255; return a + p; }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 1, 255, 0), this[a] = u & 255, a + 1; }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 2, 65535, 0), this[a] = u & 255, this[a + 1] = u >>> 8, a + 2; }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 2, 65535, 0), this[a] = u >>> 8, this[a + 1] = u & 255, a + 2; }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 4, 4294967295, 0), this[a + 3] = u >>> 24, this[a + 2] = u >>> 16, this[a + 1] = u >>> 8, this[a] = u & 255, a + 4; }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 4, 4294967295, 0), this[a] = u >>> 24, this[a + 1] = u >>> 16, this[a + 2] = u >>> 8, this[a + 3] = u & 255, a + 4; }; function Yt(f, u, a, p, w) { gs(u, p, w, f, a, 7); let E = Number(u & BigInt(4294967295)); f[a++] = E, E = E >> 8, f[a++] = E, E = E >> 8, f[a++] = E, E = E >> 8, f[a++] = E; let T = Number(u >> BigInt(32) & BigInt(4294967295)); return f[a++] = T, T = T >> 8, f[a++] = T, T = T >> 8, f[a++] = T, T = T >> 8, f[a++] = T, a; } function be(f, u, a, p, w) { gs(u, p, w, f, a, 7); let E = Number(u & BigInt(4294967295)); f[a + 7] = E, E = E >> 8, f[a + 6] = E, E = E >> 8, f[a + 5] = E, E = E >> 8, f[a + 4] = E; let T = Number(u >> BigInt(32) & BigInt(4294967295)); return f[a + 3] = T, T = T >> 8, f[a + 2] = T, T = T >> 8, f[a + 1] = T, T = T >> 8, f[a] = T, a + 8; } s.prototype.writeBigUInt64LE = St(function (u, a = 0) { return Yt(this, u, a, BigInt(0), BigInt("0xffffffffffffffff")); }), s.prototype.writeBigUInt64BE = St(function (u, a = 0) { return be(this, u, a, BigInt(0), BigInt("0xffffffffffffffff")); }), s.prototype.writeIntLE = function (u, a, p, w) { if (u = +u, a = a >>> 0, !w) {
    const re = Math.pow(2, 8 * p - 1);
    V(this, u, a, p, re - 1, -re);
} let E = 0, T = 1, $ = 0; for (this[a] = u & 255; ++E < p && (T *= 256);)
    u < 0 && $ === 0 && this[a + E - 1] !== 0 && ($ = 1), this[a + E] = (u / T >> 0) - $ & 255; return a + p; }, s.prototype.writeIntBE = function (u, a, p, w) { if (u = +u, a = a >>> 0, !w) {
    const re = Math.pow(2, 8 * p - 1);
    V(this, u, a, p, re - 1, -re);
} let E = p - 1, T = 1, $ = 0; for (this[a + E] = u & 255; --E >= 0 && (T *= 256);)
    u < 0 && $ === 0 && this[a + E + 1] !== 0 && ($ = 1), this[a + E] = (u / T >> 0) - $ & 255; return a + p; }, s.prototype.writeInt8 = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[a] = u & 255, a + 1; }, s.prototype.writeInt16LE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 2, 32767, -32768), this[a] = u & 255, this[a + 1] = u >>> 8, a + 2; }, s.prototype.writeInt16BE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 2, 32767, -32768), this[a] = u >>> 8, this[a + 1] = u & 255, a + 2; }, s.prototype.writeInt32LE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 4, 2147483647, -2147483648), this[a] = u & 255, this[a + 1] = u >>> 8, this[a + 2] = u >>> 16, this[a + 3] = u >>> 24, a + 4; }, s.prototype.writeInt32BE = function (u, a, p) { return u = +u, a = a >>> 0, p || V(this, u, a, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[a] = u >>> 24, this[a + 1] = u >>> 16, this[a + 2] = u >>> 8, this[a + 3] = u & 255, a + 4; }, s.prototype.writeBigInt64LE = St(function (u, a = 0) { return Yt(this, u, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")); }), s.prototype.writeBigInt64BE = St(function (u, a = 0) { return be(this, u, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")); }); function hn(f, u, a, p, w, E) { if (a + p > f.length)
    throw new RangeError("Index out of range"); if (a < 0)
    throw new RangeError("Index out of range"); } function et(f, u, a, p, w) { return u = +u, a = a >>> 0, w || hn(f, u, a, 4), n.write(f, u, a, p, 23, 4), a + 4; } s.prototype.writeFloatLE = function (u, a, p) { return et(this, u, a, !0, p); }, s.prototype.writeFloatBE = function (u, a, p) { return et(this, u, a, !1, p); }; function Jt(f, u, a, p, w) { return u = +u, a = a >>> 0, w || hn(f, u, a, 8), n.write(f, u, a, p, 52, 8), a + 8; } s.prototype.writeDoubleLE = function (u, a, p) { return Jt(this, u, a, !0, p); }, s.prototype.writeDoubleBE = function (u, a, p) { return Jt(this, u, a, !1, p); }, s.prototype.copy = function (u, a, p, w) { if (!s.isBuffer(u))
    throw new TypeError("argument should be a Buffer"); if (p || (p = 0), !w && w !== 0 && (w = this.length), a >= u.length && (a = u.length), a || (a = 0), w > 0 && w < p && (w = p), w === p || u.length === 0 || this.length === 0)
    return 0; if (a < 0)
    throw new RangeError("targetStart out of bounds"); if (p < 0 || p >= this.length)
    throw new RangeError("Index out of range"); if (w < 0)
    throw new RangeError("sourceEnd out of bounds"); w > this.length && (w = this.length), u.length - a < w - p && (w = u.length - a + p); const E = w - p; return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, p, w) : Uint8Array.prototype.set.call(u, this.subarray(p, w), a), E; }, s.prototype.fill = function (u, a, p, w) { if (typeof u == "string") {
    if (typeof a == "string" ? (w = a, a = 0, p = this.length) : typeof p == "string" && (w = p, p = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
    if (typeof w == "string" && !s.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
    if (u.length === 1) {
        const T = u.charCodeAt(0);
        (w === "utf8" && T < 128 || w === "latin1") && (u = T);
    }
}
else
    typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u)); if (a < 0 || this.length < a || this.length < p)
    throw new RangeError("Out of range index"); if (p <= a)
    return this; a = a >>> 0, p = p === void 0 ? this.length : p >>> 0, u || (u = 0); let E; if (typeof u == "number")
    for (E = a; E < p; ++E)
        this[E] = u;
else {
    const T = s.isBuffer(u) ? u : s.from(u, w), $ = T.length;
    if ($ === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
    for (E = 0; E < p - a; ++E)
        this[E + a] = T[E % $];
} return this; }; const mn = {}; function No(f, u, a) { mn[f] = class extends a {
    constructor() { super(), Object.defineProperty(this, "message", { value: u.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${f}]`, this.stack, delete this.name; }
    get code() { return f; }
    set code(w) { Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: w, writable: !0 }); }
    toString() { return `${this.name} [${f}]: ${this.message}`; }
}; } No("ERR_BUFFER_OUT_OF_BOUNDS", function (f) { return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"; }, RangeError), No("ERR_INVALID_ARG_TYPE", function (f, u) { return `The "${f}" argument must be of type number. Received type ${typeof u}`; }, TypeError), No("ERR_OUT_OF_RANGE", function (f, u, a) { let p = `The value of "${f}" is out of range.`, w = a; return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? w = ys(String(a)) : typeof a == "bigint" && (w = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (w = ys(w)), w += "n"), p += ` It must be ${u}. Received ${w}`, p; }, RangeError); function ys(f) { let u = "", a = f.length; const p = f[0] === "-" ? 1 : 0; for (; a >= p + 4; a -= 3)
    u = `_${f.slice(a - 3, a)}${u}`; return `${f.slice(0, a)}${u}`; } function Ad(f, u, a) { yn(u, "offset"), (f[u] === void 0 || f[u + a] === void 0) && tr(u, f.length - (a + 1)); } function gs(f, u, a, p, w, E) { if (f > a || f < u) {
    const T = typeof u == "bigint" ? "n" : "";
    let $;
    throw E > 3 ? u === 0 || u === BigInt(0) ? $ = `>= 0${T} and < 2${T} ** ${(E + 1) * 8}${T}` : $ = `>= -(2${T} ** ${(E + 1) * 8 - 1}${T}) and < 2 ** ${(E + 1) * 8 - 1}${T}` : $ = `>= ${u}${T} and <= ${a}${T}`, new mn.ERR_OUT_OF_RANGE("value", $, f);
} Ad(p, w, E); } function yn(f, u) { if (typeof f != "number")
    throw new mn.ERR_INVALID_ARG_TYPE(u, "number", f); } function tr(f, u, a) { throw Math.floor(f) !== f ? (yn(f, a), new mn.ERR_OUT_OF_RANGE(a || "offset", "an integer", f)) : u < 0 ? new mn.ERR_BUFFER_OUT_OF_BOUNDS : new mn.ERR_OUT_OF_RANGE(a || "offset", `>= ${a ? 1 : 0} and <= ${u}`, f); } const Dd = /[^+/0-9A-Za-z-_]/g; function $d(f) { if (f = f.split("=")[0], f = f.trim().replace(Dd, ""), f.length < 2)
    return ""; for (; f.length % 4 !== 0;)
    f = f + "="; return f; } function Io(f, u) { u = u || 1 / 0; let a; const p = f.length; let w = null; const E = []; for (let T = 0; T < p; ++T) {
    if (a = f.charCodeAt(T), a > 55295 && a < 57344) {
        if (!w) {
            if (a > 56319) {
                (u -= 3) > -1 && E.push(239, 191, 189);
                continue;
            }
            else if (T + 1 === p) {
                (u -= 3) > -1 && E.push(239, 191, 189);
                continue;
            }
            w = a;
            continue;
        }
        if (a < 56320) {
            (u -= 3) > -1 && E.push(239, 191, 189), w = a;
            continue;
        }
        a = (w - 55296 << 10 | a - 56320) + 65536;
    }
    else
        w && (u -= 3) > -1 && E.push(239, 191, 189);
    if (w = null, a < 128) {
        if ((u -= 1) < 0)
            break;
        E.push(a);
    }
    else if (a < 2048) {
        if ((u -= 2) < 0)
            break;
        E.push(a >> 6 | 192, a & 63 | 128);
    }
    else if (a < 65536) {
        if ((u -= 3) < 0)
            break;
        E.push(a >> 12 | 224, a >> 6 & 63 | 128, a & 63 | 128);
    }
    else if (a < 1114112) {
        if ((u -= 4) < 0)
            break;
        E.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, a & 63 | 128);
    }
    else
        throw new Error("Invalid code point");
} return E; } function Wd(f) { const u = []; for (let a = 0; a < f.length; ++a)
    u.push(f.charCodeAt(a) & 255); return u; } function Vd(f, u) { let a, p, w; const E = []; for (let T = 0; T < f.length && !((u -= 2) < 0); ++T)
    a = f.charCodeAt(T), p = a >> 8, w = a % 256, E.push(w), E.push(p); return E; } function vs(f) { return t.toByteArray($d(f)); } function Zr(f, u, a, p) { let w; for (w = 0; w < p && !(w + a >= u.length || w >= f.length); ++w)
    u[w + a] = f[w]; return w; } function tt(f, u) { return f instanceof u || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === u.name; } function Ro(f) { return f !== f; } const Hd = function () { const f = "0123456789abcdef", u = new Array(256); for (let a = 0; a < 16; ++a) {
    const p = a * 16;
    for (let w = 0; w < 16; ++w)
        u[p + w] = f[a] + f[w];
} return u; }(); function St(f) { return typeof BigInt > "u" ? Qd : f; } function Qd() { throw new Error("BigInt not supported"); } })(fs);
class Om {
    constructor(t) { J(this, "SERVER_URL"); this.SERVER_URL = t; }
    doPost(t, n) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = this.SERVER_URL + n, i = { method: "post", headers: new Headers({ "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }), body: JSON.stringify(t) };
            try {
                const o = yield fetch(r, i);
                if (o.ok)
                    return yield o.json();
                {
                    const l = yield o.json();
                    throw new Error(l.errorMessage);
                }
            }
            catch (o) {
                throw new Error(`Client communicator doPost failed:
` + o.message);
            }
        });
    }
}
class jm {
    constructor() { J(this, "SERVER_URL", "http://localhost:"); J(this, "clientCommunicator", new Om(this.SERVER_URL)); }
    login(t) {
        return __awaiter(this, void 0, void 0, function* () { const r = yield this.clientCommunicator.doPost(t, "/service/login"); return no.fromJson(r); });
    }
    register(t) {
        return __awaiter(this, void 0, void 0, function* () { const r = yield this.clientCommunicator.doPost(t, "/service/register"); return no.fromJson(r); });
    }
    logout(t) {
        return __awaiter(this, void 0, void 0, function* () { yield this.clientCommunicator.doPost(t, "/service/logout"); });
    }
}
class Mm {
    constructor() { J(this, "serverFacade", new jm); }
    login(t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = yield this.serverFacade.login(new km(t, n)); return [r.user, r.token]; });
    }
    register(t, n, r, i, o) {
        return __awaiter(this, void 0, void 0, function* () { const l = fs.Buffer.from(o).toString("base64"), s = yield this.serverFacade.register(new Cm(t, n, r, i, l)); return [s.user, s.token]; });
    }
    logout(t) {
        return __awaiter(this, void 0, void 0, function* () { yield this.serverFacade.logout(new ss(t)); });
    }
}
class vd extends Tm {
    constructor(n) { super(n); J(this, "_service"); this._service = new Mm; }
    get service() { return this._service; }
    doAuthentication(n, r, i, o, l, s) {
        return __awaiter(this, void 0, void 0, function* () { this.doFailureReportingOperation(() => __awaiter(this, void 0, void 0, function* () { const [c, d] = yield this.authenticate(n, r, o, l, s); this.view.updateUserInfo(c, d), this.navigate(i); }), "log user in"); });
    }
}
class zm extends vd {
    authenticate(t, n, r, i, o) { return this.service.login(t, n); }
    navigate(t) { t ? this.view.navigate(t) : this.view.navigate("/"); }
    getAuthenticationDescription() { return "log user in"; }
}
let yi;
const Am = new Uint8Array(16);
function Dm() { if (!yi && (yi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !yi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return yi(Am); }
const me = [];
for (let e = 0; e < 256; ++e)
    me.push((e + 256).toString(16).slice(1));
function $m(e, t = 0) { return me[e[t + 0]] + me[e[t + 1]] + me[e[t + 2]] + me[e[t + 3]] + "-" + me[e[t + 4]] + me[e[t + 5]] + "-" + me[e[t + 6]] + me[e[t + 7]] + "-" + me[e[t + 8]] + me[e[t + 9]] + "-" + me[e[t + 10]] + me[e[t + 11]] + me[e[t + 12]] + me[e[t + 13]] + me[e[t + 14]] + me[e[t + 15]]; }
const Wm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), za = { randomUUID: Wm };
function Vm(e, t, n) { if (za.randomUUID && !t && !e)
    return za.randomUUID(); e = e || {}; const r = e.random || (e.rng || Dm)(); if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
        t[n + i] = r[i];
    return t;
} return $m(r); }
const Hm = "Success", Qm = "Error", Km = "Info", Gm = "Warning";
var st = (e => (e[e.Success = 0] = "Success", e[e.Error = 1] = "Error", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Other = 4] = "Other", e))(st || {});
const To = (e, t, n, r, i = "") => ({ id: Vm.toString(), title: e, text: t, type: n, expirationMillisecond: r > 0 ? Date.now() + r : 0, bootstrapClasses: i }), Ym = (e, t, n = "") => To(Hm, e, 0, t, n), Jm = (e, t, n = "") => To(Qm, e, 1, t, n), Xm = (e, t, n = "") => To(Km, e, 2, t, n), Zm = (e, t, n = "") => To(Gm, e, 3, t, n), wd = { toastList: [], displaySuccessToast: () => null, displayErrorToast: () => null, displayInfoToast: () => null, displayWarningToast: () => null, deleteToast: () => null, deleteAllToasts: () => null, deleteAllSuccessToasts: () => null, deleteAllErrorToasts: () => null, deleteAllInfoToasts: () => null, deleteAllWarningToasts: () => null, deleteLastToast: () => null, deleteLastSuccessToast: () => null, deleteLastErrorToast: () => null, deleteLastInfoToast: () => null, deleteLastWarningToast: () => null }, xd = S.createContext(wd), qm = ({ children: e }) => { const [t, n] = S.useState(wd), r = I => { const { toastList: R } = t; R.push(I), n(Object.assign(Object.assign({}, t), R)); }, i = (I, R, L = "") => { const F = Ym(I, R, L); return r(F), F.id; }, o = (I, R, L = "") => { const F = Jm(I, R, L); return r(F), F.id; }, l = (I, R, L = "") => { const F = Xm(I, R, L); return r(F), F.id; }, s = (I, R, L = "") => { const F = Zm(I, R, L); return r(F), F.id; }, c = I => { const { toastList: R } = t, L = R.findIndex(F => F.id === I); R.splice(L, 1), n(Object.assign(Object.assign({}, t), R)); }, d = () => { n(Object.assign(Object.assign({}, t), { toastList: [] })); }, g = () => { C(st.Success); }, y = () => { C(st.Error); }, x = () => { C(st.Info); }, k = () => { C(st.Warning); }, C = I => { for (const R of t.toastList)
    R.type === I && c(R.id); }, N = () => { const { toastList: I } = t; I && I.length > 0 && c(I[I.length - 1].id); }, U = () => { _(st.Success); }, m = () => { _(st.Error); }, h = () => { _(st.Info); }, v = () => { _(st.Warning); }, _ = I => { const { toastList: R } = t; if (R && R.length > 0) {
    let L = R.length - 1;
    do {
        if (R[L].type === I) {
            c(R[L].id);
            break;
        }
        L--;
    } while (L >= 0);
} }; return B.jsx(xd.Provider, { value: Object.assign(Object.assign({}, t), { displaySuccessToast: i, displayErrorToast: o, displayInfoToast: l, displayWarningToast: s, deleteToast: c, deleteAllToasts: d, deleteAllSuccessToasts: g, deleteAllErrorToasts: y, deleteAllInfoToasts: x, deleteAllWarningToasts: k, deleteLastToast: N, deleteLastSuccessToast: U, deleteLastErrorToast: m, deleteLastInfoToast: h, deleteLastWarningToast: v }), children: e }); }, Ed = () => S.useContext(xd), Sd = () => { const { displayInfoToast: e, displayErrorToast: t, deleteLastInfoToast: n } = Ed(); return { displayInfoMessage: e, displayErrorMessage: (r, i) => t(r, 0, i), clearLastInfoMessage: n }; };
var ps = (e => (e.Login = "login", e.Register = "register", e))(ps || {});
const kd = e => B.jsxs(B.Fragment, { children: [B.jsxs("div", { className: "form-floating", children: [B.jsx("input", { type: "text", className: "form-control", size: 50, id: "aliasInput", "aria-label": "alias", placeholder: "name@example.com", onChange: t => e.setAlias(t.target.value) }), B.jsx("label", { htmlFor: "aliasInput", children: "Alias" })] }), B.jsxs("div", { className: e.pageType === "register" ? "form-floating" : "form-floating mb-3", children: [B.jsx("input", { type: "password", className: "form-control bottom", id: "passwordInput", "aria-label": "password", placeholder: "Password", onChange: t => e.setPassword(t.target.value) }), B.jsx("label", { htmlFor: "passwordInput", children: "Password" })] })] }), Cd = e => B.jsx("div", { children: B.jsx("div", { className: "center", children: B.jsx("div", { className: "form-main w-100 m-auto rounded", children: B.jsxs("form", { children: [B.jsx("img", { className: "mb-4", src: "/src/assets/react.svg", alt: "", width: "72", height: "72" }), B.jsx("h1", { className: "h3 mb-3 fw-normal", children: e.headingText }), e.inputFieldGenerator(), B.jsx("div", { className: "checkbox mb-3", children: B.jsxs("label", { children: [B.jsx("input", { type: "checkbox", value: "remember-me", onChange: t => e.setRememberMe(t.target.checked) }), " ", "Remember me"] }) }), e.switchAuthenticationMethodGenerator(), B.jsx("button", { id: "submitButton", className: "w-100 btn btn-lg btn-primary", type: "button", disabled: e.submitButtonDisabled(), onClick: () => e.submit(), children: e.submitButtonLabel })] }) }) }) }), Aa = e => { var _b; const [t, n] = S.useState(""), [r, i] = S.useState(""), [o, l] = S.useState(!1), s = ko(), { updateUserInfo: c } = cs(), { displayErrorMessage: d } = Sd(), g = S.useRef(o); g.current = o; const y = () => !t || !r, x = (h, v) => { c(h, v, g.current); }, k = () => __awaiter(void 0, void 0, void 0, function* () { N.doAuthentication(t, r, e.originalUrl); }), C = { updateUserInfo: x, navigate: s, displayErrorMessage: d }, [N] = S.useState((_b = e.presenter) !== null && _b !== void 0 ? _b : new zm(C)), U = () => B.jsx(kd, { setAlias: n, setPassword: i, pageType: ps.Login }), m = () => B.jsxs("div", { className: "mb-3", children: ["Not registered? ", B.jsx(hd, { to: "/register", children: "Register" })] }); return B.jsx(Cd, { headingText: "Please Sign In", submitButtonLabel: "Sign in", inputFieldGenerator: U, switchAuthenticationMethodGenerator: m, setRememberMe: l, submitButtonDisabled: y, submit: k }); };
class bm extends vd {
    authenticate(t, n, r, i, o) { return this.service.register(r, i, t, n, o); }
    navigate() { this.view.navigate("/"); }
    getAuthenticationDescription() { return "register user"; }
    handleImageFile(t) { if (t) {
        this.view.setImageUrl(URL.createObjectURL(t));
        const n = new FileReader;
        n.onload = r => { var s; const o = ((s = r.target) == null ? void 0 : s.result).split("base64,")[1], l = fs.Buffer.from(o, "base64"); this.view.setImageBytes(l); }, n.readAsDataURL(t);
    }
    else
        this.view.setImageUrl(""), this.view.setImageBytes(new Uint8Array); }
}
const ey = () => { const [e, t] = S.useState(""), [n, r] = S.useState(""), [i, o] = S.useState(""), [l, s] = S.useState(""), [c, d] = S.useState(new Uint8Array), [g, y] = S.useState(""), [x, k] = S.useState(!1), C = S.useRef(x); C.current = x; const N = ko(), { updateUserInfo: U } = cs(), { displayErrorMessage: m } = Sd(), h = () => !e || !n || !i || !l || !g, v = (M, pe) => { U(M, pe, C.current); }, _ = M => { var qe; const pe = (qe = M.target.files) == null ? void 0 : qe[0]; L.handleImageFile(pe); }, I = () => __awaiter(void 0, void 0, void 0, function* () { L.doAuthentication(i, l, void 0, e, n, c); }), R = { updateUserInfo: v, navigate: N, setImageUrl: y, setImageBytes: d, displayErrorMessage: m }, L = new bm(R), F = () => B.jsxs(B.Fragment, { children: [B.jsxs("div", { className: "form-floating", children: [B.jsx("input", { type: "text", className: "form-control", size: 50, id: "firstNameInput", placeholder: "First Name", onChange: M => t(M.target.value) }), B.jsx("label", { htmlFor: "firstNameInput", children: "First Name" })] }), B.jsxs("div", { className: "form-floating", children: [B.jsx("input", { type: "text", className: "form-control", size: 50, id: "lastNameInput", placeholder: "Last Name", onChange: M => r(M.target.value) }), B.jsx("label", { htmlFor: "lastNameInput", children: "Last Name" })] }), B.jsx(kd, { setAlias: o, setPassword: s, pageType: ps.Register }), B.jsxs("div", { className: "form-floating mb-3", children: [B.jsx("input", { type: "file", className: "d-inline-block py-5 px-4 form-control bottom", id: "imageFileInput", onChange: _ }), B.jsx("label", { htmlFor: "imageFileInput", children: "User Image" }), B.jsx("img", { src: g, className: "img-thumbnail", alt: "" })] })] }), Y = () => B.jsxs("div", { className: "mb-3", children: ["Algready registered? ", B.jsx(hd, { to: "/login", children: "Sign in" })] }); return B.jsx(Cd, { headingText: "Please Register", submitButtonLabel: "Register", inputFieldGenerator: F, switchAuthenticationMethodGenerator: Y, setRememberMe: k, submitButtonDisabled: h, submit: I }); };
var _d = { exports: {} }; /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
*/
(function (e) { (function () { var t = {}.hasOwnProperty; function n() { for (var o = "", l = 0; l < arguments.length; l++) {
    var s = arguments[l];
    s && (o = i(o, r(s)));
} return o; } function r(o) { if (typeof o == "string" || typeof o == "number")
    return o; if (typeof o != "object")
    return ""; if (Array.isArray(o))
    return n.apply(null, o); if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
    return o.toString(); var l = ""; for (var s in o)
    t.call(o, s) && o[s] && (l = i(l, s)); return l; } function i(o, l) { return l ? o ? o + " " + l : o + l : o; } e.exports ? (n.default = n, e.exports = n) : window.classNames = n; })(); })(_d);
var ty = _d.exports;
const Jr = io(ty);
function ny(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, o; for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function ou(e, t) { return ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, ou(e, t); }
function ry(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ou(e, t); }
const iy = ["xxl", "xl", "lg", "md", "sm", "xs"], oy = "xs", ly = S.createContext({ prefixes: {}, breakpoints: iy, minBreakpoint: oy });
function hs(e, t) { const { prefixes: n } = S.useContext(ly); return e || n[t] || t; }
function uy(e) { return e && e.ownerDocument || document; }
function sy(e) { var t = uy(e); return t && t.defaultView || window; }
function ay(e, t) { return sy(e).getComputedStyle(e, t); }
var cy = /([A-Z])/g;
function fy(e) { return e.replace(cy, "-$1").toLowerCase(); }
var dy = /^ms-/;
function gi(e) { return fy(e).replace(dy, "-ms-"); }
var py = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function hy(e) { return !!(e && py.test(e)); }
function Td(e, t) { var n = "", r = ""; if (typeof t == "string")
    return e.style.getPropertyValue(gi(t)) || ay(e).getPropertyValue(gi(t)); Object.keys(t).forEach(function (i) { var o = t[i]; !o && o !== 0 ? e.style.removeProperty(gi(i)) : hy(i) ? r += i + "(" + o + ") " : n += gi(i) + ": " + o + ";"; }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n; }
var Nd = { exports: {} }, my = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", yy = my, gy = yy;
function Id() { }
function Rd() { }
Rd.resetWarningCache = Id;
var vy = function () { function e(r, i, o, l, s, c) { if (c !== gy) {
    var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    throw d.name = "Invariant Violation", d;
} } e.isRequired = e; function t() { return e; } var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Rd, resetWarningCache: Id }; return n.PropTypes = n, n; };
Nd.exports = vy();
var wy = Nd.exports;
const ll = io(wy), Da = { disabled: !1 }, Pd = dt.createContext(null);
var xy = function (t) { return t.scrollTop; }, mr = "unmounted", qt = "exited", ft = "entering", bt = "entered", ro = "exiting", Et = function (e) { ry(t, e); function t(r, i) { var o; o = e.call(this, r, i) || this; var l = i, s = l && !l.isMounting ? r.enter : r.appear, c; return o.appearStatus = null, r.in ? s ? (c = qt, o.appearStatus = ft) : c = bt : r.unmountOnExit || r.mountOnEnter ? c = mr : c = qt, o.state = { status: c }, o.nextCallback = null, o; } t.getDerivedStateFromProps = function (i, o) { var l = i.in; return l && o.status === mr ? { status: qt } : null; }; var n = t.prototype; return n.componentDidMount = function () { this.updateStatus(!0, this.appearStatus); }, n.componentDidUpdate = function (i) { var o = null; if (i !== this.props) {
    var l = this.state.status;
    this.props.in ? l !== ft && l !== bt && (o = ft) : (l === ft || l === bt) && (o = ro);
} this.updateStatus(!1, o); }, n.componentWillUnmount = function () { this.cancelNextCallback(); }, n.getTimeouts = function () { var i = this.props.timeout, o, l, s; return o = l = s = i, i != null && typeof i != "number" && (o = i.exit, l = i.enter, s = i.appear !== void 0 ? i.appear : l), { exit: o, enter: l, appear: s }; }, n.updateStatus = function (i, o) { if (i === void 0 && (i = !1), o !== null)
    if (this.cancelNextCallback(), o === ft) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var l = this.props.nodeRef ? this.props.nodeRef.current : hr.findDOMNode(this);
            l && xy(l);
        }
        this.performEnter(i);
    }
    else
        this.performExit();
else
    this.props.unmountOnExit && this.state.status === qt && this.setState({ status: mr }); }, n.performEnter = function (i) { var o = this, l = this.props.enter, s = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [s] : [hr.findDOMNode(this), s], d = c[0], g = c[1], y = this.getTimeouts(), x = s ? y.appear : y.enter; if (!i && !l || Da.disabled) {
    this.safeSetState({ status: bt }, function () { o.props.onEntered(d); });
    return;
} this.props.onEnter(d, g), this.safeSetState({ status: ft }, function () { o.props.onEntering(d, g), o.onTransitionEnd(x, function () { o.safeSetState({ status: bt }, function () { o.props.onEntered(d, g); }); }); }); }, n.performExit = function () { var i = this, o = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : hr.findDOMNode(this); if (!o || Da.disabled) {
    this.safeSetState({ status: qt }, function () { i.props.onExited(s); });
    return;
} this.props.onExit(s), this.safeSetState({ status: ro }, function () { i.props.onExiting(s), i.onTransitionEnd(l.exit, function () { i.safeSetState({ status: qt }, function () { i.props.onExited(s); }); }); }); }, n.cancelNextCallback = function () { this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null); }, n.safeSetState = function (i, o) { o = this.setNextCallback(o), this.setState(i, o); }, n.setNextCallback = function (i) { var o = this, l = !0; return this.nextCallback = function (s) { l && (l = !1, o.nextCallback = null, i(s)); }, this.nextCallback.cancel = function () { l = !1; }, this.nextCallback; }, n.onTransitionEnd = function (i, o) { this.setNextCallback(o); var l = this.props.nodeRef ? this.props.nodeRef.current : hr.findDOMNode(this), s = i == null && !this.props.addEndListener; if (!l || s) {
    setTimeout(this.nextCallback, 0);
    return;
} if (this.props.addEndListener) {
    var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], d = c[0], g = c[1];
    this.props.addEndListener(d, g);
} i != null && setTimeout(this.nextCallback, i); }, n.render = function () { var i = this.state.status; if (i === mr)
    return null; var o = this.props, l = o.children; o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef; var s = ny(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]); return dt.createElement(Pd.Provider, { value: null }, typeof l == "function" ? l(i, s) : dt.cloneElement(dt.Children.only(l), s)); }, t; }(dt.Component);
Et.contextType = Pd;
Et.propTypes = {};
function wn() { }
Et.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: wn, onEntering: wn, onEntered: wn, onExit: wn, onExiting: wn, onExited: wn };
Et.UNMOUNTED = mr;
Et.EXITED = qt;
Et.ENTERING = ft;
Et.ENTERED = bt;
Et.EXITING = ro;
const Ey = !!(typeof window < "u" && window.document && window.document.createElement);
var lu = !1, uu = !1;
try {
    var ul = { get passive() { return lu = !0; }, get once() { return uu = lu = !0; } };
    Ey && (window.addEventListener("test", ul, ul), window.removeEventListener("test", ul, !0));
}
catch (_k) { }
function Sy(e, t, n, r) { if (r && typeof r != "boolean" && !uu) {
    var i = r.once, o = r.capture, l = n;
    !uu && i && (l = n.__once || function s(c) { this.removeEventListener(t, s, o), n.call(this, c); }, n.__once = l), e.addEventListener(t, l, lu ? r : o);
} e.addEventListener(t, n, r); }
function ky(e, t, n, r) { var i = r && typeof r != "boolean" ? r.capture : r; e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i); }
function Ld(e, t, n, r) { return Sy(e, t, n, r), function () { ky(e, t, n, r); }; }
function Cy(e, t, n, r) { if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
} }
function _y(e) { var t = Td(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1; return parseFloat(t) * n; }
function Ty(e, t, n) { n === void 0 && (n = 5); var r = !1, i = setTimeout(function () { r || Cy(e, "transitionend", !0); }, t + n), o = Ld(e, "transitionend", function () { r = !0; }, { once: !0 }); return function () { clearTimeout(i), o(); }; }
function Ny(e, t, n, r) { n == null && (n = _y(e) || 0); var i = Ty(e, n, r), o = Ld(e, "transitionend", t); return function () { i(), o(); }; }
function $a(e, t) { const n = Td(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1; return parseFloat(n) * r; }
function Iy(e, t) { const n = $a(e, "transitionDuration"), r = $a(e, "transitionDelay"), i = Ny(e, o => { o.target === e && (i(), t(o)); }, n + r); }
function Ry(e) { e.offsetHeight; }
const Wa = e => !e || typeof e == "function" ? e : t => { e.current = t; };
function Py(e, t) { const n = Wa(e), r = Wa(t); return i => { n && n(i), r && r(i); }; }
function Ly(e, t) { return S.useMemo(() => Py(e, t), [e, t]); }
function Uy(e) { return e && "setState" in e ? hr.findDOMNode(e) : e !== null && e !== void 0 ? e : null; }
const By = dt.forwardRef((_b, g) => { var { onEnter: e, onEntering: t, onEntered: n, onExit: r, onExiting: i, onExited: o, addEndListener: l, children: s, childRef: c } = _b, d = __rest(_b, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children", "childRef"]); const y = S.useRef(null), x = Ly(y, c), k = R => { x(Uy(R)); }, C = R => L => { R && y.current && R(y.current, L); }, N = S.useCallback(C(e), [e]), U = S.useCallback(C(t), [t]), m = S.useCallback(C(n), [n]), h = S.useCallback(C(r), [r]), v = S.useCallback(C(i), [i]), _ = S.useCallback(C(o), [o]), I = S.useCallback(C(l), [l]); return B.jsx(Et, Object.assign(Object.assign({ ref: g }, d), { onEnter: N, onEntered: m, onEntering: U, onExit: h, onExited: _, onExiting: v, addEndListener: I, nodeRef: y, children: typeof s == "function" ? (R, L) => s(R, Object.assign(Object.assign({}, L), { ref: k })) : dt.cloneElement(s, { ref: k }) })); }), Fy = By;
function Oy(e) { const t = S.useRef(e); return S.useEffect(() => { t.current = e; }, [e]), t; }
function jy(e) { const t = Oy(e); return S.useCallback(function (...n) { return t.current && t.current(...n); }, [t]); }
function My() { const e = S.useRef(!0), t = S.useRef(() => e.current); return S.useEffect(() => (e.current = !0, () => { e.current = !1; }), []), t.current; }
const zy = { [ft]: "show", [bt]: "show" }, Ud = S.forwardRef((_b, o) => { var { className: e, children: t, transitionClasses: n = {}, onEnter: r } = _b, i = __rest(_b, ["className", "children", "transitionClasses", "onEnter"]); const l = Object.assign({ in: !1, timeout: 300, mountOnEnter: !1, unmountOnExit: !1, appear: !1 }, i), s = S.useCallback((c, d) => { Ry(c), r == null || r(c, d); }, [r]); return B.jsx(Fy, Object.assign(Object.assign({ ref: o, addEndListener: Iy }, l), { onEnter: s, childRef: t.ref, children: (c, d) => S.cloneElement(t, Object.assign(Object.assign({}, d), { className: Jr("fade", e, t.props.className, zy[c], n[c]) })) })); });
Ud.displayName = "Fade";
const Ay = Ud, Dy = { "aria-label": ll.string, onClick: ll.func, variant: ll.oneOf(["white"]) }, ms = S.forwardRef((_b, i) => {
    var { className: e, variant: t, "aria-label": n = "Close" } = _b, r = __rest(_b, ["className", "variant", "aria-label"]);
    return B.jsx("button", Object.assign({ ref: i, type: "button", className: Jr("btn-close", t && `btn-close-${t}`, e), "aria-label": n }, r));
});
ms.displayName = "CloseButton";
ms.propTypes = Dy;
const $y = ms;
function Wy(e) { const t = S.useRef(e); return t.current = e, t; }
function Vy(e) { const t = Wy(e); S.useEffect(() => () => t.current(), []); }
const su = 2 ** 31 - 1;
function Bd(e, t, n) { const r = n - Date.now(); e.current = r <= su ? setTimeout(t, r) : setTimeout(() => Bd(e, t, n), su); }
function Hy() { const e = My(), t = S.useRef(); return Vy(() => clearTimeout(t.current)), S.useMemo(() => { const n = () => clearTimeout(t.current); function r(i, o = 0) { e() && (n(), o <= su ? t.current = setTimeout(i, o) : Bd(t, i, Date.now() + o)); } return { set: r, clear: n, handleRef: t }; }, []); }
const Qy = { [ft]: "showing", [ro]: "showing show" }, Fd = S.forwardRef((e, t) => B.jsx(Ay, Object.assign(Object.assign({}, e), { ref: t, transitionClasses: Qy })));
Fd.displayName = "ToastFade";
const Ky = Fd, Gy = S.createContext({ onClose() { } }), Od = Gy, jd = S.forwardRef((_b, s) => { var { bsPrefix: e, closeLabel: t = "Close", closeVariant: n, closeButton: r = !0, className: i, children: o } = _b, l = __rest(_b, ["bsPrefix", "closeLabel", "closeVariant", "closeButton", "className", "children"]); e = hs(e, "toast-header"); const c = S.useContext(Od), d = jy(g => { c == null || c.onClose == null || c.onClose(g); }); return B.jsxs("div", Object.assign(Object.assign({ ref: s }, l), { className: Jr(e, i), children: [o, r && B.jsx($y, { "aria-label": t, variant: n, onClick: d, "data-dismiss": "toast" })] })); });
jd.displayName = "ToastHeader";
const Yy = jd, Md = S.forwardRef((_b, i) => {
    var { className: e, bsPrefix: t, as: n = "div" } = _b, r = __rest(_b, ["className", "bsPrefix", "as"]);
    return (t = hs(t, "toast-body"), B.jsx(n, Object.assign({ ref: i, className: Jr(e, t) }, r)));
});
Md.displayName = "ToastBody";
const Jy = Md, zd = S.forwardRef((_b, U) => { var { bsPrefix: e, className: t, transition: n = Ky, show: r = !0, animation: i = !0, delay: o = 5e3, autohide: l = !1, onClose: s, onEntered: c, onExit: d, onExiting: g, onEnter: y, onEntering: x, onExited: k, bg: C } = _b, N = __rest(_b, ["bsPrefix", "className", "transition", "show", "animation", "delay", "autohide", "onClose", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "bg"]); e = hs(e, "toast"); const m = S.useRef(o), h = S.useRef(s); S.useEffect(() => { m.current = o, h.current = s; }, [o, s]); const v = Hy(), _ = !!(l && r), I = S.useCallback(() => { _ && (h.current == null || h.current()); }, [_]); S.useEffect(() => { v.set(I, m.current); }, [v, I]); const R = S.useMemo(() => ({ onClose: s }), [s]), L = !!(n && i), F = B.jsx("div", Object.assign(Object.assign({}, N), { ref: U, className: Jr(e, t, C && `bg-${C}`, !L && (r ? "show" : "hide")), role: "alert", "aria-live": "assertive", "aria-atomic": "true" })); return B.jsx(Od.Provider, { value: R, children: L && n ? B.jsx(n, { in: r, onEnter: y, onEntering: x, onEntered: c, onExit: d, onExiting: g, onExited: k, unmountOnExit: !0, children: F }) : F }); });
zd.displayName = "Toast";
const sl = Object.assign(zd, { Body: Jy, Header: Yy }), Xy = ({ position: e }) => { const { toastList: t, deleteToast: n } = Ed(); S.useEffect(() => { const i = setInterval(() => { t.length && r(); }, 1e3); return () => { clearInterval(i); }; }, [t]); const r = () => { const i = Date.now(); for (const o of t)
    o.expirationMillisecond > 0 && o.expirationMillisecond < i && n(o.id); }; return B.jsx(B.Fragment, { children: B.jsx("div", { className: `toaster-container ${e}`, children: t.map((i, o) => B.jsxs(sl, { id: i.id, className: i.bootstrapClasses, autohide: !1, show: !0, onClose: () => n(i.id), children: [B.jsxs(sl.Header, { children: [B.jsx("img", { src: "holder.js/20x20?text=%20", className: "rounded me-2", alt: "" }), B.jsx("strong", { className: "me-auto", children: i.title })] }), B.jsx(sl.Body, { children: i.text })] }, o)) }) }); }, Zy = () => { const { currentUser: e, authToken: t } = cs(), n = () => !!e && !!t; return B.jsxs("div", { children: [B.jsx(Xy, { position: "top-right" }), B.jsx(hm, { children: n() ? B.jsx(qy, {}) : B.jsx(by, {}) })] }); }, qy = () => B.jsxs(pd, { children: [B.jsx(zn, { path: "logout", element: B.jsx(Ba, { to: "/login" }) }), B.jsx(zn, { path: "*", element: B.jsx(Ba, { to: "/feed" }) })] }), by = () => { const e = Zn(); return B.jsxs(pd, { children: [B.jsx(zn, { path: "/login", element: B.jsx(Aa, {}) }), B.jsx(zn, { path: "/register", element: B.jsx(ey, {}) }), B.jsx(zn, { path: "*", element: B.jsx(Aa, { originalUrl: e.pathname }) })] }); };
al.createRoot(document.getElementById("root")).render(B.jsx(dt.StrictMode, { children: B.jsx(_m, { children: B.jsx(qm, { children: B.jsx(Zy, {}) }) }) }));
