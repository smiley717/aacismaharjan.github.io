(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/avatar.a42176f4.jpg"},function(e,a,t){e.exports=t.p+"static/media/resume.f3dfe663.pdf"},,,function(e,a,t){e.exports=t.p+"static/media/thumb.be5e8be4.png"},function(e,a,t){e.exports=t.p+"static/media/hamrojourney.23fb6110.png"},function(e,a,t){e.exports=t.p+"static/media/himalayanresort.29a7b106.png"},function(e,a,t){e.exports=t.p+"static/media/rms.86885b54.png"},function(e,a,t){e.exports=t.p+"static/media/quizbee.b34977b6.png"},function(e,a,t){e.exports=t.p+"static/media/youtube-clone.f4940144.png"},function(e,a,t){e.exports=t.p+"static/media/simple_portfolio.7ebadcf6.png"},function(e,a,t){e.exports=t.p+"static/media/coolors.730804f4.png"},function(e,a,t){e.exports=t.p+"static/media/landing_page_template.94f80a85.png"},function(e,a,t){e.exports=t.p+"static/media/getwatch.6a34d1ad.png"},,,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(15),i=t.n(o),s=(t(38),t(39),t(12)),c=t(16),l=t.n(c);function m(){var e=Object(r.useState)(l.a),a=Object(s.a)(e,2),t=a[0],o=a[1],i=Object(r.useState)(""),c=Object(s.a)(i,2),m=c[0],p=c[1];return Object(r.useEffect)((function(){fetch("https://api.github.com/users/aacismaharjan").then((function(e){return e.json()})).then((function(e){e.avatar_url&&(o(e.avatar_url),p(e.name))})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"/"},n.a.createElement("span",{className:"d-block d-lg-none"},m),n.a.createElement("span",{className:"d-none d-lg-block"},n.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:t,alt:"Aashish Maharjan"}))),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#portfolio"},"Portfolio")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#codepen"},"Codepen")))))}function p(e){var a=e.id,t=e.title,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"resume-section",id:a},n.a.createElement("div",{className:"resume-section-content"},t&&n.a.createElement("h2",{className:"mb-5"},t),r)),n.a.createElement("hr",{className:"m-0"}))}var h=t(17),u=t.n(h),d=function(e){var a=e.href,t=e.icon;return n.a.createElement("a",{className:"social-icon",href:a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab ".concat(t)}))};function g(){return n.a.createElement(p,{id:"about"},n.a.createElement("h1",{className:"mb-0"},"Aashish",n.a.createElement("span",{className:"text-primary"},"Maharjan")),n.a.createElement("div",{className:"subheading mb-3"},"Purano Kalimati, Kathmandu, Nepal \xb7",n.a.createElement("a",{href:"mailto:aashishmaharjan2001@gmail.com"},"aashishmaharjan2001@gmail.com")),n.a.createElement("p",{className:"lead mb-4"},"Aashish Maharjan connects online brands to their target audiences for the perfect communicating experience. At the Gyanodaya School, Aashish learned the importance of applying classic web designing ideas to modern brands strategies from experts in the field, including his Computer Teacher, Mr. Mannor Shakya."),n.a.createElement("div",{className:"btn-group mb-5"},n.a.createElement("button",{className:"btn btn-primary btn-custom py-2 px-5",type:"submit",onClick:function(){return window.open(u.a)}},"Download CV")),n.a.createElement("div",{className:"social-icons"},[{href:"https://www.linkedin.com/in/aashish-maharjan-788b661b0/",icon:"fa-linkedin-in"},{href:"https://github.com/aacismaharjan",icon:"fa-github"},{href:"https://twitter.com/aacismhrzn",icon:"fa-twitter"},{href:"https://www.facebook.com/aashishmaharjan.2001",icon:"fa-facebook-f"}].map((function(e,a){var t=e.href,r=e.icon;return n.a.createElement(d,{href:t,icon:r,key:a})}))))}var b=t(18),f=t(19),v=t(32),E=t(31),y=function(e){var a=e.skill,t=a.title,r=a.progress,o=e.secondary,i=void 0!==o&&o;return n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated ".concat(i?"bg-info":""),role:"progressbar",style:{width:r}},n.a.createElement("span",{className:"text-left pl-2"},t)))},N=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={workData:[{icon:"fa-check",text:"Mobile-First, Responsive Design"},{icon:"fa-check",text:"Cross Browser Testing & Debugging"},{icon:"fa-check",text:"Cross Functional Teams"},{icon:"fa-check",text:"Agile Development & Scrum"}],skills:[{title:"HTML",progress:"90%"},{title:"CSS",progress:"80%"},{title:"Javascript",progress:"65%"},{title:"Python",progress:"35%"},{title:"C Programming",progress:"40%"},{title:"Photoshop / Figma",progress:"60%"}],frameworks:[{title:"Bootstrap",progress:"60%"},{title:"Material-UI",progress:"30%"},{title:"React.js",progress:"55%"},{title:"Django",progress:"30%"}]},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this.state,a=e.skills,t=e.frameworks,r=a.map((function(e,a){return n.a.createElement("div",{className:"col-md-8 py-1",key:a},n.a.createElement(y,{skill:e}))})),o=t.map((function(e,a){return n.a.createElement("div",{className:"col-md-8 py-1",key:a},n.a.createElement(y,{skill:e,secondary:!0}))}));return n.a.createElement(p,{id:"skills",title:"Skills"},n.a.createElement("div",{className:"subheading mb-3"},"Coding Languages"),n.a.createElement("div",{className:"row mb-4"},r),n.a.createElement("div",{className:"subheading mb-3"},"Frameworks / Libraries"),n.a.createElement("div",{className:"row mb-4"},o))}}]),t}(r.Component);function j(e){var a=e.card,t=a.img,r=a.title,o=a.desc,i=a.demo,s=a.source;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-thumbnail",style:{backgroundImage:"url(".concat(t,")")}}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"title"},r),n.a.createElement("p",null,o),n.a.createElement("div",{className:"btn-grp"},n.a.createElement("a",{href:i,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),n.a.createElement("a",{href:s,className:"btn btn-secondary",target:"_blank",rel:"noopener noreferrer"},"Source Code"))))}var w=t(20),k=t.n(w),S=t(21),C=t.n(S),x=t(22),M=t.n(x),T=t(23),R=t.n(T),_=t(24),A=t.n(_),J=t(25),L=t.n(J),P=t(26),D=t.n(P),O=t(27),z=t.n(O),F=t(28),H=t.n(F),I=t(29),W=t.n(I);function B(){var e=[{img:W.a,title:"Apple Watch - ReactJs Template",desc:"Created with highly reusable components, can be updated from remote file.",demo:"https://getwatch.netlify.app/",source:"https://github.com/aacismaharjan/react_landing_page"},{img:M.a,title:"Himalayan Resort - ReactJS",desc:"A resort for fictional hotel, in which we can filter out the hotel rooms and see specific info about the hotel.",demo:"https://himalayanresort.netlify.app/",source:"https://github.com/aacismaharjan/himalayanresort"},{img:k.a,title:"Corona Tracker - ReactJS",desc:"It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.",demo:"https://aacismaharjan.github.io/coronatracker/",source:"https://github.com/aacismaharjan/coronatracker"},{img:L.a,title:"Youtube Clone - ReactJS",desc:"Simple Youtube Clone with React.js. It utilizes the Youtube api to fetch the data and display it",demo:"https://aacismaharjan.github.io/youtube-clone/",source:"https://github.com/aacismaharjan/youtube-clone"},{img:H.a,title:"Product Landing Page - HTML Template",desc:"Landing page for client with Modern Looks, Design and Framework!",demo:"https://aacismaharjan.github.io/product_landing_page/",source:"https://github.com/aacismaharjan/product_landing_page"},{img:D.a,title:"Simple Portfolio - HTML Template",desc:"Simple Portfolio Template using Pure HTML, CSS & Javascript. No use of any third party libraries.",demo:"https://aacismaharjan.github.io/simple_portfolio/",source:"https://github.com/aacismaharjan/simple_portfolio"},{img:C.a,title:"Hamro Journey - HTML, CSS & JS",desc:"This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.",demo:"https://aacismaharjan.github.io/hamrojourney/",source:"https://github.com/aacismaharjan/hamrojourney"},{img:A.a,title:"Quizbee - Reactjs and External Api",desc:"Simple Quizbee web app build with ReactJS which eats the api and interacts with users!",demo:"https://aacismaharjan.github.io/quizbee/",source:"https://github.com/aacismaharjan/quizbee"},{img:z.a,title:"Coolors Everywhere! - ReactJS",desc:"Coolors website for fullfiling every developers color need! Find colors, complementary colors, html colors & much more.",demo:"https://aacismaharjan.github.io/coolors/",source:"https://github.com/aacismaharjan/coolors"},{img:R.a,title:"Result Management System - C Programming",desc:"My first C Programming project in +2. It has CRUD operation only with File handling and has ton of features.",demo:"https://github.com/aacismaharjan/RMS/tree/master/Result%20Managaement%20System%20-%20Version%202.1.0%20-%20Compiled",source:"https://github.com/aacismaharjan/RMS"}];return n.a.createElement(p,{id:"portfolio",title:"portfolio"},n.a.createElement("div",{className:"cards"},e.map((function(e,a){return n.a.createElement(j,{card:e,key:a})}))))}var q=t(1),Y=function(e){var a=e.id,t="https://codepen.io/aashish2058/embed/".concat(a,"?theme-id=light&default-tab=result");return n.a.createElement("div",{className:"codepen-card"},n.a.createElement("iframe",{scrolling:"no",src:t,frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}))};function K(){return n.a.createElement(p,{id:"codepen",title:"Codepen"},n.a.createElement("div",{className:"codepen-cards"},n.a.createElement(Y,{id:"MWydyoe"})))}var Q=function(){return n.a.createElement(q.c,null,n.a.createElement(q.a,{exact:!0,path:"/"},n.a.createElement("div",{id:"wrapper"},n.a.createElement(m,null),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement(g,null),n.a.createElement(N,null),n.a.createElement(B,null),n.a.createElement(K,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=t(9);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U.a,null,n.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.bc7f53e8.chunk.js.map