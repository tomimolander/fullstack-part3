(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var o=t(16),c=t.n(o),a=t(3),r=t(2),u=t(0),i=function(e){var n=e.value,t=e.onChange;return Object(u.jsxs)("div",{children:["filter shown with: ",Object(u.jsx)("input",{value:n,onChange:t})]})},s=function(e){return Object(u.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:e.valueName,onChange:e.onChangeName})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:e.valueNumber,onChange:e.onChangeNumber})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.persons,t=e.onButtonClick;return n.map((function(e,n){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[e.name," ",e.number]},e.name),Object(u.jsx)("button",{onClick:function(){return t(e.name)},children:"delete"})]},e.name)}))},d=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{style:{color:"green",background:"lightgrey",fontStyle:"solid",fontSize:20,borderStyle:"solid",borderRadius:10,padding:10,marginBottom:10},children:n})},b=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{style:{color:"red",background:"lightgrey",fontStyle:"solid",fontSize:20,borderStyle:"solid",borderRadius:10,padding:10,marginBottom:10},children:n})},j=t(4),f=t.n(j),m="/api/persons",h=function(){return f.a.get(m)},O=function(e){return f.a.post(m,e)},v=function(e,n){return f.a.put("".concat(m,"/").concat(e),n)},g=function(e){return f.a.delete("".concat(m,"/").concat(e))},p=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),j=Object(a.a)(c,2),f=j[0],m=j[1],p=Object(r.useState)(""),x=Object(a.a)(p,2),S=x[0],C=x[1],y=Object(r.useState)(""),w=Object(a.a)(y,2),k=w[0],N=w[1],B=Object(r.useState)(null),T=Object(a.a)(B,2),R=T[0],z=T[1],E=Object(r.useState)(null),I=Object(a.a)(E,2),J=I[0],L=I[1];Object(r.useEffect)((function(){h().then((function(e){o(e.data)}))}),[]);var A=""===k?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(d,{message:R}),Object(u.jsx)(b,{message:J}),Object(u.jsx)(i,{value:k,onChange:function(e){N(e.target.value)}}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(s,{onSubmit:function(e){e.preventDefault();var n={name:f,number:S};if(t.some((function(e){return e.name===f}))){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===f})).id;v(c,n).then((function(e){o(t.map((function(n){return n.id!==c?n:e.data}))),z("Updated ".concat(e.data.name,"'s phone number")),setTimeout((function(){z(null)}),5e3)})).catch((function(e){L("Information of ".concat(f," has already been removed from server")),o(t.filter((function(e){return e.id!==c}))),setTimeout((function(){L(null)}),5e3)}))}}else O(n).then((function(e){o(t.concat(e.data)),z("Added ".concat(e.data.name)),setTimeout((function(){z(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),L(e.response.data.error),setTimeout((function(){L(null)}),5e3)})),m(""),C("")},valueName:f,onChangeName:function(e){m(e.target.value)},valueNumber:S,onChangeNumber:function(e){C(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{persons:A,onButtonClick:function(e){var n=t.find((function(n){return n.name===e})).id;g(n).then((function(c){o(t.filter((function(e){return e.id!==n}))),z("Removed ".concat(e)),setTimeout((function(){z(null)}),5e3)}))}})]})};c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.57509b7a.chunk.js.map