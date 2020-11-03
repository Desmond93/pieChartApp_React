(this["webpackJsonppie-chart"]=this["webpackJsonppie-chart"]||[]).push([[0],{14:function(t,e,a){t.exports={pageForm:"PageForm_pageForm__Idg4p",buttonAddNewPosition:"PageForm_buttonAddNewPosition__3zW7T"}},19:function(t,e,a){t.exports={unit:"PageDigramSector_unit__21Set",render:"PageDigramSector_render__8dff_"}},21:function(t,e,a){t.exports=a(33)},26:function(t,e,a){},27:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(17),r=a.n(i),s=(a(26),a(27),a(6)),c=a.n(s),m=a(5),p=function(){return o.a.createElement("div",{className:c.a.header},o.a.createElement(m.b,{className:c.a.linkToPages,activeClassName:c.a.activeLink,to:"/form"},"Form"),o.a.createElement(m.b,{className:c.a.linkToPages,activeClassName:c.a.activeLink,to:"diagram"},"Diagram"))},u=a(20),l=a(4),d=function(t){return{type:"SET-SECTOR-NAME",sectorName:t}},N=function(t,e){switch(e.type){case"POSITION-NAME-CHANGE":return Object(l.a)(Object(l.a)({},t),{},{positions:t.positions.map((function(t){return t.id===e.positionId&&(t.positionName=e.positionNameText),t}))});case"POSITION-QUANTITY-CHANGE":return Object(l.a)(Object(l.a)({},t),{},{positions:t.positions.map((function(t){return t.id===e.positionId&&(t.positionQuantity=e.positionQuantityValue),t})),totalQuantity:0});case"ADD-NEW-POSITION":var a=Object(l.a)({},t);return a.positions=[].concat(Object(u.a)(t.positions),[{id:a.positionId++,positionName:"",positionQuantity:"",positionColor:"#"+(Math.random().toString(16)+"000000").substring(2,8).toUpperCase()}]),a;case"SET-TOTAL-QUANTITY":var n=Object(l.a)({},t);return t.positions.forEach((function(t){n.totalQuantity+=+t.positionQuantity})),n;case"SET-SECTOR-NAME":return Object(l.a)(Object(l.a)({},t),{},{sectorName:e.sectorName});default:return t}},f=a(9),h=a.n(f),E=function(t){return o.a.createElement("div",{className:h.a.formComponent},o.a.createElement("div",{className:h.a.formComponentItem},"Position "+(t.id+1)+" name: ",o.a.createElement("input",{value:t.positionName,onChange:function(e){var a,n;t.dispatch((a=e.target.value,n=t.id,{type:"POSITION-NAME-CHANGE",positionNameText:a,positionId:n}))}})),o.a.createElement("div",{className:h.a.formComponentItem},"Position "+(t.id+1)+" quantity: ",o.a.createElement("input",{type:"number",value:t.positionQuantity,onChange:function(e){var a,n;t.dispatch((a=e.target.value,n=t.id,{type:"POSITION-QUANTITY-CHANGE",positionQuantityValue:a,positionId:n}))},onBlur:function(){var e;t.dispatch({type:"SET-TOTAL-QUANTITY",totalQuantity:e})}})))},g=a(14),_=a.n(g),v=function(t){var e=t.positions.map((function(e){return o.a.createElement(E,{key:e.id,positionName:e.positionName,positionQuantity:e.positionQuantity,dispatch:t.dispatch,id:e.id})}));return o.a.createElement("div",{className:_.a.pageForm},o.a.createElement("button",{className:_.a.buttonAddNewPosition,onClick:function(){t.dispatch({type:"ADD-NEW-POSITION"})}},"Add position"),e)},y=a(1),T=a(19),P=a.n(T),I=function(t){return o.a.createElement("circle",{className:P.a.unit,r:"15.9",cx:"50%",cy:"50%",stroke:t.sectorColor,strokeDasharray:t.sectorPercents+" 100",strokeDashoffset:-1*t.sectorShift,onMouseEnter:function(){t.dispatch(d(t.sectorName?t.sectorName:"Unnamed position"))},onMouseOut:function(){t.dispatch(d(""))}})},A=a(7),b=a.n(A),C=function(t){var e=0,a=t.state.positions.map((function(a){var n=a.positionQuantity/t.state.totalQuantity*100,i=o.a.createElement(I,{sectorPercents:n,sectorShift:e,sectorName:a.positionName,sectorColor:a.positionColor,dispatch:t.dispatch,key:a.id});return e+=n,i}));return t.state.totalQuantity?o.a.createElement("div",{className:b.a.pageDiagram},"Total quantity: ",t.state.totalQuantity,o.a.createElement("div",{className:b.a.sectorName},t.state.sectorName?"Sector name: "+t.state.sectorName:""),o.a.createElement("div",{className:b.a.canvas},o.a.createElement("svg",{className:b.a.chart,viewBox:"0 0 50 50"},a))):o.a.createElement("h1",{className:b.a.warningAboutEmptyPositions},"Enter the quantity of at least one item")};var O=function(t){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(y.a,{path:"/form",render:function(){return o.a.createElement(v,{positions:t.state.positions,dispatch:t.dispatch})}}),o.a.createElement(y.a,{path:"/diagram",render:function(){return o.a.createElement(C,{state:t.state,dispatch:t.dispatch})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S={_state:{positions:[],positionId:0,totalQuantity:0,sectorName:""},getState:function(){return this._state},rerenderApp:function(){},subscribe:function(t){this.rerenderApp=t},dispatch:function(t){this._state=N(this._state,t),this.rerenderApp(S)}},Q=S,k=function(t){r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,null,o.a.createElement(O,{state:t.getState(),dispatch:t.dispatch.bind(t)}))),document.getElementById("root"))};k(Q),Q.subscribe(k),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},6:function(t,e,a){t.exports={header:"Header_header__zBt2q",linkToPages:"Header_linkToPages__3vPs2",activeLink:"Header_activeLink__2S4lW"}},7:function(t,e,a){t.exports={pageDiagram:"PageDigram_pageDiagram__7UaV-",warningAboutEmptyPositions:"PageDigram_warningAboutEmptyPositions__3WfE3",sectorName:"PageDigram_sectorName__3j4i_",canvas:"PageDigram_canvas__2xALX",chart:"PageDigram_chart__1oe_I"}},9:function(t,e,a){t.exports={formComponent:"FormComponent_formComponent__3vMPC",formComponentItem:"FormComponent_formComponentItem__o_pB4"}}},[[21,1,2]]]);
//# sourceMappingURL=main.603fe4df.chunk.js.map