(this["webpackJsonpvoynich-tree"]=this["webpackJsonpvoynich-tree"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),s=n(25),c=n.n(s),a=(n(34),n(2)),i=n(3),d=n(13),l=n(5),u=n(4),p=(n(35),n(26)),h=n.n(p),j=n(0),g=[{selector:"node",css:{label:"data(id)","text-valign":"center","text-halign":"center",height:"60px",width:"100px",shape:"barrel"}},{selector:"node.hidden",css:{display:"none"}},{selector:"edge",css:{"curve-style":"bezier","control-point-step-size":40,"target-arrow-shape":"triangle"}}],b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).cyRef=null,o.state={cy:{}},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t={elements:this.props.elements,style:g,container:this.cyRef},n=h()(t);n.zoom(1),n.center(n.filter("#n0")),n.nodes().addClass("hidden"),n.nodes(this.props.unlockedSelector).removeClass("hidden"),console.log(n.nodes()),n.on("select",(function(t){var n=t.target;n.isNode()&&e.props.onNodeClick?e.props.onNodeClick(n):n.isEdge()&&e.props.onEdgeClick&&e.props.onEdgeClick(n)})),this.setState({cy:n})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{style:{height:"1000px",width:"1000px","text-align":"left"},ref:function(t){null!==t&&(e.cyRef=t)}})}}]),n}(o.Component);function f(e){var t=e.neighborhood(".hidden");t.removeClass("hidden"),t.style({opacity:0}),t.animate({style:{opacity:1},duration:600,easing:"ease-in-sine"})}var v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"tick",value:function(){}},{key:"render",value:function(){return Object(j.jsx)(b,{elements:this.props.elements,unlockedSelector:"node#".concat(this.props.firstUnlocked),onNodeClick:f})}}]),n}(o.Component),y=v,O=[{group:"nodes",data:{id:"n0"}},{group:"nodes",data:{id:"n1"}},{group:"nodes",data:{id:"n2"}},{group:"nodes",data:{id:"n3"}},{group:"edges",data:{id:"e0",source:"n0",target:"n1"}},{group:"edges",data:{id:"e1",source:"n0",target:"n2"}},{group:"edges",data:{id:"e2",source:"n2",target:"n3"}}],k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={money:0},setInterval(o.tick.bind(Object(d.a)(o)),1e3),o}return Object(i.a)(n,[{key:"tick",value:function(){this.setState((function(e){return e.money++,e}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})," and save to reload.  1 2 3"]}),Object(j.jsxs)("p",{children:["money: ",this.state&&this.state.money]}),Object(j.jsx)(y,{elements:O,firstUnlocked:"n0"}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})}}]),n}(o.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),s(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(k,{})})),m()}},[[88,1,2]]]);
//# sourceMappingURL=main.6b2dee28.chunk.js.map