const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const TonWeb = require('tonweb');

const BN = TonWeb.utils.BN;
const toNano = TonWeb.utils.toNano;


async function createChannel(advertiserMnemonic, platformMnemonic) {
   // TON init
   const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC';
   const apiKey = '7eb4b0942f623ae1722efcac64ce858205b7f22acf761bc09efd61938e6937bf';
   const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, {apiKey}));

   // Create Key Pairs
   const advertiserKeyPair = await tonMnemonic.mnemonicToKeyPair(advertiserMnemonic.split(' '));
   const platformKeyPair = await tonMnemonic.mnemonicToKeyPair(platformMnemonic.split(' '));

   // Create Wallets
   const advertiserWallet = tonweb.wallet.create({
         publicKey: advertiserKeyPair.publicKey
   });
   const advertiserWalletAddress = await advertiserWallet.getAddress();

   const platformWallet = tonweb.wallet.create({
         publicKey: platformKeyPair.publicKey
   });
   const platformWalletAddress = await platformWallet.getAddress();

   // Channel initial configuration
   const channelInitState = {
         balanceA: toNano('1'),
         balanceB: toNano('0'),
         seqnoA: new BN(0),
         seqnoB: new BN(0)
   };

   const channelConfig = {
         channelId: new BN(555), // Channel ID, for each new channel there must be a new ID
         addressA: advertiserWalletAddress, // A's funds will be withdrawn to this wallet address after the channel is closed
         addressB: platformWalletAddress, // B's funds will be withdrawn to this wallet address after the channel is closed
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

   const fromAdvertiser = channel.fromWallet({
         wallet: advertiserWallet,
         secretKey: advertiserKeyPair.secretKey
   });

   try {
         let deployed = await fromAdvertiser.deploy().send(toNano('1'));
         console.log(deployed)
   } catch (error) {
         console.error(error);
   }

   console.log(await channel.getChannelState());
   console.log(await channel.getData());

   return channelAddressString
}


router.get('/start/:advertiser_id/:platform_id/:campaign_id/:contract_id', async function(req, res) {
   let advertiserMnemonic;
   let platformMnemonic;

   try {
      const response = await axios.get('http://localhost:8000/api/advertisers/' + req.params.advertiser_id);
      advertiserMnemonic = response.data.profile.ton_account_mnemonic
      console.log(advertiserMnemonic);
   } catch (error) {
      console.error(error);
   }

   try {
      const response = await axios.get('http://localhost:8000/api/platforms/' + req.params.platform_id);
      platformMnemonic = response.data.profile.ton_account_mnemonic
      console.log(platformMnemonic);
   } catch (error) {
      console.error(error);
   }

   let channelAddress = await createChannel(
         advertiserMnemonic,
         platformMnemonic
   )

   let response;
   try {
      response = await axios.patch(
         'http://localhost:8000/api/contracts/' + req.params.contract_id + '/',
         {
            "state": "ACTIVE",
            "payment_channel_address": channelAddress,
            "campaign": req.params.contract_id
         }
      );
   } catch (error) {
      response = error
      console.error(error);
   }

   res.send(response)
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
