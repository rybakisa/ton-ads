const provider = require("./provider");
const wallets = require("./wallets");
const utils = require("./utils");


// TODO: This function must only receive configuration objects from contract parameters from backend
function getInitChannelState() {
    return {
        balanceA: utils.toNano('0.5'),
        balanceB: utils.toNano('0'),
        seqnoA: new utils.BN(0),
        seqnoB: new utils.BN(0),
    };
}

// TODO: This function must receive channelId from backend
function createChannelConfig(advertiserWalletAddress, platformWalletAddress, channelInitState) {
    return {
        channelId: new utils.BN(123),
        addressA: advertiserWalletAddress,
        addressN: platformWalletAddress,
        initBalanceA: channelInitState.balanceA,
        initBalanceB: channelInitState.balanceB,
    };
}

// TODO: This function must only receive configuration objects from contract parameters from backend
function getLastChannelState() {
    return getInitChannelState();
}

// TODO: This function must only receive configuration objects from contract parameters from backend
function getNewChannelState() {
    const lastState = getLastChannelState();
    const clickPrice = utils.toNano('0.1');

    return {
        balanceA: lastState.balanceA.sub(clickPrice),
        balanceB: lastState.balanceB.add(clickPrice),
        seqnoA: lastState.seqnoA.add(new utils.BN(1)),
        seqnoB: lastState.seqnoB,
    };
}

function getFromWalletObject(channel, wallet, keyPair) {
    return channel.fromWallet({
        wallet: wallet,
        secretKey: keyPair.secretKey,
    });
}

async function createChannelObject(advertiserMnemonic, platformMnemonic) {
    // TON init
    const tonweb = await provider.initTonWeb();

    // Create Key Pairs
    const advertiserKeyPair = await wallets.createKeyPairFromMnemonic(advertiserMnemonic);
    const platformKeyPair = await wallets.createKeyPairFromMnemonic(platformMnemonic);

    // Create Wallets
    const advertiserWallet = wallets.createWallet(tonweb, advertiserKeyPair);
    const advertiserWalletAddress = await advertiserWallet.getAddress();

    const platformWallet = wallets.createWallet(tonweb, platformKeyPair);
    const platformWalletAddress = await platformWallet.getAddress();

    // Channel initial configuration
    const channelInitState = getInitChannelState();
    const channelConfig = createChannelConfig(advertiserWalletAddress, platformWalletAddress, channelInitState);

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
    let deployed;

    try {
        deployed = await fromWallet.deploy().send(utils.toNano('1'));
    } catch (error) {
        console.error(error);
    }
}

async function topUpChannel(fromWallet, channelInitState) {
    let toped_up;

    try {
        toped_up = await fromWallet
            .topUp({
                coinsAdvertiser: channelInitState.balanceAdvertiser,
                coinsPlatform: new utils.BN(0)
            })
            .send(
                channelInitState.balanceAdvertiser.add(utils.toNano('0.05'))
            ); // +0.05 TON to network fees
    } catch (error) {
        console.error(error);
    }
}

async function initChannel(fromWallet, channelInitState) {
    let initialized;

    try {
        initialized = await fromWallet.init(channelInitState).send(utils.toNano('0.05'));
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getInitChannelState,
    getNewChannelState,
    createChannelObject,
    deployChannel,
    topUpChannel,
    initChannel,
}
