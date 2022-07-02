import React from 'react'
import TonWeb from "tonweb";

// Use tonweb
const tonweb = new TonWeb();
console.log('start execution');

// Use extension
const onTonReady = () => {
    console.log('tonready');

    if (!window.tonProtocolVersion || window.tonProtocolVersion < 1) {
        alert('Please update your TON Wallet Extension');
        return;
    }

    const provider = window.ton;
    console.log('isTonWallet=', provider.isTonWallet);

    const connect = async () => {
        // Request account access if needed
        const accounts = await provider.send('ton_requestAccounts');
        // Accounts now exposed, use them
        const account = accounts[0] // We currently only ever provide a single account,
                                    // but the array gives us some room to grow.
        showAccountAddress(account);

        console.log(await provider.send('ton_requestWallets'));
    }

    provider.on('accountsChanged', function (accounts) {
        console.log('accountsChanged', accounts);
        const account = accounts[0];
        showAccountAddress(account);
    });

    function showAccountAddress(address) {
        document.getElementById('address').innerText = address;
    }
}

// Initialize TON
if (window.ton) {
    onTonReady();
} else {
    console.log('no ton :(')
}

const WalletConnection = () => {
  return (
    <>
      <h1>TON dApp Example</h1>

      <div class="grey">
          <span>My address is </span>
          <span id="address"></span>
      </div>
    </>
  )
}

export default WalletConnection
