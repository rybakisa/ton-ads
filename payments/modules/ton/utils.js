const wallets = require('./wallets');
const TonWeb = require('tonweb');


const BN = TonWeb.utils.BN;

const toNano = TonWeb.utils.toNano;

async function castChannelConfig(tonweb, channelConfigData) {
    const walletAdvertiser = wallets.createWalletFromAddress(tonweb, channelConfigData.addressA);
    const walletPlatform = wallets.createWalletFromAddress(tonweb, channelConfigData.addressA);

    const addressAdvertiser = await walletAdvertiser.getAddress();
    const addressPlatform = await walletPlatform.getAddress();

    return {
        channelId: new BN(channelConfigData.channelId),
        addressA: addressAdvertiser,
        addressB: addressPlatform,
        initBalanceA: toNano(String(channelConfigData.initBalanceA)),
        initBalanceB: toNano(String(channelConfigData.initBalanceB)),
    }
}

function castChannelState(channelStateData) {
    return {
        balanceA: toNano(String(channelStateData.balanceA)),
        balanceB: toNano(String(channelStateData.balanceB)),
        seqnoA: new BN(channelStateData.seqnoA),
        seqnoB: new BN(channelStateData.seqnoB),
    };
}


module.exports ={
    BN,
    toNano,
    castChannelConfig,
    castChannelState,
}
