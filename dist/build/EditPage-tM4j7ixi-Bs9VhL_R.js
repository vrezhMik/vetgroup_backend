import{h as U,u as v,aJ as _,r as D,bo as V,k as q,bp as H,bq as Q,bu as G,bs as $,j as e,b8 as z,P as b,ba as J,N as W,t as X,L as P,bt as K,F as p,S as w,_ as Y,B as u,aM as Z,E as S,H as ee,a$ as L,T as I,Q as j,U as l,X as se,am as re}from"./strapi-BVlQgZ46.js";import{u as te}from"./useAdminRoles-DHmyH8OJ-CtCtBq-T.js";import{P as ie}from"./Permissions-CqkJcZdu-hgYc6_GG.js";import"./groupBy-CTOy_Jup.js";import"./_baseEach-ByxndvGI.js";const ae=({disabled:i,role:s,values:h,errors:r,onChange:n,onBlur:m})=>{const{formatMessage:t}=v();return e.jsx(u,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(p,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(p,{justifyContent:"space-between",children:[e.jsxs(u,{children:[e.jsx(u,{children:e.jsx(I,{fontWeight:"bold",children:s?s.name:t({id:"global.details",defaultMessage:"Details"})})}),e.jsx(u,{children:e.jsx(I,{textColor:"neutral500",variant:"pi",children:s?s.description:t({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),e.jsx(w,{disabled:!0,variant:"secondary",children:t({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:s.usersCount})})]}),e.jsxs(j.Root,{gap:4,children:[e.jsx(j.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(l.Root,{name:"name",error:r.name&&t({id:r.name}),required:!0,children:[e.jsx(l.Label,{children:t({id:"global.name",defaultMessage:"Name"})}),e.jsx(se,{disabled:i,onChange:n,onBlur:m,value:h.name||""}),e.jsx(l.Error,{})]})}),e.jsx(j.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(l.Root,{name:"description",error:r.description&&t({id:r.description}),children:[e.jsx(l.Label,{children:t({id:"global.description",defaultMessage:"Description"})}),e.jsx(re,{disabled:i,onChange:n,onBlur:m,value:h.description}),e.jsx(l.Error,{})]})})]})]})})},oe=X().shape({name:S().required(ee.required.id),description:S().optional()}),ne=()=>{const{toggleNotification:i}=U(),{formatMessage:s}=v(),r=_("/settings/roles/:id")?.params.id,n=D.useRef(null),{trackUsage:m}=V(),{_unstableFormatAPIError:t,_unstableFormatValidationErrors:R}=q(),{isLoading:A,data:E}=H({role:r??""}),{roles:T,isLoading:y,refetch:C}=te({id:r},{refetchOnMountOrArgChange:!0}),d=T[0]??{},{data:F,isLoading:k}=Q({id:r},{skip:!r,refetchOnMountOrArgChange:!0}),[B]=G(),[N]=$();if(!r)return e.jsx(z,{to:"/settings/roles"});const O=async(f,g)=>{try{const{permissionsToSend:c,didUpdateConditions:x}=n.current?.getPermissions()??{},a=await B({id:r,...f});if("error"in a){L(a.error)&&a.error.name==="ValidationError"?g.setErrors(R(a.error)):i({type:"danger",message:t(a.error)});return}if(d.code!=="strapi-super-admin"&&c){const o=await N({id:a.data.id,permissions:c});if("error"in o){L(o.error)&&o.error.name==="ValidationError"?g.setErrors(R(o.error)):i({type:"danger",message:t(o.error)});return}x&&m("didUpdateConditions")}n.current?.setFormAfterSubmit(),await C(),i({type:"success",message:s({id:"notification.success.saved"})})}catch{i({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}},M=!y&&d.code==="strapi-super-admin";return A||y||k||!E?e.jsx(b.Loading,{}):e.jsxs(J,{children:[e.jsx(b.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(W,{enableReinitialize:!0,initialValues:{name:d.name??"",description:d.description??""},onSubmit:O,validationSchema:oe,validateOnChange:!1,children:({handleSubmit:f,values:g,errors:c,handleChange:x,handleBlur:a,isSubmitting:o})=>e.jsxs("form",{onSubmit:f,children:[e.jsx(P.Header,{primaryAction:e.jsx(p,{gap:2,children:e.jsx(w,{type:"submit",startIcon:e.jsx(Y,{}),disabled:d.code==="strapi-super-admin",loading:o,children:s({id:"global.save",defaultMessage:"Save"})})}),title:s({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.jsx(K,{fallback:"../roles"})}),e.jsx(P.Content,{children:e.jsxs(p,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(ae,{disabled:M,errors:c,values:g,onChange:x,onBlur:a,role:d}),e.jsx(u,{shadow:"filterShadow",hasRadius:!0,children:e.jsx(ie,{isFormDisabled:M,permissions:F,ref:n,layout:E})})]})})]})})]})},ge=()=>{const i=Z(s=>s.admin_app.permissions.settings?.roles.update);return e.jsx(b.Protect,{permissions:i,children:e.jsx(ne,{})})};export{ne as EditPage,ge as ProtectedEditPage};
