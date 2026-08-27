import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as c}from"./index.D9mrT8mP.js";import{readWatchlist as j}from"./WatchStar.DnEkdXIF.js";const u="sejm-watchlist",i="sejm-watchlist-change";function _({mps:p,stats:d,clubColors:x}){const[m,o]=c.useState([]),[b,g]=c.useState(!1);c.useEffect(()=>{o(j()),g(!0);const t=()=>o(j());return window.addEventListener(i,t),window.addEventListener("storage",t),()=>{window.removeEventListener(i,t),window.removeEventListener("storage",t)}},[]);const f=new Map(p.map(t=>[t.id,t])),n=m.map(t=>f.get(t)).filter(Boolean);function v(t){const s=m.filter(a=>a!==t);o(s);try{localStorage.setItem(u,JSON.stringify(s)),window.dispatchEvent(new CustomEvent(i,{detail:s}))}catch{}}function w(){if(confirm("Wyczyścić całą listę obserwowanych?")){o([]);try{localStorage.setItem(u,JSON.stringify([])),window.dispatchEvent(new CustomEvent(i,{detail:[]}))}catch{}}}function y(){const t=["Poseł,Klub,Okręg,Frekwencja,Lojalność,Profesja"];for(const l of n){const h=d[String(l.id)];t.push([`"${l.full_name}"`,l.club,`"${l.district_name||""}"`,h?.attendance_pct??"",h?.loyalty_pct??"",`"${l.profession||""}"`].join(","))}const s=new Blob([t.join(`
`)],{type:"text/csv;charset=utf-8"}),a=URL.createObjectURL(s),r=document.createElement("a");r.href=a,r.download="moja-lista-poslow.csv",r.click(),URL.revokeObjectURL(a)}return b?n.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("h3",{children:"Lista jest pusta"}),e.jsxs("p",{className:"muted",children:["Dodaj posłów do obserwacji klikając ikonę ",e.jsx("strong",{children:"★"})," przy ich nazwiskach w ",e.jsx("a",{href:"/sejm/poslowie",children:"tabeli posłów"}),", na ich profilach albo w ",e.jsx("a",{href:"/sejm/temat",children:"Topic Scan"}),"."]}),e.jsx("p",{className:"muted small",children:"Lista jest zapisana lokalnie w przeglądarce — żaden serwer nie wie, kogo obserwujesz."}),e.jsx("style",{children:`
          .empty-state {
            text-align: center;
            padding: var(--gap-2xl) var(--gap-lg);
            background: var(--bg-muted);
            border: 1px dashed var(--border);
          }
          .empty-state h3 { font-size: var(--fs-xl); }
        `})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"wl-toolbar",children:[e.jsxs("span",{className:"mono small muted",children:[n.length," ",n.length===1?"osoba":n.length<5?"osoby":"osób"," na liście"]}),e.jsxs("div",{className:"wl-actions",children:[e.jsx("button",{onClick:y,className:"btn-mini",children:"⤓ Eksport CSV"}),e.jsx("button",{onClick:w,className:"btn-mini btn-danger",children:"⨯ Wyczyść listę"})]})]}),e.jsxs("table",{className:"data wl-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Poseł"}),e.jsx("th",{children:"Klub"}),e.jsx("th",{children:"Okręg"}),e.jsx("th",{className:"num",children:"Frekwencja"}),e.jsx("th",{className:"num",children:"Lojalność"}),e.jsx("th",{children:"Profesja"})]})}),e.jsx("tbody",{children:n.map(t=>{const s=d[String(t.id)];(t.first_name[0]||"")+(t.last_name[0]||"");const a=x[t.club]||"#888";return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("button",{onClick:()=>v(t.id),className:"remove-btn","aria-label":"Usuń z listy",title:"Usuń z listy",children:"★"})}),e.jsx("td",{children:e.jsxs("a",{href:`/sejm/poslowie/${t.id}`,className:"mp-link",children:[e.jsx("img",{src:`/sejm/photos/${t.id}.jpeg`,alt:"",width:28,height:28,style:{borderRadius:"50%",objectFit:"cover",marginRight:8,verticalAlign:"middle",background:a},onError:r=>{r.target.style.display="none"}}),t.full_name]})}),e.jsxs("td",{children:[e.jsx("span",{className:"club-dot",style:{background:a}}),e.jsx("span",{className:"mono small",children:t.club})]}),e.jsx("td",{className:"muted small",children:t.district_name||"—"}),e.jsx("td",{className:"num mono tabular small",children:s?.attendance_pct!=null?`${s.attendance_pct.toFixed(0)}%`:"—"}),e.jsx("td",{className:"num mono tabular small",children:s?.loyalty_pct!=null?`${s.loyalty_pct.toFixed(0)}%`:"—"}),e.jsx("td",{className:"muted small",children:t.profession||"—"})]},t.id)})})]}),e.jsx("style",{children:`
        .wl-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--gap-sm);
          padding: 0 var(--gap-sm);
        }
        .wl-actions { display: flex; gap: 8px; }
        .btn-mini {
          padding: 6px 12px;
          border: 1px solid var(--border-strong);
          background: var(--bg-elev);
          color: var(--fg);
          font-family: var(--font-mono);
          font-size: var(--fs-xs);
          cursor: pointer;
          transition: all var(--t-fast) var(--ease);
        }
        .btn-mini:hover { background: var(--fg); color: var(--bg-elev); }
        .btn-mini.btn-danger:hover { background: var(--accent); border-color: var(--accent); color: white; }
        .remove-btn {
          background: transparent;
          border: none;
          color: var(--accent);
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          line-height: 1;
          transition: transform var(--t-fast) var(--ease);
        }
        .remove-btn:hover { transform: scale(1.18); }
        .mp-link { display: inline-flex; align-items: center; }
      `})]}):e.jsx("p",{className:"muted",children:"Wczytuję listę…"})}export{_ as default};
