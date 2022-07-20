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

async function patchContract(channelData, contractId, campaignId) {
    let response;

    try {
        response = await axios.patch(
            `${BACKEND_HOST}/api/contracts/${contractId}/`,
            {
                "state": "ACTIVE",
                "channel": channelData,
                "campaign": campaignId,
            }
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}

async function getContractData(contractId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/contracts/${contractId}/`,
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}

async function submitChannelState(contractId, newState, signature) {
    let response;

    let contractData = await getContractData(contractId)
    let channelId = contractData.channel.id;

    let stateData = {
        balanceA: Number(newState.balanceA),
        balanceB: Number(newState.balanceB),
        seqnoA: Number(newState.seqnoA),
        seqnoB: Number(newState.seqnoB),
        signature: signature,
        channel: channelId,
    };
    console.log(stateData);

    try {
        response = await axios.post(
            `${BACKEND_HOST}/api/contracts/${contractId}/channels/${channelId}/states/`,
            stateData,
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}


module.exports = {
    getAdvertiserMnemonic,
    getPlatformMnemonic,
    patchContract,
    getContractData,
    submitChannelState,
}
