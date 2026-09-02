import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as d}from"./index.D9mrT8mP.js";const h=11,b=110,M=320,j=760,k=380,z=j/2,$=k-18;function I(l){const c=[];let g=0;for(let n=0;n<h;n++){const s=b+(M-b)*n/(h-1),r=Math.PI*s;c.push(r),g+=r}const u=l.length,o=c.map(n=>Math.round(n/g*u));let i=u-o.reduce((n,s)=>n+s,0);for(let n=0;i!==0;n=(n+1)%h)i>0?(o[n]++,i--):o[n]>0&&(o[n]--,i++);const m=[];let v=0;for(let n=0;n<h;n++){const s=b+(M-b)*n/(h-1),r=o[n];for(let p=0;p<r;p++){const y=r===1?.5:p/(r-1),t=Math.PI-(.05+(1-2*.05)*y)*Math.PI,a=z+s*Math.cos(t),f=$-s*Math.sin(t),x=l[v++];if(!x)break;m.push({mp:x,cx:a,cy:f,ring:n,ringIdx:p})}}return m}function E({mps:l,clubColors:c,clubOrder:g}){const u=d.useMemo(()=>I(l),[l]),[o,i]=d.useState(null),[m,v]=d.useState(null),[n,s]=d.useState(null),r=d.useRef(null),p=d.useMemo(()=>{const t=new Map;for(const a of l)t.set(a.c,(t.get(a.c)??0)+1);return t},[l]),N=d.useMemo(()=>g.filter(t=>p.has(t)),[g,p]);function y(t){const a=r.current?.getBoundingClientRect();a&&s({x:t.clientX-a.left,y:t.clientY-a.top})}return e.jsxs("div",{className:"hemicycle",ref:r,onMouseMove:y,children:[e.jsxs("svg",{viewBox:`0 0 ${j} ${k}`,role:"img","aria-label":"Mapa miejsc Sejmu",children:[e.jsx("defs",{children:e.jsx("filter",{id:"seat-shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:e.jsx("feDropShadow",{dx:"0",dy:"1",stdDeviation:"0.8",floodOpacity:"0.18"})})}),u.map((t,a)=>{const f=m&&t.mp.c!==m,x=o?.mp.id===t.mp.id;return e.jsx("a",{href:`/sejm/poslowie/${t.mp.id}`,"aria-label":`${t.mp.n}, ${t.mp.c}${t.mp.d?`, okręg ${t.mp.d}`:""}`,onMouseEnter:()=>i(t),onMouseLeave:()=>i(null),onFocus:()=>{i(t);const w=r.current?.getBoundingClientRect();w&&s({x:t.cx/j*w.width,y:t.cy/k*w.height})},onBlur:()=>i(null),children:e.jsx("circle",{cx:t.cx,cy:t.cy,r:x?8.2:6.6,fill:c[t.mp.c]||"#888",opacity:f?.12:1,stroke:x?"var(--accent)":"#fff",strokeWidth:x?1.8:1.1,filter:"url(#seat-shadow)",style:{cursor:"pointer",transition:"r 160ms cubic-bezier(0.2,0.8,0.3,1), opacity 160ms, stroke 160ms",animationDelay:`${a*1.2}ms`},className:"seat"})},t.mp.id)})]}),o&&n&&e.jsxs("div",{className:"floating-tt",style:{left:`${n.x}px`,top:`${n.y}px`},children:[e.jsxs("span",{className:"ftt-avatar",style:{background:c[o.mp.c]||"#888"},children:[e.jsx("img",{src:`/sejm/photos/${o.mp.id}.jpeg`,alt:"",width:48,height:48,onError:t=>{t.target.style.display="none"}}),e.jsx("span",{className:"ftt-initials","aria-hidden":"true",children:o.mp.f})]}),e.jsxs("span",{className:"ftt-info",children:[e.jsx("strong",{children:o.mp.n}),e.jsxs("span",{className:"ftt-meta",children:[e.jsx("span",{className:"club-dot",style:{background:c[o.mp.c]}}),o.mp.c,o.mp.d&&` · ${o.mp.d}`]}),o.mp.p&&e.jsx("span",{className:"ftt-prof",children:o.mp.p}),e.jsx("span",{className:"ftt-action",children:"→ kliknij, aby zobaczyć profil"})]})]}),e.jsx("div",{className:"legend",children:N.map(t=>{const a=p.get(t)??0,f=m===t;return e.jsxs("button",{type:"button",className:`legend-item ${f?"active":""}`,onClick:()=>v(f?null:t),style:{"--club-color":c[t]},children:[e.jsx("span",{className:"dot",style:{background:c[t]}}),e.jsx("span",{className:"code",children:t}),e.jsx("span",{className:"count tabular",title:`${a} ${a===1?"mandat":a%10>=2&&a%10<=4&&(a%100<12||a%100>14)?"mandaty":"mandatów"} · ${(a/l.length*100).toFixed(1)}% izby`,children:a})]},t)})}),!o&&e.jsx("p",{className:"hint muted tiny",children:"Najedź lub przejdź Tabem na miejsce, by zobaczyć posła • kliknij lub Enter — pełny profil"}),e.jsx("style",{children:`
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
      `})]})}export{E as default};
