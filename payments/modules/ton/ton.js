const channels = require('./channels');


async function createChannel(advertiserMnemonic, platformMnemonic) {
    // Create a payment channel object
    const { channel, fromAdvertiser } = await channels.createChannelObject(advertiserMnemonic, platformMnemonic);

    await channels.deployChannel(fromAdvertiser);
    await channels.topUpChannel(fromAdvertiser, channels.getChannelInitState());
    await channels.initChannel(fromAdvertiser, channels.getChannelInitState());

    const channelAddress = await channel.getAddress();
    const channelAddressString = channelAddress.toString(true, true, true);
    const channel_data = {
        'address': channelAddressString,
    }
    return channel_data;
}

async function finalizeChannel() {
    console.log('finalize channel');
}


module.exports = {
    createChannel,
    finalizeChannel,
}
