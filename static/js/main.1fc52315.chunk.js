(this["webpackJsonptask-app-hooks"]=this["webpackJsonptask-app-hooks"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(8),s=n.n(r),a=(n(13),n(0));var i=function(){return Object(a.jsx)("div",{children:"ToDos-App"})},u=n(7),d=n(5);n(15),n(16);var l=function(e){var t=e.value,n=e.onChange,o=e.handleAddNote;return Object(a.jsx)("input",{type:"text",value:t,onChange:function(e){n(e.target.value)},className:"input",placeholder:"Add Task...",onKeyPress:function(e){"Enter"===e.key&&o(t)}})};n(17);var j=function(e){var t=e.children,n=e.handleAddNote,o=e.inputText;return Object(a.jsx)("button",{className:"btn",onClick:function(){return n(o)},children:t})};var p=function(e){var t=e.handleAddNote,n=Object(o.useState)(""),c=Object(d.a)(n,2),r=c[0],s=c[1];return Object(a.jsxs)("header",{className:"TodoHeader",children:[Object(a.jsx)(l,{value:r,onChange:function(e){s(e)},handleAddNote:t}),Object(a.jsx)(j,{handleAddNote:t,inputText:r,children:"Add"})]})},b=(n(18),n(24));var f=function(e){var t=e.note,n=e.removeTask,o=e.toggleComplete;return Object(a.jsxs)("div",{className:"Note",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",checked:t.isComplete,onChange:function(){return o(t.id)}}),Object(a.jsx)("span",{className:t.isComplete?"complete":"",children:t.text})]}),Object(a.jsx)("button",{className:"rm-btn",onClick:function(){return n(t.id)},children:Object(a.jsx)(b.a,{size:"1.5em"})})]})};n(19);var h=function(e){var t=e.notes,n=e.removeTask,o=e.toggleComplete;return Object(a.jsx)("section",{className:"TodoBody",children:t.map((function(e){return Object(a.jsx)(f,{note:e,removeTask:n,toggleComplete:o},e.id)}))})};var v=function(e){var t=e.notes,n=t.reduce((function(e,t){return t.isComplete?e:e+1}),0),o=function(e,t){return 0===e?"There are no tasks.":0===t?"No tasks to do !":"".concat(t," pending tasks out of ").concat(e," to do.")}(t.length,n);return Object(a.jsx)("footer",{children:o})};n(20);var x=n(3),m=n.n(x),O=[{id:m()(),text:"note1",isComplete:!0},{id:m()(),text:"note2",isComplete:!0},{id:m()(),text:"note3",isComplete:!1}];var k=function(){var e=Object(o.useState)(O),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{className:"MainApp",children:[Object(a.jsx)(p,{handleAddNote:function(e){if(e.length>=3){var t={id:m()(),text:e,isComplete:!1},o=[].concat(Object(u.a)(n),[t]);c(o)}}}),Object(a.jsx)(h,{notes:n,removeTask:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},toggleComplete:function(e){var t=n.find((function(t){return t.id===e}));t.isComplete=!t.isComplete,c(Object(u.a)(n))}}),Object(a.jsx)(v,{notes:n})]})};var C=function(){return Object(a.jsx)("div",{})};var g=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(i,{}),Object(a.jsx)(k,{}),Object(a.jsx)(C,{})]})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.1fc52315.chunk.js.map