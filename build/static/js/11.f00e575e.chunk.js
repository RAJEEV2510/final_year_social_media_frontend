(this.webpackJsonphello=this.webpackJsonphello||[]).push([[11],{117:function(e,t,n){"use strict";n(0);var c=n(3);t.a=function(){return Object(c.jsxs)("div",{className:"post-placeholder",children:[Object(c.jsxs)("div",{className:"post-placeholder__header",children:[Object(c.jsx)("div",{className:"post-placeholder__img"}),Object(c.jsxs)("div",{className:"post-placeholder__info",children:[Object(c.jsx)("div",{className:"post-placeholder__username"}),Object(c.jsx)("div",{className:"post-placeholder__name"})]})]}),Object(c.jsxs)("div",{className:"post-placeholder__content",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]}),Object(c.jsxs)("div",{className:"post-placeholder__tail",children:[Object(c.jsx)("div",{className:"post-placeholder__like"}),Object(c.jsx)("div",{className:"post-placeholder__time"})]})]})}},490:function(e,t,n){},535:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(18),s=n(0),r=n.n(s),i=n(48),o=n.n(i),l=n(49),j=n(94),d=n(60),u=n(51),b=n(9),m=n(117),h=n(89),O=n(3),p=r.a.memo((function(e){var t,n=e.token,c=e.uid,a=e.img,r=e.username,i=Object(u.a)(),d=i.request,p=(i.loading,i.error),f=Object(b.c)((function(e){return e.posts})),x=Object(b.b)(),v=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("http://localhost:5000/api"+"/posts?skip=".concat(f.posts.length));case 3:t=e.sent,x({type:"FETCH_POSTS",payload:{posts:t.data.posts,length:t.data.length}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,p);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){f.posts.length||v(),document.title="Leechi"}),[]),t=f.posts&&f.posts.length?Object(O.jsxs)(h.a,{dataLength:f.length,next:v,hasMore:f.posts.length<f.length,loader:Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{}),Object(O.jsx)(m.a,{})]}),endMessage:Object(O.jsx)("p",{style:{textAlign:"center"},className:"no-more",children:Object(O.jsx)("b",{children:"Yay! You have seen it all"})}),children:[f.posts.map((function(e){return Object(O.jsx)(j.a,{img:a,username:r,uid:c,token:n,post:e},e._id)})),";"]}):p?Object(O.jsxs)("h1",{children:[p," please try again later."]}):Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{}),Object(O.jsx)(m.a,{}),Object(O.jsx)(m.a,{})]}),Object(O.jsx)("div",{children:t})})),f=p,x=n(52),v=n(95),_=n.n(v),g=n(108),N=n(16),y=r.a.memo((function(e){var t=e.handleLocation,n=e.location,c=Object(s.useState)(null),r=Object(a.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)(!1),j=Object(a.a)(l,2),d=j[0],u=j[1],b=Object(s.useCallback)((function(){o(null)}),[]),m=function(e){u(!0);var n=e.coords,c=n.latitude,a=n.longitude,s="https://api.weatherbit.io/v2.0/current?lat=".concat(c,"&lon=").concat(a,"&key=")+"1f701621ea254a1cb3113097e5971fe4";_.a.get(s).then((function(e){t(e.data.data[0].city_name)})).catch((function(e){o(e.message)})),u(!1)},h=function(e){o(function(e){switch(e.code){case e.PERMISSION_DENIED:return"You have to make location allow first!";case e.POSITION_UNAVAILABLE:return"POSITION_UNAVAILABLE";case e.TIMEOUT:return"TIMEOUT";default:return"UNKNOWN_ERROR"}}(e)),u(!1)};return Object(s.useEffect)((function(){return window.addEventListener("click",b),function(){return window.removeEventListener("click",b)}}),[b]),Object(O.jsxs)(O.Fragment,{children:[d&&Object(O.jsx)(N.a,{}),i&&Object(O.jsx)(g.a,{state:"error",closeModal:b,message:i}),Object(O.jsx)("span",{className:"icon",onClick:n?function(){t(null)}:function(){navigator.geolocation?(u(!0),navigator.geolocation.getCurrentPosition(m,h)):console.log("your browser dosnot support geolocation")},children:Object(O.jsx)(x.x,{width:"2.2rem",height:"2.4rem",fill:n?"#1D8CF8":"#8B8B85"})})]})})),k=n(207),w=n(231),E=n.n(w),S=(n(232),n(469)),C=n.n(S),T=r.a.memo((function(e){var t=e.previewUrl,n=e.removeImage,c=e.setImgData,r=Object(s.useState)(null),i=Object(a.a)(r,2),o=i[0],l=i[1],j=Object(s.useRef)(0);return Object(O.jsxs)("div",{children:[o&&Object(O.jsx)("div",{className:"modal__container",children:Object(O.jsx)("div",{className:"modal",children:Object(O.jsxs)("div",{className:"modal__body cropper",onClick:function(e){return e.stopPropagation()},children:[Object(O.jsx)(E.a,{ref:j,src:t,style:{height:"80vh",width:"100%"},zoomable:!1,aspectRatio:1,viewMode:2,responsive:!0,guides:!1}),Object(O.jsxs)("div",{className:"modal__footer",children:[Object(O.jsx)("button",{className:"btn btn--outlined-danger",onClick:function(){return l(!1)},children:"Cancel"}),Object(O.jsx)("button",{className:"btn btn--contained-success",onClick:function(){l(null),c(j.current.cropper.getData())},children:"Submit"})]})]})})}),t?Object(O.jsx)("div",{className:"form__images--container",children:Object(O.jsxs)("div",{className:"form__images--row",children:[Object(O.jsx)("div",{children:Object(O.jsx)(C.a,{children:Object(O.jsx)("div",{className:"img",children:Object(O.jsx)("img",{src:t,alt:"aa"})})})}),Object(O.jsxs)("div",{className:"form__images--options",children:[Object(O.jsx)("span",{className:"icon del",onClick:n,children:Object(O.jsx)(x.k,{width:"2.2rem",height:"2.2rem",fill:"#fff"})}),Object(O.jsx)("span",{className:"icon crop",onClick:function(){l(!0)},children:Object(O.jsx)(x.o,{width:"2.2rem",height:"2.2rem",fill:"#fff"})})]})]})}):null]})})),A=r.a.memo((function(e){var t=e.user,n=Object(u.a)(),r=n.loading,i=n.request,j=n.error,d=n.clearError,m=Object(s.useState)(""),h=Object(a.a)(m,2),p=h[0],f=h[1],v=Object(s.useState)(null),_=Object(a.a)(v,2),w=_[0],E=_[1],S=Object(b.b)(),C=Object(s.useRef)(),A=Object(s.useState)(),D=Object(a.a)(A,2),I=D[0],M=D[1],R=Object(s.useState)(),L=Object(a.a)(R,2),P=L[0],U=L[1],B=Object(s.useState)(),F=Object(a.a)(B,2),Y=F[0],G=F[1],q=function(e){U(null),M(null)},z=function(){var e=Object(l.a)(o.a.mark((function e(n){var a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new FormData,Y&&Y.width&&(a.append("x",Y.x),a.append("y",Y.y),a.append("width",Y.width),a.append("height",Y.height)),a.append("title",n.title),a.append("location",n.location),a.append("img",n.img),a.append("creator",n.creator),e.next=9,i("http://localhost:5000/api/posts","post",a,{Authorization:"Bearer "+t.token});case 9:s=e.sent,r={createdAt:(new Date).toISOString(),username:t.username,img:t.img,_id:t.id,isOnline:!0},S({type:"CREATE_POST",payload:Object(c.a)(Object(c.a)({},s.data.post),{},{creator:r})}),S({type:"ONE_MORE_POST",payload:Object(c.a)(Object(c.a)({},s.data.post),{},{creator:r})}),q(),f(""),E(null),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(P){var e=new FileReader;e.onload=function(){M(e.result)},e.readAsDataURL(P)}}),[P]),Object(O.jsxs)("div",{className:"form__container",children:[r&&Object(O.jsx)(N.a,{}),j&&Object(O.jsx)(g.a,{state:"error",closeModal:d,message:j}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)("div",{className:"form__heading",children:Object(O.jsx)("h3",{children:"Write a post"})}),Object(O.jsx)("div",{className:"form",children:Object(O.jsxs)("form",{className:"form__body big",onSubmit:function(e){e.preventDefault(),z({title:p,img:P,location:w,creator:t.id})},children:[Object(O.jsxs)("div",{className:"form__user",children:[Object(O.jsx)("div",{className:"form__user--img",children:Object(O.jsx)("img",{src:t.img,alt:"aa"})}),Object(O.jsxs)("div",{className:"form__user--username",children:[Object(O.jsx)("h3",{children:t.username}),w&&Object(O.jsx)("span",{children:w})]})]}),Object(O.jsx)("div",{className:"form__unit my-2",children:Object(O.jsxs)("div",{className:"form__unit features",children:[Object(O.jsx)("textarea",{value:p,name:"body",onChange:function(e){f(e.target.value)},placeholder:"what in your mind..?"}),Object(O.jsx)(T,{previewUrl:I,removeImage:q,setImgData:function(e){G(Object(c.a)({},e))}}),Object(O.jsx)("div",{className:"features__icons",children:Object(O.jsxs)("div",{className:"features__icons--body",children:[Object(O.jsxs)("span",{className:"icon",onClick:function(){C.current.click()},children:[Object(O.jsx)("input",{ref:C,style:{display:"none"},type:"file",accept:".png,.jpg,.jpeg",onChange:function(e){var t;e.target.files&&1===e.target.files.length&&(t=e.target.files[0],U(t))}}),Object(O.jsx)(x.g,{width:"2.2rem",height:"2.4rem",fill:I?"#1D8CF8":"#8B8B85"})]}),Object(O.jsx)(k.a,{handleChange:function(e){f((function(t){return t+e}))},style:{top:"-20rem",left:"-20rem"},className:"emojy-picker"}),Object(O.jsx)(y,{location:w,handleLocation:function(e){E(w?null:e)}})]})})]})}),Object(O.jsx)("button",{disabled:r,className:"btn btn--contained1-primary mg-none",children:r?"Posting....":"Post"})]})})]})})),D=A,I=n(470),M=n.n(I),R=n(485),L=n.n(R),P=(n(490),r.a.memo((function(e){var t=e.currentUser,n=Object(s.useState)([]),r=Object(a.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)(""),j=Object(a.a)(l,2);j[0],j[1];return Object(s.useEffect)((function(){fetch("http://localhost:5000/video").then((function(e){return e.json()})).then((function(e){o(e.data)}))}),[]),console.log(t),t&&t.img&&t.username?Object(O.jsxs)("div",{className:"post-body",children:[Object(O.jsx)(D,{user:{username:t.username,token:t.token,id:t._id,img:t.img}}),Object(O.jsx)("div",{className:"slider",children:Object(O.jsx)(M.a,Object(c.a)(Object(c.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1}),{},{children:i.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsx)(L.a,{videoUrl:e.postedByUrl,snapshotAt:10})})})}))}))}),Object(O.jsx)("div",{className:"post__container",children:Object(O.jsx)(f,{uid:t._id,token:t.token,img:t.img,username:t.username})})]}):Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{})})})));t.default=P},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(48),a=n.n(c),s=n(49),r=n(18),i=n(0),o=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(),l=Object(r.a)(o,2),j=l[0],d=l[1],u=Object(i.useRef)([]),b=Object(i.useCallback)(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,s,r,i,o,l,j=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.length>1&&void 0!==j[1]?j[1]:"GET",s=j.length>2&&void 0!==j[2]?j[2]:null,r=j.length>3&&void 0!==j[3]?j[3]:{"Content-Type":"application/json"},c(!0),i=new AbortController,u.current.push(i),e.prev=6,e.next=9,fetch(t,{method:n,body:s,headers:r,signal:i.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:if(l=e.sent,u.current=u.current.filter((function(e){return e!==i})),o.ok){e.next=16;break}throw new Error(l.message);case 16:return c(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),c(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(i.useEffect)((function(){return function(){u.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:j,sendRequest:b,clearError:function(){d(null)}}}},94:function(e,t,n){"use strict";var c=n(48),a=n.n(c),s=n(8),r=n(49),i=n(18),o=n(0),l=n(52),j=(n(109),n(46)),d=n(63),u=n(9),b=n(16),m=n(21),h=n(534),O=n(3),p=function(e){var t=e.path,n=e.children,c=e.title,s=e.id,l=Object(d.a)(),p=l.isLoading,f=(l.error,l.sendRequest),x=Object(o.useState)(!1),v=Object(i.a)(x,2),_=v[0],g=v[1],N=Object(u.b)(),y=Object(u.c)((function(e){return e.isSignedIn})),k=function(){_&&(g(!1),document.body.style.overflowY="auto")},w=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("http://localhost:5000/api"+"/posts/".concat(s),"DELETE",null,{"Content-Type":"application/json",Authorization:"Bearer "+y});case 3:N({type:"DELETE_POST",payload:s}),console.log(s),t?N({type:"DELETE_USER_POST",payload:s}):m.a.push(""),k(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{display:"inline-block"},onClick:function(){_||(g(!0),document.body.style.overflowY="hidden")},children:n}),Object(O.jsx)(h.a,{in:_,timeout:300,classNames:"modal",unmountOnExit:!0,children:Object(O.jsx)("div",{className:"modal__container",onClick:k,children:Object(O.jsx)("div",{className:"modal",children:Object(O.jsx)("div",{className:"modal__body",onClick:function(e){return e.stopPropagation()},children:Object(O.jsxs)("ul",{className:"modal__list",children:[Object(O.jsx)("li",{className:"modal__item",children:Object(O.jsx)(j.a,{onClick:k,to:{pathname:"/posts/edit/".concat(s),state:{title:c}},children:"Edit Post"})}),Object(O.jsx)("li",{className:"modal__item delete",onClick:function(){w()},children:p?"Deleting...":"Delete Post"}),Object(O.jsx)("li",{className:"modal__item",onClick:k,children:"Cancel"})]})})})})}),p&&Object(O.jsx)(b.a,{})]})},f=n(61),x=n(62),v=n(121),_=n(119),g=n(110),N=(n(111),function(e){Object(v.a)(n,e);var t=Object(_.a)(n);function n(e){return Object(f.a)(this,n),t.call(this,e)}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.closeLightBox;return Object(O.jsx)("div",{children:Object(O.jsx)(g.a,{mainSrc:t,onCloseRequest:n})})}}]),n}(o.Component)),y=n(59),k=n(149),w=n.n(k);n(107),t.a=function(e){var t,n,c,u,b,m,h,f=e.post,x=e.path,v=e.uid,_=e.token,g=e.img,k=e.username,E=Object(o.useState)(f.liked.indexOf(v)),S=Object(i.a)(E,2),C=S[0],T=S[1],A=Object(o.useRef)(f.liked.length),D=Object(o.useRef)(null),I=Object(d.a)().sendRequest,M=Object(o.useState)(!1),R=Object(i.a)(M,2),L=R[0],P=R[1],U=(w.a,function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("http://localhost:5000/api/posts/post","PATCH",JSON.stringify({postId:f._id,creator:v,img:g,username:k}),{"Content-Type":"application/json",Authorization:"Bearer "+_});case 3:t=e.sent,y.a.emit("action",Object(s.a)(Object(s.a)({},t),{},{type:"SEND_NOTFY"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()),B=Object(o.useState)(),F=Object(i.a)(B,2),Y=F[0];F[1];Object(o.useEffect)((function(){if(D.current){var e=setTimeout((function(){U()}),500);return function(){return clearTimeout(e)}}}),[C]);return Object(O.jsxs)("div",{className:"post",children:[L&&Object(O.jsx)(N,{image:L,closeLightBox:function(){return P(!1)}}),Object(O.jsxs)("div",{className:"post__header",children:[Object(O.jsxs)("div",{className:"post__header--info",children:[Object(O.jsxs)("div",{className:"post__header--img",children:[(null===(t=f.creator)||void 0===t?void 0:t.isOnline)&&Object(O.jsx)("div",{className:"userActive"}),Object(O.jsx)(j.a,{to:"/user/".concat((null===f||void 0===f||null===(n=f.creator)||void 0===n?void 0:n._id)||f.creator),children:Object(O.jsx)("img",{src:(null===f||void 0===f||null===(c=f.creator)||void 0===c?void 0:c.img)||g,alt:"aa"})})]}),Object(O.jsxs)("div",{className:"post__header--name",children:[Object(O.jsx)(j.a,{to:"/user/".concat((null===(u=f.creator)||void 0===u?void 0:u._id)||f.creator),children:Object(O.jsx)("span",{className:"name",children:(null===(b=f.creator)||void 0===b?void 0:b.username)||k})}),"null"!==f.location&&Object(O.jsx)("span",{className:"place",children:f.location})]})]}),v===((null===(m=f.creator)||void 0===m?void 0:m._id)?null===(h=f.creator)||void 0===h?void 0:h._id:f.creator)&&Object(O.jsx)(p,{path:x,id:Y||f._id,title:f.title,children:Object(O.jsx)("div",{className:"post__menu",children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(l.A,{width:"2.3rem",height:"2.3rem",fill:"#fff"})})})})]}),f.title&&Object(O.jsx)("div",{className:"post__content",children:Object(O.jsx)("p",{children:f.title?f.title:null})}),f.img&&Object(O.jsx)("div",{className:"post__body",children:Object(O.jsx)("img",{src:f.img,onClick:function(){return P(f.img)}})}),Object(O.jsxs)("div",{className:"post__tail",children:[Object(O.jsxs)("div",{className:"post__tail__communication",children:[Object(O.jsxs)("div",{className:"post__tail__communication__item",children:[Object(O.jsx)("span",{className:"icon",onClick:function(){C<0?++A.current:--A.current,T((function(e){return 0===e?-1:-1*e})),D.current||(D.current=1)},children:C<0?Object(O.jsx)(l.s,{width:"2rem",height:"2rem",fill:"#fff"}):Object(O.jsx)(l.t,{width:"2rem",height:"2rem",fill:"#fff"})}),Object(O.jsx)("span",{className:"nol",children:A.current})]}),Object(O.jsx)(j.a,{to:"/post/".concat(f._id),children:Object(O.jsxs)("div",{className:"post__tail__communication__item",children:[Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(l.n,{width:"2rem",height:"2rem",fill:"#fff"})}),Object(O.jsx)("span",{className:"nol",children:f.comments?f.comments.length:0})]})})]}),Object(O.jsx)("div",{className:"post__tail--time-left",children:function(e){var t=new Date,n=new Date(e).getTime(),c=(t.getTime()-n)/36e5;if(c<1){var a=Math.ceil(60*c);return a+(1===a?" MINUTE":" MINUTES")+" AGO"}if(c<24){var s=Math.floor(c);return s+(1===s?" Hour":" Hours")+" AGO"}if(c<168){var r=Math.floor(c/24);return r+" Day AGO"}if(c<720){var i=Math.floor(c/168);return i+(1===i?" Week":" Weeks")+" AGO"}if(c<8760){var o=Math.floor(c/720);return o+(1===o?" Month":" Months")+" AGO"}var l=Math.floor(c/8760);return l+(1===l?" Year":" Years")+" AGO"}(f.createdAt)})]})]},f._id)}}}]);
//# sourceMappingURL=11.f00e575e.chunk.js.map