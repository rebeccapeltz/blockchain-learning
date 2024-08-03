"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4287],{4969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=t(4848),a=t(8453);const i={},c="Data Structure",o={id:"Blockchain Overview/blockchain-data-structure",title:"Data Structure",description:"The blockchain shares some similarity to a linked list data structure. Both are linear data sequences.  Linked lists contain pointers that link to successive nodes. This means when a new node is added to the linked list, the preexisting node gets a reference to the new node. A blockchain is a sequence of blocks that links to the previous block using a cryptographic hash. This means when a new block is added to the chain, it references the preexisting block.",source:"@site/docs/Blockchain Overview/2-blockchain-data-structure.md",sourceDirName:"Blockchain Overview",slug:"/Blockchain Overview/blockchain-data-structure",permalink:"/blockchain-learning/docs/Blockchain Overview/blockchain-data-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/rebeccapeltz/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Blockchain Overview/2-blockchain-data-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Origin",permalink:"/blockchain-learning/docs/Blockchain Overview/blockchain-origin"},next:{title:"Features",permalink:"/blockchain-learning/docs/Blockchain Overview/blockchain-features"}},r={},h=[];function l(e){const n={a:"a",code:"code",h1:"h1",mermaid:"mermaid",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"data-structure",children:"Data Structure"}),"\n",(0,s.jsxs)(n.p,{children:["The blockchain shares some similarity to a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Linked_list",children:"linked list"})," data structure. Both are linear data sequences.  Linked lists contain pointers that link to successive nodes. This means when a new node is added to the linked list, the preexisting node gets a reference to the new node. A blockchain is a sequence of blocks that links to the previous block using a cryptographic hash. This means when a new block is added to the chain, it references the preexisting block."]}),"\n",(0,s.jsxs)(n.p,{children:["The data that is stored in each block is hashed.  The hash is a one way encryption of the transactions, a timestamp, a nonce (random number), and the previous block's hash.  The hash is a fixed size and serves as an ID for the data in the block. When a new block is created it includes the previous block's hash.  This creates ",(0,s.jsx)(n.strong,{children:"data immutability"})," because if any data is changed it will invalidate successive block."]}),"\n",(0,s.jsxs)(n.p,{children:["In the graph below, the left most block labeled ",(0,s.jsx)(n.strong,{children:"Block n"})," represents the most recently created block. It points to the previous block.  The arrow indicates a link based on the hash of the previous block.  Each block going to the right represents the previous block in the chain.  The original block is shown using a dotted line to indicate there may be many more blocks between ",(0,s.jsx)(n.code,{children:"Block n-2"})," and the start of the blockchain."]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR\n\n  A((Hash of block n-1 &nbsp;&nbsp;&nbsp;)) --\x3e B((Hash of block n &nbsp;))\n  B((Hash of block n-2 &nbsp;&nbsp;))--\x3e C((Hash of block n-3 &nbsp;&nbsp;&nbsp;))\n  C((Hash of block n-3 &nbsp;&nbsp;))-.-> D(( &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;))\n\n  subgraph Original Block\n  D\n  end\n\n  subgraph Block n-2\n  C\n  end\n\n  subgraph Block n-1\n  B\n  end\n\n  subgraph Block n\n  A\n  end\n\n  classDef block fill:#fff2cc,stroke:#000000,stroke-width:2px\n  class A,B,C block"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);