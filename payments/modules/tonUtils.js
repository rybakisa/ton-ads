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

async function createChannel(advertiserMnemonic, platformMnemonic) {
    // TON init
    const tonweb = await initTonWeb();

    // Create Key Pairs
    const advertiserKeyPair = await createKeyPairFromMnemonic(advertiserMnemonic);
    const platformKeyPair = await createKeyPairFromMnemonic(platformMnemonic);

    // Create Wallets
    const advertiserWallet = createWallet(tonweb, advertiserKeyPair);
    const advertiserWalletAddress = await advertiserWallet.getAddress();
    console.log(advertiserWalletAddress.toString(true, true, true));

    const platformWallet = createWallet(tonweb, platformKeyPair);
    const platformWalletAddress = await platformWallet.getAddress();
    console.log(platformWalletAddress.toString(true, true, true));

    // Channel initial configuration
    const channelInitState = {
        balanceA: toNano('0.5'),
        balanceB: toNano('0'),
        seqnoA: new BN(0),
        seqnoB: new BN(0),
    };

    const channelConfig = {
        channelId: new BN(123), // Channel ID, for each new channel there must be a new ID
        addressA: advertiserWalletAddress, // A's funds will be withdrawn to this wallet address after the channel is closed
        addressB: platformWalletAddress, // B's funds will be withdrawn to this wallet address after the channel is closed
        initBalanceA: channelInitState.balanceAdvertiser,
        initBalanceB: channelInitState.balancePlatform,
    };

    // Create a payment channel object
    const channel = tonweb.payments.createChannel({
        ...channelConfig,
        isA: true,
        myKeyPair: advertiserKeyPair,
        hisPublicKey: platformKeyPair.publicKey,
    });
    const channelAddress = await channel.getAddress(); // address of this payment channel smart-contract in blockchain
    const channelAddressString = await channelAddress.toString(true, true, true);
    console.log('channelAddress =', channelAddressString);

    const fromAdvertiser = channel.fromWallet({
        wallet: advertiserWallet,
        secretKey: advertiserKeyPair.secretKey,
    });

    // Deploy channel
    try {
        let deployed = await fromAdvertiser.deploy().send(toNano('1'));
        console.log(deployed);
    } catch (error) {
        console.error(error);
    }

    console.log(await channel.getChannelState());
    console.log(await channel.getData());

    return channelAddressString;
}

module.exports = {createChannel}
