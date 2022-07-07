const TonWeb = require('tonweb');
const tonMnemonic = require('tonweb-mnemonic');

const BN = TonWeb.utils.BN;
const toNano = TonWeb.utils.toNano;

const TON_API_KEY = '7eb4b0942f623ae1722efcac64ce858205b7f22acf761bc09efd61938e6937bf';
const TON_PROVIDER_API_URL = 'https://testnet.toncenter.com/api/v2/jsonRPC';


async function initTonWeb() {
    return new TonWeb(new TonWeb.HttpProvider(TON_PROVIDER_API_URL, {apiKey: TON_API_KEY})); 
}

async function createKeyPairFromMnemonic(mnemomic) {
    return tonMnemonic.mnemonicToKeyPair(mnemomic.split(' '));
}

function createWallet(tonWebObject, keyPair) {
    return tonWebObject.wallet.create({
        publicKey: keyPair.publicKey,
    });
}

function getFromWalletObject(channel, wallet, keyPair) {
    return channel.fromWallet({
        wallet: wallet,
        secretKey: keyPair.secretKey,
    });
}

async function getChannelObject(tonweb, channelConfig, advertiserKeyPair, platformKeyPair) {
    const channel = tonweb.payments.createChannel({
        ...channelConfig,
        isAdvertiser: true,
        myKeyPair: advertiserKeyPair,
        hisPublicKey: platformKeyPair.publicKey,
    });

    return channel;
}

async function deployChannel(fromWallet) {
    let deployed;

    try {
        deployed = await fromWallet.deploy().send(toNano('1'));
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
                coinsPlatform: new BN(0)
            })
            .send(
                channelInitState.balanceAdvertiser.add(toNano('0.05'))
            ); // +0.05 TON to network fees
    } catch (error) {
        console.error(error);
    }
}

async function initChannel(fromWallet, channelInitState) {
    let initialized;

    try {
        initialized = await fromWallet.init(channelInitState).send(toNano('0.05'));
    } catch (error) {
        console.error(error);
    }
}


async function createChannel(advertiserMnemonic, platformMnemonic) {
    // TON init
    const tonweb = await initTonWeb();

    // Create Key Pairs
    const advertiserKeyPair = await createKeyPairFromMnemonic(advertiserMnemonic);
    const platformKeyPair = await createKeyPairFromMnemonic(platformMnemonic);

    // Create Wallets
    const advertiserWallet = createWallet(tonweb, advertiserKeyPair);
    const advertiserWalletAddress = await advertiserWallet.getAddress();

    const platformWallet = createWallet(tonweb, platformKeyPair);
    const platformWalletAddress = await platformWallet.getAddress();

    // Channel initial configuration
    const channelInitState = {
        balanceAdvertiser: toNano('0.5'),
        balancePlatform: toNano('0'),
        seqnoAdvertiser: new BN(0),
        seqnoPlatform: new BN(0),
    };

    const channelConfig = {
        channelId: new BN(123), // Channel ID, for each new channel there must be a new ID
        addressAdvertiser: advertiserWalletAddress, // A's funds will be withdrawn to this wallet address after the channel is closed
        addressPlatform: platformWalletAddress, // B's funds will be withdrawn to this wallet address after the channel is closed
        initBalanceAdvertiser: channelInitState.balanceAdvertiser,
        initBalancePlatform: channelInitState.balancePlatform,
    };

    // Create a payment channel object
    const channel = await getChannelObject(tonweb, channelConfig, advertiserKeyPair, platformKeyPair);
    const fromAdvertiser = getFromWalletObject(channel, advertiserWallet, advertiserKeyPair);

    await deployChannel(fromAdvertiser);
    await topUpChannel(fromAdvertiser, channelInitState);
    await initChannel(fromAdvertiser, channelInitState);

    const channelAddressString = await channel.getAddress().toString(true, true, true);
    return channelAddressString;
}

async function signState(state) {
    const signature = await channel.signState(state);
    return signature;
}


module.exports = {createChannel}
