(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){e.exports=a(56)},45:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),l=(a(42),a(43),a(44),a(45),a(24)),r=a.n(l),o=a(30),i=a(12),m=a(13),u=a(17),f=a(15),E=a(14),h=(a(47),a(60)),d=a(61),g=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",className:"footer",variant:"dark"},c.a.createElement(h.a.Brand,{href:"#home"},"Delarea Light App"),c.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(d.a,{className:"mr-auto"},c.a.createElement(d.a.Link,{href:"#Info"},"Info"),c.a.createElement(d.a.Link,{href:"#About"},"About")))))}}]),a}(n.Component),p=a(59),b=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e,n){return Object(i.a)(this,a),t.call(this,e,n)}return Object(m.a)(a,[{key:"render",value:function(){return"on"===this.props.state?c.a.createElement("div",{className:"container justify-content-center"},c.a.createElement("h1",{className:"lightStatusText"}," Hey!, the light is "),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("img",{src:"/assets/images/on.png",className:"stateImage "}))):"off"===this.props.state?c.a.createElement("div",{className:"container justify-content-center"},c.a.createElement("h1",{className:"lightStatusText"}," Hey!, the light is "),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("img",{src:"/assets/images/off.png",className:"stateImage "}))):c.a.createElement("div",{className:"container justify-content-center"},c.a.createElement("h1",{className:"lightStatusText"}," Error! call eyal or shaked "),c.a.createElement("h2",{className:"lightStatusText"},this.props.state),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("img",{src:"/assets/images/error.png",className:"stateImage "})))}}]),a}(n.Component),v=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e,n){var c;return Object(i.a)(this,a),(c=t.call(this,e,n)).getRequest=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://10.100.102.44:5000"+t);case 2:return a=e.sent,e.next=5,a.json().then((function(e){return e})).then(console.log());case 5:n=e.sent,console.log(t+" was pressed"),"/get_state"===t?1==n.express?c.setState({state:"off"}):0==n.express&&c.setState({state:"on"}):c.setState({state:n.express});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.state={data:"press get state",state:"null"},c.getRequest=c.getRequest.bind(Object(u.a)(c)),c.getRequest("/get_state"),c}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container main"},c.a.createElement("div",null,c.a.createElement(b,{state:this.state.state})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(p.a,{className:"controlButton",variant:"success",onClick:function(){return e.getRequest("/on")}},"On")),c.a.createElement("div",{className:"col-6"},c.a.createElement(p.a,{className:"controlButton",variant:"danger",onClick:function(){return e.getRequest("/off")}},"Off"))),c.a.createElement("div",{className:"row"}))}}]),a}(n.Component),N=a(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=function(e){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},c.a.createElement("h5",null,"Links"),c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("li",null,c.a.createElement(N.b,{to:"/home"},"Home")),c.a.createElement("li",null,c.a.createElement(N.b,{to:"/aboutus"},"About Us")),c.a.createElement("li",null,c.a.createElement(N.b,{to:"/contactus"},"Contact Us")))),c.a.createElement("div",{className:"col-7 col-sm-5"},c.a.createElement("h5",null,"Our Address"),c.a.createElement("address",{className:"address"},"\u05dc\u05d0\u05d4 \u05d2\u05d5\u05dc\u05d3\u05d1\u05e8\u05d2 10",c.a.createElement("br",null),"\u05de\u05d3\u05e8\u05d3\u05e9\u05ea \u05d1\u05df \u05d2\u05d5\u05e8\u05d9\u05d5\u05df",c.a.createElement("br",null),c.a.createElement("i",{className:"fa fa-phone fa-lg"}),": 08-653-2183",c.a.createElement("br",null),c.a.createElement("i",{className:"fa fa-envelope fa-lg"})," ",c.a.createElement("a",{href:"mailto:RoseyStella@food.net"},"RoseyStella@food.net"))),c.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},c.a.createElement("div",{className:"text-center"},c.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},c.a.createElement("i",{className:"fa fa-google-plus"})),c.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},c.a.createElement("i",{className:"fa fa-youtube"}))))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-auto"},c.a.createElement("p",null,"\xa9 Copyright 2020 Rosey Stella")))))};Object(s.render)(c.a.createElement(N.a,null,c.a.createElement(g,null),c.a.createElement(v,null),c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.65a313fc.chunk.js.map