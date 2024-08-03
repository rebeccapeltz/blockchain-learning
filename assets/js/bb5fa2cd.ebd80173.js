"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4578],{1760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(4848),s=n(8453);const o={},i="Crypto Wallet Setup",r={id:"Blockchain Wallet/Crypto Wallet Exercise/crypto-wallet-setup",title:"Crypto Wallet Setup",description:"Crypto wallets are applications that provide a user interface to store, send, and receive cryptocurrency. This exercise is using MetaMask which is available for mobile and/or browser.  MetaMask can be installed on multiple devices.",source:"@site/docs/Blockchain Wallet/Crypto Wallet Exercise/2-crypto-wallet-setup.md",sourceDirName:"Blockchain Wallet/Crypto Wallet Exercise",slug:"/Blockchain Wallet/Crypto Wallet Exercise/crypto-wallet-setup",permalink:"/blockchain-learning/docs/Blockchain Wallet/Crypto Wallet Exercise/crypto-wallet-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/rebeccapeltz/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Blockchain Wallet/Crypto Wallet Exercise/2-crypto-wallet-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Objectives",permalink:"/blockchain-learning/docs/Blockchain Wallet/Crypto Wallet Exercise/objectives"},next:{title:"Transfer Tokens",permalink:"/blockchain-learning/docs/Blockchain Wallet/Crypto Wallet Exercise/transfer-tokens"}},l={},c=[{value:"Pre-install Preparation",id:"pre-install-preparation",level:2},{value:"MetaMask Accounts and Keys",id:"metamask-accounts-and-keys",level:3},{value:"Install MetaMask as a Browser Extension",id:"install-metamask-as-a-browser-extension",level:2},{value:"Configure the Wallet to Use a Test Network",id:"configure-the-wallet-to-use-a-test-network",level:2},{value:"Connect Linea Sepolia Network with Chainlist",id:"connect-linea-sepolia-network-with-chainlist",level:3},{value:"Modify Wallet Settings to <code>Show test networks</code>.",id:"modify-wallet-settings-to-show-test-networks",level:4},{value:"Connect Wallet to Chainlist",id:"connect-wallet-to-chainlist",level:4},{value:"Add Chain",id:"add-chain",level:4},{value:"Select a Network",id:"select-a-network",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"crypto-wallet-setup",children:"Crypto Wallet Setup"}),"\n",(0,a.jsxs)(t.p,{children:["Crypto wallets are applications that provide a user interface to store, send, and receive cryptocurrency. This exercise is using ",(0,a.jsx)(t.strong,{children:"MetaMask"})," which is available for mobile and/or browser.  MetaMask can be ",(0,a.jsx)(t.a,{href:"https://support.metamask.io/managing-my-wallet/using-metamask/using-the-same-metamask-wallet-on-multiple-devices/",children:"installed on multiple devices"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"pre-install-preparation",children:"Pre-install Preparation"}),"\n",(0,a.jsxs)(t.p,{children:["Before you start the installation, it's a good idea to prepare for creating an account on MetaMask and receiving the ",(0,a.jsxs)(t.a,{href:"https://support.metamask.io/getting-started/user-guide-secret-recovery-phrase-password-and-private-keys/",children:[(0,a.jsx)(t.strong,{children:"Secret Recovery Phrase (SRP)"}),", ",(0,a.jsx)(t.strong,{children:"public key"}),", and ",(0,a.jsx)(t.strong,{children:"private key"})]}),'.  Use a strong password for your metamask account and plan how you want to store the password, private key and the SRP.\nYou\'ll be creating a password for the MetaMask extension. Extensions are isolated from the browser, so you won\'t be able to access the password from a browser password manager. You can store the password, phrase and private key in a cloud file.  This is referred to as "hot" storage and is not as secure.  The "cold" storage method is more secure: save the password, SRP, and private key  to a zip drive or print it out and save the printed output in a secure place.']}),"\n",(0,a.jsxs)(t.p,{children:["Because you can use the ",(0,a.jsx)(t.strong,{children:"SRP"})," to derive private keys, you only need to save the ",(0,a.jsx)(t.strong,{children:"SRP"})," and not the private key.  It is much easier to recognize the ",(0,a.jsx)(t.strong,{children:"SRP"})," than the private key."]}),"\n",(0,a.jsx)(t.h3,{id:"metamask-accounts-and-keys",children:"MetaMask Accounts and Keys"}),"\n",(0,a.jsxs)(t.p,{children:["When you install MetaMask, it will create an account named ",(0,a.jsx)(t.strong,{children:"Account 1"})," by default.  It is associated with a public key.  Remember that a single private key can generate multiple different public keys.  ",(0,a.jsx)(t.strong,{children:"Account 1"})," will have a public key that you can share.  This is used as an address on the blockchain.  You can rename ",(0,a.jsx)(t.strong,{children:"Account 1"}),", and it won't change the address.  You can also add new accounts.  Each new account will receive a new public key.  All accounts in your wallet will share the same private key."]}),"\n",(0,a.jsx)(t.p,{children:"When you're learning it's helpful to use training tokens.  It makes it more affordable to experiment without the possibility of losing money.  You can also experiment with creating, renaming and deleting accounts in the wallet."}),"\n",(0,a.jsx)(t.h2,{id:"install-metamask-as-a-browser-extension",children:"Install MetaMask as a Browser Extension"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to the ",(0,a.jsx)(t.a,{href:"https://metamask.io/download/",children:"MetaMask download page"}),".  If you are using Chrome, there will be a blue button that you click labeled ",(0,a.jsx)(t.strong,{children:"Install MetaMask for Chrome"}),".  This button will change depending on the browser you are working with.  The images and notes for this exercise are based on installing the brower extension on Chrome."]}),"\n",(0,a.jsx)(t.p,{children:"Once the extension is installed, you need to pin it to the address bar by clicking on the puzzle icon to the right of the address bar, and then clicking on the pushbutton pin."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"&quot;pin extension to address bar",src:n(8603).A+"",width:"320",height:"240"})}),"\n",(0,a.jsx)(t.p,{children:"After you've pinned the extension to the address bar, you can click on the fox icon to open the wallet.  The wallet application should look like the image shown below."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Newly installed MetaMask wallet",src:n(6208).A+"",width:"355",height:"602"})}),"\n",(0,a.jsx)(t.h2,{id:"configure-the-wallet-to-use-a-test-network",children:"Configure the Wallet to Use a Test Network"}),"\n",(0,a.jsxs)(t.p,{children:["When you first open the wallet, you will see the default ",(0,a.jsx)(t.strong,{children:"Account 1"})," for your account and a link to copy your public key.  By default, you will be on the ",(0,a.jsx)(t.strong,{children:"Ethereum Mainnet"}),". For this exercise, you will configure the wallet to use the test network, ",(0,a.jsx)(t.strong,{children:"Linea Sepolia"}),".  You can hover over the Ethereum icon in the upper left corner to see that the current network is ",(0,a.jsx)(t.strong,{children:"Ethereum Mainnet"}),".  Notice that there is an arrow next to the icon.  Once you've connected ",(0,a.jsx)(t.strong,{children:"Linea Sepolia"})," to the wallet, you'll come back and choose the ",(0,a.jsx)(t.strong,{children:"Linea Sepolia"})," network by clicking on the downward arrow."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Default network is Ethereum",src:n(7123).A+"",width:"357",height:"600"})}),"\n",(0,a.jsx)(t.h3,{id:"connect-linea-sepolia-network-with-chainlist",children:"Connect Linea Sepolia Network with Chainlist"}),"\n",(0,a.jsxs)(t.h4,{id:"modify-wallet-settings-to-show-test-networks",children:["Modify Wallet Settings to ",(0,a.jsx)(t.code,{children:"Show test networks"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Start by opening the advanced settings on the wallet."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Open advanced settings on the wallet",src:n(5995).A+"",width:"354",height:"599"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:'Click the on button for "Show test networks".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Turn on show test networks",src:n(8220).A+"",width:"350",height:"602"})}),"\n",(0,a.jsx)(t.h4,{id:"connect-wallet-to-chainlist",children:"Connect Wallet to Chainlist"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to ",(0,a.jsx)(t.a,{href:"https://chainid.network/",children:"Chainlist"}),".  Search for ",(0,a.jsx)(t.strong,{children:"Sepolia"}),".  Click on the ",(0,a.jsx)(t.code,{children:"Connect"})," button for ",(0,a.jsx)(t.strong,{children:"Linea Sepolia"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Use Chainlist to connect Linea Sepolia network",src:n(9749).A+"",width:"1109",height:"931"})}),"\n",(0,a.jsx)(t.h4,{id:"add-chain",children:"Add Chain"}),"\n",(0,a.jsxs)(t.p,{children:["The first time you connect your wallet you will be asked for some authentication details.  Once the wallet is connected, you'll see your public key in the upper right corner. The Connect buttons have changed to ",(0,a.jsx)(t.code,{children:"Add Chain"}),".  Click on the ",(0,a.jsx)(t.code,{children:"Add Chain"})," button for ",(0,a.jsx)(t.strong,{children:"Linea Sepolia"})," to add this blockchain network to your wallet."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Click on add chain",src:n(9440).A+"",width:"1056",height:"924"})}),"\n",(0,a.jsx)(t.h4,{id:"select-a-network",children:"Select a Network"}),"\n",(0,a.jsxs)(t.p,{children:["Return to the home screen on the wallet.  Click on the downward arrow in the upper right to ",(0,a.jsx)(t.code,{children:"Select a network"}),".  You should see the ",(0,a.jsx)(t.strong,{children:"Linea Sepolia"})," network. Click on it to use it."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Select network",src:n(1616).A+"",width:"349",height:"593"})}),"\n",(0,a.jsx)(t.p,{children:"If you hover over the Linea token in the upper left corner, you can see that this account is connected to the Linea Sepolia network, and has 0 LineaETH.  In the next section you'll add tokens to your wallet."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Empty wallet",src:n(9844).A+"",width:"353",height:"596"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9440:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/add-chain-9c0eded6995f71624e4d7e7fd7227e73.png"},8603:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/chrome-ext-pin-2b791855515747d5ecb9c397cf92747f.png"},9749:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/connect-lsepolia-0784c124187c9c68f13bec5b932e479c.png"},7123:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/eth-mainnet-09e4e0fe9cc6dc25f0277b06080caeb0.png"},6208:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/meta-mask-installed-2523f18fe374738064884b3cd5d5f0f5.png"},1616:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/select-network-d70a730b76fe7374e3b809461cc3275b.png"},5995:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/settings-advanced-e36b064aa3f65636717563ab9187644e.png"},8220:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/show-test-network-c8deb892efa3a1532562392b66a16926.png"},9844:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/empty-wallet-3350588c5bd73d54a5a5de5356fcb955.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);