(this["webpackJsonpleaflet-react-demo"]=this["webpackJsonpleaflet-react-demo"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/pattern-bg.8d3f4ad6.png"},27:function(e,t,a){e.exports=a(54)},32:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),i=a.n(l),c=(a(32),a(14)),r=a.n(c),s=a(8),u=a(57),m=a(58),d=a(56),p=a(59),v=a(24),f=a.n(v),E=a(25),b=a.n(E);var h=function(e){return o.a.createElement("div",{className:"data"},o.a.createElement("h5",{className:"info-title"},e.title),o.a.createElement("h3",{className:"info-data"},e.info))};a(51);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement((function(){var e,t,a,l,i,c,v=Object(n.useState)(""),E=Object(s.a)(v,2),g=E[0],O=E[1],N=Object(n.useState)(g),j=Object(s.a)(N,2),y=j[0],w=j[1],S=Object(n.useState)([]),I=Object(s.a)(S,2),k=I[0],x=I[1],P=Object(n.useState)([45.4,-75.7]),C=Object(s.a)(P,2),U=C[0],A=C[1],D=Object(n.useState)(!1),L=Object(s.a)(D,2),M=L[0],R=L[1],T=Object(n.useState)(null),z=Object(s.a)(T,2),B=z[0],G=z[1],J="https://geo.ipify.org/api/v1?apiKey=at_LiGqZ4wuXR3UoGUUCLa6dd5CB8UjE&ipAddress="+y;return Object(n.useEffect)((function(){!function(){var e,t,a,n;r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.a.awrap(b()(J));case 3:a=o.sent,x(a.data),G(null),A([null===(e=a.data.location)||void 0===e?void 0:e.lat,null===(t=a.data.location)||void 0===t?void 0:t.lng]),o.next=13;break;case 9:o.prev=9,o.t0=o.catch(0),n=o.t0.response.data,G(n);case 13:case"end":return o.stop()}}),null,null,[[0,9]])}()}),[y]),o.a.createElement("div",null,o.a.createElement("div",{className:"top-container"},o.a.createElement("h1",{className:"title"},"IP Address Tracker"),o.a.createElement("h5",{className:"subtitle"},"Get an IP location (e.g 8.8.8.8). Default IP is your current network IP."),o.a.createElement("form",{className:"top-form",onSubmit:function(e){e.preventDefault(),w(g)}},o.a.createElement("input",{className:"input",type:"text",placeholder:"Enter an IP address",value:g,onChange:function(e){return O(e.target.value)}}),o.a.createElement("input",{className:"submit",type:"submit",value:"  >  "})),o.a.createElement("h3",{className:"error"},null===B||void 0===B?void 0:B.messages),o.a.createElement("img",{className:"top-image",src:f.a,alt:"Logo"}),o.a.createElement("div",{className:"display"},o.a.createElement(h,{title:"CURRENT IP ADDRESS",info:k.ip}),o.a.createElement(h,{title:"LOCATION",info:(null===(e=k.location)||void 0===e?void 0:e.city)+", "+(null===(t=k.location)||void 0===t?void 0:t.country)+" "+(null===(a=k.location)||void 0===a?void 0:a.postalCode)}),o.a.createElement(h,{title:"TIMEZONE",info:null===(l=k.location)||void 0===l?void 0:l.timezone}),o.a.createElement(h,{title:"ISP",info:k.isp}))),o.a.createElement(u.a,{center:U,zoom:13},o.a.createElement(m.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),o.a.createElement(d.a,{onMouseOver:function(){return R(!0)},onMouseOut:function(){return R(!1)},position:[U[0],U[1]]}),M&&o.a.createElement(p.a,{position:[U[0],U[1]]},o.a.createElement("div",null,o.a.createElement("p",null,null===(i=k.as)||void 0===i?void 0:i.domain),o.a.createElement("p",null,null===(c=k.location)||void 0===c?void 0:c.region)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3aab03c6.chunk.js.map