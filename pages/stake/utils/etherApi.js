import axios from 'axios';

const getTxList = async (account) => {
    console.log("txLIst funciton called!")
    const response = await axios.get("https://api-rinkeby.etherscan.io/api", {
        params: {
            module: 'account',
            action: 'tokennfttx',
            contractAddress: '0x8eb578d4fA26A2bA182f142d27B52EAE65832c0a',
            address: account,
            apikey: '29BGBNDYDU8GSR2IW7JRXUDUQ6Q6UF9RP5'
        }
    });
    return response.data.result;
}

const catchTime = async (account) => {
    const response = await axios.get("https://api-rinkeby.etherscan.io/api", {
        params: {
            module: 'account',
            action: 'txlist',
            contractAddress: '0xcAe5eF901c3eDA09578E32d967f549072827b249',
            address: account,
            apikey: '29BGBNDYDU8GSR2IW7JRXUDUQ6Q6UF9RP5'
        }
    });
    return response.data.result;
}
export {
    getTxList,
    catchTime
}