import React, { Fragment } from 'react'
import CheckboxForm from '../components/CheckboxForm/CheckboxForm'
import { ContactForm } from '../components/form/ContactForm'
import { Landing } from '../components/Landing/Landing'

export const HomePage = () => {
    return (
        <Fragment>
            <Landing/>
            <ContactForm/>
            <CheckboxForm/>
        </Fragment>
    )
}
