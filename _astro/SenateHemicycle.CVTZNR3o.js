import{j as n}from"./jsx-runtime.u17CrQMm.js";import{r as p}from"./index.D9mrT8mP.js";const g=6,h=90,j=270,y=640,M=320,k=y/2,I=M-16;function S(i,d){const f=new Map(d.map((e,s)=>[e,s])),o=[...i].sort((e,s)=>{const r=f.get(e.club)??99,l=f.get(s.club)??99;return r!==l?r-l:e.name.localeCompare(s.name,"pl")}),u=[];let m=0;for(let e=0;e<g;e++){const s=h+(j-h)*e/(g-1);u.push(Math.PI*s),m+=Math.PI*s}const c=u.map(e=>Math.round(e/m*o.length));let a=o.length-c.reduce((e,s)=>e+s,0);for(let e=0;a!==0;e=(e+1)%g)a>0?(c[e]++,a--):c[e]>0&&(c[e]--,a++);const x=[];let t=0;for(let e=0;e<g;e++){const s=h+(j-h)*e/(g-1),r=c[e];for(let l=0;l<r;l++){const N=r===1?.5:l/(r-1),b=Math.PI-(.05+(1-2*.05)*N)*Math.PI,v=o[t++];if(!v)break;x.push({sen:v,cx:k+s*Math.cos(b),cy:I-s*Math.sin(b)})}}return x}function E({senators:i,clubOrder:d}){const f=p.useMemo(()=>S(i,d),[i,d]),[o,u]=p.useState(null),[m,c]=p.useState(null),a=p.useMemo(()=>{const t=new Map;for(const e of i)t.set(e.club,(t.get(e.club)??0)+1);return t},[i]),x=p.useMemo(()=>d.filter(t=>a.has(t)),[d,a]);return n.jsxs("div",{className:"hemicycle",children:[n.jsx("svg",{viewBox:`0 0 ${y} ${M}`,role:"img","aria-label":"Mapa miejsc Senatu",children:f.map(t=>{const e=m&&t.sen.club!==m;return n.jsx("a",{href:`/sejm/senatorowie/${t.sen.slug}-${t.sen.id}`,onMouseEnter:()=>u(t),onMouseLeave:()=>u(null),children:n.jsx("circle",{cx:t.cx,cy:t.cy,r:8,fill:t.sen.club_color,opacity:e?.15:1,stroke:"#fff",strokeWidth:1.2,style:{cursor:"pointer"}})},t.sen.id)})}),n.jsx("div",{className:"legend",children:x.map(t=>{const e=a.get(t)??0,s=i.find(l=>l.club===t),r=m===t;return n.jsxs("button",{type:"button",className:`legend-item ${r?"active":""}`,onClick:()=>c(r?null:t),children:[n.jsx("span",{className:"dot",style:{background:s?.club_color}}),n.jsx("span",{className:"code",children:t}),n.jsx("span",{className:"count",children:e})]},t)})}),n.jsx("div",{className:"tooltip","aria-live":"polite",children:o?n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:o.sen.name}),n.jsxs("span",{className:"muted",children:[" · ",o.sen.club]}),o.sen.district_num&&n.jsxs("span",{className:"muted",children:[" · okręg #",o.sen.district_num]})]}):n.jsx("span",{className:"muted tiny",children:"Najedź na miejsce, by zobaczyć senatora"})}),n.jsx("style",{children:`
        .hemicycle svg { width: 100%; height: auto; max-width: 640px; display:block; margin: 0 auto; }
        .legend { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; margin-top:12px; }
        .legend-item {
          display:inline-flex; align-items:center; gap:6px;
          padding: 4px 10px; border-radius: 999px;
          background: var(--bg-muted); border:1px solid var(--border);
          font-family: var(--font-mono); font-size:0.78rem;
          cursor:pointer; transition: all 120ms; color: var(--fg-muted);
        }
        .legend-item:hover { color: var(--fg); border-color: var(--border-strong); }
        .legend-item.active { background: var(--fg); color: var(--bg); border-color: var(--fg); }
        .legend-item .dot { width:8px; height:8px; border-radius:50%; display:inline-block; }
        .legend-item .count { color: var(--fg-faint); margin-left: 2px; }
        .tooltip { margin-top: 12px; text-align:center; font-size: 0.95rem; min-height: 1.4em; }
        .tooltip .muted { color: var(--fg-muted); }
      `})]})}export{E as default};
