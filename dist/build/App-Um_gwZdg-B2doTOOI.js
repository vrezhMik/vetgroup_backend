const __vite__fileDeps=["ConfigureTheView-Cm7EfE0r-CUw4Gd4T.js","strapi-BVlQgZ46.js","App-BZcnUOe0-COJtagOC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{fD as Te,aN as T,u as C,fE as c,r as M,j as e,P as L,R as $e,a as ue,a5 as Pe,fF as Qe,av as je,bo as be,fG as Ve,fH as D,fI as Ue,fJ as Oe,fK as ze,fL as Ne,fM as Ge,fN as E,fO as _e,L as B,I as _,bw as ye,b7 as qe,er as He,fP as We,e3 as Ke,bf as Xe,ad as Me,fQ as Je,fR as Ye,fS as Ze,Q as W,fT as es,fU as ss,fV as ts,F as $,V as as,C as ns,B as P,b5 as os,fW as is,aQ as q,fX as rs,fY as ls,fZ as ds,by as cs,S,be as K,b as us,a6 as gs,a7 as fs,f_ as hs,d as X,aq as ge,ar as ps,f$ as ms,g0 as fe,g1 as xs,T as J,g2 as js,c2 as bs,g3 as ys,g4 as Ms,bj as he,bh as Cs,bk as vs,M as y,e7 as Fs,g5 as Ss,aX as ks,N as Ls,O as ws,U as pe,g6 as Es,h as As,g as Rs,i as Is,q as Ds,g7 as H,g8 as Bs,f5 as Ts}from"./strapi-BVlQgZ46.js";const $s=(s,{pathname:n,query:a})=>{const o=[{id:null,label:{id:c("plugin.name"),defaultMessage:"Media Library"},href:s?E(n,a||{}):void 0}];return s?.parent&&typeof s?.parent!="number"&&s?.parent?.parent&&o.push([]),s?.parent&&typeof s.parent!="number"&&o.push({id:s.parent.id,label:s.parent.name,href:E(n,a||{},{folder:s.parent.id?.toString(),folderPath:s.parent.path})}),s&&o.push({id:s.id,label:s.name}),o},Ps=s=>{const{id:n}=ys();return e.jsx(P,{position:"relative",zIndex:2,children:e.jsx(Me,{"aria-labelledby":`${n}-title`,...s})})},Qs=({selected:s,onSuccess:n})=>{const{formatMessage:a}=C(),{remove:o}=Ms(),d=async()=>{await o(s),n()};return e.jsxs(he.Root,{children:[e.jsx(he.Trigger,{children:e.jsx(S,{variant:"danger-light",size:"S",startIcon:e.jsx(Cs,{}),children:a({id:"global.delete",defaultMessage:"Delete"})})}),e.jsx(vs,{onConfirm:d})]})},Vs=()=>{const{formatMessage:s}=C(),{toggleNotification:n}=As(),a=Rs(),{post:o}=Is(),i=Ds(({destinationFolderId:h,filesAndFolders:f})=>{const l=f.reduce((g,j)=>{const{id:r,type:F}=j,p=F==="asset"?"fileIds":"folderIds";return g[p]||(g[p]=[]),g[p].push(r),g},{});return o("/upload/actions/bulk-move",{...l,destinationFolderId:h})},{onSuccess(h){const{data:{data:f}}=h;f?.files?.length>0&&(a.refetchQueries([H,"assets"],{active:!0}),a.refetchQueries([H,"asset-count"],{active:!0})),a.refetchQueries([H,"folders"],{active:!0}),n({type:"success",message:s({id:c("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."})})}});return{...i,move:(h,f)=>i.mutateAsync({destinationFolderId:h,filesAndFolders:f})}},Us=({onClose:s,selected:n=[],currentFolder:a})=>{const{formatMessage:o}=C(),{data:d,isLoading:i}=Ss(),{move:u}=Vs();if(!d)return null;const h=async(l,{setErrors:g})=>{try{if(typeof l.destination!="string"){const j=l.destination.value;await u(j,n),s()}}catch(j){const r=Bs(j);if(r&&"errors"in r){const F=r.errors?.reduce((p,A)=>(p[A.values?.path?.length||"destination"]=A.defaultMessage,p),{});Ts(F)||g(F)}}};if(i)return e.jsx(y.Content,{children:e.jsx(y.Body,{children:e.jsx($,{justifyContent:"center",paddingTop:4,paddingBottom:4,children:e.jsx(ks,{children:o({id:c("content.isLoading"),defaultMessage:"Content is loading."})})})})});const f={destination:{value:a?.id||"",label:a?.name||d[0].label}};return e.jsx(y.Content,{children:e.jsx(Ls,{validateOnChange:!1,onSubmit:h,initialValues:f,children:({values:l,errors:g,setFieldValue:j})=>e.jsxs(ws,{noValidate:!0,children:[e.jsx(y.Header,{children:e.jsx(y.Title,{children:o({id:c("modal.folder.move.title"),defaultMessage:"Move elements to"})})}),e.jsx(y.Body,{children:e.jsx(W.Root,{gap:4,children:e.jsx(W.Item,{xs:12,col:12,direction:"column",alignItems:"stretch",children:e.jsxs(pe.Root,{id:"folder-destination",children:[e.jsx(pe.Label,{children:o({id:c("form.input.label.folder-location"),defaultMessage:"Location"})}),e.jsx(Es,{options:d,onChange:r=>{j("destination",r)},defaultValue:typeof l.destination!="string"?l.destination:void 0,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:g?.destination,ariaErrorMessage:"destination-error"}),g.destination&&e.jsx(J,{variant:"pi",tag:"p",textColor:"danger600",children:g.destination})]})})})}),e.jsxs(y.Footer,{children:[e.jsx(y.Close,{children:e.jsx(S,{variant:"tertiary",name:"cancel",children:o({id:"cancel",defaultMessage:"Cancel"})})}),e.jsx(S,{type:"submit",loading:i,children:o({id:"modal.folder.move.submit",defaultMessage:"Move"})})]})]})})})},Os=({selected:s=[],onSuccess:n,currentFolder:a})=>{const{formatMessage:o}=C(),[d,i]=M.useState(!1),u=()=>{i(!1),n()};return e.jsxs(y.Root,{open:d,onOpenChange:i,children:[e.jsx(y.Trigger,{children:e.jsx(S,{variant:"secondary",size:"S",startIcon:e.jsx(Fs,{}),children:o({id:"global.move",defaultMessage:"Move"})})}),e.jsx(Us,{currentFolder:a,onClose:u,selected:s})]})},zs=({selected:s=[],onSuccess:n,currentFolder:a})=>{const{formatMessage:o}=C(),d=s?.reduce(function(i,u){return u?.type==="folder"&&"files"in u&&u?.files&&"count"in u.files?i+u?.files?.count:i+1},0);return e.jsxs($,{gap:2,paddingBottom:5,children:[e.jsx(J,{variant:"epsilon",textColor:"neutral600",children:o({id:c("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s?.filter(({type:i})=>i==="folder").length,numberAssets:d})}),e.jsx(Qs,{selected:s,onSuccess:n}),e.jsx(Os,{currentFolder:a,selected:s,onSuccess:n})]})},Ns=({isFiltering:s,canCreate:n,canRead:a})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:a?n?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Gs=({canCreate:s,isFiltering:n,canRead:a,onActionClick:o})=>{const{formatMessage:d}=C(),i=Ns({isFiltering:n,canCreate:s,canRead:a});return e.jsx(js,{icon:a?void 0:bs,action:s&&!n&&e.jsx(S,{variant:"secondary",startIcon:e.jsx(K,{}),onClick:o,children:d({id:c("header.actions.add-assets"),defaultMessage:"Add new assets"})}),content:d({...i,id:c(i.id)})})},_s=()=>{const[s,n]=M.useState(!1),{formatMessage:a}=C(),{trackUsage:o}=be(),[{query:d},i]=T(),u=d?.filters?.$and||[],h=l=>{i({filters:{$and:l},page:1})},f=l=>{o("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),i({filters:{$and:l},page:1})};return e.jsxs(ge.Root,{open:s,onOpenChange:n,children:[e.jsx(ge.Trigger,{children:e.jsx(S,{variant:"tertiary",startIcon:e.jsx(ps,{}),size:"S",children:a({id:"app.utils.filters",defaultMessage:"Filters"})})}),e.jsx(ms,{displayedFilters:fe,filters:u,onSubmit:f,onToggle:n}),e.jsx(xs,{appliedFilters:u,filtersSchema:fe,onRemoveFilter:h})]})},qs=({breadcrumbs:s=null,canCreate:n,folder:a=null,onToggleEditFolderDialog:o,onToggleUploadAssetDialog:d})=>{const{formatMessage:i}=C(),{pathname:u}=je(),[{query:h}]=T(),f={...h,folder:a?.parent&&typeof a.parent!="number"&&a.parent.id?a.parent.id:void 0,folderPath:a?.parent&&typeof a.parent!="number"&&a.parent.path?a.parent.path:void 0};return e.jsx(B.Header,{title:i({id:c("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&typeof s!="boolean"&&a&&e.jsx(hs,{label:i({id:c("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:a?.id}),navigationAction:a&&e.jsx(us,{tag:gs,startIcon:e.jsx(fs,{}),to:`${u}?${ye.stringify(f,{encode:!1})}`,children:i({id:c("header.actions.folder-level-up"),defaultMessage:"Back"})}),primaryAction:n&&e.jsxs($,{gap:2,children:[e.jsx(S,{startIcon:e.jsx(K,{}),variant:"secondary",onClick:o,children:i({id:c("header.actions.add-folder"),defaultMessage:"Add new folder"})}),e.jsx(S,{startIcon:e.jsx(K,{}),onClick:d,children:i({id:c("header.actions.add-assets"),defaultMessage:"Add new assets"})})]})})},Hs=X(P)`
  height: 3.2rem;
  display: flex;
  align-items: center;
`,me=X(J)`
  max-width: 100%;
`,xe=X(P)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,Ws=()=>{const s=Pe(),{canRead:n,canCreate:a,canUpdate:o,canCopyLink:d,canDownload:i,canConfigureView:u,isLoading:h}=Qe(),f=M.useRef(),{formatMessage:l}=C(),{pathname:g}=je(),{trackUsage:j}=be(),[{query:r},F]=T(),p=!!(r._q||r.filters),[A,Ce]=Ve(Ue.view,D.GRID),k=A===D.GRID,{data:b,isLoading:ve,error:Fe}=Oe({skipWhen:!n,query:r}),{data:Se,isLoading:ke,error:Le}=ze({enabled:n&&b?.pagination?.page===1&&!Ne(r),query:r}),{data:Q,isLoading:Y,error:we}=Ge(r?.folder,{enabled:n&&!!r?.folder});we?.name==="NotFoundError"&&s(g);const R=Se?.map(t=>({...t,type:"folder",folderURL:E(g,r,{folder:t.id.toString(),folderPath:t.path}),isSelectable:o}))??[],m=R?.length||0,I=b?.results?.map(t=>({...t,type:"asset",isSelectable:o}))||[],x=I?.length??0,Ee=b?.pagination?.total,Ae=Y||ke||h||ve,[Z,Re]=M.useState(!1),[ee,se]=M.useState(!1),[V,U]=M.useState(void 0),[O,te]=M.useState(void 0),[v,{selectOne:z,selectAll:ae}]=_e(["type","id"],[]),ne=v?.length>0&&v?.length!==x+m,N=()=>Re(t=>!t),oe=({created:t=!1}={})=>{t&&r?.page!=="1"&&F({...r,page:1}),se(w=>!w)},ie=(t,w)=>{t&&j("didSelectAllMediaLibraryElements"),ae(w)},re=t=>{j("didSortMediaLibraryElements",{location:"upload",sort:t}),F({sort:t})},le=t=>{te(t),se(!0)},Ie=t=>{te(null),oe(t),f.current&&f.current.focus()},de=t=>{t===x&&b?.pagination?.page===b?.pagination?.pageCount&&b?.pagination?.page&&b.pagination.page>1&&F({...r,page:b.pagination.page-1})},De=()=>{ae(),de(v.length)};return Ae?e.jsx(L.Loading,{}):Fe||Le?e.jsx(L.Error,{}):e.jsxs(B.Root,{children:[e.jsxs(L.Main,{children:[e.jsx(qs,{breadcrumbs:Y?null:$s(Q,{pathname:g,query:r}),canCreate:a,onToggleEditFolderDialog:oe,onToggleUploadAssetDialog:N,folder:Q}),e.jsx(B.Action,{startActions:e.jsxs(e.Fragment,{children:[o&&k&&(x>0||m>0)&&e.jsx(Hs,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200",children:e.jsx(Me,{"aria-label":l({id:c("bulk.select.label"),defaultMessage:"Select all folders & assets"}),checked:ne?"indeterminate":(x>0||m>0)&&v.length===x+m,onCheckedChange:t=>ie(t,[...I,...R])})}),n&&k&&e.jsx(Je,{value:r?.sort,onChangeSort:re}),n&&e.jsx(_s,{})]}),endActions:e.jsxs(e.Fragment,{children:[u?e.jsx(xe,{paddingTop:1,paddingBottom:1,children:e.jsx(_,{tag:qe,to:{pathname:`${g}/configuration`,search:ye.stringify(r,{encode:!1})},label:l({id:"app.links.configure-view",defaultMessage:"Configure the view"}),children:e.jsx(He,{})})}):null,e.jsx(xe,{paddingTop:1,paddingBottom:1,children:e.jsx(_,{label:l(k?{id:c("view-switch.list"),defaultMessage:"List View"}:{id:c("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>Ce(k?D.LIST:D.GRID),children:k?e.jsx(We,{}):e.jsx(Ke,{})})}),e.jsx(Xe,{label:l({id:c("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})]})}),e.jsxs(B.Content,{children:[v.length>0&&e.jsx(zs,{currentFolder:Q,selected:v,onSuccess:De}),m===0&&x===0&&e.jsx(Gs,{canCreate:a,canRead:n,isFiltering:p,onActionClick:N}),n&&!k&&(x>0||m>0)&&e.jsx(Ye,{assetCount:x,folderCount:m,indeterminate:ne,onChangeSort:re,onChangeFolder:(t,w)=>s(E(g,r,{folder:t.toString(),folderPath:w})),onEditAsset:U,onEditFolder:le,onSelectOne:z,onSelectAll:ie,rows:[...R,...I],selected:v,shouldDisableBulkSelect:!o,sortQuery:r?.sort??""}),n&&k&&e.jsxs(e.Fragment,{children:[m>0&&e.jsx(Ze,{title:(p&&x>0||!p)&&l({id:c("list.folders.title"),defaultMessage:"Folders ({count})"},{count:m})||"",children:R.map(t=>{const Be=!!v.filter(({type:G})=>G==="folder").find(G=>G.id===t.id),ce=E(g,r,{folder:t?.id.toString(),folderPath:t?.path});return e.jsx(W.Item,{col:3,direction:"column",alignItems:"stretch",children:e.jsx(es,{ref:O&&t.id===O.id?f:void 0,ariaLabel:t.name,id:`folder-${t.id}`,to:ce,startAction:t.isSelectable?e.jsx(Ps,{"data-testid":`folder-checkbox-${t.id}`,checked:Be,onCheckedChange:()=>z(t)}):null,cardActions:e.jsx(_,{label:l({id:c("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>le(t),children:e.jsx(ns,{})}),children:e.jsx(ss,{children:e.jsx(ts,{to:ce,children:e.jsxs($,{tag:"h2",direction:"column",alignItems:"start",maxWidth:"100%",children:[e.jsxs(me,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0,children:[t.name,e.jsx(as,{children:":"})]}),e.jsx(me,{tag:"span",textColor:"neutral600",variant:"pi",ellipsis:!0,children:l({id:c("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:t.children?.count,filesCount:t.files?.count})})]})})})})},`folder-${t.id}`)})}),x>0&&m>0&&e.jsx(P,{paddingTop:6,paddingBottom:4,children:e.jsx(os,{})}),x>0&&e.jsx(is,{assets:I,onEditAsset:U,onSelectAsset:z,selectedAssets:v.filter(({type:t})=>t==="asset"),title:(!p||p&&m>0)&&b?.pagination?.page===1&&l({id:c("list.assets.title"),defaultMessage:"Assets ({count})"},{count:Ee})||""})]}),e.jsxs(q.Root,{...b?.pagination,children:[e.jsx(q.PageSize,{}),e.jsx(q.Links,{})]})]})]}),Z&&e.jsx(rs,{open:Z,onClose:N,trackedLocation:"upload",folderId:r?.folder}),ee&&e.jsx(ls,{open:ee,onClose:()=>Ie(),folder:O,parentFolderId:r?.folder,location:"upload"}),V&&e.jsx(ds,{onClose:t=>{t===null&&de(1),U(void 0)},open:!!V,asset:V,canUpdate:o,canCopyLink:d,canDownload:i,trackedLocation:"upload"})]})},Ks=M.lazy(async()=>cs(()=>import("./ConfigureTheView-Cm7EfE0r-CUw4Gd4T.js"),__vite__mapDeps([0,1,2])).then(s=>({default:s.ConfigureTheView}))),Js=()=>{const{config:{isLoading:s,isError:n,data:a}}=Te(),[{rawQuery:o},d]=T(),{formatMessage:i}=C(),u=i({id:c("plugin.name"),defaultMessage:"Media Library"});return M.useEffect(()=>{s||n||o||d({sort:a.sort,page:1,pageSize:a.pageSize})},[s,n,a,o,d]),s?e.jsxs(e.Fragment,{children:[e.jsx(L.Title,{children:u}),e.jsx(L.Loading,{})]}):e.jsx(L.Main,{children:o?e.jsx(M.Suspense,{fallback:e.jsx(L.Loading,{}),children:e.jsxs($e,{children:[e.jsx(ue,{index:!0,element:e.jsx(Ws,{})}),e.jsx(ue,{path:"configuration",element:e.jsx(Ks,{config:a})})]})}):null})};export{Js as Upload};
