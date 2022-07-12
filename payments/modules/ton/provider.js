const TonWeb = require('tonweb');

const TON_API_KEY = '7eb4b0942f623ae1722efcac64ce858205b7f22acf761bc09efd61938e6937bf';
const TON_PROVIDER_API_URL = 'https://testnet.toncenter.com/api/v2/jsonRPC';


async function initTonWeb() {
    return new TonWeb(new TonWeb.HttpProvider(TON_PROVIDER_API_URL, { apiKey: TON_API_KEY }));
}

exports.initTonWeb = initTonWeb;
