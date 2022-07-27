const channels = require('./channels');
const utils = require('./utils');
const backend = require('../backend/backend');


async function createChannel(advertiserMnemonic, platformMnemonic, contractId, channelId) {
    const { channel, ...helpers } = await channels.createChannelObject(advertiserMnemonic, platformMnemonic, contractId, channelId);
    const fromAdvertiser = helpers.fromWalletObject;

    const initialStateData = await backend.getInitChannelStateData(contractId, channelId);
    const initialState = utils.castChannelState(initialStateData);

    await channels.deployChannel(fromAdvertiser);
    await channels.topUpChannel(fromAdvertiser, initialState);
    await channels.initChannel(fromAdvertiser, initialState);

    const channelAddress = await channel.getAddress();
    const channelData = {
        'address': channelAddress.toString(true, true, true),
    }
    return channelData;
}


async function signChannelState(advertiserMnemonic, platformMnemonic, contractId, channelId) {
    const { channel, _ } = await channels.createChannelObject(advertiserMnemonic, platformMnemonic, contractId, channelId);

    const newState = await backend.getNewChannelState(contractId, channelId);
    const signature = await channel.signState(newState);

    return { newState, signature };
}


async function finalizeChannel() {
    console.log('finalize channel');
}


module.exports = {
    createChannel,
    signChannelState,
    finalizeChannel,
}
