const axios = require('axios').default;

const BACKEND_HOST = 'http://127.0.0.1:8000';



async function getContractData(contractId) {
    let response;

    try {
        response = await axios.get(
            `${BACKEND_HOST}/api/contracts/${contractId}/`,
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}

async function patchContract(channelData, contractId, campaignId) {
    let response;

    try {
        response = await axios.patch(
            `${BACKEND_HOST}/api/contracts/${contractId}/`,
            {
                "state": "ACTIVE",
                "channel": channelData,
                "campaign": campaignId,
            }
        );
    } catch (error) {
        response = error;
        console.error(error);
    }

    return response.data;
}


module.exports = {
    getContractData,
    patchContract,
}
