// Styled Components
import styled from "styled-components";

// Next
import Link from "next/link";

// Images

//
import { Box, } from "@mui/system";
import { Typography } from '@mui/material';

import FlowCardComp from './StakeItem/FlowCardComp';
import CardComp from "./StakeItem/CardComp";
import WalletAddress from "./StakeItem/WalletAddress";

const Stake = () => {
    const temp = [
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        },
        {
            title: 'Jacked Ape#0001',
            rank: 'Gym Lad',
            pumpCollected: '27 Pump',
            pumpRate: '5 Pump/24hrs',
            currentStreak: '7D 3H',
            nextStreak: '7'
        }
    ]

    const footerItem = [
        {
            imgUrl: '/images/Stake/Layer 2.png',
            state: 'stake',
        },

        {
            imgUrl: '/images/Stake/Layer 3.png',
            state: 'staked',
        },
        {
            imgUrl: '/images/Stake/Layer 4.png',
            state: 'stake',
        },
        {
            imgUrl: '/images/Stake/Layer 5.png',
            state: 'staked',
        },
        {
            imgUrl: '/images/Stake/Layer 6.png',
            state: 'stake',
        },
        {
            imgUrl: '/images/Stake/Layer 7.png',
            state: 'staked',
        },
        {
            imgUrl: '/images/Stake/Layer 6.png',
            state: 'stake',
        },
        {
            imgUrl: '/images/Stake/Layer 7.png',
            state: 'staked',
        }

    ]
    return (
        <Wrapper>
            <div className="stake-container">
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Img src='/images/Logos/Fill-White.png' alt=""></Img>
                </div>
                <div className="head-title">
                    STAKING ROUTINE
                </div>
            </div>
            <div className="detail-container" >
                <Box
                    sx={{
                        width: '30%',
                        height: 517,
                        paddingLeft: 3,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                        },
                    }}
                    className={"detail-box"}
                >
                    <Typography className="total-title">TOTAL RESULTS</Typography>
                    <div className="text-box">
                        <div className="text-container">
                            <div className="total-content-tag">Workout Streak:</div>
                            <div className="total-content">17 Days</div>
                            <div className="total-content-tag">pumpCollected:</div>
                            <div className="total-content">17 $Pump</div>
                            <div className="total-content-tag">pumpRate:</div>
                            <div className="total-content">1 $Pump / Day</div>
                        </div>
                    </div>

                </Box>
                <Box
                    sx={{
                        width: '65%',
                        paddingLeft: 10,
                        paddingRight: 8,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                        },
                    }}
                    className={"items-box"}
                >
                    <div className="total-title">Staking</div>
                    <div className="box_wrapper">
                        <BoxContainer className="box-container">
                            {
                                temp.map((item, index) => {
                                    return (
                                        <CardComp content={item} key={index}></CardComp>
                                    )
                                })
                            }
                        </BoxContainer>
                    </div>
                </Box>

            </div>
            <div className="detail-footer">
                <Box
                    sx={{
                        width: '100%',
                        paddingLeft: 3,
                        paddingRight: 3,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                        },
                    }}
                    className={"detail-footer-box"}
                >
                    <div className="footer-wallet">
                        <Typography className="footer-title">Wallet</Typography>
                        <WalletAddress></WalletAddress>
                    </div>
                    <StateBoxContainer>
                        <div className="footer-cards">
                            {
                                footerItem.map((item, index) => {
                                    return (
                                        <FlowCardComp content={item} key={index}></FlowCardComp>
                                    )
                                })
                            }
                        </div>
                    </StateBoxContainer>
                </Box>

            </div>
            <div style={{height: "100px"}}></div>
        </Wrapper >
    );
};

export default Stake;

const BoxContainer = styled.div`
    width: 100%;
    height: 420px;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StateBoxContainer = styled.div`
    padding-bottom: 20px;
    overflow-x:auto;
    width:100%;
`

const Img = styled.img`
    width: 420px;
    height: 105px;
    margin: 20px;
    position: relative;
    z-index: 10000;
    @media (max-width: 375px) {
        width: 320px;
        height: 80px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
    overflow: hidden;

    .stake-container{
        width: 100%;
        height: 100%;   
        background-color: grey;
        
    };

    .main-logo{
        width: 412px;
        height: 102px;
        margin: auto;
    };
    .stake-container{
        .head-title{
            text-align: center;
            font-size: 44px;
            letter-spacing: 1px;
            color: #ffffff;
            font-family: "DeadStockDemo";
        };
    }
    .detail-container{
        display:flex;
        justify-content: space-between;
        padding:16px 46px;
        .detail-box{
            width:34%;
        }
        .items-box{
            width:65%;
        }
    };
    .text-box {
        width: 100%;
        display: flex;
        justify-content: left;    
    }
    
    .text-container {
        width: fit-content;
    }

    .total-title{
        font-size: 60px;
        letter-spacing: 1px;
        color: #ffffff;
        font-family: "DeadStockDemo";
    };

    .total-content-tag{
        font-size: 28px;
        letter-spacing: 1px;
        color: #ffffff;
        font-weight: bold;
        font-family: "Helvetica";
    };

    .total-content{
        font-size: 53px;
        letter-spacing: 1px;
        color: #ffffff;
        font-weight: bold;
        font-family: "Helvetica";
    };

    .detail-footer{
        width: calc(100%);
        display:flex;
        justify-content: center;
        padding: 0px 46px;
        margin: 0px;
        height: fit-content;

        .detail-footer-box{
            width: 100%;
            height: 335px;
        }
    }
    .items-box{
        height: 517px;
        .box-container {
            height: 425px;
        }
    }


    .footer-title{
        font-size: 42px;
        letter-spacing: 1px;
        color: #ffffff;
        font-family: "DeadStockDemo";
    }

    .footer-wallet{
        display:flex;
        justify-content:space-between;
    }

    .footer-cards{
        display:flex;
        justify-content:space-between;
    }

    @media (max-width: 1440px) {
        .total-content {
            font-size: 45px;
        }
        .total-content-tag{
            font-size: 28px;
            width: fit-content;
            line-height: 40px;
        };
        
    }
    @media (max-width: 1024px) {
        .detail-container{
            flex-direction: column;
            .detail-box{
                width: 100%;
                margin-top: 20px;
            }
            .items-box{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top:20px;
                .box-container {
                    height: 100vh;
                }
            }
        }

        .total-title{
            text-align: center;
            padding-top:30px;
            padding-top:20px;
        }
        .text-box{
            justify-content:center;
        }
        .detail-footer{
            .detail-footer-box{
                width: 100%;
                height: 360px;
            }
        }

    }
    @media only screen and (max-width: 768px) {
        .box_wrapper{
            width: 605px;
            .box-container{
                width: 90%;
                height: 400px;
                overflow-y: auto;
                flex-wrap: wrap;
            }
        }
        
        .detail-footer{
            width: 100%;

            .detail-footer-box{
                width: 100%;
                height: 400px;
            }
        }

        .card-item{
            margin-right:0px;
            margin:20px;
        }
        .hZqYkZ{
            padding-right:50px; 
        }
        .css-dq8qjh {
            padding: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 690px) {
        .main-logo-image {
            width: 320px !important;
            height: 80px !important;
        }
        .stake-container{
            .head-title {
                font-size: 30px;
            }
        }


        .detail-container {
            width: 90%;
            padding: 0px;   
            margin: auto;
            .items-box{
                width: 100%;
            }
        }

        .box_wrapper{
            width:100%;
            .box-container{
                overflow-y: auto;
                width: 100%;
                height: 420px;
                
            }
        }
        .hZqYkZ{
            padding-right:0px; 
        }
        .detail-footer {
            margin: auto;
            width: 90%;
            padding: 0px;
            margin-top: 20px;
        }
        .footer-wallet {
            display: flex;
            flex-direction: column;
        }
        .wallet-address {
            font-size: 16px;
            line-height: 16px;
        }
        .metamask-icon {
            margin: 0px;
            margin-right: 20px;
        }
        .total-title{
            line-height:70px;
        }

    }


    @media (max-width: 425px) {
        .main-logo-image {
            width: 320px !important;
            height: 80px !important;
        }

        .stake-container{
            .head-title {
                font-size: 30px;
            }
        }

        .detail-container {
            width: 90%;
            padding: 0px;   
            margin: auto;
            .items-box{
                padding: 0px;
                width: 100%;
                .box_wrapper {
                    width: 100%;            
                    .box-container{
                        overflow-y: auto;
                        margin: auto;
                        width: 100%;
                        height: 420px;       
                    }
                }
            }
        }

        .detail-footer {
            margin: auto;
            width: 90%;
            padding: 0px;
            margin-top: 20px;

        }
        .footer-wallet {
            display: flex;
            flex-direction: column;
        }
        .wallet-address {
            font-size: 16px;
            line-height: 16px;
        }
        .metamask-icon {
            margin: 0px;
            margin-right: 20px;
        }
        .total-title{
            line-height:70px;
        }
    }
    @media (max-width: 375px) {
        .items-box{
            padding: 0px;
            width: 100%;

            .box_wrapper {
                width: 100%;

                .box-container{
                    overflow-y: auto;
                    margin: auto;
                    width: 100%;
                    height: 420px;       
                }
            }
        }
    }
`;