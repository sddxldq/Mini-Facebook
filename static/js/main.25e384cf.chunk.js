(this.webpackJsonpminiface=this.webpackJsonpminiface||[]).push([[0],{55:function(e,s,t){},62:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},85:function(e,s,t){},86:function(e,s,t){},87:function(e,s,t){},88:function(e,s,t){},89:function(e,s,t){},90:function(e,s,t){},91:function(e,s,t){},92:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),r=t(43),n=t.n(r),i=(t(55),t(107)),l=t(108),o=t(109),j=t(110),b=t(19),d=t(11),u=function(e,s){switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:s.payload};default:return e}},m=t(0),p={user:{_id:"61a35c294fa5a6a4165e90da",username:"Daqian",email:"daqian@gmail.com",password:"$2b$10$7VXw/tejWZzXhy0y7Bd1juFqjEwDwCTR0fDS12u1DSxPUnxcFVaTe",profilePicture:"person/psbe.jpg",isAdmin:!1,desc:"Hello I am a mechanical engineer",followers:["61a349bda63e586bb9fcc67c","61a352febf5193bc188eb8d7"],followings:["61a349bda63e586bb9fcc67c","61a352febf5193bc188eb8d7"],createdAt:{$date:{$numberLong:"1630877102817"}},updatedAt:{$date:{$numberLong:"1630877379108"}},__v:{$numberInt:"0"},city:"Beijing",from:"Vancouver",coverPicture:""},isFetching:!1,error:!1},h=Object(a.createContext)(p),O=function(e){var s=e.children,t=Object(a.useReducer)(u,p),c=Object(d.a)(t,2),r=c[0],n=c[1];return Object(m.jsx)(h.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:n},children:s})};function x(){var e=Object(a.useContext)(h).user,s="http://localhost:8800/images/";return Object(m.jsxs)("div",{className:"topbarContainer",children:[Object(m.jsx)("div",{className:"topbarLeft",children:Object(m.jsx)(b.b,{to:"/",children:Object(m.jsx)("span",{className:"logo",children:"SecretLand"})})}),Object(m.jsx)("div",{className:"topbarCenter",children:Object(m.jsxs)("div",{className:"searchBar",children:[Object(m.jsx)(i.a,{className:"searchIcon"}),Object(m.jsx)("input",{type:"text",placeholder:"search for friends, posts or videos",className:"searchInput"})]})}),Object(m.jsxs)("div",{className:"topbarRight",children:[Object(m.jsxs)("div",{className:"topbarLinks",children:[Object(m.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(m.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(m.jsxs)("div",{className:"topbarIcons",children:[Object(m.jsxs)("div",{className:"topbarIconItem",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(m.jsxs)("div",{className:"topbarIconItem",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(m.jsxs)("div",{className:"topbarIconItem",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(m.jsx)(b.b,{to:"/profile/".concat(e.username),children:Object(m.jsx)("img",{src:(e.profilePicture,s+e.profilePicture),alt:"",className:"topbarImg"})})]})]})}t(62);var f=t(111),g=t(112),N=t(113),v=t(114),I=t(115),y=t(116),w=t(117),L=t(118);var k=function(e){var s=e.user;return Object(m.jsxs)("li",{className:"sidebarFriend",children:[Object(m.jsx)("img",{src:"http://localhost:8800/images/"+s.profilePicture,alt:"",className:"sidebarfriendImg"}),Object(m.jsx)("span",{className:"sidebarFriendName",children:s.username})]})},T=[{id:1,profilePicture:"person/1.jpeg",username:"Safak Kocaoglu"},{id:2,profilePicture:"person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"person/10.jpeg",username:"Safak Kocaoglu"}];var C=function(){return Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsxs)("div",{className:"sidebarWrapper",children:[Object(m.jsxs)("ul",{className:"sidebarList",children:[Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(f.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(o.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(g.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(N.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(v.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(I.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(y.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(w.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(L.a,{className:"sidebarIcon"}),Object(m.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(m.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(m.jsx)("hr",{className:"sidebarHr"}),Object(m.jsx)("ul",{className:"sidebarFriendList",children:T.map((function(e){return Object(m.jsx)(k,{user:e},e.id)}))})]})})},P=t(4),S=t.n(P),F=t(10),R=(t(64),t(65),t(119)),B=t(120),_=t(121),D=t(122),A=t(123),U=t(27),E=t(28),q=t(29),V=t(124),W=t(8),G=t.n(W);var $=function(){var e=Object(a.useContext)(h).user,s="http://localhost:8800/images/",t=Object(a.useRef)(),c=Object(a.useState)(null),r=Object(d.a)(c,2),n=r[0],i=r[1],l=function(){var s=Object(F.a)(S.a.mark((function s(a){var c,r,i;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),c={userId:e._id,desc:t.current.value},!n){s.next=16;break}return r=new FormData,i=Date.now()+n.name,r.append("name",i),r.append("file",n),c.img=i,s.prev=8,s.next=11,G.a.post("/upload",r);case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(8),console.log(s.t0);case 16:return s.prev=16,s.next=19,G.a.post("/posts",c);case 19:window.location.reload(),s.next=24;break;case 22:s.prev=22,s.t1=s.catch(16);case 24:case"end":return s.stop()}}),s,null,[[8,13],[16,22]])})));return function(e){return s.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("div",{className:"shareWrapper",children:[Object(m.jsxs)("div",{className:"shareTop",children:[Object(m.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/psbe.jpg",alt:"",className:"shareProfileImg"}),Object(m.jsx)("input",{placeholder:"What's in your mind "+e.username+"?",className:"shareInput",ref:t})]}),Object(m.jsx)("hr",{className:"shareHr"}),n&&Object(m.jsxs)("div",{className:"shareImgContainer",children:[Object(m.jsx)("img",{className:"shareImg",src:URL.createObjectURL(n),alt:""}),Object(m.jsx)(R.a,{className:"shareCancelImg",onClick:function(){return i(null)}})]}),Object(m.jsxs)("form",{className:"shareBottom",onSubmit:l,children:[Object(m.jsxs)("label",{htmlFor:"file",className:"shareOptions",children:[Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(B.a,{style:{color:U.a[500]},className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(m.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png, .jpeg, .jpg",onChange:function(e){return i(e.target.files[0])}})]}),Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(_.a,{style:{color:E.a[500]},className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(D.a,{style:{color:q.a[500]},className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(m.jsxs)("div",{className:"shareOption",children:[Object(m.jsx)(A.a,{style:{color:V.a[500]},className:"shareIcon"}),Object(m.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(m.jsx)("button",{className:"shareButton",type:"submit",children:"share"})]})]})})},H=(t(85),t(125)),K=t(49);var J=function(e){var s=e.post,t=Object(a.useState)(s.likes.length),c=Object(d.a)(t,2),r=c[0],n=c[1],i=Object(a.useState)(!1),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(a.useState)([]),p=Object(d.a)(u,2),O=p[0],x=p[1],f="http://localhost:8800/images/",g=Object(a.useContext)(h).user;Object(a.useEffect)((function(){(function(){var e=Object(F.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/users/?userId=".concat(s.userId));case 2:t=e.sent,x(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s.userId]);var N=function(){try{G.a.put("/posts/"+s._id+"/like",{userId:g._id})}catch(e){}n(o?r-1:r+1),j(!o)};return Object(m.jsx)("div",{className:"post",children:Object(m.jsxs)("div",{className:"postWrapper",children:[Object(m.jsxs)("div",{className:"postTop",children:[Object(m.jsxs)("div",{className:"postTopLeft",children:[Object(m.jsx)(b.b,{to:"profile/".concat(O.username),children:Object(m.jsx)("img",{src:O.profilePicture?f+O.profilePicture:f+"person/psbe.jpg",alt:"",className:"postProfileImg"})}),Object(m.jsx)("span",{className:"postUserName",children:O.username}),Object(m.jsx)("span",{className:"postDate",children:Object(K.a)(s.createdAt)})]}),Object(m.jsx)("div",{className:"postTopRight",children:Object(m.jsx)(H.a,{})})]}),Object(m.jsxs)("div",{className:"postCenter",children:[Object(m.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(m.jsx)("img",{src:f+s.img,alt:"",className:"postImg"})]}),Object(m.jsxs)("div",{className:"postBottom",children:[Object(m.jsxs)("div",{className:"postBottomLeft",children:[Object(m.jsx)("img",{className:"likeIcon",src:"".concat(f,"like.png"),alt:"",onClick:N}),Object(m.jsx)("img",{className:"likeIcon",src:"".concat(f,"heart.png"),alt:"",onClick:N}),Object(m.jsxs)("span",{className:"postLikeCounter",children:[" ",r," people like it"]})]}),Object(m.jsx)("div",{className:"postBottomRight",children:Object(m.jsxs)("span",{className:"postCommentText",children:[" ",s.comment," comments"]})})]})]})})};var z=function(e){var s=e.username,t=Object(a.useState)([]),c=Object(d.a)(t,2),r=c[0],n=c[1],i=Object(a.useContext)(h).user;return Object(a.useEffect)((function(){(function(){var e=Object(F.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return e.next=3,G.a.get("/posts/profile/"+s);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,G.a.get("/posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:t=e.t0,n(t.data.sort((function(e,s){return new Date(s.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s,i._id]),Object(m.jsx)("div",{className:"feed",children:Object(m.jsxs)("div",{className:"feedWrapper",children:[(!s||i.username===s)&&Object(m.jsx)($,{}),r.map((function(e){return Object(m.jsx)(J,{post:e},e._id)}))]})})};t(86),t(87);var M=function(e){var s=e.user;return Object(m.jsxs)("li",{className:"rightbarFriend",children:[Object(m.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(m.jsx)("img",{src:"http://localhost:8800/images/"+s.profilePicture,alt:"",className:"rightbarProfileImg"}),Object(m.jsx)("span",{className:"rightbarOnline"})]}),Object(m.jsx)("span",{className:"rightbarUsername",children:s.username})]})},X=t(126),Q=t(127);var Z=function(e){var s=e.user,t="http://localhost:8800/images/",c=Object(a.useState)([]),r=Object(d.a)(c,2),n=r[0],i=r[1],l=Object(a.useContext)(h).user,o=Object(a.useState)(l.followings.includes(null===s||void 0===s?void 0:s._id)),j=Object(d.a)(o,2),u=j[0],p=j[1];Object(a.useEffect)((function(){(function(){var e=Object(F.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get("/users/friends/"+s._id);case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[s]);var O=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"birthdayContainer",children:[Object(m.jsx)("img",{src:"".concat(t,"gift.png"),alt:"",className:"birthdayImg"}),Object(m.jsxs)("span",{className:"birthdayText",children:[Object(m.jsx)("b",{children:"Linda "})," and ",Object(m.jsx)("b",{children:"3 other friends"})," have a birthday today"]})]}),Object(m.jsx)("img",{src:"".concat(t,"Uvic.jpg"),alt:"",className:"rightbarAd"}),Object(m.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(m.jsx)("ul",{className:"rightbarFriendList",children:T.map((function(e){return Object(m.jsx)(M,{user:e},e.id)}))})]})},x=function(){var e=Object(F.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u){e.next=6;break}return e.next=4,G.a.put("/users/".concat(s._id,"/unfollow/"),{userId:l._id});case 4:e.next=8;break;case 6:return e.next=8,G.a.put("/users/".concat(s._id,"/follow/"),{userId:l._id});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:p(!u);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){return Object(m.jsxs)(m.Fragment,{children:[s.username!==l.username&&Object(m.jsxs)("button",{className:"rightbarFollowButton",onClick:x,children:[u?"unfollow":"follow",u?Object(m.jsx)(X.a,{}):Object(m.jsx)(Q.a,{})]}),Object(m.jsx)("h4",{className:"rightbarTitle",children:"Hey its my profile"}),Object(m.jsxs)("div",{className:"rightbarInfo",children:[Object(m.jsxs)("div",{className:"rightbarInfoItem",children:[Object(m.jsx)("span",{className:"righbarInfoKey",children:"City:"}),Object(m.jsx)("span",{className:"righbarInfoValue",children:s.city})]}),Object(m.jsxs)("div",{className:"rightbarInfoItem",children:[Object(m.jsx)("span",{className:"righbarInfoKey",children:"From:"}),Object(m.jsx)("span",{className:"righbarInfoValue",children:s.from})]}),Object(m.jsxs)("div",{className:"rightbarInfoItem",children:[Object(m.jsx)("span",{className:"righbarInfoKey",children:"Relation:"}),Object(m.jsx)("span",{className:"righbarInfoValue",children:"Single"})]})]}),Object(m.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(m.jsx)("div",{className:"rightbarFollowings",children:n.map((function(e){return Object(m.jsx)(b.b,{to:"/profile/"+e.username,children:Object(m.jsxs)("div",{className:"rightbarFollowing",children:[Object(m.jsx)("img",{src:e.profilePicture?t+e.profilePicture:null,alt:"",className:"rightbarFollowingImg"}),Object(m.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})},e._id)}))})]})};return Object(m.jsx)("div",{className:"rightbar",children:Object(m.jsx)("div",{className:"rightbarWrapper",children:s?Object(m.jsx)(f,{}):Object(m.jsx)(O,{})})})};t(88);function Y(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"homeContainer",children:[Object(m.jsx)(C,{}),Object(m.jsx)(z,{}),Object(m.jsx)(Z,{home:!0})]})]})}t(89);var ee=t(3);function se(){var e="http://localhost:8800/images/",s=Object(a.useState)(""),t=Object(d.a)(s,2),c=t[0],r=t[1],n=Object(ee.h)().username;return Object(a.useEffect)((function(){(function(){var e=Object(F.a)(S.a.mark((function e(){var s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/users/?username=".concat(n));case 2:s=e.sent,r(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"homeContainer",children:[Object(m.jsx)(C,{}),Object(m.jsxs)("div",{className:"profileRight",children:[Object(m.jsxs)("div",{className:"profileRightTop",children:[Object(m.jsxs)("div",{className:"profileCover",children:[Object(m.jsx)("img",{src:c?e+c.coverPicture:"",alt:"",className:"profileCoverImg"}),Object(m.jsx)("img",{src:c?e+c.profilePicture:"",alt:"",className:"profileUserImg"})]}),Object(m.jsxs)("div",{className:"profileInfo",children:[Object(m.jsx)("h4",{className:"profileInfoName",children:c.username}),Object(m.jsx)("span",{className:"profileInfoDesc",children:c.desc})]})]}),Object(m.jsxs)("div",{className:"profileRightBottom",children:[Object(m.jsx)(z,{username:n}),c._id&&Object(m.jsx)(Z,{user:c})]})]})]})]})}t(90);var te=function(){var e=Object(F.a)(S.a.mark((function e(s,t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGIN_START"}),e.prev=1,e.next=4,G.a.post("/auth/login",s);case 4:a=e.sent,t({type:"LOGIN_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOGIN_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s,t){return e.apply(this,arguments)}}(),ae=t(128);var ce=function(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useContext)(h),c=t.user,r=t.isFetching,n=t.dispatch;return console.log(c),Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"loginWrapper",children:[Object(m.jsxs)("div",{className:"loginLeft",children:[Object(m.jsx)("h3",{className:"loginLogo",children:"SecretLand"}),Object(m.jsx)("span",{className:"loginDesc",children:"There is no secrets in SecretLand."})]}),Object(m.jsx)("div",{className:"loginRight",children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),te({email:e.current.value,password:s.current.value},n)},className:"loginBox",children:[Object(m.jsx)("input",{placeholder:"Email",type:"email",required:!0,ref:e,className:"loginInput"}),Object(m.jsx)("input",{placeholder:"Password",type:"password",required:!0,ref:s,minLength:"6",className:"loginInput"}),Object(m.jsx)("button",{className:"loginButton",type:"submit",disabled:r,children:r?Object(m.jsx)(ae.a,{size:"20px"}):"Log In"}),Object(m.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(m.jsx)("button",{className:"loginRegisterButton",children:r?Object(m.jsx)(ae.a,{size:"20px"}):"Create a New Account"})]})})]})})};t(91);var re=function(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(ee.g)(),n=function(){var a=Object(F.a)(S.a.mark((function a(n){var i;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),c.current.value===t.current.value){a.next=5;break}c.current.setCustomValidity("Passwords don't match!"),a.next=15;break;case 5:return i={username:e.current.value,email:s.current.value,password:t.current.value},a.prev=6,a.next=9,G.a.post("/auth.register",i);case 9:r.push("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[6,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"loginWrapper",children:[Object(m.jsxs)("div",{className:"loginLeft",children:[Object(m.jsx)("h3",{className:"loginLogo",children:"SecretLand"}),Object(m.jsx)("span",{className:"loginDesc",children:"There is no secrets in SecretLand."})]}),Object(m.jsx)("div",{className:"loginRight",children:Object(m.jsxs)("form",{onSubmit:n,className:"loginBox",children:[Object(m.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(m.jsx)("input",{placeholder:"Email",type:"email",required:!0,ref:s,className:"loginInput"}),Object(m.jsx)("input",{placeholder:"Password",type:"password",required:!0,ref:t,className:"loginInput",min:"6"}),Object(m.jsx)("input",{placeholder:"Password Again",type:"password",required:!0,ref:c,className:"loginInput",min:"6"}),Object(m.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(m.jsx)("button",{className:"loginRegusterButton",children:"Log into you account"})]})})]})})};var ne=function(){var e=Object(a.useContext)(h).user;return Object(m.jsx)(b.a,{children:Object(m.jsxs)(ee.d,{children:[Object(m.jsx)(ee.b,{exact:!0,path:"/",children:e?Object(m.jsx)(Y,{}):Object(m.jsx)(re,{})}),Object(m.jsx)(ee.b,{path:"/login",children:e?Object(m.jsx)(ee.a,{to:"/"}):Object(m.jsx)(ce,{})}),Object(m.jsx)(ee.b,{path:"/register",children:e?Object(m.jsx)(ee.a,{to:"/"}):Object(m.jsx)(re,{})}),Object(m.jsx)(ee.b,{path:"/profile/:username",children:Object(m.jsx)(se,{})})]})})};n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{children:Object(m.jsx)(ne,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.25e384cf.chunk.js.map