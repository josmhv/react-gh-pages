(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(18),c=n.n(s),i=n(5),u=n(6),l=n(8),o=n(7),h=n(0),p=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("li",{className:"links nav__item",id:this.props.id,children:this.props.texto})}}]),n}(r.a.Component),d=p,b=n(4),j=n.n(b),f=(n(25),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"handleClick",value:function(e){var t=e.target.id;"uploadFiles"===t&&this.renderGUI(t),"playMusic"===t&&this.renderGUI(t)}},{key:"renderGUI",value:function(e){j()(".".concat(e)).toggle()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"nav",children:Object(h.jsxs)("ul",{onClick:this.handleClick.bind(this),className:"nav__links",children:[Object(h.jsx)(d,{texto:"Reproducir Musica",id:"playMusic"}),Object(h.jsx)(d,{texto:"A\xf1adir canciones",id:"uploadFiles"})]})})})}}]),n}(r.a.Component)),v=f,y=n(1),O=n.n(y),x=n(3),m=n(10),k=n.n(m),g=n(19);function w(e){return N.apply(this,arguments)}function N(){return N=Object(x.a)(O.a.mark((function e(t){var n,a,r,s,c=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"http://localhost:9000/songs",a=t.urls,r=t.userName,s=t.PLName,e.next=4,fetch(n,{method:"POST",body:JSON.stringify({urls:a,userName:r,PLName:s}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error: ",e)}));case 4:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}var P="";function C(){return S.apply(this,arguments)}function S(){return S=Object(x.a)(O.a.mark((function e(){var t,n=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"http://localhost:9000/songs",e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){P=e.urls})).catch((function(e){new Error(e)}));case 3:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var E="http://localhost:9000/users";function L(){return L=Object(x.a)(O.a.mark((function e(t){var n,a=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:E,e.prev=1,e.next=4,fetch(n,{method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error("Error: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),L.apply(this,arguments)}var I=[],T=[];function B(){return A.apply(this,arguments)}function A(){return A=Object(x.a)(O.a.mark((function e(){var t,n,a,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:E,e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,e.next=10,a.forEach((function(e){T.push(e.userName)}));case 10:I=Object(g.a)(new Set(T)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Error: ".concat(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),A.apply(this,arguments)}n(38);var U,M=document.documentElement,G="",D=[],_=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={html:"",value1:"https://www.youtube.com/watch?v=gGHwYMwXX88",value2:"",urlArr:[]},a}return Object(u.a)(n,[{key:"inputBtnOnClick",value:function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector(".urlInput"),k.a.canPlay(n.value)?this.handleClick(t,n.value):this.renderError("URL no v\xe1lida.");case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e,t){j()(".playMusic").removeClass("hidden"),this.changeOutPutLog("green","Hecho!"),this.state.urlArr.push(t),D.push(t),U=!0}},{key:"handleDelClick",value:function(e){this.state.urlArr.splice(+e.target.getAttribute("data-key"),1),D.splice(+e.target.getAttribute("data-key"),1),this.changeOutPutLog("gray","Borrado"),this.state.urlArr.length<1?(j()(".playMusic").addClass("hidden"),U=!1,this.changeOutPutLog("red","Playlist Borrada")):U=!0}},{key:"handleClearPlaylist",value:function(e){j()(".playMusic").addClass("hidden"),this.changeOutPutLog("red","Playlist Borrada"),U=!1,this.setState({urlArr:[]}),D=[]}},{key:"changeOutPutLog",value:function(e,t){var n=this;M.style.setProperty("--output-color",e),this.setState({html:G="".concat(t,"<br />")}),setTimeout((function(){n.setState({html:G="<br />"})}),5e3)}},{key:"handleChange",value:function(e){this.setState({value1:e.target.value})}},{key:"handleChangeSave",value:function(e){this.setState({value2:e.target.value})}},{key:"urlInputOnKeyDown",value:function(e){"Enter"===e.key&&(this.inputBtnOnClick(e),this.clearInputs(e))}},{key:"GETdata",value:function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:if(P){e.next=4;break}return e.abrupt("return");case 4:this.setState({urlArr:P}),D=P;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"POSTdata",value:function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(D.length<1)){e.next=2;break}return e.abrupt("return");case 2:w({urls:D,userName:"Jose",PLName:document.querySelector(".savePlaylistInput").value}),this.changeOutPutLog("green","Playlist Guardada!"),this.clearInputs(t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveHandleKeyDown",value:function(e){"Enter"===e.key&&this.POSTdata(e)}},{key:"clearInputs",value:function(e){this.setState({value1:"",value2:""})}},{key:"renderError",value:function(e){this.changeOutPutLog("red",e)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"uploadFiles hidden",children:[Object(h.jsx)("p",{className:"p1",children:"Enlace de canci\xf3n/playlist para a\xf1adir a la cola:"}),Object(h.jsx)("input",{className:"urlInput",type:"url",onKeyDown:this.urlInputOnKeyDown.bind(this),onFocus:this.clearInputs.bind(this),onChange:this.handleChange.bind(this),value:this.state.value1}),Object(h.jsx)("button",{className:"inputBtn",onClick:this.inputBtnOnClick.bind(this),children:"A\xf1adir"}),Object(h.jsx)("div",{className:"outPutUrl",dangerouslySetInnerHTML:{__html:G}}),Object(h.jsx)("br",{}),U&&Object(h.jsxs)("div",{children:["Lista de reproducci\xf3n",Object(h.jsx)("button",{className:"delPLButton",onClick:this.handleClearPlaylist.bind(this),children:"Borrar Playlist"})]}),Object(h.jsx)("ul",{className:"songsList",children:this.state.urlArr.map((function(t,n){return Object(h.jsxs)("li",{className:"songUrl","data-key":n,children:[t," ",Object(h.jsxs)("button",{className:"delSong","data-key":n,onClick:e.handleDelClick.bind(e),children:["Eliminar"," "]},n)]},n)}))}),Object(h.jsxs)("div",{children:["Guardar Playlist con nombre:",Object(h.jsx)("input",{className:"savePlaylistInput",type:"text",value:this.state.value2,onChange:this.handleChangeSave.bind(this),onFocus:this.clearInputs.bind(this),onKeyDown:this.saveHandleKeyDown.bind(this)}),Object(h.jsx)("button",{className:"savePlaylist",onClick:this.POSTdata.bind(this),children:"Guardar"})]}),Object(h.jsxs)("div",{children:["Obtener Playlist por nombre:",Object(h.jsx)("input",{type:"text",className:"getPlaylistInput"}),Object(h.jsx)("button",{className:"getPlaylist",onClick:this.GETdata.bind(this),children:"Obtener"})]})]})}}]),n}(r.a.Component),q=n(12);n(39);function F(e,t,n){return Object(h.jsx)("button",{onClick:e,className:t,children:t})}var K=function(e){var t=Object(a.useState)(null),n=Object(q.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(!0),i=Object(q.a)(c,2),u=i[0],l=i[1];function o(){return(o=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(D.length<1)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s(D);case 4:return e.next=6,l(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(null);case 2:if(!(D.length<1)){e.next=4;break}return e.abrupt("return");case 4:s(D);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=j()(".uploadFiles");Object(q.a)(e,1)[0].addEventListener("click",(function(e){setTimeout((function(){"inputBtn"!==e.target.className&&"delPLButton"!==e.target.className&&"delSong"!==e.target.className||function(){p.apply(this,arguments)}()}),20)}))}),[]),Object(h.jsxs)("div",{className:"playMusic hidden",children:[Object(h.jsx)(k.a,{className:"react-player",url:r,height:"400px",width:"500px",playing:u}),F((function(e){return o.apply(this,arguments)}),"play"),F((function(){l(!1)}),"pause"),F((function(){s(null),l(!1)}),"stop")]})},H=(n(40),!1);function J(){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=document.querySelector(".userName").value).length<1)){e.next=3;break}return e.abrupt("return");case 3:if(n=z(t),!H){e.next=14;break}return e.next=7,X(n);case 7:if(!e.sent){e.next=9;break}throw new Error("Usuario ya existente");case 9:Q(t),t,Y(),e.next=20;break;case 14:return e.next=16,X(n);case 16:if(e.sent){e.next=18;break}throw new Error("Usuario no existente");case 18:t,Y();case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return e.abrupt("return",I.includes(t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){j()(".overlay").addClass("opacityZero hidden"),j()(".login").addClass("opacityZero hidden")}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String;return e.toLowerCase().replace(" ","_")}function Q(e){!function(e){L.apply(this,arguments)}(e)}function V(e){return Object(a.useEffect)((function(){document.querySelector(".sup-input").addEventListener("change",(function(){!function(){var e=document.querySelector(".sup-input"),t=document.querySelector("#sup-text");e.checked?(t.style.setProperty("--bg-sup","#537674"),t.style.setProperty("--hover-sup","rgba(71, 71, 71, 0.788)"),H=!0):(t.style.setProperty("--bg-sup","black"),t.style.setProperty("--hover-sup","#53767488"),H=!1)}()}))}),[]),Object(h.jsxs)("div",{className:"login",children:[Object(h.jsxs)("div",{id:"nombreUsuario",children:[Object(h.jsx)("p",{children:"Nombre de Usuario: "}),Object(h.jsx)("input",{className:"userName",type:"text"}),Object(h.jsx)("button",{onClick:J,children:"Enter"})]}),Object(h.jsxs)("div",{id:"signup",children:[Object(h.jsx)("p",{id:"miniText",children:"No tienes cuenta? "}),Object(h.jsxs)("label",{className:"sup-checkbox",children:[Object(h.jsx)("input",{type:"checkbox",className:"sup-input"}),Object(h.jsx)("span",{id:"sup-text",children:"Signing Up"})]})]})]})}var W=function(){return Object(h.jsxs)("div",{className:"app ",children:[Object(h.jsx)(v,{}),Object(h.jsx)(_,{}),Object(h.jsx)(K,{}),Object(h.jsx)(V,{}),Object(h.jsx)("div",{className:"overlay"})]})};n(41);c.a.render(Object(h.jsx)("div",{className:"",children:Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(W,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.02d8496e.chunk.js.map