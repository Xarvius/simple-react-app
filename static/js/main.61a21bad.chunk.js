(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,a){e.exports=a(97)},64:function(e,t,a){},76:function(e,t){},78:function(e,t){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(51),r=a.n(l),s=(a(64),a(9)),c=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"justify-content-center"},i.a.createElement("h1",null,"Welcome!"),i.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ullamcorper lectus. Sed bibendum ligula sit amet orci placerat, in mollis tellus faucibus. Donec elementum mauris purus, et posuere arcu accumsan eget. Phasellus dignissim nec erat sit amet pharetra. Integer lectus elit, blandit quis tempor ut, commodo non nibh. Suspendisse gravida vehicula mi, et malesuada risus. Integer eleifend a leo at vulputate. Pellentesque venenatis lectus vel nibh accumsan, blandit vestibulum urna egestas. Morbi eros urna, mattis imperdiet tincidunt in, venenatis at sem. Praesent interdum egestas euismod. Vestibulum quis ullamcorper mauris, quis condimentum augue.",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Morbi id magna ut libero pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere quis elit vitae aliquet. Nam malesuada sodales nisi, non fringilla urna molestie in. Suspendisse et sapien id mauris bibendum iaculis pharetra sit amet ligula. Aenean vel nibh id sapien hendrerit pulvinar. Duis lacus nisi, laoreet et dui eget, commodo porta risus. Praesent ullamcorper vitae sem et aliquam. Maecenas pharetra libero diam, a vulputate lacus accumsan id. Mauris ut interdum leo, et convallis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Sed dignissim neque sagittis nisl cursus ornare. Nullam hendrerit libero at velit condimentum rhoncus. Morbi at gravida metus. Duis ipsum sem, euismod eget aliquam eget, iaculis sit amet justo. Sed sodales, lectus quis efficitur varius, libero orci maximus enim, a finibus nibh magna id ligula. Etiam at consectetur tortor. In pellentesque pulvinar dignissim. Quisque bibendum nunc libero, eleifend molestie felis elementum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet quam dolor. Nam ac magna tincidunt, malesuada lectus vel, luctus libero."))))},u=a(52),m=a(53),o=a(57),d=a(54),p=a(58),v=function(e){var t=e.change,a=e.click,n=e.title,l=e.artist;return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:a},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"artist"},"Artist: "),i.a.createElement("input",{type:"text",className:"form-control",id:"artist",name:"artist",onChange:t,value:l,required:!0}),"Example: Billie Eilish"),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"title"},"Title: "),i.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",onChange:t,value:n,required:!0}),"Example: COPYCAT"),i.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Find")))},h=function(e){var t=e.music,a=String(t.response);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("img",{src:t.cover,alt:"Album"})),i.a.createElement("div",{className:"col-sm"},i.a.createElement("p",null,i.a.createElement("strong",null,"Author:")," ",e.artist),i.a.createElement("p",null,i.a.createElement("strong",null,"Title:")," ",e.title),i.a.createElement("p",null,i.a.createElement("strong",null,"Album:")," ",t.album),i.a.createElement("p",null,i.a.createElement("strong",null,"Year:")," ",t.year),i.a.createElement("button",{className:"btn btn-outline-primary",onClick:e.click},"Show lyrics"),i.a.createElement("hr",null),e.show&&i.a.createElement("p",{className:"wraper"},a))))},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={music:"",artist:"",title:"",findedArtist:"",findedTitle:"",show:!1},n.handleApiFetch=function(e){e.preventDefault();var t=n.state.artist,a=n.state.title;n.setState({music:"",artist:"",title:""});var i="https://cors-anywhere.herokuapp.com/http://api.lololyrics.com/0.5/getLyric?artist=".concat(t,"&track=").concat(a);fetch(i,{mode:"cors"}).then(function(e){if(200===e.status)return e;throw Error(e.status)}).then(function(e){return e.text()}).then(function(e){n.convertXML(e),n.setState({findedArtist:t,findedTitle:a})}).catch(function(e){return"Error: 404"==e?alert("Not found"):alert("Please try later")})},n.convertXML=function(e){var t;(0,a(65).parseString)(e,function(e,a){t=a.result}),n.setState({music:t})},n.handleInput=function(e){var t=e.target.id;"artist"===t?n.setState({artist:e.target.value}):"title"===t&&n.setState({title:e.target.value})},n.handleShow=function(){n.setState({show:!n.state.show})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.music,a=e.artist,n=e.title,l=e.show,r=e.findedTitle,s=e.findedArtist;return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Find the song"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-4"},i.a.createElement(v,{click:this.handleApiFetch,change:this.handleInput,artist:a,title:n})),i.a.createElement("div",{className:"col-sm-1 verticalLine"}),i.a.createElement("div",{className:"col-sm-7"},t&&i.a.createElement(h,{music:t,artist:s,title:r,click:this.handleShow,show:l}))))}}]),t}(n.Component);var b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",exact:!0,component:c}),i.a.createElement(s.a,{path:"/finder",component:E})))},f=a(11);var g=function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item active"},i.a.createElement(f.b,{className:"nav-link",to:"/",exact:!0},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(f.b,{className:"nav-link",to:"/finder"},"Find music!"))))},N=function(){return i.a.createElement(i.a.Fragment,null,"Created by Arkadiusz Strzelec ------- API key: http://api.lololyrics.com/")};a(95),a(96);var w=function(){return i.a.createElement(f.a,{basename:"/simple-react-app"},i.a.createElement("div",{className:"app"},i.a.createElement(g,null),i.a.createElement("main",null,i.a.createElement(b,null)),i.a.createElement("footer",null,i.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.61a21bad.chunk.js.map