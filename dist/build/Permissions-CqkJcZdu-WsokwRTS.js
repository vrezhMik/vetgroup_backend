import{gn as De,gP as Fe,gQ as He,gL as Ve,gR as Ge,gS as We,gT as Ke,gU as Xe,gV as Ye,gO as qe,gM as ze,r as S,aa as Oe,u as P,f5 as Q,gp as U,j as t,cs as Qe,cw as H,gW as oe,go as k,ga as R,gX as N,B as O,gE as q,gY as $e,gZ as Ze,ab as Je,g_ as he,F as y,T as E,ad as L,g$ as ce,h0 as Ue,h1 as es,M as B,Q as ge,d as T,J as ss,K as ts,D as ns,S as ie,h2 as os,h3 as is,er as rs,as}from"./strapi-CXkfMEkk.js";import{g as re}from"./groupBy-DDgAt5uC.js";var ls=Ye,cs=We,ds=qe,us=Ve,ps=Xe,hs=ze,gs=Fe,fs=Ke,ms=Ge,xs=He;function Cs(e,s,o){var n=hs(e),r=n||gs(e)||xs(e);if(s=us(s),o==null){var a=e&&e.constructor;r?o=n?new a:[]:ms(e)?o=fs(a)?cs(ps(e)):{}:o={}}return(r?ls:ds)(e,function(c,i,l){return s(o,c,i,l)}),o}var js=Cs;const bs=De(js),[ys,Ss]=Qe("PermissionsDataManager"),Y=()=>Ss("usePermissionsDataManager");function fe(e,s){function o(n,r){return bs(n,(a,c,i)=>(Je(c,r[i])||(a[i]=he(c)&&he(r[i])?o(c,r[i]):c),a))}return o(e,s)}const Te=e=>Array.isArray(e)?e.reduce((s,o)=>(Array.isArray(o)?s.push(...Te(o)):s.push(o),s),[]):[],V=e=>N(e)?Te(Object.values(e).map(s=>N(s)?V(s):s)):[],ve=(e,s,o)=>e.find(n=>n.action===s&&n.subject===o),ks=e=>{const s=me(e.plugins),o=me(e.settings),n=xe(e.collectionTypes),r=xe(e.singleTypes);return[...s,...o,...n,...r]},me=e=>Object.values(e).reduce((s,o)=>{const n=Object.values(o).reduce((r,a)=>{const c=Object.entries(a).reduce((i,[l,{conditions:d,properties:{enabled:u}}])=>(u&&i.push({action:l,subject:null,conditions:ae(d),properties:{}}),i),[]);return[...r,...c]},[]);return[...s,...n]},[]),xe=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,c=Object.entries(a).reduce((i,l)=>{const[d,u]=l;if(!V(u).some(h=>h))return i;if(!u?.properties?.enabled){const h=Object.entries(u.properties).reduce((C,m)=>{const[p,f]=m;return C.properties[p]=Me(f),C},{action:d,subject:r,conditions:ae(u.conditions),properties:{}});return[...i,h]}return u.properties.enabled&&i.push({action:d,subject:r,properties:{},conditions:ae(u.conditions)}),i},[]);return[...o,...c]},[]),Me=(e,s="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return N(a)?[...o,...Me(a,`${s}${r}.`)]:(a&&!N(a)&&o.push(`${s}${r}`),o)},[]),ae=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),we=(e,s=[])=>e.reduce((o,n)=>(o[n.id]=s.indexOf(n.id)!==-1,o),{}),Ce=(e,s,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const c=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((d,u)=>{const g=ve(o,u.action,null);return d[u.action]={properties:{enabled:g!==void 0},conditions:we(s,g?.conditions??[])},d},{}),i),{});return n[r]=c,n},{}),As=(e,s,o)=>{const n=({children:r=[]},a,c="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${c}${l.value}.`)};const d=a.indexOf(`${c}${l.value}`)!==-1;return i[l.value]=d,i},{});return e.reduce((r,a)=>{const c=s.properties.find(({value:i})=>i===a);if(c){const i=o?.properties[c.value]??[],l=n(c,i);r.properties[a]=l}return r},{properties:{}})},je=({subjects:e,actions:s=[]},o,n=[])=>s.reduce((r,a)=>{const c=a.subjects.reduce((l,d)=>{const u=e.find(({uid:g})=>g===d)||null;return u&&(l[d]=u),l},{});if(Q(c))return r;const i=Object.keys(c).reduce((l,d)=>{const{actionId:u,applyToProperties:g}=a,m=c[d].properties.map(({value:x})=>x).every(x=>(g||[]).indexOf(x)===-1),p=ve(n,u,d),f=we(o,p?.conditions??[]);if(l[d]||(l[d]={}),Q(g)||m)return l[d][u]={properties:{enabled:p!==void 0},conditions:f},l;const j=As(g,c[d],p);return l[d][u]={...j,conditions:f},l},{});return Ze(r,i)},{}),be=(e,s)=>Object.entries(re(e,s)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(re(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),J=e=>Object.keys(e).reduce((s,o)=>{const n=e[o];if(N(n)&&!U(n,"conditions"))return{...s,[o]:J(n)};if(N(n)&&U(n,"conditions")&&!V($e(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((c,i)=>(c[i]=!1,c),{});return{...s,[o]:{...n,conditions:a}}}return s[o]=n,s},{}),z=(e,s,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):N(a)?{...n,[r]:z(a,s,r==="fields")}:(n[r]=s,n)},{}),I="12rem",de="20rem",se="5.3rem",ue=e=>e?Object.entries(e).reduce((s,[o,n])=>(o!=="conditions"&&(s[o]=n),s),{}):null,G=e=>{const s=ue(e),o=V(s);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},Pe=T(y)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({$isCollapsable:e})=>e&&"cursor: pointer;"}
`,pe=T.div`
  width: ${I};
`,_e=()=>t.jsx(O,{color:"danger700",paddingLeft:1,children:"*"}),Ee=({checkboxName:e="",children:s,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:c,onClick:i,someChecked:l=!1,value:d})=>{const{formatMessage:u}=P(),g={title:a,alignItems:"center",$isCollapsable:n};return n&&Object.assign(g,{onClick:i,"aria-expanded":o,onKeyDown({key:h}){(h==="Enter"||h===" ")&&i()},tabIndex:0,role:"button"}),t.jsxs(y,{alignItems:"center",paddingLeft:6,width:de,shrink:0,children:[t.jsx(O,{paddingRight:2,children:t.jsx(L,{name:e,"aria-label":u({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onCheckedChange:h=>c({target:{name:e,value:!!h}}),checked:l?"indeterminate":d})}),t.jsxs(Pe,{...g,children:[t.jsx(E,{ellipsis:!0,children:a}),s]})]})},Os=({availableActions:e=[],childrenForm:s=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const c=S.useMemo(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return t.jsxs(y,{display:"inline-flex",direction:"column",alignItems:"stretch",minWidth:0,children:[t.jsx(Rs,{label:n,headers:c}),t.jsx(O,{children:s.map(({children:i,label:l,value:d,required:u},g)=>t.jsx($s,{childrenForm:i,label:l,isFormDisabled:o,name:d,required:u,propertyActions:c,pathToData:r,propertyName:a,isOdd:g%2===0},d))})]})},$s=({childrenForm:e=[],label:s,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:c,propertyName:i,isOdd:l=!1})=>{const{formatMessage:d}=P(),[u,g]=S.useState(null),{modifiedData:h,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:m,onChangeSimpleCheckbox:p}=Y(),f=u===n,j=S.useMemo(()=>Array.isArray(e)?e:[],[e]),x=j.length>0,b=S.useCallback(()=>{x&&g(A=>A===n?null:n)},[x,n]),$=({target:{value:A}})=>{C(a,i,n,A)},{hasAllActionsSelected:M,hasSomeActionsSelected:w}=S.useMemo(()=>Ts(c,h,a,i,n),[c,h,a,i,n]);return t.jsxs(t.Fragment,{children:[t.jsx(vs,{alignItems:"center",$isCollapsable:x,$isActive:f,background:l?"neutral100":"neutral0",children:t.jsxs(y,{children:[t.jsxs(Ee,{onChange:$,onClick:b,isCollapsable:x,isFormDisabled:o,label:s,someChecked:w,value:M,isActive:f,children:[r&&t.jsx(_e,{}),t.jsx(Z,{$isActive:f})]}),t.jsx(y,{children:c.map(({label:A,isActionRelatedToCurrentProperty:_,actionId:W})=>{if(!_)return t.jsx(pe,{},A);const v=[...a.split(".."),W,"properties",i,n];if(!x){const F=k(h,v,!1);return t.jsx(y,{width:I,position:"relative",justifyContent:"center",alignItems:"center",children:t.jsx(L,{disabled:o,name:v.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${A}`}),onCheckedChange:Ne=>{p({target:{name:v.join(".."),value:!!Ne}})},checked:F})},W)}const K=k(h,v,{}),{hasAllActionsSelected:D,hasSomeActionsSelected:ne}=G(K);return t.jsx(y,{width:I,position:"relative",justifyContent:"center",alignItems:"center",children:t.jsx(L,{disabled:o,name:v.join(".."),onCheckedChange:F=>{m({target:{name:v.join(".."),value:!!F}})},"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${A}`}),checked:ne?"indeterminate":D})},A)})})]})}),f&&t.jsx(Le,{childrenForm:j,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:c,recursiveLevel:0})]})},Ts=(e,s,o,n,r)=>{const c=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const d=k(s,[...o.split(".."),l,"properties",n,r],!1);return i[l]=d,i},{});return G(c)},vs=T(y)`
  height: ${se};
  flex: 1;

  &:hover {
    ${({$isCollapsable:e,theme:s})=>e&&ee(s)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${Z} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:s})=>e&&ee(s)};
`,Z=T(as)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.neutral200};
  }

  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Le=({childrenForm:e=[],isFormDisabled:s,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:c})=>{const{formatMessage:i}=P(),{modifiedData:l,onChangeParentCheckbox:d,onChangeSimpleCheckbox:u}=Y(),[g,h]=S.useState(null),C=p=>{h(f=>f===p?null:p)},m=S.useMemo(()=>g?e.find(({value:p})=>p===g):null,[g,e]);return t.jsxs(O,{paddingLeft:"3.2rem",children:[t.jsx(_s,{}),e.map(({label:p,value:f,required:j,children:x},b)=>{const $=b+1<e.length,M=Array.isArray(x),w=g===f;return t.jsxs(Ms,{$isVisible:$,children:[t.jsxs(y,{height:se,children:[t.jsx(Es,{children:t.jsx(Ls,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",$color:"primary200",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),t.jsxs(y,{style:{flex:1},children:[t.jsx(ws,{$level:o,$isActive:w,$isCollapsable:M,children:t.jsxs(Pe,{alignItems:"center",$isCollapsable:M,...M&&{onClick:()=>C(f),"aria-expanded":w,onKeyDown:({key:A})=>(A==="Enter"||A===" ")&&C(f),tabIndex:0,role:"button"},title:p,children:[t.jsx(Ps,{ellipsis:!0,children:p}),j&&t.jsx(_e,{}),t.jsx(Z,{$isActive:w})]})}),t.jsx(y,{style:{flex:1},children:r.map(({actionId:A,label:_,isActionRelatedToCurrentProperty:W})=>{if(!W)return t.jsx(pe,{},A);const v=[...n.split(".."),A,"properties",c,...a.split(".."),f],K=k(l,v,!1);if(!x)return t.jsx(y,{position:"relative",width:I,justifyContent:"center",alignItems:"center",children:t.jsx(L,{disabled:s,name:v.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${p} ${_}`}),onCheckedChange:F=>{u({target:{name:v.join(".."),value:!!F}})},checked:K})},_);const{hasAllActionsSelected:D,hasSomeActionsSelected:ne}=G(K);return t.jsx(y,{position:"relative",width:I,justifyContent:"center",alignItems:"center",children:t.jsx(L,{disabled:s,name:v.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${p} ${_}`}),onCheckedChange:F=>{d({target:{name:v.join(".."),value:!!F}})},checked:ne?"indeterminate":D},_)},_)})})]})]}),m&&w&&t.jsx(O,{paddingBottom:2,children:t.jsx(Le,{isFormDisabled:s,parentName:`${a}..${f}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:c,recursiveLevel:o+1,childrenForm:m.children})})]},f)})]})},Ms=T(O)`
  border-left: ${({$isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,ws=T(y)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({$level:e})=>145-e*36}px;

  &:hover {
    ${({$isCollapsable:e,theme:s})=>e&&ee(s)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${Z} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:s})=>e&&ee(s)};
`,Ps=T(E)``,_s=T.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: 0.4rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Es=T(O)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Ls=T.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,$color:s})=>e.colors[s]};
  }
`,Rs=({headers:e=[],label:s})=>{const{formatMessage:o}=P();return t.jsxs(y,{children:[t.jsx(y,{width:de,height:se,shrink:0,alignItems:"center",paddingLeft:6,children:t.jsx(E,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s})})}),e.map(n=>n.isActionRelatedToCurrentProperty?t.jsx(y,{width:I,shrink:0,justifyContent:"center",children:t.jsx(E,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):t.jsx(y,{width:I,shrink:0},n.label))]})},ee=e=>is`
  color: ${e.colors.primary600};
  font-weight: ${e.fontWeights.bold};

  ${Z} {
    path {
      fill: ${e.colors.primary600};
    }
  }
`,Is=S.forwardRef(({onClick:e,className:s,hasConditions:o=!1,variant:n="tertiary"},r)=>{const{formatMessage:a}=P();return t.jsx(Bs,{$hasConditions:o,className:s,children:t.jsx(ie,{variant:n,startIcon:t.jsx(rs,{}),onClick:e,ref:r,type:"button",children:a({id:"global.settings",defaultMessage:"Settings"})})})}),Bs=T(O)`
  ${({$hasConditions:e,theme:s})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: 2rem;
      background: ${s.colors.primary600};
    }
  `}
`,te=T(Is)``,Re=({actions:e=[],headerBreadCrumbs:s=[],isFormDisabled:o,onClose:n})=>{const{formatMessage:r}=P(),{availableConditions:a,modifiedData:c,onChangeConditions:i}=Y(),l=S.useMemo(()=>Object.entries(re(a,"category")),[a]),d=e.filter(({isDisplayed:p,hasSomeActionsSelected:f,hasAllActionsSelected:j})=>p&&!!(f||j)),[u,g]=S.useState(ye(d,c,l)),h=(p,f)=>{g(Oe(j=>{j[p]||(j[p]={}),j[p].default||(j[p].default={}),j[p].default=f}))},C=()=>{const p=Object.entries(u).reduce((f,j)=>{const[x,b]=j,$=Object.values(b).reduce((M,w)=>({...M,...w}),{});return f[x]=$,f},{});i(p),n&&n()},m=()=>{g(ye(d,c,l)),n&&n()};return t.jsxs(B.Content,{children:[t.jsx(B.Header,{children:t.jsx(ss,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((p,f,j)=>t.jsx(ts,{isCurrent:f===j.length-1,children:ns(r({id:p,defaultMessage:p}))},p))})}),t.jsxs(B.Body,{children:[d.length===0&&t.jsx(E,{children:r({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),t.jsx("ul",{children:d.map(({actionId:p,label:f,pathToConditionsObject:j},x)=>{const b=j.join("..");return t.jsx(Ns,{arrayOfOptionsGroupedByCategory:l,label:f,isFormDisabled:o,isGrey:x%2===0,name:b,onChange:h,value:k(u,b,{})},p)})})]}),t.jsxs(B.Footer,{children:[t.jsx(ie,{variant:"tertiary",onClick:()=>m(),children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(ie,{onClick:C,children:r({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})]})]})},ye=(e,s,o)=>e.reduce((n,r)=>{const a=k(s,[...r.pathToConditionsObject,"conditions"],{}),c=o.reduce((i,l)=>{const[d,u]=l,g=u.reduce((h,C)=>(h[C.id]=k(a,C.id,!1),h),{});return i[d]=g,i},{});return n[r.pathToConditionsObject.join("..")]=c,n},{}),Ns=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:c})=>{const{formatMessage:i}=P(),l=d=>{a&&a(r,Hs(e,d))};return t.jsxs(y,{tag:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,justifyContent:"space-evenly",children:[t.jsxs(y,{style:{width:180},children:[t.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"})," "]}),t.jsx(E,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),t.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[" ",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),t.jsx(O,{style:{maxWidth:430,width:"100%"},children:t.jsx(os,{id:r,customizeContent:(d=[])=>`${d.length} currently selected`,onChange:l,value:Ds(c),options:Fs(e),disabled:s})})]})},Ds=e=>Object.values(e).map(s=>Object.entries(s).filter(([,o])=>o).map(([o])=>o)).flat(),Fs=e=>e.reduce((s,[o,n])=>(s.push({label:ce(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),s),[]),Hs=(e,s)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:s.includes(n.id),...o}),{}),Vs=({actions:e=[],isFormDisabled:s,pathToData:o,subjects:n=[]})=>{const[r,a]=S.useState(null),c=i=>()=>{a(r===i?null:i)};return t.jsx(t.Fragment,{children:n.map(({uid:i,label:l,properties:d},u)=>{const g=r===i,h=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(i)!==-1}));return t.jsxs(y,{direction:"column",display:"inline-flex",alignItems:"stretch",minWidth:"100%",borderColor:g?"primary600":void 0,children:[t.jsx(Gs,{availableActions:h,isActive:g,isGrey:u%2===0,isFormDisabled:s,label:l,onClickToggle:c(i),pathToData:[o,i].join("..")}),g&&d.map(({label:C,value:m,children:p})=>t.jsx(Os,{availableActions:h,childrenForm:p,isFormDisabled:s,label:C,pathToData:[o,i].join(".."),propertyName:m},m))]},i)})})},Gs=({availableActions:e=[],isActive:s=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:c})=>{const{formatMessage:i}=P(),{modifiedData:l,onChangeParentCheckbox:d,onChangeSimpleCheckbox:u}=Y(),[g,h]=S.useState(!1),C=k(l,c.split(".."),{}),m=S.useMemo(()=>Object.keys(C).reduce((b,$)=>(b[$]=$e(C[$],"conditions"),b),{}),[C]),{hasAllActionsSelected:p,hasSomeActionsSelected:f}=G(m),j=S.useMemo(()=>Ws(e,l,c),[e,l,c]),x=j.some(b=>b.hasConditions);return t.jsxs(Ks,{$isActive:s,children:[t.jsxs(Ie,{height:se,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[t.jsx(Ee,{isCollapsable:!0,isFormDisabled:n,label:ce(r),checkboxName:c,onChange:d,onClick:a,someChecked:f,value:p,isActive:s,children:t.jsx(Be,{paddingLeft:2,children:s?t.jsx(Ue,{}):t.jsx(es,{})})}),t.jsx(y,{style:{flex:1},children:j.map(({actionId:b,hasSomeActionsSelected:$,isDisplayed:M,...w})=>{if(!M)return t.jsx(pe,{},b);const{hasConditions:A,hasAllActionsSelected:_,isParentCheckbox:W,checkboxName:v,label:K}=w;return W?t.jsxs(Se,{justifyContent:"center",alignItems:"center",children:[A&&t.jsx(O,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),t.jsx(L,{disabled:n,name:v,"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${K} ${r}`}),onCheckedChange:D=>{d({target:{name:v,value:!!D}})},checked:$?"indeterminate":_})]},b):t.jsxs(Se,{justifyContent:"center",alignItems:"center",children:[A&&t.jsx(O,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),t.jsx(L,{disabled:n,name:v,onCheckedChange:D=>{u({target:{name:v,value:!!D}})},checked:A?"indeterminate":_})]},b)})})]}),t.jsx(O,{bottom:"10px",right:"9px",position:"absolute",children:t.jsxs(B.Root,{open:g,onOpenChange:()=>{h(b=>!b)},children:[t.jsx(B.Trigger,{children:t.jsx(te,{hasConditions:x})}),t.jsx(Re,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:j,isFormDisabled:n,onClose:()=>{h(!1)}})]})})]})},Ws=(e,s,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:c})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=Q(a)?[...i,"properties","enabled"]:i,d=k(s,[...i,"conditions"],null),u={actionId:n,checkboxName:l.join(".."),hasConditions:V(d).some(m=>m),isDisplayed:r,label:c,pathToConditionsObject:i};if(Q(a)){const m=k(s,l,!1);return{...u,hasAllActionsSelected:m,hasSomeActionsSelected:m,isParentCheckbox:!1}}const g=k(s,l,null),{hasAllActionsSelected:h,hasSomeActionsSelected:C}=G(g);return{...u,hasAllActionsSelected:h,hasSomeActionsSelected:C,isParentCheckbox:!0}}),le=(e,s)=>`
  ${Ie} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
    font-weight: ${e.fontWeights.bold};
  }

  ${Be} {
    display: flex;
  }
  ${te} {
    display: block;
  }

  &:focus-within {
    ${()=>le(e,s)}
  }
`,Ie=T(y)`
  border: 1px solid transparent;
`,Ks=T.div`
  display: inline-flex;
  min-width: 100%;
  position: relative;

  ${te} {
    display: none;
  }

  ${({$isActive:e,theme:s})=>e&&le(s,e)}

  &:hover {
    ${({theme:e,$isActive:s})=>le(e,s)}
  }
`,Se=T(y)`
  width: ${I};
  position: relative;
`,Be=T(O)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Xs=({actions:e=[],isFormDisabled:s,kind:o})=>{const{formatMessage:n}=P(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),c=e.filter(({subjects:l})=>l&&l.length),i=S.useMemo(()=>{const l=c.map(({actionId:h})=>h),d=r[o],u=l.reduce((h,C)=>(Object.keys(d).forEach(m=>{const p=k(d,[m,C]),f={[m]:ue(p)};h[C]?h[C]={...h[C],...f}:h[C]=f}),h),{});return Object.keys(u).reduce((h,C)=>(h[C]=G(u[C]),h),{})},[r,c,o]);return t.jsx(O,{paddingBottom:4,paddingTop:6,style:{paddingLeft:de},children:t.jsx(y,{gap:0,children:c.map(({label:l,actionId:d})=>t.jsxs(y,{shrink:0,width:I,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[t.jsx(E,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),t.jsx(L,{disabled:s,onCheckedChange:u=>{a(o,d,!!u)},name:d,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),checked:k(i,[d,"hasSomeActionsSelected"],!1)?"indeterminate":k(i,[d,"hasAllActionsSelected"],!1)})]},d))})})},ke=({isFormDisabled:e,kind:s,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,c)=>a.label.localeCompare(c.label));return t.jsxs(O,{background:"neutral0",children:[t.jsx(Xs,{actions:o,kind:s,isFormDisabled:e}),t.jsx(Vs,{actions:o,isFormDisabled:e,pathToData:s,subjects:r})]})},Ae=({layout:e,...s})=>t.jsx(O,{padding:6,background:"neutral0",children:t.jsx(q.Root,{size:"M",children:e.map(({category:o,categoryId:n,childrenForm:r},a)=>t.jsx(Ys,{childrenForm:r,variant:a%2===1?"primary":"secondary",name:o,pathToData:[s.kind,n],...s},o))})}),Ys=({childrenForm:e,kind:s,name:o,isFormDisabled:n=!1,variant:r,pathToData:a})=>{const{formatMessage:c}=P(),i=o.split("::").pop()??"";return t.jsxs(q.Item,{value:o,children:[t.jsx(q.Header,{variant:r,children:t.jsx(q.Trigger,{caretPosition:"right",description:`${c({id:"Settings.permissions.category",defaultMessage:i},{category:i})} ${s==="plugins"?"plugin":s}`,children:ce(i)})}),t.jsx(q.Content,{children:t.jsx(O,{padding:6,children:e.map(({actions:l,subCategoryName:d,subCategoryId:u})=>t.jsx(qs,{actions:l,categoryName:i,isFormDisabled:n,subCategoryName:d,pathToData:[...a,u]},d))})})]})},qs=({actions:e=[],categoryName:s,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const{modifiedData:a,onChangeParentCheckbox:c,onChangeSimpleCheckbox:i}=Y(),[l,d]=S.useState(!1),{formatMessage:u}=P(),g=k(a,r,{}),h=S.useMemo(()=>Object.keys(g).reduce((x,b)=>(x[b]=ue(g[b]),x),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:m}=G(h),p=S.useMemo(()=>e.map(x=>{const b=[...r,x.action,"properties","enabled"],$=k(a,b,!1),M=k(a,[...r,x.action,"conditions"],{}),w=V(M).some(A=>A);return{...x,isDisplayed:$,checkboxName:b.join(".."),hasSomeActionsSelected:$,value:$,hasConditions:w,label:x.displayName,actionId:x.action,pathToConditionsObject:[...r,x.action]}}),[e,a,r]),f=k(a,[...r],{}),j=V(Object.entries(f).reduce((x,b)=>{const[$,{conditions:M}]=b;return x[$]=M,x},{})).some(x=>x);return t.jsx(t.Fragment,{children:t.jsxs(O,{children:[t.jsxs(y,{justifyContent:"space-between",alignItems:"center",children:[t.jsx(O,{paddingRight:4,children:t.jsx(E,{variant:"sigma",textColor:"neutral600",children:n})}),t.jsx(zs,{flex:1}),t.jsx(O,{paddingLeft:4,children:t.jsx(L,{name:r.join(".."),disabled:o,onCheckedChange:x=>{c({target:{name:r.join(".."),value:!!x}})},checked:m?"indeterminate":C,children:u({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),t.jsxs(y,{paddingTop:6,paddingBottom:6,children:[t.jsx(ge.Root,{gap:2,style:{flex:1},children:p.map(({checkboxName:x,value:b,action:$,displayName:M,hasConditions:w})=>t.jsx(ge.Item,{col:3,direction:"column",alignItems:"start",children:t.jsx(Qs,{$disabled:o,$hasConditions:w,children:t.jsx(L,{name:x,disabled:o,onCheckedChange:A=>{i({target:{name:x,value:!!A}})},checked:b,children:M})})},$))}),t.jsxs(B.Root,{open:l,onOpenChange:()=>{d(x=>!x)},children:[t.jsx(B.Trigger,{children:t.jsx(te,{hasConditions:j})}),t.jsx(Re,{headerBreadCrumbs:[s,n],actions:p,isFormDisabled:o,onClose:()=>{d(!1)}})]})]})]})})},zs=T(O)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Qs=T.div`
  position: relative;
  word-break: keep-all;
  ${({$hasConditions:e,$disabled:s,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -0.4rem;
      left: -0.8rem;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 2rem;
      background: ${s?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,X=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],tt=S.forwardRef(({layout:e,isFormDisabled:s,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:c},i]=S.useReducer(Js,Zs,()=>Us(e,o)),{formatMessage:l}=P();S.useImperativeHandle(n,()=>({getPermissions(){const m=fe(r.collectionTypes,c.collectionTypes),p=fe(r.singleTypes,c.singleTypes),f={...m,...p};let j;return Q(f)?j=!1:j=Object.values(f).some((x={})=>Object.values(x).some(b=>U(b,"conditions"))),{permissionsToSend:ks(c),didUpdateConditions:j}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const d=(m,p,f,j)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:m,propertyName:p,rowName:f,value:j})},u=(m,p,f)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:m,actionId:p,value:f})},g=m=>{i({type:"ON_CHANGE_CONDITIONS",conditions:m})},h=S.useCallback(({target:{name:m,value:p}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:m,value:p})},[]),C=S.useCallback(({target:{name:m,value:p}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:m,value:p})},[]);return t.jsx(ys,{availableConditions:e.conditions,modifiedData:c,onChangeConditions:g,onChangeSimpleCheckbox:h,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:d,onChangeCollectionTypeGlobalActionCheckbox:u,children:t.jsxs(H.Root,{defaultValue:X[0].id,children:[t.jsx(H.List,{"aria-label":l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:X.map(m=>t.jsx(H.Trigger,{value:m.id,children:l({id:m.labelId,defaultMessage:m.defaultMessage})},m.id))}),t.jsx(H.Content,{value:X[0].id,children:t.jsx(ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),t.jsx(H.Content,{value:X[1].id,children:t.jsx(ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),t.jsx(H.Content,{value:X[2].id,children:t.jsx(Ae,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),t.jsx(H.Content,{value:X[3].id,children:t.jsx(Ae,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})})}),Zs={initialData:{},modifiedData:{},layouts:{}},Js=(e,s)=>Oe(e,o=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=s,c=["modifiedData",n];Object.keys(k(e,c)).forEach(i=>{const l=k(e,[...c,i,r],void 0);if(l){let d=z(l,a);if(!a&&d.conditions){const u=z(d.conditions,!1);d={...d,conditions:u}}R(o,[...c,i,r],d)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:c}=s;let i=oe(e.modifiedData);const l=n.split(".."),d=k(i,l,{});Object.keys(d).forEach(u=>{if(U(d[u],`properties.${r}`)){const g=k(d,[u,"properties",r,a]),h=[...l,u,"properties",r,a];if(!N(g))R(i,h,c);else{const C=z(g,c);R(i,h,C)}}}),c||(i=J(i)),R(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(n=>{const[r,a]=n;R(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=oe(e.modifiedData);R(n,[...s.keys.split("..")],s.value),s.value||(n=J(n)),R(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=s,a=[...n.split("..")];let c=oe(e.modifiedData);const i=k(c,a,{}),l=z(i,r);R(c,a,l),r||(c=J(c)),R(o,["modifiedData"],c);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Us=(e,s)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:c}}=e,i={collectionTypes:n,singleTypes:r,plugins:be(a,"plugin"),settings:be(c,"category")},l={collectionTypes:je(n,o,s),singleTypes:je(r,o,s),plugins:Ce(i.plugins,o,s),settings:Ce(i.settings,o,s)};return{initialData:l,modifiedData:l,layouts:i}};export{tt as P};
