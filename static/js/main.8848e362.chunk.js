(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{28:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a.n(n),r=(a(28),a(5)),o=a.n(r),i=a(11),s=a(8),l=a(2),u=a(23),b=a(0),m=a(1);var j=function(e){var t=e.smallImage,a=e.alt,n=(e.id,e.onClick),c=e.bigImage;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,alt:a,"data-bigimage":c,"data-alt":a,onClick:n,className:"ImageGalleryItem-image"})})};var d=function(e){var t=e.images,a=e.onClick;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.createElement)(j,Object(l.a)(Object(l.a)({},e),{},{onClick:a,key:e.id}))}))})};var g=function(e){var t=e.onSubmit;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})};var O=function(e){var t=e.onMore;return Object(m.jsx)("button",{className:"Button",onClick:t,children:"Load MORE..."})},f=a(21),p=a.n(f);a(51);var h=function(){return Object(m.jsx)(p.a,{type:"Hearts",color:"#e63964",height:100,width:100})},x=function(e){var t=e.onClose,a=e.image;Object(b.useEffect)((function(){var e=function(e){27===e.keyCode&&t()};return document.addEventListener("keydown",e,!1),document.removeEventListener("keydown",e,!1)}),[]);return Object(m.jsx)("div",{className:"Overlay",onClick:function(e){e.target.attributes.class&&t()},children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:a.bigImage,alt:a.alt})})})},v=a(22),k=a.n(v),y=function(){var e=Object(s.a)(o.a.mark((function e(t,a,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("".concat("https://pixabay.com/api/","?key=").concat("21059964-5bf790d712106238e57c2f022","&q=").concat(t,"&per_page=").concat(n,"&page=").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),L={images:[],page:0,query:"",maxPages:0,isLoadButton:!1,isLoading:!1,modal:null,afterScroll:!1},S=function(){var e=Object(b.useState)(L),t=Object(u.a)(e,2),a=t[0],n=t[1],c=function(){var e=Object(s.a)(o.a.mark((function e(){var t,c,r,s,u,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.query){e.next=3;break}return n(Object(l.a)(Object(l.a)({},a),{},{isLoading:!1})),e.abrupt("return");case 3:if(t=12,c=a.page,!(0===a.maxPages||c<a.maxPages)){e.next=9;break}c=a.page+1,e.next=11;break;case 9:return n(Object(l.a)(Object(l.a)({},a),{},{isLoading:!1,isLoadButton:!1})),e.abrupt("return");case 11:return e.prev=11,e.next=14,y(a.query,c,t);case 14:r=e.sent,s=r.data,u=0,b=[],0!==s.total&&(u=Math.ceil(s.totalHits/t),b=s.hits.map((function(e){return{smallImage:e.webformatURL,bigImage:e.largeImageURL,alt:e.tags,id:e.id.toString()}}))),n(Object(l.a)(Object(l.a)({},a),{},{images:[].concat(Object(i.a)(a.images),Object(i.a)(b)),maxPages:u,page:c,isLoading:!1,isLoadButton:c<u})),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(11),n(Object(l.a)(Object(l.a)({},a),{},{isLoading:!1,isLoadButton:!1}));case 25:case"end":return e.stop()}}),e,null,[[11,22]])})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){a.isLoading?c():a.afterScroll&&(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n(Object(l.a)(Object(l.a)({},a),{},{afterScroll:!1})))}),[a]);return Object(m.jsxs)("div",{className:"App",children:[a.modal&&Object(m.jsx)(x,{image:a.modal,onClose:function(){n(Object(l.a)(Object(l.a)({},a),{},{modal:null}))}}),Object(m.jsx)(g,{onSubmit:function(e){e.preventDefault(),n(Object(l.a)(Object(l.a)({},L),{},{query:e.target[1].value.trim().replaceAll(" ","+"),isLoading:!0}))}}),Object(m.jsx)(d,{images:a.images,onClick:function(e){var t=e.target.dataset,c=t.bigimage,r=t.alt;n(Object(l.a)(Object(l.a)({},a),{},{modal:{bigImage:c,alt:r}}))}}),a.isLoading&&Object(m.jsx)(h,{}),a.isLoadButton&&Object(m.jsx)(O,{onMore:function(){return n(Object(l.a)(Object(l.a)({},a),{},{isLoading:!0,afterScroll:!0}))}})]})};c.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.8848e362.chunk.js.map