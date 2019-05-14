(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    23: function(e, a, t) {},
    25: function(e, a, t) {},
    29: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(1),
        c = t(0),
        r = t.n(c),
        s = (t(23),
        t(25),
        function(e) {
          var a = e.addTodoTaskHandler,
            t = e.toggleNewTaskPopup,
            s = Object(c.useState)(""),
            l = Object(n.a)(s, 2),
            o = l[0],
            u = l[1],
            d = Object(c.useRef)(),
            i = function() {
              a(o), t();
            };
          return (
            Object(c.useEffect)(function() {
              d.current.focus();
            }),
            r.a.createElement(
              "div",
              { className: "AddNewTaskPopup" },
              r.a.createElement(
                "div",
                { className: "inputWrapper" },
                r.a.createElement("input", {
                  type: "text",
                  onChange: function(e) {
                    return u(e.target.value);
                  },
                  value: o,
                  placeholder: "Add task",
                  ref: d,
                  onKeyPress: function(e) {
                    "Enter" === e.key && i();
                  }
                }),
                r.a.createElement(
                  "div",
                  { className: "saveTask", onClick: i },
                  "Save"
                )
              )
            )
          );
        });
      a.default = function(e) {
        var a = e.addTodoTaskHandler,
          t = Object(c.useState)(!1),
          l = Object(n.a)(t, 2),
          o = l[0],
          u = l[1],
          d = function() {
            return u(!o);
          };
        return r.a.createElement(
          c.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "AddNewTask", onClick: d },
            r.a.createElement("span", { className: "icon" }, "+"),
            "Add a new task"
          ),
          o &&
            r.a.createElement(
              c.Fragment,
              null,
              r.a.createElement(s, {
                addTodoTaskHandler: a,
                toggleNewTaskPopup: d
              }),
              r.a.createElement("div", {
                className: "AddNewTaskOverlay",
                onClick: d
              })
            )
        );
      };
    }
  }
]);
//# sourceMappingURL=3.8a4e44c5.chunk.js.map
