(this["webpackJsonpreact_todo-app-2"]=this["webpackJsonpreact_todo-app-2"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),r=n(2),u=n(7),i=n(4),m=function(e){var t=e.onAdd,n=e.backgroundChanger,o=e.checkAllHandler,l=e.color,r=Object(a.useRef)(null);return c.a.createElement("div",{className:"input-field"},c.a.createElement("i",{className:"material-icons expand-icon",onClick:function(){return o()},style:{backgroundColor:l}},"expand_more"),c.a.createElement("input",{type:"text",id:"title",placeholder:"What needs to be done?",ref:r,onKeyPress:function(e){"Enter"===e.key&&(t(r.current.value),r.current.value="",n())},maxLength:100}))},d=function(e){var t,n=e.todos,a=e.selectedFilter,o=e.onToggle,l=e.onRemove;return"all"===(t=a)||("active"===t&&(n=n.filter((function(e){return!1===e.completed}))),"completed"===t&&(n=n.filter((function(e){return!0===e.completed})))),c.a.createElement("ul",null,n.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),c.a.createElement("li",{className:t.join(" "),key:e.id},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:o.bind(null,e.id)}),c.a.createElement("span",{className:"todo-title"},e.title),c.a.createElement("i",{className:"material-icons grey-text",onClick:function(){return l(e.id)}},"delete")))})))},f=function(e){var t=e.todos,n=e.onFilter,a=e.onClear;return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"count"},"".concat(t.filter((function(e){return!1===e.completed})).length," items left")),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("button",{className:"button",onClick:function(){return n("all")},type:"button"},"All")),c.a.createElement("li",null,c.a.createElement("button",{className:"button",type:"button",onClick:function(){return n("active")}},"Active")),c.a.createElement("li",null,c.a.createElement("button",{className:"button",onClick:function(){return n("completed")},type:"button"},"Completed"))),c.a.createElement("button",{type:"button",className:"clear-completed button",onClick:a},"Clear completed"))},s=["#ef9a9a","#f48fb1","#ce93d8","#b39ddb","#9fa8da","#90caf9","#81d4fa","#80deea","#80cbc4","#a5d6a7","#c5e1a5","#e6ee9c","#fff59d","#ffe082","#ffcc80","#ffab91","#bcaaa4","#eeeeee"],p=(n(13),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)("all"),p=Object(i.a)(l,2),b=p[0],E=p[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),h=v[0],k=v[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");o(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return c.a.createElement("div",{className:"app-wrapper",style:{backgroundColor:h}},c.a.createElement("div",{className:"app-container"},c.a.createElement("h1",null,"todos"),c.a.createElement(m,{onAdd:function(e){if(e.trim().length){var t={title:e,id:Date.now(),completed:!1};o((function(e){return[t].concat(Object(u.a)(e))}))}},backgroundChanger:function(){var e=s.sort((function(){return Math.random()-.5}));k(e[0])},checkAllHandler:function(){n.every((function(e){return!0===e.completed}))?o((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})}))})):o((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})}))}))},color:h}),c.a.createElement(d,{todos:n,selectedFilter:b,onToggle:function(e){o((function(t){return t.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}))},onRemove:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))}}),n.length?c.a.createElement(f,{todos:n,onFilter:function(e){E(e)},onClear:function(){o((function(e){return e.filter((function(e){return!1===e.completed}))}))}}):c.a.createElement(c.a.Fragment,null)))});l.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d65e4e54.chunk.js.map