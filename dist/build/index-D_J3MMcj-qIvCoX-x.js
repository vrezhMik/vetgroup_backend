import{j as e,u as le,r as T,a as ue,b as ce,c as pe,d as me,e as he,P as ae,f as be,g as ge,h as n,i as E,k,T as fe,l as xe,m as Q,n as F,o as M,V as ve,p as je,q as U,I as Pe,F as ye,s as qe,t as i,v as z,w as o,M as L,B as Me,C as Le,x as Re,G as X,y as K,z as P,A as we,D as Te}from"./strapi-KHJjuXVj.js";import{u as ke,L as I}from"./index-Cn5HftCc-Dku5eOkP-BluFUVRG.js";import{u as B}from"./index-DQH2hG2V.js";import{F as Ce,a as Se}from"./formik.esm-qOZLJ_uF.js";import{P as s}from"./immer.esm-BfJ0Nryf.js";const $=({description:r,disabled:x,intlLabel:h,error:u,name:c,onChange:v,placeholder:t,providerToEditName:b,type:m,value:l})=>{const{formatMessage:d}=B(),g=c==="noName"?`${window.strapi.backendURL}/api/connect/${b}/callback`:l,j=d({id:h.id,defaultMessage:h.defaultMessage},{provider:b,...h.values}),p=r?d({id:r.id,defaultMessage:r.defaultMessage},{provider:b,...r.values}):"";if(m==="bool")return e.jsxs(P.Root,{hint:p,name:c,children:[e.jsx(P.Label,{children:j}),e.jsx(we,{"aria-label":c,checked:l,disabled:x,offLabel:d({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:d({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:q=>{v({target:{name:c,value:q.target.checked}})}}),e.jsx(P.Hint,{})]});const y=t?d({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):"",C=u?d({id:u,defaultMessage:u}):"";return e.jsxs(P.Root,{error:C,name:c,children:[e.jsx(P.Label,{children:j}),e.jsx(Te,{disabled:x,onChange:v,placeholder:y,type:m,value:g}),e.jsx(P.Error,{})]})};$.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""};$.propTypes={description:s.shape({id:s.string.isRequired,defaultMessage:s.string.isRequired,values:s.object}),disabled:s.bool,error:s.string,intlLabel:s.shape({id:s.string.isRequired,defaultMessage:s.string.isRequired,values:s.object}).isRequired,name:s.string.isRequired,onChange:s.func.isRequired,placeholder:s.shape({id:s.string.isRequired,defaultMessage:s.string.isRequired,values:s.object}),providerToEditName:s.string.isRequired,type:s.string.isRequired,value:s.oneOfType([s.bool,s.string])};const D=({headerBreadcrumbs:r,initialData:x,isSubmiting:h,layout:u,isOpen:c,onSubmit:v,onToggle:t,providerToEditName:b})=>{const{formatMessage:m}=B();return e.jsx(L.Root,{open:c,onOpenChange:t,children:e.jsxs(L.Content,{children:[e.jsx(L.Header,{children:e.jsx(Me,{label:r.join(", "),children:r.map((l,d,g)=>e.jsx(Le,{isCurrent:d===g.length-1,children:l},l))})}),e.jsx(Ce,{onSubmit:l=>v(l),initialValues:x,validationSchema:u.schema,validateOnChange:!1,children:({errors:l,handleChange:d,values:g})=>e.jsxs(Se,{children:[e.jsx(L.Body,{children:e.jsx(Re,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(X.Root,{gap:5,children:u.form.map(j=>j.map(p=>e.jsx(X.Item,{col:p.size,xs:12,direction:"column",alignItems:"stretch",children:e.jsx($,{...p,error:l[p.name],onChange:d,value:g[p.name],providerToEditName:b})},p.name)))})})}),e.jsxs(L.Footer,{children:[e.jsx(K,{variant:"tertiary",onClick:t,type:"button",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(K,{type:"submit",loading:h,children:m({id:"global.save",defaultMessage:"Save"})})]})]})})]})})};D.defaultProps={initialData:null,providerToEditName:null};D.propTypes={headerBreadcrumbs:s.arrayOf(s.string).isRequired,initialData:s.object,layout:s.shape({form:s.arrayOf(s.array),schema:s.object}).isRequired,isOpen:s.bool.isRequired,isSubmiting:s.bool.isRequired,onSubmit:s.func.isRequired,onToggle:s.func.isRequired,providerToEditName:s.string};const Z={id:n("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},_={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},A={id:n("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},N={id:n("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},J={id:n("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},Y={id:n("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},R={id:n("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ee={id:n("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},se=/^$|^[a-z][a-z0-9+.-]*:\/\/[^\s/$.?#](?:[^\s]*[^\s/$.?#])?$/i,Ee=/^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/i,O={email:{form:[[{intlLabel:N,name:"enabled",type:"bool",description:A,size:6}]],schema:E().shape({enabled:z().required(o.required.id)})},providers:{form:[[{intlLabel:N,name:"enabled",type:"bool",description:A,size:6,validations:{required:!0}}],[{intlLabel:J,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:Z,placeholder:_,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:Y,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:E().shape({enabled:z().required(o.required.id),key:i().when("enabled",{is:!0,then:i().required(o.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(o.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().matches(se,o.regex.id).required(o.required.id),otherwise:i()})})},providersWithSubdomain:{form:[[{intlLabel:N,name:"enabled",type:"bool",description:A,size:6,validations:{required:!0}}],[{intlLabel:J,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:{id:n({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:R,size:12,validations:{required:!1}}],[{intlLabel:{id:n("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:n("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:Z,placeholder:_,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:Y,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:E().shape({enabled:z().required(o.required.id),key:i().when("enabled",{is:!0,then:i().required(o.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(o.required.id),otherwise:i()}),subdomain:i().when("enabled",{is:!0,then:i().matches(Ee,o.regex.id).required(o.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().matches(se,o.regex.id).required(o.required.id),otherwise:i()})})}},Fe=()=>{const{formatMessage:r,locale:x}=B(),h=le(),{trackUsage:u}=ke(),[c,v]=T.useState(!1),[t,b]=T.useState(null),{toggleNotification:m}=ue(),{get:l,put:d}=ce(),{formatAPIError:g}=pe(),j=me(x,{sensitivity:"base"}),{isLoading:p,allowedActions:{canUpdate:y}}=he({update:ae.updateProviders}),{isLoading:C,data:q}=be(["users-permissions","get-providers"],async()=>{const{data:a}=await l("/users-permissions/providers");return a},{initialData:{}}),H=ge(a=>d("/users-permissions/providers",a),{async onSuccess(){await h.invalidateQueries(["users-permissions","get-providers"]),m({type:"success",message:r({id:n("notification.success.submit")})}),u("didEditAuthenticationProvider"),S()},onError(a){m({type:"danger",message:g(a)})},refetchActive:!1}),w=Object.entries(q).reduce((a,[f,ne])=>{const{icon:V,enabled:oe,subdomain:de}=ne;return a.push({name:f,icon:V==="envelope"?["fas","envelope"]:["fab",V],enabled:oe,subdomain:de}),a},[]).sort((a,f)=>j.compare(a.name,f.name)),ie=C||p,W=T.useMemo(()=>t?!!w.find(f=>f.name===t)?.subdomain:!1,[w,t]),re=T.useMemo(()=>t==="email"?O.email:W?O.providersWithSubdomain:O.providers,[t,W]),S=()=>{v(a=>!a)},G=a=>{y&&(b(a.name),S())},te=async a=>{u("willEditAuthenticationProvider"),H.mutate({providers:{...q,[t]:a}})};return ie?e.jsx(k.Loading,{}):e.jsxs(I.Root,{children:[e.jsx(k.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})})}),e.jsxs(k.Main,{children:[e.jsx(I.Header,{title:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})}),e.jsx(I.Content,{children:e.jsxs(fe,{colCount:3,rowCount:w.length+1,children:[e.jsx(xe,{children:e.jsxs(Q,{children:[e.jsx(F,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),e.jsx(F,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:n("Providers.status"),defaultMessage:"Status"})})}),e.jsx(F,{children:e.jsx(M,{variant:"sigma",children:e.jsx(ve,{children:r({id:"global.settings",defaultMessage:"Settings"})})})})]})}),e.jsx(je,{children:w.map(a=>e.jsxs(Q,{onClick:()=>y?G(a):void 0,children:[e.jsx(U,{width:"45%",children:e.jsx(M,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),e.jsx(U,{width:"65%",children:e.jsx(M,{textColor:a.enabled?"success600":"danger600","data-testid":`enable-${a.name}`,children:a.enabled?r({id:"global.enabled",defaultMessage:"Enabled"}):r({id:"global.disabled",defaultMessage:"Disabled"})})}),e.jsx(U,{onClick:f=>f.stopPropagation(),children:y&&e.jsx(Pe,{onClick:()=>G(a),variant:"ghost",label:"Edit",children:e.jsx(ye,{})})})]},a.name))})]})})]}),e.jsx(D,{initialData:q[t],isOpen:c,isSubmiting:H.isLoading,layout:re,headerBreadcrumbs:[r({id:n("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),qe(t)],onToggle:S,onSubmit:te,providerToEditName:t})]})},Oe=()=>e.jsx(k.Protect,{permissions:ae.readProviders,children:e.jsx(Fe,{})});export{Fe as ProvidersPage,Oe as default};
