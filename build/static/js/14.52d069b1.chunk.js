(this.webpackJsonphello=this.webpackJsonphello||[]).push([[14],{540:function(e,t,n){"use strict";n.r(t);var c=n(48),a=n.n(c),r=n(49),s=n(18),o=n(0),i=n(51),l=n(94),u=n(9),d=n(16),m=n(8),j=n(2),h=(n(89),n(60),n(46)),p=n(3),b=function(e){var t=e.comments,n=(e.handlePostComments,function(e){var t=new Date,n=new Date(e).getTime(),c=(t.getTime()-n)/36e5;if(c<1){var a=Math.ceil(60*c);return a+(1===a?" MINUTE":" MINUTES")+" AGO"}if(c<24){var r=Math.floor(c);return r+(1===r?" Hour":" Hours")+" AGO"}if(c<168){var s=Math.floor(c/24);return s+" Day AGO"}if(c<720){var o=Math.floor(c/168);return o+(1===o?" Week":" Weeks")+" AGO"}if(c<8760){var i=Math.floor(c/720);return i+(1===i?" Month":" Months")+" AGO"}var l=Math.floor(c/8760);return l+(1===l?" Year":" Years")+" AGO"});return Object(p.jsx)(p.Fragment,{children:t.comments.map((function(e){return Object(p.jsxs)("li",{className:"post__comments__item",children:[Object(p.jsx)(h.a,{to:"/user/".concat(e.user._id),children:Object(p.jsxs)("div",{className:"comment__user",children:[Object(p.jsx)("div",{className:"comment__user--img",children:Object(p.jsx)("img",{src:e.user.img,alt:"aa"})}),Object(p.jsx)("div",{className:"comment__user--name",children:e.user.username})]})}),Object(p.jsx)("div",{className:"comment__content",children:Object(p.jsx)("p",{children:e.content})}),Object(p.jsx)("div",{className:"comment__time",children:n(e.createdAt)})]},e._id)}))})},O=n(59),f=function(e,t,n){switch(t.type){case"NEW_COMMENTS":return{comments:t.payload.comments,length:t.payload.length?t.payload.length:e.length,loaded:!0};case"FETCH_COMMENTS":return{comments:[].concat(Object(j.a)(e.comments),Object(j.a)(t.payload.comments)),length:t.payload.length?t.payload.length:e.length,loaded:!0};case"NEW_COMMENT":return{comments:[t.payload].concat(Object(j.a)(e.comments)),length:e.length+1}}},v=function(e){var t=e.postId,n=e.user,c=e.id,l=Object(o.useState)(),u=Object(s.a)(l,2),j=u[0],h=u[1],v=Object(i.a)(),_=(v.error,v.loading),x=v.request,g=Object(o.useReducer)(f,{comments:[],length:0,loaded:!1}),N=Object(s.a)(g,2),k=N[0],y=N[1],E=function(){var e=Object(r.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),e.prev=1,e.next=4,x("https://socialbackends.herokuapp.com/api/posts/comments/create","post",{content:c,userId:n._id,postId:t,img:n.img,username:n.username},{Authorization:"Bearer "+n.token});case 4:r=e.sent,y({type:"NEW_COMMENT",payload:Object(m.a)(Object(m.a)({},r.data.comment),{},{user:{img:n.img,_id:n._id,username:n.username}})}),r.data.notify&&O.a.emit("action",{state:"ADD",notify:r.data.notify,type:"SEND_NOTFY"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),j.trim()){e.next=3;break}return e.abrupt("return");case 3:E(j);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("https://socialbackends.herokuapp.com/api"+"/posts/comments/".concat(c,"?skip=").concat(t?0:k.comments.length));case 3:n=e.sent,r=n.data.length,y(t?{type:"NEW_COMMENTS",payload:{comments:n.data.post.comments,length:r}}:{type:"FETCH_COMMENTS",payload:{comments:n.data.post.comments,length:r}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){w("load")}),[c]),0===k.comments.length&&!1===k.loaded?Object(p.jsx)(d.a,{}):Object(p.jsxs)("div",{className:"post__comments",children:[Object(p.jsxs)("ul",{className:"post__comments__list",children:[Object(p.jsx)(b,{comments:k,handlePostComments:w}),k.comments.length<k.length&&0!=k.comments.length&&Object(p.jsx)("button",{className:"btn btn--contained1-primary",disabled:_,onClick:w,children:_?"Loading":"Load more comments"})]}),Object(p.jsx)("div",{className:"post__comments__form",children:Object(p.jsx)("form",{onSubmit:M,children:Object(p.jsxs)("div",{className:"form__unit",children:[Object(p.jsx)("input",{placeholder:" ",type:"text",value:j,onChange:function(e){return h(e.target.value)},className:"form__input"}),Object(p.jsx)("label",{className:"form__label",children:"Write a comment"})]})})})]})},_=n(21);t.default=function(e){var t=Object(u.c)((function(e){return e.currentUser})),n=e.match.params.id,c=Object(i.a)(),m=(c.error,c.loading),j=c.request,h=Object(o.useState)(),b=Object(s.a)(h,2),O=b[0],f=b[1],x=function(e){document.title=e},g=function(){var e=Object(r.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("https://socialbackends.herokuapp.com/api"+"/posts/".concat(n));case 3:c=e.sent,f(c.data.post),c.data.post.creator&&c.data.post.creator.username&&(c.data.post.creator._id==t._id?x("Your post"):x("".concat(c.data.post.creator.username," post"))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){g()}),[n]),!O||m?Object(p.jsx)(d.a,{}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"profile__header",children:[Object(p.jsx)("div",{className:"profile__header--icon",onClick:function(){return _.a.goBack()},children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",children:Object(p.jsx)("g",{children:Object(p.jsx)("path",{d:"M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"})})})}),Object(p.jsxs)("h2",{children:[O.creator.username,"'s Post"]})]}),Object(p.jsx)(l.a,{uid:t._id,img:t.img,username:t.username,token:t.token,post:O}),Object(p.jsx)(v,{id:n,user:t,postId:O._id})]})}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(48),a=n.n(c),r=n(49),s=n(18),o=n(0),i=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(),l=Object(s.a)(i,2),u=l[0],d=l[1],m=Object(o.useRef)([]),j=Object(o.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r,s,o,i,l,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},c(!0),o=new AbortController,m.current.push(o),e.prev=6,e.next=9,fetch(t,{method:n,body:r,headers:s,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(l=e.sent,m.current=m.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(l.message);case 16:return c(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),c(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){m.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:u,sendRequest:j,clearError:function(){d(null)}}}},94:function(e,t,n){"use strict";var c=n(48),a=n.n(c),r=n(8),s=n(49),o=n(18),i=n(0),l=n(52),u=(n(107),n(46)),d=n(63),m=n(9),j=n(16),h=n(21),p=n(534),b=n(3),O=function(e){var t=e.path,n=e.children,c=e.title,r=e.id,l=Object(d.a)(),O=l.isLoading,f=(l.error,l.sendRequest),v=Object(i.useState)(!1),_=Object(o.a)(v,2),x=_[0],g=_[1],N=Object(m.b)(),k=Object(m.c)((function(e){return e.isSignedIn})),y=function(){x&&(g(!1),document.body.style.overflowY="auto")},E=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://socialbackends.herokuapp.com/api"+"/posts/".concat(r),"DELETE",null,{"Content-Type":"application/json",Authorization:"Bearer "+k});case 3:N({type:"DELETE_POST",payload:r}),console.log(r),t?N({type:"DELETE_USER_POST",payload:r}):h.a.push(""),y(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{display:"inline-block"},onClick:function(){x||(g(!0),document.body.style.overflowY="hidden")},children:n}),Object(b.jsx)(p.a,{in:x,timeout:300,classNames:"modal",unmountOnExit:!0,children:Object(b.jsx)("div",{className:"modal__container",onClick:y,children:Object(b.jsx)("div",{className:"modal",children:Object(b.jsx)("div",{className:"modal__body",onClick:function(e){return e.stopPropagation()},children:Object(b.jsxs)("ul",{className:"modal__list",children:[Object(b.jsx)("li",{className:"modal__item",children:Object(b.jsx)(u.a,{onClick:y,to:{pathname:"/posts/edit/".concat(r),state:{title:c}},children:"Edit Post"})}),Object(b.jsx)("li",{className:"modal__item delete",onClick:function(){E()},children:O?"Deleting...":"Delete Post"}),Object(b.jsx)("li",{className:"modal__item",onClick:y,children:"Cancel"})]})})})})}),O&&Object(b.jsx)(j.a,{})]})},f=n(61),v=n(62),_=n(119),x=n(117),g=n(108),N=(n(109),function(e){Object(_.a)(n,e);var t=Object(x.a)(n);function n(e){return Object(f.a)(this,n),t.call(this,e)}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.closeLightBox;return Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{mainSrc:t,onCloseRequest:n})})}}]),n}(i.Component)),k=n(59),y=n(149),E=n.n(y);n(105),t.a=function(e){var t,n,c,m,j,h,p,f=e.post,v=e.path,_=e.uid,x=e.token,g=e.img,y=e.username,M=Object(i.useState)(f.liked.indexOf(_)),w=Object(o.a)(M,2),C=w[0],T=w[1],S=Object(i.useRef)(f.liked.length),A=Object(i.useRef)(null),D=Object(d.a)().sendRequest,G=Object(i.useState)(!1),I=Object(o.a)(G,2),L=I[0],H=I[1],P=(E.a,function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("https://socialbackends.herokuapp.com/api/posts/post","PATCH",JSON.stringify({postId:f._id,creator:_,img:g,username:y}),{"Content-Type":"application/json",Authorization:"Bearer "+x});case 3:t=e.sent,k.a.emit("action",Object(r.a)(Object(r.a)({},t),{},{type:"SEND_NOTFY"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()),R=Object(i.useState)(),W=Object(o.a)(R,2),Y=W[0];W[1];Object(i.useEffect)((function(){if(A.current){var e=setTimeout((function(){P()}),500);return function(){return clearTimeout(e)}}}),[C]);return Object(b.jsxs)("div",{className:"post",children:[L&&Object(b.jsx)(N,{image:L,closeLightBox:function(){return H(!1)}}),Object(b.jsxs)("div",{className:"post__header",children:[Object(b.jsxs)("div",{className:"post__header--info",children:[Object(b.jsxs)("div",{className:"post__header--img",children:[(null===(t=f.creator)||void 0===t?void 0:t.isOnline)&&Object(b.jsx)("div",{className:"userActive"}),Object(b.jsx)(u.a,{to:"/user/".concat((null===f||void 0===f||null===(n=f.creator)||void 0===n?void 0:n._id)||f.creator),children:Object(b.jsx)("img",{src:(null===f||void 0===f||null===(c=f.creator)||void 0===c?void 0:c.img)||g,alt:"aa"})})]}),Object(b.jsxs)("div",{className:"post__header--name",children:[Object(b.jsx)(u.a,{to:"/user/".concat((null===(m=f.creator)||void 0===m?void 0:m._id)||f.creator),children:Object(b.jsx)("span",{className:"name",children:(null===(j=f.creator)||void 0===j?void 0:j.username)||y})}),"null"!==f.location&&Object(b.jsx)("span",{className:"place",children:f.location})]})]}),_===((null===(h=f.creator)||void 0===h?void 0:h._id)?null===(p=f.creator)||void 0===p?void 0:p._id:f.creator)&&Object(b.jsx)(O,{path:v,id:Y||f._id,title:f.title,children:Object(b.jsx)("div",{className:"post__menu",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)(l.A,{width:"2.3rem",height:"2.3rem",fill:"#fff"})})})})]}),f.title&&Object(b.jsx)("div",{className:"post__content",children:Object(b.jsx)("p",{children:f.title?f.title:null})}),f.img&&Object(b.jsx)("div",{className:"post__body",children:Object(b.jsx)("img",{src:f.img,onClick:function(){return H(f.img)}})}),Object(b.jsxs)("div",{className:"post__tail",children:[Object(b.jsxs)("div",{className:"post__tail__communication",children:[Object(b.jsxs)("div",{className:"post__tail__communication__item",children:[Object(b.jsx)("span",{className:"icon",onClick:function(){C<0?++S.current:--S.current,T((function(e){return 0===e?-1:-1*e})),A.current||(A.current=1)},children:C<0?Object(b.jsx)(l.s,{width:"2rem",height:"2rem",fill:"#fff"}):Object(b.jsx)(l.t,{width:"2rem",height:"2rem",fill:"#fff"})}),Object(b.jsx)("span",{className:"nol",children:S.current})]}),Object(b.jsx)(u.a,{to:"/post/".concat(f._id),children:Object(b.jsxs)("div",{className:"post__tail__communication__item",children:[Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)(l.n,{width:"2rem",height:"2rem",fill:"#fff"})}),Object(b.jsx)("span",{className:"nol",children:f.comments?f.comments.length:0})]})})]}),Object(b.jsx)("div",{className:"post__tail--time-left",children:function(e){var t=new Date,n=new Date(e).getTime(),c=(t.getTime()-n)/36e5;if(c<1){var a=Math.ceil(60*c);return a+(1===a?" MINUTE":" MINUTES")+" AGO"}if(c<24){var r=Math.floor(c);return r+(1===r?" Hour":" Hours")+" AGO"}if(c<168){var s=Math.floor(c/24);return s+" Day AGO"}if(c<720){var o=Math.floor(c/168);return o+(1===o?" Week":" Weeks")+" AGO"}if(c<8760){var i=Math.floor(c/720);return i+(1===i?" Month":" Months")+" AGO"}var l=Math.floor(c/8760);return l+(1===l?" Year":" Years")+" AGO"}(f.createdAt)})]})]},f._id)}}}]);
//# sourceMappingURL=14.52d069b1.chunk.js.map