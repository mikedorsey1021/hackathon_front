import React from 'react'
import { fadeIn } from 'react-animations';
import style, { keyframes }  from 'styled-components';
import img from '../assets/bgpic.jpg'


export const LandingBG = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
const fadeInAnimation = keyframes`${fadeIn}`;

const Container = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 2s ${fadeInAnimation};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
	background-position: center;
    height: 92vh;
    width: 100%;
`