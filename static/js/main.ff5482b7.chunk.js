(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n(7),j=n.n(a),i=n(38),o=n(22),s=n(34),l=n.n(s);var u=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(l.a,{}),"Keeper"]})})};var b=function(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},O=n(36),d=n.n(O);var h=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(c.jsx)(d.a,{})})]})},x=n(26),f=n(33),p=n(37),v=n.n(p),m=n(70),g=n(71);var k=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],j=n[1],i=Object(r.useState)({title:"",content:""}),s=Object(o.a)(i,2),l=s[0],u=s[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,c))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[a?Object(c.jsx)("input",{name:"title",onChange:b,value:l.title,placeholder:"Title"}):null,Object(c.jsx)("textarea",{name:"content",onClick:function(){j(!0)},onChange:b,value:l.content,placeholder:"Take a note...",rows:a?3:1}),Object(c.jsx)(g.a,{in:a,children:Object(c.jsx)(m.a,{onClick:function(t){e.onAdd(l),u({title:"",content:""}),t.preventDefault()},children:Object(c.jsx)(v.a,{})})})]})})};var C=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];function j(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)(k,{onAdd:function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(c.jsx)(h,{id:t,title:e.title,content:e.content,onDelete:j},t)})),Object(c.jsx)(b,{})]})};j.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.ff5482b7.chunk.js.map