(this["webpackJsonpkeyko-coding-test"]=this["webpackJsonpkeyko-coding-test"]||[]).push([[0],{27:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(20),s=a.n(r),l=(a(27),a(5)),i=a(3),d=a(0);var o=function(e){var t=e.title;return Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/contacts",className:"inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",children:t})})};var x=function(){return Object(d.jsx)("div",{className:"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",children:Object(d.jsx)("div",{className:"max-w-xl sm:mx-auto lg:max-w-2xl",children:Object(d.jsxs)("div",{className:"flex flex-col mb-16 sm:text-center sm:mb-0",children:[Object(d.jsxs)("div",{className:"max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",children:[Object(d.jsxs)("h2",{className:"max-w-lg mb-2 font-sans text-xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto",children:["Hi and welcome to your own ",Object(d.jsx)("span",{className:"text-deep-purple-accent-400",children:"personal agenda!"})]}),Object(d.jsx)("p",{className:"text-sm text-gray-700 px-12",children:"Here you can manage your contacts easy and fast with just a few clicks. View, add, edit and even delete them right away."})]}),Object(d.jsx)(o,{title:"Let's get started!"})]})})})};var m=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x,{})})},j=a(10),u=a(13),b=new(a(18).default)("KeykoDatabase");b.version(1).stores({contacts:"++id, name, phone, email, gender, age, avatar, occupation"}),b.open().catch((function(e){console.log(e)}));var h=b.contacts;var f=function(){return Object(d.jsxs)(l.b,{to:"/contacts/add",className:"bg-white border shadow-sm flex items-center justify-center flex-col rounded-2xl flex-1 h-[250px] w-full transition-all cursor-pointer hover:scale-[1.02]",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-20 w-20 drop-shadow",viewBox:"0 0 20 20",fill:"#651fff",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"})}),Object(d.jsx)("div",{className:"font-bold text-sm mt-1 text-deep-purple-400",children:"Add Contact"})]})};var p=function(e){var t=e.title;return Object(d.jsx)("h1",{className:"text-base font-semibold mb-6 absolute top-0 left-0 right-0 w-full p-2 pt-[0.60rem] px-4 border-b text-gray-900 rounded-t-xl",children:t})};var O=function(e){var t=e.id,a=e.name,c=e.avatar,n=e.occupation;return Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center h-[250px] p-5 text-center shadow-sm border rounded-xl w-full relative overflow-hidden",children:[Object(d.jsx)("img",{className:"object-cover w-full h-full absolute top-0 left-0 bottom-0 right-0 -z-1 opacity-10",src:c,alt:"".concat(a)}),Object(d.jsx)("img",{className:"object-cover w-20 h-20 mb-2 rounded-full shadow z-10 border-2 border-white",src:c,alt:"".concat(a)}),Object(d.jsxs)("div",{className:"flex flex-col items-center z-10",children:[Object(d.jsx)("p",{className:"text-sm font-bold capitalize",children:a}),Object(d.jsx)("p",{className:"text-xs text-gray-800 capitalize",children:n})]}),Object(d.jsxs)(l.b,{to:"/contacts/details/".concat(t),className:"text-white bg-deep-purple-accent-400 mt-8 text-xs font-medium flex items-center absolute bottom-0 py-2 border-t w-full left-0 right-0 mx-auto justify-center",children:["View Details",Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 ml-1",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]})};var v=function(){var e=Object(u.useLiveQuery)((function(){return h.toArray()}),[]);return e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{title:"Contacts list"}),Object(d.jsxs)("div",{className:"flex flex-wrap -mx-2 mt-10",children:[Object(d.jsx)("div",{className:"w-1/4 my-2 px-2",children:Object(d.jsx)(f,{})}),e.map((function(e){return Object(d.jsx)("div",{className:"w-1/4 my-2 px-2",children:Object(d.jsx)(O,Object(j.a)({},e))},e.id)}))]})]}):null},g=a(2),w=a.n(g),N=a(6);var y=function(e){var t=e.id,a=e.name,c=e.email,n=e.phone,r=e.age,s=e.gender,o=e.occupation,x=e.avatar,m=Object(i.f)(),j=function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you wish to delete this contact?")){e.next=4;break}return e.next=3,h.delete(t);case 3:m.push("/contacts");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"w-full mx-auto mt-10",children:Object(d.jsx)("div",{className:"flex flex-col",children:Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("div",{className:"flex-none sm:flex",children:[Object(d.jsx)("div",{className:"h-32 w-32 sm:mb-0 mb-3",children:Object(d.jsx)("img",{src:x,alt:"aji",className:" w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"})}),Object(d.jsxs)("div",{className:"flex-auto sm:ml-5 justify-evenly",children:[Object(d.jsx)("div",{className:"flex items-center justify-between sm:mt-2",children:Object(d.jsx)("div",{className:"flex items-center",children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsx)("div",{className:"w-full flex-none text-lg text-gray-800 font-bold leading-none",children:a}),Object(d.jsxs)("div",{className:"flex-auto text-gray-500 my-1",children:[Object(d.jsx)("span",{className:"mr-3 ",children:o}),Object(d.jsx)("span",{className:"mr-3 border-r border-gray-200  max-h-0"}),Object(d.jsxs)("span",{children:[r," yrs old"]})]})]})})}),Object(d.jsxs)("div",{className:"flex justify-between items-end pt-2 text-sm text-gray-500",children:[Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex-1 inline-flex items-center",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),Object(d.jsx)("p",{className:"",children:c})]}),Object(d.jsxs)("div",{className:"flex-1 inline-flex items-center my-1",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),Object(d.jsx)("p",{className:"",children:n})]}),Object(d.jsxs)("div",{className:"flex-1 inline-flex items-center",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(d.jsx)("p",{className:"capitalize",children:s})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return j(t)},className:"inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none mr-2 text-xs",children:"Delete"}),Object(d.jsx)(l.b,{to:"/contacts/edit/".concat(t),className:"inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-xs",children:"Edit user details"})]})]})]})]})})})})},k=function(){var e=Object(i.g)().contactId,t=Object(u.useLiveQuery)((function(){return h.where({id:Number(e)}).toArray()}),[]);if(!t)return null;var a=t[0].name;return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{title:"Details for ".concat(a)}),Object(d.jsx)(y,Object(j.a)({},t[0]))]})},F=a(15);var C=function(e){var t=e.id,a=(e.value,e.type),c=e.label,n=e.name,r=e.register,s=(e.required,e.accept),l=e.defaultValue;return e.isAddForm,Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:t,className:"text-sm font-medium text-gray-900 mb-1",children:c}),Object(d.jsx)("input",Object(j.a)({type:a,defaultValue:l,id:t,accept:s,className:"border p-2 rounded-lg mb-3"},r(n)))]})},L=n.a.forwardRef((function(e,t){var a=e.name,c=e.label,n=e.id;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:n,className:"text-sm font-medium text-gray-900 mb-1",children:c}),Object(d.jsxs)("select",{id:n,name:a,ref:t,className:"border p-2 rounded-lg h-[42px]",children:[Object(d.jsx)("option",{value:"male",children:"Male"}),Object(d.jsx)("option",{value:"female",children:"Female"}),Object(d.jsx)("option",{value:"other",children:"Other"})]})]})}));var A=function(e){var t=e.title;return Object(d.jsx)("button",{type:"submit",className:"bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 font-medium px-6 py-2 text-white rounded-full shadow-md text-sm",children:t})};var V=function(e){var t=e.title,a=e.to;return Object(d.jsx)(l.b,{to:a,className:"px-6 py-2 text-gray-900 rounded-lg text-sm mr-2",children:t})},z=function(){var e=Object(i.g)().contactId,t=Object(i.f)(),a=Object(F.a)(),c=a.register,n=a.handleSubmit,r=Object(u.useLiveQuery)((function(){return h.where({id:Number(e)}).toArray()}),[]);if(!r)return null;var s=r[0],l=s.id,o=s.name,x=s.email,m=s.phone,b=s.age,f=s.gender,O=s.occupation,v=s.avatar,g=function(e){return new Promise((function(t){var a=new FileReader;a.onloadend=function(){return t(a.result)},a.readAsDataURL(e)}))},y=function(){var e=Object(N.a)(w.a.mark((function e(a){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.avatar.length>0)){e.next=6;break}return e.next=3,g(a.avatar[0]);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=v;case 7:return c=e.t0,e.next=10,h.update(l,{name:a.name,phone:a.phone,email:a.email,gender:a.gender,age:a.age,occupation:a.occupation,avatar:c});case 10:t.push("/contacts/details/".concat(l));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{title:"Edit details for ".concat(o)}),Object(d.jsxs)("form",{onSubmit:n(y),className:"mt-10 flex flex-col px-12",children:[Object(d.jsx)(C,{type:"text",defaultValue:o,id:"name",name:"name",label:"Full Name",register:c}),Object(d.jsx)(C,{type:"email",defaultValue:x,id:"email",name:"email",label:"Email Address",register:c}),Object(d.jsx)(C,{type:"tel",defaultValue:m,id:"phone",name:"phone",label:"Phone Number",register:c}),Object(d.jsx)(C,{type:"text",defaultValue:O,id:"occupation",name:"occupation",label:"Occupation",register:c}),Object(d.jsxs)("div",{className:"flex flex-wrap -mx-2",children:[Object(d.jsx)("div",{className:"w-1/2 px-2 flex flex-col",children:Object(d.jsx)(L,Object(j.a)({id:"gender",defaultValue:f,name:"gender",label:"Gender"},c("gender")))}),Object(d.jsx)("div",{className:"w-1/2 px-2 flex flex-col",children:Object(d.jsx)(C,{type:"number",defaultValue:b,id:"age",name:"age",label:"Age",register:c})})]}),Object(d.jsx)(C,{isAddForm:!1,type:"file",accepEditt:"image/*",id:"avatar",name:"avatar",label:"Avatar",register:c}),Object(d.jsxs)("div",{className:"flex mt-8 justify-end items-center",children:[Object(d.jsx)(V,{to:"/contacts/details/".concat(l),title:"Cancel"}),Object(d.jsx)(A,{title:"Submit"})]})]})]})};var M=function(e){var t=e.id,a=e.value,c=e.type,n=e.label,r=e.name,s=e.register,l=e.required,i=e.accept,o=e.defaultValue;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:t,className:"text-sm font-medium text-gray-900 mb-1",children:n}),Object(d.jsx)("input",Object(j.a)({type:c,value:a,defaultValue:o,id:t,accept:i,className:"border p-2 rounded-lg mb-3"},s(r,{required:l})))]})},R=n.a.forwardRef((function(e,t){var a=e.name,c=e.label,n=e.id;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:n,className:"text-sm font-medium text-gray-900 mb-1",children:c}),Object(d.jsxs)("select",{id:n,name:a,ref:t,className:"border p-2 rounded-lg h-[42px]",children:[Object(d.jsx)("option",{value:"male",children:"Male"}),Object(d.jsx)("option",{value:"female",children:"Female"}),Object(d.jsx)("option",{value:"other",children:"Other"})]})]})}));var q=function(e){var t=e.title;return Object(d.jsx)("button",{type:"submit",className:"bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 font-medium px-6 py-2 text-white rounded-full shadow-md text-sm",children:t})};var S=function(e){var t=e.title;return Object(d.jsx)(l.b,{to:"/contacts",className:"px-6 py-2 text-gray-900 rounded-lg text-sm mr-2",children:t})},B=function(){var e=Object(F.a)(),t=e.register,a=e.handleSubmit,c=Object(i.f)(),n=function(e){return new Promise((function(t){var a=new FileReader;a.onloadend=function(){return t(a.result)},a.readAsDataURL(e)}))},r=function(){var e=Object(N.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t.avatar[0]);case 2:return a=e.sent,e.next=5,h.add({name:t.name,phone:t.phone,email:t.email,gender:t.gender,age:t.age,occupation:t.occupation,avatar:a});case 5:c.push("/contacts");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{title:"Add contact"}),Object(d.jsxs)("form",{onSubmit:a(r),className:"mt-10 flex flex-col px-12",children:[Object(d.jsx)(M,{type:"text",id:"name",name:"name",label:"Full Name",register:t,required:!0}),Object(d.jsx)(M,{type:"email",id:"email",name:"email",label:"Email Address",register:t,required:!0}),Object(d.jsx)(M,{type:"tel",id:"phone",name:"phone",label:"Phone Number",register:t,required:!0}),Object(d.jsx)(M,{type:"text",id:"occupation",name:"occupation",label:"Occupation",register:t,required:!0}),Object(d.jsxs)("div",{className:"flex flex-wrap -mx-2",children:[Object(d.jsx)("div",{className:"w-1/2 px-2 flex flex-col",children:Object(d.jsx)(R,Object(j.a)({id:"gender",name:"gender",label:"Gender"},t("gender")))}),Object(d.jsx)("div",{className:"w-1/2 px-2 flex flex-col",children:Object(d.jsx)(M,{type:"number",id:"age",name:"age",label:"Age",register:t,required:!0})})]}),Object(d.jsx)(M,{type:"file",accept:"image/*",id:"avatar",name:"avatar",label:"Avatar",register:t,required:!0}),Object(d.jsxs)("div",{className:"flex mt-8 justify-end items-center",children:[Object(d.jsx)(S,{title:"Cancel"}),Object(d.jsx)(q,{title:"Submit"})]})]})]})},D=function(){return Object(d.jsx)("div",{className:"bg-white sticky top-0 w-full left-0 right-0 shadow z-50",children:Object(d.jsx)("div",{className:"p-3 sm:max-w-xl md:max-w-full lg:max-w-4xl w-full mx-auto",children:Object(d.jsxs)("div",{className:"relative flex items-center justify-between",children:[Object(d.jsx)("div",{className:"flex items-center",children:Object(d.jsx)(l.b,{to:"/",className:"inline-flex items-center mr-8",children:Object(d.jsxs)("span",{className:"text-xl font-bold tracking-tight text-gray-900 uppercase flex items-center",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"#651fff",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),"My agenda"]})})}),Object(d.jsxs)("ul",{className:"flex items-center text-sm space-x-8 lg:flex",children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{to:"/",exact:!0,activeClassName:"text-deep-purple-accent-400",className:"font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{to:"/contacts",exact:!0,activeClassName:"text-deep-purple-accent-400",className:"font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400",children:"Contacts"})})]})]})})})};var I=function(){return Object(d.jsx)("div",{className:"px-4 mx-auto sm:max-w-xl md:max-w-full rounded-b-xl border border-t-0 lg:max-w-4xl md:px-24 lg:px-8 bg-white mb-4",children:Object(d.jsx)("div",{className:"p-5",children:Object(d.jsx)("p",{className:"text-xs text-center text-gray-600",children:"\xa9 Copyright 2021 Lorem Inc. All rights reserved."})})})},E=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)("main",{className:"bg-white mt-4 rounded-t-xl p-10 px-12 relative border sm:max-w-xl md:max-w-full lg:max-w-4xl w-full mx-auto",children:t}),Object(d.jsx)(I,{})]})};var P=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(E,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,children:Object(d.jsx)(m,{})}),Object(d.jsx)(i.a,{path:"/contacts",exact:!0,children:Object(d.jsx)(v,{})}),Object(d.jsx)(i.a,{path:"/contacts/details/:contactId",exact:!0,children:Object(d.jsx)(k,{})}),Object(d.jsx)(i.a,{path:"/contacts/edit/:contactId",exact:!0,children:Object(d.jsx)(z,{})}),Object(d.jsx)(i.a,{path:"/contacts/add",exact:!0,children:Object(d.jsx)(B,{})})]})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),H()}},[[38,1,2]]]);
//# sourceMappingURL=main.3280cc36.chunk.js.map