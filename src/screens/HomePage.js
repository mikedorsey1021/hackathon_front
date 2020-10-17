import React, { Fragment } from 'react'
import { ContactForm } from '../components/form/ContactForm'
import { Landing } from '../components/Landing/Landing'

export const HomePage = () => {
    return (
        <Fragment>
            <Landing/>
            <ContactForm/>
        </Fragment>
    )
}
