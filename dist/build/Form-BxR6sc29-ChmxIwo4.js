import{u as z,r as B,ax as X,j as e,L as w,ba as Z,$ as W,F as y,T as S,eR as c,Q as x,a0 as V,fs as U,b5 as ee,c$ as D,bR as $,S as N,bt as te,fb as G,B as ne,f7 as E,be as ae,aU as Q,ac as O,M as T,fc as se,I as A,C as ie,bQ as oe,b as re,a6 as q,er as le,d as Y,h as de,fr as ce,t as me,c0 as pe,G as ge,E as H}from"./strapi-BZIRzwg1.js";import{u as ue,I as he}from"./useDragAndDrop-DJ6jqvZN-Hza2D8X4.js";import{C as fe}from"./ComponentIcon-u4bIXTFY-CG-zKPA8.js";import{F as ye}from"./FieldTypeIcon-CMlNO8PE-tdjxCAqc.js";import{g as be}from"./getEmptyImage-CjqolaH3.js";const je=me().shape({label:H().required().nullable(),description:H(),editable:ge(),size:pe().required()}),xe=({attribute:t,name:n,onClose:i})=>{const{formatMessage:a}=z(),{toggleNotification:o}=de(),{value:l,onChange:f}=Q(n),{data:b}=ce(void 0,{selectFromResult:d=>{if(t?.type!=="relation"||!d.data)return{data:[]};if("targetModel"in t&&typeof t.targetModel=="string"){const m=d.data.contentTypes.find(h=>h.uid===t.targetModel);if(m)return{data:Object.entries(m.attributes).reduce((h,[_,F])=>(U.includes(F.type)||h.push({label:_,value:_}),h),[])}}return{data:[]}},skip:t?.type!=="relation"});return!l||l.name===k||!t?(console.error("You've opened a field to edit without it being part of the form, this is likely a bug with Strapi. Please open an issue."),o({message:a({id:"content-manager.containers.edit-settings.modal-form.error",defaultMessage:"An error occurred while trying to open the form."}),type:"danger"}),null):e.jsx(T.Content,{children:e.jsxs(W,{method:"PUT",initialValues:l,validationSchema:je,onSubmit:d=>{f(n,d),i()},children:[e.jsx(T.Header,{children:e.jsxs(y,{gap:3,children:[e.jsx(ye,{type:t.type}),e.jsx(T.Title,{children:a({id:"content-manager.containers.edit-settings.modal-form.label",defaultMessage:"Edit {fieldName}"},{fieldName:G(l.name)})})]})}),e.jsx(T.Body,{children:e.jsx(x.Root,{gap:4,children:[{name:"label",label:a({id:c("containers.edit-settings.modal-form.label"),defaultMessage:"Label"}),size:6,type:"string"},{name:"description",label:a({id:c("containers.edit-settings.modal-form.description"),defaultMessage:"Description"}),size:6,type:"string"},{name:"placeholder",label:a({id:c("containers.edit-settings.modal-form.placeholder"),defaultMessage:"Placeholder"}),size:6,type:"string"},{name:"editable",label:a({id:c("containers.edit-settings.modal-form.editable"),defaultMessage:"Editable"}),size:6,type:"boolean"},{name:"mainField",label:a({id:c("containers.edit-settings.modal-form.mainField"),defaultMessage:"Entry title"}),hint:a({id:c("containers.SettingPage.edit-settings.modal-form.mainField.hint"),defaultMessage:"Set the displayed field"}),size:6,options:b,type:"enumeration"},{name:"size",label:a({id:c("containers.ListSettingsView.modal-form.size"),defaultMessage:"Size"}),size:6,options:[{value:"4",label:"33%"},{value:"6",label:"50%"},{value:"8",label:"66%"},{value:"12",label:"100%"}],type:"enumeration"}].filter(_e(t.type)).map(({size:d,...m})=>e.jsx(x.Item,{col:d,direction:"column",alignItems:"stretch",children:e.jsx(V,{...m})},m.name))})}),e.jsxs(T.Footer,{children:[e.jsx(T.Close,{children:e.jsx(N,{variant:"tertiary",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),e.jsx(N,{type:"submit",children:a({id:"global.finish",defaultMessage:"Finish"})})]})]})})},_e=t=>n=>{switch(t){case"blocks":case"richtext":return n.name!=="size"&&n.name!=="mainField";case"boolean":case"media":return n.name!=="placeholder"&&n.name!=="mainField";case"component":case"dynamiczone":return n.name==="label"||n.name==="editable";case"json":return n.name!=="placeholder"&&n.name!=="mainField"&&n.name!=="size";case"relation":return!0;default:return n.name!=="mainField"}},Fe=({attributes:t,fieldSizes:n,components:i,metadatas:a={}})=>{const{formatMessage:o}=z(),l=$("Fields",s=>s.values.layout??[]),f=$("Fields",s=>s.onChange),b=$("Fields",s=>s.addFieldRow),d=$("Fields",s=>s.removeFieldRow),m=l.map(s=>s.children.map(g=>g.name)).flat(),h=Object.entries(a).reduce((s,g)=>{const[j,{visible:M,...p}]=g;if(!m.includes(j)&&M===!0){const r=t[j]?.type,v=r?n[r]:12;s.push({...p,label:p.label??j,name:j,size:v})}return s},[]),_=([s,g],[j,M])=>{const p=structuredClone(l),[r]=p[j].children.splice(M,1);if(!r||r.name===k)return;const v=p[s].children,[I]=K(v,1,M,g);if(v.splice(g,0,{...r,__temp_key__:I}),p[s].children.reduce((u,C)=>u+C.size,0)>12){const u=Me(p[s].children.filter(R=>R.name!==k)),C=K(p,u.length,j,s);p.splice(s,1,...u.map((R,L)=>({__temp_key__:C[L],children:R})))}const J=p.map(u=>({...u,children:u.children.filter(C=>C.name!==k)})).filter(u=>u.children.length>0).map(u=>{const C=u.children.reduce((R,L)=>R+L.size,0);if(C<12){const[R]=D(u.children.at(-1)?.__temp_key__,void 0,1);return{...u,children:[...u.children,{name:k,size:12-C,__temp_key__:R}]}}return u});f("layout",J)},F=(s,g)=>()=>{l[s].children.length===1?d("layout",s):f(`layout.${s}.children`,[...l[s].children.slice(0,g),...l[s].children.slice(g+1)])},P=s=>()=>{b("layout",{children:[s]})};return e.jsxs(y,{paddingTop:6,direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(y,{alignItems:"flex-start",direction:"column",justifyContent:"space-between",children:[e.jsx(S,{fontWeight:"bold",children:o({id:c("containers.list.displayedFields"),defaultMessage:"Displayed fields"})}),e.jsx(S,{variant:"pi",textColor:"neutral600",children:o({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})})]}),e.jsx(ne,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300",children:e.jsxs(y,{direction:"column",alignItems:"stretch",gap:2,children:[l.map((s,g)=>e.jsx(x.Root,{gap:2,children:s.children.map(({size:j,...M},p)=>e.jsx(x.Item,{col:j,direction:"column",alignItems:"stretch",children:e.jsx(ve,{attribute:t[M.name],components:i,index:[g,p],name:`layout.${g}.children.${p}`,onMoveField:_,onRemoveField:F(g,p)})},M.name))},s.__temp_key__)),e.jsxs(E.Root,{children:[e.jsx(E.Trigger,{startIcon:e.jsx(ae,{}),endIcon:null,disabled:h.length===0,fullWidth:!0,variant:"secondary",children:o({id:c("containers.SettingPage.add.field"),defaultMessage:"Insert another field"})}),e.jsx(E.Content,{children:h.map(s=>e.jsx(E.Item,{onSelect:P(s),children:s.label},s.name))})]})]})})]})},K=(t,n,i,a)=>{const o=i>a?t[a-1]?.__temp_key__:t[a]?.__temp_key__,l=i>a?t[a]?.__temp_key__:t[a+1]?.__temp_key__;return D(o,l,n)},Me=t=>{const n=[];let i=[];return t.reduce((a,o)=>a+o.size>12?(n.push(i),i=[o],o.size):(i.push(o),a+o.size),0),i.length>0&&n.push(i),n},k="_TEMP_",ve=({attribute:t,components:n,name:i,index:a,onMoveField:o,onRemoveField:l})=>{const[f,b]=B.useState(!1),{formatMessage:d}=z(),{value:m}=Q(i),[{isDragging:h},_,F,P,s]=ue(!0,{dropSensitivity:"immediate",type:he.EDIT_FIELD,item:{index:a,label:m?.label,name:i},index:a,onMoveItem:o});B.useEffect(()=>{s(be(),{captureDraggingState:!1})},[s]);const g=O(P,_),j=r=>{r.preventDefault(),r.stopPropagation(),l(r)},M=r=>{r.preventDefault(),r.stopPropagation(),b(!0)},p=O(F,_);return m?m.name===k?e.jsx(y,{tag:"span",height:"100%",style:{opacity:0},ref:p}):e.jsxs(T.Root,{open:f,onOpenChange:b,children:[e.jsxs(y,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,style:{opacity:h?.5:1},ref:F,gap:3,cursor:"pointer",onClick:()=>{b(!0)},children:[e.jsx(Ce,{tag:"span",withTooltip:!1,label:d({id:c("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:m.label}),onClick:r=>r.stopPropagation(),ref:g,children:e.jsx(se,{})}),e.jsxs(y,{direction:"column",alignItems:"flex-start",grow:1,overflow:"hidden",children:[e.jsxs(y,{gap:3,justifyContent:"space-between",width:"100%",children:[e.jsx(S,{ellipsis:!0,fontWeight:"bold",children:m.label}),e.jsxs(y,{children:[e.jsx(A,{type:"button",variant:"ghost",background:"transparent",onClick:M,withTooltip:!1,label:d({id:c("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:m.label}),children:e.jsx(ie,{})}),e.jsx(A,{type:"button",variant:"ghost",onClick:j,background:"transparent",withTooltip:!1,label:d({id:c("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:m.label}),children:e.jsx(oe,{})})]})]}),t?.type==="component"?e.jsxs(y,{paddingTop:3,paddingRight:3,paddingBottom:3,paddingLeft:0,alignItems:"flex-start",direction:"column",gap:2,width:"100%",children:[e.jsx(x.Root,{gap:4,width:"100%",children:n[t.component].layout.map(r=>r.map(({size:v,...I})=>e.jsx(x.Item,{col:v,direction:"column",alignItems:"stretch",children:e.jsx(y,{alignItems:"center",background:"neutral0",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,hasRadius:!0,borderColor:"neutral200",children:e.jsx(S,{textColor:"neutral800",children:I.name})})},I.name)))}),e.jsx(re,{onClick:r=>r.stopPropagation(),startIcon:e.jsx(le,{}),tag:q,to:`../components/${t.component}/configurations/edit`,children:d({id:c("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"})})]}):null,t?.type==="dynamiczone"?e.jsx(y,{paddingTop:3,paddingRight:3,paddingBottom:3,paddingLeft:0,alignItems:"flex-start",gap:2,width:"100%",children:t?.components.map(r=>e.jsxs(ke,{onClick:v=>v.stopPropagation(),to:`../components/${r}/configurations/edit`,children:[e.jsx(fe,{icon:n[r].settings.icon}),e.jsx(S,{fontSize:1,textColor:"neutral600",fontWeight:"bold",children:n[r].settings.displayName})]},r))}):null]})]}),m.name!==k&&e.jsx(xe,{attribute:t,name:i,onClose:()=>b(!1)})]}):null},Ce=Y(A)`
  height: unset;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  border-radius: 0px;
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`,ke=Y(q)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.spaces[1]};
  padding: ${t=>t.theme.spaces[2]};
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral0};
  width: 14rem;
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:t})=>`
      background-color: ${t.colors.primary100};
      border-color: ${t.colors.primary200};

      ${S} {
          color: ${t.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,we=({attributes:t,fieldSizes:n,layout:i,onSubmit:a})=>{const{components:o,settings:l,layout:f,metadatas:b}=i,{formatMessage:d}=z(),m=B.useMemo(()=>({layout:X(Se,Re,Te,$e,ze)(f),settings:l}),[f,l]);return e.jsx(w.Root,{children:e.jsx(Z,{children:e.jsxs(W,{initialValues:m,onSubmit:a,method:"PUT",children:[e.jsx(Ie,{name:l.displayName??""}),e.jsx(w.Content,{children:e.jsxs(y,{alignItems:"stretch",background:"neutral0",direction:"column",gap:6,hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(S,{variant:"delta",tag:"h2",children:d({id:c("containers.SettingPage.settings"),defaultMessage:"Settings"})}),e.jsxs(x.Root,{children:[e.jsx(x.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(V,{type:"enumeration",label:d({id:c("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:d({id:c("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),name:"settings.mainField",options:Object.entries(t).reduce((h,[_,F])=>(F&&(U.includes(F.type)||h.push({label:_,value:_})),h),[])})}),e.jsx(x.Item,{paddingTop:6,paddingBottom:6,col:12,s:12,direction:"column",alignItems:"stretch",children:e.jsx(ee,{})}),e.jsx(x.Item,{col:12,s:12,direction:"column",alignItems:"stretch",children:e.jsx(S,{variant:"delta",tag:"h3",children:d({id:c("containers.SettingPage.view"),defaultMessage:"View"})})}),e.jsx(x.Item,{col:12,s:12,direction:"column",alignItems:"stretch",children:e.jsx(Fe,{attributes:t,components:o,fieldSizes:n,metadatas:b})})]})]})})]})})})},Se=t=>t.flat(1),Re=t=>t.map(n=>n.map(i=>({...i,mainField:i.mainField?.name}))),Te=t=>t.map(n=>n.map(({label:i,disabled:a,hint:o,placeholder:l,size:f,name:b,mainField:d})=>({label:i,editable:!a,description:o,mainField:d,placeholder:l,size:f,name:b,__temp_key__:""}))),$e=t=>[...t.map(n=>{const i=n.reduce((a,o)=>a+o.size,0);return i<12?[...n,{name:k,size:12-i,__temp_key__:""}]:n})],ze=t=>{const n=D(void 0,void 0,t.length);return t.map((i,a)=>{const o=D(void 0,void 0,i.length);return{__temp_key__:n[a],children:i.map((l,f)=>({...l,__temp_key__:o[f]}))}})},Ie=({name:t})=>{const{formatMessage:n}=z(),i=$("Header",o=>o.modified),a=$("Header",o=>o.isSubmitting);return e.jsx(w.Header,{title:n({id:c("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:G(t)}),subtitle:n({id:c("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:e.jsx(te,{}),primaryAction:e.jsx(N,{disabled:!i,loading:a,type:"submit",children:n({id:"global.save",defaultMessage:"Save"})})})};export{we as C,k as T};
