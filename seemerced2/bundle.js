var Fy = Object.defineProperty;
var Wy = (a, i, l) =>
  i in a
    ? Fy(a, i, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (a[i] = l);
var ht = (a, i, l) => Wy(a, typeof i != "symbol" ? i + "" : i, l);
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const c of u)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const c = {};
    return (
      u.integrity && (c.integrity = u.integrity),
      u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const c = l(u);
    fetch(u.href, c);
  }
})();
function Jy(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Gc = { exports: {} },
  Ta = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pg;
function $y() {
  if (pg) return Ta;
  pg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function l(s, u, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      u.key !== void 0 && (f = "" + u.key),
      "key" in u)
    ) {
      c = {};
      for (var d in u) d !== "key" && (c[d] = u[d]);
    } else c = u;
    return (
      (u = c.ref),
      { $$typeof: a, type: s, key: f, ref: u !== void 0 ? u : null, props: c }
    );
  }
  return (Ta.Fragment = i), (Ta.jsx = l), (Ta.jsxs = l), Ta;
}
var yg;
function Py() {
  return yg || ((yg = 1), (Gc.exports = $y())), Gc.exports;
}
var yt = Py(),
  Qc = { exports: {} },
  ft = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bg;
function Iy() {
  if (bg) return ft;
  bg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function _(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (v && M[v]) || M["@@iterator"]),
        typeof M == "function" ? M : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    A = {};
  function E(M, U, I) {
    (this.props = M),
      (this.context = U),
      (this.refs = A),
      (this.updater = I || S);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (M, U) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, M, U, "setState");
    }),
    (E.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    });
  function B() {}
  B.prototype = E.prototype;
  function V(M, U, I) {
    (this.props = M),
      (this.context = U),
      (this.refs = A),
      (this.updater = I || S);
  }
  var Q = (V.prototype = new B());
  (Q.constructor = V), D(Q, E.prototype), (Q.isPureReactComponent = !0);
  var K = Array.isArray,
    L = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function F(M, U, I, $, G, ct) {
    return (
      (I = ct.ref),
      { $$typeof: a, type: M, key: U, ref: I !== void 0 ? I : null, props: ct }
    );
  }
  function X(M, U) {
    return F(M.type, U, void 0, void 0, void 0, M.props);
  }
  function Y(M) {
    return typeof M == "object" && M !== null && M.$$typeof === a;
  }
  function W(M) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (I) {
        return U[I];
      })
    );
  }
  var nt = /\/+/g;
  function ot(M, U) {
    return typeof M == "object" && M !== null && M.key != null
      ? W("" + M.key)
      : U.toString(36);
  }
  function Et() {}
  function Ht(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (
          (typeof M.status == "string"
            ? M.then(Et, Et)
            : ((M.status = "pending"),
              M.then(
                function (U) {
                  M.status === "pending" &&
                    ((M.status = "fulfilled"), (M.value = U));
                },
                function (U) {
                  M.status === "pending" &&
                    ((M.status = "rejected"), (M.reason = U));
                }
              )),
          M.status)
        ) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function rt(M, U, I, $, G) {
    var ct = typeof M;
    (ct === "undefined" || ct === "boolean") && (M = null);
    var st = !1;
    if (M === null) st = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case a:
            case i:
              st = !0;
              break;
            case y:
              return (st = M._init), rt(st(M._payload), U, I, $, G);
          }
      }
    if (st)
      return (
        (G = G(M)),
        (st = $ === "" ? "." + ot(M, 0) : $),
        K(G)
          ? ((I = ""),
            st != null && (I = st.replace(nt, "$&/") + "/"),
            rt(G, U, I, "", function (Ut) {
              return Ut;
            }))
          : G != null &&
            (Y(G) &&
              (G = X(
                G,
                I +
                  (G.key == null || (M && M.key === G.key)
                    ? ""
                    : ("" + G.key).replace(nt, "$&/") + "/") +
                  st
              )),
            U.push(G)),
        1
      );
    st = 0;
    var se = $ === "" ? "." : $ + ":";
    if (K(M))
      for (var St = 0; St < M.length; St++)
        ($ = M[St]), (ct = se + ot($, St)), (st += rt($, U, I, ct, G));
    else if (((St = _(M)), typeof St == "function"))
      for (M = St.call(M), St = 0; !($ = M.next()).done; )
        ($ = $.value), (ct = se + ot($, St++)), (st += rt($, U, I, ct, G));
    else if (ct === "object") {
      if (typeof M.then == "function") return rt(Ht(M), U, I, $, G);
      throw (
        ((U = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(M).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return st;
  }
  function j(M, U, I) {
    if (M == null) return M;
    var $ = [],
      G = 0;
    return (
      rt(M, $, "", "", function (ct) {
        return U.call(I, ct, G++);
      }),
      $
    );
  }
  function tt(M) {
    if (M._status === -1) {
      var U = M._result;
      (U = U()),
        U.then(
          function (I) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = I));
          },
          function (I) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = I));
          }
        ),
        M._status === -1 && ((M._status = 0), (M._result = U));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var et =
    typeof reportError == "function"
      ? reportError
      : function (M) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof M == "object" &&
                M !== null &&
                typeof M.message == "string"
                  ? String(M.message)
                  : String(M),
              error: M,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", M);
            return;
          }
          console.error(M);
        };
  function xt() {}
  return (
    (ft.Children = {
      map: j,
      forEach: function (M, U, I) {
        j(
          M,
          function () {
            U.apply(this, arguments);
          },
          I
        );
      },
      count: function (M) {
        var U = 0;
        return (
          j(M, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (M) {
        return (
          j(M, function (U) {
            return U;
          }) || []
        );
      },
      only: function (M) {
        if (!Y(M))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return M;
      },
    }),
    (ft.Component = E),
    (ft.Fragment = l),
    (ft.Profiler = u),
    (ft.PureComponent = V),
    (ft.StrictMode = s),
    (ft.Suspense = g),
    (ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
    (ft.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ft.cache = function (M) {
      return function () {
        return M.apply(null, arguments);
      };
    }),
    (ft.cloneElement = function (M, U, I) {
      if (M == null)
        throw Error(
          "The argument must be a React element, but you passed " + M + "."
        );
      var $ = D({}, M.props),
        G = M.key,
        ct = void 0;
      if (U != null)
        for (st in (U.ref !== void 0 && (ct = void 0),
        U.key !== void 0 && (G = "" + U.key),
        U))
          !Z.call(U, st) ||
            st === "key" ||
            st === "__self" ||
            st === "__source" ||
            (st === "ref" && U.ref === void 0) ||
            ($[st] = U[st]);
      var st = arguments.length - 2;
      if (st === 1) $.children = I;
      else if (1 < st) {
        for (var se = Array(st), St = 0; St < st; St++)
          se[St] = arguments[St + 2];
        $.children = se;
      }
      return F(M.type, G, void 0, void 0, ct, $);
    }),
    (ft.createContext = function (M) {
      return (
        (M = {
          $$typeof: f,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (M.Provider = M),
        (M.Consumer = { $$typeof: c, _context: M }),
        M
      );
    }),
    (ft.createElement = function (M, U, I) {
      var $,
        G = {},
        ct = null;
      if (U != null)
        for ($ in (U.key !== void 0 && (ct = "" + U.key), U))
          Z.call(U, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (G[$] = U[$]);
      var st = arguments.length - 2;
      if (st === 1) G.children = I;
      else if (1 < st) {
        for (var se = Array(st), St = 0; St < st; St++)
          se[St] = arguments[St + 2];
        G.children = se;
      }
      if (M && M.defaultProps)
        for ($ in ((st = M.defaultProps), st))
          G[$] === void 0 && (G[$] = st[$]);
      return F(M, ct, void 0, void 0, null, G);
    }),
    (ft.createRef = function () {
      return { current: null };
    }),
    (ft.forwardRef = function (M) {
      return { $$typeof: d, render: M };
    }),
    (ft.isValidElement = Y),
    (ft.lazy = function (M) {
      return { $$typeof: y, _payload: { _status: -1, _result: M }, _init: tt };
    }),
    (ft.memo = function (M, U) {
      return { $$typeof: m, type: M, compare: U === void 0 ? null : U };
    }),
    (ft.startTransition = function (M) {
      var U = L.T,
        I = {};
      L.T = I;
      try {
        var $ = M(),
          G = L.S;
        G !== null && G(I, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(xt, et);
      } catch (ct) {
        et(ct);
      } finally {
        L.T = U;
      }
    }),
    (ft.unstable_useCacheRefresh = function () {
      return L.H.useCacheRefresh();
    }),
    (ft.use = function (M) {
      return L.H.use(M);
    }),
    (ft.useActionState = function (M, U, I) {
      return L.H.useActionState(M, U, I);
    }),
    (ft.useCallback = function (M, U) {
      return L.H.useCallback(M, U);
    }),
    (ft.useContext = function (M) {
      return L.H.useContext(M);
    }),
    (ft.useDebugValue = function () {}),
    (ft.useDeferredValue = function (M, U) {
      return L.H.useDeferredValue(M, U);
    }),
    (ft.useEffect = function (M, U) {
      return L.H.useEffect(M, U);
    }),
    (ft.useId = function () {
      return L.H.useId();
    }),
    (ft.useImperativeHandle = function (M, U, I) {
      return L.H.useImperativeHandle(M, U, I);
    }),
    (ft.useInsertionEffect = function (M, U) {
      return L.H.useInsertionEffect(M, U);
    }),
    (ft.useLayoutEffect = function (M, U) {
      return L.H.useLayoutEffect(M, U);
    }),
    (ft.useMemo = function (M, U) {
      return L.H.useMemo(M, U);
    }),
    (ft.useOptimistic = function (M, U) {
      return L.H.useOptimistic(M, U);
    }),
    (ft.useReducer = function (M, U, I) {
      return L.H.useReducer(M, U, I);
    }),
    (ft.useRef = function (M) {
      return L.H.useRef(M);
    }),
    (ft.useState = function (M) {
      return L.H.useState(M);
    }),
    (ft.useSyncExternalStore = function (M, U, I) {
      return L.H.useSyncExternalStore(M, U, I);
    }),
    (ft.useTransition = function () {
      return L.H.useTransition();
    }),
    (ft.version = "19.0.0"),
    ft
  );
}
var vg;
function yr() {
  return vg || ((vg = 1), (Qc.exports = Iy())), Qc.exports;
}
var Ot = yr();
const Ym = Jy(Ot);
var Zc = { exports: {} },
  Oa = {},
  Kc = { exports: {} },
  Fc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g;
function tb() {
  return (
    _g ||
      ((_g = 1),
      (function (a) {
        function i(j, tt) {
          var et = j.length;
          j.push(tt);
          t: for (; 0 < et; ) {
            var xt = (et - 1) >>> 1,
              M = j[xt];
            if (0 < u(M, tt)) (j[xt] = tt), (j[et] = M), (et = xt);
            else break t;
          }
        }
        function l(j) {
          return j.length === 0 ? null : j[0];
        }
        function s(j) {
          if (j.length === 0) return null;
          var tt = j[0],
            et = j.pop();
          if (et !== tt) {
            j[0] = et;
            t: for (var xt = 0, M = j.length, U = M >>> 1; xt < U; ) {
              var I = 2 * (xt + 1) - 1,
                $ = j[I],
                G = I + 1,
                ct = j[G];
              if (0 > u($, et))
                G < M && 0 > u(ct, $)
                  ? ((j[xt] = ct), (j[G] = et), (xt = G))
                  : ((j[xt] = $), (j[I] = et), (xt = I));
              else if (G < M && 0 > u(ct, et))
                (j[xt] = ct), (j[G] = et), (xt = G);
              else break t;
            }
          }
          return tt;
        }
        function u(j, tt) {
          var et = j.sortIndex - tt.sortIndex;
          return et !== 0 ? et : j.id - tt.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          a.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            d = f.now();
          a.unstable_now = function () {
            return f.now() - d;
          };
        }
        var g = [],
          m = [],
          y = 1,
          v = null,
          _ = 3,
          S = !1,
          D = !1,
          A = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function Q(j) {
          for (var tt = l(m); tt !== null; ) {
            if (tt.callback === null) s(m);
            else if (tt.startTime <= j)
              s(m), (tt.sortIndex = tt.expirationTime), i(g, tt);
            else break;
            tt = l(m);
          }
        }
        function K(j) {
          if (((A = !1), Q(j), !D))
            if (l(g) !== null) (D = !0), Ht();
            else {
              var tt = l(m);
              tt !== null && rt(K, tt.startTime - j);
            }
        }
        var L = !1,
          Z = -1,
          F = 5,
          X = -1;
        function Y() {
          return !(a.unstable_now() - X < F);
        }
        function W() {
          if (L) {
            var j = a.unstable_now();
            X = j;
            var tt = !0;
            try {
              t: {
                (D = !1), A && ((A = !1), B(Z), (Z = -1)), (S = !0);
                var et = _;
                try {
                  e: {
                    for (
                      Q(j), v = l(g);
                      v !== null && !(v.expirationTime > j && Y());

                    ) {
                      var xt = v.callback;
                      if (typeof xt == "function") {
                        (v.callback = null), (_ = v.priorityLevel);
                        var M = xt(v.expirationTime <= j);
                        if (((j = a.unstable_now()), typeof M == "function")) {
                          (v.callback = M), Q(j), (tt = !0);
                          break e;
                        }
                        v === l(g) && s(g), Q(j);
                      } else s(g);
                      v = l(g);
                    }
                    if (v !== null) tt = !0;
                    else {
                      var U = l(m);
                      U !== null && rt(K, U.startTime - j), (tt = !1);
                    }
                  }
                  break t;
                } finally {
                  (v = null), (_ = et), (S = !1);
                }
                tt = void 0;
              }
            } finally {
              tt ? nt() : (L = !1);
            }
          }
        }
        var nt;
        if (typeof V == "function")
          nt = function () {
            V(W);
          };
        else if (typeof MessageChannel < "u") {
          var ot = new MessageChannel(),
            Et = ot.port2;
          (ot.port1.onmessage = W),
            (nt = function () {
              Et.postMessage(null);
            });
        } else
          nt = function () {
            E(W, 0);
          };
        function Ht() {
          L || ((L = !0), nt());
        }
        function rt(j, tt) {
          Z = E(function () {
            j(a.unstable_now());
          }, tt);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            D || S || ((D = !0), Ht());
          }),
          (a.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (F = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return l(g);
          }),
          (a.unstable_next = function (j) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var tt = 3;
                break;
              default:
                tt = _;
            }
            var et = _;
            _ = tt;
            try {
              return j();
            } finally {
              _ = et;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (j, tt) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var et = _;
            _ = j;
            try {
              return tt();
            } finally {
              _ = et;
            }
          }),
          (a.unstable_scheduleCallback = function (j, tt, et) {
            var xt = a.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? xt + et : xt))
                : (et = xt),
              j)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = et + M),
              (j = {
                id: y++,
                callback: tt,
                priorityLevel: j,
                startTime: et,
                expirationTime: M,
                sortIndex: -1,
              }),
              et > xt
                ? ((j.sortIndex = et),
                  i(m, j),
                  l(g) === null &&
                    j === l(m) &&
                    (A ? (B(Z), (Z = -1)) : (A = !0), rt(K, et - xt)))
                : ((j.sortIndex = M), i(g, j), D || S || ((D = !0), Ht())),
              j
            );
          }),
          (a.unstable_shouldYield = Y),
          (a.unstable_wrapCallback = function (j) {
            var tt = _;
            return function () {
              var et = _;
              _ = tt;
              try {
                return j.apply(this, arguments);
              } finally {
                _ = et;
              }
            };
          });
      })(Fc)),
    Fc
  );
}
var xg;
function eb() {
  return xg || ((xg = 1), (Kc.exports = tb())), Kc.exports;
}
var Wc = { exports: {} },
  he = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg;
function ib() {
  if (Sg) return he;
  Sg = 1;
  var a = yr();
  function i(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var s = {
      d: {
        f: l,
        r: function () {
          throw Error(i(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function c(g, m, y) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: v == null ? null : "" + v,
      children: g,
      containerInfo: m,
      implementation: y,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (he.createPortal = function (g, m) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return c(g, m, null, y);
    }),
    (he.flushSync = function (g) {
      var m = f.T,
        y = s.p;
      try {
        if (((f.T = null), (s.p = 2), g)) return g();
      } finally {
        (f.T = m), (s.p = y), s.d.f();
      }
    }),
    (he.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        s.d.C(g, m));
    }),
    (he.prefetchDNS = function (g) {
      typeof g == "string" && s.d.D(g);
    }),
    (he.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var y = m.as,
          v = d(y, m.crossOrigin),
          _ = typeof m.integrity == "string" ? m.integrity : void 0,
          S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? s.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: S,
            })
          : y === "script" &&
            s.d.X(g, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: S,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (he.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = d(m.as, m.crossOrigin);
            s.d.M(g, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(g);
    }),
    (he.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var y = m.as,
          v = d(y, m.crossOrigin);
        s.d.L(g, y, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (he.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var y = d(m.as, m.crossOrigin);
          s.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else s.d.m(g);
    }),
    (he.requestFormReset = function (g) {
      s.d.r(g);
    }),
    (he.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (he.useFormState = function (g, m, y) {
      return f.H.useFormState(g, m, y);
    }),
    (he.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (he.version = "19.0.0"),
    he
  );
}
var Mg;
function nb() {
  if (Mg) return Wc.exports;
  Mg = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Wc.exports = ib()), Wc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg;
function lb() {
  if (Tg) return Oa;
  Tg = 1;
  var a = eb(),
    i = yr(),
    l = nb();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var c = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    _ = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    E = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    V = Symbol.for("react.lazy"),
    Q = Symbol.for("react.offscreen"),
    K = Symbol.for("react.memo_cache_sentinel"),
    L = Symbol.iterator;
  function Z(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (L && t[L]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var F = Symbol.for("react.client.reference");
  function X(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case g:
        return "Fragment";
      case d:
        return "Portal";
      case y:
        return "Profiler";
      case m:
        return "StrictMode";
      case A:
        return "Suspense";
      case E:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case S:
          return (t.displayName || "Context") + ".Provider";
        case _:
          return (t._context.displayName || "Context") + ".Consumer";
        case D:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case B:
          return (
            (e = t.displayName || null), e !== null ? e : X(t.type) || "Memo"
          );
        case V:
          (e = t._payload), (t = t._init);
          try {
            return X(t(e));
          } catch {}
      }
    return null;
  }
  var Y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = Object.assign,
    nt,
    ot;
  function Et(t) {
    if (nt === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (nt = (e && e[1]) || ""),
          (ot =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      nt +
      t +
      ot
    );
  }
  var Ht = !1;
  function rt(t, e) {
    if (!t || Ht) return "";
    Ht = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var k = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(k.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(k, []);
                } catch (w) {
                  var R = w;
                }
                Reflect.construct(t, [], k);
              } else {
                try {
                  k.call();
                } catch (w) {
                  R = w;
                }
                t.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                R = w;
              }
              (k = t()) &&
                typeof k.catch == "function" &&
                k.catch(function () {});
            }
          } catch (w) {
            if (w && R && typeof w.stack == "string") return [w.stack, R.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      r &&
        r.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = o.DetermineComponentFrameRoot(),
        p = h[0],
        b = h[1];
      if (p && b) {
        var x = p.split(`
`),
          O = b.split(`
`);
        for (
          r = o = 0;
          o < x.length && !x[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; r < O.length && !O[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (o === x.length || r === O.length)
          for (
            o = x.length - 1, r = O.length - 1;
            1 <= o && 0 <= r && x[o] !== O[r];

          )
            r--;
        for (; 1 <= o && 0 <= r; o--, r--)
          if (x[o] !== O[r]) {
            if (o !== 1 || r !== 1)
              do
                if ((o--, r--, 0 > r || x[o] !== O[r])) {
                  var H =
                    `
` + x[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      H.includes("<anonymous>") &&
                      (H = H.replace("<anonymous>", t.displayName)),
                    H
                  );
                }
              while (1 <= o && 0 <= r);
            break;
          }
      }
    } finally {
      (Ht = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Et(n) : "";
  }
  function j(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Et(t.type);
      case 16:
        return Et("Lazy");
      case 13:
        return Et("Suspense");
      case 19:
        return Et("SuspenseList");
      case 0:
      case 15:
        return (t = rt(t.type, !1)), t;
      case 11:
        return (t = rt(t.type.render, !1)), t;
      case 1:
        return (t = rt(t.type, !0)), t;
      default:
        return "";
    }
  }
  function tt(t) {
    try {
      var e = "";
      do (e += j(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function et(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function xt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function M(t) {
    if (et(t) !== t) throw Error(s(188));
  }
  function U(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = et(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var n = t, o = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var h = r.alternate;
      if (h === null) {
        if (((o = r.return), o !== null)) {
          n = o;
          continue;
        }
        break;
      }
      if (r.child === h.child) {
        for (h = r.child; h; ) {
          if (h === n) return M(r), t;
          if (h === o) return M(r), e;
          h = h.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== o.return) (n = r), (o = h);
      else {
        for (var p = !1, b = r.child; b; ) {
          if (b === n) {
            (p = !0), (n = r), (o = h);
            break;
          }
          if (b === o) {
            (p = !0), (o = r), (n = h);
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = h.child; b; ) {
            if (b === n) {
              (p = !0), (n = h), (o = r);
              break;
            }
            if (b === o) {
              (p = !0), (o = h), (n = r);
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (n.alternate !== o) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function I(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = I(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var $ = Array.isArray,
    G = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ct = { pending: !1, data: null, method: null, action: null },
    st = [],
    se = -1;
  function St(t) {
    return { current: t };
  }
  function Ut(t) {
    0 > se || ((t.current = st[se]), (st[se] = null), se--);
  }
  function q(t, e) {
    se++, (st[se] = t.current), (t.current = e);
  }
  var lt = St(null),
    mt = St(null),
    Rt = St(null),
    Gt = St(null);
  function Se(t, e) {
    switch ((q(Rt, e), q(mt, t), q(lt, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Qd(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = Qd(t)), (e = Zd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Ut(lt), q(lt, e);
  }
  function It() {
    Ut(lt), Ut(mt), Ut(Rt);
  }
  function We(t) {
    t.memoizedState !== null && q(Gt, t);
    var e = lt.current,
      n = Zd(e, t.type);
    e !== n && (q(mt, t), q(lt, n));
  }
  function Ce(t) {
    mt.current === t && (Ut(lt), Ut(mt)),
      Gt.current === t && (Ut(Gt), (va._currentValue = ct));
  }
  var Je = Object.prototype.hasOwnProperty,
    Qt = a.unstable_scheduleCallback,
    Re = a.unstable_cancelCallback,
    Uo = a.unstable_shouldYield,
    A0 = a.unstable_requestPaint,
    ii = a.unstable_now,
    E0 = a.unstable_getCurrentPriorityLevel,
    Hr = a.unstable_ImmediatePriority,
    Br = a.unstable_UserBlockingPriority,
    Ja = a.unstable_NormalPriority,
    z0 = a.unstable_LowPriority,
    Lr = a.unstable_IdlePriority,
    C0 = a.log,
    R0 = a.unstable_setDisableYieldValue,
    El = null,
    Me = null;
  function w0(t) {
    if (Me && typeof Me.onCommitFiberRoot == "function")
      try {
        Me.onCommitFiberRoot(El, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function Bi(t) {
    if (
      (typeof C0 == "function" && R0(t),
      Me && typeof Me.setStrictMode == "function")
    )
      try {
        Me.setStrictMode(El, t);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : L0,
    H0 = Math.log,
    B0 = Math.LN2;
  function L0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((H0(t) / B0) | 0)) | 0;
  }
  var $a = 128,
    Pa = 4194304;
  function cn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
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
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ia(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var o = 0,
      r = t.suspendedLanes,
      h = t.pingedLanes,
      p = t.warmLanes;
    t = t.finishedLanes !== 0;
    var b = n & 134217727;
    return (
      b !== 0
        ? ((n = b & ~r),
          n !== 0
            ? (o = cn(n))
            : ((h &= b),
              h !== 0
                ? (o = cn(h))
                : t || ((p = b & ~p), p !== 0 && (o = cn(p)))))
        : ((b = n & ~r),
          b !== 0
            ? (o = cn(b))
            : h !== 0
            ? (o = cn(h))
            : t || ((p = n & ~p), p !== 0 && (o = cn(p)))),
      o === 0
        ? 0
        : e !== 0 &&
          e !== o &&
          (e & r) === 0 &&
          ((r = o & -o),
          (p = e & -e),
          r >= p || (r === 32 && (p & 4194176) !== 0))
        ? e
        : o
    );
  }
  function zl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function N0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
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
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Nr() {
    var t = $a;
    return ($a <<= 1), ($a & 4194176) === 0 && ($a = 128), t;
  }
  function kr() {
    var t = Pa;
    return (Pa <<= 1), (Pa & 62914560) === 0 && (Pa = 4194304), t;
  }
  function jo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Cl(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function k0(t, e, n, o, r, h) {
    var p = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var b = t.entanglements,
      x = t.expirationTimes,
      O = t.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var H = 31 - Te(n),
        k = 1 << H;
      (b[H] = 0), (x[H] = -1);
      var R = O[H];
      if (R !== null)
        for (O[H] = null, H = 0; H < R.length; H++) {
          var w = R[H];
          w !== null && (w.lane &= -536870913);
        }
      n &= ~k;
    }
    o !== 0 && Ur(t, o, 0),
      h !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(p & ~e));
  }
  function Ur(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var o = 31 - Te(e);
    (t.entangledLanes |= e),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (n & 4194218));
  }
  function jr(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var o = 31 - Te(n),
        r = 1 << o;
      (r & e) | (t[o] & e) && (t[o] |= e), (n &= ~r);
    }
  }
  function Yr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vr() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : rg(t.type));
  }
  function U0(t, e) {
    var n = G.p;
    try {
      return (G.p = t), e();
    } finally {
      G.p = n;
    }
  }
  var Li = Math.random().toString(36).slice(2),
    re = "__reactFiber$" + Li,
    ye = "__reactProps$" + Li,
    Vn = "__reactContainer$" + Li,
    Yo = "__reactEvents$" + Li,
    j0 = "__reactListeners$" + Li,
    Y0 = "__reactHandles$" + Li,
    qr = "__reactResources$" + Li,
    Rl = "__reactMarker$" + Li;
  function Vo(t) {
    delete t[re], delete t[ye], delete t[Yo], delete t[j0], delete t[Y0];
  }
  function rn(t) {
    var e = t[re];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Vn] || n[re])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Wd(t); t !== null; ) {
            if ((n = t[re])) return n;
            t = Wd(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function qn(t) {
    if ((t = t[re] || t[Vn])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function wl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Xn(t) {
    var e = t[qr];
    return (
      e ||
        (e = t[qr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function te(t) {
    t[Rl] = !0;
  }
  var Xr = new Set(),
    Gr = {};
  function fn(t, e) {
    Gn(t, e), Gn(t + "Capture", e);
  }
  function Gn(t, e) {
    for (Gr[t] = e, t = 0; t < e.length; t++) Xr.add(e[t]);
  }
  var hi = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    V0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Qr = {},
    Zr = {};
  function q0(t) {
    return Je.call(Zr, t)
      ? !0
      : Je.call(Qr, t)
      ? !1
      : V0.test(t)
      ? (Zr[t] = !0)
      : ((Qr[t] = !0), !1);
  }
  function ts(t, e, n) {
    if (q0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var o = e.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function es(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function di(t, e, n, o) {
    if (o === null) t.removeAttribute(n);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + o);
    }
  }
  function we(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Kr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function X0(t) {
    var e = Kr(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      o = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        h = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (p) {
            (o = "" + p), h.call(this, p);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (p) {
            o = "" + p;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function is(t) {
    t._valueTracker || (t._valueTracker = X0(t));
  }
  function Fr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      o = "";
    return (
      t && (o = Kr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function ns(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var G0 = /[\n"\\]/g;
  function He(t) {
    return t.replace(G0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function qo(t, e, n, o, r, h, p, b) {
    (t.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (t.type = p)
        : t.removeAttribute("type"),
      e != null
        ? p === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + we(e))
          : t.value !== "" + we(e) && (t.value = "" + we(e))
        : (p !== "submit" && p !== "reset") || t.removeAttribute("value"),
      e != null
        ? Xo(t, p, we(e))
        : n != null
        ? Xo(t, p, we(n))
        : o != null && t.removeAttribute("value"),
      r == null && h != null && (t.defaultChecked = !!h),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (t.name = "" + we(b))
        : t.removeAttribute("name");
  }
  function Wr(t, e, n, o, r, h, p, b) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.type = h),
      e != null || n != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || e != null)) return;
      (n = n != null ? "" + we(n) : ""),
        (e = e != null ? "" + we(e) : n),
        b || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (o = o ?? r),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = b ? t.checked : !!o),
      (t.defaultChecked = !!o),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (t.name = p);
  }
  function Xo(t, e, n) {
    (e === "number" && ns(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Qn(t, e, n, o) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        (r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && o && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + we(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          (t[r].selected = !0), o && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Jr(t, e, n) {
    if (
      e != null &&
      ((e = "" + we(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + we(n) : "";
  }
  function $r(t, e, n, o) {
    if (e == null) {
      if (o != null) {
        if (n != null) throw Error(s(92));
        if ($(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        n = o;
      }
      n == null && (n = ""), (e = n);
    }
    (n = we(e)),
      (t.defaultValue = n),
      (o = t.textContent),
      o === n && o !== "" && o !== null && (t.value = o);
  }
  function Zn(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Q0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Pr(t, e, n) {
    var o = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? o
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : o
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Q0.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Ir(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), n != null)) {
      for (var o in n)
        !n.hasOwnProperty(o) ||
          (e != null && e.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
            ? (t.cssFloat = "")
            : (t[o] = ""));
      for (var r in e)
        (o = e[r]), e.hasOwnProperty(r) && n[r] !== o && Pr(t, r, o);
    } else for (var h in e) e.hasOwnProperty(h) && Pr(t, h, e[h]);
  }
  function Go(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Z0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    K0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ls(t) {
    return K0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Qo = null;
  function Zo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Kn = null,
    Fn = null;
  function tf(t) {
    var e = qn(t);
    if (e && (t = e.stateNode)) {
      var n = t[ye] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (qo(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + He("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var o = n[e];
              if (o !== t && o.form === t.form) {
                var r = o[ye] || null;
                if (!r) throw Error(s(90));
                qo(
                  o,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (o = n[e]), o.form === t.form && Fr(o);
          }
          break t;
        case "textarea":
          Jr(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Qn(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ko = !1;
  function ef(t, e, n) {
    if (Ko) return t(e, n);
    Ko = !0;
    try {
      var o = t(e);
      return o;
    } finally {
      if (
        ((Ko = !1),
        (Kn !== null || Fn !== null) &&
          (Vs(), Kn && ((e = Kn), (t = Fn), (Fn = Kn = null), tf(e), t)))
      )
        for (e = 0; e < t.length; e++) tf(t[e]);
    }
  }
  function Hl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var o = n[ye] || null;
    if (o === null) return null;
    n = o[e];
    t: switch (e) {
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
        (o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(s(231, e, typeof n));
    return n;
  }
  var Fo = !1;
  if (hi)
    try {
      var Bl = {};
      Object.defineProperty(Bl, "passive", {
        get: function () {
          Fo = !0;
        },
      }),
        window.addEventListener("test", Bl, Bl),
        window.removeEventListener("test", Bl, Bl);
    } catch {
      Fo = !1;
    }
  var Ni = null,
    Wo = null,
    as = null;
  function nf() {
    if (as) return as;
    var t,
      e = Wo,
      n = e.length,
      o,
      r = "value" in Ni ? Ni.value : Ni.textContent,
      h = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var p = n - t;
    for (o = 1; o <= p && e[n - o] === r[h - o]; o++);
    return (as = r.slice(t, 1 < o ? 1 - o : void 0));
  }
  function ss(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function os() {
    return !0;
  }
  function lf() {
    return !1;
  }
  function be(t) {
    function e(n, o, r, h, p) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = o),
        (this.nativeEvent = h),
        (this.target = p),
        (this.currentTarget = null);
      for (var b in t)
        t.hasOwnProperty(b) && ((n = t[b]), (this[b] = n ? n(h) : h[b]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? os
          : lf),
        (this.isPropagationStopped = lf),
        this
      );
    }
    return (
      W(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = os));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = os));
        },
        persist: function () {},
        isPersistent: os,
      }),
      e
    );
  }
  var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    us = be(hn),
    Ll = W({}, hn, { view: 0, detail: 0 }),
    F0 = be(Ll),
    Jo,
    $o,
    Nl,
    cs = W({}, Ll, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Io,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Nl &&
              (Nl && t.type === "mousemove"
                ? ((Jo = t.screenX - Nl.screenX), ($o = t.screenY - Nl.screenY))
                : ($o = Jo = 0),
              (Nl = t)),
            Jo);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : $o;
      },
    }),
    af = be(cs),
    W0 = W({}, cs, { dataTransfer: 0 }),
    J0 = be(W0),
    $0 = W({}, Ll, { relatedTarget: 0 }),
    Po = be($0),
    P0 = W({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I0 = be(P0),
    tp = W({}, hn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ep = be(tp),
    ip = W({}, hn, { data: 0 }),
    sf = be(ip),
    np = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    lp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ap = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sp(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ap[t])
      ? !!e[t]
      : !1;
  }
  function Io() {
    return sp;
  }
  var op = W({}, Ll, {
      key: function (t) {
        if (t.key) {
          var e = np[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = ss(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? lp[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Io,
      charCode: function (t) {
        return t.type === "keypress" ? ss(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? ss(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    up = be(op),
    cp = W({}, cs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    of = be(cp),
    rp = W({}, Ll, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Io,
    }),
    fp = be(rp),
    hp = W({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dp = be(hp),
    gp = W({}, cs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mp = be(gp),
    pp = W({}, hn, { newState: 0, oldState: 0 }),
    yp = be(pp),
    bp = [9, 13, 27, 32],
    tu = hi && "CompositionEvent" in window,
    kl = null;
  hi && "documentMode" in document && (kl = document.documentMode);
  var vp = hi && "TextEvent" in window && !kl,
    uf = hi && (!tu || (kl && 8 < kl && 11 >= kl)),
    cf = " ",
    rf = !1;
  function ff(t, e) {
    switch (t) {
      case "keyup":
        return bp.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Wn = !1;
  function _p(t, e) {
    switch (t) {
      case "compositionend":
        return hf(e);
      case "keypress":
        return e.which !== 32 ? null : ((rf = !0), cf);
      case "textInput":
        return (t = e.data), t === cf && rf ? null : t;
      default:
        return null;
    }
  }
  function xp(t, e) {
    if (Wn)
      return t === "compositionend" || (!tu && ff(t, e))
        ? ((t = nf()), (as = Wo = Ni = null), (Wn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return uf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Sp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function df(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Sp[t.type] : e === "textarea";
  }
  function gf(t, e, n, o) {
    Kn ? (Fn ? Fn.push(o) : (Fn = [o])) : (Kn = o),
      (e = Zs(e, "onChange")),
      0 < e.length &&
        ((n = new us("onChange", "change", null, n, o)),
        t.push({ event: n, listeners: e }));
  }
  var Ul = null,
    jl = null;
  function Mp(t) {
    Yd(t, 0);
  }
  function rs(t) {
    var e = wl(t);
    if (Fr(e)) return t;
  }
  function mf(t, e) {
    if (t === "change") return e;
  }
  var pf = !1;
  if (hi) {
    var eu;
    if (hi) {
      var iu = "oninput" in document;
      if (!iu) {
        var yf = document.createElement("div");
        yf.setAttribute("oninput", "return;"),
          (iu = typeof yf.oninput == "function");
      }
      eu = iu;
    } else eu = !1;
    pf = eu && (!document.documentMode || 9 < document.documentMode);
  }
  function bf() {
    Ul && (Ul.detachEvent("onpropertychange", vf), (jl = Ul = null));
  }
  function vf(t) {
    if (t.propertyName === "value" && rs(jl)) {
      var e = [];
      gf(e, jl, t, Zo(t)), ef(Mp, e);
    }
  }
  function Tp(t, e, n) {
    t === "focusin"
      ? (bf(), (Ul = e), (jl = n), Ul.attachEvent("onpropertychange", vf))
      : t === "focusout" && bf();
  }
  function Op(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return rs(jl);
  }
  function Dp(t, e) {
    if (t === "click") return rs(e);
  }
  function Ap(t, e) {
    if (t === "input" || t === "change") return rs(e);
  }
  function Ep(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Oe = typeof Object.is == "function" ? Object.is : Ep;
  function Yl(t, e) {
    if (Oe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      o = Object.keys(e);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var r = n[o];
      if (!Je.call(e, r) || !Oe(t[r], e[r])) return !1;
    }
    return !0;
  }
  function _f(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function xf(t, e) {
    var n = _f(t);
    t = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (((o = t + n.textContent.length), t <= e && o >= e))
          return { node: n, offset: e - t };
        t = o;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = _f(n);
    }
  }
  function Sf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Sf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Mf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ns(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ns(t.document);
    }
    return e;
  }
  function nu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function zp(t, e) {
    var n = Mf(e);
    e = t.focusedElem;
    var o = t.selectionRange;
    if (
      n !== e &&
      e &&
      e.ownerDocument &&
      Sf(e.ownerDocument.documentElement, e)
    ) {
      if (o !== null && nu(e)) {
        if (
          ((t = o.start),
          (n = o.end),
          n === void 0 && (n = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(n, e.value.length));
        else if (
          ((n = ((t = e.ownerDocument || document) && t.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var r = e.textContent.length,
            h = Math.min(o.start, r);
          (o = o.end === void 0 ? h : Math.min(o.end, r)),
            !n.extend && h > o && ((r = o), (o = h), (h = r)),
            (r = xf(e, h));
          var p = xf(e, o);
          r &&
            p &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== r.node ||
              n.anchorOffset !== r.offset ||
              n.focusNode !== p.node ||
              n.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(r.node, r.offset),
            n.removeAllRanges(),
            h > o
              ? (n.addRange(t), n.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; (n = n.parentNode); )
        n.nodeType === 1 &&
          t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (n = t[e]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Cp = hi && "documentMode" in document && 11 >= document.documentMode,
    Jn = null,
    lu = null,
    Vl = null,
    au = !1;
  function Tf(t, e, n) {
    var o =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    au ||
      Jn == null ||
      Jn !== ns(o) ||
      ((o = Jn),
      "selectionStart" in o && nu(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Vl && Yl(Vl, o)) ||
        ((Vl = o),
        (o = Zs(lu, "onSelect")),
        0 < o.length &&
          ((e = new us("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: o }),
          (e.target = Jn))));
  }
  function dn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var $n = {
      animationend: dn("Animation", "AnimationEnd"),
      animationiteration: dn("Animation", "AnimationIteration"),
      animationstart: dn("Animation", "AnimationStart"),
      transitionrun: dn("Transition", "TransitionRun"),
      transitionstart: dn("Transition", "TransitionStart"),
      transitioncancel: dn("Transition", "TransitionCancel"),
      transitionend: dn("Transition", "TransitionEnd"),
    },
    su = {},
    Of = {};
  hi &&
    ((Of = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function gn(t) {
    if (su[t]) return su[t];
    if (!$n[t]) return t;
    var e = $n[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Of) return (su[t] = e[n]);
    return t;
  }
  var Df = gn("animationend"),
    Af = gn("animationiteration"),
    Ef = gn("animationstart"),
    Rp = gn("transitionrun"),
    wp = gn("transitionstart"),
    Hp = gn("transitioncancel"),
    zf = gn("transitionend"),
    Cf = new Map(),
    Rf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function $e(t, e) {
    Cf.set(t, e), fn(e, [t]);
  }
  var Be = [],
    Pn = 0,
    ou = 0;
  function fs() {
    for (var t = Pn, e = (ou = Pn = 0); e < t; ) {
      var n = Be[e];
      Be[e++] = null;
      var o = Be[e];
      Be[e++] = null;
      var r = Be[e];
      Be[e++] = null;
      var h = Be[e];
      if (((Be[e++] = null), o !== null && r !== null)) {
        var p = o.pending;
        p === null ? (r.next = r) : ((r.next = p.next), (p.next = r)),
          (o.pending = r);
      }
      h !== 0 && wf(n, r, h);
    }
  }
  function hs(t, e, n, o) {
    (Be[Pn++] = t),
      (Be[Pn++] = e),
      (Be[Pn++] = n),
      (Be[Pn++] = o),
      (ou |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o);
  }
  function uu(t, e, n, o) {
    return hs(t, e, n, o), ds(t);
  }
  function ki(t, e) {
    return hs(t, null, null, e), ds(t);
  }
  function wf(t, e, n) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n);
    for (var r = !1, h = t.return; h !== null; )
      (h.childLanes |= n),
        (o = h.alternate),
        o !== null && (o.childLanes |= n),
        h.tag === 22 &&
          ((t = h.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = h),
        (h = h.return);
    r &&
      e !== null &&
      t.tag === 3 &&
      ((h = t.stateNode),
      (r = 31 - Te(n)),
      (h = h.hiddenUpdates),
      (t = h[r]),
      t === null ? (h[r] = [e]) : t.push(e),
      (e.lane = n | 536870912));
  }
  function ds(t) {
    if (50 < ha) throw ((ha = 0), (gc = null), Error(s(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var In = {},
    Hf = new WeakMap();
  function Le(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Hf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: tt(e) }), Hf.set(t, e), e);
    }
    return { value: t, source: e, stack: tt(e) };
  }
  var tl = [],
    el = 0,
    gs = null,
    ms = 0,
    Ne = [],
    ke = 0,
    mn = null,
    gi = 1,
    mi = "";
  function pn(t, e) {
    (tl[el++] = ms), (tl[el++] = gs), (gs = t), (ms = e);
  }
  function Bf(t, e, n) {
    (Ne[ke++] = gi), (Ne[ke++] = mi), (Ne[ke++] = mn), (mn = t);
    var o = gi;
    t = mi;
    var r = 32 - Te(o) - 1;
    (o &= ~(1 << r)), (n += 1);
    var h = 32 - Te(e) + r;
    if (30 < h) {
      var p = r - (r % 5);
      (h = (o & ((1 << p) - 1)).toString(32)),
        (o >>= p),
        (r -= p),
        (gi = (1 << (32 - Te(e) + r)) | (n << r) | o),
        (mi = h + t);
    } else (gi = (1 << h) | (n << r) | o), (mi = t);
  }
  function cu(t) {
    t.return !== null && (pn(t, 1), Bf(t, 1, 0));
  }
  function ru(t) {
    for (; t === gs; )
      (gs = tl[--el]), (tl[el] = null), (ms = tl[--el]), (tl[el] = null);
    for (; t === mn; )
      (mn = Ne[--ke]),
        (Ne[ke] = null),
        (mi = Ne[--ke]),
        (Ne[ke] = null),
        (gi = Ne[--ke]),
        (Ne[ke] = null);
  }
  var me = null,
    oe = null,
    Mt = !1,
    Pe = null,
    ni = !1,
    fu = Error(s(519));
  function yn(t) {
    var e = Error(s(418, ""));
    throw (Gl(Le(e, t)), fu);
  }
  function Lf(t) {
    var e = t.stateNode,
      n = t.type,
      o = t.memoizedProps;
    switch (((e[re] = t), (e[ye] = o), n)) {
      case "dialog":
        bt("cancel", e), bt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        bt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ga.length; n++) bt(ga[n], e);
        break;
      case "source":
        bt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        bt("error", e), bt("load", e);
        break;
      case "details":
        bt("toggle", e);
        break;
      case "input":
        bt("invalid", e),
          Wr(
            e,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          is(e);
        break;
      case "select":
        bt("invalid", e);
        break;
      case "textarea":
        bt("invalid", e), $r(e, o.value, o.defaultValue, o.children), is(e);
    }
    (n = o.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      o.suppressHydrationWarning === !0 ||
      Gd(e.textContent, n)
        ? (o.popover != null && (bt("beforetoggle", e), bt("toggle", e)),
          o.onScroll != null && bt("scroll", e),
          o.onScrollEnd != null && bt("scrollend", e),
          o.onClick != null && (e.onclick = Ks),
          (e = !0))
        : (e = !1),
      e || yn(t);
  }
  function Nf(t) {
    for (me = t.return; me; )
      switch (me.tag) {
        case 3:
        case 27:
          ni = !0;
          return;
        case 5:
        case 13:
          ni = !1;
          return;
        default:
          me = me.return;
      }
  }
  function ql(t) {
    if (t !== me) return !1;
    if (!Mt) return Nf(t), (Mt = !0), !1;
    var e = !1,
      n;
    if (
      ((n = t.tag !== 3 && t.tag !== 27) &&
        ((n = t.tag === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Rc(t.type, t.memoizedProps))),
        (n = !n)),
      n && (e = !0),
      e && oe && yn(t),
      Nf(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                oe = ti(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        oe = null;
      }
    } else oe = me ? ti(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Xl() {
    (oe = me = null), (Mt = !1);
  }
  function Gl(t) {
    Pe === null ? (Pe = [t]) : Pe.push(t);
  }
  var Ql = Error(s(460)),
    kf = Error(s(474)),
    hu = { then: function () {} };
  function Uf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ps() {}
  function jf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(ps, ps), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === Ql ? Error(s(483)) : t);
      default:
        if (typeof e.status == "string") e.then(ps, ps);
        else {
          if (((t = Bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "fulfilled"), (r.value = o);
                }
              },
              function (o) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "rejected"), (r.reason = o);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === Ql ? Error(s(483)) : t);
        }
        throw ((Zl = e), Ql);
    }
  }
  var Zl = null;
  function Yf() {
    if (Zl === null) throw Error(s(459));
    var t = Zl;
    return (Zl = null), t;
  }
  var il = null,
    Kl = 0;
  function ys(t) {
    var e = Kl;
    return (Kl += 1), il === null && (il = []), jf(il, t, e);
  }
  function Fl(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function bs(t, e) {
    throw e.$$typeof === c
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Vf(t) {
    var e = t._init;
    return e(t._payload);
  }
  function qf(t) {
    function e(z, T) {
      if (t) {
        var C = z.deletions;
        C === null ? ((z.deletions = [T]), (z.flags |= 16)) : C.push(T);
      }
    }
    function n(z, T) {
      if (!t) return null;
      for (; T !== null; ) e(z, T), (T = T.sibling);
      return null;
    }
    function o(z) {
      for (var T = new Map(); z !== null; )
        z.key !== null ? T.set(z.key, z) : T.set(z.index, z), (z = z.sibling);
      return T;
    }
    function r(z, T) {
      return (z = Wi(z, T)), (z.index = 0), (z.sibling = null), z;
    }
    function h(z, T, C) {
      return (
        (z.index = C),
        t
          ? ((C = z.alternate),
            C !== null
              ? ((C = C.index), C < T ? ((z.flags |= 33554434), T) : C)
              : ((z.flags |= 33554434), T))
          : ((z.flags |= 1048576), T)
      );
    }
    function p(z) {
      return t && z.alternate === null && (z.flags |= 33554434), z;
    }
    function b(z, T, C, N) {
      return T === null || T.tag !== 6
        ? ((T = sc(C, z.mode, N)), (T.return = z), T)
        : ((T = r(T, C)), (T.return = z), T);
    }
    function x(z, T, C, N) {
      var J = C.type;
      return J === g
        ? H(z, T, C.props.children, N, C.key)
        : T !== null &&
          (T.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === V &&
              Vf(J) === T.type))
        ? ((T = r(T, C.props)), Fl(T, C), (T.return = z), T)
        : ((T = Ns(C.type, C.key, C.props, null, z.mode, N)),
          Fl(T, C),
          (T.return = z),
          T);
    }
    function O(z, T, C, N) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== C.containerInfo ||
        T.stateNode.implementation !== C.implementation
        ? ((T = oc(C, z.mode, N)), (T.return = z), T)
        : ((T = r(T, C.children || [])), (T.return = z), T);
    }
    function H(z, T, C, N, J) {
      return T === null || T.tag !== 7
        ? ((T = An(C, z.mode, N, J)), (T.return = z), T)
        : ((T = r(T, C)), (T.return = z), T);
    }
    function k(z, T, C) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = sc("" + T, z.mode, C)), (T.return = z), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case f:
            return (
              (C = Ns(T.type, T.key, T.props, null, z.mode, C)),
              Fl(C, T),
              (C.return = z),
              C
            );
          case d:
            return (T = oc(T, z.mode, C)), (T.return = z), T;
          case V:
            var N = T._init;
            return (T = N(T._payload)), k(z, T, C);
        }
        if ($(T) || Z(T))
          return (T = An(T, z.mode, C, null)), (T.return = z), T;
        if (typeof T.then == "function") return k(z, ys(T), C);
        if (T.$$typeof === S) return k(z, Hs(z, T), C);
        bs(z, T);
      }
      return null;
    }
    function R(z, T, C, N) {
      var J = T !== null ? T.key : null;
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return J !== null ? null : b(z, T, "" + C, N);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case f:
            return C.key === J ? x(z, T, C, N) : null;
          case d:
            return C.key === J ? O(z, T, C, N) : null;
          case V:
            return (J = C._init), (C = J(C._payload)), R(z, T, C, N);
        }
        if ($(C) || Z(C)) return J !== null ? null : H(z, T, C, N, null);
        if (typeof C.then == "function") return R(z, T, ys(C), N);
        if (C.$$typeof === S) return R(z, T, Hs(z, C), N);
        bs(z, C);
      }
      return null;
    }
    function w(z, T, C, N, J) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return (z = z.get(C) || null), b(T, z, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case f:
            return (
              (z = z.get(N.key === null ? C : N.key) || null), x(T, z, N, J)
            );
          case d:
            return (
              (z = z.get(N.key === null ? C : N.key) || null), O(T, z, N, J)
            );
          case V:
            var gt = N._init;
            return (N = gt(N._payload)), w(z, T, C, N, J);
        }
        if ($(N) || Z(N)) return (z = z.get(C) || null), H(T, z, N, J, null);
        if (typeof N.then == "function") return w(z, T, C, ys(N), J);
        if (N.$$typeof === S) return w(z, T, C, Hs(T, N), J);
        bs(T, N);
      }
      return null;
    }
    function P(z, T, C, N) {
      for (
        var J = null, gt = null, it = T, at = (T = 0), ne = null;
        it !== null && at < C.length;
        at++
      ) {
        it.index > at ? ((ne = it), (it = null)) : (ne = it.sibling);
        var Tt = R(z, it, C[at], N);
        if (Tt === null) {
          it === null && (it = ne);
          break;
        }
        t && it && Tt.alternate === null && e(z, it),
          (T = h(Tt, T, at)),
          gt === null ? (J = Tt) : (gt.sibling = Tt),
          (gt = Tt),
          (it = ne);
      }
      if (at === C.length) return n(z, it), Mt && pn(z, at), J;
      if (it === null) {
        for (; at < C.length; at++)
          (it = k(z, C[at], N)),
            it !== null &&
              ((T = h(it, T, at)),
              gt === null ? (J = it) : (gt.sibling = it),
              (gt = it));
        return Mt && pn(z, at), J;
      }
      for (it = o(it); at < C.length; at++)
        (ne = w(it, z, at, C[at], N)),
          ne !== null &&
            (t &&
              ne.alternate !== null &&
              it.delete(ne.key === null ? at : ne.key),
            (T = h(ne, T, at)),
            gt === null ? (J = ne) : (gt.sibling = ne),
            (gt = ne));
      return (
        t &&
          it.forEach(function (nn) {
            return e(z, nn);
          }),
        Mt && pn(z, at),
        J
      );
    }
    function ut(z, T, C, N) {
      if (C == null) throw Error(s(151));
      for (
        var J = null, gt = null, it = T, at = (T = 0), ne = null, Tt = C.next();
        it !== null && !Tt.done;
        at++, Tt = C.next()
      ) {
        it.index > at ? ((ne = it), (it = null)) : (ne = it.sibling);
        var nn = R(z, it, Tt.value, N);
        if (nn === null) {
          it === null && (it = ne);
          break;
        }
        t && it && nn.alternate === null && e(z, it),
          (T = h(nn, T, at)),
          gt === null ? (J = nn) : (gt.sibling = nn),
          (gt = nn),
          (it = ne);
      }
      if (Tt.done) return n(z, it), Mt && pn(z, at), J;
      if (it === null) {
        for (; !Tt.done; at++, Tt = C.next())
          (Tt = k(z, Tt.value, N)),
            Tt !== null &&
              ((T = h(Tt, T, at)),
              gt === null ? (J = Tt) : (gt.sibling = Tt),
              (gt = Tt));
        return Mt && pn(z, at), J;
      }
      for (it = o(it); !Tt.done; at++, Tt = C.next())
        (Tt = w(it, z, at, Tt.value, N)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              it.delete(Tt.key === null ? at : Tt.key),
            (T = h(Tt, T, at)),
            gt === null ? (J = Tt) : (gt.sibling = Tt),
            (gt = Tt));
      return (
        t &&
          it.forEach(function (Ky) {
            return e(z, Ky);
          }),
        Mt && pn(z, at),
        J
      );
    }
    function Xt(z, T, C, N) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === g &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case f:
            t: {
              for (var J = C.key; T !== null; ) {
                if (T.key === J) {
                  if (((J = C.type), J === g)) {
                    if (T.tag === 7) {
                      n(z, T.sibling),
                        (N = r(T, C.props.children)),
                        (N.return = z),
                        (z = N);
                      break t;
                    }
                  } else if (
                    T.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === V &&
                      Vf(J) === T.type)
                  ) {
                    n(z, T.sibling),
                      (N = r(T, C.props)),
                      Fl(N, C),
                      (N.return = z),
                      (z = N);
                    break t;
                  }
                  n(z, T);
                  break;
                } else e(z, T);
                T = T.sibling;
              }
              C.type === g
                ? ((N = An(C.props.children, z.mode, N, C.key)),
                  (N.return = z),
                  (z = N))
                : ((N = Ns(C.type, C.key, C.props, null, z.mode, N)),
                  Fl(N, C),
                  (N.return = z),
                  (z = N));
            }
            return p(z);
          case d:
            t: {
              for (J = C.key; T !== null; ) {
                if (T.key === J)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === C.containerInfo &&
                    T.stateNode.implementation === C.implementation
                  ) {
                    n(z, T.sibling),
                      (N = r(T, C.children || [])),
                      (N.return = z),
                      (z = N);
                    break t;
                  } else {
                    n(z, T);
                    break;
                  }
                else e(z, T);
                T = T.sibling;
              }
              (N = oc(C, z.mode, N)), (N.return = z), (z = N);
            }
            return p(z);
          case V:
            return (J = C._init), (C = J(C._payload)), Xt(z, T, C, N);
        }
        if ($(C)) return P(z, T, C, N);
        if (Z(C)) {
          if (((J = Z(C)), typeof J != "function")) throw Error(s(150));
          return (C = J.call(C)), ut(z, T, C, N);
        }
        if (typeof C.then == "function") return Xt(z, T, ys(C), N);
        if (C.$$typeof === S) return Xt(z, T, Hs(z, C), N);
        bs(z, C);
      }
      return (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
        ? ((C = "" + C),
          T !== null && T.tag === 6
            ? (n(z, T.sibling), (N = r(T, C)), (N.return = z), (z = N))
            : (n(z, T), (N = sc(C, z.mode, N)), (N.return = z), (z = N)),
          p(z))
        : n(z, T);
    }
    return function (z, T, C, N) {
      try {
        Kl = 0;
        var J = Xt(z, T, C, N);
        return (il = null), J;
      } catch (it) {
        if (it === Ql) throw it;
        var gt = Ve(29, it, null, z.mode);
        return (gt.lanes = N), (gt.return = z), gt;
      } finally {
      }
    };
  }
  var bn = qf(!0),
    Xf = qf(!1),
    nl = St(null),
    vs = St(0);
  function Gf(t, e) {
    (t = Di), q(vs, t), q(nl, e), (Di = t | e.baseLanes);
  }
  function du() {
    q(vs, Di), q(nl, nl.current);
  }
  function gu() {
    (Di = vs.current), Ut(nl), Ut(vs);
  }
  var Ue = St(null),
    li = null;
  function Ui(t) {
    var e = t.alternate;
    q($t, $t.current & 1),
      q(Ue, t),
      li === null &&
        (e === null || nl.current !== null || e.memoizedState !== null) &&
        (li = t);
  }
  function Qf(t) {
    if (t.tag === 22) {
      if ((q($t, $t.current), q(Ue, t), li === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (li = t);
      }
    } else ji();
  }
  function ji() {
    q($t, $t.current), q(Ue, Ue.current);
  }
  function pi(t) {
    Ut(Ue), li === t && (li = null), Ut($t);
  }
  var $t = St(0);
  function _s(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Bp =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Lp = a.unstable_scheduleCallback,
    Np = a.unstable_NormalPriority,
    Pt = {
      $$typeof: S,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function mu() {
    return { controller: new Bp(), data: new Map(), refCount: 0 };
  }
  function Wl(t) {
    t.refCount--,
      t.refCount === 0 &&
        Lp(Np, function () {
          t.controller.abort();
        });
  }
  var Jl = null,
    pu = 0,
    ll = 0,
    al = null;
  function kp(t, e) {
    if (Jl === null) {
      var n = (Jl = []);
      (pu = 0),
        (ll = Sc()),
        (al = {
          status: "pending",
          value: void 0,
          then: function (o) {
            n.push(o);
          },
        });
    }
    return pu++, e.then(Zf, Zf), e;
  }
  function Zf() {
    if (--pu === 0 && Jl !== null) {
      al !== null && (al.status = "fulfilled");
      var t = Jl;
      (Jl = null), (ll = 0), (al = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Up(t, e) {
    var n = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          (o.status = "fulfilled"), (o.value = e);
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (o.status = "rejected", o.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        }
      ),
      o
    );
  }
  var Kf = Y.S;
  Y.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      kp(t, e),
      Kf !== null && Kf(t, e);
  };
  var vn = St(null);
  function yu() {
    var t = vn.current;
    return t !== null ? t : Bt.pooledCache;
  }
  function xs(t, e) {
    e === null ? q(vn, vn.current) : q(vn, e.pool);
  }
  function Ff() {
    var t = yu();
    return t === null ? null : { parent: Pt._currentValue, pool: t };
  }
  var Yi = 0,
    dt = null,
    zt = null,
    Ft = null,
    Ss = !1,
    sl = !1,
    _n = !1,
    Ms = 0,
    $l = 0,
    ol = null,
    jp = 0;
  function Zt() {
    throw Error(s(321));
  }
  function bu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Oe(t[n], e[n])) return !1;
    return !0;
  }
  function vu(t, e, n, o, r, h) {
    return (
      (Yi = h),
      (dt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (Y.H = t === null || t.memoizedState === null ? xn : Vi),
      (_n = !1),
      (h = n(o, r)),
      (_n = !1),
      sl && (h = Jf(e, n, o, r)),
      Wf(t),
      h
    );
  }
  function Wf(t) {
    Y.H = ai;
    var e = zt !== null && zt.next !== null;
    if (((Yi = 0), (Ft = zt = dt = null), (Ss = !1), ($l = 0), (ol = null), e))
      throw Error(s(300));
    t === null ||
      ee ||
      ((t = t.dependencies), t !== null && ws(t) && (ee = !0));
  }
  function Jf(t, e, n, o) {
    dt = t;
    var r = 0;
    do {
      if ((sl && (ol = null), ($l = 0), (sl = !1), 25 <= r))
        throw Error(s(301));
      if (((r += 1), (Ft = zt = null), t.updateQueue != null)) {
        var h = t.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (Y.H = Sn), (h = e(n, o));
    } while (sl);
    return h;
  }
  function Yp() {
    var t = Y.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Pl(e) : e),
      (t = t.useState()[0]),
      (zt !== null ? zt.memoizedState : null) !== t && (dt.flags |= 1024),
      e
    );
  }
  function _u() {
    var t = Ms !== 0;
    return (Ms = 0), t;
  }
  function xu(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Su(t) {
    if (Ss) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Ss = !1;
    }
    (Yi = 0), (Ft = zt = dt = null), (sl = !1), ($l = Ms = 0), (ol = null);
  }
  function ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ft === null ? (dt.memoizedState = Ft = t) : (Ft = Ft.next = t), Ft;
  }
  function Wt() {
    if (zt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = zt.next;
    var e = Ft === null ? dt.memoizedState : Ft.next;
    if (e !== null) (Ft = e), (zt = t);
    else {
      if (t === null)
        throw dt.alternate === null ? Error(s(467)) : Error(s(310));
      (zt = t),
        (t = {
          memoizedState: zt.memoizedState,
          baseState: zt.baseState,
          baseQueue: zt.baseQueue,
          queue: zt.queue,
          next: null,
        }),
        Ft === null ? (dt.memoizedState = Ft = t) : (Ft = Ft.next = t);
    }
    return Ft;
  }
  var Ts;
  Ts = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Pl(t) {
    var e = $l;
    return (
      ($l += 1),
      ol === null && (ol = []),
      (t = jf(ol, t, e)),
      (e = dt),
      (Ft === null ? e.memoizedState : Ft.next) === null &&
        ((e = e.alternate),
        (Y.H = e === null || e.memoizedState === null ? xn : Vi)),
      t
    );
  }
  function Os(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Pl(t);
      if (t.$$typeof === S) return fe(t);
    }
    throw Error(s(438, String(t)));
  }
  function Mu(t) {
    var e = null,
      n = dt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var o = dt.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (e = {
              data: o.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Ts()), (dt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), o = 0; o < t; o++) n[o] = K;
    return e.index++, n;
  }
  function yi(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ds(t) {
    var e = Wt();
    return Tu(e, zt, t);
  }
  function Tu(t, e, n) {
    var o = t.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = n;
    var r = t.baseQueue,
      h = o.pending;
    if (h !== null) {
      if (r !== null) {
        var p = r.next;
        (r.next = h.next), (h.next = p);
      }
      (e.baseQueue = r = h), (o.pending = null);
    }
    if (((h = t.baseState), r === null)) t.memoizedState = h;
    else {
      e = r.next;
      var b = (p = null),
        x = null,
        O = e,
        H = !1;
      do {
        var k = O.lane & -536870913;
        if (k !== O.lane ? (vt & k) === k : (Yi & k) === k) {
          var R = O.revertLane;
          if (R === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null,
                }),
              k === ll && (H = !0);
          else if ((Yi & R) === R) {
            (O = O.next), R === ll && (H = !0);
            continue;
          } else
            (k = {
              lane: 0,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              x === null ? ((b = x = k), (p = h)) : (x = x.next = k),
              (dt.lanes |= R),
              (Ji |= R);
          (k = O.action),
            _n && n(h, k),
            (h = O.hasEagerState ? O.eagerState : n(h, k));
        } else
          (R = {
            lane: k,
            revertLane: O.revertLane,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          }),
            x === null ? ((b = x = R), (p = h)) : (x = x.next = R),
            (dt.lanes |= k),
            (Ji |= k);
        O = O.next;
      } while (O !== null && O !== e);
      if (
        (x === null ? (p = h) : (x.next = b),
        !Oe(h, t.memoizedState) && ((ee = !0), H && ((n = al), n !== null)))
      )
        throw n;
      (t.memoizedState = h),
        (t.baseState = p),
        (t.baseQueue = x),
        (o.lastRenderedState = h);
    }
    return r === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function Ou(t) {
    var e = Wt(),
      n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var o = n.dispatch,
      r = n.pending,
      h = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var p = (r = r.next);
      do (h = t(h, p.action)), (p = p.next);
      while (p !== r);
      Oe(h, e.memoizedState) || (ee = !0),
        (e.memoizedState = h),
        e.baseQueue === null && (e.baseState = h),
        (n.lastRenderedState = h);
    }
    return [h, o];
  }
  function $f(t, e, n) {
    var o = dt,
      r = Wt(),
      h = Mt;
    if (h) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var p = !Oe((zt || r).memoizedState, n);
    if (
      (p && ((r.memoizedState = n), (ee = !0)),
      (r = r.queue),
      Eu(th.bind(null, o, r, t), [t]),
      r.getSnapshot !== e || p || (Ft !== null && Ft.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ul(9, If.bind(null, o, r, n, e), { destroy: void 0 }, null),
        Bt === null)
      )
        throw Error(s(349));
      h || (Yi & 60) !== 0 || Pf(o, e, n);
    }
    return n;
  }
  function Pf(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = dt.updateQueue),
      e === null
        ? ((e = Ts()), (dt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function If(t, e, n, o) {
    (e.value = n), (e.getSnapshot = o), eh(e) && ih(t);
  }
  function th(t, e, n) {
    return n(function () {
      eh(e) && ih(t);
    });
  }
  function eh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Oe(t, n);
    } catch {
      return !0;
    }
  }
  function ih(t) {
    var e = ki(t, 2);
    e !== null && pe(e, t, 2);
  }
  function Du(t) {
    var e = ve();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), _n)) {
        Bi(!0);
        try {
          n();
        } finally {
          Bi(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: t,
      }),
      e
    );
  }
  function nh(t, e, n, o) {
    return (t.baseState = n), Tu(t, zt, typeof o == "function" ? o : yi);
  }
  function Vp(t, e, n, o, r) {
    if (zs(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var h = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          h.listeners.push(p);
        },
      };
      Y.T !== null ? n(!0) : (h.isTransition = !1),
        o(h),
        (n = e.pending),
        n === null
          ? ((h.next = e.pending = h), lh(e, h))
          : ((h.next = n.next), (e.pending = n.next = h));
    }
  }
  function lh(t, e) {
    var n = e.action,
      o = e.payload,
      r = t.state;
    if (e.isTransition) {
      var h = Y.T,
        p = {};
      Y.T = p;
      try {
        var b = n(r, o),
          x = Y.S;
        x !== null && x(p, b), ah(t, e, b);
      } catch (O) {
        Au(t, e, O);
      } finally {
        Y.T = h;
      }
    } else
      try {
        (h = n(r, o)), ah(t, e, h);
      } catch (O) {
        Au(t, e, O);
      }
  }
  function ah(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (o) {
            sh(t, e, o);
          },
          function (o) {
            return Au(t, e, o);
          }
        )
      : sh(t, e, n);
  }
  function sh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      oh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), lh(t, n)));
  }
  function Au(t, e, n) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do (e.status = "rejected"), (e.reason = n), oh(e), (e = e.next);
      while (e !== o);
    }
    t.action = null;
  }
  function oh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function uh(t, e) {
    return e;
  }
  function ch(t, e) {
    if (Mt) {
      var n = Bt.formState;
      if (n !== null) {
        t: {
          var o = dt;
          if (Mt) {
            if (oe) {
              e: {
                for (var r = oe, h = ni; r.nodeType !== 8; ) {
                  if (!h) {
                    r = null;
                    break e;
                  }
                  if (((r = ti(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                (h = r.data), (r = h === "F!" || h === "F" ? r : null);
              }
              if (r) {
                (oe = ti(r.nextSibling)), (o = r.data === "F!");
                break t;
              }
            }
            yn(o);
          }
          o = !1;
        }
        o && (e = n[0]);
      }
    }
    return (
      (n = ve()),
      (n.memoizedState = n.baseState = e),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uh,
        lastRenderedState: e,
      }),
      (n.queue = o),
      (n = Ah.bind(null, dt, o)),
      (o.dispatch = n),
      (o = Du(!1)),
      (h = Hu.bind(null, dt, !1, o.queue)),
      (o = ve()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (o.queue = r),
      (n = Vp.bind(null, dt, r, h, n)),
      (r.dispatch = n),
      (o.memoizedState = t),
      [e, n, !1]
    );
  }
  function rh(t) {
    var e = Wt();
    return fh(e, zt, t);
  }
  function fh(t, e, n) {
    (e = Tu(t, e, uh)[0]),
      (t = Ds(yi)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Pl(e)
          : e);
    var o = Wt(),
      r = o.queue,
      h = r.dispatch;
    return (
      n !== o.memoizedState &&
        ((dt.flags |= 2048),
        ul(9, qp.bind(null, r, n), { destroy: void 0 }, null)),
      [e, h, t]
    );
  }
  function qp(t, e) {
    t.action = e;
  }
  function hh(t) {
    var e = Wt(),
      n = zt;
    if (n !== null) return fh(e, n, t);
    Wt(), (e = e.memoizedState), (n = Wt());
    var o = n.queue.dispatch;
    return (n.memoizedState = t), [e, o, !1];
  }
  function ul(t, e, n, o) {
    return (
      (t = { tag: t, create: e, inst: n, deps: o, next: null }),
      (e = dt.updateQueue),
      e === null && ((e = Ts()), (dt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((o = n.next), (n.next = t), (t.next = o), (e.lastEffect = t)),
      t
    );
  }
  function dh() {
    return Wt().memoizedState;
  }
  function As(t, e, n, o) {
    var r = ve();
    (dt.flags |= t),
      (r.memoizedState = ul(
        1 | e,
        n,
        { destroy: void 0 },
        o === void 0 ? null : o
      ));
  }
  function Es(t, e, n, o) {
    var r = Wt();
    o = o === void 0 ? null : o;
    var h = r.memoizedState.inst;
    zt !== null && o !== null && bu(o, zt.memoizedState.deps)
      ? (r.memoizedState = ul(e, n, h, o))
      : ((dt.flags |= t), (r.memoizedState = ul(1 | e, n, h, o)));
  }
  function gh(t, e) {
    As(8390656, 8, t, e);
  }
  function Eu(t, e) {
    Es(2048, 8, t, e);
  }
  function mh(t, e) {
    return Es(4, 2, t, e);
  }
  function ph(t, e) {
    return Es(4, 4, t, e);
  }
  function yh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function bh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Es(4, 4, yh.bind(null, e, t), n);
  }
  function zu() {}
  function vh(t, e) {
    var n = Wt();
    e = e === void 0 ? null : e;
    var o = n.memoizedState;
    return e !== null && bu(e, o[1]) ? o[0] : ((n.memoizedState = [t, e]), t);
  }
  function _h(t, e) {
    var n = Wt();
    e = e === void 0 ? null : e;
    var o = n.memoizedState;
    if (e !== null && bu(e, o[1])) return o[0];
    if (((o = t()), _n)) {
      Bi(!0);
      try {
        t();
      } finally {
        Bi(!1);
      }
    }
    return (n.memoizedState = [o, e]), o;
  }
  function Cu(t, e, n) {
    return n === void 0 || (Yi & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Sd()), (dt.lanes |= t), (Ji |= t), n);
  }
  function xh(t, e, n, o) {
    return Oe(n, e)
      ? n
      : nl.current !== null
      ? ((t = Cu(t, n, o)), Oe(t, e) || (ee = !0), t)
      : (Yi & 42) === 0
      ? ((ee = !0), (t.memoizedState = n))
      : ((t = Sd()), (dt.lanes |= t), (Ji |= t), e);
  }
  function Sh(t, e, n, o, r) {
    var h = G.p;
    G.p = h !== 0 && 8 > h ? h : 8;
    var p = Y.T,
      b = {};
    (Y.T = b), Hu(t, !1, e, n);
    try {
      var x = r(),
        O = Y.S;
      if (
        (O !== null && O(b, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var H = Up(x, o);
        Il(t, e, H, ze(t));
      } else Il(t, e, o, ze(t));
    } catch (k) {
      Il(t, e, { then: function () {}, status: "rejected", reason: k }, ze());
    } finally {
      (G.p = h), (Y.T = p);
    }
  }
  function Xp() {}
  function Ru(t, e, n, o) {
    if (t.tag !== 5) throw Error(s(476));
    var r = Mh(t).queue;
    Sh(
      t,
      r,
      e,
      ct,
      n === null
        ? Xp
        : function () {
            return Th(t), n(o);
          }
    );
  }
  function Mh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ct,
      baseState: ct,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: ct,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yi,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Th(t) {
    var e = Mh(t).next.queue;
    Il(t, e, {}, ze());
  }
  function wu() {
    return fe(va);
  }
  function Oh() {
    return Wt().memoizedState;
  }
  function Dh() {
    return Wt().memoizedState;
  }
  function Gp(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ze();
          t = Gi(n);
          var o = Qi(e, t, n);
          o !== null && (pe(o, e, n), ia(o, e, n)),
            (e = { cache: mu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Qp(t, e, n) {
    var o = ze();
    (n = {
      lane: o,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zs(t)
        ? Eh(e, n)
        : ((n = uu(t, e, n, o)), n !== null && (pe(n, t, o), zh(n, e, o)));
  }
  function Ah(t, e, n) {
    var o = ze();
    Il(t, e, n, o);
  }
  function Il(t, e, n, o) {
    var r = {
      lane: o,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zs(t)) Eh(e, r);
    else {
      var h = t.alternate;
      if (
        t.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = e.lastRenderedReducer), h !== null)
      )
        try {
          var p = e.lastRenderedState,
            b = h(p, n);
          if (((r.hasEagerState = !0), (r.eagerState = b), Oe(b, p)))
            return hs(t, e, r, 0), Bt === null && fs(), !1;
        } catch {
        } finally {
        }
      if (((n = uu(t, e, r, o)), n !== null))
        return pe(n, t, o), zh(n, e, o), !0;
    }
    return !1;
  }
  function Hu(t, e, n, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Sc(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zs(t))
    ) {
      if (e) throw Error(s(479));
    } else (e = uu(t, n, o, 2)), e !== null && pe(e, t, 2);
  }
  function zs(t) {
    var e = t.alternate;
    return t === dt || (e !== null && e === dt);
  }
  function Eh(t, e) {
    sl = Ss = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function zh(t, e, n) {
    if ((n & 4194176) !== 0) {
      var o = e.lanes;
      (o &= t.pendingLanes), (n |= o), (e.lanes = n), jr(t, n);
    }
  }
  var ai = {
    readContext: fe,
    use: Os,
    useCallback: Zt,
    useContext: Zt,
    useEffect: Zt,
    useImperativeHandle: Zt,
    useLayoutEffect: Zt,
    useInsertionEffect: Zt,
    useMemo: Zt,
    useReducer: Zt,
    useRef: Zt,
    useState: Zt,
    useDebugValue: Zt,
    useDeferredValue: Zt,
    useTransition: Zt,
    useSyncExternalStore: Zt,
    useId: Zt,
  };
  (ai.useCacheRefresh = Zt),
    (ai.useMemoCache = Zt),
    (ai.useHostTransitionStatus = Zt),
    (ai.useFormState = Zt),
    (ai.useActionState = Zt),
    (ai.useOptimistic = Zt);
  var xn = {
    readContext: fe,
    use: Os,
    useCallback: function (t, e) {
      return (ve().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: fe,
    useEffect: gh,
    useImperativeHandle: function (t, e, n) {
      (n = n != null ? n.concat([t]) : null),
        As(4194308, 4, yh.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return As(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      As(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = ve();
      e = e === void 0 ? null : e;
      var o = t();
      if (_n) {
        Bi(!0);
        try {
          t();
        } finally {
          Bi(!1);
        }
      }
      return (n.memoizedState = [o, e]), o;
    },
    useReducer: function (t, e, n) {
      var o = ve();
      if (n !== void 0) {
        var r = n(e);
        if (_n) {
          Bi(!0);
          try {
            n(e);
          } finally {
            Bi(!1);
          }
        }
      } else r = e;
      return (
        (o.memoizedState = o.baseState = r),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: r,
        }),
        (o.queue = t),
        (t = t.dispatch = Qp.bind(null, dt, t)),
        [o.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = ve();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Du(t);
      var e = t.queue,
        n = Ah.bind(null, dt, e);
      return (e.dispatch = n), [t.memoizedState, n];
    },
    useDebugValue: zu,
    useDeferredValue: function (t, e) {
      var n = ve();
      return Cu(n, t, e);
    },
    useTransition: function () {
      var t = Du(!1);
      return (
        (t = Sh.bind(null, dt, t.queue, !0, !1)),
        (ve().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, n) {
      var o = dt,
        r = ve();
      if (Mt) {
        if (n === void 0) throw Error(s(407));
        n = n();
      } else {
        if (((n = e()), Bt === null)) throw Error(s(349));
        (vt & 60) !== 0 || Pf(o, e, n);
      }
      r.memoizedState = n;
      var h = { value: n, getSnapshot: e };
      return (
        (r.queue = h),
        gh(th.bind(null, o, h, t), [t]),
        (o.flags |= 2048),
        ul(9, If.bind(null, o, h, n, e), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var t = ve(),
        e = Bt.identifierPrefix;
      if (Mt) {
        var n = mi,
          o = gi;
        (n = (o & ~(1 << (32 - Te(o) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Ms++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = jp++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (ve().memoizedState = Gp.bind(null, dt));
    },
  };
  (xn.useMemoCache = Mu),
    (xn.useHostTransitionStatus = wu),
    (xn.useFormState = ch),
    (xn.useActionState = ch),
    (xn.useOptimistic = function (t) {
      var e = ve();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = n), (e = Hu.bind(null, dt, !0, n)), (n.dispatch = e), [t, e]
      );
    });
  var Vi = {
    readContext: fe,
    use: Os,
    useCallback: vh,
    useContext: fe,
    useEffect: Eu,
    useImperativeHandle: bh,
    useInsertionEffect: mh,
    useLayoutEffect: ph,
    useMemo: _h,
    useReducer: Ds,
    useRef: dh,
    useState: function () {
      return Ds(yi);
    },
    useDebugValue: zu,
    useDeferredValue: function (t, e) {
      var n = Wt();
      return xh(n, zt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ds(yi)[0],
        e = Wt().memoizedState;
      return [typeof t == "boolean" ? t : Pl(t), e];
    },
    useSyncExternalStore: $f,
    useId: Oh,
  };
  (Vi.useCacheRefresh = Dh),
    (Vi.useMemoCache = Mu),
    (Vi.useHostTransitionStatus = wu),
    (Vi.useFormState = rh),
    (Vi.useActionState = rh),
    (Vi.useOptimistic = function (t, e) {
      var n = Wt();
      return nh(n, zt, t, e);
    });
  var Sn = {
    readContext: fe,
    use: Os,
    useCallback: vh,
    useContext: fe,
    useEffect: Eu,
    useImperativeHandle: bh,
    useInsertionEffect: mh,
    useLayoutEffect: ph,
    useMemo: _h,
    useReducer: Ou,
    useRef: dh,
    useState: function () {
      return Ou(yi);
    },
    useDebugValue: zu,
    useDeferredValue: function (t, e) {
      var n = Wt();
      return zt === null ? Cu(n, t, e) : xh(n, zt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ou(yi)[0],
        e = Wt().memoizedState;
      return [typeof t == "boolean" ? t : Pl(t), e];
    },
    useSyncExternalStore: $f,
    useId: Oh,
  };
  (Sn.useCacheRefresh = Dh),
    (Sn.useMemoCache = Mu),
    (Sn.useHostTransitionStatus = wu),
    (Sn.useFormState = hh),
    (Sn.useActionState = hh),
    (Sn.useOptimistic = function (t, e) {
      var n = Wt();
      return zt !== null
        ? nh(n, zt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    });
  function Bu(t, e, n, o) {
    (e = t.memoizedState),
      (n = n(o, e)),
      (n = n == null ? e : W({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Lu = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? et(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var o = ze(),
        r = Gi(o);
      (r.payload = e),
        n != null && (r.callback = n),
        (e = Qi(t, r, o)),
        e !== null && (pe(e, t, o), ia(e, t, o));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var o = ze(),
        r = Gi(o);
      (r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Qi(t, r, o)),
        e !== null && (pe(e, t, o), ia(e, t, o));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ze(),
        o = Gi(n);
      (o.tag = 2),
        e != null && (o.callback = e),
        (e = Qi(t, o, n)),
        e !== null && (pe(e, t, n), ia(e, t, n));
    },
  };
  function Ch(t, e, n, o, r, h, p) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, h, p)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Yl(n, o) || !Yl(r, h)
        : !0
    );
  }
  function Rh(t, e, n, o) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, o),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, o),
      e.state !== t && Lu.enqueueReplaceState(e, e.state, null);
  }
  function Mn(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var o in e) o !== "ref" && (n[o] = e[o]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = W({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  var Cs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function wh(t) {
    Cs(t);
  }
  function Hh(t) {
    console.error(t);
  }
  function Bh(t) {
    Cs(t);
  }
  function Rs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Lh(t, e, n) {
    try {
      var o = t.onCaughtError;
      o(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Nu(t, e, n) {
    return (
      (n = Gi(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Rs(t, e);
      }),
      n
    );
  }
  function Nh(t) {
    return (t = Gi(t)), (t.tag = 3), t;
  }
  function kh(t, e, n, o) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var h = o.value;
      (t.payload = function () {
        return r(h);
      }),
        (t.callback = function () {
          Lh(e, n, o);
        });
    }
    var p = n.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (t.callback = function () {
        Lh(e, n, o),
          typeof r != "function" &&
            ($i === null ? ($i = new Set([this])) : $i.add(this));
        var b = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: b !== null ? b : "",
        });
      });
  }
  function Zp(t, e, n, o, r) {
    if (
      ((n.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && ea(e, n, r, !0),
        (n = Ue.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              li === null ? yc() : n.alternate === null && qt === 0 && (qt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              o === hu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([o])) : e.add(o),
                  vc(t, o, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              o === hu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([o])) : n.add(o)),
                  vc(t, o, r)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return vc(t, o, r), yc(), !1;
    }
    if (Mt)
      return (
        (e = Ue.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            o !== fu && ((t = Error(s(422), { cause: o })), Gl(Le(t, n))))
          : (o !== fu && ((e = Error(s(423), { cause: o })), Gl(Le(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (o = Le(o, n)),
            (r = Nu(t.stateNode, o, r)),
            $u(t, r),
            qt !== 4 && (qt = 2)),
        !1
      );
    var h = Error(s(520), { cause: o });
    if (
      ((h = Le(h, n)),
      ra === null ? (ra = [h]) : ra.push(h),
      qt !== 4 && (qt = 2),
      e === null)
    )
      return !0;
    (o = Le(o, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = Nu(n.stateNode, o, t)),
            $u(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (h = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  ($i === null || !$i.has(h)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = Nh(r)),
              kh(r, t, n, o),
              $u(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Uh = Error(s(461)),
    ee = !1;
  function ue(t, e, n, o) {
    e.child = t === null ? Xf(e, null, n, o) : bn(e, t.child, n, o);
  }
  function jh(t, e, n, o, r) {
    n = n.render;
    var h = e.ref;
    if ("ref" in o) {
      var p = {};
      for (var b in o) b !== "ref" && (p[b] = o[b]);
    } else p = o;
    return (
      On(e),
      (o = vu(t, e, n, p, h, r)),
      (b = _u()),
      t !== null && !ee
        ? (xu(t, e, r), bi(t, e, r))
        : (Mt && b && cu(e), (e.flags |= 1), ue(t, e, o, r), e.child)
    );
  }
  function Yh(t, e, n, o, r) {
    if (t === null) {
      var h = n.type;
      return typeof h == "function" &&
        !ac(h) &&
        h.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = h), Vh(t, e, h, o, r))
        : ((t = Ns(n.type, null, o, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((h = t.child), !Qu(t, r))) {
      var p = h.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yl), n(p, o) && t.ref === e.ref)
      )
        return bi(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = Wi(h, o)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vh(t, e, n, o, r) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (Yl(h, o) && t.ref === e.ref)
        if (((ee = !1), (e.pendingProps = o = h), Qu(t, r)))
          (t.flags & 131072) !== 0 && (ee = !0);
        else return (e.lanes = t.lanes), bi(t, e, r);
    }
    return ku(t, e, n, o, r);
  }
  function qh(t, e, n) {
    var o = e.pendingProps,
      r = o.children,
      h = (e.stateNode._pendingVisibility & 2) !== 0,
      p = t !== null ? t.memoizedState : null;
    if ((ta(t, e), o.mode === "hidden" || h)) {
      if ((e.flags & 128) !== 0) {
        if (((o = p !== null ? p.baseLanes | n : n), t !== null)) {
          for (r = e.child = t.child, h = 0; r !== null; )
            (h = h | r.lanes | r.childLanes), (r = r.sibling);
          e.childLanes = h & ~o;
        } else (e.childLanes = 0), (e.child = null);
        return Xh(t, e, o, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && xs(e, p !== null ? p.cachePool : null),
          p !== null ? Gf(e, p) : du(),
          Qf(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Xh(t, e, p !== null ? p.baseLanes | n : n, n)
        );
    } else
      p !== null
        ? (xs(e, p.cachePool), Gf(e, p), ji(), (e.memoizedState = null))
        : (t !== null && xs(e, null), du(), ji());
    return ue(t, e, r, n), e.child;
  }
  function Xh(t, e, n, o) {
    var r = yu();
    return (
      (r = r === null ? null : { parent: Pt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && xs(e, null),
      du(),
      Qf(e),
      t !== null && ea(t, e, o, !0),
      null
    );
  }
  function ta(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function ku(t, e, n, o, r) {
    return (
      On(e),
      (n = vu(t, e, n, o, void 0, r)),
      (o = _u()),
      t !== null && !ee
        ? (xu(t, e, r), bi(t, e, r))
        : (Mt && o && cu(e), (e.flags |= 1), ue(t, e, n, r), e.child)
    );
  }
  function Gh(t, e, n, o, r, h) {
    return (
      On(e),
      (e.updateQueue = null),
      (n = Jf(e, o, n, r)),
      Wf(t),
      (o = _u()),
      t !== null && !ee
        ? (xu(t, e, h), bi(t, e, h))
        : (Mt && o && cu(e), (e.flags |= 1), ue(t, e, n, h), e.child)
    );
  }
  function Qh(t, e, n, o, r) {
    if ((On(e), e.stateNode === null)) {
      var h = In,
        p = n.contextType;
      typeof p == "object" && p !== null && (h = fe(p)),
        (h = new n(o, h)),
        (e.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Lu),
        (e.stateNode = h),
        (h._reactInternals = e),
        (h = e.stateNode),
        (h.props = o),
        (h.state = e.memoizedState),
        (h.refs = {}),
        Wu(e),
        (p = n.contextType),
        (h.context = typeof p == "object" && p !== null ? fe(p) : In),
        (h.state = e.memoizedState),
        (p = n.getDerivedStateFromProps),
        typeof p == "function" && (Bu(e, n, p, o), (h.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((p = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          p !== h.state && Lu.enqueueReplaceState(h, h.state, null),
          la(e, o, h, r),
          na(),
          (h.state = e.memoizedState)),
        typeof h.componentDidMount == "function" && (e.flags |= 4194308),
        (o = !0);
    } else if (t === null) {
      h = e.stateNode;
      var b = e.memoizedProps,
        x = Mn(n, b);
      h.props = x;
      var O = h.context,
        H = n.contextType;
      (p = In), typeof H == "object" && H !== null && (p = fe(H));
      var k = n.getDerivedStateFromProps;
      (H =
        typeof k == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (b = e.pendingProps !== b),
        H ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((b || O !== p) && Rh(e, h, o, p)),
        (Xi = !1);
      var R = e.memoizedState;
      (h.state = R),
        la(e, o, h, r),
        na(),
        (O = e.memoizedState),
        b || R !== O || Xi
          ? (typeof k == "function" && (Bu(e, n, k, o), (O = e.memoizedState)),
            (x = Xi || Ch(e, n, x, o, R, O, p))
              ? (H ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = o),
                (e.memoizedState = O)),
            (h.props = o),
            (h.state = O),
            (h.context = p),
            (o = x))
          : (typeof h.componentDidMount == "function" && (e.flags |= 4194308),
            (o = !1));
    } else {
      (h = e.stateNode),
        Ju(t, e),
        (p = e.memoizedProps),
        (H = Mn(n, p)),
        (h.props = H),
        (k = e.pendingProps),
        (R = h.context),
        (O = n.contextType),
        (x = In),
        typeof O == "object" && O !== null && (x = fe(O)),
        (b = n.getDerivedStateFromProps),
        (O =
          typeof b == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((p !== k || R !== x) && Rh(e, h, o, x)),
        (Xi = !1),
        (R = e.memoizedState),
        (h.state = R),
        la(e, o, h, r),
        na();
      var w = e.memoizedState;
      p !== k ||
      R !== w ||
      Xi ||
      (t !== null && t.dependencies !== null && ws(t.dependencies))
        ? (typeof b == "function" && (Bu(e, n, b, o), (w = e.memoizedState)),
          (H =
            Xi ||
            Ch(e, n, H, o, R, w, x) ||
            (t !== null && t.dependencies !== null && ws(t.dependencies)))
            ? (O ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(o, w, x),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, w, x)),
              typeof h.componentDidUpdate == "function" && (e.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (p === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (p === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = o),
              (e.memoizedState = w)),
          (h.props = o),
          (h.state = w),
          (h.context = x),
          (o = H))
        : (typeof h.componentDidUpdate != "function" ||
            (p === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (p === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (o = !1));
    }
    return (
      (h = o),
      ta(t, e),
      (o = (e.flags & 128) !== 0),
      h || o
        ? ((h = e.stateNode),
          (n =
            o && typeof n.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (e.flags |= 1),
          t !== null && o
            ? ((e.child = bn(e, t.child, null, r)),
              (e.child = bn(e, null, n, r)))
            : ue(t, e, n, r),
          (e.memoizedState = h.state),
          (t = e.child))
        : (t = bi(t, e, r)),
      t
    );
  }
  function Zh(t, e, n, o) {
    return Xl(), (e.flags |= 256), ue(t, e, n, o), e.child;
  }
  var Uu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ju(t) {
    return { baseLanes: t, cachePool: Ff() };
  }
  function Yu(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= qe), t;
  }
  function Kh(t, e, n) {
    var o = e.pendingProps,
      r = !1,
      h = (e.flags & 128) !== 0,
      p;
    if (
      ((p = h) ||
        (p =
          t !== null && t.memoizedState === null ? !1 : ($t.current & 2) !== 0),
      p && ((r = !0), (e.flags &= -129)),
      (p = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Mt) {
        if ((r ? Ui(e) : ji(), Mt)) {
          var b = oe,
            x;
          if ((x = b)) {
            t: {
              for (x = b, b = ni; x.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break t;
                }
                if (((x = ti(x.nextSibling)), x === null)) {
                  b = null;
                  break t;
                }
              }
              b = x;
            }
            b !== null
              ? ((e.memoizedState = {
                  dehydrated: b,
                  treeContext: mn !== null ? { id: gi, overflow: mi } : null,
                  retryLane: 536870912,
                }),
                (x = Ve(18, null, null, 0)),
                (x.stateNode = b),
                (x.return = e),
                (e.child = x),
                (me = e),
                (oe = null),
                (x = !0))
              : (x = !1);
          }
          x || yn(e);
        }
        if (
          ((b = e.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return b.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        pi(e);
      }
      return (
        (b = o.children),
        (o = o.fallback),
        r
          ? (ji(),
            (r = e.mode),
            (b = qu({ mode: "hidden", children: b }, r)),
            (o = An(o, r, n, null)),
            (b.return = e),
            (o.return = e),
            (b.sibling = o),
            (e.child = b),
            (r = e.child),
            (r.memoizedState = ju(n)),
            (r.childLanes = Yu(t, p, n)),
            (e.memoizedState = Uu),
            o)
          : (Ui(e), Vu(e, b))
      );
    }
    if (
      ((x = t.memoizedState), x !== null && ((b = x.dehydrated), b !== null))
    ) {
      if (h)
        e.flags & 256
          ? (Ui(e), (e.flags &= -257), (e = Xu(t, e, n)))
          : e.memoizedState !== null
          ? (ji(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (ji(),
            (r = o.fallback),
            (b = e.mode),
            (o = qu({ mode: "visible", children: o.children }, b)),
            (r = An(r, b, n, null)),
            (r.flags |= 2),
            (o.return = e),
            (r.return = e),
            (o.sibling = r),
            (e.child = o),
            bn(e, t.child, null, n),
            (o = e.child),
            (o.memoizedState = ju(n)),
            (o.childLanes = Yu(t, p, n)),
            (e.memoizedState = Uu),
            (e = r));
      else if ((Ui(e), b.data === "$!")) {
        if (((p = b.nextSibling && b.nextSibling.dataset), p)) var O = p.dgst;
        (p = O),
          (o = Error(s(419))),
          (o.stack = ""),
          (o.digest = p),
          Gl({ value: o, source: null, stack: null }),
          (e = Xu(t, e, n));
      } else if (
        (ee || ea(t, e, n, !1), (p = (n & t.childLanes) !== 0), ee || p)
      ) {
        if (((p = Bt), p !== null)) {
          if (((o = n & -n), (o & 42) !== 0)) o = 1;
          else
            switch (o) {
              case 2:
                o = 1;
                break;
              case 8:
                o = 4;
                break;
              case 32:
                o = 16;
                break;
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
                o = 64;
                break;
              case 268435456:
                o = 134217728;
                break;
              default:
                o = 0;
            }
          if (
            ((o = (o & (p.suspendedLanes | n)) !== 0 ? 0 : o),
            o !== 0 && o !== x.retryLane)
          )
            throw ((x.retryLane = o), ki(t, o), pe(p, t, o), Uh);
        }
        b.data === "$?" || yc(), (e = Xu(t, e, n));
      } else
        b.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = oy.bind(null, t)),
            (b._reactRetry = e),
            (e = null))
          : ((t = x.treeContext),
            (oe = ti(b.nextSibling)),
            (me = e),
            (Mt = !0),
            (Pe = null),
            (ni = !1),
            t !== null &&
              ((Ne[ke++] = gi),
              (Ne[ke++] = mi),
              (Ne[ke++] = mn),
              (gi = t.id),
              (mi = t.overflow),
              (mn = e)),
            (e = Vu(e, o.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (ji(),
        (r = o.fallback),
        (b = e.mode),
        (x = t.child),
        (O = x.sibling),
        (o = Wi(x, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = x.subtreeFlags & 31457280),
        O !== null ? (r = Wi(O, r)) : ((r = An(r, b, n, null)), (r.flags |= 2)),
        (r.return = e),
        (o.return = e),
        (o.sibling = r),
        (e.child = o),
        (o = r),
        (r = e.child),
        (b = t.child.memoizedState),
        b === null
          ? (b = ju(n))
          : ((x = b.cachePool),
            x !== null
              ? ((O = Pt._currentValue),
                (x = x.parent !== O ? { parent: O, pool: O } : x))
              : (x = Ff()),
            (b = { baseLanes: b.baseLanes | n, cachePool: x })),
        (r.memoizedState = b),
        (r.childLanes = Yu(t, p, n)),
        (e.memoizedState = Uu),
        o)
      : (Ui(e),
        (n = t.child),
        (t = n.sibling),
        (n = Wi(n, { mode: "visible", children: o.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((p = e.deletions),
          p === null ? ((e.deletions = [t]), (e.flags |= 16)) : p.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Vu(t, e) {
    return (
      (e = qu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function qu(t, e) {
    return vd(t, e, 0, null);
  }
  function Xu(t, e, n) {
    return (
      bn(e, t.child, null, n),
      (t = Vu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Fh(t, e, n) {
    t.lanes |= e;
    var o = t.alternate;
    o !== null && (o.lanes |= e), Ku(t.return, e, n);
  }
  function Gu(t, e, n, o, r) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: n,
          tailMode: r,
        })
      : ((h.isBackwards = e),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = o),
        (h.tail = n),
        (h.tailMode = r));
  }
  function Wh(t, e, n) {
    var o = e.pendingProps,
      r = o.revealOrder,
      h = o.tail;
    if ((ue(t, e, o.children, n), (o = $t.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Fh(t, n, e);
          else if (t.tag === 19) Fh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      o &= 1;
    }
    switch ((q($t, o), r)) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && _s(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Gu(e, !1, r, n, h);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && _s(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Gu(e, !0, n, null, h);
        break;
      case "together":
        Gu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function bi(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Ji |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ea(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Wi(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = Wi(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Qu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ws(t)));
  }
  function Kp(t, e, n) {
    switch (e.tag) {
      case 3:
        Se(e, e.stateNode.containerInfo),
          qi(e, Pt, t.memoizedState.cache),
          Xl();
        break;
      case 27:
      case 5:
        We(e);
        break;
      case 4:
        Se(e, e.stateNode.containerInfo);
        break;
      case 10:
        qi(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var o = e.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Ui(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Kh(t, e, n)
            : (Ui(e), (t = bi(t, e, n)), t !== null ? t.sibling : null);
        Ui(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((o = (n & e.childLanes) !== 0),
          o || (ea(t, e, n, !1), (o = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (o) return Wh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          q($t, $t.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), qh(t, e, n);
      case 24:
        qi(e, Pt, t.memoizedState.cache);
    }
    return bi(t, e, n);
  }
  function Jh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) ee = !0;
      else {
        if (!Qu(t, n) && (e.flags & 128) === 0) return (ee = !1), Kp(t, e, n);
        ee = (t.flags & 131072) !== 0;
      }
    else (ee = !1), Mt && (e.flags & 1048576) !== 0 && Bf(e, ms, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var o = e.elementType,
            r = o._init;
          if (((o = r(o._payload)), (e.type = o), typeof o == "function"))
            ac(o)
              ? ((t = Mn(o, t)), (e.tag = 1), (e = Qh(null, e, o, t, n)))
              : ((e.tag = 0), (e = ku(null, e, o, t, n)));
          else {
            if (o != null) {
              if (((r = o.$$typeof), r === D)) {
                (e.tag = 11), (e = jh(null, e, o, t, n));
                break t;
              } else if (r === B) {
                (e.tag = 14), (e = Yh(null, e, o, t, n));
                break t;
              }
            }
            throw ((e = X(o) || o), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return ku(t, e, e.type, e.pendingProps, n);
      case 1:
        return (o = e.type), (r = Mn(o, e.pendingProps)), Qh(t, e, o, r, n);
      case 3:
        t: {
          if ((Se(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          var h = e.pendingProps;
          (r = e.memoizedState), (o = r.element), Ju(t, e), la(e, h, null, n);
          var p = e.memoizedState;
          if (
            ((h = p.cache),
            qi(e, Pt, h),
            h !== r.cache && Fu(e, [Pt], n, !0),
            na(),
            (h = p.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: h, isDehydrated: !1, cache: p.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = Zh(t, e, h, n);
              break t;
            } else if (h !== o) {
              (o = Le(Error(s(424)), e)), Gl(o), (e = Zh(t, e, h, n));
              break t;
            } else
              for (
                oe = ti(e.stateNode.containerInfo.firstChild),
                  me = e,
                  Mt = !0,
                  Pe = null,
                  ni = !0,
                  n = Xf(e, null, h, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Xl(), h === o)) {
              e = bi(t, e, n);
              break t;
            }
            ue(t, e, h, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ta(t, e),
          t === null
            ? (n = Id(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Mt ||
                ((n = e.type),
                (t = e.pendingProps),
                (o = Fs(Rt.current).createElement(n)),
                (o[re] = e),
                (o[ye] = t),
                ce(o, n, t),
                te(o),
                (e.stateNode = o))
            : (e.memoizedState = Id(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          We(e),
          t === null &&
            Mt &&
            ((o = e.stateNode = Jd(e.type, e.pendingProps, Rt.current)),
            (me = e),
            (ni = !0),
            (oe = ti(o.firstChild))),
          (o = e.pendingProps.children),
          t !== null || Mt ? ue(t, e, o, n) : (e.child = bn(e, null, o, n)),
          ta(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            Mt &&
            ((r = o = oe) &&
              ((o = My(o, e.type, e.pendingProps, ni)),
              o !== null
                ? ((e.stateNode = o),
                  (me = e),
                  (oe = ti(o.firstChild)),
                  (ni = !1),
                  (r = !0))
                : (r = !1)),
            r || yn(e)),
          We(e),
          (r = e.type),
          (h = e.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (o = h.children),
          Rc(r, h) ? (o = null) : p !== null && Rc(r, p) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = vu(t, e, Yp, null, null, n)), (va._currentValue = r)),
          ta(t, e),
          ue(t, e, o, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Mt &&
            ((t = n = oe) &&
              ((n = Ty(n, e.pendingProps, ni)),
              n !== null
                ? ((e.stateNode = n), (me = e), (oe = null), (t = !0))
                : (t = !1)),
            t || yn(e)),
          null
        );
      case 13:
        return Kh(t, e, n);
      case 4:
        return (
          Se(e, e.stateNode.containerInfo),
          (o = e.pendingProps),
          t === null ? (e.child = bn(e, null, o, n)) : ue(t, e, o, n),
          e.child
        );
      case 11:
        return jh(t, e, e.type, e.pendingProps, n);
      case 7:
        return ue(t, e, e.pendingProps, n), e.child;
      case 8:
        return ue(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ue(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (o = e.pendingProps),
          qi(e, e.type, o.value),
          ue(t, e, o.children, n),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (o = e.pendingProps.children),
          On(e),
          (r = fe(r)),
          (o = o(r)),
          (e.flags |= 1),
          ue(t, e, o, n),
          e.child
        );
      case 14:
        return Yh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Vh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Wh(t, e, n);
      case 22:
        return qh(t, e, n);
      case 24:
        return (
          On(e),
          (o = fe(Pt)),
          t === null
            ? ((r = yu()),
              r === null &&
                ((r = Bt),
                (h = mu()),
                (r.pooledCache = h),
                h.refCount++,
                h !== null && (r.pooledCacheLanes |= n),
                (r = h)),
              (e.memoizedState = { parent: o, cache: r }),
              Wu(e),
              qi(e, Pt, r))
            : ((t.lanes & n) !== 0 && (Ju(t, e), la(e, null, null, n), na()),
              (r = t.memoizedState),
              (h = e.memoizedState),
              r.parent !== o
                ? ((r = { parent: o, cache: o }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  qi(e, Pt, o))
                : ((o = h.cache),
                  qi(e, Pt, o),
                  o !== r.cache && Fu(e, [Pt], n, !0))),
          ue(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  var Zu = St(null),
    Tn = null,
    vi = null;
  function qi(t, e, n) {
    q(Zu, e._currentValue), (e._currentValue = n);
  }
  function _i(t) {
    (t._currentValue = Zu.current), Ut(Zu);
  }
  function Ku(t, e, n) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), o !== null && (o.childLanes |= e))
          : o !== null && (o.childLanes & e) !== e && (o.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Fu(t, e, n, o) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var h = r.dependencies;
      if (h !== null) {
        var p = r.child;
        h = h.firstContext;
        t: for (; h !== null; ) {
          var b = h;
          h = r;
          for (var x = 0; x < e.length; x++)
            if (b.context === e[x]) {
              (h.lanes |= n),
                (b = h.alternate),
                b !== null && (b.lanes |= n),
                Ku(h.return, n, t),
                o || (p = null);
              break t;
            }
          h = b.next;
        }
      } else if (r.tag === 18) {
        if (((p = r.return), p === null)) throw Error(s(341));
        (p.lanes |= n),
          (h = p.alternate),
          h !== null && (h.lanes |= n),
          Ku(p, n, t),
          (p = null);
      } else p = r.child;
      if (p !== null) p.return = r;
      else
        for (p = r; p !== null; ) {
          if (p === t) {
            p = null;
            break;
          }
          if (((r = p.sibling), r !== null)) {
            (r.return = p.return), (p = r);
            break;
          }
          p = p.return;
        }
      r = p;
    }
  }
  function ea(t, e, n, o) {
    t = null;
    for (var r = e, h = !1; r !== null; ) {
      if (!h) {
        if ((r.flags & 524288) !== 0) h = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var p = r.alternate;
        if (p === null) throw Error(s(387));
        if (((p = p.memoizedProps), p !== null)) {
          var b = r.type;
          Oe(r.pendingProps.value, p.value) ||
            (t !== null ? t.push(b) : (t = [b]));
        }
      } else if (r === Gt.current) {
        if (((p = r.alternate), p === null)) throw Error(s(387));
        p.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(va) : (t = [va]));
      }
      r = r.return;
    }
    t !== null && Fu(e, t, n, o), (e.flags |= 262144);
  }
  function ws(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Oe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function On(t) {
    (Tn = t),
      (vi = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function fe(t) {
    return $h(Tn, t);
  }
  function Hs(t, e) {
    return Tn === null && On(t), $h(t, e);
  }
  function $h(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), vi === null)) {
      if (t === null) throw Error(s(308));
      (vi = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else vi = vi.next = e;
    return n;
  }
  var Xi = !1;
  function Wu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ju(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Gi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qi(t, e, n) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Yt & 2) !== 0)) {
      var r = o.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (o.pending = e),
        (e = ds(t)),
        wf(t, null, n),
        e
      );
    }
    return hs(t, o, e, n), ds(t);
  }
  function ia(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194176) !== 0))
    ) {
      var o = e.lanes;
      (o &= t.pendingLanes), (n |= o), (e.lanes = n), jr(t, n);
    }
  }
  function $u(t, e) {
    var n = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), n === o)) {
      var r = null,
        h = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          h === null ? (r = h = p) : (h = h.next = p), (n = n.next);
        } while (n !== null);
        h === null ? (r = h = e) : (h = h.next = e);
      } else r = h = e;
      (n = {
        baseState: o.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: h,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Pu = !1;
  function na() {
    if (Pu) {
      var t = al;
      if (t !== null) throw t;
    }
  }
  function la(t, e, n, o) {
    Pu = !1;
    var r = t.updateQueue;
    Xi = !1;
    var h = r.firstBaseUpdate,
      p = r.lastBaseUpdate,
      b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var x = b,
        O = x.next;
      (x.next = null), p === null ? (h = O) : (p.next = O), (p = x);
      var H = t.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (b = H.lastBaseUpdate),
        b !== p &&
          (b === null ? (H.firstBaseUpdate = O) : (b.next = O),
          (H.lastBaseUpdate = x)));
    }
    if (h !== null) {
      var k = r.baseState;
      (p = 0), (H = O = x = null), (b = h);
      do {
        var R = b.lane & -536870913,
          w = R !== b.lane;
        if (w ? (vt & R) === R : (o & R) === R) {
          R !== 0 && R === ll && (Pu = !0),
            H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var P = t,
              ut = b;
            R = e;
            var Xt = n;
            switch (ut.tag) {
              case 1:
                if (((P = ut.payload), typeof P == "function")) {
                  k = P.call(Xt, k, R);
                  break t;
                }
                k = P;
                break t;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = ut.payload),
                  (R = typeof P == "function" ? P.call(Xt, k, R) : P),
                  R == null)
                )
                  break t;
                k = W({}, k, R);
                break t;
              case 2:
                Xi = !0;
            }
          }
          (R = b.callback),
            R !== null &&
              ((t.flags |= 64),
              w && (t.flags |= 8192),
              (w = r.callbacks),
              w === null ? (r.callbacks = [R]) : w.push(R));
        } else
          (w = {
            lane: R,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            H === null ? ((O = H = w), (x = k)) : (H = H.next = w),
            (p |= R);
        if (((b = b.next), b === null)) {
          if (((b = r.shared.pending), b === null)) break;
          (w = b),
            (b = w.next),
            (w.next = null),
            (r.lastBaseUpdate = w),
            (r.shared.pending = null);
        }
      } while (!0);
      H === null && (x = k),
        (r.baseState = x),
        (r.firstBaseUpdate = O),
        (r.lastBaseUpdate = H),
        h === null && (r.shared.lanes = 0),
        (Ji |= p),
        (t.lanes = p),
        (t.memoizedState = k);
    }
  }
  function Ph(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Ih(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Ph(n[t], e);
  }
  function aa(t, e) {
    try {
      var n = e.updateQueue,
        o = n !== null ? n.lastEffect : null;
      if (o !== null) {
        var r = o.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            o = void 0;
            var h = n.create,
              p = n.inst;
            (o = h()), (p.destroy = o);
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (b) {
      wt(e, e.return, b);
    }
  }
  function Zi(t, e, n) {
    try {
      var o = e.updateQueue,
        r = o !== null ? o.lastEffect : null;
      if (r !== null) {
        var h = r.next;
        o = h;
        do {
          if ((o.tag & t) === t) {
            var p = o.inst,
              b = p.destroy;
            if (b !== void 0) {
              (p.destroy = void 0), (r = e);
              var x = n;
              try {
                b();
              } catch (O) {
                wt(r, x, O);
              }
            }
          }
          o = o.next;
        } while (o !== h);
      }
    } catch (O) {
      wt(e, e.return, O);
    }
  }
  function td(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ih(e, n);
      } catch (o) {
        wt(t, t.return, o);
      }
    }
  }
  function ed(t, e, n) {
    (n.props = Mn(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (o) {
      wt(t, e, o);
    }
  }
  function Dn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var o = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = o;
            break;
          default:
            r = o;
        }
        typeof n == "function" ? (t.refCleanup = n(r)) : (n.current = r);
      }
    } catch (h) {
      wt(t, e, h);
    }
  }
  function De(t, e) {
    var n = t.ref,
      o = t.refCleanup;
    if (n !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (r) {
          wt(t, e, r);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          wt(t, e, r);
        }
      else n.current = null;
  }
  function id(t) {
    var e = t.type,
      n = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && o.focus();
          break t;
        case "img":
          n.src ? (o.src = n.src) : n.srcSet && (o.srcset = n.srcSet);
      }
    } catch (r) {
      wt(t, t.return, r);
    }
  }
  function nd(t, e, n) {
    try {
      var o = t.stateNode;
      by(o, t.type, n, e), (o[ye] = e);
    } catch (r) {
      wt(t, t.return, r);
    }
  }
  function ld(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Iu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ld(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function tc(t, e, n) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8
              ? ((e = n.parentNode), e.insertBefore(t, n))
              : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ks));
    else if (o !== 4 && o !== 27 && ((t = t.child), t !== null))
      for (tc(t, e, n), t = t.sibling; t !== null; )
        tc(t, e, n), (t = t.sibling);
  }
  function Bs(t, e, n) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (o !== 4 && o !== 27 && ((t = t.child), t !== null))
      for (Bs(t, e, n), t = t.sibling; t !== null; )
        Bs(t, e, n), (t = t.sibling);
  }
  var xi = !1,
    Vt = !1,
    ec = !1,
    ad = typeof WeakSet == "function" ? WeakSet : Set,
    ie = null,
    sd = !1;
  function Fp(t, e) {
    if (((t = t.containerInfo), (zc = to), (t = Mf(t)), nu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var o = n.getSelection && n.getSelection();
          if (o && o.rangeCount !== 0) {
            n = o.anchorNode;
            var r = o.anchorOffset,
              h = o.focusNode;
            o = o.focusOffset;
            try {
              n.nodeType, h.nodeType;
            } catch {
              n = null;
              break t;
            }
            var p = 0,
              b = -1,
              x = -1,
              O = 0,
              H = 0,
              k = t,
              R = null;
            e: for (;;) {
              for (
                var w;
                k !== n || (r !== 0 && k.nodeType !== 3) || (b = p + r),
                  k !== h || (o !== 0 && k.nodeType !== 3) || (x = p + o),
                  k.nodeType === 3 && (p += k.nodeValue.length),
                  (w = k.firstChild) !== null;

              )
                (R = k), (k = w);
              for (;;) {
                if (k === t) break e;
                if (
                  (R === n && ++O === r && (b = p),
                  R === h && ++H === o && (x = p),
                  (w = k.nextSibling) !== null)
                )
                  break;
                (k = R), (R = k.parentNode);
              }
              k = w;
            }
            n = b === -1 || x === -1 ? null : { start: b, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Cc = { focusedElem: t, selectionRange: n }, to = !1, ie = e;
      ie !== null;

    )
      if (
        ((e = ie), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (ie = t);
      else
        for (; ie !== null; ) {
          switch (((e = ie), (h = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && h !== null) {
                (t = void 0),
                  (n = e),
                  (r = h.memoizedProps),
                  (h = h.memoizedState),
                  (o = n.stateNode);
                try {
                  var P = Mn(n.type, r, n.elementType === n.type);
                  (t = o.getSnapshotBeforeUpdate(P, h)),
                    (o.__reactInternalSnapshotBeforeUpdate = t);
                } catch (ut) {
                  wt(n, n.return, ut);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Bc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (ie = t);
            break;
          }
          ie = e.return;
        }
    return (P = sd), (sd = !1), P;
  }
  function od(t, e, n) {
    var o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Mi(t, n), o & 4 && aa(5, n);
        break;
      case 1:
        if ((Mi(t, n), o & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (b) {
              wt(n, n.return, b);
            }
          else {
            var r = Mn(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              wt(n, n.return, b);
            }
          }
        o & 64 && td(n), o & 512 && Dn(n, n.return);
        break;
      case 3:
        if ((Mi(t, n), o & 64 && ((o = n.updateQueue), o !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Ih(o, t);
          } catch (b) {
            wt(n, n.return, b);
          }
        }
        break;
      case 26:
        Mi(t, n), o & 512 && Dn(n, n.return);
        break;
      case 27:
      case 5:
        Mi(t, n), e === null && o & 4 && id(n), o & 512 && Dn(n, n.return);
        break;
      case 12:
        Mi(t, n);
        break;
      case 13:
        Mi(t, n), o & 4 && rd(t, n);
        break;
      case 22:
        if (((r = n.memoizedState !== null || xi), !r)) {
          e = (e !== null && e.memoizedState !== null) || Vt;
          var h = xi,
            p = Vt;
          (xi = r),
            (Vt = e) && !p ? Ki(t, n, (n.subtreeFlags & 8772) !== 0) : Mi(t, n),
            (xi = h),
            (Vt = p);
        }
        o & 512 &&
          (n.memoizedProps.mode === "manual"
            ? Dn(n, n.return)
            : De(n, n.return));
        break;
      default:
        Mi(t, n);
    }
  }
  function ud(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), ud(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Vo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Jt = null,
    Ae = !1;
  function Si(t, e, n) {
    for (n = n.child; n !== null; ) cd(t, e, n), (n = n.sibling);
  }
  function cd(t, e, n) {
    if (Me && typeof Me.onCommitFiberUnmount == "function")
      try {
        Me.onCommitFiberUnmount(El, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Vt || De(n, e),
          Si(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Vt || De(n, e);
        var o = Jt,
          r = Ae;
        for (
          Jt = n.stateNode, Si(t, e, n), n = n.stateNode, e = n.attributes;
          e.length;

        )
          n.removeAttributeNode(e[0]);
        Vo(n), (Jt = o), (Ae = r);
        break;
      case 5:
        Vt || De(n, e);
      case 6:
        r = Jt;
        var h = Ae;
        if (((Jt = null), Si(t, e, n), (Jt = r), (Ae = h), Jt !== null))
          if (Ae)
            try {
              (t = Jt),
                (o = n.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(o)
                  : t.removeChild(o);
            } catch (p) {
              wt(n, e, p);
            }
          else
            try {
              Jt.removeChild(n.stateNode);
            } catch (p) {
              wt(n, e, p);
            }
        break;
      case 18:
        Jt !== null &&
          (Ae
            ? ((e = Jt),
              (n = n.stateNode),
              e.nodeType === 8
                ? Hc(e.parentNode, n)
                : e.nodeType === 1 && Hc(e, n),
              Ma(e))
            : Hc(Jt, n.stateNode));
        break;
      case 4:
        (o = Jt),
          (r = Ae),
          (Jt = n.stateNode.containerInfo),
          (Ae = !0),
          Si(t, e, n),
          (Jt = o),
          (Ae = r);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vt || Zi(2, n, e), Vt || Zi(4, n, e), Si(t, e, n);
        break;
      case 1:
        Vt ||
          (De(n, e),
          (o = n.stateNode),
          typeof o.componentWillUnmount == "function" && ed(n, e, o)),
          Si(t, e, n);
        break;
      case 21:
        Si(t, e, n);
        break;
      case 22:
        Vt || De(n, e),
          (Vt = (o = Vt) || n.memoizedState !== null),
          Si(t, e, n),
          (Vt = o);
        break;
      default:
        Si(t, e, n);
    }
  }
  function rd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ma(t);
      } catch (n) {
        wt(e, e.return, n);
      }
  }
  function Wp(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ad()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new ad()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function ic(t, e) {
    var n = Wp(t);
    e.forEach(function (o) {
      var r = uy.bind(null, t, o);
      n.has(o) || (n.add(o), o.then(r, r));
    });
  }
  function je(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var o = 0; o < n.length; o++) {
        var r = n[o],
          h = t,
          p = e,
          b = p;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
            case 5:
              (Jt = b.stateNode), (Ae = !1);
              break t;
            case 3:
              (Jt = b.stateNode.containerInfo), (Ae = !0);
              break t;
            case 4:
              (Jt = b.stateNode.containerInfo), (Ae = !0);
              break t;
          }
          b = b.return;
        }
        if (Jt === null) throw Error(s(160));
        cd(h, p, r),
          (Jt = null),
          (Ae = !1),
          (h = r.alternate),
          h !== null && (h.return = null),
          (r.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) fd(e, t), (e = e.sibling);
  }
  var Ie = null;
  function fd(t, e) {
    var n = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        je(e, t),
          Ye(t),
          o & 4 && (Zi(3, t, t.return), aa(3, t), Zi(5, t, t.return));
        break;
      case 1:
        je(e, t),
          Ye(t),
          o & 512 && (Vt || n === null || De(n, n.return)),
          o & 64 &&
            xi &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? o : n.concat(o)))));
        break;
      case 26:
        var r = Ie;
        if (
          (je(e, t),
          Ye(t),
          o & 512 && (Vt || n === null || De(n, n.return)),
          o & 4)
        ) {
          var h = n !== null ? n.memoizedState : null;
          if (((o = t.memoizedState), n === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  (o = t.type),
                    (n = t.memoizedProps),
                    (r = r.ownerDocument || r);
                  e: switch (o) {
                    case "title":
                      (h = r.getElementsByTagName("title")[0]),
                        (!h ||
                          h[Rl] ||
                          h[re] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = r.createElement(o)),
                          r.head.insertBefore(
                            h,
                            r.querySelector("head > title")
                          )),
                        ce(h, o, n),
                        (h[re] = t),
                        te(h),
                        (o = h);
                      break t;
                    case "link":
                      var p = ig("link", "href", r).get(o + (n.href || ""));
                      if (p) {
                        for (var b = 0; b < p.length; b++)
                          if (
                            ((h = p[b]),
                            h.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              h.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              h.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              h.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            p.splice(b, 1);
                            break e;
                          }
                      }
                      (h = r.createElement(o)),
                        ce(h, o, n),
                        r.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (p = ig("meta", "content", r).get(
                          o + (n.content || "")
                        ))
                      ) {
                        for (b = 0; b < p.length; b++)
                          if (
                            ((h = p[b]),
                            h.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              h.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              h.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              h.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            p.splice(b, 1);
                            break e;
                          }
                      }
                      (h = r.createElement(o)),
                        ce(h, o, n),
                        r.head.appendChild(h);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  (h[re] = t), te(h), (o = h);
                }
                t.stateNode = o;
              } else ng(r, t.type, t.stateNode);
            else t.stateNode = eg(r, o, t.memoizedProps);
          else
            h !== o
              ? (h === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : h.count--,
                o === null
                  ? ng(r, t.type, t.stateNode)
                  : eg(r, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                nd(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && t.alternate === null) {
          (r = t.stateNode), (h = t.memoizedProps);
          try {
            for (var x = r.firstChild; x; ) {
              var O = x.nextSibling,
                H = x.nodeName;
              x[Rl] ||
                H === "HEAD" ||
                H === "BODY" ||
                H === "SCRIPT" ||
                H === "STYLE" ||
                (H === "LINK" && x.rel.toLowerCase() === "stylesheet") ||
                r.removeChild(x),
                (x = O);
            }
            for (var k = t.type, R = r.attributes; R.length; )
              r.removeAttributeNode(R[0]);
            ce(r, k, h), (r[re] = t), (r[ye] = h);
          } catch (P) {
            wt(t, t.return, P);
          }
        }
      case 5:
        if (
          (je(e, t),
          Ye(t),
          o & 512 && (Vt || n === null || De(n, n.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Zn(r, "");
          } catch (P) {
            wt(t, t.return, P);
          }
        }
        o & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), nd(t, r, n !== null ? n.memoizedProps : r)),
          o & 1024 && (ec = !0);
        break;
      case 6:
        if ((je(e, t), Ye(t), o & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (o = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = o;
          } catch (P) {
            wt(t, t.return, P);
          }
        }
        break;
      case 3:
        if (
          (($s = null),
          (r = Ie),
          (Ie = Ws(e.containerInfo)),
          je(e, t),
          (Ie = r),
          Ye(t),
          o & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ma(e.containerInfo);
          } catch (P) {
            wt(t, t.return, P);
          }
        ec && ((ec = !1), hd(t));
        break;
      case 4:
        (o = Ie),
          (Ie = Ws(t.stateNode.containerInfo)),
          je(e, t),
          Ye(t),
          (Ie = o);
        break;
      case 12:
        je(e, t), Ye(t);
        break;
      case 13:
        je(e, t),
          Ye(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (fc = ii()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), ic(t, o)));
        break;
      case 22:
        if (
          (o & 512 && (Vt || n === null || De(n, n.return)),
          (x = t.memoizedState !== null),
          (O = n !== null && n.memoizedState !== null),
          (H = xi),
          (k = Vt),
          (xi = H || x),
          (Vt = k || O),
          je(e, t),
          (Vt = k),
          (xi = H),
          Ye(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          o & 8192 &&
            ((e._visibility = x ? e._visibility & -2 : e._visibility | 1),
            x && ((e = xi || Vt), n === null || O || e || cl(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                O = n = e;
                try {
                  if (((r = O.stateNode), x))
                    (h = r.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none");
                  else {
                    (p = O.stateNode), (b = O.memoizedProps.style);
                    var w =
                      b != null && b.hasOwnProperty("display")
                        ? b.display
                        : null;
                    p.style.display =
                      w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (P) {
                  wt(O, O.return, P);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                O = e;
                try {
                  O.stateNode.nodeValue = x ? "" : O.memoizedProps;
                } catch (P) {
                  wt(O, O.return, P);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((n = o.retryQueue),
            n !== null && ((o.retryQueue = null), ic(t, n))));
        break;
      case 19:
        je(e, t),
          Ye(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), ic(t, o)));
        break;
      case 21:
        break;
      default:
        je(e, t), Ye(t);
    }
  }
  function Ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (ld(n)) {
                var o = n;
                break t;
              }
              n = n.return;
            }
            throw Error(s(160));
          }
          switch (o.tag) {
            case 27:
              var r = o.stateNode,
                h = Iu(t);
              Bs(t, h, r);
              break;
            case 5:
              var p = o.stateNode;
              o.flags & 32 && (Zn(p, ""), (o.flags &= -33));
              var b = Iu(t);
              Bs(t, b, p);
              break;
            case 3:
            case 4:
              var x = o.stateNode.containerInfo,
                O = Iu(t);
              tc(t, O, x);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (H) {
        wt(t, t.return, H);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        hd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Mi(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) od(t, e.alternate, e), (e = e.sibling);
  }
  function cl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zi(4, e, e.return), cl(e);
          break;
        case 1:
          De(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && ed(e, e.return, n),
            cl(e);
          break;
        case 26:
        case 27:
        case 5:
          De(e, e.return), cl(e);
          break;
        case 22:
          De(e, e.return), e.memoizedState === null && cl(e);
          break;
        default:
          cl(e);
      }
      t = t.sibling;
    }
  }
  function Ki(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var o = e.alternate,
        r = t,
        h = e,
        p = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ki(r, h, n), aa(4, h);
          break;
        case 1:
          if (
            (Ki(r, h, n),
            (o = h),
            (r = o.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (O) {
              wt(o, o.return, O);
            }
          if (((o = h), (r = o.updateQueue), r !== null)) {
            var b = o.stateNode;
            try {
              var x = r.shared.hiddenCallbacks;
              if (x !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < x.length; r++)
                  Ph(x[r], b);
            } catch (O) {
              wt(o, o.return, O);
            }
          }
          n && p & 64 && td(h), Dn(h, h.return);
          break;
        case 26:
        case 27:
        case 5:
          Ki(r, h, n), n && o === null && p & 4 && id(h), Dn(h, h.return);
          break;
        case 12:
          Ki(r, h, n);
          break;
        case 13:
          Ki(r, h, n), n && p & 4 && rd(r, h);
          break;
        case 22:
          h.memoizedState === null && Ki(r, h, n), Dn(h, h.return);
          break;
        default:
          Ki(r, h, n);
      }
      e = e.sibling;
    }
  }
  function nc(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Wl(n));
  }
  function lc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Wl(t));
  }
  function Fi(t, e, n, o) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) dd(t, e, n, o), (e = e.sibling);
  }
  function dd(t, e, n, o) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fi(t, e, n, o), r & 2048 && aa(9, e);
        break;
      case 3:
        Fi(t, e, n, o),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Wl(t)));
        break;
      case 12:
        if (r & 2048) {
          Fi(t, e, n, o), (t = e.stateNode);
          try {
            var h = e.memoizedProps,
              p = h.id,
              b = h.onPostCommit;
            typeof b == "function" &&
              b(
                p,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (x) {
            wt(e, e.return, x);
          }
        } else Fi(t, e, n, o);
        break;
      case 23:
        break;
      case 22:
        (h = e.stateNode),
          e.memoizedState !== null
            ? h._visibility & 4
              ? Fi(t, e, n, o)
              : sa(t, e)
            : h._visibility & 4
            ? Fi(t, e, n, o)
            : ((h._visibility |= 4),
              rl(t, e, n, o, (e.subtreeFlags & 10256) !== 0)),
          r & 2048 && nc(e.alternate, e);
        break;
      case 24:
        Fi(t, e, n, o), r & 2048 && lc(e.alternate, e);
        break;
      default:
        Fi(t, e, n, o);
    }
  }
  function rl(t, e, n, o, r) {
    for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var h = t,
        p = e,
        b = n,
        x = o,
        O = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          rl(h, p, b, x, r), aa(8, p);
          break;
        case 23:
          break;
        case 22:
          var H = p.stateNode;
          p.memoizedState !== null
            ? H._visibility & 4
              ? rl(h, p, b, x, r)
              : sa(h, p)
            : ((H._visibility |= 4), rl(h, p, b, x, r)),
            r && O & 2048 && nc(p.alternate, p);
          break;
        case 24:
          rl(h, p, b, x, r), r && O & 2048 && lc(p.alternate, p);
          break;
        default:
          rl(h, p, b, x, r);
      }
      e = e.sibling;
    }
  }
  function sa(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          o = e,
          r = o.flags;
        switch (o.tag) {
          case 22:
            sa(n, o), r & 2048 && nc(o.alternate, o);
            break;
          case 24:
            sa(n, o), r & 2048 && lc(o.alternate, o);
            break;
          default:
            sa(n, o);
        }
        e = e.sibling;
      }
  }
  var oa = 8192;
  function fl(t) {
    if (t.subtreeFlags & oa)
      for (t = t.child; t !== null; ) gd(t), (t = t.sibling);
  }
  function gd(t) {
    switch (t.tag) {
      case 26:
        fl(t),
          t.flags & oa &&
            t.memoizedState !== null &&
            ky(Ie, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        fl(t);
        break;
      case 3:
      case 4:
        var e = Ie;
        (Ie = Ws(t.stateNode.containerInfo)), fl(t), (Ie = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = oa), (oa = 16777216), fl(t), (oa = e))
            : fl(t));
        break;
      default:
        fl(t);
    }
  }
  function md(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ua(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (ie = o), yd(o, t);
        }
      md(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) pd(t), (t = t.sibling);
  }
  function pd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ua(t), t.flags & 2048 && Zi(9, t, t.return);
        break;
      case 3:
        ua(t);
        break;
      case 12:
        ua(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), Ls(t))
          : ua(t);
        break;
      default:
        ua(t);
    }
  }
  function Ls(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (ie = o), yd(o, t);
        }
      md(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Zi(8, e, e.return), Ls(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), Ls(e));
          break;
        default:
          Ls(e);
      }
      t = t.sibling;
    }
  }
  function yd(t, e) {
    for (; ie !== null; ) {
      var n = ie;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Zi(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var o = n.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Wl(n.memoizedState.cache);
      }
      if (((o = n.child), o !== null)) (o.return = n), (ie = o);
      else
        t: for (n = t; ie !== null; ) {
          o = ie;
          var r = o.sibling,
            h = o.return;
          if ((ud(o), o === n)) {
            ie = null;
            break t;
          }
          if (r !== null) {
            (r.return = h), (ie = r);
            break t;
          }
          ie = h;
        }
    }
  }
  function Jp(t, e, n, o) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ve(t, e, n, o) {
    return new Jp(t, e, n, o);
  }
  function ac(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Wi(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ve(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 31457280),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function bd(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ns(t, e, n, o, r, h) {
    var p = 0;
    if (((o = t), typeof t == "function")) ac(t) && (p = 1);
    else if (typeof t == "string")
      p = Ly(t, n, lt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case g:
          return An(n.children, r, h, e);
        case m:
          (p = 8), (r |= 24);
          break;
        case y:
          return (
            (t = Ve(12, n, e, r | 2)), (t.elementType = y), (t.lanes = h), t
          );
        case A:
          return (t = Ve(13, n, e, r)), (t.elementType = A), (t.lanes = h), t;
        case E:
          return (t = Ve(19, n, e, r)), (t.elementType = E), (t.lanes = h), t;
        case Q:
          return vd(n, r, h, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case v:
              case S:
                p = 10;
                break t;
              case _:
                p = 9;
                break t;
              case D:
                p = 11;
                break t;
              case B:
                p = 14;
                break t;
              case V:
                (p = 16), (o = null);
                break t;
            }
          (p = 29),
            (n = Error(s(130, t === null ? "null" : typeof t, ""))),
            (o = null);
      }
    return (
      (e = Ve(p, n, e, r)), (e.elementType = t), (e.type = o), (e.lanes = h), e
    );
  }
  function An(t, e, n, o) {
    return (t = Ve(7, t, o, e)), (t.lanes = n), t;
  }
  function vd(t, e, n, o) {
    (t = Ve(22, t, o, e)), (t.elementType = Q), (t.lanes = n);
    var r = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var h = r._current;
        if (h === null) throw Error(s(456));
        if ((r._pendingVisibility & 2) === 0) {
          var p = ki(h, 2);
          p !== null && ((r._pendingVisibility |= 2), pe(p, h, 2));
        }
      },
      attach: function () {
        var h = r._current;
        if (h === null) throw Error(s(456));
        if ((r._pendingVisibility & 2) !== 0) {
          var p = ki(h, 2);
          p !== null && ((r._pendingVisibility &= -3), pe(p, h, 2));
        }
      },
    };
    return (t.stateNode = r), t;
  }
  function sc(t, e, n) {
    return (t = Ve(6, t, null, e)), (t.lanes = n), t;
  }
  function oc(t, e, n) {
    return (
      (e = Ve(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function Ti(t) {
    t.flags |= 4;
  }
  function _d(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !lg(e))) {
      if (
        ((e = Ue.current),
        e !== null &&
          ((vt & 4194176) === vt
            ? li !== null
            : ((vt & 62914560) !== vt && (vt & 536870912) === 0) || e !== li))
      )
        throw ((Zl = hu), kf);
      t.flags |= 8192;
    }
  }
  function ks(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? kr() : 536870912), (t.lanes |= e), (dl |= e));
  }
  function ca(t, e) {
    if (!Mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var o = null; n !== null; )
            n.alternate !== null && (o = n), (n = n.sibling);
          o === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      o = 0;
    if (e)
      for (var r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (o |= r.subtreeFlags & 31457280),
          (o |= r.flags & 31457280),
          (r.return = t),
          (r = r.sibling);
    else
      for (r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (o |= r.subtreeFlags),
          (o |= r.flags),
          (r.return = t),
          (r = r.sibling);
    return (t.subtreeFlags |= o), (t.childLanes = n), e;
  }
  function $p(t, e, n) {
    var o = e.pendingProps;
    switch ((ru(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return jt(e), null;
      case 1:
        return jt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          e.memoizedState.cache !== o && (e.flags |= 2048),
          _i(Pt),
          It(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (ql(e)
              ? Ti(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Pe !== null && (mc(Pe), (Pe = null)))),
          jt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (Ti(e),
              n !== null ? (jt(e), _d(e, n)) : (jt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (Ti(e), jt(e), _d(e, n))
              : (jt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== o && Ti(e), jt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ce(e), (n = Rt.current);
        var r = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== o && Ti(e);
        else {
          if (!o) {
            if (e.stateNode === null) throw Error(s(166));
            return jt(e), null;
          }
          (t = lt.current),
            ql(e) ? Lf(e) : ((t = Jd(r, o, n)), (e.stateNode = t), Ti(e));
        }
        return jt(e), null;
      case 5:
        if ((Ce(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== o && Ti(e);
        else {
          if (!o) {
            if (e.stateNode === null) throw Error(s(166));
            return jt(e), null;
          }
          if (((t = lt.current), ql(e))) Lf(e);
          else {
            switch (((r = Fs(Rt.current)), t)) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = r.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof o.is == "string"
                        ? r.createElement("select", { is: o.is })
                        : r.createElement("select")),
                      o.multiple
                        ? (t.multiple = !0)
                        : o.size && (t.size = o.size);
                    break;
                  default:
                    t =
                      typeof o.is == "string"
                        ? r.createElement(n, { is: o.is })
                        : r.createElement(n);
                }
            }
            (t[re] = e), (t[ye] = o);
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            e.stateNode = t;
            t: switch ((ce(t, n, o), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ti(e);
          }
        }
        return jt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== o && Ti(e);
        else {
          if (typeof o != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = Rt.current), ql(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (o = null),
              (r = me),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  o = r.memoizedProps;
              }
            (t[re] = e),
              (t = !!(
                t.nodeValue === n ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Gd(t.nodeValue, n)
              )),
              t || yn(e);
          } else (t = Fs(t).createTextNode(o)), (t[re] = e), (e.stateNode = t);
        }
        return jt(e), null;
      case 13:
        if (
          ((o = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = ql(e)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(s(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(s(317));
              r[re] = e;
            } else
              Xl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            jt(e), (r = !1);
          } else Pe !== null && (mc(Pe), (Pe = null)), (r = !0);
          if (!r) return e.flags & 256 ? (pi(e), e) : (pi(e), null);
        }
        if ((pi(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = o !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (o = e.child),
            (r = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (r = o.alternate.memoizedState.cachePool.pool);
          var h = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (h = o.memoizedState.cachePool.pool),
            h !== r && (o.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          ks(e, e.updateQueue),
          jt(e),
          null
        );
      case 4:
        return It(), t === null && Dc(e.stateNode.containerInfo), jt(e), null;
      case 10:
        return _i(e.type), jt(e), null;
      case 19:
        if ((Ut($t), (r = e.memoizedState), r === null)) return jt(e), null;
        if (((o = (e.flags & 128) !== 0), (h = r.rendering), h === null))
          if (o) ca(r, !1);
          else {
            if (qt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((h = _s(t)), h !== null)) {
                  for (
                    e.flags |= 128,
                      ca(r, !1),
                      t = h.updateQueue,
                      e.updateQueue = t,
                      ks(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    bd(n, t), (n = n.sibling);
                  return q($t, ($t.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            r.tail !== null &&
              ii() > Us &&
              ((e.flags |= 128), (o = !0), ca(r, !1), (e.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = _s(h)), t !== null)) {
              if (
                ((e.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ks(e, t),
                ca(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !h.alternate &&
                  !Mt)
              )
                return jt(e), null;
            } else
              2 * ii() - r.renderingStartTime > Us &&
                n !== 536870912 &&
                ((e.flags |= 128), (o = !0), ca(r, !1), (e.lanes = 4194304));
          r.isBackwards
            ? ((h.sibling = e.child), (e.child = h))
            : ((t = r.last),
              t !== null ? (t.sibling = h) : (e.child = h),
              (r.last = h));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = ii()),
            (e.sibling = null),
            (t = $t.current),
            q($t, o ? (t & 1) | 2 : t & 1),
            e)
          : (jt(e), null);
      case 22:
      case 23:
        return (
          pi(e),
          gu(),
          (o = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (e.flags |= 8192)
            : o && (e.flags |= 8192),
          o
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (jt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : jt(e),
          (n = e.updateQueue),
          n !== null && ks(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (o = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (o = e.memoizedState.cachePool.pool),
          o !== n && (e.flags |= 2048),
          t !== null && Ut(vn),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          _i(Pt),
          jt(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function Pp(t, e) {
    switch ((ru(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          _i(Pt),
          It(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ce(e), null;
      case 13:
        if (
          (pi(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          Xl();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Ut($t), null;
      case 4:
        return It(), null;
      case 10:
        return _i(e.type), null;
      case 22:
      case 23:
        return (
          pi(e),
          gu(),
          t !== null && Ut(vn),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return _i(Pt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xd(t, e) {
    switch ((ru(e), e.tag)) {
      case 3:
        _i(Pt), It();
        break;
      case 26:
      case 27:
      case 5:
        Ce(e);
        break;
      case 4:
        It();
        break;
      case 13:
        pi(e);
        break;
      case 19:
        Ut($t);
        break;
      case 10:
        _i(e.type);
        break;
      case 22:
      case 23:
        pi(e), gu(), t !== null && Ut(vn);
        break;
      case 24:
        _i(Pt);
    }
  }
  var Ip = {
      getCacheForType: function (t) {
        var e = fe(Pt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    ty = typeof WeakMap == "function" ? WeakMap : Map,
    Yt = 0,
    Bt = null,
    pt = null,
    vt = 0,
    Lt = 0,
    Ee = null,
    Oi = !1,
    hl = !1,
    uc = !1,
    Di = 0,
    qt = 0,
    Ji = 0,
    En = 0,
    cc = 0,
    qe = 0,
    dl = 0,
    ra = null,
    si = null,
    rc = !1,
    fc = 0,
    Us = 1 / 0,
    js = null,
    $i = null,
    Ys = !1,
    zn = null,
    fa = 0,
    hc = 0,
    dc = null,
    ha = 0,
    gc = null;
  function ze() {
    if ((Yt & 2) !== 0 && vt !== 0) return vt & -vt;
    if (Y.T !== null) {
      var t = ll;
      return t !== 0 ? t : Sc();
    }
    return Vr();
  }
  function Sd() {
    qe === 0 && (qe = (vt & 536870912) === 0 || Mt ? Nr() : 536870912);
    var t = Ue.current;
    return t !== null && (t.flags |= 32), qe;
  }
  function pe(t, e, n) {
    ((t === Bt && Lt === 2) || t.cancelPendingCommit !== null) &&
      (gl(t, 0), Ai(t, vt, qe, !1)),
      Cl(t, n),
      ((Yt & 2) === 0 || t !== Bt) &&
        (t === Bt &&
          ((Yt & 2) === 0 && (En |= n), qt === 4 && Ai(t, vt, qe, !1)),
        oi(t));
  }
  function Md(t, e, n) {
    if ((Yt & 6) !== 0) throw Error(s(327));
    var o = (!n && (e & 60) === 0 && (e & t.expiredLanes) === 0) || zl(t, e),
      r = o ? ny(t, e) : bc(t, e, !0),
      h = o;
    do {
      if (r === 0) {
        hl && !o && Ai(t, e, 0, !1);
        break;
      } else if (r === 6) Ai(t, e, 0, !Oi);
      else {
        if (((n = t.current.alternate), h && !ey(n))) {
          (r = bc(t, e, !1)), (h = !1);
          continue;
        }
        if (r === 2) {
          if (((h = e), t.errorRecoveryDisabledLanes & h)) var p = 0;
          else
            (p = t.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            e = p;
            t: {
              var b = t;
              r = ra;
              var x = b.current.memoizedState.isDehydrated;
              if ((x && (gl(b, p).flags |= 256), (p = bc(b, p, !1)), p !== 2)) {
                if (uc && !x) {
                  (b.errorRecoveryDisabledLanes |= h), (En |= h), (r = 4);
                  break t;
                }
                (h = si), (si = r), h !== null && mc(h);
              }
              r = p;
            }
            if (((h = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          gl(t, 0), Ai(t, e, 0, !0);
          break;
        }
        t: {
          switch (((o = t), r)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194176) === e) {
                Ai(o, e, qe, !Oi);
                break t;
              }
              break;
            case 2:
              si = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((o.finishedWork = n),
            (o.finishedLanes = e),
            (e & 62914560) === e && ((h = fc + 300 - ii()), 10 < h))
          ) {
            if ((Ai(o, e, qe, !Oi), Ia(o, 0) !== 0)) break t;
            o.timeoutHandle = Kd(
              Td.bind(null, o, n, si, js, rc, e, qe, En, dl, Oi, 2, -0, 0),
              h
            );
            break t;
          }
          Td(o, n, si, js, rc, e, qe, En, dl, Oi, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    oi(t);
  }
  function mc(t) {
    si === null ? (si = t) : si.push.apply(si, t);
  }
  function Td(t, e, n, o, r, h, p, b, x, O, H, k, R) {
    var w = e.subtreeFlags;
    if (
      (w & 8192 || (w & 16785408) === 16785408) &&
      ((ba = { stylesheets: null, count: 0, unsuspend: Ny }),
      gd(e),
      (e = Uy()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(Rd.bind(null, t, n, o, r, p, b, x, 1, k, R))),
        Ai(t, h, p, !O);
      return;
    }
    Rd(t, n, o, r, p, b, x, H, k, R);
  }
  function ey(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var o = 0; o < n.length; o++) {
          var r = n[o],
            h = r.getSnapshot;
          r = r.value;
          try {
            if (!Oe(h(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Ai(t, e, n, o) {
    (e &= ~cc),
      (e &= ~En),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      o && (t.warmLanes |= e),
      (o = t.expirationTimes);
    for (var r = e; 0 < r; ) {
      var h = 31 - Te(r),
        p = 1 << h;
      (o[h] = -1), (r &= ~p);
    }
    n !== 0 && Ur(t, n, e);
  }
  function Vs() {
    return (Yt & 6) === 0 ? (da(0), !1) : !0;
  }
  function pc() {
    if (pt !== null) {
      if (Lt === 0) var t = pt.return;
      else (t = pt), (vi = Tn = null), Su(t), (il = null), (Kl = 0), (t = pt);
      for (; t !== null; ) xd(t.alternate, t), (t = t.return);
      pt = null;
    }
  }
  function gl(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), _y(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      pc(),
      (Bt = t),
      (pt = n = Wi(t.current, null)),
      (vt = e),
      (Lt = 0),
      (Ee = null),
      (Oi = !1),
      (hl = zl(t, e)),
      (uc = !1),
      (dl = qe = cc = En = Ji = qt = 0),
      (si = ra = null),
      (rc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= e; 0 < o; ) {
        var r = 31 - Te(o),
          h = 1 << r;
        (e |= t[r]), (o &= ~h);
      }
    return (Di = e), fs(), n;
  }
  function Od(t, e) {
    (dt = null),
      (Y.H = ai),
      e === Ql
        ? ((e = Yf()), (Lt = 3))
        : e === kf
        ? ((e = Yf()), (Lt = 4))
        : (Lt =
            e === Uh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ee = e),
      pt === null && ((qt = 1), Rs(t, Le(e, t.current)));
  }
  function Dd() {
    var t = Y.H;
    return (Y.H = ai), t === null ? ai : t;
  }
  function Ad() {
    var t = Y.A;
    return (Y.A = Ip), t;
  }
  function yc() {
    (qt = 4),
      Oi || ((vt & 4194176) !== vt && Ue.current !== null) || (hl = !0),
      ((Ji & 134217727) === 0 && (En & 134217727) === 0) ||
        Bt === null ||
        Ai(Bt, vt, qe, !1);
  }
  function bc(t, e, n) {
    var o = Yt;
    Yt |= 2;
    var r = Dd(),
      h = Ad();
    (Bt !== t || vt !== e) && ((js = null), gl(t, e)), (e = !1);
    var p = qt;
    t: do
      try {
        if (Lt !== 0 && pt !== null) {
          var b = pt,
            x = Ee;
          switch (Lt) {
            case 8:
              pc(), (p = 6);
              break t;
            case 3:
            case 2:
            case 6:
              Ue.current === null && (e = !0);
              var O = Lt;
              if (((Lt = 0), (Ee = null), ml(t, b, x, O), n && hl)) {
                p = 0;
                break t;
              }
              break;
            default:
              (O = Lt), (Lt = 0), (Ee = null), ml(t, b, x, O);
          }
        }
        iy(), (p = qt);
        break;
      } catch (H) {
        Od(t, H);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (vi = Tn = null),
      (Yt = o),
      (Y.H = r),
      (Y.A = h),
      pt === null && ((Bt = null), (vt = 0), fs()),
      p
    );
  }
  function iy() {
    for (; pt !== null; ) Ed(pt);
  }
  function ny(t, e) {
    var n = Yt;
    Yt |= 2;
    var o = Dd(),
      r = Ad();
    Bt !== t || vt !== e
      ? ((js = null), (Us = ii() + 500), gl(t, e))
      : (hl = zl(t, e));
    t: do
      try {
        if (Lt !== 0 && pt !== null) {
          e = pt;
          var h = Ee;
          e: switch (Lt) {
            case 1:
              (Lt = 0), (Ee = null), ml(t, e, h, 1);
              break;
            case 2:
              if (Uf(h)) {
                (Lt = 0), (Ee = null), zd(e);
                break;
              }
              (e = function () {
                Lt === 2 && Bt === t && (Lt = 7), oi(t);
              }),
                h.then(e, e);
              break t;
            case 3:
              Lt = 7;
              break t;
            case 4:
              Lt = 5;
              break t;
            case 7:
              Uf(h)
                ? ((Lt = 0), (Ee = null), zd(e))
                : ((Lt = 0), (Ee = null), ml(t, e, h, 7));
              break;
            case 5:
              var p = null;
              switch (pt.tag) {
                case 26:
                  p = pt.memoizedState;
                case 5:
                case 27:
                  var b = pt;
                  if (!p || lg(p)) {
                    (Lt = 0), (Ee = null);
                    var x = b.sibling;
                    if (x !== null) pt = x;
                    else {
                      var O = b.return;
                      O !== null ? ((pt = O), qs(O)) : (pt = null);
                    }
                    break e;
                  }
              }
              (Lt = 0), (Ee = null), ml(t, e, h, 5);
              break;
            case 6:
              (Lt = 0), (Ee = null), ml(t, e, h, 6);
              break;
            case 8:
              pc(), (qt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        ly();
        break;
      } catch (H) {
        Od(t, H);
      }
    while (!0);
    return (
      (vi = Tn = null),
      (Y.H = o),
      (Y.A = r),
      (Yt = n),
      pt !== null ? 0 : ((Bt = null), (vt = 0), fs(), qt)
    );
  }
  function ly() {
    for (; pt !== null && !Uo(); ) Ed(pt);
  }
  function Ed(t) {
    var e = Jh(t.alternate, t, Di);
    (t.memoizedProps = t.pendingProps), e === null ? qs(t) : (pt = e);
  }
  function zd(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Gh(n, e, e.pendingProps, e.type, void 0, vt);
        break;
      case 11:
        e = Gh(n, e, e.pendingProps, e.type.render, e.ref, vt);
        break;
      case 5:
        Su(e);
      default:
        xd(n, e), (e = pt = bd(e, Di)), (e = Jh(n, e, Di));
    }
    (t.memoizedProps = t.pendingProps), e === null ? qs(t) : (pt = e);
  }
  function ml(t, e, n, o) {
    (vi = Tn = null), Su(e), (il = null), (Kl = 0);
    var r = e.return;
    try {
      if (Zp(t, r, e, n, vt)) {
        (qt = 1), Rs(t, Le(n, t.current)), (pt = null);
        return;
      }
    } catch (h) {
      if (r !== null) throw ((pt = r), h);
      (qt = 1), Rs(t, Le(n, t.current)), (pt = null);
      return;
    }
    e.flags & 32768
      ? (Mt || o === 1
          ? (t = !0)
          : hl || (vt & 536870912) !== 0
          ? (t = !1)
          : ((Oi = t = !0),
            (o === 2 || o === 3 || o === 6) &&
              ((o = Ue.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        Cd(e, t))
      : qs(e);
  }
  function qs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Cd(e, Oi);
        return;
      }
      t = e.return;
      var n = $p(e.alternate, e, Di);
      if (n !== null) {
        pt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    qt === 0 && (qt = 5);
  }
  function Cd(t, e) {
    do {
      var n = Pp(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (pt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        pt = t;
        return;
      }
      pt = t = n;
    } while (t !== null);
    (qt = 6), (pt = null);
  }
  function Rd(t, e, n, o, r, h, p, b, x, O) {
    var H = Y.T,
      k = G.p;
    try {
      (G.p = 2), (Y.T = null), ay(t, e, n, o, k, r, h, p, b, x, O);
    } finally {
      (Y.T = H), (G.p = k);
    }
  }
  function ay(t, e, n, o, r, h, p, b) {
    do pl();
    while (zn !== null);
    if ((Yt & 6) !== 0) throw Error(s(327));
    var x = t.finishedWork;
    if (((o = t.finishedLanes), x === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), x === t.current))
      throw Error(s(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var O = x.lanes | x.childLanes;
    if (
      ((O |= ou),
      k0(t, o, O, h, p, b),
      t === Bt && ((pt = Bt = null), (vt = 0)),
      ((x.subtreeFlags & 10256) === 0 && (x.flags & 10256) === 0) ||
        Ys ||
        ((Ys = !0),
        (hc = O),
        (dc = n),
        cy(Ja, function () {
          return pl(), null;
        })),
      (n = (x.flags & 15990) !== 0),
      (x.subtreeFlags & 15990) !== 0 || n
        ? ((n = Y.T),
          (Y.T = null),
          (h = G.p),
          (G.p = 2),
          (p = Yt),
          (Yt |= 4),
          Fp(t, x),
          fd(x, t),
          zp(Cc, t.containerInfo),
          (to = !!zc),
          (Cc = zc = null),
          (t.current = x),
          od(t, x.alternate, x),
          A0(),
          (Yt = p),
          (G.p = h),
          (Y.T = n))
        : (t.current = x),
      Ys ? ((Ys = !1), (zn = t), (fa = o)) : wd(t, O),
      (O = t.pendingLanes),
      O === 0 && ($i = null),
      w0(x.stateNode),
      oi(t),
      e !== null)
    )
      for (r = t.onRecoverableError, x = 0; x < e.length; x++)
        (O = e[x]), r(O.value, { componentStack: O.stack });
    return (
      (fa & 3) !== 0 && pl(),
      (O = t.pendingLanes),
      (o & 4194218) !== 0 && (O & 42) !== 0
        ? t === gc
          ? ha++
          : ((ha = 0), (gc = t))
        : (ha = 0),
      da(0),
      null
    );
  }
  function wd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Wl(e)));
  }
  function pl() {
    if (zn !== null) {
      var t = zn,
        e = hc;
      hc = 0;
      var n = Yr(fa),
        o = Y.T,
        r = G.p;
      try {
        if (((G.p = 32 > n ? 32 : n), (Y.T = null), zn === null)) var h = !1;
        else {
          (n = dc), (dc = null);
          var p = zn,
            b = fa;
          if (((zn = null), (fa = 0), (Yt & 6) !== 0)) throw Error(s(331));
          var x = Yt;
          if (
            ((Yt |= 4),
            pd(p.current),
            dd(p, p.current, b, n),
            (Yt = x),
            da(0, !1),
            Me && typeof Me.onPostCommitFiberRoot == "function")
          )
            try {
              Me.onPostCommitFiberRoot(El, p);
            } catch {}
          h = !0;
        }
        return h;
      } finally {
        (G.p = r), (Y.T = o), wd(t, e);
      }
    }
    return !1;
  }
  function Hd(t, e, n) {
    (e = Le(n, e)),
      (e = Nu(t.stateNode, e, 2)),
      (t = Qi(t, e, 2)),
      t !== null && (Cl(t, 2), oi(t));
  }
  function wt(t, e, n) {
    if (t.tag === 3) Hd(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Hd(e, t, n);
          break;
        } else if (e.tag === 1) {
          var o = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              ($i === null || !$i.has(o)))
          ) {
            (t = Le(n, t)),
              (n = Nh(2)),
              (o = Qi(e, n, 2)),
              o !== null && (kh(n, o, e, t), Cl(o, 2), oi(o));
            break;
          }
        }
        e = e.return;
      }
  }
  function vc(t, e, n) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new ty();
      var r = new Set();
      o.set(e, r);
    } else (r = o.get(e)), r === void 0 && ((r = new Set()), o.set(e, r));
    r.has(n) ||
      ((uc = !0), r.add(n), (t = sy.bind(null, t, e, n)), e.then(t, t));
  }
  function sy(t, e, n) {
    var o = t.pingCache;
    o !== null && o.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Bt === t &&
        (vt & n) === n &&
        (qt === 4 || (qt === 3 && (vt & 62914560) === vt && 300 > ii() - fc)
          ? (Yt & 2) === 0 && gl(t, 0)
          : (cc |= n),
        dl === vt && (dl = 0)),
      oi(t);
  }
  function Bd(t, e) {
    e === 0 && (e = kr()), (t = ki(t, e)), t !== null && (Cl(t, e), oi(t));
  }
  function oy(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Bd(t, n);
  }
  function uy(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(e), Bd(t, n);
  }
  function cy(t, e) {
    return Qt(t, e);
  }
  var Xs = null,
    yl = null,
    _c = !1,
    Gs = !1,
    xc = !1,
    Cn = 0;
  function oi(t) {
    t !== yl &&
      t.next === null &&
      (yl === null ? (Xs = yl = t) : (yl = yl.next = t)),
      (Gs = !0),
      _c || ((_c = !0), fy(ry));
  }
  function da(t, e) {
    if (!xc && Gs) {
      xc = !0;
      do
        for (var n = !1, o = Xs; o !== null; ) {
          if (t !== 0) {
            var r = o.pendingLanes;
            if (r === 0) var h = 0;
            else {
              var p = o.suspendedLanes,
                b = o.pingedLanes;
              (h = (1 << (31 - Te(42 | t) + 1)) - 1),
                (h &= r & ~(p & ~b)),
                (h = h & 201326677 ? (h & 201326677) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((n = !0), kd(o, h));
          } else
            (h = vt),
              (h = Ia(o, o === Bt ? h : 0)),
              (h & 3) === 0 || zl(o, h) || ((n = !0), kd(o, h));
          o = o.next;
        }
      while (n);
      xc = !1;
    }
  }
  function ry() {
    Gs = _c = !1;
    var t = 0;
    Cn !== 0 && (vy() && (t = Cn), (Cn = 0));
    for (var e = ii(), n = null, o = Xs; o !== null; ) {
      var r = o.next,
        h = Ld(o, e);
      h === 0
        ? ((o.next = null),
          n === null ? (Xs = r) : (n.next = r),
          r === null && (yl = n))
        : ((n = o), (t !== 0 || (h & 3) !== 0) && (Gs = !0)),
        (o = r);
    }
    da(t);
  }
  function Ld(t, e) {
    for (
      var n = t.suspendedLanes,
        o = t.pingedLanes,
        r = t.expirationTimes,
        h = t.pendingLanes & -62914561;
      0 < h;

    ) {
      var p = 31 - Te(h),
        b = 1 << p,
        x = r[p];
      x === -1
        ? ((b & n) === 0 || (b & o) !== 0) && (r[p] = N0(b, e))
        : x <= e && (t.expiredLanes |= b),
        (h &= ~b);
    }
    if (
      ((e = Bt),
      (n = vt),
      (n = Ia(t, t === e ? n : 0)),
      (o = t.callbackNode),
      n === 0 || (t === e && Lt === 2) || t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Re(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || zl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((o !== null && Re(o), Yr(n))) {
        case 2:
        case 8:
          n = Br;
          break;
        case 32:
          n = Ja;
          break;
        case 268435456:
          n = Lr;
          break;
        default:
          n = Ja;
      }
      return (
        (o = Nd.bind(null, t)),
        (n = Qt(n, o)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      o !== null && o !== null && Re(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Nd(t, e) {
    var n = t.callbackNode;
    if (pl() && t.callbackNode !== n) return null;
    var o = vt;
    return (
      (o = Ia(t, t === Bt ? o : 0)),
      o === 0
        ? null
        : (Md(t, o, e),
          Ld(t, ii()),
          t.callbackNode != null && t.callbackNode === n
            ? Nd.bind(null, t)
            : null)
    );
  }
  function kd(t, e) {
    if (pl()) return null;
    Md(t, e, !0);
  }
  function fy(t) {
    xy(function () {
      (Yt & 6) !== 0 ? Qt(Hr, t) : t();
    });
  }
  function Sc() {
    return Cn === 0 && (Cn = Nr()), Cn;
  }
  function Ud(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ls("" + t);
  }
  function jd(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function hy(t, e, n, o, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var h = Ud((r[ye] || null).action),
        p = o.submitter;
      p &&
        ((e = (e = p[ye] || null)
          ? Ud(e.formAction)
          : p.getAttribute("formAction")),
        e !== null && ((h = e), (p = null)));
      var b = new us("action", "action", null, o, r);
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Cn !== 0) {
                  var x = p ? jd(r, p) : new FormData(r);
                  Ru(
                    n,
                    { pending: !0, data: x, method: r.method, action: h },
                    null,
                    x
                  );
                }
              } else
                typeof h == "function" &&
                  (b.preventDefault(),
                  (x = p ? jd(r, p) : new FormData(r)),
                  Ru(
                    n,
                    { pending: !0, data: x, method: r.method, action: h },
                    h,
                    x
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Mc = 0; Mc < Rf.length; Mc++) {
    var Tc = Rf[Mc],
      dy = Tc.toLowerCase(),
      gy = Tc[0].toUpperCase() + Tc.slice(1);
    $e(dy, "on" + gy);
  }
  $e(Df, "onAnimationEnd"),
    $e(Af, "onAnimationIteration"),
    $e(Ef, "onAnimationStart"),
    $e("dblclick", "onDoubleClick"),
    $e("focusin", "onFocus"),
    $e("focusout", "onBlur"),
    $e(Rp, "onTransitionRun"),
    $e(wp, "onTransitionStart"),
    $e(Hp, "onTransitionCancel"),
    $e(zf, "onTransitionEnd"),
    Gn("onMouseEnter", ["mouseout", "mouseover"]),
    Gn("onMouseLeave", ["mouseout", "mouseover"]),
    Gn("onPointerEnter", ["pointerout", "pointerover"]),
    Gn("onPointerLeave", ["pointerout", "pointerover"]),
    fn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    fn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    fn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    fn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    fn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ga =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    my = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ga)
    );
  function Yd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var o = t[n],
        r = o.event;
      o = o.listeners;
      t: {
        var h = void 0;
        if (e)
          for (var p = o.length - 1; 0 <= p; p--) {
            var b = o[p],
              x = b.instance,
              O = b.currentTarget;
            if (((b = b.listener), x !== h && r.isPropagationStopped()))
              break t;
            (h = b), (r.currentTarget = O);
            try {
              h(r);
            } catch (H) {
              Cs(H);
            }
            (r.currentTarget = null), (h = x);
          }
        else
          for (p = 0; p < o.length; p++) {
            if (
              ((b = o[p]),
              (x = b.instance),
              (O = b.currentTarget),
              (b = b.listener),
              x !== h && r.isPropagationStopped())
            )
              break t;
            (h = b), (r.currentTarget = O);
            try {
              h(r);
            } catch (H) {
              Cs(H);
            }
            (r.currentTarget = null), (h = x);
          }
      }
    }
  }
  function bt(t, e) {
    var n = e[Yo];
    n === void 0 && (n = e[Yo] = new Set());
    var o = t + "__bubble";
    n.has(o) || (Vd(e, t, 2, !1), n.add(o));
  }
  function Oc(t, e, n) {
    var o = 0;
    e && (o |= 4), Vd(n, t, o, e);
  }
  var Qs = "_reactListening" + Math.random().toString(36).slice(2);
  function Dc(t) {
    if (!t[Qs]) {
      (t[Qs] = !0),
        Xr.forEach(function (n) {
          n !== "selectionchange" && (my.has(n) || Oc(n, !1, t), Oc(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qs] || ((e[Qs] = !0), Oc("selectionchange", !1, e));
    }
  }
  function Vd(t, e, n, o) {
    switch (rg(e)) {
      case 2:
        var r = Vy;
        break;
      case 8:
        r = qy;
        break;
      default:
        r = jc;
    }
    (n = r.bind(null, e, n, t)),
      (r = void 0),
      !Fo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      o
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
  }
  function Ac(t, e, n, o, r) {
    var h = o;
    if ((e & 1) === 0 && (e & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var p = o.tag;
        if (p === 3 || p === 4) {
          var b = o.stateNode.containerInfo;
          if (b === r || (b.nodeType === 8 && b.parentNode === r)) break;
          if (p === 4)
            for (p = o.return; p !== null; ) {
              var x = p.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = p.stateNode.containerInfo),
                x === r || (x.nodeType === 8 && x.parentNode === r))
              )
                return;
              p = p.return;
            }
          for (; b !== null; ) {
            if (((p = rn(b)), p === null)) return;
            if (((x = p.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              o = h = p;
              continue t;
            }
            b = b.parentNode;
          }
        }
        o = o.return;
      }
    ef(function () {
      var O = h,
        H = Zo(n),
        k = [];
      t: {
        var R = Cf.get(t);
        if (R !== void 0) {
          var w = us,
            P = t;
          switch (t) {
            case "keypress":
              if (ss(n) === 0) break t;
            case "keydown":
            case "keyup":
              w = up;
              break;
            case "focusin":
              (P = "focus"), (w = Po);
              break;
            case "focusout":
              (P = "blur"), (w = Po);
              break;
            case "beforeblur":
            case "afterblur":
              w = Po;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = af;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = J0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = fp;
              break;
            case Df:
            case Af:
            case Ef:
              w = I0;
              break;
            case zf:
              w = dp;
              break;
            case "scroll":
            case "scrollend":
              w = F0;
              break;
            case "wheel":
              w = mp;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = ep;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = of;
              break;
            case "toggle":
            case "beforetoggle":
              w = yp;
          }
          var ut = (e & 4) !== 0,
            Xt = !ut && (t === "scroll" || t === "scrollend"),
            z = ut ? (R !== null ? R + "Capture" : null) : R;
          ut = [];
          for (var T = O, C; T !== null; ) {
            var N = T;
            if (
              ((C = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                C === null ||
                z === null ||
                ((N = Hl(T, z)), N != null && ut.push(ma(T, N, C))),
              Xt)
            )
              break;
            T = T.return;
          }
          0 < ut.length &&
            ((R = new w(R, P, null, n, H)),
            k.push({ event: R, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (w = t === "mouseout" || t === "pointerout"),
            R &&
              n !== Qo &&
              (P = n.relatedTarget || n.fromElement) &&
              (rn(P) || P[Vn]))
          )
            break t;
          if (
            (w || R) &&
            ((R =
              H.window === H
                ? H
                : (R = H.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            w
              ? ((P = n.relatedTarget || n.toElement),
                (w = O),
                (P = P ? rn(P) : null),
                P !== null &&
                  ((Xt = et(P)),
                  (ut = P.tag),
                  P !== Xt || (ut !== 5 && ut !== 27 && ut !== 6)) &&
                  (P = null))
              : ((w = null), (P = O)),
            w !== P)
          ) {
            if (
              ((ut = af),
              (N = "onMouseLeave"),
              (z = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ut = of),
                (N = "onPointerLeave"),
                (z = "onPointerEnter"),
                (T = "pointer")),
              (Xt = w == null ? R : wl(w)),
              (C = P == null ? R : wl(P)),
              (R = new ut(N, T + "leave", w, n, H)),
              (R.target = Xt),
              (R.relatedTarget = C),
              (N = null),
              rn(H) === O &&
                ((ut = new ut(z, T + "enter", P, n, H)),
                (ut.target = C),
                (ut.relatedTarget = Xt),
                (N = ut)),
              (Xt = N),
              w && P)
            )
              e: {
                for (ut = w, z = P, T = 0, C = ut; C; C = bl(C)) T++;
                for (C = 0, N = z; N; N = bl(N)) C++;
                for (; 0 < T - C; ) (ut = bl(ut)), T--;
                for (; 0 < C - T; ) (z = bl(z)), C--;
                for (; T--; ) {
                  if (ut === z || (z !== null && ut === z.alternate)) break e;
                  (ut = bl(ut)), (z = bl(z));
                }
                ut = null;
              }
            else ut = null;
            w !== null && qd(k, R, w, ut, !1),
              P !== null && Xt !== null && qd(k, Xt, P, ut, !0);
          }
        }
        t: {
          if (
            ((R = O ? wl(O) : window),
            (w = R.nodeName && R.nodeName.toLowerCase()),
            w === "select" || (w === "input" && R.type === "file"))
          )
            var J = mf;
          else if (df(R))
            if (pf) J = Ap;
            else {
              J = Op;
              var gt = Tp;
            }
          else
            (w = R.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? O && Go(O.elementType) && (J = mf)
                : (J = Dp);
          if (J && (J = J(t, O))) {
            gf(k, J, n, H);
            break t;
          }
          gt && gt(t, R, O),
            t === "focusout" &&
              O &&
              R.type === "number" &&
              O.memoizedProps.value != null &&
              Xo(R, "number", R.value);
        }
        switch (((gt = O ? wl(O) : window), t)) {
          case "focusin":
            (df(gt) || gt.contentEditable === "true") &&
              ((Jn = gt), (lu = O), (Vl = null));
            break;
          case "focusout":
            Vl = lu = Jn = null;
            break;
          case "mousedown":
            au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (au = !1), Tf(k, n, H);
            break;
          case "selectionchange":
            if (Cp) break;
          case "keydown":
          case "keyup":
            Tf(k, n, H);
        }
        var it;
        if (tu)
          t: {
            switch (t) {
              case "compositionstart":
                var at = "onCompositionStart";
                break t;
              case "compositionend":
                at = "onCompositionEnd";
                break t;
              case "compositionupdate":
                at = "onCompositionUpdate";
                break t;
            }
            at = void 0;
          }
        else
          Wn
            ? ff(t, n) && (at = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (at = "onCompositionStart");
        at &&
          (uf &&
            n.locale !== "ko" &&
            (Wn || at !== "onCompositionStart"
              ? at === "onCompositionEnd" && Wn && (it = nf())
              : ((Ni = H),
                (Wo = "value" in Ni ? Ni.value : Ni.textContent),
                (Wn = !0))),
          (gt = Zs(O, at)),
          0 < gt.length &&
            ((at = new sf(at, t, null, n, H)),
            k.push({ event: at, listeners: gt }),
            it
              ? (at.data = it)
              : ((it = hf(n)), it !== null && (at.data = it)))),
          (it = vp ? _p(t, n) : xp(t, n)) &&
            ((at = Zs(O, "onBeforeInput")),
            0 < at.length &&
              ((gt = new sf("onBeforeInput", "beforeinput", null, n, H)),
              k.push({ event: gt, listeners: at }),
              (gt.data = it))),
          hy(k, t, O, n, H);
      }
      Yd(k, e);
    });
  }
  function ma(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Zs(t, e) {
    for (var n = e + "Capture", o = []; t !== null; ) {
      var r = t,
        h = r.stateNode;
      (r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          h === null ||
          ((r = Hl(t, n)),
          r != null && o.unshift(ma(t, r, h)),
          (r = Hl(t, e)),
          r != null && o.push(ma(t, r, h))),
        (t = t.return);
    }
    return o;
  }
  function bl(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qd(t, e, n, o, r) {
    for (var h = e._reactName, p = []; n !== null && n !== o; ) {
      var b = n,
        x = b.alternate,
        O = b.stateNode;
      if (((b = b.tag), x !== null && x === o)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        O === null ||
        ((x = O),
        r
          ? ((O = Hl(n, h)), O != null && p.unshift(ma(n, O, x)))
          : r || ((O = Hl(n, h)), O != null && p.push(ma(n, O, x)))),
        (n = n.return);
    }
    p.length !== 0 && t.push({ event: e, listeners: p });
  }
  var py = /\r\n?/g,
    yy = /\u0000|\uFFFD/g;
  function Xd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        py,
        `
`
      )
      .replace(yy, "");
  }
  function Gd(t, e) {
    return (e = Xd(e)), Xd(t) === e;
  }
  function Ks() {}
  function Ct(t, e, n, o, r, h) {
    switch (n) {
      case "children":
        typeof o == "string"
          ? e === "body" || (e === "textarea" && o === "") || Zn(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            e !== "body" &&
            Zn(t, "" + o);
        break;
      case "className":
        es(t, "class", o);
        break;
      case "tabIndex":
        es(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        es(t, n, o);
        break;
      case "style":
        Ir(t, o, h);
        break;
      case "data":
        if (e !== "object") {
          es(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (o = ls("" + o)), t.setAttribute(n, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof h == "function" &&
            (n === "formAction"
              ? (e !== "input" && Ct(t, e, "name", r.name, r, null),
                Ct(t, e, "formEncType", r.formEncType, r, null),
                Ct(t, e, "formMethod", r.formMethod, r, null),
                Ct(t, e, "formTarget", r.formTarget, r, null))
              : (Ct(t, e, "encType", r.encType, r, null),
                Ct(t, e, "method", r.method, r, null),
                Ct(t, e, "target", r.target, r, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (o = ls("" + o)), t.setAttribute(n, o);
        break;
      case "onClick":
        o != null && (t.onclick = Ks);
        break;
      case "onScroll":
        o != null && bt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && bt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((n = o.__html), n != null)) {
            if (r.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = ls("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(n, "" + o)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(n, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? t.setAttribute(n, o)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(n, o)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(n)
          : t.setAttribute(n, o);
        break;
      case "popover":
        bt("beforetoggle", t), bt("toggle", t), ts(t, "popover", o);
        break;
      case "xlinkActuate":
        di(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        di(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        di(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        di(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        di(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        di(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        di(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        di(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        di(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        ts(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Z0.get(n) || n), ts(t, n, o));
    }
  }
  function Ec(t, e, n, o, r, h) {
    switch (n) {
      case "style":
        Ir(t, o, h);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((n = o.__html), n != null)) {
            if (r.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Zn(t, o)
          : (typeof o == "number" || typeof o == "bigint") && Zn(t, "" + o);
        break;
      case "onScroll":
        o != null && bt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && bt("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Ks);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gr.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (h = t[ye] || null),
              (h = h != null ? h[n] : null),
              typeof h == "function" && t.removeEventListener(e, h, r),
              typeof o == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, o, r);
              break t;
            }
            n in t
              ? (t[n] = o)
              : o === !0
              ? t.setAttribute(n, "")
              : ts(t, n, o);
          }
    }
  }
  function ce(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        bt("error", t), bt("load", t);
        var o = !1,
          r = !1,
          h;
        for (h in n)
          if (n.hasOwnProperty(h)) {
            var p = n[h];
            if (p != null)
              switch (h) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Ct(t, e, h, p, n, null);
              }
          }
        r && Ct(t, e, "srcSet", n.srcSet, n, null),
          o && Ct(t, e, "src", n.src, n, null);
        return;
      case "input":
        bt("invalid", t);
        var b = (h = p = r = null),
          x = null,
          O = null;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var H = n[o];
            if (H != null)
              switch (o) {
                case "name":
                  r = H;
                  break;
                case "type":
                  p = H;
                  break;
                case "checked":
                  x = H;
                  break;
                case "defaultChecked":
                  O = H;
                  break;
                case "value":
                  h = H;
                  break;
                case "defaultValue":
                  b = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null) throw Error(s(137, e));
                  break;
                default:
                  Ct(t, e, o, H, n, null);
              }
          }
        Wr(t, h, b, x, O, p, r, !1), is(t);
        return;
      case "select":
        bt("invalid", t), (o = p = h = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((b = n[r]), b != null))
            switch (r) {
              case "value":
                h = b;
                break;
              case "defaultValue":
                p = b;
                break;
              case "multiple":
                o = b;
              default:
                Ct(t, e, r, b, n, null);
            }
        (e = h),
          (n = p),
          (t.multiple = !!o),
          e != null ? Qn(t, !!o, e, !1) : n != null && Qn(t, !!o, n, !0);
        return;
      case "textarea":
        bt("invalid", t), (h = r = o = null);
        for (p in n)
          if (n.hasOwnProperty(p) && ((b = n[p]), b != null))
            switch (p) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                r = b;
                break;
              case "children":
                h = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(s(91));
                break;
              default:
                Ct(t, e, p, b, n, null);
            }
        $r(t, o, r, h), is(t);
        return;
      case "option":
        for (x in n)
          if (n.hasOwnProperty(x) && ((o = n[x]), o != null))
            switch (x) {
              case "selected":
                t.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ct(t, e, x, o, n, null);
            }
        return;
      case "dialog":
        bt("cancel", t), bt("close", t);
        break;
      case "iframe":
      case "object":
        bt("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ga.length; o++) bt(ga[o], t);
        break;
      case "image":
        bt("error", t), bt("load", t);
        break;
      case "details":
        bt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        bt("error", t), bt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in n)
          if (n.hasOwnProperty(O) && ((o = n[O]), o != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Ct(t, e, O, o, n, null);
            }
        return;
      default:
        if (Go(e)) {
          for (H in n)
            n.hasOwnProperty(H) &&
              ((o = n[H]), o !== void 0 && Ec(t, e, H, o, n, void 0));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && ((o = n[b]), o != null && Ct(t, e, b, o, n, null));
  }
  function by(t, e, n, o) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          h = null,
          p = null,
          b = null,
          x = null,
          O = null,
          H = null;
        for (w in n) {
          var k = n[w];
          if (n.hasOwnProperty(w) && k != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = k;
              default:
                o.hasOwnProperty(w) || Ct(t, e, w, null, o, k);
            }
        }
        for (var R in o) {
          var w = o[R];
          if (((k = n[R]), o.hasOwnProperty(R) && (w != null || k != null)))
            switch (R) {
              case "type":
                h = w;
                break;
              case "name":
                r = w;
                break;
              case "checked":
                O = w;
                break;
              case "defaultChecked":
                H = w;
                break;
              case "value":
                p = w;
                break;
              case "defaultValue":
                b = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(s(137, e));
                break;
              default:
                w !== k && Ct(t, e, R, w, o, k);
            }
        }
        qo(t, p, b, x, O, H, h, r);
        return;
      case "select":
        w = p = b = R = null;
        for (h in n)
          if (((x = n[h]), n.hasOwnProperty(h) && x != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                w = x;
              default:
                o.hasOwnProperty(h) || Ct(t, e, h, null, o, x);
            }
        for (r in o)
          if (
            ((h = o[r]),
            (x = n[r]),
            o.hasOwnProperty(r) && (h != null || x != null))
          )
            switch (r) {
              case "value":
                R = h;
                break;
              case "defaultValue":
                b = h;
                break;
              case "multiple":
                p = h;
              default:
                h !== x && Ct(t, e, r, h, o, x);
            }
        (e = b),
          (n = p),
          (o = w),
          R != null
            ? Qn(t, !!n, R, !1)
            : !!o != !!n &&
              (e != null ? Qn(t, !!n, e, !0) : Qn(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        w = R = null;
        for (b in n)
          if (
            ((r = n[b]),
            n.hasOwnProperty(b) && r != null && !o.hasOwnProperty(b))
          )
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, b, null, o, r);
            }
        for (p in o)
          if (
            ((r = o[p]),
            (h = n[p]),
            o.hasOwnProperty(p) && (r != null || h != null))
          )
            switch (p) {
              case "value":
                R = r;
                break;
              case "defaultValue":
                w = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(s(91));
                break;
              default:
                r !== h && Ct(t, e, p, r, o, h);
            }
        Jr(t, R, w);
        return;
      case "option":
        for (var P in n)
          if (
            ((R = n[P]),
            n.hasOwnProperty(P) && R != null && !o.hasOwnProperty(P))
          )
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ct(t, e, P, null, o, R);
            }
        for (x in o)
          if (
            ((R = o[x]),
            (w = n[x]),
            o.hasOwnProperty(x) && R !== w && (R != null || w != null))
          )
            switch (x) {
              case "selected":
                t.selected =
                  R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                Ct(t, e, x, R, o, w);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ut in n)
          (R = n[ut]),
            n.hasOwnProperty(ut) &&
              R != null &&
              !o.hasOwnProperty(ut) &&
              Ct(t, e, ut, null, o, R);
        for (O in o)
          if (
            ((R = o[O]),
            (w = n[O]),
            o.hasOwnProperty(O) && R !== w && (R != null || w != null))
          )
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(s(137, e));
                break;
              default:
                Ct(t, e, O, R, o, w);
            }
        return;
      default:
        if (Go(e)) {
          for (var Xt in n)
            (R = n[Xt]),
              n.hasOwnProperty(Xt) &&
                R !== void 0 &&
                !o.hasOwnProperty(Xt) &&
                Ec(t, e, Xt, void 0, o, R);
          for (H in o)
            (R = o[H]),
              (w = n[H]),
              !o.hasOwnProperty(H) ||
                R === w ||
                (R === void 0 && w === void 0) ||
                Ec(t, e, H, R, o, w);
          return;
        }
    }
    for (var z in n)
      (R = n[z]),
        n.hasOwnProperty(z) &&
          R != null &&
          !o.hasOwnProperty(z) &&
          Ct(t, e, z, null, o, R);
    for (k in o)
      (R = o[k]),
        (w = n[k]),
        !o.hasOwnProperty(k) ||
          R === w ||
          (R == null && w == null) ||
          Ct(t, e, k, R, o, w);
  }
  var zc = null,
    Cc = null;
  function Fs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Rc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wc = null;
  function vy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === wc
        ? !1
        : ((wc = t), !0)
      : ((wc = null), !1);
  }
  var Kd = typeof setTimeout == "function" ? setTimeout : void 0,
    _y = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fd = typeof Promise == "function" ? Promise : void 0,
    xy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Fd < "u"
        ? function (t) {
            return Fd.resolve(null).then(t).catch(Sy);
          }
        : Kd;
  function Sy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Hc(t, e) {
    var n = e,
      o = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === "/$")) {
          if (o === 0) {
            t.removeChild(r), Ma(e);
            return;
          }
          o--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || o++;
      n = r;
    } while (n);
    Ma(e);
  }
  function Bc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bc(n), Vo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function My(t, e, n, o) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[Rl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((h = t.getAttribute("rel")),
                h === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== r.rel ||
                t.getAttribute("href") !== (r.href == null ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((h = t.getAttribute("src")),
                (h !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  h &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var h = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === h) return t;
      } else return t;
      if (((t = ti(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ty(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = ti(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ti(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function Wd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Jd(t, e, n) {
    switch (((e = Fs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  var Xe = new Map(),
    $d = new Set();
  function Ws(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Ei = G.d;
  G.d = { f: Oy, r: Dy, D: Ay, C: Ey, L: zy, m: Cy, X: wy, S: Ry, M: Hy };
  function Oy() {
    var t = Ei.f(),
      e = Vs();
    return t || e;
  }
  function Dy(t) {
    var e = qn(t);
    e !== null && e.tag === 5 && e.type === "form" ? Th(e) : Ei.r(t);
  }
  var vl = typeof document > "u" ? null : document;
  function Pd(t, e, n) {
    var o = vl;
    if (o && typeof e == "string" && e) {
      var r = He(e);
      (r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        $d.has(r) ||
          ($d.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          o.querySelector(r) === null &&
            ((e = o.createElement("link")),
            ce(e, "link", t),
            te(e),
            o.head.appendChild(e)));
    }
  }
  function Ay(t) {
    Ei.D(t), Pd("dns-prefetch", t, null);
  }
  function Ey(t, e) {
    Ei.C(t, e), Pd("preconnect", t, e);
  }
  function zy(t, e, n) {
    Ei.L(t, e, n);
    var o = vl;
    if (o && t && e) {
      var r = 'link[rel="preload"][as="' + He(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + He(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + He(n.imageSizes) + '"]'))
        : (r += '[href="' + He(t) + '"]');
      var h = r;
      switch (e) {
        case "style":
          h = _l(t);
          break;
        case "script":
          h = xl(t);
      }
      Xe.has(h) ||
        ((t = W(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Xe.set(h, t),
        o.querySelector(r) !== null ||
          (e === "style" && o.querySelector(pa(h))) ||
          (e === "script" && o.querySelector(ya(h))) ||
          ((e = o.createElement("link")),
          ce(e, "link", t),
          te(e),
          o.head.appendChild(e)));
    }
  }
  function Cy(t, e) {
    Ei.m(t, e);
    var n = vl;
    if (n && t) {
      var o = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + He(o) + '"][href="' + He(t) + '"]',
        h = r;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = xl(t);
      }
      if (
        !Xe.has(h) &&
        ((t = W({ rel: "modulepreload", href: t }, e)),
        Xe.set(h, t),
        n.querySelector(r) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ya(h))) return;
        }
        (o = n.createElement("link")),
          ce(o, "link", t),
          te(o),
          n.head.appendChild(o);
      }
    }
  }
  function Ry(t, e, n) {
    Ei.S(t, e, n);
    var o = vl;
    if (o && t) {
      var r = Xn(o).hoistableStyles,
        h = _l(t);
      e = e || "default";
      var p = r.get(h);
      if (!p) {
        var b = { loading: 0, preload: null };
        if ((p = o.querySelector(pa(h)))) b.loading = 5;
        else {
          (t = W({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Xe.get(h)) && Lc(t, n);
          var x = (p = o.createElement("link"));
          te(x),
            ce(x, "link", t),
            (x._p = new Promise(function (O, H) {
              (x.onload = O), (x.onerror = H);
            })),
            x.addEventListener("load", function () {
              b.loading |= 1;
            }),
            x.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            Js(p, e, o);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: b }),
          r.set(h, p);
      }
    }
  }
  function wy(t, e) {
    Ei.X(t, e);
    var n = vl;
    if (n && t) {
      var o = Xn(n).hoistableScripts,
        r = xl(t),
        h = o.get(r);
      h ||
        ((h = n.querySelector(ya(r))),
        h ||
          ((t = W({ src: t, async: !0 }, e)),
          (e = Xe.get(r)) && Nc(t, e),
          (h = n.createElement("script")),
          te(h),
          ce(h, "link", t),
          n.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        o.set(r, h));
    }
  }
  function Hy(t, e) {
    Ei.M(t, e);
    var n = vl;
    if (n && t) {
      var o = Xn(n).hoistableScripts,
        r = xl(t),
        h = o.get(r);
      h ||
        ((h = n.querySelector(ya(r))),
        h ||
          ((t = W({ src: t, async: !0, type: "module" }, e)),
          (e = Xe.get(r)) && Nc(t, e),
          (h = n.createElement("script")),
          te(h),
          ce(h, "link", t),
          n.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        o.set(r, h));
    }
  }
  function Id(t, e, n, o) {
    var r = (r = Rt.current) ? Ws(r) : null;
    if (!r) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = _l(n.href)),
            (n = Xn(r).hoistableStyles),
            (o = n.get(e)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = _l(n.href);
          var h = Xn(r).hoistableStyles,
            p = h.get(t);
          if (
            (p ||
              ((r = r.ownerDocument || r),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(t, p),
              (h = r.querySelector(pa(t))) &&
                !h._p &&
                ((p.instance = h), (p.state.loading = 5)),
              Xe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Xe.set(t, n),
                h || By(r, t, n, p.state))),
            e && o === null)
          )
            throw Error(s(528, ""));
          return p;
        }
        if (e && o !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = xl(n)),
              (n = Xn(r).hoistableScripts),
              (o = n.get(e)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function _l(t) {
    return 'href="' + He(t) + '"';
  }
  function pa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function tg(t) {
    return W({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function By(t, e, n, o) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (o.loading = 1)
      : ((e = t.createElement("link")),
        (o.preload = e),
        e.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        ce(e, "link", n),
        te(e),
        t.head.appendChild(e));
  }
  function xl(t) {
    return '[src="' + He(t) + '"]';
  }
  function ya(t) {
    return "script[async]" + t;
  }
  function eg(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + He(n.href) + '"]');
          if (o) return (e.instance = o), te(o), o;
          var r = W({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            te(o),
            ce(o, "style", r),
            Js(o, n.precedence, t),
            (e.instance = o)
          );
        case "stylesheet":
          r = _l(n.href);
          var h = t.querySelector(pa(r));
          if (h) return (e.state.loading |= 4), (e.instance = h), te(h), h;
          (o = tg(n)),
            (r = Xe.get(r)) && Lc(o, r),
            (h = (t.ownerDocument || t).createElement("link")),
            te(h);
          var p = h;
          return (
            (p._p = new Promise(function (b, x) {
              (p.onload = b), (p.onerror = x);
            })),
            ce(h, "link", o),
            (e.state.loading |= 4),
            Js(h, n.precedence, t),
            (e.instance = h)
          );
        case "script":
          return (
            (h = xl(n.src)),
            (r = t.querySelector(ya(h)))
              ? ((e.instance = r), te(r), r)
              : ((o = n),
                (r = Xe.get(h)) && ((o = W({}, n)), Nc(o, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                te(r),
                ce(r, "link", o),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((o = e.instance), (e.state.loading |= 4), Js(o, n.precedence, t));
    return e.instance;
  }
  function Js(t, e, n) {
    for (
      var o = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        r = o.length ? o[o.length - 1] : null,
        h = r,
        p = 0;
      p < o.length;
      p++
    ) {
      var b = o[p];
      if (b.dataset.precedence === e) h = b;
      else if (h !== r) break;
    }
    h
      ? h.parentNode.insertBefore(t, h.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Lc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Nc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var $s = null;
  function ig(t, e, n) {
    if ($s === null) {
      var o = new Map(),
        r = ($s = new Map());
      r.set(n, o);
    } else (r = $s), (o = r.get(n)), o || ((o = new Map()), r.set(n, o));
    if (o.has(t)) return o;
    for (
      o.set(t, null), n = n.getElementsByTagName(t), r = 0;
      r < n.length;
      r++
    ) {
      var h = n[r];
      if (
        !(
          h[Rl] ||
          h[re] ||
          (t === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = h.getAttribute(e) || "";
        p = t + p;
        var b = o.get(p);
        b ? b.push(h) : o.set(p, [h]);
      }
    }
    return o;
  }
  function ng(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Ly(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function lg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ba = null;
  function Ny() {}
  function ky(t, e, n) {
    if (ba === null) throw Error(s(475));
    var o = ba;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var r = _l(n.href),
          h = t.querySelector(pa(r));
        if (h) {
          (t = h._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (o.count++, (o = Ps.bind(o)), t.then(o, o)),
            (e.state.loading |= 4),
            (e.instance = h),
            te(h);
          return;
        }
        (h = t.ownerDocument || t),
          (n = tg(n)),
          (r = Xe.get(r)) && Lc(n, r),
          (h = h.createElement("link")),
          te(h);
        var p = h;
        (p._p = new Promise(function (b, x) {
          (p.onload = b), (p.onerror = x);
        })),
          ce(h, "link", n),
          (e.instance = h);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (o.count++,
          (e = Ps.bind(o)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Uy() {
    if (ba === null) throw Error(s(475));
    var t = ba;
    return (
      t.stylesheets && t.count === 0 && kc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && kc(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Ps() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) kc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Is = null;
  function kc(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Is = new Map()),
        e.forEach(jy, t),
        (Is = null),
        Ps.call(t));
  }
  function jy(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Is.get(t);
      if (n) var o = n.get(null);
      else {
        (n = new Map()), Is.set(t, n);
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            h = 0;
          h < r.length;
          h++
        ) {
          var p = r[h];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (n.set(p.dataset.precedence, p), (o = p));
        }
        o && n.set(null, o);
      }
      (r = e.instance),
        (p = r.getAttribute("data-precedence")),
        (h = n.get(p) || o),
        h === o && n.set(null, r),
        n.set(p, r),
        this.count++,
        (o = Ps.bind(this)),
        r.addEventListener("load", o),
        r.addEventListener("error", o),
        h
          ? h.parentNode.insertBefore(r, h.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var va = {
    $$typeof: S,
    Provider: null,
    Consumer: null,
    _currentValue: ct,
    _currentValue2: ct,
    _threadCount: 0,
  };
  function Yy(t, e, n, o, r, h, p, b) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = jo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jo(0)),
      (this.hiddenUpdates = jo(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = r),
      (this.onCaughtError = h),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function ag(t, e, n, o, r, h, p, b, x, O, H, k) {
    return (
      (t = new Yy(t, e, n, p, b, x, O, k)),
      (e = 1),
      h === !0 && (e |= 24),
      (h = Ve(3, null, null, e)),
      (t.current = h),
      (h.stateNode = t),
      (e = mu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (h.memoizedState = { element: o, isDehydrated: n, cache: e }),
      Wu(h),
      t
    );
  }
  function sg(t) {
    return t ? ((t = In), t) : In;
  }
  function og(t, e, n, o, r, h) {
    (r = sg(r)),
      o.context === null ? (o.context = r) : (o.pendingContext = r),
      (o = Gi(e)),
      (o.payload = { element: n }),
      (h = h === void 0 ? null : h),
      h !== null && (o.callback = h),
      (n = Qi(t, o, e)),
      n !== null && (pe(n, t, e), ia(n, t, e));
  }
  function ug(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Uc(t, e) {
    ug(t, e), (t = t.alternate) && ug(t, e);
  }
  function cg(t) {
    if (t.tag === 13) {
      var e = ki(t, 67108864);
      e !== null && pe(e, t, 67108864), Uc(t, 67108864);
    }
  }
  var to = !0;
  function Vy(t, e, n, o) {
    var r = Y.T;
    Y.T = null;
    var h = G.p;
    try {
      (G.p = 2), jc(t, e, n, o);
    } finally {
      (G.p = h), (Y.T = r);
    }
  }
  function qy(t, e, n, o) {
    var r = Y.T;
    Y.T = null;
    var h = G.p;
    try {
      (G.p = 8), jc(t, e, n, o);
    } finally {
      (G.p = h), (Y.T = r);
    }
  }
  function jc(t, e, n, o) {
    if (to) {
      var r = Yc(o);
      if (r === null) Ac(t, e, o, eo, n), fg(t, o);
      else if (Gy(r, t, e, n, o)) o.stopPropagation();
      else if ((fg(t, o), e & 4 && -1 < Xy.indexOf(t))) {
        for (; r !== null; ) {
          var h = qn(r);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var p = cn(h.pendingLanes);
                  if (p !== 0) {
                    var b = h;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                      var x = 1 << (31 - Te(p));
                      (b.entanglements[1] |= x), (p &= ~x);
                    }
                    oi(h), (Yt & 6) === 0 && ((Us = ii() + 500), da(0));
                  }
                }
                break;
              case 13:
                (b = ki(h, 2)), b !== null && pe(b, h, 2), Vs(), Uc(h, 2);
            }
          if (((h = Yc(o)), h === null && Ac(t, e, o, eo, n), h === r)) break;
          r = h;
        }
        r !== null && o.stopPropagation();
      } else Ac(t, e, o, null, n);
    }
  }
  function Yc(t) {
    return (t = Zo(t)), Vc(t);
  }
  var eo = null;
  function Vc(t) {
    if (((eo = null), (t = rn(t)), t !== null)) {
      var e = et(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = xt(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (eo = t), null;
  }
  function rg(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
      case "selectstart":
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (E0()) {
          case Hr:
            return 2;
          case Br:
            return 8;
          case Ja:
          case z0:
            return 32;
          case Lr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qc = !1,
    Pi = null,
    Ii = null,
    tn = null,
    _a = new Map(),
    xa = new Map(),
    en = [],
    Xy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function fg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Pi = null;
        break;
      case "dragenter":
      case "dragleave":
        Ii = null;
        break;
      case "mouseover":
      case "mouseout":
        tn = null;
        break;
      case "pointerover":
      case "pointerout":
        _a.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xa.delete(e.pointerId);
    }
  }
  function Sa(t, e, n, o, r, h) {
    return t === null || t.nativeEvent !== h
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: o,
          nativeEvent: h,
          targetContainers: [r],
        }),
        e !== null && ((e = qn(e)), e !== null && cg(e)),
        t)
      : ((t.eventSystemFlags |= o),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function Gy(t, e, n, o, r) {
    switch (e) {
      case "focusin":
        return (Pi = Sa(Pi, t, e, n, o, r)), !0;
      case "dragenter":
        return (Ii = Sa(Ii, t, e, n, o, r)), !0;
      case "mouseover":
        return (tn = Sa(tn, t, e, n, o, r)), !0;
      case "pointerover":
        var h = r.pointerId;
        return _a.set(h, Sa(_a.get(h) || null, t, e, n, o, r)), !0;
      case "gotpointercapture":
        return (
          (h = r.pointerId), xa.set(h, Sa(xa.get(h) || null, t, e, n, o, r)), !0
        );
    }
    return !1;
  }
  function hg(t) {
    var e = rn(t.target);
    if (e !== null) {
      var n = et(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = xt(n)), e !== null)) {
            (t.blockedOn = e),
              U0(t.priority, function () {
                if (n.tag === 13) {
                  var o = ze(),
                    r = ki(n, o);
                  r !== null && pe(r, n, o), Uc(n, o);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function io(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Yc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var o = new n.constructor(n.type, n);
        (Qo = o), n.target.dispatchEvent(o), (Qo = null);
      } else return (e = qn(n)), e !== null && cg(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function dg(t, e, n) {
    io(t) && n.delete(e);
  }
  function Qy() {
    (qc = !1),
      Pi !== null && io(Pi) && (Pi = null),
      Ii !== null && io(Ii) && (Ii = null),
      tn !== null && io(tn) && (tn = null),
      _a.forEach(dg),
      xa.forEach(dg);
  }
  function no(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      qc ||
        ((qc = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Qy)));
  }
  var lo = null;
  function gg(t) {
    lo !== t &&
      ((lo = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        lo === t && (lo = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            o = t[e + 1],
            r = t[e + 2];
          if (typeof o != "function") {
            if (Vc(o || n) === null) continue;
            break;
          }
          var h = qn(n);
          h !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ru(h, { pending: !0, data: r, method: n.method, action: o }, o, r));
        }
      }));
  }
  function Ma(t) {
    function e(x) {
      return no(x, t);
    }
    Pi !== null && no(Pi, t),
      Ii !== null && no(Ii, t),
      tn !== null && no(tn, t),
      _a.forEach(e),
      xa.forEach(e);
    for (var n = 0; n < en.length; n++) {
      var o = en[n];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
      hg(n), n.blockedOn === null && en.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (o = 0; o < n.length; o += 3) {
        var r = n[o],
          h = n[o + 1],
          p = r[ye] || null;
        if (typeof h == "function") p || gg(n);
        else if (p) {
          var b = null;
          if (h && h.hasAttribute("formAction")) {
            if (((r = h), (p = h[ye] || null))) b = p.formAction;
            else if (Vc(r) !== null) continue;
          } else b = p.action;
          typeof b == "function" ? (n[o + 1] = b) : (n.splice(o, 3), (o -= 3)),
            gg(n);
        }
      }
  }
  function Xc(t) {
    this._internalRoot = t;
  }
  (ao.prototype.render = Xc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var n = e.current,
        o = ze();
      og(n, o, t, e, null, null);
    }),
    (ao.prototype.unmount = Xc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && pl(),
            og(t.current, 2, null, t, null, null),
            Vs(),
            (e[Vn] = null);
        }
      });
  function ao(t) {
    this._internalRoot = t;
  }
  ao.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Vr();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < en.length && e !== 0 && e < en[n].priority; n++);
      en.splice(n, 0, t), n === 0 && hg(t);
    }
  };
  var mg = i.version;
  if (mg !== "19.0.0") throw Error(s(527, mg, "19.0.0"));
  G.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = U(e)),
      (t = t !== null ? I(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Zy = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    findFiberByHostInstance: rn,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!so.isDisabled && so.supportsFiber)
      try {
        (El = so.inject(Zy)), (Me = so);
      } catch {}
  }
  return (
    (Oa.createRoot = function (t, e) {
      if (!u(t)) throw Error(s(299));
      var n = !1,
        o = "",
        r = wh,
        h = Hh,
        p = Bh,
        b = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (o = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (h = e.onCaughtError),
          e.onRecoverableError !== void 0 && (p = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (b = e.unstable_transitionCallbacks)),
        (e = ag(t, 1, !1, null, null, n, o, r, h, p, b, null)),
        (t[Vn] = e.current),
        Dc(t.nodeType === 8 ? t.parentNode : t),
        new Xc(e)
      );
    }),
    (Oa.hydrateRoot = function (t, e, n) {
      if (!u(t)) throw Error(s(299));
      var o = !1,
        r = "",
        h = wh,
        p = Hh,
        b = Bh,
        x = null,
        O = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (h = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (b = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (x = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (O = n.formState)),
        (e = ag(t, 1, !0, e, n ?? null, o, r, h, p, b, x, O)),
        (e.context = sg(null)),
        (n = e.current),
        (o = ze()),
        (r = Gi(o)),
        (r.callback = null),
        Qi(n, r, o),
        (e.current.lanes = o),
        Cl(e, o),
        oi(e),
        (t[Vn] = e.current),
        Dc(t),
        new ao(e)
      );
    }),
    (Oa.version = "19.0.0"),
    Oa
  );
}
var Og;
function ab() {
  if (Og) return Zc.exports;
  Og = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Zc.exports = lb()), Zc.exports;
}
var sb = ab();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function Wa(a) {
  return (a + 0.5) | 0;
}
const sn = (a, i, l) => Math.max(Math.min(a, l), i);
function wa(a) {
  return sn(Wa(a * 2.55), 0, 255);
}
function on(a) {
  return sn(Wa(a * 255), 0, 255);
}
function wi(a) {
  return sn(Wa(a / 2.55) / 100, 0, 1);
}
function Dg(a) {
  return sn(Wa(a * 100), 0, 100);
}
const Ge = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  sr = [..."0123456789ABCDEF"],
  ob = (a) => sr[a & 15],
  ub = (a) => sr[(a & 240) >> 4] + sr[a & 15],
  oo = (a) => (a & 240) >> 4 === (a & 15),
  cb = (a) => oo(a.r) && oo(a.g) && oo(a.b) && oo(a.a);
function rb(a) {
  var i = a.length,
    l;
  return (
    a[0] === "#" &&
      (i === 4 || i === 5
        ? (l = {
            r: 255 & (Ge[a[1]] * 17),
            g: 255 & (Ge[a[2]] * 17),
            b: 255 & (Ge[a[3]] * 17),
            a: i === 5 ? Ge[a[4]] * 17 : 255,
          })
        : (i === 7 || i === 9) &&
          (l = {
            r: (Ge[a[1]] << 4) | Ge[a[2]],
            g: (Ge[a[3]] << 4) | Ge[a[4]],
            b: (Ge[a[5]] << 4) | Ge[a[6]],
            a: i === 9 ? (Ge[a[7]] << 4) | Ge[a[8]] : 255,
          })),
    l
  );
}
const fb = (a, i) => (a < 255 ? i(a) : "");
function hb(a) {
  var i = cb(a) ? ob : ub;
  return a ? "#" + i(a.r) + i(a.g) + i(a.b) + fb(a.a, i) : void 0;
}
const db =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Vm(a, i, l) {
  const s = i * Math.min(l, 1 - l),
    u = (c, f = (c + a / 30) % 12) =>
      l - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  return [u(0), u(8), u(4)];
}
function gb(a, i, l) {
  const s = (u, c = (u + a / 60) % 6) =>
    l - l * i * Math.max(Math.min(c, 4 - c, 1), 0);
  return [s(5), s(3), s(1)];
}
function mb(a, i, l) {
  const s = Vm(a, 1, 0.5);
  let u;
  for (i + l > 1 && ((u = 1 / (i + l)), (i *= u), (l *= u)), u = 0; u < 3; u++)
    (s[u] *= 1 - i - l), (s[u] += i);
  return s;
}
function pb(a, i, l, s, u) {
  return a === u
    ? (i - l) / s + (i < l ? 6 : 0)
    : i === u
    ? (l - a) / s + 2
    : (a - i) / s + 4;
}
function br(a) {
  const l = a.r / 255,
    s = a.g / 255,
    u = a.b / 255,
    c = Math.max(l, s, u),
    f = Math.min(l, s, u),
    d = (c + f) / 2;
  let g, m, y;
  return (
    c !== f &&
      ((y = c - f),
      (m = d > 0.5 ? y / (2 - c - f) : y / (c + f)),
      (g = pb(l, s, u, y, c)),
      (g = g * 60 + 0.5)),
    [g | 0, m || 0, d]
  );
}
function vr(a, i, l, s) {
  return (Array.isArray(i) ? a(i[0], i[1], i[2]) : a(i, l, s)).map(on);
}
function _r(a, i, l) {
  return vr(Vm, a, i, l);
}
function yb(a, i, l) {
  return vr(mb, a, i, l);
}
function bb(a, i, l) {
  return vr(gb, a, i, l);
}
function qm(a) {
  return ((a % 360) + 360) % 360;
}
function vb(a) {
  const i = db.exec(a);
  let l = 255,
    s;
  if (!i) return;
  i[5] !== s && (l = i[6] ? wa(+i[5]) : on(+i[5]));
  const u = qm(+i[2]),
    c = +i[3] / 100,
    f = +i[4] / 100;
  return (
    i[1] === "hwb"
      ? (s = yb(u, c, f))
      : i[1] === "hsv"
      ? (s = bb(u, c, f))
      : (s = _r(u, c, f)),
    { r: s[0], g: s[1], b: s[2], a: l }
  );
}
function _b(a, i) {
  var l = br(a);
  (l[0] = qm(l[0] + i)), (l = _r(l)), (a.r = l[0]), (a.g = l[1]), (a.b = l[2]);
}
function xb(a) {
  if (!a) return;
  const i = br(a),
    l = i[0],
    s = Dg(i[1]),
    u = Dg(i[2]);
  return a.a < 255
    ? `hsla(${l}, ${s}%, ${u}%, ${wi(a.a)})`
    : `hsl(${l}, ${s}%, ${u}%)`;
}
const Ag = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Eg = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Sb() {
  const a = {},
    i = Object.keys(Eg),
    l = Object.keys(Ag);
  let s, u, c, f, d;
  for (s = 0; s < i.length; s++) {
    for (f = d = i[s], u = 0; u < l.length; u++)
      (c = l[u]), (d = d.replace(c, Ag[c]));
    (c = parseInt(Eg[f], 16)),
      (a[d] = [(c >> 16) & 255, (c >> 8) & 255, c & 255]);
  }
  return a;
}
let uo;
function Mb(a) {
  uo || ((uo = Sb()), (uo.transparent = [0, 0, 0, 0]));
  const i = uo[a.toLowerCase()];
  return i && { r: i[0], g: i[1], b: i[2], a: i.length === 4 ? i[3] : 255 };
}
const Tb =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ob(a) {
  const i = Tb.exec(a);
  let l = 255,
    s,
    u,
    c;
  if (i) {
    if (i[7] !== s) {
      const f = +i[7];
      l = i[8] ? wa(f) : sn(f * 255, 0, 255);
    }
    return (
      (s = +i[1]),
      (u = +i[3]),
      (c = +i[5]),
      (s = 255 & (i[2] ? wa(s) : sn(s, 0, 255))),
      (u = 255 & (i[4] ? wa(u) : sn(u, 0, 255))),
      (c = 255 & (i[6] ? wa(c) : sn(c, 0, 255))),
      { r: s, g: u, b: c, a: l }
    );
  }
}
function Db(a) {
  return (
    a &&
    (a.a < 255
      ? `rgba(${a.r}, ${a.g}, ${a.b}, ${wi(a.a)})`
      : `rgb(${a.r}, ${a.g}, ${a.b})`)
  );
}
const Jc = (a) =>
    a <= 0.0031308 ? a * 12.92 : Math.pow(a, 1 / 2.4) * 1.055 - 0.055,
  Sl = (a) => (a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4));
function Ab(a, i, l) {
  const s = Sl(wi(a.r)),
    u = Sl(wi(a.g)),
    c = Sl(wi(a.b));
  return {
    r: on(Jc(s + l * (Sl(wi(i.r)) - s))),
    g: on(Jc(u + l * (Sl(wi(i.g)) - u))),
    b: on(Jc(c + l * (Sl(wi(i.b)) - c))),
    a: a.a + l * (i.a - a.a),
  };
}
function co(a, i, l) {
  if (a) {
    let s = br(a);
    (s[i] = Math.max(0, Math.min(s[i] + s[i] * l, i === 0 ? 360 : 1))),
      (s = _r(s)),
      (a.r = s[0]),
      (a.g = s[1]),
      (a.b = s[2]);
  }
}
function Xm(a, i) {
  return a && Object.assign(i || {}, a);
}
function zg(a) {
  var i = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(a)
      ? a.length >= 3 &&
        ((i = { r: a[0], g: a[1], b: a[2], a: 255 }),
        a.length > 3 && (i.a = on(a[3])))
      : ((i = Xm(a, { r: 0, g: 0, b: 0, a: 1 })), (i.a = on(i.a))),
    i
  );
}
function Eb(a) {
  return a.charAt(0) === "r" ? Ob(a) : vb(a);
}
class Xa {
  constructor(i) {
    if (i instanceof Xa) return i;
    const l = typeof i;
    let s;
    l === "object"
      ? (s = zg(i))
      : l === "string" && (s = rb(i) || Mb(i) || Eb(i)),
      (this._rgb = s),
      (this._valid = !!s);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var i = Xm(this._rgb);
    return i && (i.a = wi(i.a)), i;
  }
  set rgb(i) {
    this._rgb = zg(i);
  }
  rgbString() {
    return this._valid ? Db(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? hb(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? xb(this._rgb) : void 0;
  }
  mix(i, l) {
    if (i) {
      const s = this.rgb,
        u = i.rgb;
      let c;
      const f = l === c ? 0.5 : l,
        d = 2 * f - 1,
        g = s.a - u.a,
        m = ((d * g === -1 ? d : (d + g) / (1 + d * g)) + 1) / 2;
      (c = 1 - m),
        (s.r = 255 & (m * s.r + c * u.r + 0.5)),
        (s.g = 255 & (m * s.g + c * u.g + 0.5)),
        (s.b = 255 & (m * s.b + c * u.b + 0.5)),
        (s.a = f * s.a + (1 - f) * u.a),
        (this.rgb = s);
    }
    return this;
  }
  interpolate(i, l) {
    return i && (this._rgb = Ab(this._rgb, i._rgb, l)), this;
  }
  clone() {
    return new Xa(this.rgb);
  }
  alpha(i) {
    return (this._rgb.a = on(i)), this;
  }
  clearer(i) {
    const l = this._rgb;
    return (l.a *= 1 - i), this;
  }
  greyscale() {
    const i = this._rgb,
      l = Wa(i.r * 0.3 + i.g * 0.59 + i.b * 0.11);
    return (i.r = i.g = i.b = l), this;
  }
  opaquer(i) {
    const l = this._rgb;
    return (l.a *= 1 + i), this;
  }
  negate() {
    const i = this._rgb;
    return (i.r = 255 - i.r), (i.g = 255 - i.g), (i.b = 255 - i.b), this;
  }
  lighten(i) {
    return co(this._rgb, 2, i), this;
  }
  darken(i) {
    return co(this._rgb, 2, -i), this;
  }
  saturate(i) {
    return co(this._rgb, 1, i), this;
  }
  desaturate(i) {
    return co(this._rgb, 1, -i), this;
  }
  rotate(i) {
    return _b(this._rgb, i), this;
  }
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function zi() {}
const zb = (() => {
  let a = 0;
  return () => a++;
})();
function Nt(a) {
  return a == null;
}
function le(a) {
  if (Array.isArray && Array.isArray(a)) return !0;
  const i = Object.prototype.toString.call(a);
  return i.slice(0, 7) === "[object" && i.slice(-6) === "Array]";
}
function Dt(a) {
  return a !== null && Object.prototype.toString.call(a) === "[object Object]";
}
function Ke(a) {
  return (typeof a == "number" || a instanceof Number) && isFinite(+a);
}
function ui(a, i) {
  return Ke(a) ? a : i;
}
function _t(a, i) {
  return typeof a > "u" ? i : a;
}
const Cb = (a, i) =>
  typeof a == "string" && a.endsWith("%") ? (parseFloat(a) / 100) * i : +a;
function kt(a, i, l) {
  if (a && typeof a.call == "function") return a.apply(l, i);
}
function At(a, i, l, s) {
  let u, c, f;
  if (le(a)) for (c = a.length, u = 0; u < c; u++) i.call(l, a[u], u);
  else if (Dt(a))
    for (f = Object.keys(a), c = f.length, u = 0; u < c; u++)
      i.call(l, a[f[u]], f[u]);
}
function Do(a, i) {
  let l, s, u, c;
  if (!a || !i || a.length !== i.length) return !1;
  for (l = 0, s = a.length; l < s; ++l)
    if (
      ((u = a[l]),
      (c = i[l]),
      u.datasetIndex !== c.datasetIndex || u.index !== c.index)
    )
      return !1;
  return !0;
}
function Ao(a) {
  if (le(a)) return a.map(Ao);
  if (Dt(a)) {
    const i = Object.create(null),
      l = Object.keys(a),
      s = l.length;
    let u = 0;
    for (; u < s; ++u) i[l[u]] = Ao(a[l[u]]);
    return i;
  }
  return a;
}
function Gm(a) {
  return ["__proto__", "prototype", "constructor"].indexOf(a) === -1;
}
function Rb(a, i, l, s) {
  if (!Gm(a)) return;
  const u = i[a],
    c = l[a];
  Dt(u) && Dt(c) ? Ga(u, c, s) : (i[a] = Ao(c));
}
function Ga(a, i, l) {
  const s = le(i) ? i : [i],
    u = s.length;
  if (!Dt(a)) return a;
  l = l || {};
  const c = l.merger || Rb;
  let f;
  for (let d = 0; d < u; ++d) {
    if (((f = s[d]), !Dt(f))) continue;
    const g = Object.keys(f);
    for (let m = 0, y = g.length; m < y; ++m) c(g[m], a, f, l);
  }
  return a;
}
function ka(a, i) {
  return Ga(a, i, { merger: wb });
}
function wb(a, i, l) {
  if (!Gm(a)) return;
  const s = i[a],
    u = l[a];
  Dt(s) && Dt(u)
    ? ka(s, u)
    : Object.prototype.hasOwnProperty.call(i, a) || (i[a] = Ao(u));
}
const Cg = { "": (a) => a, x: (a) => a.x, y: (a) => a.y };
function Hb(a) {
  const i = a.split("."),
    l = [];
  let s = "";
  for (const u of i)
    (s += u),
      s.endsWith("\\") ? (s = s.slice(0, -1) + ".") : (l.push(s), (s = ""));
  return l;
}
function Bb(a) {
  const i = Hb(a);
  return (l) => {
    for (const s of i) {
      if (s === "") break;
      l = l && l[s];
    }
    return l;
  };
}
function Eo(a, i) {
  return (Cg[i] || (Cg[i] = Bb(i)))(a);
}
function xr(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}
const zo = (a) => typeof a < "u",
  un = (a) => typeof a == "function",
  Rg = (a, i) => {
    if (a.size !== i.size) return !1;
    for (const l of a) if (!i.has(l)) return !1;
    return !0;
  };
function Lb(a) {
  return a.type === "mouseup" || a.type === "click" || a.type === "contextmenu";
}
const ae = Math.PI,
  fi = 2 * ae,
  Nb = fi + ae,
  Co = Number.POSITIVE_INFINITY,
  kb = ae / 180,
  ei = ae / 2,
  Rn = ae / 4,
  wg = (ae * 2) / 3,
  Qm = Math.log10,
  Tl = Math.sign;
function Ua(a, i, l) {
  return Math.abs(a - i) < l;
}
function Hg(a) {
  const i = Math.round(a);
  a = Ua(a, i, a / 1e3) ? i : a;
  const l = Math.pow(10, Math.floor(Qm(a))),
    s = a / l;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * l;
}
function Ub(a) {
  const i = [],
    l = Math.sqrt(a);
  let s;
  for (s = 1; s < l; s++) a % s === 0 && (i.push(s), i.push(a / s));
  return l === (l | 0) && i.push(l), i.sort((u, c) => u - c).pop(), i;
}
function jb(a) {
  return (
    typeof a == "symbol" ||
    (typeof a == "object" &&
      a !== null &&
      !(Symbol.toPrimitive in a || "toString" in a || "valueOf" in a))
  );
}
function Qa(a) {
  return !jb(a) && !isNaN(parseFloat(a)) && isFinite(a);
}
function Yb(a, i) {
  const l = Math.round(a);
  return l - i <= a && l + i >= a;
}
function Vb(a, i, l) {
  let s, u, c;
  for (s = 0, u = a.length; s < u; s++)
    (c = a[s][l]),
      isNaN(c) || ((i.min = Math.min(i.min, c)), (i.max = Math.max(i.max, c)));
}
function Nn(a) {
  return a * (ae / 180);
}
function qb(a) {
  return a * (180 / ae);
}
function Bg(a) {
  if (!Ke(a)) return;
  let i = 1,
    l = 0;
  for (; Math.round(a * i) / i !== a; ) (i *= 10), l++;
  return l;
}
function Xb(a, i) {
  const l = i.x - a.x,
    s = i.y - a.y,
    u = Math.sqrt(l * l + s * s);
  let c = Math.atan2(s, l);
  return c < -0.5 * ae && (c += fi), { angle: c, distance: u };
}
function or(a, i) {
  return Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2));
}
function Gb(a, i) {
  return ((a - i + Nb) % fi) - ae;
}
function an(a) {
  return ((a % fi) + fi) % fi;
}
function Zm(a, i, l, s) {
  const u = an(a),
    c = an(i),
    f = an(l),
    d = an(c - u),
    g = an(f - u),
    m = an(u - c),
    y = an(u - f);
  return u === c || u === f || (s && c === f) || (d > g && m < y);
}
function Qe(a, i, l) {
  return Math.max(i, Math.min(l, a));
}
function Qb(a) {
  return Qe(a, -32768, 32767);
}
function Ha(a, i, l, s = 1e-6) {
  return a >= Math.min(i, l) - s && a <= Math.max(i, l) + s;
}
function Sr(a, i, l) {
  l = l || ((f) => a[f] < i);
  let s = a.length - 1,
    u = 0,
    c;
  for (; s - u > 1; ) (c = (u + s) >> 1), l(c) ? (u = c) : (s = c);
  return { lo: u, hi: s };
}
const kn = (a, i, l, s) =>
    Sr(
      a,
      l,
      s
        ? (u) => {
            const c = a[u][i];
            return c < l || (c === l && a[u + 1][i] === l);
          }
        : (u) => a[u][i] < l
    ),
  Zb = (a, i, l) => Sr(a, l, (s) => a[s][i] >= l);
function Kb(a, i, l) {
  let s = 0,
    u = a.length;
  for (; s < u && a[s] < i; ) s++;
  for (; u > s && a[u - 1] > l; ) u--;
  return s > 0 || u < a.length ? a.slice(s, u) : a;
}
const Km = ["push", "pop", "shift", "splice", "unshift"];
function Fb(a, i) {
  if (a._chartjs) {
    a._chartjs.listeners.push(i);
    return;
  }
  Object.defineProperty(a, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [i] },
  }),
    Km.forEach((l) => {
      const s = "_onData" + xr(l),
        u = a[l];
      Object.defineProperty(a, l, {
        configurable: !0,
        enumerable: !1,
        value(...c) {
          const f = u.apply(this, c);
          return (
            a._chartjs.listeners.forEach((d) => {
              typeof d[s] == "function" && d[s](...c);
            }),
            f
          );
        },
      });
    });
}
function Lg(a, i) {
  const l = a._chartjs;
  if (!l) return;
  const s = l.listeners,
    u = s.indexOf(i);
  u !== -1 && s.splice(u, 1),
    !(s.length > 0) &&
      (Km.forEach((c) => {
        delete a[c];
      }),
      delete a._chartjs);
}
function Wb(a) {
  const i = new Set(a);
  return i.size === a.length ? a : Array.from(i);
}
const Fm = (function () {
  return typeof window > "u"
    ? function (a) {
        return a();
      }
    : window.requestAnimationFrame;
})();
function Wm(a, i) {
  let l = [],
    s = !1;
  return function (...u) {
    (l = u),
      s ||
        ((s = !0),
        Fm.call(window, () => {
          (s = !1), a.apply(i, l);
        }));
  };
}
function Jb(a, i) {
  let l;
  return function (...s) {
    return (
      i ? (clearTimeout(l), (l = setTimeout(a, i, s))) : a.apply(this, s), i
    );
  };
}
const Mr = (a) => (a === "start" ? "left" : a === "end" ? "right" : "center"),
  de = (a, i, l) => (a === "start" ? i : a === "end" ? l : (i + l) / 2),
  $b = (a, i, l, s) =>
    a === (s ? "left" : "right") ? l : a === "center" ? (i + l) / 2 : i;
function Pb(a, i, l) {
  const s = i.length;
  let u = 0,
    c = s;
  if (a._sorted) {
    const { iScale: f, vScale: d, _parsed: g } = a,
      m = a.dataset && a.dataset.options ? a.dataset.options.spanGaps : null,
      y = f.axis,
      { min: v, max: _, minDefined: S, maxDefined: D } = f.getUserBounds();
    if (S) {
      if (
        ((u = Math.min(
          kn(g, y, v).lo,
          l ? s : kn(i, y, f.getPixelForValue(v)).lo
        )),
        m)
      ) {
        const A = g
          .slice(0, u + 1)
          .reverse()
          .findIndex((E) => !Nt(E[d.axis]));
        u -= Math.max(0, A);
      }
      u = Qe(u, 0, s - 1);
    }
    if (D) {
      let A = Math.max(
        kn(g, f.axis, _, !0).hi + 1,
        l ? 0 : kn(i, y, f.getPixelForValue(_), !0).hi + 1
      );
      if (m) {
        const E = g.slice(A - 1).findIndex((B) => !Nt(B[d.axis]));
        A += Math.max(0, E);
      }
      c = Qe(A, u, s) - u;
    } else c = s - u;
  }
  return { start: u, count: c };
}
function Ib(a) {
  const { xScale: i, yScale: l, _scaleRanges: s } = a,
    u = { xmin: i.min, xmax: i.max, ymin: l.min, ymax: l.max };
  if (!s) return (a._scaleRanges = u), !0;
  const c =
    s.xmin !== i.min ||
    s.xmax !== i.max ||
    s.ymin !== l.min ||
    s.ymax !== l.max;
  return Object.assign(s, u), c;
}
const ro = (a) => a === 0 || a === 1,
  Ng = (a, i, l) =>
    -(Math.pow(2, 10 * (a -= 1)) * Math.sin(((a - i) * fi) / l)),
  kg = (a, i, l) => Math.pow(2, -10 * a) * Math.sin(((a - i) * fi) / l) + 1,
  ja = {
    linear: (a) => a,
    easeInQuad: (a) => a * a,
    easeOutQuad: (a) => -a * (a - 2),
    easeInOutQuad: (a) =>
      (a /= 0.5) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1),
    easeInCubic: (a) => a * a * a,
    easeOutCubic: (a) => (a -= 1) * a * a + 1,
    easeInOutCubic: (a) =>
      (a /= 0.5) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2),
    easeInQuart: (a) => a * a * a * a,
    easeOutQuart: (a) => -((a -= 1) * a * a * a - 1),
    easeInOutQuart: (a) =>
      (a /= 0.5) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2),
    easeInQuint: (a) => a * a * a * a * a,
    easeOutQuint: (a) => (a -= 1) * a * a * a * a + 1,
    easeInOutQuint: (a) =>
      (a /= 0.5) < 1
        ? 0.5 * a * a * a * a * a
        : 0.5 * ((a -= 2) * a * a * a * a + 2),
    easeInSine: (a) => -Math.cos(a * ei) + 1,
    easeOutSine: (a) => Math.sin(a * ei),
    easeInOutSine: (a) => -0.5 * (Math.cos(ae * a) - 1),
    easeInExpo: (a) => (a === 0 ? 0 : Math.pow(2, 10 * (a - 1))),
    easeOutExpo: (a) => (a === 1 ? 1 : -Math.pow(2, -10 * a) + 1),
    easeInOutExpo: (a) =>
      ro(a)
        ? a
        : a < 0.5
        ? 0.5 * Math.pow(2, 10 * (a * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (a * 2 - 1)) + 2),
    easeInCirc: (a) => (a >= 1 ? a : -(Math.sqrt(1 - a * a) - 1)),
    easeOutCirc: (a) => Math.sqrt(1 - (a -= 1) * a),
    easeInOutCirc: (a) =>
      (a /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - a * a) - 1)
        : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1),
    easeInElastic: (a) => (ro(a) ? a : Ng(a, 0.075, 0.3)),
    easeOutElastic: (a) => (ro(a) ? a : kg(a, 0.075, 0.3)),
    easeInOutElastic(a) {
      return ro(a)
        ? a
        : a < 0.5
        ? 0.5 * Ng(a * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * kg(a * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(a) {
      return a * a * ((1.70158 + 1) * a - 1.70158);
    },
    easeOutBack(a) {
      return (a -= 1) * a * ((1.70158 + 1) * a + 1.70158) + 1;
    },
    easeInOutBack(a) {
      let i = 1.70158;
      return (a /= 0.5) < 1
        ? 0.5 * (a * a * (((i *= 1.525) + 1) * a - i))
        : 0.5 * ((a -= 2) * a * (((i *= 1.525) + 1) * a + i) + 2);
    },
    easeInBounce: (a) => 1 - ja.easeOutBounce(1 - a),
    easeOutBounce(a) {
      return a < 1 / 2.75
        ? 7.5625 * a * a
        : a < 2 / 2.75
        ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
        : a < 2.5 / 2.75
        ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
        : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
    },
    easeInOutBounce: (a) =>
      a < 0.5
        ? ja.easeInBounce(a * 2) * 0.5
        : ja.easeOutBounce(a * 2 - 1) * 0.5 + 0.5,
  };
function Tr(a) {
  if (a && typeof a == "object") {
    const i = a.toString();
    return i === "[object CanvasPattern]" || i === "[object CanvasGradient]";
  }
  return !1;
}
function Ug(a) {
  return Tr(a) ? a : new Xa(a);
}
function $c(a) {
  return Tr(a) ? a : new Xa(a).saturate(0.5).darken(0.1).hexString();
}
const tv = ["x", "y", "borderWidth", "radius", "tension"],
  ev = ["color", "borderColor", "backgroundColor"];
function iv(a) {
  a.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    a.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (i) =>
        i !== "onProgress" && i !== "onComplete" && i !== "fn",
    }),
    a.set("animations", {
      colors: { type: "color", properties: ev },
      numbers: { type: "number", properties: tv },
    }),
    a.describe("animations", { _fallback: "animation" }),
    a.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (i) => i | 0 },
        },
      },
    });
}
function nv(a) {
  a.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const jg = new Map();
function lv(a, i) {
  i = i || {};
  const l = a + JSON.stringify(i);
  let s = jg.get(l);
  return s || ((s = new Intl.NumberFormat(a, i)), jg.set(l, s)), s;
}
function Jm(a, i, l) {
  return lv(i, l).format(a);
}
const av = {
  values(a) {
    return le(a) ? a : "" + a;
  },
  numeric(a, i, l) {
    if (a === 0) return "0";
    const s = this.chart.options.locale;
    let u,
      c = a;
    if (l.length > 1) {
      const m = Math.max(Math.abs(l[0].value), Math.abs(l[l.length - 1].value));
      (m < 1e-4 || m > 1e15) && (u = "scientific"), (c = sv(a, l));
    }
    const f = Qm(Math.abs(c)),
      d = isNaN(f) ? 1 : Math.max(Math.min(-1 * Math.floor(f), 20), 0),
      g = { notation: u, minimumFractionDigits: d, maximumFractionDigits: d };
    return Object.assign(g, this.options.ticks.format), Jm(a, s, g);
  },
};
function sv(a, i) {
  let l = i.length > 3 ? i[2].value - i[1].value : i[1].value - i[0].value;
  return Math.abs(l) >= 1 && a !== Math.floor(a) && (l = a - Math.floor(a)), l;
}
var $m = { formatters: av };
function ov(a) {
  a.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (i, l) => l.lineWidth,
      tickColor: (i, l) => l.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: $m.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    a.route("scale.ticks", "color", "", "color"),
    a.route("scale.grid", "color", "", "borderColor"),
    a.route("scale.border", "color", "", "borderColor"),
    a.route("scale.title", "color", "", "color"),
    a.describe("scale", {
      _fallback: !1,
      _scriptable: (i) =>
        !i.startsWith("before") &&
        !i.startsWith("after") &&
        i !== "callback" &&
        i !== "parser",
      _indexable: (i) =>
        i !== "borderDash" && i !== "tickBorderDash" && i !== "dash",
    }),
    a.describe("scales", { _fallback: "scale" }),
    a.describe("scale.ticks", {
      _scriptable: (i) => i !== "backdropPadding" && i !== "callback",
      _indexable: (i) => i !== "backdropPadding",
    });
}
const jn = Object.create(null),
  ur = Object.create(null);
function Ya(a, i) {
  if (!i) return a;
  const l = i.split(".");
  for (let s = 0, u = l.length; s < u; ++s) {
    const c = l[s];
    a = a[c] || (a[c] = Object.create(null));
  }
  return a;
}
function Pc(a, i, l) {
  return typeof i == "string" ? Ga(Ya(a, i), l) : Ga(Ya(a, ""), i);
}
class uv {
  constructor(i, l) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (s, u) => $c(u.backgroundColor)),
      (this.hoverBorderColor = (s, u) => $c(u.borderColor)),
      (this.hoverColor = (s, u) => $c(u.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(i),
      this.apply(l);
  }
  set(i, l) {
    return Pc(this, i, l);
  }
  get(i) {
    return Ya(this, i);
  }
  describe(i, l) {
    return Pc(ur, i, l);
  }
  override(i, l) {
    return Pc(jn, i, l);
  }
  route(i, l, s, u) {
    const c = Ya(this, i),
      f = Ya(this, s),
      d = "_" + l;
    Object.defineProperties(c, {
      [d]: { value: c[l], writable: !0 },
      [l]: {
        enumerable: !0,
        get() {
          const g = this[d],
            m = f[u];
          return Dt(g) ? Object.assign({}, m, g) : _t(g, m);
        },
        set(g) {
          this[d] = g;
        },
      },
    });
  }
  apply(i) {
    i.forEach((l) => l(this));
  }
}
var Kt = new uv(
  {
    _scriptable: (a) => !a.startsWith("on"),
    _indexable: (a) => a !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [iv, nv, ov]
);
function cv(a) {
  return !a || Nt(a.size) || Nt(a.family)
    ? null
    : (a.style ? a.style + " " : "") +
        (a.weight ? a.weight + " " : "") +
        a.size +
        "px " +
        a.family;
}
function Yg(a, i, l, s, u) {
  let c = i[u];
  return (
    c || ((c = i[u] = a.measureText(u).width), l.push(u)), c > s && (s = c), s
  );
}
function wn(a, i, l) {
  const s = a.currentDevicePixelRatio,
    u = l !== 0 ? Math.max(l / 2, 0.5) : 0;
  return Math.round((i - u) * s) / s + u;
}
function Vg(a, i) {
  (!i && !a) ||
    ((i = i || a.getContext("2d")),
    i.save(),
    i.resetTransform(),
    i.clearRect(0, 0, a.width, a.height),
    i.restore());
}
function cr(a, i, l, s) {
  Pm(a, i, l, s, null);
}
function Pm(a, i, l, s, u) {
  let c, f, d, g, m, y, v, _;
  const S = i.pointStyle,
    D = i.rotation,
    A = i.radius;
  let E = (D || 0) * kb;
  if (
    S &&
    typeof S == "object" &&
    ((c = S.toString()),
    c === "[object HTMLImageElement]" || c === "[object HTMLCanvasElement]")
  ) {
    a.save(),
      a.translate(l, s),
      a.rotate(E),
      a.drawImage(S, -S.width / 2, -S.height / 2, S.width, S.height),
      a.restore();
    return;
  }
  if (!(isNaN(A) || A <= 0)) {
    switch ((a.beginPath(), S)) {
      default:
        u ? a.ellipse(l, s, u / 2, A, 0, 0, fi) : a.arc(l, s, A, 0, fi),
          a.closePath();
        break;
      case "triangle":
        (y = u ? u / 2 : A),
          a.moveTo(l + Math.sin(E) * y, s - Math.cos(E) * A),
          (E += wg),
          a.lineTo(l + Math.sin(E) * y, s - Math.cos(E) * A),
          (E += wg),
          a.lineTo(l + Math.sin(E) * y, s - Math.cos(E) * A),
          a.closePath();
        break;
      case "rectRounded":
        (m = A * 0.516),
          (g = A - m),
          (f = Math.cos(E + Rn) * g),
          (v = Math.cos(E + Rn) * (u ? u / 2 - m : g)),
          (d = Math.sin(E + Rn) * g),
          (_ = Math.sin(E + Rn) * (u ? u / 2 - m : g)),
          a.arc(l - v, s - d, m, E - ae, E - ei),
          a.arc(l + _, s - f, m, E - ei, E),
          a.arc(l + v, s + d, m, E, E + ei),
          a.arc(l - _, s + f, m, E + ei, E + ae),
          a.closePath();
        break;
      case "rect":
        if (!D) {
          (g = Math.SQRT1_2 * A),
            (y = u ? u / 2 : g),
            a.rect(l - y, s - g, 2 * y, 2 * g);
          break;
        }
        E += Rn;
      case "rectRot":
        (v = Math.cos(E) * (u ? u / 2 : A)),
          (f = Math.cos(E) * A),
          (d = Math.sin(E) * A),
          (_ = Math.sin(E) * (u ? u / 2 : A)),
          a.moveTo(l - v, s - d),
          a.lineTo(l + _, s - f),
          a.lineTo(l + v, s + d),
          a.lineTo(l - _, s + f),
          a.closePath();
        break;
      case "crossRot":
        E += Rn;
      case "cross":
        (v = Math.cos(E) * (u ? u / 2 : A)),
          (f = Math.cos(E) * A),
          (d = Math.sin(E) * A),
          (_ = Math.sin(E) * (u ? u / 2 : A)),
          a.moveTo(l - v, s - d),
          a.lineTo(l + v, s + d),
          a.moveTo(l + _, s - f),
          a.lineTo(l - _, s + f);
        break;
      case "star":
        (v = Math.cos(E) * (u ? u / 2 : A)),
          (f = Math.cos(E) * A),
          (d = Math.sin(E) * A),
          (_ = Math.sin(E) * (u ? u / 2 : A)),
          a.moveTo(l - v, s - d),
          a.lineTo(l + v, s + d),
          a.moveTo(l + _, s - f),
          a.lineTo(l - _, s + f),
          (E += Rn),
          (v = Math.cos(E) * (u ? u / 2 : A)),
          (f = Math.cos(E) * A),
          (d = Math.sin(E) * A),
          (_ = Math.sin(E) * (u ? u / 2 : A)),
          a.moveTo(l - v, s - d),
          a.lineTo(l + v, s + d),
          a.moveTo(l + _, s - f),
          a.lineTo(l - _, s + f);
        break;
      case "line":
        (f = u ? u / 2 : Math.cos(E) * A),
          (d = Math.sin(E) * A),
          a.moveTo(l - f, s - d),
          a.lineTo(l + f, s + d);
        break;
      case "dash":
        a.moveTo(l, s),
          a.lineTo(l + Math.cos(E) * (u ? u / 2 : A), s + Math.sin(E) * A);
        break;
      case !1:
        a.closePath();
        break;
    }
    a.fill(), i.borderWidth > 0 && a.stroke();
  }
}
function Za(a, i, l) {
  return (
    (l = l || 0.5),
    !i ||
      (a &&
        a.x > i.left - l &&
        a.x < i.right + l &&
        a.y > i.top - l &&
        a.y < i.bottom + l)
  );
}
function Or(a, i) {
  a.save(),
    a.beginPath(),
    a.rect(i.left, i.top, i.right - i.left, i.bottom - i.top),
    a.clip();
}
function Dr(a) {
  a.restore();
}
function rv(a, i, l, s, u) {
  if (!i) return a.lineTo(l.x, l.y);
  if (u === "middle") {
    const c = (i.x + l.x) / 2;
    a.lineTo(c, i.y), a.lineTo(c, l.y);
  } else (u === "after") != !!s ? a.lineTo(i.x, l.y) : a.lineTo(l.x, i.y);
  a.lineTo(l.x, l.y);
}
function fv(a, i, l, s) {
  if (!i) return a.lineTo(l.x, l.y);
  a.bezierCurveTo(
    s ? i.cp1x : i.cp2x,
    s ? i.cp1y : i.cp2y,
    s ? l.cp2x : l.cp1x,
    s ? l.cp2y : l.cp1y,
    l.x,
    l.y
  );
}
function hv(a, i) {
  i.translation && a.translate(i.translation[0], i.translation[1]),
    Nt(i.rotation) || a.rotate(i.rotation),
    i.color && (a.fillStyle = i.color),
    i.textAlign && (a.textAlign = i.textAlign),
    i.textBaseline && (a.textBaseline = i.textBaseline);
}
function dv(a, i, l, s, u) {
  if (u.strikethrough || u.underline) {
    const c = a.measureText(s),
      f = i - c.actualBoundingBoxLeft,
      d = i + c.actualBoundingBoxRight,
      g = l - c.actualBoundingBoxAscent,
      m = l + c.actualBoundingBoxDescent,
      y = u.strikethrough ? (g + m) / 2 : m;
    (a.strokeStyle = a.fillStyle),
      a.beginPath(),
      (a.lineWidth = u.decorationWidth || 2),
      a.moveTo(f, y),
      a.lineTo(d, y),
      a.stroke();
  }
}
function gv(a, i) {
  const l = a.fillStyle;
  (a.fillStyle = i.color),
    a.fillRect(i.left, i.top, i.width, i.height),
    (a.fillStyle = l);
}
function Ka(a, i, l, s, u, c = {}) {
  const f = le(i) ? i : [i],
    d = c.strokeWidth > 0 && c.strokeColor !== "";
  let g, m;
  for (a.save(), a.font = u.string, hv(a, c), g = 0; g < f.length; ++g)
    (m = f[g]),
      c.backdrop && gv(a, c.backdrop),
      d &&
        (c.strokeColor && (a.strokeStyle = c.strokeColor),
        Nt(c.strokeWidth) || (a.lineWidth = c.strokeWidth),
        a.strokeText(m, l, s, c.maxWidth)),
      a.fillText(m, l, s, c.maxWidth),
      dv(a, l, s, m, c),
      (s += Number(u.lineHeight));
  a.restore();
}
function rr(a, i) {
  const { x: l, y: s, w: u, h: c, radius: f } = i;
  a.arc(l + f.topLeft, s + f.topLeft, f.topLeft, 1.5 * ae, ae, !0),
    a.lineTo(l, s + c - f.bottomLeft),
    a.arc(l + f.bottomLeft, s + c - f.bottomLeft, f.bottomLeft, ae, ei, !0),
    a.lineTo(l + u - f.bottomRight, s + c),
    a.arc(
      l + u - f.bottomRight,
      s + c - f.bottomRight,
      f.bottomRight,
      ei,
      0,
      !0
    ),
    a.lineTo(l + u, s + f.topRight),
    a.arc(l + u - f.topRight, s + f.topRight, f.topRight, 0, -ei, !0),
    a.lineTo(l + f.topLeft, s);
}
const mv = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  pv = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function yv(a, i) {
  const l = ("" + a).match(mv);
  if (!l || l[1] === "normal") return i * 1.2;
  switch (((a = +l[2]), l[3])) {
    case "px":
      return a;
    case "%":
      a /= 100;
      break;
  }
  return i * a;
}
const bv = (a) => +a || 0;
function Im(a, i) {
  const l = {},
    s = Dt(i),
    u = s ? Object.keys(i) : i,
    c = Dt(a) ? (s ? (f) => _t(a[f], a[i[f]]) : (f) => a[f]) : () => a;
  for (const f of u) l[f] = bv(c(f));
  return l;
}
function vv(a) {
  return Im(a, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Va(a) {
  return Im(a, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Fe(a) {
  const i = vv(a);
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
function ge(a, i) {
  (a = a || {}), (i = i || Kt.font);
  let l = _t(a.size, i.size);
  typeof l == "string" && (l = parseInt(l, 10));
  let s = _t(a.style, i.style);
  s &&
    !("" + s).match(pv) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const u = {
    family: _t(a.family, i.family),
    lineHeight: yv(_t(a.lineHeight, i.lineHeight), l),
    size: l,
    style: s,
    weight: _t(a.weight, i.weight),
    string: "",
  };
  return (u.string = cv(u)), u;
}
function fo(a, i, l, s) {
  let u, c, f;
  for (u = 0, c = a.length; u < c; ++u)
    if (((f = a[u]), f !== void 0 && f !== void 0)) return f;
}
function _v(a, i, l) {
  const { min: s, max: u } = a,
    c = Cb(i, (u - s) / 2),
    f = (d, g) => (l && d === 0 ? 0 : d + g);
  return { min: f(s, -Math.abs(c)), max: f(u, c) };
}
function Yn(a, i) {
  return Object.assign(Object.create(a), i);
}
function Ar(a, i = [""], l, s, u = () => a[0]) {
  const c = l || a;
  typeof s > "u" && (s = n0("_fallback", a));
  const f = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: a,
    _rootScopes: c,
    _fallback: s,
    _getTarget: u,
    override: (d) => Ar([d, ...a], i, c, s),
  };
  return new Proxy(f, {
    deleteProperty(d, g) {
      return delete d[g], delete d._keys, delete a[0][g], !0;
    },
    get(d, g) {
      return e0(d, g, () => Ev(g, i, a, d));
    },
    getOwnPropertyDescriptor(d, g) {
      return Reflect.getOwnPropertyDescriptor(d._scopes[0], g);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(a[0]);
    },
    has(d, g) {
      return Xg(d).includes(g);
    },
    ownKeys(d) {
      return Xg(d);
    },
    set(d, g, m) {
      const y = d._storage || (d._storage = u());
      return (d[g] = y[g] = m), delete d._keys, !0;
    },
  });
}
function Ol(a, i, l, s) {
  const u = {
    _cacheable: !1,
    _proxy: a,
    _context: i,
    _subProxy: l,
    _stack: new Set(),
    _descriptors: t0(a, s),
    setContext: (c) => Ol(a, c, l, s),
    override: (c) => Ol(a.override(c), i, l, s),
  };
  return new Proxy(u, {
    deleteProperty(c, f) {
      return delete c[f], delete a[f], !0;
    },
    get(c, f, d) {
      return e0(c, f, () => Sv(c, f, d));
    },
    getOwnPropertyDescriptor(c, f) {
      return c._descriptors.allKeys
        ? Reflect.has(a, f)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(a, f);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(a);
    },
    has(c, f) {
      return Reflect.has(a, f);
    },
    ownKeys() {
      return Reflect.ownKeys(a);
    },
    set(c, f, d) {
      return (a[f] = d), delete c[f], !0;
    },
  });
}
function t0(a, i = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: l = i.scriptable,
    _indexable: s = i.indexable,
    _allKeys: u = i.allKeys,
  } = a;
  return {
    allKeys: u,
    scriptable: l,
    indexable: s,
    isScriptable: un(l) ? l : () => l,
    isIndexable: un(s) ? s : () => s,
  };
}
const xv = (a, i) => (a ? a + xr(i) : i),
  Er = (a, i) =>
    Dt(i) &&
    a !== "adapters" &&
    (Object.getPrototypeOf(i) === null || i.constructor === Object);
function e0(a, i, l) {
  if (Object.prototype.hasOwnProperty.call(a, i) || i === "constructor")
    return a[i];
  const s = l();
  return (a[i] = s), s;
}
function Sv(a, i, l) {
  const { _proxy: s, _context: u, _subProxy: c, _descriptors: f } = a;
  let d = s[i];
  return (
    un(d) && f.isScriptable(i) && (d = Mv(i, d, a, l)),
    le(d) && d.length && (d = Tv(i, d, a, f.isIndexable)),
    Er(i, d) && (d = Ol(d, u, c && c[i], f)),
    d
  );
}
function Mv(a, i, l, s) {
  const { _proxy: u, _context: c, _subProxy: f, _stack: d } = l;
  if (d.has(a))
    throw new Error(
      "Recursion detected: " + Array.from(d).join("->") + "->" + a
    );
  d.add(a);
  let g = i(c, f || s);
  return d.delete(a), Er(a, g) && (g = zr(u._scopes, u, a, g)), g;
}
function Tv(a, i, l, s) {
  const { _proxy: u, _context: c, _subProxy: f, _descriptors: d } = l;
  if (typeof c.index < "u" && s(a)) return i[c.index % i.length];
  if (Dt(i[0])) {
    const g = i,
      m = u._scopes.filter((y) => y !== g);
    i = [];
    for (const y of g) {
      const v = zr(m, u, a, y);
      i.push(Ol(v, c, f && f[a], d));
    }
  }
  return i;
}
function i0(a, i, l) {
  return un(a) ? a(i, l) : a;
}
const Ov = (a, i) => (a === !0 ? i : typeof a == "string" ? Eo(i, a) : void 0);
function Dv(a, i, l, s, u) {
  for (const c of i) {
    const f = Ov(l, c);
    if (f) {
      a.add(f);
      const d = i0(f._fallback, l, u);
      if (typeof d < "u" && d !== l && d !== s) return d;
    } else if (f === !1 && typeof s < "u" && l !== s) return null;
  }
  return !1;
}
function zr(a, i, l, s) {
  const u = i._rootScopes,
    c = i0(i._fallback, l, s),
    f = [...a, ...u],
    d = new Set();
  d.add(s);
  let g = qg(d, f, l, c || l, s);
  return g === null ||
    (typeof c < "u" && c !== l && ((g = qg(d, f, c, g, s)), g === null))
    ? !1
    : Ar(Array.from(d), [""], u, c, () => Av(i, l, s));
}
function qg(a, i, l, s, u) {
  for (; l; ) l = Dv(a, i, l, s, u);
  return l;
}
function Av(a, i, l) {
  const s = a._getTarget();
  i in s || (s[i] = {});
  const u = s[i];
  return le(u) && Dt(l) ? l : u || {};
}
function Ev(a, i, l, s) {
  let u;
  for (const c of i)
    if (((u = n0(xv(c, a), l)), typeof u < "u"))
      return Er(a, u) ? zr(l, s, a, u) : u;
}
function n0(a, i) {
  for (const l of i) {
    if (!l) continue;
    const s = l[a];
    if (typeof s < "u") return s;
  }
}
function Xg(a) {
  let i = a._keys;
  return i || (i = a._keys = zv(a._scopes)), i;
}
function zv(a) {
  const i = new Set();
  for (const l of a)
    for (const s of Object.keys(l).filter((u) => !u.startsWith("_"))) i.add(s);
  return Array.from(i);
}
const Cv = Number.EPSILON || 1e-14,
  Dl = (a, i) => i < a.length && !a[i].skip && a[i],
  l0 = (a) => (a === "x" ? "y" : "x");
function Rv(a, i, l, s) {
  const u = a.skip ? i : a,
    c = i,
    f = l.skip ? i : l,
    d = or(c, u),
    g = or(f, c);
  let m = d / (d + g),
    y = g / (d + g);
  (m = isNaN(m) ? 0 : m), (y = isNaN(y) ? 0 : y);
  const v = s * m,
    _ = s * y;
  return {
    previous: { x: c.x - v * (f.x - u.x), y: c.y - v * (f.y - u.y) },
    next: { x: c.x + _ * (f.x - u.x), y: c.y + _ * (f.y - u.y) },
  };
}
function wv(a, i, l) {
  const s = a.length;
  let u,
    c,
    f,
    d,
    g,
    m = Dl(a, 0);
  for (let y = 0; y < s - 1; ++y)
    if (((g = m), (m = Dl(a, y + 1)), !(!g || !m))) {
      if (Ua(i[y], 0, Cv)) {
        l[y] = l[y + 1] = 0;
        continue;
      }
      (u = l[y] / i[y]),
        (c = l[y + 1] / i[y]),
        (d = Math.pow(u, 2) + Math.pow(c, 2)),
        !(d <= 9) &&
          ((f = 3 / Math.sqrt(d)),
          (l[y] = u * f * i[y]),
          (l[y + 1] = c * f * i[y]));
    }
}
function Hv(a, i, l = "x") {
  const s = l0(l),
    u = a.length;
  let c,
    f,
    d,
    g = Dl(a, 0);
  for (let m = 0; m < u; ++m) {
    if (((f = d), (d = g), (g = Dl(a, m + 1)), !d)) continue;
    const y = d[l],
      v = d[s];
    f &&
      ((c = (y - f[l]) / 3),
      (d[`cp1${l}`] = y - c),
      (d[`cp1${s}`] = v - c * i[m])),
      g &&
        ((c = (g[l] - y) / 3),
        (d[`cp2${l}`] = y + c),
        (d[`cp2${s}`] = v + c * i[m]));
  }
}
function Bv(a, i = "x") {
  const l = l0(i),
    s = a.length,
    u = Array(s).fill(0),
    c = Array(s);
  let f,
    d,
    g,
    m = Dl(a, 0);
  for (f = 0; f < s; ++f)
    if (((d = g), (g = m), (m = Dl(a, f + 1)), !!g)) {
      if (m) {
        const y = m[i] - g[i];
        u[f] = y !== 0 ? (m[l] - g[l]) / y : 0;
      }
      c[f] = d
        ? m
          ? Tl(u[f - 1]) !== Tl(u[f])
            ? 0
            : (u[f - 1] + u[f]) / 2
          : u[f - 1]
        : u[f];
    }
  wv(a, u, c), Hv(a, c, i);
}
function ho(a, i, l) {
  return Math.max(Math.min(a, l), i);
}
function Lv(a, i) {
  let l,
    s,
    u,
    c,
    f,
    d = Za(a[0], i);
  for (l = 0, s = a.length; l < s; ++l)
    (f = c),
      (c = d),
      (d = l < s - 1 && Za(a[l + 1], i)),
      c &&
        ((u = a[l]),
        f &&
          ((u.cp1x = ho(u.cp1x, i.left, i.right)),
          (u.cp1y = ho(u.cp1y, i.top, i.bottom))),
        d &&
          ((u.cp2x = ho(u.cp2x, i.left, i.right)),
          (u.cp2y = ho(u.cp2y, i.top, i.bottom))));
}
function Nv(a, i, l, s, u) {
  let c, f, d, g;
  if (
    (i.spanGaps && (a = a.filter((m) => !m.skip)),
    i.cubicInterpolationMode === "monotone")
  )
    Bv(a, u);
  else {
    let m = s ? a[a.length - 1] : a[0];
    for (c = 0, f = a.length; c < f; ++c)
      (d = a[c]),
        (g = Rv(m, d, a[Math.min(c + 1, f - (s ? 0 : 1)) % f], i.tension)),
        (d.cp1x = g.previous.x),
        (d.cp1y = g.previous.y),
        (d.cp2x = g.next.x),
        (d.cp2y = g.next.y),
        (m = d);
  }
  i.capBezierPoints && Lv(a, l);
}
function Cr() {
  return typeof window < "u" && typeof document < "u";
}
function Rr(a) {
  let i = a.parentNode;
  return i && i.toString() === "[object ShadowRoot]" && (i = i.host), i;
}
function Ro(a, i, l) {
  let s;
  return (
    typeof a == "string"
      ? ((s = parseInt(a, 10)),
        a.indexOf("%") !== -1 && (s = (s / 100) * i.parentNode[l]))
      : (s = a),
    s
  );
}
const Bo = (a) => a.ownerDocument.defaultView.getComputedStyle(a, null);
function kv(a, i) {
  return Bo(a).getPropertyValue(i);
}
const Uv = ["top", "right", "bottom", "left"];
function Un(a, i, l) {
  const s = {};
  l = l ? "-" + l : "";
  for (let u = 0; u < 4; u++) {
    const c = Uv[u];
    s[c] = parseFloat(a[i + "-" + c + l]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const jv = (a, i, l) => (a > 0 || i > 0) && (!l || !l.shadowRoot);
function Yv(a, i) {
  const l = a.touches,
    s = l && l.length ? l[0] : a,
    { offsetX: u, offsetY: c } = s;
  let f = !1,
    d,
    g;
  if (jv(u, c, a.target)) (d = u), (g = c);
  else {
    const m = i.getBoundingClientRect();
    (d = s.clientX - m.left), (g = s.clientY - m.top), (f = !0);
  }
  return { x: d, y: g, box: f };
}
function Bn(a, i) {
  if ("native" in a) return a;
  const { canvas: l, currentDevicePixelRatio: s } = i,
    u = Bo(l),
    c = u.boxSizing === "border-box",
    f = Un(u, "padding"),
    d = Un(u, "border", "width"),
    { x: g, y: m, box: y } = Yv(a, l),
    v = f.left + (y && d.left),
    _ = f.top + (y && d.top);
  let { width: S, height: D } = i;
  return (
    c && ((S -= f.width + d.width), (D -= f.height + d.height)),
    {
      x: Math.round((((g - v) / S) * l.width) / s),
      y: Math.round((((m - _) / D) * l.height) / s),
    }
  );
}
function Vv(a, i, l) {
  let s, u;
  if (i === void 0 || l === void 0) {
    const c = a && Rr(a);
    if (!c) (i = a.clientWidth), (l = a.clientHeight);
    else {
      const f = c.getBoundingClientRect(),
        d = Bo(c),
        g = Un(d, "border", "width"),
        m = Un(d, "padding");
      (i = f.width - m.width - g.width),
        (l = f.height - m.height - g.height),
        (s = Ro(d.maxWidth, c, "clientWidth")),
        (u = Ro(d.maxHeight, c, "clientHeight"));
    }
  }
  return { width: i, height: l, maxWidth: s || Co, maxHeight: u || Co };
}
const go = (a) => Math.round(a * 10) / 10;
function qv(a, i, l, s) {
  const u = Bo(a),
    c = Un(u, "margin"),
    f = Ro(u.maxWidth, a, "clientWidth") || Co,
    d = Ro(u.maxHeight, a, "clientHeight") || Co,
    g = Vv(a, i, l);
  let { width: m, height: y } = g;
  if (u.boxSizing === "content-box") {
    const _ = Un(u, "border", "width"),
      S = Un(u, "padding");
    (m -= S.width + _.width), (y -= S.height + _.height);
  }
  return (
    (m = Math.max(0, m - c.width)),
    (y = Math.max(0, s ? m / s : y - c.height)),
    (m = go(Math.min(m, f, g.maxWidth))),
    (y = go(Math.min(y, d, g.maxHeight))),
    m && !y && (y = go(m / 2)),
    (i !== void 0 || l !== void 0) &&
      s &&
      g.height &&
      y > g.height &&
      ((y = g.height), (m = go(Math.floor(y * s)))),
    { width: m, height: y }
  );
}
function Gg(a, i, l) {
  const s = i || 1,
    u = Math.floor(a.height * s),
    c = Math.floor(a.width * s);
  (a.height = Math.floor(a.height)), (a.width = Math.floor(a.width));
  const f = a.canvas;
  return (
    f.style &&
      (l || (!f.style.height && !f.style.width)) &&
      ((f.style.height = `${a.height}px`), (f.style.width = `${a.width}px`)),
    a.currentDevicePixelRatio !== s || f.height !== u || f.width !== c
      ? ((a.currentDevicePixelRatio = s),
        (f.height = u),
        (f.width = c),
        a.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  );
}
const Xv = (function () {
  let a = !1;
  try {
    const i = {
      get passive() {
        return (a = !0), !1;
      },
    };
    Cr() &&
      (window.addEventListener("test", null, i),
      window.removeEventListener("test", null, i));
  } catch {}
  return a;
})();
function Qg(a, i) {
  const l = kv(a, i),
    s = l && l.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Ln(a, i, l, s) {
  return { x: a.x + l * (i.x - a.x), y: a.y + l * (i.y - a.y) };
}
function Gv(a, i, l, s) {
  return {
    x: a.x + l * (i.x - a.x),
    y:
      s === "middle"
        ? l < 0.5
          ? a.y
          : i.y
        : s === "after"
        ? l < 1
          ? a.y
          : i.y
        : l > 0
        ? i.y
        : a.y,
  };
}
function Qv(a, i, l, s) {
  const u = { x: a.cp2x, y: a.cp2y },
    c = { x: i.cp1x, y: i.cp1y },
    f = Ln(a, u, l),
    d = Ln(u, c, l),
    g = Ln(c, i, l),
    m = Ln(f, d, l),
    y = Ln(d, g, l);
  return Ln(m, y, l);
}
const Zv = function (a, i) {
    return {
      x(l) {
        return a + a + i - l;
      },
      setWidth(l) {
        i = l;
      },
      textAlign(l) {
        return l === "center" ? l : l === "right" ? "left" : "right";
      },
      xPlus(l, s) {
        return l - s;
      },
      leftForLtr(l, s) {
        return l - s;
      },
    };
  },
  Kv = function () {
    return {
      x(a) {
        return a;
      },
      setWidth(a) {},
      textAlign(a) {
        return a;
      },
      xPlus(a, i) {
        return a + i;
      },
      leftForLtr(a, i) {
        return a;
      },
    };
  };
function Ml(a, i, l) {
  return a ? Zv(i, l) : Kv();
}
function a0(a, i) {
  let l, s;
  (i === "ltr" || i === "rtl") &&
    ((l = a.canvas.style),
    (s = [l.getPropertyValue("direction"), l.getPropertyPriority("direction")]),
    l.setProperty("direction", i, "important"),
    (a.prevTextDirection = s));
}
function s0(a, i) {
  i !== void 0 &&
    (delete a.prevTextDirection,
    a.canvas.style.setProperty("direction", i[0], i[1]));
}
function o0(a) {
  return a === "angle"
    ? { between: Zm, compare: Gb, normalize: an }
    : { between: Ha, compare: (i, l) => i - l, normalize: (i) => i };
}
function Zg({ start: a, end: i, count: l, loop: s, style: u }) {
  return {
    start: a % l,
    end: i % l,
    loop: s && (i - a + 1) % l === 0,
    style: u,
  };
}
function Fv(a, i, l) {
  const { property: s, start: u, end: c } = l,
    { between: f, normalize: d } = o0(s),
    g = i.length;
  let { start: m, end: y, loop: v } = a,
    _,
    S;
  if (v) {
    for (m += g, y += g, _ = 0, S = g; _ < S && f(d(i[m % g][s]), u, c); ++_)
      m--, y--;
    (m %= g), (y %= g);
  }
  return y < m && (y += g), { start: m, end: y, loop: v, style: a.style };
}
function Wv(a, i, l) {
  if (!l) return [a];
  const { property: s, start: u, end: c } = l,
    f = i.length,
    { compare: d, between: g, normalize: m } = o0(s),
    { start: y, end: v, loop: _, style: S } = Fv(a, i, l),
    D = [];
  let A = !1,
    E = null,
    B,
    V,
    Q;
  const K = () => g(u, Q, B) && d(u, Q) !== 0,
    L = () => d(c, B) === 0 || g(c, Q, B),
    Z = () => A || K(),
    F = () => !A || L();
  for (let X = y, Y = y; X <= v; ++X)
    (V = i[X % f]),
      !V.skip &&
        ((B = m(V[s])),
        B !== Q &&
          ((A = g(B, u, c)),
          E === null && Z() && (E = d(B, u) === 0 ? X : Y),
          E !== null &&
            F() &&
            (D.push(Zg({ start: E, end: X, loop: _, count: f, style: S })),
            (E = null)),
          (Y = X),
          (Q = B)));
  return (
    E !== null && D.push(Zg({ start: E, end: v, loop: _, count: f, style: S })),
    D
  );
}
function Jv(a, i) {
  const l = [],
    s = a.segments;
  for (let u = 0; u < s.length; u++) {
    const c = Wv(s[u], a.points, i);
    c.length && l.push(...c);
  }
  return l;
}
function $v(a, i, l, s) {
  let u = 0,
    c = i - 1;
  if (l && !s) for (; u < i && !a[u].skip; ) u++;
  for (; u < i && a[u].skip; ) u++;
  for (u %= i, l && (c += u); c > u && a[c % i].skip; ) c--;
  return (c %= i), { start: u, end: c };
}
function Pv(a, i, l, s) {
  const u = a.length,
    c = [];
  let f = i,
    d = a[i],
    g;
  for (g = i + 1; g <= l; ++g) {
    const m = a[g % u];
    m.skip || m.stop
      ? d.skip ||
        ((s = !1),
        c.push({ start: i % u, end: (g - 1) % u, loop: s }),
        (i = f = m.stop ? g : null))
      : ((f = g), d.skip && (i = g)),
      (d = m);
  }
  return f !== null && c.push({ start: i % u, end: f % u, loop: s }), c;
}
function Iv(a, i) {
  const l = a.points,
    s = a.options.spanGaps,
    u = l.length;
  if (!u) return [];
  const c = !!a._loop,
    { start: f, end: d } = $v(l, u, c, s);
  if (s === !0) return Kg(a, [{ start: f, end: d, loop: c }], l, i);
  const g = d < f ? d + u : d,
    m = !!a._fullLoop && f === 0 && d === u - 1;
  return Kg(a, Pv(l, f, g, m), l, i);
}
function Kg(a, i, l, s) {
  return !s || !s.setContext || !l ? i : t_(a, i, l, s);
}
function t_(a, i, l, s) {
  const u = a._chart.getContext(),
    c = Fg(a.options),
    {
      _datasetIndex: f,
      options: { spanGaps: d },
    } = a,
    g = l.length,
    m = [];
  let y = c,
    v = i[0].start,
    _ = v;
  function S(D, A, E, B) {
    const V = d ? -1 : 1;
    if (D !== A) {
      for (D += g; l[D % g].skip; ) D -= V;
      for (; l[A % g].skip; ) A += V;
      D % g !== A % g &&
        (m.push({ start: D % g, end: A % g, loop: E, style: B }),
        (y = B),
        (v = A % g));
    }
  }
  for (const D of i) {
    v = d ? v : D.start;
    let A = l[v % g],
      E;
    for (_ = v + 1; _ <= D.end; _++) {
      const B = l[_ % g];
      (E = Fg(
        s.setContext(
          Yn(u, {
            type: "segment",
            p0: A,
            p1: B,
            p0DataIndex: (_ - 1) % g,
            p1DataIndex: _ % g,
            datasetIndex: f,
          })
        )
      )),
        e_(E, y) && S(v, _ - 1, D.loop, y),
        (A = B),
        (y = E);
    }
    v < _ - 1 && S(v, _ - 1, D.loop, y);
  }
  return m;
}
function Fg(a) {
  return {
    backgroundColor: a.backgroundColor,
    borderCapStyle: a.borderCapStyle,
    borderDash: a.borderDash,
    borderDashOffset: a.borderDashOffset,
    borderJoinStyle: a.borderJoinStyle,
    borderWidth: a.borderWidth,
    borderColor: a.borderColor,
  };
}
function e_(a, i) {
  if (!i) return !1;
  const l = [],
    s = function (u, c) {
      return Tr(c) ? (l.includes(c) || l.push(c), l.indexOf(c)) : c;
    };
  return JSON.stringify(a, s) !== JSON.stringify(i, s);
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ class i_ {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(i, l, s, u) {
    const c = l.listeners[u],
      f = l.duration;
    c.forEach((d) =>
      d({
        chart: i,
        initial: l.initial,
        numSteps: f,
        currentStep: Math.min(s - l.start, f),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Fm.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(i = Date.now()) {
    let l = 0;
    this._charts.forEach((s, u) => {
      if (!s.running || !s.items.length) return;
      const c = s.items;
      let f = c.length - 1,
        d = !1,
        g;
      for (; f >= 0; --f)
        (g = c[f]),
          g._active
            ? (g._total > s.duration && (s.duration = g._total),
              g.tick(i),
              (d = !0))
            : ((c[f] = c[c.length - 1]), c.pop());
      d && (u.draw(), this._notify(u, s, i, "progress")),
        c.length ||
          ((s.running = !1),
          this._notify(u, s, i, "complete"),
          (s.initial = !1)),
        (l += c.length);
    }),
      (this._lastDate = i),
      l === 0 && (this._running = !1);
  }
  _getAnims(i) {
    const l = this._charts;
    let s = l.get(i);
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        l.set(i, s)),
      s
    );
  }
  listen(i, l, s) {
    this._getAnims(i).listeners[l].push(s);
  }
  add(i, l) {
    !l || !l.length || this._getAnims(i).items.push(...l);
  }
  has(i) {
    return this._getAnims(i).items.length > 0;
  }
  start(i) {
    const l = this._charts.get(i);
    l &&
      ((l.running = !0),
      (l.start = Date.now()),
      (l.duration = l.items.reduce((s, u) => Math.max(s, u._duration), 0)),
      this._refresh());
  }
  running(i) {
    if (!this._running) return !1;
    const l = this._charts.get(i);
    return !(!l || !l.running || !l.items.length);
  }
  stop(i) {
    const l = this._charts.get(i);
    if (!l || !l.items.length) return;
    const s = l.items;
    let u = s.length - 1;
    for (; u >= 0; --u) s[u].cancel();
    (l.items = []), this._notify(i, l, Date.now(), "complete");
  }
  remove(i) {
    return this._charts.delete(i);
  }
}
var Ci = new i_();
const Wg = "transparent",
  n_ = {
    boolean(a, i, l) {
      return l > 0.5 ? i : a;
    },
    color(a, i, l) {
      const s = Ug(a || Wg),
        u = s.valid && Ug(i || Wg);
      return u && u.valid ? u.mix(s, l).hexString() : i;
    },
    number(a, i, l) {
      return a + (i - a) * l;
    },
  };
class l_ {
  constructor(i, l, s, u) {
    const c = l[s];
    u = fo([i.to, u, c, i.from]);
    const f = fo([i.from, c, u]);
    (this._active = !0),
      (this._fn = i.fn || n_[i.type || typeof f]),
      (this._easing = ja[i.easing] || ja.linear),
      (this._start = Math.floor(Date.now() + (i.delay || 0))),
      (this._duration = this._total = Math.floor(i.duration)),
      (this._loop = !!i.loop),
      (this._target = l),
      (this._prop = s),
      (this._from = f),
      (this._to = u),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(i, l, s) {
    if (this._active) {
      this._notify(!1);
      const u = this._target[this._prop],
        c = s - this._start,
        f = this._duration - c;
      (this._start = s),
        (this._duration = Math.floor(Math.max(f, i.duration))),
        (this._total += c),
        (this._loop = !!i.loop),
        (this._to = fo([i.to, l, u, i.from])),
        (this._from = fo([i.from, u, l]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(i) {
    const l = i - this._start,
      s = this._duration,
      u = this._prop,
      c = this._from,
      f = this._loop,
      d = this._to;
    let g;
    if (((this._active = c !== d && (f || l < s)), !this._active)) {
      (this._target[u] = d), this._notify(!0);
      return;
    }
    if (l < 0) {
      this._target[u] = c;
      return;
    }
    (g = (l / s) % 2),
      (g = f && g > 1 ? 2 - g : g),
      (g = this._easing(Math.min(1, Math.max(0, g)))),
      (this._target[u] = this._fn(c, d, g));
  }
  wait() {
    const i = this._promises || (this._promises = []);
    return new Promise((l, s) => {
      i.push({ res: l, rej: s });
    });
  }
  _notify(i) {
    const l = i ? "res" : "rej",
      s = this._promises || [];
    for (let u = 0; u < s.length; u++) s[u][l]();
  }
}
class u0 {
  constructor(i, l) {
    (this._chart = i), (this._properties = new Map()), this.configure(l);
  }
  configure(i) {
    if (!Dt(i)) return;
    const l = Object.keys(Kt.animation),
      s = this._properties;
    Object.getOwnPropertyNames(i).forEach((u) => {
      const c = i[u];
      if (!Dt(c)) return;
      const f = {};
      for (const d of l) f[d] = c[d];
      ((le(c.properties) && c.properties) || [u]).forEach((d) => {
        (d === u || !s.has(d)) && s.set(d, f);
      });
    });
  }
  _animateOptions(i, l) {
    const s = l.options,
      u = s_(i, s);
    if (!u) return [];
    const c = this._createAnimations(u, s);
    return (
      s.$shared &&
        a_(i.options.$animations, s).then(
          () => {
            i.options = s;
          },
          () => {}
        ),
      c
    );
  }
  _createAnimations(i, l) {
    const s = this._properties,
      u = [],
      c = i.$animations || (i.$animations = {}),
      f = Object.keys(l),
      d = Date.now();
    let g;
    for (g = f.length - 1; g >= 0; --g) {
      const m = f[g];
      if (m.charAt(0) === "$") continue;
      if (m === "options") {
        u.push(...this._animateOptions(i, l));
        continue;
      }
      const y = l[m];
      let v = c[m];
      const _ = s.get(m);
      if (v)
        if (_ && v.active()) {
          v.update(_, y, d);
          continue;
        } else v.cancel();
      if (!_ || !_.duration) {
        i[m] = y;
        continue;
      }
      (c[m] = v = new l_(_, i, m, y)), u.push(v);
    }
    return u;
  }
  update(i, l) {
    if (this._properties.size === 0) {
      Object.assign(i, l);
      return;
    }
    const s = this._createAnimations(i, l);
    if (s.length) return Ci.add(this._chart, s), !0;
  }
}
function a_(a, i) {
  const l = [],
    s = Object.keys(i);
  for (let u = 0; u < s.length; u++) {
    const c = a[s[u]];
    c && c.active() && l.push(c.wait());
  }
  return Promise.all(l);
}
function s_(a, i) {
  if (!i) return;
  let l = a.options;
  if (!l) {
    a.options = i;
    return;
  }
  return (
    l.$shared &&
      (a.options = l = Object.assign({}, l, { $shared: !1, $animations: {} })),
    l
  );
}
function Jg(a, i) {
  const l = (a && a.options) || {},
    s = l.reverse,
    u = l.min === void 0 ? i : 0,
    c = l.max === void 0 ? i : 0;
  return { start: s ? c : u, end: s ? u : c };
}
function o_(a, i, l) {
  if (l === !1) return !1;
  const s = Jg(a, l),
    u = Jg(i, l);
  return { top: u.end, right: s.end, bottom: u.start, left: s.start };
}
function u_(a) {
  let i, l, s, u;
  return (
    Dt(a)
      ? ((i = a.top), (l = a.right), (s = a.bottom), (u = a.left))
      : (i = l = s = u = a),
    { top: i, right: l, bottom: s, left: u, disabled: a === !1 }
  );
}
function c0(a, i) {
  const l = [],
    s = a._getSortedDatasetMetas(i);
  let u, c;
  for (u = 0, c = s.length; u < c; ++u) l.push(s[u].index);
  return l;
}
function $g(a, i, l, s = {}) {
  const u = a.keys,
    c = s.mode === "single";
  let f, d, g, m;
  if (i === null) return;
  let y = !1;
  for (f = 0, d = u.length; f < d; ++f) {
    if (((g = +u[f]), g === l)) {
      if (((y = !0), s.all)) continue;
      break;
    }
    (m = a.values[g]), Ke(m) && (c || i === 0 || Tl(i) === Tl(m)) && (i += m);
  }
  return !y && !s.all ? 0 : i;
}
function c_(a, i) {
  const { iScale: l, vScale: s } = i,
    u = l.axis === "x" ? "x" : "y",
    c = s.axis === "x" ? "x" : "y",
    f = Object.keys(a),
    d = new Array(f.length);
  let g, m, y;
  for (g = 0, m = f.length; g < m; ++g)
    (y = f[g]), (d[g] = { [u]: y, [c]: a[y] });
  return d;
}
function Ic(a, i) {
  const l = a && a.options.stacked;
  return l || (l === void 0 && i.stack !== void 0);
}
function r_(a, i, l) {
  return `${a.id}.${i.id}.${l.stack || l.type}`;
}
function f_(a) {
  const { min: i, max: l, minDefined: s, maxDefined: u } = a.getUserBounds();
  return {
    min: s ? i : Number.NEGATIVE_INFINITY,
    max: u ? l : Number.POSITIVE_INFINITY,
  };
}
function h_(a, i, l) {
  const s = a[i] || (a[i] = {});
  return s[l] || (s[l] = {});
}
function Pg(a, i, l, s) {
  for (const u of i.getMatchingVisibleMetas(s).reverse()) {
    const c = a[u.index];
    if ((l && c > 0) || (!l && c < 0)) return u.index;
  }
  return null;
}
function Ig(a, i) {
  const { chart: l, _cachedMeta: s } = a,
    u = l._stacks || (l._stacks = {}),
    { iScale: c, vScale: f, index: d } = s,
    g = c.axis,
    m = f.axis,
    y = r_(c, f, s),
    v = i.length;
  let _;
  for (let S = 0; S < v; ++S) {
    const D = i[S],
      { [g]: A, [m]: E } = D,
      B = D._stacks || (D._stacks = {});
    (_ = B[m] = h_(u, y, A)),
      (_[d] = E),
      (_._top = Pg(_, f, !0, s.type)),
      (_._bottom = Pg(_, f, !1, s.type));
    const V = _._visualValues || (_._visualValues = {});
    V[d] = E;
  }
}
function tr(a, i) {
  const l = a.scales;
  return Object.keys(l)
    .filter((s) => l[s].axis === i)
    .shift();
}
function d_(a, i) {
  return Yn(a, {
    active: !1,
    dataset: void 0,
    datasetIndex: i,
    index: i,
    mode: "default",
    type: "dataset",
  });
}
function g_(a, i, l) {
  return Yn(a, {
    active: !1,
    dataIndex: i,
    parsed: void 0,
    raw: void 0,
    element: l,
    index: i,
    mode: "default",
    type: "data",
  });
}
function Da(a, i) {
  const l = a.controller.index,
    s = a.vScale && a.vScale.axis;
  if (s) {
    i = i || a._parsed;
    for (const u of i) {
      const c = u._stacks;
      if (!c || c[s] === void 0 || c[s][l] === void 0) return;
      delete c[s][l],
        c[s]._visualValues !== void 0 &&
          c[s]._visualValues[l] !== void 0 &&
          delete c[s]._visualValues[l];
    }
  }
}
const er = (a) => a === "reset" || a === "none",
  tm = (a, i) => (i ? a : Object.assign({}, a)),
  m_ = (a, i, l) =>
    a && !i.hidden && i._stacked && { keys: c0(l, !0), values: null };
class qa {
  constructor(i, l) {
    (this.chart = i),
      (this._ctx = i.ctx),
      (this.index = l),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const i = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (i._stacked = Ic(i.vScale, i)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(i) {
    this.index !== i && Da(this._cachedMeta), (this.index = i);
  }
  linkScales() {
    const i = this.chart,
      l = this._cachedMeta,
      s = this.getDataset(),
      u = (v, _, S, D) => (v === "x" ? _ : v === "r" ? D : S),
      c = (l.xAxisID = _t(s.xAxisID, tr(i, "x"))),
      f = (l.yAxisID = _t(s.yAxisID, tr(i, "y"))),
      d = (l.rAxisID = _t(s.rAxisID, tr(i, "r"))),
      g = l.indexAxis,
      m = (l.iAxisID = u(g, c, f, d)),
      y = (l.vAxisID = u(g, f, c, d));
    (l.xScale = this.getScaleForId(c)),
      (l.yScale = this.getScaleForId(f)),
      (l.rScale = this.getScaleForId(d)),
      (l.iScale = this.getScaleForId(m)),
      (l.vScale = this.getScaleForId(y));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(i) {
    return this.chart.scales[i];
  }
  _getOtherScale(i) {
    const l = this._cachedMeta;
    return i === l.iScale ? l.vScale : l.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const i = this._cachedMeta;
    this._data && Lg(this._data, this), i._stacked && Da(i);
  }
  _dataCheck() {
    const i = this.getDataset(),
      l = i.data || (i.data = []),
      s = this._data;
    if (Dt(l)) {
      const u = this._cachedMeta;
      this._data = c_(l, u);
    } else if (s !== l) {
      if (s) {
        Lg(s, this);
        const u = this._cachedMeta;
        Da(u), (u._parsed = []);
      }
      l && Object.isExtensible(l) && Fb(l, this),
        (this._syncList = []),
        (this._data = l);
    }
  }
  addElements() {
    const i = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (i.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(i) {
    const l = this._cachedMeta,
      s = this.getDataset();
    let u = !1;
    this._dataCheck();
    const c = l._stacked;
    (l._stacked = Ic(l.vScale, l)),
      l.stack !== s.stack && ((u = !0), Da(l), (l.stack = s.stack)),
      this._resyncElements(i),
      (u || c !== l._stacked) &&
        (Ig(this, l._parsed), (l._stacked = Ic(l.vScale, l)));
  }
  configure() {
    const i = this.chart.config,
      l = i.datasetScopeKeys(this._type),
      s = i.getOptionScopes(this.getDataset(), l, !0);
    (this.options = i.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(i, l) {
    const { _cachedMeta: s, _data: u } = this,
      { iScale: c, _stacked: f } = s,
      d = c.axis;
    let g = i === 0 && l === u.length ? !0 : s._sorted,
      m = i > 0 && s._parsed[i - 1],
      y,
      v,
      _;
    if (this._parsing === !1) (s._parsed = u), (s._sorted = !0), (_ = u);
    else {
      le(u[i])
        ? (_ = this.parseArrayData(s, u, i, l))
        : Dt(u[i])
        ? (_ = this.parseObjectData(s, u, i, l))
        : (_ = this.parsePrimitiveData(s, u, i, l));
      const S = () => v[d] === null || (m && v[d] < m[d]);
      for (y = 0; y < l; ++y)
        (s._parsed[y + i] = v = _[y]), g && (S() && (g = !1), (m = v));
      s._sorted = g;
    }
    f && Ig(this, _);
  }
  parsePrimitiveData(i, l, s, u) {
    const { iScale: c, vScale: f } = i,
      d = c.axis,
      g = f.axis,
      m = c.getLabels(),
      y = c === f,
      v = new Array(u);
    let _, S, D;
    for (_ = 0, S = u; _ < S; ++_)
      (D = _ + s),
        (v[_] = { [d]: y || c.parse(m[D], D), [g]: f.parse(l[D], D) });
    return v;
  }
  parseArrayData(i, l, s, u) {
    const { xScale: c, yScale: f } = i,
      d = new Array(u);
    let g, m, y, v;
    for (g = 0, m = u; g < m; ++g)
      (y = g + s),
        (v = l[y]),
        (d[g] = { x: c.parse(v[0], y), y: f.parse(v[1], y) });
    return d;
  }
  parseObjectData(i, l, s, u) {
    const { xScale: c, yScale: f } = i,
      { xAxisKey: d = "x", yAxisKey: g = "y" } = this._parsing,
      m = new Array(u);
    let y, v, _, S;
    for (y = 0, v = u; y < v; ++y)
      (_ = y + s),
        (S = l[_]),
        (m[y] = { x: c.parse(Eo(S, d), _), y: f.parse(Eo(S, g), _) });
    return m;
  }
  getParsed(i) {
    return this._cachedMeta._parsed[i];
  }
  getDataElement(i) {
    return this._cachedMeta.data[i];
  }
  applyStack(i, l, s) {
    const u = this.chart,
      c = this._cachedMeta,
      f = l[i.axis],
      d = { keys: c0(u, !0), values: l._stacks[i.axis]._visualValues };
    return $g(d, f, c.index, { mode: s });
  }
  updateRangeFromParsed(i, l, s, u) {
    const c = s[l.axis];
    let f = c === null ? NaN : c;
    const d = u && s._stacks[l.axis];
    u && d && ((u.values = d), (f = $g(u, c, this._cachedMeta.index))),
      (i.min = Math.min(i.min, f)),
      (i.max = Math.max(i.max, f));
  }
  getMinMax(i, l) {
    const s = this._cachedMeta,
      u = s._parsed,
      c = s._sorted && i === s.iScale,
      f = u.length,
      d = this._getOtherScale(i),
      g = m_(l, s, this.chart),
      m = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: y, max: v } = f_(d);
    let _, S;
    function D() {
      S = u[_];
      const A = S[d.axis];
      return !Ke(S[i.axis]) || y > A || v < A;
    }
    for (
      _ = 0;
      _ < f && !(!D() && (this.updateRangeFromParsed(m, i, S, g), c));
      ++_
    );
    if (c) {
      for (_ = f - 1; _ >= 0; --_)
        if (!D()) {
          this.updateRangeFromParsed(m, i, S, g);
          break;
        }
    }
    return m;
  }
  getAllParsedValues(i) {
    const l = this._cachedMeta._parsed,
      s = [];
    let u, c, f;
    for (u = 0, c = l.length; u < c; ++u)
      (f = l[u][i.axis]), Ke(f) && s.push(f);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(i) {
    const l = this._cachedMeta,
      s = l.iScale,
      u = l.vScale,
      c = this.getParsed(i);
    return {
      label: s ? "" + s.getLabelForValue(c[s.axis]) : "",
      value: u ? "" + u.getLabelForValue(c[u.axis]) : "",
    };
  }
  _update(i) {
    const l = this._cachedMeta;
    this.update(i || "default"),
      (l._clip = u_(
        _t(this.options.clip, o_(l.xScale, l.yScale, this.getMaxOverflow()))
      ));
  }
  update(i) {}
  draw() {
    const i = this._ctx,
      l = this.chart,
      s = this._cachedMeta,
      u = s.data || [],
      c = l.chartArea,
      f = [],
      d = this._drawStart || 0,
      g = this._drawCount || u.length - d,
      m = this.options.drawActiveElementsOnTop;
    let y;
    for (s.dataset && s.dataset.draw(i, c, d, g), y = d; y < d + g; ++y) {
      const v = u[y];
      v.hidden || (v.active && m ? f.push(v) : v.draw(i, c));
    }
    for (y = 0; y < f.length; ++y) f[y].draw(i, c);
  }
  getStyle(i, l) {
    const s = l ? "active" : "default";
    return i === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(i || 0, s);
  }
  getContext(i, l, s) {
    const u = this.getDataset();
    let c;
    if (i >= 0 && i < this._cachedMeta.data.length) {
      const f = this._cachedMeta.data[i];
      (c = f.$context || (f.$context = g_(this.getContext(), i, f))),
        (c.parsed = this.getParsed(i)),
        (c.raw = u.data[i]),
        (c.index = c.dataIndex = i);
    } else
      (c =
        this.$context ||
        (this.$context = d_(this.chart.getContext(), this.index))),
        (c.dataset = u),
        (c.index = c.datasetIndex = this.index);
    return (c.active = !!l), (c.mode = s), c;
  }
  resolveDatasetElementOptions(i) {
    return this._resolveElementOptions(this.datasetElementType.id, i);
  }
  resolveDataElementOptions(i, l) {
    return this._resolveElementOptions(this.dataElementType.id, l, i);
  }
  _resolveElementOptions(i, l = "default", s) {
    const u = l === "active",
      c = this._cachedDataOpts,
      f = i + "-" + l,
      d = c[f],
      g = this.enableOptionSharing && zo(s);
    if (d) return tm(d, g);
    const m = this.chart.config,
      y = m.datasetElementScopeKeys(this._type, i),
      v = u ? [`${i}Hover`, "hover", i, ""] : [i, ""],
      _ = m.getOptionScopes(this.getDataset(), y),
      S = Object.keys(Kt.elements[i]),
      D = () => this.getContext(s, u, l),
      A = m.resolveNamedOptions(_, S, D, v);
    return A.$shared && ((A.$shared = g), (c[f] = Object.freeze(tm(A, g)))), A;
  }
  _resolveAnimations(i, l, s) {
    const u = this.chart,
      c = this._cachedDataOpts,
      f = `animation-${l}`,
      d = c[f];
    if (d) return d;
    let g;
    if (u.options.animation !== !1) {
      const y = this.chart.config,
        v = y.datasetAnimationScopeKeys(this._type, l),
        _ = y.getOptionScopes(this.getDataset(), v);
      g = y.createResolver(_, this.getContext(i, s, l));
    }
    const m = new u0(u, g && g.animations);
    return g && g._cacheable && (c[f] = Object.freeze(m)), m;
  }
  getSharedOptions(i) {
    if (i.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, i))
      );
  }
  includeOptions(i, l) {
    return !l || er(i) || this.chart._animationsDisabled;
  }
  _getSharedOptions(i, l) {
    const s = this.resolveDataElementOptions(i, l),
      u = this._sharedOptions,
      c = this.getSharedOptions(s),
      f = this.includeOptions(l, c) || c !== u;
    return (
      this.updateSharedOptions(c, l, s), { sharedOptions: c, includeOptions: f }
    );
  }
  updateElement(i, l, s, u) {
    er(u) ? Object.assign(i, s) : this._resolveAnimations(l, u).update(i, s);
  }
  updateSharedOptions(i, l, s) {
    i && !er(l) && this._resolveAnimations(void 0, l).update(i, s);
  }
  _setStyle(i, l, s, u) {
    i.active = u;
    const c = this.getStyle(l, u);
    this._resolveAnimations(l, s, u).update(i, {
      options: (!u && this.getSharedOptions(c)) || c,
    });
  }
  removeHoverStyle(i, l, s) {
    this._setStyle(i, s, "active", !1);
  }
  setHoverStyle(i, l, s) {
    this._setStyle(i, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const i = this._cachedMeta.dataset;
    i && this._setStyle(i, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const i = this._cachedMeta.dataset;
    i && this._setStyle(i, void 0, "active", !0);
  }
  _resyncElements(i) {
    const l = this._data,
      s = this._cachedMeta.data;
    for (const [d, g, m] of this._syncList) this[d](g, m);
    this._syncList = [];
    const u = s.length,
      c = l.length,
      f = Math.min(c, u);
    f && this.parse(0, f),
      c > u
        ? this._insertElements(u, c - u, i)
        : c < u && this._removeElements(c, u - c);
  }
  _insertElements(i, l, s = !0) {
    const u = this._cachedMeta,
      c = u.data,
      f = i + l;
    let d;
    const g = (m) => {
      for (m.length += l, d = m.length - 1; d >= f; d--) m[d] = m[d - l];
    };
    for (g(c), d = i; d < f; ++d) c[d] = new this.dataElementType();
    this._parsing && g(u._parsed),
      this.parse(i, l),
      s && this.updateElements(c, i, l, "reset");
  }
  updateElements(i, l, s, u) {}
  _removeElements(i, l) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const u = s._parsed.splice(i, l);
      s._stacked && Da(s, u);
    }
    s.data.splice(i, l);
  }
  _sync(i) {
    if (this._parsing) this._syncList.push(i);
    else {
      const [l, s, u] = i;
      this[l](s, u);
    }
    this.chart._dataChanges.push([this.index, ...i]);
  }
  _onDataPush() {
    const i = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - i, i]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(i, l) {
    l && this._sync(["_removeElements", i, l]);
    const s = arguments.length - 2;
    s && this._sync(["_insertElements", i, s]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
ht(qa, "defaults", {}),
  ht(qa, "datasetElementType", null),
  ht(qa, "dataElementType", null);
class So extends qa {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(i) {
    const l = this._cachedMeta,
      { dataset: s, data: u = [], _dataset: c } = l,
      f = this.chart._animationsDisabled;
    let { start: d, count: g } = Pb(l, u, f);
    (this._drawStart = d),
      (this._drawCount = g),
      Ib(l) && ((d = 0), (g = u.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!c._decimated),
      (s.points = u);
    const m = this.resolveDatasetElementOptions(i);
    this.options.showLine || (m.borderWidth = 0),
      (m.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !f, options: m }, i),
      this.updateElements(u, d, g, i);
  }
  updateElements(i, l, s, u) {
    const c = u === "reset",
      { iScale: f, vScale: d, _stacked: g, _dataset: m } = this._cachedMeta,
      { sharedOptions: y, includeOptions: v } = this._getSharedOptions(l, u),
      _ = f.axis,
      S = d.axis,
      { spanGaps: D, segment: A } = this.options,
      E = Qa(D) ? D : Number.POSITIVE_INFINITY,
      B = this.chart._animationsDisabled || c || u === "none",
      V = l + s,
      Q = i.length;
    let K = l > 0 && this.getParsed(l - 1);
    for (let L = 0; L < Q; ++L) {
      const Z = i[L],
        F = B ? Z : {};
      if (L < l || L >= V) {
        F.skip = !0;
        continue;
      }
      const X = this.getParsed(L),
        Y = Nt(X[S]),
        W = (F[_] = f.getPixelForValue(X[_], L)),
        nt = (F[S] =
          c || Y
            ? d.getBasePixel()
            : d.getPixelForValue(g ? this.applyStack(d, X, g) : X[S], L));
      (F.skip = isNaN(W) || isNaN(nt) || Y),
        (F.stop = L > 0 && Math.abs(X[_] - K[_]) > E),
        A && ((F.parsed = X), (F.raw = m.data[L])),
        v &&
          (F.options =
            y || this.resolveDataElementOptions(L, Z.active ? "active" : u)),
        B || this.updateElement(Z, L, F, u),
        (K = X);
    }
  }
  getMaxOverflow() {
    const i = this._cachedMeta,
      l = i.dataset,
      s = (l.options && l.options.borderWidth) || 0,
      u = i.data || [];
    if (!u.length) return s;
    const c = u[0].size(this.resolveDataElementOptions(0)),
      f = u[u.length - 1].size(this.resolveDataElementOptions(u.length - 1));
    return Math.max(s, c, f) / 2;
  }
  draw() {
    const i = this._cachedMeta;
    i.dataset.updateControlPoints(this.chart.chartArea, i.iScale.axis),
      super.draw();
  }
}
ht(So, "id", "line"),
  ht(So, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  ht(So, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function Hn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class wr {
  constructor(i) {
    ht(this, "options");
    this.options = i || {};
  }
  static override(i) {
    Object.assign(wr.prototype, i);
  }
  init() {}
  formats() {
    return Hn();
  }
  parse() {
    return Hn();
  }
  format() {
    return Hn();
  }
  add() {
    return Hn();
  }
  diff() {
    return Hn();
  }
  startOf() {
    return Hn();
  }
  endOf() {
    return Hn();
  }
}
var p_ = { _date: wr };
function y_(a, i, l, s) {
  const { controller: u, data: c, _sorted: f } = a,
    d = u._cachedMeta.iScale,
    g = a.dataset && a.dataset.options ? a.dataset.options.spanGaps : null;
  if (d && i === d.axis && i !== "r" && f && c.length) {
    const m = d._reversePixels ? Zb : kn;
    if (s) {
      if (u._sharedOptions) {
        const y = c[0],
          v = typeof y.getRange == "function" && y.getRange(i);
        if (v) {
          const _ = m(c, i, l - v),
            S = m(c, i, l + v);
          return { lo: _.lo, hi: S.hi };
        }
      }
    } else {
      const y = m(c, i, l);
      if (g) {
        const { vScale: v } = u._cachedMeta,
          { _parsed: _ } = a,
          S = _.slice(0, y.lo + 1)
            .reverse()
            .findIndex((A) => !Nt(A[v.axis]));
        y.lo -= Math.max(0, S);
        const D = _.slice(y.hi).findIndex((A) => !Nt(A[v.axis]));
        y.hi += Math.max(0, D);
      }
      return y;
    }
  }
  return { lo: 0, hi: c.length - 1 };
}
function Lo(a, i, l, s, u) {
  const c = a.getSortedVisibleDatasetMetas(),
    f = l[i];
  for (let d = 0, g = c.length; d < g; ++d) {
    const { index: m, data: y } = c[d],
      { lo: v, hi: _ } = y_(c[d], i, f, u);
    for (let S = v; S <= _; ++S) {
      const D = y[S];
      D.skip || s(D, m, S);
    }
  }
}
function b_(a) {
  const i = a.indexOf("x") !== -1,
    l = a.indexOf("y") !== -1;
  return function (s, u) {
    const c = i ? Math.abs(s.x - u.x) : 0,
      f = l ? Math.abs(s.y - u.y) : 0;
    return Math.sqrt(Math.pow(c, 2) + Math.pow(f, 2));
  };
}
function ir(a, i, l, s, u) {
  const c = [];
  return (
    (!u && !a.isPointInArea(i)) ||
      Lo(
        a,
        l,
        i,
        function (d, g, m) {
          (!u && !Za(d, a.chartArea, 0)) ||
            (d.inRange(i.x, i.y, s) &&
              c.push({ element: d, datasetIndex: g, index: m }));
        },
        !0
      ),
    c
  );
}
function v_(a, i, l, s) {
  let u = [];
  function c(f, d, g) {
    const { startAngle: m, endAngle: y } = f.getProps(
        ["startAngle", "endAngle"],
        s
      ),
      { angle: v } = Xb(f, { x: i.x, y: i.y });
    Zm(v, m, y) && u.push({ element: f, datasetIndex: d, index: g });
  }
  return Lo(a, l, i, c), u;
}
function __(a, i, l, s, u, c) {
  let f = [];
  const d = b_(l);
  let g = Number.POSITIVE_INFINITY;
  function m(y, v, _) {
    const S = y.inRange(i.x, i.y, u);
    if (s && !S) return;
    const D = y.getCenterPoint(u);
    if (!(!!c || a.isPointInArea(D)) && !S) return;
    const E = d(i, D);
    E < g
      ? ((f = [{ element: y, datasetIndex: v, index: _ }]), (g = E))
      : E === g && f.push({ element: y, datasetIndex: v, index: _ });
  }
  return Lo(a, l, i, m), f;
}
function nr(a, i, l, s, u, c) {
  return !c && !a.isPointInArea(i)
    ? []
    : l === "r" && !s
    ? v_(a, i, l, u)
    : __(a, i, l, s, u, c);
}
function em(a, i, l, s, u) {
  const c = [],
    f = l === "x" ? "inXRange" : "inYRange";
  let d = !1;
  return (
    Lo(a, l, i, (g, m, y) => {
      g[f] &&
        g[f](i[l], u) &&
        (c.push({ element: g, datasetIndex: m, index: y }),
        (d = d || g.inRange(i.x, i.y, u)));
    }),
    s && !d ? [] : c
  );
}
var x_ = {
  modes: {
    index(a, i, l, s) {
      const u = Bn(i, a),
        c = l.axis || "x",
        f = l.includeInvisible || !1,
        d = l.intersect ? ir(a, u, c, s, f) : nr(a, u, c, !1, s, f),
        g = [];
      return d.length
        ? (a.getSortedVisibleDatasetMetas().forEach((m) => {
            const y = d[0].index,
              v = m.data[y];
            v &&
              !v.skip &&
              g.push({ element: v, datasetIndex: m.index, index: y });
          }),
          g)
        : [];
    },
    dataset(a, i, l, s) {
      const u = Bn(i, a),
        c = l.axis || "xy",
        f = l.includeInvisible || !1;
      let d = l.intersect ? ir(a, u, c, s, f) : nr(a, u, c, !1, s, f);
      if (d.length > 0) {
        const g = d[0].datasetIndex,
          m = a.getDatasetMeta(g).data;
        d = [];
        for (let y = 0; y < m.length; ++y)
          d.push({ element: m[y], datasetIndex: g, index: y });
      }
      return d;
    },
    point(a, i, l, s) {
      const u = Bn(i, a),
        c = l.axis || "xy",
        f = l.includeInvisible || !1;
      return ir(a, u, c, s, f);
    },
    nearest(a, i, l, s) {
      const u = Bn(i, a),
        c = l.axis || "xy",
        f = l.includeInvisible || !1;
      return nr(a, u, c, l.intersect, s, f);
    },
    x(a, i, l, s) {
      const u = Bn(i, a);
      return em(a, u, "x", l.intersect, s);
    },
    y(a, i, l, s) {
      const u = Bn(i, a);
      return em(a, u, "y", l.intersect, s);
    },
  },
};
const r0 = ["left", "top", "right", "bottom"];
function Aa(a, i) {
  return a.filter((l) => l.pos === i);
}
function im(a, i) {
  return a.filter((l) => r0.indexOf(l.pos) === -1 && l.box.axis === i);
}
function Ea(a, i) {
  return a.sort((l, s) => {
    const u = i ? s : l,
      c = i ? l : s;
    return u.weight === c.weight ? u.index - c.index : u.weight - c.weight;
  });
}
function S_(a) {
  const i = [];
  let l, s, u, c, f, d;
  for (l = 0, s = (a || []).length; l < s; ++l)
    (u = a[l]),
      ({
        position: c,
        options: { stack: f, stackWeight: d = 1 },
      } = u),
      i.push({
        index: l,
        box: u,
        pos: c,
        horizontal: u.isHorizontal(),
        weight: u.weight,
        stack: f && c + f,
        stackWeight: d,
      });
  return i;
}
function M_(a) {
  const i = {};
  for (const l of a) {
    const { stack: s, pos: u, stackWeight: c } = l;
    if (!s || !r0.includes(u)) continue;
    const f = i[s] || (i[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    f.count++, (f.weight += c);
  }
  return i;
}
function T_(a, i) {
  const l = M_(a),
    { vBoxMaxWidth: s, hBoxMaxHeight: u } = i;
  let c, f, d;
  for (c = 0, f = a.length; c < f; ++c) {
    d = a[c];
    const { fullSize: g } = d.box,
      m = l[d.stack],
      y = m && d.stackWeight / m.weight;
    d.horizontal
      ? ((d.width = y ? y * s : g && i.availableWidth), (d.height = u))
      : ((d.width = s), (d.height = y ? y * u : g && i.availableHeight));
  }
  return l;
}
function O_(a) {
  const i = S_(a),
    l = Ea(
      i.filter((m) => m.box.fullSize),
      !0
    ),
    s = Ea(Aa(i, "left"), !0),
    u = Ea(Aa(i, "right")),
    c = Ea(Aa(i, "top"), !0),
    f = Ea(Aa(i, "bottom")),
    d = im(i, "x"),
    g = im(i, "y");
  return {
    fullSize: l,
    leftAndTop: s.concat(c),
    rightAndBottom: u.concat(g).concat(f).concat(d),
    chartArea: Aa(i, "chartArea"),
    vertical: s.concat(u).concat(g),
    horizontal: c.concat(f).concat(d),
  };
}
function nm(a, i, l, s) {
  return Math.max(a[l], i[l]) + Math.max(a[s], i[s]);
}
function f0(a, i) {
  (a.top = Math.max(a.top, i.top)),
    (a.left = Math.max(a.left, i.left)),
    (a.bottom = Math.max(a.bottom, i.bottom)),
    (a.right = Math.max(a.right, i.right));
}
function D_(a, i, l, s) {
  const { pos: u, box: c } = l,
    f = a.maxPadding;
  if (!Dt(u)) {
    l.size && (a[u] -= l.size);
    const v = s[l.stack] || { size: 0, count: 1 };
    (v.size = Math.max(v.size, l.horizontal ? c.height : c.width)),
      (l.size = v.size / v.count),
      (a[u] += l.size);
  }
  c.getPadding && f0(f, c.getPadding());
  const d = Math.max(0, i.outerWidth - nm(f, a, "left", "right")),
    g = Math.max(0, i.outerHeight - nm(f, a, "top", "bottom")),
    m = d !== a.w,
    y = g !== a.h;
  return (
    (a.w = d),
    (a.h = g),
    l.horizontal ? { same: m, other: y } : { same: y, other: m }
  );
}
function A_(a) {
  const i = a.maxPadding;
  function l(s) {
    const u = Math.max(i[s] - a[s], 0);
    return (a[s] += u), u;
  }
  (a.y += l("top")), (a.x += l("left")), l("right"), l("bottom");
}
function E_(a, i) {
  const l = i.maxPadding;
  function s(u) {
    const c = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      u.forEach((f) => {
        c[f] = Math.max(i[f], l[f]);
      }),
      c
    );
  }
  return s(a ? ["left", "right"] : ["top", "bottom"]);
}
function Ba(a, i, l, s) {
  const u = [];
  let c, f, d, g, m, y;
  for (c = 0, f = a.length, m = 0; c < f; ++c) {
    (d = a[c]),
      (g = d.box),
      g.update(d.width || i.w, d.height || i.h, E_(d.horizontal, i));
    const { same: v, other: _ } = D_(i, l, d, s);
    (m |= v && u.length), (y = y || _), g.fullSize || u.push(d);
  }
  return (m && Ba(u, i, l, s)) || y;
}
function mo(a, i, l, s, u) {
  (a.top = l),
    (a.left = i),
    (a.right = i + s),
    (a.bottom = l + u),
    (a.width = s),
    (a.height = u);
}
function lm(a, i, l, s) {
  const u = l.padding;
  let { x: c, y: f } = i;
  for (const d of a) {
    const g = d.box,
      m = s[d.stack] || { placed: 0, weight: 1 },
      y = d.stackWeight / m.weight || 1;
    if (d.horizontal) {
      const v = i.w * y,
        _ = m.size || g.height;
      zo(m.start) && (f = m.start),
        g.fullSize
          ? mo(g, u.left, f, l.outerWidth - u.right - u.left, _)
          : mo(g, i.left + m.placed, f, v, _),
        (m.start = f),
        (m.placed += v),
        (f = g.bottom);
    } else {
      const v = i.h * y,
        _ = m.size || g.width;
      zo(m.start) && (c = m.start),
        g.fullSize
          ? mo(g, c, u.top, _, l.outerHeight - u.bottom - u.top)
          : mo(g, c, i.top + m.placed, _, v),
        (m.start = c),
        (m.placed += v),
        (c = g.right);
    }
  }
  (i.x = c), (i.y = f);
}
var Ze = {
  addBox(a, i) {
    a.boxes || (a.boxes = []),
      (i.fullSize = i.fullSize || !1),
      (i.position = i.position || "top"),
      (i.weight = i.weight || 0),
      (i._layers =
        i._layers ||
        function () {
          return [
            {
              z: 0,
              draw(l) {
                i.draw(l);
              },
            },
          ];
        }),
      a.boxes.push(i);
  },
  removeBox(a, i) {
    const l = a.boxes ? a.boxes.indexOf(i) : -1;
    l !== -1 && a.boxes.splice(l, 1);
  },
  configure(a, i, l) {
    (i.fullSize = l.fullSize), (i.position = l.position), (i.weight = l.weight);
  },
  update(a, i, l, s) {
    if (!a) return;
    const u = Fe(a.options.layout.padding),
      c = Math.max(i - u.width, 0),
      f = Math.max(l - u.height, 0),
      d = O_(a.boxes),
      g = d.vertical,
      m = d.horizontal;
    At(a.boxes, (A) => {
      typeof A.beforeLayout == "function" && A.beforeLayout();
    });
    const y =
        g.reduce(
          (A, E) => (E.box.options && E.box.options.display === !1 ? A : A + 1),
          0
        ) || 1,
      v = Object.freeze({
        outerWidth: i,
        outerHeight: l,
        padding: u,
        availableWidth: c,
        availableHeight: f,
        vBoxMaxWidth: c / 2 / y,
        hBoxMaxHeight: f / 2,
      }),
      _ = Object.assign({}, u);
    f0(_, Fe(s));
    const S = Object.assign(
        { maxPadding: _, w: c, h: f, x: u.left, y: u.top },
        u
      ),
      D = T_(g.concat(m), v);
    Ba(d.fullSize, S, v, D),
      Ba(g, S, v, D),
      Ba(m, S, v, D) && Ba(g, S, v, D),
      A_(S),
      lm(d.leftAndTop, S, v, D),
      (S.x += S.w),
      (S.y += S.h),
      lm(d.rightAndBottom, S, v, D),
      (a.chartArea = {
        left: S.left,
        top: S.top,
        right: S.left + S.w,
        bottom: S.top + S.h,
        height: S.h,
        width: S.w,
      }),
      At(d.chartArea, (A) => {
        const E = A.box;
        Object.assign(E, a.chartArea),
          E.update(S.w, S.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class h0 {
  acquireContext(i, l) {}
  releaseContext(i) {
    return !1;
  }
  addEventListener(i, l, s) {}
  removeEventListener(i, l, s) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(i, l, s, u) {
    return (
      (l = Math.max(0, l || i.width)),
      (s = s || i.height),
      { width: l, height: Math.max(0, u ? Math.floor(l / u) : s) }
    );
  }
  isAttached(i) {
    return !0;
  }
  updateConfig(i) {}
}
class z_ extends h0 {
  acquireContext(i) {
    return (i && i.getContext && i.getContext("2d")) || null;
  }
  updateConfig(i) {
    i.options.animation = !1;
  }
}
const Mo = "$chartjs",
  C_ = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  am = (a) => a === null || a === "";
function R_(a, i) {
  const l = a.style,
    s = a.getAttribute("height"),
    u = a.getAttribute("width");
  if (
    ((a[Mo] = {
      initial: {
        height: s,
        width: u,
        style: { display: l.display, height: l.height, width: l.width },
      },
    }),
    (l.display = l.display || "block"),
    (l.boxSizing = l.boxSizing || "border-box"),
    am(u))
  ) {
    const c = Qg(a, "width");
    c !== void 0 && (a.width = c);
  }
  if (am(s))
    if (a.style.height === "") a.height = a.width / (i || 2);
    else {
      const c = Qg(a, "height");
      c !== void 0 && (a.height = c);
    }
  return a;
}
const d0 = Xv ? { passive: !0 } : !1;
function w_(a, i, l) {
  a && a.addEventListener(i, l, d0);
}
function H_(a, i, l) {
  a && a.canvas && a.canvas.removeEventListener(i, l, d0);
}
function B_(a, i) {
  const l = C_[a.type] || a.type,
    { x: s, y: u } = Bn(a, i);
  return {
    type: l,
    chart: i,
    native: a,
    x: s !== void 0 ? s : null,
    y: u !== void 0 ? u : null,
  };
}
function wo(a, i) {
  for (const l of a) if (l === i || l.contains(i)) return !0;
}
function L_(a, i, l) {
  const s = a.canvas,
    u = new MutationObserver((c) => {
      let f = !1;
      for (const d of c)
        (f = f || wo(d.addedNodes, s)), (f = f && !wo(d.removedNodes, s));
      f && l();
    });
  return u.observe(document, { childList: !0, subtree: !0 }), u;
}
function N_(a, i, l) {
  const s = a.canvas,
    u = new MutationObserver((c) => {
      let f = !1;
      for (const d of c)
        (f = f || wo(d.removedNodes, s)), (f = f && !wo(d.addedNodes, s));
      f && l();
    });
  return u.observe(document, { childList: !0, subtree: !0 }), u;
}
const Fa = new Map();
let sm = 0;
function g0() {
  const a = window.devicePixelRatio;
  a !== sm &&
    ((sm = a),
    Fa.forEach((i, l) => {
      l.currentDevicePixelRatio !== a && i();
    }));
}
function k_(a, i) {
  Fa.size || window.addEventListener("resize", g0), Fa.set(a, i);
}
function U_(a) {
  Fa.delete(a), Fa.size || window.removeEventListener("resize", g0);
}
function j_(a, i, l) {
  const s = a.canvas,
    u = s && Rr(s);
  if (!u) return;
  const c = Wm((d, g) => {
      const m = u.clientWidth;
      l(d, g), m < u.clientWidth && l();
    }, window),
    f = new ResizeObserver((d) => {
      const g = d[0],
        m = g.contentRect.width,
        y = g.contentRect.height;
      (m === 0 && y === 0) || c(m, y);
    });
  return f.observe(u), k_(a, c), f;
}
function lr(a, i, l) {
  l && l.disconnect(), i === "resize" && U_(a);
}
function Y_(a, i, l) {
  const s = a.canvas,
    u = Wm((c) => {
      a.ctx !== null && l(B_(c, a));
    }, a);
  return w_(s, i, u), u;
}
class V_ extends h0 {
  acquireContext(i, l) {
    const s = i && i.getContext && i.getContext("2d");
    return s && s.canvas === i ? (R_(i, l), s) : null;
  }
  releaseContext(i) {
    const l = i.canvas;
    if (!l[Mo]) return !1;
    const s = l[Mo].initial;
    ["height", "width"].forEach((c) => {
      const f = s[c];
      Nt(f) ? l.removeAttribute(c) : l.setAttribute(c, f);
    });
    const u = s.style || {};
    return (
      Object.keys(u).forEach((c) => {
        l.style[c] = u[c];
      }),
      (l.width = l.width),
      delete l[Mo],
      !0
    );
  }
  addEventListener(i, l, s) {
    this.removeEventListener(i, l);
    const u = i.$proxies || (i.$proxies = {}),
      f = { attach: L_, detach: N_, resize: j_ }[l] || Y_;
    u[l] = f(i, l, s);
  }
  removeEventListener(i, l) {
    const s = i.$proxies || (i.$proxies = {}),
      u = s[l];
    if (!u) return;
    (({ attach: lr, detach: lr, resize: lr })[l] || H_)(i, l, u),
      (s[l] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(i, l, s, u) {
    return qv(i, l, s, u);
  }
  isAttached(i) {
    const l = i && Rr(i);
    return !!(l && l.isConnected);
  }
}
function q_(a) {
  return !Cr() || (typeof OffscreenCanvas < "u" && a instanceof OffscreenCanvas)
    ? z_
    : V_;
}
class Hi {
  constructor() {
    ht(this, "x");
    ht(this, "y");
    ht(this, "active", !1);
    ht(this, "options");
    ht(this, "$animations");
  }
  tooltipPosition(i) {
    const { x: l, y: s } = this.getProps(["x", "y"], i);
    return { x: l, y: s };
  }
  hasValue() {
    return Qa(this.x) && Qa(this.y);
  }
  getProps(i, l) {
    const s = this.$animations;
    if (!l || !s) return this;
    const u = {};
    return (
      i.forEach((c) => {
        u[c] = s[c] && s[c].active() ? s[c]._to : this[c];
      }),
      u
    );
  }
}
ht(Hi, "defaults", {}), ht(Hi, "defaultRoutes");
function X_(a, i) {
  const l = a.options.ticks,
    s = G_(a),
    u = Math.min(l.maxTicksLimit || s, s),
    c = l.major.enabled ? Z_(i) : [],
    f = c.length,
    d = c[0],
    g = c[f - 1],
    m = [];
  if (f > u) return K_(i, m, c, f / u), m;
  const y = Q_(c, i, u);
  if (f > 0) {
    let v, _;
    const S = f > 1 ? Math.round((g - d) / (f - 1)) : null;
    for (po(i, m, y, Nt(S) ? 0 : d - S, d), v = 0, _ = f - 1; v < _; v++)
      po(i, m, y, c[v], c[v + 1]);
    return po(i, m, y, g, Nt(S) ? i.length : g + S), m;
  }
  return po(i, m, y), m;
}
function G_(a) {
  const i = a.options.offset,
    l = a._tickSize(),
    s = a._length / l + (i ? 0 : 1),
    u = a._maxLength / l;
  return Math.floor(Math.min(s, u));
}
function Q_(a, i, l) {
  const s = F_(a),
    u = i.length / l;
  if (!s) return Math.max(u, 1);
  const c = Ub(s);
  for (let f = 0, d = c.length - 1; f < d; f++) {
    const g = c[f];
    if (g > u) return g;
  }
  return Math.max(u, 1);
}
function Z_(a) {
  const i = [];
  let l, s;
  for (l = 0, s = a.length; l < s; l++) a[l].major && i.push(l);
  return i;
}
function K_(a, i, l, s) {
  let u = 0,
    c = l[0],
    f;
  for (s = Math.ceil(s), f = 0; f < a.length; f++)
    f === c && (i.push(a[f]), u++, (c = l[u * s]));
}
function po(a, i, l, s, u) {
  const c = _t(s, 0),
    f = Math.min(_t(u, a.length), a.length);
  let d = 0,
    g,
    m,
    y;
  for (
    l = Math.ceil(l), u && ((g = u - s), (l = g / Math.floor(g / l))), y = c;
    y < 0;

  )
    d++, (y = Math.round(c + d * l));
  for (m = Math.max(c, 0); m < f; m++)
    m === y && (i.push(a[m]), d++, (y = Math.round(c + d * l)));
}
function F_(a) {
  const i = a.length;
  let l, s;
  if (i < 2) return !1;
  for (s = a[0], l = 1; l < i; ++l) if (a[l] - a[l - 1] !== s) return !1;
  return s;
}
const W_ = (a) => (a === "left" ? "right" : a === "right" ? "left" : a),
  om = (a, i, l) => (i === "top" || i === "left" ? a[i] + l : a[i] - l),
  um = (a, i) => Math.min(i || a, a);
function cm(a, i) {
  const l = [],
    s = a.length / i,
    u = a.length;
  let c = 0;
  for (; c < u; c += s) l.push(a[Math.floor(c)]);
  return l;
}
function J_(a, i, l) {
  const s = a.ticks.length,
    u = Math.min(i, s - 1),
    c = a._startPixel,
    f = a._endPixel,
    d = 1e-6;
  let g = a.getPixelForTick(u),
    m;
  if (
    !(
      l &&
      (s === 1
        ? (m = Math.max(g - c, f - g))
        : i === 0
        ? (m = (a.getPixelForTick(1) - g) / 2)
        : (m = (g - a.getPixelForTick(u - 1)) / 2),
      (g += u < i ? m : -m),
      g < c - d || g > f + d)
    )
  )
    return g;
}
function $_(a, i) {
  At(a, (l) => {
    const s = l.gc,
      u = s.length / 2;
    let c;
    if (u > i) {
      for (c = 0; c < u; ++c) delete l.data[s[c]];
      s.splice(0, u);
    }
  });
}
function za(a) {
  return a.drawTicks ? a.tickLength : 0;
}
function rm(a, i) {
  if (!a.display) return 0;
  const l = ge(a.font, i),
    s = Fe(a.padding);
  return (le(a.text) ? a.text.length : 1) * l.lineHeight + s.height;
}
function P_(a, i) {
  return Yn(a, { scale: i, type: "scale" });
}
function I_(a, i, l) {
  return Yn(a, { tick: l, index: i, type: "tick" });
}
function t1(a, i, l) {
  let s = Mr(a);
  return ((l && i !== "right") || (!l && i === "right")) && (s = W_(s)), s;
}
function e1(a, i, l, s) {
  const { top: u, left: c, bottom: f, right: d, chart: g } = a,
    { chartArea: m, scales: y } = g;
  let v = 0,
    _,
    S,
    D;
  const A = f - u,
    E = d - c;
  if (a.isHorizontal()) {
    if (((S = de(s, c, d)), Dt(l))) {
      const B = Object.keys(l)[0],
        V = l[B];
      D = y[B].getPixelForValue(V) + A - i;
    } else
      l === "center" ? (D = (m.bottom + m.top) / 2 + A - i) : (D = om(a, l, i));
    _ = d - c;
  } else {
    if (Dt(l)) {
      const B = Object.keys(l)[0],
        V = l[B];
      S = y[B].getPixelForValue(V) - E + i;
    } else
      l === "center" ? (S = (m.left + m.right) / 2 - E + i) : (S = om(a, l, i));
    (D = de(s, f, u)), (v = l === "left" ? -ei : ei);
  }
  return { titleX: S, titleY: D, maxWidth: _, rotation: v };
}
class Al extends Hi {
  constructor(i) {
    super(),
      (this.id = i.id),
      (this.type = i.type),
      (this.options = void 0),
      (this.ctx = i.ctx),
      (this.chart = i.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(i) {
    (this.options = i.setContext(this.getContext())),
      (this.axis = i.axis),
      (this._userMin = this.parse(i.min)),
      (this._userMax = this.parse(i.max)),
      (this._suggestedMin = this.parse(i.suggestedMin)),
      (this._suggestedMax = this.parse(i.suggestedMax));
  }
  parse(i, l) {
    return i;
  }
  getUserBounds() {
    let { _userMin: i, _userMax: l, _suggestedMin: s, _suggestedMax: u } = this;
    return (
      (i = ui(i, Number.POSITIVE_INFINITY)),
      (l = ui(l, Number.NEGATIVE_INFINITY)),
      (s = ui(s, Number.POSITIVE_INFINITY)),
      (u = ui(u, Number.NEGATIVE_INFINITY)),
      { min: ui(i, s), max: ui(l, u), minDefined: Ke(i), maxDefined: Ke(l) }
    );
  }
  getMinMax(i) {
    let { min: l, max: s, minDefined: u, maxDefined: c } = this.getUserBounds(),
      f;
    if (u && c) return { min: l, max: s };
    const d = this.getMatchingVisibleMetas();
    for (let g = 0, m = d.length; g < m; ++g)
      (f = d[g].controller.getMinMax(this, i)),
        u || (l = Math.min(l, f.min)),
        c || (s = Math.max(s, f.max));
    return (
      (l = c && l > s ? s : l),
      (s = u && l > s ? l : s),
      { min: ui(l, ui(s, l)), max: ui(s, ui(l, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const i = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? i.xLabels : i.yLabels) ||
      i.labels ||
      []
    );
  }
  getLabelItems(i = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(i));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    kt(this.options.beforeUpdate, [this]);
  }
  update(i, l, s) {
    const { beginAtZero: u, grace: c, ticks: f } = this.options,
      d = f.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = i),
      (this.maxHeight = l),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = _v(this, c, u)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const g = d < this.ticks.length;
    this._convertTicksToLabels(g ? cm(this.ticks, d) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      f.display &&
        (f.autoSkip || f.source === "auto") &&
        ((this.ticks = X_(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      g && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let i = this.options.reverse,
      l,
      s;
    this.isHorizontal()
      ? ((l = this.left), (s = this.right))
      : ((l = this.top), (s = this.bottom), (i = !i)),
      (this._startPixel = l),
      (this._endPixel = s),
      (this._reversePixels = i),
      (this._length = s - l),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    kt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    kt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    kt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(i) {
    this.chart.notifyPlugins(i, this.getContext()), kt(this.options[i], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    kt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(i) {
    const l = this.options.ticks;
    let s, u, c;
    for (s = 0, u = i.length; s < u; s++)
      (c = i[s]), (c.label = kt(l.callback, [c.value, s, i], this));
  }
  afterTickToLabelConversion() {
    kt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    kt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const i = this.options,
      l = i.ticks,
      s = um(this.ticks.length, i.ticks.maxTicksLimit),
      u = l.minRotation || 0,
      c = l.maxRotation;
    let f = u,
      d,
      g,
      m;
    if (
      !this._isVisible() ||
      !l.display ||
      u >= c ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = u;
      return;
    }
    const y = this._getLabelSizes(),
      v = y.widest.width,
      _ = y.highest.height,
      S = Qe(this.chart.width - v, 0, this.maxWidth);
    (d = i.offset ? this.maxWidth / s : S / (s - 1)),
      v + 6 > d &&
        ((d = S / (s - (i.offset ? 0.5 : 1))),
        (g =
          this.maxHeight -
          za(i.grid) -
          l.padding -
          rm(i.title, this.chart.options.font)),
        (m = Math.sqrt(v * v + _ * _)),
        (f = qb(
          Math.min(
            Math.asin(Qe((y.highest.height + 6) / d, -1, 1)),
            Math.asin(Qe(g / m, -1, 1)) - Math.asin(Qe(_ / m, -1, 1))
          )
        )),
        (f = Math.max(u, Math.min(c, f)))),
      (this.labelRotation = f);
  }
  afterCalculateLabelRotation() {
    kt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    kt(this.options.beforeFit, [this]);
  }
  fit() {
    const i = { width: 0, height: 0 },
      {
        chart: l,
        options: { ticks: s, title: u, grid: c },
      } = this,
      f = this._isVisible(),
      d = this.isHorizontal();
    if (f) {
      const g = rm(u, l.options.font);
      if (
        (d
          ? ((i.width = this.maxWidth), (i.height = za(c) + g))
          : ((i.height = this.maxHeight), (i.width = za(c) + g)),
        s.display && this.ticks.length)
      ) {
        const {
            first: m,
            last: y,
            widest: v,
            highest: _,
          } = this._getLabelSizes(),
          S = s.padding * 2,
          D = Nn(this.labelRotation),
          A = Math.cos(D),
          E = Math.sin(D);
        if (d) {
          const B = s.mirror ? 0 : E * v.width + A * _.height;
          i.height = Math.min(this.maxHeight, i.height + B + S);
        } else {
          const B = s.mirror ? 0 : A * v.width + E * _.height;
          i.width = Math.min(this.maxWidth, i.width + B + S);
        }
        this._calculatePadding(m, y, E, A);
      }
    }
    this._handleMargins(),
      d
        ? ((this.width = this._length =
            l.width - this._margins.left - this._margins.right),
          (this.height = i.height))
        : ((this.width = i.width),
          (this.height = this._length =
            l.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(i, l, s, u) {
    const {
        ticks: { align: c, padding: f },
        position: d,
      } = this.options,
      g = this.labelRotation !== 0,
      m = d !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const y = this.getPixelForTick(0) - this.left,
        v = this.right - this.getPixelForTick(this.ticks.length - 1);
      let _ = 0,
        S = 0;
      g
        ? m
          ? ((_ = u * i.width), (S = s * l.height))
          : ((_ = s * i.height), (S = u * l.width))
        : c === "start"
        ? (S = l.width)
        : c === "end"
        ? (_ = i.width)
        : c !== "inner" && ((_ = i.width / 2), (S = l.width / 2)),
        (this.paddingLeft = Math.max(
          ((_ - y + f) * this.width) / (this.width - y),
          0
        )),
        (this.paddingRight = Math.max(
          ((S - v + f) * this.width) / (this.width - v),
          0
        ));
    } else {
      let y = l.height / 2,
        v = i.height / 2;
      c === "start"
        ? ((y = 0), (v = i.height))
        : c === "end" && ((y = l.height), (v = 0)),
        (this.paddingTop = y + f),
        (this.paddingBottom = v + f);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    kt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: i, position: l } = this.options;
    return l === "top" || l === "bottom" || i === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(i) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(i);
    let l, s;
    for (l = 0, s = i.length; l < s; l++)
      Nt(i[l].label) && (i.splice(l, 1), s--, l--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let i = this._labelSizes;
    if (!i) {
      const l = this.options.ticks.sampleSize;
      let s = this.ticks;
      l < s.length && (s = cm(s, l)),
        (this._labelSizes = i =
          this._computeLabelSizes(
            s,
            s.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return i;
  }
  _computeLabelSizes(i, l, s) {
    const { ctx: u, _longestTextCache: c } = this,
      f = [],
      d = [],
      g = Math.floor(l / um(l, s));
    let m = 0,
      y = 0,
      v,
      _,
      S,
      D,
      A,
      E,
      B,
      V,
      Q,
      K,
      L;
    for (v = 0; v < l; v += g) {
      if (
        ((D = i[v].label),
        (A = this._resolveTickFontOptions(v)),
        (u.font = E = A.string),
        (B = c[E] = c[E] || { data: {}, gc: [] }),
        (V = A.lineHeight),
        (Q = K = 0),
        !Nt(D) && !le(D))
      )
        (Q = Yg(u, B.data, B.gc, Q, D)), (K = V);
      else if (le(D))
        for (_ = 0, S = D.length; _ < S; ++_)
          (L = D[_]),
            !Nt(L) && !le(L) && ((Q = Yg(u, B.data, B.gc, Q, L)), (K += V));
      f.push(Q), d.push(K), (m = Math.max(Q, m)), (y = Math.max(K, y));
    }
    $_(c, l);
    const Z = f.indexOf(m),
      F = d.indexOf(y),
      X = (Y) => ({ width: f[Y] || 0, height: d[Y] || 0 });
    return {
      first: X(0),
      last: X(l - 1),
      widest: X(Z),
      highest: X(F),
      widths: f,
      heights: d,
    };
  }
  getLabelForValue(i) {
    return i;
  }
  getPixelForValue(i, l) {
    return NaN;
  }
  getValueForPixel(i) {}
  getPixelForTick(i) {
    const l = this.ticks;
    return i < 0 || i > l.length - 1 ? null : this.getPixelForValue(l[i].value);
  }
  getPixelForDecimal(i) {
    this._reversePixels && (i = 1 - i);
    const l = this._startPixel + i * this._length;
    return Qb(this._alignToPixels ? wn(this.chart, l, 0) : l);
  }
  getDecimalForPixel(i) {
    const l = (i - this._startPixel) / this._length;
    return this._reversePixels ? 1 - l : l;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: i, max: l } = this;
    return i < 0 && l < 0 ? l : i > 0 && l > 0 ? i : 0;
  }
  getContext(i) {
    const l = this.ticks || [];
    if (i >= 0 && i < l.length) {
      const s = l[i];
      return s.$context || (s.$context = I_(this.getContext(), i, s));
    }
    return this.$context || (this.$context = P_(this.chart.getContext(), this));
  }
  _tickSize() {
    const i = this.options.ticks,
      l = Nn(this.labelRotation),
      s = Math.abs(Math.cos(l)),
      u = Math.abs(Math.sin(l)),
      c = this._getLabelSizes(),
      f = i.autoSkipPadding || 0,
      d = c ? c.widest.width + f : 0,
      g = c ? c.highest.height + f : 0;
    return this.isHorizontal()
      ? g * s > d * u
        ? d / s
        : g / u
      : g * u < d * s
      ? g / s
      : d / u;
  }
  _isVisible() {
    const i = this.options.display;
    return i !== "auto" ? !!i : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(i) {
    const l = this.axis,
      s = this.chart,
      u = this.options,
      { grid: c, position: f, border: d } = u,
      g = c.offset,
      m = this.isHorizontal(),
      v = this.ticks.length + (g ? 1 : 0),
      _ = za(c),
      S = [],
      D = d.setContext(this.getContext()),
      A = D.display ? D.width : 0,
      E = A / 2,
      B = function (j) {
        return wn(s, j, A);
      };
    let V, Q, K, L, Z, F, X, Y, W, nt, ot, Et;
    if (f === "top")
      (V = B(this.bottom)),
        (F = this.bottom - _),
        (Y = V - E),
        (nt = B(i.top) + E),
        (Et = i.bottom);
    else if (f === "bottom")
      (V = B(this.top)),
        (nt = i.top),
        (Et = B(i.bottom) - E),
        (F = V + E),
        (Y = this.top + _);
    else if (f === "left")
      (V = B(this.right)),
        (Z = this.right - _),
        (X = V - E),
        (W = B(i.left) + E),
        (ot = i.right);
    else if (f === "right")
      (V = B(this.left)),
        (W = i.left),
        (ot = B(i.right) - E),
        (Z = V + E),
        (X = this.left + _);
    else if (l === "x") {
      if (f === "center") V = B((i.top + i.bottom) / 2 + 0.5);
      else if (Dt(f)) {
        const j = Object.keys(f)[0],
          tt = f[j];
        V = B(this.chart.scales[j].getPixelForValue(tt));
      }
      (nt = i.top), (Et = i.bottom), (F = V + E), (Y = F + _);
    } else if (l === "y") {
      if (f === "center") V = B((i.left + i.right) / 2);
      else if (Dt(f)) {
        const j = Object.keys(f)[0],
          tt = f[j];
        V = B(this.chart.scales[j].getPixelForValue(tt));
      }
      (Z = V - E), (X = Z - _), (W = i.left), (ot = i.right);
    }
    const Ht = _t(u.ticks.maxTicksLimit, v),
      rt = Math.max(1, Math.ceil(v / Ht));
    for (Q = 0; Q < v; Q += rt) {
      const j = this.getContext(Q),
        tt = c.setContext(j),
        et = d.setContext(j),
        xt = tt.lineWidth,
        M = tt.color,
        U = et.dash || [],
        I = et.dashOffset,
        $ = tt.tickWidth,
        G = tt.tickColor,
        ct = tt.tickBorderDash || [],
        st = tt.tickBorderDashOffset;
      (K = J_(this, Q, g)),
        K !== void 0 &&
          ((L = wn(s, K, xt)),
          m ? (Z = X = W = ot = L) : (F = Y = nt = Et = L),
          S.push({
            tx1: Z,
            ty1: F,
            tx2: X,
            ty2: Y,
            x1: W,
            y1: nt,
            x2: ot,
            y2: Et,
            width: xt,
            color: M,
            borderDash: U,
            borderDashOffset: I,
            tickWidth: $,
            tickColor: G,
            tickBorderDash: ct,
            tickBorderDashOffset: st,
          }));
    }
    return (this._ticksLength = v), (this._borderValue = V), S;
  }
  _computeLabelItems(i) {
    const l = this.axis,
      s = this.options,
      { position: u, ticks: c } = s,
      f = this.isHorizontal(),
      d = this.ticks,
      { align: g, crossAlign: m, padding: y, mirror: v } = c,
      _ = za(s.grid),
      S = _ + y,
      D = v ? -y : S,
      A = -Nn(this.labelRotation),
      E = [];
    let B,
      V,
      Q,
      K,
      L,
      Z,
      F,
      X,
      Y,
      W,
      nt,
      ot,
      Et = "middle";
    if (u === "top")
      (Z = this.bottom - D), (F = this._getXAxisLabelAlignment());
    else if (u === "bottom")
      (Z = this.top + D), (F = this._getXAxisLabelAlignment());
    else if (u === "left") {
      const rt = this._getYAxisLabelAlignment(_);
      (F = rt.textAlign), (L = rt.x);
    } else if (u === "right") {
      const rt = this._getYAxisLabelAlignment(_);
      (F = rt.textAlign), (L = rt.x);
    } else if (l === "x") {
      if (u === "center") Z = (i.top + i.bottom) / 2 + S;
      else if (Dt(u)) {
        const rt = Object.keys(u)[0],
          j = u[rt];
        Z = this.chart.scales[rt].getPixelForValue(j) + S;
      }
      F = this._getXAxisLabelAlignment();
    } else if (l === "y") {
      if (u === "center") L = (i.left + i.right) / 2 - S;
      else if (Dt(u)) {
        const rt = Object.keys(u)[0],
          j = u[rt];
        L = this.chart.scales[rt].getPixelForValue(j);
      }
      F = this._getYAxisLabelAlignment(_).textAlign;
    }
    l === "y" &&
      (g === "start" ? (Et = "top") : g === "end" && (Et = "bottom"));
    const Ht = this._getLabelSizes();
    for (B = 0, V = d.length; B < V; ++B) {
      (Q = d[B]), (K = Q.label);
      const rt = c.setContext(this.getContext(B));
      (X = this.getPixelForTick(B) + c.labelOffset),
        (Y = this._resolveTickFontOptions(B)),
        (W = Y.lineHeight),
        (nt = le(K) ? K.length : 1);
      const j = nt / 2,
        tt = rt.color,
        et = rt.textStrokeColor,
        xt = rt.textStrokeWidth;
      let M = F;
      f
        ? ((L = X),
          F === "inner" &&
            (B === V - 1
              ? (M = this.options.reverse ? "left" : "right")
              : B === 0
              ? (M = this.options.reverse ? "right" : "left")
              : (M = "center")),
          u === "top"
            ? m === "near" || A !== 0
              ? (ot = -nt * W + W / 2)
              : m === "center"
              ? (ot = -Ht.highest.height / 2 - j * W + W)
              : (ot = -Ht.highest.height + W / 2)
            : m === "near" || A !== 0
            ? (ot = W / 2)
            : m === "center"
            ? (ot = Ht.highest.height / 2 - j * W)
            : (ot = Ht.highest.height - nt * W),
          v && (ot *= -1),
          A !== 0 && !rt.showLabelBackdrop && (L += (W / 2) * Math.sin(A)))
        : ((Z = X), (ot = ((1 - nt) * W) / 2));
      let U;
      if (rt.showLabelBackdrop) {
        const I = Fe(rt.backdropPadding),
          $ = Ht.heights[B],
          G = Ht.widths[B];
        let ct = ot - I.top,
          st = 0 - I.left;
        switch (Et) {
          case "middle":
            ct -= $ / 2;
            break;
          case "bottom":
            ct -= $;
            break;
        }
        switch (F) {
          case "center":
            st -= G / 2;
            break;
          case "right":
            st -= G;
            break;
          case "inner":
            B === V - 1 ? (st -= G) : B > 0 && (st -= G / 2);
            break;
        }
        U = {
          left: st,
          top: ct,
          width: G + I.width,
          height: $ + I.height,
          color: rt.backdropColor,
        };
      }
      E.push({
        label: K,
        font: Y,
        textOffset: ot,
        options: {
          rotation: A,
          color: tt,
          strokeColor: et,
          strokeWidth: xt,
          textAlign: M,
          textBaseline: Et,
          translation: [L, Z],
          backdrop: U,
        },
      });
    }
    return E;
  }
  _getXAxisLabelAlignment() {
    const { position: i, ticks: l } = this.options;
    if (-Nn(this.labelRotation)) return i === "top" ? "left" : "right";
    let u = "center";
    return (
      l.align === "start"
        ? (u = "left")
        : l.align === "end"
        ? (u = "right")
        : l.align === "inner" && (u = "inner"),
      u
    );
  }
  _getYAxisLabelAlignment(i) {
    const {
        position: l,
        ticks: { crossAlign: s, mirror: u, padding: c },
      } = this.options,
      f = this._getLabelSizes(),
      d = i + c,
      g = f.widest.width;
    let m, y;
    return (
      l === "left"
        ? u
          ? ((y = this.right + c),
            s === "near"
              ? (m = "left")
              : s === "center"
              ? ((m = "center"), (y += g / 2))
              : ((m = "right"), (y += g)))
          : ((y = this.right - d),
            s === "near"
              ? (m = "right")
              : s === "center"
              ? ((m = "center"), (y -= g / 2))
              : ((m = "left"), (y = this.left)))
        : l === "right"
        ? u
          ? ((y = this.left + c),
            s === "near"
              ? (m = "right")
              : s === "center"
              ? ((m = "center"), (y -= g / 2))
              : ((m = "left"), (y -= g)))
          : ((y = this.left + d),
            s === "near"
              ? (m = "left")
              : s === "center"
              ? ((m = "center"), (y += g / 2))
              : ((m = "right"), (y = this.right)))
        : (m = "right"),
      { textAlign: m, x: y }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const i = this.chart,
      l = this.options.position;
    if (l === "left" || l === "right")
      return { top: 0, left: this.left, bottom: i.height, right: this.right };
    if (l === "top" || l === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: i.width };
  }
  drawBackground() {
    const {
      ctx: i,
      options: { backgroundColor: l },
      left: s,
      top: u,
      width: c,
      height: f,
    } = this;
    l && (i.save(), (i.fillStyle = l), i.fillRect(s, u, c, f), i.restore());
  }
  getLineWidthForValue(i) {
    const l = this.options.grid;
    if (!this._isVisible() || !l.display) return 0;
    const u = this.ticks.findIndex((c) => c.value === i);
    return u >= 0 ? l.setContext(this.getContext(u)).lineWidth : 0;
  }
  drawGrid(i) {
    const l = this.options.grid,
      s = this.ctx,
      u =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(i));
    let c, f;
    const d = (g, m, y) => {
      !y.width ||
        !y.color ||
        (s.save(),
        (s.lineWidth = y.width),
        (s.strokeStyle = y.color),
        s.setLineDash(y.borderDash || []),
        (s.lineDashOffset = y.borderDashOffset),
        s.beginPath(),
        s.moveTo(g.x, g.y),
        s.lineTo(m.x, m.y),
        s.stroke(),
        s.restore());
    };
    if (l.display)
      for (c = 0, f = u.length; c < f; ++c) {
        const g = u[c];
        l.drawOnChartArea && d({ x: g.x1, y: g.y1 }, { x: g.x2, y: g.y2 }, g),
          l.drawTicks &&
            d(
              { x: g.tx1, y: g.ty1 },
              { x: g.tx2, y: g.ty2 },
              {
                color: g.tickColor,
                width: g.tickWidth,
                borderDash: g.tickBorderDash,
                borderDashOffset: g.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: i,
        ctx: l,
        options: { border: s, grid: u },
      } = this,
      c = s.setContext(this.getContext()),
      f = s.display ? c.width : 0;
    if (!f) return;
    const d = u.setContext(this.getContext(0)).lineWidth,
      g = this._borderValue;
    let m, y, v, _;
    this.isHorizontal()
      ? ((m = wn(i, this.left, f) - f / 2),
        (y = wn(i, this.right, d) + d / 2),
        (v = _ = g))
      : ((v = wn(i, this.top, f) - f / 2),
        (_ = wn(i, this.bottom, d) + d / 2),
        (m = y = g)),
      l.save(),
      (l.lineWidth = c.width),
      (l.strokeStyle = c.color),
      l.beginPath(),
      l.moveTo(m, v),
      l.lineTo(y, _),
      l.stroke(),
      l.restore();
  }
  drawLabels(i) {
    if (!this.options.ticks.display) return;
    const s = this.ctx,
      u = this._computeLabelArea();
    u && Or(s, u);
    const c = this.getLabelItems(i);
    for (const f of c) {
      const d = f.options,
        g = f.font,
        m = f.label,
        y = f.textOffset;
      Ka(s, m, 0, y, g, d);
    }
    u && Dr(s);
  }
  drawTitle() {
    const {
      ctx: i,
      options: { position: l, title: s, reverse: u },
    } = this;
    if (!s.display) return;
    const c = ge(s.font),
      f = Fe(s.padding),
      d = s.align;
    let g = c.lineHeight / 2;
    l === "bottom" || l === "center" || Dt(l)
      ? ((g += f.bottom),
        le(s.text) && (g += c.lineHeight * (s.text.length - 1)))
      : (g += f.top);
    const {
      titleX: m,
      titleY: y,
      maxWidth: v,
      rotation: _,
    } = e1(this, g, l, d);
    Ka(i, s.text, 0, 0, c, {
      color: s.color,
      maxWidth: v,
      rotation: _,
      textAlign: t1(d, l, u),
      textBaseline: "middle",
      translation: [m, y],
    });
  }
  draw(i) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(i),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(i));
  }
  _layers() {
    const i = this.options,
      l = (i.ticks && i.ticks.z) || 0,
      s = _t(i.grid && i.grid.z, -1),
      u = _t(i.border && i.border.z, 0);
    return !this._isVisible() || this.draw !== Al.prototype.draw
      ? [
          {
            z: l,
            draw: (c) => {
              this.draw(c);
            },
          },
        ]
      : [
          {
            z: s,
            draw: (c) => {
              this.drawBackground(), this.drawGrid(c), this.drawTitle();
            },
          },
          {
            z: u,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: l,
            draw: (c) => {
              this.drawLabels(c);
            },
          },
        ];
  }
  getMatchingVisibleMetas(i) {
    const l = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + "AxisID",
      u = [];
    let c, f;
    for (c = 0, f = l.length; c < f; ++c) {
      const d = l[c];
      d[s] === this.id && (!i || d.type === i) && u.push(d);
    }
    return u;
  }
  _resolveTickFontOptions(i) {
    const l = this.options.ticks.setContext(this.getContext(i));
    return ge(l.font);
  }
  _maxDigits() {
    const i = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / i;
  }
}
class yo {
  constructor(i, l, s) {
    (this.type = i),
      (this.scope = l),
      (this.override = s),
      (this.items = Object.create(null));
  }
  isForType(i) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      i.prototype
    );
  }
  register(i) {
    const l = Object.getPrototypeOf(i);
    let s;
    l1(l) && (s = this.register(l));
    const u = this.items,
      c = i.id,
      f = this.scope + "." + c;
    if (!c) throw new Error("class does not have id: " + i);
    return (
      c in u ||
        ((u[c] = i),
        i1(i, f, s),
        this.override && Kt.override(i.id, i.overrides)),
      f
    );
  }
  get(i) {
    return this.items[i];
  }
  unregister(i) {
    const l = this.items,
      s = i.id,
      u = this.scope;
    s in l && delete l[s],
      u && s in Kt[u] && (delete Kt[u][s], this.override && delete jn[s]);
  }
}
function i1(a, i, l) {
  const s = Ga(Object.create(null), [
    l ? Kt.get(l) : {},
    Kt.get(i),
    a.defaults,
  ]);
  Kt.set(i, s),
    a.defaultRoutes && n1(i, a.defaultRoutes),
    a.descriptors && Kt.describe(i, a.descriptors);
}
function n1(a, i) {
  Object.keys(i).forEach((l) => {
    const s = l.split("."),
      u = s.pop(),
      c = [a].concat(s).join("."),
      f = i[l].split("."),
      d = f.pop(),
      g = f.join(".");
    Kt.route(c, u, g, d);
  });
}
function l1(a) {
  return "id" in a && "defaults" in a;
}
class a1 {
  constructor() {
    (this.controllers = new yo(qa, "datasets", !0)),
      (this.elements = new yo(Hi, "elements")),
      (this.plugins = new yo(Object, "plugins")),
      (this.scales = new yo(Al, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...i) {
    this._each("register", i);
  }
  remove(...i) {
    this._each("unregister", i);
  }
  addControllers(...i) {
    this._each("register", i, this.controllers);
  }
  addElements(...i) {
    this._each("register", i, this.elements);
  }
  addPlugins(...i) {
    this._each("register", i, this.plugins);
  }
  addScales(...i) {
    this._each("register", i, this.scales);
  }
  getController(i) {
    return this._get(i, this.controllers, "controller");
  }
  getElement(i) {
    return this._get(i, this.elements, "element");
  }
  getPlugin(i) {
    return this._get(i, this.plugins, "plugin");
  }
  getScale(i) {
    return this._get(i, this.scales, "scale");
  }
  removeControllers(...i) {
    this._each("unregister", i, this.controllers);
  }
  removeElements(...i) {
    this._each("unregister", i, this.elements);
  }
  removePlugins(...i) {
    this._each("unregister", i, this.plugins);
  }
  removeScales(...i) {
    this._each("unregister", i, this.scales);
  }
  _each(i, l, s) {
    [...l].forEach((u) => {
      const c = s || this._getRegistryForType(u);
      s || c.isForType(u) || (c === this.plugins && u.id)
        ? this._exec(i, c, u)
        : At(u, (f) => {
            const d = s || this._getRegistryForType(f);
            this._exec(i, d, f);
          });
    });
  }
  _exec(i, l, s) {
    const u = xr(i);
    kt(s["before" + u], [], s), l[i](s), kt(s["after" + u], [], s);
  }
  _getRegistryForType(i) {
    for (let l = 0; l < this._typedRegistries.length; l++) {
      const s = this._typedRegistries[l];
      if (s.isForType(i)) return s;
    }
    return this.plugins;
  }
  _get(i, l, s) {
    const u = l.get(i);
    if (u === void 0)
      throw new Error('"' + i + '" is not a registered ' + s + ".");
    return u;
  }
}
var ri = new a1();
class s1 {
  constructor() {
    this._init = [];
  }
  notify(i, l, s, u) {
    l === "beforeInit" &&
      ((this._init = this._createDescriptors(i, !0)),
      this._notify(this._init, i, "install"));
    const c = u ? this._descriptors(i).filter(u) : this._descriptors(i),
      f = this._notify(c, i, l, s);
    return (
      l === "afterDestroy" &&
        (this._notify(c, i, "stop"), this._notify(this._init, i, "uninstall")),
      f
    );
  }
  _notify(i, l, s, u) {
    u = u || {};
    for (const c of i) {
      const f = c.plugin,
        d = f[s],
        g = [l, u, c.options];
      if (kt(d, g, f) === !1 && u.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Nt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(i) {
    if (this._cache) return this._cache;
    const l = (this._cache = this._createDescriptors(i));
    return this._notifyStateChanges(i), l;
  }
  _createDescriptors(i, l) {
    const s = i && i.config,
      u = _t(s.options && s.options.plugins, {}),
      c = o1(s);
    return u === !1 && !l ? [] : c1(i, c, u, l);
  }
  _notifyStateChanges(i) {
    const l = this._oldCache || [],
      s = this._cache,
      u = (c, f) =>
        c.filter((d) => !f.some((g) => d.plugin.id === g.plugin.id));
    this._notify(u(l, s), i, "stop"), this._notify(u(s, l), i, "start");
  }
}
function o1(a) {
  const i = {},
    l = [],
    s = Object.keys(ri.plugins.items);
  for (let c = 0; c < s.length; c++) l.push(ri.getPlugin(s[c]));
  const u = a.plugins || [];
  for (let c = 0; c < u.length; c++) {
    const f = u[c];
    l.indexOf(f) === -1 && (l.push(f), (i[f.id] = !0));
  }
  return { plugins: l, localIds: i };
}
function u1(a, i) {
  return !i && a === !1 ? null : a === !0 ? {} : a;
}
function c1(a, { plugins: i, localIds: l }, s, u) {
  const c = [],
    f = a.getContext();
  for (const d of i) {
    const g = d.id,
      m = u1(s[g], u);
    m !== null &&
      c.push({
        plugin: d,
        options: r1(a.config, { plugin: d, local: l[g] }, m, f),
      });
  }
  return c;
}
function r1(a, { plugin: i, local: l }, s, u) {
  const c = a.pluginScopeKeys(i),
    f = a.getOptionScopes(s, c);
  return (
    l && i.defaults && f.push(i.defaults),
    a.createResolver(f, u, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function fr(a, i) {
  const l = Kt.datasets[a] || {};
  return (
    ((i.datasets || {})[a] || {}).indexAxis || i.indexAxis || l.indexAxis || "x"
  );
}
function f1(a, i) {
  let l = a;
  return (
    a === "_index_" ? (l = i) : a === "_value_" && (l = i === "x" ? "y" : "x"),
    l
  );
}
function h1(a, i) {
  return a === i ? "_index_" : "_value_";
}
function fm(a) {
  if (a === "x" || a === "y" || a === "r") return a;
}
function d1(a) {
  if (a === "top" || a === "bottom") return "x";
  if (a === "left" || a === "right") return "y";
}
function hr(a, ...i) {
  if (fm(a)) return a;
  for (const l of i) {
    const s =
      l.axis || d1(l.position) || (a.length > 1 && fm(a[0].toLowerCase()));
    if (s) return s;
  }
  throw new Error(
    `Cannot determine type of '${a}' axis. Please provide 'axis' or 'position' option.`
  );
}
function hm(a, i, l) {
  if (l[i + "AxisID"] === a) return { axis: i };
}
function g1(a, i) {
  if (i.data && i.data.datasets) {
    const l = i.data.datasets.filter((s) => s.xAxisID === a || s.yAxisID === a);
    if (l.length) return hm(a, "x", l[0]) || hm(a, "y", l[0]);
  }
  return {};
}
function m1(a, i) {
  const l = jn[a.type] || { scales: {} },
    s = i.scales || {},
    u = fr(a.type, i),
    c = Object.create(null);
  return (
    Object.keys(s).forEach((f) => {
      const d = s[f];
      if (!Dt(d))
        return console.error(`Invalid scale configuration for scale: ${f}`);
      if (d._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${f}`
        );
      const g = hr(f, d, g1(f, a), Kt.scales[d.type]),
        m = h1(g, u),
        y = l.scales || {};
      c[f] = ka(Object.create(null), [{ axis: g }, d, y[g], y[m]]);
    }),
    a.data.datasets.forEach((f) => {
      const d = f.type || a.type,
        g = f.indexAxis || fr(d, i),
        y = (jn[d] || {}).scales || {};
      Object.keys(y).forEach((v) => {
        const _ = f1(v, g),
          S = f[_ + "AxisID"] || _;
        (c[S] = c[S] || Object.create(null)),
          ka(c[S], [{ axis: _ }, s[S], y[v]]);
      });
    }),
    Object.keys(c).forEach((f) => {
      const d = c[f];
      ka(d, [Kt.scales[d.type], Kt.scale]);
    }),
    c
  );
}
function m0(a) {
  const i = a.options || (a.options = {});
  (i.plugins = _t(i.plugins, {})), (i.scales = m1(a, i));
}
function p0(a) {
  return (
    (a = a || {}),
    (a.datasets = a.datasets || []),
    (a.labels = a.labels || []),
    a
  );
}
function p1(a) {
  return (a = a || {}), (a.data = p0(a.data)), m0(a), a;
}
const dm = new Map(),
  y0 = new Set();
function bo(a, i) {
  let l = dm.get(a);
  return l || ((l = i()), dm.set(a, l), y0.add(l)), l;
}
const Ca = (a, i, l) => {
  const s = Eo(i, l);
  s !== void 0 && a.add(s);
};
class y1 {
  constructor(i) {
    (this._config = p1(i)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(i) {
    this._config.type = i;
  }
  get data() {
    return this._config.data;
  }
  set data(i) {
    this._config.data = p0(i);
  }
  get options() {
    return this._config.options;
  }
  set options(i) {
    this._config.options = i;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const i = this._config;
    this.clearCache(), m0(i);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(i) {
    return bo(i, () => [[`datasets.${i}`, ""]]);
  }
  datasetAnimationScopeKeys(i, l) {
    return bo(`${i}.transition.${l}`, () => [
      [`datasets.${i}.transitions.${l}`, `transitions.${l}`],
      [`datasets.${i}`, ""],
    ]);
  }
  datasetElementScopeKeys(i, l) {
    return bo(`${i}-${l}`, () => [
      [`datasets.${i}.elements.${l}`, `datasets.${i}`, `elements.${l}`, ""],
    ]);
  }
  pluginScopeKeys(i) {
    const l = i.id,
      s = this.type;
    return bo(`${s}-plugin-${l}`, () => [
      [`plugins.${l}`, ...(i.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(i, l) {
    const s = this._scopeCache;
    let u = s.get(i);
    return (!u || l) && ((u = new Map()), s.set(i, u)), u;
  }
  getOptionScopes(i, l, s) {
    const { options: u, type: c } = this,
      f = this._cachedScopes(i, s),
      d = f.get(l);
    if (d) return d;
    const g = new Set();
    l.forEach((y) => {
      i && (g.add(i), y.forEach((v) => Ca(g, i, v))),
        y.forEach((v) => Ca(g, u, v)),
        y.forEach((v) => Ca(g, jn[c] || {}, v)),
        y.forEach((v) => Ca(g, Kt, v)),
        y.forEach((v) => Ca(g, ur, v));
    });
    const m = Array.from(g);
    return (
      m.length === 0 && m.push(Object.create(null)), y0.has(l) && f.set(l, m), m
    );
  }
  chartOptionScopes() {
    const { options: i, type: l } = this;
    return [i, jn[l] || {}, Kt.datasets[l] || {}, { type: l }, Kt, ur];
  }
  resolveNamedOptions(i, l, s, u = [""]) {
    const c = { $shared: !0 },
      { resolver: f, subPrefixes: d } = gm(this._resolverCache, i, u);
    let g = f;
    if (v1(f, l)) {
      (c.$shared = !1), (s = un(s) ? s() : s);
      const m = this.createResolver(i, s, d);
      g = Ol(f, s, m);
    }
    for (const m of l) c[m] = g[m];
    return c;
  }
  createResolver(i, l, s = [""], u) {
    const { resolver: c } = gm(this._resolverCache, i, s);
    return Dt(l) ? Ol(c, l, void 0, u) : c;
  }
}
function gm(a, i, l) {
  let s = a.get(i);
  s || ((s = new Map()), a.set(i, s));
  const u = l.join();
  let c = s.get(u);
  return (
    c ||
      ((c = {
        resolver: Ar(i, l),
        subPrefixes: l.filter((d) => !d.toLowerCase().includes("hover")),
      }),
      s.set(u, c)),
    c
  );
}
const b1 = (a) => Dt(a) && Object.getOwnPropertyNames(a).some((i) => un(a[i]));
function v1(a, i) {
  const { isScriptable: l, isIndexable: s } = t0(a);
  for (const u of i) {
    const c = l(u),
      f = s(u),
      d = (f || c) && a[u];
    if ((c && (un(d) || b1(d))) || (f && le(d))) return !0;
  }
  return !1;
}
var _1 = "4.4.8";
const x1 = ["top", "bottom", "left", "right", "chartArea"];
function mm(a, i) {
  return a === "top" || a === "bottom" || (x1.indexOf(a) === -1 && i === "x");
}
function pm(a, i) {
  return function (l, s) {
    return l[a] === s[a] ? l[i] - s[i] : l[a] - s[a];
  };
}
function ym(a) {
  const i = a.chart,
    l = i.options.animation;
  i.notifyPlugins("afterRender"), kt(l && l.onComplete, [a], i);
}
function S1(a) {
  const i = a.chart,
    l = i.options.animation;
  kt(l && l.onProgress, [a], i);
}
function b0(a) {
  return (
    Cr() && typeof a == "string"
      ? (a = document.getElementById(a))
      : a && a.length && (a = a[0]),
    a && a.canvas && (a = a.canvas),
    a
  );
}
const To = {},
  bm = (a) => {
    const i = b0(a);
    return Object.values(To)
      .filter((l) => l.canvas === i)
      .pop();
  };
function M1(a, i, l) {
  const s = Object.keys(a);
  for (const u of s) {
    const c = +u;
    if (c >= i) {
      const f = a[u];
      delete a[u], (l > 0 || c > i) && (a[c + l] = f);
    }
  }
}
function T1(a, i, l, s) {
  return !l || a.type === "mouseout" ? null : s ? i : a;
}
function vo(a, i, l) {
  return a.options.clip ? a[l] : i[l];
}
function O1(a, i) {
  const { xScale: l, yScale: s } = a;
  return l && s
    ? {
        left: vo(l, i, "left"),
        right: vo(l, i, "right"),
        top: vo(s, i, "top"),
        bottom: vo(s, i, "bottom"),
      }
    : i;
}
var ln;
let No =
  ((ln = class {
    static register(...i) {
      ri.add(...i), vm();
    }
    static unregister(...i) {
      ri.remove(...i), vm();
    }
    constructor(i, l) {
      const s = (this.config = new y1(l)),
        u = b0(i),
        c = bm(u);
      if (c)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            c.id +
            "' must be destroyed before the canvas with ID '" +
            c.canvas.id +
            "' can be reused."
        );
      const f = s.createResolver(s.chartOptionScopes(), this.getContext());
      (this.platform = new (s.platform || q_(u))()),
        this.platform.updateConfig(s);
      const d = this.platform.acquireContext(u, f.aspectRatio),
        g = d && d.canvas,
        m = g && g.height,
        y = g && g.width;
      if (
        ((this.id = zb()),
        (this.ctx = d),
        (this.canvas = g),
        (this.width = y),
        (this.height = m),
        (this._options = f),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new s1()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = Jb((v) => this.update(v), f.resizeDelay || 0)),
        (this._dataChanges = []),
        (To[this.id] = this),
        !d || !g)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Ci.listen(this, "complete", ym),
        Ci.listen(this, "progress", S1),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: i, maintainAspectRatio: l },
        width: s,
        height: u,
        _aspectRatio: c,
      } = this;
      return Nt(i) ? (l && c ? c : u ? s / u : null) : i;
    }
    get data() {
      return this.config.data;
    }
    set data(i) {
      this.config.data = i;
    }
    get options() {
      return this._options;
    }
    set options(i) {
      this.config.options = i;
    }
    get registry() {
      return ri;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : Gg(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return Vg(this.canvas, this.ctx), this;
    }
    stop() {
      return Ci.stop(this), this;
    }
    resize(i, l) {
      Ci.running(this)
        ? (this._resizeBeforeDraw = { width: i, height: l })
        : this._resize(i, l);
    }
    _resize(i, l) {
      const s = this.options,
        u = this.canvas,
        c = s.maintainAspectRatio && this.aspectRatio,
        f = this.platform.getMaximumSize(u, i, l, c),
        d = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
        g = this.width ? "resize" : "attach";
      (this.width = f.width),
        (this.height = f.height),
        (this._aspectRatio = this.aspectRatio),
        Gg(this, d, !0) &&
          (this.notifyPlugins("resize", { size: f }),
          kt(s.onResize, [this, f], this),
          this.attached && this._doResize(g) && this.render());
    }
    ensureScalesHaveIDs() {
      const l = this.options.scales || {};
      At(l, (s, u) => {
        s.id = u;
      });
    }
    buildOrUpdateScales() {
      const i = this.options,
        l = i.scales,
        s = this.scales,
        u = Object.keys(s).reduce((f, d) => ((f[d] = !1), f), {});
      let c = [];
      l &&
        (c = c.concat(
          Object.keys(l).map((f) => {
            const d = l[f],
              g = hr(f, d),
              m = g === "r",
              y = g === "x";
            return {
              options: d,
              dposition: m ? "chartArea" : y ? "bottom" : "left",
              dtype: m ? "radialLinear" : y ? "category" : "linear",
            };
          })
        )),
        At(c, (f) => {
          const d = f.options,
            g = d.id,
            m = hr(g, d),
            y = _t(d.type, f.dtype);
          (d.position === void 0 || mm(d.position, m) !== mm(f.dposition)) &&
            (d.position = f.dposition),
            (u[g] = !0);
          let v = null;
          if (g in s && s[g].type === y) v = s[g];
          else {
            const _ = ri.getScale(y);
            (v = new _({ id: g, type: y, ctx: this.ctx, chart: this })),
              (s[v.id] = v);
          }
          v.init(d, i);
        }),
        At(u, (f, d) => {
          f || delete s[d];
        }),
        At(s, (f) => {
          Ze.configure(this, f, f.options), Ze.addBox(this, f);
        });
    }
    _updateMetasets() {
      const i = this._metasets,
        l = this.data.datasets.length,
        s = i.length;
      if ((i.sort((u, c) => u.index - c.index), s > l)) {
        for (let u = l; u < s; ++u) this._destroyDatasetMeta(u);
        i.splice(l, s - l);
      }
      this._sortedMetasets = i.slice(0).sort(pm("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: i,
        data: { datasets: l },
      } = this;
      i.length > l.length && delete this._stacks,
        i.forEach((s, u) => {
          l.filter((c) => c === s._dataset).length === 0 &&
            this._destroyDatasetMeta(u);
        });
    }
    buildOrUpdateControllers() {
      const i = [],
        l = this.data.datasets;
      let s, u;
      for (
        this._removeUnreferencedMetasets(), s = 0, u = l.length;
        s < u;
        s++
      ) {
        const c = l[s];
        let f = this.getDatasetMeta(s);
        const d = c.type || this.config.type;
        if (
          (f.type &&
            f.type !== d &&
            (this._destroyDatasetMeta(s), (f = this.getDatasetMeta(s))),
          (f.type = d),
          (f.indexAxis = c.indexAxis || fr(d, this.options)),
          (f.order = c.order || 0),
          (f.index = s),
          (f.label = "" + c.label),
          (f.visible = this.isDatasetVisible(s)),
          f.controller)
        )
          f.controller.updateIndex(s), f.controller.linkScales();
        else {
          const g = ri.getController(d),
            { datasetElementType: m, dataElementType: y } = Kt.datasets[d];
          Object.assign(g, {
            dataElementType: ri.getElement(y),
            datasetElementType: m && ri.getElement(m),
          }),
            (f.controller = new g(this, s)),
            i.push(f.controller);
        }
      }
      return this._updateMetasets(), i;
    }
    _resetElements() {
      At(
        this.data.datasets,
        (i, l) => {
          this.getDatasetMeta(l).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(i) {
      const l = this.config;
      l.update();
      const s = (this._options = l.createResolver(
          l.chartOptionScopes(),
          this.getContext()
        )),
        u = (this._animationsDisabled = !s.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: i, cancelable: !0 }) === !1)
      )
        return;
      const c = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let f = 0;
      for (let m = 0, y = this.data.datasets.length; m < y; m++) {
        const { controller: v } = this.getDatasetMeta(m),
          _ = !u && c.indexOf(v) === -1;
        v.buildOrUpdateElements(_), (f = Math.max(+v.getMaxOverflow(), f));
      }
      (f = this._minPadding = s.layout.autoPadding ? f : 0),
        this._updateLayout(f),
        u ||
          At(c, (m) => {
            m.reset();
          }),
        this._updateDatasets(i),
        this.notifyPlugins("afterUpdate", { mode: i }),
        this._layers.sort(pm("z", "_idx"));
      const { _active: d, _lastEvent: g } = this;
      g
        ? this._eventHandler(g, !0)
        : d.length && this._updateHoverStyles(d, d, !0),
        this.render();
    }
    _updateScales() {
      At(this.scales, (i) => {
        Ze.removeBox(this, i);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const i = this.options,
        l = new Set(Object.keys(this._listeners)),
        s = new Set(i.events);
      (!Rg(l, s) || !!this._responsiveListeners !== i.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: i } = this,
        l = this._getUniformDataChanges() || [];
      for (const { method: s, start: u, count: c } of l) {
        const f = s === "_removeElements" ? -c : c;
        M1(i, u, f);
      }
    }
    _getUniformDataChanges() {
      const i = this._dataChanges;
      if (!i || !i.length) return;
      this._dataChanges = [];
      const l = this.data.datasets.length,
        s = (c) =>
          new Set(
            i
              .filter((f) => f[0] === c)
              .map((f, d) => d + "," + f.splice(1).join(","))
          ),
        u = s(0);
      for (let c = 1; c < l; c++) if (!Rg(u, s(c))) return;
      return Array.from(u)
        .map((c) => c.split(","))
        .map((c) => ({ method: c[1], start: +c[2], count: +c[3] }));
    }
    _updateLayout(i) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      Ze.update(this, this.width, this.height, i);
      const l = this.chartArea,
        s = l.width <= 0 || l.height <= 0;
      (this._layers = []),
        At(
          this.boxes,
          (u) => {
            (s && u.position === "chartArea") ||
              (u.configure && u.configure(), this._layers.push(...u._layers()));
          },
          this
        ),
        this._layers.forEach((u, c) => {
          u._idx = c;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(i) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: i,
          cancelable: !0,
        }) !== !1
      ) {
        for (let l = 0, s = this.data.datasets.length; l < s; ++l)
          this.getDatasetMeta(l).controller.configure();
        for (let l = 0, s = this.data.datasets.length; l < s; ++l)
          this._updateDataset(l, un(i) ? i({ datasetIndex: l }) : i);
        this.notifyPlugins("afterDatasetsUpdate", { mode: i });
      }
    }
    _updateDataset(i, l) {
      const s = this.getDatasetMeta(i),
        u = { meta: s, index: i, mode: l, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", u) !== !1 &&
        (s.controller._update(l),
        (u.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", u));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Ci.has(this)
          ? this.attached && !Ci.running(this) && Ci.start(this)
          : (this.draw(), ym({ chart: this })));
    }
    draw() {
      let i;
      if (this._resizeBeforeDraw) {
        const { width: s, height: u } = this._resizeBeforeDraw;
        (this._resizeBeforeDraw = null), this._resize(s, u);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const l = this._layers;
      for (i = 0; i < l.length && l[i].z <= 0; ++i) l[i].draw(this.chartArea);
      for (this._drawDatasets(); i < l.length; ++i) l[i].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(i) {
      const l = this._sortedMetasets,
        s = [];
      let u, c;
      for (u = 0, c = l.length; u < c; ++u) {
        const f = l[u];
        (!i || f.visible) && s.push(f);
      }
      return s;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const i = this.getSortedVisibleDatasetMetas();
      for (let l = i.length - 1; l >= 0; --l) this._drawDataset(i[l]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(i) {
      const l = this.ctx,
        s = i._clip,
        u = !s.disabled,
        c = O1(i, this.chartArea),
        f = { meta: i, index: i.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", f) !== !1 &&
        (u &&
          Or(l, {
            left: s.left === !1 ? 0 : c.left - s.left,
            right: s.right === !1 ? this.width : c.right + s.right,
            top: s.top === !1 ? 0 : c.top - s.top,
            bottom: s.bottom === !1 ? this.height : c.bottom + s.bottom,
          }),
        i.controller.draw(),
        u && Dr(l),
        (f.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", f));
    }
    isPointInArea(i) {
      return Za(i, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(i, l, s, u) {
      const c = x_.modes[l];
      return typeof c == "function" ? c(this, i, s, u) : [];
    }
    getDatasetMeta(i) {
      const l = this.data.datasets[i],
        s = this._metasets;
      let u = s.filter((c) => c && c._dataset === l).pop();
      return (
        u ||
          ((u = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (l && l.order) || 0,
            index: i,
            _dataset: l,
            _parsed: [],
            _sorted: !1,
          }),
          s.push(u)),
        u
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Yn(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(i) {
      const l = this.data.datasets[i];
      if (!l) return !1;
      const s = this.getDatasetMeta(i);
      return typeof s.hidden == "boolean" ? !s.hidden : !l.hidden;
    }
    setDatasetVisibility(i, l) {
      const s = this.getDatasetMeta(i);
      s.hidden = !l;
    }
    toggleDataVisibility(i) {
      this._hiddenIndices[i] = !this._hiddenIndices[i];
    }
    getDataVisibility(i) {
      return !this._hiddenIndices[i];
    }
    _updateVisibility(i, l, s) {
      const u = s ? "show" : "hide",
        c = this.getDatasetMeta(i),
        f = c.controller._resolveAnimations(void 0, u);
      zo(l)
        ? ((c.data[l].hidden = !s), this.update())
        : (this.setDatasetVisibility(i, s),
          f.update(c, { visible: s }),
          this.update((d) => (d.datasetIndex === i ? u : void 0)));
    }
    hide(i, l) {
      this._updateVisibility(i, l, !1);
    }
    show(i, l) {
      this._updateVisibility(i, l, !0);
    }
    _destroyDatasetMeta(i) {
      const l = this._metasets[i];
      l && l.controller && l.controller._destroy(), delete this._metasets[i];
    }
    _stop() {
      let i, l;
      for (
        this.stop(), Ci.remove(this), i = 0, l = this.data.datasets.length;
        i < l;
        ++i
      )
        this._destroyDatasetMeta(i);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: i, ctx: l } = this;
      this._stop(),
        this.config.clearCache(),
        i &&
          (this.unbindEvents(),
          Vg(i, l),
          this.platform.releaseContext(l),
          (this.canvas = null),
          (this.ctx = null)),
        delete To[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...i) {
      return this.canvas.toDataURL(...i);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const i = this._listeners,
        l = this.platform,
        s = (c, f) => {
          l.addEventListener(this, c, f), (i[c] = f);
        },
        u = (c, f, d) => {
          (c.offsetX = f), (c.offsetY = d), this._eventHandler(c);
        };
      At(this.options.events, (c) => s(c, u));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const i = this._responsiveListeners,
        l = this.platform,
        s = (g, m) => {
          l.addEventListener(this, g, m), (i[g] = m);
        },
        u = (g, m) => {
          i[g] && (l.removeEventListener(this, g, m), delete i[g]);
        },
        c = (g, m) => {
          this.canvas && this.resize(g, m);
        };
      let f;
      const d = () => {
        u("attach", d),
          (this.attached = !0),
          this.resize(),
          s("resize", c),
          s("detach", f);
      };
      (f = () => {
        (this.attached = !1),
          u("resize", c),
          this._stop(),
          this._resize(0, 0),
          s("attach", d);
      }),
        l.isAttached(this.canvas) ? d() : f();
    }
    unbindEvents() {
      At(this._listeners, (i, l) => {
        this.platform.removeEventListener(this, l, i);
      }),
        (this._listeners = {}),
        At(this._responsiveListeners, (i, l) => {
          this.platform.removeEventListener(this, l, i);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(i, l, s) {
      const u = s ? "set" : "remove";
      let c, f, d, g;
      for (
        l === "dataset" &&
          ((c = this.getDatasetMeta(i[0].datasetIndex)),
          c.controller["_" + u + "DatasetHoverStyle"]()),
          d = 0,
          g = i.length;
        d < g;
        ++d
      ) {
        f = i[d];
        const m = f && this.getDatasetMeta(f.datasetIndex).controller;
        m && m[u + "HoverStyle"](f.element, f.datasetIndex, f.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(i) {
      const l = this._active || [],
        s = i.map(({ datasetIndex: c, index: f }) => {
          const d = this.getDatasetMeta(c);
          if (!d) throw new Error("No dataset found at index " + c);
          return { datasetIndex: c, element: d.data[f], index: f };
        });
      !Do(s, l) &&
        ((this._active = s),
        (this._lastEvent = null),
        this._updateHoverStyles(s, l));
    }
    notifyPlugins(i, l, s) {
      return this._plugins.notify(this, i, l, s);
    }
    isPluginEnabled(i) {
      return this._plugins._cache.filter((l) => l.plugin.id === i).length === 1;
    }
    _updateHoverStyles(i, l, s) {
      const u = this.options.hover,
        c = (g, m) =>
          g.filter(
            (y) =>
              !m.some(
                (v) => y.datasetIndex === v.datasetIndex && y.index === v.index
              )
          ),
        f = c(l, i),
        d = s ? i : c(i, l);
      f.length && this.updateHoverStyle(f, u.mode, !1),
        d.length && u.mode && this.updateHoverStyle(d, u.mode, !0);
    }
    _eventHandler(i, l) {
      const s = {
          event: i,
          replay: l,
          cancelable: !0,
          inChartArea: this.isPointInArea(i),
        },
        u = (f) =>
          (f.options.events || this.options.events).includes(i.native.type);
      if (this.notifyPlugins("beforeEvent", s, u) === !1) return;
      const c = this._handleEvent(i, l, s.inChartArea);
      return (
        (s.cancelable = !1),
        this.notifyPlugins("afterEvent", s, u),
        (c || s.changed) && this.render(),
        this
      );
    }
    _handleEvent(i, l, s) {
      const { _active: u = [], options: c } = this,
        f = l,
        d = this._getActiveElements(i, u, s, f),
        g = Lb(i),
        m = T1(i, this._lastEvent, s, g);
      s &&
        ((this._lastEvent = null),
        kt(c.onHover, [i, d, this], this),
        g && kt(c.onClick, [i, d, this], this));
      const y = !Do(d, u);
      return (
        (y || l) && ((this._active = d), this._updateHoverStyles(d, u, l)),
        (this._lastEvent = m),
        y
      );
    }
    _getActiveElements(i, l, s, u) {
      if (i.type === "mouseout") return [];
      if (!s) return l;
      const c = this.options.hover;
      return this.getElementsAtEventForMode(i, c.mode, c, u);
    }
  }),
  ht(ln, "defaults", Kt),
  ht(ln, "instances", To),
  ht(ln, "overrides", jn),
  ht(ln, "registry", ri),
  ht(ln, "version", _1),
  ht(ln, "getChart", bm),
  ln);
function vm() {
  return At(No.instances, (a) => a._plugins.invalidate());
}
function v0(a, i, l = i) {
  (a.lineCap = _t(l.borderCapStyle, i.borderCapStyle)),
    a.setLineDash(_t(l.borderDash, i.borderDash)),
    (a.lineDashOffset = _t(l.borderDashOffset, i.borderDashOffset)),
    (a.lineJoin = _t(l.borderJoinStyle, i.borderJoinStyle)),
    (a.lineWidth = _t(l.borderWidth, i.borderWidth)),
    (a.strokeStyle = _t(l.borderColor, i.borderColor));
}
function D1(a, i, l) {
  a.lineTo(l.x, l.y);
}
function A1(a) {
  return a.stepped
    ? rv
    : a.tension || a.cubicInterpolationMode === "monotone"
    ? fv
    : D1;
}
function _0(a, i, l = {}) {
  const s = a.length,
    { start: u = 0, end: c = s - 1 } = l,
    { start: f, end: d } = i,
    g = Math.max(u, f),
    m = Math.min(c, d),
    y = (u < f && c < f) || (u > d && c > d);
  return {
    count: s,
    start: g,
    loop: i.loop,
    ilen: m < g && !y ? s + m - g : m - g,
  };
}
function E1(a, i, l, s) {
  const { points: u, options: c } = i,
    { count: f, start: d, loop: g, ilen: m } = _0(u, l, s),
    y = A1(c);
  let { move: v = !0, reverse: _ } = s || {},
    S,
    D,
    A;
  for (S = 0; S <= m; ++S)
    (D = u[(d + (_ ? m - S : S)) % f]),
      !D.skip &&
        (v ? (a.moveTo(D.x, D.y), (v = !1)) : y(a, A, D, _, c.stepped),
        (A = D));
  return g && ((D = u[(d + (_ ? m : 0)) % f]), y(a, A, D, _, c.stepped)), !!g;
}
function z1(a, i, l, s) {
  const u = i.points,
    { count: c, start: f, ilen: d } = _0(u, l, s),
    { move: g = !0, reverse: m } = s || {};
  let y = 0,
    v = 0,
    _,
    S,
    D,
    A,
    E,
    B;
  const V = (K) => (f + (m ? d - K : K)) % c,
    Q = () => {
      A !== E && (a.lineTo(y, E), a.lineTo(y, A), a.lineTo(y, B));
    };
  for (g && ((S = u[V(0)]), a.moveTo(S.x, S.y)), _ = 0; _ <= d; ++_) {
    if (((S = u[V(_)]), S.skip)) continue;
    const K = S.x,
      L = S.y,
      Z = K | 0;
    Z === D
      ? (L < A ? (A = L) : L > E && (E = L), (y = (v * y + K) / ++v))
      : (Q(), a.lineTo(K, L), (D = Z), (v = 0), (A = E = L)),
      (B = L);
  }
  Q();
}
function dr(a) {
  const i = a.options,
    l = i.borderDash && i.borderDash.length;
  return !a._decimated &&
    !a._loop &&
    !i.tension &&
    i.cubicInterpolationMode !== "monotone" &&
    !i.stepped &&
    !l
    ? z1
    : E1;
}
function C1(a) {
  return a.stepped
    ? Gv
    : a.tension || a.cubicInterpolationMode === "monotone"
    ? Qv
    : Ln;
}
function R1(a, i, l, s) {
  let u = i._path;
  u || ((u = i._path = new Path2D()), i.path(u, l, s) && u.closePath()),
    v0(a, i.options),
    a.stroke(u);
}
function w1(a, i, l, s) {
  const { segments: u, options: c } = i,
    f = dr(i);
  for (const d of u)
    v0(a, c, d.style),
      a.beginPath(),
      f(a, i, d, { start: l, end: l + s - 1 }) && a.closePath(),
      a.stroke();
}
const H1 = typeof Path2D == "function";
function B1(a, i, l, s) {
  H1 && !i.options.segment ? R1(a, i, l, s) : w1(a, i, l, s);
}
class La extends Hi {
  constructor(i) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      i && Object.assign(this, i);
  }
  updateControlPoints(i, l) {
    const s = this.options;
    if (
      (s.tension || s.cubicInterpolationMode === "monotone") &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const u = s.spanGaps ? this._loop : this._fullLoop;
      Nv(this._points, s, i, u, l), (this._pointsUpdated = !0);
    }
  }
  set points(i) {
    (this._points = i),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Iv(this, this.options.segment));
  }
  first() {
    const i = this.segments,
      l = this.points;
    return i.length && l[i[0].start];
  }
  last() {
    const i = this.segments,
      l = this.points,
      s = i.length;
    return s && l[i[s - 1].end];
  }
  interpolate(i, l) {
    const s = this.options,
      u = i[l],
      c = this.points,
      f = Jv(this, { property: l, start: u, end: u });
    if (!f.length) return;
    const d = [],
      g = C1(s);
    let m, y;
    for (m = 0, y = f.length; m < y; ++m) {
      const { start: v, end: _ } = f[m],
        S = c[v],
        D = c[_];
      if (S === D) {
        d.push(S);
        continue;
      }
      const A = Math.abs((u - S[l]) / (D[l] - S[l])),
        E = g(S, D, A, s.stepped);
      (E[l] = i[l]), d.push(E);
    }
    return d.length === 1 ? d[0] : d;
  }
  pathSegment(i, l, s) {
    return dr(this)(i, this, l, s);
  }
  path(i, l, s) {
    const u = this.segments,
      c = dr(this);
    let f = this._loop;
    (l = l || 0), (s = s || this.points.length - l);
    for (const d of u) f &= c(i, this, d, { start: l, end: l + s - 1 });
    return !!f;
  }
  draw(i, l, s, u) {
    const c = this.options || {};
    (this.points || []).length &&
      c.borderWidth &&
      (i.save(), B1(i, this, s, u), i.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
ht(La, "id", "line"),
  ht(La, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  ht(La, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  ht(La, "descriptors", {
    _scriptable: !0,
    _indexable: (i) => i !== "borderDash" && i !== "fill",
  });
function _m(a, i, l, s) {
  const u = a.options,
    { [l]: c } = a.getProps([l], s);
  return Math.abs(i - c) < u.radius + u.hitRadius;
}
class Oo extends Hi {
  constructor(l) {
    super();
    ht(this, "parsed");
    ht(this, "skip");
    ht(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      l && Object.assign(this, l);
  }
  inRange(l, s, u) {
    const c = this.options,
      { x: f, y: d } = this.getProps(["x", "y"], u);
    return (
      Math.pow(l - f, 2) + Math.pow(s - d, 2) <
      Math.pow(c.hitRadius + c.radius, 2)
    );
  }
  inXRange(l, s) {
    return _m(this, l, "x", s);
  }
  inYRange(l, s) {
    return _m(this, l, "y", s);
  }
  getCenterPoint(l) {
    const { x: s, y: u } = this.getProps(["x", "y"], l);
    return { x: s, y: u };
  }
  size(l) {
    l = l || this.options || {};
    let s = l.radius || 0;
    s = Math.max(s, (s && l.hoverRadius) || 0);
    const u = (s && l.borderWidth) || 0;
    return (s + u) * 2;
  }
  draw(l, s) {
    const u = this.options;
    this.skip ||
      u.radius < 0.1 ||
      !Za(this, s, this.size(u) / 2) ||
      ((l.strokeStyle = u.borderColor),
      (l.lineWidth = u.borderWidth),
      (l.fillStyle = u.backgroundColor),
      cr(l, u, this.x, this.y));
  }
  getRange() {
    const l = this.options || {};
    return l.radius + l.hitRadius;
  }
}
ht(Oo, "id", "point"),
  ht(Oo, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  ht(Oo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const xm = (a, i) => {
    let { boxHeight: l = i, boxWidth: s = i } = a;
    return (
      a.usePointStyle &&
        ((l = Math.min(l, i)), (s = a.pointStyleWidth || Math.min(s, i))),
      { boxWidth: s, boxHeight: l, itemHeight: Math.max(i, l) }
    );
  },
  L1 = (a, i) =>
    a !== null &&
    i !== null &&
    a.datasetIndex === i.datasetIndex &&
    a.index === i.index;
class Sm extends Hi {
  constructor(i) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = i.chart),
      (this.options = i.options),
      (this.ctx = i.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(i, l, s) {
    (this.maxWidth = i),
      (this.maxHeight = l),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const i = this.options.labels || {};
    let l = kt(i.generateLabels, [this.chart], this) || [];
    i.filter && (l = l.filter((s) => i.filter(s, this.chart.data))),
      i.sort && (l = l.sort((s, u) => i.sort(s, u, this.chart.data))),
      this.options.reverse && l.reverse(),
      (this.legendItems = l);
  }
  fit() {
    const { options: i, ctx: l } = this;
    if (!i.display) {
      this.width = this.height = 0;
      return;
    }
    const s = i.labels,
      u = ge(s.font),
      c = u.size,
      f = this._computeTitleHeight(),
      { boxWidth: d, itemHeight: g } = xm(s, c);
    let m, y;
    (l.font = u.string),
      this.isHorizontal()
        ? ((m = this.maxWidth), (y = this._fitRows(f, c, d, g) + 10))
        : ((y = this.maxHeight), (m = this._fitCols(f, u, d, g) + 10)),
      (this.width = Math.min(m, i.maxWidth || this.maxWidth)),
      (this.height = Math.min(y, i.maxHeight || this.maxHeight));
  }
  _fitRows(i, l, s, u) {
    const {
        ctx: c,
        maxWidth: f,
        options: {
          labels: { padding: d },
        },
      } = this,
      g = (this.legendHitBoxes = []),
      m = (this.lineWidths = [0]),
      y = u + d;
    let v = i;
    (c.textAlign = "left"), (c.textBaseline = "middle");
    let _ = -1,
      S = -y;
    return (
      this.legendItems.forEach((D, A) => {
        const E = s + l / 2 + c.measureText(D.text).width;
        (A === 0 || m[m.length - 1] + E + 2 * d > f) &&
          ((v += y), (m[m.length - (A > 0 ? 0 : 1)] = 0), (S += y), _++),
          (g[A] = { left: 0, top: S, row: _, width: E, height: u }),
          (m[m.length - 1] += E + d);
      }),
      v
    );
  }
  _fitCols(i, l, s, u) {
    const {
        ctx: c,
        maxHeight: f,
        options: {
          labels: { padding: d },
        },
      } = this,
      g = (this.legendHitBoxes = []),
      m = (this.columnSizes = []),
      y = f - i;
    let v = d,
      _ = 0,
      S = 0,
      D = 0,
      A = 0;
    return (
      this.legendItems.forEach((E, B) => {
        const { itemWidth: V, itemHeight: Q } = N1(s, l, c, E, u);
        B > 0 &&
          S + Q + 2 * d > y &&
          ((v += _ + d),
          m.push({ width: _, height: S }),
          (D += _ + d),
          A++,
          (_ = S = 0)),
          (g[B] = { left: D, top: S, col: A, width: V, height: Q }),
          (_ = Math.max(_, V)),
          (S += Q + d);
      }),
      (v += _),
      m.push({ width: _, height: S }),
      v
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const i = this._computeTitleHeight(),
      {
        legendHitBoxes: l,
        options: {
          align: s,
          labels: { padding: u },
          rtl: c,
        },
      } = this,
      f = Ml(c, this.left, this.width);
    if (this.isHorizontal()) {
      let d = 0,
        g = de(s, this.left + u, this.right - this.lineWidths[d]);
      for (const m of l)
        d !== m.row &&
          ((d = m.row),
          (g = de(s, this.left + u, this.right - this.lineWidths[d]))),
          (m.top += this.top + i + u),
          (m.left = f.leftForLtr(f.x(g), m.width)),
          (g += m.width + u);
    } else {
      let d = 0,
        g = de(s, this.top + i + u, this.bottom - this.columnSizes[d].height);
      for (const m of l)
        m.col !== d &&
          ((d = m.col),
          (g = de(
            s,
            this.top + i + u,
            this.bottom - this.columnSizes[d].height
          ))),
          (m.top = g),
          (m.left += this.left + u),
          (m.left = f.leftForLtr(f.x(m.left), m.width)),
          (g += m.height + u);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const i = this.ctx;
      Or(i, this), this._draw(), Dr(i);
    }
  }
  _draw() {
    const { options: i, columnSizes: l, lineWidths: s, ctx: u } = this,
      { align: c, labels: f } = i,
      d = Kt.color,
      g = Ml(i.rtl, this.left, this.width),
      m = ge(f.font),
      { padding: y } = f,
      v = m.size,
      _ = v / 2;
    let S;
    this.drawTitle(),
      (u.textAlign = g.textAlign("left")),
      (u.textBaseline = "middle"),
      (u.lineWidth = 0.5),
      (u.font = m.string);
    const { boxWidth: D, boxHeight: A, itemHeight: E } = xm(f, v),
      B = function (Z, F, X) {
        if (isNaN(D) || D <= 0 || isNaN(A) || A < 0) return;
        u.save();
        const Y = _t(X.lineWidth, 1);
        if (
          ((u.fillStyle = _t(X.fillStyle, d)),
          (u.lineCap = _t(X.lineCap, "butt")),
          (u.lineDashOffset = _t(X.lineDashOffset, 0)),
          (u.lineJoin = _t(X.lineJoin, "miter")),
          (u.lineWidth = Y),
          (u.strokeStyle = _t(X.strokeStyle, d)),
          u.setLineDash(_t(X.lineDash, [])),
          f.usePointStyle)
        ) {
          const W = {
              radius: (A * Math.SQRT2) / 2,
              pointStyle: X.pointStyle,
              rotation: X.rotation,
              borderWidth: Y,
            },
            nt = g.xPlus(Z, D / 2),
            ot = F + _;
          Pm(u, W, nt, ot, f.pointStyleWidth && D);
        } else {
          const W = F + Math.max((v - A) / 2, 0),
            nt = g.leftForLtr(Z, D),
            ot = Va(X.borderRadius);
          u.beginPath(),
            Object.values(ot).some((Et) => Et !== 0)
              ? rr(u, { x: nt, y: W, w: D, h: A, radius: ot })
              : u.rect(nt, W, D, A),
            u.fill(),
            Y !== 0 && u.stroke();
        }
        u.restore();
      },
      V = function (Z, F, X) {
        Ka(u, X.text, Z, F + E / 2, m, {
          strikethrough: X.hidden,
          textAlign: g.textAlign(X.textAlign),
        });
      },
      Q = this.isHorizontal(),
      K = this._computeTitleHeight();
    Q
      ? (S = {
          x: de(c, this.left + y, this.right - s[0]),
          y: this.top + y + K,
          line: 0,
        })
      : (S = {
          x: this.left + y,
          y: de(c, this.top + K + y, this.bottom - l[0].height),
          line: 0,
        }),
      a0(this.ctx, i.textDirection);
    const L = E + y;
    this.legendItems.forEach((Z, F) => {
      (u.strokeStyle = Z.fontColor), (u.fillStyle = Z.fontColor);
      const X = u.measureText(Z.text).width,
        Y = g.textAlign(Z.textAlign || (Z.textAlign = f.textAlign)),
        W = D + _ + X;
      let nt = S.x,
        ot = S.y;
      g.setWidth(this.width),
        Q
          ? F > 0 &&
            nt + W + y > this.right &&
            ((ot = S.y += L),
            S.line++,
            (nt = S.x = de(c, this.left + y, this.right - s[S.line])))
          : F > 0 &&
            ot + L > this.bottom &&
            ((nt = S.x = nt + l[S.line].width + y),
            S.line++,
            (ot = S.y =
              de(c, this.top + K + y, this.bottom - l[S.line].height)));
      const Et = g.x(nt);
      if (
        (B(Et, ot, Z),
        (nt = $b(Y, nt + D + _, Q ? nt + W : this.right, i.rtl)),
        V(g.x(nt), ot, Z),
        Q)
      )
        S.x += W + y;
      else if (typeof Z.text != "string") {
        const Ht = m.lineHeight;
        S.y += x0(Z, Ht) + y;
      } else S.y += L;
    }),
      s0(this.ctx, i.textDirection);
  }
  drawTitle() {
    const i = this.options,
      l = i.title,
      s = ge(l.font),
      u = Fe(l.padding);
    if (!l.display) return;
    const c = Ml(i.rtl, this.left, this.width),
      f = this.ctx,
      d = l.position,
      g = s.size / 2,
      m = u.top + g;
    let y,
      v = this.left,
      _ = this.width;
    if (this.isHorizontal())
      (_ = Math.max(...this.lineWidths)),
        (y = this.top + m),
        (v = de(i.align, v, this.right - _));
    else {
      const D = this.columnSizes.reduce((A, E) => Math.max(A, E.height), 0);
      y =
        m +
        de(
          i.align,
          this.top,
          this.bottom - D - i.labels.padding - this._computeTitleHeight()
        );
    }
    const S = de(d, v, v + _);
    (f.textAlign = c.textAlign(Mr(d))),
      (f.textBaseline = "middle"),
      (f.strokeStyle = l.color),
      (f.fillStyle = l.color),
      (f.font = s.string),
      Ka(f, l.text, S, y, s);
  }
  _computeTitleHeight() {
    const i = this.options.title,
      l = ge(i.font),
      s = Fe(i.padding);
    return i.display ? l.lineHeight + s.height : 0;
  }
  _getLegendItemAt(i, l) {
    let s, u, c;
    if (Ha(i, this.left, this.right) && Ha(l, this.top, this.bottom)) {
      for (c = this.legendHitBoxes, s = 0; s < c.length; ++s)
        if (
          ((u = c[s]),
          Ha(i, u.left, u.left + u.width) && Ha(l, u.top, u.top + u.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(i) {
    const l = this.options;
    if (!j1(i.type, l)) return;
    const s = this._getLegendItemAt(i.x, i.y);
    if (i.type === "mousemove" || i.type === "mouseout") {
      const u = this._hoveredItem,
        c = L1(u, s);
      u && !c && kt(l.onLeave, [i, u, this], this),
        (this._hoveredItem = s),
        s && !c && kt(l.onHover, [i, s, this], this);
    } else s && kt(l.onClick, [i, s, this], this);
  }
}
function N1(a, i, l, s, u) {
  const c = k1(s, a, i, l),
    f = U1(u, s, i.lineHeight);
  return { itemWidth: c, itemHeight: f };
}
function k1(a, i, l, s) {
  let u = a.text;
  return (
    u &&
      typeof u != "string" &&
      (u = u.reduce((c, f) => (c.length > f.length ? c : f))),
    i + l.size / 2 + s.measureText(u).width
  );
}
function U1(a, i, l) {
  let s = a;
  return typeof i.text != "string" && (s = x0(i, l)), s;
}
function x0(a, i) {
  const l = a.text ? a.text.length : 0;
  return i * l;
}
function j1(a, i) {
  return !!(
    ((a === "mousemove" || a === "mouseout") && (i.onHover || i.onLeave)) ||
    (i.onClick && (a === "click" || a === "mouseup"))
  );
}
var Y1 = {
  id: "legend",
  _element: Sm,
  start(a, i, l) {
    const s = (a.legend = new Sm({ ctx: a.ctx, options: l, chart: a }));
    Ze.configure(a, s, l), Ze.addBox(a, s);
  },
  stop(a) {
    Ze.removeBox(a, a.legend), delete a.legend;
  },
  beforeUpdate(a, i, l) {
    const s = a.legend;
    Ze.configure(a, s, l), (s.options = l);
  },
  afterUpdate(a) {
    const i = a.legend;
    i.buildLabels(), i.adjustHitBoxes();
  },
  afterEvent(a, i) {
    i.replay || a.legend.handleEvent(i.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(a, i, l) {
      const s = i.datasetIndex,
        u = l.chart;
      u.isDatasetVisible(s)
        ? (u.hide(s), (i.hidden = !0))
        : (u.show(s), (i.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (a) => a.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(a) {
        const i = a.data.datasets,
          {
            labels: {
              usePointStyle: l,
              pointStyle: s,
              textAlign: u,
              color: c,
              useBorderRadius: f,
              borderRadius: d,
            },
          } = a.legend.options;
        return a._getSortedDatasetMetas().map((g) => {
          const m = g.controller.getStyle(l ? 0 : void 0),
            y = Fe(m.borderWidth);
          return {
            text: i[g.index].label,
            fillStyle: m.backgroundColor,
            fontColor: c,
            hidden: !g.visible,
            lineCap: m.borderCapStyle,
            lineDash: m.borderDash,
            lineDashOffset: m.borderDashOffset,
            lineJoin: m.borderJoinStyle,
            lineWidth: (y.width + y.height) / 4,
            strokeStyle: m.borderColor,
            pointStyle: s || m.pointStyle,
            rotation: m.rotation,
            textAlign: u || m.textAlign,
            borderRadius: f && (d || m.borderRadius),
            datasetIndex: g.index,
          };
        }, this);
      },
    },
    title: {
      color: (a) => a.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (a) => !a.startsWith("on"),
    labels: {
      _scriptable: (a) => !["generateLabels", "filter", "sort"].includes(a),
    },
  },
};
class S0 extends Hi {
  constructor(i) {
    super(),
      (this.chart = i.chart),
      (this.options = i.options),
      (this.ctx = i.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(i, l) {
    const s = this.options;
    if (((this.left = 0), (this.top = 0), !s.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = i), (this.height = this.bottom = l);
    const u = le(s.text) ? s.text.length : 1;
    this._padding = Fe(s.padding);
    const c = u * ge(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = c) : (this.width = c);
  }
  isHorizontal() {
    const i = this.options.position;
    return i === "top" || i === "bottom";
  }
  _drawArgs(i) {
    const { top: l, left: s, bottom: u, right: c, options: f } = this,
      d = f.align;
    let g = 0,
      m,
      y,
      v;
    return (
      this.isHorizontal()
        ? ((y = de(d, s, c)), (v = l + i), (m = c - s))
        : (f.position === "left"
            ? ((y = s + i), (v = de(d, u, l)), (g = ae * -0.5))
            : ((y = c - i), (v = de(d, l, u)), (g = ae * 0.5)),
          (m = u - l)),
      { titleX: y, titleY: v, maxWidth: m, rotation: g }
    );
  }
  draw() {
    const i = this.ctx,
      l = this.options;
    if (!l.display) return;
    const s = ge(l.font),
      c = s.lineHeight / 2 + this._padding.top,
      { titleX: f, titleY: d, maxWidth: g, rotation: m } = this._drawArgs(c);
    Ka(i, l.text, 0, 0, s, {
      color: l.color,
      maxWidth: g,
      rotation: m,
      textAlign: Mr(l.align),
      textBaseline: "middle",
      translation: [f, d],
    });
  }
}
function V1(a, i) {
  const l = new S0({ ctx: a.ctx, options: i, chart: a });
  Ze.configure(a, l, i), Ze.addBox(a, l), (a.titleBlock = l);
}
var q1 = {
  id: "title",
  _element: S0,
  start(a, i, l) {
    V1(a, l);
  },
  stop(a) {
    const i = a.titleBlock;
    Ze.removeBox(a, i), delete a.titleBlock;
  },
  beforeUpdate(a, i, l) {
    const s = a.titleBlock;
    Ze.configure(a, s, l), (s.options = l);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Na = {
  average(a) {
    if (!a.length) return !1;
    let i,
      l,
      s = new Set(),
      u = 0,
      c = 0;
    for (i = 0, l = a.length; i < l; ++i) {
      const d = a[i].element;
      if (d && d.hasValue()) {
        const g = d.tooltipPosition();
        s.add(g.x), (u += g.y), ++c;
      }
    }
    return c === 0 || s.size === 0
      ? !1
      : { x: [...s].reduce((d, g) => d + g) / s.size, y: u / c };
  },
  nearest(a, i) {
    if (!a.length) return !1;
    let l = i.x,
      s = i.y,
      u = Number.POSITIVE_INFINITY,
      c,
      f,
      d;
    for (c = 0, f = a.length; c < f; ++c) {
      const g = a[c].element;
      if (g && g.hasValue()) {
        const m = g.getCenterPoint(),
          y = or(i, m);
        y < u && ((u = y), (d = g));
      }
    }
    if (d) {
      const g = d.tooltipPosition();
      (l = g.x), (s = g.y);
    }
    return { x: l, y: s };
  },
};
function ci(a, i) {
  return i && (le(i) ? Array.prototype.push.apply(a, i) : a.push(i)), a;
}
function Ri(a) {
  return (typeof a == "string" || a instanceof String) &&
    a.indexOf(`
`) > -1
    ? a.split(`
`)
    : a;
}
function X1(a, i) {
  const { element: l, datasetIndex: s, index: u } = i,
    c = a.getDatasetMeta(s).controller,
    { label: f, value: d } = c.getLabelAndValue(u);
  return {
    chart: a,
    label: f,
    parsed: c.getParsed(u),
    raw: a.data.datasets[s].data[u],
    formattedValue: d,
    dataset: c.getDataset(),
    dataIndex: u,
    datasetIndex: s,
    element: l,
  };
}
function Mm(a, i) {
  const l = a.chart.ctx,
    { body: s, footer: u, title: c } = a,
    { boxWidth: f, boxHeight: d } = i,
    g = ge(i.bodyFont),
    m = ge(i.titleFont),
    y = ge(i.footerFont),
    v = c.length,
    _ = u.length,
    S = s.length,
    D = Fe(i.padding);
  let A = D.height,
    E = 0,
    B = s.reduce(
      (K, L) => K + L.before.length + L.lines.length + L.after.length,
      0
    );
  if (
    ((B += a.beforeBody.length + a.afterBody.length),
    v &&
      (A += v * m.lineHeight + (v - 1) * i.titleSpacing + i.titleMarginBottom),
    B)
  ) {
    const K = i.displayColors ? Math.max(d, g.lineHeight) : g.lineHeight;
    A += S * K + (B - S) * g.lineHeight + (B - 1) * i.bodySpacing;
  }
  _ && (A += i.footerMarginTop + _ * y.lineHeight + (_ - 1) * i.footerSpacing);
  let V = 0;
  const Q = function (K) {
    E = Math.max(E, l.measureText(K).width + V);
  };
  return (
    l.save(),
    (l.font = m.string),
    At(a.title, Q),
    (l.font = g.string),
    At(a.beforeBody.concat(a.afterBody), Q),
    (V = i.displayColors ? f + 2 + i.boxPadding : 0),
    At(s, (K) => {
      At(K.before, Q), At(K.lines, Q), At(K.after, Q);
    }),
    (V = 0),
    (l.font = y.string),
    At(a.footer, Q),
    l.restore(),
    (E += D.width),
    { width: E, height: A }
  );
}
function G1(a, i) {
  const { y: l, height: s } = i;
  return l < s / 2 ? "top" : l > a.height - s / 2 ? "bottom" : "center";
}
function Q1(a, i, l, s) {
  const { x: u, width: c } = s,
    f = l.caretSize + l.caretPadding;
  if ((a === "left" && u + c + f > i.width) || (a === "right" && u - c - f < 0))
    return !0;
}
function Z1(a, i, l, s) {
  const { x: u, width: c } = l,
    {
      width: f,
      chartArea: { left: d, right: g },
    } = a;
  let m = "center";
  return (
    s === "center"
      ? (m = u <= (d + g) / 2 ? "left" : "right")
      : u <= c / 2
      ? (m = "left")
      : u >= f - c / 2 && (m = "right"),
    Q1(m, a, i, l) && (m = "center"),
    m
  );
}
function Tm(a, i, l) {
  const s = l.yAlign || i.yAlign || G1(a, l);
  return { xAlign: l.xAlign || i.xAlign || Z1(a, i, l, s), yAlign: s };
}
function K1(a, i) {
  let { x: l, width: s } = a;
  return i === "right" ? (l -= s) : i === "center" && (l -= s / 2), l;
}
function F1(a, i, l) {
  let { y: s, height: u } = a;
  return (
    i === "top" ? (s += l) : i === "bottom" ? (s -= u + l) : (s -= u / 2), s
  );
}
function Om(a, i, l, s) {
  const { caretSize: u, caretPadding: c, cornerRadius: f } = a,
    { xAlign: d, yAlign: g } = l,
    m = u + c,
    { topLeft: y, topRight: v, bottomLeft: _, bottomRight: S } = Va(f);
  let D = K1(i, d);
  const A = F1(i, g, m);
  return (
    g === "center"
      ? d === "left"
        ? (D += m)
        : d === "right" && (D -= m)
      : d === "left"
      ? (D -= Math.max(y, _) + u)
      : d === "right" && (D += Math.max(v, S) + u),
    { x: Qe(D, 0, s.width - i.width), y: Qe(A, 0, s.height - i.height) }
  );
}
function _o(a, i, l) {
  const s = Fe(l.padding);
  return i === "center"
    ? a.x + a.width / 2
    : i === "right"
    ? a.x + a.width - s.right
    : a.x + s.left;
}
function Dm(a) {
  return ci([], Ri(a));
}
function W1(a, i, l) {
  return Yn(a, { tooltip: i, tooltipItems: l, type: "tooltip" });
}
function Am(a, i) {
  const l = i && i.dataset && i.dataset.tooltip && i.dataset.tooltip.callbacks;
  return l ? a.override(l) : a;
}
const M0 = {
  beforeTitle: zi,
  title(a) {
    if (a.length > 0) {
      const i = a[0],
        l = i.chart.data.labels,
        s = l ? l.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return i.dataset.label || "";
      if (i.label) return i.label;
      if (s > 0 && i.dataIndex < s) return l[i.dataIndex];
    }
    return "";
  },
  afterTitle: zi,
  beforeBody: zi,
  beforeLabel: zi,
  label(a) {
    if (this && this.options && this.options.mode === "dataset")
      return a.label + ": " + a.formattedValue || a.formattedValue;
    let i = a.dataset.label || "";
    i && (i += ": ");
    const l = a.formattedValue;
    return Nt(l) || (i += l), i;
  },
  labelColor(a) {
    const l = a.chart
      .getDatasetMeta(a.datasetIndex)
      .controller.getStyle(a.dataIndex);
    return {
      borderColor: l.borderColor,
      backgroundColor: l.backgroundColor,
      borderWidth: l.borderWidth,
      borderDash: l.borderDash,
      borderDashOffset: l.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(a) {
    const l = a.chart
      .getDatasetMeta(a.datasetIndex)
      .controller.getStyle(a.dataIndex);
    return { pointStyle: l.pointStyle, rotation: l.rotation };
  },
  afterLabel: zi,
  afterBody: zi,
  beforeFooter: zi,
  footer: zi,
  afterFooter: zi,
};
function _e(a, i, l, s) {
  const u = a[i].call(l, s);
  return typeof u > "u" ? M0[i].call(l, s) : u;
}
class gr extends Hi {
  constructor(i) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = i.chart),
      (this.options = i.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(i) {
    (this.options = i),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const i = this._cachedAnimations;
    if (i) return i;
    const l = this.chart,
      s = this.options.setContext(this.getContext()),
      u = s.enabled && l.options.animation && s.animations,
      c = new u0(this.chart, u);
    return u._cacheable && (this._cachedAnimations = Object.freeze(c)), c;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = W1(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(i, l) {
    const { callbacks: s } = l,
      u = _e(s, "beforeTitle", this, i),
      c = _e(s, "title", this, i),
      f = _e(s, "afterTitle", this, i);
    let d = [];
    return (d = ci(d, Ri(u))), (d = ci(d, Ri(c))), (d = ci(d, Ri(f))), d;
  }
  getBeforeBody(i, l) {
    return Dm(_e(l.callbacks, "beforeBody", this, i));
  }
  getBody(i, l) {
    const { callbacks: s } = l,
      u = [];
    return (
      At(i, (c) => {
        const f = { before: [], lines: [], after: [] },
          d = Am(s, c);
        ci(f.before, Ri(_e(d, "beforeLabel", this, c))),
          ci(f.lines, _e(d, "label", this, c)),
          ci(f.after, Ri(_e(d, "afterLabel", this, c))),
          u.push(f);
      }),
      u
    );
  }
  getAfterBody(i, l) {
    return Dm(_e(l.callbacks, "afterBody", this, i));
  }
  getFooter(i, l) {
    const { callbacks: s } = l,
      u = _e(s, "beforeFooter", this, i),
      c = _e(s, "footer", this, i),
      f = _e(s, "afterFooter", this, i);
    let d = [];
    return (d = ci(d, Ri(u))), (d = ci(d, Ri(c))), (d = ci(d, Ri(f))), d;
  }
  _createItems(i) {
    const l = this._active,
      s = this.chart.data,
      u = [],
      c = [],
      f = [];
    let d = [],
      g,
      m;
    for (g = 0, m = l.length; g < m; ++g) d.push(X1(this.chart, l[g]));
    return (
      i.filter && (d = d.filter((y, v, _) => i.filter(y, v, _, s))),
      i.itemSort && (d = d.sort((y, v) => i.itemSort(y, v, s))),
      At(d, (y) => {
        const v = Am(i.callbacks, y);
        u.push(_e(v, "labelColor", this, y)),
          c.push(_e(v, "labelPointStyle", this, y)),
          f.push(_e(v, "labelTextColor", this, y));
      }),
      (this.labelColors = u),
      (this.labelPointStyles = c),
      (this.labelTextColors = f),
      (this.dataPoints = d),
      d
    );
  }
  update(i, l) {
    const s = this.options.setContext(this.getContext()),
      u = this._active;
    let c,
      f = [];
    if (!u.length) this.opacity !== 0 && (c = { opacity: 0 });
    else {
      const d = Na[s.position].call(this, u, this._eventPosition);
      (f = this._createItems(s)),
        (this.title = this.getTitle(f, s)),
        (this.beforeBody = this.getBeforeBody(f, s)),
        (this.body = this.getBody(f, s)),
        (this.afterBody = this.getAfterBody(f, s)),
        (this.footer = this.getFooter(f, s));
      const g = (this._size = Mm(this, s)),
        m = Object.assign({}, d, g),
        y = Tm(this.chart, s, m),
        v = Om(s, m, y, this.chart);
      (this.xAlign = y.xAlign),
        (this.yAlign = y.yAlign),
        (c = {
          opacity: 1,
          x: v.x,
          y: v.y,
          width: g.width,
          height: g.height,
          caretX: d.x,
          caretY: d.y,
        });
    }
    (this._tooltipItems = f),
      (this.$context = void 0),
      c && this._resolveAnimations().update(this, c),
      i &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: l });
  }
  drawCaret(i, l, s, u) {
    const c = this.getCaretPosition(i, s, u);
    l.lineTo(c.x1, c.y1), l.lineTo(c.x2, c.y2), l.lineTo(c.x3, c.y3);
  }
  getCaretPosition(i, l, s) {
    const { xAlign: u, yAlign: c } = this,
      { caretSize: f, cornerRadius: d } = s,
      { topLeft: g, topRight: m, bottomLeft: y, bottomRight: v } = Va(d),
      { x: _, y: S } = i,
      { width: D, height: A } = l;
    let E, B, V, Q, K, L;
    return (
      c === "center"
        ? ((K = S + A / 2),
          u === "left"
            ? ((E = _), (B = E - f), (Q = K + f), (L = K - f))
            : ((E = _ + D), (B = E + f), (Q = K - f), (L = K + f)),
          (V = E))
        : (u === "left"
            ? (B = _ + Math.max(g, y) + f)
            : u === "right"
            ? (B = _ + D - Math.max(m, v) - f)
            : (B = this.caretX),
          c === "top"
            ? ((Q = S), (K = Q - f), (E = B - f), (V = B + f))
            : ((Q = S + A), (K = Q + f), (E = B + f), (V = B - f)),
          (L = Q)),
      { x1: E, x2: B, x3: V, y1: Q, y2: K, y3: L }
    );
  }
  drawTitle(i, l, s) {
    const u = this.title,
      c = u.length;
    let f, d, g;
    if (c) {
      const m = Ml(s.rtl, this.x, this.width);
      for (
        i.x = _o(this, s.titleAlign, s),
          l.textAlign = m.textAlign(s.titleAlign),
          l.textBaseline = "middle",
          f = ge(s.titleFont),
          d = s.titleSpacing,
          l.fillStyle = s.titleColor,
          l.font = f.string,
          g = 0;
        g < c;
        ++g
      )
        l.fillText(u[g], m.x(i.x), i.y + f.lineHeight / 2),
          (i.y += f.lineHeight + d),
          g + 1 === c && (i.y += s.titleMarginBottom - d);
    }
  }
  _drawColorBox(i, l, s, u, c) {
    const f = this.labelColors[s],
      d = this.labelPointStyles[s],
      { boxHeight: g, boxWidth: m } = c,
      y = ge(c.bodyFont),
      v = _o(this, "left", c),
      _ = u.x(v),
      S = g < y.lineHeight ? (y.lineHeight - g) / 2 : 0,
      D = l.y + S;
    if (c.usePointStyle) {
      const A = {
          radius: Math.min(m, g) / 2,
          pointStyle: d.pointStyle,
          rotation: d.rotation,
          borderWidth: 1,
        },
        E = u.leftForLtr(_, m) + m / 2,
        B = D + g / 2;
      (i.strokeStyle = c.multiKeyBackground),
        (i.fillStyle = c.multiKeyBackground),
        cr(i, A, E, B),
        (i.strokeStyle = f.borderColor),
        (i.fillStyle = f.backgroundColor),
        cr(i, A, E, B);
    } else {
      (i.lineWidth = Dt(f.borderWidth)
        ? Math.max(...Object.values(f.borderWidth))
        : f.borderWidth || 1),
        (i.strokeStyle = f.borderColor),
        i.setLineDash(f.borderDash || []),
        (i.lineDashOffset = f.borderDashOffset || 0);
      const A = u.leftForLtr(_, m),
        E = u.leftForLtr(u.xPlus(_, 1), m - 2),
        B = Va(f.borderRadius);
      Object.values(B).some((V) => V !== 0)
        ? (i.beginPath(),
          (i.fillStyle = c.multiKeyBackground),
          rr(i, { x: A, y: D, w: m, h: g, radius: B }),
          i.fill(),
          i.stroke(),
          (i.fillStyle = f.backgroundColor),
          i.beginPath(),
          rr(i, { x: E, y: D + 1, w: m - 2, h: g - 2, radius: B }),
          i.fill())
        : ((i.fillStyle = c.multiKeyBackground),
          i.fillRect(A, D, m, g),
          i.strokeRect(A, D, m, g),
          (i.fillStyle = f.backgroundColor),
          i.fillRect(E, D + 1, m - 2, g - 2));
    }
    i.fillStyle = this.labelTextColors[s];
  }
  drawBody(i, l, s) {
    const { body: u } = this,
      {
        bodySpacing: c,
        bodyAlign: f,
        displayColors: d,
        boxHeight: g,
        boxWidth: m,
        boxPadding: y,
      } = s,
      v = ge(s.bodyFont);
    let _ = v.lineHeight,
      S = 0;
    const D = Ml(s.rtl, this.x, this.width),
      A = function (X) {
        l.fillText(X, D.x(i.x + S), i.y + _ / 2), (i.y += _ + c);
      },
      E = D.textAlign(f);
    let B, V, Q, K, L, Z, F;
    for (
      l.textAlign = f,
        l.textBaseline = "middle",
        l.font = v.string,
        i.x = _o(this, E, s),
        l.fillStyle = s.bodyColor,
        At(this.beforeBody, A),
        S = d && E !== "right" ? (f === "center" ? m / 2 + y : m + 2 + y) : 0,
        K = 0,
        Z = u.length;
      K < Z;
      ++K
    ) {
      for (
        B = u[K],
          V = this.labelTextColors[K],
          l.fillStyle = V,
          At(B.before, A),
          Q = B.lines,
          d &&
            Q.length &&
            (this._drawColorBox(l, i, K, D, s),
            (_ = Math.max(v.lineHeight, g))),
          L = 0,
          F = Q.length;
        L < F;
        ++L
      )
        A(Q[L]), (_ = v.lineHeight);
      At(B.after, A);
    }
    (S = 0), (_ = v.lineHeight), At(this.afterBody, A), (i.y -= c);
  }
  drawFooter(i, l, s) {
    const u = this.footer,
      c = u.length;
    let f, d;
    if (c) {
      const g = Ml(s.rtl, this.x, this.width);
      for (
        i.x = _o(this, s.footerAlign, s),
          i.y += s.footerMarginTop,
          l.textAlign = g.textAlign(s.footerAlign),
          l.textBaseline = "middle",
          f = ge(s.footerFont),
          l.fillStyle = s.footerColor,
          l.font = f.string,
          d = 0;
        d < c;
        ++d
      )
        l.fillText(u[d], g.x(i.x), i.y + f.lineHeight / 2),
          (i.y += f.lineHeight + s.footerSpacing);
    }
  }
  drawBackground(i, l, s, u) {
    const { xAlign: c, yAlign: f } = this,
      { x: d, y: g } = i,
      { width: m, height: y } = s,
      {
        topLeft: v,
        topRight: _,
        bottomLeft: S,
        bottomRight: D,
      } = Va(u.cornerRadius);
    (l.fillStyle = u.backgroundColor),
      (l.strokeStyle = u.borderColor),
      (l.lineWidth = u.borderWidth),
      l.beginPath(),
      l.moveTo(d + v, g),
      f === "top" && this.drawCaret(i, l, s, u),
      l.lineTo(d + m - _, g),
      l.quadraticCurveTo(d + m, g, d + m, g + _),
      f === "center" && c === "right" && this.drawCaret(i, l, s, u),
      l.lineTo(d + m, g + y - D),
      l.quadraticCurveTo(d + m, g + y, d + m - D, g + y),
      f === "bottom" && this.drawCaret(i, l, s, u),
      l.lineTo(d + S, g + y),
      l.quadraticCurveTo(d, g + y, d, g + y - S),
      f === "center" && c === "left" && this.drawCaret(i, l, s, u),
      l.lineTo(d, g + v),
      l.quadraticCurveTo(d, g, d + v, g),
      l.closePath(),
      l.fill(),
      u.borderWidth > 0 && l.stroke();
  }
  _updateAnimationTarget(i) {
    const l = this.chart,
      s = this.$animations,
      u = s && s.x,
      c = s && s.y;
    if (u || c) {
      const f = Na[i.position].call(this, this._active, this._eventPosition);
      if (!f) return;
      const d = (this._size = Mm(this, i)),
        g = Object.assign({}, f, this._size),
        m = Tm(l, i, g),
        y = Om(i, g, m, l);
      (u._to !== y.x || c._to !== y.y) &&
        ((this.xAlign = m.xAlign),
        (this.yAlign = m.yAlign),
        (this.width = d.width),
        (this.height = d.height),
        (this.caretX = f.x),
        (this.caretY = f.y),
        this._resolveAnimations().update(this, y));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(i) {
    const l = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(l);
    const u = { width: this.width, height: this.height },
      c = { x: this.x, y: this.y };
    s = Math.abs(s) < 0.001 ? 0 : s;
    const f = Fe(l.padding),
      d =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    l.enabled &&
      d &&
      (i.save(),
      (i.globalAlpha = s),
      this.drawBackground(c, i, u, l),
      a0(i, l.textDirection),
      (c.y += f.top),
      this.drawTitle(c, i, l),
      this.drawBody(c, i, l),
      this.drawFooter(c, i, l),
      s0(i, l.textDirection),
      i.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(i, l) {
    const s = this._active,
      u = i.map(({ datasetIndex: d, index: g }) => {
        const m = this.chart.getDatasetMeta(d);
        if (!m) throw new Error("Cannot find a dataset at index " + d);
        return { datasetIndex: d, element: m.data[g], index: g };
      }),
      c = !Do(s, u),
      f = this._positionChanged(u, l);
    (c || f) &&
      ((this._active = u),
      (this._eventPosition = l),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(i, l, s = !0) {
    if (l && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const u = this.options,
      c = this._active || [],
      f = this._getActiveElements(i, c, l, s),
      d = this._positionChanged(f, i),
      g = l || !Do(f, c) || d;
    return (
      g &&
        ((this._active = f),
        (u.enabled || u.external) &&
          ((this._eventPosition = { x: i.x, y: i.y }), this.update(!0, l))),
      g
    );
  }
  _getActiveElements(i, l, s, u) {
    const c = this.options;
    if (i.type === "mouseout") return [];
    if (!u)
      return l.filter(
        (d) =>
          this.chart.data.datasets[d.datasetIndex] &&
          this.chart
            .getDatasetMeta(d.datasetIndex)
            .controller.getParsed(d.index) !== void 0
      );
    const f = this.chart.getElementsAtEventForMode(i, c.mode, c, s);
    return c.reverse && f.reverse(), f;
  }
  _positionChanged(i, l) {
    const { caretX: s, caretY: u, options: c } = this,
      f = Na[c.position].call(this, i, l);
    return f !== !1 && (s !== f.x || u !== f.y);
  }
}
ht(gr, "positioners", Na);
var J1 = {
  id: "tooltip",
  _element: gr,
  positioners: Na,
  afterInit(a, i, l) {
    l && (a.tooltip = new gr({ chart: a, options: l }));
  },
  beforeUpdate(a, i, l) {
    a.tooltip && a.tooltip.initialize(l);
  },
  reset(a, i, l) {
    a.tooltip && a.tooltip.initialize(l);
  },
  afterDraw(a) {
    const i = a.tooltip;
    if (i && i._willRender()) {
      const l = { tooltip: i };
      if (a.notifyPlugins("beforeTooltipDraw", { ...l, cancelable: !0 }) === !1)
        return;
      i.draw(a.ctx), a.notifyPlugins("afterTooltipDraw", l);
    }
  },
  afterEvent(a, i) {
    if (a.tooltip) {
      const l = i.replay;
      a.tooltip.handleEvent(i.event, l, i.inChartArea) && (i.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (a, i) => i.bodyFont.size,
    boxWidth: (a, i) => i.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: M0,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (a) => a !== "filter" && a !== "itemSort" && a !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const $1 = (a, i, l, s) => (
  typeof i == "string"
    ? ((l = a.push(i) - 1), s.unshift({ index: l, label: i }))
    : isNaN(i) && (l = null),
  l
);
function P1(a, i, l, s) {
  const u = a.indexOf(i);
  if (u === -1) return $1(a, i, l, s);
  const c = a.lastIndexOf(i);
  return u !== c ? l : u;
}
const I1 = (a, i) => (a === null ? null : Qe(Math.round(a), 0, i));
function Em(a) {
  const i = this.getLabels();
  return a >= 0 && a < i.length ? i[a] : a;
}
class mr extends Al {
  constructor(i) {
    super(i),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(i) {
    const l = this._addedLabels;
    if (l.length) {
      const s = this.getLabels();
      for (const { index: u, label: c } of l) s[u] === c && s.splice(u, 1);
      this._addedLabels = [];
    }
    super.init(i);
  }
  parse(i, l) {
    if (Nt(i)) return null;
    const s = this.getLabels();
    return (
      (l =
        isFinite(l) && s[l] === i ? l : P1(s, i, _t(l, i), this._addedLabels)),
      I1(l, s.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: i, maxDefined: l } = this.getUserBounds();
    let { min: s, max: u } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (i || (s = 0), l || (u = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = u);
  }
  buildTicks() {
    const i = this.min,
      l = this.max,
      s = this.options.offset,
      u = [];
    let c = this.getLabels();
    (c = i === 0 && l === c.length - 1 ? c : c.slice(i, l + 1)),
      (this._valueRange = Math.max(c.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0));
    for (let f = i; f <= l; f++) u.push({ value: f });
    return u;
  }
  getLabelForValue(i) {
    return Em.call(this, i);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(i) {
    return (
      typeof i != "number" && (i = this.parse(i)),
      i === null
        ? NaN
        : this.getPixelForDecimal((i - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(i) {
    const l = this.ticks;
    return i < 0 || i > l.length - 1 ? null : this.getPixelForValue(l[i].value);
  }
  getValueForPixel(i) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(i) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
ht(mr, "id", "category"), ht(mr, "defaults", { ticks: { callback: Em } });
function tx(a, i) {
  const l = [],
    {
      bounds: u,
      step: c,
      min: f,
      max: d,
      precision: g,
      count: m,
      maxTicks: y,
      maxDigits: v,
      includeBounds: _,
    } = a,
    S = c || 1,
    D = y - 1,
    { min: A, max: E } = i,
    B = !Nt(f),
    V = !Nt(d),
    Q = !Nt(m),
    K = (E - A) / (v + 1);
  let L = Hg((E - A) / D / S) * S,
    Z,
    F,
    X,
    Y;
  if (L < 1e-14 && !B && !V) return [{ value: A }, { value: E }];
  (Y = Math.ceil(E / L) - Math.floor(A / L)),
    Y > D && (L = Hg((Y * L) / D / S) * S),
    Nt(g) || ((Z = Math.pow(10, g)), (L = Math.ceil(L * Z) / Z)),
    u === "ticks"
      ? ((F = Math.floor(A / L) * L), (X = Math.ceil(E / L) * L))
      : ((F = A), (X = E)),
    B && V && c && Yb((d - f) / c, L / 1e3)
      ? ((Y = Math.round(Math.min((d - f) / L, y))),
        (L = (d - f) / Y),
        (F = f),
        (X = d))
      : Q
      ? ((F = B ? f : F), (X = V ? d : X), (Y = m - 1), (L = (X - F) / Y))
      : ((Y = (X - F) / L),
        Ua(Y, Math.round(Y), L / 1e3)
          ? (Y = Math.round(Y))
          : (Y = Math.ceil(Y)));
  const W = Math.max(Bg(L), Bg(F));
  (Z = Math.pow(10, Nt(g) ? W : g)),
    (F = Math.round(F * Z) / Z),
    (X = Math.round(X * Z) / Z);
  let nt = 0;
  for (
    B &&
    (_ && F !== f
      ? (l.push({ value: f }),
        F < f && nt++,
        Ua(Math.round((F + nt * L) * Z) / Z, f, zm(f, K, a)) && nt++)
      : F < f && nt++);
    nt < Y;
    ++nt
  ) {
    const ot = Math.round((F + nt * L) * Z) / Z;
    if (V && ot > d) break;
    l.push({ value: ot });
  }
  return (
    V && _ && X !== d
      ? l.length && Ua(l[l.length - 1].value, d, zm(d, K, a))
        ? (l[l.length - 1].value = d)
        : l.push({ value: d })
      : (!V || X === d) && l.push({ value: X }),
    l
  );
}
function zm(a, i, { horizontal: l, minRotation: s }) {
  const u = Nn(s),
    c = (l ? Math.sin(u) : Math.cos(u)) || 0.001,
    f = 0.75 * i * ("" + a).length;
  return Math.min(i / c, f);
}
class ex extends Al {
  constructor(i) {
    super(i),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(i, l) {
    return Nt(i) ||
      ((typeof i == "number" || i instanceof Number) && !isFinite(+i))
      ? null
      : +i;
  }
  handleTickRangeOptions() {
    const { beginAtZero: i } = this.options,
      { minDefined: l, maxDefined: s } = this.getUserBounds();
    let { min: u, max: c } = this;
    const f = (g) => (u = l ? u : g),
      d = (g) => (c = s ? c : g);
    if (i) {
      const g = Tl(u),
        m = Tl(c);
      g < 0 && m < 0 ? d(0) : g > 0 && m > 0 && f(0);
    }
    if (u === c) {
      let g = c === 0 ? 1 : Math.abs(c * 0.05);
      d(c + g), i || f(u - g);
    }
    (this.min = u), (this.max = c);
  }
  getTickLimit() {
    const i = this.options.ticks;
    let { maxTicksLimit: l, stepSize: s } = i,
      u;
    return (
      s
        ? ((u = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          u > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${u} ticks. Limiting to 1000.`
            ),
            (u = 1e3)))
        : ((u = this.computeTickLimit()), (l = l || 11)),
      l && (u = Math.min(l, u)),
      u
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const i = this.options,
      l = i.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const u = {
        maxTicks: s,
        bounds: i.bounds,
        min: i.min,
        max: i.max,
        precision: l.precision,
        step: l.stepSize,
        count: l.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: l.minRotation || 0,
        includeBounds: l.includeBounds !== !1,
      },
      c = this._range || this,
      f = tx(u, c);
    return (
      i.bounds === "ticks" && Vb(f, this, "value"),
      i.reverse
        ? (f.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      f
    );
  }
  configure() {
    const i = this.ticks;
    let l = this.min,
      s = this.max;
    if ((super.configure(), this.options.offset && i.length)) {
      const u = (s - l) / Math.max(i.length - 1, 1) / 2;
      (l -= u), (s += u);
    }
    (this._startValue = l), (this._endValue = s), (this._valueRange = s - l);
  }
  getLabelForValue(i) {
    return Jm(i, this.chart.options.locale, this.options.ticks.format);
  }
}
class pr extends ex {
  determineDataLimits() {
    const { min: i, max: l } = this.getMinMax(!0);
    (this.min = Ke(i) ? i : 0),
      (this.max = Ke(l) ? l : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const i = this.isHorizontal(),
      l = i ? this.width : this.height,
      s = Nn(this.options.ticks.minRotation),
      u = (i ? Math.sin(s) : Math.cos(s)) || 0.001,
      c = this._resolveTickFontOptions(0);
    return Math.ceil(l / Math.min(40, c.lineHeight / u));
  }
  getPixelForValue(i) {
    return i === null
      ? NaN
      : this.getPixelForDecimal((i - this._startValue) / this._valueRange);
  }
  getValueForPixel(i) {
    return this._startValue + this.getDecimalForPixel(i) * this._valueRange;
  }
}
ht(pr, "id", "linear"),
  ht(pr, "defaults", { ticks: { callback: $m.formatters.numeric } });
const ko = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  xe = Object.keys(ko);
function Cm(a, i) {
  return a - i;
}
function Rm(a, i) {
  if (Nt(i)) return null;
  const l = a._adapter,
    { parser: s, round: u, isoWeekday: c } = a._parseOpts;
  let f = i;
  return (
    typeof s == "function" && (f = s(f)),
    Ke(f) || (f = typeof s == "string" ? l.parse(f, s) : l.parse(f)),
    f === null
      ? null
      : (u &&
          (f =
            u === "week" && (Qa(c) || c === !0)
              ? l.startOf(f, "isoWeek", c)
              : l.startOf(f, u)),
        +f)
  );
}
function wm(a, i, l, s) {
  const u = xe.length;
  for (let c = xe.indexOf(a); c < u - 1; ++c) {
    const f = ko[xe[c]],
      d = f.steps ? f.steps : Number.MAX_SAFE_INTEGER;
    if (f.common && Math.ceil((l - i) / (d * f.size)) <= s) return xe[c];
  }
  return xe[u - 1];
}
function ix(a, i, l, s, u) {
  for (let c = xe.length - 1; c >= xe.indexOf(l); c--) {
    const f = xe[c];
    if (ko[f].common && a._adapter.diff(u, s, f) >= i - 1) return f;
  }
  return xe[l ? xe.indexOf(l) : 0];
}
function nx(a) {
  for (let i = xe.indexOf(a) + 1, l = xe.length; i < l; ++i)
    if (ko[xe[i]].common) return xe[i];
}
function Hm(a, i, l) {
  if (!l) a[i] = !0;
  else if (l.length) {
    const { lo: s, hi: u } = Sr(l, i),
      c = l[s] >= i ? l[s] : l[u];
    a[c] = !0;
  }
}
function lx(a, i, l, s) {
  const u = a._adapter,
    c = +u.startOf(i[0].value, s),
    f = i[i.length - 1].value;
  let d, g;
  for (d = c; d <= f; d = +u.add(d, 1, s))
    (g = l[d]), g >= 0 && (i[g].major = !0);
  return i;
}
function Bm(a, i, l) {
  const s = [],
    u = {},
    c = i.length;
  let f, d;
  for (f = 0; f < c; ++f)
    (d = i[f]), (u[d] = f), s.push({ value: d, major: !1 });
  return c === 0 || !l ? s : lx(a, s, u, l);
}
class Ho extends Al {
  constructor(i) {
    super(i),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(i, l = {}) {
    const s = i.time || (i.time = {}),
      u = (this._adapter = new p_._date(i.adapters.date));
    u.init(l),
      ka(s.displayFormats, u.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(i),
      (this._normalized = l.normalized);
  }
  parse(i, l) {
    return i === void 0 ? null : Rm(this, i);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const i = this.options,
      l = this._adapter,
      s = i.time.unit || "day";
    let { min: u, max: c, minDefined: f, maxDefined: d } = this.getUserBounds();
    function g(m) {
      !f && !isNaN(m.min) && (u = Math.min(u, m.min)),
        !d && !isNaN(m.max) && (c = Math.max(c, m.max));
    }
    (!f || !d) &&
      (g(this._getLabelBounds()),
      (i.bounds !== "ticks" || i.ticks.source !== "labels") &&
        g(this.getMinMax(!1))),
      (u = Ke(u) && !isNaN(u) ? u : +l.startOf(Date.now(), s)),
      (c = Ke(c) && !isNaN(c) ? c : +l.endOf(Date.now(), s) + 1),
      (this.min = Math.min(u, c - 1)),
      (this.max = Math.max(u + 1, c));
  }
  _getLabelBounds() {
    const i = this.getLabelTimestamps();
    let l = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY;
    return i.length && ((l = i[0]), (s = i[i.length - 1])), { min: l, max: s };
  }
  buildTicks() {
    const i = this.options,
      l = i.time,
      s = i.ticks,
      u = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    i.bounds === "ticks" &&
      u.length &&
      ((this.min = this._userMin || u[0]),
      (this.max = this._userMax || u[u.length - 1]));
    const c = this.min,
      f = this.max,
      d = Kb(u, c, f);
    return (
      (this._unit =
        l.unit ||
        (s.autoSkip
          ? wm(l.minUnit, this.min, this.max, this._getLabelCapacity(c))
          : ix(this, d.length, l.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === "year" ? void 0 : nx(this._unit)),
      this.initOffsets(u),
      i.reverse && d.reverse(),
      Bm(this, d, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((i) => +i.value));
  }
  initOffsets(i = []) {
    let l = 0,
      s = 0,
      u,
      c;
    this.options.offset &&
      i.length &&
      ((u = this.getDecimalForValue(i[0])),
      i.length === 1
        ? (l = 1 - u)
        : (l = (this.getDecimalForValue(i[1]) - u) / 2),
      (c = this.getDecimalForValue(i[i.length - 1])),
      i.length === 1
        ? (s = c)
        : (s = (c - this.getDecimalForValue(i[i.length - 2])) / 2));
    const f = i.length < 3 ? 0.5 : 0.25;
    (l = Qe(l, 0, f)),
      (s = Qe(s, 0, f)),
      (this._offsets = { start: l, end: s, factor: 1 / (l + 1 + s) });
  }
  _generate() {
    const i = this._adapter,
      l = this.min,
      s = this.max,
      u = this.options,
      c = u.time,
      f = c.unit || wm(c.minUnit, l, s, this._getLabelCapacity(l)),
      d = _t(u.ticks.stepSize, 1),
      g = f === "week" ? c.isoWeekday : !1,
      m = Qa(g) || g === !0,
      y = {};
    let v = l,
      _,
      S;
    if (
      (m && (v = +i.startOf(v, "isoWeek", g)),
      (v = +i.startOf(v, m ? "day" : f)),
      i.diff(s, l, f) > 1e5 * d)
    )
      throw new Error(
        l + " and " + s + " are too far apart with stepSize of " + d + " " + f
      );
    const D = u.ticks.source === "data" && this.getDataTimestamps();
    for (_ = v, S = 0; _ < s; _ = +i.add(_, d, f), S++) Hm(y, _, D);
    return (
      (_ === s || u.bounds === "ticks" || S === 1) && Hm(y, _, D),
      Object.keys(y)
        .sort(Cm)
        .map((A) => +A)
    );
  }
  getLabelForValue(i) {
    const l = this._adapter,
      s = this.options.time;
    return s.tooltipFormat
      ? l.format(i, s.tooltipFormat)
      : l.format(i, s.displayFormats.datetime);
  }
  format(i, l) {
    const u = this.options.time.displayFormats,
      c = this._unit,
      f = l || u[c];
    return this._adapter.format(i, f);
  }
  _tickFormatFunction(i, l, s, u) {
    const c = this.options,
      f = c.ticks.callback;
    if (f) return kt(f, [i, l, s], this);
    const d = c.time.displayFormats,
      g = this._unit,
      m = this._majorUnit,
      y = g && d[g],
      v = m && d[m],
      _ = s[l],
      S = m && v && _ && _.major;
    return this._adapter.format(i, u || (S ? v : y));
  }
  generateTickLabels(i) {
    let l, s, u;
    for (l = 0, s = i.length; l < s; ++l)
      (u = i[l]), (u.label = this._tickFormatFunction(u.value, l, i));
  }
  getDecimalForValue(i) {
    return i === null ? NaN : (i - this.min) / (this.max - this.min);
  }
  getPixelForValue(i) {
    const l = this._offsets,
      s = this.getDecimalForValue(i);
    return this.getPixelForDecimal((l.start + s) * l.factor);
  }
  getValueForPixel(i) {
    const l = this._offsets,
      s = this.getDecimalForPixel(i) / l.factor - l.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(i) {
    const l = this.options.ticks,
      s = this.ctx.measureText(i).width,
      u = Nn(this.isHorizontal() ? l.maxRotation : l.minRotation),
      c = Math.cos(u),
      f = Math.sin(u),
      d = this._resolveTickFontOptions(0).size;
    return { w: s * c + d * f, h: s * f + d * c };
  }
  _getLabelCapacity(i) {
    const l = this.options.time,
      s = l.displayFormats,
      u = s[l.unit] || s.millisecond,
      c = this._tickFormatFunction(i, 0, Bm(this, [i], this._majorUnit), u),
      f = this._getLabelSize(c),
      d =
        Math.floor(this.isHorizontal() ? this.width / f.w : this.height / f.h) -
        1;
    return d > 0 ? d : 1;
  }
  getDataTimestamps() {
    let i = this._cache.data || [],
      l,
      s;
    if (i.length) return i;
    const u = this.getMatchingVisibleMetas();
    if (this._normalized && u.length)
      return (this._cache.data = u[0].controller.getAllParsedValues(this));
    for (l = 0, s = u.length; l < s; ++l)
      i = i.concat(u[l].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(i));
  }
  getLabelTimestamps() {
    const i = this._cache.labels || [];
    let l, s;
    if (i.length) return i;
    const u = this.getLabels();
    for (l = 0, s = u.length; l < s; ++l) i.push(Rm(this, u[l]));
    return (this._cache.labels = this._normalized ? i : this.normalize(i));
  }
  normalize(i) {
    return Wb(i.sort(Cm));
  }
}
ht(Ho, "id", "time"),
  ht(Ho, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function xo(a, i, l) {
  let s = 0,
    u = a.length - 1,
    c,
    f,
    d,
    g;
  l
    ? (i >= a[s].pos && i <= a[u].pos && ({ lo: s, hi: u } = kn(a, "pos", i)),
      ({ pos: c, time: d } = a[s]),
      ({ pos: f, time: g } = a[u]))
    : (i >= a[s].time &&
        i <= a[u].time &&
        ({ lo: s, hi: u } = kn(a, "time", i)),
      ({ time: c, pos: d } = a[s]),
      ({ time: f, pos: g } = a[u]));
  const m = f - c;
  return m ? d + ((g - d) * (i - c)) / m : d;
}
class Lm extends Ho {
  constructor(i) {
    super(i),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const i = this._getTimestampsForTable(),
      l = (this._table = this.buildLookupTable(i));
    (this._minPos = xo(l, this.min)),
      (this._tableRange = xo(l, this.max) - this._minPos),
      super.initOffsets(i);
  }
  buildLookupTable(i) {
    const { min: l, max: s } = this,
      u = [],
      c = [];
    let f, d, g, m, y;
    for (f = 0, d = i.length; f < d; ++f)
      (m = i[f]), m >= l && m <= s && u.push(m);
    if (u.length < 2)
      return [
        { time: l, pos: 0 },
        { time: s, pos: 1 },
      ];
    for (f = 0, d = u.length; f < d; ++f)
      (y = u[f + 1]),
        (g = u[f - 1]),
        (m = u[f]),
        Math.round((y + g) / 2) !== m && c.push({ time: m, pos: f / (d - 1) });
    return c;
  }
  _generate() {
    const i = this.min,
      l = this.max;
    let s = super.getDataTimestamps();
    return (
      (!s.includes(i) || !s.length) && s.splice(0, 0, i),
      (!s.includes(l) || s.length === 1) && s.push(l),
      s.sort((u, c) => u - c)
    );
  }
  _getTimestampsForTable() {
    let i = this._cache.all || [];
    if (i.length) return i;
    const l = this.getDataTimestamps(),
      s = this.getLabelTimestamps();
    return (
      l.length && s.length
        ? (i = this.normalize(l.concat(s)))
        : (i = l.length ? l : s),
      (i = this._cache.all = i),
      i
    );
  }
  getDecimalForValue(i) {
    return (xo(this._table, i) - this._minPos) / this._tableRange;
  }
  getValueForPixel(i) {
    const l = this._offsets,
      s = this.getDecimalForPixel(i) / l.factor - l.end;
    return xo(this._table, s * this._tableRange + this._minPos, !0);
  }
}
ht(Lm, "id", "timeseries"), ht(Lm, "defaults", Ho.defaults);
const T0 = "label";
function Nm(a, i) {
  typeof a == "function" ? a(i) : a && (a.current = i);
}
function ax(a, i) {
  const l = a.options;
  l && i && Object.assign(l, i);
}
function O0(a, i) {
  a.labels = i;
}
function D0(a, i) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : T0;
  const s = [];
  a.datasets = i.map((u) => {
    const c = a.datasets.find((f) => f[l] === u[l]);
    return !c || !u.data || s.includes(c)
      ? { ...u }
      : (s.push(c), Object.assign(c, u), c);
  });
}
function sx(a) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T0;
  const l = { labels: [], datasets: [] };
  return O0(l, a.labels), D0(l, a.datasets, i), l;
}
function ox(a, i) {
  const {
      height: l = 150,
      width: s = 300,
      redraw: u = !1,
      datasetIdKey: c,
      type: f,
      data: d,
      options: g,
      plugins: m = [],
      fallbackContent: y,
      updateMode: v,
      ..._
    } = a,
    S = Ot.useRef(null),
    D = Ot.useRef(null),
    A = () => {
      S.current &&
        ((D.current = new No(S.current, {
          type: f,
          data: sx(d, c),
          options: g && { ...g },
          plugins: m,
        })),
        Nm(i, D.current));
    },
    E = () => {
      Nm(i, null), D.current && (D.current.destroy(), (D.current = null));
    };
  return (
    Ot.useEffect(() => {
      !u && D.current && g && ax(D.current, g);
    }, [u, g]),
    Ot.useEffect(() => {
      !u && D.current && O0(D.current.config.data, d.labels);
    }, [u, d.labels]),
    Ot.useEffect(() => {
      !u && D.current && d.datasets && D0(D.current.config.data, d.datasets, c);
    }, [u, d.datasets]),
    Ot.useEffect(() => {
      D.current && (u ? (E(), setTimeout(A)) : D.current.update(v));
    }, [u, g, d.labels, d.datasets, v]),
    Ot.useEffect(() => {
      D.current && (E(), setTimeout(A));
    }, [f]),
    Ot.useEffect(() => (A(), () => E()), []),
    Ym.createElement(
      "canvas",
      { ref: S, role: "img", height: l, width: s, ..._ },
      y
    )
  );
}
const ux = Ot.forwardRef(ox);
function cx(a, i) {
  return (
    No.register(i),
    Ot.forwardRef((l, s) => Ym.createElement(ux, { ...l, ref: s, type: a }))
  );
}
const rx = cx("line", So);
No.register(mr, pr, Oo, La, q1, J1, Y1);
const km = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#dbdb8d",
    "#9edae5",
    "#8c6d31",
  ],
  Ra = (a) => km[a % km.length],
  Um = (a, i) => {
    a = a.replace("#", "");
    const l = parseInt(a, 16),
      s = (l >> 16) & 255,
      u = (l >> 8) & 255,
      c = l & 255;
    return `rgba(${s}, ${u}, ${c}, ${i})`;
  },
  fx = (a) => a.replace(/(\d+)$/, (i) => i.padStart(3, "0")),
  ar = (a, i = 4) => {
    if (i === 0) return [];
    const l = [];
    let s = 0,
      u = 0;
    for (let c = 0; c < a.length; c++) {
      const f = a[c];
      if (f !== null) {
        const [d, g] = f;
        (s += d), (u += g);
      }
      if ((c + 1) % i === 0 || c === a.length - 1) {
        const d = s > 0 ? (u / s) * 100 : 0;
        for (let g = 0; g < i && l.length < a.length; g++) l.push(d);
        (s = 0), (u = 0);
      }
    }
    return l;
  },
  jm = [0, 2, 4, 6],
  hx = (a) => {
    if (a.length === 0) return [];
    const i = a[0].length,
      l = [];
    for (let s = 0; s < i; s++) {
      let u = 1;
      a.forEach((c) => {
        const f = c[s] !== null ? c[s] / 100 : 0;
        u *= 1 - f;
      }),
        l.push((1 - u) * 100);
    }
    return l;
  },
  dx = (a) =>
    a < 20
      ? "#006400"
      : a < 40
      ? "#90ee90"
      : a < 60
      ? "yellow"
      : a < 80
      ? "orange"
      : "#8B0000",
  gx = () => {
    const [a, i] = Ot.useState(null),
      [l, s] = Ot.useState(null),
      [u, c] = Ot.useState({}),
      [f, d] = Ot.useState([]),
      [g, m] = Ot.useState([]),
      [y, v] = Ot.useState(""),
      [_, S] = Ot.useState(-1),
      [D, A] = Ot.useState([]),
      [E, B] = Ot.useState(4),
      [V, Q] = Ot.useState("4"),
      [K, L] = Ot.useState(!0),
      [Z, F] = Ot.useState(!0),
      [X, Y] = Ot.useState(!0),
      [W, nt] = Ot.useState(!1),
      [ot, Et] = Ot.useState(null),
      Ht = Ot.useRef(null);
    Ot.useEffect(() => {
      fetch("/seemerced2/detailed_failed.json")
        .then((q) => q.json())
        .then((q) => {
          if (!q || !q.labels || !q.classes) {
            console.error("Invalid JSON format");
            return;
          }
          s(q), d(Object.keys(q.classes));
        })
        .catch((q) => console.error("Error loading detailed_failed.json:", q));
    }, []),
      Ot.useEffect(() => {
        fetch("/seemerced2/course_abbreviations.json")
          .then((q) => q.json())
          .then((q) => {
            const lt = {};
            q.forEach((mt) => {
              Object.entries(mt).forEach(([Rt, Gt]) => {
                lt[Rt.toLowerCase()] = Gt;
              });
            }),
              lt["computer science & engineering"] ||
                (lt["computer science & engineering"] = "CSE"),
              c(lt);
          })
          .catch((q) =>
            console.error("Error loading course_abbreviations.json:", q)
          );
      }, []);
    const rt = (q) => {
      const lt = q.toLowerCase();
      for (const mt in u)
        if (lt.includes(mt)) {
          const Rt = q.match(/\d+$/),
            Gt = Rt ? Rt[0].padStart(3, "0") : "";
          return u[mt] + (Gt ? " " + Gt : "");
        }
      return q;
    };
    Ot.useEffect(() => {
      j(E);
    }, [D, E, K, Z, X, W, l]);
    const j = (q = E) => {
        if (!l) return;
        const lt = [],
          mt = [];
        if (
          (D.forEach((Gt, Se) => {
            if (!Gt.visible) return;
            const It = Gt.fullName;
            if (!(It in l.classes)) {
              console.error(`"${It}" not found in JSON data`);
              return;
            }
            const We = l.classes[It],
              Ce = We.map((Qt) => {
                if (Qt === null) return null;
                const [Re, Uo] = Qt;
                return Re > 0 ? (Uo / Re) * 100 : 0;
              });
            let Je;
            if (K) {
              const Qt = ar(We, q);
              if (X) {
                const Re = Qt.length > 0 ? Qt[Qt.length - 1] : null;
                Je = [...Qt, Re];
              } else Je = Qt;
            } else if (((Je = Ce), X)) {
              const Qt = ar(We, q),
                Re = Qt.length > 0 ? Qt[Qt.length - 1] : null;
              Je = [...Ce, Re];
            }
            if ((mt.push(Je), Z)) {
              const Qt = X ? [...Ce, Je[Je.length - 1]] : Ce;
              lt.push({
                label: Gt.abbreviatedName,
                data: Qt,
                borderColor: Ra(Se),
                backgroundColor: Um(Ra(Se), 0.3),
                fill: !1,
                tension: 0.1,
                pointRadius: 3,
                spanGaps: !1,
                pointBackgroundColor: Ra(Se),
                pointBorderColor: "red",
                pointBorderWidth: 2,
              });
            }
            if (K && q !== 0) {
              const Qt = ar(We, q),
                Re = X ? [...Qt, null] : Qt;
              lt.push({
                label: `${Gt.abbreviatedName} ${q}-Semester Moving Average`,
                data: Re,
                borderColor: Ra(Se),
                backgroundColor: Um(Ra(Se), 0.3),
                fill: !1,
                tension: 0.05,
                pointRadius: 3,
                borderDash: [5, 5],
                spanGaps: !0,
                datalabels: { display: !1 },
              });
            }
          }),
          W && mt.length > 0)
        ) {
          const Gt = hx(mt);
          Et(Gt[Gt.length - 1]),
            lt.push({
              label: "Combined Probability (Fail at Least One)",
              data: Gt,
              borderColor: "black",
              backgroundColor: "black",
              fill: !1,
              tension: 0.1,
              pointRadius: 3,
              borderDash: [5, 5],
            });
        } else Et(null);
        let Rt = l.labels;
        X && (Rt = [...l.labels, "Prediction"]),
          i({ labels: Rt, datasets: lt });
      },
      tt = (q) => {
        const lt = q.target.value;
        if ((v(lt), !lt)) {
          m([]), S(-1);
          return;
        }
        const mt = lt.toLowerCase(),
          Rt = fx(mt),
          Gt = f.filter((It) => {
            const We = It.toLowerCase(),
              Ce = rt(It).toLowerCase();
            return (
              We.includes(mt) ||
              We.includes(Rt) ||
              Ce.includes(mt) ||
              Ce.includes(Rt)
            );
          });
        m(Gt);
        const Se = Gt.findIndex(
          (It) =>
            It.toLowerCase() === mt ||
            It.toLowerCase() === Rt ||
            rt(It).toLowerCase() === mt ||
            rt(It).toLowerCase() === Rt
        );
        S(Se !== -1 ? Se : -1);
      },
      et = (q) => {
        if (D.find((mt) => mt.fullName === q)) {
          v(""), m([]), S(-1);
          return;
        }
        if (D.length >= 20) {
          alert("You can only add up to 20 classes.");
          return;
        }
        const lt = rt(q);
        A([...D, { fullName: q, abbreviatedName: lt, visible: !0 }]),
          v(""),
          m([]),
          S(-1);
      },
      xt = (q) => {
        A(D.filter((lt) => lt.fullName !== q));
      },
      M = (q) => {
        A(
          D.map((lt) =>
            lt.fullName === q ? { ...lt, visible: !lt.visible } : lt
          )
        );
      },
      U = (q) => {
        g.length !== 0 &&
          (q.key === "ArrowDown"
            ? (q.preventDefault(),
              S((lt) => {
                var Rt;
                const mt = lt < g.length - 1 ? lt + 1 : g.length - 1;
                return (
                  v(g[mt]),
                  Ht.current &&
                    ((Rt = Ht.current.children[mt]) == null ||
                      Rt.scrollIntoView({ block: "nearest" })),
                  mt
                );
              }))
            : q.key === "ArrowUp"
            ? (q.preventDefault(),
              S((lt) => {
                var Rt;
                const mt = lt > 0 ? lt - 1 : 0;
                return (
                  v(g[mt]),
                  Ht.current &&
                    ((Rt = Ht.current.children[mt]) == null ||
                      Rt.scrollIntoView({ block: "nearest" })),
                  mt
                );
              }))
            : q.key === "Enter" &&
              _ >= 0 &&
              _ < g.length &&
              (et(g[_]), q.preventDefault()));
      },
      I = (q) => {
        const lt = q.target.value;
        Q(lt);
        const mt = parseInt(lt, 10);
        lt === "" || isNaN(mt) || B(mt);
      },
      $ = (q) => {
        const lt = q.target.value;
        if (lt === "custom") return;
        if (lt === "all") {
          B(58), Q("58");
          return;
        }
        const mt = parseInt(lt, 10);
        isNaN(mt) || (B(mt), Q(String(mt)));
      },
      G = () => {
        L(!K);
      },
      ct = () => {
        F(!Z);
      },
      st = () => {
        Y(!X);
      },
      se = () => {
        nt(!W);
      },
      St = y;
    let Ut = "custom";
    return (
      E === 58 ? (Ut = "all") : jm.includes(E) && (Ut = String(E)),
      yt.jsxs("div", {
        style: {
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        children: [
          yt.jsxs("div", {
            style: {
              width: "75%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            },
            children: [
              yt.jsx("h2", {
                style: { textAlign: "center" },
                children: "Failure Rates Chart",
              }),
              yt.jsx("input", {
                type: "text",
                placeholder: "Search for a class...",
                value: St,
                onChange: tt,
                onKeyDown: U,
                style: { width: "90%", padding: "10px", marginBottom: "10px" },
              }),
              yt.jsx("div", {
                style: { position: "relative", width: "90%" },
                children: yt.jsx("div", {
                  style: { position: "absolute", width: "100%" },
                  children:
                    g.length > 0 &&
                    yt.jsx("ul", {
                      ref: Ht,
                      style: {
                        border: "1px solid #ccc",
                        padding: "5px",
                        maxHeight: "150px",
                        overflowY: "auto",
                        backgroundColor: "Canvas",
                        listStyle: "none",
                        margin: 0,
                      },
                      children: g.map((q, lt) =>
                        yt.jsx(
                          "li",
                          {
                            style: {
                              cursor: "pointer",
                              padding: "5px",
                              backgroundColor:
                                lt === _ ? "#ddd" : "transparent",
                            },
                            onClick: () => et(q),
                            children: q,
                          },
                          q
                        )
                      ),
                    }),
                }),
              }),
              yt.jsx("div", {
                style: {
                  marginTop: "10px",
                  width: "90%",
                  display: "flex",
                  flexWrap: "wrap",
                },
                children: D.map((q) =>
                  yt.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                        margin: "5px",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "4px",
                      },
                      children: [
                        yt.jsx("span", {
                          style: { flexGrow: 1 },
                          children: q.abbreviatedName,
                        }),
                        yt.jsx("button", {
                          onClick: () => M(q.fullName),
                          style: { marginRight: "10px" },
                          children: q.visible ? "Hide" : "Show",
                        }),
                        yt.jsx("button", {
                          onClick: () => xt(q.fullName),
                          children: "X",
                        }),
                      ],
                    },
                    q.fullName
                  )
                ),
              }),
              yt.jsxs("div", {
                style: {
                  marginTop: "20px",
                  marginBottom: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                },
                children: [
                  yt.jsxs("label", {
                    style: { marginRight: "10px" },
                    children: [
                      yt.jsx("input", {
                        type: "checkbox",
                        checked: K,
                        onChange: G,
                        style: { marginRight: "5px" },
                      }),
                      "Show Moving Averages",
                    ],
                  }),
                  yt.jsxs("label", {
                    style: { marginRight: "10px" },
                    children: [
                      yt.jsx("input", {
                        type: "checkbox",
                        checked: Z,
                        onChange: ct,
                        style: { marginRight: "5px" },
                      }),
                      "Show Detailed Data Points",
                    ],
                  }),
                  yt.jsxs("label", {
                    style: { marginRight: "10px" },
                    children: [
                      yt.jsx("input", {
                        type: "checkbox",
                        checked: X,
                        onChange: st,
                        style: { marginRight: "5px" },
                      }),
                      "Show Predictions",
                    ],
                  }),
                  yt.jsxs("label", {
                    style: { marginRight: "10px" },
                    children: [
                      yt.jsx("input", {
                        type: "checkbox",
                        checked: W,
                        onChange: se,
                        style: { marginRight: "5px" },
                      }),
                      "Show Combined Probability",
                    ],
                  }),
                  yt.jsx("label", {
                    htmlFor: "windowSizeDropdown",
                    style: { marginRight: "10px" },
                    children: "Moving Average Window Size:",
                  }),
                  yt.jsxs("select", {
                    id: "windowSizeDropdown",
                    value: Ut,
                    onChange: $,
                    style: { marginRight: "10px" },
                    children: [
                      jm.map((q) =>
                        yt.jsx("option", { value: q, children: q }, q)
                      ),
                      yt.jsx("option", { value: "all", children: "all" }),
                      yt.jsx("option", { value: "custom", children: "Custom" }),
                    ],
                  }),
                  yt.jsx("input", {
                    type: "number",
                    min: 0,
                    value: V,
                    onChange: I,
                    placeholder: "Custom",
                    style: { width: "60px" },
                  }),
                ],
              }),
              W &&
                ot !== null &&
                yt.jsxs("div", {
                  style: {
                    marginTop: "10px",
                    padding: "10px",
                    width: "90%",
                    textAlign: "center",
                    backgroundColor: dx(ot),
                    color: "black",
                    borderRadius: "4px",
                  },
                  children: [
                    yt.jsx("p", {
                      children:
                        "Combined Probability (Fail at Least One) = 100 × (1 - ∏ₖ (1 - pₖ/100))",
                    }),
                    yt.jsxs("p", {
                      style: { fontWeight: "bold", fontSize: "1.2em" },
                      children: [ot.toFixed(1), "%"],
                    }),
                  ],
                }),
            ],
          }),
          yt.jsx("div", {
            style: { width: "90%", height: "60vh" },
            children: a
              ? yt.jsx(rx, {
                  data: a,
                  options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    layout: { padding: { right: 50 } },
                    plugins: {
                      legend: { display: !0 },
                      title: {
                        display: !0,
                        text: "Failure Rates Over Semesters (Multiple Classes)",
                      },
                    },
                    scales: {
                      x: { title: { display: !0, text: "Semester" } },
                      y: {
                        beginAtZero: !0,
                        title: { display: !0, text: "Failure Percentage" },
                      },
                    },
                  },
                })
              : yt.jsx("p", { children: "Loading chart..." }),
          }),
        ],
      })
    );
  };
sb.createRoot(document.getElementById("root")).render(
  yt.jsx(Ot.StrictMode, { children: yt.jsx(gx, {}) })
);
