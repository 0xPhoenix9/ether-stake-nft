import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import axios from 'axios';
import Web3 from 'web3';
import JackedABI from '../../../ABI/JackedApeClub.json';
import StakeABI from '../../../ABI/Stakeable.json';
import { useState } from 'react';
import { MarketContext } from '../../../context/MarketContext';


export default function FlowCardComp({ tokenId, account }) {
    let web3;
    const [imageUrl, setImageUrl] = useState();
    const [stakeStatus, setStakeStatus] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);
    const [loading, setLoading] = useState(false);

    const { stakedItems, setStakedItems } = React.useContext(MarketContext);

    React.useEffect(async () => {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            const stakeContractInstance = new web3.eth.Contract(StakeABI.abi, StakeABI.address);
            const contractInstance = new web3.eth.Contract(JackedABI.abi, JackedABI.address);
            const tokenInfo = await contractInstance.methods.tokenURI(tokenId).call();
            const stakeStatus = await stakeContractInstance.methods.getStakedTokenIds(account).call();
            setStakedItems(stakeStatus);
            if (stakeStatus.includes(tokenId)) {
                setStakeStatus(true);
            }

            const tokenUri = tokenInfo.replace("ipfs://", "https://ipfs.io/ipfs/");
            const meta = await axios.get(tokenUri);
            const imgUrl = (meta.data.image).replace("ipfs://", "https://ipfs.io/ipfs/");
            setImageUrl(imgUrl);
        }
    }, []);


    const stakeNFT = async () => {
        if (window.ethereum) {
            setLoading(true);
            web3 = new Web3(window.ethereum);
            const contractInstance = new web3.eth.Contract(JackedABI.abi, JackedABI.address);
            const stakeContractInstance = new web3.eth.Contract(StakeABI.abi, StakeABI.address);
            const to = "0xcAe5eF901c3eDA09578E32d967f549072827b249";
            await contractInstance.methods.approve(to, tokenId).send({
                from: account
            });
            await stakeContractInstance.methods.stake(tokenId).send({
                from: account
            });
            setLoading(false);

            // const temp = stakedItems;
            // temp.push(tokenId);
            // setStakedItems(temp);
            window.location.reload();
        }
    }

    return (
        // <Wrapper content={content}>
        //     {/* <img className='card-item' src={content.imgUrl} /> */}
        //     <div className='card-item'>
        //         <div className={content.state}>
        //             {content.state}
        //         </div>
        //     </div>
        // </Wrapper>
        <Wrapper>
            <CardItem content={imageUrl} onMouseOver={() => setDisplayButton(true)} onMouseLeave={() => setDisplayButton(false)}>
                {
                    loading ? <CircularProgress /> :
                        !stakeStatus && displayButton && <StakeButtonArea>
                            <Button onClick={() => stakeNFT()}>
                                Stake
                            </Button>
                        </StakeButtonArea>
                }
                {
                    stakeStatus && <StakedText>
                        Staked
                    </StakedText>
                }
            </CardItem>
        </Wrapper>
    );
}

const StakedText = styled.div`
    font-family: DeadStockDemo;
    font-size: 50px;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StakeButtonArea = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Button = styled.div`
    width: 126px;
    height: 42px;
    border: 2px solid rgba(255, 255, 255, 0.6);
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const CardItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:236px;
    height:236px;
    background-image:url('${props => props.content}');
    background-size: 100%;
    position:relative;
    border-radius:25px;
    margin-right:80px;
    cursor: pointer;
`

const Wrapper = styled.div`
    position: relative;
    .stake{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 126px;
        height: 42px;
        border:2px solid #ffffff;
        font-size:25px;
        display:none;
    }
    .staked{
        font-family:DeadStockDemo;
        font-size:50px;
        .card-item{
            border:none;
        }
    }

    .card-item:hover{
        opacity:0.5;
        .stake{
            display:flex;
        }
        cursor: pointer;
    }

`