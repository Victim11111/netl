"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5647],{42249:(ve,ee,c)=>{c.d(ee,{D4:()=>B,TR:()=>M,_O:()=>Q,f4:()=>O,qj:()=>z,sw:()=>a,yx:()=>n});var y=c(81080),F=c.n(y),$=c(33640);const D=/(\d{1,4})/g,x={amex:/(\d{1,4})(\d{1,6})?(\d{1,5})?/},k={"american-express":"amex"},Y={amex:4};function Q(l){const b=F().number(l).card;if(!!b)return{...b,type:k[b.type]||b.type,cvcLength:[b.code.size]}}function V(l){return l.length>2?l:`${new Date().getFullYear().toString().slice(0,2)}${l}`}function J(l,b){if(l=l.trim(),b=V(b.trim()),!/^\d+$/.test(l)||!/^\d+$/.test(b)||!(parseInt(l,10)<=12))return!1;const A=new Date(b,l),H=new Date;return A.setMonth(A.getMonth()-1),A.setMonth(A.getMonth()+1,1),A>H}function z(l){l=l.replace(/\s/g,"");let[b,A]=l.split("/",2);return b=b&&parseInt(b,10),A=A&&parseInt(V(A),10),{month:b,year:A}}function B(l){return F().number(l).isValid}function M(l){const{month:b,year:A}=z(l);return J(String(b),String(A))}function O(l,b=""){const A=Y[b]||[3,4];return F().cvv(l,A).isValid}function t(l){if(!l)return null;const b=Q(l);return b&&b.type}function n(l){const b=Q(l);if(!b)return l;const A=b.lengths[b.lengths.length-1];l=l.replace(/\D/g,""),l=l.slice(0,A);const H=x[b.type]||D;if(H.global){const v=l.match(H);return v&&v.join(" ")}const W=H.exec(l);return W&&W.shift(),W&&W.join(" ")}const a=({number:l,name:b,expiration:A,cvv:H,country:W,addressLine1:v,city:P,state:f,zipCode:h})=>B(l)?(0,$.fp)(b)?{success:!1,reason:"The name is required"}:M(A)?O(H)?(0,$.fp)(W)?{success:!1,reason:"The country is required"}:(0,$.fp)(v)?{success:!1,reason:"The address is required"}:(0,$.fp)(P)?{success:!1,reason:"The city is required"}:(0,$.fp)(f)?{success:!1,reason:"The state is required"}:(0,$.fp)(h)?{success:!1,reason:"The postal code is required"}:{success:!0,reason:"OK"}:{success:!1,reason:"The CVV provided is invalid"}:{success:!1,reason:"The expiration date provided is invalid"}:{success:!1,reason:"The card number provided is invalid"}},81441:(ve,ee,c)=>{c.d(ee,{K:()=>Me});var y=c(24246),F=c(27378),$=c(67507);const D={type:"card",optionsSchema:{},render(L,d){var i;return L.contents?(0,y.jsx)("section",{children:(0,y.jsxs)("div",{className:"card table",children:[(0,y.jsxs)("header",{className:"table-header",children:[L.title&&(0,y.jsx)($.Z.Title,{children:L.title}),L.description]}),L.contents&&((i=d==null?void 0:d.renderElements)==null?void 0:i.call(d,L.contents,d))]})}):null}};var x=c(46629);const k={type:"display",optionsSchema:{},render({id:L,value:d,label:i}){return(0,y.jsx)(x.Z,{label:i,value:d},L)}};var Y=c(96764),Q=c(61712),V=c(50120),J=c(46016),z=c(83064),B=c(59987),M=c(62654),O=c.n(M),t=c(8167);const n=({children:L})=>L?(0,y.jsx)(O(),{allowedElements:["a","p","br","code","pre","em","strong"],components:{a:({href:d="",children:i})=>{let r;try{const{origin:o}=new URL(d);r=o!==window.location.origin}catch{r=!1}return(0,y.jsx)(t.Z,{href:d,action:r,subdued:!r,outset:"tw-mt-0",children:i})}},children:L}):null,a={type:"text",optionsSchema:{},render({key:L,value:d}){return(0,y.jsx)(n,{children:d},L)}},l={type:"enablement",optionsSchema:{},render:function({key:d,title:i,description:r,illustration:o},{site:s,packageContext:u}){const _=(0,V.I)(),{enabled:C,name:K,friendlyName:Z}=u||{};if(!s||!K)return null;function ae(){let ce=(s==null?void 0:s.get("plugins")).toJS()||[];C?(ce=ce.filter(Ae=>Ae.package!==K),_((0,Q.L3)(s,{plugins:ce}))):_((0,Y.QK)(s,K,ce,!1))}return C?(0,y.jsx)("section",{children:(0,y.jsx)(B.Z,{top:4,children:(0,y.jsxs)("div",{className:"tw-mt-24 tw-flex tw-justify-between",children:[(0,y.jsxs)("div",{children:["Turn off and remove ",Z]}),(0,y.jsxs)(J.Z,{level:"secondary",variant:"danger",onClick:ae,children:["Disable ",Z]})]})})},d):(0,y.jsx)(z.Z,{title:i,illustration:o,action:(0,y.jsxs)(J.Z,{onClick:ae,children:["Enable ",Z]}),children:(0,y.jsx)(n,{children:r})},d)}};var b=c(42406),A=c(70046);const H=(L,d)=>Array.isArray(d)?d.filter(({key:i})=>i===L):d,W=(L,d)=>(H(L,d)||[]).length>0,v=(L,d)=>(H(L,d)||[]).map(({values:i})=>i.map(({value:r})=>r).join(",")),P={type:"env-var",optionsSchema:{},render:function(d,i){const[r,o]=(0,F.useState)(!1);if(!d.envVarName||!i||!i.envVars||!i.account||!i.site||!i.envVarOnDelete||!i.envVarOnCreate)return null;const s=H(d.envVarName,i.envVars);function u(){o(!r)}return(0,y.jsxs)("div",{className:"table-body",children:[!r&&(0,y.jsxs)("dl",{children:[(0,y.jsx)("dt",{children:d.varSummaryName}),W(d.envVarName,i==null?void 0:i.envVars)?(0,y.jsxs)("dd",{className:"tw-flex tw-items-center tw-justify-between",children:[(0,y.jsx)("span",{children:v(d.envVarName,i.envVars).join(", ")}),(0,y.jsx)(J.Z,{level:"secondary",className:"tw-justify-self-end",onClick:u,children:"Edit"})]}):(0,y.jsxs)("dd",{className:"placeholder tw-flex tw-items-center tw-justify-between",children:[(0,y.jsx)("span",{children:"Not set"}),(0,y.jsx)(J.Z,{level:"secondary",className:"tw-justify-self-end",onClick:u,children:"Edit"})]})]}),(0,y.jsxs)(A.ZP,{show:r,noLayout:!0,wide:!0,children:[(0,y.jsx)("hr",{className:"tw-m-0 tw-hr"}),(0,y.jsx)("h1",{className:"tw-c-h2",id:"modal-title",children:d.varSummaryName}),d.varDescription&&(0,y.jsx)("p",{children:d.varDescription}),s.length>0&&(0,y.jsxs)(y.Fragment,{children:["env var list",(0,y.jsx)(J.Z,{level:"secondary",className:"tw-justify-self-end",onClick:u,children:"Close"})]}),s.length===0&&(0,y.jsx)(b.Z,{account:i.account,handleCancel:u,handleSave:i.envVarOnCreate,initialKey:d.envVarName,shouldUpsell:!1,site:i.site})]})]})}};var f=c(24609);const h={type:"form",optionsSchema:{},render(L,d){var i;return L.contents?(0,y.jsx)("div",{className:f.k,children:L.contents&&((i=d==null?void 0:d.renderElements)==null?void 0:i.call(d,L.contents,d))}):null}};var I=c(31425),R=c(61599);const E=({value:L,label:d})=>(0,y.jsx)(x.Z,{label:d,value:L.map((i,r)=>(0,y.jsx)(T,{checkboxValue:i},`checkbox-${d}-${r}`))}),T=({checkboxValue:L})=>{const d=typeof L=="string",[i,r]=(0,F.useState)(d?!1:L.isSelected||!1),o=d?L:L.value;return(0,y.jsx)(R.Z,{type:"checkbox",name:`wfui_checkbox-${(0,I.Z)()}`,label:o,checked:i,onChange:()=>r(!i),required:!0,controlledChecked:void 0,title:void 0,helpText:void 0,disabled:void 0,loading:void 0,tabIndex:void 0,error:void 0,outset:void 0,value:void 0})},N={type:"input-checkbox",optionsSchema:{},render({value:L,label:d,type:i}){return(0,y.jsx)(E,{value:L,label:d,type:i})}};var U=c(33640),w=c(75981);const g=L=>{const{name:d,value:i}=L.target,{surfaceInputsData:r}=globalThis.netlifyContext.state;globalThis.netlifyContext.emit("INPUT_CHANGE",{surfaceInputsData:{...r,[d]:i}})},G=({id:L,label:d,value:i,helpText:r,required:o})=>(0,y.jsx)(w.Z,{name:L,label:d,value:i,leftLabel:!0,helpText:r,required:o,onChange:g}),q={type:"input-password",optionsSchema:{},render({id:L,helpText:d,value:i,label:r,type:o,required:s},{displayOnly:u}){return u?(0,y.jsx)(x.Z,{label:r,value:i&&U.Nw},L):(0,y.jsx)(G,{id:L,label:r,value:i,helpText:d,type:o,required:s},L)}},ne=({value:L,label:d,helpText:i})=>{const r=L.findLast(_=>_.isSelected===!0),[o,s]=(0,F.useState)(r.value||""),u=_=>{const C=_.target.value;s(C)};return(0,y.jsx)(x.Z,{label:d,value:L==null?void 0:L.map(_=>(0,y.jsx)(R.Z,{type:"radio",name:`wfui_${d}`,label:_.value,value:_.value,checked:o===_.value,onChange:u,helpText:i,required:!0,controlledChecked:void 0,title:void 0,disabled:void 0,loading:void 0,tabIndex:void 0,error:void 0,outset:void 0},_.value))})},se={type:"input-radio",optionsSchema:{},render({id:L,helpText:d,value:i,label:r,type:o,checkedValue:s}){return(0,y.jsx)(ne,{id:L,helpText:d,value:i,label:r,checkedValue:s,type:o})}};var re=c(3439);const X=({id:L,label:d,value:i,helpText:r,required:o})=>(0,y.jsx)(re.Z,{name:L,label:d,value:i,type:"text",leftLabel:!0,helpText:r,required:o,onChange:g}),S={type:"input-text",optionsSchema:{},render({id:L,helpText:d,value:i,label:r,type:o,required:s},{displayOnly:u}){return u?(0,y.jsx)(x.Z,{label:r,value:i},L):(0,y.jsx)(X,{id:L,label:r,value:i,helpText:d,type:o,required:s},L)}};var j=c(28563);const pe={type:"section",optionsSchema:{},render({key:L,title:d="",description:i="",contents:r},o){var s;return r?(0,y.jsx)(j.Z,{title:d,description:(0,y.jsx)(n,{children:i}),children:(s=o==null?void 0:o.renderElements)==null?void 0:s.call(o,r,o)},L):null}};var he=c(60042),ge=c.n(he),fe=c(23192);const le=({id:L,label:d,value:i})=>{const r=i.findLast(_=>_.isSelected===!0),[o,s]=(0,F.useState)(r==null?void 0:r.value),u=_=>{const C=_.value;s(C)};return(0,y.jsx)("div",{className:ge()(f.V,"tw-py-1"),children:(0,y.jsx)(re.Z,{name:L,label:d,leftLabel:!0,control:(0,y.jsx)(fe.Z,{name:L,label:d,onChange:u,value:o,options:i})},L)})},ie={type:"select",optionsSchema:{},render({id:L,label:d,value:i,type:r}){return(0,y.jsx)(le,{id:L,label:d,value:i,type:r})}},Te={[a.type]:a,[D.type]:D,[P.type]:P,[l.type]:l,[ie.type]:ie,[S.type]:S,[q.type]:q,[se.type]:se,[N.type]:N,[k.type]:k,[h.type]:h,[pe.type]:pe},_e=L=>Te[L];function ue(L,d){const i=L.trim().split(".").filter(Boolean);return i.reduce((o,s,u)=>{if(u===0)switch(i[0]){case"$PKG":o=d.packageContext;break}else typeof o!="object"||o===null?o=null:o=o[s];return o},null)}function te(L,d){let i={...L};const r=L.if;let o=!1;return r&&d&&(r.truthy&&ue(r.truthy,d)&&(o=!0),r.falsy&&(ue(r.falsy,d)||(o=!0))),o&&(r==null?void 0:r.then)&&(i={...i,...r.then}),i}function ye(L,d){const i={...d,renderElements:ye};return L.map((r,o)=>{const s=[r.type,o].join("-");if(r.if&&(r=te(r,d)),r.display==="hidden")return null;const u=_e(r.type);return u?u.render({key:s,...r},i):(console.error(`workflow ui element unknown: ${JSON.stringify(r)}`),null)})}const be=function({config:L,surfaceRouteConfig:d,envVars:i,envVarOnDelete:r,envVarOnCreate:o,site:s,account:u,surfaceData:_,displayOnly:C}){const K=s==null?void 0:s.get("plugins"),me={enabled:!!((K==null?void 0:K.toJS())||[]).find(ce=>ce.package===(L==null?void 0:L.package)),name:(L==null?void 0:L.package)||"",friendlyName:(L==null?void 0:L.friendlyName)||""};return(0,y.jsx)(y.Fragment,{children:ye(d,{envVars:i,envVarOnDelete:r,envVarOnCreate:o,site:s,account:u,packageContext:me,surfaceData:_,displayOnly:C})})};var Pe=c(50343);class we extends Pe.EventEmitter{constructor({surfaceName:d,exposedFunctions:i,state:r}){super(),this.surface={[d]:i},this.state=r,this.emit=(o,s)=>super.emit(o,{...this.state,...s}),this.on=(o,s)=>{const u=async(..._)=>{const C=await s(..._);C&&(this.state={...this.state,...C})};return super.on(o,u)}}}const Ne=we;var Le=c(49493);const De=async({surfaceName:L,packageKey:d,routeSplat:i=""})=>{const r=await(0,Le.T)(L,d),o=i==null?void 0:i.split("/").filter(Boolean),s=r==null?void 0:r.surfaces.find(K=>K.surfaceName===L),_=o.reduce((K,Z,ae)=>{const me=K[ae]||"";return K.push(`${me}/${Z}`.replace("//","/")),K},["/"]).reverse().find(K=>!!(s!=null&&s.routes[K]))||"",C=s==null?void 0:s.routes[_];return await Promise.resolve({config:r,surfaceConfig:s,surfaceRouteConfig:C,matchedRouteKey:_})},Me=function({surfaceName:L,packageKey:d,envVars:i,envVarOnDelete:r,envVarOnCreate:o,site:s,account:u,notFoundFallbackComponent:_,routeSplat:C,surfaceData:K,displayOnly:Z,exposedFunctions:ae}){var me;const[ce,Ae]=(0,F.useState)(!1),[p,m]=(0,F.useState)(null),[oe,de]=(0,F.useState)(null);return(0,F.useEffect)(()=>{De({surfaceName:L,packageKey:d,routeSplat:C}).then(async({config:Se,surfaceConfig:Ee,surfaceRouteConfig:Oe})=>{var Ie;globalThis.netlifyContext=new Ne({surfaceName:L,exposedFunctions:ae,state:{surfaceConfig:Ee,surfaceRouteConfig:Oe,surfaceData:K}}),await Promise.all(((Ie=Ee==null?void 0:Ee.surfaceScripts)==null?void 0:Ie.map($e=>new Promise((qe,Re)=>{const Ce=document.createElement("script");Ce.type="text/javascript",Ce.src=`/workflowui/${d}/${$e}`,Ce.onload=qe,Ce.onerror=Re,document.body.appendChild(Ce)})))||[]).then(async()=>{globalThis.netlifyContext.on("INPUT_CHANGE",({surfaceInputsData:$e})=>({surfaceInputsData:$e})),await globalThis.netlifyContext.emit("LOAD")}).finally(()=>{m(Se||null),de(Oe||null),Ae(!0)})})},[]),ce?!p||!oe?_||(0,y.jsx)("div",{children:"surface package not found"}):(0,y.jsx)(be,{config:p,surfaceRouteConfig:oe,envVars:i,envVarOnDelete:r,envVarOnCreate:o,account:u,site:s,displayOnly:Z,...(me=globalThis.netlifyContext)==null?void 0:me.state}):(0,y.jsx)("div",{children:"loading..."})}},57368:(ve,ee,c)=>{c.d(ee,{ZP:()=>J});var y=c(33640),F=c(52019),$=c(93967),D=c(1416);const x="http://analytics.services.netlify.com",k="v2",Y=6,Q=15,V=(0,y.cv)((0,F.EP)(new Date));class J{constructor(B){this.apiVersion=k,this.root=`${B.get("analyticsClientApiBase")}/${this.apiVersion}`||`${x}/${this.apiVersion}`}headers(B={}){return{"Content-Type":"application/json",...B}}parseJsonResponse(B){let M=!1;return B.json().then(O=>(M=!0,B.ok?O:Promise.reject(new $.Z(O||"Error fetching analytics data")))).catch(O=>M?Promise.reject(O):Promise.reject({status:B.status}))}parsePaginatedJsonResponse(B){let M=!1;return B.json().then(O=>{M=!0;const t=(0,D.f8)(O==null?void 0:O.next);return B.ok?{pagination:t,data:O}:Promise.reject(new $.Z(O||"Error fetching analytics data"))}).catch(O=>M?Promise.reject(O):Promise.reject({status:B.status}))}request(B,M={}){const O=M.parseJsonResponse||this.parseJsonResponse,t=this.headers(M.headers||{}),n=this.root+B;return fetch(n,{...{credentials:"include"},...M,headers:t}).then(O).catch(l=>{const{status:b,code:A,...H}=l,W=new $.Z({code:b||A,...H});return Promise.reject(W)})}pageviews(B,{from:M,to:O,resolution:t="day"}){return this.request(`/${B}/pageviews?from=${M}&to=${O}&timezone=${V}&resolution=${t}`)}uniqueVisitors(B,{from:M,to:O,resolution:t="day"}){return this.request(`/${B}/visitors?from=${M}&to=${O}&timezone=${V}&resolution=${t}`)}topLocations(B,{from:M,to:O,resolution:t="day"}){return this.request(`/${B}/ranking/countries?from=${M}&to=${O}&timezone=${V}`)}topSources(B,{from:M,to:O}){return this.request(`/${B}/ranking/sources?from=${M}&to=${O}&timezone=${V}&limit=${Y}`)}topPages(B,{from:M,to:O}){return this.request(`/${B}/ranking/pages?from=${M}&to=${O}&timezone=${V}&limit=${Q}`)}bandwidthUsed(B,{from:M,to:O,resolution:t="day"}){return this.request(`/${B}/bandwidth?from=${M}&to=${O}&timezone=${V}&resolution=${t}`)}notFound(B,{from:M,to:O}){return this.request(`/${B}/ranking/not_found?from=${M}&to=${O}&timezone=${V}&limit=${Q}`)}async historicalFunctionLogs(B){const{branch:M,site_id:O,name:t,from:n,to:a,next_cursor:l,search:b}=B,A=(0,y.b4)({...l&&{cursor:l},...b&&{search:b},...n&&{from:String(n)},...a&&{to:String(a)}}),H=M?`branch/${(0,y.cv)(M)}/`:"";return this.request(`/sites/${O}/${H}function_logs/${(0,y.cv)(t)}?${A}`,{parseJsonResponse:this.parsePaginatedJsonResponse})}}},29861:(ve,ee,c)=>{c.d(ee,{CB:()=>$,TP:()=>Q,aN:()=>k,au:()=>Y,jN:()=>x,uI:()=>D});var y=c(90046),F=c.n(y);const $=Object.freeze({github:"github",bitbucket:"bitbucket",gitlab:"gitlab",gitlab_self_hosted:"gitlab_self_hosted",github_app:"github_app",github_enterprise:"github_enterprise",google:"google",email:"email",gitlab_self_managed:"gitlab_self_managed",azure_devops:"azure_devops"}),D=(0,y.fromJS)({github:{id:$.github,name:"GitHub",description:"Authenticate users with GitHub and access GitHub\u2019s REST API",iconName:"github",labels:{api_id:"Client ID",client_id:"Client ID",secret:"Client secret"},active:!0,supports:{search:!0}},bitbucket:{id:$.bitbucket,name:"Bitbucket",description:"Authenticate users with Bitbucket and access their REST API",iconName:"bitbucket",iconColoredName:"bitbucket-colored",labels:{api_id:"Key",client_id:"Key",secret:"Secret"},active:!0,supports:{search:!0},hideGitUserFromRepoList:!0},gitlab:{id:$.gitlab,name:"GitLab",iconName:"gitlab",iconColoredName:"gitlab-colored",labels:{api_id:"Application ID",client_id:"Application ID",secret:"Secret"},active:!0,supports:{search:!0}},gitlab_self_hosted:{id:$.gitlab_self_hosted,name:"GitLab self-managed",shortName:"GitLab",iconName:"gitlab",iconColoredName:"gitlab-colored",labels:{api_id:"Application ID",client_id:"Application ID",secret:"Secret"},supports:{search:!0},active:!1},github_app:{id:$.github_app,name:"GitHub App",shortName:"GitHub",iconName:"github",labels:{api_id:"App ID",secret:"Secret"},supports:{search:!0},active:!1},github_enterprise:{id:$.github_enterprise,name:"GitHub Enterprise",shortName:"GitHub",iconName:"github",labels:{api_id:"App ID",secret:"Secret"},supports:{search:!0},selfhosted:!0,active:!1},google:{id:$.google,name:"Google",iconColoredName:"google-colored",labels:{client_id:"Client ID",secret:"Client secret"},active:!1},email:{id:$.email,name:"Email",active:!1},gitlab_self_managed:{id:$.gitlab_self_managed,name:"GitLab self-managed",shortName:"GitLab",iconName:"gitlab",iconColoredName:"gitlab-colored",labels:{api_id:"Application ID",client_id:"Application ID",secret:"Secret"},active:!1,selfhosted:!0,supports:{search:!0}},azure_devops:{id:$.azure_devops,name:"Azure DevOps",iconName:"azure-devops",iconColoredName:"azure-devops-colored",active:!1,supports:{search:!0},hideGitUserFromRepoList:!0}}),x=D.toList().filter(V=>V.get("active")),k=D.toList().filter(V=>V.get("selfhosted")),Y=V=>x.filterNot(J=>V&&V.find(z=>z.get("name")===J.get("id"))),Q=V=>D.get(V)||(0,y.Map)({id:V,name:V,active:!1})},49173:(ve,ee,c)=>{c.d(ee,{Z:()=>V});var y=c(5780),F=c.n(y),$=c(25994),D=c.n($);function x(){return/^deploy-preview-/.test(window.location.hostname)?"deploy-preview":/--app.netlify.app$/.test(window.location.hostname)?"branch-deploy":(["staging","prod"].includes("prod"),"production")}const k={apiKey:"9b0542315c347c80d64e228583ec6dc2",appVersion:"639b59b05b0a3b0008830ae1",releaseStage:x(),collectUserIp:!1,enabledReleaseStages:["production","staging","branch-deploy","deploy-preview"],onError:J=>{var z;if(/pbjs\.|MetaMask/.test(J.errors[0].errorMessage)||J.errors[0].errorClass==="ChunkLoadError")return!1;const B=sessionStorage.getItem("routePath");B&&(J.context=B),(z=J.request.url)!=null&&z.includes("#")&&(J.request.url=J.request.url.split("#")[0])}};["development","test"].includes("production")&&(k.enabledBreadcrumbTypes=[]),k.enabledReleaseStages.includes("production")||(k.logger=null);const V={start:()=>{F().start({...k,plugins:[new(D())]})}}},23229:(ve,ee,c)=>{c.d(ee,{Z:()=>V});var y=c(34740),F=c(1054),$=c(90956),D=c(1800);const x="af6750c6",k=(...J)=>{};class Y{constructor(){this.context={},this.didInit=!1,this.instance={addCallback:k,addContext:(z,B,M)=>{this.context[z]={value:B,searchOptions:M}},addEventHandler:k,addRouter:k,boot:k,open:k,removeContext:z=>{delete this.context[z]},shutdown:k,setCustomComponent:k,setSummonHotkey:k,setTheme:k,shareCallbacks:k}}setInstance(z){this.instance=z}async launch({accountSlug:z,dispatch:B,themePreference:M,setThemePreference:O,user:t}){if(this.didInit)return;this.didInit=!0;const n=t.get("id");if(!n){console.error("Attempted to launch command bar without a user id");return}const a=t.get("command_bar_signed_user_id"),{init:l}=await c.e(9016).then(c.t.bind(c,78767,23));await l(x),this.setInstance(window.CommandBar),Object.entries(this.context).forEach(([W,v])=>{const{value:P,searchOptions:f}=v;this.instance.removeContext(W),this.instance.addContext(W,P,f)}),this.setContext("accountSlug",z),this.setContext("add",[{label:"Add site from git",route:"/start"},{label:"Add site from a template",route:"/start-with-template"},{label:"Add site by manual deploy (drag and drop)",route:"/drop"}]),this.setContext("docs",[],D.$o),this.setContext("support",[],D.NK);const{Dark:b,Light:A,OS:H}=$.Bv;return this.instance.addContext("theme",M),this.setTheme((0,F.g)(M)),this.instance.addCallback("theme",(W,v)=>{const f=(0,F.g)(v.theme)===b?A:b;O(f),this.setContext("theme",f),this.setTheme(f)}),this.instance.addCallback("theme-os",(W,v)=>{O(H);const P=(0,F.g)(H);this.setContext("theme",P),this.setTheme(P)}),this.setContext("internal",(t.get("email")||"").endsWith("@netlify.com")),this.instance.addCallback("feedback",(W,v)=>{this.instance.shareCallbacks()["commandbar-open-feedback"]()}),this.instance.setCustomComponent("footer",D._7),this.instance.addEventHandler((W,v)=>(0,D.Zm)(B,{eventType:W,eventData:v,userId:n,accountSlug:z})),this.instance.addRouter(W=>y.mW.push(W)),this.instance.boot(n,{},{hmac:a})}setContext(z,B,M){this.instance.removeContext(z);const O=M?{searchOptions:{searchFunction:M}}:void 0;this.instance.addContext(z,B,O)}setTheme(z){this.instance.setTheme(`netlify-theme-${z}`)}setSummonHotkey(z){this.instance.setSummonHotkey(z)}open(){this.instance.open()}shutdown(){this.instance.shutdown(),this.didInit=!1}}const V=new Y},43971:(ve,ee,c)=>{c.d(ee,{Ck:()=>J,DA:()=>Q,L9:()=>R,N9:()=>z,Sd:()=>$,X:()=>F,ZP:()=>V,cz:()=>x,hh:()=>E,kB:()=>T,me:()=>k,p4:()=>B,sC:()=>Y,ub:()=>N,w6:()=>M,yz:()=>D});var y=c(16662);const F="INVALID_FQDN",$="^[a-zA-Z0-9-.]+$",D="NETLIFY_ADDRESS_ERROR",x="NETLIFY",k="NETLIFYv6",Y="MX",Q="SPF",V="TXT",J="SRV",z="CAA",B="CNAME",M="tag",O="hostname",t="value",n="(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9(\\-)]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9](\\.?))$",a=`^${n}`,l=`^@$|^(\\*)$|^(\\*\\.)?${n}`,b=`^@$|${a}`,A="^(\\*)$|^(\\*\\.)?(([a-zA-Z0-9_]|[a-zA-Z0-9_][a-zA-Z0-9_\\-]*[a-zA-Z0-9_])\\.)*([A-Za-z0-9_]|[A-Za-z0-9_][A-Za-z0-9_\\-]*[A-Za-z0-9_](\\.?))$",H=`^@$|${A}`,W="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$",v="^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*$",P="(^issue$)|(^issuewild$)|(^iodef$)",h={A:W,AAAA:v,ALIAS:a,CNAME:A,MX:a,NS:a,SPF:"^(v=spf1).*$",SRV:a},I={CNAME:A,TXT:H,NS:b};function R(q,ne=t){switch(ne){case t:return h[q]||"";case M:return P;case O:return I[q]||l;default:return""}}function E(q){return q?Promise.all([c.e(7802).then(c.bind(c,4038)),Promise.resolve().then(c.bind(c,28770))]).then(([ne,se])=>[ne.default||ne,se.default||se]).then(([ne,se])=>{const re=ne.parseDomain(ne.fromUrl(q));if(re.type!==y.xj.Listed)return null;let{subDomains:X,domain:S,topLevelDomains:j}=re;return S||(X=re.icann.subDomains,S=re.icann.domain,j=re.icann.topLevelDomains),S?{subdomain:se.toASCII(X.join(".")),domain:se.toASCII(S),tld:se.toASCII(j.join("."))}:null}):Promise.resolve(null)}function T(q){return E(q).then(ne=>{const{subdomain:se,domain:re,tld:X}=ne||{};return re?se==="www"?`${re}.${X}`:se?null:`www.${re}.${X}`:null})}function N(q){return E(q).then(ne=>ne?Promise.resolve(ne):Promise.reject(F))}function U(q){return(q||"").toLowerCase().replace(/[^a-z0-9-]/,"").substr(0,35)}function w(q){return(q||"").toLowerCase().replace(/[^a-z0-9*.\n-]/,"").substr(0,255)}function g(q){const ne=(q||"").toLowerCase().replace(/[^0-9]+/,"").substr(0,255);return ne?parseInt(ne):0}function G(q){return q}},82734:(ve,ee,c)=>{c.d(ee,{t:()=>F});function y($,D){return`/favicon-prod-remote-${$}-${D}.png`}function F($){var D;const x=document.querySelector("link[rel='icon'][type='image/x-icon']");x&&((D=x.parentNode)==null||D.removeChild(x));const k="link[rel='icon'][sizes]";(document.querySelectorAll(k)||[]).forEach(Q=>{const V=Q.getAttribute("sizes");Q.setAttribute("href",y($,V))})}},10345:(ve,ee,c)=>{c.d(ee,{Ev:()=>Me,Wx:()=>L,TR:()=>d,yU:()=>De});var y=c(29861),F=c(87883),$=c(33640);const D="https://app.vssps.visualstudio.com",x="https://dev.azure.com",k="7.0";function Y(i){return{login:i.id,full_name:i.displayName,name:i.displayName}}function Q(i){return{id:i.accountId,api_id:i.accountName,login:i.accountName,full_name:i.accountName}}function V(i){return i.value.map(Q)}function J(i){return r=>{var o,s,u;return{id:r.id,api_id:r.id,full_name:`${i}/${r.project.name}/_git/${r.name}`,full_name_encoded:`${i}/${(0,$.cv)(r.project.name)}/_git/${(0,$.cv)(r.name)}`,full_name_ui:`${i}/${r.project.name}/${r.name}`,name:r.name,default_branch:t(r.defaultBranch),private:((o=r.project)==null?void 0:o.visibility)!=="public",project_name:(s=r.project)==null?void 0:s.name,project_id:(u=r.project)==null?void 0:u.id,organization_name:i}}}function z(i){return r=>{var o;return(o=r.value)==null?void 0:o.map(J(i))}}const B=["git.push","git.pullrequest.created","git.pullrequest.merged","git.pullrequest.updated"];function M(i){return t(i.name)}function O(i){var r;return(r=i.value)==null?void 0:r.map(M)}function t(i){return i==null?void 0:i.replace(/^refs\/heads\//,"")}function n(i){var r;return(r=i.value)==null?void 0:r.filter(o=>o.gitObjectType==="blob").map(o=>({...o,path:o.path.replace(/^\//,"")}))}function a(i){return i.content}function l(i){const r=i.headers.get("x-ms-continuationtoken");return r?{next:r}:null}class b{constructor(r,o,s){this.addDeployKey=(u,_,C)=>Promise.resolve(_),this.token=r,this.root=o||D,this.apiVersion=s||k}headers(r={}){return new Headers({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`,...r})}parseJsonResponse(r,o){return r.json().then(s=>r.ok?{data:o?o(s):s,pagination:l(r)}:Promise.reject(s))}request(r,o={}){const s=this.headers(o.headers||{}),u=(0,$.b4)({...o.queryParams||{},"api-version":this.apiVersion});return fetch(`${o.root||this.root}${r}?${u}`,{method:o.method||"GET",headers:s,...o.body&&{body:o.body}}).then(_=>{var C,K;return(K=(C=_.headers)==null?void 0:C.get("Content-Type"))!=null&&K.match(/json/)?this.parseJsonResponse(_,o.format):_.text().then(Z=>({data:Z}))})}user(){return this.request("/_apis/profile/profiles/me",{format:Y})}organizations({userLogin:r}){return this.request("/_apis/accounts",{queryParams:{memberId:r},format:V})}repos({organization:r}){return this.request(`/${(0,$.cv)(r)}/_apis/git/repositories`,{root:x,format:z(r)}).catch(()=>({data:[]}))}searchRepos(r){const{search:o}=r;return this.repos(r).then(s=>typeof s.data=="string"?s:{data:s.data.filter(({name:u,organization_name:_,project_name:C})=>`${_}/${C}/${u}`.toLowerCase().includes(o.toLowerCase()))})}branches({api_id:r,page:o,organization_name:s}){const u={$top:1e3,filter:"heads"};return o&&(u.continuationToken=o),this.request(`/${(0,$.cv)(s)}/_apis/git/repositories/${(0,$.cv)(r)}/refs`,{root:x,queryParams:u,format:O})}addWebhook({api_id:r,site:o,organization_name:s,project_id:u}){const _=Z=>this.request(`/${(0,$.cv)(s)}/_apis/hooks/subscriptions`,{method:"GET",root:x,queryParams:{publisherId:"tfs",consumerId:"webHooks",consumerActionId:"httpRequest",eventType:Z}}).then(ae=>({eventType:Z,subscriptions:ae==null?void 0:ae.data})),C=({subscriptions:Z})=>Array.isArray(Z==null?void 0:Z.value)?!Z.value.some(ae=>{var me,ce,Ae;return((me=ae==null?void 0:ae.publisherInputs)==null?void 0:me.projectId)===u&&((ce=ae==null?void 0:ae.publisherInputs)==null?void 0:ce.repository)===r&&((Ae=ae==null?void 0:ae.consumerInputs)==null?void 0:Ae.url)===o.deploy_hook}):!0,K=({eventType:Z})=>{const ae={publisherId:"tfs",resourceVersion:"1.0",consumerId:"webHooks",consumerActionId:"httpRequest",eventType:Z,publisherInputs:{projectId:u,repository:r},consumerInputs:{url:o.deploy_hook}};return Z==="git.pullrequest.updated"&&(ae.publisherInputs.notificationType="PushNotification"),this.request(`/${(0,$.cv)(s)}/_apis/hooks/subscriptions`,{method:"POST",body:JSON.stringify(ae),root:x})};return Promise.all(B.map(_)).then(Z=>Z.filter(C)).then(Z=>Promise.all(Z.map(K))).then(()=>o).catch(function(Z){return Z.typeKey==="AccessCheckException"?{...o,webhooks_inactive:!0}:Promise.reject(Z)})}dir({organization_name:r,api_id:o,branch:s,filepath:u=""}){return this.request(`/${(0,$.cv)(r)}/_apis/git/repositories/${(0,$.cv)(o)}/items`,{root:x,queryParams:{"versionDescriptor.version":s,scopePath:u,recursionLevel:"oneLevel"},format:n})}read({organization_name:r,api_id:o,branch:s,filepath:u}){return this.request(`/${(0,$.cv)(r)}/_apis/git/repositories/${(0,$.cv)(o)}/items`,{root:x,queryParams:{"versionDescriptor.version":s,path:u,$format:"json",includeContent:!0},format:a})}}const A="https://api.bitbucket.org";function H(i){return i}function W(i){const{page:r,next:o,previous:s}=i;if(r&&(o||s))return{current:r,next:r+1,nextUrl:o}}function v(i){var r;return{id:i.full_name,api_id:i.full_name,full_name:i.full_name,name:i.name,description:i.description,private:i.is_private,scm:i.scm,default_branch:(r=i.mainbranch)==null?void 0:r.name}}function P(i){return{data:i.data.values.map(v),pagination:i.pagination}}function f(i){return{id:i.slug,api_id:i.slug,login:i.slug,full_name:i.name,avatar:i.links.avatar.href}}function h(i){return{data:i.data.values.map(f).reverse(),pagination:i.pagination}}function I({data:i,pagination:r}){return{data:i.values.map(o=>o.name),pagination:r}}function R(i){return{data:i.data.values}}function E(i){return{login:i.username,full_name:i.username,name:i.display_name,avatar:i.links.avatar.href}}class T{constructor(r){this.token=r,this.root=A}headers(r={}){return{Authorization:`Bearer ${this.token}`,"Content-Type":"application/json",...r}}parseJsonResponse(r,o){return r.json().then(s=>{if(!r.ok)return Promise.reject(s);const u=W(s);return{data:o(s),pagination:u}})}request(r,o={}){const s=this.headers(o.headers||{});return fetch(this.root+r,{...o,headers:s}).then(u=>{var _,C,K;return(K=(C=(_=u.headers).get)==null?void 0:C.call(_,"Content-Type"))!=null&&K.match(/json/)?this.parseJsonResponse(u,o.format||H):u.text().then(Z=>({data:Z}))})}user(){return this.request("/2.0/user",{format:E})}repos({organization:r,page:o,per_page:s,search:u}){const _="/2.0/repositories";let K=r?`${_}/${r}?pagelen=${100}&role=admin`:`${_}?pagelen=${100}&role=admin`;return u&&(K+=`&q=${(0,$.cv)(`name~"${u}"`)}`),this.request(K).then(P)}repo(r){return this.request(`/2.0/repositories/${r}`,{format:v})}searchRepos(r){return this.repos(r)}branches({api_id:r,page:o=1}){return this.request(`/2.0/repositories/${r}/refs/branches?pagelen=100&page=${o}`).then(I)}organizations(){return this.request("/2.0/workspaces?role=owner").then(h)}fetchAndFormatDir(r,o,s="",u="",_=[]){const C=u?`?page=${u}`:"";return this.request(`/2.0/repositories/${r}/src/${o}/${s}${C}`).then(K=>{var Z;const ae=R(K),me=(Z=K.pagination)==null?void 0:Z.nextUrl,ce=me&&new URLSearchParams(me.split("?")[1]).get("page");return ce?this.fetchAndFormatDir(r,o,s,ce,_.concat(ae.data)):{data:_.concat(ae.data)}})}dir({full_name:r,branch:o,filepath:s=""}){return this.fetchAndFormatDir(r,o,s,"",[])}read({full_name:r,branch:o,filepath:s=""}){return this.request(`/2.0/repositories/${r}/src/${o}/${s}`).then(u=>({data:u.data,path:s}))}addDeployKey(r,o){return this.request(`/2.0/repositories/${r}/deploy-keys`,{method:"POST",body:JSON.stringify({label:"Netlify Deploy Key",key:o.public_key})}).then(()=>o)}addWebhook({api_id:r,site:o}){const s=`/2.0/repositories/${r}/hooks`;return this.request(s).then(u=>u.data==="Forbidden"?Promise.reject(new Error("We couldn\u2019t set up continuous deployment for this repository. This typically happens when you don\u2019t have admin rights to the repository.")):u.data.values.filter(_=>_.url===o.deploy_hook).length?o:this.request(s,{method:"POST",body:JSON.stringify({description:"Netlify Deploy Hook",url:o.deploy_hook,active:!0,events:["repo:push"]})}).then(()=>o))}}var N=c(93967),U=c(1416);const w="https://api.github.com";function g(i){return i}function G(i){return{id:i.id,api_id:i.full_name,full_name:i.full_name,name:i.name,description:i.description,private:i.private,default_branch:i.default_branch,owner_type:i.owner.type}}function q(i){return i.map(G)}function ne(i){return q(i.items)}function se(i){return{id:i.id,api_id:i.login,login:i.login,full_name:i.full_name,avatar:i.avatar_url}}function re(i){return i.map(se)}function X(i){return{login:i.login,full_name:i.login,name:i.name,avatar:i.avatar_url}}class S{constructor(r,o){this.token=r,this.root=(o||w).replace(/\/$/,"")}headers(r={}){const o=new Headers({"Content-Type":"application/json",...r});return this.token&&o.set("Authorization",`token ${this.token}`),o}parseJsonResponse(r,o){return r.json().then(s=>{if(!r.ok)return Promise.reject(s);const u=(0,U.ot)(r);return{data:o(s),pagination:u}})}request(r,o={}){const s=this.headers(o.headers||{});return fetch(this.root+r,{...o,headers:s}).then(u=>{var _,C;return(C=(_=u.headers)==null?void 0:_.get("Content-Type"))!=null&&C.match(/json/)?this.parseJsonResponse(u,o.format||g):u.text().then(K=>({data:K}))})}user(){return this.request("/user",{format:X})}repos({organization:r,page:o,per_page:s}){let u=r?`/orgs/${r}/repos`:"/user/repos";return u+=`?page=${o}&per_page=${s}`,this.request(u,{format:q})}repo(r){return this.request(`/repos/${r}`,{format:G})}searchRepos({search:r,organization:o}){let s=`/search/repositories?q=${(0,$.cv)(r)}`;return o?(s+=`+user:${o}+fork:true`,this.request(s,{format:ne})):this.user().then(u=>(s+=`+user:${u.data.login}+fork:true`,this.request(s,{format:ne})))}branches({api_id:r,page:o=1}){return this.request(`/repos/${r}/branches?page=${o}&per_page=100`).then(({data:s,pagination:u})=>({data:s.map(_=>_.name),pagination:u}))}organizations(){return this.request("/user/orgs?page=1&per_page=100",{format:re})}dir({full_name:r,branch:o,filepath:s=""}){let u=`/repos/${r}/contents/${s}`;return o&&(u+=`?ref=${o}`),this.request(u)}read({full_name:r,branch:o="",filepath:s=""}){const u={Accept:"application/vnd.github.VERSION.raw"};let _=`/repos/${r}/contents/${s}`;return o&&(_+=`?ref=${o}`),this.request(_,{headers:u}).then(C=>({data:C.data,path:s}))}addDeployKey(r,o,s){const u={title:"Netlify Deploy Key",key:o.public_key,read_only:s};return this.request(`/repos/${r}/keys`,{method:"POST",body:JSON.stringify(u)}).then(()=>o)}addWebhook({api_id:r,site:o}){const s={name:"web",active:!0,events:["delete","push","pull_request","create","issue_comment","pull_request_review","pull_request_review_comment"],config:{url:o.deploy_hook,content_type:"json"}};return this.request(`/repos/${r}/hooks`,{method:"POST",body:JSON.stringify(s)}).then(()=>o).catch(u=>u.errors&&u.errors[0]&&u.errors[0].message&&u.errors[0].message.match(/already/)?o:Promise.reject(u))}createRepo(r){const o={name:r.name,description:r.description,homepage:r.url,private:!!r.private};return this.request("/user/repos",{method:"POST",body:JSON.stringify(o)}).then(s=>G(s.data)).catch(s=>{const u=s.errors&&s.errors[0]&&/already exists/.test(s.errors[0].message)?"Repository name already exists on this account":s.message||"Repository creation failed";throw new N.Z(u)})}}const j=i=>r=>({id:r.id,api_id:r.full_name,full_name:r.full_name,name:r.name,description:r.description,private:r.private,installation_id:i,default_branch:r.default_branch,owner_type:r.owner.type}),pe=i=>r=>r.repositories.map(j(i)),he=(i,r)=>{const o=new RegExp(i,"i");return s=>u=>u.repositories.reduce((_,C)=>(o.test(C.full_name)&&_.push(j(s)(C)),_),r)},ge=i=>{const r=i.account;return{id:i.id,api_id:r.login,login:r.login,full_name:r.login,avatar:r.avatar_url,installation_id:i.id,target_type:i.target_type,repository_selection:i.repository_selection}},fe=i=>i.installations.map(ge),le=(i,r)=>{const o=i.full_name.toUpperCase(),s=r.full_name.toUpperCase();return o<s?-1:o>s?1:0},ie=()=>new Date().getTime();class Te{constructor(r,o){this.request=(s,u)=>this.github.request(s,u),this.installations=()=>this.request(`/user/installations?page=1&per_page=100&v=${ie()}`,{headers:{Accept:"application/vnd.github.machine-man-preview+json"},format:fe}).catch(s=>({data:[],pagination:{}})),this.findInstallation=(s,u)=>this.installations().then(_=>_.data).then(_=>_.find(C=>s===C.login)||u&&_.find(C=>C.target_type==="Organization")),this.findInstallationId=({login:s,installationId:u})=>u?Promise.resolve(u):this.findInstallation(s).then(_=>_&&_.id),this.findInstallationRepos=({installationId:s,page:u,per_page:_,format:C})=>s?this.request(`/user/installations/${s}/repositories?page=${u}&per_page=${_}&v=${ie()}`,{headers:{Accept:"application/vnd.github.machine-man-preview+json"},format:C(s)}).catch(K=>({data:[],pagination:{}})):Promise.resolve({data:[],pagination:{}}),this.user=()=>this.github.user().then(({data:s})=>this.findInstallation(s.login,!0).then(u=>({data:{...s,installation_id:u&&u.login===s.login&&u.id,installation:u}}))),this.organizations=()=>this.installations().then(s=>({data:s.data.filter(u=>u.target_type==="Organization"),pagination:{}})),this.repos=({organization:s,page:u,per_page:_,installationId:C,gitUser:K,format:Z=pe})=>this.findInstallationId({login:s||K.get("login"),installationId:C}).then(ae=>this.findInstallationRepos({installationId:ae,page:u,per_page:_,format:Z})),this.searchRepos=({search:s,...u})=>{if(!s)return this.repos(...u);const _=[],C={...u,per_page:100,format:he(s,_)};return this.repos({...C,page:1}).then(({pagination:K})=>{const Z=[],ae=(K==null?void 0:K.last)||1;for(let me=2;me<=ae;me++)Z.push(this.repos({...C,page:me}));return Promise.all(Z)}).then(K=>({data:_.sort(le),pagination:{}}))},this.repo=s=>this.github.repo(s),this.createRepo=s=>s.template?this.github.createRepo(s):this.user().then(u=>{const{installation_id:_,repository_selection:C}=u.data;if(C!=="all")throw new N.Z("Can't create a repo for the current app installation.");return this.request("/user/repos",{method:"POST",body:JSON.stringify({name:s.name,description:s.description,homepage:s.url})}).then(K=>j(_)(K.data))}),this.dir=({full_name:s,branch:u,filepath:_})=>this.github.dir({full_name:s,branch:u,filepath:_}),this.read=({full_name:s,branch:u,filepath:_})=>this.github.read({full_name:s,branch:u,filepath:_}),this.branches=({api_id:s,page:u})=>this.github.branches({api_id:s,page:u}),this.addDeployKey=(s,u,_)=>Promise.resolve(u),this.addWebhook=({site:s})=>Promise.resolve(s),this.github=new S(r,o)}}const _e="https://gitlab.com/api/v4";function ue(i){return i}function te(i){return{id:i.id,api_id:i.id,full_name:i.path_with_namespace,name:i.name,description:i.description,default_branch:i.default_branch,private:i.visibility==="private"}}function ye(i){return i.map(te)}function be(i){return{id:String(i.id),api_id:String(i.id),login:i.name,full_name:i.full_name,avatar:i.avatar_url}}function Pe(i){return i.map(be)}function we(i){return{login:i.username,full_name:i.username,name:i.name,avatar:i.avatar_url}}class Ne{constructor(r,o){this.token=r,this.root=o||_e}headers(r={}){return{"Content-Type":"application/json",...this.token?{Authorization:`Bearer ${this.token}`}:{},...r}}parseJsonResponse(r,o){return r.json().then(s=>{if(!r.ok)return Promise.reject(s);const u=(0,U.ot)(r);return{data:o(s),pagination:u}})}request(r,o={}){const s=this.headers(o.headers||{});return fetch(this.root+r,{...o,headers:s}).then(u=>{var _,C;return(C=(_=u==null?void 0:u.headers)==null?void 0:_.get("Content-Type"))!=null&&C.match(/json/)?this.parseJsonResponse(u,o.format||ue):u.text().then(K=>({data:K}))})}user(){return this.request("/user",{format:we})}repos({organization:r,page:o,per_page:s,search:u,scopeCurrentUser:_=!0}){let C=r?`/groups/${r}/projects?`:"/projects?min_access_level=40&";return C+=`page=${o}&per_page=${s}`,u&&(C+=`&search=${(0,$.cv)(u)}`),_&&!r?this.user().then(K=>{const Z=`/users/${K.data.login}${C}`;return this.request(Z,{format:ye})}):this.request(C,{format:ye})}repo(r){return this.request(`/projects/${(0,$.cv)(r)}`,{format:te})}searchRepos(r){return this.repos(r)}branches({api_id:r,page:o=1}){return this.request(`/projects/${(0,$.cv)(r)}/repository/branches?per_page=100&page=${o}`).then(({data:s,pagination:u})=>({data:s.map(_=>_.name),pagination:u}))}organizations({per_page:r=5e3}={}){return this.request(`/groups?per_page=${r}`,{format:Pe})}dir({full_name:r,branch:o,filepath:s=""}){let u=`/projects/${(0,$.cv)(r)}/repository/tree?per_page=100`,_="";const C=[];return o&&C.push(`ref=${o}`),s&&(C.push(`path=${s}`),_=s+"/"),C&&(u+=`&${C.join("&")}`),this.request(u).then(K=>({data:K.data.map(Z=>({path:_+Z.name}))}))}read({full_name:r,branch:o,filepath:s=""}){let u;return new RegExp(/^.*\.[^\\]+$/).test(s)?(u=`/projects/${(0,$.cv)(r)}/repository/files`,s&&(u+=`/${(0,$.cv)(s)}`),u+=`?ref=${o}`):(u=`/projects/${(0,$.cv)(r)}/repository/tree?path=${s}`,u+=`&ref=${o}`),this.request(u).then(C=>{if(C.data.length){const K=C.data.find(Z=>(Z==null?void 0:Z.type)==="tree");return{data:[{path:K==null?void 0:K.path,type:"dir"}],path:s}}return{data:window.atob(C.data.content),path:s}})}addDeployKey(r,o,s){const u=`/projects/${(0,$.cv)(r)}/deploy_keys`,_={title:"Netlify Deploy Key",key:o.public_key,can_push:!s};return this.request(u,{method:"POST",body:JSON.stringify(_)}).then(new Promise(C=>{setTimeout(()=>{C(o)},1e4)})).then(()=>o)}addWebhook({api_id:r,site:o}){const s=`/projects/${(0,$.cv)(r)}/hooks`,u={url:o.deploy_hook,push_events:!0,merge_requests_events:!0,note_events:!0,enable_ssl_verification:!0};return this.request(s,{method:"POST",body:JSON.stringify(u)}).then(()=>o).catch(function(_){return Promise.reject(_)})}checkErrorForInvalidToken(r){if(r.error==="invalid_token")return{code:401,message:"Your access token has expired. Please reconnect to GitLab to continue."}}createRepo(r){const o={name:r.name,description:r.description};return r.private&&(o.visibility="private"),this.request("/projects",{method:"POST",body:JSON.stringify(o)}).then(s=>te(s.data)).catch(s=>{const u=this.checkErrorForInvalidToken(s);if(u)throw new N.Z(u);const _=s.message&&/taken/.test(String(s.message.name))?"Repository name already exists on this account":"Repository creation failed";throw new N.Z(_)})}}const Le={github:S,github_app:Te,github_enterprise:Te,gitlab:Ne,gitlab_self_hosted:Ne,bitbucket:T,azure_devops:b};function De(i){return{"github.com":y.CB.github,"gitlab.com":y.CB.gitlab,"bitbucket.org":y.CB.bitbucket,"dev.azure.com":y.CB.azure_devops}[i]}function Me(i){const r=(0,F.oI)(i),o=(0,F.Gu)(i),s=(0,F.qq)(i);return L(r,o,s)}function L(i,r,o){const s=Le[i];if(s){const u=new s(r,o);return u.provider=i,u}}function d(i,r){return{github:`https://github.com/${r}`,gitlab:`https://gitlab.com/${r}`,bitbucket:`https://bitbucket.org/${r}`,azure_devops:void 0}[i]}},23178:(ve,ee,c)=>{c.d(ee,{q:()=>$});var y=c(73274);function F(){}class ${constructor({appId:x,onAppInstall:k,enterpriseUrl:Y=""}){this.messageHandler=Q=>{const V=Q&&Q.data;if(/^installation:ready:/.test(V)){const[J,z,B]=V.match(/^installation:ready:(\d+):([\w-]+)$/);this.onAppInstall({installationId:Number(z),login:B}),this.close()}},this.open=()=>{window.addEventListener("message",this.messageHandler,!1),(0,y.xw)({provider:this.provider,url:this.url})},this.close=()=>{this.cleanup()},this.cleanup=()=>{window.removeEventListener("message",this.messageHandler,!1),(0,y.on)()},this.appId=x||"netlify",this.onAppInstall=k||F,this.url=Y?`${Y.replace(/\/$/,"")}/github-apps/netlify/installations/new`:`https://github.com/apps/${this.appId}/installations/new`,this.provider=Y?"github_enterprise":"github_app"}}},81073:(ve,ee,c)=>{c.d(ee,{ZP:()=>R,yl:()=>Q});var y=c(5780),F=c.n(y),$=c(75033),D=c.n($);const x=()=>c.e(9689).then(c.t.bind(c,92133,23)),Y={listFrameworks:async function(E){return(await x()).listFrameworks(E)}},Q=["netlify.toml","package.json",".nvmrc",".node_version","netlify","functions",".lfsconfig","Gemfile"],V="dist/",J="v12.18.0",z={"jekyll with no gemfile":`It looks like this is a **Jekyll** site, but you don't have a **Gemfile**.
This will most likely lead to a broken build.
Check out our [Migrating your Jekyll site to Netlify](https://www.netlify.com/blog/2017/05/11/migrating-your-jekyll-site-to-netlify/)
guide to fix this issue before deploying your site.`,"jekyll not in gemfile":`It looks like this is a **Jekyll** site, but your **Gemfile** doesn\u2019t list
Jekyll as a dependency. This will most likely lead to a broken build.
Check out our [Migrating your Jekyll site to Netlify](https://www.netlify.com/blog/2017/05/11/migrating-your-jekyll-site-to-netlify/)
guide to fix this issue before deploying your site.`,"error parsing package.json":`You have a malformed package.json in your folder. This will most likely lead to a
broken build when attempting to install your npm dependencies.`,"repository uses large media":`**This repository uses Netlify Large Media**

Repository files tracked by the Large Media service are stored with the original site. These files cannot be accessed in clones or forks. Contact the original repository owner for possible alternatives.`},t=[(E,T)=>{if(!!T["package.json"])try{JSON.parse(T["package.json"])}catch{return z["error parsing package.json"]}},(E,T)=>{if(!!E.includes("_config.yml")&&!(E.includes("_config.yml")&&T["package.json"]&&T["package.json"].match(/hexo/))){if(!T.Gemfile)return z["jekyll with no gemfile"];if(!T.Gemfile.match(/('jekyll'|"jekyll"|'github-pages'|"github-pages")/))return z["jekyll not in gemfile"]}},(E,T,N)=>{if(!T[".lfsconfig"]||!N)return;if(/\.netlify\/large-media/.test(T[".lfsconfig"]))return z["repository uses large media"]}];function n(E=[],T={},N){for(const U in t){const w=t[U](E,T,N);if(w)return w}}const a=({plugins:E=[],context:T={}})=>{const N=E;return Object.keys(T).forEach(U=>{T[U].plugins&&N.push(...T[U].plugins)}),[...new Set(N.map(U=>U.package))]},l=E=>{var T,N;if(!E)return{};const U={};let w;try{w=D().parse(E)}catch(G){return F().notify(G,q=>{q.context="getNetlifyTomlSettings => TOML.parse",q.severity="info"}),U}w!=null&&w.build&&(U.cmd=w.build.command,U.dir=w.build.publish),U.functions_dir=((T=w==null?void 0:w.build)==null?void 0:T.functions)||((N=w==null?void 0:w.functions)==null?void 0:N.directory),w!=null&&w.template&&(U.template=w.template);const g=a(w);return g.length&&(U.plugins_installed=g),U},b=(E,T)=>{var N;if(!T["package.json"])return{};let U;try{U=JSON.parse(T["package.json"])}catch{return{}}const w=E.includes("yarn.lock")?"yarn":"npm run";return(N=U==null?void 0:U.scripts)!=null&&N.build?{cmd:`${w} build`}:{}},A=(E,T)=>{var N;const U=G=>{const q=G.startsWith("./")?G.slice(2):G;return E.includes(q)},w=((N=T[".nvmrc"])==null?void 0:N.trim())||J;let g;try{g=T["package.json"]?JSON.parse(T["package.json"]):{}}catch{g={}}return{pathExists:U,packageJson:g,nodeVersion:w}},H=async(E,T)=>{try{const N=A(E,T),U=await Y.listFrameworks(N),w={};if(U.length){const{build:g,id:G,name:q,plugins:ne}=U[0];w.cmd=g.commands[0],w.dir=g.directory,w.framework=G,w.frameworkName=q,w.plugins_recommended=ne}return w}catch(N){throw new Error(`Error getting framework information: ${N}`)}};function W(E){const T=E.netlify,N=E.functions;if((!T||!Array.isArray(T))&&(!N||!Array.isArray(N)))return null;if(T){for(const U of T)if(U.path==="netlify/functions"&&U.type==="dir")return{functions_dir:U.path};if(!N)return null}return{functions_dir:"functions"}}const v=E=>{const T={},N=W(E);return N||T},P=(E,T,N,U)=>{const w=[E,T,N,U],g={cmd:void 0,dir:void 0,template:void 0,functions_dir:void 0,plugins_installed:void 0,plugins_recommended:void 0,framework:void 0,frameworkName:void 0};return w.forEach(G=>{G&&Object.keys(G).forEach(q=>{g[q]=g[q]||G[q]})}),!g.dir&&g.cmd&&(g.dir=V),g},f=(E=[],T=[],N=[])=>T.reduce((U,w)=>E.includes(w)&&!N.includes(w)?U:[...U,{package:w}],[]),h=async(E=[],T={})=>{const N=l(T["netlify.toml"]),U=b(E,T),w=await H(E,T),g=v(T),G=P(N,U,w,g),q=["@netlify/plugin-nextjs"];return G.plugins=f(N==null?void 0:N.plugins_installed,w==null?void 0:w.plugins_recommended,q),G},R=async(E,T,N)=>{const U=n(E,T,N);return{settings:await h(E,T),warning:U}}},92115:(ve,ee,c)=>{c.d(ee,{u:()=>B});var y=c(93967);const F=2e4,$={authDomain:"netlify.firebaseapp.com",projectId:"firebase-netlify",storageBucket:"firebase-netlify.appspot.com",messagingSenderId:"344466503271"};function D(M){const{databaseURL:O}=M;return new Promise((t,n)=>{Promise.all([c.e(1326).then(c.bind(c,25353)),c.e(1326).then(c.bind(c,76545))]).then(([a,l])=>{const{getApp:b,initializeApp:A}=a;let H;try{H=b(O)}catch{H=A({...$,...M},O)}return[H,l]}).then(t).catch(a=>{console.error("Error loading Firebase",a),n(a)})})}function x(M){console.error(M)}class k{constructor(O){this.endpoint=O.endpoint,this.path=O.path.replace(/\./g,"-"),this.startAt=O.startAt,this.token=O.token}listen(O,t=x){let n=!1;setTimeout(()=>{!n&&t(new y.Z("Connection timed out"))},F);const a={apiKey:this.token,databaseURL:this.endpoint};D(a).then(([l,b])=>{const{getDatabase:A,query:H,ref:W,orderByChild:v,startAt:P,onChildAdded:f,onValue:h}=b,I=A(l);this.api=H(W(I,this.path),v("ts"),P(this.startAt)),f(this.api,R=>{n=!0,O(R.val())}),h(this.api,()=>{n||(n=!0,O())})})}close(){this.api&&this.api.off&&this.api.off()}}var Y=c(73274),Q=c(15949);function V(M){console.error(M)}class J{constructor(O){switch(O.resource){case Q.Z.BUILD:this._initBuildLog(O);break;case Q.Z.FUNCTION:this._initFunctionLog(O);break;case Q.Z.EDGE_FUNCTION:this._initEdgeFunctionLog(O);break;default:throw new Error("unknown log type")}}_initBuildLog(O){this.path="/build/logs",this.subscribeMsg={deploy_id:O.deployId,site_id:O.siteId}}_initFunctionLog(O){this.path="/function/logs",this.subscribeMsg={account_id:O.awsAccountId,function_id:O.functionId,site_id:O.siteId,from:O.fromDatetime,to:O.toDatetime}}_initEdgeFunctionLog(O){this.path="/edge-function/logs",this.subscribeMsg={deploy_id:O.deployId,site_id:O.siteId,use_v2:O.useV2}}listen(O,t=V){const n=`wss://socketeer.services.netlify.com${this.path}`;this.ws=new WebSocket(n),this.ws.addEventListener("open",()=>{(0,Y.$f)().then(a=>{this.subscribeMsg&&a&&(this.subscribeMsg.access_token=a),this.ws.send(JSON.stringify(this.subscribeMsg))}).catch(a=>{console.error(a)})}),this.ws.addEventListener("message",({data:a})=>{try{const{ts:l,message:b,type:A,request_id:H,level:W,request_path:v,function:P,section:f}=JSON.parse(a);if(A==="start")return;O({ts:l,type:A,log:b,requestId:H,level:W,requestPath:v,functionName:P,...f&&{section:f}})}catch(l){t(l)}}),this.ws.addEventListener("error",t)}close(){!this.ws||this.ws.readyState===WebSocket.CLOSED||(this.ws.close(),this.ws=null)}}const z={firebase:k,socketeer:J};function B(M){const O=z[M.type];return O&&new O(M)}},15949:(ve,ee,c)=>{c.d(ee,{Z:()=>F});const F={BUILD:"build",FUNCTION:"function",EDGE_FUNCTION:"edgeFunction"}},42320:(ve,ee,c)=>{c.d(ee,{Z:()=>M});var y=c(67491),F=c(21809),$=c(33640),D=c(93967),x=c(1416);const k="https://api.netlify.com",Y="/api/v1",Q="/api/experiments",V="netlify.app",J=15,z=["headers","parseJsonResponse","request","postRequest"],B=`We\u2019re having some trouble connecting you to Netlify.

This error may be caused by an ad blocker or browser extension. You can try disabling blocking on this page or running in incognito`;class M{constructor(t){return this.token=t.get("accessToken"),this.apiBase=t.get("apiBase"),this.root=t.get("clientApiBase")||t.get("apiBase")||k,this.mockRoot=t.get("mockApiBase"),this.siteDomain=t.get("siteDomain")||V,this.siteId=t.get("siteId"),new Proxy(this,{get(n,a,...l){if(typeof n[a]=="function"&&!z.includes(a.toString())){const b=Reflect.get(n,a,...l),A=a.toString();return function(...W){const v=(0,F.I7)(`api-${A}-start`),P=b.apply(n,W);return P.then?new Promise((f,h)=>{P.then(I=>{const R=(0,F.I7)(`api-${A}-end`,{rejected:!1});return(0,F.KT)(`api-${A}-complete`,v,R),f(I)}).catch((...I)=>{const R=(0,F.I7)(`api-${A}-end`,{rejected:!0});return(0,F.KT)(`api-${A}-complete`,v,R),h(...I)})}):P}}return Reflect.get(n,a,...l)}})}headers(t={},n,a){const l={};return(this.token||a)&&!n&&(l.Authorization=`Bearer ${a||this.token}`),{"Content-Type":"application/json",...l,...t}}parseJsonResponse(t){let n=!1;return t.json().then(a=>(n=!0,t.ok?{data:a,pagination:(0,x.ot)(t)}:Promise.reject(a))).catch(a=>n?Promise.reject(a):Promise.reject({status:t.status}))}async request(t,n={}){const a=!n.forceUseApiBase;let l;n.forceUseApiBase&&(0,y.W8)()&&(l=await(0,y.ZD)());const b=this.headers(n.headers||{},a,l);b["Content-Type"]==="delete"&&delete b["Content-Type"];let A=n.forceUseApiBase&&this.apiBase?this.apiBase:this.root;n.retryWithMockServer&&this.mockRoot&&(A=this.mockRoot);let H=n.noPrefix?A+t:A+(n.prefix||Y)+t;const W={};return a&&(W.credentials="include"),fetch(H,{...W,...n,headers:b}).then(v=>{if(n.raw&&v.ok)return v.arrayBuffer();const P=v.headers.get("Content-Type");if(P&&P.match(/json/))return this.parseJsonResponse(v);const f=P&&P.match(/(text|javascript|xml|svg)/i)?"text":"arrayBuffer";return v[f]().then(h=>v.ok?{data:h}:Promise.reject(v))}).catch(v=>{let P;if(/Failed to fetch/.test(v))P=new D.Z(B);else{const{status:f,code:h,...I}=v;P=new D.Z({code:f||h,...I})}return Promise.reject(P)})}postRequest(t,n){const a={method:"POST"};return n&&(a.body=n),this.request(t,a)}enableAnalytics(t){return this.request(`/sites/${t}/analytics`,{method:"POST"})}deleteAnalytics(t,n){return this.request(`/sites/${t}/analytics/${n}`,{method:"DELETE"})}site(t){return this.request(`/sites/${t}.${this.siteDomain}`)}unlinkSiteRepository(t){return this.request(`/sites/${t}/unlink_repo`,{method:"PUT"})}siteById(t){return this.request(`/sites/${t}`)}sites({page:t,perPage:n,searchTerm:a,searchGlobally:l,sortBy:b,accountSlug:A,token:H}){let W="";return!l&&A&&(W+=`/${A}`),W+=`/sites?filter=all&sort_by=${b||"updated_at"}&page=${t||1}&per_page=${n||J}`,a&&(W+=`&name=${a}`),H&&(W+=`&token=${H}`),W+="&include_favorites=true",this.request(W)}siteSnippets(t){return this.request(`/sites/${t}/snippets`)}siteSnippetRemove(t,n){return this.request(`/sites/${t}/snippets/${n}`,{method:"DELETE"})}siteSnippetAdd(t,n){return this.postRequest(`/sites/${t}/snippets`,JSON.stringify(n))}siteBuildHooks(t){return this.request(`/sites/${t}/build_hooks`)}addBuildHook(t,n){return this.request(`/sites/${t}/build_hooks`,{method:"POST",body:JSON.stringify(n)})}removeBuildHook(t,n){return this.request(`/sites/${t}/build_hooks/${n}`,{method:"DELETE"})}branches(t){return this.request(`/sites/${t}/deployed-branches`)}getEnvVarsFromEnvelope({accountId:t="",siteId:n="",scope:a="all",context:l="all",merge:b=!0}){const A=[n&&`site_id=${n}`,`scope=${a}`,`context=${l}`,b&&"level=all"].filter(Boolean).join("&");return this.request(`/accounts/${t}/env?${A}`)}migrateEnvVarsToEnvelope({accountId:t="",siteId:n=""}){return this.request(`/accounts/${t}/migrate/site/env?site_id=${n}`,{method:"POST"})}createEnvVarsForEnvelope({accountId:t="",siteId:n="",envVars:a=[]}){const l=[n&&`site_id=${n}`].filter(Boolean);return this.request(`/accounts/${t}/env?${l}`,{method:"POST",body:JSON.stringify(a)})}updateEnvVarInEnvelope({accountId:t="",siteId:n="",oldKey:a="",newKey:l="",scopes:b=[],values:A=[]}){const H=[n&&`site_id=${n}`].filter(Boolean);return this.request(`/accounts/${t}/env/${a}?${H}`,{method:"PUT",body:JSON.stringify({key:l,scopes:b,values:A})})}deleteEnvVarFromEnvelope({accountId:t="",siteId:n="",key:a="",id:l=""}){const b=[n&&`site_id=${n}`].filter(Boolean);return this.request(`/accounts/${t}/env/${a}${l?`/value/${l}`:""}?${b}`,{method:"DELETE"})}deploy(t){return this.request(`/deploys/${t}`)}deploys(t,{page:n,perPage:a,filter:l,state:b}){let A=`/sites/${t}/deploys?page=${n||1}&per_page=${a||J}`;if(l)switch(l){case"deploy previews":A+="&deploy-previews=true";break;default:A+=`&branch=${l}`}return b&&(A+=`&state=${b}`),this.request(A)}deployLog(t){return this.request(`/deploys/${t}/log`).then(n=>{var a;return((a=n==null?void 0:n.data)==null?void 0:a.url)&&fetch(n.data.url).then(l=>l.json())})}deploySummary(t){return this.request(`/deploys/${t}/summary`)}deployCommitters(t){return this.request(`/deploys/${t}/committers`,{prefix:Q})}fetchPullRequest(t){return this.request(`/cdp/deploys/${t}`)}deployActivity(t){return this.request(`/cdp/deploys/${t}/events`)}inviteCommitter(t,n){return this.request(`/deploys/${t}/invite`,{prefix:Q,method:"POST",body:JSON.stringify({committer:n})})}deployPluginRuns(t){return this.request(`/deploys/${t}/plugin_runs`)}buildHooks(t){return this.request(`/sites/${t}/build_hooks`)}publishDeploy(t){const n=`/deploys/${t}/restore`;return this.request(n,{method:"POST"})}triggerDeploy(t,n,a){return this.request(`/sites/${t}/builds`,{method:"POST",body:JSON.stringify({clear_cache:n,template_id:a})})}createDeployKey(){return this.request("/deploy_keys",{method:"POST"})}getDeployKey(t){return this.request(`/deploy_keys/${t}`)}createSite(t={}){const{account_slug:n}=t,a=n?`/${n}/sites`:"/sites";return this.request(a,{method:"POST",body:JSON.stringify(t)})}createDeploy(t,n={}){return this.request(`/sites/${t}/deploys`,{method:"POST",body:JSON.stringify(n)})}siteDeploy(t,n){return this.request(`/sites/${t}/deploys/${n}`)}updateSite(t,n){return this.request(`/sites/${t}`,{method:"PUT",body:JSON.stringify(n)})}deleteSite(t){return this.request(`/sites/${t}`,{method:"DELETE"})}uploadFile(t,n,a,l){const b=`/deploys/${t}/files${n}`,A={"Content-Type":"application/octet-stream"};return l&&(A.Authorization=`Bearer ${l}`),this.request(b,{method:"PUT",body:a,headers:A,forceUseApiBase:!0})}waitForDeploy(t){return new Promise((n,a)=>{const l=()=>{this.deploy(t).then(b=>{var A;if(((A=b.data)==null?void 0:A.state)==="ready")return n(b);setTimeout(l,1e3)}).catch(a)};l()})}waitForSiteDeploy(t){return new Promise((n,a)=>{const l=()=>{this.site(t).then(b=>{var A;if((A=b.data)!=null&&A.deploy_id)return n(b);setTimeout(l,1e3)}).catch(a)};l()})}dnsZones(t){return this.request(t?`/dns_zones?account_slug=${t}`:"/dns_zones")}dnsZonePath(t){return`/dns_zones/${t.replace(/\./g,"_")}`}dnsZone(t){return this.request(this.dnsZonePath(t))}createDnsZone(t,n,a={}){return this.request("/dns_zones",{method:"POST",body:JSON.stringify({...a,name:t,account_slug:n})})}enableDnsZoneIPv6(t){const n=this.dnsZonePath(t);return this.request(`${n}/enable-ipv6`,{method:"PUT"})}enableDedicatedDns(t){const n=this.dnsZonePath(t);return this.request(`${n}/expand`,{method:"PUT"})}destroyDnsZone(t){return this.request(this.dnsZonePath(t),{method:"DELETE"})}transferDnsZone(t,{account_id:n,transfer_account_id:a,transfer_user_id:l}){return this.request(`${this.dnsZonePath(t)}/transfer`,{method:"PUT",body:JSON.stringify({account_id:n,transfer_account_id:a,transfer_user_id:l})})}domainsPath(t){return`/domains-next/${t.replace(/\./g,"_")}`}toggleDomainAutoRenew(t,n,a){return this.request(`${this.domainsPath(t)}/auto-renew`,{method:"PUT",body:JSON.stringify({account_id:n,auto_renew:a})})}dnsRecords(t){return this.request(`${this.dnsZonePath(t)}/dns_records`)}dnsRecord(t,n){return this.request(`${this.dnsZonePath(t)}/dns_records/${n}`)}createDnsRecord(t,n){return this.request(`${this.dnsZonePath(t)}/dns_records`,{method:"POST",body:JSON.stringify(n)})}destroyDnsRecord(t,n){return this.request(`${this.dnsZonePath(t)}/dns_records/${n}`,{method:"DELETE"})}deployFiles(t){return this.request(`/deploys/${t}/files`)}deployFile(t,n){return this.request(`/deploys/${t}/files${n}`,{forceUseApiBase:!0,raw:!0,headers:{"Content-Type":"application/vnd.bitballoon.v1.raw"}})}largeMediaAssets(t,{page:n,perPage:a,filter:l}){return this.request(`/large_media_assets/?site_id=${t}&page=${n||1}&per_page=${a||J}${l?`&name=${l}`:""}`)}user(){return this.request("/user")}updateUser(t){return this.request("/user",{method:"PUT",body:JSON.stringify(t)})}updateUserQuestionnaireTelemetry(t){return this.request(`/users/${t.userId}/questionnaire`,{method:"PUT",body:JSON.stringify(t)})}updateUserAvatar(t){const n=new FormData;n.append("file",t);const a={method:"POST",body:n,headers:{"Content-Type":"delete"}};return this.request("/users/avatar",a)}deleteUserAvatar(){return this.request("/users/avatar",{method:"DELETE"})}paymentMethods({provider:t,accountId:n}){return this.request(`/billing/payment_methods${t==="zuora"&&n?`?account_id=${n}`:""}`)}receiptPdf(t){return this.request(`/billing/receipts/${t}`,{raw:!0,headers:{Accept:"application/pdf"}})}getPromo(t){return this.request(`/billing/promo_codes/${t}`)}updateBilling(t){return this.request("/billing",{method:"PUT",body:JSON.stringify(t)})}getSubscriptions(t){return this.request(`/billing/subscriptions?site_id=${t}`)}cancelSubscription(t){return this.request(`/billing/subscriptions/${t}`,{method:"DELETE"})}newSubscription(t){return this.request("/billing/subscriptions",{method:"POST",body:JSON.stringify(t)})}updateSubscription(t,n){return this.request(`/billing/subscriptions/${t}`,{method:"PUT",body:JSON.stringify(n)})}paymentProviderToken({sandbox:t,accountId:n,enterpriseException:a,secure:l}){let b=`/billing/client_token?sandbox=${~~!!t}&legacy=0`;return n&&(b+=`&account_id=${n}`),a&&(b+=`&enterprise_exception=${~~!!a}`),l&&(b+="&token_type=rsa_signature"),this.request(b,{method:"POST"})}braintreeToken(){return this.request("/billing/client_token?legacy=1&sandbox=0",{method:"POST"})}paymentMethod(t){return this.request(`/billing/payment_methods/${t}`)}savePaymentMethod(t){const{customer_id:n,sandbox:a,enterpriseException:l}=t;if(!n)return Promise.reject("Missing customer_id in attributes");let b=`/accounts/payments?customer_id=${n}&gateway=zuora_${a?"sandbox":"production"}`;return l&&(b+=`&enterprise_exception=${~~!!l}`),this.postRequest(b,JSON.stringify(t))}members(t){return this.request(`/sites/${t}/members`)}inviteMember(t,n){return this.postRequest(`/sites/${t}/members`,JSON.stringify({email:n}))}createShareableInvite(t){return this.request(`/${t}/shareable_invite`,{prefix:Q,method:"POST"})}getShareableInvite(t){return this.request(`/${t}/shareable_invite`,{prefix:Q,method:"GET"})}updateShareableInvite(t){return this.request(`/${t}/shareable_invite`,{prefix:Q,method:"PUT"})}deleteShareableInvite(t){return this.request(`/${t}/shareable_invite`,{prefix:Q,method:"DELETE"})}joinShareableInvite(t){return this.request("/accounts/join",{prefix:Q,method:"POST",body:JSON.stringify({code:t})})}checkShareableInvite(t){return this.request(`/${t}/shareable_invite`,{prefix:Q,method:"HEAD"})}getAccountCreator(t){return this.request(`/${t}/creator`,{prefix:Q,method:"GET"})}certificate(t){return this.request(`/sites/${t}/ssl`)}updateSsl(t,n,a){let l=`/sites/${t}/ssl`;return a&&(l+=`/${a}`),this.postRequest(l,JSON.stringify(n))}verifySsl(t){return this.request(`/sites/${t}/ssl/verify_custom_domain`)}removeMember(t,n){return this.request(`/sites/${t}/members/${n}`,{method:"DELETE"})}acceptInvite(t){return this.postRequest(`/invites/${t}/accept`)}hooks(t){return this.request(`/hooks?site_id=${t}`)}hookTypes(t){return this.request(`/hooks/types?site_id=${t}`)}addHook(t){return this.request("/hooks",{method:"POST",body:JSON.stringify(t)})}updateHook(t,n){return this.request(`/hooks/${t}`,{method:"PUT",body:JSON.stringify(n)})}deleteHook(t){return this.request(`/hooks/${t}`,{method:"DELETE"})}enableHook(t){return this.request(`/hooks/${t}/enable`,{method:"POST"})}siteForms(t){const n=`/sites/${t}/forms`;return this.request(n)}siteForm(t){return this.request(`/forms/${t}`)}formSubmissions(t,{formId:n,page:a,perPage:l,filter:b}){let A=n?`/sites/${t}/forms/${n}/submissions?`:`/sites/${t}/submissions?`;return A+=`state=${b||"ham"}&`,A+=`page=${a||1}&per_page=${l||J}`,this.request(A)}markSubmissionAsHam(t,n){return this.request(`/submissions/${n}/ham`,{method:"PUT"})}markSubmissionAsSpam(t,n){return this.request(`/submissions/${n}/spam`,{method:"PUT"})}functions(t,n){let a=`/sites/${t}/functions`;return n&&(a+=`?filter=${encodeURIComponent(n)}`),this.request(a)}fetchEdgeAccessToken(t,n){return this.request("/auth/edge-access",{noPrefix:!0,method:"POST",body:JSON.stringify({site_id:t,domain:n})})}edgeFunctions(t){const n=`/deploys/${t}/edge_functions`;return this.request(n)}authProviders(t){return this.request(`/sites/${t}/authentication_providers`)}createAuthProvider(t,n,a,l){return this.request(`/sites/${t}/authentication_providers`,{method:"POST",body:JSON.stringify({name:n,provider:n,api_id:a,api_secret:l})})}removeAuthProvider(t,n){return this.request(`/sites/${t}/authentication_providers/${n}`,{method:"DELETE"})}setupMultiFactorAuth(){return this.request("/user/multifactor_auth/setup")}enableMultiFactorAuth({otp:t,token:n}){return this.request("/user/multifactor_auth",{method:"POST",body:JSON.stringify({otp:t,token:n})})}disableMultiFactorAuth({otp:t}){return this.request("/user/multifactor_auth",{method:"DELETE",body:JSON.stringify({otp:t})})}verifyLogin({otp:t,token:n}){return this.request("/user/multifactor_auth/verify_login",{method:"POST",body:JSON.stringify({otp:t}),headers:{Authorization:`Bearer ${n}`}})}application(t){return this.request(`/oauth/applications/${t}`)}applications(){return this.request("/oauth/applications")}createApplication(t){return this.request("/oauth/applications",{method:"POST",body:JSON.stringify(t)})}updateApplication(t,n){return this.request(`/oauth/applications/${t}`,{method:"PUT",body:JSON.stringify(n)})}removeApplication(t){return this.request(`/oauth/applications/${t}`,{method:"DELETE"})}verifyUserByToken(t){const[n,a]=t.split("-");return this.request("/auth/verify",{noPrefix:!0,method:"POST",body:JSON.stringify({code_id:n,code:a})})}verifySamlUserByToken(t,n){return this.request("/auth/verify-saml",{noPrefix:!0,method:"POST",body:JSON.stringify({code_id:t,code:n})})}verifyUser(t,n){return this.request(`/users/${t}/confirm_email`,{method:"PUT",body:JSON.stringify({secret:n})})}resetPasswordEmail(t){return this.request("/password_reset",{method:"POST",body:JSON.stringify({email:t})})}resetPassword(t,n,a){const l={token:t,password:n,password_confirmation:a};return this.request("/password_reset",{method:"PUT",body:JSON.stringify(l)})}authorizeApplication(t){return this.request("/oauth/authorize",{noPrefix:!0,body:JSON.stringify({client_id:t.clientID,redirect_uri:t.redirectURI,response_type:t.responseType,scope:t.scope,state:t.state,grant_saml:t.grantSaml}),method:"POST"})}authorizedApplications(t){let n="/oauth/applications/authorized";return t&&(n+=`?administrator_id=${t}`),this.request(n)}revokeAuthorizedApplication(t,n){let a=`/oauth/applications/${t}/revoke`;return n&&(a+=`?administrator_id=${n}`),this.request(a,{method:"DELETE"})}createPersonalToken(t,n,a){const l="/oauth/applications/create_token";return this.postRequest(l,JSON.stringify({name:t,grant_saml:n,administrator_id:a||null}))}ticket(t){return this.request(`/oauth/tickets/${t}`)}authorizeTicket(t,n){let a=`/oauth/tickets/${t}/authorize`;return n&&(a+="?grant_saml=true"),this.request(a,{method:"POST"})}createTemplate(t){return this.postRequest("/templates",JSON.stringify(t))}verifyPubstorm(t){return this.postRequest("/pubstorm/verify",JSON.stringify(t))}claimPubstorm(t){return this.postRequest("/pubstorm/claim",JSON.stringify(t))}requestPubstormRecovery(t){return this.postRequest("/pubstorm/recover",JSON.stringify({email:t}))}deployLogLocation(t){return this.request(`/deploys/${t}/log`)}deployLogAccessCheck(t){return this.request(`/deploys/${t}/check_access`)}lockDeploy(t){return this.postRequest(`/deploys/${t}/lock`)}unlockDeploy(t){return this.postRequest(`/deploys/${t}/unlock`)}retryDeploy(t,n){return this.postRequest(`/deploys/${t}/retry`,JSON.stringify(n||{}))}acceptDeploy(t){return this.postRequest(`/deploys/${t}/accept`)}rejectDeploy(t){return this.postRequest(`/deploys/${t}/reject`)}cancelDeploy(t){return this.postRequest(`/deploys/${t}/cancel`)}deleteDeploy(t){return this.request(`/deploys/${t}`,{method:"DELETE"})}organizations(){return this.request("/organizations")}organization(t){return this.request(`/organizations/${t}`)}organizationAccounts(t){return this.request(`/organizations/${t}/accounts`)}organizationInvoices(t){return this.request(`/organizations/${t}/invoices`)}organizationInvoice(t,n){return this.request(`/organizations/${t}/invoices/${n}`)}organizationReceipts(t){return this.request(`/organizations/${t}/receipts`)}organizationReceipt(t,n){return this.request(`/organizations/${t}/receipts/${n}`,{raw:!0,headers:{Accept:"application/pdf"}})}organizationClientToken(t){return this.request(`/organizations/${t}/client_token`)}organizationSamlConnection(t){return this.request(`/organizations/${t}/workos`)}organizationSamlDashboard(t){return this.request(`/organizations/${t}/workos`,{method:"POST",body:JSON.stringify({})})}organizationSamlDeleteConnection(t){return this.request(`/organizations/${t}/workos`,{method:"DELETE"})}updateOrganization(t,n){return this.request(`/organizations/${t}`,{method:"PUT",body:JSON.stringify(n)})}updateOrganizationLogo(t,n){const a=new FormData;a.append("file",n);const l={method:"POST",body:a,headers:{"Content-Type":"delete"}};return this.request(`/organizations/${t}/logo`,l)}updateOrganizationPaymentMethod(t,n){return this.postRequest(`/organizations/${t}/payments`,JSON.stringify(n))}deleteOrganizationLogo(t){return this.request(`/organizations/${t}/logo`,{method:"DELETE"})}accounts(){return this.request("/accounts")}account(t){return this.request(`/accounts/${t}`)}accountBandwidth(t){return this.request(`/accounts/${t}/bandwidth`)}accountBandwidthRanking(t,n){return this.request(`/accounts/${t}/bandwidth/ranking?limit=${n}`)}accountCompliance(t){return this.request(`/accounts/${t}/compliance`)}accountCommitters(t,n={}){return n.billingPeriod?this.request(`/accounts/${t}/committers?billing_period=current`):this.request(`/${t}/committers`)}createCommitter(t,n,a){return this.request(`/${t}/committers`,{method:"POST",body:JSON.stringify({build_id:n,member_id:a})})}updateCommitter(t,n,a,l){return this.request(`/${t}/committers/${n}`,{method:"PATCH",body:JSON.stringify({member_id:a,invite_id:l})})}accountTypes(){return this.request("/accounts/types")}createAccount(t){return this.request("/accounts",{method:"POST",body:JSON.stringify(t)})}deleteAccount(t){return this.request(`/accounts/${t}`,{method:"DELETE"})}disableUser(){return this.request("/users/disable",{method:"POST"})}updateAccount(t,n){return this.request(`/accounts/${t}`,{method:"PUT",body:JSON.stringify(n)})}updateAccountLogo(t,n){const a=new FormData;a.append("file",n);const l={method:"POST",body:a,headers:{"Content-Type":"delete"}};return this.request(`/accounts/${t}/logo`,l)}deleteAccountLogo(t){return this.request(`/accounts/${t}/logo`,{method:"DELETE"})}accountBuilds(t,n){return n={page:1,per_page:J,...n},this.request(`/${t}/builds?${(0,$.b4)(n)}`)}accountBuildStatus(t){return this.request(`/${t}/builds/status`)}accountBuildQueueBump(t,n){return this.postRequest(`/${t}/builds/${n}/prioritize`)}accountBuildStatusPerSite(t){return this.request(`/${t}/builds/per_site`)}accountBuildsPerDay(t){return this.request(`/${t}/builds/per_day`)}accountMember(t,n){return this.request(`/${t}/members/${n}`)}accountMembers(t){return this.request(`/${t}/members?sort_by=updated_at`)}inviteAccountMember(t,{email:n,role:a,site_ids:l,site_access:b,build_id:A}){return this.postRequest(`/${t}/members`,JSON.stringify({email:n,role:a,site_ids:l,site_access:b,build_id:A}))}removeAccountMember(t,n){return this.request(`/${t}/members/${n}`,{method:"DELETE"})}updateAccountMember(t,n,{role:a,site_access:l,site_ids:b}){return this.request(`/${t}/members/${n}`,{method:"PUT",body:JSON.stringify({role:a,site_access:l,site_ids:b})})}accountReviewers(t){return this.request(`/${t}/reviewers`)}updateAccountReviewer(t,n,{state:a,site_access:l}){return this.request(`/${t}/reviewers/${n}`,{method:"PUT",body:JSON.stringify({state:a,site_access:l})})}promoteAccountReviewer(t,n,{role:a}){return this.request(`/${t}/reviewers/${n}/promote`,{method:"POST",body:JSON.stringify({role:a})})}removeAccountReviewer(t,n){return this.request(`/${t}/reviewers/${n}`,{method:"DELETE"})}accountBillingSummary(t){return this.request(`/${t}/billing`)}accountSubscriptions(t){return this.request(`/${t}/billing/subscriptions`)}accountInvoices(t,n={}){return this.request(`/${t}/billing/invoices?${(0,$.b4)(n)}`)}accountReceipts(t){return this.request(`/${t}/receipts`)}accountReceiptPdf(t,n){return this.request(`/${t}/receipts/${n}`,{raw:!0,headers:{Accept:"application/pdf"}})}accountReceiptHtml(t,n){return this.request(`/${t}/receipts/${n}`,{headers:{Accept:"text/html"}})}transferSite(t,n){return this.postRequest(`/sites/${t}/transfer?account_id=${n}`)}trafficSplits(t){return this.request(`/sites/${t}/traffic_splits`)}trafficSplit(t,n){return this.request(`/sites/${t}/traffic_splits/${n}`)}createTrafficSplit(t,n){return this.postRequest(`/sites/${t}/traffic_splits`,JSON.stringify(n))}updateTrafficSplit(t,n,a){return this.request(`/sites/${t}/traffic_splits/${n}`,{method:"PUT",body:JSON.stringify(a)})}startTrafficSplit(t,n){return this.postRequest(`/sites/${t}/traffic_splits/${n}/publish`)}stopTrafficSplit(t,n){return this.postRequest(`/sites/${t}/traffic_splits/${n}/unpublish`)}teamAudit({page:t,perPage:n,search:a,accountId:l}){return this.request(`/accounts/${l}/audit?page=${t||1}&per_page=${n||J}${a?`&query=${a}`:""}`)}destroyAccessToken(){return this.request("/access_tokens/revoke",{method:"DELETE"})}identity(t,n){return this.request(`/sites/${t}/identity/${n}`)}createIdentity(t,n){return this.postRequest(`/sites/${t}/identity`,JSON.stringify(n))}updateIdentity(t,n,a){return this.request(`/sites/${t}/identity/${n}`,{method:"PUT",body:JSON.stringify(a)})}deleteIdentity(t,n){return this.request(`/sites/${t}/identity/${n}`,{method:"DELETE"})}identityUsers(t,n,{page:a,per_page:l,sort:b,filter:A}){return this.request(`/sites/${t}/identity/${n}/users?page=${a||1}&per_page=${l||J}&sort=${b||"created_at"}${A?`&filter=${A}`:""}`)}identityUser(t,n,a){return this.request(`/sites/${t}/identity/${n}/users/${a}`)}createIdentityUser(t,n,a){return this.postRequest(`/sites/${t}/identity/${n}/users`,JSON.stringify(a))}updateIdentityUser(t,n,a,l){return this.request(`/sites/${t}/identity/${n}/users/${a}`,{method:"PUT",body:JSON.stringify(l)})}deleteIdentityUser(t,n,a){return this.request(`/sites/${t}/identity/${n}/users/${a}`,{method:"DELETE"})}sendIdentityInvites(t,n,a){return this.postRequest(`/sites/${t}/identity/${n}/users/invite`,JSON.stringify(a))}sendIdentityRecovery(t,n,a){return this.postRequest(`/sites/${t}/identity/${n}/users/${a}/recover`)}identityAudit({page:t,perPage:n,search:a,siteId:l,identityId:b}){return this.request(`/sites/${l}/identity/${b}/audit?page=${t||1}&per_page=${n||J}${a?`&query=${a}`:""}`)}services(t){return this.request(`/sites/${t}/service-instances`)}createService(t,n,a={}){return this.postRequest(`/sites/${t}/services/${n}/instances`,JSON.stringify(a))}updateService(t,n,a,l){return this.request(`/sites/${t}/services/${n}/instances/${a}`,{method:"PUT",body:JSON.stringify(l)})}deleteService(t,n,a){return this.request(`/sites/${t}/services/${n}/instances/${a}`,{method:"DELETE"})}deleteForm(t,n){return this.request(`/sites/${t}/forms/${n}`,{method:"DELETE"})}deleteFormSubmission(t,n){return this.request(`/submissions/${n}`,{method:"DELETE"})}claim({id:t,token:n}){const a=t?`/sites/${t}/claim`:"/sites/claim";return this.postRequest(a,JSON.stringify({token:n}))}updateSamlConfig(t,n,a){return this.request(`/saml/${t}/parse-idp-metadata`,{method:"PUT",body:JSON.stringify({url:n,data:a})})}deleteSamlConfig(t){return this.request(`/saml/${t}`,{method:"DELETE"})}getSamlStartUrl(t){return this.request(`/saml/account-lookup?id=${t}`,{method:"GET"})}siteUsage(t){return this.request(`/sites/${t}/usage`)}changeAddonPlan(t,n){return this.request(`/usage_records/${t}/change_plan?plan=${n}`,{method:"PUT"})}billingPreview(t){return this.request(`/billing/subscriptions/preview?account_id=${t}`)}searchDomain(t,n){return this.request(`/domains-next/search?account_id=${n}&domain=${t}`)}buyDomain(t,n,a){return this.request("/domains-next",{method:"POST",body:JSON.stringify({account_id:n,domain:t,site_id:a})})}dropToken(){return this.request("/drop/token",{method:"POST"})}dropFiles(t,n){return this.request("/drop",{method:"POST",body:JSON.stringify({files:t,token:n})})}dropClaim(t,n){return this.request("/drop/claim",{method:"POST",body:JSON.stringify({site:t,token:n})})}authLink({provider:t}){return this.request(`/auth/link?provider=${t}&site_id=${this.siteId}`,{noPrefix:!0})}authUnlink({provider:t}){return this.request(`/auth/unlink?provider=${t}&site_id=${this.siteId}`,{method:"POST",noPrefix:!0})}updateSelfHostedGitConfig(t,n,a){const l=a==="github_enterprise"?`/accounts/${t}/github_enterprise_config`:`/accounts/${t}/gitlab_self_hosted_config`;return this.request(l,{method:"PUT",body:JSON.stringify(n)})}deleteSelfHostedGitConfig(t,n){const a=n==="github_enterprise"?`/accounts/${t}/github_enterprise_config`:`/accounts/${t}/gitlab_self_hosted_config`;return this.request(a,{method:"DELETE"})}logDrains(t){return this.request(`/sites/${t}/log_drains`)}async createLogDrain(t,n={}){try{return await this.postRequest(`/sites/${t}/log_drains`,JSON.stringify(n))}catch(a){throw/^access denied$/i.test(a.message)?new D.Z("You don't have the necessary permissions to create a log drain."):a}}async verifyLogDrain(t,n,a){try{return await this.postRequest(`/sites/${t}/log_drains/${n}/verify`,JSON.stringify({token:a}))}catch(l){throw/^access denied$/i.test(l.message)?new D.Z("You don't have the necessary permissions to verify a log drain."):l}}async updateLogDrain(t,n,a){try{return await this.request(`/sites/${t}/log_drains/${n}`,{method:"PUT",body:JSON.stringify(a)})}catch(l){throw/^access denied$/i.test(l.message)?new D.Z("You don't have the necessary permissions to edit a log drain."):l}}async deleteLogDrain(t,n){try{return await this.request(`/sites/${t}/log_drains/${n}`,{method:"DELETE"})}catch(a){throw/^access denied$/i.test(a.message)?new D.Z("You don't have the necessary permissions to delete a log drain."):a}}graphJwt(t){return this.request(`/sites/${t}/jwt`)}}},73274:(ve,ee,c)=>{c.d(ee,{$f:()=>b,ZP:()=>P,on:()=>W,sV:()=>a,vH:()=>l,xw:()=>H});var y=c(5780),F=c.n(y),$=c(34740),D=c(29861),x=c(76352),k=c(93967);const Y="https://api.netlify.com";function Q(){try{const{utm_campaign:f="",utm_source:h="",utm_medium:I=""}=window.location.search.substr(1).split("&").reduce((R,E)=>{const[T,N]=E.split("=");return R[T]=N,R},{});return f&&{utm_campaign:f,utm_source:h,utm_medium:I}}catch{return null}}function V(){try{const f=sessionStorage.getItem("nf.utm"),{utm_campaign:h="",utm_source:I="",utm_medium:R=""}=JSON.parse(f||"{}");return h&&{utm_campaign:h,utm_source:I,utm_medium:R}}catch{}}function J(f){(0,x.D9)("nf.utm",JSON.stringify(f))}function z(){const f=[],h=Q()||V();if(h){J(h);for(const I in h)f.push(`${I}=${h[I]}`)}return f.join("&")}const B=Q();B&&J(B);class M{constructor(h){this.err=h}toString(){return this.err&&this.err.message}}const O={[D.CB.github_app]:{width:1200,height:800,closeWindow:!1},[D.CB.github_enterprise]:{width:1200,height:800,closeWindow:!1},[D.CB.github]:{width:960,height:600,closeWindow:!0},[D.CB.gitlab]:{width:960,height:600,closeWindow:!0},[D.CB.gitlab_self_hosted]:{width:960,height:600,closeWindow:!0},[D.CB.bitbucket]:{width:960,height:600,closeWindow:!0},[D.CB.azure_devops]:{width:960,height:600,closeWindow:!0},[D.CB.email]:{width:500,height:400,closeWindow:!0}};function t(f){const h=O[f]||O.github,I=Math.min(window.screen.width,h.width),R=h.height,E=(window.screen.width-I)/2;return{top:Math.max((window.screen.height-R)/2,0),left:E,width:I,height:R}}function n({url:f,data:h,signup:I},R){return fetch(f,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(E=>E.json()).then(E=>{if(E.state==="success"||E.redirect_uri)R(null,E.data||E);else{const T=E.message;I&&/No user found/.test(T)&&(E.message="An account with this email already exists"),R(new k.Z(E))}}).catch(E=>R(new k.Z(E)))}async function a({access_token:f}){if((await fetch("/access-control/set-auth",{headers:{Authorization:`Bearer ${f}`},credentials:"include"})).status!==200)throw new Error("failed to set-auth for user")}function l(){return document.cookie="_nf-auth-hint=user-likely-authed; Max-Age=-99999999; Path=/; Domain=.netlify.com",document.cookie=`_nf-auth-hint=user-likely-authed; Max-Age=-99999999; Path=/; Domain=${window.location.hostname}`,document.cookie=`_nf-auth-hint=user-likely-authed; Max-Age=-99999999; Path=/; Domain=${window.location.hostname.split(".").slice(1).join(".")}`,a({access_token:"unset"})}async function b(){const f=await fetch("/access-control/generate-access-control-token",{credentials:"include"});if(f.status!==200)throw new Error("failed to access control token for user");const{accessControlToken:h}=await f.json();return h}let A;function H({provider:f="github",url:h=""}){const{top:I,left:R,width:E,height:T}=t(f);A=window.open(h,"auth",`toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=${E},height=${T},top=${I},left=${R}`),A&&A.focus()}function W(){A&&A.close()}class v{constructor(h){this.site_id=h.site_id||h.siteId,this.base_url=h.base_url||h.apiBase||Y,this.useAuthWindow=h.useAuthWindow}open({url:h,provider:I},R){this.handshake(I,R),H({provider:I,url:h})}done({provider:h}){O[h].closeWindow&&W()}postMessage(h,I){try{A.postMessage(h,I)}catch(R){F().notify(R,E=>{E.context="netlify-auth \uFE65 postMessage"})}}handshake(h,I){const R=E=>{const{origin:T,data:N}=E;T===this.base_url&&N===`authorizing:${h}`&&(window.removeEventListener("message",R,!1),this.authorize(h,I),this.postMessage(N,T))};window.addEventListener("message",R,!1)}authorize(h,I){const R=E=>{const{origin:T,data:N}=E;if(T===this.base_url){if(N.indexOf(`authorization:${h}:success:`)===0){const U=JSON.parse(N.match(new RegExp(`^authorization:${h}:success:(.+)$`))[1]);window.removeEventListener("message",R,!1),this.done({provider:h}),I(null,U)}if(N.indexOf(`authorization:${h}:error:`)===0){const U=JSON.parse(N.match(new RegExp(`^authorization:${h}:error:(.+)$`))[1]);window.removeEventListener("message",R,!1),this.done({provider:h}),I(new M(U))}}};window.addEventListener("message",R,!1)}getSiteID(){if(this.site_id)return this.site_id;const h=document.location.host.split(":")[0];return h==="localhost"?null:h}authenticate(h,I){const R=this.getSiteID(),E=h.provider,T=!this.useAuthWindow&&h.redirect,N=z(),U=(0,x.St)("tracking_session_id");let w;if(!E)return I(new M({message:"You must specify a provider when calling netlify.authenticate"}));if(!R)return I(new M({message:'You must set a site_id with netlify.configure({site_id: "your-site-id"}) to make authentication work from localhost'}));if(T&&E==="email"&&!h.email)return w=h.signup?"/signup":"/login",w+="/email",N&&(w+="?"+N),$.mW.push(w);if(w=`${this.base_url}/auth`,T&&E==="email"&&(w+=h.reviewer?"/signup":"/login"),w+=`?provider=${E}&site_id=${R}&tracking_session_id=${U}`,h.accountId&&(w+="&account_id="+h.accountId),h.scope&&(w+="&scope="+h.scope),h.login===!0&&(w+="&login=true"),h.beta_invite&&(w+="&beta_invite="+h.beta_invite),h.invite_code&&(w+="&invite_code="+h.invite_code),h.shareable_invite_code&&(w+="&shareable_invite_code="+h.shareable_invite_code),N&&(w+="&"+N),T){const q=/^http/.test(T)?window.encodeURIComponent(T):`${window.location.origin}${T===!0?"/":T}`;w+="&redirect="+q}const g={email:h.email,password:h.password,no_autosignup:!h.signup,redirect:window.location.origin,shareable_invite_code:h.shareable_invite_code};h.reviewer&&(g.full_name=h.full_name,g.jobrole=h.jobrole,g.reviewer_signup=h.reviewer_signup,g.redirect=h.redirect),T?E==="email"?n({url:w,data:g,signup:h.signup},I):window.location.href=w:this.open({url:w,provider:E},I)}}const P=v},41782:(ve,ee,c)=>{c.d(ee,{Xc:()=>Z,_i:()=>_,E3:()=>C,Nn:()=>u,PT:()=>me,p9:()=>s});var y={};c.r(y),c.d(y,{default:()=>d,executeAddAuthsMutation:()=>N,executeAddCORSOriginMutation:()=>ye,executeAddExternalGraphQLSchemaMutation:()=>Pe,executeCreateCLISessionEventMutation:()=>ne,executeCreateCLISessionMutation:()=>b,executeCreateEmptyPersonalTokenMutation:()=>j,executeCreateNewSchemaMutation:()=>U,executeCreatePersistedQueryMutation:()=>g,executeDeleteServiceAuthMutation:()=>w,executeDestroyTokenMutation:()=>I,executeRemoveCORSOriginMutation:()=>be,executeRemoveExternalGraphQLSchemaMutation:()=>Ne,executeSetServiceAuthMutation:()=>q,executeSignOutServicesMutation:()=>R,executeUpdateCLISessionMetadataMutation:()=>W,executeUpdateExternalGraphQLSchemaMutation:()=>we,executeUpsertAppForSiteMutation:()=>te,fetchAppSchemaQuery:()=>f,fetchAuthlifyTokenIdForPersonalToken:()=>le,fetchCLISessionQuery:()=>A,fetchCORSOriginsQuery:()=>Le,fetchCliSessionByIdQuery:()=>se,fetchCliSessionsByAppIdQuery:()=>_e,fetchDeprecated_FindLoggedInServicesQuery:()=>X,fetchFindLoggedInServicesQuery:()=>G,fetchGraphQLSchemaByIdQuery:()=>h,fetchHygraphExample:()=>Me,fetchListNetlifyEnabledServicesQuery:()=>pe,fetchListOAuthServicesQuery:()=>ue,fetchListServiceAuthsByAppIdQuery:()=>v,fetchListSharedDocumentsQuery:()=>H,fetchNetlifyGraph:()=>l,fetchNpmPackageInfoQuery:()=>he,fetchPersistedQueryQuery:()=>Te,fetchSharedDocumentQuery:()=>S,fetchToolshopAllCategoryPages:()=>fe,fetchToolshopAllCollections:()=>ie,fetchToolshopAllPartners:()=>P,fetchToolshopAllTools:()=>ge,fetchToolshopBuildPluginBySlug:()=>T,fetchToolshopNpmPackageInfoQuery:()=>re,fetchToolshopPartnerBySlug:()=>De,fetchToolshopTemplateBySlug:()=>E});var F=c(39532),$=c(88369),D=c(21809),x=c(53529);const k=p=>({max:p,cache:new Map}),Y=p=>p.keys().next().value,Q=(p,m)=>{const oe=p.cache.get(m);return oe&&(p.cache.delete(m),p.cache.set(m,oe)),oe},V=(p,m,oe)=>{if(p.cache.has(m)&&p.cache.delete(m),p.cache.size==p.max){const de=Y(p);de&&p.cache.delete(de)}p.cache.set(m,oe)},J=k(100),z=p=>JSON.stringify(p),B="c6cfcd7a-9ef9-433b-82b4-e9e0a2870dd1",M="5f9562c1-be9c-4898-bc6a-5b40de4e1450";M||console.warn("No SITE_ID found in env, please be sure to run using ntl dev or yarn start");function O(p){return p.join("")}const t="https://graph.netlify.com/graphql?app_id="+M+"&schema_id="+B,n=p=>{const m=p.method,oe=p.headers||{};oe.Accept="application/json",m!=="GET"&&(oe["Content-Type"]="application/json");const de=3e4,Se={method:p.method,headers:oe,timeout:de};p.body&&(Se.body=p.body);const Ee=new URL(t);if(p.queryParams)for(const[Oe,Ie]of Object.entries(p.queryParams))Ee.searchParams.append(Oe,Ie);return fetch(Ee.toString(),Se).then(Oe=>Oe.text().then(Ie=>{const $e={};return Oe.headers.forEach((qe,Re)=>$e[qe]=Re),{body:Ie,headers:$e,status:Oe.status}}))};function a(p){if(!p||typeof p!="object")return p;if(Array.isArray(p))return p.map(a);const m=Object.keys(p).sort(),oe={};for(let de=0;de<m.length;de++)oe[m[de]]=a(p[m[de]]);return oe}const l=function(m){const oe=m.query,de=m.doc_id,Se=m.operationName,Ee=m.variables,Ie=(m.options||{}).accessToken,$e={query:oe,doc_id:de,variables:Ee,operationName:Se};return new Promise(Re=>{const Ce=z($e),Ue=Q(J,Ce);let Ge={},Fe;if(Ue){const[ke,Be]=Ue;Ge={"If-None-Match":ke},Fe=Be}const xe={...Ge,Authorization:Ie?"Bearer "+Ie:void 0},Ve=m.fetchStrategy==="GET"&&de?{method:"GET",headers:xe,queryParams:{doc_id:de,operationName:Se,variables:JSON.stringify(a(Ee))}}:{method:"POST",headers:xe,body:JSON.stringify($e)};n(Ve).then(ke=>{if(ke.status===304)Re(Fe);else if(ke.status===200){const Be=ke.headers.etag,je=JSON.parse(ke.body);Be&&V(J,Ce,[Be,je]),Re(je)}else return ke.json().then(Be=>{Re(Be)})})})},b=(p,m)=>l({query:`mutation CreateCLISessionMutation($appId: String!, $name: String!, $status: OneGraphNetlifyCliSessionStatus, $metadata: JSONObject) {
  oneGraph {
    createNetlifyCliSession(
      input: {appId: $appId, name: $name, metadata: $metadata, status: $status}
    ) {
      session {
        id
        appId
        netlifyUserId
        name
        cliHeartbeatIntervalMs
      }
    }
  }
}`,operationName:"CreateCLISessionMutation",variables:p,options:m,fetchStrategy:"POST"}),A=(p,m)=>l({query:`query CLISessionQuery($sessionId: String!) {
  oneGraph {
    netlifyCliSession(id: $sessionId) {
      ...FullCliSessionFragment
    }
  }
}

fragment FullCliSessionEventFragment on OneGraphNetlifyCliSessionEvent @netlify(id: """  42d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  A CLI session event.""") {
  __typename
  id
  sessionId
  createdAt
  ... on OneGraphNetlifyCliSessionLogEvent {
    ...SessionLogEventFragment
  }
  ... on OneGraphNetlifyCliSessionTestEvent {
    ...SessionTestEventFragment
  }
}

fragment FullCliSessionFragment on OneGraphNetlifyCliSession @netlify(id: """  33d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  The data necessary to render a full CLI session.""") {
  id
  name
  netlifyUserId
  events(first: 100) {
    ...FullCliSessionEventFragment
  }
  status
  createdAt
  lastEventAt
  updatedAt
  metadata
}

fragment SessionLogEventFragment on OneGraphNetlifyCliSessionLogEvent @netlify(id: """  4454bb8b-2fb5-48d8-b051-db6027224145""", doc: """  A CLI session log event.""") {
  __typename
  id
  message
  sessionId
  createdAt
}

fragment SessionTestEventFragment on OneGraphNetlifyCliSessionTestEvent @netlify(id: """  6354bb8b-2fb5-48d8-b051-db6027224145""", doc: """  A CLI session test event - TODO: split out into the actual events (generate handler, etc.)
""") {
  __typename
  id
  createdAt
  payload
  sessionId
}`,operationName:"CLISessionQuery",variables:p,options:m,fetchStrategy:"POST"}),H=(p,m)=>l({query:`query ListSharedDocumentsQuery($first: Int = 10, $status: OneGraphSharedDocumentModerationStatusEnum, $graphQLFields: [String!]!) {
  oneGraph {
    sharedDocuments(
      first: $first
      filter: {moderationStatus: {equalTo: $status}, graphQLFieldsFilter: {in: $graphQLFields}}
    ) {
      nodes {
        ...ExampleOperation
      }
    }
  }
}

fragment ExampleOperation on OneGraphSharedDocument @netlify(id: """  9245fdea-9ccd-4124-a731-5e697b155001""", doc: """  A shared operation""") {
  __typename
  body
  createdAt
  title
  description
  id
  moderationStatus
  operationName
  exampleVariables
  updatedAt
  services {
    logoUrl(style: ROUNDED_RECTANGLE)
    friendlyServiceName
    id
    graphQLField
    slug
  }
}`,operationName:"ListSharedDocumentsQuery",variables:p,options:m,fetchStrategy:"POST"}),W=(p,m)=>l({query:`mutation UpdateCLISessionMetadataMutation($sessionId: String!, $metadata: JSONObject!) {
  oneGraph {
    updateNetlifyCliSession(input: {id: $sessionId, metadata: $metadata}) {
      session {
        id
        name
        metadata
        status
        createdAt
        updatedAt
        lastEventAt
      }
    }
  }
}`,operationName:"UpdateCLISessionMetadataMutation",variables:p,options:m,fetchStrategy:"POST"}),v=(p,m)=>l({query:`query ListServiceAuthsByAppIdQuery($siteId: String!) {
  oneGraph {
    app(id: $siteId) {
      serviceAuths {
        ...ServiceAuthFragment
      }
    }
  }
}

fragment ServiceAuthFragment on OneGraphServiceAuth @netlify(id: """  12b5bdea-9bab-4164-a731-5e697b1553be""", doc: """  Basic info on a Service Auth""") {
  id
  service
  clientId
  revealTokens
  scopes
  redirectUri
}`,operationName:"ListServiceAuthsByAppIdQuery",variables:p,options:m,fetchStrategy:"POST"}),P=(p,m)=>l({query:`query ToolshopAllPartners {
  toolshop {
    allPartner(sort: {orderRank: ASC}) {
      ...ToolshopPartner
    }
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}`,operationName:"ToolshopAllPartners",variables:p,options:m,fetchStrategy:"POST"}),f=(p,m)=>l({query:`query AppSchemaQuery($appId: String!, $logoStyle: OneGraphAppLogoStyleEnum = ROUNDED_RECTANGLE) {
  oneGraph {
    app(id: $appId) {
      graphQLSchema {
        appId
        createdAt
        id
        externalGraphQLSchemas {
          nodes {
            id
            serviceInfo {
              id
              friendlyServiceName
              graphQLField
            }
            endpoint
          }
        }
        services {
          friendlyServiceName
          logoUrl(style: $logoStyle)
          id
          graphQLField
          slug
          supportsCustomRedirectUri
          supportsCustomServiceAuth
          supportsOauthLogin
          netlifyGraphEnabled
          netlifyApiAuthenticationEnabled
        }
        updatedAt
      }
    }
  }
}`,operationName:"AppSchemaQuery",variables:p,options:m,fetchStrategy:"POST"}),h=(p,m)=>l({query:`query GraphQLSchemaByIdQuery($appId: String!, $schemaId: String!, $logoStyle: OneGraphAppLogoStyleEnum = ROUNDED_RECTANGLE) {
  oneGraph {
    graphQLSchema(appId: $appId, id: $schemaId) {
      appId
      createdAt
      id
      externalGraphQLSchemas {
        nodes {
          id
          serviceInfo {
            id
            graphQLField
            friendlyServiceName
          }
          endpoint
        }
      }
      services {
        friendlyServiceName
        logoUrl(style: $logoStyle)
        id
        graphQLField
        slug
        supportsCustomRedirectUri
        supportsCustomServiceAuth
        supportsOauthLogin
        netlifyGraphEnabled
        netlifyApiAuthenticationEnabled
      }
      updatedAt
    }
  }
}`,operationName:"GraphQLSchemaByIdQuery",variables:p,options:m,fetchStrategy:"POST"}),I=(p,m)=>l({query:`mutation DestroyTokenMutation($token: String, $authlifyTokenId: String) {
  oneGraph {
    destroyToken(token: $token, authlifyTokenId: $authlifyTokenId)
  }
}`,operationName:"DestroyTokenMutation",variables:p,options:m,fetchStrategy:"POST"}),R=(p,m)=>l({query:`mutation SignOutServicesMutation($graphQLFields: [String!]!, $authlifyTokenId: String!) {
  signoutServices(
    data: {services: [], servicesGraphQLFields: $graphQLFields, authlifyTokenId: $authlifyTokenId}
  ) {
    me {
      serviceMetadata {
        loggedInServices {
          ...LoggedInServicesFragment
        }
      }
    }
  }
}

fragment LoggedInServicesFragment on OneGraphServiceMetadata @netlify(id: """  12b5bdea-9bab-4124-a731-5e697b1553be""", doc: """  Subset of LoggedInServices""") {
  friendlyServiceName
  isLoggedIn
  usedTestFlow
  serviceInfo {
    logoUrl(style: ROUNDED_RECTANGLE)
    availableScopes {
      category
      scope
      display
      isDefault
      isRequired
      description
      title
    }
    id
    friendlyServiceName
    graphQLField
  }
  grantedScopes {
    scope
  }
  foreignUserId
}`,operationName:"SignOutServicesMutation",variables:p,options:m,fetchStrategy:"POST"}),E=(p,m)=>l({query:`query ToolshopTemplateBySlug($slug: String!) {
  toolshop {
    allTemplate(where: {slug: {current: {eq: $slug}}}) {
      ...ToolshopTemplate
      partner {
        ...ToolshopPartner
      }
      screenshots {
        ...ToolshopImage
      }
      thumbnail {
        ...ToolshopImage
      }
      tags {
        ...ToolshopTag
      }
      recommendedIntegrations {
        ...ToolshopRecommendedTools
        ...RecommendedRibbon
      }
    }
  }
}

fragment RecommendedRibbon on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrSetupGuideOrTemplateOrWebhook @netlify(id: """  0c415d02-5efe-46d3-8a99-4b7b3cc200c9""", doc: """  An empty fragment to start from""") {
  __typename
  ... on ToolshopBuildPlugin {
    ...ToolshopPlugin
  }
  ... on ToolshopTemplate {
    ...ToolshopTemplate
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPlugin on ToolshopBuildPlugin @netlify(id: """  72245975-d92f-40b5-a68c-12920de32865""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  netlifyVerified
  partnerVerified
  status
  packageName
  installUrl
  screenshots {
    ...ToolshopImage
  }
  partner {
    ...ToolshopPartner
  }
  tags {
    ...ToolshopTag
  }
  slug {
    current
  }
}

fragment ToolshopRecommendedTools on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrSetupGuideOrTemplateOrWebhook @netlify(id: """  76223b73-61be-4c88-bd47-b72a80b22e7b""", doc: """  An empty fragment to start from""") {
  ... on ToolshopBuildPlugin {
    id: _id
    _type
    slug {
      current
    }
    title
    description
    partner {
      logo {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
    packageName
  }
  ... on ToolshopTemplate {
    id: _id
    _type
    slug {
      current
    }
    title
    description
    partner {
      logo {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
    repoName
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}

fragment ToolshopTemplate on ToolshopTemplate @netlify(id: """  c8c4ea33-c6cf-459f-b1b9-c2ca5865d51e""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  templateUrl
  version
  prioritized
  partnerVerified
  status
  repoId
  repoName
  repoOwner
  partner {
    ...ToolshopPartner
  }
  slug {
    current
  }
  screenshots {
    ...ToolshopImage
  }
  thumbnail {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
  recommendedIntegrations {
    ... on ToolshopBuildPlugin {
      id: _id
      _type
      description
      title
      partner {
        title
        description
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
    }
    ... on ToolshopTemplate {
      id: _id
      _type
      title
      description
      partner {
        logo {
          asset {
            url
          }
        }
        description
        title
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`,operationName:"ToolshopTemplateBySlug",variables:p,options:m,fetchStrategy:"POST"}),T=(p,m)=>l({query:`query ToolshopBuildPluginBySlug($slug: String!) {
  toolshop {
    allBuildPlugin(where: {slug: {current: {eq: $slug}}}) {
      ...ToolshopPlugin
      recommendedIntegrations {
        ...ToolshopRecommendedTools
        ...RecommendedRibbon
      }
    }
  }
}

fragment RecommendedRibbon on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrSetupGuideOrTemplateOrWebhook @netlify(id: """  0c415d02-5efe-46d3-8a99-4b7b3cc200c9""", doc: """  An empty fragment to start from""") {
  __typename
  ... on ToolshopBuildPlugin {
    ...ToolshopPlugin
  }
  ... on ToolshopTemplate {
    ...ToolshopTemplate
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPlugin on ToolshopBuildPlugin @netlify(id: """  72245975-d92f-40b5-a68c-12920de32865""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  netlifyVerified
  partnerVerified
  status
  packageName
  installUrl
  screenshots {
    ...ToolshopImage
  }
  partner {
    ...ToolshopPartner
  }
  tags {
    ...ToolshopTag
  }
  slug {
    current
  }
}

fragment ToolshopRecommendedTools on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrSetupGuideOrTemplateOrWebhook @netlify(id: """  76223b73-61be-4c88-bd47-b72a80b22e7b""", doc: """  An empty fragment to start from""") {
  ... on ToolshopBuildPlugin {
    id: _id
    _type
    slug {
      current
    }
    title
    description
    partner {
      logo {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
    packageName
  }
  ... on ToolshopTemplate {
    id: _id
    _type
    slug {
      current
    }
    title
    description
    partner {
      logo {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
    repoName
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}

fragment ToolshopTemplate on ToolshopTemplate @netlify(id: """  c8c4ea33-c6cf-459f-b1b9-c2ca5865d51e""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  templateUrl
  version
  prioritized
  partnerVerified
  status
  repoId
  repoName
  repoOwner
  partner {
    ...ToolshopPartner
  }
  slug {
    current
  }
  screenshots {
    ...ToolshopImage
  }
  thumbnail {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
  recommendedIntegrations {
    ... on ToolshopBuildPlugin {
      id: _id
      _type
      description
      title
      partner {
        title
        description
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
    }
    ... on ToolshopTemplate {
      id: _id
      _type
      title
      description
      partner {
        logo {
          asset {
            url
          }
        }
        description
        title
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`,operationName:"ToolshopBuildPluginBySlug",variables:p,options:m,fetchStrategy:"POST"}),N=(p,m)=>l({query:`mutation AddAuthsMutation($siteId: String!, $authlifyTokenId: String, $sToken: String!) {
  oneGraph {
    addAuthsToPersonalToken(
      input: {sacrificialToken: $sToken, authlifyTokenId: $authlifyTokenId, appId: $siteId}
    ) {
      accessToken {
        netlifyId
        token
      }
    }
  }
}`,operationName:"AddAuthsMutation",variables:p,options:m,fetchStrategy:"POST"}),U=(p,m)=>l({query:`mutation CreateNewSchemaMutation($input: OneGraphCreateGraphQLSchemaInput!, $logoStyle: OneGraphAppLogoStyleEnum = ROUNDED_RECTANGLE) {
  oneGraph {
    createGraphQLSchema(input: $input) {
      app {
        graphQLSchema {
          id
        }
      }
      graphQLSchema {
        id
        services {
          id
          friendlyServiceName
          logoUrl(style: $logoStyle)
          graphQLField
          slug
          supportsCustomRedirectUri
          supportsCustomServiceAuth
          supportsOauthLogin
        }
      }
    }
  }
}`,operationName:"CreateNewSchemaMutation",variables:p,options:m,fetchStrategy:"POST"}),w=(p,m)=>l({query:`mutation DeleteServiceAuthMutation($siteId: String!, $serviceAuthId: String!) {
  oneGraph {
    destroyServiceAuth(data: {appId: $siteId, serviceAuthId: $serviceAuthId}) {
      app {
        serviceAuths {
          ...ServiceAuthFragment
        }
      }
    }
  }
}

fragment ServiceAuthFragment on OneGraphServiceAuth @netlify(id: """  12b5bdea-9bab-4164-a731-5e697b1553be""", doc: """  Basic info on a Service Auth""") {
  id
  service
  clientId
  revealTokens
  scopes
  redirectUri
}`,operationName:"DeleteServiceAuthMutation",variables:p,options:m,fetchStrategy:"POST"}),g=(p,m)=>l({query:`mutation CreatePersistedQueryMutation($appId: String!, $query: String!, $tags: [String!]!, $description: String!, $parent: OneGraphCreatePersistedQueryParentInput) {
  oneGraph {
    createPersistedQuery(
      input: {query: $query, appId: $appId, tags: $tags, description: $description, parent: $parent}
    ) {
      persistedQuery {
        id
      }
    }
  }
}`,operationName:"CreatePersistedQueryMutation",variables:p,options:m,fetchStrategy:"POST"}),G=(p,m)=>l({query:`query FindLoggedInServicesQuery($authlifyTokenId: String!) {
  oneGraph {
    authlifyToken(authlifyTokenId: $authlifyTokenId) {
      serviceMetadata {
        loggedInServices {
          usedTestFlow
          friendlyServiceName
          ...LoggedInServicesFragment
        }
      }
    }
  }
}

fragment LoggedInServicesFragment on OneGraphServiceMetadata @netlify(id: """  12b5bdea-9bab-4124-a731-5e697b1553be""", doc: """  Subset of LoggedInServices""") {
  friendlyServiceName
  isLoggedIn
  usedTestFlow
  serviceInfo {
    logoUrl(style: ROUNDED_RECTANGLE)
    availableScopes {
      category
      scope
      display
      isDefault
      isRequired
      description
      title
    }
    id
    friendlyServiceName
    graphQLField
  }
  grantedScopes {
    scope
  }
  foreignUserId
}`,operationName:"FindLoggedInServicesQuery",variables:p,options:m,fetchStrategy:"POST"}),q=(p,m)=>l({query:`mutation SetServiceAuthMutation($graphQLField: String!, $clientId: String!, $clientSecret: String!, $siteId: String!) {
  oneGraph {
    createServiceAuth(
      data: {serviceGraphQLField: $graphQLField, clientId: $clientId, clientSecret: $clientSecret, appId: $siteId, revealTokens: true, cname: "graph.netlify.com", useFixedRedirectUri: true}
    ) {
      app {
        serviceAuths {
          ...ServiceAuthFragment
        }
      }
    }
  }
}

fragment ServiceAuthFragment on OneGraphServiceAuth @netlify(id: """  12b5bdea-9bab-4164-a731-5e697b1553be""", doc: """  Basic info on a Service Auth""") {
  id
  service
  clientId
  revealTokens
  scopes
  redirectUri
}`,operationName:"SetServiceAuthMutation",variables:p,options:m,fetchStrategy:"POST"}),ne=(p,m)=>l({query:`mutation CreateCLISessionEventMutation($sessionId: String!, $payload: JSON!) {
  oneGraph {
    createNetlifyCliTestEvent(
      input: {data: {payload: $payload}, sessionId: $sessionId}
    ) {
      event {
        id
        createdAt
        sessionId
      }
    }
  }
}`,operationName:"CreateCLISessionEventMutation",variables:p,options:m,fetchStrategy:"POST"}),se=(p,m)=>l({query:`query CliSessionByIdQuery($id: String!) {
  oneGraph {
    netlifyCliSession(id: $id) {
      ...FullCliSessionFragment
    }
  }
}

fragment FullCliSessionEventFragment on OneGraphNetlifyCliSessionEvent @netlify(id: """  42d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  A CLI session event.""") {
  __typename
  id
  sessionId
  createdAt
  ... on OneGraphNetlifyCliSessionLogEvent {
    ...SessionLogEventFragment
  }
  ... on OneGraphNetlifyCliSessionTestEvent {
    ...SessionTestEventFragment
  }
}

fragment FullCliSessionFragment on OneGraphNetlifyCliSession @netlify(id: """  33d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  The data necessary to render a full CLI session.""") {
  id
  name
  netlifyUserId
  events(first: 100) {
    ...FullCliSessionEventFragment
  }
  status
  createdAt
  lastEventAt
  updatedAt
  metadata
}

fragment SessionLogEventFragment on OneGraphNetlifyCliSessionLogEvent @netlify(id: """  4454bb8b-2fb5-48d8-b051-db6027224145""", doc: """  A CLI session log event.""") {
  __typename
  id
  message
  sessionId
  createdAt
}

fragment SessionTestEventFragment on OneGraphNetlifyCliSessionTestEvent @netlify(id: """  6354bb8b-2fb5-48d8-b051-db6027224145""", doc: """  A CLI session test event - TODO: split out into the actual events (generate handler, etc.)
""") {
  __typename
  id
  createdAt
  payload
  sessionId
}`,operationName:"CliSessionByIdQuery",variables:p,options:m,fetchStrategy:"POST"}),re=(p,m)=>l({query:`query ToolshopNpmPackageInfoQuery($name: String = "") {
  npm {
    package(name: $name) {
      description
      author {
        name
      }
      distTags {
        latest {
          versionString
        }
      }
      downloads {
        lastMonth {
          count
        }
      }
      homepage
      name
      readme
      time {
        modified
        created
      }
    }
  }
}`,operationName:"ToolshopNpmPackageInfoQuery",variables:p,options:m,fetchStrategy:"POST"}),X=(p,m)=>l({query:`query Deprecated_FindLoggedInServicesQuery {
  me {
    serviceMetadata {
      loggedInServices {
        ...LoggedInServicesFragment
      }
    }
  }
}

fragment LoggedInServicesFragment on OneGraphServiceMetadata @netlify(id: """  12b5bdea-9bab-4124-a731-5e697b1553be""", doc: """  Subset of LoggedInServices""") {
  friendlyServiceName
  isLoggedIn
  usedTestFlow
  serviceInfo {
    logoUrl(style: ROUNDED_RECTANGLE)
    availableScopes {
      category
      scope
      display
      isDefault
      isRequired
      description
      title
    }
    id
    friendlyServiceName
    graphQLField
  }
  grantedScopes {
    scope
  }
  foreignUserId
}`,operationName:"Deprecated_FindLoggedInServicesQuery",variables:p,options:m,fetchStrategy:"POST"}),S=(p,m)=>l({query:`query SharedDocumentQuery($id: String!) {
  oneGraph {
    sharedDocument(id: $id) {
      ...ExampleOperation
    }
  }
}

fragment ExampleOperation on OneGraphSharedDocument @netlify(id: """  9245fdea-9ccd-4124-a731-5e697b155001""", doc: """  A shared operation""") {
  __typename
  body
  createdAt
  title
  description
  id
  moderationStatus
  operationName
  exampleVariables
  updatedAt
  services {
    logoUrl(style: ROUNDED_RECTANGLE)
    friendlyServiceName
    id
    graphQLField
    slug
  }
}`,operationName:"SharedDocumentQuery",variables:p,options:m,fetchStrategy:"POST"}),j=(p,m)=>l({query:`mutation CreateEmptyPersonalTokenMutation($siteId: String!) {
  oneGraph {
    createPersonalTokenWithNetlifySiteAnchor(
      input: {name: "Netlify AuthManager Token", netlifySiteId: $siteId}
    ) {
      accessToken {
        token
        name
        anchor
        netlifyId
      }
    }
  }
}`,operationName:"CreateEmptyPersonalTokenMutation",variables:p,options:m,fetchStrategy:"POST"}),pe=(p,m)=>l({query:`query ListNetlifyEnabledServicesQuery($logoStyle: OneGraphAppLogoStyleEnum = ROUNDED_RECTANGLE, $betaServicesGraphQLFields: [String!] = []) {
  oneGraph {
    services(
      filter: {or: [{service: {graphQLFieldsIn: $betaServicesGraphQLFields}}, {supportsNetlifyGraph: true}, {supportsNetlifyApiAuthentication: true}]}
    ) {
      friendlyServiceName
      logoUrl(style: $logoStyle)
      id
      graphQLField
      slug
      supportsCustomRedirectUri
      supportsCustomServiceAuth
      supportsOauthLogin
      netlifyGraphEnabled
      netlifyApiAuthenticationEnabled
    }
  }
}`,operationName:"ListNetlifyEnabledServicesQuery",variables:p,options:m,fetchStrategy:"POST"}),he=(p,m)=>l({query:`query NpmPackageInfoQuery($name: String!) {
  npm {
    package(name: $name) {
      name
      license {
        type
      }
      homepage
      description
      repository {
        url
      }
      downloads {
        lastMonth {
          count
        }
      }
      distTags {
        latest {
          versionString
        }
      }
      author {
        name
      }
      keywords
      time {
        modified
      }
    }
  }
}`,operationName:"NpmPackageInfoQuery",variables:p,options:m,fetchStrategy:"POST"}),ge=(p,m)=>l({query:`query ToolshopAllTools {
  toolshop {
    allBuildPlugin {
      ...ToolshopPlugin
    }
    allTemplate {
      ...ToolshopTemplate
    }
    allGraphql {
      ...ToolshopOperation
    }
    allPartner(sort: {orderRank: ASC}) {
      ...ToolshopPartner
      logo {
        ...ToolshopImage
      }
      tags {
        ...ToolshopTag
      }
    }
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopOperation on ToolshopGraphql @netlify(id: """  9a8b0a90-deee-44ed-899c-489111809031""", doc: """  An empty fragment to start from""") {
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  version
  netlifyVerified
  partnerVerified
  status
  partner {
    ...ToolshopPartner
  }
  screenshots {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPlugin on ToolshopBuildPlugin @netlify(id: """  72245975-d92f-40b5-a68c-12920de32865""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  netlifyVerified
  partnerVerified
  status
  packageName
  installUrl
  screenshots {
    ...ToolshopImage
  }
  partner {
    ...ToolshopPartner
  }
  tags {
    ...ToolshopTag
  }
  slug {
    current
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}

fragment ToolshopTemplate on ToolshopTemplate @netlify(id: """  c8c4ea33-c6cf-459f-b1b9-c2ca5865d51e""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  templateUrl
  version
  prioritized
  partnerVerified
  status
  repoId
  repoName
  repoOwner
  partner {
    ...ToolshopPartner
  }
  slug {
    current
  }
  screenshots {
    ...ToolshopImage
  }
  thumbnail {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
  recommendedIntegrations {
    ... on ToolshopBuildPlugin {
      id: _id
      _type
      description
      title
      partner {
        title
        description
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
    }
    ... on ToolshopTemplate {
      id: _id
      _type
      title
      description
      partner {
        logo {
          asset {
            url
          }
        }
        description
        title
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`,operationName:"ToolshopAllTools",variables:p,options:m,fetchStrategy:"POST"}),fe=(p,m)=>l({query:`query ToolshopAllCategoryPages {
  toolshop {
    allIntegrationsPage(sort: {orderRank: ASC}) {
      title
      introduction
      slug {
        current
      }
      collections {
        ...EcoCollections
      }
    }
  }
}

fragment EcoCollections on ToolshopIntegrationCollection @netlify(id: """  959e90dd-1a6d-4b17-bcf9-c844ccd1dd85""", doc: """  An empty fragment to start from""") {
  integrations {
    ...EcoRibbon
  }
  slug {
    current
  }
  title
  tag {
    ...ToolshopTag
  }
  description
}

fragment EcoRibbon on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrPartnerOrSetupGuideOrTemplateOrWebhook @netlify(id: """  0c415d02-5efe-46d3-8a99-4b7b3cc242c9""", doc: """  An empty fragment to start from""") {
  __typename
  ... on ToolshopBuildPlugin {
    ...ToolshopPlugin
  }
  ... on ToolshopPartner {
    ...ToolshopPartner
  }
  ... on ToolshopTemplate {
    ...ToolshopTemplate
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPlugin on ToolshopBuildPlugin @netlify(id: """  72245975-d92f-40b5-a68c-12920de32865""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  netlifyVerified
  partnerVerified
  status
  packageName
  installUrl
  screenshots {
    ...ToolshopImage
  }
  partner {
    ...ToolshopPartner
  }
  tags {
    ...ToolshopTag
  }
  slug {
    current
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}

fragment ToolshopTemplate on ToolshopTemplate @netlify(id: """  c8c4ea33-c6cf-459f-b1b9-c2ca5865d51e""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  templateUrl
  version
  prioritized
  partnerVerified
  status
  repoId
  repoName
  repoOwner
  partner {
    ...ToolshopPartner
  }
  slug {
    current
  }
  screenshots {
    ...ToolshopImage
  }
  thumbnail {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
  recommendedIntegrations {
    ... on ToolshopBuildPlugin {
      id: _id
      _type
      description
      title
      partner {
        title
        description
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
    }
    ... on ToolshopTemplate {
      id: _id
      _type
      title
      description
      partner {
        logo {
          asset {
            url
          }
        }
        description
        title
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`,operationName:"ToolshopAllCategoryPages",variables:p,options:m,fetchStrategy:"POST"}),le=(p,m)=>l({query:`query AuthlifyTokenIdForPersonalToken($personalToken: String!) {
  oneGraph {
    personalToken(accessToken: $personalToken) {
      netlifyId
    }
  }
}`,operationName:"AuthlifyTokenIdForPersonalToken",variables:p,options:m,fetchStrategy:"POST"}),ie=(p,m)=>l({query:`query ToolshopAllCollections {
  toolshop {
    allIntegrationCollection {
      ...EcoCollections
    }
  }
}

fragment EcoCollections on ToolshopIntegrationCollection @netlify(id: """  959e90dd-1a6d-4b17-bcf9-c844ccd1dd85""", doc: """  An empty fragment to start from""") {
  integrations {
    ...EcoRibbon
  }
  slug {
    current
  }
  title
  tag {
    ...ToolshopTag
  }
  description
}

fragment EcoRibbon on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrPartnerOrSetupGuideOrTemplateOrWebhook @netlify(id: """  0c415d02-5efe-46d3-8a99-4b7b3cc242c9""", doc: """  An empty fragment to start from""") {
  __typename
  ... on ToolshopBuildPlugin {
    ...ToolshopPlugin
  }
  ... on ToolshopPartner {
    ...ToolshopPartner
  }
  ... on ToolshopTemplate {
    ...ToolshopTemplate
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPlugin on ToolshopBuildPlugin @netlify(id: """  72245975-d92f-40b5-a68c-12920de32865""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  netlifyVerified
  partnerVerified
  status
  packageName
  installUrl
  screenshots {
    ...ToolshopImage
  }
  partner {
    ...ToolshopPartner
  }
  tags {
    ...ToolshopTag
  }
  slug {
    current
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}

fragment ToolshopTemplate on ToolshopTemplate @netlify(id: """  c8c4ea33-c6cf-459f-b1b9-c2ca5865d51e""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  templateUrl
  version
  prioritized
  partnerVerified
  status
  repoId
  repoName
  repoOwner
  partner {
    ...ToolshopPartner
  }
  slug {
    current
  }
  screenshots {
    ...ToolshopImage
  }
  thumbnail {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
  recommendedIntegrations {
    ... on ToolshopBuildPlugin {
      id: _id
      _type
      description
      title
      partner {
        title
        description
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
    }
    ... on ToolshopTemplate {
      id: _id
      _type
      title
      description
      partner {
        logo {
          asset {
            url
          }
        }
        description
        title
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`,operationName:"ToolshopAllCollections",variables:p,options:m,fetchStrategy:"POST"}),Te=(p,m)=>l({query:`query PersistedQueryQuery($appId: String!, $id: String!) {
  oneGraph {
    persistedQuery(appId: $appId, id: $id) {
      id
      query
      allowedOperationNames
      description
      freeVariables
      fixedVariables
      tags
    }
  }
}`,operationName:"PersistedQueryQuery",variables:p,options:m,fetchStrategy:"POST"}),_e=(p,m)=>l({query:`query CliSessionsByAppIdQuery($appId: String!, $first: Int = 10) {
  oneGraph {
    netlifyCliSessionsByAppId(appId: $appId, first: $first) {
      id
      name
      netlifyUserId
      events {
        createdAt
      }
      status
      createdAt
      updatedAt
      lastEventAt
      metadata
    }
  }
}`,operationName:"CliSessionsByAppIdQuery",variables:p,options:m,fetchStrategy:"POST"}),ue=(p,m)=>l({query:`query ListOAuthServicesQuery($logoStyle: OneGraphAppLogoStyleEnum = ROUNDED_RECTANGLE) {
  oneGraph {
    services(filter: {supportsOauthLogin: true}) {
      friendlyServiceName
      id
      graphQLField
      slug
      logoUrl(style: $logoStyle)
      availableScopes {
        category
        scope
        display
        isDefault
        isRequired
        description
        title
      }
      netlifyGraphEnabled
      netlifyApiAuthenticationEnabled
    }
  }
}`,operationName:"ListOAuthServicesQuery",variables:p,options:m,fetchStrategy:"POST"}),te=(p,m)=>l({query:`mutation UpsertAppForSiteMutation($siteId: String!) {
  oneGraph {
    upsertAppForNetlifySite(input: {netlifySiteId: $siteId}) {
      org {
        id
        name
      }
      app {
        id
        name
        corsOrigins
        customCorsOrigins {
          friendlyServiceName
          displayName
          encodedValue
        }
      }
    }
  }
}`,operationName:"UpsertAppForSiteMutation",variables:p,options:m,fetchStrategy:"POST"}),ye=(p,m)=>l({query:`mutation AddCORSOriginMutation($input: OneGraphAddCORSOriginToAppInput!) {
  oneGraph {
    addCORSOriginToApp(input: $input) {
      app {
        ...AppCORSOriginFragment
      }
    }
  }
}

fragment AppCORSOriginFragment on OneGraphApp @netlify(id: """  e3d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  Allowed CORS origins for calls to a site's Graph.""") {
  id
  corsOrigins
  customCorsOrigins {
    friendlyServiceName
    displayName
    encodedValue
  }
  netlifySiteNames
}`,operationName:"AddCORSOriginMutation",variables:p,options:m,fetchStrategy:"POST"}),be=(p,m)=>l({query:`mutation RemoveCORSOriginMutation($input: OneGraphRemoveCORSOriginFromAppInput!) {
  oneGraph {
    removeCORSOriginFromApp(input: $input) {
      app {
        ...AppCORSOriginFragment
      }
    }
  }
}

fragment AppCORSOriginFragment on OneGraphApp @netlify(id: """  e3d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  Allowed CORS origins for calls to a site's Graph.""") {
  id
  corsOrigins
  customCorsOrigins {
    friendlyServiceName
    displayName
    encodedValue
  }
  netlifySiteNames
}`,operationName:"RemoveCORSOriginMutation",variables:p,options:m,fetchStrategy:"POST"}),Pe=(p,m)=>l({query:`mutation AddExternalGraphQLSchemaMutation($input: OneGraphAddExternalGraphQLSchemaInput!) {
  oneGraph {
    addExternalGraphQLSchema(input: $input) {
      app {
        id
        graphQLSchema {
          externalGraphQLSchemas {
            nodes {
              id
              serviceInfo {
                id
                friendlyServiceName
                graphQLField
              }
              endpoint
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}`,operationName:"AddExternalGraphQLSchemaMutation",variables:p,options:m,fetchStrategy:"POST"}),we=(p,m)=>l({query:`mutation UpdateExternalGraphQLSchemaMutation($input: OneGraphUpdateExternalGraphQLSchemaInput!) {
  oneGraph {
    updateExternalGraphQLSchema(input: $input) {
      app {
        id
        graphQLSchema {
          externalGraphQLSchemas {
            nodes {
              id
              serviceInfo {
                id
                friendlyServiceName
                graphQLField
              }
              endpoint
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}`,operationName:"UpdateExternalGraphQLSchemaMutation",variables:p,options:m,fetchStrategy:"POST"}),Ne=(p,m)=>l({query:`mutation RemoveExternalGraphQLSchemaMutation($input: OneGraphRemoveExternalGraphQLSchemaInput!) {
  oneGraph {
    removeExternalGraphQLSchema(input: $input) {
      app {
        id
        graphQLSchema {
          externalGraphQLSchemas {
            nodes {
              id
              serviceInfo {
                id
                graphQLField
                friendlyServiceName
              }
              endpoint
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}`,operationName:"RemoveExternalGraphQLSchemaMutation",variables:p,options:m,fetchStrategy:"POST"}),Le=(p,m)=>l({query:`query CORSOriginsQuery($siteId: String!) {
  oneGraph {
    app(id: $siteId) {
      ...AppCORSOriginFragment
    }
  }
}

fragment AppCORSOriginFragment on OneGraphApp @netlify(id: """  e3d4bb8b-2fb5-48d8-b051-db6027224145""", doc: """  Allowed CORS origins for calls to a site's Graph.""") {
  id
  corsOrigins
  customCorsOrigins {
    friendlyServiceName
    displayName
    encodedValue
  }
  netlifySiteNames
}`,operationName:"CORSOriginsQuery",variables:p,options:m,fetchStrategy:"POST"}),De=(p,m)=>l({query:`query ToolshopPartnerBySlug($slug: String!) {
  toolshop {
    allPartner(where: {slug: {current: {eq: $slug}}}) {
      ...ToolshopPartner
      logo {
        ...ToolshopImage
      }
      tags {
        ...ToolshopTag
      }
      relatedContent {
        url
        title
        type
        page {
          ... on ToolshopBlogPost {
            id: _id
            _type
            title
            slug {
              current
            }
            _createdAt
          }
        }
      }
      recommendedIntegrations {
        __typename
        ... on ToolshopBuildPlugin {
          id: _id
          _type
          slug {
            current
          }
          title
          description
          partner {
            logo {
              asset {
                url
              }
            }
            slug {
              current
            }
          }
          packageName
        }
        ... on ToolshopTemplate {
          id: _id
          _type
          slug {
            current
          }
          title
          description
          partner {
            logo {
              asset {
                url
              }
            }
            slug {
              current
            }
          }
          repoName
        }
        ...RecommendedRibbon
      }
    }
  }
}

fragment RecommendedRibbon on ToolshopAddOnOrApiAuthenticationOrBuildPluginOrCDPOrGitProviderOrGraphqlOrLogDrainOrNetlifyAPIOrSetupGuideOrTemplateOrWebhook @netlify(id: """  0c415d02-5efe-46d3-8a99-4b7b3cc200c9""", doc: """  An empty fragment to start from""") {
  __typename
  ... on ToolshopBuildPlugin {
    ...ToolshopPlugin
  }
  ... on ToolshopTemplate {
    ...ToolshopTemplate
  }
}

fragment ToolshopImage on ToolshopNetlifyImage @netlify(id: """  f7ec6de4-459a-41c6-8e28-ea4abaaa348b""", doc: """  An empty fragment to start from""") {
  __typename
  asset {
    label
    title
    description
    url
  }
  alt
}

fragment ToolshopPartner on ToolshopPartner @netlify(id: """  23de2abf-3c06-4454-ae25-321706ac9395""", doc: """  Partner fragment for partner details page in toolshop""") {
  __typename
  id: _id
  _type
  title
  description
  body
  relatedContent {
    url
    type
    title
    page {
      ... on ToolshopBlogPost {
        id: _id
        _type
        title
        slug {
          current
        }
      }
    }
  }
  slug {
    current
  }
  logo {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
}

fragment ToolshopPlugin on ToolshopBuildPlugin @netlify(id: """  72245975-d92f-40b5-a68c-12920de32865""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  netlifyVerified
  partnerVerified
  status
  packageName
  installUrl
  screenshots {
    ...ToolshopImage
  }
  partner {
    ...ToolshopPartner
  }
  tags {
    ...ToolshopTag
  }
  slug {
    current
  }
}

fragment ToolshopTag on ToolshopTag @netlify(id: """  d20b802f-735f-44cf-822f-9db9608d104b""", doc: """  An empty fragment to start from""") {
  title
  slug {
    current
  }
  parentTags {
    slug {
      current
    }
  }
}

fragment ToolshopTemplate on ToolshopTemplate @netlify(id: """  c8c4ea33-c6cf-459f-b1b9-c2ca5865d51e""", doc: """  An empty fragment to start from""") {
  __typename
  id: _id
  _type
  _createdAt
  _updatedAt
  title
  description
  body
  templateUrl
  version
  prioritized
  partnerVerified
  status
  repoId
  repoName
  repoOwner
  partner {
    ...ToolshopPartner
  }
  slug {
    current
  }
  screenshots {
    ...ToolshopImage
  }
  thumbnail {
    ...ToolshopImage
  }
  tags {
    ...ToolshopTag
  }
  recommendedIntegrations {
    ... on ToolshopBuildPlugin {
      id: _id
      _type
      description
      title
      partner {
        title
        description
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
    }
    ... on ToolshopTemplate {
      id: _id
      _type
      title
      description
      partner {
        logo {
          asset {
            url
          }
        }
        description
        title
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`,operationName:"ToolshopPartnerBySlug",variables:p,options:m,fetchStrategy:"POST"}),Me=(p,m)=>l({query:`query HygraphExample {
  hygraphManagement {
    metaInfo {
      serverVersion
    }
  }
}`,operationName:"HygraphExample",variables:p,options:m,fetchStrategy:"POST"}),d={executeCreateCLISessionMutation:b,fetchCLISessionQuery:A,fetchListSharedDocumentsQuery:H,executeUpdateCLISessionMetadataMutation:W,fetchListServiceAuthsByAppIdQuery:v,fetchToolshopAllPartners:P,fetchAppSchemaQuery:f,fetchGraphQLSchemaByIdQuery:h,executeDestroyTokenMutation:I,executeSignOutServicesMutation:R,fetchToolshopTemplateBySlug:E,fetchToolshopBuildPluginBySlug:T,executeAddAuthsMutation:N,executeCreateNewSchemaMutation:U,executeDeleteServiceAuthMutation:w,executeCreatePersistedQueryMutation:g,fetchFindLoggedInServicesQuery:G,executeSetServiceAuthMutation:q,executeCreateCLISessionEventMutation:ne,fetchCliSessionByIdQuery:se,fetchToolshopNpmPackageInfoQuery:re,fetchDeprecated_FindLoggedInServicesQuery:X,fetchSharedDocumentQuery:S,executeCreateEmptyPersonalTokenMutation:j,fetchListNetlifyEnabledServicesQuery:pe,fetchNpmPackageInfoQuery:he,fetchToolshopAllTools:ge,fetchToolshopAllCategoryPages:fe,fetchAuthlifyTokenIdForPersonalToken:le,fetchToolshopAllCollections:ie,fetchPersistedQueryQuery:Te,fetchCliSessionsByAppIdQuery:_e,fetchListOAuthServicesQuery:ue,executeUpsertAppForSiteMutation:te,executeAddCORSOriginMutation:ye,executeRemoveCORSOriginMutation:be,executeAddExternalGraphQLSchemaMutation:Pe,executeUpdateExternalGraphQLSchemaMutation:we,executeRemoveExternalGraphQLSchemaMutation:Ne,fetchCORSOriginsQuery:Le,fetchToolshopPartnerBySlug:De,fetchHygraphExample:Me},i=F.Auth.NetlifyGraphAuth,r="serve.onegraph.com",o=p=>p&&p.close(),s=(p,m,oe)=>(o(oe),new x.S(p,{host:r,netlifyGraphAuth:m,lazy:!0,reconnect:!0})),u=({query:p,operationName:m})=>{const oe=$.GraphQL.parse(p),de=$.GraphQL.getOperationAST(oe,m);return de?de.operation==="subscription":!1};async function _(p,m,oe,de){var Se;const Ee=(Se=de==null?void 0:de.showMetrics)!=null?Se:!0,Oe=await fetch(`https://${r}/graphql?app_id=${p}&show_metrics=${Ee}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...oe==null?void 0:oe.authHeaders()},body:JSON.stringify(m)});try{return await Oe.json()}catch(Ie){return console.error("Error in NetlifyGraphClient: ",Ie),{}}}async function C(p,m,oe,de){const Se=await fetch(`https://${r}/graphql?app_id=${p}&schema_id=${m}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...de==null?void 0:de.authHeaders()},body:JSON.stringify(oe)});try{return await Se.json()}catch(Ee){return console.error("Error in NetlifyGraphClient: ",Ee),{}}}async function K(p,m){const oe=await fetch(`https://${r}/schema?app_id=${p}&services=${m.join(",")}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});try{return await oe.json()}catch(de){return console.error("Error in NetlifyGraphClient: ",de),null}}async function Z(p,m){const oe=await fetch(`https://${r}/schema?app_id=${p}&schema_id=${m}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});try{return await oe.json()}catch(de){return console.error("Error in NetlifyGraphClient: ",de),null}}const ae="ONEGRAPH_AUTHLIFY_TOKEN",me=(p,m)=>{const oe=new i({siteId:p,storage:new F.wd});return m&&oe.setToken({accessToken:m,expireDate:Date.now()+3e5}),oe},ce=new Proxy(y,{get(p,m,...oe){if(typeof p[m]=="function"){const de=Reflect.get(p,m,...oe),Se=m.toString();return function(...Oe){const Ie=(0,D.I7)(`api-${Se}-start`),$e=de.apply(p,Oe);return $e.then?new Promise((qe,Re)=>{$e.then(Ce=>{const Ue=(0,D.I7)(`api-${Se}-end`,{rejected:!1});return(0,D.KT)(`api-${Se}-complete`,Ie,Ue),qe(Ce)}).catch((...Ce)=>{const Ue=(0,D.I7)(`api-${Se}-end`,{rejected:!0});return(0,D.KT)(`api-${Se}-complete`,Ie,Ue),Re(...Ce)})}):$e}}return Reflect.get(p,m,...oe)}}),Ae=null},31851:(ve,ee,c)=>{c.d(ee,{C$:()=>z,Ig:()=>n,No:()=>H,Ru:()=>t,_N:()=>a,_w:()=>b,lK:()=>M,lw:()=>W,oD:()=>V,pX:()=>A,qz:()=>l,zM:()=>B});var y=c(70277),F=c.n(y),$=c(58988),D=c.n($),x=c(53475),k=c(78588),Y=c(30751),Q=c(37421);const V=({id:v})=>(0,x.Z)(v),J=["project_jinx_ui","project_psyduck_ui","project_jolteon_ui","project_rhydon_ui"],z=v=>J.some(P=>v[P]),B="10.17.8",M={filter:{name:{notEqualTo:"__elideQuery"}}},O={welcome:"to Netlify Graph!",about:["Your graph combines","lots of GraphQL APIs for","use across","Netlify's functions, sites, and more..."],whatToDoNext:["Try enabling new services","in the sidebar","and make a query!"]},t={welcome:"to Netlify Graph!",about:["Your graph combines","lots of GraphQL APIs for","use across","Netlify's functions, sites, and more..."],whatToDoNext:{ui:["Try enabling new services","in the sidebar","and make a query!"],cli:["Check out the Graph UI to add new services to your Netlify endpoint!"]}};function n(v){return D().format(v,{parser:"graphql",plugins:[F()],printWidth:60,tabWidth:2})}const a=({operation:v,selectedSession:P,store:f,localDocumentFacts:h,type:I})=>{var R,E,T,N,U,w,g,G,q,ne;const se=P==null?void 0:P.id;if(!se)return;const re=(R=P==null?void 0:P.persistedDocument)==null?void 0:R.id;if(re||console.warn("No persisted doc on session:",P),re){const X=f.get(re),S=X==null?void 0:X.getOrCreateLinkedRecord("localModifications","OneGraphPersistedQueryModification"),j=S==null?void 0:S.getOrCreateLinkedRecord("locallyEditingDefinition","OneGraphPersistedQueryModifiedOperation"),pe=X==null?void 0:X.getLinkedRecord("documentFacts"),he=(pe==null?void 0:pe.getLinkedRecords("definitions",M))||[],ge=f.get(se),fe=ge==null?void 0:ge.getOrCreateLinkedRecord("lastImportedDefinition","GraphImportedDefinitionAnimationDetails");let le,ie=null,Te;if(I==="function"&&v!=="FRAGMENT"){const ue=(0,k.yT)(v);if(!ue)return;le=(T=(E=f.create(`client:newOperationRecord:${ue.netlifyDirective.id}`,"OneGraphPersistedQueryOperation"))==null?void 0:E.setValue(v,"opType"))==null?void 0:T.setValue(ue.name,"name"),ie=ue.netlifyDirective,Te=n(ue.body)}else if(I==="fragment"){const ue=(0,k.r_)();if(!ue)return;le=(N=f.create(`client:newOperationRecord:${ue.netlifyDirective.id}`,"OneGraphPersistedQueryFragment"))==null?void 0:N.setValue(ue.name,"name"),ie=ue.netlifyDirective,Te=n(ue.body)}ge==null||ge.setValue((ie==null?void 0:ie.id)||null,"selectedDefinitionId"),(U=fe==null?void 0:fe.setValue((ie==null?void 0:ie.id)||null,"definitionId"))==null||U.setValue(le.getValue("name"),"name").setValue(Date.now(),"importedAt"),le==null||le.setValue(Te,"body",{stripDirectives:["netlify"]}),(g=(w=le==null?void 0:le.getOrCreateLinkedRecord("netlifyDirective","OneGraphNetlifyDirective"))==null?void 0:w.setValue((ie==null?void 0:ie.id)||null,"id"))==null||g.setValue((ie==null?void 0:ie.doc)||null,"doc");const _e=[...he,le];if(pe==null||pe.setLinkedRecords(_e,"definitions",M),(ne=(q=(G=j==null?void 0:j.setValue(j.getDataID(),"id"))==null?void 0:G.setValue((ie==null?void 0:ie.id)||null,"definitionId"))==null?void 0:q.setValue(Te,"body"))==null||ne.setValue((ie==null?void 0:ie.doc)||null,"description"),h||console.warn("Unable to update localDocumentFactsRecord"),h){const ue={__typename:v==="FRAGMENT"?"OneGraphPersistedQueryFragment":"OneGraphPersistedQueryOperation",body:Te||"",netlifyDirective:ie,opType:v==="FRAGMENT"?void 0:v},te={...h,definitions:[...h.definitions,ue]},ye=(0,k.qZ)(te);j==null||j.setValue(!0,"isModified"),ye&&(S==null||S.setValue(ye,"query"))}return ie!=null&&ie.id?{definitionId:ie.id}:void 0}},l=({operation:v,selectedSession:P,store:f,localDocumentFacts:h})=>{var I,R,E,T,N,U,w,g,G,q;const ne=P==null?void 0:P.id;if(!ne)return;const se=(I=P==null?void 0:P.persistedDocument)==null?void 0:I.id;if(se||console.warn("No persisted doc on session:",P),se){const re=f.get(se),X=re==null?void 0:re.getOrCreateLinkedRecord("localModifications","OneGraphPersistedQueryModification"),S=X==null?void 0:X.getOrCreateLinkedRecord("locallyEditingDefinition","OneGraphPersistedQueryModifiedOperation"),j=re==null?void 0:re.getLinkedRecord("documentFacts"),pe=(j==null?void 0:j.getLinkedRecords("definitions",M))||[],he=(0,k.yT)(v.opType),ge={...he,netlifyDirective:{id:(R=he==null?void 0:he.netlifyDirective)==null?void 0:R.id,doc:v.description},body:v.body,name:v.operationName,opType:v.opType};if(!ge)return;const fe=(T=(E=f.create(`client:newOperationRecord:${ge.netlifyDirective.id}`,"OneGraphPersistedQueryOperation"))==null?void 0:E.setValue(v.opType,"opType"))==null?void 0:T.setValue(ge.name,"name"),le=ge.netlifyDirective,ie=n(ge.body);fe==null||fe.setValue(ie,"body",{stripDirectives:["netlify"]});const Te=fe==null?void 0:fe.getOrCreateLinkedRecord("netlifyDirective","OneGraphNetlifyDirective");(N=Te==null?void 0:Te.setValue(le.id,"id"))==null||N.setValue(le.doc,"doc");const _e=[...pe,fe];j==null||j.setLinkedRecords(_e,"definitions",M),(g=(w=(U=S==null?void 0:S.setValue(S.getDataID(),"id"))==null?void 0:U.setValue(le.id,"definitionId"))==null?void 0:w.setValue(ie,"body"))==null||g.setValue((le==null?void 0:le.doc)||null,"description");const ue=f.get(ne);ue==null||ue.setValue(le.id,"selectedDefinitionId"),(q=(G=ue==null?void 0:ue.getOrCreateLinkedRecord("lastImportedDefinition","GraphImportedDefinitionAnimationDetails"))==null?void 0:G.setValue(le.id,"definitionId"))==null||q.setValue(ge.name,"name").setValue(Date.now(),"importedAt");let te;if(h||console.warn("Unable to update localDocumentFactsRecord"),h){const ye={__typename:"OneGraphPersistedQueryOperation",body:v.body,netlifyDirective:{doc:le.doc||null,id:le.id},opType:v.opType},be={...h,definitions:[...h.definitions,ye]};return te=(0,k.qZ)(be),X==null||X.setValue(!0,"isModified"),te&&(X==null||X.setValue(te,"query")),ge}}},b=({operation:v,selectedSession:P,store:f,localDocumentFacts:h})=>{var I,R,E,T,N,U,w,g,G,q,ne;const se=P==null?void 0:P.id;if(!se)return;const re=(I=P==null?void 0:P.persistedDocument)==null?void 0:I.id;if(re||console.warn("No persisted doc on session:",P),re){const X=f.get(re),S=X==null?void 0:X.getOrCreateLinkedRecord("localModifications","OneGraphPersistedQueryModification"),j=S==null?void 0:S.getOrCreateLinkedRecord("locallyEditingDefinition","OneGraphPersistedQueryModifiedOperation"),pe=X==null?void 0:X.getLinkedRecord("documentFacts"),he=(pe==null?void 0:pe.getLinkedRecords("definitions",M))||[],ge=(0,k.yT)(v.opType),fe={...ge,netlifyDirective:{id:(R=ge==null?void 0:ge.netlifyDirective)==null?void 0:R.id,doc:v.description},body:v.body,name:v.operationName,opType:v.opType};if(!fe)return;const le=(N=(T=(E=f.create(`client:newOperationRecord:${fe.netlifyDirective.id}`,"OneGraphPersistedQueryOperation"))==null?void 0:E.setValue(v.opType,"opType"))==null?void 0:T.setValue(fe.name,"name"))==null?void 0:N.setValue(!0,"isEphemeralStarterQuery"),ie=fe.netlifyDirective,Te=n(fe.body);le==null||le.setValue(Te,"body",{stripDirectives:["netlify"]});const _e=le==null?void 0:le.getOrCreateLinkedRecord("netlifyDirective","OneGraphNetlifyDirective");(U=_e==null?void 0:_e.setValue(ie.id,"id"))==null||U.setValue(ie.doc,"doc");const ue=[...he,le];pe==null||pe.setLinkedRecords(ue,"definitions",M),(G=(g=(w=j==null?void 0:j.setValue(j.getDataID(),"id"))==null?void 0:w.setValue(ie.id,"definitionId"))==null?void 0:g.setValue(Te,"body"))==null||G.setValue((ie==null?void 0:ie.doc)||null,"description");const te=f.get(se);te==null||te.setValue(ie.id,"selectedDefinitionId"),(ne=(q=te==null?void 0:te.getOrCreateLinkedRecord("lastImportedDefinition","GraphImportedDefinitionAnimationDetails"))==null?void 0:q.setValue(ie.id,"definitionId"))==null||ne.setValue(fe.name,"name").setValue(Date.now(),"importedAt");let ye;if(h||console.warn("Unable to update localDocumentFactsRecord"),h){const be={__typename:"OneGraphPersistedQueryOperation",body:v.body,netlifyDirective:{doc:ie.doc||null,id:ie.id},opType:v.opType},Pe={...h,definitions:[...h.definitions,be]};return ye=(0,k.qZ)(Pe),S==null||S.setValue(!0,"isModified"),ye&&(S==null||S.setValue(ye,"query")),fe}}},A=({definitionId:v,persistedDocument:P,router:f,site:h,sessionId:I,store:R})=>{var E,T,N,U,w;const g=P==null?void 0:P.documentFacts.definitions.find(G=>{var q;return((q=G.netlifyDirective)==null?void 0:q.id)===v});if(g!==void 0){f.push(`${(0,Q.Hw)(h,{kind:"GraphSessionExplorePath",path:["explorer",I]})}?functionId=${v}`);const G=R.get(I);G==null||G.setValue(v,"selectedDefinitionId");const q=P==null?void 0:P.id;if(q){const ne=R.get(q),se=g!=null&&g.body?n(g==null?void 0:g.body):"";let re=null;try{re=(0,k.l6)(se)}catch{}const X=(E=ne==null?void 0:ne.getOrCreateLinkedRecord("localModifications","OneGraphPersistedQueryModification"))==null?void 0:E.getOrCreateLinkedRecord("locallyEditingDefinition","OneGraphPersistedQueryModifiedOperation");(w=(N=(T=X==null?void 0:X.setValue(X.getDataID(),"id"))==null?void 0:T.setValue(v,"definitionId"))==null?void 0:N.setValue(se,"body"))==null||w.setValue(((U=g==null?void 0:g.netlifyDirective)==null?void 0:U.doc)||null,"description").setValue(re==null?void 0:re.name,"name").setValue(re==null?void 0:re.kind,"kind")}}},H=({service:v,siteId:P,sessionId:f,store:h,authlifyTokenId:I})=>{var R,E,T,N,U,w;const g=f&&h.get(f);if(!g){(0,Y.y)({message:"No session available when setting Authentication Manager",siteId:P,sessionId:f||"unknown"});return}const G=g.getOrCreateLinkedRecord("authenticationManager","OneGraphNetlifyAuthenticationManager");if(!v&&G){h.delete(G.getDataID());return}const q=h.get(P);if(!q)return;const ne=h.getRoot().getLinkedRecord("oneGraph"),se=((R=q.getLinkedRecords("services",{filter:{supportsOauthLogin:!0}}))==null?void 0:R.find(S=>S.getValue("graphQLField")===(v==null?void 0:v.graphQLField)))||null,re=((N=(T=(E=ne==null?void 0:ne.getLinkedRecord("authlifyToken",{authlifyTokenId:I}))==null?void 0:E.getLinkedRecord("serviceMetadata"))==null?void 0:T.getLinkedRecords("loggedInServices"))==null?void 0:N.find(S=>{var j;return((j=S==null?void 0:S.getLinkedRecord("serviceInfo"))==null?void 0:j.getValue("graphQLField"))===(v==null?void 0:v.graphQLField)}))||null,X=((U=q.getLinkedRecords("serviceAuths"))==null?void 0:U.find(S=>{var j;return((j=S.getLinkedRecord("serviceInfo"))==null?void 0:j.getValue("graphQLField"))===(v==null?void 0:v.graphQLField)}))||null;se?G.setLinkedRecord(se,"backingOAuthService"):G.setValue(void 0,"backingOAuthService"),re?G.setLinkedRecord(re,"loggedInFacts"):G.setValue(void 0,"loggedInFacts"),X?G.setLinkedRecord(X,"customOAuthClient"):G.setValue(void 0,"customOAuthClient"),(w=G.setLinkedRecord(q,"app"))==null||w.setValue(I,"authlifyTokenId")};function W(v){return v}},1416:(ve,ee,c)=>{c.d(ee,{f8:()=>y,ib:()=>$,ot:()=>F});const y=D=>{const x={};return D&&(x.next=D),x},F=D=>{let x=D.headers.get("Link");if(!x)return null;const k={};let Y,Q,V,J,z;x=x.split(",");for(let B=0,M=x.length;B<M;B++)Y=x[B].replace(/(^\s*|\s*$)/,""),[Q,V]=Y.split(";"),J=Q.match(/\bpage=(\d+)/),z=J&&Number(J[1]),V.match(/next/)?(k.next=z,k.current=z-1):V.match(/prev/)?(k.prev=z,k.current=z+1):V.match(/last/)&&(k.last=z);return k},$=D=>D==null?void 0:D.get("current")},41862:(ve,ee,c)=>{c.d(ee,{AB:()=>I,BM:()=>U,CY:()=>W,D5:()=>h,Dy:()=>B,F0:()=>ne,Md:()=>v,Nx:()=>T,P8:()=>N,Qu:()=>E,U6:()=>se,Yz:()=>X,cF:()=>q,cJ:()=>g,fd:()=>P,gK:()=>R,iv:()=>re,mH:()=>w,vp:()=>l,yz:()=>G,zv:()=>b});const y=null,F=["user_capabilities","sites","d"],$=["user_capabilities","sites","u"],D=["user_capabilities","sites","c"],x=["user_capabilities","deploys","r"],k=null,Y=["user_capabilities","accounts","u"],Q=["user_capabilities","accounts","d"],V=["user_capabilities","billing","u"],J=["user_capabilities","members","r"],z=["user_capabilities","members","u"],B=["enforced_strict","enforced_with_fallback"],M="active",O="final_notice",t="hibernating";function n(S,j,pe=[]){return!!(S&&j&&!S.get("public")&&j.getIn(pe))}function a(S,j=[]){return S&&S.getIn(j)}function l(S,j){return n(S,j,F)}function b(S){var j;return S&&((j=S.get("user_capabilities"))==null?void 0:j.size)===0}function A(S,j){return l(S,j)}function H(S,j){return n(S,j,y)}function W(S,j){return n(S,j,$)}function v(S,j){return n(S,j,x)||S&&S.get("public")}function P(S){return a(S,D)}function f(S){return a(S,k)}function h(S){return a(S,Y)}function I(S){return!q(S)&&a(S,Q)}function R(S,j){return j||a(S,V)}function E(S){return a(S,z)}function T(S){return a(S,J)}function N(S,j){return S&&!B.includes(S.get("enforce_saml"))||j&&j.get("saml_enabled")||S&&S.get("org_saml_enabled")}function U(S){return R(S)}function w(S){return!q(S)&&R(S)}function g(S){return S==="Controller"?"Billing Admin":S}function G(S,j){const pe=S&&S.get("account_slug");return j&&j.find(he=>he.get("slug")===pe)}function q(S){const j=S&&S.get("lifecycle_state");return j&&j!==M}function ne(S){const j=S&&S.get("lifecycle_state");return j===O||j===t}function se(S,j){return S&&(S.getIn(["capabilities",j])||S.getIn(["site_capabilities",j]))}function re(S){return S&&S.getIn(["capabilities","self_hosted_git_support","included"])&&a(S,Y)}function X(S){return S&&S.get("site_access")==="all"&&!ne(S)}},63007:(ve,ee,c)=>{c.d(ee,{jN:()=>M});var y=c(39532),F=c(53529),$=c(2417),D=c.n($),x=c(5964);const k="5f9562c1-be9c-4898-bc6a-5b40de4e1450",Y="graph.netlify.com",Q=new y.Auth.NetlifyGraphAuth({siteId:k,graphOrigin:`https://${Y}`});class V extends Error{constructor({message:t,service:n,errors:a}){super(t),this.name="AuthError",this.message=t,this.service=n,this.errors=a}}class J extends Error{constructor({message:t,errors:n,extensions:a}){super(t),this.name="QueryError",this.message=t,this.errors=n,this.extensions=a}}const z=({siteId:O})=>{async function t(n,a){var l,b;const A=await(0,x.Y)({siteId:O}),H=`https://${Y}/graphql?app_id=${k}&operationName=${n.name}&show_metrics=false&netlify_site_id=${O}`,v=await(await fetch(H,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${A.jwt}`},body:JSON.stringify({query:n.text,doc_id:n.id,variables:a})})).json();if(n.operationKind==="query"&&(v.errors||[]).length>0){const P=Q.findMissingAuthServices(v.errors)[0];throw P?new V({service:P,message:`You must log into ${P}`,errors:v.errors}):new J({message:(b=(l=v.errors)==null?void 0:l[0])==null?void 0:b.message,errors:v.errors,extensions:v.extensions})}return v}return async function(a,l){return t(a,l)}},B=({siteId:O})=>{const t=new F.S(O,{oneGraphAuth:Q,reconnect:!0,lazy:!0,host:Y});return(a,l)=>{const b=t.request({query:a.text,doc_id:a.id,operationName:a.name,variables:l});return $.Observable.from(b)}},M=O=>{const{siteId:t}=O,n=z({siteId:t}),a=B({siteId:t});return new $.Environment({network:$.Network.create(n,a),store:new $.Store(new $.RecordSource)})}},21809:(ve,ee,c)=>{c.d(ee,{_z:()=>Ne,AC:()=>Le,ao:()=>we,zP:()=>Pe,KT:()=>N,I7:()=>T,yN:()=>Me,Fk:()=>De});var y=c(79328),F=c(24789),$=c(76352),D=c(67351);const x="ErrorPageHit",k="DataFullyLoadedTimeout",Y="viewInitialRender",Q="viewDataFullyLoaded",V="viewChanged",J="errorPageHit",z="viewInitialRender",B="viewDataFullyLoaded",M="viewIRDFLDelta",O="viewDepth",t=["user"],n="featureName",a="featureLoadTimingListener",l="featureSpecificDFLListener";var b=c(62935);let A=[],H=0,W=[],v=[],P=window,f=window.location;function h(d){A.push(d),W.length>0&&requestIdleCallback(()=>{W=W.filter(({whenMadeCallback:i,markNamesToWaitFor:r,startOffset:o,verifyMark:s})=>{const u=U(r,A,o,s);return u?(i(u),!1):!0})},{timeout:2e3}),v.forEach(i=>i(d))}function I(){return{pageUrl:f.href,pageIsIframed:P.top!==P.self}}function R(){return A}function E(){A=[],H=0,W=[],v=[],P=window,f=window.location}function T(d,i){let r=P.performance.mark(d);const o=i==null?void 0:i.overrideTimeMarked;r||(r=performance.getEntriesByName(d).pop());const s=(!o||o===0?o:!1)||(r==null?void 0:r.startTime)||performance.now(),u={name:d,props:i,timeMarked:s,index:H++,env:I()};return h(u),u}function N(d,i,r){let o=P.performance.mark(d);o||(o=performance.getEntriesByName(d).pop());const s={name:d,duration:r.timeMarked-i.timeMarked,timeMarked:(o==null?void 0:o.startTime)||performance.now(),index:H++,env:I()};return h(s),s}function U(d,i,r,o){const s=i.reduce((u,_,C)=>(r!==void 0&&C<r||d.includes(_.name)&&(o?o(_):!0)&&(u[_.name]=_),u),{});return Object.keys(s).length===d.length?s:null}function w({markNamesToWaitFor:d,whenMadeCallback:i,startOffset:r,verifyMark:o,listenerClass:s}){const u=U(d,A,r,o);u?requestIdleCallback(()=>{i(u)},{timeout:2e3}):W.push({whenMadeCallback:i,markNamesToWaitFor:d,startOffset:r,verifyMark:o,listenerClass:s})}function g(d){W=W.filter(({listenerClass:i})=>i!==d)}function G(d){v.push(d)}window._rum=window._rum||{},window._rum.markers={getAllMarks:R,markTime:T,markMeasurement:N,whenAllMarksMade:w,onMarkAdded:G};const q=["api-aws.netlify.com","api.netlify.com","api-staging.netlify.com","www.netlify.com","www.netlify.app","app.netlifystg.com","app.netlifystg.app","app.netlify.com","analytics.services.netlify.com","analytics-staging.services.netlify.com","supportapi.services.netlify.com","serve.onegraph.com","list-v2--netlify-plugins.netlify.app","localhost","d33wubrfki0l68.cloudfront.net"],ne=["commandbar","github","zuora","bitbucket","gitlab","firebase","gravatar"];function se(d){if(d==null)return!1;const i=new URL(d||"",window.location.origin);return i.hostname.toLowerCase().endsWith(".netlify.com")||q.includes(i.hostname.toLowerCase())||re(d)}function re(d){return d==null?!1:new URL(d||"",window.location.origin).origin===window.location.origin}function X(d){return d==null?!1:new URL(d||"",window.location.origin).pathname.startsWith("/.netlify/functions/")}function S(d){if(d==null)return!1;const i=new URL(d||"",window.location.origin);return ne.some(r=>i.hostname.toLowerCase().includes(r))}function j(d){const i={};return Array.isArray(d)&&d.forEach(({name:r,duration:o,description:s})=>{o&&(i[`st_${r}_duration`]=o),s&&(i[`st_${r}_desc`]=s)}),i}function pe(d){if(!d)return{};const i={...d,...j(d==null?void 0:d.serverTiming)};return delete i.name,delete i.serverTiming,delete i.entryType,i}const he=[];window._rum=window._rum||{},window._rum.timings=[];function ge(d){if(he.length===0)return;if(he.length===1)return he[0].featureName;const i=he.reduceRight((r,o,s)=>(!r&&s===0&&(r=o),!r&&d>o.viewStartTime&&(r=o),r),void 0);return i?i.featureName:void 0}const fe=[];let le="unset",ie=!0;function Te(d,i){var r,o,s,u;let _={};d.view&&d.view.url.includes("#")&&(d.view.url=d.view.url.split("#")[0]),(o=(r=d.view)==null?void 0:r.referrer)!=null&&o.includes("#")&&(d.view.referrer=d.view.referrer.split("#")[0]);const C=d.resource;if(C&&C.url&&C.url.includes("#")&&(C.url=C.url.split("#")[0]),d.type==="resource"){const K=se(d.resource.url);if(_={..._,requestIsInternal:K,requestIsSameOrigin:re(d.resource.url),requestIsExternalDep:!K&&S(d.resource.url),requestApiType:X(d.resource.url)?"function":"server"},C!=null&&C.url.includes("#access_token")&&(_.resourceHasAccessToken=!0),C!=null&&C.url.includes("#token")&&(_.resourceHasToken=!0),"performanceEntry"in i&&i.performanceEntry!==void 0&&(_={..._,...pe(i.performanceEntry)}),d.resource.type==="fetch"||d.resource.type==="xhr"){const Z=i,ae=Z==null?void 0:Z.response,me=(0,D.RR)();let ce=null,Ae=null;if(ae!=null&&ae.headers&&(ce=ae.headers.get("x-request-id"),Ae=ae.headers.get("x-nf-srv-version")),((s=Z.performanceEntry)==null?void 0:s.startTime)&&K){const p=ge((u=Z.performanceEntry)==null?void 0:u.startTime);me!==p&&(_.featureName=p,_.respondedAfterViewChange=!0)}_={..._,requestId:ce,requestNFServerVersion:Ae}}}else d.type==="view"&&(fe.includes(d.view.id)||(le=d.view.id,fe.push(d.view.id),ie=d.view.loading_type==="initial_load"));d.context={...d.context,..._}}function _e(){return le}function ue(){G(d=>{var i,r,o;if(d.name===V){const s=[Y],u=d,_=(0,D.UC)((i=d.props)==null?void 0:i.featureName),C=_.name;(r=_==null?void 0:_.networkingRules)!=null&&r.skipMeasuringCriticalPathData||s.push(Q),(o=d.props)!=null&&o.featureName&&he.push({featureName:C,viewStartTime:d.timeMarked}),g(a),w({listenerClass:a,markNamesToWaitFor:s,startOffset:R().length-1,whenMadeCallback:K=>{var Z,ae;const me=K[Y],ce=K[Q],Ae=ie?0:u.timeMarked,p=me.timeMarked-Ae,m=ce?ce.timeMarked-Ae:-1,oe=ce?ce.timeMarked-me.timeMarked:-1;y.v.addTiming(z,p),y.v.addTiming(B,m),y.v.addTiming(M,oe),ce&&((Z=ce.props)==null?void 0:Z.viewDFLTimedOut)===!0&&y.v.addAction(k,{featureName:C,viewInitialRender:p,viewDataFullyLoaded:m,delta:oe}),window._rum.timings.push({featureName:C,viewInitialRender:p,viewDataFullyLoaded:m,delta:oe,viewDFLTimedOut:!!((ae=ce==null?void 0:ce.props)!=null&&ae.viewDFLTimedOut)})},verifyMark:K=>{var Z;return((Z=K.props)==null?void 0:Z.viewId)===_e()}})}})}const te=!window.Cypress;let ye=0,be;window._rum=window._rum||{},window._rum.waiters=[];function Pe(){const d="abb8711a-ca04-44e2-bbd6-df0e07a7f3f8",i="pubd771a23f8cb1e4f45f24b5fd37e11a96",r="netlify-react-ui";te&&d&&i&&r&&!window.Cypress&&(y.v.init({applicationId:d,clientToken:i,site:"datadoghq.com",service:r,version:"639b59b05b0a3b0008830ae1",env:"production",sampleRate:100,trackInteractions:!1,trackViewsManually:!0,beforeSend:(o,s)=>{var u;if(o.type==="error"&&((u=o.error)==null?void 0:u.source)==="report")return!1;Te(o,s)}}),y.v.addRumGlobalContext("suspiciousUsage",F.s),ue())}function we({routePath:d}){const i=(0,D.WV)(d),r=(0,D.UC)(i),o=_e(),s=L();let u=!1,_=!1;return{markInitialRender:C=>{u||(u=!0,T(Y,{viewId:o,featureName:i,...C||{}}))},markDataFullyLoaded:C=>{_||(_=!0,T(Q,{viewId:o,featureName:i,...C||{}}))},whenDataFullyLoaded:({whenDFLCallback:C,timeout:K=15e3})=>{var Z,ae,me,ce,Ae;g(l);let p=[];const m={viewDFLTimedOut:!1};if(s&&(0,$.le)("nf-session")&&(p=[...p,...t]),(Z=r==null?void 0:r.networkingRules)!=null&&Z.criticalPathAPICalls&&(Array.isArray((ae=r==null?void 0:r.networkingRules)==null?void 0:ae.criticalPathAPICalls)?p=[...p,...(me=r==null?void 0:r.networkingRules)==null?void 0:me.criticalPathAPICalls]:typeof((ce=r==null?void 0:r.networkingRules)==null?void 0:ce.criticalPathAPICalls)=="function"&&(p=[...p,...(Ae=r==null?void 0:r.networkingRules)==null?void 0:Ae.criticalPathAPICalls()])),window._rum.waiters.push({featureName:i,apiMarksToWaitFor:p}),p.length===0){C==null||C(m);return}const oe=setTimeout(()=>{m.viewDFLTimedOut=!0,C==null||C(m),C=null},K);w({listenerClass:l,markNamesToWaitFor:p.map(de=>`api-${de}-complete`),startOffset:s?0:be==null?void 0:be.index,whenMadeCallback:()=>{clearTimeout(oe),C==null||C(m),C=null}})}}}function Ne(d,i){te&&y.v.addRumGlobalContext(d,i)}function Le({id:d,plan:i,accountId:r,email:o}){if(te){const s={id:d,plan:i,accountId:r};typeof o=="string"&&(s.isInternalUser=o.endsWith("@netlify.com")),y.v.setUser(s)}}function De(d){if(te){ye++;const i=(0,D.bl)(d);y.v.addRumGlobalContext(n,i),y.v.startView(d),be=T(V,{urlTrackPath:d,featureName:(0,D.WV)(d)}),T(V,{urlTrackPath:d,featureName:i}),y.v.addTiming(O,ye)}}function Me(d){if(te){let i="internal-nav";L()&&(i="page-load-nav");const r={pathname:window.location.pathname,errorPageType:d,navType:i};y.v.addAction(x,r),T(J,r)}}const L=()=>ye<=1},66664:(ve,ee,c)=>{c.d(ee,{$2:()=>t,A$:()=>N,BO:()=>I,Bj:()=>Y,MR:()=>x,Qc:()=>A,Qy:()=>b,VH:()=>n,We:()=>T,_4:()=>B,g$:()=>U,hA:()=>f,i7:()=>V,lR:()=>z,nu:()=>M,pC:()=>W,pn:()=>k,s8:()=>R,tJ:()=>w,yp:()=>l,z0:()=>H,zJ:()=>a,zu:()=>P});var y=c(90046),F=c.n(y),$=c(78025),D=c(29861);const x="success",k="error",Y="in-progress",Q="blank",V={SUCCESS:x,ERROR:k,IN_PROGRESS:Y,BLANK:Q},J={[x]:"Site is live",[k]:"Site deploy failed",[Y]:"Site deploy in progress",[Q]:"Site has not yet been deployed"};function z(g){return g.get("deploy_id")?x:g.get("error_message")?k:g.get("build_id")||g.get("state")!=="current"?Y:Q}function B(g){return J[z(g)]}function M(g){const{siteDomain:G}=$.Z;return`${g.get("name")||g.get("subdomain")}.${G}`}function O(g){return`https://${g.get("default_domain")||M(g)}`}function t(g){return g.get("custom_domain")?g.get("url"):O(g)}function n(g){return g&&g.getIn(["build_settings","provider"])}function a(g){const G=n(g);return G&&D.uI.getIn([G,"name"])||G}function l(g){return/^gitlab/.test(n(g))?"merge request":"pull request"}function b(g){return/^gitlab/.test(n(g))?"MR":"PR"}function A(g){return!!g.getIn(["build_settings","repo_branch"])}function H(g){return A(g)&&(g.getIn(["build_settings","allowed_branches"])||(0,y.List)()).size!==1}function W(g,G){return`https://${v(g,G)}`}function v(g,G){return`${G}--${M(g)}`}function P(g){return g.get("custom_domain")||h(g)}function f(g){return g.get("account_subdomain")||g.get("name")}function h(g){return g.get("default_domain")||M(g)}function I(g){const[G,...q]=h(g).split(".");return q.join(".")}function R(g){return!((g==null?void 0:g.getIn(["build_settings","repo_url"]))||(g==null?void 0:g.get("repo_url"))||(g==null?void 0:g.get("deploy_hook")))}const E=["trusty","production",null];function T(g){if(R(g))return!1;const G=g==null?void 0:g.get("build_image");return E.includes(G)}function N(g){return R(g)?!1:(g==null?void 0:g.get("build_image"))==="xenial"}function U(g){return!!(g!=null&&g.getIn(["build_settings","stop_builds"]))}function w(g){return g.getIn(["build_settings","provider"])===D.CB.github&&g.getIn(["build_settings","repo_owner_type"])==="Organization"&&!g.getIn(["build_settings","public_repo"])}},82522:(ve,ee,c)=>{c.d(ee,{KS:()=>F,SP:()=>$,Sg:()=>y});const y="workflowui/configs",F="site-settings",$="log-drains-settings"},49493:(ve,ee,c)=>{c.d(ee,{T:()=>F});var y=c(82522);const F=async($,D)=>{const x=new URL([y.Sg,$,D].filter(Boolean).join("/"),window.location.origin),Y=await(await fetch(x)).json();return Object.keys(Y).length?Y:void 0}},66308:(ve,ee,c)=>{c.d(ee,{Z:()=>W});var y=c(5780),F=c.n(y),$=c(42249),D=c(93967),x=c(28136),k=c(72243);const Y="001",Q="002",V="003",J="004",z="unknown";function B(v){if(!(v!=null&&v.directResults))return v;const{key:P,message:f,code:h}=v.directResults;let I;switch(h){case J:I="CVV code";break;case Q:I="card number";break;case V:I="card type";break}if(P)switch(!0){case(P==="creditCardExpirationMonth"||(f==null?void 0:f.includes("creditCardExpirationMonth"))||P==="creditCardExpirationYear"||(f==null?void 0:f.includes("creditCardExpirationYear"))):I="card expiration date";break;case(P==="cardSecurityCode"||(f==null?void 0:f.includes("cardSecurityCode"))):I="CVV code";break;case(P==="creditCardHolderName"||(f==null?void 0:f.includes("creditCardHolderName"))):I="cardholder name";break;case(P==="creditCardCountry"||(f==null?void 0:f.includes("creditCardCountry"))):I="country";break;case(P==="creditCardState"||(f==null?void 0:f.includes("creditCardState"))):I="state";break;case(P==="creditCardAddress1"||(f==null?void 0:f.includes("creditCardAddress1"))):case(P==="creditCardAddress2"||(f==null?void 0:f.includes("creditCardAddress2"))):I="address";break;case(P==="creditCardCity"||(f==null?void 0:f.includes("creditCardCity"))):I="city";break;case(P==="creditCardPostalCode"||(f==null?void 0:f.includes("creditCardPostalCode"))):I="zip/postal code";break}return I?(v.displayMessage=`The provided ${I} is invalid.`,v):("key"in v.directResults&&P==="error"&&(f&&f.includes("Submit_Too_Quick")?v.displayMessage="You have submitted this form too many times. Please try again later.":f&&f.includes("Authentication failed, please check your password")?v.displayMessage="Verification step failed because the authentication was incorrect or the authentication was canceled.":v.displayMessage=`Validation failed on server-side, Please check your input values. ${f?`Internal Message: (${f}`:""}`),v)}const M="1.3.1",O="8ad088718045e6340180479027db13c7",t="8a12892d804132bf01804c4c9bb718d7";let n,a=!1;const l=()=>window.Z||null;async function b(v){a||(await new Promise((P,f)=>{a=!0;const h=document.createElement("script");h.type="text/javascript",h.async=!0,h.onload=()=>P(),h.onerror=()=>f("failed to load zuora"),h.src=`https://static.zuora.com/Resources/libs/hosted/${M}/zuora-min.js`,document.getElementsByTagName("head")[0].appendChild(h)}),window.addEventListener("message",v))}async function A({rendererParams:v,rendererPrepopulateFields:P,onSubmissionSuccess:f,onSubmissionError:h,onRenderError:I,onRenderSuccess:R}){try{let T=function(te){h==null||h(B(te)),H()};var E=T;const{key:N,signature:U,style:w,submitEnabled:g,tenantId:G,token:q,url:ne,sandbox:se,passthroughParams:re,zuoraPayload:X,zuora_id:S,hosted_page_id:j}=v,pe=Date.now();n=pe;const he=()=>n===pe;await b(te=>{!he()||te.origin.endsWith(".zuora.com")&&console.log(te)});const fe=te=>{!he()||(console.log("zuora callback invoked",te),["true",!0].includes(te==null?void 0:te.success)?f==null||f(te):te.responseFrom==="Response_From_Submit_Page"?T({displayMessage:"Failed to process payment",directResults:te}):I==null||I("failed to load page"),H())},le=(te,ye,be,Pe)=>{!he()||(console.error("zuora client error message invoked",te,ye,be,Pe),T==null||T({displayMessage:be,directResults:{key:te,code:ye,message:be,rawGatewayInfo:Pe}}))},ie=te=>{!he()||console.log("zuora showing challenge modal",te)},Te=(re||[]).reduce((te,ye,be)=>(be<15?te[`field_passthrough${be+1}`]=ye:console.error("only 15 passthrough params allowed"),te),{}),_e=new x.Z;_e.setPublicKey(N);const ue={...typeof P=="object"?P:{},creditCardExpirationMonth:_e.encrypt(parseInt(X.expirationMonth)<10?`0${parseInt(X.expirationMonth)}`:`${X.expirationMonth}`),creditCardExpirationYear:_e.encrypt(""+X.expirationYear),creditCardNumber:_e.encrypt(X.creditCardNumber.replace(/\s/gi,"")),cardSecurityCode:_e.encrypt(X.securityCode),creditCardHolderName:X.cardHolderInfo.cardHolderName,creditCardCountry:k.vU[X.cardHolderInfo.country]||X.cardHolderInfo.country,creditCardState:(0,k.H8)(X.cardHolderInfo.state),creditCardAddress1:X.cardHolderInfo.addressLine1,creditCardAddress2:X.cardHolderInfo.addressLine2,creditCardCity:X.cardHolderInfo.city,creditCardPostalCode:X.cardHolderInfo.zipCode};l().setEventHandler("onloadCallback",()=>{!he()||(l().setAgreement("External","Recurring","Visa,Mastercard,Discover",""),l().allowScroll(),R==null||R(),setTimeout(()=>{l().submit(),setTimeout(()=>{const te=document.getElementById("zuora_form_container");te&&(te.style.display="block")})},2e3))}),l().renderWithErrorHandler({id:j||(se?O:t),key:N,signature:U,style:w,submitEnabled:g,tenantId:G,token:q,url:ne,field_accountId:S,...Te},ue,fe,le,null,null,ie)}catch(T){console.error(T),I==null||I(T)}}function H(){const v=document.querySelector("#zuora_payment iframe");v&&v.remove();const P=document.getElementById("zuora_form_container");P&&(P.style.display="none")}class W{constructor(P){this.braintreeZuoraTypeMap={amex:"AmericanExpress",discover:"Discover",mastercard:"MasterCard",visa:"Visa",jcb:"JCB",diners:"Diners"},this.getZuoraCardType=f=>{const h=(0,$._O)(f.number)||{};return this.braintreeZuoraTypeMap[h.type]},this.createZuoraPayload=f=>{const{month:h,year:I}=(0,$.qj)(f.expiration),R=this.getZuoraCardType(f);return{accountKey:this.tokenBundle.payment_gateway_id,cardHolderInfo:{cardHolderName:f.name,addressLine1:f.addressLine1||"placeholder",addressLine2:f.addressLine2,city:f.city,country:f.country,state:f.state,zipCode:f.zipCode},creditCardNumber:f.number,creditCardType:R,defaultPaymentMethod:!0,expirationMonth:h,expirationYear:I,securityCode:f.cvv}},this.hasRequiredFields=f=>{const{accountKey:h,cardHolderInfo:I,creditCardType:R,expirationMonth:E,expirationYear:T}=f;return![h,I,R,E,T].some(N=>!N)},this.zuoraErrorMessage=f=>{const h=f.reasons&&f.reasons[0]&&f.reasons[0].message||"Unable to process transaction",I=h.split(".").shift(),R=/PROCESSOR_DECLINED/.test(h)?". Please contact your bank for more information.":"";return`${I}${R}`},this.zuoraResponseToPaymentMethod=(f,h)=>{if(!h.success)throw new D.Z(this.zuoraErrorMessage(h));try{const I=h.paymentMethodId;if(!I)throw new Error("Missing paymentMethodId in Zuora response");const R=this.tokenBundle.customer_id,E=this.tokenBundle.organization_id;if(!R&&!E)throw new Error("Missing customer_id or organization_id in token bundle from API");const T={type:"card",zuora_id:I,customer_id:R,data:{card_type:f.creditCardType,name:f.cardHolderInfo.cardHolderName,last4:f.creditCardNumber.substr(f.creditCardNumber.length-4),country:f.cardHolderInfo.country,state:f.cardHolderInfo.state,auth_transaction_id:h.authTransactionId},sandbox:this.tokenBundle.sandbox,enterpriseException:this.tokenBundle.enterpriseException};return Promise.resolve(T)}catch(I){throw F().notify(I,R=>{R.context="zuora-client \uFE65 zuoraResponseToPaymentMethod"}),new D.Z("Unable to process transaction")}},this.createPaymentMethod=f=>{const h=this.createZuoraPayload(f);if(!this.hasRequiredFields(h))throw new D.Z("Unsupported payment method");try{const{signature:I,token:R,secure:E}=this.tokenBundle;if(!I)throw new Error("Missing signature in token bundle from API");if(!R)throw new Error("Missing token in token bundle from API");return E?this.perform3DSecureHostedFrameSequence(h).then(T=>this.zuoraResponseToPaymentMethod(h,T)):fetch(this.tokenBundle.uri,{body:JSON.stringify(h),headers:{Accept:"application/json","Content-Type":"application/json",signature:I,token:R},method:"POST",mode:"cors"}).then(T=>T.json()).then(T=>this.zuoraResponseToPaymentMethod(h,T))}catch(I){throw F().notify(I,R=>{R.context="zuora-client \uFE65 createPaymentMethod"}),new D.Z("Unable to process transaction")}},this.perform3DSecureHostedFrameSequence=async f=>{const{sandbox:h,uri:I,key:R,tenantId:E,signature:T,token:N,zuora_id:U,hosted_page_id:w}=this.tokenBundle;if(!E||!R||!T||!N)throw console.error("perform3DSecureHostedFrameSequence did not receive all of the data needed",this.tokenBundle),F().notify(e,g=>{g.context="zuora-client \uFE65 perform3DSecureHostedFrameSequence"}),new D.Z("Unable to process transaction");return new Promise((g,G)=>{A({rendererParams:{sandbox:h,url:I,key:R,tenantId:E,signature:T,token:N,submitEnabled:!0,style:"inline",passthroughParams:[],zuoraPayload:f,zuora_id:U,hosted_page_id:w},rendererPrepopulateFields:{},onRenderSuccess:()=>{console.log("rendered")},onRenderError:q=>console.error("failed to render",q),onSubmissionError:q=>{console.error("failed to process",q),G(new D.Z(q.displayMessage))},onSubmissionSuccess:q=>{if(!(q!=null&&q.refId))return G(new D.Z("Internal Error: Failed to get a refId > paymentMethodId"));g({paymentMethodId:q.refId,authTransactionId:q.zThreeDs2TxId,success:!0})}})})},this.tokenBundle=P}}},72243:(ve,ee,c)=>{c.d(ee,{H8:()=>x,hU:()=>F,vU:()=>y,zN:()=>$});const y={AF:"AFG",AX:"ALA",AL:"ALB",DZ:"DZA",AS:"ASM",AD:"AND",AO:"AGO",AI:"AIA",AQ:"ATA",AG:"ATG",AR:"ARG",AM:"ARM",AW:"ABW",AU:"AUS",AT:"AUT",AZ:"AZE",BS:"BHS",BH:"BHR",BD:"BGD",BB:"BRB",BY:"BLR",BE:"BEL",BZ:"BLZ",BJ:"BEN",BM:"BMU",BT:"BTN",BO:"BOL",BQ:"BES",BA:"BIH",BW:"BWA",BV:"BVT",BR:"BRA",IO:"IOT",BN:"BRN",BG:"BGR",BF:"BFA",BI:"BDI",KH:"KHM",CM:"CMR",CA:"CAN",CV:"CPV",KY:"CYM",CF:"CAF",TD:"TCD",CL:"CHL",CN:"CHN",CX:"CXR",CC:"CCK",CO:"COL",KM:"COM",CG:"COG",CD:"COD",CK:"COK",CR:"CRI",CI:"CIV",HR:"HRV",CU:"CUB",CW:"CUW",CY:"CYP",CZ:"CZE",DK:"DNK",DJ:"DJI",DM:"DMA",DO:"DOM",EC:"ECU",EG:"EGY",SV:"SLV",GQ:"GNQ",ER:"ERI",EE:"EST",ET:"ETH",FK:"FLK",FO:"FRO",FJ:"FJI",FI:"FIN",FR:"FRA",GF:"GUF",PF:"PYF",TF:"ATF",GA:"GAB",GM:"GMB",GE:"GEO",DE:"DEU",GH:"GHA",GI:"GIB",GR:"GRC",GL:"GRL",GD:"GRD",GP:"GLP",GU:"GUM",GT:"GTM",GG:"GGY",GN:"GIN",GW:"GNB",GY:"GUY",HT:"HTI",HM:"HMD",VA:"VAT",HN:"HND",HK:"HKG",HU:"HUN",IS:"ISL",IN:"IND",ID:"IDN",IR:"IRN",IQ:"IRQ",IE:"IRL",IM:"IMN",IL:"ISR",IT:"ITA",JM:"JAM",JP:"JPN",JE:"JEY",JO:"JOR",KZ:"KAZ",KE:"KEN",KI:"KIR",KP:"PRK",KR:"KOR",KW:"KWT",KG:"KGZ",LA:"LAO",LV:"LVA",LB:"LBN",LS:"LSO",LR:"LBR",LY:"LBY",LI:"LIE",LT:"LTU",LU:"LUX",MO:"MAC",MK:"MKD",MG:"MDG",MW:"MWI",MY:"MYS",MV:"MDV",ML:"MLI",MT:"MLT",MH:"MHL",MQ:"MTQ",MR:"MRT",MU:"MUS",YT:"MYT",MX:"MEX",FM:"FSM",MD:"MDA",MC:"MCO",MN:"MNG",ME:"MNE",MS:"MSR",MA:"MAR",MZ:"MOZ",MM:"MMR",NA:"NAM",NR:"NRU",NP:"NPL",NL:"NLD",NC:"NCL",NZ:"NZL",NI:"NIC",NE:"NER",NG:"NGA",NU:"NIU",NF:"NFK",MP:"MNP",NO:"NOR",OM:"OMN",PK:"PAK",PW:"PLW",PS:"PSE",PA:"PAN",PG:"PNG",PY:"PRY",PE:"PER",PH:"PHL",PN:"PCN",PL:"POL",PT:"PRT",PR:"PRI",QA:"QAT",RE:"REU",RO:"ROU",RU:"RUS",RW:"RWA",BL:"BLM",SH:"SHN",KN:"KNA",LC:"LCA",MF:"MAF",PM:"SPM",VC:"VCT",WS:"WSM",SM:"SMR",ST:"STP",SA:"SAU",SN:"SEN",RS:"SRB",SC:"SYC",SL:"SLE",SG:"SGP",SX:"SXM",SK:"SVK",SI:"SVN",SB:"SLB",SO:"SOM",ZA:"ZAF",GS:"SGS",SS:"SSD",ES:"ESP",LK:"LKA",SD:"SDN",SR:"SUR",SJ:"SJM",SZ:"SWZ",SE:"SWE",CH:"CHE",SY:"SYR",TW:"TWN",TJ:"TJK",TZ:"TZA",TH:"THA",TL:"TLS",TG:"TGO",TK:"TKL",TO:"TON",TT:"TTO",TN:"TUN",TR:"TUR",TM:"TKM",TC:"TCA",TV:"TUV",UG:"UGA",UA:"UKR",AE:"ARE",GB:"GBR",US:"USA",UM:"UMI",UY:"URY",UZ:"UZB",VU:"VUT",VE:"VEN",VN:"VNM",VG:"VGB",VI:"VIR",WF:"WLF",EH:"ESH",YE:"YEM",ZM:"ZMB",ZW:"ZWE"},F={AA:"Armed Forces America",AE:"Armed Forces",AK:"Alaska",AL:"Alabama",AP:"Armed Forces Pacific",AR:"Arkansas",AZ:"Arizona",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"Washington DC",DE:"Delaware",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",IA:"Iowa",ID:"Idaho",IL:"Illinois",IN:"Indiana",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",MA:"Massachusetts",MD:"Maryland",ME:"Maine",MI:"Michigan",MN:"Minnesota",MO:"Missouri",MS:"Mississippi",MT:"Montana",NC:"North Carolina",ND:"North Dakota",NE:"Nebraska",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NV:"Nevada",NY:"New York",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VA:"Virginia",VI:"Virgin Islands",VT:"Vermont",WA:"Washington",WI:"Wisconsin",WV:"West Virginia",WY:"Wyoming"},$={AB:"Alberta",BC:"British Columbia",MB:"Manitoba",NB:"New Brunswick",NL:"Newfoundland and Labrador",NS:"Nova Scotia",NT:"Northwest Territories",NU:"Nunavut",ON:"Ontario",PE:"Prince Edward Island",QC:"Quebec",SK:"Saskatchewan",YT:"Yukon"},D=[...Object.values(F),...Object.values($)];function x(k){let Y="";if(k.length===2)Y=F[k.toUpperCase()]||$[k.toUpperCase()];else if(k){const Q=k.toLowerCase().replace(/\W/gi,"");Y=D.find(V=>{const J=V.toLowerCase().replace(/\W/gi,"");return Q===J})||""}return Y||k}}}]);
