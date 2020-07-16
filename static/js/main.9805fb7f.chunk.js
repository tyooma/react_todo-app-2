(this["webpackJsonpreact_todo-app-2"]=this["webpackJsonpreact_todo-app-2"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),o=n.n(l),r=n(6),u=n(3),i=function(e){var t=Object(a.useRef)(null);return c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"title",placeholder:"What needs to be done?",ref:t,onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="",e.backgroundChanger())},maxLength:100}))},m=function(e){var t,n=e.todos,a=e.selectedFilter,l=e.onToggle,o=e.onRemove;return"all"===(t=a)||("active"===t&&(n=n.filter((function(e){return!1===e.completed}))),"completed"===t&&(n=n.filter((function(e){return!0===e.completed})))),c.a.createElement("ul",null,n.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),c.a.createElement("li",{className:t.join(" "),key:e.id},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:l.bind(null,e.id)}),c.a.createElement("span",{className:"todo-title"},e.title),c.a.createElement("i",{className:"material-icons grey-text",onClick:function(){return o(e.id)}},"delete")))})))},f=function(e){var t=e.todos,n=e.onFilter,a=e.onClear;return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"count"},"".concat(t.filter((function(e){return!1===e.completed})).length," items left")),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("button",{className:"button",onClick:function(){return n("all")},type:"button"},"All")),c.a.createElement("li",null,c.a.createElement("button",{className:"button",type:"button",onClick:function(){return n("active")}},"Active")),c.a.createElement("li",null,c.a.createElement("button",{className:"button",onClick:function(){return n("completed")},type:"button"},"Completed"))),c.a.createElement("button",{type:"button",className:"clear-completed button",onClick:a},"Clear completed"))},d=["#ef9a9a","#f48fb1","#ce93d8","#b39ddb","#9fa8da","#90caf9","#81d4fa","#80deea","#80cbc4","#a5d6a7","#c5e1a5","#e6ee9c","#fff59d","#ffe082","#ffcc80","#ffab91","#bcaaa4","#eeeeee"],s=(n(12),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)("all"),s=Object(u.a)(o,2),p=s[0],b=s[1],E=Object(a.useState)(""),g=Object(u.a)(E,2),v=g[0],h=g[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");l(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return c.a.createElement("div",{className:"app-wrapper",style:{backgroundColor:v}},c.a.createElement("div",{className:"app-container"},c.a.createElement("h1",null,"todos"),c.a.createElement(i,{onAdd:function(e){if(e.trim().length){var t={title:e,id:Date.now(),completed:!1};l((function(e){return[t].concat(Object(r.a)(e))}))}},backgroundChanger:function(){var e=d.sort((function(){return Math.random()-.5}));h(e[0])}}),c.a.createElement(m,{todos:n,selectedFilter:p,onToggle:function(e){l((function(t){return t.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}))},onRemove:function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))}}),n.length?c.a.createElement(f,{todos:n,onFilter:function(e){b(e)},onClear:function(){l((function(e){return e.filter((function(e){return!1===e.completed}))}))}}):c.a.createElement(c.a.Fragment,null)))});o.a.render(c.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9805fb7f.chunk.js.map