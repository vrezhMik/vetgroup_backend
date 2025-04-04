import{aN as w,u as g,a5 as k,bo as R,l as B,j as e,aP as a,T as j,r as M,F as E,b_ as I,b$ as $,C as A,bj as v,B as L,I as P,bh as F,bk as N,a6 as U,d as H,e as O}from"./strapi-BZIRzwg1.js";const W=["years","months","days","hours","minutes","seconds"],y=M.forwardRef(({timestamp:s,customIntervals:n=[],...l},i)=>{const{formatRelativeTime:d,formatDate:r,formatTime:c}=g(),u=I({start:s,end:Date.now()}),x=W.find(o=>u[o]>0&&Object.keys(u).includes(o)),h=$(s)?-u[x]:u[x],m=n.find(o=>u[o.unit]<o.threshold),p=m?m.text:d(h,x,{numeric:"auto"});return e.jsx("time",{ref:i,dateTime:s.toISOString(),role:"time",title:`${r(s)} ${c(s)}`,...l,children:p})}),K=({permissions:s,headers:n=[],isLoading:l=!1,tokens:i=[],onConfirmDelete:d,tokenType:r})=>{const[{query:c}]=w(),{formatMessage:u,locale:x}=g(),[,h]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],m=k(),{trackUsage:p}=R(),o=B(x),f=[...i].sort((t,b)=>h==="DESC"?o.compare(b.name,t.name):o.compare(t.name,b.name)),{canDelete:C,canUpdate:T,canRead:D}=s,S=t=>()=>{D&&(p("willEditTokenFromList",{tokenType:r}),m(t.toString()))};return e.jsx(a.Root,{headers:n,rows:f,isLoading:l,children:e.jsxs(a.Content,{children:[e.jsx(a.Head,{children:n.map(t=>e.jsx(a.HeaderCell,{...t},t.name))}),e.jsx(a.Empty,{}),e.jsx(a.Loading,{}),e.jsx(a.Body,{children:f.map(t=>e.jsxs(a.Row,{onClick:S(t.id),children:[e.jsx(a.Cell,{maxWidth:"25rem",children:e.jsx(j,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(a.Cell,{maxWidth:"25rem",children:e.jsx(j,{textColor:"neutral800",ellipsis:!0,children:t.description})}),e.jsx(a.Cell,{children:e.jsx(j,{textColor:"neutral800",children:e.jsx(y,{timestamp:new Date(t.createdAt)})})}),e.jsx(a.Cell,{children:t.lastUsedAt&&e.jsx(j,{textColor:"neutral800",children:e.jsx(y,{timestamp:new Date(t.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:u({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),T||D||C?e.jsx(a.Cell,{children:e.jsxs(E,{justifyContent:"end",children:[T&&e.jsx(Q,{tokenName:t.name,tokenId:t.id}),C&&e.jsx(G,{tokenName:t.name,onClickDelete:()=>d?.(t.id),tokenType:r})]})}):null]},t.id))})]})})},_={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},q=({tokenName:s,tokenId:n,buttonType:l="edit",children:i})=>{const{formatMessage:d}=g();return e.jsx(z,{tag:U,to:n.toString(),onClick:r=>r.stopPropagation(),title:d(_[l],{target:s}),variant:"ghost",size:"S",children:i})},z=H(O)`
  padding: 0.7rem;

  & > span {
    display: flex;
  }
`,G=({tokenName:s,onClickDelete:n,tokenType:l})=>{const{formatMessage:i}=g(),{trackUsage:d}=R(),r=()=>{d("willDeleteToken",{tokenType:l}),n()};return e.jsx(v.Root,{children:e.jsxs(L,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[e.jsx(v.Trigger,{children:e.jsx(P,{label:i({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${s}`}),name:"delete",variant:"ghost",children:e.jsx(F,{})})}),e.jsx(N,{onConfirm:r})]})})},Q=({tokenName:s,tokenId:n})=>e.jsx(q,{tokenName:s,tokenId:n,children:e.jsx(A,{})});export{K as T};
