# Transfer Tokens

Now that the wallet is installed and configured, you can move tokens into it. The images in this process show a wallet account with the name **Training** and address `0x6dA45cB0C3be7eD9Fddaf12246Fe190c36941e70`. Recall that the address is the public key. The token source will need to use that address to send tokens.

<img src="/img/docs/training/training-account.png" alt="Training account" width="300px" style={{border: "2px, solid grey"}}/>

 <figcaption>Training account</figcaption>  
<br/><br/>

The wallet was configured to send and receive **Lineas Sepolia** tokens in the last section. The source of the tokens is a "faucet" provided by Chainlink. Blockchain faucets are websites or apps that allot small amounts of cryptocurrency. The term "drip" is used for the fractional amounts of currency that a faucet will dispense. In this exercise you'll use a Chainlink **Lineas Sepolia** faucets to send 0.1 ETH token to an account in your wallet.

## Use Chainlink Faucet to Get Test Tokens

Navigate to [Chainlink faucets](https://faucets.chain.link/). Search for `linea sepolia`.

<img src="/img/docs/training/faucet-select
.png" alt="Transfer tokens" width="600px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transfer tokens.</figcaption>  
<br/><br/>

Click on the link in the upper right corner to connect your wallet. You will see your wallet address there.

You should have a choice of two faucets. Select the faucet that drips **0.1 ETH**. Click continue to begin the transfer.

<img src="/img/docs/training/faucet-select-after-connect
.png" alt="Transfer tokens" width="600px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transfer tokens.</figcaption>  
<br/><br/>

Once the transfer is complete you'll see a notice of success. You'll also get a transaction hash. When the transfer is complete, you'll get a transaction hash. You can copy it into your clipboard and use it to look up the transaction online.

<img src="/img/docs/training/faucet-finish
.png" alt="Transfer success" width="600px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transfer success</figcaption>  
<br/><br/>

Look at the wallet, and you will see that it contains 0.1LineaETH

<img src="/img/docs/training/training-account-with-eth
.png" alt="Training account with 0.1 LineaETH" width="300px" style={{border: "2px, solid grey"}}/>

 <figcaption>Training account with 0.1 LineaETH</figcaption>  
<br/><br/>

## Lookup Transactions

There are serveral online dashboards that will allow you lookup transaction details.

### View Transaction Details from Wallet

If you click on the three dots in the upper right corner of the wallet, you can select and account and then click on "View on explorer". This takes you to [sepolia.lineascan.build](https://sepolia.lineascan.build).

<img src="/img/docs/training/view-transaction-details-from-wallet
.png" alt="Transaction Details from Wallet" width="300px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transaction Details from Wallet</figcaption>  
<br/><br/>

Once on the Sepolia Linescan, search for the address (public key) of the account.

<img src="/img/docs/training/sepolia-lineascan-from-wallet
.png" alt="Transactons Details from Sepolia Lineascan" width="500px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transactons Details from Sepolia Lineascan</figcaption>  
<br/><br/>

### Lookup Transaction Details on Sepolia Etherscan

You can go directly to [sepolia.etherscan.io](https://sepolia.etherscan.io/) to lookup Sepolia transactions.

<img src="/img/docs/training/sepolia-etherscan
.png" alt="Transactions Detail from Sepolia Lineascan" width="500px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transactions Details from Sepolia Lineascan</figcaption>  
<br/><br/>

Enter your address to find transactions.

<img src="/img/docs/training/sepolia-etherscan-results
.png" alt="Transaction Details from Sepolia Etherscan" width="500px" style={{border: "2px, solid grey"}}/>

 <figcaption>Transactions Details from Sepolia Etherscan</figcaption>  
<br/><br/>
