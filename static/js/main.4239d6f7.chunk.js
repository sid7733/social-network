(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{14:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__GRwif",dialogsItems:"Dialogs_dialogsItems__33DUg",dialog:"Dialogs_dialog__2FwmF",active:"Dialogs_active__1Lumf",messages:"Dialogs_messages__3m-dh",message:"Dialogs_message__1sW2f"}},30:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2T9np",posts:"MyPosts_posts__w1pCc"}},31:function(e,t,s){e.exports={userPhoto:"users_userPhoto__rkG1r",selectedPage:"users_selectedPage__zTTFg"}},32:function(e,t,s){e.exports={header:"Header_header__vtvPY",loginBlock:"Header_loginBlock__10pv7"}},45:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__15J2f"}},46:function(e,t,s){e.exports={content:"Post_content__ZrBnO",item:"Post_item__156tL"}},50:function(e,t,s){},6:function(e,t,s){e.exports={nav:"Navbar_nav__1rU9W",item:"Navbar_item__1D8mI",activeLink:"Navbar_activeLink__1VgLz"}},73:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var n=s(0),i=(s(50),s(12)),a=s(20),c=s(2),r=s(42),o=s.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6b7e1966-7934-4398-949c-b07e4c978469"}}),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},l=function(e){return o.post("follow/".concat(e))},d=function(e){return o.delete("follow/".concat(e))},j=function(e){return o.get("profile/"+e)},b=function(){return o.get("auth/me")},g="ADD_POST",p="UPDATE_NEW_POST_TEXT",h="SET_USER_PROFILE",O={posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:20},{id:3,message:"It's my second post",likesCount:13},{id:4,message:"It's my third post",likesCount:7},{id:5,message:"It's my fourth post",likesCount:3}],newPostText:"",profile:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var s={id:(new Date).getTime(),message:e.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[s]),newPostText:""});case p:return Object(c.a)(Object(c.a)({},e),{},{newPostText:t.newText});case h:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});default:return e}},v="SEND-MESSAGE",m="UPDATE-NEW-MESSAGE-BODY",x={dialogs:[{id:1,name:"Dimych",avatar:""},{id:2,name:"Andrey",avatar:""},{id:3,name:"Sveta",avatar:""},{id:4,name:"Sasha",avatar:""},{id:5,name:"Victor",avatar:""},{id:6,name:"Valera",avatar:""}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],newMessageBody:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(c.a)(Object(c.a)({},e),{},{newMessageBody:t.body});case v:var s=e.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(a.a)(e.messages),[{id:6,message:s}])});default:return e}},P={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},y={users:[],totalUsersCount:0,currentPage:1,pageSize:10,isFetching:!0,followingInProgress:[]},C="FOLLOW_SUCCESS",k="UNFOLLOW_SUCCESS",N="SET_USERS",S="SET_CURRENT_PAGE",E="SET_TOTAL_USERS_COUNT",I="TOGGLE_IS_FETCHING",T="TOGGLE_IS_FOLLOWING_PROGRESS",U=function(e){return{type:S,currentPage:e}},A=function(e){return{type:I,isFetching:e}},M=function(e,t){return{type:T,isFetching:e,userId:t}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case k:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case N:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case S:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case E:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalUsersCount});case I:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case T:return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(a.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},D={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},L="SET_AUTH_USER_DATA",B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(c.a)(Object(c.a)(Object(c.a)({},e),t.data),{},{isAuth:!0});default:return e}},G=s(43),R=Object(i.c)({profilePage:f,dialogsPage:_,sidebar:w,usersPage:F,auth:B}),z=Object(i.e)(R,Object(i.a)(G.a));window.store=z;var W=z,H=s(22),Y=s.n(H),J=s(5),q=s(1),Q=s.n(q),V=(s(73),s(6)),X=s.n(V),Z=function(){return Object(n.jsxs)("nav",{className:X.a.nav,children:[Object(n.jsx)("div",{className:X.a.item,children:Object(n.jsx)(J.b,{to:"/profile",activeClassName:X.a.activeLink,children:"Profile"})}),Object(n.jsx)("div",{className:"".concat(X.a.item," ").concat(X.a.active),children:Object(n.jsx)(J.b,{to:"/dialogs",activeClassName:X.a.activeLink,children:"Message"})}),Object(n.jsx)("div",{className:"".concat(X.a.item," ").concat(X.a.active),children:Object(n.jsx)(J.b,{to:"/users",activeClassName:X.a.activeLink,children:"Users"})}),Object(n.jsx)("div",{className:X.a.item,children:Object(n.jsx)(J.b,{to:"/news",activeClassName:X.a.activeLink,children:"News"})}),Object(n.jsx)("div",{className:X.a.item,children:Object(n.jsx)(J.b,{to:"/music",activeClassName:X.a.activeLink,children:"Music"})}),Object(n.jsx)("div",{className:X.a.item,children:Object(n.jsx)(J.b,{to:"/settings",activeClassName:X.a.activeLink,children:"Settings"})})]})},K=s(4),$=function(e){return Object(n.jsx)("div",{children:"News"})},ee=function(e){return Object(n.jsx)("div",{children:"Music"})},te=function(e){return Object(n.jsx)("div",{children:"Settings"})},se=s(14),ne=s.n(se),ie=function(e){var t="/dialogs/"+e.id;return Object(n.jsx)("div",{className:ne.a.dialog+" "+ne.a.active,children:Object(n.jsx)(J.b,{to:t,children:e.name})})},ae=function(e){return Object(n.jsx)("div",{className:ne.a.dialog,children:e.message})},ce=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(n.jsx)(ie,{id:e.id,name:e.name,avatar:e.avatar},e.id)})),i=t.messages.map((function(e){return Object(n.jsx)(ae,{id:e.id,message:e.message},e.id)})),a=t.newMessageBody;return Object(n.jsxs)("div",{className:ne.a.dialogs,children:[Object(n.jsx)("div",{className:ne.a.dialogsItems,children:s}),Object(n.jsx)("div",{className:ne.a.messages,children:Object(n.jsxs)("div",{children:[i,Object(n.jsx)("div",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{value:a,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},placeholder:"Enter your message"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})})]})},re=s(7),oe=s(47),ue=function(e){return{isAuth:e.auth.isAuth}};function le(e){return Object(re.b)(ue)((function(t){var s=t.isAuth,i=Object(oe.a)(t,["isAuth"]);return s?Object(n.jsx)(e,Object(c.a)({},i)):Object(n.jsx)(K.a,{to:"/login"})}))}var de=Object(i.d)(Object(re.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(){e({type:v})},updateNewMessageBody:function(t){e({type:m,body:t})}}})),le)(ce),je=s(15),be=s(16),ge=s(18),pe=s(17),he=s.p+"static/media/preloader.f4b600c5.svg",Oe=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:he})})},fe=s(45),ve=s.n(fe),me=s(24),xe=function(e){Object(ge.a)(s,e);var t=Object(pe.a)(s);function s(){var e;Object(je.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={editMode:!1,title:"yo"},e.activateEditMode=function(){console.log("this:",Object(me.a)(e)),e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1})},e}return Object(be.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[!this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status})}),this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{autoFocus:!0,onBlur:this.deactivateEditMode.bind(this),value:this.props.status})})]})}}]),s}(Q.a.Component),_e=function(e){return e.profile?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:ve.a.descriptionBlock,children:[Object(n.jsx)("img",{alt:"profile-photos-large",src:e.profile.photos.large}),e.profile.contacts.facebook,e.profile.lookingForAJob,e.profile.lookingForAJobDescription,e.profile.fullName,e.profile.userId,Object(n.jsx)(xe,{status:"Hello my friends"})]})}):Object(n.jsx)(Oe,{})},Pe=s(30),we=s.n(Pe),ye=s(46),Ce=s.n(ye),ke=function(e){return Object(n.jsxs)("div",{className:Ce.a.item,children:[Object(n.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU"}),e.post.message,Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"like "}),e.post.likesCount]})]})},Ne=function(e){var t=e.posts.map((function(e){return Object(n.jsx)(ke,{post:e})}));return Object(n.jsxs)("div",{className:we.a.postsBlock,children:[Object(n.jsx)("h3",{children:"My posts"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{value:e.newPostText,onChange:function(t){var s=t.target.value;e.updateNewPostText(s)},placeholder:"Enter your message"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(n.jsx)("div",{className:we.a.posts,children:t})]})},Se=Object(re.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:g})},updateNewPostText:function(t){e(function(e){return{type:p,newText:e}}(t))}}}))(Ne),Ee=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(_e,{profile:e.profile}),Object(n.jsx)(Se,{})]})},Ie=function(e){Object(ge.a)(s,e);var t=Object(pe.a)(s);function s(){return Object(je.a)(this,s),t.apply(this,arguments)}return Object(be.a)(s,[{key:"componentDidMount",value:function(){var e=+this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Ee,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile}))})}}]),s}(Q.a.Component),Te=Object(i.d)(Object(re.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){j(e).then((function(e){var s;t((s=e.data,{type:h,profile:s}))}))}}}),K.f,le)(Ie),Ue=s(31),Ae=s.n(Ue),Me=s.p+"static/media/user.482a5a35.png",Fe=function(e){for(var t=e.usersPage,s=Math.ceil(t.totalUsersCount/t.pageSize),i=[],a=1;a<=s;a++)i.push(a);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:i.map((function(s){return Object(n.jsx)("span",{className:t.currentPage===s?Ae.a.selectedPage:"",onClick:function(t){e.onPageChanged(s)},children:s})}))}),e.usersPage.users.map((function(s){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(J.b,{to:"/profile"+s.id,children:Object(n.jsx)("img",{alt:"photos-small",src:null!=s.photos.small?s.photos.small:Me,className:Ae.a.userPhoto})})}),Object(n.jsx)("div",{children:s.followed?Object(n.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===s.id})),onClick:function(){e.unfollow(s.id)},children:"Unfollow "}):Object(n.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===s.id})),onClick:function(){e.follow(s.id)},children:"Follow"})})]}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:s.name}),Object(n.jsx)("div",{children:s.status})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:"u.location.country"}),Object(n.jsx)("div",{children:"u.location.city"})]})]})]},s.id)}))]})},De=function(e){Object(ge.a)(s,e);var t=Object(pe.a)(s);function s(){var e;Object(je.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(be.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)(Oe,{}):null,Object(n.jsx)(Fe,{usersPage:this.props.usersPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,pageSize:this.props.pageSize})]})}}]),s}(Q.a.Component),Le=Object(i.d)(le,Object(re.b)((function(e){return{usersPage:e.usersPage,users:e.usersPage.users,currentPage:e.usersPage.currentPage,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,isFetching:e.usersPage.isFetching}}),{follow:function(e){return function(t){t(M(!0,e)),l(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:C,userId:e}}(e)),t(M(!1,e))}))}},unfollow:function(e){return function(t){t(M(!0,e)),d(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:k,userId:e}}(e)),t(M(!1,e))}))}},setCurrentPage:U,toggleFollowingProgress:M,getUsers:function(e,t){return function(s){s(A(!0)),u(e,t).then((function(t){var n,i;s(A(!1)),s((n=t.items,{type:N,users:n})),s(U(e)),console.log(t),s((i=t.totalCount,{type:E,totalUsersCount:i}))}))}}}))(De),Be=s(32),Ge=s.n(Be),Re=function(e){return Object(n.jsxs)("header",{className:Ge.a.header,children:[Object(n.jsx)("img",{src:"https://go.imgsmail.ru/imgpreview?key=28651f27816ee8f0&mb=imgdb_preview_exp"}),Object(n.jsx)("div",{className:Ge.a.loginBlock,children:e.isAuth?e.login:Object(n.jsx)(J.b,{to:"/login",children:"Login"})})]})},ze=function(e){Object(ge.a)(s,e);var t=Object(pe.a)(s);function s(){return Object(je.a)(this,s),t.apply(this,arguments)}return Object(be.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(n.jsx)(Re,Object(c.a)({},this.props))}}]),s}(Q.a.Component),We=Object(re.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){b().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,i=s.email,a=s.login;e(function(e,t,s){return{type:L,data:{userId:e,email:t,login:s}}}(n,i,a))}}))}}})(ze),He=function(e){return Object(n.jsx)("h1",{children:"LOGIN"})},Ye=function(e){return Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(We,{}),Object(n.jsx)(Z,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(K.b,{path:"/news",component:$}),Object(n.jsx)(K.b,{path:"/music",component:ee}),Object(n.jsx)(K.b,{path:"/settings",component:te}),Object(n.jsx)(K.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(Te,{})}}),Object(n.jsx)(K.b,{path:"/dialogs",render:function(){return Object(n.jsx)(de,{})}}),Object(n.jsx)(K.b,{path:"/users",render:function(){return Object(n.jsx)(Le,{})}}),Object(n.jsx)(K.b,{path:"/login",render:function(){return Object(n.jsx)(He,{})}})]})]})};Y.a.render(Object(n.jsx)(J.a,{children:Object(n.jsx)(re.a,{store:W,children:Object(n.jsx)(Ye,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.4239d6f7.chunk.js.map