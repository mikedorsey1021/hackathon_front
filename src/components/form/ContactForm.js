import React,{useState} from 'react'
import { ButtonComponent } from '../Button/Button';
import style from 'styled-components';
import { FormInput } from '../FormInput/FormInput';

export const ContactForm = () => {

    const [formData, setData] = useState({
        organization: '',
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        website: '',
        fax: '',
        phone: '',
        extension: '',
        error: []
    })

    const {
        organization,
        name,
        email,
        address,
        city,
        state,
        zip,
        website,
        fax,
        phone,
        extension,
        error
    } = formData

    const handleChange = evt => {
        setData({
            ...formData,
             [evt.target.name] : evt.target.value
            })
}

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formData)
    }

    return (
        <FormContainer>
            <h1>Join Our Partner Database</h1>
            <FormItem onSubmit={evt => handleSubmit(evt)}>
                <InputContainer >
                    <FormInput
                        type='text'
                        name='organization'
                        value={organization}
                        onChange={evt => handleChange(evt)}
                        placeholder="Organization Name"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='name'
                        type='text'
                        value={name}
                        onChange={evt => handleChange(evt)}
                        placeholder="Contact Name"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        onChange={evt => handleChange(evt)}
                        placeholder="Email"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='address'
                        type='text'
                        value={address}
                        onChange={evt => handleChange(evt)}
                        placeholder="Street Address"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='city'
                        type='text'
                        value={city}
                        onChange={evt => handleChange(evt)}
                        placeholder="City"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='state'
                        type='text'
                        value={state}
                        onChange={evt => handleChange(evt)}
                        placeholder="State"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='zip'
                        type='number'
                        value={zip}
                        onChange={evt => handleChange(evt)}
                        placeholder="Zip Code"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='website'
                        type='text'
                        value={website}
                        onChange={evt => handleChange(evt)}
                        placeholder="Website"
                        error={error}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='fax'
                        type='number'
                        value={fax}
                        onChange={evt => handleChange(evt)}
                        placeholder="Fax (xxx)xxx-xxxx"
                    />
                </InputContainer>
                <InputContainer>
                    <FormInput
                        name='phone'
                        type='text'
                        value={phone}
                        onChange={evt => handleChange(evt)}
                        placeholder="Phone:(xxx)xxx-xxxx"
                        error={error}
                        required
                    />
                    <InputContainer>
                        <FormInput
                            name='extension '
                            type='number'
                            value={extension}
                            onChange={evt => handleChange(evt)}
                            placeholder="Phone Extension "
                        />
                    </InputContainer>
                </InputContainer>
                <ButtonComponent title={'Submit'} color={'signup'} />
            </FormItem>
        </FormContainer>
    )
}

const FormContainer = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
`;

const FormItem = style.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: auto;
    margin: 40px;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 10px;

`

const InputContainer = style.div`
    margin: 10px;
    padding: 5px;
`