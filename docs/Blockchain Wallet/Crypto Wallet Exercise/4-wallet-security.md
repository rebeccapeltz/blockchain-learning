# Wallet Security

We can find our private key inside our Chrome extension or mobile app.  We should not need to access it, but if we want to, it is available.

## Accessing Private Key on the Chrome Extension

To access your private key, click on the three dots at the top right of the extension.  This will open the **Settings** view. Find the **Account Details** link and click.

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Click on account details](/img/docs/training/access-private-key-1.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Click on account details</figcaption> 
</div>
<br/>

A **Show Private Key** button will show your unencrypted private key that 
we can copy into our clipboard.  

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Access private key](/img/docs/training/access-private-key-2.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Access private key</figcaption> 
</div>
<br/>

## Accessing Secret Recovery Phrase

Click on the three dots at the top right of the extension and select **Security and Privacy**.
Locate a button entitled **Reveal Secret Recovery Phrase**.  Click the button to access your SRP.

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Access secret recovery phrase](/img/docs/training/access-phrase.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Access secret recovery phrase</figcaption> 
</div>
<br/>

## Security

In the Crypto Wallet Setup section, we created a password for our MetaMask account, and 
when the account was created, MetaMask created the private key.  Our accounts are addressed by
a public key created from the private key.  You were informed that we should never share 
the private key and that the safest way to store the security phrase was offline.  

We should store our security phrase and the password to our metamask account.  It's possible we have
multiple passwords to our MetaMask account if we have set up MetaMask on different devices.  These passwords cannot be 
accessed with a password manager.  They are known by the device or extension we you created the MetaMask account on.

If you're used to working on the cloud or interacting with applications with backend databases, it's easy to believe
that you can easily recover or reset your password.  You must to contact MetaMask support for help with a
lost or forgotten password.

### Hot Wallet vs Cold Wallet
Cryptocurrency wallets come in two flavors: "hot" and "cold". MetaMask is a "hot" wallet.  Secrets are stored within the application.  Just like "hot" storage is less secure than "cold" storage, and there are actions we can take to make "cold" storage more secure, we'll review methods to enhance the security for MetaMaks. MetaMask is open source.  This means we can read the code that stores and shares the private key. 

Typical recommendations for securing local applications include:

 * Use strong password
 * Keep the software updated
 * Backup important data

#### Use Strong Passwords

Here are some suggestions for creating strong passwords:

* Don't include personal information
* Create English phrases that can help with recall, like "MyD0g1sR3A11yC001"
* Use an online password generator like this [one](https://laptoprev.xyz/password-generator) from ICS2

#### Update Chrome Extension 

Find the current installed version of MetaMask by clicking on the three dots and selecting **About**.

<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![MetaMask version](/img/docs/training/meta-mask-version.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>MetaMask version</figcaption> 
</div>
<br/>

Chrome provides a way to update extensions. Click on the puzzle key next to extensions to open the extension manager. 
Click on **Manage Extensions** at the bottom of the list of installed extensions.  Find MetaMask and click on **Details**. 
Click on the Update button.

<div className="lg-img" style={{border:"2px solid black", margin: "0 auto"}}>
![Updata Chrome Extension](/img/docs/training/update-chrome-ext.png)
</div>
<div className="lg-img" style={{margin: "0 auto"}}>
<figcaption className="lg-img">Update Chrome Extension</figcaption> 
</div>
<br/>



#### Backup Data

MetaMask provides a method for backing up data including contacts and preferences.  Click on the three 
dots and select **Advanced**.  Click the backup button to produce a JSON file containing the data.  This will not 
include any secrets.


<div style={{border:"2px solid black", width:"310px", margin: "0 auto"}}>
![Backup data](/img/docs/training/backup-data.png)
</div>
<div style={{ width:"310px", margin: "0 auto"}}>
<figcaption>Backup data</figcaption> 
</div>
<br/>


### How is the Private Key Stored in the Browser Extension

The source code for MetaMask is available on GitHub.  The code that manages the **Secret Pass Phrase** is in the [Keyring Controller](https://github.com/MetaMask/core/blob/main/packages/keyring-controller/src/KeyringController.ts. ).  This [blog post](https://www.wispwisp.com/index.php/2020/12/25/how-metamask-stores-your-wallet-secret/) describes this code as it was in 2020. 

The code controls access to the keyring. The keyring is responsible for managing access to the Private Key.  During signup for MetaMask, the password you create to log in to MetaMask is used to create an encryption key to encrypt the Private Key before storing it in the browser's local storage.  When you log in to MetaMask, the password is used to decrypt the keys, and the decrypted keys are stored in memory for as long as the MetaMask extension popup is open. 




