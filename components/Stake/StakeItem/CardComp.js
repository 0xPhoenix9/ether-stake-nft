import React from 'react';
import styled from 'styled-components';


export default function CardComp({ content = {} }) {

    const temp = {
        title: 'Jacked Ape#0001',
        rank: 'Gym Lad',
        pumpCollected: '27 Pump',
        pumpRate: '5 Pump/24hrs',
        currentStreak: '7D 3H',
        nextStreak: '7'
    }
    return (
        <Container>
            <Img src="/images/Stake/Layer 4.png"></Img>
            <ContentBox>
                <Content fontSize={17}>
                    {content.title}
                </Content>
                <Content fontSize={10}>
                    {'Rank: ' + content.rank}
                </Content>
                <Content fontSize={10}>
                    {'Pump Collected: ' + content.pumpCollected}
                </Content>
                <Content fontSize={10}>
                    {'Pump Rate: ' + content.pumpRate}
                </Content>
                <div style={{ width: '211px', display: 'flex', justifyContent: 'space-between' }}>
                    <Content fontSize={8}>
                        {'Current Streak: ' + content.currentStreak}
                    </Content>
                    <Content fontSize={8}>
                        {'Next Streak: ' + content.nextStreak}
                    </Content>
                </div>
                <RankBar>
                    <FilledBar value={30}></FilledBar>
                </RankBar>
                <FlexRow>
                    <Img2 src='/images/Logos/Fill-White.png'></Img2>
                    <DecorText>unstake</DecorText>
                </FlexRow>
            </ContentBox>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 1016px) {
        margin-bottom: 0px;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        margin: auto;

        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 510px) {
        margin: auto;

        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 425px) {
        margin: auto;
        width: 100%

        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const ContentBox = styled.div`
    height: 181px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 25px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`
const Img = styled.img`
    width: 181px;
    height: 181px;
    border-radius: 25px;
    margin: auto;
`
const Img2 = styled.img`
    width: 115px;
    height: 29px;
`
const RankBar = styled.div`
    width: 211px;
    background-color: white;
`
const Content = styled.div`
    font-size: ${props => props.fontSize}px;
    letter-spacing: 0px;
    line-height: 1px;
    color: #ffffff;
    font-weight: bold;
    font-family: "Helvetica";
`;

const FilledBar = styled.div`
    width: ${props => props.value}%;
    height: 14px;
    background-color: #8dffa0;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    width: 236px;
    justify-content: space-between;
    margin-right: 40px;
    @media (max-width: 375px) {
        margin-right: 0px;
    }
`

const DecorText = styled.div`
    font-size: 17px;
    color: red;
    font-family: "DeadStockDemo";
    text-transform: uppercase;
`