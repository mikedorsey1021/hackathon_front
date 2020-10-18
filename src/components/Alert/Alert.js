import React from 'react'
import style from 'styled-components';

export const Alert = ({error}) => {
    return (
        <div>
            <H1>{error}</H1>
        </div>
    )
}

const H1 = style.h1`
    color: red;
    font-weight:bold;
`

