(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = n(17);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    ,
    function(e, t, n) {},
    ,
    function(e, t, n) {},
    ,
    function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2),
        c = n(1),
        l = n(0),
        o = n.n(l),
        i = n(4),
        r = n.n(i),
        u = {
          todolist: [
            { id: 1, title: "Put photo in gym bag" },
            { id: 2, title: "Put cat in the bag" },
            { id: 3, title: "take dog out for a walk" },
            { id: 4, title: "Eat all the chocolates" }
          ]
        },
        d = (n(11),
        function(e) {
          var t = e.title;
          return o.a.createElement("div", { className: "Header" }, t);
        }),
        s = (n(13),
        function() {
          var e = Object(l.useState)(""),
            t = Object(c.a)(e, 2),
            n = t[0],
            a = t[1],
            i = function() {
              var e = new Date(),
                t = e.getSeconds(),
                n = e.getMinutes(),
                c = e.getHours();
              a(c + ":" + n + ":" + t);
            };
          return (
            Object(l.useEffect)(function() {
              var e = setInterval(i, 1e3);
              return function() {
                clearInterval(e);
              };
            }),
            o.a.createElement("div", { className: "Clock" }, n)
          );
        }),
        f = (n(15),
        o.a.lazy(function() {
          return n.e(1).then(n.bind(null, 27));
        })),
        m = o.a.lazy(function() {
          return n.e(2).then(n.bind(null, 28));
        }),
        b = o.a.lazy(function() {
          return n.e(3).then(n.bind(null, 29));
        });
      var v = document.getElementById("root");
      r.a.render(
        o.a.createElement(function() {
          var e = u.todolist,
            t = Object(l.useState)(e),
            n = Object(c.a)(t, 2),
            i = n[0],
            r = n[1],
            v = Object(l.useState)([]),
            E = Object(c.a)(v, 2),
            g = E[0],
            p = E[1];
          return (
            Object(l.useEffect)(function() {
              console.log(i), console.log(g);
            }),
            o.a.createElement(
              "div",
              { className: "App" },
              o.a.createElement(d, { title: "My Tasks" }),
              o.a.createElement(s, null),
              o.a.createElement(
                "div",
                { className: "PageLayout" },
                o.a.createElement(
                  l.Suspense,
                  { fallback: o.a.createElement("div", null, "Loading...") },
                  o.a.createElement(f, {
                    payload: i,
                    completeTodoTaskHandler: function(e) {
                      var t = e.id,
                        n = i.find(function(e) {
                          return e.id === t;
                        });
                      !(function(e) {
                        var t = e.id,
                          n = i.filter(function(e) {
                            return e.id !== t;
                          });
                        r(n);
                      })({ id: t }),
                        p([].concat(Object(a.a)(g), [n]));
                    }
                  }),
                  o.a.createElement(m, { list: g }),
                  o.a.createElement(b, {
                    addTodoTaskHandler: function(e) {
                      r(
                        [].concat(Object(a.a)(i), [
                          { id: Math.random(), title: e }
                        ])
                      );
                    }
                  })
                )
              )
            )
          );
        }, null),
        v
      );
    }
  ],
  [[5, 5, 4]]
]);
//# sourceMappingURL=main.b71e9a97.chunk.js.map
