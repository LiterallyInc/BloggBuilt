(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3otS9",articleBox:"PostsListing-module--article-box--1duIQ",right:"PostsListing-module--right--1oF3Z",meta:"PostsListing-module--meta--9gOUv"}},ccoC:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),i=a("TJpk"),o=a.n(i),s=a("83Zx"),l=a("lPsB"),c=a("IpnI"),d=a.n(c);t.default=function(e){var t=e.data,a=e.pageContext;return r.a.createElement(s.a,null,r.a.createElement("main",null,r.a.createElement(o.a,{title:'Posts tagged as "'+a.tag+'" | '+d.a.siteTitle}),r.a.createElement(l.a,{postEdges:t.allMarkdownRemark.edges})))};var m="4207360317"},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("LZFG"),s=a.n(o);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return r.a.createElement("div",{className:s.a.articleList},a.map((function(e){return r.a.createElement(i.Link,{to:"gymnasiearbete/"+e.path,key:e.title},r.a.createElement("article",{className:s.a.articleBox},r.a.createElement("div",{className:s.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:s.a.meta},e.date," — ",r.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),r.a.createElement("p",null,e.excerpt))))})))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-ebc3d082c6f09c203b30.js.map