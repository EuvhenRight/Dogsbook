(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){e.exports={header:"Header_header__6Cl-9",loginblock:"Header_loginblock__1nLQ2"}},13:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return c});var a=n(169),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d0b641df-0481-4921-9184-40b83f97f479"}}),o={me:function(){return r.get("auth/me")},login:function(e,t,n,a){return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},u={getProfileApi:function(e){return r.get("profile/"+e)},getStatusApi:function(e){return r.get("profile/status/"+e)},putUpdateStatusApi:function(e){return r.put("profile/status",{status:e})},safePhotoApi:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileApi:function(e){return r.put("profile",e)}},i={get:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return r.post("follow/".concat(e),{})},unfollow:function(e){return r.delete("follow/".concat(e))}},c={getCaptcha:function(){return r.get("/security/get-captcha-url")}}},132:function(e,t,n){e.exports=n.p+"static/media/users_photo.cd306bb0.png"},165:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(31),r=n(9),o={dialogs:[{id:1,name:"Vasya",avatar:"https://\u043a\u0443\u0442\u044f\u0442\u0430.\u0440\u0444/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg"},{id:2,name:"Harley",avatar:"https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg"},{id:3,name:"Mira",avatar:"https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c"},{id:4,name:"Richi",avatar:"https://thumbs.dreamstime.com/b/smiling-shiba-inu-dog-cute-portrait-looking-camera-isolated-yellow-background-206275827.jpg"},{id:5,name:"Ken"}],messages:[{id:1,message:"How are you?"},{id:2,message:"Hi"},{id:3,message:"Yes"},{id:4,message:"No"}]},u=function(e){return{type:"NEW_MESSAGE_BODY",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_MESSAGE_BODY":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},170:function(e,t,n){e.exports=n.p+"static/media/Preload_Cube.62ae0d72.svg"},174:function(e,t,n){e.exports={wall_post:"Post_wall_post__3Qmcy"}},175:function(e,t,n){e.exports=n.p+"static/media/ava1.780e971f.jpg"},180:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(16),u=n(21),i=n.n(u),c=n(60),s=n(87),l=n.n(s),d=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),u=n[0],i=n[1],c=Object(a.useState)(e.status),s=Object(o.a)(c,2),d=s[0],f=s[1];Object(a.useEffect)(function(){f(e.status)},[e.status]);return r.a.createElement("div",null,u?r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){f(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateStatusThunk(d)},value:d})):r.a.createElement("div",null,r.a.createElement("b",null,"Status:"),r.a.createElement("span",{className:l.a.profileStatus,onDoubleClick:function(){i(!0)}},""===d?"----":d)))},f=n(132),m=n.n(f),p=n(50),b=n(46),g=n(20),E=n(55),h=(n(315),Object(b.a)({form:"profile"})(function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:i.a.profileData},r.a.createElement("div",null,r.a.createElement("button",null,"save")),a&&r.a.createElement("div",{className:i.a.error},a),r.a.createElement("div",null,r.a.createElement("b",null,"Fullname"),": ",Object(g.c)("Full name","fullName",g.a,[])),r.a.createElement("div",null,r.a.createElement("b",null,"About Me"),": ",Object(g.c)("About me","aboutMe",g.b,[])),r.a.createElement("div",null,r.a.createElement("b",null,"Looking ForA Job"),": ",Object(g.c)(" ","LookingForAJob",g.a,[],{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",Object(g.c)("My professional skills","lookingForAJobDescription",g.b,[])),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(n.contacts).map(function(e){return r.a.createElement("div",{key:e,className:i.a.profileContact},r.a.createElement("b",null,e),": ",Object(g.c)(e,"contacts."+e,g.a,[]))}))))})),v=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:i.a.profileContact},r.a.createElement("b",null,t),": ",n)},_=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",{className:i.a.profileData},n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"edit")),r.a.createElement("div",null,r.a.createElement("b",null,"Fullname"),": ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"About Me"),": ",t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"LookingForAJob"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return r.a.createElement(v,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},O=function(e){var t=e.profile,n=e.isOwner,u=e.savePhotoThunk,s=e.status,l=e.updateStatusThunk,f=e.safeProfileThunk,p=Object(a.useState)(!1),b=Object(o.a)(p,2),g=b[0],E=b[1];if(!t)return r.a.createElement(c.a,null);return r.a.createElement("div",{className:i.a.profile_info},r.a.createElement("div",{className:i.a.avatar_info},r.a.createElement("img",{src:t.photos.large||m.a,className:i.a.mainPhoto}),n&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&u(e.target.files[0])}}),r.a.createElement("div",{className:i.a.profileStatus},r.a.createElement(d,{className:i.a.profileStatus,status:s,updateStatusThunk:l})),g?r.a.createElement(h,{initialValues:t,profile:t,onSubmit:function(e){f(e).then(function(){E(!1)})}}):r.a.createElement(_,{goToEditMode:function(){E(!0)},profile:t,isOwner:n})))},k=n(65),y=n.n(k),j=n(174),S=n.n(j),w=n(175),C=n.n(w),T=function(e){return r.a.createElement("div",{className:S.a.wall_post},r.a.createElement("img",{src:C.a,alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"likes")," ",e.likesCount))},P=n(45),A=Object(E.a)(10),N=Object(b.a)({form:"newAddPost"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:y.a.wall_post},r.a.createElement(P.a,{component:g.b,name:"addPostMessage",placeholder:"enter message",validate:[E.b,A]})),r.a.createElement("div",{className:y.a.wall_post},r.a.createElement("button",null,"Add posts")))}),x=function(e){var t=e.posts.map(function(t){return r.a.createElement(T,{profile:e.profile,key:t.id,id:t.id,message:t.message,likesCount:t.likesCount})});return r.a.createElement("div",{className:y.a.my_post},r.a.createElement("h2",null,"My Posts"),r.a.createElement(N,{onSubmit:function(t){e.addPost(t.addPostMessage)}}),r.a.createElement("div",null,t))},F=n(18),I=Object(F.b)(function(e){return{posts:e.profilePage.posts}},function(e){return{addPost:function(t){e(Object(p.a)(t))}}})(x);t.a=function(e){return r.a.createElement("div",{className:l.a.profile},r.a.createElement(O,{isOwner:e.isOwner,savePhotoThunk:e.savePhotoThunk,profile:e.profile,status:e.status,updateStatusThunk:e.updateStatusThunk,safeProfileThunk:e.safeProfileThunk}),r.a.createElement(I,{profile:e.profile}))}},20:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return d});var a=n(116),r=n(0),o=n.n(r),u=n(66),i=n.n(u),c=n(45),s=(n(55),function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("textarea",Object.assign({},t,r)),o.a.createElement("div",null,u&&o.a.createElement("span",null,n.error)))}),l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("input",Object.assign({},t,r)),o.a.createElement("div",null,u&&o.a.createElement("span",null,n.error)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r))," ",u)}},206:function(e,t,n){e.exports=n(561)},21:function(e,t,n){e.exports={avatar_info:"ProfileInfo_avatar_info__2P4lv",profile_info:"ProfileInfo_profile_info__3tNIe",data_user:"ProfileInfo_data_user__1kufR",error:"ProfileInfo_error__3Od4N"}},213:function(e,t,n){},215:function(e,t,n){},26:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__1aoCj",link:"Sidebar_link__1ycCd",active:"Sidebar_active__1qtE0",avatar:"Sidebar_avatar__10Yxb",sidebarFriends:"Sidebar_sidebarFriends__1CDW4",sidebarMain:"Sidebar_sidebarMain__YdgoT",sidebarData:"Sidebar_sidebarData__2JuIE"}},43:function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return v});var a=n(6),r=n.n(a),o=n(15),u=n(31),i=n(9),c=n(13),s="dogsbook/user/FOLLOW",l={users:[],pageSize:10,totalItemsCount:0,currentPage:1,isFetching:!0,isFetchingInProgress:[]},d=function(e){return{type:s,usersId:e}},f=function(e){return{type:"dogsbook/user/UNFOLLOW",usersId:e}},m=function(e){return{type:"dogsbook/user/SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"dogsbook/user/SET_PRELOADER",isFetching:e}},b=function(e,t){return{type:"dogsbook/user/TOGGLE_FOLLOW_IN_PROGRESS",isFetching:e,usersId:t}},g=function(e,t){return function(){var n=Object(o.a)(r.a.mark(function n(a){var o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(!0)),n.next=3,c.d.get(e,t);case 3:o=n.sent,a(p(!1)),a({type:"dogsbook/user/SET_USERS",users:o.data.items}),a({type:"dogsbook/user/SET_TOTAL_COUNT",count:o.data.totalCount});case 7:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(o.a)(r.a.mark(function e(t,n,a,o){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(o(n)),t(b(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=c.d.follow.bind(c.d),E(n,e,a,d);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=c.d.unfollow.bind(c.d),E(n,e,a,f);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)({},e,{users:e.users.map(function(e){return e.id===t.usersId?Object(i.a)({},e,{followed:!0}):e})});case"dogsbook/user/UNFOLLOW":return Object(i.a)({},e,{users:e.users.map(function(e){return e.id===t.usersId?Object(i.a)({},e,{followed:!1}):e})});case"dogsbook/user/SET_USERS":return Object(i.a)({},e,{users:t.users});case"dogsbook/user/SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"dogsbook/user/SET_TOTAL_COUNT":return Object(i.a)({},e,{totalItemsCount:t.count});case"dogsbook/user/SET_PRELOADER":return Object(i.a)({},e,{isFetching:t.isFetching});case"dogsbook/user/TOGGLE_FOLLOW_IN_PROGRESS":return Object(i.a)({},e,{isFetchingInProgress:t.isFetching?[].concat(Object(u.a)(e.isFetchingInProgress),[t.usersId]):e.isFetchingInProgress.filter(function(e){return e!==t.usersId})});default:return e}}},50:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"e",function(){return m}),n.d(t,"h",function(){return b}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return E}),n.d(t,"d",function(){return h}),n.d(t,"c",function(){return v});var a=n(6),r=n.n(a),o=n(15),u=n(31),i=n(9),c=n(13),s=(n(180),n(28)),l="dogsbook/profile/NEW-POST",d={posts:[{id:1,message:"Hi, my famous dog!",likesCount:100},{id:2,message:"I love you!",likesCount:150}],profile:null,status:""},f=function(e){return{type:l,addPost:e}},m=function(e){return{type:"dogsbook/profile/SET_USERS_PROFILE",profile:e}},p=function(e){return{type:"dogsbook/profile/SET_STATUS",status:e}},b=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfileApi(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatusApi(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.putUpdateStatusApi(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.safePhotoApi(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"dogsbook/profile/SET_SAFE_PHOTO",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n,a){var o,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.id,t.next=3,c.b.saveProfileApi(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(b(o)),t.next=10;break;case 8:return n(Object(s.a)("profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:6,message:t.addPost,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n])});case"dogsbook/profile/SET_USERS_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"dogsbook/profile/SET_STATUS":return Object(i.a)({},e,{status:t.status});case"dogsbook/profile/SET_SAFE_PROFILE_DATA":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}},51:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return b});var a=n(6),r=n.n(a),o=n(15),u=n(9),i=n(13),c=n(28),s={id:24204,email:"ugnivenko.ea@gmail.com",login:"Armahod",isAuth:!0,captchaUrl:null},l=function(e,t,n,a){return{type:"dogsbook/auth/SET_USER_LOGIN",payload:{id:e,email:t,login:n,isAuth:a}}},d=function(e){return{type:"dogsbook/auth/GET_CAPTCHA_SUCCESS",payload:{captchaUrl:e}}},f=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o,u,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,o=a.id,u=a.email,c=a.login,t(l(o,u,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n,a){return function(){var u=Object(o.a)(r.a.mark(function o(u){var s,l;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n,a);case 2:0===(s=r.sent).data.resultCode?u(f()):(10===s.data.resultCode&&u(p()),l=s.data.messages.length>0?s.data.messages[0]:"Some error",u(Object(c.a)("login",{_error:l})));case 4:case"end":return r.stop()}},o)}));return function(e){return u.apply(this,arguments)}}()},p=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptcha();case 2:n=e.sent,a=n.data.url,t(d(a));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dogsbook/auth/SET_USER_LOGIN":case"dogsbook/auth/GET_CAPTCHA_SUCCESS":return Object(u.a)({},e,t.payload);default:return e}}},55:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbols")}}},561:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(166),u=n.n(o),i=(n(213),n(67)),c=n(68),s=n(41),l=n(69),d=n(42),f=(n(215),n(1)),m=n(19),p=n(26),b=n.n(p),g=function(e){return r.a.createElement("div",{className:b.a.sidebarFriends},r.a.createElement("div",null,r.a.createElement("img",{className:b.a.avatar,src:e.avatar,alt:"myAvatar"}),e.name))},E=function(e){return e.isActive?b.a.active:b.a.link},h=function(e){var t=e.friends.map(function(e){return r.a.createElement(g,{key:e.id,id:e.id,name:e.name,avatar:e.avatar})});return r.a.createElement("nav",{className:b.a.sidebar},r.a.createElement("div",{className:b.a.link},r.a.createElement(m.b,{className:E,to:"/profile"},"Profile")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/dialogs",className:E},"Message")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/users",className:E},"Users")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/news",className:E},"News")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/music",className:E},"Music")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/settings",className:E},"Settings")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/login",className:E},"Login")),r.a.createElement("div",{className:b.a.sidebarData},r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:b.a.sidebarMain},t)))},v=n(18),_=Object(v.b)(function(e){return{friends:e.sideBar.friends}})(h),O=n(117),k=n.n(O),y=function(e){return r.a.createElement("header",{className:k.a.header},r.a.createElement("img",{alt:"ava",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiY9CtX21K0zU8hBSEzDLqVwD9gXuUfi8seJ96PdelduVCwuCCPtOZ9Q9fKzyoplDDQaU&usqp=CAU"}),r.a.createElement("div",{className:k.a.loginblock},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logoutThunk},"Logout")):r.a.createElement(m.b,{to:"/login"},"Login")))},j=n(51),S=n(8),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(y,this.props)}}]),t}(r.a.Component),C=Object(S.d)(Object(v.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logoutThunk:j.d}))(w),T=n(9),P={initialize:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;switch((arguments.length>1?arguments[1]:void 0).type){case"dogsbook/app/SET_INITIALIZED_SUCCESS":return Object(T.a)({},e,{initialize:!0});default:return e}},N=n(60),x=r.a.lazy(function(){return n.e(1).then(n.bind(null,577))}),F=r.a.lazy(function(){return n.e(2).then(n.bind(null,578))}),I=r.a.lazy(function(){return n.e(3).then(n.bind(null,579))}),L=r.a.lazy(function(){return n.e(4).then(n.bind(null,580))}),M=r.a.lazy(function(){return n.e(5).then(n.bind(null,582))}),U=r.a.lazy(function(){return n.e(6).then(n.bind(null,583))}),R=r.a.lazy(function(){return n.e(7).then(n.bind(null,584))}),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializedAppThunk()}},{key:"render",value:function(){return this.props.initialize?r.a.createElement("div",{className:"App-wrapper"},r.a.createElement(C,null),r.a.createElement(_,null),r.a.createElement("div",{className:"App-wrapper_dialogs"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,r.a.createElement(N.a,null))},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/dialogs/",element:r.a.createElement(M,null)}),r.a.createElement(f.b,{path:"/profile/:userId",element:r.a.createElement(R,null)}),r.a.createElement(f.b,{path:"/profile/*",element:r.a.createElement(R,null)}),r.a.createElement(f.b,{path:"/users",element:r.a.createElement(U,null)}),r.a.createElement(f.b,{path:"/news",element:r.a.createElement(x,null)}),r.a.createElement(f.b,{path:"/music",element:r.a.createElement(F,null)}),r.a.createElement(f.b,{path:"/settings",element:r.a.createElement(I,null)}),r.a.createElement(f.b,{path:"/login",element:r.a.createElement(L,null)}))))):r.a.createElement(N.a,null)}}]),t}(r.a.Component),z=Object(S.d)(Object(v.b)(function(e){return{initialize:e.app.initialize}},{initializedAppThunk:function(){return function(e){var t=e(Object(j.a)());Promise.all([t]).then(function(){e({type:"dogsbook/app/SET_INITIALIZED_SUCCESS"})})}}}))(D),G=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,581)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),o(e),u(e)})},H=n(50),J=n(165),B={friends:[{id:1,name:"Vasya",avatar:"https://\u043a\u0443\u0442\u044f\u0442\u0430.\u0440\u0444/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg"},{id:2,name:"Harley",avatar:"https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg"},{id:3,name:"Mira",avatar:"https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c"},{id:4,name:"Richi",avatar:"https://thumbs.dreamstime.com/b/smiling-shiba-inu-dog-cute-portrait-looking-camera-isolated-yellow-background-206275827.jpg"}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;arguments.length>1&&arguments[1];return e},q=n(43),V=n(179),Y=n(115),Q=n(176),K=Object(S.c)({profilePage:H.b,dialogPage:J.a,sideBar:W,usersPage:q.a,auth:j.b,form:Y.a,app:A}),Z=Object(S.e)(K,Object(Q.a)(Object(S.a)(V.a)));u.a.createRoot(document.getElementById("root")).render(r.a.createElement(m.a,null,r.a.createElement(v.a,{store:Z},r.a.createElement(z,null)))),G()},60:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(170),u=n.n(o);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:u.a}))}},65:function(e,t,n){e.exports={my_post:"MyPost_my_post__3oA3d",wall_post:"MyPost_wall_post__3LcFQ"}},66:function(e,t,n){e.exports={formControl:"FormControl_formControl__1lVtw",error:"FormControl_error__1WuHp"}},87:function(e,t,n){e.exports={profileStatus:"Profile_profileStatus__-AIxF"}}},[[206,10,9]]]);
//# sourceMappingURL=main.d83f5850.chunk.js.map