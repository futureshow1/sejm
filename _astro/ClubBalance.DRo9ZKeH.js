import{j as e}from"./jsx-runtime.u17CrQMm.js";function n({clubs:a,total:o}){const i=[...a].sort((t,s)=>(s.members_count??0)-(t.members_count??0));return e.jsxs("div",{className:"balance",children:[e.jsx("div",{className:"bar-stack",role:"img","aria-label":"Rozkład miejsc w Sejmie wg klubu",children:i.map(t=>{const s=(t.members_count??0)/o*100;return e.jsx("div",{className:"seg",style:{width:`${s}%`,background:t.color},title:`${t.code}: ${t.members_count} (${s.toFixed(1)}%)`,children:s>=6&&e.jsxs("span",{className:"seg-label",children:[t.code," ",e.jsx("b",{children:t.members_count})]})},t.code)})}),e.jsxs("div",{className:"ticks tabular tiny",children:[e.jsx("span",{children:"0"}),e.jsx("span",{className:"majority",title:"Większość bezwzględna: 231",children:"231 (większość)"}),e.jsx("span",{children:"460"})]}),e.jsx("style",{children:`
        .balance { width: 100%; }
        .bar-stack {
          display: flex;
          height: 32px;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          position: relative;

          /* majority marker */
          &::after {
            content: "";
            position: absolute;
            left: ${(231/460*100).toFixed(2)}%;
            top: -4px;
            bottom: -4px;
            width: 1px;
            background: var(--fg);
            opacity: 0.6;
          }
        }
        .seg {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.95);
          font-family: var(--font-mono);
          font-size: var(--fs-xs);
          font-weight: 500;
          letter-spacing: 0.02em;
          text-shadow: 0 1px 2px rgba(0,0,0,0.25);
          overflow: hidden;
          white-space: nowrap;
          transition: filter var(--t-fast) var(--ease);
        }
        .seg:hover { filter: brightness(1.12); }
        .seg-label b { font-weight: 600; }
        .ticks {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
          color: var(--fg-faint);
          position: relative;
        }
        .majority {
          position: absolute;
          left: ${(231/460*100).toFixed(2)}%;
          transform: translateX(-50%);
          color: var(--fg);
          font-weight: 500;
        }
      `})]})}export{n as default};
