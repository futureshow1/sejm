import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as o}from"./index.D9mrT8mP.js";import{readWatchlist as i}from"./WatchStar.DnEkdXIF.js";const s="sejm-watchlist-change";function d(){const[t,n]=o.useState(0);return o.useEffect(()=>{n(i().length);const e=()=>n(i().length);return window.addEventListener(s,e),window.addEventListener("storage",e),()=>{window.removeEventListener(s,e),window.removeEventListener("storage",e)}},[]),t===0?null:r.jsxs("span",{className:"wl-counter","aria-label":`${t} posłów na liście obserwowanych`,children:[t,r.jsx("style",{children:`
        .wl-counter {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          margin-left: 4px;
          background: var(--accent);
          color: white;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
        }
      `})]})}export{d as default};
