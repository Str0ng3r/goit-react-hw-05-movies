"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[152],{152:function(t,e,c){c.r(e);var n=c(439),a=c(791),i=c(689),o=c(230),r=c(184);e.default=function(){var t=(0,i.UO)().productId,e=(0,a.useState)(null),c=(0,n.Z)(e,2),s=c[0],h=c[1];return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY0ODYxMTMxZjhiODMzOGRmYjRjNmE3YTU3MDAwMiIsInN1YiI6IjY0MzU1ODIyMDZmOTg0MDBmMWYyZWYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFiW-EEhPOTe-cZe4KpnRCYXBLY2gKFFlZExKvFtMUo"}}).then((function(t){return t.json()})).then((function(t){return t.cast.length>0?h(t.cast):h(null)})).catch((function(t){return console.error(t)}))}),[t]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Actors Film"}),(0,r.jsx)("ul",{className:o.Z.ulDefault,children:s?s.map((function(t){return(0,r.jsxs)("li",{className:o.Z.liNonStyle,children:[t.profile_path?(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"actor-img",className:o.Z.imgActor}):(0,r.jsx)("img",{src:"data:image/png;base64,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",alt:"actor-none-img"}),(0,r.jsxs)("p",{className:o.Z.pActor,children:[t.name," ",(0,r.jsx)("span",{className:o.Z.span,children:t.character})]})]},t.id)})):(0,r.jsx)("h1",{children:"Not have actors"})})]})}}}]);
//# sourceMappingURL=152.c6c7f77b.chunk.js.map