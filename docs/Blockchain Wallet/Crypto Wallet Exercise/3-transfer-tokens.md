# Transfer Tokens

Now that the wallet is installed and configured, you can move tokens into it. The images in this process show a wallet account with the name **Training** and address `0x6dA45cB0C3be7eD9Fddaf12246Fe190c36941e70`. Recall that the address is the public key. The token source will need to use that address to send tokens.

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Training account](/img/docs/training/training-account.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Training account</figcaption> 
</div>
<br/>

The wallet was configured to send and receive **Lineas Sepolia** tokens in the last section. The source of the tokens is a "faucet" provided by Chainlink. Blockchain faucets are websites or apps that allot small amounts of cryptocurrency. The term "drip" is used for the fractional amounts of currency that a faucet will dispense. In this exercise you'll use a Chainlink **Lineas Sepolia** faucets to send 0.1 ETH token to an account in your wallet.

## Use Chainlink Faucet to Get Test Tokens

Navigate to [Chainlink faucets](https://faucets.chain.link/). Search for `linea sepolia`.

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Select faucet](/img/docs/training/faucet-select.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Select faucet</figcaption> 
</div>
<br/>

Click on the link in the upper right corner to connect your wallet. You will see your wallet address there.

You should have a choice of two faucets. Select the faucet that drips **0.1 ETH**. Click continue to begin the transfer.

<div style={{border:"2px solid black", width:"500px", margin: "0 auto"}}>
![Transfer tokens](/img/docs/training/faucet-select-after-connect.png)
</div>
<div style={{ width:"500px", margin: "0 auto"}}>
<figcaption>Transfer tokens</figcaption> 
</div>
<br/>

Once the transfer is complete you'll see a notice of success. You'll also get a transaction hash. When the transfer is complete, you'll get a transaction hash. You can copy it into your clipboard and use it to look up the transaction online.

<div style={{border:"2px solid black", width:"500px", margin: "0 auto"}}>
![Transfer success](/img/docs/training/faucet-finish.png)
</div>
<div style={{ width:"500px", margin: "0 auto"}}>
<figcaption>Transfer success</figcaption> 
</div>
<br/>

Look at the wallet, and you will see that it contains 0.1LineaETH

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Training account with 0.1 LineaETH](/img/docs/training/training-account-with-eth.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Training account with 0.1 LineaETH</figcaption> 
</div>
<br/>

## Lookup Transactions

There are serveral online dashboards that will allow you lookup transaction details.

### View Transaction Details from Wallet

If you click on the three dots in the upper right corner of the wallet, you can select and account and then click on "View on explorer". This takes you to [sepolia.lineascan.build](https://sepolia.lineascan.build).

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Transaction details navigating from wallet](/img/docs/training/view-transaction-details-from-wallet.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Training detals navigating from wallet</figcaption> 
</div>
<br/>

Once on the Sepolia Linea scan, search for the address (public key) of the account.

<div style={{border:"2px solid black", width:"500px", margin: "0 auto"}}>
![Transaction detials from Sepolia Lineascan](/img/docs/training/sepolia-lineascan-from-wallet.png)
</div>
<div style={{ width:"500px", margin: "0 auto"}}>
<figcaption>Transaction detials from Sepolia Lineascan</figcaption> 
</div>
<br/>

### Lookup Transaction Details on Sepolia Etherscan

You can go directly to [sepolia.etherscan.io](https://sepolia.etherscan.io/) to lookup Sepolia transactions.

<div style={{border:"2px solid black", width:"500px", margin: "0 auto"}}>
![Transaction detail from Sepolis Lineascan](/img/docs/training/sepolia-etherscan.png)
</div>
<div style={{ width:"500px", margin: "0 auto"}}>
<figcaption>Transaction detials from Sepolia Lineascan</figcaption> 
</div>
<br/>

Enter your address to find transactions.

<div style={{border:"2px solid black", width:"500px", margin: "0 auto"}}>
![Transaction details from Sepolia Etherscan](/img/docs/training/sepolia-etherscan-results.png)
</div>
<div style={{ width:"500px", margin: "0 auto"}}>
<figcaption>Transaction details from Sepolia Etherscan</figcaption> 
</div>
<br/>
