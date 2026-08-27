import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as h}from"./index.D9mrT8mP.js";const b="sejm-watchlist",d="sejm-watchlist-change";function l(){if(typeof window>"u")return[];try{const t=localStorage.getItem(b);if(!t)return[];const a=JSON.parse(t);return Array.isArray(a)?a.filter(s=>typeof s=="number"):[]}catch{return[]}}function p(t){try{localStorage.setItem(b,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(d,{detail:t}))}catch{}}function x({mpId:t,size:a="md",variant:s="icon",label:f}){const[e,c]=h.useState(!1);h.useEffect(()=>{c(l().includes(t));const n=o=>{const i=o.detail||l();c(i.includes(t))};return window.addEventListener(d,n),window.addEventListener("storage",n),()=>{window.removeEventListener(d,n),window.removeEventListener("storage",n)}},[t]);function u(n){n.preventDefault(),n.stopPropagation();const o=l(),i=o.includes(t)?o.filter(g=>g!==t):[...o,t];p(i),c(!e)}const w=a==="sm"?14:a==="lg"?22:18;return s==="button"?r.jsxs("button",{type:"button",className:`watch-btn ${e?"active":""}`,onClick:u,"aria-label":e?"Usuń z listy obserwowanych":"Dodaj do listy obserwowanych",title:e?"Obserwujesz":"Dodaj do obserwowanych",children:[r.jsx(v,{filled:e,size:w}),r.jsx("span",{children:f||(e?"Obserwujesz":"Obserwuj")}),r.jsx("style",{children:`
          .watch-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border: 1px solid var(--border-strong);
            background: var(--bg-elev);
            color: var(--fg);
            font-size: var(--fs-base);
            font-weight: 500;
            cursor: pointer;
            transition: all var(--t-fast) var(--ease);
          }
          .watch-btn:hover { background: var(--bg-muted); border-color: var(--fg); }
          .watch-btn.active {
            background: var(--accent);
            color: white;
            border-color: var(--accent);
          }
          .watch-btn.active:hover { background: var(--accent-deep); }
        `})]}):r.jsxs("button",{type:"button",className:`watch-icon ${e?"active":""}`,onClick:u,"aria-label":e?"Usuń z listy obserwowanych":"Dodaj do listy obserwowanych","aria-pressed":e,title:e?"Obserwujesz":"Dodaj do obserwowanych",children:[r.jsx(v,{filled:e,size:w}),r.jsx("style",{children:`
        .watch-icon {
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--fg-faint);
          padding: 4px;
          line-height: 0;
          transition: color var(--t-fast) var(--ease), transform var(--t-fast) var(--ease);
        }
        .watch-icon:hover { color: var(--accent); transform: scale(1.18); }
        .watch-icon.active { color: var(--accent); }
      `})]})}function v({filled:t,size:a}){return r.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinejoin:"round",style:{display:"block"},"aria-hidden":"true",children:r.jsx("path",{d:"M12 3.2 14.65 9 21 10 16.5 14.45 17.7 21 12 17.6 6.3 21 7.5 14.45 3 10 9.35 9 12 3.2Z"})})}export{x as default,l as readWatchlist};
