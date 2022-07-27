const axios = require('axios').default;

const contracts = require('./contracts');
const utils = require('../ton/utils');

const BACKEND_HOST = 'http://127.0.0.1:8000';


async function getInitChannelStateData(contractId, channelId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/contracts/${contractId}/channels/${channelId}/states/initial/`,
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}

async function getChannelConfig(contractId, channelId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/contracts/${contractId}/channels/${channelId}/config/`,
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}

async function getLastChannelState(contractId, channelId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/contracts/${contractId}/channels/${channelId}/states/latest/`,
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}

async function getNewChannelState(contractId, channelId) {
    // TODO: Get from contract data from backend
    const clickPrice = utils.toNano('0.01');

    const lastStateData = await getLastChannelState(contractId, channelId);
    const lastState = utils.castChannelState(lastStateData);

    return {
        balanceA: lastState.balanceA.sub(clickPrice),
        balanceB: lastState.balanceB.add(clickPrice),
        seqnoA: lastState.seqnoA.add(new utils.BN(1)),
        seqnoB: lastState.seqnoB,
    };
}

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
    getInitChannelStateData,
    getChannelConfig,
    getLastChannelState,
    getNewChannelState,
    submitChannelState,
}
