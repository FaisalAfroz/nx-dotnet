"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[476],{104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(1085),i=t(2247);const a={title:"@nx-dotnet/core:application"},l="@nx-dotnet/core",o={id:"core/generators/application",title:"@nx-dotnet/core:application",description:"NxDotnet Application Generator",source:"@site/../../docs/core/generators/application.md",sourceDirName:"core/generators",slug:"/core/generators/application",permalink:"/core/generators/application",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"@nx-dotnet/core:application"},sidebar:"tutorialSidebar",previous:{title:"@nx-dotnet/core:add-swagger-target",permalink:"/core/generators/add-swagger-target"},next:{title:"@nx-dotnet/core:library",permalink:"/core/generators/library"}},s={},c=[{value:"NxDotnet Application Generator",id:"nxdotnet-application-generator",level:2},{value:"Options",id:"options",level:2},{value:'<span class="required">name</span>',id:"name",level:3},{value:"namespaceName",id:"namespacename",level:3},{value:"tags",id:"tags",level:3},{value:"directory",id:"directory",level:3},{value:"template",id:"template",level:3},{value:'<span class="required">language</span>',id:"language",level:3},{value:"testTemplate",id:"testtemplate",level:3},{value:"solutionFile",id:"solutionfile",level:3},{value:"skipSwaggerLib",id:"skipswaggerlib",level:3},{value:"pathScheme",id:"pathscheme",level:3},{value:"useOpenApiGenerator",id:"useopenapigenerator",level:3},{value:"args",id:"args",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"nx-dotnetcore",children:["@nx-dotnet/core",":application"]}),"\n",(0,r.jsx)(n.h2,{id:"nxdotnet-application-generator",children:"NxDotnet Application Generator"}),"\n",(0,r.jsx)(n.p,{children:"Generate a dotnet project under the application directory."}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:(0,r.jsx)("span",{class:"required",children:"name"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): The name assigned to the app"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"namespacename",children:"namespaceName"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): The namespace for the project. If not provided, will be generated based on project name and directory."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"tags",children:"tags"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): Add tags to the project (used for linting)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"directory",children:"directory"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): A directory where the project is placed"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"template",children:"template"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): The template to instantiate when the command is invoked. Each template might have specific options you can pass."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"language",children:(0,r.jsx)("span",{class:"required",children:"language"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): Which language should the project use?"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"testtemplate",children:"testTemplate"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): Which template should be used for creating the tests project?"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:'"nunit"'})]}),"\n",(0,r.jsx)(n.h3,{id:"solutionfile",children:"solutionFile"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(string): The name of the solution file to add the project to"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(boolean): Should the project be added to the default solution file?"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"skipswaggerlib",children:"skipSwaggerLib"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(boolean): By default, if using webapi template, an additional library is scaffolded for swagger files. This skips that setup."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"pathscheme",children:"pathScheme"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(string): Determines if the project should follow NX or dotnet path naming conventions"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:'"nx"'})]}),"\n",(0,r.jsx)(n.h3,{id:"useopenapigenerator",children:"useOpenApiGenerator"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(boolean): If using a codegen project, use openapi-generator"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.h3,{id:"args",children:"args"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['(array): Additional arguments to pass to the dotnet command. For example: "nx g @nx-dotnet/core',":app"," myapp --args='--no-restore'\" Arguments can also be appended to the end of the command using '--'. For example, 'nx g @nx-dotnet/core",":app"," myapp -- --no-restore'."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"[]"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2247:(e,n,t)=>{t.d(n,{RP:()=>c});var r=t(4041);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),u=i,g=h["".concat(s,".").concat(u)]||h[u]||d[u]||a;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));p.displayName="MDXCreateElement"}}]);