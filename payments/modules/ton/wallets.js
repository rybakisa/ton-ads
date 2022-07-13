const tonMnemonic = require('tonweb-mnemonic');


async function createKeyPairFromMnemonic(mnemomic) {
    return tonMnemonic.mnemonicToKeyPair(mnemomic.split(' '));
}

function createWallet(tonWebObject, keyPair) {
    return tonWebObject.wallet.create({
        publicKey: keyPair.publicKey,
    });
}


module.exports = {
    createKeyPairFromMnemonic,
    createWallet,
}
