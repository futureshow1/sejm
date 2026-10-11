import{j as s}from"./jsx-runtime.u17CrQMm.js";import{r as l}from"./index.D9mrT8mP.js";const W=1100,O=720;function A(i,S,z=200){const b=new Map(i.map((a,g)=>[a.id,g]));for(const a of i)a.vx=0,a.vy=0;for(let a=0;a<z;a++){for(let r=0;r<i.length;r++){const d=i[r];for(let h=0;h<12;h++){const n=(r+Math.floor(Math.random()*(i.length-1))+1)%i.length,f=i[n],u=d.x-f.x,p=d.y-f.y,k=25/(u*u+p*p+.01);d.vx+=u*k,d.vy+=p*k}}for(const r of S){const d=b.get(r.s),h=b.get(r.t);if(d===void 0||h===void 0)continue;const n=i[d],f=i[h],u=f.x-n.x,p=f.y-n.y,m=Math.sqrt(u*u+p*p)+.01,o=.01*(m-80)*r.w;n.vx+=u/m*o,n.vy+=p/m*o,f.vx-=u/m*o,f.vy-=p/m*o}for(const r of i)r.vx-=r.x*.001,r.vy-=r.y*.001;for(const r of i)r.x+=r.vx*.95,r.y+=r.vy*.95,r.vx*=.7,r.vy*=.7}}function K({packed:i,clubColors:S,initialFocus:z=null,bridges:b=[]}){const a=l.useMemo(()=>({nodes:i.n.map(([e,t,c,x,y])=>({id:e,name:t,club:c,x,y})),edges:i.e.map(([e,t,c])=>({s:e,t,w:c}))}),[i]),[g,r]=l.useState(()=>a.nodes.map(e=>({...e}))),[d,h]=l.useState(null),[n,f]=l.useState(z),[u,p]=l.useState(""),[m,k]=l.useState(null),[o,I]=l.useState(null),B=l.useRef(null),E=["KO","PSL-TD","Polska2050","Lewica","Razem"],P=new Set(b),v=l.useMemo(()=>new Map(a.nodes.map(e=>[e.id,e])),[a.nodes]),j=l.useMemo(()=>n?a.edges.filter(e=>e.s===n||e.t===n):o==="coalition-cracks"?a.edges.filter(e=>{const t=v.get(e.s),c=v.get(e.t);if(!t||!c)return!1;const x=E.includes(t.club),y=E.includes(c.club);return x&&y&&t.club!==c.club}):o==="bridges"?a.edges.filter(e=>{const t=v.get(e.s),c=v.get(e.t);return t&&c&&t.club!==c.club}):a.edges,[a.edges,n,o,v]),L=l.useMemo(()=>{if(!n)return null;const e=new Set([n]);for(const t of a.edges)t.s===n&&e.add(t.t),t.t===n&&e.add(t.s);return e},[a.edges,n]),M=l.useMemo(()=>{if(o==="rebels-in-pis")return new Set(b.filter(e=>v.get(e)?.club==="PiS"));if(o==="rebels-in-ko")return new Set(b.filter(e=>v.get(e)?.club==="KO"));if(o==="bridges")return new Set(b);if(o==="coalition-cracks"){const e=new Set;for(const t of j)e.add(t.s),e.add(t.t);return e}return null},[o,b,v,j]);l.useEffect(()=>{const e=g.map(t=>({...t}));A(e,a.edges,250),r(e)},[]);const w=l.useMemo(()=>new Map(g.map(e=>[e.id,e])),[g]),C=l.useMemo(()=>{const e=u.trim().toLowerCase();return e?new Set(g.filter(t=>t.name.toLowerCase().includes(e)).map(t=>t.id)):null},[u,g]);function R(e){f(n===e.id?null:e.id)}function N(e){I(e),f(null),k(null)}return s.jsxs("div",{className:"allies-graph",children:[s.jsxs("div",{className:"scenarios",children:[s.jsx("span",{className:"sc-label mono tiny",children:"Scenariusze:"}),s.jsx("button",{onClick:()=>N(o==="bridges"?null:"bridges"),className:`sc-btn ${o==="bridges"?"active":""}`,children:"🌉 Mosty (sojusze między klubami)"}),s.jsx("button",{onClick:()=>N(o==="coalition-cracks"?null:"coalition-cracks"),className:`sc-btn ${o==="coalition-cracks"?"active":""}`,children:"🤝 Spójność koalicji rządzącej"}),s.jsx("button",{onClick:()=>N(o==="rebels-in-pis"?null:"rebels-in-pis"),className:`sc-btn ${o==="rebels-in-pis"?"active":""}`,children:"🔵 Buntownicy w PiS"}),s.jsx("button",{onClick:()=>N(o==="rebels-in-ko"?null:"rebels-in-ko"),className:`sc-btn ${o==="rebels-in-ko"?"active":""}`,children:"🟠 Buntownicy w KO"})]}),s.jsxs("div",{className:"controls",children:[s.jsx("input",{type:"search",placeholder:"Szukaj posła nazwiskiem...",value:u,onChange:e=>p(e.target.value)}),s.jsxs("select",{value:m??"",onChange:e=>k(e.target.value||null),children:[s.jsx("option",{value:"",children:"Wszystkie kluby"}),Array.from(new Set(g.map(e=>e.club))).sort().map(e=>s.jsx("option",{value:e,children:e},e))]}),n&&s.jsxs("button",{onClick:()=>f(null),className:"clear-focus",children:["⨯ ",w.get(n)?.name]}),o&&s.jsx("button",{onClick:()=>I(null),className:"clear-focus",children:"⨯ Wyczyść scenariusz"}),s.jsxs("span",{className:"hint mono tiny",children:[j.length," krawędzi widocznych · ",a.nodes.length," posłów"]})]}),s.jsxs("svg",{ref:B,viewBox:`-${W/2} -${O/2} ${W} ${O}`,role:"img","aria-label":"Mapa sojuszy",children:[s.jsx("g",{className:"edges",children:j.map((e,t)=>{const c=w.get(e.s),x=w.get(e.t);if(!c||!x)return null;const y=c.club!==x.club,$=n?.75:o==="bridges"||o==="coalition-cracks"?.55:Math.max(.05,(e.w-.85)*4);return s.jsx("line",{x1:c.x,y1:c.y,x2:x.x,y2:x.y,stroke:o==="bridges"||o==="coalition-cracks"?"var(--accent)":"var(--fg)",strokeWidth:n?1.2:y&&o?1:.5,opacity:$},t)})}),s.jsx("g",{className:"nodes",children:g.map(e=>{const t=n&&L&&!L.has(e.id)||m&&e.club!==m||C&&!C.has(e.id)||M&&!M.has(e.id),c=n===e.id||C?.has(e.id)||M?.has(e.id),x=P.has(e.id),y=n===e.id?11:c?7:5,$=S[e.club]||"#888";return s.jsxs("g",{onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:()=>R(e),style:{cursor:"pointer"},children:[x&&!t&&s.jsx("circle",{cx:e.x,cy:e.y,r:y+3,fill:"none",stroke:"var(--accent)",strokeWidth:1,strokeDasharray:"2 2",opacity:.7}),s.jsx("circle",{cx:e.x,cy:e.y,r:y,fill:$,stroke:n===e.id?"var(--fg)":"white",strokeWidth:n===e.id?2:1,opacity:t?.1:1,style:{transition:"r 200ms, opacity 200ms"}})]},e.id)})})]}),s.jsx("div",{className:"info-panel",children:d?s.jsxs("div",{className:"info-card",children:[s.jsx("strong",{children:d.name}),s.jsx("span",{className:"muted small",children:d.club}),s.jsx("a",{href:`/sejm/poslowie/${d.id}`,className:"info-link",children:"→ profil"})]}):n?s.jsxs("div",{className:"info-card",children:[s.jsx("span",{className:"muted small",children:"Fokus na:"}),s.jsx("strong",{children:w.get(n)?.name}),s.jsxs("span",{className:"muted small",children:[focusedEdges.length," bezpośrednich sojuszy"]})]}):s.jsx("span",{className:"muted tiny",children:"Najedź by zobaczyć posła · kliknij by wyróżnić jego sojusze"})}),s.jsx("style",{children:`
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
      `})]})}export{K as default};
