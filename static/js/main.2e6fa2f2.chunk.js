(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{17:function(n,t,e){},23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r,c,a,o,i,d=e(0),l=e.n(d),s=e(9),b=e.n(s),u=(e(17),e(4)),j=e(2),x=e(3),p=x.a.div(r||(r=Object(j.a)(["\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  width: 400px;\n  margin: 40px auto;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: minmax(120px, auto) repeat(5, 100px);\n  box-shadow: 2px 2px 10px #333;\n  border-radius: 10px;\n"]))),O=x.a.div(c||(c=Object(j.a)(["\n  grid-column: 1 / -1;\n  background-color: rgba(60, 64, 67, 0.75);\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  padding: 10px;\n  word-wrap: break-word;\n  word-break: break-all;\n  text-align: right;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),h=x.a.div(a||(a=Object(j.a)(["\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 1.5rem;\n"]))),k=x.a.div(o||(o=Object(j.a)(["\n  color: white;\n  font-size: 2.5rem;\n"]))),g=x.a.button(i||(i=Object(j.a)(["\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px outset white;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.75);\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n\n  /*Fast form*/\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(function(n){var t=n.gridSpan;return t&&"grid-column:span ".concat(t,";")}),(function(n){return n.operation&&"background-color:gray;"}),(function(n){return n.control&&"background-color:skyblue;"}),(function(n){return n.equals&&"border-bottom-right-radius:10px; background-color:gray;"}),(function(n){return n.dot&&"border-bottom-left-radius:10px; background-color:skyblue;"})),f=e(1);function C(){var n=Object(d.useState)(""),t=Object(u.a)(n,2),e=t[0],r=t[1],c=Object(d.useState)(""),a=Object(u.a)(c,2),o=a[0],i=a[1],l=Object(d.useState)(""),s=Object(u.a)(l,2),b=s[0],j=s[1],x=function(n){var t=n.target.getAttribute("data");"."===t&&o.includes(".")||i(o+t)},C=function(n){if(""!==o){if(""!==e){var t=m();r(t)}else r(o);i(""),j(n.target.getAttribute("data"))}},m=function(){var n,t=parseFloat(e),r=parseFloat(o);if(!isNaN(t)&&!isNaN(r)){switch(b){case"/":n=t/r;break;case"*":n=t*r;break;case"+":n=t+r;break;case"-":n=t-r;break;default:return}return n}};return Object(f.jsxs)(p,{children:[Object(f.jsxs)(O,{children:[Object(f.jsxs)(h,{children:[e," ",b]}),Object(f.jsx)(k,{children:o})]}),Object(f.jsx)(g,{control:!0,gridSpan:2,onClick:function(){i(""),r(""),j("")},children:"AC"}),Object(f.jsx)(g,{control:!0,onClick:function(){i(String(o).slice(0,-1))},children:"Del"}),Object(f.jsx)(g,{data:"/",operation:!0,onClick:C,children:"/"}),Object(f.jsx)(g,{data:"7",onClick:x,children:"7"}),Object(f.jsx)(g,{data:"8",onClick:x,children:"8"}),Object(f.jsx)(g,{data:"9",onClick:x,children:"9"}),Object(f.jsx)(g,{data:"*",operation:!0,onClick:C,children:"*"}),Object(f.jsx)(g,{data:"4",onClick:x,children:"4"}),Object(f.jsx)(g,{data:"5",onClick:x,children:"5"}),Object(f.jsx)(g,{data:"6",onClick:x,children:"6"}),Object(f.jsx)(g,{data:"+",operation:!0,onClick:C,children:"+"}),Object(f.jsx)(g,{data:"1",onClick:x,children:"1"}),Object(f.jsx)(g,{data:"2",onClick:x,children:"2"}),Object(f.jsx)(g,{data:"3",onClick:x,children:"3"}),Object(f.jsx)(g,{data:"-",operation:!0,onClick:C,children:"-"}),Object(f.jsx)(g,{dot:!0,data:".",onClick:x,children:"."}),Object(f.jsx)(g,{data:"0",onClick:x,children:"0"}),Object(f.jsx)(g,{equals:!0,gridSpan:2,onClick:function(){var n=m();void 0!==n&&null!==n&&(i(n),r(""),j(""))},children:"="})]})}var m=function(){return Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(C,{})})};e(23);b.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2e6fa2f2.chunk.js.map