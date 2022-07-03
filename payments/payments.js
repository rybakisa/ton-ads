const express = require('express');
const router = express.Router();
const axios = require('axios').default;


router.get('/start/:banner_id', function(req, res){
   // get both users from backend
   // create channel for them
   // send update to backend
   res.send('Start channel with banner with id=' + req.params.banner_id);
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
