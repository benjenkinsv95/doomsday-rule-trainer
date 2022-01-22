(this["webpackJsonpdoomsday-rule-trainer"]=this["webpackJsonpdoomsday-rule-trainer"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a(24),n=a.n(s),c=(a(76),a(53)),i=a(7),d=a(8),l=a(108),o=(a(77),a(58)),j=a(0);var b=function(e){var t=e.variant,a=e.heading,s=e.message,n=Object(r.useState)(!0),c=Object(i.a)(n,2),d=c[0],l=c[1],b=Object(r.useState)(null),u=Object(i.a)(b,2),h=u[0],O=u[1];return console.log(h),Object(r.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return O(e),function(){clearTimeout(h)}}),[]),Object(j.jsx)(o.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:d,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(o.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:s})]})})},u=a(70),h=a(42),O=a(69),x=a(13),m=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(j.jsx)(x.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(x.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),f=Object(j.jsx)(j.Fragment,{}),g=function(e){var t=e.user;return Object(j.jsx)(h.a,{bg:"dark",variant:"dark",expand:"md",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)(x.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Doomsday Rule Trainer"})}),Object(j.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(u.a,{className:"ms-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),f,t?m:p]})})]})})},v=a(20),y=a.n(v),w=a(28),C="https://aqueous-atoll-85096.herokuapp.com",N="http://localhost:4741",S="localhost"===window.location.hostname?N:C,k=a(41),L=a.n(k),F=function(e,t,a){return L.a.post(S+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},I=function(e,t){return L.a.post(S+"/sign-in/",{credentials:{email:e,password:t}})},D=function(e){return L.a.delete(S+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},T=function(e,t,a){return L.a.patch(S+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},E=a(6),P=a(35),A=a(2),G={background:"linear-gradient(45deg, #e85c90, #dd72c1, #c08eea, #95a8ff, #5dbfff, #17d2ff, #14e2ff, #58efec)",color:"white",minHeight:"calc(100vh - ".concat("56px",")")},W=Object(A.a)(Object(A.a)({},{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%",margin:"0"}),G),R=function(e){var t=e.msgAlert,a=e.setUser,s=e.user,n=Object(r.useState)(""),c=Object(i.a)(n,2),l=c[0],o=c[1],b=Object(r.useState)(""),u=Object(i.a)(b,2),h=u[0],O=u[1],x=Object(r.useState)(""),m=Object(i.a)(x,2),p=m[0],f=m[1],g=Object(r.useState)(!1),v=Object(i.a)(g,2),C=v[0],N=v[1],S=function(){var e=Object(w.a)(y.a.mark((function e(r){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,F(l,h,p);case 4:return e.next=6,I(l,h);case 6:s=e.sent,a(s.data.user),localStorage.setItem("user",JSON.stringify(s.data.user)),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),N(!0),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(1),o(""),O(""),f(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return C||s?Object(j.jsx)(d.a,{to:"/train"}):Object(j.jsx)("div",{style:W,className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(E.a,{onSubmit:S,children:[Object(j.jsxs)(E.a.Group,{controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Email address"}),Object(j.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:l,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"Password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(E.a.Control,{required:!0,name:"passwordConfirmation",value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return f(e.target.value)}})]}),Object(j.jsx)(P.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},U=function(e){var t=e.msgAlert,a=e.setUser,s=e.user,n=Object(r.useState)(""),c=Object(i.a)(n,2),l=c[0],o=c[1],b=Object(r.useState)(""),u=Object(i.a)(b,2),h=u[0],O=u[1],x=Object(r.useState)(!1),m=Object(i.a)(x,2),p=m[0],f=m[1],g=function(){var e=Object(w.a)(y.a.mark((function e(r){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,I(l,h);case 4:s=e.sent,a(s.data.user),localStorage.setItem("user",JSON.stringify(s.data.user)),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),f(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),o(""),O(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return p||s?Object(j.jsx)(d.a,{to:"/train"}):Object(j.jsx)("div",{style:W,className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(E.a,{onSubmit:g,children:[Object(j.jsxs)(E.a.Group,{controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Email address"}),Object(j.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:l,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"Password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)}})]}),Object(j.jsx)(P.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},q=function(e){var t=e.msgAlert,a=e.clearUser,s=e.user,n=Object(r.useState)(!1),c=Object(i.a)(n,2),l=c[0],o=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),localStorage.removeItem("user"),a(),o(!0),e.next=6,D(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!s||l?Object(j.jsx)(d.a,{to:"/"}):""},B=function(e){var t=e.msgAlert,a=e.user,s=Object(r.useState)(""),n=Object(i.a)(s,2),c=n[0],l=n[1],o=Object(r.useState)(""),b=Object(i.a)(o,2),u=b[0],h=b[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),m=x[0],p=x[1],f=function(){var e=Object(w.a)(y.a.mark((function e(r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,T(c,u,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||m?Object(j.jsx)(d.a,{to:"/train"}):Object(j.jsx)("div",{style:W,className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(E.a,{onSubmit:f,children:[Object(j.jsxs)(E.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(E.a.Label,{children:"Old password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(E.a.Label,{children:"New Password"}),Object(j.jsx)(E.a.Control,{required:!0,name:"newPassword",value:u,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(P.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},M=a(50),H=a(43),J=a(22),Y=a(55),z=function(){return Object(j.jsxs)(J.a,{className:"bg-dark",children:[Object(j.jsxs)(J.a.Item,{className:"bg-dark",eventKey:"0",children:[Object(j.jsx)(J.a.Header,{children:"Century Anchor Days"}),Object(j.jsx)(J.a.Body,{children:Object(j.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Century"}),Object(j.jsx)("th",{children:"Anchor Day"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"1700 - 1799"}),Object(j.jsx)("td",{children:"Sunday"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"1800 - 1899"}),Object(j.jsx)("td",{children:"Friday"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"1900 - 1999"}),Object(j.jsx)("td",{children:"Wednesday"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"2000 - 2099"}),Object(j.jsx)("td",{children:"Tuesday"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"-"}),Object(j.jsx)("td",{children:"-"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"2100 - 2199"}),Object(j.jsx)("td",{children:"Sunday"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"2200 - 2299"}),Object(j.jsx)("td",{children:"Friday"})]})]})]})})]}),Object(j.jsxs)(J.a.Item,{className:"bg-dark",eventKey:"1",children:[Object(j.jsx)(J.a.Header,{children:"Memorable Doomsdays"}),Object(j.jsx)(J.a.Body,{children:Object(j.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Doomsdays"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"January"}),Object(j.jsx)("td",{children:"1/3 in common years and 1/4 in leap years"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"February's Last Day"}),Object(j.jsx)("td",{children:"2/28 or 2/29 in a leap year"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Pi Day"}),Object(j.jsx)("td",{children:"3/14"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Double Dates"}),Object(j.jsx)("td",{children:"4/4, 6/6, 8/8, 10/10, and 12/12"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"9-to-5 at 7-11"}),Object(j.jsx)("td",{children:"5/9, 7/11, 9/5, and 11/7"})]})]})]})})]}),Object(j.jsxs)(J.a.Item,{className:"bg-dark",eventKey:"2",children:[Object(j.jsx)(J.a.Header,{className:"bg-dark",children:"Weekdays As Numbers"}),Object(j.jsx)(J.a.Body,{children:Object(j.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Day"}),Object(j.jsx)("th",{children:"Number"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Sunday"}),Object(j.jsx)("td",{children:"0"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Monday"}),Object(j.jsx)("td",{children:"1"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Tuesday"}),Object(j.jsx)("td",{children:"2"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Wednesday"}),Object(j.jsx)("td",{children:"3"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Thursday"}),Object(j.jsx)("td",{children:"4"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Friday"}),Object(j.jsx)("td",{children:"5"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Saturday"}),Object(j.jsx)("td",{children:"6"})]})]})]})})]})]})},K=a(107),_=function(e){return e%2===1};var Q=function(){return e=new Date("1900-01-01T12:00:00"),t=new Date("2099-12-31T12:00:00"),new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()));var e,t},V=function(e){e.msgAlert;var t,a=Object(r.useState)(Q()),s=Object(i.a)(a,2),n=s[0],c=s[1],d=Object(r.useState)(""),l=Object(i.a)(d,2),o=l[0],b=l[1],u=Object(r.useState)(""),h=Object(i.a)(u,2),O=h[0],x=h[1],m=Object(r.useState)(""),p=Object(i.a)(m,2),f=p[0],g=p[1],v=Object(r.useState)(""),y=Object(i.a)(v,2),w=y[0],C=y[1],N=Object(r.useState)("-1"),S=Object(i.a)(N,2),k=S[0],L=S[1],F=Object(r.useState)("-1"),I=Object(i.a)(F,2),D=I[0],T=I[1],A=Object(r.useState)(""),G=Object(i.a)(A,2),R=G[0],U=G[1],q=Object(r.useState)(""),B=Object(i.a)(q,2),J=B[0],Y=B[1],V={startingNumber:Object(r.useRef)(null),firstOddOrEven:Object(r.useRef)(null),afterDivision:Object(r.useRef)(null),secondOddOrEven:Object(r.useRef)(null),modulo7:Object(r.useRef)(null),subtractFrom7:Object(r.useRef)(null),anchorDay:Object(r.useRef)(null),dayOfWeek:Object(r.useRef)(null)},X=n.toLocaleString("default",{month:"long"}),Z=n.getFullYear()%100,$=_(Z)?[Z+11,Z-17]:[Z],ee=$.map((function(e){return e/2})),te=[],ae=Object(M.a)(ee);try{for(ae.s();!(t=ae.n()).done;){var re=t.value;_(re)?te.push(re+11,re-17):te.push(re)}}catch(de){ae.e(de)}finally{ae.f()}var se=te.map((function(e){return e%7})),ne=se.map((function(e){return 7-e})),ce=new Date("".concat(n.getFullYear(),"-04-04T12:00:00")).toLocaleString("en-us",{weekday:"long"}),ie=n.toLocaleString("en-us",{weekday:"long"});Object(r.useEffect)((function(){var e;if(o!==Z)null===(e=V.startingNumber.current)||void 0===e||e.focus();else if($.includes(O))if(ee.includes(f))if(te.includes(w))if(se.includes(k))if(ne.includes(D)){if(R.toLowerCase()!==ce.toLowerCase()){var t;null===(t=V.anchorDay.current)||void 0===t||t.focus()}else if(J.toLowerCase()!==ie.toLowerCase()){var a;null===(a=V.dayOfWeek.current)||void 0===a||a.focus()}}else{var r;null===(r=V.subtractFrom7.current)||void 0===r||r.focus()}else{var s;null===(s=V.modulo7.current)||void 0===s||s.focus()}else{var n;null===(n=V.secondOddOrEven.current)||void 0===n||n.focus()}else{var c;null===(c=V.afterDivision.current)||void 0===c||c.focus()}else{var i;null===(i=V.firstOddOrEven.current)||void 0===i||i.focus()}}));return Object(j.jsx)("div",{style:W,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-sm-10 col-md-10 mx-auto",children:Object(j.jsxs)(H.a,{className:"text-center mt-4 pb-2",bg:"dark",text:"white",children:[Object(j.jsxs)(H.a.Body,{children:[Object(j.jsx)(H.a.Title,{children:Object(j.jsxs)("h2",{children:["What day of the week is"," ",Object(j.jsxs)("span",{className:"text-primary",children:[X," ",n.getDate()," ",n.getFullYear()]})," ","on?"]})}),Object(j.jsxs)("h2",{children:["First find the ",Object(j.jsx)("span",{className:"text-secondary",children:"anchor day"})]}),Object(j.jsxs)(E.a,{children:[Object(j.jsxs)(E.a.Group,{className:"my-3",controlId:"startingNumber",children:[Object(j.jsx)(E.a.Label,{children:"Enter the starting number"}),Object(j.jsx)("br",{}),Object(j.jsx)(E.a.Text,{className:"text-white",children:"The starting number is the last two digits of the year."}),Object(j.jsx)(E.a.Control,{className:"mt-1 bg-dark text-primary",type:"number",placeholder:"Enter Starting Number",value:o,onChange:function(e){return b(parseInt(e.target.value))},disabled:o===Z,ref:V.startingNumber})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat(o===Z?"":"d-none"),controlId:"oddOrEven1",children:[Object(j.jsx)(E.a.Label,{children:"Odd or Even?"}),Object(j.jsx)("br",{}),Object(j.jsx)(E.a.Text,{className:"text-white",children:"If the number is odd add 11 or subtract 17 (whichever is easier)."}),Object(j.jsx)(E.a.Control,{className:"mt-1 bg-dark text-primary",type:"number",placeholder:"Enter Answer",value:O,onChange:function(e){return x(parseInt(e.target.value))},disabled:$.includes(O),ref:V.firstOddOrEven})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat($.includes(O)?"":"d-none"),controlId:"divide",children:[Object(j.jsx)(E.a.Label,{children:"Divide by 2"}),Object(j.jsx)(E.a.Control,{className:"mt-1 bg-dark text-primary",type:"number",placeholder:"Enter Answer",value:f,onChange:function(e){return g(parseInt(e.target.value))},disabled:ee.includes(f),ref:V.afterDivision})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat(ee.includes(f)?"":"d-none"),controlId:"oddOrEven2",children:[Object(j.jsx)(E.a.Label,{children:"Odd or Even?"}),Object(j.jsx)("br",{}),Object(j.jsx)(E.a.Text,{className:"text-white",children:"If the number is odd add 11 or subtract 17 (whichever is easier)."}),Object(j.jsx)(E.a.Control,{className:"mt-1 bg-dark text-primary",type:"number",placeholder:"Enter Answer",value:w,onChange:function(e){return C(parseInt(e.target.value))},disabled:te.includes(w),ref:V.secondOddOrEven})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat(te.includes(w)?"":"d-none"),controlId:"modulo7",children:[Object(j.jsx)(E.a.Label,{children:"Modulo 7"}),Object(j.jsx)("br",{}),Object(j.jsx)(E.a.Text,{className:"text-white",children:"Find the remainder after dividing by 7"}),Object(j.jsx)("br",{}),Object(j.jsx)(K.a,{className:"mt-1 text-white","aria-label":"First group",ref:V.modulo7,children:[0,1,2,3,4,5,6].map((function(e){return Object(j.jsx)(P.a,{variant:se.includes(k)&&k===e?"primary":"outline-primary",disabled:se.includes(k),onClick:function(){return L(e)},children:e},e)}))})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat(se.includes(k)?"":"d-none"),controlId:"subract7",children:[Object(j.jsx)(E.a.Label,{children:"Subtract from 7"}),Object(j.jsx)("br",{}),Object(j.jsx)(E.a.Text,{className:"text-white",children:"Subtract result from 7"}),Object(j.jsx)("br",{}),Object(j.jsx)(K.a,{className:"mt-1 text-white","aria-label":"First group",ref:V.subtractFrom7,children:[1,2,3,4,5,6,7].map((function(e){return Object(j.jsx)(P.a,{disabled:ne.includes(D),variant:ne.includes(D)&&D===e?"primary":"outline-primary",onClick:function(){return T(e)},children:e},e)}))})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat(ne.includes(D)?"":"d-none"),controlId:"modulo7",children:[Object(j.jsxs)(E.a.Label,{children:["Count Forward ",ne.length&&ne[0]," Days"]}),Object(j.jsx)("br",{}),Object(j.jsxs)(E.a.Text,{className:"text-white",children:["Count forward ",ne.length&&ne[0]," days from the century's anchor day to get the year ",Object(j.jsx)("span",{className:"text-secondary",children:n.getFullYear()}),"'s anchor day."]}),Object(j.jsx)("br",{}),Object(j.jsx)(K.a,{className:"mt-1 text-white","aria-label":"First group",ref:V.anchorDay,children:["Sunday","Monday","Tuesday","Wednesday"].map((function(e,t){return Object(j.jsx)(P.a,{variant:R.toLowerCase()===ce.toLowerCase()&&R.toLowerCase()===e.toLowerCase()?"primary":"outline-primary",disabled:R.toLowerCase()===ce.toLowerCase(),onClick:function(){return U(e)},children:e},t)}))}),Object(j.jsx)(K.a,{className:"mt-1 text-white","aria-label":"First group",children:["Thursday","Friday","Saturday"].map((function(e,t){return Object(j.jsx)(P.a,{variant:R.toLowerCase()===ce.toLowerCase()&&R.toLowerCase()===e.toLowerCase()?"primary":"outline-primary",disabled:R.toLowerCase()===ce.toLowerCase(),onClick:function(){return U(e)},children:e},t)}))})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3 ".concat(R.toLowerCase()===ce.toLowerCase()?"":"d-none"),controlId:"modulo7",children:[Object(j.jsx)(E.a.Label,{children:"Calculate Day of Week"}),Object(j.jsx)("br",{}),Object(j.jsx)(E.a.Text,{className:"text-white",children:"Use the doomsday number to calculate the day of the week."}),Object(j.jsx)("br",{}),Object(j.jsx)(K.a,{className:"mt-1 text-white","aria-label":"First group",ref:V.dayOfWeek,children:["Sunday","Monday","Tuesday","Wednesday"].map((function(e,t){return Object(j.jsx)(P.a,{variant:J.toLowerCase()===ie.toLowerCase()&&J.toLowerCase()===e.toLowerCase()?"primary":"outline-primary",disabled:J.toLowerCase()===ie.toLowerCase(),onClick:function(){return Y(e)},children:e},t)}))}),Object(j.jsx)(K.a,{className:"mt-1 text-white","aria-label":"First group",children:["Thursday","Friday","Saturday"].map((function(e,t){return Object(j.jsx)(P.a,{variant:J.toLowerCase()===ie.toLowerCase()&&J.toLowerCase()===e.toLowerCase()?"primary":"outline-primary",disabled:J.toLowerCase()===ie.toLowerCase(),onClick:function(){return Y(e)},children:e},t)}))})]})]})]}),Object(j.jsxs)(H.a.Footer,{children:[Object(j.jsx)(P.a,{variant:"secondary",size:"lg",onClick:function(){return c(Q()),b(""),x(""),g(""),C(""),L("-1"),T("-1"),U(""),void Y("")},children:"New Date"}),Object(j.jsx)(z,{})]})]})})})})})},X=function(e){return e.user?Object(j.jsx)(d.a,{to:"train"}):Object(j.jsxs)("div",{style:W,children:[Object(j.jsx)("h1",{children:"Doomsday Rule Trainer"}),Object(j.jsx)("h2",{className:"mb-3",children:"Sign In to start training!"}),Object(j.jsx)(x.b,{to:"/sign-in",children:Object(j.jsx)("button",{className:"btn btn-dark btn-lg",children:"Sign In"})})]})},Z=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)([]),o=Object(i.a)(n,2),u=o[0],h=o[1],O=function(e){var t=e.heading,a=e.message,r=e.variant,s=Object(l.a)();h((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:a,variant:r,id:s}])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{user:a}),u.map((function(e){return Object(j.jsx)(b,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/sign-up",element:Object(j.jsx)(R,{msgAlert:O,setUser:s})}),Object(j.jsx)(d.b,{path:"/sign-in",element:Object(j.jsx)(U,{msgAlert:O,setUser:s})}),Object(j.jsx)(d.b,{path:"/sign-out",element:Object(j.jsx)(q,{msgAlert:O,clearUser:function(){return s(null)},user:a})}),Object(j.jsx)(d.b,{path:"/change-password",element:Object(j.jsx)(B,{msgAlert:O,user:a})}),Object(j.jsx)(d.b,{path:"/",element:Object(j.jsx)(X,{user:a})}),Object(j.jsx)(d.b,{path:"/train",element:Object(j.jsx)(V,{msgAlert:O,user:a})})]})})]})},$=Object(j.jsx)(x.a,{basename:"/doomsday-rule-trainer",children:Object(j.jsx)(Z,{})});n.a.render($,document.getElementById("root"))},76:function(e,t,a){},77:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.a35eb832.chunk.js.map