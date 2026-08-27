import{j as o}from"./jsx-runtime.u17CrQMm.js";import{r as m}from"./index.D9mrT8mP.js";const u=11,w=110,k=320,N=760,M=380,_=N/2,S=M-18;function R(f,l){const c=new Map(l.map((e,n)=>[e,n])),b=[...f].sort((e,n)=>{const s=c.get(e.club)??99,t=c.get(n.club)??99;return s!==t?s-t:e.last_name.localeCompare(n.last_name,"pl")}),a=[];let h=0;for(let e=0;e<u;e++){const n=w+(k-w)*e/(u-1),s=Math.PI*n;a.push(s),h+=s}const d=b.length,p=a.map(e=>Math.round(e/h*d));let i=d-p.reduce((e,n)=>e+n,0);for(let e=0;i!==0;e=(e+1)%u)i>0?(p[e]++,i--):p[e]>0&&(p[e]--,i++);const v=[];let y=0;for(let e=0;e<u;e++){const n=w+(k-w)*e/(u-1),s=p[e];for(let t=0;t<s;t++){const x=s===1?.5:t/(s-1),g=Math.PI-(.05+(1-2*.05)*x)*Math.PI,I=_+n*Math.cos(g),z=S-n*Math.sin(g),j=b[y++];if(!j)break;v.push({mp:j,cx:I,cy:z,ring:e,ringIdx:t})}}return v}function D({mps:f,clubColors:l,clubOrder:c}){const b=m.useMemo(()=>R(f,c),[f,c]),[a,h]=m.useState(null),[d,p]=m.useState(null),[i,v]=m.useState(null),y=m.useRef(null),e=m.useMemo(()=>{const t=new Map;for(const r of f)t.set(r.club,(t.get(r.club)??0)+1);return t},[f]),n=m.useMemo(()=>c.filter(t=>e.has(t)),[c,e]);function s(t){const r=y.current?.getBoundingClientRect();r&&v({x:t.clientX-r.left,y:t.clientY-r.top})}return o.jsxs("div",{className:"hemicycle",ref:y,onMouseMove:s,children:[o.jsxs("svg",{viewBox:`0 0 ${N} ${M}`,role:"img","aria-label":"Mapa miejsc Sejmu",children:[o.jsx("defs",{children:o.jsx("filter",{id:"seat-shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:o.jsx("feDropShadow",{dx:"0",dy:"1",stdDeviation:"0.8",floodOpacity:"0.18"})})}),b.map((t,r)=>{const x=d&&t.mp.club!==d,g=a?.mp.id===t.mp.id;return o.jsx("a",{href:`/sejm/poslowie/${t.mp.id}`,onMouseEnter:()=>h(t),onMouseLeave:()=>h(null),children:o.jsx("circle",{cx:t.cx,cy:t.cy,r:g?8.2:6.6,fill:l[t.mp.club]||"#888",opacity:x?.12:1,stroke:g?"var(--accent)":"#fff",strokeWidth:g?1.8:1.1,filter:"url(#seat-shadow)",style:{cursor:"pointer",transition:"r 160ms cubic-bezier(0.2,0.8,0.3,1), opacity 160ms, stroke 160ms",animationDelay:`${r*1.2}ms`},className:"seat"})},t.mp.id)})]}),a&&i&&o.jsxs("div",{className:"floating-tt",style:{left:`${i.x}px`,top:`${i.y}px`},children:[o.jsxs("span",{className:"ftt-avatar",style:{background:l[a.mp.club]||"#888"},children:[o.jsx("img",{src:`/sejm/photos/${a.mp.id}.jpeg`,alt:"",width:48,height:48,onError:t=>{t.target.style.display="none"}}),o.jsx("span",{className:"ftt-initials","aria-hidden":"true",children:(a.mp.first_name[0]||"")+(a.mp.last_name[0]||"")})]}),o.jsxs("span",{className:"ftt-info",children:[o.jsx("strong",{children:a.mp.full_name}),o.jsxs("span",{className:"ftt-meta",children:[o.jsx("span",{className:"club-dot",style:{background:l[a.mp.club]}}),a.mp.club,a.mp.district_name&&` · ${a.mp.district_name}`]}),a.mp.profession&&o.jsx("span",{className:"ftt-prof",children:a.mp.profession}),o.jsx("span",{className:"ftt-action",children:"→ kliknij, aby zobaczyć profil"})]})]}),o.jsx("div",{className:"legend",children:n.map(t=>{const r=e.get(t)??0,x=d===t;return o.jsxs("button",{type:"button",className:`legend-item ${x?"active":""}`,onClick:()=>p(x?null:t),style:{"--club-color":l[t]},children:[o.jsx("span",{className:"dot",style:{background:l[t]}}),o.jsx("span",{className:"code",children:t}),o.jsx("span",{className:"count tabular",children:r})]},t)})}),!a&&o.jsx("p",{className:"hint muted tiny",children:"Najedź na miejsce, by zobaczyć posła • kliknij — pełny profil"}),o.jsx("style",{children:`
        .hemicycle {
          position: relative;
        }
        .hemicycle svg {
          width: 100%; height: auto; max-width: 820px; display:block; margin: 0 auto;
        }
        .hemicycle .hint {
          text-align: center;
          margin-top: 8px;
          color: var(--fg-muted);
        }

        .floating-tt {
          position: absolute;
          pointer-events: none;
          z-index: 50;
          transform: translate(20px, -110%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px 10px 10px;
          background: var(--bg-elev);
          border: 1px solid var(--fg);
          box-shadow: var(--shadow-lg);
          min-width: 240px;
          max-width: 320px;
          animation: ttIn 120ms cubic-bezier(0.2, 0.8, 0.3, 1);
        }
        @keyframes ttIn {
          from { opacity: 0; transform: translate(20px, -100%); }
          to   { opacity: 1; transform: translate(20px, -110%); }
        }
        .floating-tt::after {
          content: "";
          position: absolute;
          left: 24px; bottom: -6px;
          width: 10px; height: 10px;
          background: var(--bg-elev);
          border-right: 1px solid var(--fg);
          border-bottom: 1px solid var(--fg);
          transform: rotate(45deg);
        }

        .ftt-avatar {
          position: relative;
          width: 48px; height: 48px;
          border-radius: 50%;
          flex-shrink: 0;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 2px var(--bg-elev), 0 1px 3px rgba(0,0,0,0.18);
        }
        .ftt-avatar img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ftt-initials {
          color: white;
          font-family: var(--font-mono);
          font-size: var(--fs-sm);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ftt-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          line-height: 1.3;
        }
        .ftt-info strong {
          font-size: var(--fs-md);
          color: var(--fg-strong);
          font-weight: 600;
        }
        .ftt-meta {
          font-size: var(--fs-xs);
          font-family: var(--font-mono);
          color: var(--fg-muted);
        }
        .ftt-prof {
          font-size: var(--fs-xs);
          color: var(--fg-muted);
          font-style: italic;
        }
        .ftt-action {
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent);
          margin-top: 2px;
        }
        .seat { animation: seatIn 600ms cubic-bezier(0.2, 0.8, 0.3, 1) backwards; transform-origin: center; transform-box: fill-box; }
        @keyframes seatIn { from { opacity: 0; transform: scale(0.4); } to { opacity: 1; transform: scale(1); } }

        .legend { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; margin-top:18px; }
        .legend-item {
          display:inline-flex; align-items:center; gap:8px;
          padding: 5px 12px 5px 10px; border-radius: 999px;
          background: var(--bg-elev); border:1px solid var(--border);
          font-family: var(--font-mono); font-size: var(--fs-xs);
          cursor:pointer; transition: all var(--t-fast) var(--ease);
          color: var(--fg-muted);
          font-weight: 500;
        }
        .legend-item:hover {
          color: var(--fg);
          border-color: var(--club-color);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        .legend-item.active {
          background: var(--club-color);
          color: white;
          border-color: var(--club-color);
          box-shadow: var(--shadow-sm);
        }
        .legend-item .dot { width:8px; height:8px; border-radius:50%; display:inline-block; box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset; }
        .legend-item.active .dot { background: white !important; box-shadow: 0 0 0 1px rgba(0,0,0,0.1) inset; }
        .legend-item .count { color: var(--fg-faint); }
        .legend-item.active .count { color: rgba(255,255,255,0.85); }
      `})]})}export{D as default};
