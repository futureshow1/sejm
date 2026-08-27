import{j as s}from"./jsx-runtime.u17CrQMm.js";import{r as i}from"./index.D9mrT8mP.js";const L=1100,W=720;function R(a,S,z=200){const x=new Map(a.map((c,k)=>[c.id,k]));for(const c of a)c.vx=0,c.vy=0;for(let c=0;c<z;c++){for(let o=0;o<a.length;o++){const f=a[o];for(let t=0;t<12;t++){const m=(o+Math.floor(Math.random()*(a.length-1))+1)%a.length,u=a[m],p=f.x-u.x,d=f.y-u.y,n=25/(p*p+d*d+.01);f.vx+=p*n,f.vy+=d*n}}for(const o of S){const f=x.get(o.s),t=x.get(o.t);if(f===void 0||t===void 0)continue;const m=a[f],u=a[t],p=u.x-m.x,d=u.y-m.y,g=Math.sqrt(p*p+d*d)+.01,h=.01*(g-80)*o.w;m.vx+=p/g*h,m.vy+=d/g*h,u.vx-=p/g*h,u.vy-=d/g*h}for(const o of a)o.vx-=o.x*.001,o.vy-=o.y*.001;for(const o of a)o.x+=o.vx*.95,o.y+=o.vy*.95,o.vx*=.7,o.vy*=.7}}function H({graph:a,clubColors:S,initialFocus:z=null,bridges:x=[]}){const[c,k]=i.useState(()=>a.nodes.map(e=>({...e}))),[o,f]=i.useState(null),[t,m]=i.useState(z),[u,p]=i.useState(""),[d,g]=i.useState(null),[n,h]=i.useState(null),O=i.useRef(null),I=["KO","PSL-TD","Polska2050","Lewica","Razem"],B=new Set(x),b=i.useMemo(()=>new Map(a.nodes.map(e=>[e.id,e])),[a.nodes]),j=i.useMemo(()=>t?a.edges.filter(e=>e.s===t||e.t===t):n==="coalition-cracks"?a.edges.filter(e=>{const r=b.get(e.s),l=b.get(e.t);if(!r||!l)return!1;const v=I.includes(r.club),y=I.includes(l.club);return v&&y&&r.club!==l.club}):n==="bridges"?a.edges.filter(e=>{const r=b.get(e.s),l=b.get(e.t);return r&&l&&r.club!==l.club}):a.edges,[a.edges,t,n,b]),E=i.useMemo(()=>{if(!t)return null;const e=new Set([t]);for(const r of a.edges)r.s===t&&e.add(r.t),r.t===t&&e.add(r.s);return e},[a.edges,t]),M=i.useMemo(()=>{if(n==="rebels-in-pis")return new Set(x.filter(e=>b.get(e)?.club==="PiS"));if(n==="rebels-in-ko")return new Set(x.filter(e=>b.get(e)?.club==="KO"));if(n==="bridges")return new Set(x);if(n==="coalition-cracks"){const e=new Set;for(const r of j)e.add(r.s),e.add(r.t);return e}return null},[n,x,b,j]);i.useEffect(()=>{const e=c.map(r=>({...r}));R(e,a.edges,250),k(e)},[]);const w=i.useMemo(()=>new Map(c.map(e=>[e.id,e])),[c]),C=i.useMemo(()=>{const e=u.trim().toLowerCase();return e?new Set(c.filter(r=>r.name.toLowerCase().includes(e)).map(r=>r.id)):null},[u,c]);function P(e){m(t===e.id?null:e.id)}function N(e){h(e),m(null),g(null)}return s.jsxs("div",{className:"allies-graph",children:[s.jsxs("div",{className:"scenarios",children:[s.jsx("span",{className:"sc-label mono tiny",children:"Scenariusze:"}),s.jsx("button",{onClick:()=>N(n==="bridges"?null:"bridges"),className:`sc-btn ${n==="bridges"?"active":""}`,children:"🌉 Mosty (sojusze między klubami)"}),s.jsx("button",{onClick:()=>N(n==="coalition-cracks"?null:"coalition-cracks"),className:`sc-btn ${n==="coalition-cracks"?"active":""}`,children:"🤝 Spójność koalicji rządzącej"}),s.jsx("button",{onClick:()=>N(n==="rebels-in-pis"?null:"rebels-in-pis"),className:`sc-btn ${n==="rebels-in-pis"?"active":""}`,children:"🔵 Buntownicy w PiS"}),s.jsx("button",{onClick:()=>N(n==="rebels-in-ko"?null:"rebels-in-ko"),className:`sc-btn ${n==="rebels-in-ko"?"active":""}`,children:"🟠 Buntownicy w KO"})]}),s.jsxs("div",{className:"controls",children:[s.jsx("input",{type:"search",placeholder:"Szukaj posła nazwiskiem...",value:u,onChange:e=>p(e.target.value)}),s.jsxs("select",{value:d??"",onChange:e=>g(e.target.value||null),children:[s.jsx("option",{value:"",children:"Wszystkie kluby"}),Array.from(new Set(c.map(e=>e.club))).sort().map(e=>s.jsx("option",{value:e,children:e},e))]}),t&&s.jsxs("button",{onClick:()=>m(null),className:"clear-focus",children:["⨯ ",w.get(t)?.name]}),n&&s.jsx("button",{onClick:()=>h(null),className:"clear-focus",children:"⨯ Wyczyść scenariusz"}),s.jsxs("span",{className:"hint mono tiny",children:[j.length," krawędzi widocznych · ",a.nodes.length," posłów"]})]}),s.jsxs("svg",{ref:O,viewBox:`-${L/2} -${W/2} ${L} ${W}`,role:"img","aria-label":"Mapa sojuszy",children:[s.jsx("g",{className:"edges",children:j.map((e,r)=>{const l=w.get(e.s),v=w.get(e.t);if(!l||!v)return null;const y=l.club!==v.club,$=t?.75:n==="bridges"||n==="coalition-cracks"?.55:Math.max(.05,(e.w-.85)*4);return s.jsx("line",{x1:l.x,y1:l.y,x2:v.x,y2:v.y,stroke:n==="bridges"||n==="coalition-cracks"?"var(--accent)":"var(--fg)",strokeWidth:t?1.2:y&&n?1:.5,opacity:$},r)})}),s.jsx("g",{className:"nodes",children:c.map(e=>{const r=t&&E&&!E.has(e.id)||d&&e.club!==d||C&&!C.has(e.id)||M&&!M.has(e.id),l=t===e.id||C?.has(e.id)||M?.has(e.id),v=B.has(e.id),y=t===e.id?11:l?7:5,$=S[e.club]||"#888";return s.jsxs("g",{onMouseEnter:()=>f(e),onMouseLeave:()=>f(null),onClick:()=>P(e),style:{cursor:"pointer"},children:[v&&!r&&s.jsx("circle",{cx:e.x,cy:e.y,r:y+3,fill:"none",stroke:"var(--accent)",strokeWidth:1,strokeDasharray:"2 2",opacity:.7}),s.jsx("circle",{cx:e.x,cy:e.y,r:y,fill:$,stroke:t===e.id?"var(--fg)":"white",strokeWidth:t===e.id?2:1,opacity:r?.1:1,style:{transition:"r 200ms, opacity 200ms"}})]},e.id)})})]}),s.jsx("div",{className:"info-panel",children:o?s.jsxs("div",{className:"info-card",children:[s.jsx("strong",{children:o.name}),s.jsx("span",{className:"muted small",children:o.club}),s.jsx("a",{href:`/sejm/poslowie/${o.id}`,className:"info-link",children:"→ profil"})]}):t?s.jsxs("div",{className:"info-card",children:[s.jsx("span",{className:"muted small",children:"Fokus na:"}),s.jsx("strong",{children:w.get(t)?.name}),s.jsxs("span",{className:"muted small",children:[focusedEdges.length," bezpośrednich sojuszy"]})]}):s.jsx("span",{className:"muted tiny",children:"Najedź by zobaczyć posła · kliknij by wyróżnić jego sojusze"})}),s.jsx("style",{children:`
        .allies-graph {
          background: var(--bg-elev);
          border: 1px solid var(--border);
          padding: var(--gap-md);
        }
        .scenarios {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 10px;
          flex-wrap: wrap;
          padding: 10px 12px;
          background: var(--bg-muted);
          border-left: 3px solid var(--accent);
        }
        .sc-label {
          color: var(--fg-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
          margin-right: 4px;
        }
        .sc-btn {
          padding: 6px 12px;
          border: 1px solid var(--border-strong);
          background: var(--bg-elev);
          color: var(--fg);
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--t-fast) var(--ease);
        }
        .sc-btn:hover { border-color: var(--accent); background: var(--accent-soft); }
        .sc-btn.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }
        .controls {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: var(--gap-sm);
          flex-wrap: wrap;
        }
        .controls input, .controls select, .controls button {
          padding: 6px 10px;
          border: 1px solid var(--border-strong);
          background: var(--bg);
          color: var(--fg);
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
        }
        .controls input { min-width: 200px; }
        .controls .clear-focus {
          color: var(--accent);
          background: var(--accent-soft);
          border-color: var(--accent);
          cursor: pointer;
        }
        .controls .hint {
          margin-left: auto;
          color: var(--fg-faint);
        }
        .allies-graph svg {
          width: 100%;
          height: auto;
          max-height: 720px;
          background: var(--bg);
          display: block;
        }
        .info-panel {
          margin-top: 12px;
          min-height: 24px;
        }
        .info-card {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px 14px;
          background: var(--bg-muted);
          border-left: 3px solid var(--accent);
        }
        .info-link { color: var(--accent); font-family: var(--font-mono); font-size: var(--fs-sm); }
      `})]})}export{H as default};
