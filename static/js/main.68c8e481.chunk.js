(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=(a(79),a(12)),l=(a(80),Object(n.createContext)()),j=function(e){var t=e.reducer,a=e.initial,r=e.children;return Object(c.jsx)(l.Provider,{value:Object(n.useReducer)(t,a),children:r})},u=function(){return Object(n.useContext)(l)},d=a(61),b=a.n(d),O=a(16),h=a(145),v=a(105),f=a(154),x=a(156),m=a(153),p=a(149),S=a(155);a(98);var g=function(){var e,t,a=u(),s=Object(o.a)(a,2),i=s[0],l=i.response,j=i.score,d=s[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),y=g[0],_=g[1],E=Object(n.useState)(""),N=Object(o.a)(E,2),C=(N[0],N[1],r.a.useState({open:!1,vertical:"bottom",horizontal:"left"})),T=Object(o.a)(C,2),w=T[0],q=T[1],z=(w.vertical,w.horizontal,w.open,Object(n.useState)(0)),R=Object(o.a)(z,2),D=R[0],A=R[1],k=Object(n.useState)(!1),P=Object(o.a)(k,2),F=P[0],L=P[1],U=l.length-1,B=null===(e=l[D])||void 0===e?void 0:e.answers;return Object(c.jsxs)("div",{className:"quiz",children:[Object(c.jsxs)(h.a,{variant:"outlined",className:"quiz__container",children:[Object(c.jsxs)("div",{className:"quiz__inner1",children:[Object(c.jsxs)("div",{className:"quiz__status",children:[Object(c.jsxs)("span",{children:["Score : ",j]}),Object(c.jsxs)("p",{children:["Q.No : ",D+1,"/",U+1]})]}),Object(c.jsx)("div",{className:"quiz__question",children:Object(c.jsx)("p",{children:null===(t=l[D])||void 0===t?void 0:t.question})}),Object(c.jsx)("div",{className:"quiz__options",children:Object(c.jsxs)("div",{className:"quiz__option",children:[Object(c.jsx)("strong",{children:Object(c.jsx)("h3",{children:"Answers :"})}),void 0!==B&&Object(c.jsx)(v.a,{component:"fieldset",children:Object(c.jsx)(f.a,{"aria-label":"Answers",name:"answers",value:y,onChange:function(e){return _(e.target.value)},children:Object.values(B).map((function(e){return null===e?"":Object(c.jsx)(x.a,{value:e,control:Object(c.jsx)(m.a,{}),label:e},e)}))})})]})})]}),Object(c.jsx)("div",{className:"quiz__inner2",children:Object(c.jsx)(p.a,{style:{marginLeft:20,marginRight:20},variant:"contained",color:"secondary",onClick:function(){return function(){var e;q({open:!0}),Object.keys(null===(e=l[D])||void 0===e?void 0:e.answers).find((function(e){var t;return(null===(t=l[D])||void 0===t?void 0:t.answers[e])===y}))===l[D].correct_answer?(d({type:"SET_SCORE"}),A(D+1),L(!1)):(d({type:"REDUCE_SCORE"}),A(D+1),L(!0)),D===U&&d({type:"SET_RESPONSE_UNDEFINED",final_show:!0})}()},children:"Submit"})})]}),Object(c.jsx)(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:w.open,onClose:function(){q(Object(O.a)(Object(O.a)({},w),{},{open:!1}))},message:F?"Incorrect Answer":"Correct Answer"},w.vertical+w.horizontal)]})},y=a(23),_=a(111),E=a(109),N=a(157),C=a(108),T=a(151),w=a(158),q=a(152);a(102);var z=function(){var e=u(),t=Object(o.a)(e,2),a=t[0].response,r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=(i[1],Object(n.useState)("")),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),x=f[0],m=f[1],S=Object(n.useState)(""),g=Object(o.a)(S,2),z=g[0],R=g[1],D=Object(n.useState)(""),A=Object(o.a)(D,2),k=A[0],P=A[1],F=Object(n.useState)(""),L=Object(o.a)(F,2),U=L[0],B=L[1],I=Object(n.useState)(!1),Q=Object(o.a)(I,2),Y=Q[0],K=Q[1],V=Object(n.useState)(!1),X=Object(o.a)(V,2),Z=X[0],H=X[1],J={category:b,difficulty:x,questions:z,chips_value:l,name:k,email:U};return Object(y.a)(),Object(n.useEffect)((function(){return void 0!==a&&H(!1)}),[a]),Object(c.jsxs)("div",{className:"category",style:{justifyContent:Y&&"center",transform:void 0===a?"translateY(0px)":"translateY(-999px)"},children:[Y?"":Object(c.jsx)("p",{children:"Questions will be random according to the category you choose !"}),Object(c.jsxs)("div",{className:"category__options",children:[Object(c.jsxs)(v.a,{className:"category__form",children:[Object(c.jsx)(_.a,{children:"Category"}),Object(c.jsxs)(E.a,{defaultValue:"",disabled:Y,onChange:function(e){return O(e.target.value)},children:[Object(c.jsx)(N.a,{value:"any",children:"Any Category"}),Object(c.jsx)(N.a,{value:"linux",children:"Linux"}),Object(c.jsx)(N.a,{value:"bash",children:"BASH"}),Object(c.jsx)(N.a,{value:"uncategorized",children:"Uncategorized"}),Object(c.jsx)(N.a,{value:"docker",children:"Docker"}),Object(c.jsx)(N.a,{value:"sql",children:"SQL"}),Object(c.jsx)(N.a,{value:"cms",children:"CMS"}),Object(c.jsx)(N.a,{value:"code",children:"Code"}),Object(c.jsx)(N.a,{value:"devops",children:"DevOps"})]}),Object(c.jsx)(C.a,{children:""===b?"Select Something to proceed":"You have selected ".concat(b)})]}),Object(c.jsxs)(v.a,{className:"category__form",children:[Object(c.jsx)(_.a,{children:"Difficulty"}),Object(c.jsxs)(E.a,{defaultValue:"",onChange:function(e){return m(e.target.value)},disabled:Y,children:[Object(c.jsx)(N.a,{value:"random",children:"Any"}),Object(c.jsx)(N.a,{value:"easy",children:"Easy"}),Object(c.jsx)(N.a,{value:"medium",children:"Medium"}),Object(c.jsx)(N.a,{value:"hard",children:"Hard"})]}),Object(c.jsx)(C.a,{children:""===x?"Select Something to proceed":"You have selected ".concat(x)})]}),Object(c.jsxs)(v.a,{className:"category__form",children:[Object(c.jsx)(_.a,{children:"Number of questions"}),Object(c.jsx)(E.a,{defaultValue:"",disabled:Y,onChange:function(e){return R(e.target.value)},children:[5,10,15,20].map((function(e,t){return Object(c.jsx)(N.a,{value:e,children:e},t)}))}),Object(c.jsx)(C.a,{children:""===z?"Select Something to proceed":"You have selected ".concat(z)})]}),!Y&&Object(c.jsx)(p.a,{variant:"contained",color:"secondary",style:{marginTop:20},onClick:function(){""!==J.category&&""!==J.difficulty&&""!==J.questions?K(!0):alert("Select the options to proceed forward !!!")},children:"Next"})]}),Object(c.jsx)("form",{className:"category__user",onSubmit:function(e){e.preventDefault(),""!==J.name&&""!==J.email?(H(!0),r({type:"SET_STATE",datas:J})):alert("Enter the details to continue")},style:{transform:Y?"translateX(0px)":"translateX(1000px)",display:Y?"flex":"none"},children:Object(c.jsxs)("div",{className:"category__form",children:[Object(c.jsx)(T.a,{helperText:"Please enter your name",variant:"outlined",label:"Name",style:{flex:1,marginBottom:20},onChange:function(e){return P(e.target.value)}}),Object(c.jsx)(T.a,{variant:"outlined",label:"E-mail",helperText:"Reults will be sent to your email",type:"email",style:{flex:1,marginBottom:20},onChange:function(e){return B(e.target.value)}}),Object(c.jsx)(p.a,{variant:"contained",color:"secondary",type:"submit",children:"Start"}),Object(c.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return K(!1)},children:"Back"})]})}),Object(c.jsx)(w.a,{open:Z&&void 0===a,children:Object(c.jsx)(q.a,{color:"inherit"})})]})};a(103);var R=function(){var e=u(),t=Object(o.a)(e,2),a=t[0],n=a.data,r=a.score,s=t[1];return Object(c.jsx)("div",{className:"final",children:Object(c.jsxs)("div",{className:"final__container",children:[Object(c.jsxs)("p",{children:[null===n||void 0===n?void 0:n.name,"'s Score is "," ",r]}),Object(c.jsx)(p.a,{variant:"contained",onClick:function(){s({type:"SET_DEFAULT"})},color:"secondary",children:"Play Again"})]})})};var D=function(){var e=u(),t=Object(o.a)(e,2),a=t[0],r=a.data,s=a.response,i=a.final,l=t[1];return Object(n.useEffect)((function(){void 0!==r&&b.a.get("https://quizapi.io/api/v1/questions?apiKey=".concat("8QOzZnKgftwBO9RKZSzhsClUwOjwQ8lZLTXR5EfK","&limit=").concat(null===r||void 0===r?void 0:r.questions,"&difficult=").concat(null===r||void 0===r?void 0:r.difficulty)).then((function(e){return l({type:"SET_RESPONSE",response:e.data})})).catch((function(e){return console.log(e)}))}),[r,l]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(z,{}),void 0!==s&&Object(c.jsx)(g,{}),i&&Object(c.jsx)(R,{})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,159)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},k={data:void 0,final:!1,score:0,response:void 0},P=function(e,t){switch(t.type){case"SET_DEFAULT":return{data:void 0,response:void 0,final:!1,score:0};case"SET_RESPONSE":return Object(O.a)(Object(O.a)({},e),{},{response:t.response});case"SET_RESPONSE_UNDEFINED":return Object(O.a)(Object(O.a)({},e),{},{response:void 0,final:t.final_show});case"SET_STATE":return Object(O.a)(Object(O.a)({},e),{},{data:t.datas});case"SET_SCORE":return Object(O.a)(Object(O.a)({},e),{},{score:e.score+1});case"REDUCE_SCORE":return Object(O.a)(Object(O.a)({},e),{},{score:e.score-1});default:return e}};i.a.render(Object(c.jsx)(j,{initial:k,reducer:P,children:Object(c.jsx)(D,{})}),document.getElementById("root")),A()},79:function(e,t,a){},80:function(e,t,a){},98:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.68c8e481.chunk.js.map