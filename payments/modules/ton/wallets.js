const tonMnemonic = require('tonweb-mnemonic');


async function createKeyPairFromMnemonic(mnemomic) {
    return tonMnemonic.mnemonicToKeyPair(mnemomic.split(' '));
}

function createWalletFromKeyPair(tonWebObject, keyPair) {
    return tonWebObject.wallet.create({
        publicKey: keyPair.publicKey,
    });
}

function createWalletFromAddress(tonWebObject, address) {
    return tonWebObject.wallet.create(
        { address: address }
    );
}


module.exports = {
    createKeyPairFromMnemonic,
    createWalletFromKeyPair,
    createWalletFromAddress,
}
