const provider = require('./provider');
const wallets = require('./wallets');
const utils = require('./utils');
const backend = require('../backend/backend');


function getFromWalletObject(channel, wallet, keyPair) {
    return channel.fromWallet({
        wallet: wallet,
        secretKey: keyPair.secretKey,
    });
}

async function createChannelObject(advertiserMnemonic, platformMnemonic, contractId, channelId) {
    // TON init
    const tonweb = await provider.initTonWeb();

    // Create Key Pairs
    const advertiserKeyPair = await wallets.createKeyPairFromMnemonic(advertiserMnemonic);
    const platformKeyPair = await wallets.createKeyPairFromMnemonic(platformMnemonic);

    // Create Wallets
    const advertiserWallet = wallets.createWalletFromKeyPair(tonweb, advertiserKeyPair);

    const channelConfigData = await backend.getChannelConfig(contractId, channelId);
    const channelConfig = await utils.castChannelConfig(tonweb, channelConfigData);

    const channel = tonweb.payments.createChannel({
        ...channelConfig,
        isA: true,
        myKeyPair: advertiserKeyPair,
        hisPublicKey: platformKeyPair.publicKey,
    });
    const fromWalletObject = getFromWalletObject(channel, advertiserWallet, advertiserKeyPair);

    return { channel, fromWalletObject };
}

async function deployChannel(fromWallet) {
    try {
        let deployed = await fromWallet.deploy().send(utils.toNano('0.05'));
        console.log(deployed);
    } catch (error) {
        console.error('Deploy error');
        console.error(error);
    }
}

async function topUpChannel(fromWallet, channelInitState) {
    try {
        let toppedUp = await fromWallet
            .topUp({
                coinsA: channelInitState.balanceA,
                coinsB: channelInitState.balanceB,
            })
            .send(
                channelInitState.balanceA.add(utils.toNano('0.05'))
            );
        console.log(toppedUp);
    } catch (error) {
        console.error('Top Up error');
        console.error(error);
    }
}

async function initChannel(fromWallet, channelInitState) {
    try {
        let initialized = await fromWallet.init(channelInitState).send(utils.toNano('0.05'));
        console.error(initialized);
    } catch (error) {
        console.error('Init error');
        console.error(error);
    }
}


module.exports = {
    createChannelObject,
    deployChannel,
    topUpChannel,
    initChannel,
}
