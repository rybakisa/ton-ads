import React from 'react'
import TonWeb from "tonweb";

console.log('tonready');

const WalletConnection = () => {
  return (
    <>
      <h1>TON dApp Example</h1>

      <div class="grey">
          <span>My address is</span>
          <span id="address"></span>
      </div>
    </>
  )
}

export default WalletConnection
