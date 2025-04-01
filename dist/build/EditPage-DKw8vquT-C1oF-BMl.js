const __vite__fileDeps=["MagicLinkEE-BNB-I3Lc-COl5Tsiq.js","strapi-KHJjuXVj.js","App-Bugk7I3W-COJtagOC.css","SelectRoles-C04C6G8i-CG0VcvYL.js","useAdminRoles-DHmyH8OJ-COfGZMAX.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{at as B,as as C,W as z,a as D,bi as O,c as q,aw as T,e as F,bu as N,aB as V,r as H,j as e,k as c,bv as E,N as K,i as $,L as y,bg as G,y as Y,K as Q,H as p,x as h,o as P,G as l,O as W,aK as J,v as X,w as v,aL as Z,bl as ee}from"./strapi-KHJjuXVj.js";import{s as se}from"./selectors-BUDjU_0m-nMctu4pk.js";import{g as ae}from"./users-8N93LH7R-MOwOr-tf.js";import{S as te,M as re}from"./SelectRoles-C04C6G8i-CG0VcvYL.js";import{C as ie}from"./validation-B59Lo6xw-4sVo3LsW.js";import"./useAdminRoles-DHmyH8OJ-COfGZMAX.js";const oe=$().shape({...ie,isActive:X(),roles:J().min(1,{id:v.required.id,defaultMessage:"This field is required"}).required({id:v.required.id,defaultMessage:"This field is required"})}),L=["email","firstname","lastname","username","isActive","roles"],ne=()=>{const{formatMessage:s}=B(),x=C("/settings/users/:id")?.params?.id??"",b=z(),{toggleNotification:r}=D(),M=O(re,async()=>(await ee(()=>import("./MagicLinkEE-BNB-I3Lc-COl5Tsiq.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),{_unstableFormatAPIError:m,_unstableFormatValidationErrors:I}=q(),A=T(se),{isLoading:_,allowedActions:{canUpdate:u}}=F({read:A.settings?.users.read??[],update:A.settings?.users.update??[]}),[k]=N(),{data:R,error:i,isLoading:U}=V({id:x},{refetchOnMountOrArgChange:!0}),[o]=R?.users??[];if(H.useEffect(()=>{i&&(i.name==="UnauthorizedError"?(r({type:"info",message:s({id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"})}),b("/")):r({type:"danger",message:m(i)}))},[i,m,s,b,r]),U||!M||_)return e.jsx(c.Loading,{});const w={...E(o,L),roles:o.roles.map(({id:a})=>a),password:"",confirmPassword:""},S=async(a,n)=>{const{confirmPassword:j,...g}=a,t=await k({id:x,...g});"error"in t&&Z(t.error)?(t.error.name==="ValidationError"&&n.setErrors(I(t.error)),r({type:"danger",message:m(t.error)})):(r({type:"success",message:s({id:"notification.success.saved",defaultMessage:"Saved"})}),n.setValues({...E(a,L),password:"",confirmPassword:""}))};return e.jsxs(c.Main,{children:[e.jsx(c.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(K,{method:"PUT",onSubmit:S,initialValues:w,validationSchema:oe,children:({isSubmitting:a,modified:n})=>e.jsxs(e.Fragment,{children:[e.jsx(y.Header,{primaryAction:e.jsx(Y,{disabled:a||!u||!n,startIcon:e.jsx(Q,{}),loading:a,type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}),title:s({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:ae(w)}),navigationAction:e.jsx(G,{fallback:"../users"})}),e.jsxs(y.Content,{children:[o?.registrationToken&&e.jsx(p,{paddingBottom:6,children:e.jsx(M,{registrationToken:o.registrationToken})}),e.jsxs(h,{direction:"column",alignItems:"stretch",gap:7,children:[e.jsx(p,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(h,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(P,{variant:"delta",tag:"h2",children:s({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),e.jsx(l.Root,{gap:5,children:de.map(j=>j.map(({size:g,label:t,...d})=>e.jsx(l.Item,{col:g,direction:"column",alignItems:"stretch",children:e.jsx(W,{...d,disabled:!u,label:s(t),placeholder:"placeholder"in d?s(d.placeholder):void 0})},d.name)))})]})}),e.jsx(p,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(h,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(P,{variant:"delta",tag:"h2",children:s({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(l.Root,{gap:5,children:e.jsx(l.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(te,{disabled:!u})})})]})})]})]})]})})]})},de=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0},{label:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"string",size:6}],[{autoComplete:"new-password",label:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:6},{autoComplete:"new-password",label:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:6}],[{label:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"boolean",size:6}]],fe=()=>{const s=T(f=>f.admin_app.permissions.settings?.users.read);return e.jsx(c.Protect,{permissions:s,children:e.jsx(ne,{})})};export{ne as EditPage,fe as ProtectedEditPage};
