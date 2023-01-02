import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import arrow from "../images/down-arrow.svg"

function Section( {title, description, leftBtnText, rightBtnText, backgroundImg} ) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText} 
                    </LeftButton>
                    { rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>         
            <DownArrow src={arrow} />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url(${props.bgImage})`}
    `
const ItemText = styled.div`
    padding-top: 18vh;
    text-align: center;
    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`
    
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: grey;
    color: white; 
    height: 8vh;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem;
    padding: 1.5rem;
    @media (max-width: 1024px){
        padding: 1rem;
        width: 30vw;
        height: 5vh;
        font-size: 0.7rem;
    }
    @media (max-width: 768px){
        width: 50vw;
        height: 5vh;
    }

`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
    text-align: center;
`