const axios = require('axios').default;
const contracts = require('./contracts');

const BACKEND_HOST = 'http://127.0.0.1:8000';


function prepareStateData(channelId, newState, signature) {
    return {
        balanceA: Number(newState.balanceA),
        balanceB: Number(newState.balanceB),
        seqnoA: Number(newState.seqnoA),
        seqnoB: Number(newState.seqnoB),
        signature: signature,
        channel: channelId,
    };
}

async function getChannelId(contractId) {
    const contractData = await contracts.getContractData(contractId);
    return contractData.channel.id;
}

async function submitChannelState(contractId, newState, signature) {
    let response;
    let channelId = await getChannelId(contractId);

    try {
        response = await axios.post(
            `${BACKEND_HOST}/api/contracts/${contractId}/channels/${channelId}/states/`,
            prepareStateData(channelId, newState, signature),
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}


module.exports = {
    submitChannelState,
}
