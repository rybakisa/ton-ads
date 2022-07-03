const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const TonWeb = require('tonweb');

const BN = TonWeb.utils.BN;
const toNano = TonWeb.utils.toNano;


async function createChannel(platformSeedBase64, advertiserSeedBase64) {
   // TON init
   const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC'; // TON HTTP API url. Use this url for testnet
   const apiKey = '7eb4b0942f623ae1722efcac64ce858205b7f22acf761bc09efd61938e6937bf'; // Obtain your API key in https://t.me/tontestnetapibot
   const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, {apiKey})); // Initialize TON SDK

   // Create Key Pairs
   const platformSeed = TonWeb.utils.base64ToBytes(platformSeedBase64); // A's private (secret) key
   const platformKeyPair = tonweb.utils.keyPairFromSeed(platformSeed); // Obtain key pair (public key and private key)

   const advertiserSeed = TonWeb.utils.base64ToBytes(advertiserSeedBase64); // B's private (secret) key
   const advertiserKeyPair = tonweb.utils.keyPairFromSeed(advertiserSeed); // Obtain key pair (public key and private key)

   // Create Wallets
   const platformWallet = tonweb.wallet.create({
         publicKey: platformKeyPair.publicKey
   });
   const platformWalletAddress = await platformWallet.getAddress(); // address of this wallet in blockchain

   const advertiserWallet = tonweb.wallet.create({
         publicKey: advertiserKeyPair.publicKey
   });
   const advertiserWalletAddress = await advertiserWallet.getAddress(); // address of this wallet in blockchain

   // Channel initial configuration
   const channelInitState = {
         balanceA: toNano('1'), // A's initial balance in Toncoins. Next A will need to make a top-up for this amount
         balanceB: toNano('2'), // B's initial balance in Toncoins. Next B will need to make a top-up for this amount
         seqnoA: new BN(0), // initially 0
         seqnoB: new BN(0)  // initially 0
   };

   const channelConfig = {
         channelId: new BN(124), // Channel ID, for each new channel there must be a new ID
         addressA: platformWalletAddress, // A's funds will be withdrawn to this wallet address after the channel is closed
         addressB: advertiserWalletAddress, // B's funds will be withdrawn to this wallet address after the channel is closed
         initBalanceA: channelInitState.balanceA,
         initBalanceB: channelInitState.balanceB
   }

   // Create a payment channel object
   const channel = tonweb.payments.createChannel({
         ...channelConfig,
         isA: true,
         myKeyPair: advertiserKeyPair,
         hisPublicKey: platformKeyPair.publicKey,
   });
   const channelAddress = await channel.getAddress(); // address of this payment channel smart-contract in blockchain
   const channelAddressString = await channelAddress.toString(true, true, true)
   console.log('channelAddress =', channelAddressString);

   return channelAddressString
}


router.get('/start/:advertiser_id/:platform_id/:contract_id', async function(req, res) {
   let platformSeedBase64;
   let advertiserSeedBase64;

   try {
      const response = await axios.get('http://192.168.100.14:8080/api/platforms/' + req.params.platform_id);
      platformSeedBase64 = response.data.profile.ton_account_seed
      console.log(platformSeedBase64);
   } catch (error) {
      console.error(error);
   }

   try {
      const response = await axios.get('http://192.168.100.14:8080/api/advertisers/' + req.params.advertiser_id);
      advertiserSeedBase64 = response.data.profile.ton_account_seed
      console.log(advertiserSeedBase64);
   } catch (error) {
      console.error(error);
   }

   res.send(
      await createChannel(
         platformSeedBase64,
         advertiserSeedBase64
      )
   );

   // TODO: update contract on backend
});


router.get('/click/:banner_id', function(req, res){
   // get channel from backend
   axios.get('http://192.168.100.14:8080/api/advertisers/' + req.params.banner_id + '/?format=json')
   .then(function (response) {
      // handle success
      let channel = response.data;
      // update channel state
      // send update to backend
 
      res.send(channel);
   })
   .catch(function (error) {
      // handle error
      res.send(error);
   })
   .then(function () {
      // always executed
   });
});


router.get('/finalise/:banner_id', function(req, res){
   // get channel from backend
   // finalize channel
   // send update to backend
   res.send('Finalise channel with banner with id=' + req.params.banner_id);
});


module.exports = router;
