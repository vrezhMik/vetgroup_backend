import{hR as v,r as a,hS as _}from"./strapi-KHJjuXVj.js";function F(t,r,e){if(e===void 0&&(e=Error),!t)throw new e(r)}var L=function(t){console.error(t)},N=function(t){console.warn(t)},w={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:L,onWarn:N};function x(t){F(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}v(v({},w),{textComponent:a.Fragment});var s=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=a.createContext(null)):a.createContext(null);s.Consumer;s.Provider;var P=s;function T(){var t=a.useContext(P);return x(t),t}var l;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(l||(l={}));var c;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(c||(c={}));function C(t){var r=function(e){var n=T(),o=e.value,f=e.children,u=_(e,["value","children"]),m=typeof o=="string"?new Date(o||0):o,d=t==="formatDate"?n.formatDateToParts(m,u):n.formatTimeToParts(m,u);return f(d)};return r.displayName=c[t],r}function i(t){var r=function(e){var n=T(),o=e.value,f=e.children,u=_(e,["value","children"]),m=n[t](o,u);if(typeof f=="function")return f(m);var d=n.textComponent||a.Fragment;return a.createElement(d,null,m)};return r.displayName=l[t],r}i("formatDate");i("formatTime");i("formatNumber");i("formatList");i("formatDisplayName");C("formatDate");C("formatTime");export{T as u};
