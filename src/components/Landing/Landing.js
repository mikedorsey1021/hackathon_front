import React from 'react'
import { Container } from 'reactstrap';
import style from 'styled-components';
import { ContactForm } from '../form/ContactForm';

import {LandingBG} from './LandingBG'



export const Landing = () => {
    return (
        <LandingBG >
            <ContainerDiv>
                <div>
                <h1>Welcome to Illinois Joining Forces</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, impedit.</p>
                </div>
            </ContainerDiv>
        </LandingBG>
    )
}

const ContainerDiv = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    text-align: center;
    border: 2px solid #000;
    border-radius: 10px;
    height: 40vh;
    width: 40%;
    background: rgba(0, 0, 0, .2);
    color: #fff;
`










