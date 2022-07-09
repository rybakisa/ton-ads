const express = require('express');
const router = express.Router();

const ton = require('./modules/tonUtils.js');
const backend = require('./modules/backend.js');


router.get('/start/:advertiser_id/:platform_id/:campaign_id/:contract_id', async function (req, res) {
   let advertiserMnemonic = await backend.getAdvertiserMnemonic(req.params.advertiser_id);
   let platformMnemonic = await backend.getPlatformMnemonic(req.params.platform_id);

   let channelAddress = await ton.createChannel(
      advertiserMnemonic,
      platformMnemonic,
   );

   let response = await backend.patchContract(channelAddress, req.params.contract_id, req.params.campaign_id);

   res.send(response);
});


router.get('/click/:contract_id', async function (req, res) {
   // get contract data
   let contract_data = await backend.getContractData(req.params.contract_id);
   console.log(contract_data);
   // get channel from backend
   // create new channel state
   // sign new channel state
   // send update to backend
   res.send(contract_data);
});


router.get('/finalise/:contract_id', function (req, res) {
   // get channel from backend
   // finalize channel
   // send update to backend
   res.send('Finalise channel with banner with id=' + req.params.contract_id);
});


module.exports = router;
