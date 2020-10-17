import React from 'react';
import styled from 'styled-components';

export const ButtonComponent = ({ title, color, action }) => {
    return (
        <Button color={color} onClick={action} type="submit">
            {title}
        </Button>
    );
};

const handleColorType = color => {
    switch (color) {
        case 'signup':
            return 'background: #88A8BF;';
        case 'signin':
            return 'background: #9EA4A1;';
        case 'submit':
            return 'background: #405755;';
        default:
            return 'background: #D0BEA6;';
    }
};

const Button = styled.button`
	display: block;
	${({ color }) => handleColorType(color)};
	font-size: .9rem;
	border: 0;
	height: 40px;
	padding: 0 20px;
	cursor: pointer;
	border-radius: 5px;
	box-sizing: border-box;
`;

