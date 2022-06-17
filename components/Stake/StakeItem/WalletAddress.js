import { Typography } from '@mui/material';
import React from 'react';
import Web3 from 'web3';
import { useState } from 'react';
import styled from 'styled-components';
import reactReveal from 'react-reveal';

export default function WalletAddress(content = {}) {
    const temp = {
        address: 0xb1d430E46c3Dd427EBc36CE6764320D29f9103f7,
    }

    const [walletAddress, setWalletAddress] = useState();

    React.useEffect(async () => {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            const currentAccount = await web3.eth.getAccounts();
            setWalletAddress(currentAccount);
        }
    });
    return (
        <Wrapper>
            <img className='metamask-icon' src="/images/Stake/MetaMask_Fox.png" />
            <Typography className="wallet-address">{walletAddress}</Typography>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items:center;
    .metamask-icon{
        width:23px;
        height:22px;
        margin-right:7px;
        margin-bottom:4px;
        margin-left:5px;
    }
    .wallet-address{
        font-size: 23px;
        letter-spacing: 0px;
        color: #ffffff;
        font-family: "DeadStockDemo";
    }
`