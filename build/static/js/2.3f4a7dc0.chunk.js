(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    18: function(e, t, n) {
      "use strict";
      var a = n(1),
        c = n(0),
        l = n.n(c);
      n(19);
      t.a = function(e) {
        var t = e.title,
          n = e.id,
          i = e.completeTodoTaskHandler,
          r = Object(c.useState)(!1),
          u = Object(a.a)(r, 2),
          o = u[0],
          s = u[1];
        return l.a.createElement(
          "div",
          { className: "TodoListItem" },
          l.a.createElement(
            "label",
            null,
            l.a.createElement("input", {
              type: "checkbox",
              checked: o,
              onChange: function() {
                s(!o), i({ id: n });
              }
            }),
            l.a.createElement("span", { className: "checkmark" }),
            t
          )
        );
      };
    },
    19: function(e, t, n) {},
    28: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        c = n.n(a),
        l = n(18);
      t.default = function(e) {
        var t = e.list,
          n = void 0 === t ? [] : t;
        return c.a.createElement(
          "div",
          null,
          c.a.createElement("div", null, "Completed List"),
          c.a.createElement(
            "ul",
            null,
            n.map(function(e, t) {
              return c.a.createElement(l.a, { title: e.title, id: e.id });
            })
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=2.3f4a7dc0.chunk.js.map
