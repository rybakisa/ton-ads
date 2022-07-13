const channels = require('./channels');


async function createChannel(advertiserMnemonic, platformMnemonic) {
    // Create a payment channel object
    const { channel, fromAdvertiser } = await channels.createChannelObject(advertiserMnemonic, platformMnemonic);

    await channels.deployChannel(fromAdvertiser);
    await channels.topUpChannel(fromAdvertiser, channels.getInitChannelState());
    await channels.initChannel(fromAdvertiser, channels.getInitChannelState());

    const channelAddress = await channel.getAddress();
    const channel_data = {
        'address': channelAddress.toString(true, true, true),
    }
    return channel_data;
}


async function signChannelState(advertiserMnemonic, platformMnemonic) {
    // Create a payment channel object
    const { channel, fromAdvertiser } = await channels.createChannelObject(advertiserMnemonic, platformMnemonic);

    const newState = channels.getNewChannelState();
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
