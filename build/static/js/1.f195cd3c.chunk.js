(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    18: function(e, t, a) {
      "use strict";
      var n = a(1),
        c = a(0),
        l = a.n(c);
      a(19);
      t.a = function(e) {
        var t = e.title,
          a = e.id,
          o = e.completeTodoTaskHandler,
          i = Object(c.useState)(!1),
          r = Object(n.a)(i, 2),
          d = r[0],
          s = r[1];
        return l.a.createElement(
          "div",
          { className: "TodoListItem" },
          l.a.createElement(
            "label",
            null,
            l.a.createElement("input", {
              type: "checkbox",
              checked: d,
              onChange: function() {
                s(!d), o({ id: a });
              }
            }),
            l.a.createElement("span", { className: "checkmark" }),
            t
          )
        );
      };
    },
    19: function(e, t, a) {},
    21: function(e, t, a) {},
    27: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        l = a(18);
      a(21);
      t.default = function(e) {
        var t = e.payload,
          a = void 0 === t ? [] : t,
          n = e.completeTodoTaskHandler;
        return c.a.createElement(
          "div",
          { className: "TodoList" },
          c.a.createElement(
            "ul",
            null,
            !!a.length &&
              a.map(function(e) {
                return c.a.createElement(
                  "li",
                  { key: "todolist".concat(e.id) },
                  c.a.createElement(l.a, {
                    title: e.title,
                    id: e.id,
                    completeTodoTaskHandler: n
                  })
                );
              })
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=1.f195cd3c.chunk.js.map