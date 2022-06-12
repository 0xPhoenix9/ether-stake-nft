import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export default function WalletAddress(content = {}) {
    const temp = {
        address: 0xCd6f0E5b9fd800b7562e83493E0B5c28a19D31ca,

    }
    return (
        <Wrapper>
            <img className='metamask-icon' src="/images/Stake/MetaMask_Fox.png" />
            <Typography className="wallet-address">{temp.address}</Typography>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items:center;
    .metamask-icon{
        width:23px;
        height:22px;
        margin-left:5px;
    }
    .wallet-address{
        font-size: 23px;
        letter-spacing: 0px;
        color: #ffffff;
        font-family: "DeadStockDemo";
    }
`