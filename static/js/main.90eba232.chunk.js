(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{63:function(e,a,t){e.exports=t(91)},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},76:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),i=(t(68),t(69),t(40)),o=t.n(i);t(70);var s=function(e){var a=e.active,t=e.text,n=e.Icon;return r.a.createElement("div",{className:"sidebarOption ".concat(a&&"sidebarOption--active")},r.a.createElement(n,null),r.a.createElement("h2",null,t))},m=t(45),u=t.n(m),d=t(32),E=t.n(d),p=t(46),v=t.n(p),f=t(47),h=t.n(f),_=t(48),N=t.n(_),b=t(49),g=t.n(b),w=t(50),x=t.n(w),y=t(51),I=t.n(y),S=t(52),k=t.n(S),j=t(104),z=t(105);var O=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement(o.a,{className:"sidebar__twitterIcon"}),r.a.createElement(s,{active:!0,Icon:u.a,text:"Home"}),r.a.createElement(s,{Icon:E.a,text:"Explore"}),r.a.createElement(s,{Icon:v.a,text:"Notifications"}),r.a.createElement(s,{Icon:h.a,text:"Messages"}),r.a.createElement(s,{Icon:N.a,text:"Bookmarks"}),r.a.createElement(s,{Icon:g.a,text:"Lists"}),r.a.createElement(s,{Icon:x.a,text:"Profile"}),r.a.createElement(s,{Icon:I.a,text:"More"}),r.a.createElement(j.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0},"Tweet"),r.a.createElement("div",{className:"userName"},r.a.createElement(z.a,null),r.a.createElement("h2",null,"Sunil Kumar Yadav ",r.a.createElement("br",null)," ",r.a.createElement("span",null," @sk_yadav ")," "),r.a.createElement(k.a,null)))},B=t(29),W=(t(76),t(53)),Y=t.n(W).a.initializeApp({apiKey:"AIzaSyDYEvFtWE97viVFj7YzzUnZJYdkPWzqKS4",authDomain:"twitter-clone-635b6.firebaseapp.com",databaseURL:"https://twitter-clone-635b6.firebaseio.com",projectId:"twitter-clone-635b6",storageBucket:"twitter-clone-635b6.appspot.com",messagingSenderId:"442333542395",appId:"1:442333542395:web:ebfde8282d1d819ff7fd5e",measurementId:"G-E1FYSMYXEZ"}).firestore();var T=function(){var e=Object(n.useState)(""),a=Object(B.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(B.a)(l,2),o=i[0],s=i[1];return r.a.createElement("div",{className:"tweetBox"},r.a.createElement("form",null,r.a.createElement("div",{className:"tweetBox__input"},r.a.createElement(z.a,{src:"/usericon.png"}),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:t,placeholder:"What's happening?",type:"text"})),r.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),r.a.createElement(j.a,{onClick:function(e){e.preventDefault(),Y.collection("posts").add({displayName:"Sunil Kumar Yadav",username:"sk_yadav",verified:!0,text:t,image:o,avatar:"/usericon.png"}),c(""),s("")},type:"submit",className:"tweetBox__tweetButton"},"Tweet")))},C=(t(87),t(54)),D=t.n(C),K=t(55),M=t.n(K),q=t(56),F=t.n(q),J=t(57),L=t.n(J),R=t(58),U=t.n(R),A=Object(n.forwardRef)((function(e,a){var t=e.displayName,n=e.username,c=e.verified,l=e.text,i=e.image,o=e.avatar;return r.a.createElement("div",{className:"post",ref:a},r.a.createElement("div",{className:"post__avatar"},r.a.createElement(z.a,{src:o})),r.a.createElement("div",{className:"post__body"},r.a.createElement("div",{className:"post__header"},r.a.createElement("div",{className:"post__headerText"},r.a.createElement("h3",null,t," ",r.a.createElement("span",{className:"post__headerSpecial"},c&&r.a.createElement(D.a,{className:"post__badge"})," @",n))),r.a.createElement("div",{className:"post__headerDescription"},r.a.createElement("p",null,l))),r.a.createElement("img",{src:i,alt:""}),r.a.createElement("div",{className:"post__footer"},r.a.createElement(M.a,{fontSize:"small"}),r.a.createElement(F.a,{fontSize:"small"}),r.a.createElement(L.a,{fontSize:"small"}),r.a.createElement(U.a,{fontSize:"small"}))))})),H=(t(88),t(60)),P=t(59),Z=t.n(P);var G=function(){var e=Object(n.useState)([]),a=Object(B.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){Y.collection("posts").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]),r.a.createElement("div",{className:"feed"},r.a.createElement("div",{className:"feed__header"},r.a.createElement("h2",null,"Home"),r.a.createElement(Z.a,{className:"icon"})),r.a.createElement(T,null),r.a.createElement(H.a,null,t.map((function(e){return r.a.createElement(A,{key:e.text,displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})}))))},V=(t(89),t(33));var X=function(){return r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"widgets__input"},r.a.createElement(E.a,{className:"widgets__searchIcon"}),r.a.createElement("input",{placeholder:"Search Twitter",type:"text"})),r.a.createElement("div",{className:"widgets__widgetContainer"},r.a.createElement("h2",null,"What's happening"),r.a.createElement(V.c,{tweetId:"858551177860055040"}),r.a.createElement(V.b,{sourceType:"profile",screenName:"cleverqazi",options:{height:400}}),r.a.createElement(V.a,{url:"https://facebook.com/cleverprogrammer",options:{text:"#reactjs is awesome",via:"cleverqazi"}})))};t(90);var $=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(O,null),r.a.createElement(G,null),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.90eba232.chunk.js.map