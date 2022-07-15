const express = require('express');
const router = express.Router();

const ton = require('./modules/ton/ton.js');
const backend = require('./modules/backend.js');


router.get('/start/:advertiser_id/:platform_id/:campaign_id/:contract_id', async function (req, res) {
   let advertiserMnemonic = await backend.getAdvertiserMnemonic(req.params.advertiser_id);
   let platformMnemonic = await backend.getPlatformMnemonic(req.params.platform_id);

   let channel_data = await ton.createChannel(
      advertiserMnemonic,
      platformMnemonic,
   ); 

   let response = await backend.patchContract(
      channel_data,
      req.params.contract_id,
      req.params.campaign_id,
   );

   res.send(response);
});


router.get('/click/:advertiser_id/:platform_id/:contract_id', async function (req, res) {
   let advertiserMnemonic = await backend.getAdvertiserMnemonic(req.params.advertiser_id);
   let platformMnemonic = await backend.getPlatformMnemonic(req.params.platform_id);

   const { newState, signature } = await ton.signChannelState(advertiserMnemonic, platformMnemonic);
   
   res.send(
      { newState, signature }
   );
});


router.get('/finalise/:contract_id', function (req, res) {
   // get channel from backend
   // finalize channel
   // send update to backend
   res.send('Finalise channel with banner with id=' + req.params.contract_id);
});


module.exports = router;
