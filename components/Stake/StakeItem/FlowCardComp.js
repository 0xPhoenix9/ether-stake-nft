import React from 'react';
import styled from 'styled-components';


export default function FlowCardComp({ content = {} }) {

    return (
        <Wrapper content={content}>
            {/* <img className='card-item' src={content.imgUrl} /> */}
            <div className='card-item'>
                <div className={content.state}>
                    {content.state}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    
    .card-item{
        display:flex;
        align-items:center;
        justify-content:center;
        width:236px;
        height:236px;
        background-image:url('${props => props.content.imgUrl}');
        position:relative;
        border-radius:25px;
        margin-right:80px;
    }
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