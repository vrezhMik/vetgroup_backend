import{gn as G}from"./strapi-BVlQgZ46.js";var A={exports:{}};const v="2.0.0",P=256,j=Number.MAX_SAFE_INTEGER||9007199254740991,y=16,V=P-6,H=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var d={MAX_LENGTH:P,MAX_SAFE_COMPONENT_LENGTH:y,MAX_SAFE_BUILD_LENGTH:V,MAX_SAFE_INTEGER:j,RELEASE_TYPES:H,SEMVER_SPEC_VERSION:v,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},O={};const k=typeof process=="object"&&O&&O.NODE_DEBUG&&/\bsemver\b/i.test(O.NODE_DEBUG)?(...i)=>console.error("SEMVER",...i):()=>{};var F=k;(function(i,e){const{MAX_SAFE_COMPONENT_LENGTH:E,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:a}=d,I=F;e=i.exports={};const X=e.re=[],C=e.safeRe=[],s=e.src=[],r=e.t={};let w=0;const $="[a-zA-Z0-9-]",U=[["\\s",1],["\\d",a],[$,n]],_=R=>{for(const[c,l]of U)R=R.split(`${c}*`).join(`${c}{0,${l}}`).split(`${c}+`).join(`${c}{1,${l}}`);return R},t=(R,c,l)=>{const b=_(c),h=w++;I(R,h,c),r[R]=h,s[h]=c,X[h]=new RegExp(c,l?"g":void 0),C[h]=new RegExp(b,l?"g":void 0)};t("NUMERICIDENTIFIER","0|[1-9]\\d*"),t("NUMERICIDENTIFIERLOOSE","\\d+"),t("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${$}*`),t("MAINVERSION",`(${s[r.NUMERICIDENTIFIER]})\\.(${s[r.NUMERICIDENTIFIER]})\\.(${s[r.NUMERICIDENTIFIER]})`),t("MAINVERSIONLOOSE",`(${s[r.NUMERICIDENTIFIERLOOSE]})\\.(${s[r.NUMERICIDENTIFIERLOOSE]})\\.(${s[r.NUMERICIDENTIFIERLOOSE]})`),t("PRERELEASEIDENTIFIER",`(?:${s[r.NUMERICIDENTIFIER]}|${s[r.NONNUMERICIDENTIFIER]})`),t("PRERELEASEIDENTIFIERLOOSE",`(?:${s[r.NUMERICIDENTIFIERLOOSE]}|${s[r.NONNUMERICIDENTIFIER]})`),t("PRERELEASE",`(?:-(${s[r.PRERELEASEIDENTIFIER]}(?:\\.${s[r.PRERELEASEIDENTIFIER]})*))`),t("PRERELEASELOOSE",`(?:-?(${s[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[r.PRERELEASEIDENTIFIERLOOSE]})*))`),t("BUILDIDENTIFIER",`${$}+`),t("BUILD",`(?:\\+(${s[r.BUILDIDENTIFIER]}(?:\\.${s[r.BUILDIDENTIFIER]})*))`),t("FULLPLAIN",`v?${s[r.MAINVERSION]}${s[r.PRERELEASE]}?${s[r.BUILD]}?`),t("FULL",`^${s[r.FULLPLAIN]}$`),t("LOOSEPLAIN",`[v=\\s]*${s[r.MAINVERSIONLOOSE]}${s[r.PRERELEASELOOSE]}?${s[r.BUILD]}?`),t("LOOSE",`^${s[r.LOOSEPLAIN]}$`),t("GTLT","((?:<|>)?=?)"),t("XRANGEIDENTIFIERLOOSE",`${s[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),t("XRANGEIDENTIFIER",`${s[r.NUMERICIDENTIFIER]}|x|X|\\*`),t("XRANGEPLAIN",`[v=\\s]*(${s[r.XRANGEIDENTIFIER]})(?:\\.(${s[r.XRANGEIDENTIFIER]})(?:\\.(${s[r.XRANGEIDENTIFIER]})(?:${s[r.PRERELEASE]})?${s[r.BUILD]}?)?)?`),t("XRANGEPLAINLOOSE",`[v=\\s]*(${s[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[r.XRANGEIDENTIFIERLOOSE]})(?:${s[r.PRERELEASELOOSE]})?${s[r.BUILD]}?)?)?`),t("XRANGE",`^${s[r.GTLT]}\\s*${s[r.XRANGEPLAIN]}$`),t("XRANGELOOSE",`^${s[r.GTLT]}\\s*${s[r.XRANGEPLAINLOOSE]}$`),t("COERCE",`(^|[^\\d])(\\d{1,${E}})(?:\\.(\\d{1,${E}}))?(?:\\.(\\d{1,${E}}))?(?:$|[^\\d])`),t("COERCERTL",s[r.COERCE],!0),t("LONETILDE","(?:~>?)"),t("TILDETRIM",`(\\s*)${s[r.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",t("TILDE",`^${s[r.LONETILDE]}${s[r.XRANGEPLAIN]}$`),t("TILDELOOSE",`^${s[r.LONETILDE]}${s[r.XRANGEPLAINLOOSE]}$`),t("LONECARET","(?:\\^)"),t("CARETTRIM",`(\\s*)${s[r.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",t("CARET",`^${s[r.LONECARET]}${s[r.XRANGEPLAIN]}$`),t("CARETLOOSE",`^${s[r.LONECARET]}${s[r.XRANGEPLAINLOOSE]}$`),t("COMPARATORLOOSE",`^${s[r.GTLT]}\\s*(${s[r.LOOSEPLAIN]})$|^$`),t("COMPARATOR",`^${s[r.GTLT]}\\s*(${s[r.FULLPLAIN]})$|^$`),t("COMPARATORTRIM",`(\\s*)${s[r.GTLT]}\\s*(${s[r.LOOSEPLAIN]}|${s[r.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",t("HYPHENRANGE",`^\\s*(${s[r.XRANGEPLAIN]})\\s+-\\s+(${s[r.XRANGEPLAIN]})\\s*$`),t("HYPHENRANGELOOSE",`^\\s*(${s[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[r.XRANGEPLAINLOOSE]})\\s*$`),t("STAR","(<|>)?=?\\s*\\*"),t("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),t("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(A,A.exports);var x=A.exports;const B=Object.freeze({loose:!0}),z=Object.freeze({}),Y=i=>i?typeof i!="object"?B:i:z;var Z=Y;const T=/^[0-9]+$/,M=(i,e)=>{const E=T.test(i),n=T.test(e);return E&&n&&(i=+i,e=+e),i===e?0:E&&!n?-1:n&&!E?1:i<e?-1:1},q=(i,e)=>M(e,i);var J={compareIdentifiers:M,rcompareIdentifiers:q};const p=F,{MAX_LENGTH:m,MAX_SAFE_INTEGER:L}=d,{safeRe:f,t:S}=x,K=Z,{compareIdentifiers:N}=J;let Q=class o{constructor(e,E){if(E=K(E),e instanceof o){if(e.loose===!!E.loose&&e.includePrerelease===!!E.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>m)throw new TypeError(`version is longer than ${m} characters`);p("SemVer",e,E),this.options=E,this.loose=!!E.loose,this.includePrerelease=!!E.includePrerelease;const n=e.trim().match(E.loose?f[S.LOOSE]:f[S.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>L||this.major<0)throw new TypeError("Invalid major version");if(this.minor>L||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>L||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){const I=+a;if(I>=0&&I<L)return I}return a}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(p("SemVer.compare",this.version,this.options,e),!(e instanceof o)){if(typeof e=="string"&&e===this.version)return 0;e=new o(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof o||(e=new o(e,this.options)),N(this.major,e.major)||N(this.minor,e.minor)||N(this.patch,e.patch)}comparePre(e){if(e instanceof o||(e=new o(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let E=0;do{const n=this.prerelease[E],a=e.prerelease[E];if(p("prerelease compare",E,n,a),n===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(n===void 0)return-1;if(n===a)continue;return N(n,a)}while(++E)}compareBuild(e){e instanceof o||(e=new o(e,this.options));let E=0;do{const n=this.build[E],a=e.build[E];if(p("prerelease compare",E,n,a),n===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(n===void 0)return-1;if(n===a)continue;return N(n,a)}while(++E)}inc(e,E,n){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",E,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",E,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",E,n),this.inc("pre",E,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",E,n),this.inc("pre",E,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const a=Number(n)?1:0;if(!E&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let I=this.prerelease.length;for(;--I>=0;)typeof this.prerelease[I]=="number"&&(this.prerelease[I]++,I=-2);if(I===-1){if(E===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(E){let I=[E,a];n===!1&&(I=[E]),N(this.prerelease[0],E)===0?isNaN(this.prerelease[1])&&(this.prerelease=I):this.prerelease=I}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var g=Q;const u=g,W=(i,e,E=!1)=>{if(i instanceof u)return i;try{return new u(i,e)}catch(n){if(!E)return null;throw n}};var ee=W;const se=ee,re=(i,e)=>{const E=se(i,e);return E?E.version:null};var Ee=re;const ce=G(Ee),D=g,te=(i,e,E)=>new D(i,E).compare(new D(e,E));var ne=te;const ie=ne,ae=(i,e,E)=>ie(i,e,E)<0;var Ie=ae;const Re=G(Ie);export{d as a,Z as b,ne as c,F as d,ce as e,Re as f,J as i,Ie as l,ee as p,x as r,g as s,Ee as v};
