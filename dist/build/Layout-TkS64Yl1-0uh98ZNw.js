const __vite__fileDeps=["strapi-BVlQgZ46.js","App-BZcnUOe0-COJtagOC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aJ as _,u as P,j as i,P as N,b8 as w,L as D,ci as T,r as g,c3 as A,c9 as C,cj as O,aD as U,ck as R,bv as $,by as B,bo as H,av as K,cl as G,cm as V,cn as q,co as F,a6 as J,d as M,cp as W,cq as Y}from"./strapi-BVlQgZ46.js";import{s as z}from"./sortBy-D6bHpPdj.js";import{s as Q}from"./selectors-BUDjU_0m-Bs1RYTOF.js";import"./_baseMap-BlzM8YR_.js";import"./_baseEach-ByxndvGI.js";const X=n=>n.map(a=>{const r=a.links.map(o=>({...o,isDisplayed:!1}));return{...a,links:r}}),Z=()=>{const[{isLoading:n,menu:a},r]=g.useState({isLoading:!0,menu:[]}),o=A("useSettingsMenu",s=>s.checkUserHasPermissions),b=C("useSettingsMenu",s=>s.shouldUpdateStrapi),m=O("useSettingsMenu",s=>s.settings),c=U(Q),h=g.useMemo(()=>R(),[]),{admin:e,global:t}=$(h,async()=>(await B(()=>import("./strapi-BVlQgZ46.js").then(s=>s.j$),__vite__mapDeps([0,1])).then(s=>s.K)).SETTINGS_LINKS_EE(),{combine(s,l){return{admin:[...l.admin,...s.admin],global:[...s.global,...l.global]}},defaultValue:{admin:[],global:[]}}),f=g.useCallback(s=>{if(!s.id)throw new Error("The settings menu item must have an id attribute.");return{...s,permissions:c.settings?.[s.id]?.main??[]}},[c.settings]);return g.useEffect(()=>{const s=async()=>{const I=await(S=>Promise.all(S.reduce((d,L,k)=>{const x=L.links.map(async(v,p)=>({hasPermission:(await o(v.permissions)).length>0,sectionIndex:k,linkIndex:p}));return[...d,...x]},[])))(j);r(S=>({...S,isLoading:!1,menu:j.map((d,L)=>({...d,links:d.links.map((k,x)=>{const v=I.find(p=>p.sectionIndex===L&&p.linkIndex===x);return{...k,isDisplayed:!!v?.hasPermission}})}))}))},{global:l,...E}=m,j=X([{...l,links:z([...l.links,...t.map(f)],u=>u.id).map(u=>({...u,hasNotification:u.id==="000-application-infos"&&b}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:e.map(f)},...Object.values(E)]);s()},[e,t,m,b,f,o]),{isLoading:n,menu:a.map(s=>({...s,links:s.links.filter(l=>l.isDisplayed)}))}},y=M(W)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,ss=M(Y)`
  &.active ${y} {
    right: 13px;
  }
`,ts=({menu:n})=>{const{formatMessage:a}=P(),{trackUsage:r}=H(),{pathname:o}=K(),m=n.filter(e=>!e.links.every(t=>t.isDisplayed===!1)).map(e=>({...e,title:e.intlLabel,links:e.links.map(t=>({...t,title:t.intlLabel,name:t.id}))})),c=a({id:"global.settings",defaultMessage:"Settings"}),h=e=>()=>{r("willNavigate",{from:o,to:e})};return i.jsxs(G,{"aria-label":c,children:[i.jsx(V,{label:c}),i.jsx(q,{children:m.map(e=>i.jsx(F,{label:a(e.intlLabel),children:e.links.map(t=>i.jsxs(ss,{tag:J,withBullet:t.hasNotification,to:t.to,onClick:h(t.to),position:"relative",children:[a(t.intlLabel),t?.licenseOnly&&i.jsx(y,{width:"1.5rem",height:"1.5rem"})]},t.id))},e.id))})]})},rs=()=>{const n=_("/settings/:settingId/*"),{formatMessage:a}=P(),{isLoading:r,menu:o}=Z();return r?i.jsx(N.Loading,{}):n?.params.settingId?i.jsxs(D.Root,{sideNav:i.jsx(ts,{menu:o}),children:[i.jsx(N.Title,{children:a({id:"global.settings",defaultMessage:"Settings"})}),i.jsx(T,{})]}):i.jsx(w,{to:"application-infos"})};export{rs as Layout};
