import{u as I,h as C,aM as x,m as D,a5 as N,bo as V,bZ as F,k as R,r as o,bw as _,j as e,P as d,L as T,e as A,b7 as b,be as h,bX as y,bY as w}from"./strapi-BZIRzwg1.js";import{u as v}from"./useOnce-NHeEacbN-CxTNVpR1.js";import{u as U,a as B}from"./apiTokens-ByCd8ZnO-CIB1Zkj5.js";import{A as r}from"./constants-CRj0ViV1-Q2dfXdfa.js";import{T as H}from"./Table-C-_pdniw-DgFtEc9G.js";const Y=[{name:"name",label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0},{name:"description",label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1},{name:"createdAt",label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1},{name:"lastUsedAt",label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}],G=()=>{const{formatMessage:t}=I(),{toggleNotification:a}=C(),S=x(s=>s.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canRead:u,canCreate:c,canDelete:L,canUpdate:j}}=D(S),p=N(),{trackUsage:i}=V(),m=F("ListView",s=>s.startSection),{_unstableFormatAPIError:l}=R();o.useEffect(()=>{m("apiTokens")},[m]),o.useEffect(()=>{p({search:_.stringify({sort:"name:ASC"},{encode:!1})})},[p]);const P=Y.map(s=>({...s,label:t(s.label)}));v(()=>{i("willAccessTokenList",{tokenType:r})});const{data:n=[],isLoading:k,error:g}=U();o.useEffect(()=>{g&&a({type:"danger",message:l(g)})},[g,l,a]),o.useEffect(()=>{i("didAccessTokenList",{number:n.length,tokenType:r})},[n,i]);const[M]=B(),E=async s=>{try{const f=await M(s);if("error"in f){a({type:"danger",message:l(f.error)});return}i("didDeleteToken")}catch{a({type:"danger",message:t({id:"notification.error",defaultMessage:"Something went wrong"})})}};return e.jsxs(e.Fragment,{children:[e.jsx(d.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"API Tokens"})}),e.jsx(T.Header,{title:t({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:t({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c&&e.jsx(A,{tag:b,"data-testid":"create-api-token-button",startIcon:e.jsx(h,{}),size:"S",onClick:()=>i("willAddTokenFromList",{tokenType:r}),to:"/settings/api-tokens/create",children:t({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),u?e.jsx(d.Main,{"aria-busy":k,children:e.jsxs(T.Content,{children:[n.length>0&&e.jsx(H,{permissions:{canRead:u,canDelete:L,canUpdate:j},headers:P,isLoading:k,onConfirmDelete:E,tokens:n,tokenType:r}),c&&n.length===0?e.jsx(y,{icon:e.jsx(w,{width:"16rem"}),content:t({id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"}),action:e.jsx(A,{tag:b,variant:"secondary",startIcon:e.jsx(h,{}),to:"/settings/api-tokens/create",children:t({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}):null,!c&&n.length===0?e.jsx(y,{icon:e.jsx(w,{width:"16rem"}),content:t({id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don’t have any content yet..."})}):null]})}):e.jsx(d.NoPermissions,{})]})},Q=()=>{const t=x(a=>a.admin_app.permissions.settings?.["api-tokens"].main);return e.jsx(d.Protect,{permissions:t,children:e.jsx(G,{})})};export{G as ListView,Q as ProtectedListView};
