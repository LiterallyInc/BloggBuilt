(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TJpk"),o=a.n(i),l=a("T/ZZ"),c=a.n(l),s=a("IpnI"),m=a.n(s);t.a=function(e){var t,a,n,i,l=e.postNode,s=e.postPath,p=e.postSEO;if(p){var u=l.frontmatter;t=u.title,a=u.description?u.description:l.excerpt,n=u.cover,i=c()(m.a.siteUrl,m.a.pathPrefix,s)}else t=m.a.siteTitle,a=m.a.siteDescription,n=m.a.siteLogo;n=c()(m.a.siteUrl,m.a.pathPrefix,n);var d=c()(m.a.siteUrl,m.a.pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return p&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:n},description:a}),r.a.createElement(o.a,null,r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{name:"image",content:n}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),r.a.createElement("meta",{property:"og:url",content:p?i:d}),p?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:a}),r.a.createElement("meta",{property:"og:image",content:n}),r.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:description",content:a}),r.a.createElement("meta",{name:"twitter:image",content:n}))}},LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3otS9",articleBox:"PostsListing-module--article-box--1duIQ",right:"PostsListing-module--right--1oF3Z",meta:"PostsListing-module--meta--9gOUv"}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("TJpk"),o=a.n(i),l=a("83Zx"),c=a("lPsB"),s=a("EYWl"),m=a("IpnI"),p=a.n(m);t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement("main",null,r.a.createElement(o.a,{title:p.a.siteTitle}),r.a.createElement(s.a,null),r.a.createElement(c.a,{postEdges:t.allMarkdownRemark.edges})))};var u="1698679700"},"T/ZZ":function(e,t,a){var n,r,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("LZFG"),l=a.n(o);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return r.a.createElement("div",{className:l.a.articleList},a.map((function(e){return r.a.createElement(i.Link,{to:"https://sajber.me/gymnasiearbete/"+e.path,key:e.title},r.a.createElement("article",{className:l.a.articleBox},r.a.createElement("div",{className:l.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:l.a.meta},e.date," — ",r.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),r.a.createElement("p",null,e.excerpt))))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-95e3e8ebbe27dd8b7ed7.js.map