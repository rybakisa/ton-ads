const axios = require('axios').default;

const BACKEND_HOST = 'http://127.0.0.1:8000';


async function getAdvertiserMnemonic(advertiserId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/advertisers/${advertiserId}/`
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data.profile.ton_account_mnemonic;
}

async function getPlatformMnemonic(platformId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/platforms/${platformId}/`
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data.profile.ton_account_mnemonic;
}


module.exports = {
    getAdvertiserMnemonic,
    getPlatformMnemonic,
}
