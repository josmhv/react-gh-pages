(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),s=n(19),i=n.n(s),c=n(5),u=n(6),l=n(8),o=n(7),h=n(0),p=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("li",{className:"links nav__item",id:this.props.id,children:this.props.texto})}}]),n}(r.a.Component),d=p,b=n(4),j=n.n(b),f=(n(25),function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"handleClick",value:function(t){var e=t.target.id;"uploadFiles"===e&&this.renderGUI(e),"playMusic"===e&&this.renderGUI(e)}},{key:"renderGUI",value:function(t){j()(".".concat(t)).toggle()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"nav",children:Object(h.jsxs)("ul",{onClick:this.handleClick.bind(this),className:"nav__links",children:[Object(h.jsx)(d,{texto:"Reproducir Musica",id:"playMusic"}),Object(h.jsx)(d,{texto:"A\xf1adir canciones",id:"uploadFiles"})]})})})}}]),n}(r.a.Component)),v=f,y=n(1),O=n.n(y),m=n(13),x=n(3),k=n(12),g=n.n(k);n(38);function w(t){return P.apply(this,arguments)}function P(){return P=Object(x.a)(O.a.mark((function t(e){var n,a,r,s,i=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"http://localhost:9000/songs",a=e.urls,r=e.userName,s=e.PLName,t.next=4,fetch(n,{method:"POST",body:JSON.stringify({urls:a,userName:r,PLName:s}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error("Error: ",t)}));case 4:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}var C="";function N(){return S.apply(this,arguments)}function S(){return S=Object(x.a)(O.a.mark((function t(){var e,n=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"http://localhost:9000/songs",t.next=3,fetch(e).then((function(t){return t.json()})).then((function(t){C=t.urls})).catch((function(t){new Error(t)}));case 3:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}n(39);var I=n(9);function L(){return(L=Object(x.a)(O.a.mark((function t(e){var n,a,r,s,i,c,u;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=new URL("https://www.googleapis.com/youtube/v3/search"),a={key:"AIzaSyC8YYP-9xK-D8XT4rtxX9OxcIxVBcPd-Lo",q:e,part:"snippet",maxResults:1,type:"video"},n.search=new URLSearchParams(a).toString(),t.next=6,fetch(n);case 6:return r=t.sent,t.next=9,r.json();case 9:return s=t.sent,i=s.items,c=Object(I.a)(i,1),u=c[0],t.abrupt("return",{title:u.snippet.title,id:u.id.videoId});case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",{title:e,id:e});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}var T,B=function(t){return L.apply(this,arguments)},E=document.documentElement,A="",D=[],M=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={html:"",value1:"https://www.youtube.com/watch?v=fDWpSQYmZqM",value2:"",urlArr:[],urlTitles:[]},a}return Object(u.a)(n,[{key:"inputBtnOnClick",value:function(){var t=Object(x.a)(O.a.mark((function t(e){var n,a,r,s,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".urlInput").value,t.next=3,B(n);case 3:a=t.sent,r=a.title,s=a.id,i="youtu.be/".concat(s),g.a.canPlay(i)?(this.handleClick(e,i),this.setState({urlTitles:[].concat(Object(m.a)(this.state.urlTitles),[r])})):this.renderError("Texto no v\xe1lido.");case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleClick",value:function(t,e){j()(".playMusic").removeClass("hidden"),this.changeOutPutLog("green","Hecho!"),this.state.urlArr.push(e),D.push(e),T=!0}},{key:"handleDelClick",value:function(t){this.state.urlArr.splice(+t.target.getAttribute("data-key"),1),this.state.urlTitles.splice(+t.target.getAttribute("data-key"),1),D.splice(+t.target.getAttribute("data-key"),1),this.changeOutPutLog("gray","Borrado"),this.state.urlArr.length<1?(j()(".playMusic").addClass("hidden"),T=!1,this.changeOutPutLog("red","Playlist Borrada")):T=!0}},{key:"handleClearPlaylist",value:function(t){j()(".playMusic").addClass("hidden"),this.changeOutPutLog("red","Playlist Borrada"),T=!1,this.setState({urlArr:[]}),this.setState({urlTitles:[]}),D=[]}},{key:"changeOutPutLog",value:function(t,e){var n=this;E.style.setProperty("--output-color",t),this.setState({html:A="".concat(e,"<br />")}),setTimeout((function(){n.setState({html:A="<br />"})}),5e3)}},{key:"handleChange",value:function(t){this.setState({value1:t.target.value})}},{key:"handleChangeSave",value:function(t){this.setState({value2:t.target.value})}},{key:"urlInputOnKeyDown",value:function(t){"Enter"===t.key&&(this.inputBtnOnClick(t),this.clearInputs(t))}},{key:"GETdata",value:function(){var t=Object(x.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:if(C){t.next=4;break}return t.abrupt("return");case 4:this.setState({urlArr:C}),this.setState({urlTitles:D}),D=C;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"POSTdata",value:function(){var t=Object(x.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(D.length<1)){t.next=2;break}return t.abrupt("return");case 2:w({urls:D,userName:"Jose",PLName:document.querySelector(".savePlaylistInput").value}),this.changeOutPutLog("green","Playlist Guardada!"),this.clearInputs(e);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"saveHandleKeyDown",value:function(t){"Enter"===t.key&&this.POSTdata(t)}},{key:"clearInputs",value:function(t){this.setState({value1:"",value2:""})}},{key:"renderError",value:function(t){this.changeOutPutLog("red",t)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"uploadFiles ",children:[Object(h.jsx)("p",{className:"p1",children:"Canci\xf3n/playlist para a\xf1adir a la cola:"}),Object(h.jsx)("input",{className:"urlInput",type:"url",onKeyDown:this.urlInputOnKeyDown.bind(this),onFocus:this.clearInputs.bind(this),onChange:this.handleChange.bind(this),value:this.state.value1}),Object(h.jsx)("button",{className:"inputBtn",onClick:this.inputBtnOnClick.bind(this),children:"A\xf1adir"}),Object(h.jsx)("div",{className:"outPutUrl",dangerouslySetInnerHTML:{__html:A}}),Object(h.jsx)("br",{}),T&&Object(h.jsxs)("div",{children:["Lista de reproducci\xf3n",Object(h.jsx)("button",{className:"delPLButton",onClick:this.handleClearPlaylist.bind(this),children:"Borrar Playlist"})]}),Object(h.jsx)("ul",{className:"songsList",children:this.state.urlTitles.map((function(e,n){return Object(h.jsxs)("li",{className:"songUrl","data-key":n,children:[e," ",Object(h.jsxs)("button",{className:"delSong","data-key":n,onClick:t.handleDelClick.bind(t),children:["Eliminar"," "]},n)]},n)}))}),Object(h.jsxs)("div",{className:"apiGUI hidden",children:[Object(h.jsxs)("div",{children:["Guardar Playlist con nombre:",Object(h.jsx)("input",{className:"savePlaylistInput",type:"text",value:this.state.value2,onChange:this.handleChangeSave.bind(this),onFocus:this.clearInputs.bind(this),onKeyDown:this.saveHandleKeyDown.bind(this)}),Object(h.jsx)("button",{className:"savePlaylist",onClick:this.POSTdata.bind(this),children:"Guardar"})]}),Object(h.jsxs)("div",{children:["Obtener Playlist por nombre:",Object(h.jsx)("input",{type:"text",className:"getPlaylistInput"}),Object(h.jsx)("button",{className:"getPlaylist",onClick:this.GETdata.bind(this),children:"Obtener"})]})]})]})}}]),n}(r.a.Component);n(40);function G(t,e,n){return Object(h.jsx)("button",{onClick:t,className:e,children:e})}var U=function(t){var e=Object(a.useState)(null),n=Object(I.a)(e,2),r=n[0],s=n[1],i=Object(a.useState)(!0),c=Object(I.a)(i,2),u=c[0],l=c[1];function o(){return(o=Object(x.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(D.length<1)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,s(D);case 4:return t.next=6,l(!0);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return(d=Object(x.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(null);case 2:if(!(D.length<1)){t.next=4;break}return t.abrupt("return");case 4:s(D);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var t=j()(".uploadFiles");Object(I.a)(t,1)[0].addEventListener("click",function(){var t=Object(x.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout((function(){"inputBtn"!==e.target.className&&"delPLButton"!==e.target.className&&"delSong"!==e.target.className||p()}),300);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(h.jsxs)("div",{className:"playMusic hidden",children:[Object(h.jsx)(g.a,{className:"react-player",url:r,height:"400px",width:"500px",playing:u}),G((function(t){return o.apply(this,arguments)}),"play"),G((function(){l(!1)}),"pause"),G((function(){s(null),l(!1)}),"stop")]})};var K=function(){return Object(h.jsxs)("div",{className:"app ",children:[Object(h.jsx)(v,{}),Object(h.jsx)(M,{}),Object(h.jsx)(U,{})]})};n(41);i.a.render(Object(h.jsx)("div",{className:"",children:Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(K,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b6c717c4.chunk.js.map