(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{1342:function(e,t,n){"use strict";n.r(t);n(1);var c,i,r,s,a,o,b,l=n(236),j=n(71),d=n(85),u=n(2),x=n(362),p=n(220),O=n(13),m=n(796),h=n(8),f=n(4),g=n(828),v=n(878),w=n(0),y=f.e.div(c||(c=Object(h.a)(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=f.e.img(i||(i=Object(h.a)(["\n  border-radius: 50%;\n  height: 64px;\n  margin-top: -12px;\n  width: 64px;\n  border: solid 2px white;\n\n  "," {\n    height: 128px;\n    margin-top: -24px;\n    width: 128px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=f.e.div(r||(r=Object(h.a)(["\n  margin-bottom: 8px;\n  text-align: center;\n"]))),D=Object(f.e)(u.s)(s||(s=Object(h.a)(["\n  overflow: visible;\n"]))),I=Object(f.e)(u.v)(a||(a=Object(h.a)(["\n  position: relative;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding-top: 0;\n  text-align: center;\n"])),(function(e){return e.bg})),z=Object(f.e)(u.U).attrs({as:"h2"})(o||(o=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),C=f.e.div(b||(b=Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n  margin-bottom: 16px;\n\n  "," {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    margin-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),U=function(e){var t=e.team,n=Object(O.b)().t;return Object(w.jsx)(y,{children:Object(w.jsxs)(D,{children:[Object(w.jsxs)(I,{bg:"/images/teams/".concat(t.background),children:[Object(w.jsx)(k,{children:Object(w.jsx)(S,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"})}),Object(w.jsx)(z,{color:t.textColor,children:t.name}),Object(w.jsx)(u.ac,{as:"p",color:t.textColor,children:n(t.description)})]}),Object(w.jsxs)(u.t,{children:[Object(w.jsxs)(C,{children:[Object(w.jsx)(v.a,{icon:u.J,title:t.users,subtitle:n("Active Members")}),Object(w.jsx)(v.a,{icon:u.Gb,title:n("Coming Soon"),subtitle:n("Team Points"),isDisabled:!0})]}),Object(w.jsx)(u.U,{as:"h3",children:n("Team Achievements")}),Object(w.jsx)(g.a,{})]})]})})},T=n(876);t.default=function(){var e=Object(j.i)().id,t=Number(e),n=Object(O.b)().t,c=-1!==p.a.findIndex((function(e){return e.id===t})),i=Object(m.a)(t);return c?i?Object(w.jsxs)(l.a,{children:[Object(w.jsx)(T.a,{}),Object(w.jsx)(u.S,{mb:"24px",children:Object(w.jsx)(d.a,{to:"/teams",children:Object(w.jsxs)(u.S,{alignItems:"center",children:[Object(w.jsx)(u.D,{color:"primary"}),Object(w.jsx)(u.ac,{color:"primary",children:n("Teams Overview")})]})})}),Object(w.jsx)(U,{team:i})]}):Object(w.jsx)(x.a,{}):Object(w.jsx)(j.a,{to:"/404"})}},796:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var c=n(1),i=n(32),r=n(66),s=n(166),a=function(e){var t=Object(i.c)((function(t){return t.teams.data[e]})),n=Object(r.b)();return Object(c.useEffect)((function(){n(Object(s.b)(e))}),[e,n]),t},o=function(){var e=Object(i.c)((function(e){return e.teams})),t=e.isInitialized,n=e.isLoading,a=e.data,o=Object(r.b)();return Object(c.useEffect)((function(){o(Object(s.c)())}),[o]),{teams:a,isInitialized:t,isLoading:n}}},797:function(e,t,n){"use strict";var c,i=n(8),r=n(4).e.div(c||(c=Object(i.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.a=r},828:function(e,t,n){"use strict";n(1);var c=n(2),i=n(13),r=n(0);t.a=function(e){var t=e.children,n=Object(i.b)().t;return Object(r.jsxs)(c.S,{flexDirection:"column",alignItems:"center",justifyContent:"center",p:"24px",children:[Object(r.jsx)(c.n,{width:"72px",height:"72px"}),Object(r.jsx)(c.U,{as:"h5",scale:"md",color:"textDisabled",children:t||n("Coming Soon!")})]})}},876:function(e,t,n){"use strict";n(1);var c=n(2),i=n(179),r=n(13),s=n(797),a=n(85),o=n(0),b=function(){var e=Object(r.b)().t;return Object(o.jsx)(c.s,{mb:"32px",isActive:!0,children:Object(o.jsx)(c.t,{children:Object(o.jsxs)(c.S,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(c.U,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(o.jsx)(c.ac,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(o.jsx)(c.o,{as:a.a,to:"/profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})};t.a=function(){var e=Object(r.b)().t,t=Object(i.b)(),n=t.isInitialized,a=t.profile,l=n&&!a;return Object(o.jsxs)(o.Fragment,{children:[l&&Object(o.jsx)(b,{}),Object(o.jsxs)(s.a,{children:[Object(o.jsx)(c.U,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(o.jsx)(c.ac,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}},878:function(e,t,n){"use strict";var c,i=n(6),r=n(49),s=(n(1),n(2)),a=n(8),o=n(4),b=Object(o.e)(s.ac)(c||(c=Object(a.a)(["\n  border: 2px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.tertiary}));b.defaultProps={p:"24px"};var l=b,j=n(0),d=["icon","title","subtitle","isDisabled"];t.a=function(e){var t=e.icon,n=e.title,c=e.subtitle,a=e.isDisabled,o=void 0!==a&&a,b=Object(r.a)(e,d);return Object(j.jsx)(l,Object(i.a)(Object(i.a)({},b),{},{children:Object(j.jsxs)(s.S,{alignItems:"start",children:[Object(j.jsx)(t,{width:"44px",mr:"24px",color:o?"textDisabled":"currentColor"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(s.U,{as:"h3",scale:"xl",color:o?"textDisabled":"text",children:n}),Object(j.jsx)(s.ac,{textTransform:"uppercase",color:o?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:c})]})]})}))}}}]);
//# sourceMappingURL=12.cb22d1c6.chunk.js.map