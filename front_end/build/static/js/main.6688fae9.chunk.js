(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,t){},129:function(e,t){},147:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(9),s=a.n(n),i=a(178),l=a(182),r=a(183),o=a(11),j=a(83),d=a(53),b=a.n(d),m=a(3),u=Object(c.createContext)(),O=Object(j.io)("https://mvvideo-chat-app.herokuapp.com/"),h=function(e){var t=e.children,a=Object(c.useState)(null),n=Object(o.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)(""),r=Object(o.a)(l,2),j=r[0],d=r[1],h=Object(c.useState)({}),x=Object(o.a)(h,2),f=x[0],p=x[1],g=Object(c.useState)(!1),v=Object(o.a)(g,2),C=v[0],w=v[1],y=Object(c.useState)(!1),N=Object(o.a)(y,2),k=N[0],S=N[1],I=Object(c.useState)(""),V=Object(o.a)(I,2),A=V[0],B=V[1],E=Object(c.useRef)(),R=Object(c.useRef)(),W=Object(c.useRef)();Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){i(e),E.current.srcObject=e})),O.on("me",(function(e){return d(e)})),O.on("calluser",(function(e){var t=e.from,a=e.name,c=e.signal;p({isReceivedCall:!0,from:t,name:a,signal:c})}))}),[]);return Object(m.jsx)(u.Provider,{value:{call:f,callAccepted:C,myVideo:E,userVideo:R,stream:s,name:A,setName:B,callEnded:k,me:j,callUser:function(e){var t=new b.a({initiator:!0,trickle:!1,stream:s});t.on("signal",(function(t){O.emit("calluser",{userToCall:e,signalData:t,from:j,name:A})})),t.on("stream",(function(e){R.current.srcObject=e})),O.on("callaccepted",(function(e){w(!0),t.signal(e)})),W.current=t},leaveCall:function(){S(!0),W.current.destroy(),window.location.reload()},answerCall:function(){w(!0);var e=new b.a({initiator:!1,trickle:!1,stream:s});e.on("signal",(function(e){O.emit("answercall",{signal:e,to:f.from})})),e.on("stream",(function(e){R.current.srcObject=e})),e.signal(f.signal),W.current=e}},children:t})},x=function(){var e=Object(c.useContext)(u),t=e.name,a=e.callAccepted,n=e.myVideo,s=e.userVideo,o=e.callEnded,j=e.stream,d=e.call;return Object(m.jsxs)(i.a,{container:!0,className:"gridcontainer",children:[j&&Object(m.jsx)(l.a,{className:"paper",children:Object(m.jsxs)(i.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(r.a,{variant:"h5",gutterBottom:!0,children:t||"Name"}),Object(m.jsx)("video",{playsInline:!0,muted:!0,ref:n,autoPlay:!0,className:"video"})]})}),a&&!o&&Object(m.jsx)(l.a,{className:"paper",children:Object(m.jsxs)(i.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(r.a,{variant:"h5",gutterBottom:!0,children:d.name||"Name"}),Object(m.jsx)("video",{playsInline:!0,ref:s,autoPlay:!0,className:"video"})]})})]})},f=a(187),p=a(188),g=a(86),v=a.n(g),C=a(184),w=a(185),y=a(186),N=function(e){var t=e.children,a=Object(c.useContext)(u),n=a.me,s=a.callAccepted,j=a.name,d=a.setName,b=a.callEnded,O=a.leaveCall,h=a.callUser,x=Object(c.useState)(""),g=Object(o.a)(x,2),N=g[0],k=g[1];return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(l.a,{elevation:10,className:"paper1",children:[Object(m.jsx)("form",{className:"root",noValidate:!0,autoComplete:"off",children:Object(m.jsxs)(i.a,{container:!0,className:"gridContainer",children:[Object(m.jsxs)(i.a,{item:!0,xs:12,md:6,style:{padding:"20px"},children:[Object(m.jsx)(r.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(m.jsx)(f.a,{label:"Name",value:j,onChange:function(e){return d(e.target.value)},fullWidth:!0}),Object(m.jsx)(v.a,{text:n,style:{marginTop:"20px"},children:Object(m.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(m.jsx)(C.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(m.jsxs)(i.a,{item:!0,xs:12,md:6,style:{padding:"20px"},children:[Object(m.jsx)(r.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(m.jsx)(f.a,{label:"ID to call",value:N,onChange:function(e){return k(e.target.value)},fullWidth:!0}),s&&!b?Object(m.jsx)(p.a,{variant:"contained",color:"secondary",startIcon:Object(m.jsx)(w.a,{fontSize:"large"}),fullWidth:!0,onClick:O,style:{marginTop:"20px"},children:"Hang Up"}):Object(m.jsx)(p.a,{variant:"contained",color:"primary",startIcon:Object(m.jsx)(y.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return h(N)},style:{marginTop:"20px"},children:"Call"})]})]})}),t]})})},k=function(){var e=Object(c.useContext)(u),t=e.answerCall,a=e.call,n=e.callAccepted;return Object(m.jsx)(m.Fragment,{children:a.isReceivedCall&&!n&&Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(m.jsxs)("h1",{children:[a.name," is calling: "]}),Object(m.jsx)(p.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},S=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"appbar",children:[Object(m.jsx)("img",{src:"/images/logo192.png",alt:"logo",className:"logo"}),Object(m.jsx)("h1",{align:"center",className:"apptitle",children:"MV Connect"})]}),Object(m.jsx)(x,{}),Object(m.jsx)(N,{children:Object(m.jsx)(k,{})})]}),Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{class:"btn",href:"http://google.com/+",children:Object(m.jsx)("i",{class:"fa fa-google-plus"})}),Object(m.jsx)("a",{class:"btn",href:"https://www.facebook.com/marivignesh01/",children:Object(m.jsx)("i",{class:"fa fa-facebook"})}),Object(m.jsx)("a",{class:"btn",href:"https://www.linkedin.com/in/marivignesh/",children:Object(m.jsx)("i",{class:"fa fa-linkedin"})}),Object(m.jsx)("a",{class:"btn",href:"https://twitter.com/marivigneshr499",children:Object(m.jsx)("i",{class:"fa fa-twitter"})}),Object(m.jsx)("a",{class:"btn",href:"https://www.instagram.com/marivignesh499/",children:Object(m.jsx)("i",{class:"fa fa-instagram"})}),Object(m.jsx)("a",{class:"btn",href:"mailto:smartvignesh499@gmail.com",children:Object(m.jsx)("i",{class:"fa fa-envelope-o"})})]}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"\xa9 Copyright 2021 MV Connect"})})]})})]})};a(147),a(148);s.a.render(Object(m.jsx)(h,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.6688fae9.chunk.js.map