import{j as n}from"./jsx-runtime.u17CrQMm.js";function y({data:l,size:t=180,thickness:o=28,centerLabel:c,centerValue:i}){const m=l.reduce((e,r)=>e+r.value,0)||1,s=t/2-o/2,d=t/2,u=t/2,a=2*Math.PI*s;let f=0;const x=l.map(e=>{const r=e.value/m,h=a*r,p=`${h} ${a-h}`,v=-f*a;return f+=r,{...e,frac:r,dasharray:p,offset:v}});return n.jsxs("div",{className:"donut",style:{width:t,height:t},children:[n.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,style:{transform:"rotate(-90deg)"},children:[n.jsx("circle",{cx:d,cy:u,r:s,fill:"none",stroke:"var(--bg-muted)",strokeWidth:o}),x.map((e,r)=>n.jsx("circle",{cx:d,cy:u,r:s,fill:"none",stroke:e.color,strokeWidth:o,strokeDasharray:e.dasharray,strokeDashoffset:e.offset,style:{transition:"stroke-dasharray 600ms cubic-bezier(0.2, 0.8, 0.3, 1)"},children:n.jsx("title",{children:`${e.label}: ${e.value} (${(e.frac*100).toFixed(1)}%)`})},r))]}),n.jsxs("div",{className:"donut-center",style:{width:t,height:t},children:[i&&n.jsx("strong",{className:"value tabular",children:i}),c&&n.jsx("span",{className:"label",children:c})]}),n.jsx("style",{children:`
        .donut { position: relative; display: inline-block; }
        .donut-center {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          pointer-events: none;
        }
        .donut-center .value {
          font-size: 28px; font-weight: 600;
          color: var(--fg-strong); letter-spacing: -0.02em;
          font-feature-settings: "tnum";
        }
        .donut-center .label {
          font-size: var(--fs-xs);
          color: var(--fg-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: var(--font-mono);
          margin-top: 2px;
        }
      `})]})}export{y as default};
